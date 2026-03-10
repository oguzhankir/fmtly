import LZString from 'lz-string';

export function compressForURL(input: string): string {
	return LZString.compressToEncodedURIComponent(input);
}

export function decompressFromURL(compressed: string): string {
	const result = LZString.decompressFromEncodedURIComponent(compressed);
	return result ?? '';
}

export type ShareURLResult = {
	url: string;
	sizeKB: number;
};

export function generateShareURL(input: string, toolPath: string, baseURL: string): ShareURLResult {
	const compressed = compressForURL(input);
	const url = `${baseURL}/${toolPath}#share=${compressed}`;
	const sizeKB = new TextEncoder().encode(url).length / 1024;
	return { url, sizeKB };
}

export function extractShareData(): string | null {
	if (typeof window === 'undefined') return null;
	const hash = window.location.hash;
	if (!hash.startsWith('#share=')) return null;
	const compressed = hash.slice('#share='.length);
	if (!compressed) return null;
	return decompressFromURL(compressed);
}
