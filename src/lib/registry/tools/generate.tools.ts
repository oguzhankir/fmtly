import type { ToolDefinition } from '../types.js';

const sampleJson =
	'{\n  "name": "Alice",\n  "age": 30,\n  "email": "alice@example.com",\n  "isActive": true,\n  "tags": ["admin", "user"],\n  "address": {\n    "street": "123 Main St",\n    "city": "Springfield",\n    "zip": "62704"\n  }\n}';

function langTool(
	slug: string,
	displayName: string,
	keyword: string,
	outputLang: string
): ToolDefinition {
	return {
		id: `generate-${slug}`,
		category: 'generate',
		slug,
		displayName,
		tagline: `Generate ${displayName.split('JSON to ')[1] ?? displayName} types from JSON.`,
		description: `Paste JSON and instantly get ${displayName.split('JSON to ')[1] ?? displayName} type definitions. Uses quicktype-core — runs entirely in your browser.`,
		primaryKeyword: keyword,
		metaTitle: `${displayName} | fmtly`,
		metaDescription: `Convert JSON to ${displayName.split('JSON to ')[1] ?? displayName} types instantly. Runs locally — no server.`,
		engine: 'generate',
		operation: slug,
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: outputLang,
		hasTreeView: false,
		relatedTools: [
			{ category: 'generate', slug: 'json-to-typescript' },
			{ category: 'generate', slug: 'json-schema' }
		],
		faqs: [
			{
				question: 'How accurate are the generated types?',
				answer:
					'Types are inferred from sample JSON — provide representative data for best results.'
			}
		],
		useCases: [
			'Generating types from API responses',
			'Bootstrapping type definitions from sample data'
		],
		sampleInput: sampleJson
	};
}

export const generateTools: ToolDefinition[] = [
	langTool('json-to-typescript', 'JSON to TypeScript', 'json to typescript', 'typescript'),
	langTool('json-to-python', 'JSON to Python', 'json to python', 'python'),
	langTool('json-to-go', 'JSON to Go', 'json to go', 'go'),
	langTool('json-to-rust', 'JSON to Rust', 'json to rust', 'rust'),
	langTool('json-to-java', 'JSON to Java', 'json to java', 'java'),
	langTool('json-to-csharp', 'JSON to C#', 'json to csharp', 'csharp'),
	{
		...langTool('json-to-zod', 'JSON to Zod', 'json to zod schema', 'typescript'),
		description:
			'Paste JSON and get a Zod validation schema with inferred types — pure JS, no library dependency at runtime.'
	},
	{
		id: 'generate-json-schema',
		category: 'generate',
		slug: 'json-schema',
		displayName: 'JSON Schema Generator',
		tagline: 'Generate JSON Schema from sample JSON data.',
		description:
			'Paste a JSON sample and get a JSON Schema (2020-12) with inferred types, nested objects, and required fields. Pure JS — no library.',
		primaryKeyword: 'json schema generator',
		metaTitle: 'JSON Schema Generator | fmtly',
		metaDescription:
			'Generate JSON Schema from sample data. Infers types, nested objects, required fields — no upload.',
		engine: 'generate',
		operation: 'json-schema',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'generate', slug: 'json-to-typescript' },
			{ category: 'generate', slug: 'json-to-zod' }
		],
		faqs: [
			{ question: 'Which JSON Schema version?', answer: 'Draft 2020-12 — the latest version.' }
		],
		useCases: ['Creating schemas for API validation', 'Documenting data structures'],
		sampleInput: sampleJson
	},
	{
		id: 'generate-markdown-table',
		category: 'generate',
		slug: 'markdown-table',
		displayName: 'JSON to Markdown Table',
		tagline: 'Convert JSON arrays to Markdown tables.',
		description:
			'Paste a JSON array of objects and get a formatted Markdown table. Pure JS — no library.',
		primaryKeyword: 'json to markdown table',
		metaTitle: 'JSON to Markdown Table | fmtly',
		metaDescription:
			'Convert JSON arrays to Markdown tables instantly. Copy-paste ready — no upload.',
		engine: 'generate',
		operation: 'markdown-table',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'markdown',
		hasTreeView: false,
		relatedTools: [
			{ category: 'generate', slug: 'json-schema' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'What JSON format is expected?',
				answer: 'A JSON array of objects, e.g. [{"name":"Alice","age":30}].'
			}
		],
		useCases: ['Creating tables for README files', 'Converting API data to documentation'],
		sampleInput:
			'[{"name":"Alice","age":30,"city":"Springfield"},{"name":"Bob","age":25,"city":"Shelbyville"}]'
	},
	{
		id: 'generate-fake-data',
		category: 'generate',
		slug: 'fake-data',
		displayName: 'Fake Data Generator',
		tagline: 'Generate realistic fake data for testing.',
		description:
			'Build a custom schema with 26+ field types, generate 1-1000 rows of fake data. Output as JSON, CSV, or SQL INSERT statements. Uses @faker-js/faker locally.',
		primaryKeyword: 'fake data generator',
		metaTitle: 'Fake Data Generator | JSON CSV SQL | fmtly',
		metaDescription:
			'Generate fake test data with 26+ field types. JSON, CSV, SQL output. Fully local — no upload.',
		engine: 'generate',
		operation: 'fake-data',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'generate', slug: 'json-to-typescript' },
			{ category: 'file', slug: 'json-to-excel' }
		],
		faqs: [
			{
				question: 'Is the data truly random?',
				answer: 'Yes — faker.js generates random but realistic-looking data.'
			},
			{
				question: 'What field types are available?',
				answer:
					'Names, emails, phones, addresses, UUIDs, URLs, dates, products, finances, and more — 26+ types.'
			}
		],
		useCases: [
			'Generating test data for development',
			'Populating databases with sample data',
			'Creating demo datasets'
		],
		sampleInput: ''
	}
];
