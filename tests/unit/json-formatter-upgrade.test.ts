import { describe, expect, it } from 'vitest';
import { format } from '../../src/lib/engines/json/json.engine.js';

describe('advanced json formatter', () => {
	it('sorts keys and removes empty values', () => {
		const result = format('{"z":null,"b":"","a":{"y":[],"x":1}}', {
			indent: 2,
			sortKeys: true,
			sortOrder: 'asc',
			trailingCommas: false,
			quoteStyle: 'double',
			collapseDepth: null,
			removeNulls: true,
			removeEmptyStrings: true,
			removeEmptyArrays: true,
			removeEmptyObjects: true
		});

		expect(result.formatted).toBe('{\n  "a": {\n    "x": 1\n  }\n}');
		expect(result.stats.keys).toBe(2);
		expect(result.stats.objects).toBe(2);
		expect(result.warnings).toHaveLength(0);
	});

	it('supports JSON5 style output warnings', () => {
		const result = format('{"name":"fmtly","items":[1,2]}', {
			indent: 2,
			sortKeys: false,
			sortOrder: 'asc',
			trailingCommas: true,
			quoteStyle: 'single',
			collapseDepth: null,
			removeNulls: false,
			removeEmptyStrings: false,
			removeEmptyArrays: false,
			removeEmptyObjects: false
		});

		expect(result.formatted).toContain("'name': 'fmtly'");
		expect(result.formatted).toContain('[\n    1,\n    2,\n  ]');
		expect(result.warnings).toContain('Single quotes produce JSON5-style output, not strict JSON.');
		expect(result.warnings).toContain(
			'Trailing commas produce JSON5-style output, not strict JSON.'
		);
	});

	it('collapses deeper structures to inline output', () => {
		const result = format('{"user":{"profile":{"name":"Ada","active":true}}}', {
			indent: 2,
			sortKeys: false,
			sortOrder: 'asc',
			trailingCommas: false,
			quoteStyle: 'double',
			collapseDepth: 1,
			removeNulls: false,
			removeEmptyStrings: false,
			removeEmptyArrays: false,
			removeEmptyObjects: false
		});

		expect(result.formatted).toContain('"user": { "profile": { "name": "Ada", "active": true } }');
		expect(result.stats.maxDepth).toBe(3);
	});
});
