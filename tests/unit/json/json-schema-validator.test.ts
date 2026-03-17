import { describe, expect, it } from 'vitest';
import { validateJsonSchema } from '../../../src/lib/engines/json/schemaValidator.js';

describe('validateJsonSchema', () => {
	it('validates data with a Draft-07 schema', async () => {
		const json = '{"id": 1, "status": "active"}';
		const schema = JSON.stringify({
			$schema: 'http://json-schema.org/draft-07/schema#',
			type: 'object',
			required: ['id', 'status'],
			properties: {
				id: { type: 'integer' },
				status: { enum: ['active', 'inactive'] }
			}
		});

		const result = await validateJsonSchema(json, schema);
		expect(result.success).toBe(true);
		if (!result.success) return;
		expect(result.valid).toBe(true);
		expect(result.issues).toEqual([]);
	});

	it('validates data with a Draft 2020-12 schema', async () => {
		const json = '{"meta": {"tags": ["a", "b"]}}';
		const schema = JSON.stringify({
			$schema: 'https://json-schema.org/draft/2020-12/schema',
			type: 'object',
			required: ['meta'],
			properties: {
				meta: {
					type: 'object',
					required: ['tags'],
					properties: {
						tags: {
							type: 'array',
							items: { type: 'string' }
						}
					}
				}
			}
		});

		const result = await validateJsonSchema(json, schema);
		expect(result.success).toBe(true);
		if (!result.success) return;
		expect(result.valid).toBe(true);
		expect(result.issues).toEqual([]);
	});

	it('returns path-based issues with line and column mapping', async () => {
		const json = '{\n  "id": 10,\n  "age": "old"\n}';
		const schema = JSON.stringify({
			type: 'object',
			required: ['id', 'age'],
			properties: {
				id: { type: 'integer' },
				age: { type: 'integer' }
			}
		});

		const result = await validateJsonSchema(json, schema);
		expect(result.success).toBe(true);
		if (!result.success) return;
		expect(result.valid).toBe(false);
		expect(result.issues.length).toBeGreaterThan(0);
		expect(result.issues[0]?.instancePath).toBe('/age');
		expect(result.issues[0]?.line).toBe(3);
		expect(result.issues[0]?.column).toBeGreaterThan(1);
	});

	it('returns data parse errors separately', async () => {
		const result = await validateJsonSchema('{"id":}', '{"type":"object"}');
		expect(result.success).toBe(false);
		if (result.success) return;
		expect(result.dataError).not.toBeNull();
		expect(result.schemaError).toBeNull();
	});

	it('returns schema parse errors separately', async () => {
		const result = await validateJsonSchema('{"id":1}', '{"type":');
		expect(result.success).toBe(false);
		if (result.success) return;
		expect(result.dataError).toBeNull();
		expect(result.schemaError).not.toBeNull();
	});
});
