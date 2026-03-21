<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import {
		DEFAULT_JSQR_OPTIONS,
		decodeQrFromImageBuffer,
		QR_READ_MAX_EDGE_PX,
		QR_READ_WORKER_THRESHOLD_BYTES,
		scaleDimensions,
		shouldUseQrReadWorker,
		type QRReadErrorCode,
		type QRReadResult,
		type QRReadWorkerRequest,
		type QRReadWorkerResponse
	} from '$engines/qr/index.js';
	import { formatByteSize, initInput } from '$stores/input.store';
	import { clearOutput, output } from '$stores/output.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Camera, Copy, ImageUp, ScanLine, Trash2, Upload } from 'lucide-svelte';

	type PendingWorker = {
		resolve: (value: QRReadResult) => void;
		reject: (reason: Error) => void;
	};

	let { toolSlug }: { toolSlug: string } = $props();

	let initializedToolSlug = $state('');
	let previewUrl = $state<string | null>(null);
	let previewName = $state('');
	let previewBytes = $state(0);
	let isDecoding = $state(false);
	let processedByWorker = $state(false);
	let lastDurationMs = $state<number | null>(null);
	let errorCode = $state<QRReadErrorCode | 'load_failed' | null>(null);
	let decodedPreview = $state('');

	let fileInput: HTMLInputElement | null = $state(null);
	let cameraInput: HTMLInputElement | null = $state(null);

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	const pendingWorkerRequests = new Map<number, PendingWorker>();

	let workerThresholdLabel = $derived(formatByteSize(QR_READ_WORKER_THRESHOLD_BYTES));
	let workerActiveLabel = $derived(
		$t(
			'ui.qr.reader.worker_active',
			{ size: workerThresholdLabel },
			'Large image ({size}). Decoding runs in a Web Worker to keep the UI responsive.'
		)
	);

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		clearOutput();
		if (typeof window !== 'undefined') {
			window.addEventListener('paste', handleWindowPaste);
		}
	});

	onDestroy(() => {
		if (previewUrl) URL.revokeObjectURL(previewUrl);
		releaseWorker();
		clearOutput();
		if (typeof window !== 'undefined') {
			window.removeEventListener('paste', handleWindowPaste);
		}
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		clearOutput();
		if (previewUrl) URL.revokeObjectURL(previewUrl);
		previewUrl = null;
		previewName = '';
		previewBytes = 0;
		decodedPreview = '';
		errorCode = null;
		lastDurationMs = null;
	});

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

	function ensureWorker(): Worker {
		if (workerInstance !== null) return workerInstance;
		workerInstance = new Worker(new URL('../../../workers/qr-read.worker.ts', import.meta.url), {
			type: 'module'
		});
		workerInstance.onmessage = handleWorkerMessage;
		workerInstance.onerror = handleWorkerError;
		return workerInstance;
	}

	function handleWorkerMessage(event: MessageEvent<QRReadWorkerResponse>): void {
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

	function runWorkerDecode(imageData: ImageData): Promise<QRReadResult> {
		const worker = ensureWorker();
		const clone = new Uint8ClampedArray(imageData.data);
		const requestId = ++workerRequestId;

		return new Promise<QRReadResult>((resolve, reject) => {
			pendingWorkerRequests.set(requestId, { resolve, reject });
			const request: QRReadWorkerRequest = {
				id: requestId,
				width: imageData.width,
				height: imageData.height,
				buffer: clone.buffer
			};
			worker.postMessage(request, [clone.buffer]);
		});
	}

	async function decodeMainThread(imageData: ImageData): Promise<QRReadResult> {
		const { default: jsQR } = await import('jsqr');
		return decodeQrFromImageBuffer(
			{ data: imageData.data, width: imageData.width, height: imageData.height },
			jsQR,
			DEFAULT_JSQR_OPTIONS
		);
	}

	async function decodeImageData(imageData: ImageData): Promise<QRReadResult> {
		const useWorker = shouldUseQrReadWorker(imageData.data.byteLength);
		if (useWorker) {
			try {
				processedByWorker = true;
				return await runWorkerDecode(imageData);
			} catch {
				addToast(
					'warning',
					$t(
						'ui.qr.reader.worker_failed',
						'Worker decoding failed. Retrying on the main thread.'
					)
				);
				processedByWorker = false;
				return decodeMainThread(imageData);
			}
		}
		processedByWorker = false;
		return decodeMainThread(imageData);
	}

	function applyDecodeResult(result: QRReadResult): void {
		if (result.kind === 'success') {
			decodedPreview = result.data;
			output.set(result.data);
			lastDurationMs = result.durationMs;
			errorCode = null;
			return;
		}
		decodedPreview = '';
		output.set('');
		lastDurationMs = null;
		errorCode = result.code;
	}

	async function rasterizeToImageData(file: File): Promise<ImageData> {
		let bitmap: ImageBitmap;
		try {
			bitmap = await createImageBitmap(file);
		} catch {
			throw new Error('load_failed');
		}
		try {
			const { width, height } = scaleDimensions(bitmap.width, bitmap.height, QR_READ_MAX_EDGE_PX);
			const canvas = document.createElement('canvas');
			canvas.width = width;
			canvas.height = height;
			const ctx = canvas.getContext('2d');
			if (!ctx) {
				throw new Error('load_failed');
			}
			ctx.drawImage(bitmap, 0, 0, width, height);
			return ctx.getImageData(0, 0, width, height);
		} finally {
			bitmap.close();
		}
	}

	async function loadFile(file: File): Promise<void> {
		if (!file.type.startsWith('image/')) {
			addToast('error', $t('ui.qr.reader.error_type', 'Please choose an image file.'));
			return;
		}

		if (previewUrl) URL.revokeObjectURL(previewUrl);
		previewUrl = URL.createObjectURL(file);
		previewName = file.name;
		previewBytes = file.size;
		decodedPreview = '';
		errorCode = null;
		lastDurationMs = null;
		output.set('');
		isDecoding = true;

		try {
			const imageData = await rasterizeToImageData(file);
			const result = await decodeImageData(imageData);
			applyDecodeResult(result);
		} catch (err) {
			decodedPreview = '';
			output.set('');
			lastDurationMs = null;
			errorCode = err instanceof Error && err.message === 'load_failed' ? 'load_failed' : 'decode_failed';
		} finally {
			isDecoding = false;
		}
	}

	function handleWindowPaste(event: ClipboardEvent): void {
		const items = event.clipboardData?.items;
		if (!items) return;
		for (const item of items) {
			if (item.kind === 'file' && item.type.startsWith('image/')) {
				const file = item.getAsFile();
				if (file) {
					event.preventDefault();
					void loadFile(file);
				}
				return;
			}
		}
	}

	function handleFileInputChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement) || !target.files?.length) return;
		const file = target.files[0];
		if (file) void loadFile(file);
		target.value = '';
	}

	function handleOpenFilePicker(): void {
		fileInput?.click();
	}

	function handleOpenCamera(): void {
		cameraInput?.click();
	}

	function handleDropZoneClick(): void {
		handleOpenFilePicker();
	}

	function handleDropZoneKeydown(event: KeyboardEvent): void {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleOpenFilePicker();
		}
	}

	function handleDragOver(event: DragEvent): void {
		event.preventDefault();
		event.dataTransfer!.dropEffect = 'copy';
	}

	function handleDrop(event: DragEvent): void {
		event.preventDefault();
		const file = event.dataTransfer?.files?.[0];
		if (file) void loadFile(file);
	}

	function handleCopyDecoded(): void {
		if (!decodedPreview) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		void navigator.clipboard.writeText(decodedPreview).then(
			() => addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard')),
			() => addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'))
		);
	}

	function handleClear(): void {
		if (previewUrl) URL.revokeObjectURL(previewUrl);
		previewUrl = null;
		previewName = '';
		previewBytes = 0;
		decodedPreview = '';
		errorCode = null;
		lastDurationMs = null;
		processedByWorker = false;
		clearOutput();
	}

	function errorMessage(code: QRReadErrorCode | 'load_failed' | null): string {
		if (code === null) return '';
		switch (code) {
			case 'no_qr_found':
				return $t(
					'ui.qr.reader.error_no_qr',
					'No QR code was found. Try a sharper photo, better lighting, or a larger crop.'
				);
			case 'decode_failed':
				return $t('ui.qr.reader.error_decode', 'Could not read this image. Try another file or format.');
			case 'load_failed':
				return $t(
					'ui.qr.reader.error_load',
					'Could not load this image. Try PNG, JPG, or WebP from your device.'
				);
			default:
				return '';
		}
	}

	let statusLine = $derived.by(() => {
		const sizePart = formatByteSize(previewBytes);
		if (isDecoding) {
			return $t('ui.qr.reader.status_decoding', 'Scanning image…');
		}
		if (lastDurationMs !== null && decodedPreview.length > 0) {
			return $t(
				'ui.qr.reader.status_ok',
				{ size: sizePart, ms: Math.round(lastDurationMs) },
				'{size} · {ms} ms'
			);
		}
		return sizePart;
	});
</script>

<div class="flex h-full min-h-0 w-full flex-col overflow-hidden bg-[var(--bg-surface)] text-[var(--text-primary)]">
	<div class="flex flex-wrap items-center gap-[var(--space-2)] border-b border-[var(--border-subtle)] px-[var(--space-4)] py-[var(--space-3)]">
		<button
			type="button"
			class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
			onclick={handleOpenFilePicker}
		>
			<Upload size={14} aria-hidden="true" />
			<span>{$t('ui.qr.reader.upload', 'Upload')}</span>
		</button>
		<button
			type="button"
			class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
			onclick={handleOpenCamera}
		>
			<Camera size={14} aria-hidden="true" />
			<span>{$t('ui.qr.reader.camera', 'Camera')}</span>
		</button>
		<button
			type="button"
			class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
			onclick={handleCopyDecoded}
		>
			<Copy size={14} aria-hidden="true" />
			<span>{$t('ui.actions.copy', 'Copy')}</span>
		</button>
		<button
			type="button"
			class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
			onclick={handleClear}
		>
			<Trash2 size={14} aria-hidden="true" />
			<span>{$t('ui.actions.clear', 'Clear')}</span>
		</button>
		{#if processedByWorker && !isDecoding}
			<span
				class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-full)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]"
			>
				<ScanLine size={12} aria-hidden="true" />
				{$t('ui.qr.reader.worker_badge', 'Worker')}
			</span>
		{/if}
	</div>

	<input
		bind:this={fileInput}
		type="file"
		accept="image/png,image/jpeg,image/jpg,image/webp,image/gif,image/svg+xml,image/bmp,image/x-icon"
		class="sr-only"
		aria-hidden="true"
		tabindex="-1"
		onchange={handleFileInputChange}
	/>
	<input
		bind:this={cameraInput}
		type="file"
		accept="image/*"
		capture="environment"
		class="sr-only"
		aria-hidden="true"
		tabindex="-1"
		onchange={handleFileInputChange}
	/>

	<div class="flex min-h-0 flex-1 flex-col gap-[var(--space-4)] overflow-auto p-[var(--space-4)]">
		<div
			role="button"
			tabindex="0"
			aria-label={$t('ui.qr.reader.drop_aria', 'Upload or drop an image to scan')}
			class="flex min-h-[140px] cursor-pointer flex-col items-center justify-center gap-[var(--space-2)] rounded-[var(--radius-lg)] border border-dashed border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-4)] py-[var(--space-6)] text-center transition-colors hover:border-[var(--accent)] hover:bg-[var(--bg-surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
			ondragover={handleDragOver}
			ondrop={handleDrop}
			onclick={handleDropZoneClick}
			onkeydown={handleDropZoneKeydown}
		>
			<ImageUp class="text-[var(--text-tertiary)]" size={28} aria-hidden="true" />
			<p class="text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)]">
				{$t('ui.qr.reader.drop_title', 'Drop an image here')}
			</p>
			<p class="max-w-[420px] text-[length:var(--text-xs)] leading-relaxed text-[var(--text-secondary)]">
				{$t(
					'ui.qr.reader.drop_hint',
					'PNG, JPG, WebP, GIF, or SVG. Large images decode off the main thread. You can also paste a screenshot.'
				)}
			</p>
		</div>

		{#if processedByWorker && isDecoding}
			<p class="text-[length:var(--text-xs)] text-[var(--text-secondary)]">{workerActiveLabel}</p>
		{/if}

		{#if previewUrl}
			<div class="flex min-h-0 flex-col gap-[var(--space-2)]">
				<div class="flex flex-wrap items-baseline justify-between gap-[var(--space-2)]">
					<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{previewName}</span>
					<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{statusLine}</span>
				</div>
				<div
					class="flex max-h-[min(40vh,320px)] items-center justify-center overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-[var(--space-3)]"
				>
					<img
						src={previewUrl}
						alt={$t('ui.qr.reader.preview_alt', 'Uploaded image preview')}
						class="max-h-[min(40vh,320px)] max-w-full object-contain"
					/>
				</div>
			</div>
		{/if}

		<div class="flex min-h-0 flex-1 flex-col gap-[var(--space-2)]">
			<label
				for="qr-reader-output"
				class="text-[length:var(--text-xs)] font-[number:var(--weight-medium)] uppercase tracking-wide text-[var(--text-tertiary)]"
			>
				{$t('ui.qr.reader.result_label', 'Decoded content')}
			</label>
			<textarea
				id="qr-reader-output"
				readonly
				rows="6"
				class="min-h-[120px] w-full resize-y rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-[var(--space-3)] py-[var(--space-2)] font-mono text-[length:var(--text-sm)] text-[var(--text-primary)]"
				value={decodedPreview}
			></textarea>
			{#if errorCode}
				<p class="text-[length:var(--text-sm)] text-[var(--color-error)]" role="alert">
					{errorMessage(errorCode)}
				</p>
			{:else if !previewUrl}
				<p class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
					{$t(
						'ui.qr.reader.empty_state',
						'Decoded text appears here. Your image never leaves the browser.'
					)}
				</p>
			{/if}
		</div>
	</div>
</div>
