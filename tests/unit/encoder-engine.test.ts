import { describe, expect, it } from 'vitest';
import {
	base64Decode,
	base64Encode,
	detectBase64,
	encodeURIComponentSafe,
	urlDecode,
	urlEncode
} from '../../src/lib/engines/encoder/index.js';

describe('base64Encode', () => {
	it('encodes "Hello, World!" correctly', () => {
		expect(base64Encode('Hello, World!')).toBe('SGVsbG8sIFdvcmxkIQ==');
	});

	it('encodes empty string', () => {
		expect(base64Encode('')).toBe('');
	});

	it('encodes Unicode characters', () => {
		const encoded = base64Encode('こんにちは');
		const decoded = base64Decode(encoded);
		expect(decoded.success).toBe(true);
		if (decoded.success) {
			expect(decoded.value).toBe('こんにちは');
		}
	});

	it('encodes emoji', () => {
		const encoded = base64Encode('Hello 🌍');
		const decoded = base64Decode(encoded);
		expect(decoded.success).toBe(true);
		if (decoded.success) {
			expect(decoded.value).toBe('Hello 🌍');
		}
	});

	it('encodes string with null bytes', () => {
		const encoded = base64Encode('a\0b');
		const decoded = base64Decode(encoded);
		expect(decoded.success).toBe(true);
		if (decoded.success) {
			expect(decoded.value).toBe('a\0b');
		}
	});
});

describe('base64Decode', () => {
	it('decodes valid Base64', () => {
		const result = base64Decode('SGVsbG8sIFdvcmxkIQ==');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.value).toBe('Hello, World!');
		}
	});

	it('decodes empty string', () => {
		const result = base64Decode('');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.value).toBe('');
		}
	});

	it('returns error for invalid Base64', () => {
		const result = base64Decode('!!!invalid!!!');
		expect(result.success).toBe(false);
		if (!result.success) {
			expect(result.error).toBeTruthy();
		}
	});

	it('handles whitespace in input', () => {
		const result = base64Decode('SGVs bG8s IFdv cmxk IQ==');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.value).toBe('Hello, World!');
		}
	});
});

describe('urlEncode', () => {
	it('encodes spaces', () => {
		expect(urlEncode('hello world')).toBe('hello%20world');
	});

	it('encodes special characters', () => {
		expect(urlEncode('a&b=c')).toBe('a%26b%3Dc');
	});

	it('preserves unreserved characters', () => {
		expect(urlEncode('abc-._~')).toBe('abc-._~');
	});

	it('encodes empty string', () => {
		expect(urlEncode('')).toBe('');
	});

	it('encodes Unicode', () => {
		const encoded = urlEncode('café');
		expect(encoded).toContain('%');
		expect(urlDecode(encoded)).toBe('café');
	});
});

describe('urlDecode', () => {
	it('decodes percent-encoded strings', () => {
		expect(urlDecode('hello%20world')).toBe('hello world');
	});

	it('decodes special characters', () => {
		expect(urlDecode('a%26b%3Dc')).toBe('a&b=c');
	});

	it('returns original for invalid encoding gracefully', () => {
		expect(urlDecode('%ZZ')).toBe('%ZZ');
	});

	it('handles empty string', () => {
		expect(urlDecode('')).toBe('');
	});
});

describe('encodeURIComponentSafe', () => {
	it('encodes all RFC 3986 reserved characters', () => {
		const result = encodeURIComponentSafe("!'()*");
		expect(result).not.toContain("'");
		expect(result).not.toContain('!');
		expect(result).not.toContain('(');
		expect(result).not.toContain(')');
		expect(result).not.toContain('*');
	});

	it('encodes spaces', () => {
		expect(encodeURIComponentSafe('hello world')).toBe('hello%20world');
	});
});

describe('detectBase64', () => {
	it('detects valid Base64', () => {
		expect(detectBase64('SGVsbG8sIFdvcmxkIQ==')).toBe(true);
	});

	it('rejects empty string', () => {
		expect(detectBase64('')).toBe(false);
	});

	it('rejects plain text', () => {
		expect(detectBase64('Hello, World!')).toBe(false);
	});

	it('rejects strings with invalid length', () => {
		expect(detectBase64('abc')).toBe(false);
	});

	it('detects Base64 without padding', () => {
		expect(detectBase64('dGVzdA==')).toBe(true);
	});
});
