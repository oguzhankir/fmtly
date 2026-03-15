import { describe, expect, it } from 'vitest';
import { validateCsvSchema } from '../../src/lib/engines/csv/schemaValidator.js';

describe('validateCsvSchema', () => {
	it('validates CSV rows against a JSON schema', async () => {
		const csv = 'id,status\n1,active\n2,inactive';
		const schema = JSON.stringify({
			type: 'object',
			required: ['id', 'status'],
			properties: {
				id: { type: 'number' },
				status: { enum: ['active', 'inactive'] }
			}
		});

		const result = await validateCsvSchema(csv, schema, { headerRow: true });
		expect(result.success).toBe(true);
		if (!result.success) return;
		expect(result.valid).toBe(true);
		expect(result.issues).toEqual([]);
	});

	it('reports schema issues with CSV line information', async () => {
		const csv = 'id,status\n1,active\n2,pending';
		const schema = JSON.stringify({
			type: 'object',
			required: ['id', 'status'],
			properties: {
				id: { type: 'number' },
				status: { enum: ['active', 'inactive'] }
			}
		});

		const result = await validateCsvSchema(csv, schema, { headerRow: true });
		expect(result.success).toBe(true);
		if (!result.success) return;
		expect(result.valid).toBe(false);
		expect(result.issues).toHaveLength(1);
		expect(result.issues[0]?.line).toBe(3);
		expect(result.issues[0]?.column).toBe(2);
		expect(result.issues[0]?.columnName).toBe('status');
	});

	it('supports generated column names when header mode is disabled', async () => {
		const csv = '1,active\n2,inactive';
		const schema = JSON.stringify({
			type: 'object',
			required: ['column_1', 'column_2'],
			properties: {
				column_1: { type: 'number' },
				column_2: { enum: ['active', 'inactive'] }
			}
		});

		const result = await validateCsvSchema(csv, schema, { headerRow: false });
		expect(result.success).toBe(true);
		if (!result.success) return;
		expect(result.valid).toBe(true);
	});

	it('accepts YAML schema input', async () => {
		const csv = 'id,status\n1,active';
		const schema = [
			'type: object',
			'required:',
			'  - id',
			'properties:',
			'  id:',
			'    type: number',
			'  status:',
			'    enum:',
			'      - active'
		].join('\n');

		const result = await validateCsvSchema(csv, schema, { headerRow: true });
		expect(result.success).toBe(true);
		if (!result.success) return;
		expect(result.valid).toBe(true);
	});
});
