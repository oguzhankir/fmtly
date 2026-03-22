import { base32ToUint8Array, computeTotp } from '$engines/crypto/totp.js';
import { describe, expect, it } from 'vitest';

describe('computeTotp', () => {
	it('produces 6-digit SHA-1 code for RFC test secret', async () => {
		const code = await computeTotp('JBSWY3DPEHPK3PXP', {
			period: 30,
			digits: 6,
			algorithm: 'SHA-1',
			epochSeconds: 1_234_567_890
		});
		expect(code).toMatch(/^\d{6}$/u);
	});

	it('rejects invalid base32', () => {
		expect(() => base32ToUint8Array('!!!')).toThrow();
	});
});
