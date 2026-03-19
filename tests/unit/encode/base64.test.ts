import { describe, expect, it } from 'vitest';
import {
	BASE64_WORKER_THRESHOLD_BYTES,
	processBase64,
	shouldUseBase64Worker
} from '../../../src/lib/engines/encode/base64.js';

describe('processBase64', () => {
	it('encodes UTF-8 text using standard Base64', () => {
		const result = processBase64('Hello fmtly 👋', 'encode', 'standard');
		expect(result.error).toBeNull();
		expect(result.output).toBe('SGVsbG8gZm10bHkg8J+Riw==');
	});

	it('encodes URL-safe output and can remove padding', () => {
		const result = processBase64('hello?', 'encode', 'url_safe', {
			omitPadding: true
		});
		expect(result.error).toBeNull();
		expect(result.output).toBe('aGVsbG8_');
	});

	it('decodes standard Base64 to UTF-8 text', () => {
		const result = processBase64('SGVsbG8gZm10bHkg8J+Riw==', 'decode', 'standard');
		expect(result.error).toBeNull();
		expect(result.output).toBe('Hello fmtly 👋');
	});

	it('decodes URL-safe Base64 and reports normalization warning', () => {
		const result = processBase64('aGVsbG8_', 'decode', 'url_safe');
		expect(result.error).toBeNull();
		expect(result.output).toBe('hello?');
		expect(result.warnings).toContain('alphabet_normalized');
	});

	it('auto-adds padding when missing during decode', () => {
		const result = processBase64('SGVsbG8', 'decode', 'standard');
		expect(result.error).toBeNull();
		expect(result.output).toBe('Hello');
		expect(result.warnings).toContain('padding_auto_added');
	});

	it('returns invalid_base64_length for remainder-1 input', () => {
		const result = processBase64('abcde', 'decode', 'standard');
		expect(result.error?.code).toBe('invalid_base64_length');
		expect(result.output).toBe('');
	});

	it('returns invalid_base64_characters when whitespace is not allowed', () => {
		const result = processBase64('SGVs bG8=', 'decode', 'standard', {
			ignoreWhitespace: false
		});
		expect(result.error?.code).toBe('invalid_base64_characters');
	});

	it('returns invalid_utf8_output for non-UTF8 bytes', () => {
		const result = processBase64('/w==', 'decode', 'standard');
		expect(result.error?.code).toBe('invalid_utf8_output');
		expect(result.output).toBe('');
	});
});

describe('shouldUseBase64Worker', () => {
	it('returns false for small payloads', () => {
		expect(shouldUseBase64Worker('small')).toBe(false);
	});

	it('returns true for payloads larger than threshold', () => {
		const largeInput = 'a'.repeat(BASE64_WORKER_THRESHOLD_BYTES + 16);
		expect(shouldUseBase64Worker(largeInput)).toBe(true);
	});
});
