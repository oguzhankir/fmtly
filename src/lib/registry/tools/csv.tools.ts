import type { ToolDefinition } from '../types.js';

export const csvTools: ToolDefinition[] = [
	{
		id: 'csv-to-json',
		category: 'csv',
		slug: 'to-json',
		displayName: 'tool.csv-to-json.display_name',
		tagline: 'tool.csv-to-json.tagline',
		description: 'tool.csv-to-json.description',
		primaryKeyword: 'tool.csv-to-json.primary_keyword',
		metaTitle: 'tool.csv-to-json.meta_title',
		metaDescription: 'tool.csv-to-json.meta_description',
		engine: 'csv',
		operation: 'tool.csv-to-json.operation',
		layoutVariant: 'split',
		inputLanguage: 'csv',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'to-csv' },
			{ category: 'csv', slug: 'formatter' },
			{ category: 'csv', slug: 'validator' }
		],
		faqs: [
			{
				question: 'tool.csv-to-json.faq.0.question',
				answer: 'tool.csv-to-json.faq.0.answer'
			},
			{
				question: 'tool.csv-to-json.faq.1.question',
				answer: 'tool.csv-to-json.faq.1.answer'
			}
		],
		useCases: [
			'tool.csv-to-json.use_case.0',
			'tool.csv-to-json.use_case.1',
			'tool.csv-to-json.use_case.2',
			'tool.csv-to-json.use_case.3'
		],
		sampleInput: `name,age,city,active
Alice,30,New York,true
Bob,25,San Francisco,false
Charlie,35,London,true
Diana,28,Tokyo,true`
	},
	{
		id: 'json-to-csv',
		category: 'json',
		slug: 'to-csv',
		displayName: 'tool.json-to-csv.display_name',
		tagline: 'tool.json-to-csv.tagline',
		description: 'tool.json-to-csv.description',
		primaryKeyword: 'tool.json-to-csv.primary_keyword',
		metaTitle: 'tool.json-to-csv.meta_title',
		metaDescription: 'tool.json-to-csv.meta_description',
		engine: 'json',
		operation: 'to-csv',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'csv',
		hasTreeView: false,
		relatedTools: [
			{ category: 'csv', slug: 'to-json' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'minifier' }
		],
		faqs: [
			{
				question: 'tool.json-to-csv.faq.0.question',
				answer: 'tool.json-to-csv.faq.0.answer'
			},
			{
				question: 'tool.json-to-csv.faq.1.question',
				answer: 'tool.json-to-csv.faq.1.answer'
			}
		],
		useCases: [
			'tool.json-to-csv.use_case.0',
			'tool.json-to-csv.use_case.1',
			'tool.json-to-csv.use_case.2',
			'tool.json-to-csv.use_case.3'
		],
		sampleInput: `[
  {"name": "Alice", "age": 30, "city": "New York", "active": true},
  {"name": "Bob", "age": 25, "city": "San Francisco", "active": false},
  {"name": "Charlie", "age": 35, "city": "London", "active": true}
]`
	},
	{
		id: 'csv-to-xml',
		category: 'csv',
		slug: 'to-xml',
		displayName: 'tool.csv-to-xml.display_name',
		tagline: 'tool.csv-to-xml.tagline',
		description: 'tool.csv-to-xml.description',
		primaryKeyword: 'tool.csv-to-xml.primary_keyword',
		metaTitle: 'tool.csv-to-xml.meta_title',
		metaDescription: 'tool.csv-to-xml.meta_description',
		engine: 'csv',
		operation: 'toXml',
		layoutVariant: 'split',
		inputLanguage: 'csv',
		outputLanguage: 'xml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'csv', slug: 'to-json' },
			{ category: 'csv', slug: 'to-yaml' },
			{ category: 'csv', slug: 'validator' }
		],
		faqs: [
			{
				question: 'tool.csv-to-xml.faq.0.question',
				answer: 'tool.csv-to-xml.faq.0.answer'
			}
		],
		useCases: ['tool.csv-to-xml.use_case.0', 'tool.csv-to-xml.use_case.1'],
		sampleInput: 'id,name,status\n1,Alice,active\n2,Bob,inactive'
	},
	{
		id: 'csv-to-yaml',
		category: 'csv',
		slug: 'to-yaml',
		displayName: 'tool.csv-to-yaml.display_name',
		tagline: 'tool.csv-to-yaml.tagline',
		description: 'tool.csv-to-yaml.description',
		primaryKeyword: 'tool.csv-to-yaml.primary_keyword',
		metaTitle: 'tool.csv-to-yaml.meta_title',
		metaDescription: 'tool.csv-to-yaml.meta_description',
		engine: 'csv',
		operation: 'toYaml',
		layoutVariant: 'split',
		inputLanguage: 'csv',
		outputLanguage: 'yaml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'csv', slug: 'to-json' },
			{ category: 'csv', slug: 'to-xml' },
			{ category: 'csv', slug: 'validator' }
		],
		faqs: [
			{
				question: 'tool.csv-to-yaml.faq.0.question',
				answer: 'tool.csv-to-yaml.faq.0.answer'
			}
		],
		useCases: ['tool.csv-to-yaml.use_case.0', 'tool.csv-to-yaml.use_case.1'],
		sampleInput: 'service,port,enabled\napi,8080,true\nworker,9090,false'
	},
	{
		id: 'csv-to-html',
		category: 'csv',
		slug: 'to-html',
		displayName: 'tool.csv-to-html.display_name',
		tagline: 'tool.csv-to-html.tagline',
		description: 'tool.csv-to-html.description',
		primaryKeyword: 'tool.csv-to-html.primary_keyword',
		metaTitle: 'tool.csv-to-html.meta_title',
		metaDescription: 'tool.csv-to-html.meta_description',
		engine: 'csv',
		operation: 'toHtmlTable',
		layoutVariant: 'split',
		inputLanguage: 'csv',
		outputLanguage: 'html',
		hasTreeView: false,
		relatedTools: [
			{ category: 'csv', slug: 'formatter' },
			{ category: 'csv', slug: 'validator' },
			{ category: 'csv', slug: 'to-xml' }
		],
		faqs: [
			{
				question: 'tool.csv-to-html.faq.0.question',
				answer: 'tool.csv-to-html.faq.0.answer'
			}
		],
		useCases: ['tool.csv-to-html.use_case.0', 'tool.csv-to-html.use_case.1'],
		sampleInput: 'name,score,team\nAlice,98,Blue\nBob,91,Green'
	},
	{
		id: 'csv-formatter',
		category: 'csv',
		slug: 'formatter',
		displayName: 'tool.csv-formatter.display_name',
		tagline: 'tool.csv-formatter.tagline',
		description: 'tool.csv-formatter.description',
		primaryKeyword: 'tool.csv-formatter.primary_keyword',
		metaTitle: 'tool.csv-formatter.meta_title',
		metaDescription: 'tool.csv-formatter.meta_description',
		engine: 'csv',
		operation: 'format',
		layoutVariant: 'split',
		inputLanguage: 'csv',
		outputLanguage: 'csv',
		hasTreeView: false,
		relatedTools: [
			{ category: 'csv', slug: 'validator' },
			{ category: 'csv', slug: 'to-json' },
			{ category: 'csv', slug: 'to-html' }
		],
		faqs: [
			{
				question: 'tool.csv-formatter.faq.0.question',
				answer: 'tool.csv-formatter.faq.0.answer'
			}
		],
		useCases: ['tool.csv-formatter.use_case.0', 'tool.csv-formatter.use_case.1'],
		sampleInput: 'id ; name ; city\n1 ; Alice ; Berlin\n2 ; Bob ; Paris'
	},
	{
		id: 'csv-validator',
		category: 'csv',
		slug: 'validator',
		displayName: 'tool.csv-validator.display_name',
		tagline: 'tool.csv-validator.tagline',
		description: 'tool.csv-validator.description',
		primaryKeyword: 'tool.csv-validator.primary_keyword',
		metaTitle: 'tool.csv-validator.meta_title',
		metaDescription: 'tool.csv-validator.meta_description',
		engine: 'csv',
		operation: 'validate',
		layoutVariant: 'single-panel',
		inputLanguage: 'csv',
		outputLanguage: 'csv',
		hasTreeView: false,
		relatedTools: [
			{ category: 'csv', slug: 'formatter' },
			{ category: 'csv', slug: 'to-json' },
			{ category: 'csv', slug: 'to-html' }
		],
		faqs: [
			{
				question: 'tool.csv-validator.faq.0.question',
				answer: 'tool.csv-validator.faq.0.answer'
			}
		],
		useCases: ['tool.csv-validator.use_case.0', 'tool.csv-validator.use_case.1'],
		sampleInput: 'id,name,name\n1,Alice,Alice\n2,Bob'
	}
];
