<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		processTextEscape,
		shouldUseTextEscapeWorker,
		TEXT_ESCAPE_WORKER_THRESHOLD_BYTES,
		type TextEscapeAction,
		type TextEscapeError,
		type TextEscapeFormat,
		type TextEscapeOptions,
		type TextEscapeResult,
		type TextEscapeWarningCode,
		type TextEscapeWorkerRequest,
		type TextEscapeWorkerResponse
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
		resolve: (value: TextEscapeResult) => void;
		reject: (reason: Error) => void;
	};

	const DEFAULT_SAMPLE_INPUT = `Line 1: "Hello <world> & everyone"
Path: /api/v1/search?q=hello world&lang=en
Regex: ^(test|prod)+$
SQL owner: O'Reilly`;

	const DEFAULT_ESCAPE_OPTIONS: TextEscapeOptions = {
		urlEncodeSpacesAsPlus: false,
		urlDecodePlusAsSpace: true,
		sqlWrapWithQuotes: false
	};

	const formatOptions: Array<{ value: TextEscapeFormat; labelKey: string }> = [
		{ value: 'json', labelKey: 'ui.text_escape.format.json' },
		{ value: 'html', labelKey: 'ui.text_escape.format.html' },
		{ value: 'xml', labelKey: 'ui.text_escape.format.xml' },
		{ value: 'url', labelKey: 'ui.text_escape.format.url' },
		{ value: 'sql', labelKey: 'ui.text_escape.format.sql' },
		{ value: 'regex', labelKey: 'ui.text_escape.format.regex' }
	];

	const actionOptions: Array<{ value: TextEscapeAction; labelKey: string }> = [
		{ value: 'escape', labelKey: 'ui.text_escape.action.escape' },
		{ value: 'unescape', labelKey: 'ui.text_escape.action.unescape' }
	];

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let selectedFormat = $state<TextEscapeFormat>('json');
	let selectedAction = $state<TextEscapeAction>('escape');
	let escapeOptions = $state<TextEscapeOptions>({ ...DEFAULT_ESCAPE_OPTIONS });
	let conversionResult = $state<TextEscapeResult>(
		processTextEscape('', 'json', 'escape', DEFAULT_ESCAPE_OPTIONS)
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
	let isWorkerEligible = $derived(shouldUseTextEscapeWorker($input));
	let workerThresholdLabel = $derived(formatByteSize(TEXT_ESCAPE_WORKER_THRESHOLD_BYTES));
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
		const format = selectedFormat;
		const action = selectedAction;
		const optionSnapshot: TextEscapeOptions = { ...escapeOptions };
		const token = ++latestProcessToken;
		const useWorker = shouldUseTextEscapeWorker(inputValue);

		isProcessing = useWorker;

		void processInput(token, inputValue, format, action, optionSnapshot, useWorker);
	});

	async function processInput(
		token: number,
		inputValue: string,
		format: TextEscapeFormat,
		action: TextEscapeAction,
		options: TextEscapeOptions,
		useWorker: boolean
	): Promise<void> {
		if (!useWorker) {
			const nextResult = processTextEscape(inputValue, format, action, options);
			if (token !== latestProcessToken) return;
			conversionResult = nextResult;
			processedByWorker = false;
			isProcessing = false;
			return;
		}

		try {
			const workerResult = await runWorker(inputValue, format, action, options);
			if (token !== latestProcessToken) return;
			conversionResult = workerResult;
			processedByWorker = true;
		} catch {
			if (token !== latestProcessToken) return;
			conversionResult = processTextEscape(inputValue, format, action, options);
			processedByWorker = false;
			addToast(
				'error',
				$t(
					'ui.text_escape.worker_failed',
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

		workerInstance = new Worker(new URL('../../../workers/text-escape.worker.ts', import.meta.url), {
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

	function handleWorkerMessage(event: MessageEvent<TextEscapeWorkerResponse>): void {
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
		format: TextEscapeFormat,
		action: TextEscapeAction,
		options: TextEscapeOptions
	): Promise<TextEscapeResult> {
		const worker = ensureWorker();

		return new Promise<TextEscapeResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });

			const request: TextEscapeWorkerRequest = {
				id: requestId,
				input: inputValue,
				format,
				action,
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

	function handleFormatClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const nextFormat = target.dataset.format as TextEscapeFormat | undefined;
		if (!nextFormat) return;
		selectedFormat = nextFormat;
	}

	function handleActionClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const nextAction = target.dataset.action as TextEscapeAction | undefined;
		if (!nextAction) return;
		selectedAction = nextAction;
	}

	function handleUrlEncodePlusChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		escapeOptions = {
			...escapeOptions,
			urlEncodeSpacesAsPlus: target.checked
		};
	}

	function handleUrlDecodePlusChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		escapeOptions = {
			...escapeOptions,
			urlDecodePlusAsSpace: target.checked
		};
	}

	function handleSqlWrapQuotesChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		escapeOptions = {
			...escapeOptions,
			sqlWrapWithQuotes: target.checked
		};
	}

	function loadSampleInput(): void {
		input.set(DEFAULT_SAMPLE_INPUT);
		selectedFormat = 'json';
		selectedAction = 'escape';
		escapeOptions = { ...DEFAULT_ESCAPE_OPTIONS };
	}

	function toggleActionDirection(): void {
		selectedAction = selectedAction === 'escape' ? 'unescape' : 'escape';
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

	function getWarningMessage(code: TextEscapeWarningCode): string {
		switch (code) {
			case 'no_changes_detected':
				return $t(
					'ui.text_escape.warning.no_changes',
					'No changes detected for the selected format and action.'
				);
			default:
				return '';
		}
	}

	function getErrorMessage(error: TextEscapeError | null): string {
		if (!error) return '';

		switch (error.code) {
			case 'invalid_json_escape':
				return $t(
					'ui.text_escape.error.invalid_json_escape',
					{ detail: error.detail },
					'Invalid JSON escape sequence: {detail}'
				);
			case 'invalid_url_encoding':
				return $t(
					'ui.text_escape.error.invalid_url_encoding',
					{ detail: error.detail },
					'Invalid URL-encoded input: {detail}'
				);
			default:
				return $t(
					'ui.text_escape.error.detail',
					{ detail: error.detail },
					'Processing failed: {detail}'
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
			category="text"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
		<div class="grid grid-cols-1 gap-[var(--space-3)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
			<div class="flex flex-col gap-[var(--space-2)]">
				<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
					{$t('ui.text_escape.format_label', 'Format')}
				</span>
				<div class="flex flex-wrap gap-[var(--space-2)]">
					{#each formatOptions as option}
						<button
							type="button"
							data-format={option.value}
							onclick={handleFormatClick}
							class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(selectedFormat === option.value)}`}
						>
							{$t(option.labelKey, option.value.toUpperCase())}
						</button>
					{/each}
				</div>
			</div>

			<div class="flex flex-col gap-[var(--space-2)]">
				<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
					{$t('ui.text_escape.action_label', 'Action')}
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
		</div>

		<div class="mt-[var(--space-3)] grid grid-cols-1 gap-[var(--space-2)] md:grid-cols-2 xl:grid-cols-3">
			{#if selectedFormat === 'url' && selectedAction === 'escape'}
				<label class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						checked={escapeOptions.urlEncodeSpacesAsPlus}
						onchange={handleUrlEncodePlusChange}
						class="h-4 w-4 rounded border-[var(--border-default)]"
					/>
					{$t('ui.text_escape.option.url_encode_plus', 'Encode spaces as +')}
				</label>
			{/if}

			{#if selectedFormat === 'url' && selectedAction === 'unescape'}
				<label class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						checked={escapeOptions.urlDecodePlusAsSpace}
						onchange={handleUrlDecodePlusChange}
						class="h-4 w-4 rounded border-[var(--border-default)]"
					/>
					{$t('ui.text_escape.option.url_decode_plus', 'Decode + as space')}
				</label>
			{/if}

			{#if selectedFormat === 'sql'}
				<label class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						checked={escapeOptions.sqlWrapWithQuotes}
						onchange={handleSqlWrapQuotesChange}
						class="h-4 w-4 rounded border-[var(--border-default)]"
					/>
					{$t('ui.text_escape.option.sql_wrap_quotes', 'Wrap with single quotes')}
				</label>
			{/if}
		</div>

		<div class="mt-[var(--space-2)] flex flex-wrap items-center justify-between gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
			{#if isWorkerEligible}
				<span>
					{$t(
						'ui.text_escape.worker_active',
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
					onclick={toggleActionDirection}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<RefreshCw size={14} />
					{$t('ui.text_escape.button.swap_action', 'Swap action')}
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
				<span>{$t('ui.text_escape.input_label', 'Input')}</span>
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
				placeholder={$t('ui.text_escape.input_placeholder', 'Type or paste text to process...')}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.text_escape.output_label', 'Output')}</span>
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
				placeholder={$t('ui.text_escape.output_placeholder', 'Escaped or unescaped output appears here...')}
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
