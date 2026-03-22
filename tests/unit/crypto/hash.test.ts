import { digestBytes, hashUtf8Text } from '$engines/crypto/hash.js';
import { describe, expect, it } from 'vitest';

describe('hashUtf8Text', () => {
	it('computes SHA-256 of empty string', async () => {
		const h = await hashUtf8Text('SHA-256', '');
		expect(h).toBe('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
	});

	it('computes MD5 via noble legacy', async () => {
		const h = await digestBytes('MD5', new TextEncoder().encode('fmtly'));
		expect(h).toHaveLength(32);
		expect(h).toMatch(/^[0-9a-f]+$/u);
	});
});
