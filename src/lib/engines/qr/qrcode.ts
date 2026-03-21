export type QRErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export interface QRGeneratorOptions {
	size: number;
	margin: number;
	errorCorrectionLevel: QRErrorCorrectionLevel;
	darkColor: string;
	lightColor: string;
	transparentBackground: boolean;
	logoDataUrl: string | null;
	logoScale: number;
}

export type QRGeneratorWarningCode = 'logo_overlay_low_error_correction';

export type QRGeneratorErrorCode = 'input_too_long' | 'invalid_logo' | 'generation_failed';

export interface QRGeneratorError {
	code: QRGeneratorErrorCode;
	detail: string;
}

export interface QRGeneratorMetrics {
	inputBytes: number;
	svgBytes: number;
	pngBytes: number;
	version: number;
	moduleCount: number;
	maskPattern: number;
	segmentCount: number;
	size: number;
	margin: number;
}

export interface QRGeneratorOutput {
	svgMarkup: string;
	svgDataUrl: string;
	pngDataUrl: string;
}

export interface QRGeneratorResult {
	output: QRGeneratorOutput | null;
	error: QRGeneratorError | null;
	warnings: QRGeneratorWarningCode[];
	metrics: QRGeneratorMetrics;
	durationMs: number;
	options: QRGeneratorOptions;
}

export type QRGeneratorWorkerRequest = {
	id: number;
	input: string;
	options?: Partial<QRGeneratorOptions>;
};

export type QRGeneratorWorkerResponse = {
	id: number;
	result?: QRGeneratorResult;
	error?: string;
};

const MIN_QR_SIZE = 128;
const MAX_QR_SIZE = 1024;
const MIN_QR_MARGIN = 0;
const MAX_QR_MARGIN = 8;
const MIN_LOGO_SCALE = 0.12;
const MAX_LOGO_SCALE = 0.32;
const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const IMAGE_DATA_URL_PATTERN =
	/^data:image\/(png|jpeg|jpg|webp|svg\+xml)(;charset=[^;,]+)?(;base64)?,/i;

export const DEFAULT_QR_GENERATOR_OPTIONS: QRGeneratorOptions = {
	size: 320,
	margin: 2,
	errorCorrectionLevel: 'M',
	darkColor: '#0f172a',
	lightColor: '#ffffff',
	transparentBackground: false,
	logoDataUrl: null,
	logoScale: 0.2
};

export const QR_WORKER_THRESHOLD_BYTES = 500 * 1024;

function nowMs(): number {
	if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
		return performance.now();
	}

	return Date.now();
}

function getByteSize(value: string): number {
	return new TextEncoder().encode(value).length;
}

function clamp(value: number, min: number, max: number): number {
	return Math.min(max, Math.max(min, value));
}

function sanitizeColor(value: string, fallback: string): string {
	return HEX_COLOR_PATTERN.test(value) ? value : fallback;
}

function sanitizeLogoDataUrl(value: string | null | undefined): string | null {
	if (!value) return null;
	return IMAGE_DATA_URL_PATTERN.test(value) ? value : null;
}

function escapeXmlAttribute(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

function parseViewBox(svgMarkup: string): { width: number; height: number } | null {
	const match = svgMarkup.match(/viewBox="([^"]+)"/);
	if (!match) return null;

	const values = match[1]
		.trim()
		.split(/\s+/)
		.map((value) => Number.parseFloat(value));

	if (values.length !== 4 || values.some((value) => Number.isNaN(value))) {
		return null;
	}

	return {
		width: values[2],
		height: values[3]
	};
}

function injectLogoOverlay(
	svgMarkup: string,
	logoDataUrl: string | null,
	logoScale: number
): string {
	if (!logoDataUrl) return svgMarkup;

	const viewBox = parseViewBox(svgMarkup);
	if (!viewBox) return svgMarkup;

	const side =
		Math.min(viewBox.width, viewBox.height) * clamp(logoScale, MIN_LOGO_SCALE, MAX_LOGO_SCALE);
	const x = (viewBox.width - side) / 2;
	const y = (viewBox.height - side) / 2;
	const padding = side * 0.16;
	const logoSide = side - padding * 2;
	const radius = side * 0.18;
	const overlay = `<g id="fmtly-qr-logo"><rect x="${x.toFixed(3)}" y="${y.toFixed(3)}" width="${side.toFixed(3)}" height="${side.toFixed(3)}" rx="${radius.toFixed(3)}" ry="${radius.toFixed(3)}" fill="#ffffff" fill-opacity="0.96"/><image href="${escapeXmlAttribute(logoDataUrl)}" x="${(x + padding).toFixed(3)}" y="${(y + padding).toFixed(3)}" width="${logoSide.toFixed(3)}" height="${logoSide.toFixed(3)}" preserveAspectRatio="xMidYMid meet"/></g>`;

	return svgMarkup.replace('</svg>', `${overlay}</svg>`);
}

function getDataUrlByteLength(dataUrl: string): number {
	const payload = dataUrl.split(',', 2)[1] ?? '';
	if (payload.length === 0) return 0;

	const padding = payload.endsWith('==') ? 2 : payload.endsWith('=') ? 1 : 0;
	return Math.max(0, Math.floor((payload.length * 3) / 4) - padding);
}

function toSvgDataUrl(svgMarkup: string): string {
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgMarkup)}`;
}

function normalizeOptions(options: Partial<QRGeneratorOptions>): QRGeneratorOptions {
	return {
		size: clamp(
			Math.round(options.size ?? DEFAULT_QR_GENERATOR_OPTIONS.size),
			MIN_QR_SIZE,
			MAX_QR_SIZE
		),
		margin: clamp(
			Math.round(options.margin ?? DEFAULT_QR_GENERATOR_OPTIONS.margin),
			MIN_QR_MARGIN,
			MAX_QR_MARGIN
		),
		errorCorrectionLevel:
			options.errorCorrectionLevel ?? DEFAULT_QR_GENERATOR_OPTIONS.errorCorrectionLevel,
		darkColor: sanitizeColor(
			options.darkColor ?? DEFAULT_QR_GENERATOR_OPTIONS.darkColor,
			DEFAULT_QR_GENERATOR_OPTIONS.darkColor
		),
		lightColor: sanitizeColor(
			options.lightColor ?? DEFAULT_QR_GENERATOR_OPTIONS.lightColor,
			DEFAULT_QR_GENERATOR_OPTIONS.lightColor
		),
		transparentBackground:
			options.transparentBackground ?? DEFAULT_QR_GENERATOR_OPTIONS.transparentBackground,
		logoDataUrl: sanitizeLogoDataUrl(options.logoDataUrl) ?? null,
		logoScale: clamp(
			options.logoScale ?? DEFAULT_QR_GENERATOR_OPTIONS.logoScale,
			MIN_LOGO_SCALE,
			MAX_LOGO_SCALE
		)
	};
}

function createMetrics(
	input: string,
	output: QRGeneratorOutput | null,
	options: QRGeneratorOptions,
	matrixDetails?: {
		version: number;
		moduleCount: number;
		maskPattern: number;
		segmentCount: number;
	}
): QRGeneratorMetrics {
	return {
		inputBytes: getByteSize(input),
		svgBytes: output ? getByteSize(output.svgMarkup) : 0,
		pngBytes: output ? getDataUrlByteLength(output.pngDataUrl) : 0,
		version: matrixDetails?.version ?? 0,
		moduleCount: matrixDetails?.moduleCount ?? 0,
		maskPattern: matrixDetails?.maskPattern ?? 0,
		segmentCount: matrixDetails?.segmentCount ?? 0,
		size: options.size,
		margin: options.margin
	};
}

function createResult(
	input: string,
	output: QRGeneratorOutput | null,
	error: QRGeneratorError | null,
	warnings: QRGeneratorWarningCode[],
	startedAt: number,
	options: QRGeneratorOptions,
	matrixDetails?: {
		version: number;
		moduleCount: number;
		maskPattern: number;
		segmentCount: number;
	}
): QRGeneratorResult {
	return {
		output,
		error,
		warnings,
		metrics: createMetrics(input, output, options, matrixDetails),
		durationMs: nowMs() - startedAt,
		options
	};
}

function mapGenerationError(error: unknown): QRGeneratorError {
	const detail = error instanceof Error ? error.message : 'QR generation failed';
	if (/too big|input text too long|code length overflow|data is too big/i.test(detail)) {
		return {
			code: 'input_too_long',
			detail
		};
	}

	return {
		code: 'generation_failed',
		detail
	};
}

export function shouldUseQRCodeWorker(input: string): boolean {
	return new Blob([input]).size > QR_WORKER_THRESHOLD_BYTES;
}

export function createEmptyQRCodeResult(
	options: Partial<QRGeneratorOptions> = {}
): QRGeneratorResult {
	const normalizedOptions = normalizeOptions(options);
	return createResult('', null, null, [], nowMs(), normalizedOptions);
}

export async function generateQRCode(
	input: string,
	options: Partial<QRGeneratorOptions> = {}
): Promise<QRGeneratorResult> {
	const startedAt = nowMs();
	const normalizedOptions = normalizeOptions(options);

	if (options.logoDataUrl && normalizedOptions.logoDataUrl === null) {
		return createResult(
			input,
			null,
			{
				code: 'invalid_logo',
				detail: 'Logo must be a valid PNG, JPEG, WEBP, or SVG image data URL.'
			},
			[],
			startedAt,
			normalizedOptions
		);
	}

	if (input.length === 0) {
		return createResult(input, null, null, [], startedAt, normalizedOptions);
	}

	try {
		const qrCodeModule = await import('qrcode');
		const QRCode = qrCodeModule.default ?? qrCodeModule;
		const color = {
			dark: normalizedOptions.darkColor,
			light: normalizedOptions.transparentBackground ? '#0000' : normalizedOptions.lightColor
		};
		const qr = QRCode.create(input, {
			errorCorrectionLevel: normalizedOptions.errorCorrectionLevel,
			margin: normalizedOptions.margin
		});
		const baseSvgMarkup = await QRCode.toString(input, {
			type: 'svg',
			width: normalizedOptions.size,
			margin: normalizedOptions.margin,
			errorCorrectionLevel: normalizedOptions.errorCorrectionLevel,
			color
		});
		const svgMarkup = injectLogoOverlay(
			baseSvgMarkup,
			normalizedOptions.logoDataUrl,
			normalizedOptions.logoScale
		);
		const pngDataUrl = await QRCode.toDataURL(input, {
			width: normalizedOptions.size,
			margin: normalizedOptions.margin,
			errorCorrectionLevel: normalizedOptions.errorCorrectionLevel,
			color
		});
		const output: QRGeneratorOutput = {
			svgMarkup,
			svgDataUrl: toSvgDataUrl(svgMarkup),
			pngDataUrl
		};
		const warnings: QRGeneratorWarningCode[] =
			normalizedOptions.logoDataUrl !== null &&
			(normalizedOptions.errorCorrectionLevel === 'L' ||
				normalizedOptions.errorCorrectionLevel === 'M')
				? ['logo_overlay_low_error_correction']
				: [];

		return createResult(input, output, null, warnings, startedAt, normalizedOptions, {
			version: qr.version,
			moduleCount: qr.modules.size,
			maskPattern: qr.maskPattern,
			segmentCount: qr.segments.length
		});
	} catch (error) {
		return createResult(input, null, mapGenerationError(error), [], startedAt, normalizedOptions);
	}
}
