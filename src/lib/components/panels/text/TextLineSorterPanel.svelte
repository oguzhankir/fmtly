<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import {
		DEFAULT_TEXT_LINE_SORT_OPTIONS,
		sortTextLines,
		type TextLineSortOptions,
		type TextLineSortResult
	} from '$engines/text/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Eraser } from 'lucide-svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';

	type TextLineSorterWorkerRequest = {
		id: number;
		method: 'sortTextLines';
		input: string;
		options: TextLineSortOptions;
	};

	type TextLineSorterWorkerResponse = {
		id: number;
		result?: TextLineSortResult;
		error?: string;
	};

	type PendingWorkerRequest = {
		resolve: (result: TextLineSortResult) => void;
		reject: (error: Error) => void;
	};

	const WORKER_THRESHOLD_BYTES = 500 * 1024;

	const EMPTY_RESULT: TextLineSortResult = {
		sorted: '',
		inputLineCount: 0,
		outputLineCount: 0,
		removedEmptyLines: 0,
		removedDuplicateLines: 0,
		movedLineCount: 0
	};

	let {
		toolSlug,
		workspaceTools = []
	}: {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	} = $props();

	let initializedToolSlug = $state('');
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');
	let isProcessing = $state(false);
	let processingError = $state('');
	let result = $state<TextLineSortResult>(EMPTY_RESULT);
	let options = $state<TextLineSortOptions>({ ...DEFAULT_TEXT_LINE_SORT_OPTIONS });

	let processRunId = 0;
	let workerRequestId = 0;
	let workerInstance: Worker | null = null;
	const workerPendingRequests = new Map<number, PendingWorkerRequest>();

	let isWorkerMode = $derived($inputByteSize > WORKER_THRESHOLD_BYTES);
	let inputStatusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${result.inputLineCount.toLocaleString()} ${$t('ui.text_reverser.lines_count', 'lines')}`
	);
	let outputByteSize = $derived(new TextEncoder().encode(result.sorted).length);
	let outputStatusLine = $derived(
		`${formatByteSize(outputByteSize)} · ${result.outputLineCount.toLocaleString()} ${$t('ui.text_reverser.lines_count', 'lines')}`
	);

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	onDestroy(() => {
		disposeWorker();
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	$effect(() => {
		const source = $input;
		const runId = ++processRunId;
		const normalizedOptions: TextLineSortOptions = {
			mode: options.mode,
			direction: options.direction,
			caseSensitive: options.caseSensitive,
			trimBeforeSort: options.trimBeforeSort,
			removeEmptyLines: options.removeEmptyLines,
			deduplicate: options.deduplicate,
			shuffleSeed: options.shuffleSeed
		};
		const useWorker = $inputByteSize > WORKER_THRESHOLD_BYTES;

		processingError = '';

		if (!source) {
			result = EMPTY_RESULT;
			isProcessing = false;
			return;
		}

		isProcessing = true;

		if (useWorker) {
			void sortWithWorker(source, normalizedOptions)
				.then((workerResult) => {
					if (runId !== processRunId) return;
					result = workerResult;
				})
				.catch(() => {
					if (runId !== processRunId) return;
					processingError = $t(
						'ui.line_sorter.error.processing_failed',
						'Line sorting failed. Please adjust options or input and try again.'
					);
					result = EMPTY_RESULT;
				})
				.finally(() => {
					if (runId !== processRunId) return;
					isProcessing = false;
				});
			return;
		}

		try {
			result = sortTextLines(source, normalizedOptions);
		} catch {
			result = EMPTY_RESULT;
			processingError = $t(
				'ui.line_sorter.error.processing_failed',
				'Line sorting failed. Please adjust options or input and try again.'
			);
		} finally {
			isProcessing = false;
		}
	});

	function getWorker(): Worker {
		if (workerInstance) return workerInstance;

		workerInstance = new Worker(new URL('../../../workers/text-line-sorter.worker.ts', import.meta.url), {
			type: 'module'
		});
		workerInstance.onmessage = handleWorkerMessage;
		workerInstance.onerror = handleWorkerError;
		return workerInstance;
	}

	function disposeWorker(): void {
		for (const pending of workerPendingRequests.values()) {
			pending.reject(new Error('Line sorter worker terminated'));
		}

		workerPendingRequests.clear();

		if (workerInstance) {
			workerInstance.terminate();
			workerInstance = null;
		}
	}

	function handleWorkerMessage(event: MessageEvent<TextLineSorterWorkerResponse>): void {
		const pending = workerPendingRequests.get(event.data.id);
		if (!pending) return;

		workerPendingRequests.delete(event.data.id);

		if (event.data.error) {
			pending.reject(new Error(event.data.error));
			return;
		}

		if (!event.data.result) {
			pending.reject(new Error('Missing worker result'));
			return;
		}

		pending.resolve(event.data.result);
	}

	function handleWorkerError(): void {
		for (const pending of workerPendingRequests.values()) {
			pending.reject(new Error('Worker execution failed'));
		}

		workerPendingRequests.clear();

		if (workerInstance) {
			workerInstance.terminate();
			workerInstance = null;
		}
	}

	function sortWithWorker(source: string, sortOptions: TextLineSortOptions): Promise<TextLineSortResult> {
		const worker = getWorker();

		return new Promise<TextLineSortResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			workerPendingRequests.set(requestId, { resolve, reject });

			const payload: TextLineSorterWorkerRequest = {
				id: requestId,
				method: 'sortTextLines',
				input: source,
				options: sortOptions
			};

			worker.postMessage(payload);
		});
	}

	function randomizeSeed(): void {
		options.shuffleSeed = Math.max(1, Math.floor(Math.random() * 2147483647));
	}

	function resetOptions(): void {
		options = {
			...DEFAULT_TEXT_LINE_SORT_OPTIONS,
			shuffleSeed: options.shuffleSeed
		};
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

	function onConfirmModalCancel(): void {}

	async function copyOutput(): Promise<void> {
		if (!result.sorted) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}

		try {
			await navigator.clipboard.writeText(result.sorted);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	function applyOutputToInput(): void {
		if (!result.sorted) {
			addToast('info', $t('ui.line_sorter.no_output', 'No sorted output to apply'));
			return;
		}

		input.set(result.sorted);
		addToast('success', $t('ui.line_sorter.toast.applied', 'Sorted output applied to input'));
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
		<div class="grid grid-cols-2 gap-[var(--space-2)] sm:grid-cols-3 lg:grid-cols-5">
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.line_sorter.input_lines', 'Input lines')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{result.inputLineCount.toLocaleString()}</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.line_sorter.output_lines', 'Output lines')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{result.outputLineCount.toLocaleString()}</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.line_sorter.empty_lines_removed', 'Empty lines removed')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{result.removedEmptyLines.toLocaleString()}</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.line_sorter.duplicates_removed', 'Duplicates removed')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{result.removedDuplicateLines.toLocaleString()}</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.line_sorter.lines_moved', 'Lines moved')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{result.movedLineCount.toLocaleString()}</div>
			</div>
		</div>
	</div>

	<div class="grid h-full min-h-0 grid-cols-1 lg:grid-cols-2">
		<div class="flex min-h-0 flex-col border-b border-[var(--border-default)] bg-[var(--bg-base)] lg:border-b-0 lg:border-r">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
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

			<div class="grid grid-cols-1 gap-[var(--space-3)] border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)] sm:grid-cols-2">
				<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
					<span>{$t('ui.line_sorter.mode_label', 'Sort mode')}</span>
					<select
						bind:value={options.mode}
						class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
					>
						<option value="alphabetical">{$t('ui.line_sorter.mode.alphabetical', 'Alphabetical')}</option>
						<option value="numeric">{$t('ui.line_sorter.mode.numeric', 'Numeric')}</option>
						<option value="length">{$t('ui.line_sorter.mode.length', 'By length')}</option>
						<option value="random">{$t('ui.line_sorter.mode.random', 'Random shuffle')}</option>
					</select>
				</label>

				<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
					<span>{$t('ui.line_sorter.direction_label', 'Direction')}</span>
					<select
						bind:value={options.direction}
						class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
					>
						<option value="asc">{$t('ui.line_sorter.direction.asc', 'Ascending')}</option>
						<option value="desc">{$t('ui.line_sorter.direction.desc', 'Descending')}</option>
					</select>
				</label>

				<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						bind:checked={options.caseSensitive}
						class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)]"
					/>
					{$t('ui.line_sorter.option.case_sensitive', 'Case-sensitive sort')}
				</label>

				<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						bind:checked={options.trimBeforeSort}
						class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)]"
					/>
					{$t('ui.line_sorter.option.trim_before_sort', 'Trim each line before sorting')}
				</label>

				<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						bind:checked={options.removeEmptyLines}
						class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)]"
					/>
					{$t('ui.line_sorter.option.remove_empty_lines', 'Remove empty lines')}
				</label>

				<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						bind:checked={options.deduplicate}
						class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)]"
					/>
					{$t('ui.line_sorter.option.deduplicate', 'Deduplicate lines first')}
				</label>

				{#if options.mode === 'random'}
					<div class="sm:col-span-2">
						<div class="flex flex-wrap items-end gap-[var(--space-2)]">
							<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
								<span>{$t('ui.line_sorter.shuffle_seed', 'Shuffle seed')}</span>
								<input
									type="number"
									bind:value={options.shuffleSeed}
									class="h-9 w-36 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
								/>
							</label>
							<button
								type="button"
								onclick={randomizeSeed}
								class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
							>
								{$t('ui.line_sorter.generate_seed', 'Randomize seed')}
							</button>
						</div>
					</div>
				{/if}

				<div class="sm:col-span-2">
					<button
						type="button"
						onclick={resetOptions}
						class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						{$t('ui.actions.reset', 'Reset')}
					</button>
				</div>
			</div>

			<textarea
				bind:value={$input}
				class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t('ui.line_sorter.placeholder', 'Type or paste lines to sort...')}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div class="flex items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<div class="flex min-w-0 items-center gap-[var(--space-2)]">
					<span class="truncate">{$t('ui.line_sorter.output', 'Sorted output')} · {outputStatusLine}</span>
					{#if isWorkerMode}
						<span class="inline-flex rounded-[var(--radius-full)] border border-[var(--border-default)] px-[var(--space-2)] py-[1px] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							{$t('ui.line_sorter.status.worker', 'Large input mode (Web Worker)')}
						</span>
					{/if}
				</div>
				<div class="flex items-center gap-[var(--space-2)]">
					<button
						type="button"
						onclick={applyOutputToInput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						{$t('ui.line_sorter.apply_output', 'Apply to input')}
					</button>
					<button
						type="button"
						onclick={copyOutput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Copy size={12} />
						{$t('ui.actions.copy', 'Copy')}
					</button>
				</div>
			</div>

			<div class="min-h-0 flex-1 overflow-auto">
				{#if isProcessing}
					<div class="flex h-full items-center justify-center p-[var(--space-4)] text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
						{$t('ui.line_sorter.status.processing', 'Sorting lines...')}
					</div>
				{:else if processingError}
					<div class="flex h-full items-center justify-center p-[var(--space-4)] text-center text-[length:var(--text-sm)] text-[var(--color-danger)]">
						{processingError}
					</div>
				{:else if result.sorted}
					<pre class="whitespace-pre-wrap break-all p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)]">{result.sorted}</pre>
				{:else}
					<div class="flex h-full items-center justify-center p-[var(--space-4)] text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
						{$t('ui.line_sorter.no_output', 'No sorted output to display yet')}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<ConfirmModal
	bind:open={confirmModalOpen}
	title={confirmTitle}
	message={confirmMessage}
	onConfirm={doClearInput}
	onCancel={onConfirmModalCancel}
/>
