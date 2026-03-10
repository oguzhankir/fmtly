import { describe, expect, it } from 'vitest';
import { toXml, toYaml, toHtmlTable, format, validate } from '../../src/lib/engines/csv/csv.engine.js';

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

    it('formats CSV correctly', async () => {
        const result = await format('id,name\n1, "Alice"');
        expect(result).toContain('"id"');
    });

    it('validates CSV correctly', async () => {
        const valid = await validate(sampleCsv);
        expect(valid.valid).toBe(true);
    });
});
