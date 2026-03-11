import { describe, expect, it } from 'vitest';
import { getTool } from '../../src/lib/registry/index.js';
import { generateToolSEO } from '../../src/lib/utils/seo.js';

describe('SEO Metadata Generation', () => {
	const baseUrl = 'https://fmtly.dev';

	describe('generateToolSEO', () => {
		it('generates correct canonical URL', () => {
			const tool = getTool('json', 'formatter');
			if (!tool) throw new Error('Tool not found');

			const seo = generateToolSEO(tool, baseUrl);
			expect(seo.canonical).toBe('https://fmtly.dev/json/formatter');
		});

		it('generates correct OG image URL', () => {
			const tool = getTool('json', 'formatter');
			if (!tool) throw new Error('Tool not found');

			const seo = generateToolSEO(tool, baseUrl);
			expect(seo.ogImage).toBe('https://fmtly.dev/og/json-formatter.png');
		});

		it('uses tool metaTitle for title', () => {
			const tool = getTool('json', 'formatter');
			if (!tool) throw new Error('Tool not found');

			const seo = generateToolSEO(tool, baseUrl);
			expect(seo.title).toBe(tool.metaTitle);
		});

		it('uses tool metaDescription for description', () => {
			const tool = getTool('json', 'formatter');
			if (!tool) throw new Error('Tool not found');

			const seo = generateToolSEO(tool, baseUrl);
			expect(seo.description).toBe(tool.metaDescription);
		});

		it('generates valid JSON for structured data', () => {
			const tool = getTool('json', 'formatter');
			if (!tool) throw new Error('Tool not found');

			const seo = generateToolSEO(tool, baseUrl);
			expect(() => JSON.parse(seo.structuredData)).not.toThrow();
		});

		it('structured data contains required Schema.org fields', () => {
			const tool = getTool('json', 'formatter');
			if (!tool) throw new Error('Tool not found');

			const seo = generateToolSEO(tool, baseUrl);
			const data = JSON.parse(seo.structuredData);

			expect(data['@context']).toBe('https://schema.org');
			expect(data['@type']).toBe('WebApplication');
			expect(data.name).toBe(tool.displayName);
			expect(data.applicationCategory).toBe('DeveloperApplication');
			expect(data.operatingSystem).toBe('Any');
			expect(data.url).toBe('https://fmtly.dev/json/formatter');
			expect(data.description).toBe(tool.description);
		});

		it('structured data includes free offer', () => {
			const tool = getTool('json', 'formatter');
			if (!tool) throw new Error('Tool not found');

			const seo = generateToolSEO(tool, baseUrl);
			const data = JSON.parse(seo.structuredData);

			expect(data.offers).toBeDefined();
			expect(data.offers['@type']).toBe('Offer');
			expect(data.offers.price).toBe('0');
			expect(data.offers.priceCurrency).toBe('USD');
		});

		it('title is within 60 characters for all tools', () => {
			const tool1 = getTool('json', 'formatter');
			const tool3 = getTool('json', 'validator');
			const tool4 = getTool('json', 'minifier');

			const tools = [tool1, tool3, tool4].filter((t) => t !== undefined);

			for (const tool of tools) {
				const seo = generateToolSEO(tool, baseUrl);
				expect(seo.title.length).toBeLessThanOrEqual(60);
			}
		});

		it('description is within 155 characters for all tools', () => {
			const tool1 = getTool('json', 'formatter');
			const tool3 = getTool('json', 'validator');
			const tool4 = getTool('json', 'minifier');

			const tools = [tool1, tool3, tool4].filter((t) => t !== undefined);

			for (const tool of tools) {
				const seo = generateToolSEO(tool, baseUrl);
				expect(seo.description.length).toBeLessThanOrEqual(155);
			}
		});

		it('canonical URL matches ogUrl', () => {
			const tool = getTool('json', 'minifier');
			if (!tool) throw new Error('Tool not found');

			const seo = generateToolSEO(tool, baseUrl);
			expect(seo.canonical).toBe(seo.ogUrl);
		});

		it('ogImage and twitterImage are identical', () => {
			const tool = getTool('json', 'formatter');
			if (!tool) throw new Error('Tool not found');

			const seo = generateToolSEO(tool, baseUrl);
			expect(seo.ogImage).toBe(seo.twitterImage);
		});
	});
});
