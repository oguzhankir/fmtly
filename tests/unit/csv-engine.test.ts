import { describe, expect, it } from 'vitest';
import { csvToJSON, jsonToCSV, parseCSV } from '../../src/lib/engines/csv/index.js';

describe('parseCSV', () => {
	it('parses basic CSV', async () => {
		const result = await parseCSV('a,b,c\n1,2,3');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data).toEqual([
				['a', 'b', 'c'],
				['1', '2', '3']
			]);
		}
	});

	it('parses CSV with quoted fields', async () => {
		const result = await parseCSV('"name","city"\n"Alice","New York"');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data).toEqual([
				['name', 'city'],
				['Alice', 'New York']
			]);
		}
	});

	it('skips empty lines', async () => {
		const result = await parseCSV('a,b\n1,2\n\n3,4');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data).toHaveLength(3);
		}
	});

	it('handles multiple rows', async () => {
		const result = await parseCSV('a,b\n1,2\n3,4');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data).toHaveLength(3);
		}
	});
});

describe('csvToJSON', () => {
	it('converts CSV with headers to JSON array of objects', async () => {
		const input = 'name,age,city\nAlice,30,New York\nBob,25,London';
		const result = await csvToJSON(input, { headers: true });
		expect(result.success).toBe(true);
		if (result.success) {
			const data = JSON.parse(result.output);
			expect(data).toHaveLength(2);
			expect(data[0].name).toBe('Alice');
			expect(data[0].age).toBe(30);
			expect(data[0].city).toBe('New York');
			expect(data[1].name).toBe('Bob');
		}
	});

	it('converts CSV without headers to JSON array of arrays', async () => {
		const input = 'Alice,30,New York\nBob,25,London';
		const result = await csvToJSON(input, { headers: false });
		expect(result.success).toBe(true);
		if (result.success) {
			const data = JSON.parse(result.output);
			expect(data).toHaveLength(2);
			expect(data[0]).toEqual(['Alice', 30, 'New York']);
		}
	});

	it('detects boolean types', async () => {
		const input = 'name,active\nAlice,true\nBob,false';
		const result = await csvToJSON(input, { headers: true });
		expect(result.success).toBe(true);
		if (result.success) {
			const data = JSON.parse(result.output);
			expect(data[0].active).toBe(true);
			expect(data[1].active).toBe(false);
		}
	});

	it('detects numeric types', async () => {
		const input = 'name,score,ratio\nAlice,100,3.14';
		const result = await csvToJSON(input, { headers: true });
		expect(result.success).toBe(true);
		if (result.success) {
			const data = JSON.parse(result.output);
			expect(data[0].score).toBe(100);
			expect(data[0].ratio).toBeCloseTo(3.14);
		}
	});
});

describe('jsonToCSV', () => {
	it('converts JSON array of objects to CSV', async () => {
		const input = JSON.stringify([
			{ name: 'Alice', age: 30, city: 'New York' },
			{ name: 'Bob', age: 25, city: 'London' }
		]);
		const result = await jsonToCSV(input);
		expect(result.success).toBe(true);
		if (result.success) {
			const lines = result.output.trim().split('\n');
			expect(lines).toHaveLength(3);
			expect(lines[0]).toContain('name');
			expect(lines[0]).toContain('age');
			expect(lines[0]).toContain('city');
			expect(lines[1]).toContain('Alice');
		}
	});

	it('flattens nested objects with dot-notation', async () => {
		const input = JSON.stringify([{ name: 'Alice', address: { city: 'New York', zip: '10001' } }]);
		const result = await jsonToCSV(input);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toContain('address.city');
			expect(result.output).toContain('address.zip');
			expect(result.output).toContain('New York');
		}
	});

	it('returns error for non-array JSON', async () => {
		const result = await jsonToCSV('{"name": "Alice"}');
		expect(result.success).toBe(false);
		if (!result.success) {
			expect(result.error.message).toContain('array');
		}
	});

	it('returns error for invalid JSON', async () => {
		const result = await jsonToCSV('{invalid}');
		expect(result.success).toBe(false);
	});
});

describe('round-trip', () => {
	it('JSON → CSV → JSON preserves flat data', async () => {
		const original = [
			{ name: 'Alice', age: 30, active: true },
			{ name: 'Bob', age: 25, active: false }
		];
		const csvResult = await jsonToCSV(JSON.stringify(original));
		expect(csvResult.success).toBe(true);
		if (!csvResult.success) return;

		const jsonResult = await csvToJSON(csvResult.output, { headers: true });
		expect(jsonResult.success).toBe(true);
		if (!jsonResult.success) return;

		const roundTripped = JSON.parse(jsonResult.output);
		expect(roundTripped).toEqual(original);
	});
});
