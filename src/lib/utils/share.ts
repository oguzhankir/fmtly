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
	const url = new URL(`${baseURL}/${toolPath}`);
	url.searchParams.set('input', compressed);
	const href = url.toString();
	const sizeKB = new TextEncoder().encode(href).length / 1024;
	return { url: href, sizeKB };
}

export function extractShareData(): string | null {
	if (typeof window === 'undefined') return null;
	const param = new URL(window.location.href).searchParams.get('input');
	if (param) {
		return decompressFromURL(param);
	}
	const hash = window.location.hash;
	if (!hash.startsWith('#share=')) return null;
	const compressed = hash.slice('#share='.length);
	if (!compressed) return null;
	return decompressFromURL(compressed);
}
