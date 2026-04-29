export type ImageResizeOutputFormat = 'image/png' | 'image/jpeg' | 'image/webp';
export type ImageConversionOutputFormat =
	| 'image/png'
	| 'image/jpeg'
	| 'image/webp'
	| 'image/avif'
	| 'image/gif';
type CanvasEncodedImageFormat = Exclude<ImageConversionOutputFormat, 'image/gif'>;
export type ImageCompressionOutputFormat =
	| 'auto'
	| 'image/png'
	| 'image/jpeg'
	| 'image/webp'
	| 'image/avif';
export type ImageCompressionResolvedOutputFormat = Exclude<ImageCompressionOutputFormat, 'auto'>;

export type ImageResizeMode = 'dimensions' | 'percentage';

export type ImageResizeInput = {
	dataUrl: string;
	sourceName: string;
	sourceType: string;
	sourceSizeBytes: number;
};

export type ImageResizeOptions = {
	mode: ImageResizeMode;
	width: number;
	height: number;
	scalePercent: number;
	lockAspectRatio: boolean;
	outputFormat: ImageResizeOutputFormat;
	quality: number;
};

export type ImageResizeMetadata = {
	originalWidth: number;
	originalHeight: number;
	resizedWidth: number;
	resizedHeight: number;
	originalSizeBytes: number;
	outputSizeBytes: number;
	sizeDeltaBytes: number;
	sizeDeltaPercent: number;
};

export type ImageResizeResult = {
	dataUrl: string;
	downloadFilename: string;
	mimeType: ImageResizeOutputFormat;
	metadata: ImageResizeMetadata;
	durationMs: number;
};

export type ImageConversionInput = ImageResizeInput;

export type ImageConversionOptions = {
	outputFormat: ImageConversionOutputFormat;
	quality: number;
	backgroundColor: string;
};

export type ImageConversionMetadata = {
	originalWidth: number;
	originalHeight: number;
	outputWidth: number;
	outputHeight: number;
	originalSizeBytes: number;
	outputSizeBytes: number;
	sizeDeltaBytes: number;
	sizeDeltaPercent: number;
	sourceFormat: string;
	outputFormat: ImageConversionOutputFormat;
	usedGifEncoder: boolean;
};

export type ImageConversionResult = {
	dataUrl: string;
	downloadFilename: string;
	mimeType: ImageConversionOutputFormat;
	metadata: ImageConversionMetadata;
	durationMs: number;
};

export type ImageCompressionInput = ImageResizeInput;

export type ImageCompressionOptions = {
	outputFormat: ImageCompressionOutputFormat;
	quality: number;
	preserveTransparency: boolean;
	backgroundColor: string;
};

export type ImageCompressionMetadata = {
	originalWidth: number;
	originalHeight: number;
	outputWidth: number;
	outputHeight: number;
	originalSizeBytes: number;
	outputSizeBytes: number;
	sizeDeltaBytes: number;
	sizeDeltaPercent: number;
	sourceFormat: string;
	outputFormat: ImageCompressionResolvedOutputFormat;
	requestedOutputFormat: ImageCompressionOutputFormat;
	sourceHasTransparency: boolean;
	transparencyPreserved: boolean;
};

export type ImageCompressionResult = {
	dataUrl: string;
	downloadFilename: string;
	mimeType: ImageCompressionResolvedOutputFormat;
	metadata: ImageCompressionMetadata;
	durationMs: number;
};

export type ImageResizerWorkerRequest = {
	id: number;
	input: ImageResizeInput;
	options: ImageResizeOptions;
};

export type ImageResizerWorkerResponse = {
	id: number;
	result?: ImageResizeResult;
	error?: string;
};

export type ImageConverterWorkerRequest = {
	id: number;
	input: ImageConversionInput;
	options: ImageConversionOptions;
};

export type ImageConverterWorkerResponse = {
	id: number;
	result?: ImageConversionResult;
	error?: string;
};

export type ImageCompressorWorkerRequest = {
	id: number;
	input: ImageCompressionInput;
	options: ImageCompressionOptions;
};

export type ImageCompressorWorkerResponse = {
	id: number;
	result?: ImageCompressionResult;
	error?: string;
};

type ResizeDimensions = {
	width: number;
	height: number;
};

type Canvas2DLike = {
	imageSmoothingEnabled: boolean;
	imageSmoothingQuality: ImageSmoothingQuality;
	fillStyle: string | CanvasGradient | CanvasPattern;
	clearRect: (x: number, y: number, width: number, height: number) => void;
	fillRect: (x: number, y: number, width: number, height: number) => void;
	drawImage: (
		image: CanvasImageSource,
		dx: number,
		dy: number,
		dWidth: number,
		dHeight: number
	) => void;
};

type CanvasImageDataContext = Canvas2DLike & {
	getImageData: (sx: number, sy: number, sw: number, sh: number) => ImageData;
};

type GifPaletteColor = [number, number, number] | [number, number, number, number];

const DATA_URL_HEADER_PATTERN =
	/^data:image\/(png|jpeg|jpg|webp|avif|gif|bmp|x-icon|svg\+xml);base64,/i;
const MIN_DIMENSION = 1;
const MAX_DIMENSION = 8192;
const MIN_SCALE = 1;
const MAX_SCALE = 400;
const MIN_QUALITY = 0.1;
const MAX_QUALITY = 1;
const GIF_MAX_COLORS = 256;

export const IMAGE_RESIZER_WORKER_THRESHOLD_BYTES = 500 * 1024;
export const IMAGE_CONVERTER_WORKER_THRESHOLD_BYTES = 500 * 1024;
export const IMAGE_COMPRESSOR_WORKER_THRESHOLD_BYTES = 500 * 1024;

export const IMAGE_RESIZER_DEFAULT_OPTIONS: ImageResizeOptions = {
	mode: 'dimensions',
	width: 1280,
	height: 720,
	scalePercent: 100,
	lockAspectRatio: true,
	outputFormat: 'image/png',
	quality: 0.92
};

export const IMAGE_CONVERTER_DEFAULT_OPTIONS: ImageConversionOptions = {
	outputFormat: 'image/webp',
	quality: 0.92,
	backgroundColor: 'white'
};

export const IMAGE_COMPRESSOR_DEFAULT_OPTIONS: ImageCompressionOptions = {
	outputFormat: 'auto',
	quality: 0.82,
	preserveTransparency: true,
	backgroundColor: 'white'
};

export const AUTO_IMAGE_COMPRESSION_FORMATS: ImageCompressionResolvedOutputFormat[] = [
	'image/avif',
	'image/webp',
	'image/jpeg',
	'image/png'
];

export function shouldUseImageResizerWorker(inputBytes: number): boolean {
	return inputBytes > IMAGE_RESIZER_WORKER_THRESHOLD_BYTES;
}

export function shouldUseImageConverterWorker(inputBytes: number): boolean {
	return inputBytes > IMAGE_CONVERTER_WORKER_THRESHOLD_BYTES;
}

export function shouldUseImageCompressorWorker(inputBytes: number): boolean {
	return inputBytes > IMAGE_COMPRESSOR_WORKER_THRESHOLD_BYTES;
}

export async function resizeImage(
	input: ImageResizeInput,
	options: Partial<ImageResizeOptions> = {}
): Promise<ImageResizeResult> {
	const startedAt = nowMs();
	validateImageDataUrl(input.dataUrl);
	const normalizedOptions = normalizeImageResizeOptions(options);
	const sourceBitmap = await createSourceBitmap(input.dataUrl);

	try {
		const dimensions = computeScaledDimensions(
			sourceBitmap.width,
			sourceBitmap.height,
			normalizedOptions
		);
		const canvas = createResizeCanvas(dimensions.width, dimensions.height);
		drawImageToCanvas(canvas, sourceBitmap, dimensions);
		const dataUrl = await canvasToDataUrl(
			canvas,
			normalizedOptions.outputFormat,
			normalizedOptions.quality
		);
		const outputSizeBytes = getDataUrlByteSize(dataUrl);
		const downloadFilename = buildDownloadFilename(
			input.sourceName,
			normalizedOptions.outputFormat
		);
		const metadata: ImageResizeMetadata = {
			originalWidth: sourceBitmap.width,
			originalHeight: sourceBitmap.height,
			resizedWidth: dimensions.width,
			resizedHeight: dimensions.height,
			originalSizeBytes: input.sourceSizeBytes,
			outputSizeBytes,
			sizeDeltaBytes: outputSizeBytes - input.sourceSizeBytes,
			sizeDeltaPercent:
				input.sourceSizeBytes > 0
					? ((outputSizeBytes - input.sourceSizeBytes) / input.sourceSizeBytes) * 100
					: 0
		};

		return {
			dataUrl,
			downloadFilename,
			mimeType: normalizedOptions.outputFormat,
			metadata,
			durationMs: elapsedMs(startedAt)
		};
	} finally {
		sourceBitmap.close();
	}
}

export async function convertImageFormat(
	input: ImageConversionInput,
	options: Partial<ImageConversionOptions> = {}
): Promise<ImageConversionResult> {
	const startedAt = nowMs();
	validateImageDataUrl(input.dataUrl);
	const normalizedOptions = normalizeImageConversionOptions(options);
	const sourceBitmap = await createSourceBitmap(input.dataUrl);

	try {
		const dimensions: ResizeDimensions = {
			width: clampNumber(sourceBitmap.width, MIN_DIMENSION, MAX_DIMENSION),
			height: clampNumber(sourceBitmap.height, MIN_DIMENSION, MAX_DIMENSION)
		};
		const canvas = createResizeCanvas(dimensions.width, dimensions.height);
		drawImageToCanvas(
			canvas,
			sourceBitmap,
			dimensions,
			requiresOpaqueBackground(normalizedOptions.outputFormat)
				? normalizedOptions.backgroundColor
				: undefined
		);
		const dataUrl =
			normalizedOptions.outputFormat === 'image/gif'
				? await canvasToGifDataUrl(canvas, dimensions, normalizedOptions.quality)
				: await canvasToDataUrl(canvas, normalizedOptions.outputFormat, normalizedOptions.quality);
		const outputSizeBytes = getDataUrlByteSize(dataUrl);
		const metadata: ImageConversionMetadata = {
			originalWidth: sourceBitmap.width,
			originalHeight: sourceBitmap.height,
			outputWidth: dimensions.width,
			outputHeight: dimensions.height,
			originalSizeBytes: input.sourceSizeBytes,
			outputSizeBytes,
			sizeDeltaBytes: outputSizeBytes - input.sourceSizeBytes,
			sizeDeltaPercent: computeSizeDeltaPercent(input.sourceSizeBytes, outputSizeBytes),
			sourceFormat: normalizeSourceFormat(input.sourceType, input.dataUrl),
			outputFormat: normalizedOptions.outputFormat,
			usedGifEncoder: normalizedOptions.outputFormat === 'image/gif'
		};

		return {
			dataUrl,
			downloadFilename: buildDownloadFilename(input.sourceName, normalizedOptions.outputFormat),
			mimeType: normalizedOptions.outputFormat,
			metadata,
			durationMs: elapsedMs(startedAt)
		};
	} finally {
		sourceBitmap.close();
	}
}

export async function compressImage(
	input: ImageCompressionInput,
	options: Partial<ImageCompressionOptions> = {}
): Promise<ImageCompressionResult> {
	const startedAt = nowMs();
	validateImageDataUrl(input.dataUrl);
	const normalizedOptions = normalizeImageCompressionOptions(options);
	const sourceBitmap = await createSourceBitmap(input.dataUrl);

	try {
		const dimensions: ResizeDimensions = {
			width: clampNumber(sourceBitmap.width, MIN_DIMENSION, MAX_DIMENSION),
			height: clampNumber(sourceBitmap.height, MIN_DIMENSION, MAX_DIMENSION)
		};
		const analysisCanvas = createResizeCanvas(dimensions.width, dimensions.height);
		drawImageToCanvas(analysisCanvas, sourceBitmap, dimensions);
		const sourceHasTransparency = canvasHasTransparency(analysisCanvas, dimensions);
		const candidateFormats = resolveCompressionCandidateFormats(
			normalizedOptions.outputFormat,
			normalizedOptions.preserveTransparency,
			sourceHasTransparency
		);

		let bestCandidate: {
			dataUrl: string;
			sizeBytes: number;
			format: ImageCompressionResolvedOutputFormat;
		} | null = null;

		for (const format of candidateFormats) {
			const canvas = createResizeCanvas(dimensions.width, dimensions.height);
			drawImageToCanvas(
				canvas,
				sourceBitmap,
				dimensions,
				shouldFlattenTransparency(format, normalizedOptions, sourceHasTransparency)
					? normalizedOptions.backgroundColor
					: undefined
			);

			try {
				const dataUrl = await canvasToDataUrl(canvas, format, normalizedOptions.quality);
				const sizeBytes = getDataUrlByteSize(dataUrl);
				if (!bestCandidate || sizeBytes < bestCandidate.sizeBytes) {
					bestCandidate = { dataUrl, sizeBytes, format };
				}
			} catch {}
		}

		if (!bestCandidate) {
			throw new Error('No supported compression format is available in this browser');
		}

		return {
			dataUrl: bestCandidate.dataUrl,
			downloadFilename: buildDownloadFilename(input.sourceName, bestCandidate.format),
			mimeType: bestCandidate.format,
			metadata: {
				originalWidth: sourceBitmap.width,
				originalHeight: sourceBitmap.height,
				outputWidth: dimensions.width,
				outputHeight: dimensions.height,
				originalSizeBytes: input.sourceSizeBytes,
				outputSizeBytes: bestCandidate.sizeBytes,
				sizeDeltaBytes: bestCandidate.sizeBytes - input.sourceSizeBytes,
				sizeDeltaPercent: computeSizeDeltaPercent(input.sourceSizeBytes, bestCandidate.sizeBytes),
				sourceFormat: normalizeSourceFormat(input.sourceType, input.dataUrl),
				outputFormat: bestCandidate.format,
				requestedOutputFormat: normalizedOptions.outputFormat,
				sourceHasTransparency,
				transparencyPreserved:
					sourceHasTransparency &&
					!shouldFlattenTransparency(bestCandidate.format, normalizedOptions, sourceHasTransparency)
			},
			durationMs: elapsedMs(startedAt)
		};
	} finally {
		sourceBitmap.close();
	}
}

export function normalizeImageResizeOptions(
	options: Partial<ImageResizeOptions>
): ImageResizeOptions {
	const mode = options.mode === 'percentage' ? 'percentage' : 'dimensions';
	const width = clampNumber(
		Math.round(options.width ?? IMAGE_RESIZER_DEFAULT_OPTIONS.width),
		MIN_DIMENSION,
		MAX_DIMENSION
	);
	const height = clampNumber(
		Math.round(options.height ?? IMAGE_RESIZER_DEFAULT_OPTIONS.height),
		MIN_DIMENSION,
		MAX_DIMENSION
	);
	const scalePercent = clampNumber(
		Math.round(options.scalePercent ?? IMAGE_RESIZER_DEFAULT_OPTIONS.scalePercent),
		MIN_SCALE,
		MAX_SCALE
	);
	const outputFormat = normalizeFormat(options.outputFormat);
	const quality = clampNumber(
		options.quality ?? IMAGE_RESIZER_DEFAULT_OPTIONS.quality,
		MIN_QUALITY,
		MAX_QUALITY
	);

	return {
		mode,
		width,
		height,
		scalePercent,
		lockAspectRatio: options.lockAspectRatio ?? IMAGE_RESIZER_DEFAULT_OPTIONS.lockAspectRatio,
		outputFormat,
		quality
	};
}

function normalizeFormat(format: ImageResizeOutputFormat | undefined): ImageResizeOutputFormat {
	if (format === 'image/jpeg' || format === 'image/webp' || format === 'image/png') {
		return format;
	}

	return IMAGE_RESIZER_DEFAULT_OPTIONS.outputFormat;
}

export function normalizeImageConversionOptions(
	options: Partial<ImageConversionOptions>
): ImageConversionOptions {
	return {
		outputFormat: normalizeConversionFormat(options.outputFormat),
		quality: clampNumber(
			options.quality ?? IMAGE_CONVERTER_DEFAULT_OPTIONS.quality,
			MIN_QUALITY,
			MAX_QUALITY
		),
		backgroundColor: normalizeBackgroundColor(options.backgroundColor)
	};
}

export function normalizeImageCompressionOptions(
	options: Partial<ImageCompressionOptions>
): ImageCompressionOptions {
	return {
		outputFormat: normalizeCompressionOutputFormat(options.outputFormat),
		quality: clampNumber(
			options.quality ?? IMAGE_COMPRESSOR_DEFAULT_OPTIONS.quality,
			MIN_QUALITY,
			MAX_QUALITY
		),
		preserveTransparency:
			options.preserveTransparency ?? IMAGE_COMPRESSOR_DEFAULT_OPTIONS.preserveTransparency,
		backgroundColor: normalizeBackgroundColor(options.backgroundColor)
	};
}

function normalizeConversionFormat(
	format: ImageConversionOutputFormat | undefined
): ImageConversionOutputFormat {
	if (
		format === 'image/png' ||
		format === 'image/jpeg' ||
		format === 'image/webp' ||
		format === 'image/avif' ||
		format === 'image/gif'
	) {
		return format;
	}

	return IMAGE_CONVERTER_DEFAULT_OPTIONS.outputFormat;
}

function normalizeCompressionOutputFormat(
	format: ImageCompressionOutputFormat | undefined
): ImageCompressionOutputFormat {
	if (
		format === 'auto' ||
		format === 'image/png' ||
		format === 'image/jpeg' ||
		format === 'image/webp' ||
		format === 'image/avif'
	) {
		return format;
	}

	return IMAGE_COMPRESSOR_DEFAULT_OPTIONS.outputFormat;
}

export function resolveCompressionCandidateFormats(
	requestedFormat: ImageCompressionOutputFormat,
	preserveTransparency: boolean,
	sourceHasTransparency: boolean
): ImageCompressionResolvedOutputFormat[] {
	if (requestedFormat !== 'auto') {
		return [requestedFormat];
	}

	if (sourceHasTransparency && preserveTransparency) {
		return ['image/avif', 'image/webp', 'image/png'];
	}

	return AUTO_IMAGE_COMPRESSION_FORMATS;
}

export function computeScaledDimensions(
	originalWidth: number,
	originalHeight: number,
	options: ImageResizeOptions
): ResizeDimensions {
	if (options.mode === 'percentage') {
		const ratio = options.scalePercent / 100;
		return {
			width: clampNumber(Math.round(originalWidth * ratio), MIN_DIMENSION, MAX_DIMENSION),
			height: clampNumber(Math.round(originalHeight * ratio), MIN_DIMENSION, MAX_DIMENSION)
		};
	}

	if (!options.lockAspectRatio) {
		return {
			width: options.width,
			height: options.height
		};
	}

	const aspectRatio = originalWidth / originalHeight;
	const widthCandidate = options.width;
	const heightCandidate = Math.round(widthCandidate / aspectRatio);
	const useHeightDriven = heightCandidate > options.height;

	if (useHeightDriven) {
		return {
			width: clampNumber(Math.round(options.height * aspectRatio), MIN_DIMENSION, MAX_DIMENSION),
			height: options.height
		};
	}

	return {
		width: options.width,
		height: clampNumber(heightCandidate, MIN_DIMENSION, MAX_DIMENSION)
	};
}

function drawImageToCanvas(
	canvas: OffscreenCanvas | HTMLCanvasElement,
	bitmap: ImageBitmap,
	dimensions: ResizeDimensions,
	backgroundColor?: string
): void {
	const context = canvas.getContext('2d');
	if (!isCanvas2DLike(context)) {
		throw new Error('2D canvas context is unavailable');
	}

	context.imageSmoothingEnabled = true;
	context.imageSmoothingQuality = 'high';
	if (backgroundColor) {
		context.fillStyle = backgroundColor;
		context.fillRect(0, 0, dimensions.width, dimensions.height);
	} else {
		context.clearRect(0, 0, dimensions.width, dimensions.height);
	}
	context.drawImage(bitmap, 0, 0, dimensions.width, dimensions.height);
}

function isCanvas2DLike(context: unknown): context is Canvas2DLike {
	if (!context || typeof context !== 'object') return false;
	return (
		'imageSmoothingEnabled' in context &&
		'imageSmoothingQuality' in context &&
		'fillStyle' in context &&
		'clearRect' in context &&
		'fillRect' in context &&
		'drawImage' in context
	);
}

function isCanvasImageDataContext(context: unknown): context is CanvasImageDataContext {
	return isCanvas2DLike(context) && 'getImageData' in context;
}

function canvasHasTransparency(
	canvas: OffscreenCanvas | HTMLCanvasElement,
	dimensions: ResizeDimensions
): boolean {
	const context = canvas.getContext('2d');
	if (!isCanvasImageDataContext(context)) {
		throw new Error('Canvas pixel readback is unavailable');
	}
	const imageData = context.getImageData(0, 0, dimensions.width, dimensions.height);
	for (let index = 3; index < imageData.data.length; index += 4) {
		if (imageData.data[index] < 255) return true;
	}
	return false;
}

async function canvasToDataUrl(
	canvas: OffscreenCanvas | HTMLCanvasElement,
	format: CanvasEncodedImageFormat,
	quality: number
): Promise<string> {
	if ('convertToBlob' in canvas) {
		const blob = await canvas.convertToBlob({ type: format, quality });
		validateEncodedBlob(blob, format);
		return blobToDataUrl(blob);
	}

	if (!('toDataURL' in canvas)) {
		throw new Error('Canvas conversion API is unavailable');
	}

	const dataUrl = canvas.toDataURL(format, quality);
	if (!dataUrl.startsWith(`data:${format}`)) {
		throw new Error(`${formatLabel(format)} export is not supported by this browser`);
	}
	return dataUrl;
}

async function canvasToGifDataUrl(
	canvas: OffscreenCanvas | HTMLCanvasElement,
	dimensions: ResizeDimensions,
	quality: number
): Promise<string> {
	const context = canvas.getContext('2d');
	if (!isCanvasImageDataContext(context)) {
		throw new Error('Canvas pixel readback is unavailable');
	}
	const imageData = context.getImageData(0, 0, dimensions.width, dimensions.height);
	const gifBlob = await encodeStaticGif(imageData, dimensions, quality);
	return blobToDataUrl(gifBlob);
}

function createResizeCanvas(width: number, height: number): OffscreenCanvas | HTMLCanvasElement {
	if (typeof OffscreenCanvas !== 'undefined') {
		return new OffscreenCanvas(width, height);
	}

	if (typeof document === 'undefined') {
		throw new Error('Canvas API is unavailable');
	}

	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	return canvas;
}

async function createSourceBitmap(dataUrl: string): Promise<ImageBitmap> {
	const sourceBlob = dataUrlToBlob(dataUrl);
	return createImageBitmap(sourceBlob);
}

export function readImageFileAsDataUrl(file: File): Promise<ImageResizeInput> {
	return new Promise<ImageResizeInput>((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result !== 'string') {
				reject(new Error('Could not read image file'));
				return;
			}
			resolve({
				dataUrl: reader.result,
				sourceName: file.name,
				sourceType: file.type,
				sourceSizeBytes: file.size
			});
		};
		reader.onerror = () => {
			reject(reader.error ?? new Error('Could not read image file'));
		};
		reader.readAsDataURL(file);
	});
}

function validateImageDataUrl(dataUrl: string): void {
	if (!DATA_URL_HEADER_PATTERN.test(dataUrl)) {
		throw new Error('Unsupported image input');
	}
}

export function getImageConversionExtension(format: ImageConversionOutputFormat): string {
	if (format === 'image/png') return 'png';
	if (format === 'image/jpeg') return 'jpg';
	if (format === 'image/webp') return 'webp';
	if (format === 'image/avif') return 'avif';
	return 'gif';
}

function buildDownloadFilename(sourceName: string, format: ImageConversionOutputFormat): string {
	const extension = getImageConversionExtension(format);
	const baseName = sourceName.replace(/\.[^.]+$/u, '').trim() || 'image';
	return `${baseName}-${Date.now()}.${extension}`;
}

function computeSizeDeltaPercent(inputBytes: number, outputBytes: number): number {
	return inputBytes > 0 ? ((outputBytes - inputBytes) / inputBytes) * 100 : 0;
}

function getDataUrlByteSize(dataUrl: string): number {
	const payload = dataUrl.split(',', 2)[1] ?? '';
	if (!payload) return 0;
	const padding = payload.endsWith('==') ? 2 : payload.endsWith('=') ? 1 : 0;
	return Math.max(0, Math.floor((payload.length * 3) / 4) - padding);
}

function dataUrlToBlob(dataUrl: string): Blob {
	const [header, payload = ''] = dataUrl.split(',', 2);
	const mimeType = header.match(/data:([^;]+)/u)?.[1] ?? 'application/octet-stream';
	const binary = atob(payload);
	const bytes = new Uint8Array(binary.length);
	for (let index = 0; index < binary.length; index += 1) {
		bytes[index] = binary.charCodeAt(index);
	}
	return new Blob([bytes], { type: mimeType });
}

async function encodeStaticGif(
	imageData: ImageData,
	dimensions: ResizeDimensions,
	quality: number
): Promise<Blob> {
	const { GIFEncoder, applyPalette, quantize } = await import('gifenc');
	const gif = GIFEncoder();
	const palette = quantize(imageData.data, colorCountForQuality(quality), {
		format: 'rgba4444',
		oneBitAlpha: true
	});
	const indexedPixels = applyPalette(imageData.data, palette, 'rgba4444');
	const transparentIndex = findTransparentPaletteIndex(palette);
	gif.writeFrame(indexedPixels, dimensions.width, dimensions.height, {
		palette,
		transparent: transparentIndex >= 0,
		transparentIndex: Math.max(0, transparentIndex),
		repeat: -1
	});
	gif.finish();
	const bytes = gif.bytes();
	const arrayBuffer = new ArrayBuffer(bytes.byteLength);
	new Uint8Array(arrayBuffer).set(bytes);
	return new Blob([arrayBuffer], { type: 'image/gif' });
}

function colorCountForQuality(quality: number): number {
	return clampNumber(Math.round(32 + quality * (GIF_MAX_COLORS - 32)), 32, GIF_MAX_COLORS);
}

function findTransparentPaletteIndex(palette: GifPaletteColor[]): number {
	return palette.findIndex((color) => color.length === 4 && color[3] <= 127);
}

function validateEncodedBlob(blob: Blob, format: CanvasEncodedImageFormat): void {
	if (blob.type && blob.type !== format) {
		throw new Error(`${formatLabel(format)} export is not supported by this browser`);
	}
}

function requiresOpaqueBackground(format: ImageConversionOutputFormat): boolean {
	return format === 'image/jpeg';
}

function shouldFlattenTransparency(
	format: ImageCompressionResolvedOutputFormat,
	options: ImageCompressionOptions,
	sourceHasTransparency: boolean
): boolean {
	if (!sourceHasTransparency) return false;
	if (format === 'image/jpeg') return true;
	return !options.preserveTransparency;
}

function normalizeBackgroundColor(color: string | undefined): string {
	const value = color?.trim();
	if (!value) return IMAGE_CONVERTER_DEFAULT_OPTIONS.backgroundColor;
	return value;
}

function normalizeSourceFormat(sourceType: string, dataUrl: string): string {
	if (sourceType) return sourceType;
	return dataUrl.match(/^data:([^;]+)/u)?.[1] ?? 'image/*';
}

function formatLabel(format: ImageConversionOutputFormat): string {
	if (format === 'image/png') return 'PNG';
	if (format === 'image/jpeg') return 'JPEG';
	if (format === 'image/webp') return 'WebP';
	if (format === 'image/avif') return 'AVIF';
	return 'GIF';
}

function blobToDataUrl(blob: Blob): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				resolve(reader.result);
				return;
			}
			reject(new Error('Could not convert blob to data URL'));
		};
		reader.onerror = () => {
			reject(reader.error ?? new Error('Could not convert blob to data URL'));
		};
		reader.readAsDataURL(blob);
	});
}

function clampNumber(value: number, min: number, max: number): number {
	return Math.min(max, Math.max(min, value));
}
function nowMs(): number {
	if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
		return performance.now();
	}

	return Date.now();
}

function elapsedMs(startedAt: number): number {
	return Math.max(0, nowMs() - startedAt);
}
