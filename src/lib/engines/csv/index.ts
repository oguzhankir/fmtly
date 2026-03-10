import Papa from 'papaparse';
import type { ConvertResult, ParseResult } from '../types.js';

export type CSVParseOptions = {
	headers: boolean;
};

export function parseCSV(input: string): ParseResult {
	try {
		const result = Papa.parse(input, {
			header: false,
			skipEmptyLines: true
		});
		if (result.errors.length > 0) {
			const first = result.errors[0];
			return {
				success: false,
				error: {
					message: first.message,
					line: first.row !== undefined ? first.row + 1 : undefined
				}
			};
		}
		return { success: true, data: result.data };
	} catch (err) {
		return {
			success: false,
			error: { message: (err as Error).message ?? 'Invalid CSV' }
		};
	}
}

export function csvToJSON(
	input: string,
	options: CSVParseOptions = { headers: true }
): ConvertResult {
	try {
		const result = Papa.parse(input, {
			header: options.headers,
			skipEmptyLines: true,
			dynamicTyping: true
		});
		if (result.errors.length > 0) {
			const first = result.errors[0];
			return {
				success: false,
				error: {
					message: first.message,
					line: first.row !== undefined ? first.row + 1 : undefined
				}
			};
		}
		const output = JSON.stringify(result.data, null, 2);
		return { success: true, output };
	} catch (err) {
		return {
			success: false,
			error: { message: (err as Error).message ?? 'Invalid CSV' }
		};
	}
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

export function jsonToCSV(input: string): ConvertResult {
	try {
		const data = JSON.parse(input);
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
		const output = Papa.unparse(flattened);
		return { success: true, output };
	} catch (err) {
		return {
			success: false,
			error: { message: (err as Error).message ?? 'Invalid JSON' }
		};
	}
}
