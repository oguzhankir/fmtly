import type { ToolDefinition } from '../types.js';

export const yamlTools: ToolDefinition[] = [
	{
		id: 'yaml-formatter',
		category: 'yaml',
		slug: 'formatter',
		displayName: 'YAML Formatter',
		tagline: 'Format and beautify YAML with consistent indentation',
		description:
			'Parse and display YAML with clean 2-space indentation. Real-time parsing with precise error location. Ideal for cleaning up messy YAML configuration files.',
		primaryKeyword: 'yaml formatter',
		metaTitle: 'YAML Formatter & Beautifier — fmtly.dev',
		metaDescription:
			'Format and beautify YAML instantly in your browser. Consistent 2-space indentation, real-time error detection, clean output. No data leaves your device.',
		engine: 'yaml',
		operation: 'format',
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
				question: 'What is YAML formatting?',
				answer:
					'YAML formatting normalizes indentation and spacing in YAML documents, making them easier to read and reducing merge conflicts in version control.'
			},
			{
				question: 'Is my data sent to a server?',
				answer:
					'No. All processing happens entirely in your browser. Your YAML never leaves your device.'
			}
		],
		useCases: [
			'Clean up YAML configuration files before committing',
			'Normalize indentation across team members',
			'Format Docker Compose or Kubernetes manifests',
			'Beautify CI/CD pipeline configuration files'
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
		displayName: 'YAML Validator',
		tagline: 'Validate YAML syntax with precise error location',
		description:
			'Validates YAML syntax and reports errors with exact line and column numbers. Catches common issues like incorrect indentation, invalid characters, and duplicate keys.',
		primaryKeyword: 'yaml validator',
		metaTitle: 'YAML Validator — Syntax Checker Online — fmtly.dev',
		metaDescription:
			'Validate YAML syntax instantly. Get precise error locations with line numbers and plain-language explanations. Runs entirely in your browser.',
		engine: 'yaml',
		operation: 'validate',
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
				question: 'What YAML errors does this tool detect?',
				answer:
					'It detects all syntax errors including incorrect indentation, invalid characters, duplicate keys, and malformed multi-line strings.'
			},
			{
				question: 'Can I validate YAML against a schema?',
				answer:
					'This tool validates syntax only. For schema validation, you would need a dedicated YAML schema validator.'
			}
		],
		useCases: [
			'Quickly check if a YAML file is syntactically valid',
			'Find the exact location of indentation errors',
			'Validate Kubernetes manifests before applying',
			'Debug YAML parsing errors in CI/CD pipelines'
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
		displayName: 'YAML to JSON',
		tagline: 'Convert YAML to formatted JSON instantly',
		description:
			'Convert YAML documents to formatted JSON with 2-space indentation. Handles all YAML features including anchors, aliases, multi-line strings, and complex types.',
		primaryKeyword: 'yaml to json',
		metaTitle: 'YAML to JSON Converter — fmtly.dev',
		metaDescription:
			'Convert YAML to JSON instantly in your browser. Handles anchors, aliases, multi-line strings, and all complex YAML types. No data leaves your device.',
		engine: 'yaml',
		operation: 'to-json',
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
				question: 'Does this handle all YAML features?',
				answer:
					'Yes. It handles anchors, aliases, multi-line strings, complex keys, and all standard YAML data types.'
			},
			{
				question: 'Is the conversion lossless?',
				answer:
					'YAML supports some types that JSON does not (like dates and binary). These are converted to their closest JSON equivalents (strings).'
			}
		],
		useCases: [
			'Convert Kubernetes YAML manifests to JSON for API calls',
			'Transform YAML configuration to JSON for JavaScript consumption',
			'Convert Docker Compose files to JSON format',
			'Prepare YAML data for JSON-only tools and APIs'
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
		displayName: 'YAML to XML',
		tagline: 'Convert YAML to XML format',
		description: 'Convert YAML configuration to XML format seamlessly.',
		primaryKeyword: 'yaml to xml',
		metaTitle: 'YAML to XML Converter',
		metaDescription: 'Convert YAML to XML instantly.',
		engine: 'yaml',
		operation: 'toXml',
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
		displayName: 'YAML to CSV',
		tagline: 'Convert YAML data to CSV format',
		description: 'Convert flattened YAML records to CSV format easily.',
		primaryKeyword: 'yaml to csv',
		metaTitle: 'YAML to CSV Converter',
		metaDescription: 'Convert YAML to CSV instantly.',
		engine: 'yaml',
		operation: 'toCsv',
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
		displayName: 'YAML to TOML',
		tagline: 'Convert YAML config to TOML format',
		description: 'Convert YAML to perfectly valid TOML strings.',
		primaryKeyword: 'yaml to toml',
		metaTitle: 'YAML to TOML Converter',
		metaDescription: 'Convert YAML to TOML instantly.',
		engine: 'yaml',
		operation: 'toToml',
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
		displayName: 'YAML Diff Viewer',
		tagline: 'Compare two YAML files visually',
		description: 'Compare two YAML structures side-by-side.',
		primaryKeyword: 'yaml diff',
		metaTitle: 'YAML Diff Viewer & Comparer',
		metaDescription: 'Compare YAML files side-by-side visually.',
		engine: 'yaml',
		operation: 'diff',
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
