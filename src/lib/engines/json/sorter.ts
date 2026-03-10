import { parseJSON } from './parser.js';
import type { FormatResult } from './types.js';

export function sortJSONKeys(input: string, direction: 'asc' | 'desc'): FormatResult {
	const parsed = parseJSON(input);

	if (!parsed.success) {
		return { success: false, error: parsed.error };
	}

	const sorted = sortRecursive(parsed.data, direction);
	const output = JSON.stringify(sorted, null, 2);

	return { success: true, output };
}

function sortRecursive(data: unknown, direction: 'asc' | 'desc'): unknown {
	if (data === null || data === undefined) return data;

	if (Array.isArray(data)) {
		return data.map((item) => sortRecursive(item, direction));
	}

	if (typeof data === 'object') {
		const obj = data as Record<string, unknown>;
		const keys = Object.keys(obj).sort((a, b) => {
			const cmp = a.localeCompare(b);
			return direction === 'asc' ? cmp : -cmp;
		});

		const sorted: Record<string, unknown> = {};
		for (const key of keys) {
			sorted[key] = sortRecursive(obj[key], direction);
		}
		return sorted;
	}

	return data;
}
