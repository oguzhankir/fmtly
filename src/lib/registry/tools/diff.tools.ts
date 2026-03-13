import type { ToolDefinition } from '../types.js';

export const diffTools: ToolDefinition[] = [
	{
		id: 'diff-text',
		category: 'diff',
		slug: 'text',
		displayName: 'tool.diff-text.display_name',
		tagline: 'tool.diff-text.tagline',
		description: 'tool.diff-text.description',
		primaryKeyword: 'tool.diff-text.primary_keyword',
		metaTitle: 'tool.diff-text.meta_title',
		metaDescription: 'tool.diff-text.meta_description',
		engine: 'text',
		operation: 'tool.diff-text.operation',
		layoutVariant: 'dual-input',
		inputLanguage: 'text',
		outputLanguage: 'text',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [],
		useCases: [],
		sampleInput: 'Hello World\nLine 2'
	}
];
