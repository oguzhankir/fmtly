import { describe, expect, it } from 'vitest';
import {
	ROT13_CAESAR_WORKER_THRESHOLD_BYTES,
	applyRot13CaesarTransform,
	normalizeCaesarShift,
	processRot13Caesar,
	shouldUseRot13CaesarWorker
} from '../../../src/lib/engines/encode/rot13-caesar.js';

describe('rot13-caesar', () => {
	it('normalizes Caesar shift to 1–25', () => {
		expect(normalizeCaesarShift(0)).toBe(1);
		expect(normalizeCaesarShift(26)).toBe(25);
		expect(normalizeCaesarShift(3)).toBe(3);
		expect(normalizeCaesarShift(Number.NaN)).toBe(3);
	});

	it('applies ROT13 and is self-inverse on letters', () => {
		const once = applyRot13CaesarTransform('Hello', 13);
		expect(once).toBe('Uryyb');
		expect(applyRot13CaesarTransform(once, 13)).toBe('Hello');
	});

	it('preserves non-ASCII letters and emoji', () => {
		const r = applyRot13CaesarTransform('café 你好 👋', 13);
		expect(r).toBe('pnsé 你好 👋');
	});

	it('runs ROT13 mode via processRot13Caesar', () => {
		const r = processRot13Caesar('Ab', { mode: 'rot13' });
		expect(r.output).toBe('No');
	});

	it('encrypts and decrypts Caesar shift 3', () => {
		const enc = processRot13Caesar('abc XYZ', {
			mode: 'caesar',
			caesarShift: 3,
			caesarDirection: 'encrypt'
		});
		expect(enc.output).toBe('def ABC');
		const dec = processRot13Caesar(enc.output, {
			mode: 'caesar',
			caesarShift: 3,
			caesarDirection: 'decrypt'
		});
		expect(dec.output).toBe('abc XYZ');
	});

	it('uses worker threshold', () => {
		expect(ROT13_CAESAR_WORKER_THRESHOLD_BYTES).toBe(500 * 1024);
		expect(shouldUseRot13CaesarWorker('a'.repeat(100))).toBe(false);
		expect(shouldUseRot13CaesarWorker('a'.repeat(ROT13_CAESAR_WORKER_THRESHOLD_BYTES + 1))).toBe(
			true
		);
	});
});
