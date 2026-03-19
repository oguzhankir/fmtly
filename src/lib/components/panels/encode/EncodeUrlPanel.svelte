<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		processURLEncode,
		shouldUseURLWorker,
		URL_WORKER_THRESHOLD_BYTES,
		type URLEncodeAction,
		type URLEncodeMode,
		type URLEncodeOptions,
		type URLEncodeError,
		type URLEncodeResult,
		type URLEncodeWarningCode,
		type URLEncodeWorkerRequest,
		type URLEncodeWorkerResponse
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
		resolve: (value: URLEncodeResult) => void;
		reject: (reason: Error) => void;
	};

	const DEFAULT_SAMPLE_INPUT =
		'https://fmtly.dev/search?q=hello world&redirect=%2Fdocs%2Fstart%3Ftab%3Durl+tools#quick start';

	const DEFAULT_URL_OPTIONS: URLEncodeOptions = {
		encodeSpacesAsPlus: false,
		decodePlusAsSpace: true
	};

	const actionOptions: Array<{ value: URLEncodeAction; labelKey: string }> = [
		{ value: 'encode', labelKey: 'ui.encode_url.action.encode' },
		{ value: 'decode', labelKey: 'ui.encode_url.action.decode' }
	];

	const modeOptions: Array<{ value: URLEncodeMode; labelKey: string }> = [
		{ value: 'component', labelKey: 'ui.encode_url.mode.component' },
		{ value: 'full_url', labelKey: 'ui.encode_url.mode.full_url' }
	];

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let selectedAction = $state<URLEncodeAction>('encode');
	let selectedMode = $state<URLEncodeMode>('component');
	let urlOptions = $state<URLEncodeOptions>({ ...DEFAULT_URL_OPTIONS });
	let conversionResult = $state<URLEncodeResult>(
		processURLEncode('', 'encode', 'component', DEFAULT_URL_OPTIONS)
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
		`${formatByteSize($inputByteSize)} · ${$input.length.toLocaleString()} ${$t('ui.encode_url.characters', 'chars')}`
	);
	let outputStatusLine = $derived(
		`${formatByteSize(conversionResult.metrics.outputBytes)} · ${conversionResult.output.length.toLocaleString()} ${$t('ui.encode_url.characters', 'chars')}`
	);
	let isWorkerEligible = $derived(shouldUseURLWorker($input));
	let workerThresholdLabel = $derived(formatByteSize(URL_WORKER_THRESHOLD_BYTES));
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
		const mode = selectedMode;
		const optionsSnapshot: URLEncodeOptions = { ...urlOptions };
		const token = ++latestProcessToken;
		const useWorker = shouldUseURLWorker(inputValue);

		isProcessing = useWorker;
		void processInput(token, inputValue, action, mode, optionsSnapshot, useWorker);
	});

	async function processInput(
		token: number,
		inputValue: string,
		action: URLEncodeAction,
		mode: URLEncodeMode,
		options: URLEncodeOptions,
		useWorker: boolean
	): Promise<void> {
		if (!useWorker) {
			const nextResult = processURLEncode(inputValue, action, mode, options);
			if (token !== latestProcessToken) return;
			conversionResult = nextResult;
			processedByWorker = false;
			isProcessing = false;
			return;
		}

		try {
			const workerResult = await runWorker(inputValue, action, mode, options);
			if (token !== latestProcessToken) return;
			conversionResult = workerResult;
			processedByWorker = true;
		} catch {
			if (token !== latestProcessToken) return;
			conversionResult = processURLEncode(inputValue, action, mode, options);
			processedByWorker = false;
			addToast(
				'error',
				$t(
					'ui.encode_url.worker_failed',
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

		workerInstance = new Worker(new URL('../../../workers/encode-url.worker.ts', import.meta.url), {
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

	function handleWorkerMessage(event: MessageEvent<URLEncodeWorkerResponse>): void {
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
		action: URLEncodeAction,
		mode: URLEncodeMode,
		options: URLEncodeOptions
	): Promise<URLEncodeResult> {
		const worker = ensureWorker();

		return new Promise<URLEncodeResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });

			const request: URLEncodeWorkerRequest = {
				id: requestId,
				input: inputValue,
				action,
				mode,
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
		const nextAction = target.dataset.action as URLEncodeAction | undefined;
		if (!nextAction) return;
		selectedAction = nextAction;
	}

	function handleModeClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const nextMode = target.dataset.mode as URLEncodeMode | undefined;
		if (!nextMode) return;
		selectedMode = nextMode;
	}

	function handleEncodeSpacesAsPlusChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		urlOptions = {
			...urlOptions,
			encodeSpacesAsPlus: target.checked
		};
	}

	function handleDecodePlusAsSpaceChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		urlOptions = {
			...urlOptions,
			decodePlusAsSpace: target.checked
		};
	}

	function loadSampleInput(): void {
		input.set(DEFAULT_SAMPLE_INPUT);
		selectedAction = 'encode';
		selectedMode = 'component';
		urlOptions = { ...DEFAULT_URL_OPTIONS };
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
		addToast('success', $t('ui.encode_url.toast.applied', 'Output applied to input'));
	}

	function clearInputValue(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('ui.encode_url.tab_label', 'URL') },
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

	function getWarningMessage(code: URLEncodeWarningCode): string {
		switch (code) {
			case 'no_changes_detected':
				return $t(
					'ui.encode_url.warning.no_changes',
					'No changes detected for the selected mode and action.'
				);
			default:
				return '';
		}
	}

	function getErrorMessage(error: URLEncodeError | null): string {
		if (!error) return '';

		switch (error.code) {
			case 'invalid_url_encoding':
				return $t(
					'ui.encode_url.error.invalid_url_encoding',
					{ detail: error.detail },
					'Invalid URL input: {detail}'
				);
			default:
				return $t(
					'ui.encode_url.error.invalid_url_encoding',
					{ detail: error.detail },
					'Invalid URL input: {detail}'
				);
		}
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
		<div class="grid grid-cols-1 gap-[var(--space-3)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
			<div class="flex flex-col gap-[var(--space-2)]">
				<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
					{$t('ui.encode_url.action_label', 'Action')}
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

			<div class="flex flex-col gap-[var(--space-2)]">
				<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
					{$t('ui.encode_url.mode_label', 'Mode')}
				</span>
				<div class="flex flex-wrap gap-[var(--space-2)]">
					{#each modeOptions as option}
						<button
							type="button"
							data-mode={option.value}
							onclick={handleModeClick}
							class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(selectedMode === option.value)}`}
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
						checked={urlOptions.encodeSpacesAsPlus}
						onchange={handleEncodeSpacesAsPlusChange}
						class="h-4 w-4 rounded border-[var(--border-default)]"
					/>
					{$t('ui.encode_url.option.encode_spaces_as_plus', 'Encode spaces as +')}
				</label>
			{/if}

			{#if selectedAction === 'decode'}
				<label class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						checked={urlOptions.decodePlusAsSpace}
						onchange={handleDecodePlusAsSpaceChange}
						class="h-4 w-4 rounded border-[var(--border-default)]"
					/>
					{$t('ui.encode_url.option.decode_plus_as_space', 'Decode + as space')}
				</label>
			{/if}
		</div>

		<div class="mt-[var(--space-2)] flex flex-wrap items-center justify-between gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
			{#if isWorkerEligible}
				<span>
					{$t(
						'ui.encode_url.worker_active',
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
					{$t('ui.encode_url.button.swap_direction', 'Swap direction')}
				</button>
				<button
					type="button"
					onclick={applyOutputToInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<ArrowLeftRight size={14} />
					{$t('ui.encode_url.button.apply_output', 'Apply output to input')}
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

	<div class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-2 xl:divide-x xl:divide-[var(--border-default)]">
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.encode_url.input_label', 'Input')}</span>
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
				placeholder={$t('ui.encode_url.input_placeholder', 'Paste text, query params, or a full URL...')}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.encode_url.output_label', 'Output')}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.actions.running', 'Running…')}</span>
					{/if}
					{#if processedByWorker}
						<span class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[var(--text-secondary)]">
							{$t('ui.encode_url.worker_badge', 'Worker')}
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
				placeholder={$t('ui.encode_url.output_placeholder', 'Encoded or decoded output appears here...')}
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
