<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import {
		BARCODE_WORKER_THRESHOLD_BYTES,
		createEmptyBarcodeResult,
		DEFAULT_BARCODE_GENERATOR_OPTIONS,
		generateBarcodeMainThread,
		getBarcodeInputByteSize,
		normalizeBarcodeOptions,
		shouldUseBarcodeWorker,
		type BarcodeFormatId,
		type BarcodeGeneratorError,
		type BarcodeGeneratorOptions,
		type BarcodeGeneratorResult,
		type BarcodeGeneratorWorkerRequest,
		type BarcodeGeneratorWorkerResponse
	} from '$engines/qr/index.js';
	import { input, initInput, formatByteSize } from '$stores/input.store';
	import { clearOutput, output } from '$stores/output.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Download, Eraser, GripHorizontal, RefreshCw, Sparkles } from 'lucide-svelte';

	type PendingWorkerRequest = {
		resolve: (value: BarcodeGeneratorResult) => void;
		reject: (reason: Error) => void;
	};

	const FORMATS: BarcodeFormatId[] = [
		'CODE128',
		'CODE39',
		'CODE93',
		'codabar',
		'EAN13',
		'EAN8',
		'UPC',
		'ITF14',
		'ITF',
		'MSI',
		'MSI10',
		'MSI11',
		'MSI1010',
		'MSI1110',
		'pharmacode'
	];

	const DEFAULT_SAMPLE = 'FMTLY-CODE128-DEMO';

	let { toolSlug }: { toolSlug: string } = $props();

	let initializedToolSlug = $state('');
	let barcodeOptions = $state<BarcodeGeneratorOptions>({ ...DEFAULT_BARCODE_GENERATOR_OPTIONS });
	let generationResult = $state<BarcodeGeneratorResult>(
		createEmptyBarcodeResult({ ...DEFAULT_BARCODE_GENERATOR_OPTIONS })
	);
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let previewSvgUrl = $state<string | null>(null);
	let previewPngDataUrl = $state<string | null>(null);
	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new Map<number, PendingWorkerRequest>();

	let workerThresholdLabel = $derived(formatByteSize(BARCODE_WORKER_THRESHOLD_BYTES));
	let workerActiveLabel = $derived(
		$t(
			'ui.barcode.worker_active',
			{ size: workerThresholdLabel },
			'Large payload ({size}). Barcode generation runs in a Web Worker.'
		)
	);
	let inputStatusLine = $derived(
		`${formatByteSize(getBarcodeInputByteSize($input))} · ${$input.length.toLocaleString()} ${$t('ui.barcode.characters', 'chars')}`
	);
	let outputStatusLine = $derived.by(() => {
		if (!generationResult.output) {
			return $t('ui.barcode.output_empty', 'Generate a barcode to preview and export it.');
		}
		const m = generationResult.metrics;
		const svgPart =
			m.svgBytes > 0 ? `${formatByteSize(m.svgBytes)} SVG` : $t('ui.barcode.raster_only', 'PNG only (worker)');
		return `${svgPart} · ${formatByteSize(m.pngBytes)} PNG · ${Math.round(m.durationMs)} ms`;
	});

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		clearOutput();
		if ($input.length === 0) {
			input.set(DEFAULT_SAMPLE);
		}
	});

	onDestroy(() => {
		if (previewSvgUrl) URL.revokeObjectURL(previewSvgUrl);
		releaseWorker();
		clearOutput();
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		clearOutput();
	});

	$effect(() => {
		const inputValue = $input;
		const optionsSnapshot: BarcodeGeneratorOptions = { ...barcodeOptions };
		const token = ++latestProcessToken;
		const useWorker = shouldUseBarcodeWorker(getBarcodeInputByteSize(inputValue));
		isProcessing = useWorker;
		void processInput(token, inputValue, optionsSnapshot, useWorker);
	});

	$effect(() => {
		const out = generationResult.output;
		if (!out) {
			previewSvgUrl = null;
			previewPngDataUrl = null;
			return;
		}
		if (out.svgMarkup.length > 0) {
			previewPngDataUrl = null;
			const objectUrl = URL.createObjectURL(
				new Blob([out.svgMarkup], { type: 'image/svg+xml;charset=utf-8' })
			);
			previewSvgUrl = objectUrl;
			return () => {
				URL.revokeObjectURL(objectUrl);
				previewSvgUrl = null;
			};
		}
		previewSvgUrl = null;
		previewPngDataUrl = out.pngDataUrl.length > 0 ? out.pngDataUrl : null;
	});

	async function processInput(
		token: number,
		inputValue: string,
		options: BarcodeGeneratorOptions,
		useWorker: boolean
	): Promise<void> {
		if (!useWorker) {
			const nextResult = await generateBarcodeMainThread(inputValue, options);
			if (token !== latestProcessToken) return;
			generationResult = nextResult;
			processedByWorker = false;
			isProcessing = false;
			output.set(nextResult.output?.svgMarkup ?? '');
			return;
		}

		try {
			const workerResult = await runWorker(inputValue, options);
			if (token !== latestProcessToken) return;
			generationResult = workerResult;
			processedByWorker = true;
			output.set(workerResult.output?.svgMarkup ?? '');
		} catch {
			if (token !== latestProcessToken) return;
			const fallback = await generateBarcodeMainThread(inputValue, options);
			generationResult = { ...fallback, usedWorker: false };
			processedByWorker = false;
			output.set(fallback.output?.svgMarkup ?? '');
			addToast(
				'warning',
				$t('ui.barcode.worker_failed', 'Worker failed. Retrying on the main thread.')
			);
		} finally {
			if (token === latestProcessToken) {
				isProcessing = false;
			}
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance !== null) return workerInstance;
		workerInstance = new Worker(new URL('../../../workers/barcode-generator.worker.ts', import.meta.url), {
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

	function handleWorkerMessage(event: MessageEvent<BarcodeGeneratorWorkerResponse>): void {
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

	function runWorker(inputValue: string, options: BarcodeGeneratorOptions): Promise<BarcodeGeneratorResult> {
		const worker = ensureWorker();
		return new Promise<BarcodeGeneratorResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });
			const request: BarcodeGeneratorWorkerRequest = {
				id: requestId,
				value: inputValue,
				options
			};
			worker.postMessage(request);
		});
	}

	function handleTextInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		input.set(target.value);
	}

	function handleFormatChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		barcodeOptions = normalizeBarcodeOptions({
			...barcodeOptions,
			format: target.value as BarcodeFormatId
		});
	}

	function handleWidthInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		barcodeOptions = normalizeBarcodeOptions({
			...barcodeOptions,
			width: Number.parseInt(target.value, 10)
		});
	}

	function handleHeightInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		barcodeOptions = normalizeBarcodeOptions({
			...barcodeOptions,
			height: Number.parseInt(target.value, 10)
		});
	}

	function handleFontSizeInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		barcodeOptions = normalizeBarcodeOptions({
			...barcodeOptions,
			fontSize: Number.parseInt(target.value, 10)
		});
	}

	function handleMarginInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		barcodeOptions = normalizeBarcodeOptions({
			...barcodeOptions,
			margin: Number.parseInt(target.value, 10)
		});
	}

	function handleDisplayValueToggle(): void {
		barcodeOptions = normalizeBarcodeOptions({
			...barcodeOptions,
			displayValue: !barcodeOptions.displayValue
		});
	}

	function handleLineColorInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		barcodeOptions = normalizeBarcodeOptions({
			...barcodeOptions,
			lineColor: target.value
		});
	}

	function handleBackgroundInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		barcodeOptions = normalizeBarcodeOptions({
			...barcodeOptions,
			background: target.value
		});
	}

	function loadSample(): void {
		input.set(DEFAULT_SAMPLE);
	}

	function clearAll(): void {
		input.set('');
		generationResult = createEmptyBarcodeResult({ ...barcodeOptions });
		clearOutput();
	}

	function copySvg(): void {
		const svg = generationResult.output?.svgMarkup ?? '';
		if (!svg) {
			addToast('info', $t('ui.barcode.copy_svg_unavailable', 'SVG is not available for this preview.'));
			return;
		}
		void navigator.clipboard.writeText(svg).then(
			() => addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard')),
			() => addToast('error', $t('ui.toast.copy_error', 'Copy failed'))
		);
	}

	function copyPngDataUrl(): void {
		const png = generationResult.output?.pngDataUrl ?? '';
		if (!png) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		void navigator.clipboard.writeText(png).then(
			() => addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard')),
			() => addToast('error', $t('ui.toast.copy_error', 'Copy failed'))
		);
	}

	function downloadSvg(): void {
		const svg = generationResult.output?.svgMarkup;
		if (!svg) return;
		const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'barcode.svg';
		a.click();
		URL.revokeObjectURL(url);
	}

	function downloadPng(): void {
		const png = generationResult.output?.pngDataUrl;
		if (!png) return;
		const a = document.createElement('a');
		a.href = png;
		a.download = 'barcode.png';
		a.click();
	}

	function getErrorMessage(error: BarcodeGeneratorError | null): string {
		if (!error) return '';
		switch (error.code) {
			case 'empty_value':
				return $t('ui.barcode.error.empty', 'Enter a value to encode.');
			case 'invalid_value':
				return getInvalidDetailMessage(error.detail);
			case 'generation_failed':
				return $t(
					'ui.barcode.error.generation_failed',
					{ detail: error.detail },
					'Could not generate barcode: {detail}'
				);
			default:
				return error.detail;
		}
	}

	function getInvalidDetailMessage(detail: string): string {
		switch (detail) {
			case 'ean13_digits':
				return $t('ui.barcode.error.ean13', 'EAN-13 requires 12 or 13 digits.');
			case 'ean8_digits':
				return $t('ui.barcode.error.ean8', 'EAN-8 requires 7 or 8 digits.');
			case 'upc_digits':
				return $t('ui.barcode.error.upc', 'UPC-A requires 11 or 12 digits.');
			case 'itf14_digits':
				return $t('ui.barcode.error.itf14', 'ITF-14 requires 13 or 14 digits.');
			case 'itf_pairs':
				return $t('ui.barcode.error.itf', 'ITF requires an even number of digits (at least two).');
			case 'msi_digits':
				return $t('ui.barcode.error.msi', 'MSI encodes digits only.');
			case 'pharmacode_range':
				return $t('ui.barcode.error.pharmacode', 'Pharmacode must be an integer from 1 to 131070.');
			default:
				return $t('ui.barcode.error.invalid_value', 'This value does not match the selected format.');
		}
	}

	function formatLabel(id: BarcodeFormatId): string {
		return $t(`ui.barcode.format.${id}`, id);
	}
</script>

<div class="flex h-full min-h-0 w-full flex-col overflow-hidden bg-[var(--bg-surface)] text-[var(--text-primary)]">
	<div class="flex flex-wrap items-center gap-[var(--space-2)] border-b border-[var(--border-subtle)] px-[var(--space-4)] py-[var(--space-3)]">
		<button
			type="button"
			class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
			onclick={loadSample}
		>
			<RefreshCw size={14} />
			<span>{$t('ui.actions.sample', 'Sample')}</span>
		</button>
		<button
			type="button"
			class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
			onclick={clearAll}
		>
			<Eraser size={14} />
			<span>{$t('ui.actions.clear', 'Clear')}</span>
		</button>
		{#if isProcessing}
			<span class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-full)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
				<Sparkles size={12} />
				{$t('ui.actions.running', 'Running…')}
			</span>
		{/if}
		{#if processedByWorker}
			<span class="inline-flex items-center rounded-[var(--radius-full)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
				{$t('ui.barcode.worker_badge', 'Worker')}
			</span>
		{/if}
	</div>

	<div class="grid min-h-0 flex-1 grid-cols-1 gap-[var(--space-3)] overflow-auto p-[var(--space-3)] xl:grid-cols-[minmax(260px,1fr)_minmax(320px,1.1fr)_minmax(260px,0.95fr)]">
		<div class="flex min-h-0 flex-col gap-[var(--space-3)]">
			<section class="flex shrink-0 flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)]">
				<div class="border-b border-[var(--border-subtle)] px-[var(--space-4)] py-[var(--space-3)]">
					<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
						{$t('ui.barcode.content_label', 'Barcode data')}
					</div>
					<div class="text-[length:var(--text-xs)] text-[var(--text-secondary)]">{inputStatusLine}</div>
				</div>
				<textarea
					value={$input}
					oninput={handleTextInput}
					class="min-h-[140px] resize-none border-0 bg-transparent px-[var(--space-4)] py-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none"
					placeholder={$t('ui.barcode.input_placeholder', 'Type or paste the payload for the selected symbology…')}
					spellcheck="false"
				></textarea>
			</section>

			<section class="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-4)] py-[var(--space-3)]">
				<label class="block">
					<span class="mb-[var(--space-2)] block text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
						{$t('ui.barcode.format_label', 'Symbology')}
					</span>
					<select
						class="w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-[var(--space-2)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
						value={barcodeOptions.format}
						onchange={handleFormatChange}
					>
						{#each FORMATS as fmt}
							<option value={fmt}>{formatLabel(fmt)}</option>
						{/each}
					</select>
				</label>
				<p class="mt-[var(--space-2)] text-[length:var(--text-xs)] leading-relaxed text-[var(--text-secondary)]">
					{$t('ui.barcode.format_hint', 'Retail GTINs use EAN/UPC; logistics often uses Code 128 or ITF-14.')}
				</p>
			</section>
		</div>

		<section class="flex min-h-0 flex-col gap-[var(--space-3)]">
			<div class="flex min-h-[220px] flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)]">
				<div class="flex items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-subtle)] px-[var(--space-4)] py-[var(--space-3)]">
					<div>
						<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							{$t('ui.barcode.preview_label', 'Preview')}
						</div>
						<div class="text-[length:var(--text-xs)] text-[var(--text-secondary)]">{outputStatusLine}</div>
					</div>
					<div class="flex flex-wrap gap-[var(--space-2)]">
						<button
							type="button"
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[6px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
							onclick={copySvg}
						>
							<Copy size={14} />
							{$t('ui.barcode.copy_svg', 'Copy SVG')}
						</button>
						<button
							type="button"
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[6px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
							onclick={copyPngDataUrl}
						>
							<Copy size={14} />
							{$t('ui.barcode.copy_png', 'Copy PNG data URL')}
						</button>
						<button
							type="button"
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[6px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
							onclick={downloadSvg}
						>
							<Download size={14} />
							{$t('ui.barcode.download_svg', 'SVG')}
						</button>
						<button
							type="button"
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[6px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
							onclick={downloadPng}
						>
							<Download size={14} />
							{$t('ui.barcode.download_png', 'PNG')}
						</button>
					</div>
				</div>
				<div class="flex min-h-0 flex-1 items-center justify-center overflow-auto p-[var(--space-4)]">
					{#if previewSvgUrl}
						<img
							src={previewSvgUrl}
							alt={$t('ui.barcode.preview_alt', 'Barcode preview')}
							class="max-h-[min(50vh,360px)] max-w-full object-contain"
						/>
					{:else if previewPngDataUrl}
						<img
							src={previewPngDataUrl}
							alt={$t('ui.barcode.preview_alt', 'Barcode preview')}
							class="max-h-[min(50vh,360px)] max-w-full object-contain"
						/>
					{:else}
						<div class="flex flex-col items-center gap-[var(--space-2)] text-center text-[var(--text-secondary)]">
							<GripHorizontal size={40} class="opacity-40" aria-hidden="true" />
							<p class="text-[length:var(--text-sm)]">
								{$t('ui.barcode.empty_preview', 'Adjust data and options to render a vector or raster preview.')}
							</p>
						</div>
					{/if}
				</div>
			</div>
			{#if processedByWorker}
				<p class="text-[length:var(--text-xs)] text-[var(--text-secondary)]">{workerActiveLabel}</p>
			{/if}
			{#if generationResult.error}
				<p class="text-[length:var(--text-sm)] text-[var(--color-error)]" role="alert">
					{getErrorMessage(generationResult.error)}
				</p>
			{/if}
		</section>

		<section class="flex flex-col gap-[var(--space-3)] rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-4)] py-[var(--space-3)]">
			<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
				{$t('ui.barcode.section.appearance', 'Appearance')}
			</div>

			<label class="flex items-center justify-between gap-[var(--space-3)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
				<span>{$t('ui.barcode.display_value', 'Show human-readable text')}</span>
				<button
					type="button"
					role="switch"
					aria-checked={barcodeOptions.displayValue}
					aria-label={$t('ui.barcode.display_value', 'Show human-readable text')}
					class="relative h-7 w-12 shrink-0 rounded-full border border-[var(--border-default)] bg-[var(--bg-elevated)] transition-colors"
					class:bg-[var(--accent)]={barcodeOptions.displayValue}
					onclick={handleDisplayValueToggle}
				>
					<span
						class="absolute top-[3px] left-[3px] h-[22px] w-[22px] rounded-full bg-[var(--bg-surface)] transition-transform"
						style:transform={barcodeOptions.displayValue ? 'translateX(20px)' : 'translateX(0)'}
					></span>
				</button>
			</label>

			<label class="block text-[length:var(--text-xs)] text-[var(--text-secondary)]">
				<span class="mb-[var(--space-1)] flex justify-between">
					<span>{$t('ui.barcode.bar_width', 'Bar width')}</span>
					<span>{barcodeOptions.width}px</span>
				</span>
				<input
					type="range"
					min="1"
					max="6"
					step="1"
					value={barcodeOptions.width}
					class="w-full"
					oninput={handleWidthInput}
				/>
			</label>

			<label class="block text-[length:var(--text-xs)] text-[var(--text-secondary)]">
				<span class="mb-[var(--space-1)] flex justify-between">
					<span>{$t('ui.barcode.bar_height', 'Bar height')}</span>
					<span>{barcodeOptions.height}px</span>
				</span>
				<input
					type="range"
					min="24"
					max="240"
					step="2"
					value={barcodeOptions.height}
					class="w-full"
					oninput={handleHeightInput}
				/>
			</label>

			<label class="block text-[length:var(--text-xs)] text-[var(--text-secondary)]">
				<span class="mb-[var(--space-1)] flex justify-between">
					<span>{$t('ui.barcode.font_size', 'Label size')}</span>
					<span>{barcodeOptions.fontSize}px</span>
				</span>
				<input
					type="range"
					min="8"
					max="48"
					step="1"
					value={barcodeOptions.fontSize}
					class="w-full"
					oninput={handleFontSizeInput}
				/>
			</label>

			<label class="block text-[length:var(--text-xs)] text-[var(--text-secondary)]">
				<span class="mb-[var(--space-1)] flex justify-between">
					<span>{$t('ui.barcode.quiet_zone', 'Quiet zone')}</span>
					<span>{barcodeOptions.margin}px</span>
				</span>
				<input
					type="range"
					min="0"
					max="48"
					step="1"
					value={barcodeOptions.margin}
					class="w-full"
					oninput={handleMarginInput}
				/>
			</label>

			<div class="grid grid-cols-2 gap-[var(--space-3)]">
				<label class="block text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<span class="mb-[var(--space-1)] block">{$t('ui.barcode.line_color', 'Bars')}</span>
					<input
						type="color"
						class="h-10 w-full cursor-pointer rounded-[var(--radius-md)] border border-[var(--border-default)] bg-transparent"
						value={barcodeOptions.lineColor}
						oninput={handleLineColorInput}
					/>
				</label>
				<label class="block text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<span class="mb-[var(--space-1)] block">{$t('ui.barcode.background', 'Background')}</span>
					<input
						type="color"
						class="h-10 w-full cursor-pointer rounded-[var(--radius-md)] border border-[var(--border-default)] bg-transparent"
						value={barcodeOptions.background}
						oninput={handleBackgroundInput}
					/>
				</label>
			</div>
		</section>
	</div>
</div>
