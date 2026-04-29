<script lang="ts">
	import { onDestroy } from 'svelte';
	import { SvelteMap } from 'svelte/reactivity';
	import { page } from '$app/stores';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import type { ToolDefinition } from '$registry/types.js';
	import {
		SVG_OPTIMIZER_DEFAULT_OPTIONS,
		SVG_OPTIMIZER_WORKER_THRESHOLD_BYTES,
		getSvgUtf8ByteSize,
		looksLikeSvgDocument,
		optimizeSvg,
		readSvgFileAsText,
		shouldUseSvgOptimizerWorker,
		summarizeSvg,
		type SvgDocumentSummary,
		type SvgOptimizeInput,
		type SvgOptimizeOptions,
		type SvgOptimizeResult,
		type SvgOptimizerWorkerRequest,
		type SvgOptimizerWorkerResponse
	} from '$engines/image/index.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import {
		Check,
		ClipboardPaste,
		Code2,
		Copy,
		Download,
		Eraser,
		Eye,
		FileUp,
		Settings,
		WandSparkles,
		Zap
	} from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: SvgOptimizeResult) => void;
		reject: (reason: Error) => void;
	};

	type ToggleOption = {
		key:
			| 'removeMetadata'
			| 'removeComments'
			| 'removeDesc'
			| 'cleanupIds'
			| 'collapseGroups'
			| 'convertPathData'
			| 'mergePaths'
			| 'sortAttrs'
			| 'removeDimensions'
			| 'multipass'
			| 'pretty';
		labelKey: string;
		fallback: string;
	};

	type StatCard = {
		label: string;
		value: string;
		helper: string;
	};

	const DEFAULT_SAMPLE_INPUT =
		`<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
  <metadata>fmtly sample metadata</metadata>
  <desc>Layered SVG icon sample</desc>
  <!-- comment to remove -->
  <g id="outer-badge">
    <path d="M120 16 L149 89 H228 L165 132 L190 208 L120 163 L50 208 L75 132 L12 89 H91 Z" fill="#2563eb"></path>
    <g id="inner-mark">
      <circle cx="120" cy="120" r="34" fill="#ffffff"></circle>
      <path d="M105 120 l10 10 21-24" fill="none" stroke="#2563eb" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"></path>
    </g>
  </g>
</svg>`;

	const TOGGLE_OPTIONS: ToggleOption[] = [
		{
			key: 'removeMetadata',
			labelKey: 'ui.svg_optimizer.option.remove_metadata',
			fallback: 'Remove metadata'
		},
		{
			key: 'removeComments',
			labelKey: 'ui.svg_optimizer.option.remove_comments',
			fallback: 'Remove comments'
		},
		{
			key: 'removeDesc',
			labelKey: 'ui.svg_optimizer.option.remove_desc',
			fallback: 'Remove <desc>'
		},
		{
			key: 'cleanupIds',
			labelKey: 'ui.svg_optimizer.option.cleanup_ids',
			fallback: 'Clean up IDs'
		},
		{
			key: 'collapseGroups',
			labelKey: 'ui.svg_optimizer.option.collapse_groups',
			fallback: 'Collapse groups'
		},
		{
			key: 'convertPathData',
			labelKey: 'ui.svg_optimizer.option.convert_path_data',
			fallback: 'Simplify path data'
		},
		{
			key: 'mergePaths',
			labelKey: 'ui.svg_optimizer.option.merge_paths',
			fallback: 'Merge paths'
		},
		{
			key: 'sortAttrs',
			labelKey: 'ui.svg_optimizer.option.sort_attrs',
			fallback: 'Sort attributes'
		},
		{
			key: 'removeDimensions',
			labelKey: 'ui.svg_optimizer.option.remove_dimensions',
			fallback: 'Remove width/height'
		},
		{
			key: 'multipass',
			labelKey: 'ui.svg_optimizer.option.multipass',
			fallback: 'Run multipass optimization'
		},
		{
			key: 'pretty',
			labelKey: 'ui.svg_optimizer.option.pretty',
			fallback: 'Pretty-print output'
		}
	];

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let sourceText = $state(DEFAULT_SAMPLE_INPUT);
	let sourceName = $state('sample.svg');
	let result = $state<SvgOptimizeResult | null>(null);
	let errorMessage = $state('');
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let showOptions = $state(true);
	let dragOver = $state(false);
	let fileInputRef: HTMLInputElement | null = $state(null);
	let outputPreviewMode = $state<'preview' | 'code'>('preview');
	let options = $state<SvgOptimizeOptions>({ ...SVG_OPTIMIZER_DEFAULT_OPTIONS });
	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new SvelteMap<number, PendingWorkerRequest>();

	const EMPTY_SUMMARY: SvgDocumentSummary = {
		sizeBytes: 0,
		elementCount: 0,
		viewBox: '',
		width: '',
		height: ''
	};

	let sourceInput = $derived<SvgOptimizeInput>({
		content: sourceText,
		sourceName: sourceName || 'untitled.svg',
		sourceSizeBytes: getSvgUtf8ByteSize(sourceText)
	});
	let sourceSummary = $derived(safeSummarize(sourceText));
	let optimizedSummary = $derived(result?.metadata.optimized ?? EMPTY_SUMMARY);
	let sourcePreviewUrl = $derived(createSvgPreviewUrl(sourceText));
	let outputPreviewUrl = $derived(createSvgPreviewUrl(result?.optimizedText ?? ''));
	let workerThresholdLabel = $derived(formatBytes(SVG_OPTIMIZER_WORKER_THRESHOLD_BYTES));
	let sourceStatus = $derived(
		$t(
			'ui.svg_optimizer.source_status',
			{
				size: formatBytes(sourceInput.sourceSizeBytes),
				elements: sourceSummary.elementCount.toLocaleString()
			},
			'{size} · {elements} elements'
		)
	);
	let outputStatus = $derived(
		$t(
			'ui.svg_optimizer.output_status',
			{
				size: formatBytes(optimizedSummary.sizeBytes),
				elements: optimizedSummary.elementCount.toLocaleString()
			},
			'{size} · {elements} elements'
		)
	);
	let sourceGeometry = $derived(formatGeometry(sourceSummary));
	let outputGeometry = $derived(formatGeometry(optimizedSummary));
	let isWorkerEligible = $derived(shouldUseSvgOptimizerWorker(sourceInput.sourceSizeBytes));
	let canCopyOutput = $derived(Boolean(result?.optimizedText));
	let canDownloadOutput = $derived(Boolean(result?.optimizedText));
	let statCards = $derived<StatCard[]>([
		{
			label: $t('ui.svg_optimizer.stat.original_size', 'Original size'),
			value: formatBytes(sourceSummary.sizeBytes),
			helper: $t('ui.svg_optimizer.stat.original_elements', 'Source elements')
		},
		{
			label: $t('ui.svg_optimizer.stat.optimized_size', 'Optimized size'),
			value: formatBytes(optimizedSummary.sizeBytes),
			helper: $t('ui.svg_optimizer.stat.optimized_elements', 'Optimized elements')
		},
		{
			label: $t('ui.svg_optimizer.stat.size_delta', 'Size delta'),
			value: result ? formatSignedPercent(result.metadata.sizeDeltaPercent) : '—',
			helper: $t('ui.svg_optimizer.stat.size_delta_helper', 'negative means smaller')
		},
		{
			label: $t('ui.svg_optimizer.stat.duration', 'Runtime'),
			value: result ? formatDuration(result.durationMs) : '—',
			helper: $t('ui.svg_optimizer.stat.runtime_helper', 'per optimization run')
		}
	]);

	$effect(() => {
		const input: SvgOptimizeInput = sourceInput;
		const nextOptions: SvgOptimizeOptions = { ...options };
		const token = ++latestProcessToken;
		errorMessage = '';

		if (!input.content.trim()) {
			result = null;
			isProcessing = false;
			processedByWorker = false;
			return;
		}

		isProcessing = true;
		void runOptimization(token, input, nextOptions);
	});

	onDestroy(() => {
		releaseWorker();
	});

	async function runOptimization(
		token: number,
		input: SvgOptimizeInput,
		nextOptions: SvgOptimizeOptions
	): Promise<void> {
		const useWorker = shouldUseSvgOptimizerWorker(input.sourceSizeBytes);
		try {
			const optimized = useWorker
				? await runWorker(input, nextOptions)
				: await optimizeSvg(input, nextOptions);
			if (token !== latestProcessToken) return;
			result = optimized;
			processedByWorker = useWorker;
			errorMessage = '';
		} catch (error: unknown) {
			if (token !== latestProcessToken) return;
			if (useWorker) {
				try {
					const fallback = await optimizeSvg(input, nextOptions);
					if (token !== latestProcessToken) return;
					result = fallback;
					processedByWorker = false;
					errorMessage = '';
					addToast(
						'warning',
						$t(
							'ui.svg_optimizer.worker_failed',
							'Worker optimization failed. Falling back to main thread processing.'
						)
					);
					return;
				} catch (fallbackError: unknown) {
					if (token !== latestProcessToken) return;
					result = null;
					processedByWorker = false;
					errorMessage =
						fallbackError instanceof Error
							? fallbackError.message
							: $t('ui.svg_optimizer.optimize_failed', 'SVG optimization failed');
				}
			} else {
				result = null;
				processedByWorker = false;
				errorMessage =
					error instanceof Error
						? error.message
						: $t('ui.svg_optimizer.optimize_failed', 'SVG optimization failed');
			}
		} finally {
			if (token === latestProcessToken) {
				isProcessing = false;
			}
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance) return workerInstance;
		workerInstance = new Worker(new URL('../../../workers/svg-optimizer.worker.ts', import.meta.url), {
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

	function handleWorkerMessage(event: MessageEvent<SvgOptimizerWorkerResponse>): void {
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

	function runWorker(input: SvgOptimizeInput, nextOptions: SvgOptimizeOptions): Promise<SvgOptimizeResult> {
		const worker = ensureWorker();
		return new Promise<SvgOptimizeResult>((resolve, reject) => {
			const id = ++workerRequestId;
			pendingWorkerRequests.set(id, { resolve, reject });
			const request: SvgOptimizerWorkerRequest = {
				id,
				input,
				options: nextOptions
			};
			worker.postMessage(request);
		});
	}

	function handleSourceInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		sourceText = target.value;
	}

	function triggerUpload(): void {
		fileInputRef?.click();
	}

	function handleFileInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const file = target.files?.[0];
		if (file) void loadFile(file);
		target.value = '';
	}

	async function loadFile(file: File): Promise<void> {
		const normalizedName = file.name.toLowerCase();
		if (!(file.type === 'image/svg+xml' || normalizedName.endsWith('.svg'))) {
			addToast('error', $t('ui.svg_optimizer.file_read_error', 'Could not load SVG file'));
			return;
		}
		try {
			const loaded = await readSvgFileAsText(file);
			sourceText = loaded.content;
			sourceName = loaded.sourceName;
			addToast(
				'success',
				$t('ui.svg_optimizer.file_loaded', { name: loaded.sourceName }, 'Loaded {name}')
			);
		} catch {
			addToast('error', $t('ui.svg_optimizer.file_read_error', 'Could not load SVG file'));
		}
	}

	async function pasteFromClipboard(): Promise<void> {
		try {
			const text = await navigator.clipboard.readText();
			if (!text.trim()) {
				addToast('info', $t('ui.svg_optimizer.paste_empty', 'Clipboard is empty'));
				return;
			}
			sourceText = text;
			sourceName = 'clipboard.svg';
			addToast('success', $t('ui.svg_optimizer.paste_success', 'Pasted SVG markup'));
		} catch {
			addToast('error', $t('ui.svg_optimizer.paste_error', 'Clipboard paste failed'));
		}
	}

	function loadSample(): void {
		sourceText = DEFAULT_SAMPLE_INPUT;
		sourceName = 'sample.svg';
		addToast('success', $t('ui.svg_optimizer.sample_loaded', 'Sample SVG loaded'));
	}

	function clearAll(): void {
		sourceText = '';
		sourceName = 'untitled.svg';
		result = null;
		errorMessage = '';
		processedByWorker = false;
		addToast('info', $t('ui.svg_optimizer.input_cleared', 'SVG input cleared'));
	}

	function toggleOption(key: ToggleOption['key']): void {
		options = {
			...options,
			[key]: !options[key]
		};
	}

	function handleFloatPrecisionChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		options = {
			...options,
			floatPrecision: clampInteger(target.value, SVG_OPTIMIZER_DEFAULT_OPTIONS.floatPrecision, 0, 6)
		};
	}

	function handleIndentChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		options = {
			...options,
			indent: clampInteger(target.value, SVG_OPTIMIZER_DEFAULT_OPTIONS.indent, 0, 8)
		};
	}

	function toggleOptionsPanel(): void {
		showOptions = !showOptions;
	}

	function switchToPreview(): void {
		outputPreviewMode = 'preview';
	}

	function switchToCode(): void {
		outputPreviewMode = 'code';
	}

	async function copyOutput(): Promise<void> {
		if (!result?.optimizedText) {
			addToast('info', $t('ui.svg_optimizer.copy_empty', 'Nothing to copy'));
			return;
		}
		try {
			await navigator.clipboard.writeText(result.optimizedText);
			addToast('success', $t('ui.svg_optimizer.copy_success', 'Optimized SVG copied'));
		} catch {
			addToast('error', $t('ui.svg_optimizer.copy_error', 'Copy failed'));
		}
	}

	function downloadOutput(): void {
		if (!result?.optimizedText) {
			addToast('info', $t('ui.svg_optimizer.download_empty', 'Nothing to download'));
			return;
		}
		try {
			const blob = new Blob([result.optimizedText], { type: 'image/svg+xml;charset=utf-8' });
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = result.downloadFilename;
			document.body.append(link);
			link.click();
			link.remove();
			URL.revokeObjectURL(url);
			addToast(
				'success',
				$t(
					'ui.svg_optimizer.download_success',
					{ filename: result.downloadFilename },
					'Downloaded {filename}'
				)
			);
		} catch {
			addToast('error', $t('ui.svg_optimizer.download_error', 'Download failed'));
		}
	}

	function handleDragEnter(event: DragEvent): void {
		event.preventDefault();
		dragOver = true;
	}

	function handleDragLeave(event: DragEvent): void {
		event.preventDefault();
		dragOver = false;
	}

	function handleDragOver(event: DragEvent): void {
		event.preventDefault();
		if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
	}

	function handleDrop(event: DragEvent): void {
		event.preventDefault();
		dragOver = false;
		const file = event.dataTransfer?.files?.[0];
		if (file) void loadFile(file);
	}

	function safeSummarize(markup: string): SvgDocumentSummary {
		if (!markup.trim() || !looksLikeSvgDocument(markup)) {
			return EMPTY_SUMMARY;
		}
		try {
			return summarizeSvg(markup);
		} catch {
			return EMPTY_SUMMARY;
		}
	}

	function createSvgPreviewUrl(markup: string): string {
		if (!markup.trim() || !looksLikeSvgDocument(markup)) {
			return '';
		}
		return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`;
	}

	function formatGeometry(summary: SvgDocumentSummary): string {
		const dimensions =
			summary.width && summary.height ? `${summary.width} × ${summary.height}` : '—';
		const viewBox = summary.viewBox || '—';
		return `${dimensions} · viewBox ${viewBox}`;
	}

	function formatBytes(bytes: number): string {
		if (!Number.isFinite(bytes) || bytes <= 0) return '0 B';
		const units = ['B', 'KB', 'MB', 'GB'];
		let size = bytes;
		let index = 0;
		while (size >= 1024 && index < units.length - 1) {
			size /= 1024;
			index += 1;
		}
		const precision = size >= 10 || index === 0 ? 0 : 1;
		return `${size.toFixed(precision)} ${units[index]}`;
	}

	function formatSignedPercent(value: number): string {
		if (!Number.isFinite(value)) return '—';
		const sign = value > 0 ? '+' : '';
		return `${sign}${value.toFixed(1)}%`;
	}

	function formatDuration(durationMs: number): string {
		if (!Number.isFinite(durationMs) || durationMs <= 0) return '0 ms';
		return durationMs < 1000 ? `${Math.round(durationMs)} ms` : `${(durationMs / 1000).toFixed(2)} s`;
	}

	function clampInteger(value: string, fallback: number, min: number, max: number): number {
		const parsed = Number.parseInt(value, 10);
		if (!Number.isFinite(parsed)) return fallback;
		return Math.min(max, Math.max(min, parsed));
	}
</script>

<div class="flex h-full min-h-0 w-full flex-col">
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="image"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
		<div class="grid grid-cols-1 gap-[var(--space-3)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
			<div class="flex flex-wrap items-center gap-[var(--space-2)]">
				<button
					type="button"
					onclick={triggerUpload}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<FileUp size={14} />
					{$t('ui.actions.upload', 'Upload')}
				</button>
				<button
					type="button"
					onclick={pasteFromClipboard}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<ClipboardPaste size={14} />
					{$t('ui.svg_optimizer.paste', 'Paste SVG')}
				</button>
				<button
					type="button"
					onclick={loadSample}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<WandSparkles size={14} />
					{$t('ui.actions.sample', 'Sample')}
				</button>
				<button
					type="button"
					onclick={clearAll}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<Eraser size={14} />
					{$t('ui.actions.clear', 'Clear')}
				</button>
				<input
					bind:this={fileInputRef}
					type="file"
					class="sr-only"
					accept=".svg,image/svg+xml"
					onchange={handleFileInput}
				/>
			</div>
			<div class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{sourceName || $t('ui.svg_optimizer.no_file', 'No SVG selected')}</span>
				<span>{sourceStatus}</span>
				{#if isWorkerEligible}
					<span>
						{$t(
							'ui.svg_optimizer.worker_active',
							{ size: workerThresholdLabel },
							'Large SVG detected (>{size}). Optimization runs in a Web Worker.'
						)}
					</span>
				{/if}
			</div>
		</div>
	</div>

	<div class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-[minmax(0,1.1fr)_minmax(420px,0.9fr)] xl:divide-x xl:divide-[var(--border-default)]">
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.svg_optimizer.input_label', 'Source SVG')}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					<span>{formatBytes(sourceInput.sourceSizeBytes)}</span>
					<button
						type="button"
						onclick={toggleOptionsPanel}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Settings size={14} />
						{$t('ui.actions.options', 'Options')}
					</button>
				</div>
			</div>

			{#if showOptions}
				<div class="grid gap-[var(--space-3)] border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
					<div class="grid grid-cols-1 gap-[var(--space-2)] sm:grid-cols-2">
						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span>{$t('ui.svg_optimizer.float_precision', 'Float precision')}</span>
							<input
								type="number"
								min="0"
								max="6"
								value={String(options.floatPrecision)}
								oninput={handleFloatPrecisionChange}
								class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
							/>
						</label>
						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span>{$t('ui.svg_optimizer.indent', 'Pretty indent')}</span>
							<input
								type="number"
								min="0"
								max="8"
								value={String(options.indent)}
								oninput={handleIndentChange}
								class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
							/>
						</label>
					</div>
					<div class="grid grid-cols-1 gap-[var(--space-2)] sm:grid-cols-2 xl:grid-cols-3">
						{#each TOGGLE_OPTIONS as option (option.key)}
							<label class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
								<input
									type="checkbox"
									checked={options[option.key]}
									onchange={() => toggleOption(option.key)}
									class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--accent)]"
								/>
								<span>{$t(option.labelKey, option.fallback)}</span>
							</label>
						{/each}
					</div>
					<div class="grid grid-cols-1 gap-[var(--space-2)] sm:grid-cols-2">
						<div class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
							<Check size={16} class="mt-0.5 shrink-0 text-[var(--accent)]" />
							<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
								{$t(
									'ui.svg_optimizer.privacy_note',
									'Optimization is local; SVG files never leave your browser.'
								)}
							</p>
						</div>
						<div class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
							<Zap size={16} class="mt-0.5 shrink-0 text-[var(--accent)]" />
							<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
								{$t(
									'ui.svg_optimizer.performance_note',
									{ size: workerThresholdLabel },
									'Large SVG inputs use a Web Worker above {size}.'
								)}
							</p>
						</div>
					</div>
				</div>
			{/if}

			<div
				role="region"
				aria-label={$t('ui.svg_optimizer.drop_title', 'Drop an SVG file here')}
				class="mx-[var(--space-3)] mt-[var(--space-3)] flex min-h-[140px] items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-4)] py-[var(--space-5)] text-center text-[length:var(--text-sm)] text-[var(--text-secondary)]"
				class:border-[var(--accent)]={dragOver}
				ondragenter={handleDragEnter}
				ondragleave={handleDragLeave}
				ondragover={handleDragOver}
				ondrop={handleDrop}
			>
				<div class="max-w-md">
					<p>{$t('ui.svg_optimizer.drop_title', 'Drop an SVG file here')}</p>
					<p class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t(
							'ui.svg_optimizer.drop_hint',
							'Or paste raw SVG markup, upload a file, or load the sample asset.'
						)}
					</p>
				</div>
			</div>

			<div class="m-[var(--space-3)] mt-[var(--space-3)] grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-[inset_0_1px_0_0_var(--border-subtle)]">
				<div class="border-b border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
					{$t('ui.svg_optimizer.source_editor_label', 'SVG markup editor')}
				</div>
				<textarea
					value={sourceText}
					oninput={handleSourceInput}
					class="block min-h-[260px] w-full flex-1 resize-none border-0 bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
					placeholder={$t('ui.svg_optimizer.input_placeholder', 'Paste SVG markup here…')}
					spellcheck="false"
				></textarea>
			</div>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="grid grid-cols-1 gap-[var(--space-2)] border-b border-[var(--border-default)] p-[var(--space-3)] sm:grid-cols-2 xl:grid-cols-4">
				{#each statCards as card (card.label)}
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{card.label}</div>
						<div class="mt-[var(--space-1)] text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							{card.value}
						</div>
						<div class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{card.helper}</div>
					</div>
				{/each}
			</div>

			<div class="grid grid-cols-1 gap-[var(--space-2)] border-b border-[var(--border-default)] p-[var(--space-3)] sm:grid-cols-2">
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.svg_optimizer.geometry_source', 'Source geometry')}
					</div>
					<div class="mt-[var(--space-1)] text-[length:var(--text-sm)] text-[var(--text-primary)]">{sourceGeometry}</div>
				</div>
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.svg_optimizer.geometry_output', 'Optimized geometry')}
					</div>
					<div class="mt-[var(--space-1)] text-[length:var(--text-sm)] text-[var(--text-primary)]">{outputGeometry}</div>
				</div>
			</div>

			<div class="flex flex-wrap items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<div class="flex items-center gap-[var(--space-2)]">
					<button
						type="button"
						onclick={switchToPreview}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] px-[var(--space-2)] py-[var(--space-1)] {outputPreviewMode === 'preview' ? 'bg-[var(--accent)] text-white' : 'border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]'}"
					>
						<Eye size={14} />
						{$t('ui.svg_optimizer.preview_mode', 'Preview')}
					</button>
					<button
						type="button"
						onclick={switchToCode}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] px-[var(--space-2)] py-[var(--space-1)] {outputPreviewMode === 'code' ? 'bg-[var(--accent)] text-white' : 'border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]'}"
					>
						<Code2 size={14} />
						{$t('ui.svg_optimizer.code_mode', 'Code')}
					</button>
				</div>
				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.svg_optimizer.processing', 'Optimizing...')}</span>
					{/if}
					{#if processedByWorker}
						<span>{$t('ui.svg_optimizer.worker_used', 'Processed off-thread')}</span>
					{/if}
					<span>{outputStatus}</span>
					<button
						type="button"
						disabled={!canCopyOutput}
						onclick={copyOutput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Copy size={14} />
						{$t('ui.actions.copy', 'Copy')}
					</button>
					<button
						type="button"
						disabled={!canDownloadOutput}
						onclick={downloadOutput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Download size={14} />
						{$t('ui.actions.download', 'Download')}
					</button>
				</div>
			</div>

			{#if errorMessage}
				<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
					<div class="rounded-[var(--radius-md)] border border-[var(--border-danger)] bg-[var(--bg-danger-subtle)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-danger)]">
						{errorMessage}
					</div>
				</div>
			{/if}

			{#if outputPreviewMode === 'preview'}
				<div class="grid min-h-0 flex-1 grid-cols-1 xl:grid-cols-2 xl:divide-x xl:divide-[var(--border-default)]">
					<div class="flex min-h-[220px] flex-col bg-[var(--bg-base)]">
						<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t('ui.svg_optimizer.source_preview_label', 'Source preview')}
						</div>
						<div class="flex min-h-0 flex-1 items-center justify-center overflow-auto p-[var(--space-4)]">
							{#if sourcePreviewUrl}
								<img
									src={sourcePreviewUrl}
									alt={$t('ui.svg_optimizer.source_preview_alt', 'Source SVG preview')}
									class="max-h-full max-w-full object-contain"
								/>
							{:else}
								<p class="text-center text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
									{$t('ui.svg_optimizer.source_preview_placeholder', 'Valid source SVG preview appears here.')}
								</p>
							{/if}
						</div>
					</div>
					<div class="flex min-h-[220px] flex-col bg-[var(--bg-base)]">
						<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t('ui.svg_optimizer.output_preview_label', 'Optimized preview')}
						</div>
						<div class="flex min-h-0 flex-1 items-center justify-center overflow-auto p-[var(--space-4)]">
							{#if outputPreviewUrl}
								<img
									src={outputPreviewUrl}
									alt={$t('ui.svg_optimizer.output_preview_alt', 'Optimized SVG preview')}
									class="max-h-full max-w-full object-contain"
								/>
							{:else}
								<p class="text-center text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
									{$t('ui.svg_optimizer.output_placeholder', 'Optimized SVG output appears here.')}
								</p>
							{/if}
						</div>
					</div>
				</div>
			{:else}
				<div class="min-h-0 flex-1 overflow-auto p-[var(--space-4)]">
					<pre class="min-h-full whitespace-pre-wrap break-words rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)]">{result?.optimizedText ?? ''}</pre>
				</div>
			{/if}
		</div>
	</div>
</div>
