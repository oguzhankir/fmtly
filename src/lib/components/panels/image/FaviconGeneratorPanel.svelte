<script lang="ts">
	import { onDestroy } from 'svelte';
	import { SvelteMap } from 'svelte/reactivity';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import {
		FAVICON_GENERATOR_DEFAULT_OPTIONS,
		FAVICON_GENERATOR_WORKER_THRESHOLD_BYTES,
		buildFaviconZip,
		generateFaviconSet,
		readFaviconImageFile,
		shouldUseFaviconGeneratorWorker,
		type FaviconFile,
		type FaviconGeneratorWorkerRequest,
		type FaviconGeneratorWorkerResponse,
		type FaviconInput,
		type FaviconOptions,
		type FaviconResult
	} from '$engines/image/index.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Archive, Download, Eraser, FileImage, ImagePlus } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: FaviconResult) => void;
		reject: (reason: Error) => void;
	};

	const ACCEPTED_TYPES = 'image/png,image/jpeg,image/webp,image/svg+xml,image/gif,image/bmp';

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let inputData = $state<FaviconInput | null>(null);
	let result = $state<FaviconResult | null>(null);
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let dragOver = $state(false);
	let fileInputRef: HTMLInputElement | null = $state(null);
	let includeIco = $state(FAVICON_GENERATOR_DEFAULT_OPTIONS.includeIco);
	let includeSvg = $state(FAVICON_GENERATOR_DEFAULT_OPTIONS.includeSvg);
	let includeManifest = $state(FAVICON_GENERATOR_DEFAULT_OPTIONS.includeManifest);

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new SvelteMap<number, PendingWorkerRequest>();

	let sourceName = $derived(inputData?.sourceName ?? '');
	let sourceIsSvg = $derived(inputData?.isSvg ?? false);
	let canDownloadAll = $derived(Boolean(result?.files.length));
	let workerThresholdLabel = $derived(formatBytes(FAVICON_GENERATOR_WORKER_THRESHOLD_BYTES));
	let isWorkerEligible = $derived(
		shouldUseFaviconGeneratorWorker(inputData?.sourceSizeBytes ?? 0, inputData?.isSvg ?? false)
	);
	let totalFiles = $derived(result?.metadata.totalFiles ?? 0);
	let totalSize = $derived(formatBytes(result?.metadata.totalSizeBytes ?? 0));
	let durationMs = $derived(result ? result.metadata.durationMs.toFixed(0) : '—');
	let sourceDimensions = $derived(
		result
			? `${result.metadata.sourceWidth}×${result.metadata.sourceHeight}px`
			: '—'
	);

	$effect(() => {
		if (!inputData) {
			result = null;
			return;
		}
		const token = ++latestProcessToken;
		const options = readOptions();
		isProcessing = true;
		void processGenerate(token, inputData, options);
	});

	onDestroy(() => {
		releaseWorker();
	});

	async function processGenerate(
		token: number,
		input: FaviconInput,
		options: FaviconOptions
	): Promise<void> {
		const useWorker = shouldUseFaviconGeneratorWorker(input.sourceSizeBytes, input.isSvg);
		try {
			const next = useWorker
				? await runWorker(input, options)
				: await generateFaviconSet(input, options);
			if (token !== latestProcessToken) return;
			result = next;
			processedByWorker = useWorker;
		} catch {
			if (token !== latestProcessToken) return;
			try {
				const fallback = await generateFaviconSet(input, options);
				if (token !== latestProcessToken) return;
				result = fallback;
				processedByWorker = false;
				addToast('warning', $t('ui.favicon_generator.worker_failed', 'Worker failed, processed on main thread'));
			} catch (error: unknown) {
				if (token !== latestProcessToken) return;
				result = null;
				addToast(
					'error',
					error instanceof Error
						? error.message
						: $t('ui.favicon_generator.generate_failed', 'Favicon generation failed')
				);
			}
		} finally {
			if (token === latestProcessToken) isProcessing = false;
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance) return workerInstance;
		workerInstance = new Worker(
			new URL('../../../workers/favicon-generator.worker.ts', import.meta.url),
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

	function handleWorkerMessage(event: MessageEvent<FaviconGeneratorWorkerResponse>): void {
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

	function runWorker(input: FaviconInput, options: FaviconOptions): Promise<FaviconResult> {
		const worker = ensureWorker();
		return new Promise<FaviconResult>((resolve, reject) => {
			const id = ++workerRequestId;
			pendingWorkerRequests.set(id, { resolve, reject });
			const request: FaviconGeneratorWorkerRequest = { id, input, options };
			worker.postMessage(request);
		});
	}

	function readOptions(): FaviconOptions {
		return { includeIco, includeSvg, includeManifest };
	}

	function openPicker(): void {
		fileInputRef?.click();
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

	function handleFileInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const file = target.files?.[0];
		if (file) void loadFile(file);
		target.value = '';
	}

	async function loadFile(file: File): Promise<void> {
		if (!file.type.startsWith('image/')) {
			addToast('error', $t('ui.favicon_generator.file_type_error', 'Please upload a valid image file'));
			return;
		}
		try {
			inputData = await readFaviconImageFile(file);
			addToast(
				'success',
				$t('ui.favicon_generator.file_loaded', { name: inputData.sourceName }, 'Loaded {name}')
			);
		} catch {
			addToast('error', $t('ui.favicon_generator.file_read_error', 'Could not read image file'));
		}
	}

	function clearInput(): void {
		inputData = null;
		result = null;
		addToast('info', $t('ui.favicon_generator.input_cleared', 'Input cleared'));
	}

	function downloadFile(file: FaviconFile): void {
		try {
			const link = document.createElement('a');
			link.href = file.dataUrl;
			link.download = file.filename;
			document.body.append(link);
			link.click();
			link.remove();
			addToast(
				'success',
				$t('ui.favicon_generator.download_success', { filename: file.filename }, 'Downloaded {filename}')
			);
		} catch {
			addToast('error', $t('ui.favicon_generator.download_error', 'Download failed'));
		}
	}

	function downloadManifest(): void {
		if (!result?.manifestJson) return;
		try {
			const blob = new Blob([result.manifestJson], { type: 'application/json' });
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = 'site.webmanifest';
			document.body.append(link);
			link.click();
			link.remove();
			URL.revokeObjectURL(url);
			addToast('success', $t('ui.favicon_generator.download_success', { filename: 'site.webmanifest' }, 'Downloaded site.webmanifest'));
		} catch {
			addToast('error', $t('ui.favicon_generator.download_error', 'Download failed'));
		}
	}

	function downloadAll(): void {
		if (!result) return;
		try {
			const zipData = buildFaviconZip(result.files, result.manifestJson);
			const blob = new Blob([zipData.buffer as ArrayBuffer], { type: 'application/zip' });
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = 'favicons.zip';
			document.body.append(link);
			link.click();
			link.remove();
			URL.revokeObjectURL(url);
			addToast('success', $t('ui.favicon_generator.zip_downloaded', 'favicons.zip downloaded'));
		} catch {
			addToast('error', $t('ui.favicon_generator.download_error', 'Download failed'));
		}
	}

	function formatBytes(bytes: number): string {
		if (!Number.isFinite(bytes) || bytes <= 0) return '0 B';
		const units = ['B', 'KB', 'MB'];
		let size = bytes;
		let index = 0;
		while (size >= 1024 && index < units.length - 1) {
			size /= 1024;
			index++;
		}
		const precision = size >= 10 || index === 0 ? 0 : 1;
		return `${size.toFixed(precision)} ${units[index]}`;
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

	<!-- Toolbar -->
	<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
		<div class="flex flex-wrap items-center justify-between gap-[var(--space-2)]">
			<div class="flex flex-wrap items-center gap-[var(--space-2)]">
				<button
					type="button"
					onclick={openPicker}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<ImagePlus size={14} />
					{$t('ui.favicon_generator.upload', 'Upload image')}
				</button>
				<button
					type="button"
					onclick={clearInput}
					disabled={!inputData}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] disabled:opacity-40"
				>
					<Eraser size={14} />
					{$t('ui.favicon_generator.clear', 'Clear')}
				</button>
				<input
					bind:this={fileInputRef}
					type="file"
					class="sr-only"
					accept={ACCEPTED_TYPES}
					onchange={handleFileInput}
				/>

				<!-- Options -->
				<span class="ml-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">|</span>
				<label class="inline-flex cursor-pointer items-center gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						bind:checked={includeIco}
						class="h-3.5 w-3.5 accent-[var(--accent)]"
					/>
					ICO
				</label>
				<label class="inline-flex cursor-pointer items-center gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						bind:checked={includeSvg}
						disabled={!sourceIsSvg}
						class="h-3.5 w-3.5 accent-[var(--accent)] disabled:opacity-40"
					/>
					SVG
					{#if !sourceIsSvg}
						<span class="text-[var(--text-tertiary)]">({$t('ui.favicon_generator.svg_hint', 'SVG input only')})</span>
					{/if}
				</label>
				<label class="inline-flex cursor-pointer items-center gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						bind:checked={includeManifest}
						class="h-3.5 w-3.5 accent-[var(--accent)]"
					/>
					site.webmanifest
				</label>
			</div>

			<div class="flex items-center gap-[var(--space-2)]">
				{#if isProcessing}
					<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.favicon_generator.processing', 'Generating...')}
					</span>
				{/if}
				<button
					type="button"
					disabled={!canDownloadAll}
					onclick={downloadAll}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--accent)] px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-sm)] text-[var(--text-on-accent)] hover:opacity-90 disabled:opacity-40"
				>
					<Archive size={14} />
					{$t('ui.favicon_generator.download_all', 'Download ZIP')}
				</button>
			</div>
		</div>
	</div>

	<!-- Main area -->
	<div class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)] xl:divide-x xl:divide-[var(--border-default)]">
		<!-- Left: Upload + preview -->
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<!-- Drop zone -->
			<div
				role="region"
				aria-label={$t('ui.favicon_generator.drop_title', 'Drop image here')}
				class="relative m-[var(--space-3)] flex min-h-[220px] flex-1 items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)] transition-colors"
				class:border-[var(--accent)]={dragOver}
				class:bg-[var(--bg-surface-hover)]={dragOver}
				ondragenter={handleDragEnter}
				ondragleave={handleDragLeave}
				ondragover={handleDragOver}
				ondrop={handleDrop}
			>
				{#if inputData?.dataUrl}
					<img
						src={inputData.dataUrl}
						alt={$t('ui.favicon_generator.preview_alt', 'Source image')}
						class="max-h-full max-w-full rounded-[var(--radius-md)] object-contain"
						style="max-height: 200px;"
					/>
				{:else}
					<div class="text-center">
						<FileImage size={40} class="mx-auto mb-[var(--space-3)] text-[var(--text-tertiary)]" />
						<p class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
							{$t('ui.favicon_generator.drop_title', 'Drop an image here')}
						</p>
						<p class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t('ui.favicon_generator.drop_hint', 'PNG, JPEG, WebP, SVG — or use the upload button')}
						</p>
					</div>
				{/if}
			</div>

			<!-- Source info + stats -->
			{#if inputData}
				<div class="mx-[var(--space-3)] mb-[var(--space-3)] flex flex-col gap-[var(--space-2)]">
					<div class="flex flex-col gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)] text-[length:var(--text-xs)]">
						<span class="font-[number:var(--weight-medium)] text-[var(--text-primary)]">{sourceName}</span>
						<span class="text-[var(--text-tertiary)]">
							{formatBytes(inputData.sourceSizeBytes)}
							{#if inputData.isSvg}· SVG{/if}
						</span>
					</div>

					{#if result}
						<div class="grid grid-cols-3 gap-[var(--space-2)]">
							<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)] text-center">
								<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{totalFiles}</div>
								<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.favicon_generator.stat_files', 'Files')}</div>
							</div>
							<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)] text-center">
								<div class="text-[length:var(--text-base)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{totalSize}</div>
								<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.favicon_generator.stat_size', 'Total size')}</div>
							</div>
							<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)] text-center">
								<div class="text-[length:var(--text-base)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{durationMs}ms</div>
								<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.favicon_generator.stat_time', 'Time')}</div>
							</div>
						</div>
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t('ui.favicon_generator.source_dimensions', { dims: sourceDimensions }, 'Source: {dims}')}
							{#if processedByWorker}
								· {$t('ui.favicon_generator.worker_used', 'off-thread')}
							{/if}
						</div>
					{/if}

					{#if isWorkerEligible && !result}
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t('ui.favicon_generator.worker_active', { size: workerThresholdLabel }, 'Large image (>{size}) — using Web Worker')}
						</div>
					{/if}
				</div>
			{/if}
		</div>

		<!-- Right: Generated files grid -->
		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			{#if result}
				<div class="flex-1 overflow-y-auto p-[var(--space-3)]">
					<!-- PNG grid -->
					<div class="mb-[var(--space-4)]">
						<h3 class="mb-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] uppercase tracking-wide text-[var(--text-tertiary)]">
							{$t('ui.favicon_generator.section_png', 'PNG Sizes')}
						</h3>
						<div class="grid grid-cols-2 gap-[var(--space-2)] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4">
							{#each result.files.filter(f => typeof f.sizeTag === 'number') as file (file.filename)}
								<div class="group flex flex-col items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)] transition-colors hover:border-[var(--accent)]">
									<div class="flex h-12 w-12 items-center justify-center overflow-hidden rounded-[var(--radius-sm)]">
										<img
											src={file.dataUrl}
											alt={file.label}
											class="max-h-full max-w-full object-contain"
											style="image-rendering: pixelated;"
										/>
									</div>
									<div class="text-center">
										<div class="text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-primary)]">{file.label}</div>
										<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{formatBytes(file.sizeBytes)}</div>
									</div>
									<button
										type="button"
										onclick={() => downloadFile(file)}
										class="mt-auto inline-flex w-full items-center justify-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-0.5 text-[length:var(--text-xs)] text-[var(--text-secondary)] opacity-0 transition-opacity group-hover:opacity-100 hover:bg-[var(--bg-surface-hover)]"
									>
										<Download size={11} />
										{$t('ui.favicon_generator.download', 'Download')}
									</button>
								</div>
							{/each}
						</div>
					</div>

					<!-- ICO + SVG row -->
					{#if result.files.some(f => f.sizeTag === 'ico' || f.sizeTag === 'svg')}
						<div class="mb-[var(--space-4)]">
							<h3 class="mb-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] uppercase tracking-wide text-[var(--text-tertiary)]">
								{$t('ui.favicon_generator.section_other', 'Other Formats')}
							</h3>
							<div class="flex flex-wrap gap-[var(--space-2)]">
								{#each result.files.filter(f => f.sizeTag === 'ico' || f.sizeTag === 'svg') as file (file.filename)}
									<div class="flex items-center gap-[var(--space-3)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-3)]">
										{#if file.sizeTag === 'ico'}
											<div class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[var(--radius-sm)]">
												<img src={file.dataUrl} alt="ICO preview" class="h-8 w-8 object-contain" style="image-rendering: pixelated;" />
											</div>
										{:else}
											<div class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-[var(--radius-sm)] bg-[var(--bg-surface)]">
												<img src={file.dataUrl} alt="SVG preview" class="h-8 w-8 object-contain" />
											</div>
										{/if}
										<div>
											<div class="text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)]">{file.filename}</div>
											<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{file.label} · {formatBytes(file.sizeBytes)}</div>
										</div>
										<button
											type="button"
											onclick={() => downloadFile(file)}
											class="ml-auto inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
										>
											<Download size={12} />
											{$t('ui.favicon_generator.download', 'Download')}
										</button>
									</div>
								{/each}
							</div>
						</div>
					{/if}

					<!-- Manifest -->
					{#if result.manifestJson}
						<div>
							<h3 class="mb-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] uppercase tracking-wide text-[var(--text-tertiary)]">
								{$t('ui.favicon_generator.section_manifest', 'Web Manifest')}
							</h3>
							<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)]">
								<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)]">
									<span class="text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-secondary)]">site.webmanifest</span>
									<button
										type="button"
										onclick={downloadManifest}
										class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-0.5 text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
									>
										<Download size={11} />
										{$t('ui.favicon_generator.download', 'Download')}
									</button>
								</div>
								<pre class="overflow-x-auto p-[var(--space-3)] text-[length:var(--text-xs)] leading-relaxed text-[var(--text-secondary)]">{result.manifestJson}</pre>
							</div>
						</div>
					{/if}
				</div>
			{:else}
				<div class="flex flex-1 items-center justify-center p-[var(--space-6)]">
					<div class="text-center text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
						{#if isProcessing}
							<p>{$t('ui.favicon_generator.processing', 'Generating favicons...')}</p>
						{:else}
							<p>{$t('ui.favicon_generator.output_placeholder', 'Generated files appear here after upload')}</p>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
