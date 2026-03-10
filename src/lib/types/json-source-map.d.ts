declare module 'json-source-map' {
	interface Pointer {
		line: number;
		column: number;
		pos: number;
	}

	interface PointerEntry {
		key?: Pointer;
		keyEnd?: Pointer;
		value: Pointer;
		valueEnd: Pointer;
	}

	interface ParseResult {
		data: unknown;
		pointers: Record<string, PointerEntry>;
	}

	export function parse(json: string): ParseResult;
	export function stringify(
		data: unknown,
		replacer?: null,
		indent?: string | number
	): {
		json: string;
		pointers: Record<string, PointerEntry>;
	};
}
