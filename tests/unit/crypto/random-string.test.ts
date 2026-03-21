import {
	RANDOM_STRING_WORKER_THRESHOLD_BYTES,
	computeRandomStringEntropyBits,
	generateRandomStringFromAlphabet,
	generateRandomStrings,
	normalizeRandomStringOptions,
	randomStringStrengthLevel,
	resolveAlphabet,
	shouldUseRandomStringWorker,
	validateRandomStringOptions
} from '$engines/crypto/index.js';
import { describe, expect, it } from 'vitest';

describe('random-string engine', () => {
	it('normalizes bounds', () => {
		const o = normalizeRandomStringOptions({ length: -5, count: 999999 });
		expect(o.length).toBe(1);
		expect(o.count).toBe(10000);
	});

	it('resolves preset alphabets', () => {
		const hex = resolveAlphabet(
			normalizeRandomStringOptions({ charsetMode: 'hex_lower', customCharset: '' })
		);
		expect(hex).toBe('0123456789abcdef');
	});

	it('computes entropy and strength tier', () => {
		const o = normalizeRandomStringOptions({ length: 16, charsetMode: 'pick' });
		const bits = computeRandomStringEntropyBits(o);
		expect(bits).toBeGreaterThan(80);
		expect(randomStringStrengthLevel(bits)).toBe('very_strong');
	});

	it('resolves pick charset from toggles', () => {
		const lowerDigits = resolveAlphabet(
			normalizeRandomStringOptions({
				charsetMode: 'pick',
				charsetUpper: false,
				charsetLower: true,
				charsetDigits: true,
				charsetSymbols: false
			})
		);
		expect(lowerDigits).toMatch(/^[a-z0-9]+$/u);
		expect(lowerDigits.length).toBeGreaterThan(10);
	});

	it('rejects empty custom alphabet', () => {
		const err = validateRandomStringOptions(
			normalizeRandomStringOptions({ charsetMode: 'custom', customCharset: '   ' })
		);
		expect(err?.code).toBe('empty_charset');
	});

	it('flags worker for very large estimated output', () => {
		const huge = normalizeRandomStringOptions({
			length: 50_000,
			count: 20,
			charsetMode: 'alphanumeric',
			separator: 'newline'
		});
		expect(validateRandomStringOptions(huge)).toBeNull();
		expect(shouldUseRandomStringWorker(huge)).toBe(true);
	});

	it('does not require worker for small defaults', () => {
		const small = normalizeRandomStringOptions({});
		expect(shouldUseRandomStringWorker(small)).toBe(false);
	});

	it('generates success with expected shape', () => {
		const result = generateRandomStrings(
			normalizeRandomStringOptions({
				length: 16,
				count: 2,
				charsetMode: 'hex_lower',
				separator: 'newline'
			})
		);
		expect(result.kind).toBe('success');
		if (result.kind !== 'success') return;
		const lines = result.text.split('\n');
		expect(lines.length).toBe(2);
		expect(lines[0]?.length).toBe(16);
		expect(lines[1]?.length).toBe(16);
	});

	it('uses unbiased sampling from alphabet', () => {
		const crypto = globalThis.crypto;
		const s = generateRandomStringFromAlphabet(64, 'ab', crypto);
		expect(s.length).toBe(64);
		expect(/^[ab]+$/u.test(s)).toBe(true);
	});

	it('respects charset size threshold', () => {
		const n = Math.floor(RANDOM_STRING_WORKER_THRESHOLD_BYTES / 4) + 2;
		const bigCharset = Array.from({ length: n }, (_, i) => String.fromCodePoint(0x1_0000 + i)).join(
			''
		);
		const opts = normalizeRandomStringOptions({
			charsetMode: 'custom',
			customCharset: bigCharset
		});
		expect(validateRandomStringOptions(opts)?.code).toBe('charset_too_large');
	});
});
