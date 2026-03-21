<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		processHTMLEntities,
		shouldUseHTMLEntityWorker,
		HTML_ENTITY_WORKER_THRESHOLD_BYTES,
		type HTMLEntityAction,
		type HTMLEntityEncodeFormat,
		type HTMLEntityEncodeScope,
		type HTMLEntityApostropheStyle,
		type HTMLEntityDecodeMode,
		type HTMLEntityEncodeOptions,
		type HTMLEntityDecodeOptions,
		type HTMLEntityError,
		type HTMLEntityResult,
		type HTMLEntityWarningCode,
		type HTMLEntityWorkerRequest,
		type HTMLEntityWorkerResponse
	} from '$engines/encode/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { ArrowLeftRight, Copy, Eraser, RefreshCw } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: HTMLEntityResult) => void;
		reject: (reason: Error) => void;
	};

	const DEFAULT_SAMPLE_INPUT =
		'<p title="Tom & Jerry">café "100%" safe: <code>&lt;tag&gt;</code> ©</p>';

	const DEFAULT_ENCODE: HTMLEntityEncodeOptions = {
		format: 'named',
		scope: 'essentials',
		apostropheStyle: 'numeric',
		encodeLineBreaks: false,
		encodeApostrophe: true
	};

	const DEFAULT_DECODE: HTMLEntityDecodeOptions = {
		mode: 'permissive'
	};

	const actionOptions: Array<{ value: HTMLEntityAction; labelKey: string }> = [
		{ value: 'encode', labelKey: 'ui.encode_html_entities.action.encode' },
		{ value: 'decode', labelKey: 'ui.encode_html_entities.action.decode' }
	];

	const formatOptions: Array<{ value: HTMLEntityEncodeFormat; labelKey: string }> = [
		{ value: 'named', labelKey: 'ui.encode_html_entities.format.named' },
		{ value: 'decimal', labelKey: 'ui.encode_html_entities.format.decimal' },
		{ value: 'hex', labelKey: 'ui.encode_html_entities.format.hex' }
	];

	const scopeOptions: Array<{ value: HTMLEntityEncodeScope; labelKey: string }> = [
		{ value: 'essentials', labelKey: 'ui.encode_html_entities.scope.essentials' },
		{ value: 'all_non_ascii', labelKey: 'ui.encode_html_entities.scope.all_non_ascii' }
	];

	const apostropheOptions: Array<{ value: HTMLEntityApostropheStyle; labelKey: string }> = [
		{ value: 'numeric', labelKey: 'ui.encode_html_entities.apostrophe.numeric' },
		{ value: 'apos', labelKey: 'ui.encode_html_entities.apostrophe.apos' }
	];

	const decodeModeOptions: Array<{ value: HTMLEntityDecodeMode; labelKey: string }> = [
		{ value: 'permissive', labelKey: 'ui.encode_html_entities.decode.permissive' },
		{ value: 'strict', labelKey: 'ui.encode_html_entities.decode.strict' }
	];

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let selectedAction = $state<HTMLEntityAction>('encode');
	let encodeOptions = $state<HTMLEntityEncodeOptions>({ ...DEFAULT_ENCODE });
	let decodeOptions = $state<HTMLEntityDecodeOptions>({ ...DEFAULT_DECODE });
	let conversionResult = $state<HTMLEntityResult>(
		processHTMLEntities('', 'encode', { encode: DEFAULT_ENCODE, decode: DEFAULT_DECODE })
	);
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new Map<number, PendingWorkerRequest>();

	let inputStatusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${$input.length.toLocaleString()} ${$t('ui.encode_html_entities.characters', 'chars')}`
	);
	let outputStatusLine = $derived(
		`${formatByteSize(conversionResult.metrics.outputBytes)} · ${conversionResult.output.length.toLocaleString()} ${$t('ui.encode_html_entities.characters', 'chars')}`
	);
	let isWorkerEligible = $derived(shouldUseHTMLEntityWorker($input));
	let workerThresholdLabel = $derived(formatByteSize(HTML_ENTITY_WORKER_THRESHOLD_BYTES));
	let warningMessages = $derived(
		conversionResult.warnings
			.map((warningCode) => getWarningMessage(warningCode))
			.filter((warningMessage) => warningMessage.length > 0)
	);
	let errorMessage = $derived(getErrorMessage(conversionResult.error));

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		if ($input.length === 0) {
			input.set(DEFAULT_SAMPLE_INPUT);
		}
	});

	onDestroy(() => {
		releaseWorker();
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	$effect(() => {
		const inputValue = $input;
		const action = selectedAction;
		const encodeSnapshot: HTMLEntityEncodeOptions = { ...encodeOptions };
		const decodeSnapshot: HTMLEntityDecodeOptions = { ...decodeOptions };
		const token = ++latestProcessToken;
		const useWorker = shouldUseHTMLEntityWorker(inputValue);
		isProcessing = useWorker;
		void processInput(token, inputValue, action, encodeSnapshot, decodeSnapshot, useWorker);
	});

	async function processInput(
		token: number,
		inputValue: string,
		action: HTMLEntityAction,
		encode: HTMLEntityEncodeOptions,
		decode: HTMLEntityDecodeOptions,
		useWorker: boolean
	): Promise<void> {
		if (!useWorker) {
			const nextResult = processHTMLEntities(inputValue, action, { encode, decode });
			if (token !== latestProcessToken) return;
			conversionResult = nextResult;
			processedByWorker = false;
			isProcessing = false;
			return;
		}

		try {
			const workerResult = await runWorker(inputValue, action, encode, decode);
			if (token !== latestProcessToken) return;
			conversionResult = workerResult;
			processedByWorker = true;
		} catch {
			if (token !== latestProcessToken) return;
			conversionResult = processHTMLEntities(inputValue, action, { encode, decode });
			processedByWorker = false;
			addToast(
				'error',
				$t(
					'ui.encode_html_entities.worker_failed',
					'Worker processing failed. Falling back to main thread processing.'
				)
			);
		} finally {
			if (token === latestProcessToken) {
				isProcessing = false;
			}
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance !== null) return workerInstance;
		workerInstance = new Worker(
			new URL('../../../workers/encode-html-entities.worker.ts', import.meta.url),
			{ type: 'module' }
		);
		workerInstance.onmessage = handleWorkerMessage;
		workerInstance.onerror = handleWorkerError;
		return workerInstance;
	}

	function releaseWorker(): void {
		if (workerInstance) {
			workerInstance.terminate();
			workerInstance = null;
		}
		for (const pending of pendingWorkerRequests.values()) {
			pending.reject(new Error('Worker terminated'));
		}
		pendingWorkerRequests.clear();
	}

	function handleWorkerMessage(event: MessageEvent<HTMLEntityWorkerResponse>): void {
		const message = event.data;
		const pending = pendingWorkerRequests.get(message.id);
		if (!pending) return;
		pendingWorkerRequests.delete(message.id);
		if (message.error) {
			pending.reject(new Error(message.error));
			return;
		}
		if (!message.result) {
			pending.reject(new Error('Worker returned no result'));
			return;
		}
		pending.resolve(message.result);
	}

	function handleWorkerError(): void {
		for (const pending of pendingWorkerRequests.values()) {
			pending.reject(new Error('Worker runtime error'));
		}
		pendingWorkerRequests.clear();
	}

	function runWorker(
		inputValue: string,
		action: HTMLEntityAction,
		encode: HTMLEntityEncodeOptions,
		decode: HTMLEntityDecodeOptions
	): Promise<HTMLEntityResult> {
		const worker = ensureWorker();
		return new Promise<HTMLEntityResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });
			const request: HTMLEntityWorkerRequest = {
				id: requestId,
				input: inputValue,
				action,
				options: { encode, decode }
			};
			worker.postMessage(request);
		});
	}

	function handleTextInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		input.set(target.value);
	}

	function handleActionClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const nextAction = target.dataset.action as HTMLEntityAction | undefined;
		if (!nextAction) return;
		selectedAction = nextAction;
	}

	function handleFormatClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const v = target.dataset.format as HTMLEntityEncodeFormat | undefined;
		if (!v) return;
		encodeOptions = { ...encodeOptions, format: v };
	}

	function handleScopeClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const v = target.dataset.scope as HTMLEntityEncodeScope | undefined;
		if (!v) return;
		encodeOptions = { ...encodeOptions, scope: v };
	}

	function handleApostropheClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const v = target.dataset.apostrophe as HTMLEntityApostropheStyle | undefined;
		if (!v) return;
		encodeOptions = { ...encodeOptions, apostropheStyle: v };
	}

	function handleDecodeModeClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const v = target.dataset.decodeMode as HTMLEntityDecodeMode | undefined;
		if (!v) return;
		decodeOptions = { ...decodeOptions, mode: v };
	}

	function handleEncodeLineBreaksChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		encodeOptions = { ...encodeOptions, encodeLineBreaks: target.checked };
	}

	function handleEncodeApostropheChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		encodeOptions = { ...encodeOptions, encodeApostrophe: target.checked };
	}

	function loadSampleInput(): void {
		input.set(DEFAULT_SAMPLE_INPUT);
		selectedAction = 'encode';
		encodeOptions = { ...DEFAULT_ENCODE };
		decodeOptions = { ...DEFAULT_DECODE };
	}

	function swapDirection(): void {
		selectedAction = selectedAction === 'encode' ? 'decode' : 'encode';
	}

	function applyOutputToInput(): void {
		if (!conversionResult.output) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		input.set(conversionResult.output);
		addToast('success', $t('ui.encode_html_entities.toast.applied', 'Output applied to input'));
	}

	function clearInputValue(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('ui.encode_html_entities.tab_label', 'HTML entities') },
			'Clear the current input?'
		);
		confirmMessage = $t('ui.confirm.clear_description', 'This action cannot be undone.');
		confirmModalOpen = true;
	}

	function doClearInput(): void {
		input.set('');
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
	}

	function noop(): void {
		return;
	}

	async function copyOutput(): Promise<void> {
		if (!conversionResult.output) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(conversionResult.output);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	function getWarningMessage(code: HTMLEntityWarningCode): string {
		switch (code) {
			case 'no_changes_detected':
				return $t(
					'ui.encode_html_entities.warning.no_changes',
					'No changes detected for the selected options.'
				);
			default:
				return '';
		}
	}

	function getErrorMessage(error: HTMLEntityError | null): string {
		if (!error) return '';
		const params = { detail: error.detail, offset: error.offset };
		if (error.code === 'incomplete_reference') {
			return $t(
				'ui.encode_html_entities.error.incomplete_reference',
				params,
				'{detail} (offset {offset})'
			);
		}
		return $t('ui.encode_html_entities.error.invalid_entity', params, '{detail} (offset {offset})');
	}

	function getChoiceButtonClass(active: boolean): string {
		return active
			? 'border-[var(--color-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)]'
			: 'border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]';
	}
</script>

<div class="flex h-full w-full flex-col">
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="encode"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
		<div class="flex flex-col gap-[var(--space-3)]">
			<div class="flex flex-col gap-[var(--space-2)]">
				<span
					class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
				>
					{$t('ui.encode_html_entities.action_label', 'Action')}
				</span>
				<div class="flex flex-wrap gap-[var(--space-2)]">
					{#each actionOptions as option}
						<button
							type="button"
							data-action={option.value}
							onclick={handleActionClick}
							class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(selectedAction === option.value)}`}
						>
							{$t(option.labelKey, option.value)}
						</button>
					{/each}
				</div>
			</div>

			{#if selectedAction === 'encode'}
				<div class="grid grid-cols-1 gap-[var(--space-3)] xl:grid-cols-2">
					<div class="flex flex-col gap-[var(--space-2)]">
						<span
							class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
						>
							{$t('ui.encode_html_entities.format_label', 'Output format')}
						</span>
						<div class="flex flex-wrap gap-[var(--space-2)]">
							{#each formatOptions as option}
								<button
									type="button"
									data-format={option.value}
									onclick={handleFormatClick}
									class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(encodeOptions.format === option.value)}`}
								>
									{$t(option.labelKey, option.value)}
								</button>
							{/each}
						</div>
					</div>
					<div class="flex flex-col gap-[var(--space-2)]">
						<span
							class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
						>
							{$t('ui.encode_html_entities.scope_label', 'Encode scope')}
						</span>
						<div class="flex flex-wrap gap-[var(--space-2)]">
							{#each scopeOptions as option}
								<button
									type="button"
									data-scope={option.value}
									onclick={handleScopeClick}
									class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(encodeOptions.scope === option.value)}`}
								>
									{$t(option.labelKey, option.value)}
								</button>
							{/each}
						</div>
					</div>
				</div>

				{#if encodeOptions.format === 'named'}
					<div class="flex flex-col gap-[var(--space-2)]">
						<span
							class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
						>
							{$t('ui.encode_html_entities.apostrophe_label', 'Apostrophe')}
						</span>
						<div class="flex flex-wrap gap-[var(--space-2)]">
							{#each apostropheOptions as option}
								<button
									type="button"
									data-apostrophe={option.value}
									onclick={handleApostropheClick}
									class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(encodeOptions.apostropheStyle === option.value)}`}
								>
									{$t(option.labelKey, option.value)}
								</button>
							{/each}
						</div>
					</div>
				{/if}

				<div class="grid grid-cols-1 gap-[var(--space-2)] md:grid-cols-2">
					<label
						class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]"
					>
						<input
							type="checkbox"
							checked={encodeOptions.encodeLineBreaks}
							onchange={handleEncodeLineBreaksChange}
							class="h-4 w-4 rounded border-[var(--border-default)]"
						/>
						{$t('ui.encode_html_entities.option.encode_line_breaks', 'Encode CR/LF as numeric entities')}
					</label>
					<label
						class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]"
					>
						<input
							type="checkbox"
							checked={encodeOptions.encodeApostrophe}
							onchange={handleEncodeApostropheChange}
							class="h-4 w-4 rounded border-[var(--border-default)]"
						/>
						{$t('ui.encode_html_entities.option.encode_apostrophe', 'Encode apostrophe (U+0027)')}
					</label>
				</div>
			{:else}
				<div class="flex flex-col gap-[var(--space-2)]">
					<span
						class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
					>
						{$t('ui.encode_html_entities.decode_mode_label', 'Decode mode')}
					</span>
					<div class="flex flex-wrap gap-[var(--space-2)]">
						{#each decodeModeOptions as option}
							<button
								type="button"
								data-decode-mode={option.value}
								onclick={handleDecodeModeClick}
								class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(decodeOptions.mode === option.value)}`}
							>
								{$t(option.labelKey, option.value)}
							</button>
						{/each}
					</div>
					<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t(
							'ui.encode_html_entities.decode.hint',
							'Strict mode rejects unknown or malformed references. Permissive leaves invalid fragments unchanged.'
						)}
					</p>
				</div>
			{/if}
		</div>

		<div
			class="mt-[var(--space-2)] flex flex-wrap items-center justify-between gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
		>
			{#if isWorkerEligible}
				<span>
					{$t(
						'ui.encode_html_entities.worker_active',
						{ size: workerThresholdLabel },
						'Large input detected (>{size}). Processing runs in a Web Worker.'
					)}
				</span>
			{:else}
				<span></span>
			{/if}
			<div class="flex flex-wrap items-center gap-[var(--space-2)]">
				<button
					type="button"
					onclick={swapDirection}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<RefreshCw size={14} />
					{$t('ui.encode_html_entities.button.swap_direction', 'Swap direction')}
				</button>
				<button
					type="button"
					onclick={applyOutputToInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<ArrowLeftRight size={14} />
					{$t('ui.encode_html_entities.button.apply_output', 'Apply output to input')}
				</button>
				<button
					type="button"
					onclick={loadSampleInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					{$t('ui.actions.sample', 'Sample')}
				</button>
			</div>
		</div>
	</div>

	<div
		class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-2 xl:divide-x xl:divide-[var(--border-default)]"
	>
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div
				class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
			>
				<span>{$t('ui.encode_html_entities.input_label', 'Input')}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					<span>{inputStatusLine}</span>
					<button
						type="button"
						onclick={clearInputValue}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Eraser size={14} />
						{$t('ui.actions.clear', 'Clear')}
					</button>
				</div>
			</div>
			<textarea
				value={$input}
				oninput={handleTextInput}
				class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t(
					'ui.encode_html_entities.input_placeholder',
					'Paste text or HTML snippets with entities...'
				)}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div
				class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
			>
				<span>{$t('ui.encode_html_entities.output_label', 'Output')}</span>
				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.actions.running', 'Running…')}</span>
					{/if}
					{#if processedByWorker}
						<span
							class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[var(--text-secondary)]"
						>
							{$t('ui.encode_html_entities.worker_badge', 'Worker')}
						</span>
					{/if}
					<span>{outputStatusLine}</span>
					<button
						type="button"
						onclick={copyOutput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Copy size={14} />
						{$t('ui.actions.copy', 'Copy')}
					</button>
				</div>
			</div>

			{#if errorMessage}
				<div
					class="mx-[var(--space-3)] mt-[var(--space-3)] rounded-[var(--radius-md)] border border-[var(--border-danger)] bg-[var(--bg-danger-subtle)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-danger)]"
				>
					{errorMessage}
				</div>
			{/if}

			{#if warningMessages.length > 0}
				<div
					class="mx-[var(--space-3)] mt-[var(--space-3)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]"
				>
					{#each warningMessages as message}
						<p>{message}</p>
					{/each}
				</div>
			{/if}

			<textarea
				readonly
				value={conversionResult.output}
				class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t(
					'ui.encode_html_entities.output_placeholder',
					'Encoded or decoded output appears here...'
				)}
				spellcheck="false"
			></textarea>
		</div>
	</div>
</div>

<ConfirmModal
	bind:open={confirmModalOpen}
	title={confirmTitle}
	message={confirmMessage}
	onConfirm={doClearInput}
	onCancel={noop}
/>
