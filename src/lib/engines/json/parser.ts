import type { ParseError, ParseResult, SourceMap } from './types.js';

let _jsonSourceMap: typeof import('json-source-map') | undefined;

export async function initParser(): Promise<void> {
	if (!_jsonSourceMap) {
		_jsonSourceMap = await import('json-source-map');
	}
}

const EMPTY_ERROR: ParseError = {
	message: 'Empty input',
	line: 1,
	column: 1,
	position: 0,
	plainLanguageExplanation: 'The input is empty. Paste or type some JSON to get started.'
};

export function parseJSON(input: string): ParseResult {
	if (!input.trim()) {
		return { success: false, error: EMPTY_ERROR };
	}

	if (_jsonSourceMap) {
		try {
			const result = _jsonSourceMap.parse(input);
			return {
				success: true,
				data: result.data,
				sourceMap: result.pointers as unknown as SourceMap
			};
		} catch {
			return { success: false, error: extractParseError(input) };
		}
	}

	try {
		const data = JSON.parse(input);
		return { success: true, data, sourceMap: {} };
	} catch (err) {
		return { success: false, error: extractParseError(input, err) };
	}
}

function extractParseError(input: string, err?: unknown): ParseError {
	const message = err instanceof Error ? err.message : 'Invalid JSON';

	const positionMatch = message.match(/position\s+(\d+)/i);
	const lineColMatch = message.match(/line\s+(\d+)\s+column\s+(\d+)/i);

	let line = 1;
	let column = 1;
	let position = 0;

	if (positionMatch) {
		position = Number.parseInt(positionMatch[1], 10);
		const upToPos = input.slice(0, position);
		const lines = upToPos.split('\n');
		line = lines.length;
		column = (lines[lines.length - 1]?.length ?? 0) + 1;
	} else if (lineColMatch) {
		line = Number.parseInt(lineColMatch[1], 10);
		column = Number.parseInt(lineColMatch[2], 10);
		const lines = input.split('\n');
		position = 0;
		for (let i = 0; i < line - 1 && i < lines.length; i++) {
			position += lines[i].length + 1;
		}
		position += column - 1;
	} else {
		try {
			JSON.parse(input);
		} catch (parseErr) {
			const msg = parseErr instanceof Error ? parseErr.message : '';
			const pm = msg.match(/position\s+(\d+)/i);
			if (pm) {
				position = Number.parseInt(pm[1], 10);
				const upToPos = input.slice(0, position);
				const lines = upToPos.split('\n');
				line = lines.length;
				column = (lines[lines.length - 1]?.length ?? 0) + 1;
			}
		}
	}

	const plainLanguageExplanation = generateExplanation(message, input, position);

	return { message, line, column, position, plainLanguageExplanation };
}

function generateExplanation(message: string, input: string, position: number): string {
	const char = position < input.length ? input[position] : 'end of input';
	const context = input.slice(Math.max(0, position - 10), position + 10);

	if (/unexpected token/i.test(message)) {
		if (char === "'") {
			return `Found a single quote at line position. JSON requires double quotes for strings. Replace ' with ".`;
		}
		if (char === ',') {
			return 'Found a trailing comma. JSON does not allow trailing commas after the last item in an array or object.';
		}
		if (/undefined/i.test(context)) {
			return `Found "undefined" which is not a valid JSON value. Use null instead.`;
		}
		return `Unexpected character "${char}" found. Check for typos, missing quotes, or extra characters near: …${context}…`;
	}

	if (/unexpected end/i.test(message)) {
		return `The JSON is incomplete. You may be missing a closing bracket ], brace }, or quote ".`;
	}

	if (/unterminated string/i.test(message)) {
		return `A string is missing its closing double quote. Check for line breaks inside strings or missing " characters.`;
	}

	if (/expected/i.test(message)) {
		return `${message}. Check for missing colons, commas, or brackets near position ${position}.`;
	}

	return `Syntax error: ${message}. Check the content near: …${context}…`;
}

export { extractParseError };
