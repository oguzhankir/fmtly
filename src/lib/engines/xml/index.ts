import { XMLBuilder, XMLParser, XMLValidator } from 'fast-xml-parser';
import type { ConvertResult, FormatResult, ParseResult } from '../types.js';

export type XMLFormatOptions = {
	indent: 2 | 4 | '\t';
};

export function parseXML(input: string): ParseResult {
	const validation = XMLValidator.validate(input);
	if (validation !== true) {
		return {
			success: false,
			error: {
				message: validation.err?.msg ?? 'Invalid XML',
				line: validation.err?.line,
				column: validation.err?.col
			}
		};
	}
	try {
		const parser = new XMLParser({
			ignoreAttributes: false,
			preserveOrder: false,
			trimValues: true
		});
		const data = parser.parse(input);
		return { success: true, data };
	} catch (err) {
		return {
			success: false,
			error: { message: (err as Error).message ?? 'Failed to parse XML' }
		};
	}
}

export function formatXML(input: string, options: XMLFormatOptions = { indent: 2 }): FormatResult {
	const validation = XMLValidator.validate(input);
	if (validation !== true) {
		return {
			success: false,
			error: {
				message: validation.err?.msg ?? 'Invalid XML',
				line: validation.err?.line,
				column: validation.err?.col
			}
		};
	}
	try {
		const indentStr = options.indent === '\t' ? '\t' : ' '.repeat(options.indent);
		const parser = new XMLParser({
			ignoreAttributes: false,
			preserveOrder: true,
			trimValues: true
		});
		const parsed = parser.parse(input);
		const builder = new XMLBuilder({
			ignoreAttributes: false,
			preserveOrder: true,
			format: true,
			indentBy: indentStr,
			suppressEmptyNode: false
		});
		const output = builder.build(parsed) as string;
		return { success: true, output: output.trim() };
	} catch (err) {
		return {
			success: false,
			error: { message: (err as Error).message ?? 'Failed to format XML' }
		};
	}
}

export function minifyXML(input: string): FormatResult {
	const validation = XMLValidator.validate(input);
	if (validation !== true) {
		return {
			success: false,
			error: {
				message: validation.err?.msg ?? 'Invalid XML',
				line: validation.err?.line,
				column: validation.err?.col
			}
		};
	}
	try {
		const parser = new XMLParser({
			ignoreAttributes: false,
			preserveOrder: true,
			trimValues: true
		});
		const parsed = parser.parse(input);
		const builder = new XMLBuilder({
			ignoreAttributes: false,
			preserveOrder: true,
			format: false,
			suppressEmptyNode: false
		});
		const output = builder.build(parsed) as string;
		return { success: true, output: output.trim() };
	} catch (err) {
		return {
			success: false,
			error: { message: (err as Error).message ?? 'Failed to minify XML' }
		};
	}
}

export function xmlToJSON(input: string): ConvertResult {
	const validation = XMLValidator.validate(input);
	if (validation !== true) {
		return {
			success: false,
			error: {
				message: validation.err?.msg ?? 'Invalid XML',
				line: validation.err?.line,
				column: validation.err?.col
			}
		};
	}
	try {
		const parser = new XMLParser({
			ignoreAttributes: false,
			preserveOrder: false,
			trimValues: true
		});
		const data = parser.parse(input);
		const output = JSON.stringify(data, null, 2);
		return { success: true, output };
	} catch (err) {
		return {
			success: false,
			error: { message: (err as Error).message ?? 'Failed to convert XML to JSON' }
		};
	}
}

export function jsonToXML(
	input: string,
	options: { rootElement: string } = { rootElement: 'root' }
): ConvertResult {
	try {
		const data = JSON.parse(input);
		const builder = new XMLBuilder({
			ignoreAttributes: false,
			format: true,
			indentBy: '  ',
			suppressEmptyNode: false
		});
		const inner = builder.build(data) as string;
		const output = `<?xml version="1.0" encoding="UTF-8"?>\n<${options.rootElement}>\n${inner}</${options.rootElement}>`;
		return { success: true, output };
	} catch (err) {
		return {
			success: false,
			error: { message: (err as Error).message ?? 'Failed to convert JSON to XML' }
		};
	}
}
