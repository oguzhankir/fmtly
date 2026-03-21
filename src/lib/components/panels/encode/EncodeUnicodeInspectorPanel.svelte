<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import { createVirtualizer } from '@tanstack/svelte-virtual';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		inspectUnicode,
		shouldUseUnicodeInspectorWorker,
		UNICODE_INSPECTOR_WORKER_THRESHOLD_BYTES,
		type UnicodeInspectorGranularity,
		type UnicodeInspectorResult,
		type UnicodePropertyLookup,
		type UnicodeClusterInspection,
		type UnicodeScalarInspection,
		type UnicodeInspectorWorkerRequest,
		type UnicodeInspectorWorkerResponse
	} from '$engines/encode/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Eraser, Table } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: UnicodeInspectorResult) => void;
		reject: (reason: Error) => void;
	};

	type FlatRow = {
		id: string;
		clusterStart: boolean;
		segment: string;
		sequenceName: string | null;
		scalar: UnicodeScalarInspection;
	};

	const DEFAULT_SAMPLE = 'Hello 你好 🫶 🏳️‍🌈 — café\nU+1F600';

	const MAX_SCALAR_OPTIONS = [5000, 25_000, 100_000] as const;

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let granularity = $state<UnicodeInspectorGranularity>('grapheme');
	let maxScalars = $state<(typeof MAX_SCALAR_OPTIONS)[number]>(25_000);
	let lookup = $state<UnicodePropertyLookup | null>(null);
	let backendError = $state<string | null>(null);
	let inspectionResult = $state<UnicodeInspectorResult | null>(null);
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');
	let scrollElement = $state<HTMLDivElement | undefined>(undefined);

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new Map<number, PendingWorkerRequest>();

	let flatRows = $derived(buildFlatRows(inspectionResult));
	let rowVirtualizer = $derived(
		createVirtualizer({
			count: flatRows.length,
			getScrollElement: () => scrollElement ?? null,
			estimateSize: () => 44,
			overscan: 24
		})
	);

	let inputStatusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${$input.length.toLocaleString()} ${$t('ui.unicode_inspector.utf16_units', 'UTF-16 units')}`
	);
	let isWorkerEligible = $derived(shouldUseUnicodeInspectorWorker($input));
	let workerThresholdLabel = $derived(formatByteSize(UNICODE_INSPECTOR_WORKER_THRESHOLD_BYTES));

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		if ($input.length === 0) {
			input.set(DEFAULT_SAMPLE);
		}
	});

	onDestroy(() => {
		releaseWorker();
	});

	$effect(() => {
		if (!browser) return;
		let cancelled = false;
		backendError = null;
		void import('$lib/engines/encode/unicode-inspector-backend.js')
			.then((mod) => {
				if (cancelled) return;
				lookup = mod.createUnicodePropertyLookup();
			})
			.catch(() => {
				if (cancelled) return;
				backendError = $t(
					'ui.unicode_inspector.backend_load_error',
					'Could not load Unicode name tables. Check your connection and try again.'
				);
				lookup = null;
			});
		return () => {
			cancelled = true;
		};
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	$effect(() => {
		if (!browser) return;
		const inputValue = $input;
		const gran = granularity;
		const cap = maxScalars;
		const activeLookup = lookup;
		const token = ++latestProcessToken;

		if (activeLookup === null) {
			inspectionResult = null;
			isProcessing = false;
			processedByWorker = false;
			return;
		}

		const useWorker = shouldUseUnicodeInspectorWorker(inputValue);
		isProcessing = useWorker;
		void runInspection(token, inputValue, { granularity: gran, maxScalars: cap }, activeLookup, useWorker);
	});

	function buildFlatRows(result: UnicodeInspectorResult | null): FlatRow[] {
		if (result === null) return [];
		const rows: FlatRow[] = [];
		for (let ci = 0; ci < result.clusters.length; ci += 1) {
			const cluster = result.clusters[ci];
			for (let si = 0; si < cluster.scalars.length; si += 1) {
				const scalar = cluster.scalars[si];
				rows.push({
					id: `${ci}-${si}-${scalar.startOffsetUtf16}-${scalar.codePoint}`,
					clusterStart: si === 0,
					segment: cluster.segment,
					sequenceName: cluster.sequenceName,
					scalar
				});
			}
		}
		return rows;
	}

	async function runInspection(
		token: number,
		inputValue: string,
		opts: { granularity: UnicodeInspectorGranularity; maxScalars: number },
		activeLookup: UnicodePropertyLookup,
		useWorker: boolean
	): Promise<void> {
		if (!useWorker) {
			const next = inspectUnicode(inputValue, opts, activeLookup);
			if (token !== latestProcessToken) return;
			inspectionResult = next;
			processedByWorker = false;
			isProcessing = false;
			return;
		}

		try {
			const workerResult = await runWorker(inputValue, opts);
			if (token !== latestProcessToken) return;
			inspectionResult = workerResult;
			processedByWorker = true;
		} catch {
			if (token !== latestProcessToken) return;
			inspectionResult = inspectUnicode(inputValue, opts, activeLookup);
			processedByWorker = false;
			addToast(
				'error',
				$t(
					'ui.unicode_inspector.worker_failed',
					'Worker processing failed. Falling back to main thread.'
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
			new URL('../../../workers/encode-unicode-inspector.worker.ts', import.meta.url),
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

	function handleWorkerMessage(event: MessageEvent<UnicodeInspectorWorkerResponse>): void {
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
		opts: { granularity: UnicodeInspectorGranularity; maxScalars: number }
	): Promise<UnicodeInspectorResult> {
		const worker = ensureWorker();
		return new Promise<UnicodeInspectorResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });
			const request: UnicodeInspectorWorkerRequest = {
				id: requestId,
				input: inputValue,
				options: opts
			};
			worker.postMessage(request);
		});
	}

	function formatCodePointLabel(codePoint: number): string {
		return `U+${codePoint.toString(16).toUpperCase().padStart(4, '0')}`;
	}

	function categoryLabel(abbrev: string): string {
		const key = `ui.unicode_inspector.gc.${abbrev}`;
		return $t(key, abbrev);
	}

	function handleTextInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		input.set(target.value);
	}

	function handleGranularityClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const v = target.dataset.granularity as UnicodeInspectorGranularity | undefined;
		if (!v) return;
		granularity = v;
	}

	function handleMaxScalarsChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		const v = Number.parseInt(target.value, 10);
		if (MAX_SCALAR_OPTIONS.includes(v as (typeof MAX_SCALAR_OPTIONS)[number])) {
			maxScalars = v as (typeof MAX_SCALAR_OPTIONS)[number];
		}
	}

	function loadSample(): void {
		input.set(DEFAULT_SAMPLE);
		granularity = 'grapheme';
		maxScalars = 25_000;
	}

	function clearInput(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('ui.unicode_inspector.tab_label', 'Unicode') },
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

	function buildTsv(): string {
		const header = [
			$t('ui.unicode_inspector.col.segment', 'Segment'),
			$t('ui.unicode_inspector.col.codepoint', 'Code point'),
			$t('ui.unicode_inspector.col.utf8', 'UTF-8 (hex)'),
			$t('ui.unicode_inspector.col.category', 'Category'),
			$t('ui.unicode_inspector.col.script', 'Script'),
			$t('ui.unicode_inspector.col.eaw', 'E. Asian width'),
			$t('ui.unicode_inspector.col.name', 'Name')
		].join('\t');
		const lines = flatRows.map((row) => {
			const seg =
				row.clusterStart && row.sequenceName !== null
					? `${row.segment}\n${row.sequenceName}`
					: row.clusterStart
						? row.segment
						: '';
			return [
				seg.replace(/\n/g, ' '),
				formatCodePointLabel(row.scalar.codePoint),
				row.scalar.utf8BytesHex,
				row.scalar.category,
				row.scalar.script,
				row.scalar.eastAsianWidth,
				row.scalar.name.replace(/\t/g, ' ')
			].join('\t');
		});
		return [header, ...lines].join('\n');
	}

	async function copyTsv(): Promise<void> {
		if (flatRows.length === 0) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(buildTsv());
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	function getChoiceButtonClass(active: boolean): string {
		return active
			? 'border-[var(--color-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)]'
			: 'border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]';
	}
</script>

<div class="flex h-full w-full min-h-0 flex-col">
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
					{$t('ui.unicode_inspector.granularity_label', 'Segmentation')}
				</span>
				<div class="flex flex-wrap gap-[var(--space-2)]">
					<button
						type="button"
						data-granularity="grapheme"
						onclick={handleGranularityClick}
						class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(granularity === 'grapheme')}`}
					>
						{$t('ui.unicode_inspector.granularity.grapheme', 'Grapheme clusters')}
					</button>
					<button
						type="button"
						data-granularity="codepoint"
						onclick={handleGranularityClick}
						class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(granularity === 'codepoint')}`}
					>
						{$t('ui.unicode_inspector.granularity.codepoint', 'Unicode scalar values')}
					</button>
				</div>
				<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
					{$t(
						'ui.unicode_inspector.granularity_hint',
						'Grapheme mode uses Intl.Segmenter when available (emoji ZWJ sequences, combining marks). Otherwise each scalar is shown.'
					)}
				</p>
			</div>

			<div class="flex flex-wrap items-end gap-[var(--space-3)]">
				<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<span class="font-[number:var(--weight-semibold)]"
						>{$t('ui.unicode_inspector.max_scalars_label', 'Row limit (scalars)')}</span
					>
					<select
						class="h-8 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[var(--text-primary)]"
						value={maxScalars}
						onchange={handleMaxScalarsChange}
					>
						{#each MAX_SCALAR_OPTIONS as opt}
							<option value={opt}>{opt.toLocaleString()}</option>
						{/each}
					</select>
				</label>
			</div>
		</div>

		<div
			class="mt-[var(--space-2)] flex flex-wrap items-center justify-between gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
		>
			{#if isWorkerEligible}
				<span>
					{$t(
						'ui.unicode_inspector.worker_active',
						{ size: workerThresholdLabel },
						'Large input (>{size}). Inspection runs in a Web Worker.'
					)}
				</span>
			{:else}
				<span></span>
			{/if}
			<div class="flex flex-wrap items-center gap-[var(--space-2)]">
				<button
					type="button"
					onclick={copyTsv}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<Table size={14} />
					{$t('ui.unicode_inspector.copy_tsv', 'Copy TSV')}
				</button>
				<button
					type="button"
					onclick={loadSample}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					{$t('ui.actions.sample', 'Sample')}
				</button>
			</div>
		</div>
	</div>

	<div
		class="grid min-h-0 flex-1 grid-cols-1 gap-0 xl:grid-cols-2 xl:divide-x xl:divide-[var(--border-default)]"
	>
		<div class="flex min-h-[200px] min-w-0 flex-col bg-[var(--bg-base)] xl:min-h-0">
			<div
				class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
			>
				<span>{$t('ui.unicode_inspector.input_label', 'Input')}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					<span>{inputStatusLine}</span>
					<button
						type="button"
						onclick={clearInput}
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
					'ui.unicode_inspector.input_placeholder',
					'Paste any UTF-8 text to inspect code points…'
				)}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-[320px] min-w-0 flex-col bg-[var(--bg-surface)] xl:min-h-0">
			<div
				class="flex flex-wrap items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
			>
				<span>{$t('ui.unicode_inspector.results_label', 'Inspection')}</span>
				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					{#if backendError}
						<span class="text-[var(--text-danger)]">{backendError}</span>
					{:else if lookup === null && browser}
						<span>{$t('ui.unicode_inspector.loading_backend', 'Loading Unicode data…')}</span>
					{/if}
					{#if isProcessing}
						<span>{$t('ui.actions.running', 'Running…')}</span>
					{/if}
					{#if processedByWorker}
						<span
							class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[var(--text-secondary)]"
						>
							{$t('ui.unicode_inspector.worker_badge', 'Worker')}
						</span>
					{/if}
				</div>
			</div>

			{#if inspectionResult}
				<div
					class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]"
				>
					<span>
						{$t(
							'ui.unicode_inspector.summary',
							{
								clusters: String(inspectionResult.metrics.clusterCount),
								scalars: String(inspectionResult.metrics.scalarCount),
								bytes: String(inspectionResult.metrics.inputBytes),
								ms: inspectionResult.durationMs.toFixed(1)
							},
							'{clusters} clusters · {scalars} scalars · {bytes} bytes UTF-8 · {ms} ms'
						)}
					</span>
					{#if inspectionResult.truncated}
						<span class="mt-[var(--space-1)] block text-[var(--text-accent)]">
							{$t(
								'ui.unicode_inspector.truncated',
								{
									omitted: String(inspectionResult.metrics.omittedScalars)
								},
								'Output truncated; {omitted} more scalar(s) not shown. Raise the row limit or shorten input.'
							)}
						</span>
					{/if}
				</div>
			{/if}

			{#if flatRows.length > 0}
				<div
					class="grid min-w-[720px] grid-cols-[minmax(0,1.4fr)_88px_56px_minmax(88px,1fr)_64px_minmax(0,1fr)_44px_minmax(0,2fr)] border-b border-[var(--border-default)] bg-[var(--bg-base)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-tertiary)]"
				>
					<div class="px-[var(--space-2)]">
						{$t('ui.unicode_inspector.col.segment', 'Segment')}
					</div>
					<div class="px-[var(--space-2)]">{$t('ui.unicode_inspector.col.codepoint', 'U+')}</div>
					<div class="px-[var(--space-2)] text-center">
						{$t('ui.unicode_inspector.col.glyph', 'Glyph')}
					</div>
					<div class="px-[var(--space-2)]">{$t('ui.unicode_inspector.col.utf8', 'UTF-8')}</div>
					<div class="px-[var(--space-2)]">{$t('ui.unicode_inspector.col.category', 'Cat.')}</div>
					<div class="px-[var(--space-2)]">{$t('ui.unicode_inspector.col.script', 'Script')}</div>
					<div class="px-[var(--space-2)] text-center">{$t('ui.unicode_inspector.col.eaw', 'EaW')}</div>
					<div class="px-[var(--space-2)]">{$t('ui.unicode_inspector.col.name', 'Name')}</div>
				</div>
			{/if}

			<div
				bind:this={scrollElement}
				class="min-h-[280px] flex-1 overflow-auto xl:min-h-0"
				role="region"
				aria-label={$t('ui.unicode_inspector.table_region', 'Unicode scalar table')}
			>
				{#if flatRows.length === 0 && lookup !== null && !backendError}
					<p class="p-[var(--space-4)] text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
						{$t('ui.unicode_inspector.empty_hint', 'Type or paste text to see code points and names.')}
					</p>
				{:else if flatRows.length > 0}
					<div
						class="relative min-w-[720px] w-full"
						style={`height: ${$rowVirtualizer.getTotalSize()}px`}
					>
						{#each $rowVirtualizer.getVirtualItems() as vRow (vRow.key)}
							{@const row = flatRows[vRow.index]}
							<div
								class="absolute left-0 top-0 grid w-full grid-cols-[minmax(0,1.4fr)_88px_56px_minmax(88px,1fr)_64px_minmax(0,1fr)_44px_minmax(0,2fr)] border-b border-[var(--border-subtle)] text-[length:var(--text-xs)]"
								style={`height: ${vRow.size}px; transform: translateY(${vRow.start}px)`}
							>
								<div
									class="border-r border-[var(--border-subtle)] p-[var(--space-2)] font-[family-name:var(--font-mono)] text-[var(--text-primary)]"
								>
									{#if row.clusterStart}
										<div class="break-all text-[length:var(--text-sm)]">{row.segment}</div>
										{#if row.sequenceName}
											<div class="mt-[var(--space-1)] text-[var(--text-tertiary)]">
												{row.sequenceName}
											</div>
										{/if}
									{/if}
								</div>
								<div
									class="border-r border-[var(--border-subtle)] p-[var(--space-2)] font-[family-name:var(--font-mono)] text-[var(--text-secondary)]"
								>
									{formatCodePointLabel(row.scalar.codePoint)}
								</div>
								<div
									class="border-r border-[var(--border-subtle)] p-[var(--space-2)] text-center font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
								>
									{String.fromCodePoint(row.scalar.codePoint)}
								</div>
								<div
									class="border-r border-[var(--border-subtle)] p-[var(--space-2)] font-[family-name:var(--font-mono)] text-[var(--text-secondary)]"
								>
									{row.scalar.utf8BytesHex}
								</div>
								<div
									class="border-r border-[var(--border-subtle)] p-[var(--space-2)] font-[family-name:var(--font-mono)] text-[var(--text-secondary)]"
									title={categoryLabel(row.scalar.category)}
								>
									{row.scalar.category}
								</div>
								<div
									class="border-r border-[var(--border-subtle)] p-[var(--space-2)] text-[var(--text-secondary)]"
									title={row.scalar.script}
								>
									<span class="line-clamp-2">{row.scalar.script}</span>
								</div>
								<div
									class="border-r border-[var(--border-subtle)] p-[var(--space-2)] text-center font-[family-name:var(--font-mono)] text-[var(--text-secondary)]"
								>
									{row.scalar.eastAsianWidth}
								</div>
								<div class="min-w-0 p-[var(--space-2)] text-[var(--text-secondary)]">
									<span class="line-clamp-3">{row.scalar.name}</span>
								</div>
							</div>
						{/each}
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
	onCancel={noop}
/>
