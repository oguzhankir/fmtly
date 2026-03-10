import { parseJSON } from './parser.js';
import type { FormatOptions, FormatResult } from './types.js';

export function formatJSON(input: string, options: FormatOptions): FormatResult {
	const parsed = parseJSON(input);

	if (!parsed.success) {
		return { success: false, error: parsed.error };
	}

	const indent = options.indent === '\t' ? '\t' : options.indent;
	const output = JSON.stringify(parsed.data, null, indent);

	return { success: true, output };
}

export function minifyJSON(input: string): FormatResult {
	const parsed = parseJSON(input);

	if (!parsed.success) {
		return { success: false, error: parsed.error };
	}

	const output = JSON.stringify(parsed.data);

	return { success: true, output };
}
