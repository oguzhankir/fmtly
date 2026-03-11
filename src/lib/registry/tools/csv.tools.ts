import type { ToolDefinition } from '../types.js';

export const csvTools: ToolDefinition[] = [
	{
		id: 'csv-to-json',
		category: 'csv',
		slug: 'to-json',
		displayName: 'CSV to JSON',
		tagline: 'Convert CSV data to a JSON array',
		description:
			'Convert CSV with headers to a JSON array of objects, or without headers to a JSON array of arrays. Supports dynamic type detection for numbers and booleans.',
		primaryKeyword: 'csv to json',
		metaTitle: 'CSV to JSON Converter — fmtly.dev',
		metaDescription:
			'Convert CSV to JSON instantly in your browser. Supports headers, dynamic typing, and custom delimiters. No data uploaded — runs entirely client-side.',
		engine: 'encoder',
		operation: 'to-json',
		layoutVariant: 'split',
		inputLanguage: 'csv',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			'{ category: json',
			'slug: to-csv }',
			'{ category: json',
			'slug: formatter }',
			'{ category: csv',
			'slug: to-json }'
		],
		faqs: [
			{
				question: 'Does this tool detect data types?',
				answer:
					'Yes. Numbers and booleans are automatically detected and converted to their JSON equivalents instead of strings.'
			},
			{
				question: 'What about CSV files without headers?',
				answer:
					'You can toggle the headers option off. Without headers, each row becomes a JSON array of values instead of an object.'
			}
		],
		useCases: [
			'Convert spreadsheet exports to JSON for web applications',
			'Transform CSV data feeds into JSON for APIs',
			'Import CSV data into JavaScript applications',
			'Convert log files in CSV format to structured JSON'
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
		displayName: 'JSON to CSV',
		tagline: 'Convert a JSON array to CSV format',
		description:
			'Convert a JSON array of objects to CSV with automatic header generation. Nested objects are flattened using dot-notation keys for full data preservation.',
		primaryKeyword: 'json to csv',
		metaTitle: 'JSON to CSV Converter — fmtly.dev',
		metaDescription:
			'Convert JSON arrays to CSV instantly. Automatic header generation, nested object flattening with dot-notation keys. No data leaves your device.',
		engine: 'json',
		operation: 'to-csv',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'csv',
		hasTreeView: false,
		relatedTools: [
			'{ category: csv',
			'slug: to-json }',
			'{ category: json',
			'slug: formatter }',
			'{ category: json',
			'slug: minifier }'
		],
		faqs: [
			{
				question: 'How are nested objects handled?',
				answer:
					'Nested objects are flattened using dot-notation. For example, {"user": {"name": "Alice"}} becomes a column "user.name" with value "Alice".'
			},
			{
				question: 'Does the input need to be an array?',
				answer:
					'Yes. The JSON input must be an array of objects. Each object becomes one row, and object keys become column headers.'
			}
		],
		useCases: [
			'Export API response data to spreadsheet format',
			'Convert JSON data for import into Excel or Google Sheets',
			'Generate CSV reports from JSON databases',
			'Transform structured data for data analysis tools'
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
		displayName: 'CSV to XML',
		tagline: 'Convert CSV data to XML format',
		description: 'Convert CSV tables to structured XML easily.',
		primaryKeyword: 'csv to xml',
		metaTitle: 'CSV to XML Converter',
		metaDescription: 'Convert CSV to XML instantly.',
		engine: 'csv',
		operation: 'toXml',
		layoutVariant: 'split',
		inputLanguage: 'csv',
		outputLanguage: 'xml',
		hasTreeView: false,
		relatedTools: ['json/formatter', 'text/word-counter', 'color/contrast', 'crypto/hash'],
		faqs: [],
		useCases: [],
		sampleInput: 'id,name\n1,Alice'
	},
	{
		id: 'csv-to-yaml',
		category: 'csv',
		slug: 'to-yaml',
		displayName: 'CSV to YAML',
		tagline: 'Convert CSV data to YAML format',
		description: 'Convert CSV records into readable YAML array format.',
		primaryKeyword: 'csv to yaml',
		metaTitle: 'CSV to YAML Converter',
		metaDescription: 'Convert CSV to YAML instantly.',
		engine: 'csv',
		operation: 'toYaml',
		layoutVariant: 'split',
		inputLanguage: 'csv',
		outputLanguage: 'yaml',
		hasTreeView: false,
		relatedTools: ['json/formatter', 'text/word-counter', 'color/contrast', 'crypto/hash'],
		faqs: [],
		useCases: [],
		sampleInput: 'id,value\n1,true'
	},
	{
		id: 'csv-to-html',
		category: 'csv',
		slug: 'to-html',
		displayName: 'CSV to HTML Table',
		tagline: 'Convert CSV to HTML markup',
		description: 'Convert CSV data to an HTML <table> tag easily.',
		primaryKeyword: 'csv to html',
		metaTitle: 'CSV to HTML Table Converter',
		metaDescription: 'Convert CSV to HTML instantly.',
		engine: 'csv',
		operation: 'toHtmlTable',
		layoutVariant: 'split',
		inputLanguage: 'csv',
		outputLanguage: 'html',
		hasTreeView: false,
		relatedTools: ['json/formatter', 'text/word-counter', 'color/contrast', 'crypto/hash'],
		faqs: [],
		useCases: [],
		sampleInput: 'header1,header2\ndata1,data2'
	},
	{
		id: 'csv-formatter',
		category: 'csv',
		slug: 'formatter',
		displayName: 'CSV Formatter',
		tagline: 'Format and normalize CSV data',
		description: 'Format unkempt CSV files adding proper quotes and delimiters.',
		primaryKeyword: 'csv formatter',
		metaTitle: 'CSV Formatter & Normalizer',
		metaDescription: 'Format CSV and normalize it instantly.',
		engine: 'csv',
		operation: 'format',
		layoutVariant: 'split',
		inputLanguage: 'csv',
		outputLanguage: 'csv',
		hasTreeView: false,
		relatedTools: ['json/formatter', 'text/word-counter', 'color/contrast', 'crypto/hash'],
		faqs: [],
		useCases: [],
		sampleInput: 'id,name\n1,john'
	},
	{
		id: 'csv-validator',
		category: 'csv',
		slug: 'validator',
		displayName: 'CSV Validator',
		tagline: 'Validate CSV syntax',
		description: 'Validate CSV formats and ensure structure is correct.',
		primaryKeyword: 'csv validator',
		metaTitle: 'CSV Syntax Validator',
		metaDescription: 'Validate CSV instantly and report parse errors.',
		engine: 'csv',
		operation: 'validate',
		layoutVariant: 'single',
		inputLanguage: 'csv',
		outputLanguage: 'csv',
		hasTreeView: false,
		relatedTools: ['json/formatter', 'text/word-counter', 'color/contrast', 'crypto/hash'],
		faqs: [],
		useCases: [],
		sampleInput: 'col1,col2\nval1,val2'
	}
];
