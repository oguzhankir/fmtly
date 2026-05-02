<script lang="ts">
	import { onDestroy } from 'svelte';
	import { SvelteMap } from 'svelte/reactivity';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import {
		IMAGE_BASE64_WORKER_THRESHOLD_BYTES,
		decodeBase64ToImage,
		shouldUseBase64ToImageWorker,
		type Base64ToImageOptions,
		type Base64ToImageResult,
		type Base64ToImageWorkerRequest,
		type Base64ToImageWorkerResponse
	} from '$engines/image/index.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Download, Eraser, ImageDown, Link2, ShieldCheck, Zap } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: Base64ToImageResult) => void;
		reject: (reason: Error) => void;
	};

	type StatCard = { label: string; value: string; helper: string };

	type FallbackMimeOption = 'image/png' | 'image/jpeg' | 'image/webp' | 'image/gif' | 'image/avif';

	const FALLBACK_MIME_TYPES: FallbackMimeOption[] = [
		'image/png',
		'image/jpeg',
		'image/webp',
		'image/gif',
		'image/avif'
	];

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let inputValue = $state('');
	let fallbackMimeType = $state<FallbackMimeOption>('image/png');
	let result = $state<Base64ToImageResult | null>(null);
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
let currentErrorMessage = $state('');

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new SvelteMap<number, PendingWorkerRequest>();

	let workerThresholdLabel = $derived(formatBytes(IMAGE_BASE64_WORKER_THRESHOLD_BYTES));
	let inputBytes = $derived(byteSize(inputValue));
	let inputStatus = $derived(
		$t(
			'ui.image_from_base64.input_status',
			{
				size: formatBytes(inputBytes),
				characters: inputValue.length.toLocaleString()
			},
			'{size} · {characters} chars'
		)
	);
	let outputStatus = $derived(
		$t(
			'ui.image_from_base64.output_status',
			{
				size: formatBytes(result?.metrics.byteLength ?? 0),
				type: result ? formatMimeLabel(result.mimeType) : '—'
			},
			'{size} · {type}'
		)
	);
	let isWorkerEligible = $derived(shouldUseBase64ToImageWorker(inputValue));
	let canDownload = $derived(Boolean(result?.dataUrl));
	let canCopyDataUrl = $derived(Boolean(result?.dataUrl));
	let canCopyBase64 = $derived(Boolean(result?.base64));
	let canApplySample = $derived(!isProcessing);
	let statCards = $derived<StatCard[]>([
		{
			label: $t('ui.image_from_base64.stat.output_type', 'Output type'),
			value: result ? formatMimeLabel(result.mimeType) : '—',
			helper: $t('ui.image_from_base64.stat.output_type_helper', 'Detected or fallback MIME')
		},
		{
			label: $t('ui.image_from_base64.stat.output_size', 'Output size'),
			value: result ? formatBytes(result.metrics.byteLength) : '—',
			helper: $t('ui.image_from_base64.stat.output_size_helper', 'Decoded binary size')
		},
		{
			label: $t('ui.image_from_base64.stat.flags', 'Normalization'),
			value: result ? summarizeFlags(result) : '—',
			helper: $t('ui.image_from_base64.stat.flags_helper', 'Prefix, spaces, and padding')
		}
	]);

	$effect(() => {
		const trimmedValue = inputValue.trim();
		if (trimmedValue.length === 0) {
			result = null;
			isProcessing = false;
			processedByWorker = false;
			currentErrorMessage = '';
			return;
		}

		const token = ++latestProcessToken;
		const options = readOptions();
		isProcessing = true;
		void processInput(token, trimmedValue, options);
	});

	onDestroy(() => {
		releaseWorker();
	});

	async function processInput(
		token: number,
		value: string,
		options: Base64ToImageOptions
	): Promise<void> {
		const useWorker = shouldUseBase64ToImageWorker(value);
		try {
			const next = useWorker ? await runWorker(value, options) : decodeBase64ToImage(value, options);
			if (token !== latestProcessToken) return;
			result = next;
			processedByWorker = useWorker;
			currentErrorMessage = '';
		} catch (error: unknown) {
			if (token !== latestProcessToken) return;
			try {
				const fallback = decodeBase64ToImage(value, options);
				if (token !== latestProcessToken) return;
				result = fallback;
				processedByWorker = false;
				currentErrorMessage = '';
				addToast(
					'warning',
					$t(
						'ui.image_from_base64.worker_failed',
						'Worker decode failed. Falling back to main thread processing.'
					)
				);
			} catch (fallbackError: unknown) {
				if (token !== latestProcessToken) return;
				result = null;
				currentErrorMessage = errorMessage(fallbackError ?? error);
			}
		} finally {
			if (token === latestProcessToken) isProcessing = false;
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance) return workerInstance;
		workerInstance = new Worker(
			new URL('../../../workers/image-from-base64.worker.ts', import.meta.url),
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

	function handleWorkerMessage(event: MessageEvent<Base64ToImageWorkerResponse>): void {
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

	function runWorker(input: string, options: Base64ToImageOptions): Promise<Base64ToImageResult> {
		const worker = ensureWorker();
		return new Promise<Base64ToImageResult>((resolve, reject) => {
			const id = ++workerRequestId;
			pendingWorkerRequests.set(id, { resolve, reject });
			const request: Base64ToImageWorkerRequest = { id, input, options };
			worker.postMessage(request);
		});
	}

	function handleInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		inputValue = target.value;
	}

	function handleFallbackMimeChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		if (isFallbackMimeType(target.value)) {
			fallbackMimeType = target.value;
		}
	}

	function clearInput(): void {
		inputValue = '';
		result = null;
		currentErrorMessage = '';
		addToast('info', $t('ui.image_from_base64.input_cleared', 'Base64 input cleared'));
	}

	function loadSample(): void {
		inputValue =
			'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiB2aWV3Qm94PSIwIDAgMTkyIDE5MiI+PHJlY3Qgd2lkdGg9IjE5MiIgaGVpZ2h0PSIxOTIiIHJ4PSIyOCIgZmlsbD0iIzYzNjZGMSIvPjxwYXRoIGQ9Ik00OCA5Nmg5NiIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjE2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNOTYgNDh2OTYiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIxNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+';
		addToast('success', $t('ui.image_from_base64.sample_loaded', 'Sample Base64 loaded'));
	}

	async function copyDataUrl(): Promise<void> {
		if (!result) {
			addToast('info', $t('ui.image_from_base64.copy_empty', 'Nothing to copy'));
			return;
		}
		try {
			await navigator.clipboard.writeText(result.dataUrl);
			addToast('success', $t('ui.image_from_base64.copy_data_url_success', 'Data URL copied'));
		} catch {
			addToast('error', $t('ui.image_from_base64.copy_error', 'Copy failed'));
		}
	}

	async function copyNormalizedBase64(): Promise<void> {
		if (!result) {
			addToast('info', $t('ui.image_from_base64.copy_empty', 'Nothing to copy'));
			return;
		}
		try {
			await navigator.clipboard.writeText(result.base64);
			addToast(
				'success',
				$t('ui.image_from_base64.copy_base64_success', 'Normalized Base64 copied')
			);
		} catch {
			addToast('error', $t('ui.image_from_base64.copy_error', 'Copy failed'));
		}
	}

	function downloadImage(): void {
		if (!result) {
			addToast('info', $t('ui.image_from_base64.download_empty', 'Nothing to download'));
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
					'ui.image_from_base64.download_success',
					{ filename: result.downloadFilename },
					'Downloaded {filename}'
				)
			);
		} catch {
			addToast('error', $t('ui.image_from_base64.download_error', 'Download failed'));
		}
	}

	function readOptions(): Base64ToImageOptions {
		return { fallbackMimeType };
	}

	function isFallbackMimeType(value: string): value is FallbackMimeOption {
		return FALLBACK_MIME_TYPES.some((mimeType) => mimeType === value);
	}

	function errorMessage(error: unknown): string {
		if (!(error instanceof Error)) {
			return $t('ui.image_from_base64.decode_failed', 'Base64 image decode failed');
		}
		switch (error.message) {
			case 'empty_base64_input':
				return $t('ui.image_from_base64.error.empty', 'Paste a Base64 string to decode.');
			case 'invalid_image_data_uri_mime':
				return $t(
					'ui.image_from_base64.error.invalid_mime',
					'The data URI declares an unsupported image MIME type.'
				);
			case 'invalid_base64_characters':
				return $t(
					'ui.image_from_base64.error.invalid_characters',
					'The input contains characters that are not valid Base64.'
				);
			case 'invalid_base64_padding':
				return $t(
					'ui.image_from_base64.error.invalid_padding',
					'Padding must appear only at the end of the Base64 input.'
				);
			case 'invalid_base64_length':
				return $t(
					'ui.image_from_base64.error.invalid_length',
					'The Base64 length is invalid and cannot be decoded.'
				);
			default:
				return $t('ui.image_from_base64.decode_failed', 'Base64 image decode failed');
		}
	}

	function summarizeFlags(value: Base64ToImageResult): string {
		const flags: string[] = [];
		if (value.metrics.hadDataUriPrefix) {
			flags.push($t('ui.image_from_base64.flag.data_uri', 'Data URI'));
		}
		if (value.metrics.whitespaceRemoved) {
			flags.push($t('ui.image_from_base64.flag.whitespace', 'Spaces removed'));
		}
		if (value.metrics.paddingAdded) {
			flags.push($t('ui.image_from_base64.flag.padding', 'Padding fixed'));
		}
		if (value.metrics.usedFallbackMimeType) {
			flags.push($t('ui.image_from_base64.flag.fallback', 'Fallback MIME'));
		}
		return flags.length > 0 ? flags.join(' · ') : $t('ui.image_from_base64.flag.clean', 'No fixes');
	}

	function formatMimeLabel(mimeType: string): string {
		if (mimeType === 'image/png') return 'PNG';
		if (mimeType === 'image/jpeg') return 'JPEG';
		if (mimeType === 'image/webp') return 'WebP';
		if (mimeType === 'image/gif') return 'GIF';
		if (mimeType === 'image/avif') return 'AVIF';
		if (mimeType === 'image/svg+xml') return 'SVG';
		if (mimeType === 'image/bmp') return 'BMP';
		if (mimeType === 'image/x-icon') return 'ICO';
		return mimeType.replace('image/', '').toUpperCase();
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

	function byteSize(value: string): number {
		return new TextEncoder().encode(value).length;
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
					onclick={loadSample}
					disabled={!canApplySample}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] disabled:opacity-50"
				>
					<ImageDown size={14} />
					{$t('ui.image_from_base64.sample', 'Load sample')}
				</button>
				<button
					type="button"
					onclick={clearInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<Eraser size={14} />
					{$t('ui.image_from_base64.clear', 'Clear')}
				</button>
			</div>

			<div class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{inputStatus}</span>
				{#if isWorkerEligible}
					<span>
						{$t(
							'ui.image_from_base64.worker_active',
							{ size: workerThresholdLabel },
							'Large Base64 input detected (>{size}). Decoding runs in a Web Worker.'
						)}
					</span>
				{/if}
			</div>
		</div>
	</div>

	<div class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(460px,0.9fr)] xl:divide-x xl:divide-[var(--border-default)]">
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div class="border-b border-[var(--border-default)] p-[var(--space-3)]">
				<div class="grid grid-cols-1 gap-[var(--space-2)] sm:grid-cols-2">
					<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						<span>{$t('ui.image_from_base64.fallback_mime', 'Fallback output type')}</span>
						<select
							value={fallbackMimeType}
							onchange={handleFallbackMimeChange}
							class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
						>
							<option value="image/png">PNG</option>
							<option value="image/jpeg">JPEG</option>
							<option value="image/webp">WebP</option>
							<option value="image/gif">GIF</option>
							<option value="image/avif">AVIF</option>
						</select>
					</label>
					<div class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]">
						<ShieldCheck size={16} class="mt-0.5 shrink-0 text-[var(--accent)]" />
						<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t(
								'ui.image_from_base64.privacy_note',
								'Decoded image bytes stay in your browser; nothing is uploaded.'
							)}
						</p>
					</div>
				</div>
				<div class="mt-[var(--space-2)] flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
					<Zap size={16} class="mt-0.5 shrink-0 text-[var(--accent)]" />
					<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t(
							'ui.image_from_base64.performance_note',
							{ size: workerThresholdLabel },
							'Large Base64 strings use a Web Worker above {size}.'
						)}
					</p>
				</div>
			</div>

			<textarea
				value={inputValue}
				oninput={handleInput}
				class="h-full min-h-[320px] w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t(
					'ui.image_from_base64.input_placeholder',
					'Paste a Base64 string or full data URI here...'
				)}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
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

			{#if currentErrorMessage}
				<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-3)]">
					<div class="rounded-[var(--radius-md)] border border-[var(--border-danger)] bg-[var(--bg-danger-subtle)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-danger)]">
						{currentErrorMessage}
					</div>
				</div>
			{/if}

			<div class="flex flex-col gap-[var(--space-2)] border-b border-[var(--border-default)] p-[var(--space-3)] text-[length:var(--text-xs)] text-[var(--text-tertiary)] sm:flex-row sm:items-center sm:justify-between">
				<div class="flex flex-col gap-[var(--space-1)]">
					<span>{outputStatus}</span>
					{#if processedByWorker}
						<span>{$t('ui.image_from_base64.worker_used', 'Processed off-thread')}</span>
					{/if}
				</div>
				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.image_from_base64.processing', 'Decoding...')}</span>
					{/if}
					<button
						type="button"
						disabled={!canCopyBase64}
						onclick={copyNormalizedBase64}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Copy size={14} />
						{$t('ui.image_from_base64.copy_base64', 'Copy Base64')}
					</button>
					<button
						type="button"
						disabled={!canCopyDataUrl}
						onclick={copyDataUrl}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Link2 size={14} />
						{$t('ui.image_from_base64.copy_data_url', 'Copy data URL')}
					</button>
					<button
						type="button"
						disabled={!canDownload}
						onclick={downloadImage}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] disabled:opacity-50"
					>
						<Download size={14} />
						{$t('ui.image_from_base64.download', 'Download')}
					</button>
				</div>
			</div>

			<div class="flex min-h-0 flex-1 items-center justify-center overflow-auto p-[var(--space-4)]">
				{#if result?.dataUrl}
					<img
						src={result.dataUrl}
						alt={$t('ui.image_from_base64.output_preview_alt', 'Decoded image preview')}
						class="max-h-full max-w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] object-contain"
					/>
				{:else}
					<p class="text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
						{$t(
							'ui.image_from_base64.output_placeholder',
							'Decoded image preview appears here...'
						)}
					</p>
				{/if}
			</div>
		</div>
	</div>
</div>
