<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		processBase64,
		shouldUseBase64Worker,
		BASE64_WORKER_THRESHOLD_BYTES,
		type Base64Action,
		type Base64Variant,
		type Base64Options,
		type Base64Error,
		type Base64Result,
		type Base64WarningCode,
		type Base64WorkerRequest,
		type Base64WorkerResponse
	} from '$engines/encode/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { ArrowLeftRight, Copy, Eraser, RefreshCw } from 'lucide-svelte';
	import EncodeToolFrame from './EncodeToolFrame.svelte';
	import { encodeChoiceButtonClass } from './encode-panel-ui.js';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: Base64Result) => void;
		reject: (reason: Error) => void;
	};

	const DEFAULT_SAMPLE_INPUT = 'Hello fmtly 👋 — Encode me safely!';

	const DEFAULT_BASE64_OPTIONS: Base64Options = {
		omitPadding: false,
		ignoreWhitespace: true
	};

	const actionOptions: Array<{ value: Base64Action; labelKey: string }> = [
		{ value: 'encode', labelKey: 'ui.base64.action.encode' },
		{ value: 'decode', labelKey: 'ui.base64.action.decode' }
	];

	const variantOptions: Array<{ value: Base64Variant; labelKey: string }> = [
		{ value: 'standard', labelKey: 'ui.base64.variant.standard' },
		{ value: 'url_safe', labelKey: 'ui.base64.variant.url_safe' }
	];

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let selectedAction = $state<Base64Action>('encode');
	let selectedVariant = $state<Base64Variant>('standard');
	let base64Options = $state<Base64Options>({ ...DEFAULT_BASE64_OPTIONS });
	let conversionResult = $state<Base64Result>(
		processBase64('', 'encode', 'standard', DEFAULT_BASE64_OPTIONS)
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
		`${formatByteSize($inputByteSize)} · ${$input.length.toLocaleString()} ${$t('ui.base64.characters', 'chars')}`
	);
	let outputStatusLine = $derived(
		`${formatByteSize(conversionResult.metrics.outputBytes)} · ${conversionResult.output.length.toLocaleString()} ${$t('ui.base64.characters', 'chars')}`
	);
	let isWorkerEligible = $derived(shouldUseBase64Worker($input));
	let workerThresholdLabel = $derived(formatByteSize(BASE64_WORKER_THRESHOLD_BYTES));
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
		const variant = selectedVariant;
		const optionsSnapshot: Base64Options = { ...base64Options };
		const token = ++latestProcessToken;
		const useWorker = shouldUseBase64Worker(inputValue);

		isProcessing = useWorker;
		void processInput(token, inputValue, action, variant, optionsSnapshot, useWorker);
	});

	async function processInput(
		token: number,
		inputValue: string,
		action: Base64Action,
		variant: Base64Variant,
		options: Base64Options,
		useWorker: boolean
	): Promise<void> {
		if (!useWorker) {
			const nextResult = processBase64(inputValue, action, variant, options);
			if (token !== latestProcessToken) return;
			conversionResult = nextResult;
			processedByWorker = false;
			isProcessing = false;
			return;
		}

		try {
			const workerResult = await runWorker(inputValue, action, variant, options);
			if (token !== latestProcessToken) return;
			conversionResult = workerResult;
			processedByWorker = true;
		} catch {
			if (token !== latestProcessToken) return;
			conversionResult = processBase64(inputValue, action, variant, options);
			processedByWorker = false;
			addToast(
				'error',
				$t(
					'ui.base64.worker_failed',
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
		if (workerInstance !== null) {
			return workerInstance;
		}

		workerInstance = new Worker(new URL('../../../workers/encode-base64.worker.ts', import.meta.url), {
			type: 'module'
		});
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

	function handleWorkerMessage(event: MessageEvent<Base64WorkerResponse>): void {
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
		action: Base64Action,
		variant: Base64Variant,
		options: Base64Options
	): Promise<Base64Result> {
		const worker = ensureWorker();

		return new Promise<Base64Result>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });

			const request: Base64WorkerRequest = {
				id: requestId,
				input: inputValue,
				action,
				variant,
				options
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
		const nextAction = target.dataset.action as Base64Action | undefined;
		if (!nextAction) return;
		selectedAction = nextAction;
	}

	function handleVariantClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const nextVariant = target.dataset.variant as Base64Variant | undefined;
		if (!nextVariant) return;
		selectedVariant = nextVariant;
	}

	function handleOmitPaddingChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		base64Options = {
			...base64Options,
			omitPadding: target.checked
		};
	}

	function handleIgnoreWhitespaceChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		base64Options = {
			...base64Options,
			ignoreWhitespace: target.checked
		};
	}

	function loadSampleInput(): void {
		input.set(DEFAULT_SAMPLE_INPUT);
		selectedAction = 'encode';
		selectedVariant = 'standard';
		base64Options = { ...DEFAULT_BASE64_OPTIONS };
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
		addToast('success', $t('ui.base64.toast.applied', 'Output applied to input'));
	}

	function clearInputValue(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('ui.base64.tab_label', 'Base64') },
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

	function getWarningMessage(code: Base64WarningCode): string {
		switch (code) {
			case 'no_changes_detected':
				return $t(
					'ui.base64.warning.no_changes',
					'No changes detected for the selected mode and action.'
				);
			case 'whitespace_ignored':
				return $t(
					'ui.base64.warning.whitespace_ignored',
					'Whitespace characters were removed before decoding.'
				);
			case 'padding_auto_added':
				return $t(
					'ui.base64.warning.padding_auto_added',
					'Missing padding was added automatically before decoding.'
				);
			case 'alphabet_normalized':
				return $t(
					'ui.base64.warning.alphabet_normalized',
					'URL-safe characters were normalized to standard Base64 for decoding.'
				);
			default:
				return '';
		}
	}

	function getErrorMessage(error: Base64Error | null): string {
		if (!error) return '';

		switch (error.code) {
			case 'invalid_base64_characters':
				return $t(
					'ui.base64.error.invalid_base64_characters',
					{ detail: error.detail },
					'Invalid Base64 input: {detail}'
				);
			case 'invalid_base64_length':
				return $t(
					'ui.base64.error.invalid_base64_length',
					{ detail: error.detail },
					'Invalid Base64 length: {detail}'
				);
			case 'invalid_utf8_output':
				return $t(
					'ui.base64.error.invalid_utf8_output',
					{ detail: error.detail },
					'Decoded bytes are not valid UTF-8 text: {detail}'
				);
			default:
				return $t(
					'ui.base64.error.invalid_base64_characters',
					{ detail: error.detail },
					'Invalid Base64 input: {detail}'
				);
		}
	}

</script>

<div class="flex h-full min-h-0 w-full flex-col">
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="encode"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<EncodeToolFrame>
		{#snippet toolbar()}
		<div class="grid grid-cols-1 gap-[var(--space-3)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
			<div class="flex flex-col gap-[var(--space-2)]">
				<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
					{$t('ui.base64.action_label', 'Action')}
				</span>
				<div class="flex flex-wrap gap-[var(--space-2)]">
					{#each actionOptions as option}
						<button
							type="button"
							data-action={option.value}
							onclick={handleActionClick}
							class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${encodeChoiceButtonClass(selectedAction === option.value)}`}
						>
							{$t(option.labelKey, option.value)}
						</button>
					{/each}
				</div>
			</div>

			<div class="flex flex-col gap-[var(--space-2)]">
				<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
					{$t('ui.base64.variant_label', 'Variant')}
				</span>
				<div class="flex flex-wrap gap-[var(--space-2)]">
					{#each variantOptions as option}
						<button
							type="button"
							data-variant={option.value}
							onclick={handleVariantClick}
							class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${encodeChoiceButtonClass(selectedVariant === option.value)}`}
						>
							{$t(option.labelKey, option.value)}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<div class="mt-[var(--space-3)] grid grid-cols-1 gap-[var(--space-2)] md:grid-cols-2 xl:grid-cols-3">
			{#if selectedAction === 'encode'}
				<label class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						checked={base64Options.omitPadding}
						onchange={handleOmitPaddingChange}
						class="h-4 w-4 rounded border-[var(--border-default)]"
					/>
					{$t('ui.base64.option.omit_padding', 'Remove trailing = padding')}
				</label>
			{/if}

			{#if selectedAction === 'decode'}
				<label class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						checked={base64Options.ignoreWhitespace}
						onchange={handleIgnoreWhitespaceChange}
						class="h-4 w-4 rounded border-[var(--border-default)]"
					/>
					{$t('ui.base64.option.ignore_whitespace', 'Ignore line breaks and spaces while decoding')}
				</label>
			{/if}
		</div>

		<div class="mt-[var(--space-2)] flex flex-wrap items-center justify-between gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
			{#if isWorkerEligible}
				<span>
					{$t(
						'ui.base64.worker_active',
						{ size: workerThresholdLabel },
						'Large input detected (>{size}). Processing runs in a Web Worker.'
					)}
				</span>
			{:else}
				<span></span>
			{/if}
			<div class="flex items-center gap-[var(--space-2)]">
				<button
					type="button"
					onclick={swapDirection}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<RefreshCw size={14} />
					{$t('ui.base64.button.swap_direction', 'Swap direction')}
				</button>
				<button
					type="button"
					onclick={applyOutputToInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<ArrowLeftRight size={14} />
					{$t('ui.base64.button.apply_output', 'Apply output to input')}
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
		{/snippet}

		{#snippet main()}
	<div class="grid h-full min-h-0 flex-1 grid-cols-1 xl:grid-cols-2 xl:divide-x xl:divide-[var(--border-default)]">
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.base64.input_label', 'Input')}</span>
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
				placeholder={$t('ui.base64.input_placeholder', 'Paste plain text or Base64 content...')}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.base64.output_label', 'Output')}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.actions.running', 'Running…')}</span>
					{/if}
					{#if processedByWorker}
						<span class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[var(--text-secondary)]">
							{$t('ui.base64.worker_badge', 'Worker')}
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
				<div class="mx-[var(--space-3)] mt-[var(--space-3)] rounded-[var(--radius-md)] border border-[var(--border-danger)] bg-[var(--bg-danger-subtle)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-danger)]">
					{errorMessage}
				</div>
			{/if}

			{#if warningMessages.length > 0}
				<div class="mx-[var(--space-3)] mt-[var(--space-3)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					{#each warningMessages as message}
						<p>{message}</p>
					{/each}
				</div>
			{/if}

			<textarea
				readonly
				value={conversionResult.output}
				class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t('ui.base64.output_placeholder', 'Encoded or decoded output appears here...')}
				spellcheck="false"
			></textarea>
		</div>
	</div>
		{/snippet}
	</EncodeToolFrame>
</div>

<ConfirmModal
	bind:open={confirmModalOpen}
	title={confirmTitle}
	message={confirmMessage}
	onConfirm={doClearInput}
	onCancel={noop}
/>
