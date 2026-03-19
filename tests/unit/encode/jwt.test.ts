import { describe, expect, it } from 'vitest';
import { decodeJWT } from '../../../src/lib/engines/encode/jwt.js';

const VALID_TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// Token with exp in the past (2018)
const EXPIRED_TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyNDAwMDB9.invalid-sig';

describe('decodeJWT', () => {
	describe('empty input', () => {
		it('returns empty error for empty string', () => {
			const result = decodeJWT('');
			expect(result.ok).toBe(false);
			if (!result.ok) {
				expect(result.error.kind).toBe('empty');
			}
		});

		it('returns empty error for whitespace-only string', () => {
			const result = decodeJWT('   \n\t  ');
			expect(result.ok).toBe(false);
			if (!result.ok) {
				expect(result.error.kind).toBe('empty');
			}
		});
	});

	describe('invalid format', () => {
		it('returns invalid_format for token with only 1 part', () => {
			const result = decodeJWT('onlyonepart');
			expect(result.ok).toBe(false);
			if (!result.ok) {
				expect(result.error.kind).toBe('invalid_format');
			}
		});

		it('returns invalid_format for token with 2 parts', () => {
			const result = decodeJWT('part1.part2');
			expect(result.ok).toBe(false);
			if (!result.ok) {
				expect(result.error.kind).toBe('invalid_format');
			}
		});

		it('returns invalid_format for token with 4 parts', () => {
			const result = decodeJWT('part1.part2.part3.part4');
			expect(result.ok).toBe(false);
			if (!result.ok) {
				expect(result.error.kind).toBe('invalid_format');
			}
		});
	});

	describe('invalid base64', () => {
		it('returns invalid_base64 for malformed base64url in header', () => {
			const result = decodeJWT('!!!invalid!!!.eyJzdWIiOiJ0ZXN0In0.sig');
			expect(result.ok).toBe(false);
			if (!result.ok) {
				expect(result.error.kind).toBe('invalid_base64');
			}
		});
	});

	describe('invalid JSON', () => {
		it('returns invalid_json when decoded header is not JSON', () => {
			// base64url of "not json"
			const notJsonB64 = btoa('not json').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
			const validPayloadB64 = 'eyJzdWIiOiJ0ZXN0In0';
			const result = decodeJWT(`${notJsonB64}.${validPayloadB64}.sig`);
			expect(result.ok).toBe(false);
			if (!result.ok) {
				expect(result.error.kind).toBe('invalid_json');
			}
		});
	});

	describe('valid token', () => {
		it('decodes valid JWT correctly', () => {
			const result = decodeJWT(VALID_TOKEN);
			expect(result.ok).toBe(true);
			if (result.ok) {
				expect(result.data.header.alg).toBe('HS256');
				expect(result.data.header.typ).toBe('JWT');
				expect(result.data.payload.sub).toBe('1234567890');
				expect(result.data.payload.name).toBe('John Doe');
				expect(result.data.payload.iat).toBe(1516239022);
			}
		});

		it('decodes token with leading/trailing whitespace', () => {
			const result = decodeJWT(`  ${VALID_TOKEN}  `);
			expect(result.ok).toBe(true);
		});

		it('correctly extracts signature', () => {
			const result = decodeJWT(VALID_TOKEN);
			expect(result.ok).toBe(true);
			if (result.ok) {
				expect(result.data.signature).toBe('SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
			}
		});

		it('token without exp has null expiresAt and isExpired false', () => {
			const result = decodeJWT(VALID_TOKEN);
			expect(result.ok).toBe(true);
			if (result.ok) {
				expect(result.data.expiresAt).toBeNull();
				expect(result.data.isExpired).toBe(false);
			}
		});

		it('token without iat has null issuedAt', () => {
			const result = decodeJWT(VALID_TOKEN);
			expect(result.ok).toBe(true);
			if (result.ok) {
				expect(result.data.issuedAt).toBeInstanceOf(Date);
			}
		});
	});

	describe('expiry detection', () => {
		it('marks expired token correctly', () => {
			const result = decodeJWT(EXPIRED_TOKEN);
			expect(result.ok).toBe(true);
			if (result.ok) {
				expect(result.data.isExpired).toBe(true);
				expect(result.data.expiresAt).toBeInstanceOf(Date);
			}
		});
	});
});
