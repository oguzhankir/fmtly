import { crc32HexUpper } from '$engines/crypto/crc32.js';
import { describe, expect, it } from 'vitest';

describe('crc32HexUpper', () => {
	it('matches known value for test vector', () => {
		const data = new TextEncoder().encode('123456789');
		expect(crc32HexUpper(data)).toBe('CBF43926');
	});
});
