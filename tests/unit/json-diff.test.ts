import { describe, expect, it } from 'vitest';
import { computeJSONDiff, toJSONPatch } from '../../src/lib/engines/diff/json-diff.js';
import type { DiffOptions } from '../../src/lib/engines/diff/json-diff.js';

const defaultOptions: DiffOptions = { ignoreArrayOrder: false, ignoreWhitespace: true };

describe('computeJSONDiff', () => {
	it('identical JSON produces zero differences', () => {
		const json = '{"a": 1, "b": 2}';
		const result = computeJSONDiff(json, json, defaultOptions);
		expect(result.error).toBeNull();
		const diffs = result.entries.filter((e) => e.type !== 'unchanged');
		expect(diffs).toHaveLength(0);
	});

	it('identical JSON with different key order produces zero differences', () => {
		const left = '{"b": 2, "a": 1}';
		const right = '{"a": 1, "b": 2}';
		const result = computeJSONDiff(left, right, defaultOptions);
		expect(result.error).toBeNull();
		const diffs = result.entries.filter((e) => e.type !== 'unchanged');
		expect(diffs).toHaveLength(0);
	});

	it('detects added key', () => {
		const left = '{"a": 1}';
		const right = '{"a": 1, "b": 2}';
		const result = computeJSONDiff(left, right, defaultOptions);
		expect(result.error).toBeNull();
		const added = result.entries.filter((e) => e.type === 'added');
		expect(added).toHaveLength(1);
		expect(added[0].path).toBe('b');
		expect(added[0].rightValue).toBe(2);
	});

	it('detects removed key', () => {
		const left = '{"a": 1, "b": 2}';
		const right = '{"a": 1}';
		const result = computeJSONDiff(left, right, defaultOptions);
		expect(result.error).toBeNull();
		const removed = result.entries.filter((e) => e.type === 'removed');
		expect(removed).toHaveLength(1);
		expect(removed[0].path).toBe('b');
		expect(removed[0].leftValue).toBe(2);
	});

	it('detects modified value', () => {
		const left = '{"a": 1}';
		const right = '{"a": 2}';
		const result = computeJSONDiff(left, right, defaultOptions);
		expect(result.error).toBeNull();
		const modified = result.entries.filter((e) => e.type === 'modified');
		expect(modified).toHaveLength(1);
		expect(modified[0].path).toBe('a');
		expect(modified[0].leftValue).toBe(1);
		expect(modified[0].rightValue).toBe(2);
	});

	it('detects nested difference', () => {
		const left = '{"a": {"b": {"c": 1}}}';
		const right = '{"a": {"b": {"c": 2}}}';
		const result = computeJSONDiff(left, right, defaultOptions);
		expect(result.error).toBeNull();
		const modified = result.entries.filter((e) => e.type === 'modified');
		expect(modified).toHaveLength(1);
		expect(modified[0].path).toBe('a.b.c');
	});

	it('detects array element changes', () => {
		const left = '{"arr": [1, 2, 3]}';
		const right = '{"arr": [1, 2, 4]}';
		const result = computeJSONDiff(left, right, defaultOptions);
		expect(result.error).toBeNull();
		const modified = result.entries.filter((e) => e.type === 'modified');
		expect(modified).toHaveLength(1);
		expect(modified[0].path).toBe('arr[2]');
	});

	it('detects added array elements', () => {
		const left = '{"arr": [1]}';
		const right = '{"arr": [1, 2]}';
		const result = computeJSONDiff(left, right, defaultOptions);
		const added = result.entries.filter((e) => e.type === 'added');
		expect(added).toHaveLength(1);
		expect(added[0].path).toBe('arr[1]');
	});

	it('ignores array order when option is set', () => {
		const left = '{"arr": [1, 2, 3]}';
		const right = '{"arr": [3, 1, 2]}';
		const result = computeJSONDiff(left, right, { ...defaultOptions, ignoreArrayOrder: true });
		expect(result.error).toBeNull();
		const diffs = result.entries.filter((e) => e.type !== 'unchanged');
		expect(diffs).toHaveLength(0);
	});

	it('reports array order differences when option is off', () => {
		const left = '{"arr": [1, 2, 3]}';
		const right = '{"arr": [3, 1, 2]}';
		const result = computeJSONDiff(left, right, defaultOptions);
		const diffs = result.entries.filter((e) => e.type !== 'unchanged');
		expect(diffs.length).toBeGreaterThan(0);
	});

	it('handles {"a":1} vs {"a":2,"b":3} correctly', () => {
		const left = '{"a":1}';
		const right = '{"a":2,"b":3}';
		const result = computeJSONDiff(left, right, defaultOptions);
		expect(result.error).toBeNull();
		const diffs = result.entries.filter((e) => e.type !== 'unchanged');
		expect(diffs).toHaveLength(2);
		const modified = diffs.find((e) => e.type === 'modified');
		expect(modified).toBeDefined();
		expect(modified?.path).toBe('a');
		expect(modified?.leftValue).toBe(1);
		expect(modified?.rightValue).toBe(2);
		const added = diffs.find((e) => e.type === 'added');
		expect(added).toBeDefined();
		expect(added?.path).toBe('b');
		expect(added?.rightValue).toBe(3);
	});

	it('returns error for invalid left JSON', () => {
		const result = computeJSONDiff('{invalid}', '{"a":1}', defaultOptions);
		expect(result.error).toBeTruthy();
		expect(result.entries).toHaveLength(0);
	});

	it('returns error for invalid right JSON', () => {
		const result = computeJSONDiff('{"a":1}', '{invalid}', defaultOptions);
		expect(result.error).toBeTruthy();
		expect(result.entries).toHaveLength(0);
	});

	it('compares primitive roots', () => {
		const result = computeJSONDiff('"hello"', '"world"', defaultOptions);
		expect(result.error).toBeNull();
		const modified = result.entries.filter((e) => e.type === 'modified');
		expect(modified).toHaveLength(1);
	});

	it('handles null values', () => {
		const left = '{"a": null}';
		const right = '{"a": 1}';
		const result = computeJSONDiff(left, right, defaultOptions);
		const modified = result.entries.filter((e) => e.type === 'modified');
		expect(modified).toHaveLength(1);
		expect(modified[0].leftValue).toBeNull();
	});

	it('handles type changes', () => {
		const left = '{"a": "1"}';
		const right = '{"a": 1}';
		const result = computeJSONDiff(left, right, defaultOptions);
		const modified = result.entries.filter((e) => e.type === 'modified');
		expect(modified).toHaveLength(1);
	});
});

describe('toJSONPatch', () => {
	it('generates add operations', () => {
		const result = computeJSONDiff('{}', '{"a": 1}', defaultOptions);
		const patch = toJSONPatch(result.entries);
		expect(patch).toHaveLength(1);
		expect(patch[0]).toEqual({ op: 'add', path: '/a', value: 1 });
	});

	it('generates remove operations', () => {
		const result = computeJSONDiff('{"a": 1}', '{}', defaultOptions);
		const patch = toJSONPatch(result.entries);
		expect(patch).toHaveLength(1);
		expect(patch[0]).toEqual({ op: 'remove', path: '/a' });
	});

	it('generates replace operations', () => {
		const result = computeJSONDiff('{"a": 1}', '{"a": 2}', defaultOptions);
		const patch = toJSONPatch(result.entries);
		expect(patch).toHaveLength(1);
		expect(patch[0]).toEqual({ op: 'replace', path: '/a', value: 2 });
	});

	it('excludes unchanged entries', () => {
		const result = computeJSONDiff('{"a": 1, "b": 2}', '{"a": 1, "b": 3}', defaultOptions);
		const patch = toJSONPatch(result.entries);
		expect(patch).toHaveLength(1);
	});
});
