export type BarcodeFormatId =
	| 'CODE128'
	| 'CODE39'
	| 'CODE93'
	| 'codabar'
	| 'EAN13'
	| 'EAN8'
	| 'UPC'
	| 'ITF14'
	| 'ITF'
	| 'MSI'
	| 'MSI10'
	| 'MSI11'
	| 'MSI1010'
	| 'MSI1110'
	| 'pharmacode';

export interface BarcodeGeneratorOptions {
	format: BarcodeFormatId;
	width: number;
	height: number;
	displayValue: boolean;
	fontSize: number;
	lineColor: string;
	background: string;
	margin: number;
}

export type BarcodeGeneratorErrorCode = 'empty_value' | 'invalid_value' | 'generation_failed';

export interface BarcodeGeneratorError {
	code: BarcodeGeneratorErrorCode;
	detail: string;
}

export interface BarcodeGeneratorMetrics {
	inputBytes: number;
	svgBytes: number;
	pngBytes: number;
	durationMs: number;
}

export interface BarcodeGeneratorOutput {
	svgMarkup: string;
	svgDataUrl: string;
	pngDataUrl: string;
}

export interface BarcodeGeneratorResult {
	output: BarcodeGeneratorOutput | null;
	error: BarcodeGeneratorError | null;
	metrics: BarcodeGeneratorMetrics;
	options: BarcodeGeneratorOptions;
	usedWorker: boolean;
}

export type BarcodeGeneratorWorkerRequest = {
	id: number;
	value: string;
	options: Partial<BarcodeGeneratorOptions>;
};

export type BarcodeGeneratorWorkerResponse = {
	id: number;
	result?: BarcodeGeneratorResult;
	error?: string;
};

export const BARCODE_WORKER_THRESHOLD_BYTES = 500 * 1024;

const MIN_BAR_WIDTH = 1;
const MAX_BAR_WIDTH = 6;
const MIN_BAR_HEIGHT = 24;
const MAX_BAR_HEIGHT = 240;
const MIN_FONT = 8;
const MAX_FONT = 48;
const MIN_MARGIN = 0;
const MAX_MARGIN = 48;

const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

export const DEFAULT_BARCODE_GENERATOR_OPTIONS: BarcodeGeneratorOptions = {
	format: 'CODE128',
	width: 2,
	height: 100,
	displayValue: true,
	fontSize: 18,
	lineColor: '#0f172a',
	background: '#ffffff',
	margin: 12
};

function nowMs(): number {
	if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
		return performance.now();
	}
	return Date.now();
}

function clamp(value: number, min: number, max: number): number {
	return Math.min(max, Math.max(min, value));
}

export function getBarcodeInputByteSize(value: string): number {
	return new TextEncoder().encode(value).length;
}

export function shouldUseBarcodeWorker(inputBytes: number): boolean {
	return inputBytes > BARCODE_WORKER_THRESHOLD_BYTES;
}

export function normalizeBarcodeOptions(
	partial: Partial<BarcodeGeneratorOptions>
): BarcodeGeneratorOptions {
	const base = { ...DEFAULT_BARCODE_GENERATOR_OPTIONS };
	const merged: BarcodeGeneratorOptions = {
		...base,
		...partial,
		format: partial.format ?? base.format,
		width: clamp(partial.width ?? base.width, MIN_BAR_WIDTH, MAX_BAR_WIDTH),
		height: clamp(partial.height ?? base.height, MIN_BAR_HEIGHT, MAX_BAR_HEIGHT),
		displayValue: partial.displayValue ?? base.displayValue,
		fontSize: clamp(partial.fontSize ?? base.fontSize, MIN_FONT, MAX_FONT),
		lineColor: partial.lineColor ?? base.lineColor,
		background: partial.background ?? base.background,
		margin: clamp(partial.margin ?? base.margin, MIN_MARGIN, MAX_MARGIN)
	};
	if (!HEX_COLOR_PATTERN.test(merged.lineColor)) {
		merged.lineColor = DEFAULT_BARCODE_GENERATOR_OPTIONS.lineColor;
	}
	if (!HEX_COLOR_PATTERN.test(merged.background)) {
		merged.background = DEFAULT_BARCODE_GENERATOR_OPTIONS.background;
	}
	return merged;
}

export function createEmptyBarcodeResult(options: BarcodeGeneratorOptions): BarcodeGeneratorResult {
	return {
		output: null,
		error: null,
		metrics: { inputBytes: 0, svgBytes: 0, pngBytes: 0, durationMs: 0 },
		options,
		usedWorker: false
	};
}

function onlyDigits(value: string): boolean {
	return /^\d+$/.test(value);
}

export function validateBarcodeValue(
	format: BarcodeFormatId,
	value: string
): BarcodeGeneratorError | null {
	const trimmed = value.trim();
	if (trimmed.length === 0) {
		return { code: 'empty_value', detail: 'empty' };
	}

	switch (format) {
		case 'EAN13':
			if (!/^\d{12,13}$/.test(trimmed)) {
				return { code: 'invalid_value', detail: 'ean13_digits' };
			}
			break;
		case 'EAN8':
			if (!/^\d{7,8}$/.test(trimmed)) {
				return { code: 'invalid_value', detail: 'ean8_digits' };
			}
			break;
		case 'UPC':
			if (!/^\d{11,12}$/.test(trimmed)) {
				return { code: 'invalid_value', detail: 'upc_digits' };
			}
			break;
		case 'ITF14':
			if (!/^\d{13,14}$/.test(trimmed)) {
				return { code: 'invalid_value', detail: 'itf14_digits' };
			}
			break;
		case 'ITF':
			if (!onlyDigits(trimmed) || trimmed.length % 2 !== 0 || trimmed.length < 2) {
				return { code: 'invalid_value', detail: 'itf_pairs' };
			}
			break;
		case 'MSI':
		case 'MSI10':
		case 'MSI11':
		case 'MSI1010':
		case 'MSI1110':
			if (!onlyDigits(trimmed)) {
				return { code: 'invalid_value', detail: 'msi_digits' };
			}
			break;
		case 'pharmacode': {
			const n = Number.parseInt(trimmed, 10);
			if (!Number.isFinite(n) || n < 1 || n > 131070) {
				return { code: 'invalid_value', detail: 'pharmacode_range' };
			}
			break;
		}
		default:
			break;
	}

	return null;
}

type JsBarcodeFn = (element: unknown, text: string, options?: JsBarcodeRenderOptions) => void;

type JsBarcodeRenderOptions = {
	format: string;
	width: number;
	height: number;
	displayValue: boolean;
	fontSize: number;
	lineColor: string;
	background: string;
	margin: number;
};

function buildJsBarcodeRenderOptions(options: BarcodeGeneratorOptions): JsBarcodeRenderOptions {
	return {
		format: options.format,
		width: options.width,
		height: options.height,
		displayValue: options.displayValue,
		fontSize: options.fontSize,
		lineColor: options.lineColor,
		background: options.background,
		margin: options.margin
	};
}

async function blobToDataUrl(blob: Blob): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = (): void => {
			if (typeof reader.result === 'string') {
				resolve(reader.result);
				return;
			}
			reject(new Error('Invalid data URL result'));
		};
		reader.onerror = (): void => {
			reject(reader.error ?? new Error('Failed to read blob'));
		};
		reader.readAsDataURL(blob);
	});
}

async function loadJsBarcode(): Promise<JsBarcodeFn> {
	const mod = await import('jsbarcode');
	const candidate: unknown = mod.default;
	if (typeof candidate !== 'function') {
		throw new Error('JsBarcode failed to load');
	}
	return candidate as JsBarcodeFn;
}

export async function generateBarcodeMainThread(
	value: string,
	options: BarcodeGeneratorOptions
): Promise<BarcodeGeneratorResult> {
	const start = nowMs();
	const trimmed = value.trim();
	const validation = validateBarcodeValue(options.format, trimmed);
	if (validation) {
		return {
			output: null,
			error: validation,
			metrics: {
				inputBytes: getBarcodeInputByteSize(value),
				svgBytes: 0,
				pngBytes: 0,
				durationMs: nowMs() - start
			},
			options,
			usedWorker: false
		};
	}

	if (typeof document === 'undefined') {
		return {
			output: null,
			error: { code: 'generation_failed', detail: 'no_document' },
			metrics: {
				inputBytes: getBarcodeInputByteSize(value),
				svgBytes: 0,
				pngBytes: 0,
				durationMs: nowMs() - start
			},
			options,
			usedWorker: false
		};
	}

	let JsBarcode: JsBarcodeFn;
	try {
		JsBarcode = await loadJsBarcode();
	} catch {
		return {
			output: null,
			error: { code: 'generation_failed', detail: 'library_load' },
			metrics: {
				inputBytes: getBarcodeInputByteSize(value),
				svgBytes: 0,
				pngBytes: 0,
				durationMs: nowMs() - start
			},
			options,
			usedWorker: false
		};
	}

	const renderOpts = buildJsBarcodeRenderOptions(options);

	try {
		const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		JsBarcode(svg, trimmed, renderOpts);
		const svgMarkup = new XMLSerializer().serializeToString(svg);
		const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgMarkup)}`;

		const canvas = document.createElement('canvas');
		JsBarcode(canvas, trimmed, renderOpts);
		const pngDataUrl = canvas.toDataURL('image/png');

		const durationMs = nowMs() - start;
		return {
			output: {
				svgMarkup,
				svgDataUrl,
				pngDataUrl
			},
			error: null,
			metrics: {
				inputBytes: getBarcodeInputByteSize(value),
				svgBytes: new TextEncoder().encode(svgMarkup).length,
				pngBytes: Math.ceil((pngDataUrl.length * 3) / 4),
				durationMs
			},
			options,
			usedWorker: false
		};
	} catch (error) {
		const detail = error instanceof Error ? error.message : 'render';
		return {
			output: null,
			error: { code: 'generation_failed', detail },
			metrics: {
				inputBytes: getBarcodeInputByteSize(value),
				svgBytes: 0,
				pngBytes: 0,
				durationMs: nowMs() - start
			},
			options,
			usedWorker: false
		};
	}
}

export async function generateBarcodeInWorkerCanvas(
	value: string,
	options: BarcodeGeneratorOptions
): Promise<BarcodeGeneratorResult> {
	const start = nowMs();
	const trimmed = value.trim();
	const validation = validateBarcodeValue(options.format, trimmed);
	if (validation) {
		return {
			output: null,
			error: validation,
			metrics: {
				inputBytes: getBarcodeInputByteSize(value),
				svgBytes: 0,
				pngBytes: 0,
				durationMs: nowMs() - start
			},
			options,
			usedWorker: true
		};
	}

	let JsBarcode: JsBarcodeFn;
	try {
		JsBarcode = await loadJsBarcode();
	} catch {
		return {
			output: null,
			error: { code: 'generation_failed', detail: 'library_load' },
			metrics: {
				inputBytes: getBarcodeInputByteSize(value),
				svgBytes: 0,
				pngBytes: 0,
				durationMs: nowMs() - start
			},
			options,
			usedWorker: true
		};
	}

	const renderOpts = buildJsBarcodeRenderOptions(options);
	const canvas = new OffscreenCanvas(600, 320);

	try {
		JsBarcode(canvas, trimmed, renderOpts);
		const blob = await canvas.convertToBlob({ type: 'image/png' });
		const pngDataUrl = await blobToDataUrl(blob);
		const durationMs = nowMs() - start;
		return {
			output: {
				svgMarkup: '',
				svgDataUrl: '',
				pngDataUrl
			},
			error: null,
			metrics: {
				inputBytes: getBarcodeInputByteSize(value),
				svgBytes: 0,
				pngBytes: Math.ceil((pngDataUrl.length * 3) / 4),
				durationMs
			},
			options,
			usedWorker: true
		};
	} catch (error) {
		const detail = error instanceof Error ? error.message : 'render';
		return {
			output: null,
			error: { code: 'generation_failed', detail },
			metrics: {
				inputBytes: getBarcodeInputByteSize(value),
				svgBytes: 0,
				pngBytes: 0,
				durationMs: nowMs() - start
			},
			options,
			usedWorker: true
		};
	}
}
