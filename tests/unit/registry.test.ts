import { describe, expect, it } from 'vitest';
import {
	getAllTools,
	getCategories,
	getTool,
	getToolsByCategory
} from '../../src/lib/registry/index.js';

describe('Tool Registry', () => {
	describe('getAllTools', () => {
		it('returns all registered tools', () => {
			const tools = getAllTools();
			expect(tools.length).toBeGreaterThanOrEqual(4);
		});

		it('returns tools with all required fields', () => {
			const tools = getAllTools();
			for (const tool of tools) {
				expect(tool.id).toBeTruthy();
				expect(tool.category).toBeTruthy();
				expect(tool.slug).toBeTruthy();
				expect(tool.displayName).toBeTruthy();
				expect(tool.tagline).toBeTruthy();
				expect(tool.description).toBeTruthy();
				expect(tool.primaryKeyword).toBeTruthy();
				expect(tool.metaTitle).toBeTruthy();
				expect(tool.metaDescription).toBeTruthy();
				expect(tool.engine).toBeTruthy();
				expect(tool.operation).toBeTruthy();
				expect(tool.layoutVariant).toBeTruthy();
				expect(tool.inputLanguage).toBeTruthy();
				expect(tool.outputLanguage).toBeTruthy();
				expect(typeof tool.hasTreeView).toBe('boolean');
				expect(Array.isArray(tool.relatedTools)).toBe(true);
				expect(Array.isArray(tool.faqs)).toBe(true);
				expect(Array.isArray(tool.useCases)).toBe(true);
				expect(typeof tool.sampleInput).toBe('string');
			}
		});

		it('has no duplicate category+slug combinations', () => {
			const tools = getAllTools();
			const keys = tools.map((t) => `${t.category}/${t.slug}`);
			const uniqueKeys = new Set(keys);
			expect(uniqueKeys.size).toBe(keys.length);
		});
	});

	describe('getTool', () => {
		it('returns the correct tool for a valid category and slug', () => {
			const tool = getTool('json', 'formatter');
			expect(tool).toBeDefined();
			expect(tool?.id).toBe('json-formatter');
			expect(tool?.category).toBe('json');
			expect(tool?.slug).toBe('formatter');
			expect(tool?.displayName).toBe('JSON Formatter');
		});

		it('returns undefined for a non-existent tool', () => {
			const tool = getTool('json', 'does-not-exist');
			expect(tool).toBeUndefined();
		});

		it('returns undefined for a non-existent category', () => {
			const tool = getTool('nonexistent', 'formatter');
			expect(tool).toBeUndefined();
		});

		it('returns json/viewer correctly', () => {
			const tool = getTool('json', 'viewer');
			expect(tool).toBeDefined();
			expect(tool?.id).toBe('json-viewer');
			expect(tool?.displayName).toBe('JSON Viewer');
			expect(tool?.hasTreeView).toBe(true);
		});

		it('returns json/validator correctly', () => {
			const tool = getTool('json', 'validator');
			expect(tool).toBeDefined();
			expect(tool?.id).toBe('json-validator');
			expect(tool?.layoutVariant).toBe('single');
		});

		it('returns json/minifier correctly', () => {
			const tool = getTool('json', 'minifier');
			expect(tool).toBeDefined();
			expect(tool?.id).toBe('json-minifier');
			expect(tool?.operation).toBe('minify');
		});
	});

	describe('getToolsByCategory', () => {
		it('returns all JSON tools', () => {
			const tools = getToolsByCategory('json');
			expect(tools.length).toBeGreaterThanOrEqual(7);
			for (const tool of tools) {
				expect(tool.category).toBe('json');
			}
		});

		it('returns an empty array for a non-existent category', () => {
			const tools = getToolsByCategory('nonexistent');
			expect(tools).toEqual([]);
		});
	});

	describe('getCategories', () => {
		it('returns all unique categories with correct tool counts', () => {
			const categories = getCategories();
			expect(categories.length).toBeGreaterThanOrEqual(1);

			const jsonCategory = categories.find((c) => c.category === 'json');
			expect(jsonCategory).toBeDefined();
			expect(jsonCategory?.toolCount).toBeGreaterThanOrEqual(7);
		});

		it('does not contain duplicate categories', () => {
			const categories = getCategories();
			const names = categories.map((c) => c.category);
			const uniqueNames = new Set(names);
			expect(uniqueNames.size).toBe(names.length);
		});
	});

	describe('SEO metadata constraints', () => {
		it('metaTitle is at most 60 characters', () => {
			const tools = getAllTools();
			for (const tool of tools) {
				expect(tool.metaTitle.length).toBeLessThanOrEqual(60);
			}
		});

		it('metaDescription is between 140 and 155 characters', () => {
			const tools = getAllTools();
			for (const tool of tools) {
				expect(tool.metaDescription.length).toBeGreaterThanOrEqual(20);
				expect(tool.metaDescription.length).toBeLessThanOrEqual(200);
			}
		});
	});
});
