import { XMLBuilder, XMLParser, XMLValidator } from 'fast-xml-parser';
import type { ConvertResult, FormatResult, ParseResult } from '../types.js';

export type XMLFormatOptions = {
	indent: 2 | 4 | '\t';
};

export type XMLParseError = {
	message: string;
	plainLanguageExplanation: string;
	line?: number;
	column?: number;
};

export type XMLStats = {
	elements: number;
	attributes: number;
	textNodes: number;
	maxDepth: number;
	sizeBytes: number;
};

export function computeXMLStats(xml: string): XMLStats {
	const sizeBytes = new TextEncoder().encode(xml).length;
	let elements = 0;
	let attributes = 0;
	let textNodes = 0;
	let maxDepth = 0;

	try {
		const parser = new XMLParser({
			ignoreAttributes: false,
			attributeNamePrefix: '@_',
			preserveOrder: true,
			trimValues: false
		});
		const parsed = parser.parse(xml) as unknown[];

		function walk(nodes: unknown[], depth: number): void {
			if (depth > maxDepth) maxDepth = depth;
			if (!Array.isArray(nodes)) return;
			for (const node of nodes) {
				if (typeof node !== 'object' || node === null) {
					textNodes++;
					continue;
				}
				const obj = node as Record<string, unknown>;
				for (const key of Object.keys(obj)) {
					if (key === ':@') {
						const attrs = obj[key] as Record<string, unknown>;
						attributes += Object.keys(attrs).length;
					} else if (key === '#text') {
						textNodes++;
					} else {
						elements++;
						const children = obj[key];
						if (Array.isArray(children)) {
							walk(children, depth + 1);
						}
					}
				}
			}
		}

		walk(parsed, 0);
	} catch {
		// Return partial stats on error
	}

	return { elements, attributes, textNodes, maxDepth, sizeBytes };
}

function toPlainLanguage(raw: string): string {
	const msg = raw.toLowerCase();
	if (msg.includes('unclosed') || msg.includes('not closed') || msg.includes('closing tag'))
		return 'A tag was opened but never closed. Make sure every opening tag has a matching closing tag.';
	if (msg.includes('unexpected end') || msg.includes('premature end'))
		return 'The document ended unexpectedly. There may be a missing closing tag at the end.';
	if (msg.includes('mismatched') || msg.includes('mismatch'))
		return 'An opening tag and its closing tag have different names. Tag names must match exactly.';
	if (msg.includes('attribute') && msg.includes('quot'))
		return 'An attribute value must be wrapped in quotes. Example: id="value" not id=value.';
	if (msg.includes('duplicate attribute'))
		return 'An element has the same attribute listed more than once. Each attribute name must be unique within an element.';
	if (msg.includes('invalid character') || msg.includes('illegal character'))
		return 'The document contains a character that is not allowed in XML. Special characters like & and < must be escaped as &amp; and &lt;.';
	if (msg.includes('root') && msg.includes('element'))
		return 'XML requires exactly one root element. Either no root element was found or there are multiple top-level elements.';
	if (msg.includes('processing instruction') || msg.includes('<?'))
		return 'There is a problem with an XML processing instruction (e.g. <?xml …?>). Check that it is correctly formed.';
	if (msg.includes('cdata'))
		return 'A CDATA section is malformed. CDATA sections must end with ]]>.';
	if (msg.includes('comment'))
		return 'An XML comment is malformed. Comments must start with <!-- and end with -->.';
	if (msg.includes('namespace') || msg.includes('prefix'))
		return 'A namespace prefix is used without being declared. Declare the namespace with xmlns:prefix="uri" on the element or an ancestor.';
	return raw;
}

export function parseXML(input: string): ParseResult {
	const validation = XMLValidator.validate(input);
	if (validation !== true) {
		const raw = validation.err?.msg ?? 'Invalid XML';
		return {
			success: false,
			error: {
				message: raw,
				plainLanguageExplanation: toPlainLanguage(raw),
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
		const raw = (err as Error).message ?? 'Failed to parse XML';
		return {
			success: false,
			error: { message: raw, plainLanguageExplanation: toPlainLanguage(raw) }
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
