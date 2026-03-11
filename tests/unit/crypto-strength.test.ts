import { describe, expect, it } from 'vitest';
import { checkStrength } from '../../src/lib/engines/crypto';

describe('Crypto Engine - Password Strength', () => {
	it('should score at least 1 for lower-case only password', () => {
		const result = checkStrength('password');
		expect(result.score).toBe(2);
		expect(result.hasLowercase).toBe(true);
		expect(result.hasUppercase).toBe(false);
		expect(result.hasDigits).toBe(false);
		expect(result.hasSymbols).toBe(false);
		// Expected pool: 26, length: 8, entropy = 8 * log2(26) = ~37.6
		expect(result.entropy).toBeCloseTo(37.6, 0);
	});

	it('should score higher for common complex password pattern', () => {
		const result = checkStrength('P@ssw0rd!');
		expect(result.score).toBeGreaterThanOrEqual(2);
		expect(result.score).toBeLessThanOrEqual(3);
		expect(result.hasLowercase).toBe(true);
		expect(result.hasUppercase).toBe(true);
		expect(result.hasDigits).toBe(true);
		expect(result.hasSymbols).toBe(true);
	});

	it('should score 4 for long cryptographically secure random password', () => {
		// 20 char random mix
		const result = checkStrength('zL8!qX#9vM2$kY@1wP%5');
		expect(result.score).toBe(4);
		expect(result.hasLowercase).toBe(true);
		expect(result.hasUppercase).toBe(true);
		expect(result.hasDigits).toBe(true);
		expect(result.hasSymbols).toBe(true);

		// Expected pool: 94, length: 20 => entropy ~ 131 bits
		expect(result.entropy).toBeGreaterThan(100);
	});

	it('should detect repeats and sequences', () => {
		const result = checkStrength('aaaaa123');
		expect(result.hasRepeats).toBe(true);
		expect(result.hasSequences).toBe(true);
	});

	it('should provide actionable suggestions for weak passwords', () => {
		const result = checkStrength('short');
		expect(result.suggestions.length).toBeGreaterThan(0);
		expect(result.suggestions.some((s) => s.includes('12 characters'))).toBe(true);
		expect(result.suggestions.some((s) => s.includes('uppercase'))).toBe(true);
	});

	it('should provide no suggestions for perfect passwords', () => {
		const result = checkStrength('zL8!qX#9vM2$kY@1wP%5');
		expect(result.suggestions.length).toBe(0);
	});
});
