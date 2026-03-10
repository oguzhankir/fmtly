import { describe, expect, it } from 'vitest';
import { formatJSON, minifyJSON } from '../../src/lib/engines/json/formatter.js';
import { parseJSON } from '../../src/lib/engines/json/parser.js';
import { repairJSON } from '../../src/lib/engines/json/repairer.js';
import { sortJSONKeys } from '../../src/lib/engines/json/sorter.js';
import { computeJSONStats } from '../../src/lib/engines/json/statistics.js';
import { buildJSONTree } from '../../src/lib/engines/json/tree.js';
import { validateJSON } from '../../src/lib/engines/json/validator.js';

// ─── parseJSON ──────────────────────────────────────────────────────

describe('parseJSON', () => {
	it('parses valid JSON object', () => {
		const result = parseJSON('{"a": 1}');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data).toEqual({ a: 1 });
		}
	});

	it('parses valid JSON array', () => {
		const result = parseJSON('[1, 2, 3]');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data).toEqual([1, 2, 3]);
		}
	});

	it('parses valid JSON with all value types', () => {
		const input = '{"s":"hello","n":42,"f":3.14,"b":true,"nl":null,"a":[1],"o":{}}';
		const result = parseJSON(input);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data).toEqual({
				s: 'hello',
				n: 42,
				f: 3.14,
				b: true,
				nl: null,
				a: [1],
				o: {}
			});
		}
	});

	it('parses JSON with unicode characters', () => {
		const result = parseJSON('{"emoji": "🎉", "cjk": "日本語"}');
		expect(result.success).toBe(true);
		if (result.success) {
			const data = result.data as Record<string, string>;
			expect(data.emoji).toBe('🎉');
			expect(data.cjk).toBe('日本語');
		}
	});

	it('parses deeply nested JSON', () => {
		const input = '{"a":{"b":{"c":{"d":{"e":1}}}}}';
		const result = parseJSON(input);
		expect(result.success).toBe(true);
		if (result.success) {
			const data = result.data as Record<
				string,
				Record<string, Record<string, Record<string, Record<string, number>>>>
			>;
			expect(data.a.b.c.d.e).toBe(1);
		}
	});

	it('parses large arrays', () => {
		const arr = Array.from({ length: 1000 }, (_, i) => i);
		const result = parseJSON(JSON.stringify(arr));
		expect(result.success).toBe(true);
		if (result.success) {
			expect((result.data as number[]).length).toBe(1000);
		}
	});

	it('returns error for empty input', () => {
		const result = parseJSON('');
		expect(result.success).toBe(false);
		if (!result.success) {
			expect(result.error.message).toBe('Empty input');
		}
	});

	it('returns error for whitespace-only input', () => {
		const result = parseJSON('   \n\t  ');
		expect(result.success).toBe(false);
	});

	it('returns error for invalid JSON — missing quote', () => {
		const result = parseJSON('{"key: "value"}');
		expect(result.success).toBe(false);
		if (!result.success) {
			expect(result.error.line).toBeGreaterThanOrEqual(1);
			expect(result.error.column).toBeGreaterThanOrEqual(1);
			expect(result.error.plainLanguageExplanation).toBeTruthy();
		}
	});

	it('returns error for trailing comma', () => {
		const result = parseJSON('{"a": 1,}');
		expect(result.success).toBe(false);
		if (!result.success) {
			expect(result.error.plainLanguageExplanation).toBeTruthy();
		}
	});

	it('returns error for single quotes', () => {
		const result = parseJSON("{'key': 'value'}");
		expect(result.success).toBe(false);
	});

	it('returns error for undefined value', () => {
		const result = parseJSON('{"a": undefined}');
		expect(result.success).toBe(false);
	});

	it('returns error for incomplete JSON', () => {
		const result = parseJSON('{"a": [1, 2');
		expect(result.success).toBe(false);
		if (!result.success) {
			expect(result.error.plainLanguageExplanation).toBeTruthy();
		}
	});

	it('parses primitive values: string', () => {
		const result = parseJSON('"hello"');
		expect(result.success).toBe(true);
		if (result.success) expect(result.data).toBe('hello');
	});

	it('parses primitive values: number', () => {
		const result = parseJSON('42');
		expect(result.success).toBe(true);
		if (result.success) expect(result.data).toBe(42);
	});

	it('parses primitive values: boolean', () => {
		const result = parseJSON('true');
		expect(result.success).toBe(true);
		if (result.success) expect(result.data).toBe(true);
	});

	it('parses primitive values: null', () => {
		const result = parseJSON('null');
		expect(result.success).toBe(true);
		if (result.success) expect(result.data).toBe(null);
	});
});

// ─── formatJSON ─────────────────────────────────────────────────────

describe('formatJSON', () => {
	it('formats with 2-space indent', () => {
		const result = formatJSON('{"a":1,"b":2}', { indent: 2 });
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toBe('{\n  "a": 1,\n  "b": 2\n}');
		}
	});

	it('formats with 4-space indent', () => {
		const result = formatJSON('{"a":1}', { indent: 4 });
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toContain('    "a": 1');
		}
	});

	it('formats with tab indent', () => {
		const result = formatJSON('{"a":1}', { indent: '\t' });
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toContain('\t"a": 1');
		}
	});

	it('returns error for invalid JSON', () => {
		const result = formatJSON('{invalid}', { indent: 2 });
		expect(result.success).toBe(false);
	});

	it('returns error for empty input', () => {
		const result = formatJSON('', { indent: 2 });
		expect(result.success).toBe(false);
	});

	it('handles nested objects correctly', () => {
		const result = formatJSON('{"a":{"b":{"c":1}}}', { indent: 2 });
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output.split('\n').length).toBeGreaterThan(3);
		}
	});

	it('handles arrays correctly', () => {
		const result = formatJSON('[1,2,3]', { indent: 2 });
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toBe('[\n  1,\n  2,\n  3\n]');
		}
	});
});

// ─── minifyJSON ─────────────────────────────────────────────────────

describe('minifyJSON', () => {
	it('minifies formatted JSON', () => {
		const result = minifyJSON('{\n  "a": 1,\n  "b": 2\n}');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toBe('{"a":1,"b":2}');
		}
	});

	it('returns error for invalid JSON', () => {
		const result = minifyJSON('{bad}');
		expect(result.success).toBe(false);
	});

	it('returns error for empty input', () => {
		const result = minifyJSON('');
		expect(result.success).toBe(false);
	});

	it('minifies arrays', () => {
		const result = minifyJSON('[\n  1,\n  2,\n  3\n]');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toBe('[1,2,3]');
		}
	});
});

// ─── validateJSON ───────────────────────────────────────────────────

describe('validateJSON', () => {
	it('returns valid for correct JSON', () => {
		const result = validateJSON('{"a": 1}');
		expect(result.valid).toBe(true);
		expect(result.error).toBeUndefined();
	});

	it('returns invalid with error for bad JSON', () => {
		const result = validateJSON('{bad}');
		expect(result.valid).toBe(false);
		expect(result.error).toBeDefined();
		expect(result.error?.line).toBeGreaterThanOrEqual(1);
	});

	it('returns invalid for empty input without error', () => {
		const result = validateJSON('');
		expect(result.valid).toBe(false);
		expect(result.error).toBeUndefined();
	});

	it('validates primitive types', () => {
		expect(validateJSON('"hello"').valid).toBe(true);
		expect(validateJSON('42').valid).toBe(true);
		expect(validateJSON('true').valid).toBe(true);
		expect(validateJSON('null').valid).toBe(true);
	});
});

// ─── repairJSON ─────────────────────────────────────────────────────

describe('repairJSON', () => {
	it('repairs single quotes', () => {
		const result = repairJSON("{'a': 'b'}");
		expect(result.success).toBe(true);
		if (result.success) {
			const parsed = JSON.parse(result.output);
			expect(parsed.a).toBe('b');
			expect(result.changes.length).toBeGreaterThan(0);
		}
	});

	it('repairs trailing commas', () => {
		const result = repairJSON('{"a": 1, "b": 2,}');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(() => JSON.parse(result.output)).not.toThrow();
		}
	});

	it('returns valid JSON unchanged', () => {
		const result = repairJSON('{"a": 1}');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(JSON.parse(result.output)).toEqual({ a: 1 });
		}
	});

	it('returns error for empty input', () => {
		const result = repairJSON('');
		expect(result.success).toBe(false);
	});

	it('repairs unquoted keys', () => {
		const result = repairJSON('{a: 1, b: 2}');
		expect(result.success).toBe(true);
		if (result.success) {
			const parsed = JSON.parse(result.output);
			expect(parsed.a).toBe(1);
		}
	});
});

// ─── sortJSONKeys ───────────────────────────────────────────────────

describe('sortJSONKeys', () => {
	it('sorts keys ascending', () => {
		const result = sortJSONKeys('{"c": 3, "a": 1, "b": 2}', 'asc');
		expect(result.success).toBe(true);
		if (result.success) {
			const keys = Object.keys(JSON.parse(result.output));
			expect(keys).toEqual(['a', 'b', 'c']);
		}
	});

	it('sorts keys descending', () => {
		const result = sortJSONKeys('{"a": 1, "c": 3, "b": 2}', 'desc');
		expect(result.success).toBe(true);
		if (result.success) {
			const keys = Object.keys(JSON.parse(result.output));
			expect(keys).toEqual(['c', 'b', 'a']);
		}
	});

	it('sorts nested object keys recursively', () => {
		const result = sortJSONKeys('{"b": {"d": 1, "c": 2}, "a": 3}', 'asc');
		expect(result.success).toBe(true);
		if (result.success) {
			const parsed = JSON.parse(result.output);
			const outerKeys = Object.keys(parsed);
			expect(outerKeys).toEqual(['a', 'b']);
			const innerKeys = Object.keys(parsed.b);
			expect(innerKeys).toEqual(['c', 'd']);
		}
	});

	it('sorts keys inside arrays of objects', () => {
		const result = sortJSONKeys('[{"z": 1, "a": 2}]', 'asc');
		expect(result.success).toBe(true);
		if (result.success) {
			const parsed = JSON.parse(result.output);
			expect(Object.keys(parsed[0])).toEqual(['a', 'z']);
		}
	});

	it('returns error for invalid JSON', () => {
		const result = sortJSONKeys('{bad}', 'asc');
		expect(result.success).toBe(false);
	});

	it('returns error for empty input', () => {
		const result = sortJSONKeys('', 'asc');
		expect(result.success).toBe(false);
	});
});

// ─── computeJSONStats ───────────────────────────────────────────────

describe('computeJSONStats', () => {
	it('computes stats for a simple object', () => {
		const stats = computeJSONStats({ a: 1, b: 'hello', c: true });
		expect(stats.keyCount).toBe(3);
		expect(stats.types.numbers).toBe(1);
		expect(stats.types.strings).toBe(1);
		expect(stats.types.booleans).toBe(1);
		expect(stats.types.objects).toBe(1);
		expect(stats.maxDepth).toBe(1);
	});

	it('computes stats for nested structure', () => {
		const stats = computeJSONStats({ a: { b: { c: 1 } } });
		expect(stats.maxDepth).toBe(3);
		expect(stats.keyCount).toBe(3);
		expect(stats.types.objects).toBe(3);
	});

	it('computes stats for arrays', () => {
		const stats = computeJSONStats([1, 2, 3, 4, 5]);
		expect(stats.types.arrays).toBe(1);
		expect(stats.types.numbers).toBe(5);
		expect(stats.arrayLengths[0].length).toBe(5);
	});

	it('computes stats for null values', () => {
		const stats = computeJSONStats({ a: null, b: null });
		expect(stats.types.nulls).toBe(2);
	});

	it('computes total string length', () => {
		const stats = computeJSONStats({ a: 'hello', b: 'world' });
		expect(stats.totalStringLength).toBe(10);
	});

	it('computes nodeCount', () => {
		const stats = computeJSONStats({ a: 1, b: [2, 3] });
		expect(stats.nodeCount).toBeGreaterThan(0);
	});

	it('handles empty object', () => {
		const stats = computeJSONStats({});
		expect(stats.keyCount).toBe(0);
		expect(stats.types.objects).toBe(1);
		expect(stats.nodeCount).toBe(1);
	});

	it('handles empty array', () => {
		const stats = computeJSONStats([]);
		expect(stats.types.arrays).toBe(1);
		expect(stats.arrayLengths[0].length).toBe(0);
		expect(stats.nodeCount).toBe(1);
	});

	it('handles JSON with all value types', () => {
		const stats = computeJSONStats({
			s: 'str',
			n: 42,
			b: true,
			nl: null,
			a: [1, 2],
			o: { x: 1 }
		});
		expect(stats.types.strings).toBe(1);
		expect(stats.types.numbers).toBe(4);
		expect(stats.types.booleans).toBe(1);
		expect(stats.types.nulls).toBe(1);
		expect(stats.types.arrays).toBe(1);
		expect(stats.types.objects).toBe(2);
	});
});

// ─── buildJSONTree ──────────────────────────────────────────────────

describe('buildJSONTree', () => {
	it('builds tree for simple object', () => {
		const tree = buildJSONTree({ a: 1, b: 'hello' });
		expect(tree.length).toBe(1);
		expect(tree[0].type).toBe('object');
		expect(tree[0].children.length).toBe(2);
	});

	it('builds tree for array', () => {
		const tree = buildJSONTree([1, 2, 3]);
		expect(tree[0].type).toBe('array');
		expect(tree[0].children.length).toBe(3);
		expect(tree[0].children[0].type).toBe('number');
	});

	it('builds tree with correct depths', () => {
		const tree = buildJSONTree({ a: { b: 1 } });
		expect(tree[0].depth).toBe(0);
		expect(tree[0].children[0].depth).toBe(1);
		expect(tree[0].children[0].children[0].depth).toBe(2);
	});

	it('assigns correct types', () => {
		const tree = buildJSONTree({
			s: 'hello',
			n: 42,
			b: true,
			nl: null,
			a: [],
			o: {}
		});
		const types = tree[0].children.map((c) => c.type);
		expect(types).toContain('string');
		expect(types).toContain('number');
		expect(types).toContain('boolean');
		expect(types).toContain('null');
		expect(types).toContain('array');
		expect(types).toContain('object');
	});

	it('assigns unique ids', () => {
		const tree = buildJSONTree({ a: 1, b: 2, c: { d: 3 } });
		const ids: string[] = [];
		function collectIds(nodes: typeof tree): void {
			for (const node of nodes) {
				ids.push(node.id);
				collectIds(node.children);
			}
		}
		collectIds(tree);
		expect(new Set(ids).size).toBe(ids.length);
	});

	it('assigns correct keys', () => {
		const tree = buildJSONTree({ foo: 1, bar: 2 });
		const keys = tree[0].children.map((c) => c.key);
		expect(keys).toContain('foo');
		expect(keys).toContain('bar');
	});

	it('handles null value', () => {
		const tree = buildJSONTree(null);
		expect(tree[0].type).toBe('null');
		expect(tree[0].children.length).toBe(0);
	});

	it('handles primitive root', () => {
		const tree = buildJSONTree(42);
		expect(tree[0].type).toBe('number');
		expect(tree[0].value).toBe(42);
	});

	it('handles deeply nested structure', () => {
		const data = { a: { b: { c: { d: { e: 'deep' } } } } };
		const tree = buildJSONTree(data);
		let node = tree[0];
		for (let i = 0; i < 5; i++) {
			expect(node.children.length).toBeGreaterThan(0);
			node = node.children[0];
		}
		expect(node.type).toBe('string');
		expect(node.value).toBe('deep');
	});
});
