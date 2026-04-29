import { describe, expect, it } from 'vitest';
import {
	IMAGE_CONVERTER_DEFAULT_OPTIONS,
	IMAGE_CONVERTER_WORKER_THRESHOLD_BYTES,
	IMAGE_RESIZER_DEFAULT_OPTIONS,
	IMAGE_RESIZER_WORKER_THRESHOLD_BYTES,
	SVG_OPTIMIZER_DEFAULT_OPTIONS,
	SVG_OPTIMIZER_WORKER_THRESHOLD_BYTES,
	buildSvgOptimizerConfig,
	computeScaledDimensions,
	getImageConversionExtension,
	getSvgUtf8ByteSize,
	looksLikeSvgDocument,
	normalizeImageConversionOptions,
	normalizeSvgOptimizeOptions,
	shouldUseImageConverterWorker,
	shouldUseImageResizerWorker,
	shouldUseSvgOptimizerWorker,
	summarizeSvg
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

describe('svg optimizer worker threshold', () => {
	it('uses worker only for SVG input above 500KB', () => {
		expect(shouldUseSvgOptimizerWorker(SVG_OPTIMIZER_WORKER_THRESHOLD_BYTES)).toBe(false);
		expect(shouldUseSvgOptimizerWorker(SVG_OPTIMIZER_WORKER_THRESHOLD_BYTES + 1)).toBe(true);
	});
});

describe('svg optimizer options', () => {
	it('has stable defaults for SVG optimization', () => {
		expect(SVG_OPTIMIZER_DEFAULT_OPTIONS.multipass).toBe(true);
		expect(SVG_OPTIMIZER_DEFAULT_OPTIONS.floatPrecision).toBe(3);
		expect(SVG_OPTIMIZER_DEFAULT_OPTIONS.removeMetadata).toBe(true);
		expect(SVG_OPTIMIZER_DEFAULT_OPTIONS.cleanupIds).toBe(false);
		expect(SVG_OPTIMIZER_DEFAULT_OPTIONS.pretty).toBe(false);
	});

	it('clamps numeric SVG options', () => {
		const options = normalizeSvgOptimizeOptions({
			floatPrecision: 99,
			indent: -5,
			removeComments: false
		});

		expect(options.floatPrecision).toBe(6);
		expect(options.indent).toBe(0);
		expect(options.removeComments).toBe(false);
	});

	it('builds preset-default overrides from toggles', () => {
		const config = buildSvgOptimizerConfig({
			...SVG_OPTIMIZER_DEFAULT_OPTIONS,
			removeMetadata: false,
			collapseGroups: false,
			removeDimensions: true,
			pretty: true,
			indent: 4
		});

		expect(config.plugins[0]).toEqual({
			name: 'preset-default',
			params: {
				overrides: expect.objectContaining({
					removeMetadata: false,
					collapseGroups: false,
				})
			}
		});
		expect(config.plugins).toContain('removeDimensions');
		expect(config.js2svg.pretty).toBe(true);
		expect(config.js2svg.indent).toBe(4);
	});
});

describe('svg optimizer helpers', () => {
	it('measures UTF-8 byte size correctly', () => {
		expect(getSvgUtf8ByteSize('<svg />')).toBeGreaterThan(0);
		expect(getSvgUtf8ByteSize('ç')).toBe(2);
	});

	it('detects SVG markup and summarizes geometry', () => {
		const source =
			'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path d="M0 0h24v24H0z"/></g></svg>';

		expect(looksLikeSvgDocument(source)).toBe(true);
		expect(looksLikeSvgDocument('<div></div>')).toBe(false);

		const summary = summarizeSvg(source);
		expect(summary.width).toBe('24');
		expect(summary.height).toBe('24');
		expect(summary.viewBox).toBe('0 0 24 24');
		expect(summary.elementCount).toBe(3);
		expect(summary.sizeBytes).toBe(getSvgUtf8ByteSize(source));
	});
});
