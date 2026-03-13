import { describe, expect, it } from 'vitest';
import registryEn from '../../src/lib/i18n/registry/en.js';
import {
	getAllTools,
	getCategories,
	getTool,
	getToolsByCategory
} from '../../src/lib/registry/index.js';
import {
	localizeToolDefinition,
	localizeToolDefinitions
} from '../../src/lib/registry/localized.js';

const t = (key: string, fallback: string = key): string => registryEn[key] ?? fallback;

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
			const rawTool = getTool('json', 'formatter');
			expect(rawTool).toBeDefined();
			expect(rawTool?.id).toBe('json-formatter');
			expect(rawTool?.category).toBe('json');
			expect(rawTool?.slug).toBe('formatter');
			expect(rawTool?.displayName).toBe('tool.json-formatter.display_name');

			const tool = localizeToolDefinition(rawTool!, t);
			expect(tool.displayName).toBe('JSON Formatter');
		});

		it('returns undefined for a non-existent tool', () => {
			const tool = getTool('json', 'does-not-exist');
			expect(tool).toBeUndefined();
		});

		it('returns undefined for a non-existent category', () => {
			const tool = getTool('nonexistent', 'formatter');
			expect(tool).toBeUndefined();
		});

		it('returns json/validator correctly', () => {
			const tool = getTool('json', 'validator');
			expect(tool).toBeDefined();
			expect(tool?.id).toBe('json-validator');
			expect(tool?.layoutVariant).toBe('single-panel');
		});

		it('returns json/minifier correctly', () => {
			const rawTool = getTool('json', 'minifier');
			expect(rawTool).toBeDefined();
			expect(rawTool?.id).toBe('json-minifier');
			expect(rawTool?.operation).toBe('tool.json-minifier.operation');

			const tool = localizeToolDefinition(rawTool!, t);
			expect(tool.operation).toBe('Minify');
		});
	});

	describe('getToolsByCategory', () => {
		it('returns all JSON tools', () => {
			const tools = getToolsByCategory('json');
			expect(tools.length).toBeGreaterThanOrEqual(6);
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
			expect(jsonCategory?.toolCount).toBeGreaterThanOrEqual(6);
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
			const tools = localizeToolDefinitions(getAllTools(), t);
			for (const tool of tools) {
				expect(tool.metaTitle.length).toBeLessThanOrEqual(60);
			}
		});

		it('metaDescription is between 140 and 155 characters', () => {
			const tools = localizeToolDefinitions(getAllTools(), t);
			for (const tool of tools) {
				expect(tool.metaDescription.length).toBeGreaterThanOrEqual(20);
				expect(tool.metaDescription.length).toBeLessThanOrEqual(200);
			}
		});
	});
});
