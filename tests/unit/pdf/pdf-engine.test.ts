import {
	normalizePageRangeInput,
	parsePageRanges,
	shouldUsePdfWorker,
	tryParsePageRanges
} from '$engines/pdf/index.js';
import { describe, expect, it } from 'vitest';

describe('pdf ranges', () => {
	it('parses mixed single pages and ranges', () => {
		expect(parsePageRanges('1, 3-5, 2', 10)).toEqual([1, 2, 3, 4, 5]);
	});

	it('throws on out-of-bounds page selection', () => {
		expect(() => parsePageRanges('1,12', 5)).toThrow(/PAGE_RANGE:range_out_of_bounds/);
	});

	it('normalizes unicode dashes and semicolons', () => {
		expect(normalizePageRangeInput('1\u20133;5')).toBe('1-3,5');
	});

	it('parses range after en-dash normalization', () => {
		expect(parsePageRanges('1\u20133', 5)).toEqual([1, 2, 3]);
	});

	it('swaps reversed ranges', () => {
		expect(parsePageRanges('5-3', 10)).toEqual([3, 4, 5]);
	});

	it('rejects ambiguous multi-hyphen segment', () => {
		const r = tryParsePageRanges('1-2-3', 10);
		expect(r.ok).toBe(false);
		if (!r.ok) {
			expect(r.reason).toBe('ambiguous_hyphen');
		}
	});

	it('tryParse returns empty reason for blank input', () => {
		const r = tryParsePageRanges('   ', 5);
		expect(r.ok).toBe(false);
		if (!r.ok) {
			expect(r.reason).toBe('empty');
		}
	});
});

describe('pdf worker threshold', () => {
	it('uses worker only for files above 500KB', () => {
		expect(shouldUsePdfWorker(500 * 1024)).toBe(false);
		expect(shouldUsePdfWorker(500 * 1024 + 1)).toBe(true);
	});
});
