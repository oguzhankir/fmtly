export type ImageToBase64Input = {
	buffer: ArrayBuffer;
	sourceName: string;
	sourceType: string;
	sourceSizeBytes: number;
};

export type ImageToBase64Metrics = {
	sourceSizeBytes: number;
	base64Characters: number;
	dataUrlCharacters: number;
	expansionPercent: number;
};

export type ImageToBase64Result = {
	base64: string;
	dataUrl: string;
	mimeType: string;
	downloadFilenames: {
		base64: string;
		dataUri: string;
	};
	metrics: ImageToBase64Metrics;
	durationMs: number;
};

export type Base64ToImageOptions = {
	fallbackMimeType: string;
};

export type Base64ToImageMetrics = {
	byteLength: number;
	base64Characters: number;
	dataUrlCharacters: number;
	hadDataUriPrefix: boolean;
	usedFallbackMimeType: boolean;
	whitespaceRemoved: boolean;
	paddingAdded: boolean;
};

export type Base64ToImageResult = {
	base64: string;
	dataUrl: string;
	mimeType: string;
	downloadFilename: string;
	metrics: Base64ToImageMetrics;
	durationMs: number;
};

export type ImageToBase64WorkerRequest = {
	id: number;
	input: ImageToBase64Input;
};

export type ImageToBase64WorkerResponse = {
	id: number;
	result?: ImageToBase64Result;
	error?: string;
};

export type Base64ToImageWorkerRequest = {
	id: number;
	input: string;
	options: Base64ToImageOptions;
};

export type Base64ToImageWorkerResponse = {
	id: number;
	result?: Base64ToImageResult;
	error?: string;
};

type NormalizedBase64Payload = {
	base64: string;
	declaredMimeType: string | null;
	hadDataUriPrefix: boolean;
	whitespaceRemoved: boolean;
	paddingAdded: boolean;
};

const DATA_URL_PREFIX_PATTERN = /^data:([^;,]+)(?:;[^,]*)*;base64,([\s\S]+)$/i;
const BASE64_BLOCK_PATTERN = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
const MIME_EXTENSION_MAP: Record<string, string> = {
	'image/png': 'png',
	'image/jpeg': 'jpg',
	'image/webp': 'webp',
	'image/gif': 'gif',
	'image/avif': 'avif',
	'image/bmp': 'bmp',
	'image/svg+xml': 'svg',
	'image/x-icon': 'ico'
};

export const IMAGE_BASE64_WORKER_THRESHOLD_BYTES = 500 * 1024;

export function shouldUseImageToBase64Worker(inputBytes: number): boolean {
	return inputBytes > IMAGE_BASE64_WORKER_THRESHOLD_BYTES;
}

export function shouldUseBase64ToImageWorker(input: string): boolean {
	return getByteSize(input) > IMAGE_BASE64_WORKER_THRESHOLD_BYTES;
}

export function encodeImageToBase64(input: ImageToBase64Input): ImageToBase64Result {
	const startedAt = nowMs();
	const mimeType = resolveImageMimeType(input.sourceType, input.sourceName);
	if (!mimeType) {
		throw new Error('unsupported_image_source');
	}

	const sourceSizeBytes = input.sourceSizeBytes || input.buffer.byteLength;
	if (sourceSizeBytes === 0) {
		throw new Error('empty_image_source');
	}

	const base64 = arrayBufferToBase64(input.buffer);
	const dataUrl = `data:${mimeType};base64,${base64}`;
	const baseName = getSanitizedBaseName(input.sourceName);

	return {
		base64,
		dataUrl,
		mimeType,
		downloadFilenames: {
			base64: `${baseName}-base64.txt`,
			dataUri: `${baseName}-data-uri.txt`
		},
		metrics: {
			sourceSizeBytes,
			base64Characters: base64.length,
			dataUrlCharacters: dataUrl.length,
			expansionPercent: sourceSizeBytes > 0 ? (base64.length / sourceSizeBytes - 1) * 100 : 0
		},
		durationMs: elapsedMs(startedAt)
	};
}

export function readImageFileAsArrayBuffer(file: File): Promise<ImageToBase64Input> {
	return new Promise<ImageToBase64Input>((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (!(reader.result instanceof ArrayBuffer)) {
				reject(new Error('could_not_read_image_file'));
				return;
			}
			resolve({
				buffer: reader.result,
				sourceName: file.name,
				sourceType: file.type,
				sourceSizeBytes: file.size
			});
		};
		reader.onerror = () => {
			reject(reader.error ?? new Error('could_not_read_image_file'));
		};
		reader.readAsArrayBuffer(file);
	});
}

export function decodeBase64ToImage(
	input: string,
	options: Partial<Base64ToImageOptions> = {}
): Base64ToImageResult {
	const startedAt = nowMs();
	if (input.trim().length === 0) {
		throw new Error('empty_base64_input');
	}

	const fallbackMimeType = normalizeImageMimeType(options.fallbackMimeType) ?? 'image/png';
	const normalized = normalizeBase64Payload(input);
	const binary = safeAtob(normalized.base64);
	const detectedMimeType = detectImageMimeType(binary);
	const declaredMimeType = normalized.declaredMimeType
		? normalizeImageMimeType(normalized.declaredMimeType)
		: null;
	const mimeType = detectedMimeType ?? declaredMimeType ?? fallbackMimeType;
	const usedFallbackMimeType = detectedMimeType === null && declaredMimeType === null;
	const dataUrl = `data:${mimeType};base64,${normalized.base64}`;

	return {
		base64: normalized.base64,
		dataUrl,
		mimeType,
		downloadFilename: `decoded-image.${extensionForMimeType(mimeType)}`,
		metrics: {
			byteLength: binary.length,
			base64Characters: normalized.base64.length,
			dataUrlCharacters: dataUrl.length,
			hadDataUriPrefix: normalized.hadDataUriPrefix,
			usedFallbackMimeType,
			whitespaceRemoved: normalized.whitespaceRemoved,
			paddingAdded: normalized.paddingAdded
		},
		durationMs: elapsedMs(startedAt)
	};
}

function normalizeBase64Payload(input: string): NormalizedBase64Payload {
	const trimmedInput = input.trim();
	const dataUrlMatch = trimmedInput.match(DATA_URL_PREFIX_PATTERN);
	const declaredMimeType = dataUrlMatch?.[1] ?? null;

	if (declaredMimeType && !normalizeImageMimeType(declaredMimeType)) {
		throw new Error('invalid_image_data_uri_mime');
	}

	let base64 = dataUrlMatch?.[2] ?? trimmedInput;
	const hadDataUriPrefix = Boolean(dataUrlMatch);
	const whitespaceRemoved = /\s/.test(base64);
	if (whitespaceRemoved) {
		base64 = base64.replace(/\s+/g, '');
	}

	if (base64.length === 0) {
		throw new Error('empty_base64_input');
	}

	base64 = base64.replace(/-/g, '+').replace(/_/g, '/');

	if (/[^A-Za-z0-9+/=]/.test(base64)) {
		throw new Error('invalid_base64_characters');
	}

	const firstPaddingIndex = base64.indexOf('=');
	if (firstPaddingIndex !== -1) {
		const paddingSection = base64.slice(firstPaddingIndex);
		if (/[^=]/.test(paddingSection) || paddingSection.length > 2) {
			throw new Error('invalid_base64_padding');
		}
	}

	const remainder = base64.length % 4;
	if (remainder === 1) {
		throw new Error('invalid_base64_length');
	}

	let paddingAdded = false;
	if (remainder > 0) {
		base64 += '='.repeat(4 - remainder);
		paddingAdded = true;
	}

	if (!BASE64_BLOCK_PATTERN.test(base64)) {
		throw new Error('invalid_base64_characters');
	}

	return {
		base64,
		declaredMimeType,
		hadDataUriPrefix,
		whitespaceRemoved,
		paddingAdded
	};
}

function resolveImageMimeType(sourceType: string, sourceName: string): string | null {
	const normalizedSourceType = normalizeImageMimeType(sourceType);
	if (normalizedSourceType) return normalizedSourceType;
	return inferMimeTypeFromFilename(sourceName);
}

function normalizeImageMimeType(value: string | undefined): string | null {
	const normalizedValue = value?.trim().toLowerCase();
	if (!normalizedValue || !normalizedValue.startsWith('image/')) return null;
	if (normalizedValue === 'image/jpg') return 'image/jpeg';
	return MIME_EXTENSION_MAP[normalizedValue] ? normalizedValue : normalizedValue;
}

function inferMimeTypeFromFilename(sourceName: string): string | null {
	const extension = sourceName.split('.').pop()?.trim().toLowerCase();
	if (!extension) return null;
	if (extension === 'png') return 'image/png';
	if (extension === 'jpg' || extension === 'jpeg') return 'image/jpeg';
	if (extension === 'webp') return 'image/webp';
	if (extension === 'gif') return 'image/gif';
	if (extension === 'avif') return 'image/avif';
	if (extension === 'bmp') return 'image/bmp';
	if (extension === 'svg') return 'image/svg+xml';
	if (extension === 'ico') return 'image/x-icon';
	return null;
}

function extensionForMimeType(mimeType: string): string {
	if (MIME_EXTENSION_MAP[mimeType]) return MIME_EXTENSION_MAP[mimeType];
	if (mimeType.startsWith('image/')) {
		return (
			mimeType
				.slice('image/'.length)
				.replace('+xml', '')
				.replace(/[^\w-]/g, '') || 'png'
		);
	}
	return 'png';
}

function getSanitizedBaseName(sourceName: string): string {
	const trimmed = sourceName.replace(/\.[^.]+$/u, '').trim();
	return trimmed.length > 0 ? trimmed : 'image';
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
	const bytes = new Uint8Array(buffer);
	let binary = '';
	const chunkSize = 0x8000;

	for (let index = 0; index < bytes.length; index += chunkSize) {
		const chunk = bytes.subarray(index, index + chunkSize);
		binary += String.fromCharCode(...chunk);
	}

	return btoa(binary);
}

function safeAtob(value: string): string {
	try {
		return atob(value);
	} catch {
		throw new Error('invalid_base64_characters');
	}
}

function detectImageMimeType(binary: string): string | null {
	if (binary.length >= 8 && getByte(binary, 0) === 0x89 && sliceAscii(binary, 1, 4) === 'PNG') {
		return 'image/png';
	}

	if (binary.length >= 3 && getByte(binary, 0) === 0xff && getByte(binary, 1) === 0xd8) {
		return 'image/jpeg';
	}

	if (sliceAscii(binary, 0, 6) === 'GIF87a' || sliceAscii(binary, 0, 6) === 'GIF89a') {
		return 'image/gif';
	}

	if (
		sliceAscii(binary, 0, 4) === 'RIFF' &&
		binary.length >= 12 &&
		sliceAscii(binary, 8, 12) === 'WEBP'
	) {
		return 'image/webp';
	}

	if (
		binary.length >= 12 &&
		sliceAscii(binary, 4, 8) === 'ftyp' &&
		['avif', 'avis'].includes(sliceAscii(binary, 8, 12))
	) {
		return 'image/avif';
	}

	if (sliceAscii(binary, 0, 2) === 'BM') {
		return 'image/bmp';
	}

	if (
		binary.length >= 4 &&
		getByte(binary, 0) === 0x00 &&
		getByte(binary, 1) === 0x00 &&
		getByte(binary, 2) === 0x01 &&
		getByte(binary, 3) === 0x00
	) {
		return 'image/x-icon';
	}

	const svgCandidate = binary
		.slice(0, 512)
		.trimStart()
		.replace(/^\uFEFF/u, '');
	if (svgCandidate.startsWith('<?xml') || svgCandidate.startsWith('<svg')) {
		return 'image/svg+xml';
	}

	return null;
}

function sliceAscii(value: string, start: number, end: number): string {
	return value.slice(start, end);
}

function getByte(value: string, index: number): number {
	return value.charCodeAt(index) & 0xff;
}

function getByteSize(value: string): number {
	return new TextEncoder().encode(value).length;
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
