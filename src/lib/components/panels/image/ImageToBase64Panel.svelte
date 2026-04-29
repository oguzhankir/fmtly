<script lang="ts">
	import { onDestroy } from 'svelte';
	import { SvelteMap } from 'svelte/reactivity';
	import { page } from '$app/stores';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import {
		IMAGE_BASE64_WORKER_THRESHOLD_BYTES,
		encodeImageToBase64,
		readImageFileAsArrayBuffer,
		shouldUseImageToBase64Worker,
		type ImageToBase64Input,
		type ImageToBase64Result,
		type ImageToBase64WorkerRequest,
		type ImageToBase64WorkerResponse
	} from '$engines/image/index.js';
	import type { ToolDefinition } from '$registry/types.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Download, Eraser, ImagePlus, Link2, ShieldCheck, Zap } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: ImageToBase64Result) => void;
		reject: (reason: Error) => void;
	};

	type StatCard = { label: string; value: string; helper: string };

	const ACCEPTED_IMAGE_TYPES =
		'image/png,image/jpeg,image/webp,image/gif,image/bmp,image/avif,image/svg+xml,image/x-icon';

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let inputData = $state<ImageToBase64Input | null>(null);
	let result = $state<ImageToBase64Result | null>(null);
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let dragOver = $state(false);
	let fileInputRef: HTMLInputElement | null = $state(null);
	let sourcePreview = $state('');

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new SvelteMap<number, PendingWorkerRequest>();

	let sourceName = $derived(inputData?.sourceName ?? '');
	let sourceMimeType = $derived(result?.mimeType ?? inputData?.sourceType ?? '—');
	let workerThresholdLabel = $derived(formatBytes(IMAGE_BASE64_WORKER_THRESHOLD_BYTES));
	let isWorkerEligible = $derived(shouldUseImageToBase64Worker(inputData?.sourceSizeBytes ?? 0));
	let sourceStatus = $derived(
		$t(
			'ui.image_to_base64.source_status',
			{
				size: formatBytes(inputData?.sourceSizeBytes ?? 0),
				format: sourceMimeType
			},
			'{size} · {format}'
		)
	);
	let outputStatus = $derived(
		$t(
			'ui.image_to_base64.output_status',
			{
				base64Chars: result ? formatNumber(result.metrics.base64Characters) : '0',
				dataUrlChars: result ? formatNumber(result.metrics.dataUrlCharacters) : '0'
			},
			'{base64Chars} Base64 chars · {dataUrlChars} data URI chars'
		)
	);
	let canCopyBase64 = $derived(Boolean(result?.base64));
	let canCopyDataUri = $derived(Boolean(result?.dataUrl));
	let canDownload = $derived(Boolean(result));
	let statCards = $derived<StatCard[]>([
		{
			label: $t('ui.image_to_base64.stat.file_size', 'Image size'),
			value: formatBytes(inputData?.sourceSizeBytes ?? 0),
			helper: $t('ui.image_to_base64.stat.file_size_helper', 'browser-only input')
		},
		{
			label: $t('ui.image_to_base64.stat.base64_length', 'Base64 length'),
			value: result ? formatNumber(result.metrics.base64Characters) : '—',
			helper: $t('ui.image_to_base64.stat.base64_length_helper', 'characters without prefix')
		},
		{
			label: $t('ui.image_to_base64.stat.expansion', 'Payload growth'),
			value: result ? formatSignedPercent(result.metrics.expansionPercent) : '—',
			helper: $t('ui.image_to_base64.stat.expansion_helper', 'expected Base64 overhead')
		}
	]);

	$effect(() => {
		if (!inputData) {
			result = null;
			return;
		}
		const token = ++latestProcessToken;
		isProcessing = true;
		void processEncoding(token, inputData);
	});

	onDestroy(() => {
		releaseWorker();
		if (sourcePreview.startsWith('blob:')) URL.revokeObjectURL(sourcePreview);
	});

	async function processEncoding(token: number, input: ImageToBase64Input): Promise<void> {
		const useWorker = shouldUseImageToBase64Worker(input.sourceSizeBytes);
		try {
			const next = useWorker ? await runWorker(input) : encodeImageToBase64(input);
			if (token !== latestProcessToken) return;
			result = next;
			processedByWorker = useWorker;
		} catch {
			if (token !== latestProcessToken) return;
			try {
				const fallback = encodeImageToBase64(input);
				if (token !== latestProcessToken) return;
				result = fallback;
				processedByWorker = false;
				addToast(
					'warning',
					$t(
						'ui.image_to_base64.worker_failed',
						'Worker encoding failed. Falling back to main thread processing.'
					)
				);
			} catch (error: unknown) {
				if (token !== latestProcessToken) return;
				result = null;
				addToast(
					'error',
					translateError(
						error,
						$t('ui.image_to_base64.convert_failed', 'Could not convert the image to Base64')
					)
				);
			}
		} finally {
			if (token === latestProcessToken) isProcessing = false;
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance) return workerInstance;
		workerInstance = new Worker(new URL('../../../workers/image-to-base64.worker.ts', import.meta.url), {
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

	function handleWorkerMessage(event: MessageEvent<ImageToBase64WorkerResponse>): void {
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

	function runWorker(input: ImageToBase64Input): Promise<ImageToBase64Result> {
		const worker = ensureWorker();
		return new Promise<ImageToBase64Result>((resolve, reject) => {
			const id = ++workerRequestId;
			pendingWorkerRequests.set(id, { resolve, reject });
			const request: ImageToBase64WorkerRequest = { id, input };
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
			addToast('error', $t('ui.image_to_base64.file_read_error', 'Could not load image file'));
			return;
		}
		try {
			if (sourcePreview.startsWith('blob:')) URL.revokeObjectURL(sourcePreview);
			sourcePreview = URL.createObjectURL(file);
			inputData = await readImageFileAsArrayBuffer(file);
			addToast(
				'success',
				$t('ui.image_to_base64.file_loaded', { name: inputData.sourceName }, 'Loaded {name}')
			);
		} catch (error: unknown) {
			addToast(
				'error',
				translateError(error, $t('ui.image_to_base64.file_read_error', 'Could not load image file'))
			);
		}
	}

	function clearInput(): void {
		inputData = null;
		result = null;
		if (sourcePreview.startsWith('blob:')) URL.revokeObjectURL(sourcePreview);
		sourcePreview = '';
		addToast('info', $t('ui.image_to_base64.input_cleared', 'Image input cleared'));
	}

	async function copyBase64(): Promise<void> {
		if (!result?.base64) {
			addToast('info', $t('ui.image_to_base64.copy_empty', 'Nothing to copy'));
			return;
		}
		try {
			await navigator.clipboard.writeText(result.base64);
			addToast('success', $t('ui.image_to_base64.copy_success', 'Output copied'));
		} catch {
			addToast('error', $t('ui.image_to_base64.copy_error', 'Copy failed'));
		}
	}

	async function copyDataUri(): Promise<void> {
		if (!result?.dataUrl) {
			addToast('info', $t('ui.image_to_base64.copy_empty', 'Nothing to copy'));
			return;
		}
		try {
			await navigator.clipboard.writeText(result.dataUrl);
			addToast('success', $t('ui.image_to_base64.copy_data_uri_success', 'Data URI copied'));
		} catch {
			addToast('error', $t('ui.image_to_base64.copy_error', 'Copy failed'));
		}
	}

	function downloadText(content: string, filename: string): void {
		if (!content) {
			addToast('info', $t('ui.image_to_base64.download_empty', 'Nothing to download'));
			return;
		}
		try {
			const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = filename;
			document.body.append(link);
			link.click();
			link.remove();
			URL.revokeObjectURL(url);
			addToast(
				'success',
				$t('ui.image_to_base64.download_success', { filename }, 'Downloaded {filename}')
			);
		} catch {
			addToast('error', $t('ui.image_to_base64.download_error', 'Download failed'));
		}
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

	function formatNumber(value: number): string {
		return value.toLocaleString();
	}

	function formatSignedPercent(value: number): string {
		if (!Number.isFinite(value)) return '—';
		const sign = value > 0 ? '+' : '';
		return `${sign}${value.toFixed(1)}%`;
	}

	function translateError(error: unknown, fallback: string): string {
		const message = error instanceof Error ? error.message : '';
		if (message === 'unsupported_image_source') {
			return $t('ui.image_to_base64.unsupported_image', 'Unsupported image format');
		}
		if (message === 'empty_image_source') {
			return $t('ui.image_to_base64.empty_image', 'The image file is empty');
		}
		if (message === 'could_not_read_image_file') {
			return $t('ui.image_to_base64.file_read_error', 'Could not load image file');
		}
		return message || fallback;
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
					{$t('ui.image_to_base64.upload', 'Upload image')}
				</button>
				<button
					type="button"
					onclick={clearInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<Eraser size={14} />
					{$t('ui.image_to_base64.clear', 'Clear')}
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
				<span>{sourceName || $t('ui.image_to_base64.no_file', 'No image selected')}</span>
				<span>{sourceStatus}</span>
				{#if isWorkerEligible}
					<span>
						{$t(
							'ui.image_to_base64.worker_active',
							{ size: workerThresholdLabel },
							'Large image detected (>{size}). Conversion runs in a Web Worker.'
						)}
					</span>
				{/if}
			</div>
		</div>
	</div>

	<div class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:divide-x xl:divide-[var(--border-default)]">
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div
				role="region"
				aria-label={$t('ui.image_to_base64.drop_title', 'Drop image here')}
				class="relative m-[var(--space-3)] flex min-h-[260px] flex-1 items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)]"
				class:border-[var(--accent)]={dragOver}
				ondragenter={handleDragEnter}
				ondragleave={handleDragLeave}
				ondragover={handleDragOver}
				ondrop={handleDrop}
			>
				{#if sourcePreview}
					<img
						src={sourcePreview}
						alt={$t('ui.image_to_base64.source_preview_alt', 'Source image preview')}
						class="max-h-full max-w-full rounded-[var(--radius-md)] object-contain"
					/>
				{:else}
					<div class="max-w-md text-center text-[length:var(--text-sm)] text-[var(--text-secondary)]">
						<p>{$t('ui.image_to_base64.drop_title', 'Drop an image here')}</p>
						<p class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t(
								'ui.image_to_base64.drop_hint',
								'PNG, JPEG, WebP, GIF, SVG, BMP, AVIF, and ICO stay inside this browser.'
							)}
						</p>
					</div>
				{/if}
			</div>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="border-b border-[var(--border-default)] p-[var(--space-3)]">
				<div class="grid grid-cols-1 gap-[var(--space-2)] sm:grid-cols-2">
					<div class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<ShieldCheck size={16} class="mt-0.5 shrink-0 text-[var(--accent)]" />
						<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t(
								'ui.image_to_base64.privacy_note',
								'Encoding is local; your image never leaves the browser.'
							)}
						</p>
					</div>
					<div class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<Zap size={16} class="mt-0.5 shrink-0 text-[var(--accent)]" />
						<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t(
								'ui.image_to_base64.performance_note',
								{ size: workerThresholdLabel },
								'Large inputs use a Web Worker above {size}.'
							)}
						</p>
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
						<span>{$t('ui.image_to_base64.worker_used', 'Processed off-thread')}</span>
					{/if}
				</div>
				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.image_to_base64.processing', 'Encoding...')}</span>
					{/if}
					<button
						type="button"
						disabled={!canCopyBase64}
						onclick={copyBase64}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Copy size={14} />
						{$t('ui.image_to_base64.copy_base64', 'Copy Base64')}
					</button>
					<button
						type="button"
						disabled={!canCopyDataUri}
						onclick={copyDataUri}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Link2 size={14} />
						{$t('ui.image_to_base64.copy_data_uri', 'Copy data URI')}
					</button>
					<button
						type="button"
						disabled={!canDownload}
						onclick={() => downloadText(result?.base64 ?? '', result?.downloadFilenames.base64 ?? 'image-base64.txt')}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Download size={14} />
						{$t('ui.image_to_base64.download_base64', 'Download .txt')}
					</button>
					<button
						type="button"
						disabled={!canDownload}
						onclick={() => downloadText(result?.dataUrl ?? '', result?.downloadFilenames.dataUri ?? 'image-data-uri.txt')}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Download size={14} />
						{$t('ui.image_to_base64.download_data_uri', 'Download data URI')}
					</button>
				</div>
			</div>

			<div class="grid min-h-0 flex-1 grid-cols-1 gap-[var(--space-3)] p-[var(--space-3)]">
				<div class="min-h-0 rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)]">
					<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.image_to_base64.base64_output', 'Base64 output')}
					</div>
					<textarea
						readonly
						value={result?.base64 ?? ''}
						class="h-[180px] w-full resize-none border-0 bg-transparent p-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
						placeholder={$t('ui.image_to_base64.output_placeholder', 'Encoded Base64 appears here...')}
						spellcheck="false"
					></textarea>
				</div>
				<div class="min-h-0 rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)]">
					<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.image_to_base64.data_uri_output', 'Data URI output')}
					</div>
					<textarea
						readonly
						value={result?.dataUrl ?? ''}
						class="h-[180px] w-full resize-none border-0 bg-transparent p-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
						placeholder={$t('ui.image_to_base64.data_uri_placeholder', 'The data URI appears here...')}
						spellcheck="false"
					></textarea>
				</div>
			</div>
		</div>
	</div>
</div>
