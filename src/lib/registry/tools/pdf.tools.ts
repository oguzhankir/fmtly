import type { ToolDefinition } from '../types.js';

export const pdfTools: ToolDefinition[] = [
	{
		id: 'pdf-viewer',
		category: 'pdf',
		slug: 'viewer',
		displayName: 'tool.pdf-viewer.display_name',
		tagline: 'tool.pdf-viewer.tagline',
		description: 'tool.pdf-viewer.description',
		primaryKeyword: 'tool.pdf-viewer.primary_keyword',
		metaTitle: 'tool.pdf-viewer.meta_title',
		metaDescription: 'tool.pdf-viewer.meta_description',
		engine: 'pdf',
		operation: 'tool.pdf-viewer.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [],
		faqs: [],
		useCases: [],
		sampleInput: ''
	}
];
