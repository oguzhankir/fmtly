import { describe, expect, it } from 'vitest';
import {
	analogous,
	complementary,
	contrastRatio,
	cssLinearGradient,
	hexToRgb,
	hslToRgb,
	rgbToHex,
	rgbToHsl,
	simulateProtanopia,
	triadic,
	wcagResult
} from '../../src/lib/engines/color';

describe('Color Engine Math', () => {
	describe('Base Conversions', () => {
		it('should correctly convert Hex to RGB', () => {
			const rgb = hexToRgb('#FF5733');
			expect(rgb.r).toBe(255);
			expect(rgb.g).toBe(87);
			expect(rgb.b).toBe(51);
		});

		it('should correctly convert RGB to Hex', () => {
			const hex = rgbToHex({ r: 255, g: 87, b: 51 });
			expect(hex.toUpperCase()).toBe('#FF5733');
		});

		it('should convert RGB -> HSL -> RGB seamlessly', () => {
			const rgb = { r: 100, g: 150, b: 200 };
			const hsl = rgbToHsl(rgb);
			const backRgb = hslToRgb(hsl);
			// Due to rounding there might be a +/- 1 difference in precision
			expect(Math.abs(backRgb.r - rgb.r)).toBeLessThanOrEqual(1);
			expect(Math.abs(backRgb.g - rgb.g)).toBeLessThanOrEqual(1);
			expect(Math.abs(backRgb.b - rgb.b)).toBeLessThanOrEqual(1);
		});
	});

	describe('Contrast Checker', () => {
		it('should calculate contrast ratio 21 for Black and White', () => {
			const white = { r: 255, g: 255, b: 255 };
			const black = { r: 0, g: 0, b: 0 };
			const ratio = contrastRatio(white, black);
			expect(ratio).toBeCloseTo(21, 1);
		});

		it('should pass WCAG AAA Normal for high contrast', () => {
			const result = wcagResult(21);
			expect(result.aaa_normal).toBe(true);
			expect(result.aa_normal).toBe(true);
		});

		it('should fail WCAG tests for low contrast ratios', () => {
			const result = wcagResult(2.5);
			expect(result.aa_normal).toBe(false);
			expect(result.aa_large).toBe(false);
			expect(result.aaa_normal).toBe(false);
			expect(result.aaa_large).toBe(false);
		});
	});

	describe('Palette Generation', () => {
		it('should generate a complementary color (180 deg shift)', () => {
			const base = { h: 100, s: 50, l: 50 };
			const comp = complementary(base);
			expect(comp).toHaveLength(2);
			expect(comp[1].h).toBe(280);
		});

		it('should generate 5 analogous colors', () => {
			const base = { h: 180, s: 50, l: 50 };
			const an = analogous(base, 5);
			expect(an).toHaveLength(5);
			// With step 30 and count 5, startHue is 180 - (2*30) = 120
			expect(an[0].h).toBe(120);
			expect(an[2].h).toBe(180); // Middle is the base hue
			expect(an[4].h).toBe(240);
		});

		it('should generate triadic colors (120 deg shifts)', () => {
			const base = { h: 0, s: 50, l: 50 };
			const tr = triadic(base);
			expect(tr).toHaveLength(3);
			expect(tr[1].h).toBe(120);
			expect(tr[2].h).toBe(240);
		});
	});

	describe('Gradient Generator', () => {
		it('should generate a valid CSS linear gradient', () => {
			const stops = [
				{ color: '#000000', position: 0, id: '1' },
				{ color: '#FFFFFF', position: 100, id: '2' }
			];
			const css = cssLinearGradient(stops, 90);
			expect(css).toBe('linear-gradient(90deg, #000000 0%, #FFFFFF 100%)');
		});
	});

	describe('Color Blindness Matrices', () => {
		it('should apply protanopia correctly (reduces red channel drastically)', () => {
			const pureRed = { r: 255, g: 0, b: 0 };
			const simulated = simulateProtanopia(pureRed);
			// Protanopia matrix reduces R and increases G a bit for pure red due to confusion lines
			// R = 255 * 0.152 = ~39
			expect(simulated.r).toBeLessThan(100);
		});
	});
});
