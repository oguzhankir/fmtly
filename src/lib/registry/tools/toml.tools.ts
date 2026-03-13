import type { ToolDefinition } from '../types.js';

export const tomlTools: ToolDefinition[] = [
	{
		id: 'toml-formatter',
		category: 'toml',
		slug: 'formatter',
		displayName: 'tool.toml-formatter.display_name',
		tagline: 'tool.toml-formatter.tagline',
		description: 'tool.toml-formatter.description',
		primaryKeyword: 'tool.toml-formatter.primary_keyword',
		metaTitle: 'tool.toml-formatter.meta_title',
		metaDescription: 'tool.toml-formatter.meta_description',
		engine: 'toml',
		operation: 'tool.toml-formatter.operation',
		layoutVariant: 'split',
		inputLanguage: 'toml',
		outputLanguage: 'toml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'to-toml' },
			{ category: 'toml', slug: 'to-json' }
		],
		faqs: [],
		useCases: [],
		sampleInput: '[server]\nport = 8080\nhost = "localhost"'
	}
];
