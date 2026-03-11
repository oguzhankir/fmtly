export interface RgbColor {
	r: number; // 0-255
	g: number;
	b: number;
	a?: number; // 0-1
}

export interface HslColor {
	h: number; // 0-360
	s: number; // 0-100
	l: number; // 0-100
	a?: number; // 0-1
}

export interface WcagResult {
	aa_normal: boolean;
	aa_large: boolean;
	aa_ui: boolean;
	aaa_normal: boolean;
	aaa_large: boolean;
}

export interface GradientStop {
	color: string;
	position: number;
}

// --- BASIC CONVERSIONS (Added since they were missing) ---
export function hexToRgb(hex: string): RgbColor {
	hex = hex.replace(/^#/, '');
	if (hex.length === 3) {
		hex = hex
			.split('')
			.map((c) => c + c)
			.join('');
	}
	const num = parseInt(hex, 16);
	return {
		r: (num >> 16) & 255,
		g: (num >> 8) & 255,
		b: num & 255
	};
}

export function rgbToHex(rgb: RgbColor): string {
	const toHex = (n: number) => {
		const hex = Math.max(0, Math.min(255, Math.round(n))).toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	};
	return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

export function hslToRgb(hsl: HslColor): RgbColor {
	const h = hsl.h / 360;
	const s = hsl.s / 100;
	const l = hsl.l / 100;
	let r, g, b;

	if (s === 0) {
		r = g = b = l;
	} else {
		const hue2rgb = (p: number, q: number, t: number) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}
	return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

export function rgbToHsl(rgb: RgbColor): HslColor {
	const r = rgb.r / 255,
		g = rgb.g / 255,
		b = rgb.b / 255;
	const max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	let h = 0,
		s = 0,
		l = (max + min) / 2;

	if (max !== min) {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}
	return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

// --- CONTRAST CHECKER ---

function relativeLuminance(rgb: RgbColor): number {
	const [R, G, B] = [rgb.r, rgb.g, rgb.b].map((channel) => {
		const c = channel / 255;
		return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
	});
	return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

export function contrastRatio(c1: RgbColor, c2: RgbColor): number {
	const L1 = relativeLuminance(c1);
	const L2 = relativeLuminance(c2);
	const lighter = Math.max(L1, L2);
	const darker = Math.min(L1, L2);
	return (lighter + 0.05) / (darker + 0.05);
}

export function wcagResult(ratio: number): WcagResult {
	return {
		aa_normal: ratio >= 4.5,
		aa_large: ratio >= 3,
		aa_ui: ratio >= 3,
		aaa_normal: ratio >= 7,
		aaa_large: ratio >= 4.5
	};
}

// --- PALETTE GENERATOR ---

export function complementary(hsl: HslColor): HslColor[] {
	return [{ ...hsl }, { ...hsl, h: (hsl.h + 180) % 360 }];
}

export function analogous(hsl: HslColor, count: number = 5): HslColor[] {
	const step = 30; // 30 degrees for analogous
	const result: HslColor[] = [];
	const startHue = hsl.h - Math.floor(count / 2) * step;
	for (let i = 0; i < count; i++) {
		const newH = (startHue + i * step + 360) % 360;
		result.push({ ...hsl, h: newH });
	}
	return result;
}

export function triadic(hsl: HslColor): HslColor[] {
	return [{ ...hsl }, { ...hsl, h: (hsl.h + 120) % 360 }, { ...hsl, h: (hsl.h + 240) % 360 }];
}

export function tetradic(hsl: HslColor): HslColor[] {
	return [
		{ ...hsl },
		{ ...hsl, h: (hsl.h + 90) % 360 },
		{ ...hsl, h: (hsl.h + 180) % 360 },
		{ ...hsl, h: (hsl.h + 270) % 360 }
	];
}

export function splitComplementary(hsl: HslColor): HslColor[] {
	return [{ ...hsl }, { ...hsl, h: (hsl.h + 150) % 360 }, { ...hsl, h: (hsl.h + 210) % 360 }];
}

export function monochromatic(hsl: HslColor, count: number = 6): HslColor[] {
	const result: HslColor[] = [];
	const step = 100 / count;
	for (let i = 0; i < count; i++) {
		result.push({ ...hsl, l: Math.max(0, Math.min(100, Math.round(i * step + step / 2))) });
	}
	// Sort so base color's lightness is roughly in the middle, but here we just return a scale
	return result;
}

// --- GRADIENT GENERATOR ---

export function cssLinearGradient(stops: GradientStop[], angle: number): string {
	const stopStrings = stops.map((s) => `${s.color} ${s.position}%`).join(', ');
	return `linear-gradient(${angle}deg, ${stopStrings})`;
}

export function cssRadialGradient(stops: GradientStop[], shape: 'circle' | 'ellipse'): string {
	const stopStrings = stops.map((s) => `${s.color} ${s.position}%`).join(', ');
	return `radial-gradient(${shape}, ${stopStrings})`;
}

// --- COLOR BLINDNESS SIMULATOR ---

function applyMatrix(rgb: RgbColor, matrix: number[][]): RgbColor {
	// rgb is 0-255
	const r = rgb.r;
	const g = rgb.g;
	const b = rgb.b;
	const newR = r * matrix[0][0] + g * matrix[0][1] + b * matrix[0][2];
	const newG = r * matrix[1][0] + g * matrix[1][1] + b * matrix[1][2];
	const newB = r * matrix[2][0] + g * matrix[2][1] + b * matrix[2][2];

	return {
		r: Math.max(0, Math.min(255, Math.round(newR))),
		g: Math.max(0, Math.min(255, Math.round(newG))),
		b: Math.max(0, Math.min(255, Math.round(newB)))
	};
}

export function simulateProtanopia(rgb: RgbColor): RgbColor {
	const m = [
		[0.152, 1.053, -0.205],
		[0.115, 0.786, 0.099],
		[0, 0, 1]
	];
	return applyMatrix(rgb, m);
}

export function simulateDeuteranopia(rgb: RgbColor): RgbColor {
	const m = [
		[0.367, 0.861, -0.228],
		[0.28, 0.673, 0.047],
		[0, 0, 1]
	];
	return applyMatrix(rgb, m);
}

export function simulateTritanopia(rgb: RgbColor): RgbColor {
	const m = [
		[1.256, -0.077, -0.18],
		[0, 0.926, 0.074],
		[0, 0.692, 0.308]
	];
	return applyMatrix(rgb, m);
}

export function simulateAchromatopsia(rgb: RgbColor): RgbColor {
	const L = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
	const lRound = Math.max(0, Math.min(255, Math.round(L)));
	return {
		r: lRound,
		g: lRound,
		b: lRound
	};
}
