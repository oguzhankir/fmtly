import { describe, it, expect } from 'vitest';
import {
	formatNumber,
	toRoman,
	fromRoman,
	percentOf,
	percentChange,
	percentDiff,
	toScientific,
	fromScientific
} from '../../src/lib/engines/number/number.engine';

describe('Number Engine', () => {
	describe('Formatter', () => {
		it('formats numbers with commas by default', () => {
			const res = formatNumber('1234567.89', { locale: 'en-US' });
			expect(res.value).toBe('1,234,567.89');
		});

		it('formats numbers with no decimals', () => {
			const res = formatNumber('1234.56', { locale: 'en-US', decimals: 0 });
			expect(res.value).toBe('1,235');
		});

		it('returns parts breakdown', () => {
			const res = formatNumber('1234', { locale: 'en-US' });
			expect(res.parts).toEqual(
				expect.arrayContaining([
					expect.objectContaining({ type: 'integer', value: '1' }),
					expect.objectContaining({ type: 'group', value: ',' }),
					expect.objectContaining({ type: 'integer', value: '234' })
				])
			);
		});
	});

	describe('Roman Numerals', () => {
		it('converts to Roman', () => {
			expect(toRoman(1)).toBe('I');
			expect(toRoman(4)).toBe('IV');
			expect(toRoman(9)).toBe('IX');
			expect(toRoman(14)).toBe('XIV');
			expect(toRoman(1994)).toBe('MCMXCIV');
			expect(toRoman(3999)).toBe('MMMCMXCIX');
		});

		it('throws on invalid toRoman', () => {
			expect(() => toRoman(0)).toThrow();
			expect(() => toRoman(-5)).toThrow();
			expect(() => toRoman(4000)).toThrow();
			expect(() => toRoman(1.5)).toThrow();
		});

		it('converts from Roman', () => {
			expect(fromRoman('I')).toBe(1);
			expect(fromRoman('IV')).toBe(4);
			expect(fromRoman('IX')).toBe(9);
			expect(fromRoman('XIV')).toBe(14);
			expect(fromRoman('MCMXCIV')).toBe(1994);
			expect(fromRoman('MMMCMXCIX')).toBe(3999);
		});

		it('throws on invalid fromRoman', () => {
			expect(() => fromRoman('IIII')).toThrow(); // Invalid sequence
			expect(() => fromRoman('VIV')).toThrow(); // Invalid sequence
			expect(() => fromRoman('ABC')).toThrow(); // Invalid characters
		});
	});

	describe('Percentages', () => {
		it('percentOf', () => {
			expect(percentOf(20, 50)).toBe(10);
			expect(percentOf(150, 20)).toBe(30);
		});

		it('percentChange', () => {
			expect(percentChange(100, 150)).toBe(50);
			expect(percentChange(50, 40)).toBe(-20);
			expect(() => percentChange(0, 50)).toThrow();
		});

		it('percentDiff', () => {
			expect(percentDiff(100, 50)).toBe(66.66666666666666);
			expect(percentDiff(50, 100)).toBe(66.66666666666666);
			expect(percentDiff(0, 0)).toBe(0);
		});
	});

	describe('Scientific Notation', () => {
		it('toScientific', () => {
			expect(toScientific('12340')).toBe('1.234 × 10⁴');
			expect(toScientific('0.005')).toBe('5 × 10⁻³');
		});

		it('fromScientific', () => {
			expect(fromScientific('1.234 × 10⁴')).toBe('12340');
			expect(fromScientific('5 × 10⁻³')).toBe('0.005');
			expect(fromScientific('1.234e4')).toBe('12340');
		});
	});
});
