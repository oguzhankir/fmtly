// Accessibility engine — uses existing color engine, pure JS

import {
	hexToRgb,
	rgbToHex,
	contrastRatio,
	wcagResult,
	simulateProtanopia,
	simulateDeuteranopia,
	simulateTritanopia,
	simulateAchromatopsia,
	type RgbColor,
	type WcagResult
} from '../color/index';

export { contrastRatio, hexToRgb, rgbToHex, wcagResult };

export type AccessibilityReport = {
	ratio: number;
	wcag: WcagResult;
	simulations: {
		protanopia: RgbColor;
		deuteranopia: RgbColor;
		tritanopia: RgbColor;
		achromatopsia: RgbColor;
	};
};

export type FontSizeResult = {
	isLargeText: boolean;
	wcagDefinition: string;
	aaRequirement: number;
	aaaRequirement: number;
};

export function fullReport(fg: string, bg: string): AccessibilityReport {
	const fgRgb = hexToRgb(fg);
	const bgRgb = hexToRgb(bg);
	const ratio = contrastRatio(fgRgb, bgRgb);

	return {
		ratio: Math.round(ratio * 100) / 100,
		wcag: wcagResult(ratio),
		simulations: {
			protanopia: simulateProtanopia(fgRgb),
			deuteranopia: simulateDeuteranopia(fgRgb),
			tritanopia: simulateTritanopia(fgRgb),
			achromatopsia: simulateAchromatopsia(fgRgb)
		}
	};
}

export function fontSizeCheck(px: number, bold: boolean): FontSizeResult {
	// WCAG: large text = ≥18pt (24px) or ≥14pt (18.66px) bold
	const isLargeText = px >= 24 || (bold && px >= 18.66);
	return {
		isLargeText,
		wcagDefinition: isLargeText
			? 'Large text (≥18pt or ≥14pt bold)'
			: 'Normal text (<18pt and <14pt bold)',
		aaRequirement: isLargeText ? 3 : 4.5,
		aaaRequirement: isLargeText ? 4.5 : 7
	};
}

// Simulate color blindness on image data
export function simulateImageColorBlindness(
	imageData: ImageData,
	type: 'protanopia' | 'deuteranopia' | 'tritanopia' | 'achromatopsia'
): ImageData {
	const fns = {
		protanopia: simulateProtanopia,
		deuteranopia: simulateDeuteranopia,
		tritanopia: simulateTritanopia,
		achromatopsia: simulateAchromatopsia
	};
	const fn = fns[type];
	const result = new ImageData(
		new Uint8ClampedArray(imageData.data),
		imageData.width,
		imageData.height
	);
	for (let i = 0; i < result.data.length; i += 4) {
		const sim = fn({ r: result.data[i], g: result.data[i + 1], b: result.data[i + 2] });
		result.data[i] = sim.r;
		result.data[i + 1] = sim.g;
		result.data[i + 2] = sim.b;
	}
	return result;
}
