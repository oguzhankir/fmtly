import { describe, it, expect } from 'vitest';
import { parseCurl, curlToFetch, curlToAxios } from '../../src/lib/engines/code/curl.engine';

describe('parseCurl', () => {
	it('parses a simple GET request', () => {
		const result = parseCurl("curl 'https://api.example.com/users'");
		expect(result.url).toBe('https://api.example.com/users');
		expect(result.method).toBe('GET');
		expect(result.body).toBeNull();
		expect(Object.keys(result.headers)).toHaveLength(0);
	});

	it('parses POST with JSON body and headers', () => {
		const result = parseCurl(
			`curl -X POST -H 'Content-Type: application/json' -d '{"name":"test"}' https://api.example.com/users`
		);
		expect(result.url).toBe('https://api.example.com/users');
		expect(result.method).toBe('POST');
		expect(result.headers['Content-Type']).toBe('application/json');
		expect(result.body).toBe('{"name":"test"}');
	});

	it('parses basic auth (-u user:pass) into Authorization header', () => {
		const result = parseCurl('curl -u user:pass https://api.example.com/secure');
		expect(result.username).toBe('user');
		expect(result.password).toBe('pass');
		// Should inject Basic auth header
		expect(result.headers['Authorization']).toMatch(/^Basic /);
	});

	it('parses Bearer token header', () => {
		const result = parseCurl(
			"curl -H 'Authorization: Bearer mytoken123' https://api.example.com/me"
		);
		expect(result.headers['Authorization']).toBe('Bearer mytoken123');
		expect(result.method).toBe('GET');
	});

	it('infers POST method from -d even without -X POST', () => {
		const result = parseCurl("curl -d 'hello=world' https://api.example.com/form");
		expect(result.method).toBe('POST');
		expect(result.body).toBe('hello=world');
	});

	it('handles multiline cURL with backslash continuations', () => {
		const result = parseCurl(
			`curl -X POST 'https://api.example.com/test' \\\n  -H 'Content-Type: application/json' \\\n  -d '{"a":1}'`
		);
		expect(result.url).toBe('https://api.example.com/test');
		expect(result.method).toBe('POST');
		expect(result.headers['Content-Type']).toBe('application/json');
	});
});

describe('curlToFetch', () => {
	it('converts simple GET to fetch()', () => {
		const output = curlToFetch("curl 'https://api.example.com/users'");
		expect(output).toContain('fetch(');
		expect(output).toContain('api.example.com/users');
		// GET should not include method
		expect(output).not.toContain('method:');
	});

	it('converts POST with JSON body', () => {
		const output = curlToFetch(
			`curl -X POST -H 'Content-Type: application/json' -d '{"name":"test"}' https://api.example.com/users`
		);
		expect(output).toContain('method: "POST"');
		expect(output).toContain('"Content-Type"');
		expect(output).toContain('JSON.stringify(');
	});
});

describe('curlToAxios', () => {
	it('converts simple GET to axios()', () => {
		const output = curlToAxios("curl 'https://api.example.com/users'");
		expect(output).toContain('axios({');
		expect(output).toContain('method: "get"');
	});

	it('converts POST with JSON body', () => {
		const output = curlToAxios(
			`curl -X POST -H 'Content-Type: application/json' -d '{"name":"test"}' https://api.example.com/users`
		);
		expect(output).toContain('method: "post"');
		expect(output).toContain('data:');
	});
});
