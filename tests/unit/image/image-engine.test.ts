import { describe, expect, it } from 'vitest';
import {
	IMAGE_CONVERTER_DEFAULT_OPTIONS,
	IMAGE_CONVERTER_WORKER_THRESHOLD_BYTES,
	IMAGE_RESIZER_DEFAULT_OPTIONS,
	IMAGE_RESIZER_WORKER_THRESHOLD_BYTES,
	computeScaledDimensions,
	createImageConverterWorkerRequest,
	getImageConversionExtension,
	normalizeImageConversionOptions,
	shouldUseImageConverterWorker,
	shouldUseImageResizerWorker
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

	it('creates a structured-clone-safe worker request', () => {
		const request = createImageConverterWorkerRequest(
			7,
			{
				dataUrl: 'data:image/png;base64,AAAA',
				sourceName: 'large.png',
				sourceType: 'image/png',
				sourceSizeBytes: IMAGE_CONVERTER_WORKER_THRESHOLD_BYTES + 1
			},
			{
				outputFormat: 'image/webp',
				quality: 0.8,
				backgroundColor: 'white'
			}
		);

		expect(structuredClone(request)).toEqual(request);
	});
});
