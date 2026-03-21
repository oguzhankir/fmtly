import { beforeAll, describe, expect, it } from 'vitest';
import {
	PUNYCODE_IDN_WORKER_THRESHOLD_BYTES,
	type PunycodeIdnLib,
	processPunycodeIdn,
	shouldUsePunycodeIdnWorker
} from '../../../src/lib/engines/encode/punycode-idn.js';

let lib: PunycodeIdnLib;

beforeAll(async () => {
	const mod = await import('punycode');
	const puny = mod.default;
	lib = {
		toASCII: (input: string): string => puny.toASCII(input),
		toUnicode: (input: string): string => puny.toUnicode(input)
	};
});

describe('punycode-idn engine', () => {
	it('encodes Unicode domain labels to ASCII IDN', () => {
		const r = processPunycodeIdn('münchen.de', 'encode', lib);
		expect(r.error).toBeNull();
		expect(r.output).toBe('xn--mnchen-3ya.de');
	});

	it('decodes xn-- labels to Unicode', () => {
		const r = processPunycodeIdn('xn--mnchen-3ya.de', 'decode', lib);
		expect(r.error).toBeNull();
		expect(r.output).toBe('münchen.de');
	});

	it('round-trips email domain part', () => {
		const ascii = processPunycodeIdn('user@münchen.de', 'encode', lib);
		expect(ascii.error).toBeNull();
		const back = processPunycodeIdn(ascii.output, 'decode', lib);
		expect(back.error).toBeNull();
		expect(back.output).toBe('user@münchen.de');
	});

	it('returns empty output for empty input', () => {
		const r = processPunycodeIdn('', 'encode', lib);
		expect(r.output).toBe('');
		expect(r.error).toBeNull();
		expect(r.metrics.inputBytes).toBe(0);
	});

	it('surfaces error for invalid punycode', () => {
		const r = processPunycodeIdn('xn--$$$', 'decode', lib);
		expect(r.output).toBe('');
		expect(r.error).not.toBeNull();
		expect(r.error?.code).toBe('invalid_punycode');
	});

	it('flags worker for large UTF-8 input', () => {
		const big = 'a'.repeat(PUNYCODE_IDN_WORKER_THRESHOLD_BYTES + 1);
		expect(shouldUsePunycodeIdnWorker(big)).toBe(true);
	});

	it('does not use worker under threshold', () => {
		expect(shouldUsePunycodeIdnWorker('hello')).toBe(false);
	});
});
