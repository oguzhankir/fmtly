<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		processHex,
		shouldUseHexWorker,
		HEX_WORKER_THRESHOLD_BYTES,
		type HexAction,
		type HexByteDelimiter,
		type HexEncodeOptions,
		type HexDecodeOptions,
		type HexResult,
		type HexWarningCode,
		type HexError,
		type HexWorkerRequest,
		type HexWorkerResponse
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
		resolve: (value: HexResult) => void;
		reject: (reason: Error) => void;
	};

	const DEFAULT_SAMPLE_INPUT = 'fmtly — UTF-8 safe: café 你好 👋';

	const DEFAULT_ENCODE: HexEncodeOptions = {
		hexCase: 'upper',
		byteDelimiter: 'space',
		bytesPerLine: 0
	};

	const DEFAULT_DECODE: HexDecodeOptions = {
		ignoreWhitespace: true,
		ignoreCommas: true,
		allow0xPrefix: true
	};

	const actionOptions: Array<{ value: HexAction; labelKey: string }> = [
		{ value: 'encode', labelKey: 'ui.hex.action.encode' },
		{ value: 'decode', labelKey: 'ui.hex.action.decode' }
	];

	const delimiterOptions: Array<{ value: HexByteDelimiter; labelKey: string }> = [
		{ value: 'space', labelKey: 'ui.hex.delimiter.space' },
		{ value: 'none', labelKey: 'ui.hex.delimiter.none' },
		{ value: 'comma', labelKey: 'ui.hex.delimiter.comma' }
	];

	const bytesPerLineChoices = [0, 8, 16, 32] as const;

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let selectedAction = $state<HexAction>('encode');
	let encodeOptions = $state<HexEncodeOptions>({ ...DEFAULT_ENCODE });
	let decodeOptions = $state<HexDecodeOptions>({ ...DEFAULT_DECODE });
	let conversionResult = $state<HexResult>(
		processHex('', 'encode', { encode: DEFAULT_ENCODE, decode: DEFAULT_DECODE })
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
		`${formatByteSize($inputByteSize)} · ${$input.length.toLocaleString()} ${$t('ui.hex.characters', 'chars')}`
	);
	let outputStatusLine = $derived(
		`${formatByteSize(conversionResult.metrics.outputBytes)} · ${conversionResult.output.length.toLocaleString()} ${$t('ui.hex.characters', 'chars')}`
	);
	let isWorkerEligible = $derived(shouldUseHexWorker($input));
	let workerThresholdLabel = $derived(formatByteSize(HEX_WORKER_THRESHOLD_BYTES));
	let warningMessages = $derived(
		conversionResult.warnings
			.map((code) => getWarningMessage(code))
			.filter((message) => message.length > 0)
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
		const enc: HexEncodeOptions = { ...encodeOptions };
		const dec: HexDecodeOptions = { ...decodeOptions };
		const token = ++latestProcessToken;
		const useWorker = shouldUseHexWorker(inputValue);
		isProcessing = useWorker;
		void processInput(token, inputValue, action, enc, dec, useWorker);
	});

	async function processInput(
		token: number,
		inputValue: string,
		action: HexAction,
		enc: HexEncodeOptions,
		dec: HexDecodeOptions,
		useWorker: boolean
	): Promise<void> {
		if (!useWorker) {
			const next = processHex(inputValue, action, { encode: enc, decode: dec });
			if (token !== latestProcessToken) return;
			conversionResult = next;
			processedByWorker = false;
			isProcessing = false;
			return;
		}

		try {
			const workerResult = await runWorker(inputValue, action, enc, dec);
			if (token !== latestProcessToken) return;
			conversionResult = workerResult;
			processedByWorker = true;
		} catch {
			if (token !== latestProcessToken) return;
			conversionResult = processHex(inputValue, action, { encode: enc, decode: dec });
			processedByWorker = false;
			addToast(
				'error',
				$t(
					'ui.hex.worker_failed',
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
		workerInstance = new Worker(new URL('../../../workers/encode-hex.worker.ts', import.meta.url), {
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

	function handleWorkerMessage(event: MessageEvent<HexWorkerResponse>): void {
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
		action: HexAction,
		enc: HexEncodeOptions,
		dec: HexDecodeOptions
	): Promise<HexResult> {
		const worker = ensureWorker();
		return new Promise<HexResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });
			const request: HexWorkerRequest = {
				id: requestId,
				input: inputValue,
				action,
				encodeOptions: enc,
				decodeOptions: dec
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
		const next = target.dataset.action as HexAction | undefined;
		if (!next) return;
		selectedAction = next;
	}

	function handleHexCaseClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const v = target.dataset.hexCase as 'upper' | 'lower' | undefined;
		if (!v) return;
		encodeOptions = { ...encodeOptions, hexCase: v };
	}

	function handleDelimiterClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const v = target.dataset.delimiter as HexByteDelimiter | undefined;
		if (!v) return;
		encodeOptions = { ...encodeOptions, byteDelimiter: v };
	}

	function handleBytesPerLineChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		const v = Number.parseInt(target.value, 10);
		if (bytesPerLineChoices.includes(v as (typeof bytesPerLineChoices)[number])) {
			encodeOptions = { ...encodeOptions, bytesPerLine: v };
		}
	}

	function handleDecodeWhitespaceChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		decodeOptions = { ...decodeOptions, ignoreWhitespace: target.checked };
	}

	function handleDecodeCommasChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		decodeOptions = { ...decodeOptions, ignoreCommas: target.checked };
	}

	function handleDecode0xChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		decodeOptions = { ...decodeOptions, allow0xPrefix: target.checked };
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
		addToast('success', $t('ui.hex.toast.applied', 'Output applied to input'));
	}

	function clearInputValue(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('ui.hex.tab_label', 'Hex') },
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

	function getWarningMessage(code: HexWarningCode): string {
		switch (code) {
			case 'whitespace_skipped_decode':
				return $t(
					'ui.hex.warning.whitespace_skipped',
					'Whitespace was skipped while parsing hex digits.'
				);
			case 'commas_skipped_decode':
				return $t('ui.hex.warning.commas_skipped', 'Comma separators were skipped while parsing.');
			default:
				return '';
		}
	}

	function getErrorMessage(error: HexError | null): string {
		if (!error) return '';
		switch (error.code) {
			case 'invalid_hex_digit':
				return $t(
					'ui.hex.error.invalid_hex_digit',
					{ position: error.detail },
					'Invalid character in hex input (near column {position}).'
				);
			case 'odd_hex_length':
				return $t(
					'ui.hex.error.odd_hex_length',
					{ count: error.detail },
					'Odd number of hex digits ({count}). Pairs are required for bytes.'
				);
			case 'invalid_utf8':
				return $t(
					'ui.hex.error.invalid_utf8',
					{ bytes: error.detail },
					'Decoded bytes are not valid UTF-8 ({bytes} bytes).'
				);
			default:
				return $t('ui.hex.error.invalid_hex_digit', { position: error.detail }, 'Invalid hex input.');
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
				<span
					class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
				>
					{$t('ui.hex.action_label', 'Action')}
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

			{#if selectedAction === 'encode'}
				<div class="flex flex-col gap-[var(--space-2)]">
					<span
						class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
					>
						{$t('ui.hex.hex_case_label', 'Hex case')}
					</span>
					<div class="flex flex-wrap gap-[var(--space-2)]">
						<button
							type="button"
							data-hex-case="upper"
							onclick={handleHexCaseClick}
							class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${encodeChoiceButtonClass(encodeOptions.hexCase === 'upper')}`}
						>
							{$t('ui.hex.hex_case.upper', 'Uppercase')}
						</button>
						<button
							type="button"
							data-hex-case="lower"
							onclick={handleHexCaseClick}
							class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${encodeChoiceButtonClass(encodeOptions.hexCase === 'lower')}`}
						>
							{$t('ui.hex.hex_case.lower', 'Lowercase')}
						</button>
					</div>
				</div>
			{:else}
				<div class="flex flex-col gap-[var(--space-2)]">
					<span
						class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
					>
						{$t('ui.hex.decode_options_label', 'Decode options')}
					</span>
					<div class="flex flex-col gap-[var(--space-2)]">
						<label
							class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]"
						>
							<input
								type="checkbox"
								checked={decodeOptions.ignoreWhitespace}
								onchange={handleDecodeWhitespaceChange}
								class="h-4 w-4 rounded border-[var(--border-default)]"
							/>
							{$t('ui.hex.option.ignore_whitespace', 'Ignore spaces and line breaks')}
						</label>
						<label
							class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]"
						>
							<input
								type="checkbox"
								checked={decodeOptions.ignoreCommas}
								onchange={handleDecodeCommasChange}
								class="h-4 w-4 rounded border-[var(--border-default)]"
							/>
							{$t('ui.hex.option.ignore_commas', 'Ignore comma separators')}
						</label>
						<label
							class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]"
						>
							<input
								type="checkbox"
								checked={decodeOptions.allow0xPrefix}
								onchange={handleDecode0xChange}
								class="h-4 w-4 rounded border-[var(--border-default)]"
							/>
							{$t('ui.hex.option.allow_0x', 'Allow 0x prefix before each byte')}
						</label>
					</div>
				</div>
			{/if}
		</div>

		{#if selectedAction === 'encode'}
			<div
				class="mt-[var(--space-3)] grid grid-cols-1 gap-[var(--space-3)] md:grid-cols-2 xl:grid-cols-2"
			>
				<div class="flex flex-col gap-[var(--space-2)]">
					<span
						class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
					>
						{$t('ui.hex.delimiter_label', 'Byte separator')}
					</span>
					<div class="flex flex-wrap gap-[var(--space-2)]">
						{#each delimiterOptions as option}
							<button
								type="button"
								data-delimiter={option.value}
								onclick={handleDelimiterClick}
								class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${encodeChoiceButtonClass(encodeOptions.byteDelimiter === option.value)}`}
							>
								{$t(option.labelKey, option.value)}
							</button>
						{/each}
					</div>
				</div>
				<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<span class="font-[number:var(--weight-semibold)]"
						>{$t('ui.hex.bytes_per_line_label', 'Bytes per line')}</span
					>
					<select
						class="h-8 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[var(--text-primary)]"
						value={encodeOptions.bytesPerLine}
						onchange={handleBytesPerLineChange}
					>
						{#each bytesPerLineChoices as n}
							<option value={n}>
								{n === 0
									? $t('ui.hex.bytes_per_line.off', 'No wrap')
									: $t('ui.hex.bytes_per_line.n', { n: String(n) }, '{n} bytes')}
							</option>
						{/each}
					</select>
				</label>
			</div>
		{/if}

		<div
			class="mt-[var(--space-2)] flex flex-wrap items-center justify-between gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
		>
			{#if isWorkerEligible}
				<span>
					{$t(
						'ui.hex.worker_active',
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
					{$t('ui.hex.button.swap_direction', 'Swap direction')}
				</button>
				<button
					type="button"
					onclick={applyOutputToInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<ArrowLeftRight size={14} />
					{$t('ui.hex.button.apply_output', 'Apply output to input')}
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
	<div
		class="grid h-full min-h-0 flex-1 grid-cols-1 xl:grid-cols-2 xl:divide-x xl:divide-[var(--border-default)]"
	>
		<div class="flex min-h-[200px] min-w-0 flex-col bg-[var(--bg-base)] xl:min-h-0">
			<div
				class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
			>
				<span>{$t('ui.hex.input_label', 'Input')}</span>
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
				class="min-h-[200px] w-full flex-1 resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none xl:min-h-0"
				placeholder={$t(
					'ui.hex.input_placeholder',
					'Plain text to encode, or hex digits to decode to UTF-8…'
				)}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-[200px] min-w-0 flex-col bg-[var(--bg-surface)] xl:min-h-0">
			<div
				class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
			>
				<span>{$t('ui.hex.output_label', 'Output')}</span>
				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.actions.running', 'Running…')}</span>
					{/if}
					{#if processedByWorker}
						<span
							class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[var(--text-secondary)]"
						>
							{$t('ui.hex.worker_badge', 'Worker')}
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
				class="min-h-[200px] w-full flex-1 resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none xl:min-h-0"
				placeholder={$t(
					'ui.hex.output_placeholder',
					'Hex output or decoded UTF-8 text appears here…'
				)}
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
