import { describe, expect, it } from 'vitest';
import {
	IMAGE_BASE64_WORKER_THRESHOLD_BYTES,
	IMAGE_CONVERTER_DEFAULT_OPTIONS,
	IMAGE_CONVERTER_WORKER_THRESHOLD_BYTES,
	IMAGE_RESIZER_DEFAULT_OPTIONS,
	IMAGE_RESIZER_WORKER_THRESHOLD_BYTES,
	computeScaledDimensions,
	decodeBase64ToImage,
	encodeImageToBase64,
	getImageConversionExtension,
	normalizeImageConversionOptions,
	shouldUseBase64ToImageWorker,
	shouldUseImageConverterWorker,
	shouldUseImageResizerWorker,
	shouldUseImageToBase64Worker
} from '../../../src/lib/engines/image/index.js';

describe('image resizer worker threshold', () => {
	it('uses worker only for files above 500KB', () => {
		expect(shouldUseImageResizerWorker(IMAGE_RESIZER_WORKER_THRESHOLD_BYTES)).toBe(false);
		expect(shouldUseImageResizerWorker(IMAGE_RESIZER_WORKER_THRESHOLD_BYTES + 1)).toBe(true);
	});
});

describe('image resizer option normalization', () => {
	it('has stable defaults for resize controls', () => {
		expect(IMAGE_RESIZER_DEFAULT_OPTIONS.mode).toBe('dimensions');
		expect(IMAGE_RESIZER_DEFAULT_OPTIONS.width).toBeGreaterThan(0);
		expect(IMAGE_RESIZER_DEFAULT_OPTIONS.height).toBeGreaterThan(0);
		expect(IMAGE_RESIZER_DEFAULT_OPTIONS.scalePercent).toBe(100);
		expect(IMAGE_RESIZER_DEFAULT_OPTIONS.outputFormat).toBe('image/png');
		expect(IMAGE_RESIZER_DEFAULT_OPTIONS.quality).toBeGreaterThan(0);
	});
});

describe('image resizer scaled dimensions', () => {
	it('maintains aspect ratio when lock is enabled', () => {
		const dimensions = computeScaledDimensions(1200, 800, {
			width: 600,
			height: 500,
			scalePercent: 100,
			lockAspectRatio: true,
			outputFormat: 'image/png',
			quality: 0.92,
			mode: 'dimensions'
		});

		expect(dimensions.width).toBe(600);
		expect(dimensions.height).toBe(400);
	});

	it('uses percentage scaling when no fixed dimensions are set', () => {
		const dimensions = computeScaledDimensions(1000, 400, {
			width: 1,
			height: 1,
			scalePercent: 25,
			lockAspectRatio: true,
			outputFormat: 'image/png',
			quality: 0.92,
			mode: 'percentage'
		});

		expect(dimensions.width).toBe(250);
		expect(dimensions.height).toBe(100);
	});
});

describe('image format converter options', () => {
	it('uses worker only for converter files above 500KB', () => {
		expect(shouldUseImageConverterWorker(IMAGE_CONVERTER_WORKER_THRESHOLD_BYTES)).toBe(false);
		expect(shouldUseImageConverterWorker(IMAGE_CONVERTER_WORKER_THRESHOLD_BYTES + 1)).toBe(true);
	});

	it('normalizes unsupported formats and clamps quality', () => {
		const options = normalizeImageConversionOptions({
			outputFormat: 'image/png',
			quality: 2,
			backgroundColor: ''
		});

		expect(options.outputFormat).toBe('image/png');
		expect(options.quality).toBe(1);
		expect(options.backgroundColor).toBe(IMAGE_CONVERTER_DEFAULT_OPTIONS.backgroundColor);
	});

	it('maps conversion MIME types to download extensions', () => {
		expect(getImageConversionExtension('image/png')).toBe('png');
		expect(getImageConversionExtension('image/jpeg')).toBe('jpg');
		expect(getImageConversionExtension('image/webp')).toBe('webp');
		expect(getImageConversionExtension('image/avif')).toBe('avif');
		expect(getImageConversionExtension('image/gif')).toBe('gif');
	});
});

describe('image base64 conversion', () => {
	it('encodes image bytes into a Base64 string and data URI', () => {
		const bytes = new Uint8Array([0x89, 0x50, 0x4e, 0x47]);
		const result = encodeImageToBase64({
			buffer: bytes.buffer,
			sourceName: 'pixel.png',
			sourceType: 'image/png',
			sourceSizeBytes: bytes.byteLength
		});

		expect(result.base64).toBe('iVBORw==');
		expect(result.dataUrl).toBe('data:image/png;base64,iVBORw==');
		expect(result.downloadFilenames.base64).toBe('pixel-base64.txt');
		expect(result.downloadFilenames.dataUri).toBe('pixel-data-uri.txt');
	});

	it('decodes data URIs and detects the image MIME type', () => {
		const result = decodeBase64ToImage('data:image/png;base64,iVBORw0KGgo=');

		expect(result.mimeType).toBe('image/png');
		expect(result.metrics.hadDataUriPrefix).toBe(true);
		expect(result.downloadFilename).toBe('decoded-image.png');
	});

	it('normalizes whitespace and missing padding when decoding', () => {
		const result = decodeBase64ToImage(' iVBORw0K Ggo ');

		expect(result.metrics.whitespaceRemoved).toBe(true);
		expect(result.metrics.paddingAdded).toBe(true);
		expect(result.mimeType).toBe('image/png');
	});

	it('falls back to the selected MIME type when bytes are not recognizable', () => {
		const result = decodeBase64ToImage('aGVsbG8=', { fallbackMimeType: 'image/webp' });

		expect(result.mimeType).toBe('image/webp');
		expect(result.metrics.usedFallbackMimeType).toBe(true);
		expect(result.downloadFilename).toBe('decoded-image.webp');
	});

	it('uses worker thresholds above 500KB for both directions', () => {
		expect(shouldUseImageToBase64Worker(IMAGE_BASE64_WORKER_THRESHOLD_BYTES)).toBe(false);
		expect(shouldUseImageToBase64Worker(IMAGE_BASE64_WORKER_THRESHOLD_BYTES + 1)).toBe(true);
		expect(shouldUseBase64ToImageWorker('a'.repeat(IMAGE_BASE64_WORKER_THRESHOLD_BYTES))).toBe(
			false
		);
		expect(shouldUseBase64ToImageWorker('a'.repeat(IMAGE_BASE64_WORKER_THRESHOLD_BYTES + 1))).toBe(
			true
		);
	});
});
