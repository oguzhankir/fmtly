// @vitest-environment jsdom
import { describe, expect, it } from 'vitest';
import { xpathQuery, xpathSamples } from '../../src/lib/engines/xml/xpathEngine.js';

const catalogXML = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="1" available="true">
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
    <price>10.99</price>
  </book>
  <book id="2" available="false">
    <title>To Kill a Mockingbird</title>
    <author>Harper Lee</author>
    <year>1960</year>
    <price>12.99</price>
  </book>
  <book id="3" available="true">
    <title>1984</title>
    <author>George Orwell</author>
    <year>1949</year>
    <price>9.99</price>
  </book>
</catalog>`;

describe('xpathQuery', () => {
	it('returns empty nodes for empty XML', () => {
		const result = xpathQuery('', '//book');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.nodes).toHaveLength(0);
		}
	});

	it('returns empty nodes for empty expression', () => {
		const result = xpathQuery(catalogXML, '');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.nodes).toHaveLength(0);
		}
	});

	it('returns error for invalid XML', () => {
		const result = xpathQuery('<unclosed>', '//book');
		expect(result.success).toBe(false);
	});

	it('returns error for invalid XPath expression', () => {
		const result = xpathQuery(catalogXML, '///invalid[[');
		expect(result.success).toBe(false);
	});

	it('selects all book elements', () => {
		const result = xpathQuery(catalogXML, '//book');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.count).toBe(3);
			expect(result.resultType).toBe('nodeset');
		}
	});

	it('selects first book element', () => {
		const result = xpathQuery(catalogXML, '//book[1]');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.count).toBe(1);
		}
	});

	it('filters by attribute value', () => {
		const result = xpathQuery(catalogXML, '//book[@available="true"]');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.count).toBe(2);
		}
	});

	it('selects text nodes', () => {
		const result = xpathQuery(catalogXML, '//title/text()');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.count).toBe(3);
			expect(result.nodes[0].type).toBe('text');
		}
	});

	it('evaluates count() function', () => {
		const result = xpathQuery(catalogXML, 'count(//book)');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.nodes[0].value).toBe('3');
			expect(result.resultType).toBe('number');
		}
	});

	it('evaluates string functions', () => {
		const result = xpathQuery(catalogXML, 'string(//book[1]/title)');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.resultType).toBe('string');
			expect(result.nodes[0].value).toContain('Gatsby');
		}
	});

	it('evaluates boolean expressions', () => {
		const result = xpathQuery(catalogXML, 'count(//book) > 0');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.resultType).toBe('boolean');
			expect(result.nodes[0].value).toBe('true');
		}
	});

	it('selects attribute nodes', () => {
		const result = xpathQuery(catalogXML, '//@id');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.count).toBe(3);
			result.nodes.forEach((n) => expect(n.type).toBe('attribute'));
		}
	});

	it('returns element nodes with a label', () => {
		const result = xpathQuery(catalogXML, '//book');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.nodes[0].type).toBe('element');
			expect(result.nodes[0].label).toBe('book');
		}
	});

	it('filters by numeric predicate', () => {
		const result = xpathQuery(catalogXML, '//book[year > 1940]');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.count).toBe(2);
		}
	});

	it('uses local-name() function', () => {
		const result = xpathQuery(catalogXML, 'local-name(/*)');
		expect(result.success).toBe(true);
		if (result.success) {
			expect(result.nodes[0].value).toBe('catalog');
		}
	});
});

describe('xpathSamples', () => {
	it('exports a non-empty array', () => {
		expect(xpathSamples.length).toBeGreaterThan(0);
	});

	it('each sample has label and expression', () => {
		for (const sample of xpathSamples) {
			expect(typeof sample.label).toBe('string');
			expect(sample.label.length).toBeGreaterThan(0);
			expect(typeof sample.expression).toBe('string');
			expect(sample.expression.length).toBeGreaterThan(0);
		}
	});

	it('sample expressions are valid XPath for catalog XML', () => {
		for (const sample of xpathSamples) {
			const result = xpathQuery(catalogXML, sample.expression);
			expect(result.success).toBe(true);
		}
	});
});
