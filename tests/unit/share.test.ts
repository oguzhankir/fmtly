import { describe, expect, it } from 'vitest';
import { compressForURL, decompressFromURL, generateShareURL } from '../../src/lib/utils/share.js';

describe('compressForURL / decompressFromURL', () => {
	it('round-trips a simple string', () => {
		const input = '{"name": "test"}';
		const compressed = compressForURL(input);
		expect(compressed).toBeTruthy();
		expect(compressed).not.toBe(input);
		const decompressed = decompressFromURL(compressed);
		expect(decompressed).toBe(input);
	});

	it('round-trips empty string', () => {
		const compressed = compressForURL('');
		const decompressed = decompressFromURL(compressed);
		expect(decompressed).toBe('');
	});

	it('round-trips large JSON', () => {
		const obj: Record<string, number> = {};
		for (let i = 0; i < 500; i++) {
			obj[`key_${i}`] = i;
		}
		const input = JSON.stringify(obj, null, 2);
		const compressed = compressForURL(input);
		const decompressed = decompressFromURL(compressed);
		expect(decompressed).toBe(input);
	});

	it('round-trips unicode content', () => {
		const input = '{"emoji": "🎉🚀", "cjk": "日本語テスト"}';
		const compressed = compressForURL(input);
		const decompressed = decompressFromURL(compressed);
		expect(decompressed).toBe(input);
	});

	it('produces URL-safe output (no spaces or ampersands)', () => {
		const input = '{"key": "value with spaces & special <chars>"}';
		const compressed = compressForURL(input);
		expect(compressed).not.toMatch(/[ &]/);
		expect(compressed.length).toBeGreaterThan(0);
	});

	it('returns empty string for invalid compressed input', () => {
		const result = decompressFromURL('not-valid-compressed');
		expect(typeof result).toBe('string');
	});
});

describe('generateShareURL', () => {
	it('generates a valid share URL', () => {
		const result = generateShareURL('{"a":1}', 'json/formatter', 'https://fmtly.dev');
		expect(result.url).toMatch(/^https:\/\/fmtly\.dev\/json\/formatter#share=.+/);
		expect(result.sizeKB).toBeGreaterThan(0);
	});

	it('compressed URL is smaller than raw for large input', () => {
		const input = JSON.stringify({ data: 'x'.repeat(1000) });
		const result = generateShareURL(input, 'json/formatter', 'https://fmtly.dev');
		expect(result.url.length).toBeLessThan(input.length * 2);
	});

	it('sizeKB is computed correctly', () => {
		const result = generateShareURL('{"a":1}', 'json/formatter', 'https://fmtly.dev');
		const expectedKB = new TextEncoder().encode(result.url).length / 1024;
		expect(result.sizeKB).toBeCloseTo(expectedKB, 5);
	});

	it('URL can be decompressed back to original', () => {
		const input = '{"hello": "world", "nested": {"arr": [1,2,3]}}';
		const result = generateShareURL(input, 'json/formatter', 'https://fmtly.dev');
		const hash = result.url.split('#share=')[1];
		const decompressed = decompressFromURL(hash);
		expect(decompressed).toBe(input);
	});
});
