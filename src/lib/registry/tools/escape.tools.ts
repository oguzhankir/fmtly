import type { ToolDefinition } from '../types.js';

export const escapeTools: ToolDefinition[] = [
	{
		id: 'escape-json',
		category: 'escape',
		slug: 'json',
		displayName: 'tool.escape-json.display_name',
		tagline: 'tool.escape-json.tagline',
		description: 'tool.escape-json.description',
		primaryKeyword: 'tool.escape-json.primary_keyword',
		metaTitle: 'tool.escape-json.meta_title',
		metaDescription: 'tool.escape-json.meta_description',
		engine: 'encoder',
		operation: 'tool.escape-json.operation',
		layoutVariant: 'bidirectional',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'base64' },
			{ category: 'encode', slug: 'html' }
		],
		faqs: [],
		useCases: [],
		sampleInput: '{"message": "Hello World"}'
	}
];
