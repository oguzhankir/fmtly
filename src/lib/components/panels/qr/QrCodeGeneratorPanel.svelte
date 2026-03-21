<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import {
		DEFAULT_QR_GENERATOR_OPTIONS,
		QR_WORKER_THRESHOLD_BYTES,
		createEmptyQRCodeResult,
		generateQRCode,
		shouldUseQRCodeWorker,
		type QRErrorCorrectionLevel,
		type QRGeneratorError,
		type QRGeneratorOptions,
		type QRGeneratorOutput,
		type QRGeneratorResult,
		type QRGeneratorWarningCode,
		type QRGeneratorWorkerRequest,
		type QRGeneratorWorkerResponse
	} from '$engines/qr/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { clearOutput, output } from '$stores/output.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Download, Eraser, ImagePlus, RefreshCw, ScanQrCode, Sparkles, Trash2 } from 'lucide-svelte';

	type PendingWorkerRequest = {
		resolve: (value: QRGeneratorResult) => void;
		reject: (reason: Error) => void;
	};

	type ScanReadiness = {
		level: 'excellent' | 'balanced' | 'risky';
		label: string;
		description: string;
	};

	const DEFAULT_SAMPLE_INPUT = 'https://fmtly.dev/json/formatter?utm_source=fmtly&utm_medium=qr';
	const ERROR_CORRECTION_OPTIONS: Array<{ value: QRErrorCorrectionLevel; label: string }> = [
		{ value: 'L', label: 'L' },
		{ value: 'M', label: 'M' },
		{ value: 'Q', label: 'Q' },
		{ value: 'H', label: 'H' }
	];

	let { toolSlug }: { toolSlug: string } = $props();

	let initializedToolSlug = $state('');
	let qrOptions = $state<QRGeneratorOptions>({ ...DEFAULT_QR_GENERATOR_OPTIONS });
	let generationResult = $state<QRGeneratorResult>(createEmptyQRCodeResult(DEFAULT_QR_GENERATOR_OPTIONS));
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let logoInput: HTMLInputElement | null = $state(null);
	let previewSvgUrl = $state<string | null>(null);
	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new Map<number, PendingWorkerRequest>();

	let workerThresholdLabel = $derived(formatByteSize(QR_WORKER_THRESHOLD_BYTES));
	let inputStatusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${$input.length.toLocaleString()} ${$t('ui.qr.characters', 'chars')}`
	);
	let outputStatusLine = $derived.by(() => {
		if (!generationResult.output) {
			return $t('ui.qr.output_empty', 'Generate a QR code to preview and export it.');
		}

		return `${formatByteSize(generationResult.metrics.svgBytes)} SVG · ${formatByteSize(generationResult.metrics.pngBytes)} PNG`;
	});
	let errorMessage = $derived(getErrorMessage(generationResult.error));
	let warningMessages = $derived(
		generationResult.warnings
			.map((warningCode) => getWarningMessage(warningCode))
			.filter((warningMessage) => warningMessage.length > 0)
	);
	let hasLogo = $derived(qrOptions.logoDataUrl !== null);
	let previewAlt = $derived($t('ui.qr.preview_alt', 'Generated QR code preview'));
	let workerActiveLabel = $derived(
		($t as any)(
			'ui.qr.worker_active',
			'Large input detected (>{size}). QR generation is running in a Web Worker.',
			{ size: workerThresholdLabel }
		)
	);
	let scanReadiness = $derived(getScanReadiness(qrOptions, generationResult.metrics.inputBytes));

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		clearOutput();

		if ($input.length === 0) {
			input.set(DEFAULT_SAMPLE_INPUT);
		}
	});

	onDestroy(() => {
		if (previewSvgUrl) {
			URL.revokeObjectURL(previewSvgUrl);
		}
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
		const optionsSnapshot: QRGeneratorOptions = { ...qrOptions };
		const token = ++latestProcessToken;
		const useWorker = shouldUseQRCodeWorker(inputValue);

		isProcessing = useWorker;
		void processInput(token, inputValue, optionsSnapshot, useWorker);
	});

	$effect(() => {
		const svgMarkup = generationResult.output?.svgMarkup ?? '';
		if (svgMarkup.length === 0) {
			previewSvgUrl = null;
			return;
		}

		const objectUrl = URL.createObjectURL(
			new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' })
		);
		previewSvgUrl = objectUrl;

		return () => {
			URL.revokeObjectURL(objectUrl);
			if (previewSvgUrl === objectUrl) {
				previewSvgUrl = null;
			}
		};
	});

	async function processInput(
		token: number,
		inputValue: string,
		options: QRGeneratorOptions,
		useWorker: boolean
	): Promise<void> {
		if (!useWorker) {
			const nextResult = await generateQRCode(inputValue, options);
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
			generationResult = await generateQRCode(inputValue, options);
			processedByWorker = false;
			output.set(generationResult.output?.svgMarkup ?? '');
			addToast(
				'error',
				$t('ui.qr.worker_failed', 'Worker processing failed. Falling back to main thread generation.')
			);
		} finally {
			if (token === latestProcessToken) {
				isProcessing = false;
			}
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance !== null) {
			return workerInstance;
		}

		workerInstance = new Worker(new URL('../../../workers/qr-generator.worker.ts', import.meta.url), {
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

	function handleWorkerMessage(event: MessageEvent<QRGeneratorWorkerResponse>): void {
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

	function runWorker(inputValue: string, options: QRGeneratorOptions): Promise<QRGeneratorResult> {
		const worker = ensureWorker();

		return new Promise<QRGeneratorResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });

			const request: QRGeneratorWorkerRequest = {
				id: requestId,
				input: inputValue,
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

	function handleErrorCorrectionSelect(level: QRErrorCorrectionLevel): void {
		qrOptions = {
			...qrOptions,
			errorCorrectionLevel: level
		};
	}

	function handleSizeInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		qrOptions = {
			...qrOptions,
			size: Number.parseInt(target.value, 10)
		};
	}

	function handleMarginInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		qrOptions = {
			...qrOptions,
			margin: Number.parseInt(target.value, 10)
		};
	}

	function handleLogoScaleInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		qrOptions = {
			...qrOptions,
			logoScale: Number.parseFloat(target.value)
		};
	}

	function handleDarkColorInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		qrOptions = {
			...qrOptions,
			darkColor: target.value
		};
	}

	function handleLightColorInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		qrOptions = {
			...qrOptions,
			lightColor: target.value
		};
	}

	function handleTransparentBackgroundToggle(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		qrOptions = {
			...qrOptions,
			transparentBackground: target.checked
		};
	}

	function triggerLogoUpload(): void {
		logoInput?.click();
	}

	async function handleLogoUpload(event: Event): Promise<void> {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const file = target.files?.[0];
		if (!file) return;

		if (!file.type.startsWith('image/')) {
			addToast('error', $t('ui.qr.error.invalid_logo', 'Please upload a valid image file for the logo.'));
			target.value = '';
			return;
		}

		try {
			const logoDataUrl = await readFileAsDataUrl(file);
			qrOptions = {
				...qrOptions,
				logoDataUrl
			};
			addToast('success', $t('ui.qr.toast.logo_added', 'Logo overlay added'));
		} catch {
			addToast('error', $t('ui.qr.error.invalid_logo', 'Please upload a valid image file for the logo.'));
		} finally {
			target.value = '';
		}
	}

	function removeLogo(): void {
		qrOptions = {
			...qrOptions,
			logoDataUrl: null
		};
		addToast('info', $t('ui.qr.toast.logo_removed', 'Logo overlay removed'));
	}

	function loadSample(): void {
		input.set(DEFAULT_SAMPLE_INPUT);
		qrOptions = { ...DEFAULT_QR_GENERATOR_OPTIONS };
		addToast('success', $t('ui.actions.sample_loaded', 'Sample loaded'));
	}

	function clearAll(): void {
		input.set('');
		qrOptions = { ...DEFAULT_QR_GENERATOR_OPTIONS };
		clearOutput();
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
	}

	async function copySvgMarkup(): Promise<void> {
		const svgMarkup = generationResult.output?.svgMarkup;
		if (!svgMarkup) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}

		try {
			await navigator.clipboard.writeText(svgMarkup);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	async function downloadSvg(): Promise<void> {
		const svgMarkup = generationResult.output?.svgMarkup;
		if (!svgMarkup) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}

		const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
		downloadBlob(blob, 'fmtly-qr-code.svg');
	}

	async function downloadPng(): Promise<void> {
		const outputValue = generationResult.output;
		if (!outputValue) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}

		try {
			const pngDataUrl = await getPngDataUrl(outputValue, generationResult.options);
			downloadDataUrl(pngDataUrl, 'fmtly-qr-code.png');
		} catch {
			addToast('error', $t('ui.qr.error.png_export_failed', 'PNG export failed for this QR code.'));
		}
	}

	async function getPngDataUrl(
		outputValue: QRGeneratorOutput,
		options: QRGeneratorOptions
	): Promise<string> {
		if (!options.logoDataUrl) {
			return outputValue.pngDataUrl;
		}

		return await svgMarkupToPngDataUrl(
			outputValue.svgMarkup,
			options.size,
			options.transparentBackground,
			options.lightColor
		);
	}

	function readFileAsDataUrl(file: File): Promise<string> {
		return new Promise<string>((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => {
				if (typeof reader.result === 'string') {
					resolve(reader.result);
					return;
				}
				reject(new Error('Invalid file result'));
			};
			reader.onerror = () => reject(reader.error ?? new Error('File read failed'));
			reader.readAsDataURL(file);
		});
	}

	function svgMarkupToPngDataUrl(
		svgMarkup: string,
		size: number,
		transparentBackground: boolean,
		lightColor: string
	): Promise<string> {
		return new Promise<string>((resolve, reject) => {
			const svgBlob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
			const svgObjectUrl = URL.createObjectURL(svgBlob);
			const image = new Image();
			image.onload = () => {
				const canvas = document.createElement('canvas');
				canvas.width = size;
				canvas.height = size;
				const context = canvas.getContext('2d');
				if (!context) {
					reject(new Error('Canvas context unavailable'));
					return;
				}

				if (!transparentBackground) {
					context.fillStyle = lightColor;
					context.fillRect(0, 0, size, size);
				}

				context.drawImage(image, 0, 0, size, size);
				URL.revokeObjectURL(svgObjectUrl);
				resolve(canvas.toDataURL('image/png'));
			};
			image.onerror = () => {
				URL.revokeObjectURL(svgObjectUrl);
				reject(new Error('SVG rasterization failed'));
			};
			image.src = svgObjectUrl;
		});
	}

	function downloadBlob(blob: Blob, filename: string): void {
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = filename;
		anchor.click();
		URL.revokeObjectURL(url);
	}

	function downloadDataUrl(dataUrl: string, filename: string): void {
		const anchor = document.createElement('a');
		anchor.href = dataUrl;
		anchor.download = filename;
		anchor.click();
	}

	function getScanReadiness(options: QRGeneratorOptions, inputBytes: number): ScanReadiness {
		let score = 0;

		if (options.errorCorrectionLevel === 'Q' || options.errorCorrectionLevel === 'H') {
			score += 2;
		} else if (options.errorCorrectionLevel === 'L') {
			score -= 1;
		}

		if (options.margin >= 2) {
			score += 1;
		} else if (options.margin === 0) {
			score -= 2;
		}

		if (options.logoDataUrl) {
			score -= 1;
			if (options.errorCorrectionLevel === 'L' || options.errorCorrectionLevel === 'M') {
				score -= 2;
			}
		}

		if (inputBytes > 1200) {
			score -= 1;
		}

		if (score >= 2) {
			return {
				level: 'excellent',
				label: $t('ui.qr.scan_readiness.excellent', 'Excellent scan readiness'),
				description: $t(
					'ui.qr.scan_readiness.excellent_hint',
					'These settings are well balanced for reliable on-screen and printed scans.'
				)
			};
		}

		if (score >= 0) {
			return {
				level: 'balanced',
				label: $t('ui.qr.scan_readiness.balanced', 'Balanced setup'),
				description: $t(
					'ui.qr.scan_readiness.balanced_hint',
					'This QR should scan well, but stronger correction or more quiet zone can improve resilience.'
				)
			};
		}

		return {
			level: 'risky',
			label: $t('ui.qr.scan_readiness.risky', 'Risky for scanning'),
			description: $t(
				'ui.qr.scan_readiness.risky_hint',
				'Current settings may reduce scan reliability. Increase quiet zone or correction, especially when using a logo.'
			)
		};
	}

	function getErrorMessage(error: QRGeneratorError | null): string {
		if (!error) return '';

		switch (error.code) {
			case 'input_too_long':
				return $t(
					'ui.qr.error.input_too_long',
					'This text is too large to fit into a single QR code. Shorten the content or remove some data.'
				);
			case 'invalid_logo':
				return $t('ui.qr.error.invalid_logo', 'Please upload a valid image file for the logo.');
			case 'generation_failed':
				return ($t as any)('ui.qr.error.generation_failed', 'QR generation failed: {detail}', {
					detail: error.detail
				});
			default:
				return error.detail;
		}
	}

	function getWarningMessage(code: QRGeneratorWarningCode): string {
		switch (code) {
			case 'logo_overlay_low_error_correction':
				return $t(
					'ui.qr.warning.logo_overlay_low_error_correction',
					'Using a center logo with L or M correction can reduce scan reliability. Prefer Q or H.'
				);
			default:
				return '';
		}
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
				{$t('ui.qr.worker_badge', 'Worker')}
			</span>
		{/if}
	</div>

	<div class="grid min-h-0 flex-1 grid-cols-1 gap-[var(--space-3)] p-[var(--space-3)] xl:grid-cols-[minmax(240px,0.78fr)_minmax(380px,1.08fr)_minmax(290px,0.9fr)]">
		<div class="flex min-h-0 flex-col gap-[var(--space-3)]">
			<section class="flex shrink-0 flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)]">
				<div class="flex items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-subtle)] px-[var(--space-4)] py-[var(--space-3)]">
					<div>
						<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							{$t('ui.qr.content_label', 'QR content')}
						</div>
						<div class="text-[length:var(--text-xs)] text-[var(--text-secondary)]">{inputStatusLine}</div>
					</div>
					<div class="text-[length:var(--text-xs)] text-[var(--text-muted)]">
						{$t('ui.qr.encoding_hint', 'Text, URLs, Wi-Fi payloads, vCards, or app deep links')}
					</div>
				</div>
				<textarea
					value={$input}
					oninput={handleTextInput}
					class="min-h-[150px] resize-none border-0 bg-transparent px-[var(--space-4)] py-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none xl:min-h-[170px]"
					placeholder={$t('ui.qr.input_placeholder', 'Paste a URL, plain text, Wi-Fi payload, or any QR-ready content here...')}
					spellcheck="false"
				></textarea>
			</section>

			<div class="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
				<div class="mb-[var(--space-2)] flex items-start justify-between gap-[var(--space-2)]">
					<div class="min-w-0 flex-1">
						<div class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							{$t('ui.qr.section.logo', 'Logo overlay')}
						</div>
						<div class="mt-[2px] text-[length:11px] leading-[1.35] text-[var(--text-secondary)]">
							{$t('ui.qr.logo_hint', 'Upload a small centered logo for branded QR exports.')}
						</div>
					</div>
					<input bind:this={logoInput} type="file" accept="image/png,image/jpeg,image/webp,image/svg+xml" class="sr-only" onchange={handleLogoUpload} />
					<button
						type="button"
						class="shrink-0 inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[6px] text-[length:11px] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
						onclick={triggerLogoUpload}
					>
						<ImagePlus size={14} />
						<span>{$t('ui.qr.upload_logo', 'Upload logo')}</span>
					</button>
				</div>
				{#if hasLogo}
					<div class="space-y-[var(--space-3)]">
						<div class="overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]">
							<img src={qrOptions.logoDataUrl ?? ''} alt={$t('ui.qr.logo_preview_alt', 'Uploaded logo preview')} class="mx-auto max-h-14 w-auto object-contain" />
						</div>
						<label class="block">
							<div class="mb-[var(--space-2)] flex items-center justify-between text-[length:var(--text-xs)] text-[var(--text-secondary)]">
								<span>{$t('ui.qr.logo_scale_label', 'Logo size')}</span>
								<span>{Math.round(qrOptions.logoScale * 100)}%</span>
							</div>
							<input type="range" min="0.12" max="0.32" step="0.01" value={qrOptions.logoScale} class="w-full" oninput={handleLogoScaleInput} />
						</label>
						<button
							type="button"
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--status-error)] hover:bg-[var(--bg-surface-hover)]"
							onclick={removeLogo}
						>
							<Trash2 size={14} />
							<span>{$t('ui.qr.remove_logo', 'Remove logo')}</span>
						</button>
					</div>
				{:else}
					<div class="rounded-[var(--radius-md)] border border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)] text-[length:11px] leading-[1.4] text-[var(--text-secondary)]">
						{$t('ui.qr.logo_empty', 'No logo selected. Leave this empty for the highest scan reliability, or upload a small image for branded campaigns.')}
					</div>
				{/if}
			</div>
		</div>

		<section class="flex min-h-0 flex-col gap-[var(--space-3)]">
			<div class="flex shrink-0 flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)]">
				<div class="flex items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-subtle)] px-[var(--space-4)] py-[var(--space-3)]">
					<div>
						<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							{$t('ui.qr.preview_label', 'Live preview')}
						</div>
						<div class="text-[length:var(--text-xs)] text-[var(--text-secondary)]">{outputStatusLine}</div>
					</div>
					<div class="flex flex-wrap items-center gap-[var(--space-2)]">
						<button
							type="button"
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
							onclick={copySvgMarkup}
						>
							<Copy size={14} />
							<span>{$t('ui.qr.copy_svg', 'Copy SVG')}</span>
						</button>
						<button
							type="button"
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
							onclick={downloadSvg}
						>
							<Download size={14} />
							<span>{$t('ui.qr.download_svg', 'Download SVG')}</span>
						</button>
						<button
							type="button"
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
							onclick={downloadPng}
						>
							<Download size={14} />
							<span>{$t('ui.qr.download_png', 'Download PNG')}</span>
						</button>
					</div>
				</div>
				<div class="flex min-h-[300px] flex-1 items-center justify-center bg-[var(--bg-surface)] p-[var(--space-3)] xl:min-h-0 xl:p-[var(--space-4)]">
					<div class={`flex aspect-square w-full max-w-[340px] items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-dashed border-[var(--border-default)] ${generationResult.options.transparentBackground ? 'bg-[linear-gradient(45deg,var(--bg-base)_25%,transparent_25%),linear-gradient(-45deg,var(--bg-base)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,var(--bg-base)_75%),linear-gradient(-45deg,transparent_75%,var(--bg-base)_75%)] bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0]' : 'bg-[var(--bg-base)]'} xl:max-w-[420px]`}>
						{#if previewSvgUrl}
							<div class="flex h-full w-full items-center justify-center p-[var(--space-3)]">
								<img
									src={previewSvgUrl}
									alt={previewAlt}
									class="block max-h-full max-w-full object-contain"
								/>
							</div>
						{:else}
							<div class="flex max-w-[220px] flex-col items-center gap-[var(--space-3)] text-center text-[var(--text-secondary)]">
								<ScanQrCode size={32} />
								<p class="text-[length:var(--text-sm)] leading-[var(--leading-relaxed)]">
									{$t('ui.qr.empty_state', 'Enter content to generate a QR code preview with export-ready SVG and PNG output.')}
								</p>
							</div>
						{/if}
					</div>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-[var(--space-2)] rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-3)] xl:grid-cols-4">
				<div class="rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-muted)]">{$t('ui.qr.metric.version', 'Version')}</div>
					<div class="mt-[var(--space-1)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{generationResult.metrics.version || '—'}</div>
				</div>
				<div class="rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-muted)]">{$t('ui.qr.metric.modules', 'Modules')}</div>
					<div class="mt-[var(--space-1)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{generationResult.metrics.moduleCount || '—'}</div>
				</div>
				<div class="rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-muted)]">{$t('ui.qr.metric.mask', 'Mask')}</div>
					<div class="mt-[var(--space-1)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{generationResult.metrics.maskPattern || '—'}</div>
				</div>
				<div class="rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-muted)]">{$t('ui.qr.metric.segments', 'Segments')}</div>
					<div class="mt-[var(--space-1)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{generationResult.metrics.segmentCount || '—'}</div>
				</div>
			</div>
		</section>

		<aside class="flex min-h-0 flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)]">
			<div class="border-b border-[var(--border-subtle)] px-[var(--space-3)] py-[var(--space-3)]">
				<div class="mb-[var(--space-2)] flex items-center justify-between gap-[var(--space-2)]">
					<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
						{$t('ui.qr.scan_readiness_label', 'Scan readiness')}
					</div>
					<span class={`inline-flex rounded-[var(--radius-full)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${scanReadiness.level === 'excellent' ? 'bg-[color:color-mix(in_srgb,var(--status-success)_14%,var(--bg-base))] text-[var(--status-success)]' : scanReadiness.level === 'balanced' ? 'bg-[color:color-mix(in_srgb,var(--status-warning)_14%,var(--bg-base))] text-[var(--status-warning)]' : 'bg-[color:color-mix(in_srgb,var(--status-error)_12%,var(--bg-base))] text-[var(--status-error)]'}`}>
						{scanReadiness.label}
					</span>
				</div>
				<p class="text-[length:var(--text-xs)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]">
					{scanReadiness.description}
				</p>
			</div>

			<div class="grid gap-[var(--space-3)] p-[var(--space-3)] xl:content-start">
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
					<div class="mb-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
						{$t('ui.qr.section.reliability', 'Reliability')}
					</div>
					<div class="flex flex-wrap gap-[var(--space-2)]">
						{#each ERROR_CORRECTION_OPTIONS as option}
							<button
								type="button"
								class={`rounded-[var(--radius-md)] border px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] ${qrOptions.errorCorrectionLevel === option.value ? 'border-[var(--accent)] bg-[var(--accent)] text-white' : 'border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)]'}`}
								onclick={() => handleErrorCorrectionSelect(option.value)}
							>
								{option.label}
							</button>
						{/each}
					</div>
					<p class="mt-[var(--space-2)] text-[length:var(--text-xs)] leading-[var(--leading-relaxed)] text-[var(--text-muted)]">
						{$t('ui.qr.error_correction_hint', 'Higher correction survives more damage, scratches, and logo overlays, but slightly reduces total capacity.')}
					</p>
				</div>

				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
					<div class="mb-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
						{$t('ui.qr.section.appearance', 'Appearance')}
					</div>
					<div class="space-y-[var(--space-3)]">
						<label class="block">
							<div class="mb-[var(--space-2)] flex items-center justify-between text-[length:var(--text-xs)] text-[var(--text-secondary)]">
								<span>{$t('ui.qr.size_label', 'Size')}</span>
								<span>{qrOptions.size}px</span>
							</div>
							<input type="range" min="128" max="1024" step="32" value={qrOptions.size} class="w-full" oninput={handleSizeInput} />
						</label>
						<label class="block">
							<div class="mb-[var(--space-2)] flex items-center justify-between text-[length:var(--text-xs)] text-[var(--text-secondary)]">
								<span>{$t('ui.qr.margin_label', 'Quiet zone')}</span>
								<span>{qrOptions.margin}</span>
							</div>
							<input type="range" min="0" max="8" step="1" value={qrOptions.margin} class="w-full" oninput={handleMarginInput} />
						</label>
						<div class="grid grid-cols-2 gap-[var(--space-2)]">
							<label class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
								<div class="mb-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">{$t('ui.qr.dark_color_label', 'Foreground')}</div>
								<div class="flex items-center gap-[var(--space-2)]">
									<input type="color" value={qrOptions.darkColor} class="h-8 w-10 rounded border-0 bg-transparent p-0" oninput={handleDarkColorInput} />
									<span class="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--text-primary)]">{qrOptions.darkColor}</span>
								</div>
							</label>
							<label class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
								<div class="mb-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">{$t('ui.qr.light_color_label', 'Background')}</div>
								<div class="flex items-center gap-[var(--space-2)]">
									<input type="color" value={qrOptions.lightColor} class="h-8 w-10 rounded border-0 bg-transparent p-0" oninput={handleLightColorInput} disabled={qrOptions.transparentBackground} />
									<span class="font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--text-primary)]">{qrOptions.transparentBackground ? $t('ui.qr.transparent', 'Transparent') : qrOptions.lightColor}</span>
								</div>
							</label>
						</div>
						<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<input type="checkbox" checked={qrOptions.transparentBackground} oninput={handleTransparentBackgroundToggle} />
							<span>{$t('ui.qr.transparent_background_label', 'Transparent background')}</span>
						</label>
					</div>
				</div>

				{#if warningMessages.length > 0 || processedByWorker}
					<div class="grid gap-[var(--space-2)]">
						{#if processedByWorker}
							<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
								{workerActiveLabel}
							</div>
						{/if}
						{#each warningMessages as warningMessage}
							<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
								{warningMessage}
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</aside>
	</div>

	{#if errorMessage}
		<div class="mx-[var(--space-3)] mb-[var(--space-3)] rounded-[var(--radius-lg)] border border-[var(--status-error)] bg-[color:color-mix(in_srgb,var(--status-error)_8%,var(--bg-base))] px-[var(--space-4)] py-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--status-error)]">
			{errorMessage}
		</div>
	{/if}
</div>
