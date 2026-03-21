declare module 'unicode-name' {
	export function unicodeName(char: string | number): string | undefined;
	export function unicodeReadableName(char: string | number): string | undefined;
}

declare module 'unicode-properties' {
	export function getCategory(codePoint: number): string;
	export function getScript(codePoint: number): string;
	export function getEastAsianWidth(codePoint: number): string;
}
