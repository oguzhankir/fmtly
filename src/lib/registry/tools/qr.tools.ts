import type { ToolDefinition } from '../types.js';

export const qrTools: ToolDefinition[] = [
	{
		id: 'qr-generator',
		category: 'qr',
		slug: 'generator',
		displayName: 'tool.qr-generator.display_name',
		tagline: 'tool.qr-generator.tagline',
		description: 'tool.qr-generator.description',
		primaryKeyword: 'tool.qr-generator.primary_keyword',
		metaTitle: 'tool.qr-generator.meta_title',
		metaDescription: 'tool.qr-generator.meta_description',
		engine: 'qr',
		operation: 'tool.qr-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [{ category: 'qr', slug: 'decoder' }],
		faqs: [],
		useCases: [],
		sampleInput: 'https://fmtly.dev'
	}
];
