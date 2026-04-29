declare module 'gifenc' {
	export type GifPaletteColor = [number, number, number] | [number, number, number, number];

	export interface GifEncoder {
		writeFrame(
			index: Uint8Array,
			width: number,
			height: number,
			options: {
				palette: GifPaletteColor[];
				transparent?: boolean;
				transparentIndex?: number;
				repeat?: number;
			}
		): void;
		finish(): void;
		bytes(): Uint8Array;
	}

	export interface QuantizeOptions {
		format?: 'rgb565' | 'rgb444' | 'rgba4444';
		oneBitAlpha?: boolean | number;
	}

	export function GIFEncoder(options?: { initialCapacity?: number; auto?: boolean }): GifEncoder;
	export function quantize(
		rgba: Uint8Array | Uint8ClampedArray,
		maxColors: number,
		options?: QuantizeOptions
	): GifPaletteColor[];
	export function applyPalette(
		rgba: Uint8Array | Uint8ClampedArray,
		palette: GifPaletteColor[],
		format?: 'rgb565' | 'rgb444' | 'rgba4444'
	): Uint8Array;
}
