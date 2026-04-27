export type ImageResizeOutputFormat = 'image/png' | 'image/jpeg' | 'image/webp';

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

type ResizeDimensions = {
	width: number;
	height: number;
};

type Canvas2DLike = {
	imageSmoothingEnabled: boolean;
	imageSmoothingQuality: ImageSmoothingQuality;
	clearRect: (x: number, y: number, width: number, height: number) => void;
	drawImage: (
		image: CanvasImageSource,
		dx: number,
		dy: number,
		dWidth: number,
		dHeight: number
	) => void;
};
const DATA_URL_HEADER_PATTERN = /^data:image\/(png|jpeg|jpg|webp|gif|bmp|x-icon|svg\+xml);base64,/i;
const MIN_DIMENSION = 1;
const MAX_DIMENSION = 8192;
const MIN_SCALE = 1;
const MAX_SCALE = 400;
const MIN_QUALITY = 0.1;
const MAX_QUALITY = 1;

export const IMAGE_RESIZER_WORKER_THRESHOLD_BYTES = 500 * 1024;

export const IMAGE_RESIZER_DEFAULT_OPTIONS: ImageResizeOptions = {
	mode: 'dimensions',
	width: 1280,
	height: 720,
	scalePercent: 100,
	lockAspectRatio: true,
	outputFormat: 'image/png',
	quality: 0.92
};

export function shouldUseImageResizerWorker(inputBytes: number): boolean {
	return inputBytes > IMAGE_RESIZER_WORKER_THRESHOLD_BYTES;
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
	dimensions: ResizeDimensions
): void {
	const context = canvas.getContext('2d');
	if (!isCanvas2DLike(context)) {
		throw new Error('2D canvas context is unavailable');
	}

	context.imageSmoothingEnabled = true;
	context.imageSmoothingQuality = 'high';
	context.clearRect(0, 0, dimensions.width, dimensions.height);
	context.drawImage(bitmap, 0, 0, dimensions.width, dimensions.height);
}

function isCanvas2DLike(context: unknown): context is Canvas2DLike {
	if (!context || typeof context !== 'object') return false;
	return (
		'imageSmoothingEnabled' in context &&
		'imageSmoothingQuality' in context &&
		'clearRect' in context &&
		'drawImage' in context
	);
}
async function canvasToDataUrl(
	canvas: OffscreenCanvas | HTMLCanvasElement,
	format: ImageResizeOutputFormat,
	quality: number
): Promise<string> {
	if ('convertToBlob' in canvas) {
		const blob = await canvas.convertToBlob({ type: format, quality });
		return blobToDataUrl(blob);
	}

	if (!('toDataURL' in canvas)) {
		throw new Error('Canvas conversion API is unavailable');
	}

	return canvas.toDataURL(format, quality);
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

function buildDownloadFilename(sourceName: string, format: ImageResizeOutputFormat): string {
	const extension = format === 'image/png' ? 'png' : format === 'image/webp' ? 'webp' : 'jpg';
	const baseName = sourceName.replace(/\.[^.]+$/u, '').trim() || 'image';
	return `${baseName}-${Date.now()}.${extension}`;
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
