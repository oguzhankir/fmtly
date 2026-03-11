import { describe, expect, it } from 'vitest';
import { computeXMLStats } from '../../src/lib/engines/xml/index.js';

const catalogXML = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="1" available="true">
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
  </book>
  <book id="2" available="false">
    <title>To Kill a Mockingbird</title>
    <author>Harper Lee</author>
    <year>1960</year>
  </book>
</catalog>`;

const simpleXML = `<root><child>value</child></root>`;

describe('computeXMLStats', () => {
	it('returns sizeBytes equal to UTF-8 byte length', () => {
		const stats = computeXMLStats(simpleXML);
		const expected = new TextEncoder().encode(simpleXML).length;
		expect(stats.sizeBytes).toBe(expected);
	});

	it('counts elements in a simple document', () => {
		const stats = computeXMLStats(simpleXML);
		expect(stats.elements).toBeGreaterThan(0);
	});

	it('counts elements in catalog XML', () => {
		const stats = computeXMLStats(catalogXML);
		expect(stats.elements).toBeGreaterThan(4);
	});

	it('counts attributes', () => {
		const stats = computeXMLStats(catalogXML);
		expect(stats.attributes).toBeGreaterThan(0);
	});

	it('computes maxDepth greater than 0 for nested XML', () => {
		const stats = computeXMLStats(catalogXML);
		expect(stats.maxDepth).toBeGreaterThan(0);
	});

	it('returns depth 0 for flat single-element XML', () => {
		const stats = computeXMLStats('<root/>');
		expect(stats.maxDepth).toBeLessThanOrEqual(1);
	});

	it('returns zeros for empty string without throwing', () => {
		const stats = computeXMLStats('');
		expect(stats.sizeBytes).toBe(0);
	});

	it('returns partial stats for invalid XML without throwing', () => {
		expect(() => computeXMLStats('<unclosed>')).not.toThrow();
	});

	it('counts text nodes', () => {
		const stats = computeXMLStats('<root><name>Hello</name></root>');
		expect(stats.textNodes).toBeGreaterThan(0);
	});

	it('handles deeply nested XML', () => {
		const deep = '<a><b><c><d><e>value</e></d></c></b></a>';
		const stats = computeXMLStats(deep);
		expect(stats.maxDepth).toBeGreaterThanOrEqual(4);
	});
});
