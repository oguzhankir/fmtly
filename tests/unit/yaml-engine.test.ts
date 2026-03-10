import { describe, expect, it } from 'vitest';
import { formatYAML, jsonToYAML, parseYAML, yamlToJSON } from '../../src/lib/engines/yaml/index.js';

describe('parseYAML', () => {
	it('parses valid YAML', () => {
		const result = parseYAML('name: test\nversion: 1');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data).toEqual({ name: 'test', version: 1 });
		}
	});

	it('parses YAML arrays', () => {
		const result = parseYAML('- one\n- two\n- three');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data).toEqual(['one', 'two', 'three']);
		}
	});

	it('parses nested YAML', () => {
		const input = 'server:\n  host: localhost\n  port: 8080';
		const result = parseYAML(input);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data).toEqual({ server: { host: 'localhost', port: 8080 } });
		}
	});

	it('returns error for invalid YAML', () => {
		const result = parseYAML('key: [invalid');
		expect(result.success).toBe(false);
		if (!result.success) {
			expect(result.error.message).toBeTruthy();
		}
	});

	it('handles empty input', () => {
		const result = parseYAML('');
		expect(result.success).toBe(true);
	});
});

describe('formatYAML', () => {
	it('formats valid YAML with consistent indentation', () => {
		const input = 'server:\n    host: localhost\n    port: 8080';
		const result = formatYAML(input);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toContain('server:');
			expect(result.output).toContain('  host: localhost');
			expect(result.output).toContain('  port: 8080');
		}
	});

	it('returns error for invalid YAML', () => {
		const result = formatYAML('key: [invalid');
		expect(result.success).toBe(false);
	});
});

describe('yamlToJSON', () => {
	it('converts YAML to formatted JSON', () => {
		const input = 'name: test\nversion: 1';
		const result = yamlToJSON(input);
		expect(result.success).toBe(true);
		if (result.success) {
			const parsed = JSON.parse(result.output);
			expect(parsed).toEqual({ name: 'test', version: 1 });
		}
	});

	it('converts nested YAML to JSON', () => {
		const input = 'server:\n  host: localhost\n  port: 8080\n  ssl: true';
		const result = yamlToJSON(input);
		expect(result.success).toBe(true);
		if (result.success) {
			const parsed = JSON.parse(result.output);
			expect(parsed.server.host).toBe('localhost');
			expect(parsed.server.port).toBe(8080);
			expect(parsed.server.ssl).toBe(true);
		}
	});

	it('converts YAML arrays to JSON', () => {
		const input = 'items:\n  - one\n  - two\n  - three';
		const result = yamlToJSON(input);
		expect(result.success).toBe(true);
		if (result.success) {
			const parsed = JSON.parse(result.output);
			expect(parsed.items).toEqual(['one', 'two', 'three']);
		}
	});

	it('returns error for invalid YAML', () => {
		const result = yamlToJSON('key: [invalid');
		expect(result.success).toBe(false);
	});
});

describe('jsonToYAML', () => {
	it('converts JSON to YAML', () => {
		const input = '{"name": "test", "version": 1}';
		const result = jsonToYAML(input);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toContain('name: test');
			expect(result.output).toContain('version: 1');
		}
	});

	it('converts nested JSON to YAML', () => {
		const input = '{"server": {"host": "localhost", "port": 8080}}';
		const result = jsonToYAML(input);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toContain('server:');
			expect(result.output).toContain('host: localhost');
			expect(result.output).toContain('port: 8080');
		}
	});

	it('returns error for invalid JSON', () => {
		const result = jsonToYAML('{invalid}');
		expect(result.success).toBe(false);
	});
});

describe('round-trip', () => {
	it('JSON → YAML → JSON produces identical output', () => {
		const original = {
			name: 'test',
			version: 1,
			dependencies: {
				svelte: '5.0.0',
				typescript: '5.6.0'
			},
			scripts: ['dev', 'build', 'test'],
			enabled: true,
			count: null
		};
		const jsonInput = JSON.stringify(original, null, 2);

		const yamlResult = jsonToYAML(jsonInput);
		expect(yamlResult.success).toBe(true);
		if (!yamlResult.success) return;

		const jsonResult = yamlToJSON(yamlResult.output);
		expect(jsonResult.success).toBe(true);
		if (!jsonResult.success) return;

		const roundTripped = JSON.parse(jsonResult.output);
		expect(roundTripped).toEqual(original);
	});

	it('YAML → JSON → YAML produces equivalent data', () => {
		const yamlInput = 'name: test\nversion: 1\nitems:\n  - one\n  - two';
		const jsonResult = yamlToJSON(yamlInput);
		expect(jsonResult.success).toBe(true);
		if (!jsonResult.success) return;

		const yamlResult = jsonToYAML(jsonResult.output);
		expect(yamlResult.success).toBe(true);
		if (!yamlResult.success) return;

		const finalJson = yamlToJSON(yamlResult.output);
		expect(finalJson.success).toBe(true);
		if (!finalJson.success) return;

		expect(JSON.parse(finalJson.output)).toEqual(JSON.parse(jsonResult.output));
	});
});
