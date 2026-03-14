import type { ToolDefinition } from '../types.js';

export const jsonTools: ToolDefinition[] = [
	{
		id: 'json-formatter',
		category: 'json',
		slug: 'formatter',
		displayName: 'tool.json-formatter.display_name',
		tagline: 'tool.json-formatter.tagline',
		description: 'tool.json-formatter.description',
		primaryKeyword: 'tool.json-formatter.primary_keyword',
		metaTitle: 'tool.json-formatter.meta_title',
		metaDescription: 'tool.json-formatter.meta_description',
		engine: 'json',
		operation: 'tool.json-formatter.operation',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'json',
		hasTreeView: true,
		relatedTools: [
			{ category: 'json', slug: 'validator' },
			{ category: 'json', slug: 'minifier' },
			{ category: 'json', slug: 'to-yaml' },
			{ category: 'json', slug: 'jsonpath' }
		],
		faqs: [
			{
				question: 'tool.json-formatter.faq.0.question',
				answer: 'tool.json-formatter.faq.0.answer'
			},
			{
				question: 'tool.json-formatter.faq.1.question',
				answer: 'tool.json-formatter.faq.1.answer'
			},
			{
				question: 'tool.json-formatter.faq.2.question',
				answer: 'tool.json-formatter.faq.2.answer'
			},
			{
				question: 'tool.json-formatter.faq.3.question',
				answer: 'tool.json-formatter.faq.3.answer'
			}
		],
		useCases: [
			'tool.json-formatter.use_case.0',
			'tool.json-formatter.use_case.1',
			'tool.json-formatter.use_case.2',
			'tool.json-formatter.use_case.3',
			'tool.json-formatter.use_case.4'
		],
		sampleInput: `{
  "name": "fmtly",
  "version": "1.0.0",
  "description": "The modern developer toolkit",
  "keywords": ["json", "formatter", "validator"],
  "author": {
    "name": "fmtly",
    "url": "https://fmtly.dev"
  },
  "license": "MIT"
}`
	},
	{
		id: 'json-validator',
		category: 'json',
		slug: 'validator',
		displayName: 'tool.json-validator.display_name',
		tagline: 'tool.json-validator.tagline',
		description: 'tool.json-validator.description',
		primaryKeyword: 'tool.json-validator.primary_keyword',
		metaTitle: 'tool.json-validator.meta_title',
		metaDescription: 'tool.json-validator.meta_description',
		engine: 'json',
		operation: 'tool.json-validator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'json',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'minifier' },
			{ category: 'json', slug: 'to-yaml' },
			{ category: 'json', slug: 'jsonpath' }
		],
		faqs: [
			{
				question: 'tool.json-validator.faq.0.question',
				answer: 'tool.json-validator.faq.0.answer'
			},
			{
				question: 'tool.json-validator.faq.1.question',
				answer: 'tool.json-validator.faq.1.answer'
			},
			{
				question: 'tool.json-validator.faq.2.question',
				answer: 'tool.json-validator.faq.2.answer'
			}
		],
		useCases: [
			'tool.json-validator.use_case.0',
			'tool.json-validator.use_case.1',
			'tool.json-validator.use_case.2',
			'tool.json-validator.use_case.3',
			'tool.json-validator.use_case.4'
		],
		sampleInput: `{
  "name": "example",
  "version": "1.0.0",
  "dependencies": {
    "svelte": "^5.0.0",
    "typescript": "~5.6.0"
  },
  "scripts": {
    "dev": "vite dev",
    "build": "vite build"
  }
}`
	},
	{
		id: 'json-minifier',
		category: 'json',
		slug: 'minifier',
		displayName: 'tool.json-minifier.display_name',
		tagline: 'tool.json-minifier.tagline',
		description: 'tool.json-minifier.description',
		primaryKeyword: 'tool.json-minifier.primary_keyword',
		metaTitle: 'tool.json-minifier.meta_title',
		metaDescription: 'tool.json-minifier.meta_description',
		engine: 'json',
		operation: 'tool.json-minifier.operation',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'validator' },
			{ category: 'json', slug: 'to-yaml' },
			{ category: 'json', slug: 'to-csv' }
		],
		faqs: [
			{
				question: 'tool.json-minifier.faq.0.question',
				answer: 'tool.json-minifier.faq.0.answer'
			},
			{
				question: 'tool.json-minifier.faq.1.question',
				answer: 'tool.json-minifier.faq.1.answer'
			},
			{
				question: 'tool.json-minifier.faq.2.question',
				answer: 'tool.json-minifier.faq.2.answer'
			}
		],
		useCases: [
			'tool.json-minifier.use_case.0',
			'tool.json-minifier.use_case.1',
			'tool.json-minifier.use_case.2',
			'tool.json-minifier.use_case.3',
			'tool.json-minifier.use_case.4'
		],
		sampleInput: `{
  "name": "fmtly",
  "version": "1.0.0",
  "description": "The modern developer toolkit",
  "repository": {
    "type": "git",
    "url": "https://github.com/fmtly/fmtly"
  },
  "keywords": [
    "json",
    "formatter",
    "minifier",
    "validator"
  ]
}`
	},
	{
		id: 'json-to-yaml',
		category: 'json',
		slug: 'to-yaml',
		displayName: 'tool.json-to-yaml.display_name',
		tagline: 'tool.json-to-yaml.tagline',
		description: 'tool.json-to-yaml.description',
		primaryKeyword: 'tool.json-to-yaml.primary_keyword',
		metaTitle: 'tool.json-to-yaml.meta_title',
		metaDescription: 'tool.json-to-yaml.meta_description',
		engine: 'json',
		operation: 'tool.json-to-yaml.operation',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'yaml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'yaml', slug: 'to-json' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'yaml', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.json-to-yaml.faq.0.question',
				answer: 'tool.json-to-yaml.faq.0.answer'
			},
			{
				question: 'tool.json-to-yaml.faq.1.question',
				answer: 'tool.json-to-yaml.faq.1.answer'
			}
		],
		useCases: [
			'tool.json-to-yaml.use_case.0',
			'tool.json-to-yaml.use_case.1',
			'tool.json-to-yaml.use_case.2',
			'tool.json-to-yaml.use_case.3'
		],
		sampleInput: `{
  "server": {
    "host": "localhost",
    "port": 8080,
    "ssl": true
  },
  "database": {
    "connection": "postgresql://localhost/mydb",
    "pool": {
      "min": 5,
      "max": 20
    }
  }
}`
	},
	{
		id: 'json-to-toml',
		category: 'json',
		slug: 'to-toml',
		displayName: 'tool.json-to-toml.display_name',
		tagline: 'tool.json-to-toml.tagline',
		description: 'tool.json-to-toml.description',
		primaryKeyword: 'tool.json-to-toml.primary_keyword',
		metaTitle: 'tool.json-to-toml.meta_title',
		metaDescription: 'tool.json-to-toml.meta_description',
		engine: 'json',
		operation: 'tool.json-to-toml.operation',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'toml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'to-yaml' },
			{ category: 'yaml', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.json-to-toml.faq.0.question',
				answer: 'tool.json-to-toml.faq.0.answer'
			},
			{
				question: 'tool.json-to-toml.faq.1.question',
				answer: 'tool.json-to-toml.faq.1.answer'
			}
		],
		useCases: [
			'tool.json-to-toml.use_case.0',
			'tool.json-to-toml.use_case.1',
			'tool.json-to-toml.use_case.2'
		],
		sampleInput: `{
  "package": {
    "name": "my-app",
    "version": "1.0.0",
    "edition": "2021"
  },
  "dependencies": {
    "serde": "1.0",
    "tokio": "1.0"
  }
}`
	},
	{
		id: 'json-to-markdown',
		category: 'json',
		slug: 'to-markdown',
		displayName: 'tool.json-to-markdown.display_name',
		tagline: 'tool.json-to-markdown.tagline',
		description: 'tool.json-to-markdown.description',
		primaryKeyword: 'tool.json-to-markdown.primary_keyword',
		metaTitle: 'tool.json-to-markdown.meta_title',
		metaDescription: 'tool.json-to-markdown.meta_description',
		engine: 'json',
		operation: 'tool.json-to-markdown.operation',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'markdown',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'to-yaml' },
			{ category: 'text', slug: 'markdown-to-html' }
		],
		faqs: [
			{
				question: 'tool.json-to-markdown.faq.0.question',
				answer: 'tool.json-to-markdown.faq.0.answer'
			},
			{
				question: 'tool.json-to-markdown.faq.1.question',
				answer: 'tool.json-to-markdown.faq.1.answer'
			}
		],
		useCases: [
			'tool.json-to-markdown.use_case.0',
			'tool.json-to-markdown.use_case.1',
			'tool.json-to-markdown.use_case.2',
			'tool.json-to-markdown.use_case.3'
		],
		sampleInput: `[
  { "name": "Alice", "role": "Admin", "status": "Active" },
  { "name": "Bob",   "role": "Editor", "status": "Inactive" },
  { "name": "Carol", "role": "Viewer", "status": "Active" }
]`
	},
	{
		id: 'json-jsonpath',
		category: 'json',
		slug: 'jsonpath',
		displayName: 'tool.json-jsonpath.display_name',
		tagline: 'tool.json-jsonpath.tagline',
		description: 'tool.json-jsonpath.description',
		primaryKeyword: 'tool.json-jsonpath.primary_keyword',
		metaTitle: 'tool.json-jsonpath.meta_title',
		metaDescription: 'tool.json-jsonpath.meta_description',
		engine: 'json',
		operation: 'tool.json-jsonpath.operation',
		layoutVariant: 'dual-input',
		inputLanguage: 'json',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'jmespath' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'validator' }
		],
		faqs: [
			{
				question: 'tool.json-jsonpath.faq.0.question',
				answer: 'tool.json-jsonpath.faq.0.answer'
			},
			{
				question: 'tool.json-jsonpath.faq.1.question',
				answer: 'tool.json-jsonpath.faq.1.answer'
			},
			{
				question: 'tool.json-jsonpath.faq.2.question',
				answer: 'tool.json-jsonpath.faq.2.answer'
			}
		],
		useCases: [
			'tool.json-jsonpath.use_case.0',
			'tool.json-jsonpath.use_case.1',
			'tool.json-jsonpath.use_case.2',
			'tool.json-jsonpath.use_case.3'
		],
		sampleInput: `{
  "store": {
    "book": [
      { "title": "Sayings of the Century", "price": 8.95, "category": "reference" },
      { "title": "Sword of Honour", "price": 12.99, "category": "fiction" },
      { "title": "Moby Dick", "price": 8.99, "category": "fiction" }
    ],
    "bicycle": { "color": "red", "price": 19.95 }
  }
}`
	},
	{
		id: 'json-jmespath',
		category: 'json',
		slug: 'jmespath',
		displayName: 'tool.json-jmespath.display_name',
		tagline: 'tool.json-jmespath.tagline',
		description: 'tool.json-jmespath.description',
		primaryKeyword: 'tool.json-jmespath.primary_keyword',
		metaTitle: 'tool.json-jmespath.meta_title',
		metaDescription: 'tool.json-jmespath.meta_description',
		engine: 'json',
		operation: 'tool.json-jmespath.operation',
		layoutVariant: 'dual-input',
		inputLanguage: 'json',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'jsonpath' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'validator' }
		],
		faqs: [
			{
				question: 'tool.json-jmespath.faq.0.question',
				answer: 'tool.json-jmespath.faq.0.answer'
			},
			{
				question: 'tool.json-jmespath.faq.1.question',
				answer: 'tool.json-jmespath.faq.1.answer'
			},
			{
				question: 'tool.json-jmespath.faq.2.question',
				answer: 'tool.json-jmespath.faq.2.answer'
			}
		],
		useCases: [
			'tool.json-jmespath.use_case.0',
			'tool.json-jmespath.use_case.1',
			'tool.json-jmespath.use_case.2',
			'tool.json-jmespath.use_case.3'
		],
		sampleInput: `{
  "locations": [
    { "name": "Seattle", "state": "WA", "population": 737255 },
    { "name": "Portland", "state": "OR", "population": 652503 },
    { "name": "Denver", "state": "CO", "population": 715522 }
  ]
}`
	},
	{
		id: 'json-diff',
		category: 'json',
		slug: 'diff',
		displayName: 'tool.json-diff.display_name',
		tagline: 'tool.json-diff.tagline',
		description: 'tool.json-diff.description',
		primaryKeyword: 'tool.json-diff.primary_keyword',
		metaTitle: 'tool.json-diff.meta_title',
		metaDescription: 'tool.json-diff.meta_description',
		engine: 'diff',
		operation: 'tool.json-diff.operation',
		layoutVariant: 'triple',
		inputLanguage: 'json',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'validator' },
			{ category: 'diff', slug: 'text' }
		],
		faqs: [
			{
				question: 'tool.json-diff.faq.0.question',
				answer: 'tool.json-diff.faq.0.answer'
			},
			{
				question: 'tool.json-diff.faq.1.question',
				answer: 'tool.json-diff.faq.1.answer'
			},
			{
				question: 'tool.json-diff.faq.2.question',
				answer: 'tool.json-diff.faq.2.answer'
			}
		],
		useCases: [
			'tool.json-diff.use_case.0',
			'tool.json-diff.use_case.1',
			'tool.json-diff.use_case.2',
			'tool.json-diff.use_case.3'
		],
		sampleInput: ''
	}
];
