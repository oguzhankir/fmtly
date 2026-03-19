import { describe, expect, it } from 'vitest';
import {
	URL_WORKER_THRESHOLD_BYTES,
	processURLEncode,
	shouldUseURLWorker
} from '../../../src/lib/engines/encode/url.js';

describe('processURLEncode', () => {
	it('encodes URL components with reserved characters', () => {
		const result = processURLEncode('hello world?x=1&y=2', 'encode', 'component');
		expect(result.error).toBeNull();
		expect(result.output).toBe('hello%20world%3Fx%3D1%26y%3D2');
	});

	it('encodes full URLs while preserving URL delimiters', () => {
		const result = processURLEncode(
			'https://fmtly.dev/search?q=hello world#quick start',
			'encode',
			'full_url'
		);
		expect(result.error).toBeNull();
		expect(result.output).toBe('https://fmtly.dev/search?q=hello%20world#quick%20start');
	});

	it('encodes spaces as plus when option is enabled', () => {
		const result = processURLEncode('hello world + docs', 'encode', 'component', {
			encodeSpacesAsPlus: true
		});
		expect(result.error).toBeNull();
		expect(result.output).toBe('hello+world+%2B+docs');
	});

	it('decodes plus as space by default', () => {
		const result = processURLEncode('hello+world%2Bdocs', 'decode', 'component');
		expect(result.error).toBeNull();
		expect(result.output).toBe('hello world+docs');
	});

	it('keeps plus literal when decodePlusAsSpace is disabled', () => {
		const result = processURLEncode('hello+world', 'decode', 'component', {
			decodePlusAsSpace: false
		});
		expect(result.error).toBeNull();
		expect(result.output).toBe('hello+world');
	});

	it('returns invalid_url_encoding for malformed URI sequences', () => {
		const result = processURLEncode('%E0%A4%A', 'decode', 'component');
		expect(result.error?.code).toBe('invalid_url_encoding');
		expect(result.output).toBe('');
	});

	it('adds no_changes_detected warning when output stays unchanged', () => {
		const result = processURLEncode('abc123', 'encode', 'component');
		expect(result.error).toBeNull();
		expect(result.warnings).toContain('no_changes_detected');
	});
});

describe('shouldUseURLWorker', () => {
	it('returns false for small payloads', () => {
		expect(shouldUseURLWorker('small')).toBe(false);
	});

	it('returns true for payloads larger than threshold', () => {
		const largeInput = 'a'.repeat(URL_WORKER_THRESHOLD_BYTES + 8);
		expect(shouldUseURLWorker(largeInput)).toBe(true);
	});
});
