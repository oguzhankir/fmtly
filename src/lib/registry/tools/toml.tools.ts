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
			{ category: 'toml', slug: 'validator' },
			{ category: 'toml', slug: 'to-json' },
			{ category: 'toml', slug: 'to-yaml' },
			{ category: 'toml', slug: 'diff' }
		],
		faqs: [
			{
				question: 'tool.toml-formatter.faq.0.question',
				answer: 'tool.toml-formatter.faq.0.answer'
			},
			{
				question: 'tool.toml-formatter.faq.1.question',
				answer: 'tool.toml-formatter.faq.1.answer'
			}
		],
		useCases: [
			'tool.toml-formatter.use_case.0',
			'tool.toml-formatter.use_case.1',
			'tool.toml-formatter.use_case.2',
			'tool.toml-formatter.use_case.3'
		],
		sampleInput: `title = "fmtly"

[server]
host = "localhost"
port = 8080

[database]
url = "postgres://localhost/fmtly"
pool = 10

[features]
analytics = false
dark_mode = true`
	},
	{
		id: 'toml-validator',
		category: 'toml',
		slug: 'validator',
		displayName: 'tool.toml-validator.display_name',
		tagline: 'tool.toml-validator.tagline',
		description: 'tool.toml-validator.description',
		primaryKeyword: 'tool.toml-validator.primary_keyword',
		metaTitle: 'tool.toml-validator.meta_title',
		metaDescription: 'tool.toml-validator.meta_description',
		engine: 'toml',
		operation: 'tool.toml-validator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'toml',
		outputLanguage: 'toml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'toml', slug: 'formatter' },
			{ category: 'toml', slug: 'diff' },
			{ category: 'toml', slug: 'to-json' },
			{ category: 'toml', slug: 'to-yaml' }
		],
		faqs: [
			{
				question: 'tool.toml-validator.faq.0.question',
				answer: 'tool.toml-validator.faq.0.answer'
			},
			{
				question: 'tool.toml-validator.faq.1.question',
				answer: 'tool.toml-validator.faq.1.answer'
			}
		],
		useCases: [
			'tool.toml-validator.use_case.0',
			'tool.toml-validator.use_case.1',
			'tool.toml-validator.use_case.2',
			'tool.toml-validator.use_case.3'
		],
		sampleInput: `title = "fmtly"

[server]
host = "localhost"
port = 8080

[features]
analytics = false`
	},
	{
		id: 'toml-to-json',
		category: 'toml',
		slug: 'to-json',
		displayName: 'tool.toml-to-json.display_name',
		tagline: 'tool.toml-to-json.tagline',
		description: 'tool.toml-to-json.description',
		primaryKeyword: 'tool.toml-to-json.primary_keyword',
		metaTitle: 'tool.toml-to-json.meta_title',
		metaDescription: 'tool.toml-to-json.meta_description',
		engine: 'toml',
		operation: 'tool.toml-to-json.operation',
		layoutVariant: 'split',
		inputLanguage: 'toml',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'to-toml' },
			{ category: 'toml', slug: 'formatter' },
			{ category: 'toml', slug: 'validator' },
			{ category: 'json', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.toml-to-json.faq.0.question',
				answer: 'tool.toml-to-json.faq.0.answer'
			},
			{
				question: 'tool.toml-to-json.faq.1.question',
				answer: 'tool.toml-to-json.faq.1.answer'
			}
		],
		useCases: [
			'tool.toml-to-json.use_case.0',
			'tool.toml-to-json.use_case.1',
			'tool.toml-to-json.use_case.2',
			'tool.toml-to-json.use_case.3'
		],
		sampleInput: `title = "fmtly"

[server]
host = "localhost"
port = 8080

[database]
pool = 10
ssl = true`
	},
	{
		id: 'toml-to-yaml',
		category: 'toml',
		slug: 'to-yaml',
		displayName: 'tool.toml-to-yaml.display_name',
		tagline: 'tool.toml-to-yaml.tagline',
		description: 'tool.toml-to-yaml.description',
		primaryKeyword: 'tool.toml-to-yaml.primary_keyword',
		metaTitle: 'tool.toml-to-yaml.meta_title',
		metaDescription: 'tool.toml-to-yaml.meta_description',
		engine: 'toml',
		operation: 'tool.toml-to-yaml.operation',
		layoutVariant: 'split',
		inputLanguage: 'toml',
		outputLanguage: 'yaml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'yaml', slug: 'to-toml' },
			{ category: 'toml', slug: 'to-json' },
			{ category: 'toml', slug: 'to-xml' },
			{ category: 'yaml', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.toml-to-yaml.faq.0.question',
				answer: 'tool.toml-to-yaml.faq.0.answer'
			},
			{
				question: 'tool.toml-to-yaml.faq.1.question',
				answer: 'tool.toml-to-yaml.faq.1.answer'
			}
		],
		useCases: [
			'tool.toml-to-yaml.use_case.0',
			'tool.toml-to-yaml.use_case.1',
			'tool.toml-to-yaml.use_case.2',
			'tool.toml-to-yaml.use_case.3'
		],
		sampleInput: `title = "fmtly"\n\n[server]\nhost = "localhost"\nport = 8080\n\n[logging]\nlevel = "info"\npretty = true`
	},
	{
		id: 'toml-to-xml',
		category: 'toml',
		slug: 'to-xml',
		displayName: 'tool.toml-to-xml.display_name',
		tagline: 'tool.toml-to-xml.tagline',
		description: 'tool.toml-to-xml.description',
		primaryKeyword: 'tool.toml-to-xml.primary_keyword',
		metaTitle: 'tool.toml-to-xml.meta_title',
		metaDescription: 'tool.toml-to-xml.meta_description',
		engine: 'toml',
		operation: 'tool.toml-to-xml.operation',
		layoutVariant: 'split',
		inputLanguage: 'toml',
		outputLanguage: 'xml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'xml', slug: 'to-json' },
			{ category: 'toml', slug: 'to-json' },
			{ category: 'toml', slug: 'to-yaml' },
			{ category: 'xml', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.toml-to-xml.faq.0.question',
				answer: 'tool.toml-to-xml.faq.0.answer'
			},
			{
				question: 'tool.toml-to-xml.faq.1.question',
				answer: 'tool.toml-to-xml.faq.1.answer'
			}
		],
		useCases: [
			'tool.toml-to-xml.use_case.0',
			'tool.toml-to-xml.use_case.1',
			'tool.toml-to-xml.use_case.2',
			'tool.toml-to-xml.use_case.3'
		],
		sampleInput: `title = "fmtly"\n\n[server]\nhost = "localhost"\nport = 8080\n\n[features]\nanalytics = false\ndark_mode = true`
	},
	{
		id: 'toml-to-html',
		category: 'toml',
		slug: 'to-html',
		displayName: 'tool.toml-to-html.display_name',
		tagline: 'tool.toml-to-html.tagline',
		description: 'tool.toml-to-html.description',
		primaryKeyword: 'tool.toml-to-html.primary_keyword',
		metaTitle: 'tool.toml-to-html.meta_title',
		metaDescription: 'tool.toml-to-html.meta_description',
		engine: 'toml',
		operation: 'tool.toml-to-html.operation',
		layoutVariant: 'split',
		inputLanguage: 'toml',
		outputLanguage: 'html',
		hasTreeView: false,
		relatedTools: [
			{ category: 'toml', slug: 'to-json' },
			{ category: 'toml', slug: 'to-xml' },
			{ category: 'csv', slug: 'to-html' }
		],
		faqs: [
			{
				question: 'tool.toml-to-html.faq.0.question',
				answer: 'tool.toml-to-html.faq.0.answer'
			},
			{
				question: 'tool.toml-to-html.faq.1.question',
				answer: 'tool.toml-to-html.faq.1.answer'
			}
		],
		useCases: [
			'tool.toml-to-html.use_case.0',
			'tool.toml-to-html.use_case.1',
			'tool.toml-to-html.use_case.2',
			'tool.toml-to-html.use_case.3'
		],
		sampleInput: `title = "fmtly"\n\n[server]\nhost = "localhost"\nport = 8080\n\n[features]\nanalytics = false\ndark_mode = true`
	},
	{
		id: 'toml-minifier',
		category: 'toml',
		slug: 'minifier',
		displayName: 'tool.toml-minifier.display_name',
		tagline: 'tool.toml-minifier.tagline',
		description: 'tool.toml-minifier.description',
		primaryKeyword: 'tool.toml-minifier.primary_keyword',
		metaTitle: 'tool.toml-minifier.meta_title',
		metaDescription: 'tool.toml-minifier.meta_description',
		engine: 'toml',
		operation: 'tool.toml-minifier.operation',
		layoutVariant: 'split',
		inputLanguage: 'toml',
		outputLanguage: 'toml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'toml', slug: 'formatter' },
			{ category: 'toml', slug: 'validator' },
			{ category: 'toml', slug: 'diff' }
		],
		faqs: [
			{
				question: 'tool.toml-minifier.faq.0.question',
				answer: 'tool.toml-minifier.faq.0.answer'
			},
			{
				question: 'tool.toml-minifier.faq.1.question',
				answer: 'tool.toml-minifier.faq.1.answer'
			}
		],
		useCases: [
			'tool.toml-minifier.use_case.0',
			'tool.toml-minifier.use_case.1',
			'tool.toml-minifier.use_case.2',
			'tool.toml-minifier.use_case.3'
		],
		sampleInput: `# Global settings\ntitle = "fmtly"\n\n[server]\nhost = "localhost"\nport = 8080\n\n[features]\nanalytics = false\ndark_mode = true`
	},
	{
		id: 'toml-diff',
		category: 'toml',
		slug: 'diff',
		displayName: 'tool.toml-diff.display_name',
		tagline: 'tool.toml-diff.tagline',
		description: 'tool.toml-diff.description',
		primaryKeyword: 'tool.toml-diff.primary_keyword',
		metaTitle: 'tool.toml-diff.meta_title',
		metaDescription: 'tool.toml-diff.meta_description',
		engine: 'diff',
		operation: 'tool.toml-diff.operation',
		layoutVariant: 'triple',
		inputLanguage: 'toml',
		outputLanguage: 'toml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'toml', slug: 'formatter' },
			{ category: 'toml', slug: 'validator' },
			{ category: 'json', slug: 'diff' },
			{ category: 'yaml', slug: 'diff' }
		],
		faqs: [
			{
				question: 'tool.toml-diff.faq.0.question',
				answer: 'tool.toml-diff.faq.0.answer'
			},
			{
				question: 'tool.toml-diff.faq.1.question',
				answer: 'tool.toml-diff.faq.1.answer'
			}
		],
		useCases: [
			'tool.toml-diff.use_case.0',
			'tool.toml-diff.use_case.1',
			'tool.toml-diff.use_case.2',
			'tool.toml-diff.use_case.3'
		],
		sampleInput: ''
	}
];
