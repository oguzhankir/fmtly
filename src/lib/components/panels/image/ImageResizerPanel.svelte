<script lang="ts">
	import { onDestroy } from 'svelte';
	import { SvelteMap } from 'svelte/reactivity';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import {
		IMAGE_RESIZER_DEFAULT_OPTIONS,
		IMAGE_RESIZER_WORKER_THRESHOLD_BYTES,
		readImageFileAsDataUrl,
		resizeImage,
		shouldUseImageResizerWorker,
		type ImageResizeInput,
		type ImageResizeOptions,
		type ImageResizeOutputFormat,
		type ImageResizeResult,
		type ImageResizerWorkerRequest,
		type ImageResizerWorkerResponse
	} from '$engines/image/index.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Download, Eraser, ImagePlus, Lock, Unlock } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: ImageResizeResult) => void;
		reject: (reason: Error) => void;
	};

	type StatCard = { label: string; value: string; helper: string };

	const ACCEPTED_IMAGE_TYPES = 'image/png,image/jpeg,image/webp,image/gif,image/bmp,image/svg+xml';

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let inputData = $state<ImageResizeInput | null>(null);
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let dragOver = $state(false);
	let fileInputRef: HTMLInputElement | null = $state(null);
	let result = $state<ImageResizeResult | null>(null);
	let widthInput = $state(String(IMAGE_RESIZER_DEFAULT_OPTIONS.width));
	let heightInput = $state(String(IMAGE_RESIZER_DEFAULT_OPTIONS.height));
	let scalePercentInput = $state(String(IMAGE_RESIZER_DEFAULT_OPTIONS.scalePercent));
	let lockAspectRatio = $state(IMAGE_RESIZER_DEFAULT_OPTIONS.lockAspectRatio);
	let resizeMode = $state<ImageResizeOptions['mode']>(IMAGE_RESIZER_DEFAULT_OPTIONS.mode);
	let outputFormat = $state<ImageResizeOutputFormat>(IMAGE_RESIZER_DEFAULT_OPTIONS.outputFormat);
	let qualityInput = $state(String(Math.round(IMAGE_RESIZER_DEFAULT_OPTIONS.quality * 100)));

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new SvelteMap<number, PendingWorkerRequest>();

	let sourcePreview = $derived(inputData?.dataUrl ?? '');
	let sourceName = $derived(inputData?.sourceName ?? '');
	let sourceStatus = $derived(
		$t(
			'ui.image_resizer.source_status',
			{
				size: formatBytes(inputData?.sourceSizeBytes ?? 0),
				dimensions: result
					? `${result.metadata.originalWidth}×${result.metadata.originalHeight}px`
					: '—',
				format: inputData?.sourceType || '—'
			},
			'{size} · {dimensions}'
		)
	);
	let outputPreview = $derived(result?.dataUrl ?? '');
	let outputStatus = $derived(
		$t(
			'ui.image_resizer.output_status',
			{
				size: formatBytes(result?.metadata.outputSizeBytes ?? 0),
				dimensions: result
					? `${result.metadata.resizedWidth}×${result.metadata.resizedHeight}px`
					: '—',
				format: result?.mimeType ?? '—'
			},
			'{size} · {dimensions}'
		)
	);
let canDownload = $derived(Boolean(result?.dataUrl));
let canCopyDataUrl = $derived(Boolean(result?.dataUrl));
	let workerThresholdLabel = $derived(formatBytes(IMAGE_RESIZER_WORKER_THRESHOLD_BYTES));
	let isWorkerEligible = $derived(
		shouldUseImageResizerWorker(inputData?.sourceSizeBytes ?? 0)
	);
	let statCards = $derived<StatCard[]>([
		{
			label: $t('ui.image_resizer.stat.input_dimensions', 'Input dimensions'),
			value: result
				? `${result.metadata.originalWidth} × ${result.metadata.originalHeight}`
				: '—',
			helper: $t('ui.image_resizer.stat.input_size', 'Input size')
		},
		{
			label: $t('ui.image_resizer.stat.output_dimensions', 'Output dimensions'),
			value: result
				? `${result.metadata.resizedWidth} × ${result.metadata.resizedHeight}`
				: '—',
			helper: $t('ui.image_resizer.stat.output_size', 'Output size')
		},
		{
			label: $t('ui.image_resizer.stat.reduction', 'Reduction'),
			value: result ? formatSignedPercent(result.metadata.sizeDeltaPercent) : '—',
			helper: $t('ui.image_resizer.stat.reduction_helper', 'positive = smaller')
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
		void processResize(token, inputData, options);
	});

	onDestroy(() => {
		releaseWorker();
	});

	async function processResize(
		token: number,
		input: ImageResizeInput,
		options: ImageResizeOptions
	): Promise<void> {
		const useWorker = shouldUseImageResizerWorker(input.sourceSizeBytes);
		try {
			const next = useWorker
				? await runWorker(input, options)
				: await resizeImage(input, options);
			if (token !== latestProcessToken) return;
			result = next;
			processedByWorker = useWorker;
		} catch {
			if (token !== latestProcessToken) return;
			try {
				const fallback = await resizeImage(input, options);
				if (token !== latestProcessToken) return;
				result = fallback;
				processedByWorker = false;
				addToast(
					'warning',
					$t(
						'ui.image_resizer.worker_failed',
						'Worker resize failed. Falling back to main thread processing.'
					)
				);
			} catch (error: unknown) {
				if (token !== latestProcessToken) return;
				result = null;
				addToast(
					'error',
					error instanceof Error
						? error.message
						: $t('ui.image_resizer.resize_failed', 'Image resize failed')
				);
			}
		} finally {
			if (token === latestProcessToken) isProcessing = false;
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance) return workerInstance;
		workerInstance = new Worker(
			new URL('../../../workers/image-resizer.worker.ts', import.meta.url),
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

	function handleWorkerMessage(event: MessageEvent<ImageResizerWorkerResponse>): void {
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
		input: ImageResizeInput,
		options: ImageResizeOptions
	): Promise<ImageResizeResult> {
		const worker = ensureWorker();
		return new Promise<ImageResizeResult>((resolve, reject) => {
			const id = ++workerRequestId;
			pendingWorkerRequests.set(id, { resolve, reject });
			const request: ImageResizerWorkerRequest = { id, input, options };
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
		if (!file.type.startsWith('image/')) {
			addToast('error', $t('ui.image_resizer.file_read_error', 'Could not load image file'));
			return;
		}
		try {
			inputData = await readImageFileAsDataUrl(file);
			addToast(
				'success',
				$t('ui.image_resizer.file_loaded', { name: inputData.sourceName }, 'Loaded {name}')
			);
		} catch {
			addToast('error', $t('ui.image_resizer.file_read_error', 'Could not load image file'));
		}
	}

	function handleResizeModeChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		if (target.value === 'dimensions' || target.value === 'percentage') {
			resizeMode = target.value;
		}
	}

	function handleOutputFormatChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		if (
			target.value === 'image/png' ||
			target.value === 'image/jpeg' ||
			target.value === 'image/webp'
		) {
			outputFormat = target.value;
		}
	}

	function handleWidthInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		widthInput = target.value;
	}

	function handleHeightInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		heightInput = target.value;
	}

	function handleScaleInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		scalePercentInput = target.value;
	}

	function handleQualityChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		qualityInput = target.value;
	}

	function toggleAspectRatioLock(): void {
		lockAspectRatio = !lockAspectRatio;
	}

	function clearInput(): void {
		inputData = null;
		result = null;
		addToast('info', $t('ui.image_resizer.input_cleared', 'Image input cleared'));
	}

	async function copyOutputDataUrl(): Promise<void> {
		if (!result) {
			addToast('info', $t('ui.image_resizer.copy_empty', 'Nothing to copy'));
			return;
		}
		try {
			await navigator.clipboard.writeText(result.dataUrl);
			addToast('success', $t('ui.image_resizer.copy_success', 'Output copied'));
		} catch {
			addToast('error', $t('ui.image_resizer.copy_error', 'Copy failed'));
		}
	}

	function downloadOutput(): void {
		if (!result) {
			addToast('info', $t('ui.image_resizer.download_empty', 'Nothing to download'));
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
				$t('ui.image_resizer.download_success', { filename: result.downloadFilename }, 'Downloaded {filename}')
			);
		} catch {
			addToast('error', $t('ui.image_resizer.download_error', 'Download failed'));
		}
	}

	function readOptions(): ImageResizeOptions {
		const width = clampInt(widthInput, IMAGE_RESIZER_DEFAULT_OPTIONS.width);
		const height = clampInt(heightInput, IMAGE_RESIZER_DEFAULT_OPTIONS.height);
		const scalePercent = clampInt(
			scalePercentInput,
			IMAGE_RESIZER_DEFAULT_OPTIONS.scalePercent,
			1,
			400
		);
		const quality = clampInt(qualityInput, 92, 1, 100) / 100;
		return {
			mode: resizeMode,
			width,
			height,
			scalePercent,
			lockAspectRatio,
			outputFormat,
			quality
		};
	}

	function clampInt(
		value: string,
		fallback: number,
		min = 1,
		max = 8192
	): number {
		const n = Number.parseInt(value, 10);
		if (!Number.isFinite(n)) return fallback;
		return Math.min(max, Math.max(min, n));
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
					{$t('ui.image_resizer.upload', 'Upload image')}
				</button>
				<button
					type="button"
					onclick={clearInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<Eraser size={14} />
					{$t('ui.image_resizer.clear', 'Clear')}
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
				<span>{sourceName || $t('ui.image_resizer.no_file', 'No image selected')}</span>
				<span>{sourceStatus}</span>
				{#if isWorkerEligible}
					<span>
						{$t(
							'ui.image_resizer.worker_active',
							{ size: workerThresholdLabel },
							'Large image detected (>{size}). Resize runs in a Web Worker.'
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
				aria-label={$t('ui.image_resizer.drop_title', 'Drop image here')}
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
						alt={$t('ui.image_resizer.source_preview_alt', 'Source image preview')}
						class="max-h-full max-w-full rounded-[var(--radius-md)] object-contain"
					/>
				{:else}
					<div class="text-center text-[length:var(--text-sm)] text-[var(--text-secondary)]">
						<p>{$t('ui.image_resizer.drop_title', 'Drop an image here')}</p>
						<p class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t('ui.image_resizer.drop_hint', 'or use the upload button above')}
						</p>
					</div>
				{/if}
			</div>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="border-b border-[var(--border-default)] p-[var(--space-3)]">
				<div class="grid grid-cols-1 gap-[var(--space-3)]">
					<div class="grid grid-cols-2 gap-[var(--space-2)]">
						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span>{$t('ui.image_resizer.mode', 'Resize mode')}</span>
							<select
								value={resizeMode}
								onchange={handleResizeModeChange}
								class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
							>
								<option value="dimensions">{$t('ui.image_resizer.mode_dimensions', 'Dimensions')}</option>
								<option value="percentage">{$t('ui.image_resizer.mode_percent', 'Scale %')}</option>
							</select>
						</label>
						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span>{$t('ui.image_resizer.output_format', 'Output format')}</span>
							<select
								value={outputFormat}
								onchange={handleOutputFormatChange}
								class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
							>
								<option value="image/png">PNG</option>
								<option value="image/jpeg">JPEG</option>
								<option value="image/webp">WebP</option>
							</select>
						</label>
					</div>

					{#if resizeMode === 'dimensions'}
						<div class="grid grid-cols-[1fr_auto_1fr_auto] items-end gap-[var(--space-2)]">
							<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
								<span>{$t('ui.image_resizer.width', 'Width')}</span>
								<input
									type="number"
									min="1"
									max="16000"
									value={widthInput}
									oninput={handleWidthInput}
									class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
								/>
							</label>
							<span class="pb-[var(--space-2)] text-[var(--text-tertiary)]">×</span>
							<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
								<span>{$t('ui.image_resizer.height', 'Height')}</span>
								<input
									type="number"
									min="1"
									max="16000"
									value={heightInput}
									oninput={handleHeightInput}
									class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
								/>
							</label>
							<button
								type="button"
								onclick={toggleAspectRatioLock}
								class="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)]"
								aria-label={lockAspectRatio
									? $t('ui.image_resizer.aspect_locked', 'Aspect ratio locked')
									: $t('ui.image_resizer.aspect_unlocked', 'Aspect ratio unlocked')}
							>
								{#if lockAspectRatio}
									<Lock size={14} />
								{:else}
									<Unlock size={14} />
								{/if}
							</button>
						</div>
					{:else}
						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span>{$t('ui.image_resizer.scale_percent', 'Scale percent')}</span>
							<input
								type="number"
								min="1"
								max="400"
								value={scalePercentInput}
								oninput={handleScaleInput}
								class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
							/>
						</label>
					{/if}

					<div class="grid grid-cols-1 gap-[var(--space-2)]">
						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span>{$t('ui.image_resizer.quality', 'Quality')}</span>
							<input
								type="number"
								min="1"
								max="100"
								value={qualityInput}
								oninput={handleQualityChange}
								class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
							/>
						</label>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-[var(--space-2)] border-b border-[var(--border-default)] p-[var(--space-3)]">
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

			<div class="flex items-center justify-between border-b border-[var(--border-default)] p-[var(--space-3)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<div class="flex flex-col gap-[var(--space-1)]">
					<span>{outputStatus}</span>
					{#if processedByWorker}
						<span>{$t('ui.image_resizer.worker_used', 'Processed off-thread')}</span>
					{/if}
				</div>
				<div class="flex items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.image_resizer.processing', 'Resizing...')}</span>
					{/if}
					<button
						type="button"
						disabled={!canCopyDataUrl}
						onclick={copyOutputDataUrl}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Copy size={14} />
						{$t('ui.image_resizer.copy_output', 'Copy data URL')}
					</button>
					<button
						type="button"
						disabled={!canDownload}
						onclick={downloadOutput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Download size={14} />
						{$t('ui.image_resizer.download', 'Download')}
					</button>
				</div>
			</div>

			<div class="flex min-h-0 flex-1 items-center justify-center overflow-auto p-[var(--space-4)]">
				{#if outputPreview}
					<img
						src={outputPreview}
						alt={$t('ui.image_resizer.output_preview_alt', 'Resized image preview')}
						class="max-h-full max-w-full rounded-[var(--radius-md)] object-contain"
					/>
				{:else}
					<p class="text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
						{$t('ui.image_resizer.output_placeholder', 'Resized output appears here...')}
					</p>
				{/if}
			</div>
		</div>
	</div>
</div>
