import { describe, expect, it } from 'vitest';
import { parseURL } from '../../../src/lib/engines/web/url-parser.js';

describe('parseURL — valid URLs', () => {
	it('parses a full HTTPS URL with all components', () => {
		const result = parseURL(
			'https://user:pass@api.example.com:8080/v2/search?q=hello+world&lang=en#results'
		);
		expect(result.error).toBeNull();
		expect(result.scheme).toBe('https');
		expect(result.protocol).toBe('https:');
		expect(result.username).toBe('user');
		expect(result.password).toBe('pass');
		expect(result.hostname).toBe('api.example.com');
		expect(result.port).toBe('8080');
		expect(result.pathname).toBe('/v2/search');
		expect(result.paramCount).toBe(2);
		expect(result.hash).toBe('#results');
		expect(result.fragment).toBe('results');
		expect(result.isSecure).toBe(true);
		expect(result.hasAuth).toBe(true);
		expect(result.hasPort).toBe(true);
		expect(result.hasSearch).toBe(true);
		expect(result.hasHash).toBe(true);
	});

	it('parses a minimal HTTP URL with no optional parts', () => {
		const result = parseURL('http://example.com');
		expect(result.error).toBeNull();
		expect(result.scheme).toBe('http');
		expect(result.hostname).toBe('example.com');
		expect(result.port).toBe('');
		expect(result.pathname).toBe('/');
		expect(result.hasAuth).toBe(false);
		expect(result.hasPort).toBe(false);
		expect(result.hasSearch).toBe(false);
		expect(result.hasHash).toBe(false);
		expect(result.isSecure).toBe(false);
		expect(result.paramCount).toBe(0);
	});

	it('marks https as secure', () => {
		expect(parseURL('https://example.com').isSecure).toBe(true);
	});

	it('marks wss as secure', () => {
		expect(parseURL('wss://socket.example.com').isSecure).toBe(true);
	});

	it('marks http as not secure', () => {
		expect(parseURL('http://example.com').isSecure).toBe(false);
	});

	it('parses multiple query parameters', () => {
		const result = parseURL('https://example.com/search?a=1&b=2&c=3');
		expect(result.error).toBeNull();
		expect(result.paramCount).toBe(3);
		expect(result.searchParams[0]).toEqual({ index: 0, key: 'a', value: '1' });
		expect(result.searchParams[1]).toEqual({ index: 1, key: 'b', value: '2' });
		expect(result.searchParams[2]).toEqual({ index: 2, key: 'c', value: '3' });
	});

	it('preserves repeated query parameter keys with separate entries', () => {
		const result = parseURL('https://example.com/?tag=a&tag=b&tag=c');
		expect(result.paramCount).toBe(3);
		expect(result.searchParams.map((p) => p.value)).toEqual(['a', 'b', 'c']);
	});

	it('decodes plus signs in query values as spaces via URLSearchParams', () => {
		const result = parseURL('https://example.com/?q=hello+world');
		expect(result.searchParams[0].value).toBe('hello world');
	});

	it('returns empty string for absent port', () => {
		const result = parseURL('https://example.com/path');
		expect(result.port).toBe('');
		expect(result.hasPort).toBe(false);
	});

	it('captures hash without leading #', () => {
		const result = parseURL('https://example.com/page#section-2');
		expect(result.hash).toBe('#section-2');
		expect(result.fragment).toBe('section-2');
		expect(result.hasHash).toBe(true);
	});

	it('trims whitespace before parsing', () => {
		const result = parseURL('  https://example.com  ');
		expect(result.error).toBeNull();
		expect(result.hostname).toBe('example.com');
	});

	it('populates href and origin correctly', () => {
		const result = parseURL('https://example.com:443/path?x=1');
		expect(result.href).toContain('example.com');
		expect(result.origin).toBe('https://example.com');
	});

	it('returns durationMs >= 0', () => {
		const result = parseURL('https://example.com');
		expect(result.durationMs).toBeGreaterThanOrEqual(0);
	});
});

describe('parseURL — empty input', () => {
	it('returns empty result with no error for empty string', () => {
		const result = parseURL('');
		expect(result.error).toBeNull();
		expect(result.href).toBe('');
		expect(result.durationMs).toBe(0);
	});

	it('returns empty result for whitespace-only input', () => {
		const result = parseURL('   ');
		expect(result.error).toBeNull();
		expect(result.href).toBe('');
	});
});

describe('parseURL — invalid URLs', () => {
	it('returns invalid_url error for bare hostname', () => {
		const result = parseURL('not-a-url');
		expect(result.error?.code).toBe('invalid_url');
		expect(result.href).toBe('');
	});

	it('returns invalid_url error for missing scheme', () => {
		const result = parseURL('example.com/path');
		expect(result.error?.code).toBe('invalid_url');
	});

	it('returns invalid_url error for malformed URL', () => {
		const result = parseURL('http://');
		expect(result.error?.code).toBe('invalid_url');
	});

	it('includes error detail in the error object', () => {
		const result = parseURL('completely invalid');
		expect(result.error?.detail).toBeTruthy();
		expect(typeof result.error?.detail).toBe('string');
	});
});
