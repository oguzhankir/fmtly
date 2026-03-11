import type { ToolDefinition } from '../types.js';

export const tomlTools: ToolDefinition[] = [
	{
		id: 'toml-formatter',
		category: 'toml',
		slug: 'formatter',
		displayName: 'TOML Formatter',
		tagline: 'Format and beautify TOML',
		description: 'Format and beautify TOML files online.',
		primaryKeyword: 'toml formatter',
		metaTitle: 'TOML Formatter & Beautifier',
		metaDescription: 'Format and beautify TOML instantly.',
		engine: 'toml' as any,
		operation: 'format',
		layoutVariant: 'split',
		inputLanguage: 'toml',
		outputLanguage: 'toml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' },
			{ category: 'color', slug: 'contrast' },
			{ category: 'crypto', slug: 'hash' }
		],
		faqs: [],
		useCases: [],
		sampleInput: 'title = "TOML Example"\n\n[owner]\nname = "Tom Preston-Werner"'
	},
	{
		id: 'toml-validator',
		category: 'toml',
		slug: 'validator',
		displayName: 'TOML Validator',
		tagline: 'Validate TOML syntax',
		description: 'Validates TOML syntax and reports errors.',
		primaryKeyword: 'toml validator',
		metaTitle: 'TOML Validator',
		metaDescription: 'Validate TOML syntax instantly.',
		engine: 'toml' as any,
		operation: 'validate',
		layoutVariant: 'single',
		inputLanguage: 'toml',
		outputLanguage: 'toml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' },
			{ category: 'color', slug: 'contrast' },
			{ category: 'crypto', slug: 'hash' }
		],
		faqs: [],
		useCases: [],
		sampleInput: 'title = "TOML Example"'
	},
	{
		id: 'toml-to-json',
		category: 'toml',
		slug: 'to-json',
		displayName: 'TOML to JSON',
		tagline: 'Convert TOML to JSON',
		description: 'Convert TOML configuration to JSON format.',
		primaryKeyword: 'toml to json',
		metaTitle: 'TOML to JSON Converter',
		metaDescription: 'Convert TOML to JSON instantly.',
		engine: 'toml' as any,
		operation: 'toJson',
		layoutVariant: 'split',
		inputLanguage: 'toml',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' },
			{ category: 'color', slug: 'contrast' },
			{ category: 'crypto', slug: 'hash' }
		],
		faqs: [],
		useCases: [],
		sampleInput: 'title = "TOML Example"'
	},
	{
		id: 'toml-to-yaml',
		category: 'toml',
		slug: 'to-yaml',
		displayName: 'TOML to YAML',
		tagline: 'Convert TOML to YAML',
		description: 'Convert TOML configuration to YAML format.',
		primaryKeyword: 'toml to yaml',
		metaTitle: 'TOML to YAML Converter',
		metaDescription: 'Convert TOML to YAML instantly.',
		engine: 'toml' as any,
		operation: 'toYaml',
		layoutVariant: 'split',
		inputLanguage: 'toml',
		outputLanguage: 'yaml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' },
			{ category: 'color', slug: 'contrast' },
			{ category: 'crypto', slug: 'hash' }
		],
		faqs: [],
		useCases: [],
		sampleInput: 'title = "TOML Example"'
	}
];
