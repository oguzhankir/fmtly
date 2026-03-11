import { writable } from 'svelte/store';
import { input } from './input.store.js';

export type PaletteType =
	| 'complementary'
	| 'analogous'
	| 'triadic'
	| 'tetradic'
	| 'split-complementary'
	| 'monochromatic';

export interface GradientStop {
	color: string;
	position: number;
	id: string; // for keyed lists
}

export interface ColorOptions {
	contrastFg: string;
	contrastBg: string;

	paletteBase: string;
	paletteType: PaletteType;

	gradientStops: GradientStop[];
	gradientAngle: number;
	gradientType: 'linear' | 'radial';
	gradientRadialShape: 'circle' | 'ellipse';

	blindnessInputType: 'hex' | 'image';
	blindnessHex: string;
	blindnessImageSrc: string | null;
}

const defaultOptions: ColorOptions = {
	contrastFg: '#FFFFFF',
	contrastBg: '#000000',

	paletteBase: '#4A9EFF',
	paletteType: 'complementary',

	gradientStops: [
		{ id: 'stop-1', color: '#4A9EFF', position: 0 },
		{ id: 'stop-2', color: '#CBA6F7', position: 100 }
	],
	gradientAngle: 90,
	gradientType: 'linear',
	gradientRadialShape: 'circle',

	blindnessInputType: 'hex',
	blindnessHex: '#FF5733',
	blindnessImageSrc: null
};

export const colorOptions = writable<ColorOptions>(defaultOptions);

export function initColorStore(slug: string) {
	// Reset inputs/outputs to prevent pollution from other tools
	input.set('');

	colorOptions.update((opts) => ({ ...opts })); // Force re-trigger if needed
}
