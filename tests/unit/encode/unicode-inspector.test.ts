import { describe, expect, it } from 'vitest';
import {
	UNICODE_INSPECTOR_WORKER_THRESHOLD_BYTES,
	type UnicodePropertyLookup,
	inspectUnicode,
	shouldUseUnicodeInspectorWorker
} from '../../../src/lib/engines/encode/unicode-inspector.js';

function mockLookup(overrides: Partial<UnicodePropertyLookup> = {}): UnicodePropertyLookup {
	return {
		readableNameForCodePoint: (cp: number) => `CP-${cp}`,
		nameForGrapheme: () => undefined,
		category: () => 'Lu',
		script: () => 'Latn',
		eastAsianWidth: () => 'N',
		...overrides
	};
}

describe('unicode-inspector', () => {
	it('returns empty metrics for empty input', () => {
		const r = inspectUnicode('', { granularity: 'codepoint', maxScalars: 100 }, mockLookup());
		expect(r.clusters).toEqual([]);
		expect(r.metrics.scalarCount).toBe(0);
		expect(r.metrics.clusterCount).toBe(0);
		expect(r.metrics.omittedScalars).toBe(0);
		expect(r.truncated).toBe(false);
	});

	it('inspects ASCII letter with UTF-8 hex and lookup fields', () => {
		const r = inspectUnicode('A', { granularity: 'codepoint', maxScalars: 100 }, mockLookup());
		expect(r.metrics.scalarCount).toBe(1);
		expect(r.metrics.clusterCount).toBe(1);
		expect(r.clusters[0].segment).toBe('A');
		const s = r.clusters[0].scalars[0];
		expect(s.codePoint).toBe(0x41);
		expect(s.utf8BytesHex).toBe('41');
		expect(s.name).toBe('CP-65');
		expect(s.category).toBe('Lu');
	});

	it('encodes non-ASCII scalar as multi-byte UTF-8 hex', () => {
		const r = inspectUnicode('Ω', { granularity: 'codepoint', maxScalars: 100 }, mockLookup());
		const s = r.clusters[0].scalars[0];
		expect(s.codePoint).toBe(0x03a9);
		expect(s.utf8BytesHex).toBe('CE A9');
	});

	it('truncates when maxScalars is exceeded and reports omitted count', () => {
		const r = inspectUnicode('abcd', { granularity: 'codepoint', maxScalars: 2 }, mockLookup());
		expect(r.truncated).toBe(true);
		expect(r.metrics.scalarCount).toBe(2);
		expect(r.metrics.omittedScalars).toBe(2);
	});

	it('decodes astral plane character from UTF-16 string', () => {
		const r = inspectUnicode(
			'\uD83D\uDE00',
			{ granularity: 'codepoint', maxScalars: 10 },
			mockLookup()
		);
		expect(r.metrics.scalarCount).toBe(1);
		expect(r.clusters[0].scalars[0].codePoint).toBe(0x1f600);
		expect(r.clusters[0].scalars[0].utf8BytesHex).toBe('F0 9F 98 80');
	});

	it('uses worker threshold constant', () => {
		expect(UNICODE_INSPECTOR_WORKER_THRESHOLD_BYTES).toBe(500 * 1024);
		const small = 'a'.repeat(1000);
		expect(shouldUseUnicodeInspectorWorker(small)).toBe(false);
		const large = 'a'.repeat(UNICODE_INSPECTOR_WORKER_THRESHOLD_BYTES + 1);
		expect(shouldUseUnicodeInspectorWorker(large)).toBe(true);
	});
});
