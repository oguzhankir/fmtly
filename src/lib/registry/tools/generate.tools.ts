import type { ToolDefinition } from '../types.js';

export const generateTools: ToolDefinition[] = [
	{
		id: 'generate-uuid',
		category: 'generate',
		slug: 'uuid',
		displayName: 'tool.generate-uuid.display_name',
		tagline: 'tool.generate-uuid.tagline',
		description: 'tool.generate-uuid.description',
		primaryKeyword: 'tool.generate-uuid.primary_keyword',
		metaTitle: 'tool.generate-uuid.meta_title',
		metaDescription: 'tool.generate-uuid.meta_description',
		engine: 'crypto',
		operation: 'tool.generate-uuid.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [{ category: 'crypto', slug: 'random-string' }],
		faqs: [],
		useCases: [],
		sampleInput: ''
	}
];
