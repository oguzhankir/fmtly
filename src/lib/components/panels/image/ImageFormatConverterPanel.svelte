<script lang="ts">
	import { onDestroy } from 'svelte';
	import { SvelteMap } from 'svelte/reactivity';
	import { page } from '$app/stores';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import {
		IMAGE_CONVERTER_DEFAULT_OPTIONS,
		IMAGE_CONVERTER_WORKER_THRESHOLD_BYTES,
		convertImageFormat,
		createImageConverterWorkerRequest,
		readImageFileAsDataUrl,
		shouldUseImageConverterWorker,
		type ImageConversionInput,
		type ImageConversionOptions,
		type ImageConversionOutputFormat,
		type ImageConversionResult,
		type ImageConverterWorkerResponse
	} from '$engines/image/index.js';
	import type { ToolDefinition } from '$registry/types.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Download, Eraser, ImagePlus, ShieldCheck, Zap } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: ImageConversionResult) => void;
		reject: (reason: Error) => void;
	};

	type StatCard = { label: string; value: string; helper: string };

	const ACCEPTED_IMAGE_TYPES = 'image/png,image/jpeg,image/webp,image/avif,image/gif';
	const OUTPUT_FORMATS: ImageConversionOutputFormat[] = [
		'image/png',
		'image/jpeg',
		'image/webp',
		'image/avif',
		'image/gif'
	];

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let inputData = $state<ImageConversionInput | null>(null);
	let result = $state<ImageConversionResult | null>(null);
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let dragOver = $state(false);
	let fileInputRef: HTMLInputElement | null = $state(null);
	let outputFormat = $state<ImageConversionOutputFormat>(
		IMAGE_CONVERTER_DEFAULT_OPTIONS.outputFormat
	);
	let qualityInput = $state(String(Math.round(IMAGE_CONVERTER_DEFAULT_OPTIONS.quality * 100)));
	let backgroundColor = $state(IMAGE_CONVERTER_DEFAULT_OPTIONS.backgroundColor);

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new SvelteMap<number, PendingWorkerRequest>();

	let sourcePreview = $derived(inputData?.dataUrl ?? '');
	let outputPreview = $derived(result?.dataUrl ?? '');
	let sourceName = $derived(inputData?.sourceName ?? '');
	let workerThresholdLabel = $derived(formatBytes(IMAGE_CONVERTER_WORKER_THRESHOLD_BYTES));
	let isWorkerEligible = $derived(
		shouldUseImageConverterWorker(inputData?.sourceSizeBytes ?? 0)
	);
	let sourceStatus = $derived(
		$t(
			'ui.image_converter.source_status',
			{
				size: formatBytes(inputData?.sourceSizeBytes ?? 0),
				format: inputData?.sourceType || '—',
				dimensions: result
					? `${result.metadata.originalWidth}×${result.metadata.originalHeight}px`
					: '—'
			},
			'{size} · {format} · {dimensions}'
		)
	);
	let outputStatus = $derived(
		$t(
			'ui.image_converter.output_status',
			{
				size: formatBytes(result?.metadata.outputSizeBytes ?? 0),
				format: result ? formatLabel(result.mimeType) : '—',
				dimensions: result
					? `${result.metadata.outputWidth}×${result.metadata.outputHeight}px`
					: '—'
			},
			'{size} · {format} · {dimensions}'
		)
	);
	let canDownload = $derived(Boolean(result?.dataUrl));
	let canCopyDataUrl = $derived(Boolean(result?.dataUrl));
	let qualityDisabled = $derived(outputFormat === 'image/png');
	let statCards = $derived<StatCard[]>([
		{
			label: $t('ui.image_converter.stat.source_format', 'Source format'),
			value: result ? formatLabel(result.metadata.sourceFormat) : '—',
			helper: result
				? `${$t('ui.image_converter.stat.source_size', 'Original size')}: ${formatBytes(result.metadata.originalSizeBytes)}`
				: $t('ui.image_converter.stat.source_size', 'Original size')
		},
		{
			label: $t('ui.image_converter.stat.output_format', 'Output format'),
			value: result ? formatLabel(result.metadata.outputFormat) : formatLabel(outputFormat),
			helper: result
				? `${$t('ui.image_converter.stat.output_size', 'Converted size')}: ${formatBytes(result.metadata.outputSizeBytes)}`
				: $t('ui.image_converter.stat.output_size', 'Converted size')
		},
		{
			label: $t('ui.image_converter.stat.size_delta', 'Size delta'),
			value: result ? formatSignedPercent(result.metadata.sizeDeltaPercent) : '—',
			helper: $t('ui.image_converter.stat.size_delta_helper', 'compared with source')
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
		void processConversion(token, inputData, options);
	});

	onDestroy(() => {
		releaseWorker();
	});

	async function processConversion(
		token: number,
		input: ImageConversionInput,
		options: ImageConversionOptions
	): Promise<void> {
		const useWorker = shouldUseImageConverterWorker(input.sourceSizeBytes);
		try {
			const next = useWorker
				? await runWorker(input, options)
				: await convertImageFormat(input, options);
			if (token !== latestProcessToken) return;
			result = next;
			processedByWorker = useWorker;
		} catch {
			if (token !== latestProcessToken) return;
			try {
				const fallback = await convertImageFormat(input, options);
				if (token !== latestProcessToken) return;
				result = fallback;
				processedByWorker = false;
				addToast(
					'warning',
					$t(
						'ui.image_converter.worker_failed',
						'Worker conversion failed. Falling back to main thread processing.'
					)
				);
			} catch (error: unknown) {
				if (token !== latestProcessToken) return;
				result = null;
				addToast(
					'error',
					error instanceof Error
						? error.message
						: $t('ui.image_converter.convert_failed', 'Image conversion failed')
				);
			}
		} finally {
			if (token === latestProcessToken) isProcessing = false;
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance) return workerInstance;
		workerInstance = new Worker(
			new URL('../../../workers/image-converter.worker.ts', import.meta.url),
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

	function handleWorkerMessage(event: MessageEvent<ImageConverterWorkerResponse>): void {
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
		input: ImageConversionInput,
		options: ImageConversionOptions
	): Promise<ImageConversionResult> {
		const worker = ensureWorker();
		return new Promise<ImageConversionResult>((resolve, reject) => {
			const id = ++workerRequestId;
			pendingWorkerRequests.set(id, { resolve, reject });
			worker.postMessage(createImageConverterWorkerRequest(id, input, options));
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
			addToast('error', $t('ui.image_converter.file_read_error', 'Could not load image file'));
			return;
		}
		try {
			inputData = await readImageFileAsDataUrl(file);
			addToast(
				'success',
				$t('ui.image_converter.file_loaded', { name: inputData.sourceName }, 'Loaded {name}')
			);
		} catch {
			addToast('error', $t('ui.image_converter.file_read_error', 'Could not load image file'));
		}
	}

	function handleOutputFormatChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		if (isImageConversionOutputFormat(target.value)) outputFormat = target.value;
	}

	function handleQualityChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		qualityInput = target.value;
	}

	function handleBackgroundChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		backgroundColor = target.value;
	}

	function clearInput(): void {
		inputData = null;
		result = null;
		addToast('info', $t('ui.image_converter.input_cleared', 'Image input cleared'));
	}

	async function copyOutputDataUrl(): Promise<void> {
		if (!result) {
			addToast('info', $t('ui.image_converter.copy_empty', 'Nothing to copy'));
			return;
		}
		try {
			await navigator.clipboard.writeText(result.dataUrl);
			addToast('success', $t('ui.image_converter.copy_success', 'Output copied'));
		} catch {
			addToast('error', $t('ui.image_converter.copy_error', 'Copy failed'));
		}
	}

	function downloadOutput(): void {
		if (!result) {
			addToast('info', $t('ui.image_converter.download_empty', 'Nothing to download'));
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
					'ui.image_converter.download_success',
					{ filename: result.downloadFilename },
					'Downloaded {filename}'
				)
			);
		} catch {
			addToast('error', $t('ui.image_converter.download_error', 'Download failed'));
		}
	}

	function readOptions(): ImageConversionOptions {
		return {
			outputFormat,
			quality: clampInt(qualityInput, 92, 1, 100) / 100,
			backgroundColor
		};
	}

	function isImageConversionOutputFormat(value: string): value is ImageConversionOutputFormat {
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
		if (format === 'image/png') return 'PNG';
		if (format === 'image/jpeg' || format === 'image/jpg') return 'JPEG';
		if (format === 'image/webp') return 'WebP';
		if (format === 'image/avif') return 'AVIF';
		if (format === 'image/gif') return 'GIF';
		return format.replace('image/', '').toUpperCase();
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
					{$t('ui.image_converter.upload', 'Upload image')}
				</button>
				<button
					type="button"
					onclick={clearInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<Eraser size={14} />
					{$t('ui.image_converter.clear', 'Clear')}
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
				<span>{sourceName || $t('ui.image_converter.no_file', 'No image selected')}</span>
				<span>{sourceStatus}</span>
				{#if isWorkerEligible}
					<span>
						{$t(
							'ui.image_converter.worker_active',
							{ size: workerThresholdLabel },
							'Large image detected (>{size}). Conversion runs in a Web Worker.'
						)}
					</span>
				{/if}
			</div>
		</div>
	</div>

	<div class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(460px,0.9fr)] xl:divide-x xl:divide-[var(--border-default)]">
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div
				role="region"
				aria-label={$t('ui.image_converter.drop_title', 'Drop image here')}
				class="relative m-[var(--space-3)] flex min-h-[240px] flex-1 items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)]"
				class:border-[var(--accent)]={dragOver}
				ondragenter={handleDragEnter}
				ondragleave={handleDragLeave}
				ondragover={handleDragOver}
				ondrop={handleDrop}
			>
				{#if sourcePreview}
					<img
						src={sourcePreview}
						alt={$t('ui.image_converter.source_preview_alt', 'Source image preview')}
						class="max-h-full max-w-full rounded-[var(--radius-md)] object-contain"
					/>
				{:else}
					<div class="max-w-md text-center text-[length:var(--text-sm)] text-[var(--text-secondary)]">
						<p>{$t('ui.image_converter.drop_title', 'Drop an image here')}</p>
						<p class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t(
								'ui.image_converter.drop_hint',
								'PNG, JPEG, WebP, AVIF, and GIF stay in this browser.'
							)}
						</p>
					</div>
				{/if}
			</div>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="border-b border-[var(--border-default)] p-[var(--space-3)]">
				<div class="grid grid-cols-1 gap-[var(--space-3)]">
					<div class="grid grid-cols-1 gap-[var(--space-2)] sm:grid-cols-3">
						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span>{$t('ui.image_converter.output_format', 'Output format')}</span>
							<select
								value={outputFormat}
								onchange={handleOutputFormatChange}
								class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
							>
								<option value="image/png">PNG</option>
								<option value="image/jpeg">JPEG</option>
								<option value="image/webp">WebP</option>
								<option value="image/avif">AVIF</option>
								<option value="image/gif">GIF</option>
							</select>
						</label>
						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span>{$t('ui.image_converter.quality', 'Quality')}</span>
							<input
								type="number"
								min="1"
								max="100"
								disabled={qualityDisabled}
								value={qualityInput}
								oninput={handleQualityChange}
								class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)] disabled:opacity-50"
							/>
						</label>
						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span>{$t('ui.image_converter.background', 'JPEG background')}</span>
							<select
								value={backgroundColor}
								onchange={handleBackgroundChange}
								class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
							>
								<option value="white">{$t('ui.image_converter.background_white', 'White')}</option>
								<option value="black">{$t('ui.image_converter.background_black', 'Black')}</option>
								<option value="transparent">{$t('ui.image_converter.background_transparent', 'Transparent')}</option>
							</select>
						</label>
					</div>
					<div class="grid grid-cols-1 gap-[var(--space-2)] sm:grid-cols-2">
						<div class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
							<ShieldCheck size={16} class="mt-0.5 shrink-0 text-[var(--accent)]" />
							<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
								{$t(
									'ui.image_converter.privacy_note',
									'Conversion is local; files never leave your browser.'
								)}
							</p>
						</div>
						<div class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
							<Zap size={16} class="mt-0.5 shrink-0 text-[var(--accent)]" />
							<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
								{$t(
									'ui.image_converter.performance_note',
									{ size: workerThresholdLabel },
									'Large inputs use a Web Worker above {size}.'
								)}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-[var(--space-2)] border-b border-[var(--border-default)] p-[var(--space-3)] sm:grid-cols-3">
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

			<div class="flex flex-col gap-[var(--space-2)] border-b border-[var(--border-default)] p-[var(--space-3)] text-[length:var(--text-xs)] text-[var(--text-tertiary)] sm:flex-row sm:items-center sm:justify-between">
				<div class="flex flex-col gap-[var(--space-1)]">
					<span>{outputStatus}</span>
					{#if processedByWorker}
						<span>{$t('ui.image_converter.worker_used', 'Processed off-thread')}</span>
					{/if}
				</div>
				<div class="flex items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.image_converter.processing', 'Converting...')}</span>
					{/if}
					<button
						type="button"
						disabled={!canCopyDataUrl}
						onclick={copyOutputDataUrl}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Copy size={14} />
						{$t('ui.image_converter.copy_output', 'Copy data URL')}
					</button>
					<button
						type="button"
						disabled={!canDownload}
						onclick={downloadOutput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Download size={14} />
						{$t('ui.image_converter.download', 'Download')}
					</button>
				</div>
			</div>

			<div class="flex min-h-0 flex-1 items-center justify-center overflow-auto p-[var(--space-4)]">
				{#if outputPreview}
					<img
						src={outputPreview}
						alt={$t('ui.image_converter.output_preview_alt', 'Converted image preview')}
						class="max-h-full max-w-full rounded-[var(--radius-md)] object-contain"
					/>
				{:else}
					<p class="text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
						{$t('ui.image_converter.output_placeholder', 'Converted output appears here...')}
					</p>
				{/if}
			</div>
		</div>
	</div>
</div>
