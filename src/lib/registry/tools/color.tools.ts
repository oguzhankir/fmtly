import type { ToolDefinition } from '../types.js';

export const colorTools: ToolDefinition[] = [
	{
		id: 'color-converter',
		category: 'color',
		slug: 'converter',
		displayName: 'tool.color-converter.display_name',
		tagline: 'tool.color-converter.tagline',
		description: 'tool.color-converter.description',
		primaryKeyword: 'tool.color-converter.primary_keyword',
		metaTitle: 'tool.color-converter.meta_title',
		metaDescription: 'tool.color-converter.meta_description',
		engine: 'color',
		operation: 'tool.color-converter.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'color', slug: 'contrast' },
			{ category: 'code', slug: 'css' }
		],
		faqs: [],
		useCases: [],
		sampleInput: '#3b82f6'
	},
	{
		id: 'color-contrast',
		category: 'color',
		slug: 'contrast',
		displayName: 'tool.color-contrast.display_name',
		tagline: 'tool.color-contrast.tagline',
		description: 'tool.color-contrast.description',
		primaryKeyword: 'tool.color-contrast.primary_keyword',
		metaTitle: 'tool.color-contrast.meta_title',
		metaDescription: 'tool.color-contrast.meta_description',
		engine: 'color',
		operation: 'tool.color-contrast.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [{ category: 'color', slug: 'converter' }],
		faqs: [],
		useCases: [],
		sampleInput: '#ffffff\n#3b82f6'
	}
];
