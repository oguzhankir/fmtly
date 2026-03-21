declare module 'punycode' {
	const punycode: {
		readonly version: string;
		decode(input: string): string;
		encode(input: string): string;
		toASCII(input: string): string;
		toUnicode(input: string): string;
	};
	export default punycode;
	export const decode: typeof punycode.decode;
	export const encode: typeof punycode.encode;
	export const toASCII: typeof punycode.toASCII;
	export const toUnicode: typeof punycode.toUnicode;
}
