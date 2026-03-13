import type { ToolDefinition } from '../types.js';

export const yamlTools: ToolDefinition[] = [
	{
		id: 'yaml-formatter',
		category: 'yaml',
		slug: 'formatter',
		displayName: 'tool.yaml-formatter.display_name',
		tagline: 'tool.yaml-formatter.tagline',
		description: 'tool.yaml-formatter.description',
		primaryKeyword: 'tool.yaml-formatter.primary_keyword',
		metaTitle: 'tool.yaml-formatter.meta_title',
		metaDescription: 'tool.yaml-formatter.meta_description',
		engine: 'yaml',
		operation: 'tool.yaml-formatter.operation',
		layoutVariant: 'split',
		inputLanguage: 'yaml',
		outputLanguage: 'yaml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'yaml', slug: 'validator' },
			{ category: 'yaml', slug: 'to-json' },
			{ category: 'json', slug: 'to-yaml' }
		],
		faqs: [
			{
				question: 'tool.yaml-formatter.faq.0.question',
				answer: 'tool.yaml-formatter.faq.0.answer'
			},
			{
				question: 'tool.yaml-formatter.faq.1.question',
				answer: 'tool.yaml-formatter.faq.1.answer'
			}
		],
		useCases: [
			'tool.yaml-formatter.use_case.0',
			'tool.yaml-formatter.use_case.1',
			'tool.yaml-formatter.use_case.2',
			'tool.yaml-formatter.use_case.3'
		],
		sampleInput: `name: fmtly
version: "1.0.0"
description: The modern developer toolkit
dependencies:
  svelte: "^5.0.0"
  typescript: "~5.6.0"
scripts:
  dev: vite dev
  build: vite build`
	},
	{
		id: 'yaml-validator',
		category: 'yaml',
		slug: 'validator',
		displayName: 'tool.yaml-validator.display_name',
		tagline: 'tool.yaml-validator.tagline',
		description: 'tool.yaml-validator.description',
		primaryKeyword: 'tool.yaml-validator.primary_keyword',
		metaTitle: 'tool.yaml-validator.meta_title',
		metaDescription: 'tool.yaml-validator.meta_description',
		engine: 'yaml',
		operation: 'tool.yaml-validator.operation',
		layoutVariant: 'single',
		inputLanguage: 'yaml',
		outputLanguage: 'yaml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'yaml', slug: 'formatter' },
			{ category: 'yaml', slug: 'to-json' },
			{ category: 'json', slug: 'to-yaml' }
		],
		faqs: [
			{
				question: 'tool.yaml-validator.faq.0.question',
				answer: 'tool.yaml-validator.faq.0.answer'
			},
			{
				question: 'tool.yaml-validator.faq.1.question',
				answer: 'tool.yaml-validator.faq.1.answer'
			}
		],
		useCases: [
			'tool.yaml-validator.use_case.0',
			'tool.yaml-validator.use_case.1',
			'tool.yaml-validator.use_case.2',
			'tool.yaml-validator.use_case.3'
		],
		sampleInput: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app`
	},
	{
		id: 'yaml-to-json',
		category: 'yaml',
		slug: 'to-json',
		displayName: 'tool.yaml-to-json.display_name',
		tagline: 'tool.yaml-to-json.tagline',
		description: 'tool.yaml-to-json.description',
		primaryKeyword: 'tool.yaml-to-json.primary_keyword',
		metaTitle: 'tool.yaml-to-json.meta_title',
		metaDescription: 'tool.yaml-to-json.meta_description',
		engine: 'yaml',
		operation: 'tool.yaml-to-json.operation',
		layoutVariant: 'split',
		inputLanguage: 'yaml',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'to-yaml' },
			{ category: 'yaml', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.yaml-to-json.faq.0.question',
				answer: 'tool.yaml-to-json.faq.0.answer'
			},
			{
				question: 'tool.yaml-to-json.faq.1.question',
				answer: 'tool.yaml-to-json.faq.1.answer'
			}
		],
		useCases: [
			'tool.yaml-to-json.use_case.0',
			'tool.yaml-to-json.use_case.1',
			'tool.yaml-to-json.use_case.2',
			'tool.yaml-to-json.use_case.3'
		],
		sampleInput: `server:
  host: localhost
  port: 8080
  ssl: true
database:
  connection: postgresql://localhost/mydb
  pool:
    min: 5
    max: 20
logging:
  level: info
  format: json`
	},
	{
		id: 'yaml-to-xml',
		category: 'yaml',
		slug: 'to-xml',
		displayName: 'tool.yaml-to-xml.display_name',
		tagline: 'tool.yaml-to-xml.tagline',
		description: 'tool.yaml-to-xml.description',
		primaryKeyword: 'tool.yaml-to-xml.primary_keyword',
		metaTitle: 'tool.yaml-to-xml.meta_title',
		metaDescription: 'tool.yaml-to-xml.meta_description',
		engine: 'yaml',
		operation: 'tool.yaml-to-xml.operation',
		layoutVariant: 'split',
		inputLanguage: 'yaml',
		outputLanguage: 'xml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' },
			{ category: 'color', slug: 'contrast' },
			{ category: 'crypto', slug: 'hash' }
		],
		faqs: [],
		useCases: [],
		sampleInput: 'root:\n  item: "Hello"'
	},
	{
		id: 'yaml-to-csv',
		category: 'yaml',
		slug: 'to-csv',
		displayName: 'tool.yaml-to-csv.display_name',
		tagline: 'tool.yaml-to-csv.tagline',
		description: 'tool.yaml-to-csv.description',
		primaryKeyword: 'tool.yaml-to-csv.primary_keyword',
		metaTitle: 'tool.yaml-to-csv.meta_title',
		metaDescription: 'tool.yaml-to-csv.meta_description',
		engine: 'yaml',
		operation: 'tool.yaml-to-csv.operation',
		layoutVariant: 'split',
		inputLanguage: 'yaml',
		outputLanguage: 'csv',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' },
			{ category: 'color', slug: 'contrast' },
			{ category: 'crypto', slug: 'hash' }
		],
		faqs: [],
		useCases: [],
		sampleInput: '- id: 1\n  name: "item"'
	},
	{
		id: 'yaml-to-toml',
		category: 'yaml',
		slug: 'to-toml',
		displayName: 'tool.yaml-to-toml.display_name',
		tagline: 'tool.yaml-to-toml.tagline',
		description: 'tool.yaml-to-toml.description',
		primaryKeyword: 'tool.yaml-to-toml.primary_keyword',
		metaTitle: 'tool.yaml-to-toml.meta_title',
		metaDescription: 'tool.yaml-to-toml.meta_description',
		engine: 'yaml',
		operation: 'tool.yaml-to-toml.operation',
		layoutVariant: 'split',
		inputLanguage: 'yaml',
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
		sampleInput: 'server:\n  port: 8080'
	},
	{
		id: 'yaml-diff',
		category: 'yaml',
		slug: 'diff',
		displayName: 'tool.yaml-diff.display_name',
		tagline: 'tool.yaml-diff.tagline',
		description: 'tool.yaml-diff.description',
		primaryKeyword: 'tool.yaml-diff.primary_keyword',
		metaTitle: 'tool.yaml-diff.meta_title',
		metaDescription: 'tool.yaml-diff.meta_description',
		engine: 'yaml',
		operation: 'tool.yaml-diff.operation',
		layoutVariant: 'dual-input',
		inputLanguage: 'yaml',
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
		sampleInput: 'a: 1'
	}
];
