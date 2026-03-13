import type { ToolDefinition } from '../types.js';

export const imageTools: ToolDefinition[] = [
	{
		id: 'image-compressor',
		category: 'image',
		slug: 'compressor',
		displayName: 'tool.image-compressor.display_name',
		tagline: 'tool.image-compressor.tagline',
		description: 'tool.image-compressor.description',
		primaryKeyword: 'tool.image-compressor.primary_keyword',
		metaTitle: 'tool.image-compressor.meta_title',
		metaDescription: 'tool.image-compressor.meta_description',
		engine: 'image',
		operation: 'tool.image-compressor.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [{ category: 'image', slug: 'converter' }],
		faqs: [],
		useCases: [],
		sampleInput: ''
	}
];
