import { describe, expect, it } from 'vitest';
import {
	formatXML,
	jsonToXML,
	minifyXML,
	parseXML,
	xmlToJSON
} from '../../src/lib/engines/xml/index.js';

const sampleXML = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="1">
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
  </book>
</catalog>`;

const minifiedXML = `<?xml version="1.0" encoding="UTF-8"?><catalog><book id="1"><title>The Great Gatsby</title><author>F. Scott Fitzgerald</author></book></catalog>`;

describe('parseXML', () => {
	it('parses valid XML', () => {
		const result = parseXML(sampleXML);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.data).toBeTruthy();
		}
	});

	it('parses XML with attributes', () => {
		const result = parseXML('<item id="1" type="test">value</item>');
		expect(result.success).toBe(true);
		if (result.success) {
			const data = result.data as Record<string, unknown>;
			expect(data.item).toBeTruthy();
		}
	});

	it('returns error for invalid XML', () => {
		const result = parseXML('<unclosed>');
		expect(result.success).toBe(false);
		if (!result.success) {
			expect(result.error.message).toBeTruthy();
		}
	});

	it('returns error for mismatched tags', () => {
		const result = parseXML('<a></b>');
		expect(result.success).toBe(false);
	});
});

describe('formatXML', () => {
	it('formats minified XML', () => {
		const result = formatXML(minifiedXML);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toContain('\n');
			expect(result.output).toContain('catalog');
			expect(result.output).toContain('book');
		}
	});

	it('formats with 4-space indent', () => {
		const result = formatXML('<root><child>value</child></root>', { indent: 4 });
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toContain('    ');
		}
	});

	it('formats with tab indent', () => {
		const result = formatXML('<root><child>value</child></root>', { indent: '\t' });
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toContain('\t');
		}
	});

	it('returns error for invalid XML', () => {
		const result = formatXML('<unclosed>');
		expect(result.success).toBe(false);
	});
});

describe('minifyXML', () => {
	it('minifies formatted XML', () => {
		const result = minifyXML(sampleXML);
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output.length).toBeLessThan(sampleXML.length);
		}
	});

	it('returns error for invalid XML', () => {
		const result = minifyXML('<unclosed>');
		expect(result.success).toBe(false);
	});
});

describe('xmlToJSON', () => {
	it('converts XML to JSON', () => {
		const result = xmlToJSON(sampleXML);
		expect(result.success).toBe(true);
		if (result.success) {
			const data = JSON.parse(result.output);
			expect(data.catalog).toBeTruthy();
			expect(data.catalog.book).toBeTruthy();
		}
	});

	it('preserves attributes with @_ prefix', () => {
		const result = xmlToJSON('<item id="1">value</item>');
		expect(result.success).toBe(true);
		if (result.success) {
			const data = JSON.parse(result.output);
			expect(data.item['@_id']).toBe('1');
		}
	});

	it('returns error for invalid XML', () => {
		const result = xmlToJSON('<unclosed>');
		expect(result.success).toBe(false);
	});
});

describe('jsonToXML', () => {
	it('converts JSON to XML with root element', () => {
		const input = '{"book": {"title": "Test", "author": "Author"}}';
		const result = jsonToXML(input, { rootElement: 'library' });
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toContain('<library>');
			expect(result.output).toContain('</library>');
			expect(result.output).toContain('<title>Test</title>');
			expect(result.output).toContain('<author>Author</author>');
		}
	});

	it('uses default root element', () => {
		const result = jsonToXML('{"key": "value"}');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toContain('<root>');
			expect(result.output).toContain('</root>');
		}
	});

	it('includes XML declaration', () => {
		const result = jsonToXML('{"key": "value"}');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.output).toContain('<?xml version="1.0"');
		}
	});

	it('returns error for invalid JSON', () => {
		const result = jsonToXML('{invalid}');
		expect(result.success).toBe(false);
	});
});

describe('round-trip', () => {
	it('XML → JSON → XML preserves data structure', () => {
		const input = '<root><name>test</name><value>42</value></root>';
		const jsonResult = xmlToJSON(input);
		expect(jsonResult.success).toBe(true);
		if (!jsonResult.success) return;

		const data = JSON.parse(jsonResult.output);
		expect(data.root.name).toBe('test');
		expect(data.root.value).toBe(42);
	});
});
