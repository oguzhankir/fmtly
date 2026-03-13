import type { ToolDefinition } from '../types.js';

export const fileTools: ToolDefinition[] = [
	{
		id: 'file-hash',
		category: 'file',
		slug: 'hash',
		displayName: 'tool.file-hash.display_name',
		tagline: 'tool.file-hash.tagline',
		description: 'tool.file-hash.description',
		primaryKeyword: 'tool.file-hash.primary_keyword',
		metaTitle: 'tool.file-hash.meta_title',
		metaDescription: 'tool.file-hash.meta_description',
		engine: 'file',
		operation: 'tool.file-hash.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [{ category: 'crypto', slug: 'hmac' }],
		faqs: [],
		useCases: [],
		sampleInput: ''
	}
];
