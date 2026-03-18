<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		processTextMorse,
		shouldUseTextMorseWorker,
		TEXT_MORSE_WORKER_THRESHOLD_BYTES,
		type TextMorseMode,
		type TextMorseOptions,
		type TextMorseResult,
		type TextMorseWarningCode,
		type TextMorseWordSeparator,
		type TextMorseWorkerRequest,
		type TextMorseWorkerResponse
	} from '$engines/text/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Eraser, RefreshCw } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: TextMorseResult) => void;
		reject: (reason: Error) => void;
	};

	type ModeOption = {
		value: TextMorseMode;
		labelKey: string;
	};

	type WordSeparatorOption = {
		value: TextMorseWordSeparator;
		labelKey: string;
	};

	const SAMPLE_TEXT = `Deploy API v2 at 09:30!
Check logs, then page on-call.`;
	const SAMPLE_MORSE =
		'-.. . .--. .-.. --- -.-- / .- .--. .. / ...- ..--- / .- - / ----- ----. ...-- ----- -.-.--';

	const DEFAULT_MORSE_OPTIONS: TextMorseOptions = {
		preserveUnsupported: true,
		wordSeparator: 'slash',
		unknownPlaceholder: '?'
	};

	const modeOptions: ModeOption[] = [
		{ value: 'encode', labelKey: 'ui.morse.mode.encode' },
		{ value: 'decode', labelKey: 'ui.morse.mode.decode' }
	];

	const wordSeparatorOptions: WordSeparatorOption[] = [
		{ value: 'slash', labelKey: 'ui.morse.separator.slash' },
		{ value: 'pipe', labelKey: 'ui.morse.separator.pipe' },
		{ value: 'newline', labelKey: 'ui.morse.separator.newline' }
	];

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let selectedMode = $state<TextMorseMode>('encode');
	let morseOptions = $state<TextMorseOptions>({ ...DEFAULT_MORSE_OPTIONS });
	let conversionResult = $state<TextMorseResult>(processTextMorse('', 'encode', DEFAULT_MORSE_OPTIONS));
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new Map<number, PendingWorkerRequest>();

	let inputLineCount = $derived($input.length === 0 ? 0 : $input.split(/\r?\n/).length);
	let outputLineCount = $derived(
		conversionResult.output.length === 0 ? 0 : conversionResult.output.split(/\r?\n/).length
	);
	let inputStatusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${inputLineCount.toLocaleString()} ${$t('ui.text_counter.lines', 'lines')}`
	);
	let outputStatusLine = $derived(
		`${formatByteSize(conversionResult.outputBytes)} · ${outputLineCount.toLocaleString()} ${$t('ui.text_counter.lines', 'lines')}`
	);
	let workerThresholdLabel = $derived(formatByteSize(TEXT_MORSE_WORKER_THRESHOLD_BYTES));
	let isWorkerEligible = $derived(shouldUseTextMorseWorker($input));
	let warningMessages = $derived(
		conversionResult.warnings
			.map((warningCode) => getWarningMessage(warningCode))
			.filter((warningMessage) => warningMessage.length > 0)
	);
	let preserveUnsupportedLabel = $derived(
		selectedMode === 'encode'
			? $t(
					'ui.morse.option.preserve_unsupported_encode',
					'Keep unsupported input characters in output'
				)
			: $t(
					'ui.morse.option.preserve_unsupported_decode',
					'Insert placeholder for unknown Morse tokens'
				)
	);

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;

		if ($input.length === 0) {
			input.set(SAMPLE_TEXT);
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
		const sourceInput = $input;
		const mode = selectedMode;
		const optionSnapshot: TextMorseOptions = { ...morseOptions };
		const token = ++latestProcessToken;
		const useWorker = shouldUseTextMorseWorker(sourceInput);

		isProcessing = useWorker;

		void processInput(token, sourceInput, mode, optionSnapshot, useWorker);
	});

	async function processInput(
		token: number,
		sourceInput: string,
		mode: TextMorseMode,
		options: TextMorseOptions,
		useWorker: boolean
	): Promise<void> {
		if (!useWorker) {
			conversionResult = processTextMorse(sourceInput, mode, options);
			processedByWorker = false;
			isProcessing = false;
			return;
		}

		try {
			const workerResult = await runWorker(sourceInput, mode, options);
			if (token !== latestProcessToken) return;
			conversionResult = workerResult;
			processedByWorker = true;
		} catch {
			if (token !== latestProcessToken) return;
			conversionResult = processTextMorse(sourceInput, mode, options);
			processedByWorker = false;
			addToast(
				'error',
				$t(
					'ui.morse.worker_failed',
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

		workerInstance = new Worker(new URL('../../../workers/text-morse.worker.ts', import.meta.url), {
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

	function handleWorkerMessage(event: MessageEvent<TextMorseWorkerResponse>): void {
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
		sourceInput: string,
		mode: TextMorseMode,
		options: TextMorseOptions
	): Promise<TextMorseResult> {
		const worker = ensureWorker();

		return new Promise<TextMorseResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });

			const request: TextMorseWorkerRequest = {
				id: requestId,
				input: sourceInput,
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

	function handleModeClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const mode = target.dataset.mode as TextMorseMode | undefined;
		if (!mode) return;
		selectedMode = mode;
	}

	function handleWordSeparatorClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const value = target.dataset.separator as TextMorseWordSeparator | undefined;
		if (!value) return;
		morseOptions = {
			...morseOptions,
			wordSeparator: value
		};
	}

	function handlePreserveUnsupportedChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		morseOptions = {
			...morseOptions,
			preserveUnsupported: target.checked
		};
	}

	function handleUnknownPlaceholderInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;

		const nextValue = target.value.slice(0, 5);
		morseOptions = {
			...morseOptions,
			unknownPlaceholder: nextValue.length === 0 ? '?' : nextValue
		};
	}

	function loadSampleInput(): void {
		input.set(selectedMode === 'encode' ? SAMPLE_TEXT : SAMPLE_MORSE);
	}

	function swapModeAndUseOutput(): void {
		if (conversionResult.output.length > 0) {
			input.set(conversionResult.output);
		}

		selectedMode = selectedMode === 'encode' ? 'decode' : 'encode';
	}

	function clearInputValue(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('category.text.display_name', 'Text') },
			'Clear the current text input?'
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

	function getWarningMessage(code: TextMorseWarningCode): string {
		switch (code) {
			case 'unsupported_input_characters':
				return $t(
					'ui.morse.warning.unsupported_input_characters',
					'Some input characters are not part of supported Morse mappings.'
				);
			case 'unknown_morse_tokens':
				return $t(
					'ui.morse.warning.unknown_morse_tokens',
					'Some Morse tokens could not be decoded.'
				);
			case 'no_changes_detected':
				return $t('ui.morse.warning.no_changes', 'No changes detected for the selected mode.');
			default:
				return '';
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
			category="text"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
		<div class="grid grid-cols-1 gap-[var(--space-3)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
			<div class="flex flex-col gap-[var(--space-2)]">
				<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
					{$t('ui.morse.mode_label', 'Mode')}
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

			<div class="flex flex-col gap-[var(--space-2)]">
				<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
					{$t('ui.morse.separator_label', 'Word separator')}
				</span>
				<div class="flex flex-wrap gap-[var(--space-2)]">
					{#each wordSeparatorOptions as option}
						<button
							type="button"
							data-separator={option.value}
							onclick={handleWordSeparatorClick}
							disabled={selectedMode !== 'encode'}
							class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(morseOptions.wordSeparator === option.value && selectedMode === 'encode')} disabled:cursor-not-allowed disabled:opacity-50`}
						>
							{$t(option.labelKey, option.value)}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<div class="mt-[var(--space-3)] grid grid-cols-1 gap-[var(--space-2)] md:grid-cols-2">
			<label class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
				<input
					type="checkbox"
					checked={morseOptions.preserveUnsupported}
					onchange={handlePreserveUnsupportedChange}
					class="h-4 w-4 rounded border-[var(--border-default)]"
				/>
				{preserveUnsupportedLabel}
			</label>

			{#if selectedMode === 'decode'}
				<label class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<span>{$t('ui.morse.option.unknown_placeholder', 'Unknown placeholder')}</span>
					<input
						type="text"
						value={morseOptions.unknownPlaceholder}
						oninput={handleUnknownPlaceholderInput}
						maxlength="5"
						class="w-20 rounded-[var(--radius-sm)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[2px] text-[var(--text-primary)]"
					/>
				</label>
			{/if}
		</div>

		<div class="mt-[var(--space-2)] flex flex-wrap items-center justify-between gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
			{#if isWorkerEligible}
				<span>
					{$t(
						'ui.morse.worker_active',
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
					onclick={swapModeAndUseOutput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<RefreshCw size={14} />
					{$t('ui.morse.button.swap_mode', 'Swap mode & use output')}
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
				<span>{$t('ui.morse.input_label', 'Input')}</span>
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
				placeholder={
					selectedMode === 'encode'
						? $t('ui.morse.input_placeholder.encode', 'Type or paste text to convert into Morse code...')
						: $t('ui.morse.input_placeholder.decode', 'Paste Morse code (., -, /, |) to decode...')
				}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.morse.output_label', 'Output')}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.actions.running', 'Running…')}</span>
					{/if}
					{#if processedByWorker}
						<span class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[var(--text-secondary)]">Worker</span>
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

			<div class="grid grid-cols-2 gap-[var(--space-2)] border-b border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
				<div>
					{$t('ui.morse.stat.symbols', 'Symbols')}: {conversionResult.symbolCount.toLocaleString()}
				</div>
				<div>
					{$t('ui.morse.stat.words', 'Words')}: {conversionResult.wordCount.toLocaleString()}
				</div>
				<div>
					{$t('ui.morse.stat.unsupported', 'Unsupported')}: {conversionResult.unsupportedCount.toLocaleString()}
				</div>
				<div>
					{$t('ui.morse.stat.unknown_tokens', 'Unknown tokens')}: {conversionResult.unknownTokenCount.toLocaleString()}
				</div>
			</div>

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
				placeholder={
					selectedMode === 'encode'
						? $t('ui.morse.output_placeholder.encode', 'Morse output appears here...')
						: $t('ui.morse.output_placeholder.decode', 'Decoded text appears here...')
				}
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
