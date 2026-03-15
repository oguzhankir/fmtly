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
			{ category: 'yaml', slug: 'minifier' },
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
		id: 'yaml-minifier',
		category: 'yaml',
		slug: 'minifier',
		displayName: 'tool.yaml-minifier.display_name',
		tagline: 'tool.yaml-minifier.tagline',
		description: 'tool.yaml-minifier.description',
		primaryKeyword: 'tool.yaml-minifier.primary_keyword',
		metaTitle: 'tool.yaml-minifier.meta_title',
		metaDescription: 'tool.yaml-minifier.meta_description',
		engine: 'yaml',
		operation: 'tool.yaml-minifier.operation',
		layoutVariant: 'split',
		inputLanguage: 'yaml',
		outputLanguage: 'yaml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'yaml', slug: 'formatter' },
			{ category: 'yaml', slug: 'validator' },
			{ category: 'yaml', slug: 'diff' }
		],
		faqs: [
			{
				question: 'tool.yaml-minifier.faq.0.question',
				answer: 'tool.yaml-minifier.faq.0.answer'
			},
			{
				question: 'tool.yaml-minifier.faq.1.question',
				answer: 'tool.yaml-minifier.faq.1.answer'
			}
		],
		useCases: [
			'tool.yaml-minifier.use_case.0',
			'tool.yaml-minifier.use_case.1',
			'tool.yaml-minifier.use_case.2',
			'tool.yaml-minifier.use_case.3'
		],
		sampleInput: `apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  theme: dark
  retries: "3"
---
services:
  - name: api
    port: 8080
  - name: worker
    port: 9090`
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
		layoutVariant: 'single-panel',
		inputLanguage: 'yaml',
		outputLanguage: 'yaml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'yaml', slug: 'formatter' },
			{ category: 'yaml', slug: 'minifier' },
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
			{ category: 'yaml', slug: 'formatter' },
			{ category: 'xml', slug: 'formatter' },
			{ category: 'xml', slug: 'validator' }
		],
		faqs: [
			{
				question: 'tool.yaml-to-xml.faq.0.question',
				answer: 'tool.yaml-to-xml.faq.0.answer'
			},
			{
				question: 'tool.yaml-to-xml.faq.1.question',
				answer: 'tool.yaml-to-xml.faq.1.answer'
			}
		],
		useCases: [
			'tool.yaml-to-xml.use_case.0',
			'tool.yaml-to-xml.use_case.1',
			'tool.yaml-to-xml.use_case.2',
			'tool.yaml-to-xml.use_case.3'
		],
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
			{ category: 'yaml', slug: 'formatter' },
			{ category: 'csv', slug: 'to-json' },
			{ category: 'json', slug: 'to-csv' }
		],
		faqs: [
			{
				question: 'tool.yaml-to-csv.faq.0.question',
				answer: 'tool.yaml-to-csv.faq.0.answer'
			},
			{
				question: 'tool.yaml-to-csv.faq.1.question',
				answer: 'tool.yaml-to-csv.faq.1.answer'
			}
		],
		useCases: [
			'tool.yaml-to-csv.use_case.0',
			'tool.yaml-to-csv.use_case.1',
			'tool.yaml-to-csv.use_case.2',
			'tool.yaml-to-csv.use_case.3'
		],
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
			{ category: 'yaml', slug: 'formatter' },
			{ category: 'toml', slug: 'formatter' },
			{ category: 'toml', slug: 'to-json' }
		],
		faqs: [
			{
				question: 'tool.yaml-to-toml.faq.0.question',
				answer: 'tool.yaml-to-toml.faq.0.answer'
			},
			{
				question: 'tool.yaml-to-toml.faq.1.question',
				answer: 'tool.yaml-to-toml.faq.1.answer'
			}
		],
		useCases: [
			'tool.yaml-to-toml.use_case.0',
			'tool.yaml-to-toml.use_case.1',
			'tool.yaml-to-toml.use_case.2',
			'tool.yaml-to-toml.use_case.3'
		],
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
		engine: 'diff',
		operation: 'tool.yaml-diff.operation',
		layoutVariant: 'triple',
		inputLanguage: 'yaml',
		outputLanguage: 'yaml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'yaml', slug: 'formatter' },
			{ category: 'yaml', slug: 'validator' },
			{ category: 'json', slug: 'diff' },
			{ category: 'xml', slug: 'diff' }
		],
		faqs: [
			{
				question: 'tool.yaml-diff.faq.0.question',
				answer: 'tool.yaml-diff.faq.0.answer'
			},
			{
				question: 'tool.yaml-diff.faq.1.question',
				answer: 'tool.yaml-diff.faq.1.answer'
			},
			{
				question: 'tool.yaml-diff.faq.2.question',
				answer: 'tool.yaml-diff.faq.2.answer'
			}
		],
		useCases: [
			'tool.yaml-diff.use_case.0',
			'tool.yaml-diff.use_case.1',
			'tool.yaml-diff.use_case.2',
			'tool.yaml-diff.use_case.3'
		],
		sampleInput: 'service:\n  name: api\n  replicas: 2'
	},
	{
		id: 'yaml-query',
		category: 'yaml',
		slug: 'query',
		displayName: 'tool.yaml-query.display_name',
		tagline: 'tool.yaml-query.tagline',
		description: 'tool.yaml-query.description',
		primaryKeyword: 'tool.yaml-query.primary_keyword',
		metaTitle: 'tool.yaml-query.meta_title',
		metaDescription: 'tool.yaml-query.meta_description',
		engine: 'yaml',
		operation: 'tool.yaml-query.operation',
		layoutVariant: 'dual-input',
		inputLanguage: 'yaml',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'yaml', slug: 'validator' },
			{ category: 'yaml', slug: 'to-json' },
			{ category: 'yaml', slug: 'diff' },
			{ category: 'json', slug: 'jsonpath' }
		],
		faqs: [
			{
				question: 'tool.yaml-query.faq.0.question',
				answer: 'tool.yaml-query.faq.0.answer'
			},
			{
				question: 'tool.yaml-query.faq.1.question',
				answer: 'tool.yaml-query.faq.1.answer'
			}
		],
		useCases: [
			'tool.yaml-query.use_case.0',
			'tool.yaml-query.use_case.1',
			'tool.yaml-query.use_case.2',
			'tool.yaml-query.use_case.3'
		],
		sampleInput: `store:
  book:
    - title: Sayings of the Century
      price: 8.95
      category: reference
    - title: Sword of Honour
      price: 12.99
      category: fiction
    - title: Moby Dick
      price: 8.99
      category: fiction
  bicycle:
    color: red
    price: 19.95`
	}
];
