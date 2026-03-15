import type { ConvertResult, ParseResult } from '../types.js';

export type CSVParseOptions = {
	headers: boolean;
	delimiter?: string;
	skipEmptyLines?: boolean;
	trimCells?: boolean;
};

export type CSVReadOptions = {
	delimiter?: string;
	skipEmptyLines?: boolean;
	trimCells?: boolean;
};

type PapaParseModule = typeof import('papaparse');

async function loadPapaParse(): Promise<PapaParseModule> {
	return await import('papaparse');
}

function toError(message: string, row?: number): ParseResult | ConvertResult {
	return {
		success: false,
		error: {
			message,
			line: row !== undefined ? row + 1 : undefined
		}
	};
}

function normalizeRow(row: unknown, trimCells: boolean): unknown {
	if (!trimCells || !Array.isArray(row)) return row;
	return row.map((value) => (typeof value === 'string' ? value.trim() : value));
}

function normalizeRows(data: unknown, trimCells: boolean): unknown {
	if (!trimCells || !Array.isArray(data)) return data;
	return data.map((row) => normalizeRow(row, trimCells));
}

export async function parseCSV(input: string, options: CSVReadOptions = {}): Promise<ParseResult> {
	try {
		const Papa = await loadPapaParse();
		const result = Papa.parse(input, {
			header: false,
			skipEmptyLines: options.skipEmptyLines ?? true,
			delimiter: options.delimiter
		});
		if (result.errors.length > 0) {
			const first = result.errors[0];
			return toError(first.message, first.row) as ParseResult;
		}
		return { success: true, data: normalizeRows(result.data, options.trimCells ?? false) };
	} catch (err) {
		return toError((err as Error).message ?? 'Invalid CSV') as ParseResult;
	}
}

export async function csvToJSON(
	input: string,
	options: CSVParseOptions = { headers: true }
): Promise<ConvertResult> {
	try {
		const Papa = await loadPapaParse();
		const result = Papa.parse(input, {
			header: options.headers,
			skipEmptyLines: options.skipEmptyLines ?? true,
			delimiter: options.delimiter,
			dynamicTyping: true
		});
		if (result.errors.length > 0) {
			const first = result.errors[0];
			return toError(first.message, first.row) as ConvertResult;
		}
		const data = options.trimCells ? trimParsedData(result.data) : result.data;
		return { success: true, output: JSON.stringify(data, null, 2) };
	} catch (err) {
		return toError((err as Error).message ?? 'Invalid CSV') as ConvertResult;
	}
}

function trimParsedData(data: unknown): unknown {
	if (!Array.isArray(data)) return data;
	return data.map((row) => {
		if (Array.isArray(row)) {
			return row.map((value) => (typeof value === 'string' ? value.trim() : value));
		}
		if (row !== null && typeof row === 'object') {
			return Object.fromEntries(
				Object.entries(row as Record<string, unknown>).map(([key, value]) => [
					key,
					typeof value === 'string' ? value.trim() : value
				])
			);
		}
		return row;
	});
}

function flattenObject(obj: Record<string, unknown>, prefix = ''): Record<string, unknown> {
	const result: Record<string, unknown> = {};
	for (const key of Object.keys(obj)) {
		const fullKey = prefix ? `${prefix}.${key}` : key;
		const value = obj[key];
		if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
			Object.assign(result, flattenObject(value as Record<string, unknown>, fullKey));
		} else {
			result[fullKey] = value;
		}
	}
	return result;
}

export async function jsonToCSV(input: string): Promise<ConvertResult> {
	try {
		const Papa = await loadPapaParse();
		const data = JSON.parse(input) as unknown;
		if (!Array.isArray(data)) {
			return {
				success: false,
				error: { message: 'JSON input must be an array of objects to convert to CSV' }
			};
		}
		const flattened = data.map((item) => {
			if (item !== null && typeof item === 'object' && !Array.isArray(item)) {
				return flattenObject(item as Record<string, unknown>);
			}
			return item as Record<string, unknown>;
		});
		return { success: true, output: Papa.unparse(flattened) };
	} catch (err) {
		return {
			success: false,
			error: { message: (err as Error).message ?? 'Invalid JSON' }
		};
	}
}
