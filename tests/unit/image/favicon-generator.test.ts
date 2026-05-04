import { describe, expect, it } from 'vitest';
import {
	FAVICON_GENERATOR_DEFAULT_OPTIONS,
	FAVICON_GENERATOR_WORKER_THRESHOLD_BYTES,
	FAVICON_PNG_SIZES,
	type FaviconFile,
	buildFaviconZip,
	shouldUseFaviconGeneratorWorker
} from '../../../src/lib/engines/image/index.js';

describe('favicon generator worker threshold', () => {
	it('does not use worker for SVG input regardless of size', () => {
		const largeSize = FAVICON_GENERATOR_WORKER_THRESHOLD_BYTES + 1;
		expect(shouldUseFaviconGeneratorWorker(largeSize, true)).toBe(false);
	});

	it('uses worker for non-SVG input above threshold', () => {
		const largeSize = FAVICON_GENERATOR_WORKER_THRESHOLD_BYTES + 1;
		expect(shouldUseFaviconGeneratorWorker(largeSize, false)).toBe(true);
	});

	it('does not use worker at exactly the threshold', () => {
		expect(shouldUseFaviconGeneratorWorker(FAVICON_GENERATOR_WORKER_THRESHOLD_BYTES, false)).toBe(
			false
		);
	});

	it('does not use worker below threshold', () => {
		expect(shouldUseFaviconGeneratorWorker(100 * 1024, false)).toBe(false);
	});
});

describe('favicon generator default options', () => {
	it('includes ICO by default', () => {
		expect(FAVICON_GENERATOR_DEFAULT_OPTIONS.includeIco).toBe(true);
	});

	it('includes SVG by default', () => {
		expect(FAVICON_GENERATOR_DEFAULT_OPTIONS.includeSvg).toBe(true);
	});

	it('includes manifest by default', () => {
		expect(FAVICON_GENERATOR_DEFAULT_OPTIONS.includeManifest).toBe(true);
	});
});

describe('favicon PNG sizes', () => {
	it('contains all standard sizes', () => {
		expect(FAVICON_PNG_SIZES).toContain(16);
		expect(FAVICON_PNG_SIZES).toContain(32);
		expect(FAVICON_PNG_SIZES).toContain(48);
		expect(FAVICON_PNG_SIZES).toContain(180);
		expect(FAVICON_PNG_SIZES).toContain(192);
		expect(FAVICON_PNG_SIZES).toContain(512);
	});

	it('contains 9 sizes total', () => {
		expect(FAVICON_PNG_SIZES).toHaveLength(9);
	});

	it('is sorted ascending', () => {
		for (let i = 1; i < FAVICON_PNG_SIZES.length; i++) {
			expect(FAVICON_PNG_SIZES[i]).toBeGreaterThan(FAVICON_PNG_SIZES[i - 1]);
		}
	});
});

describe('favicon ZIP builder', () => {
	it('returns a non-empty Uint8Array', () => {
		const pngBytes = new Uint8Array([137, 80, 78, 71]);
		const files: FaviconFile[] = [
			{
				filename: 'favicon-16x16.png',
				label: '16×16',
				sizeTag: 16,
				dataUrl: `data:image/png;base64,${btoa(String.fromCharCode(...pngBytes))}`,
				sizeBytes: pngBytes.length,
				mimeType: 'image/png'
			}
		];
		const zip = buildFaviconZip(files, '');
		expect(zip).toBeInstanceOf(Uint8Array);
		expect(zip.length).toBeGreaterThan(0);
	});

	it('produces a valid ZIP signature', () => {
		const files: FaviconFile[] = [
			{
				filename: 'favicon-32x32.png',
				label: '32×32',
				sizeTag: 32,
				dataUrl: 'data:image/png;base64,iVBORw0KGgo=',
				sizeBytes: 8,
				mimeType: 'image/png'
			}
		];
		const zip = buildFaviconZip(files, '');
		expect(zip[0]).toBe(0x50);
		expect(zip[1]).toBe(0x4b);
		expect(zip[2]).toBe(0x03);
		expect(zip[3]).toBe(0x04);
	});

	it('includes manifest as site.webmanifest when provided', () => {
		const files: FaviconFile[] = [];
		const manifest = '{"name":"Test"}';
		const zip = buildFaviconZip(files, manifest);
		const text = new TextDecoder().decode(zip);
		expect(text).toContain('site.webmanifest');
	});

	it('does not include manifest entry when empty', () => {
		const files: FaviconFile[] = [];
		const zip = buildFaviconZip(files, '');
		const text = new TextDecoder().decode(zip);
		expect(text).not.toContain('site.webmanifest');
	});
});
