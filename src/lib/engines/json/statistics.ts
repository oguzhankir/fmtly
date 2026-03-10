import type { JSONStats } from './types.js';

export function computeJSONStats(data: unknown): JSONStats {
	const stats: JSONStats = {
		keyCount: 0,
		valueCount: 0,
		maxDepth: 0,
		nodeCount: 0,
		types: {
			strings: 0,
			numbers: 0,
			booleans: 0,
			nulls: 0,
			arrays: 0,
			objects: 0
		},
		arrayLengths: [],
		totalStringLength: 0
	};

	walk(data, stats, 0, '');
	return stats;
}

function walk(data: unknown, stats: JSONStats, depth: number, path: string): void {
	stats.nodeCount++;
	if (depth > stats.maxDepth) {
		stats.maxDepth = depth;
	}

	if (data === null) {
		stats.types.nulls++;
		stats.valueCount++;
		return;
	}

	if (Array.isArray(data)) {
		stats.types.arrays++;
		stats.arrayLengths.push({ path: path || '/', length: data.length });
		for (let i = 0; i < data.length; i++) {
			walk(data[i], stats, depth + 1, `${path}[${i}]`);
		}
		return;
	}

	switch (typeof data) {
		case 'string':
			stats.types.strings++;
			stats.valueCount++;
			stats.totalStringLength += data.length;
			break;
		case 'number':
			stats.types.numbers++;
			stats.valueCount++;
			break;
		case 'boolean':
			stats.types.booleans++;
			stats.valueCount++;
			break;
		case 'object': {
			stats.types.objects++;
			const obj = data as Record<string, unknown>;
			const keys = Object.keys(obj);
			stats.keyCount += keys.length;
			for (const key of keys) {
				walk(obj[key], stats, depth + 1, `${path}.${key}`);
			}
			break;
		}
		default:
			stats.valueCount++;
	}
}
