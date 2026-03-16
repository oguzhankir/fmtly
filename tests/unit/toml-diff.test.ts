import { describe, expect, it } from 'vitest';
import type { DiffOptions } from '../../src/lib/engines/diff/json-diff.js';
import { computeTOMLDiff } from '../../src/lib/engines/diff/toml-diff.js';

const defaultOptions: DiffOptions = {
	ignoreArrayOrder: false,
	ignoreWhitespace: true,
	ignoreKeys: [],
	caseSensitive: true
};

describe('computeTOMLDiff', () => {
	it('detects modified TOML values', async () => {
		const left = 'title = "fmtly"\n[server]\nport = 8080';
		const right = 'title = "fmtly"\n[server]\nport = 9090';
		const result = await computeTOMLDiff(left, right, defaultOptions);

		expect(result.error).toBeNull();
		const modified = result.entries.filter((entry) => entry.type === 'modified');
		expect(modified).toHaveLength(1);
		expect(modified[0]?.path).toBe('server.port');
	});

	it('detects added TOML keys', async () => {
		const left = 'title = "fmtly"';
		const right = 'title = "fmtly"\nversion = "1.0.0"';
		const result = await computeTOMLDiff(left, right, defaultOptions);

		expect(result.error).toBeNull();
		const added = result.entries.filter((entry) => entry.type === 'added');
		expect(added).toHaveLength(1);
		expect(added[0]?.path).toBe('version');
	});

	it('returns an error for invalid TOML input', async () => {
		const result = await computeTOMLDiff('title = "fmtly', 'title = "fmtly"', defaultOptions);

		expect(result.error).toBeTruthy();
		expect(result.entries).toHaveLength(0);
	});
});
