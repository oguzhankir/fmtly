<script lang="ts">
	import { onDestroy } from 'svelte';
	import { SvelteMap } from 'svelte/reactivity';
	import { page } from '$app/stores';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import {
		IMAGE_COMPRESSOR_DEFAULT_OPTIONS,
		IMAGE_COMPRESSOR_WORKER_THRESHOLD_BYTES,
		compressImage,
		readImageFileAsDataUrl,
		resolveCompressionCandidateFormats,
		shouldUseImageCompressorWorker,
		type ImageCompressionInput,
		type ImageCompressionOptions,
		type ImageCompressionOutputFormat,
		type ImageCompressionResult,
		type ImageCompressorWorkerRequest,
		type ImageCompressorWorkerResponse
	} from '$engines/image/index.js';
	import type { ToolDefinition } from '$registry/types.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { ArrowRightLeft, Copy, Download, Eraser, ImagePlus, ShieldCheck, Sparkles, Zap } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: ImageCompressionResult) => void;
		reject: (reason: Error) => void;
	};

	type StatCard = { label: string; value: string; helper: string };

	const ACCEPTED_IMAGE_TYPES = 'image/png,image/jpeg,image/webp,image/avif,image/gif';
	const OUTPUT_FORMATS: ImageCompressionOutputFormat[] = [
		'auto',
		'image/jpeg',
		'image/webp',
		'image/avif',
		'image/png'
	];

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let inputData = $state<ImageCompressionInput | null>(null);
	let result = $state<ImageCompressionResult | null>(null);
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let dragOver = $state(false);
	let fileInputRef: HTMLInputElement | null = $state(null);
	let outputFormat = $state<ImageCompressionOutputFormat>(
		IMAGE_COMPRESSOR_DEFAULT_OPTIONS.outputFormat
	);
	let qualityInput = $state(String(Math.round(IMAGE_COMPRESSOR_DEFAULT_OPTIONS.quality * 100)));
	let preserveTransparency = $state(IMAGE_COMPRESSOR_DEFAULT_OPTIONS.preserveTransparency);
	let backgroundColor = $state(IMAGE_COMPRESSOR_DEFAULT_OPTIONS.backgroundColor);

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new SvelteMap<number, PendingWorkerRequest>();

	let sourcePreview = $derived(inputData?.dataUrl ?? '');
	let outputPreview = $derived(result?.dataUrl ?? '');
	let sourceName = $derived(inputData?.sourceName ?? '');
	let workerThresholdLabel = $derived(formatBytes(IMAGE_COMPRESSOR_WORKER_THRESHOLD_BYTES));
	let isWorkerEligible = $derived(
		shouldUseImageCompressorWorker(inputData?.sourceSizeBytes ?? 0)
	);
	let qualityPercent = $derived(clampInt(qualityInput, 82, 1, 100));
	let canDownload = $derived(Boolean(result?.dataUrl));
	let canCopyDataUrl = $derived(Boolean(result?.dataUrl));
	let sourceStatus = $derived(
		$t(
			'ui.image_compressor.source_status',
			{
				size: formatBytes(inputData?.sourceSizeBytes ?? 0),
				format: formatLabel(inputData?.sourceType || '—'),
				dimensions: result
					? `${result.metadata.originalWidth}×${result.metadata.originalHeight}px`
					: '—'
			},
			'{size} · {format} · {dimensions}'
		)
	);
	let outputStatus = $derived(
		$t(
			'ui.image_compressor.output_status',
			{
				size: formatBytes(result?.metadata.outputSizeBytes ?? 0),
				format: result ? formatLabel(result.mimeType) : outputFormatLabel(outputFormat),
				dimensions: result
					? `${result.metadata.outputWidth}×${result.metadata.outputHeight}px`
					: '—'
			},
			'{size} · {format} · {dimensions}'
		)
	);
	let savingsPercent = $derived(result ? result.metadata.sizeDeltaPercent * -1 : Number.NaN);
	let savingsBytes = $derived(
		result ? Math.max(0, result.metadata.originalSizeBytes - result.metadata.outputSizeBytes) : 0
	);
	let autoFormatsSummary = $derived(
		resolveCompressionCandidateFormats(outputFormat, preserveTransparency, preserveTransparency)
			.map(formatLabel)
			.join(' · ')
	);
	let transparencyDisabled = $derived(
		outputFormat === 'image/jpeg' || outputFormat === 'auto'
	);
	let backgroundDisabled = $derived(
		preserveTransparency && outputFormat !== 'image/jpeg'
	);
	let statCards = $derived<StatCard[]>([
		{
			label: $t('ui.image_compressor.stat.original_size', 'Original size'),
			value: formatBytes(inputData?.sourceSizeBytes ?? 0),
			helper: $t('ui.image_compressor.stat.original_helper', 'Before compression')
		},
		{
			label: $t('ui.image_compressor.stat.compressed_size', 'Compressed size'),
			value: formatBytes(result?.metadata.outputSizeBytes ?? 0),
			helper: $t('ui.image_compressor.stat.compressed_helper', 'Best output')
		},
		{
			label: $t('ui.image_compressor.stat.saved', 'Saved'),
			value: result ? formatBytes(savingsBytes) : '—',
			helper: result
				? formatSignedPercent(-result.metadata.sizeDeltaPercent)
				: $t('ui.image_compressor.stat.saved_helper', 'Compared with source')
		},
		{
			label: $t('ui.image_compressor.stat.format', 'Chosen format'),
			value: result ? formatLabel(result.metadata.outputFormat) : outputFormatLabel(outputFormat),
			helper: result
				? $t(
						'ui.image_compressor.stat.format_helper',
						{ source: formatLabel(result.metadata.sourceFormat) },
						'Source: {source}'
					)
				: $t('ui.image_compressor.stat.format_helper_idle', 'Will update after compression')
		}
	]);

	$effect(() => {
		if (!inputData) {
			result = null;
			return;
		}
		const token = ++latestProcessToken;
		const options = readOptions();
		isProcessing = true;
		void processCompression(token, inputData, options);
	});

	onDestroy(() => {
		releaseWorker();
	});

	async function processCompression(
		token: number,
		input: ImageCompressionInput,
		options: ImageCompressionOptions
	): Promise<void> {
		const useWorker = shouldUseImageCompressorWorker(input.sourceSizeBytes);
		try {
			const next = useWorker ? await runWorker(input, options) : await compressImage(input, options);
			if (token !== latestProcessToken) return;
			result = next;
			processedByWorker = useWorker;
		} catch {
			if (token !== latestProcessToken) return;
			try {
				const fallback = await compressImage(input, options);
				if (token !== latestProcessToken) return;
				result = fallback;
				processedByWorker = false;
				addToast(
					'warning',
					$t(
						'ui.image_compressor.worker_failed',
						'Worker compression failed. Falling back to main thread processing.'
					)
				);
			} catch (error: unknown) {
				if (token !== latestProcessToken) return;
				result = null;
				addToast(
					'error',
					error instanceof Error
						? error.message
						: $t('ui.image_compressor.compress_failed', 'Image compression failed')
				);
			}
		} finally {
			if (token === latestProcessToken) isProcessing = false;
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance) return workerInstance;
		workerInstance = new Worker(
			new URL('../../../workers/image-compressor.worker.ts', import.meta.url),
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

	function handleWorkerMessage(event: MessageEvent<ImageCompressorWorkerResponse>): void {
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
		input: ImageCompressionInput,
		options: ImageCompressionOptions
	): Promise<ImageCompressionResult> {
		const worker = ensureWorker();
		return new Promise<ImageCompressionResult>((resolve, reject) => {
			const id = ++workerRequestId;
			pendingWorkerRequests.set(id, { resolve, reject });
			const request: ImageCompressorWorkerRequest = { id, input, options };
			worker.postMessage(request);
		});
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
		if (!ACCEPTED_IMAGE_TYPES.split(',').includes(file.type)) {
			addToast('error', $t('ui.image_compressor.file_read_error', 'Could not load image file'));
			return;
		}
		try {
			inputData = await readImageFileAsDataUrl(file);
			addToast(
				'success',
				$t('ui.image_compressor.file_loaded', { name: inputData.sourceName }, 'Loaded {name}')
			);
		} catch {
			addToast('error', $t('ui.image_compressor.file_read_error', 'Could not load image file'));
		}
	}

	function handleOutputFormatChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		if (isImageCompressionOutputFormat(target.value)) {
			outputFormat = target.value;
			if (target.value === 'image/jpeg') preserveTransparency = false;
		}
	}

	function handleQualityChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		qualityInput = target.value;
	}

	function handlePreserveTransparencyChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		preserveTransparency = target.checked;
	}

	function handleBackgroundChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		backgroundColor = target.value;
	}

	function clearInput(): void {
		inputData = null;
		result = null;
		addToast('info', $t('ui.image_compressor.input_cleared', 'Image input cleared'));
	}

	async function copyOutputDataUrl(): Promise<void> {
		if (!result) {
			addToast('info', $t('ui.image_compressor.copy_empty', 'Nothing to copy'));
			return;
		}
		try {
			await navigator.clipboard.writeText(result.dataUrl);
			addToast('success', $t('ui.image_compressor.copy_success', 'Output copied'));
		} catch {
			addToast('error', $t('ui.image_compressor.copy_error', 'Copy failed'));
		}
	}

	function downloadOutput(): void {
		if (!result) {
			addToast('info', $t('ui.image_compressor.download_empty', 'Nothing to download'));
			return;
		}
		try {
			const link = document.createElement('a');
			link.href = result.dataUrl;
			link.download = result.downloadFilename;
			document.body.append(link);
			link.click();
			link.remove();
			addToast(
				'success',
				$t(
					'ui.image_compressor.download_success',
					{ filename: result.downloadFilename },
					'Downloaded {filename}'
				)
			);
		} catch {
			addToast('error', $t('ui.image_compressor.download_error', 'Download failed'));
		}
	}

	function readOptions(): ImageCompressionOptions {
		return {
			outputFormat,
			quality: clampInt(qualityInput, 82, 1, 100) / 100,
			preserveTransparency: outputFormat === 'image/jpeg' ? false : preserveTransparency,
			backgroundColor
		};
	}

	function isImageCompressionOutputFormat(value: string): value is ImageCompressionOutputFormat {
		return OUTPUT_FORMATS.some((format) => format === value);
	}

	function clampInt(value: string, fallback: number, min: number, max: number): number {
		const parsed = Number.parseInt(value, 10);
		if (!Number.isFinite(parsed)) return fallback;
		return Math.min(max, Math.max(min, parsed));
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

	function formatLabel(format: string): string {
		if (format === 'image/jpeg' || format === 'image/jpg') return 'JPEG';
		if (format === 'image/webp') return 'WebP';
		if (format === 'image/avif') return 'AVIF';
		if (format === 'image/png') return 'PNG';
		if (format === 'image/gif') return 'GIF';
		return format.replace('image/', '').toUpperCase();
	}

	function outputFormatLabel(format: ImageCompressionOutputFormat): string {
		if (format === 'auto') return $t('ui.image_compressor.output_auto', 'Auto');
		return formatLabel(format);
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
			<div class="flex flex-wrap items-end gap-[var(--space-2)]">
				<button
					type="button"
					onclick={openPicker}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<ImagePlus size={14} />
					{$t('ui.image_compressor.upload', 'Upload image')}
				</button>
				<button
					type="button"
					onclick={clearInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<Eraser size={14} />
					{$t('ui.image_compressor.clear', 'Clear')}
				</button>
				<input
					bind:this={fileInputRef}
					type="file"
					class="sr-only"
					accept={ACCEPTED_IMAGE_TYPES}
					onchange={handleFileInput}
				/>
			</div>
			<div class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{sourceName || $t('ui.image_compressor.no_file', 'No image selected')}</span>
				<span>{sourceStatus}</span>
				{#if isWorkerEligible}
					<span>
						{$t(
							'ui.image_compressor.worker_active',
							{ size: workerThresholdLabel },
							'Large image detected (>{size}). Compression runs in a Web Worker.'
						)}
					</span>
				{/if}
			</div>
		</div>
	</div>

	<div class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-[minmax(0,1.2fr)_minmax(420px,0.8fr)] xl:divide-x xl:divide-[var(--border-default)]">
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div class="grid min-h-0 flex-1 grid-cols-1 gap-[var(--space-3)] p-[var(--space-3)] lg:grid-cols-2">
				<div
					role="region"
					aria-label={$t('ui.image_compressor.drop_title', 'Drop image here')}
					class="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)]"
					class:border-[var(--accent)]={dragOver}
					ondragenter={handleDragEnter}
					ondragleave={handleDragLeave}
					ondragover={handleDragOver}
					ondrop={handleDrop}
				>
					{#if sourcePreview}
						<img
							src={sourcePreview}
							alt={$t('ui.image_compressor.source_preview_alt', 'Source image preview')}
							class="max-h-full max-w-full rounded-[var(--radius-md)] object-contain"
						/>
					{:else}
						<div class="max-w-sm text-center text-[length:var(--text-sm)] text-[var(--text-secondary)]">
							<p>{$t('ui.image_compressor.drop_title', 'Drop an image here')}</p>
							<p class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
								{$t(
									'ui.image_compressor.drop_hint',
									'Compress PNG, JPEG, WebP, AVIF, and GIF without leaving the browser.'
								)}
							</p>
						</div>
					{/if}
					<div class="absolute left-[var(--space-3)] top-[var(--space-3)] rounded-full bg-[var(--bg-base)]/90 px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] backdrop-blur">
						{$t('ui.image_compressor.before_label', 'Before')}
					</div>
				</div>

				<div class="relative flex min-h-[260px] flex-1 items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)]">
					{#if outputPreview}
						<img
							src={outputPreview}
							alt={$t('ui.image_compressor.output_preview_alt', 'Compressed image preview')}
							class="max-h-full max-w-full rounded-[var(--radius-md)] object-contain"
						/>
					{:else}
						<div class="max-w-sm text-center text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
							<p>{$t('ui.image_compressor.output_placeholder', 'Compressed preview appears here...')}</p>
						</div>
					{/if}
					<div class="absolute left-[var(--space-3)] top-[var(--space-3)] rounded-full bg-[var(--bg-base)]/90 px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] backdrop-blur">
						{$t('ui.image_compressor.after_label', 'After')}
					</div>
					{#if result}
						<div class="absolute bottom-[var(--space-3)] right-[var(--space-3)] rounded-full bg-[var(--accent)]/10 px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--accent)]">
							{formatSignedPercent(savingsPercent)}
						</div>
					{/if}
				</div>
			</div>

			<div class="grid grid-cols-1 gap-[var(--space-2)] border-t border-[var(--border-default)] p-[var(--space-3)] sm:grid-cols-4">
				{#each statCards as card (card.label)}
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{card.label}</div>
						<div class="mt-[var(--space-1)] text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							{card.value}
						</div>
						<div class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{card.helper}</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="border-b border-[var(--border-default)] p-[var(--space-3)]">
				<div class="grid grid-cols-1 gap-[var(--space-3)]">
					<div class="grid grid-cols-1 gap-[var(--space-2)] sm:grid-cols-2">
						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span>{$t('ui.image_compressor.output_format', 'Compression strategy')}</span>
							<select
								value={outputFormat}
								onchange={handleOutputFormatChange}
								class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
							>
								<option value="auto">{$t('ui.image_compressor.output_auto', 'Auto (smallest)')}</option>
								<option value="image/jpeg">JPEG</option>
								<option value="image/webp">WebP</option>
								<option value="image/avif">AVIF</option>
								<option value="image/png">PNG</option>
							</select>
						</label>
						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span>{$t('ui.image_compressor.quality', 'Quality')}</span>
							<input
								type="range"
								min="1"
								max="100"
								value={qualityInput}
								oninput={handleQualityChange}
								class="h-2 accent-[var(--accent)]"
							/>
							<span class="font-[family-name:var(--font-mono)] text-[var(--text-primary)]">
								{qualityPercent}%
							</span>
						</label>
					</div>

					<div class="grid grid-cols-1 gap-[var(--space-2)]">
						<label class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<input
								type="checkbox"
								checked={preserveTransparency}
								disabled={transparencyDisabled}
								onchange={handlePreserveTransparencyChange}
								class="mt-[2px] h-4 w-4 rounded border-[var(--border-default)] disabled:opacity-50"
							/>
							<span>
								<span class="block font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
									{$t('ui.image_compressor.preserve_transparency', 'Preserve transparency')}
								</span>
								<span class="mt-[var(--space-1)] block text-[var(--text-tertiary)]">
									{#if outputFormat === 'auto'}
										{$t(
											'ui.image_compressor.preserve_transparency_auto',
											'Auto mode keeps alpha by testing AVIF, WebP, and PNG.'
										)}
									{:else if outputFormat === 'image/jpeg'}
										{$t(
											'ui.image_compressor.preserve_transparency_locked',
											'JPEG cannot keep alpha, so transparent areas use the selected background.'
										)}
									{:else}
										{$t(
											'ui.image_compressor.preserve_transparency_help',
											'Disable this only when you intentionally want a flat background.'
										)}
									{/if}
								</span>
							</span>
						</label>

						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span>{$t('ui.image_compressor.background', 'Flattened background')}</span>
							<select
								value={backgroundColor}
								disabled={backgroundDisabled}
								onchange={handleBackgroundChange}
								class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)] disabled:opacity-50"
							>
								<option value="white">{$t('ui.image_compressor.background_white', 'White')}</option>
								<option value="black">{$t('ui.image_compressor.background_black', 'Black')}</option>
								<option value="transparent">
									{$t('ui.image_compressor.background_transparent', 'Transparent')}
								</option>
							</select>
						</label>
					</div>

					<div class="grid grid-cols-1 gap-[var(--space-2)]">
						<div class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
							<Sparkles size={16} class="mt-0.5 shrink-0 text-[var(--accent)]" />
							<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
								{$t(
									'ui.image_compressor.auto_note',
									{ formats: autoFormatsSummary },
									'Auto mode tests {formats} and keeps the smallest successful result.'
								)}
							</p>
						</div>
						<div class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
							<ShieldCheck size={16} class="mt-0.5 shrink-0 text-[var(--accent)]" />
							<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
								{$t(
									'ui.image_compressor.privacy_note',
									'Compression is local; files never leave your browser.'
								)}
							</p>
						</div>
						<div class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
							<Zap size={16} class="mt-0.5 shrink-0 text-[var(--accent)]" />
							<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
								{$t(
									'ui.image_compressor.performance_note',
									{ size: workerThresholdLabel },
									'Large inputs use a Web Worker above {size}.'
								)}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-[var(--space-2)] border-b border-[var(--border-default)] p-[var(--space-3)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<div class="flex items-start justify-between gap-[var(--space-3)]">
					<div class="flex flex-col gap-[var(--space-1)]">
						<span>{outputStatus}</span>
						{#if processedByWorker}
							<span>{$t('ui.image_compressor.worker_used', 'Processed off-thread')}</span>
						{/if}
						{#if result}
							<span>
								{$t(
									'ui.image_compressor.result_summary',
									{
										saved: formatBytes(savingsBytes),
										percent: formatSignedPercent(savingsPercent),
										format: formatLabel(result.metadata.outputFormat)
									},
									'Saved {saved} ({percent}) as {format}.'
								)}
							</span>
						{/if}
					</div>
					<div class="flex items-center gap-[var(--space-2)]">
						{#if isProcessing}
							<span>{$t('ui.image_compressor.processing', 'Compressing...')}</span>
						{/if}
						<button
							type="button"
							disabled={!canCopyDataUrl}
							onclick={copyOutputDataUrl}
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
						>
							<Copy size={14} />
							{$t('ui.image_compressor.copy_output', 'Copy data URL')}
						</button>
						<button
							type="button"
							disabled={!canDownload}
							onclick={downloadOutput}
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
						>
							<Download size={14} />
							{$t('ui.image_compressor.download', 'Download')}
						</button>
					</div>
				</div>

				<div class="grid grid-cols-1 gap-[var(--space-2)] sm:grid-cols-2">
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="flex items-center gap-[var(--space-1)] text-[var(--text-secondary)]">
							<ArrowRightLeft size={14} />
							<span>{$t('ui.image_compressor.original_label', 'Original')}</span>
						</div>
						<div class="mt-[var(--space-1)] font-[family-name:var(--font-mono)] text-[var(--text-primary)]">
							{formatBytes(inputData?.sourceSizeBytes ?? 0)}
						</div>
					</div>
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="flex items-center gap-[var(--space-1)] text-[var(--text-secondary)]">
							<Sparkles size={14} />
							<span>{$t('ui.image_compressor.optimized_label', 'Compressed')}</span>
						</div>
						<div class="mt-[var(--space-1)] font-[family-name:var(--font-mono)] text-[var(--text-primary)]">
							{formatBytes(result?.metadata.outputSizeBytes ?? 0)}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
