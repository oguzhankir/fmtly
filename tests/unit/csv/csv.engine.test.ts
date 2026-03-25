import { describe, expect, it } from 'vitest';
import {
	deduplicateCsvRows,
	format,
	toHtmlTable,
	toSql,
	toXml,
	toYaml,
	validate
} from '../../../src/lib/engines/csv/csv.engine.js';

describe('CSV Engine', () => {
	const sampleCsv = 'id,name\n1,Alice\n2,Bob';

	it('converts CSV to XML', async () => {
		const result = await toXml(sampleCsv);
		expect(result).toContain('<row>');
		expect(result).toContain('<id>1</id>');
		expect(result).toContain('<name>Alice</name>');
	});

	it('converts CSV to YAML', async () => {
		const result = await toYaml(sampleCsv);
		expect(result).toContain('- id: 1');
		expect(result).toContain('name: Alice');
	});

	it('converts CSV to HTML Table', async () => {
		const result = await toHtmlTable(sampleCsv);
		expect(result).toContain('<table>');
		expect(result).toContain('<th>id</th>');
		expect(result).toContain('<td>Alice</td>');
	});

	it('converts CSV to SQL with inferred types', async () => {
		const data = "id,name,active,score\n1,Alice,true,98.5\n2,O'Brian,FALSE,0";
		const result = await toSql(data, { tableName: 'users' });
		expect(result).toContain('INSERT INTO "users" ("id", "name", "active", "score") VALUES');
		expect(result).toContain("  (1, 'Alice', TRUE, 98.5),");
		expect(result).toContain("  (2, 'O''Brian', FALSE, 0);");
	});

	it('formats CSV correctly', async () => {
		const result = await format('id,name\n1, "Alice"');
		expect(result).toContain('"id"');
	});

	it('validates CSV correctly', async () => {
		const valid = await validate(sampleCsv);
		expect(valid.valid).toBe(true);
	});

	it('deduplicates rows by key columns (papaparse load path)', async () => {
		const csv = 'id,name\n1,Alice\n1,Bob\n2,Carol';
		const out = await deduplicateCsvRows(csv, {
			delimiter: ',',
			headerRow: true,
			skipEmptyLines: true,
			trimCells: false,
			quoteAll: true,
			keyColumns: ['id']
		});
		expect(out).toContain('"1","Alice"');
		expect(out).not.toContain('Bob');
		expect(out).toContain('"2","Carol"');
	});
});
