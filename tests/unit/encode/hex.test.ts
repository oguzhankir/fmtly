import { describe, expect, it } from 'vitest';
import {
	HEX_WORKER_THRESHOLD_BYTES,
	processHex,
	shouldUseHexWorker
} from '../../../src/lib/engines/encode/hex.js';

const defaultOpts = {
	encode: {
		hexCase: 'upper' as const,
		byteDelimiter: 'space' as const,
		bytesPerLine: 0
	},
	decode: {
		ignoreWhitespace: true,
		ignoreCommas: true,
		allow0xPrefix: true
	}
};

describe('hex engine', () => {
	it('encodes UTF-8 text to spaced uppercase hex', () => {
		const r = processHex('Hi', 'encode', defaultOpts);
		expect(r.error).toBeNull();
		expect(r.output).toBe('48 69');
	});

	it('encodes with no delimiter', () => {
		const r = processHex('A', 'encode', {
			...defaultOpts,
			encode: { ...defaultOpts.encode, byteDelimiter: 'none' }
		});
		expect(r.output).toBe('41');
	});

	it('encodes lowercase hex for multi-byte UTF-8', () => {
		const r = processHex('ñ', 'encode', {
			...defaultOpts,
			encode: { ...defaultOpts.encode, hexCase: 'lower' }
		});
		expect(r.output).toBe('c3 b1');
		const rUpper = processHex('ñ', 'encode', defaultOpts);
		expect(rUpper.output).toBe('C3 B1');
	});

	it('wraps bytes per line', () => {
		const r = processHex('ABCD', 'encode', {
			...defaultOpts,
			encode: { ...defaultOpts.encode, bytesPerLine: 2 }
		});
		expect(r.output).toBe('41 42\n43 44');
	});

	it('decodes continuous hex to UTF-8', () => {
		const r = processHex('48656C6C6F', 'decode', defaultOpts);
		expect(r.error).toBeNull();
		expect(r.output).toBe('Hello');
	});

	it('decodes spaced hex with 0x prefixes', () => {
		const r = processHex('0x48 0x69', 'decode', defaultOpts);
		expect(r.error).toBeNull();
		expect(r.output).toBe('Hi');
	});

	it('decodes UTF-8 multibyte sequence', () => {
		const r = processHex('c3a9', 'decode', {
			...defaultOpts,
			encode: defaultOpts.encode,
			decode: { ...defaultOpts.decode, ignoreWhitespace: true }
		});
		expect(r.output).toBe('é');
	});

	it('rejects odd hex length', () => {
		const r = processHex('486', 'decode', defaultOpts);
		expect(r.error?.code).toBe('odd_hex_length');
	});

	it('rejects invalid UTF-8 bytes', () => {
		const r = processHex('FF FE', 'decode', defaultOpts);
		expect(r.error?.code).toBe('invalid_utf8');
	});

	it('uses worker threshold', () => {
		expect(HEX_WORKER_THRESHOLD_BYTES).toBe(500 * 1024);
		expect(shouldUseHexWorker('x'.repeat(100))).toBe(false);
		expect(shouldUseHexWorker('x'.repeat(HEX_WORKER_THRESHOLD_BYTES + 1))).toBe(true);
	});
});
