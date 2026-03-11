import type { ToolDefinition } from '../types.js';

export const jsonTools: ToolDefinition[] = [
	{
		id: 'json-formatter',
		category: 'json',
		slug: 'formatter',
		displayName: 'JSON Formatter',
		tagline: 'Format and beautify JSON with configurable indentation',
		description:
			'Parse and display JSON with configurable indentation — 2 spaces, 4 spaces, or tabs. Real-time parsing with precise error location shown in the editor gutter. Tree view alongside the formatted output.',
		primaryKeyword: 'json formatter',
		metaTitle: 'JSON Formatter & Beautifier — fmtly.dev',
		metaDescription:
			'Format and beautify JSON instantly in your browser. Configurable indentation, real-time error detection, and tree view. No data leaves your device.',
		engine: 'json',
		operation: 'format',
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
				question: 'What is JSON formatting?',
				answer:
					'JSON formatting (also called beautifying or pretty-printing) adds consistent indentation and line breaks to compressed or unformatted JSON, making it easier to read and debug.'
			},
			{
				question: 'Is my data sent to a server?',
				answer:
					'No. All processing happens entirely in your browser. Your JSON never leaves your device.'
			},
			{
				question: 'What indentation options are available?',
				answer:
					'You can choose between 2 spaces, 4 spaces, or tab indentation. The default is 2 spaces.'
			},
			{
				question: 'Can this tool fix invalid JSON?',
				answer:
					'This tool reports syntax errors with exact line and column numbers. For automatic repair of common issues like trailing commas and unquoted keys, use the JSON Repair tool.'
			}
		],
		useCases: [
			'Beautify minified API responses for debugging',
			'Format JSON config files before committing to version control',
			'Pretty-print JSON logs for readability',
			'Prepare JSON data for documentation or code reviews',
			'Quickly inspect the structure of an unfamiliar JSON payload'
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
		displayName: 'JSON Validator',
		tagline: 'Validate JSON syntax with precise error location',
		description:
			'Validates JSON syntax and reports errors with exact line and column numbers, plus a plain-language explanation. Includes a "Try Auto-Repair" option for common issues like trailing commas and single quotes.',
		primaryKeyword: 'json validator',
		metaTitle: 'JSON Validator — Syntax Checker Online — fmtly.dev',
		metaDescription:
			'Validate JSON syntax instantly. Get precise error locations with line and column numbers, plain-language explanations, and auto-repair for common issues.',
		engine: 'json',
		operation: 'validate',
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
				question: 'What JSON errors does this tool detect?',
				answer:
					'It detects all syntax errors including trailing commas, missing brackets, unquoted keys, single-quoted strings, duplicate keys, and unexpected tokens.'
			},
			{
				question: 'What does the auto-repair feature do?',
				answer:
					'Auto-repair attempts to fix common issues like trailing commas, single quotes around strings, unquoted property names, and missing closing brackets. It shows what was changed.'
			},
			{
				question: 'Can I validate JSON against a JSON Schema?',
				answer:
					'This tool validates syntax only. For validating JSON against a JSON Schema definition, use the JSON Schema Validator tool.'
			}
		],
		useCases: [
			'Quickly check if a JSON string is syntactically valid',
			'Find the exact location of a syntax error in a malformed API response',
			'Validate JSON configuration files before deployment',
			'Debug JSON parsing errors by getting human-readable explanations',
			'Auto-repair common JSON issues from hand-edited files'
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
		displayName: 'JSON Minifier',
		tagline: 'Minify JSON by removing all whitespace',
		description:
			'Removes all unnecessary whitespace from JSON to produce the smallest possible output. Shows the compression ratio and byte savings compared to the original input.',
		primaryKeyword: 'json minifier',
		metaTitle: 'JSON Minifier — Compress JSON Online — fmtly.dev',
		metaDescription:
			'Minify JSON by removing all whitespace. See the compression ratio and byte savings instantly. Runs entirely in your browser — no data uploaded.',
		engine: 'json',
		operation: 'minify',
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
				question: 'What does JSON minification do?',
				answer:
					'JSON minification removes all whitespace characters (spaces, tabs, newlines) that are not inside string values. The result is a single-line JSON string with the smallest possible byte size.'
			},
			{
				question: 'Does minification change the data?',
				answer:
					'No. Minification only removes formatting whitespace. The data values, keys, and structure remain identical.'
			},
			{
				question: 'When should I minify JSON?',
				answer:
					'Minify JSON when transmitting data over a network (API responses, config payloads) or storing it where size matters. For human-readable output, use the JSON Formatter instead.'
			}
		],
		useCases: [
			'Reduce API response payload size for faster network transmission',
			'Compress JSON configuration before embedding in environment variables',
			'Minimize JSON data before storing in databases or key-value stores',
			'Prepare compact JSON for URL query parameters',
			'Compare the size difference between formatted and minified JSON'
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
		displayName: 'JSON to YAML',
		tagline: 'Convert JSON to clean YAML output',
		description:
			'Convert JSON objects and arrays to YAML with clean 2-space indentation. Handles all JSON data types and produces human-readable YAML output.',
		primaryKeyword: 'json to yaml',
		metaTitle: 'JSON to YAML Converter — fmtly.dev',
		metaDescription:
			'Convert JSON to YAML instantly in your browser. Clean 2-space indentation, human-readable output for DevOps configs. No data leaves your device.',
		engine: 'json',
		operation: 'to-yaml',
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
				question: 'Is the conversion lossless?',
				answer:
					'Yes for standard JSON types. All JSON strings, numbers, booleans, nulls, arrays, and objects convert perfectly to YAML equivalents.'
			},
			{
				question: 'What indentation style is used?',
				answer:
					'The output uses 2-space indentation, the most common YAML style used in Kubernetes, Docker Compose, and other DevOps tools.'
			}
		],
		useCases: [
			'Convert JSON API responses to YAML configuration',
			'Generate Kubernetes manifests from JSON templates',
			'Transform package.json to YAML format',
			'Create Docker Compose files from JSON definitions'
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
		displayName: 'JSON to TOML',
		tagline: 'Convert JSON to TOML configuration format',
		description:
			'Convert JSON objects to TOML format instantly. Useful for generating Rust, Python, and Hugo configuration files from JSON data. All processing happens in your browser.',
		primaryKeyword: 'json to toml converter',
		metaTitle: 'JSON to TOML Converter — fmtly.dev',
		metaDescription:
			'Convert JSON to TOML configuration format instantly in your browser. No upload required — ideal for Rust, Python, and Hugo config files.',
		engine: 'json',
		operation: 'toToml',
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
				question: 'Is the conversion lossless?',
				answer:
					'Most JSON types convert cleanly. JSON nulls become empty TOML values where supported. Arrays and nested objects map to TOML arrays and tables respectively.'
			},
			{
				question: 'Which tools use TOML?',
				answer:
					'TOML is widely used in Rust (Cargo.toml), Python projects (pyproject.toml), Hugo static sites, and various developer toolchains as a human-readable config format.'
			}
		],
		useCases: [
			'Generate Cargo.toml or pyproject.toml from JSON configuration',
			'Convert JSON API settings to TOML for Hugo or other static site generators',
			'Migrate JSON configs to TOML-based toolchains'
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
		displayName: 'JSON to Markdown',
		tagline: 'Convert a JSON array into a Markdown table',
		description:
			'Turn any JSON array of objects into a formatted Markdown table with aligned columns. Each object key becomes a column header. Paste the output directly into GitHub READMEs, Notion, or any Markdown editor.',
		primaryKeyword: 'json to markdown table',
		metaTitle: 'JSON to Markdown Table Converter — fmtly.dev',
		metaDescription:
			'Convert a JSON array to a Markdown table instantly. Each key becomes a column — paste the result into GitHub READMEs or Notion. No server, fully private.',
		engine: 'json',
		operation: 'toMarkdownTable',
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
				question: 'What JSON structure does this expect?',
				answer:
					'The input must be a JSON array of objects where each object has the same keys. The keys become column headers and each object becomes a row in the Markdown table.'
			},
			{
				question: 'Can I use this for GitHub README tables?',
				answer:
					'Yes. The output follows the standard GitHub Flavored Markdown (GFM) table syntax and renders correctly on GitHub, GitLab, Notion, and most Markdown editors.'
			}
		],
		useCases: [
			'Generate GitHub README comparison tables from JSON data',
			'Create Markdown documentation tables from API list responses',
			'Convert JSON datasets to human-readable Markdown for reports',
			'Turn configuration arrays into formatted tables for wikis'
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
		displayName: 'JSONPath Query',
		tagline: 'Query and extract data from JSON using JSONPath expressions',
		description:
			'Run JSONPath queries against any JSON document and see the results instantly. Supports filters, wildcards, recursive descent, and array slicing. Query history is saved locally for quick re-use.',
		primaryKeyword: 'jsonpath online tester',
		metaTitle: 'JSONPath Online Tester & Query Evaluator — fmtly.dev',
		metaDescription:
			'Test JSONPath expressions against JSON data in your browser. Supports filters, wildcards, recursive descent. Results shown instantly — no server, fully private.',
		engine: 'json',
		operation: 'jsonpathQuery',
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
				question: 'What is JSONPath?',
				answer:
					'JSONPath is a query language for JSON, similar to XPath for XML. It lets you extract specific values or arrays of values from a JSON document using a path expression like $.store.book[*].title.'
			},
			{
				question: 'What operators does JSONPath support?',
				answer:
					'JSONPath supports dot notation ($.a.b), bracket notation ($["a"]["b"]), wildcards ($.*), recursive descent ($..), array slices ($[0:3]), filter expressions ($[?(@.price < 10)]), and union ($[0,1]).'
			},
			{
				question: 'What is the difference between JSONPath and JMESPath?',
				answer:
					'Both query JSON data, but with different syntax. JSONPath uses XPath-inspired dot/bracket notation and is common in JavaScript tooling. JMESPath is AWS-originated, uses a pipe-based syntax, and is standard in AWS CLI and Terraform.'
			}
		],
		useCases: [
			'Extract specific fields from a large API response',
			'Filter arrays by property values using JSONPath filter expressions',
			'Test JSONPath expressions before using them in code',
			'Prototype data extraction logic for JSON processing pipelines'
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
		displayName: 'JMESPath Query',
		tagline: 'Query and transform JSON using JMESPath expressions',
		description:
			'Evaluate JMESPath expressions against JSON data in real time. JMESPath is the query language used by AWS CLI and Terraform. Supports projections, filters, functions, multi-select, and pipe expressions.',
		primaryKeyword: 'jmespath online tester',
		metaTitle: 'JMESPath Online Tester & Query Evaluator — fmtly.dev',
		metaDescription:
			'Test JMESPath expressions against JSON data in your browser. Used in AWS CLI, Terraform, and more. Results shown instantly — no server, fully private.',
		engine: 'json',
		operation: 'jmespathQuery',
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
				question: 'What is JMESPath?',
				answer:
					'JMESPath (JSON Matching Expression Paths) is a query language for JSON originally developed for the AWS CLI. It allows you to search, filter, and transform JSON documents. It is also used in Terraform, Ansible, and other DevOps tools.'
			},
			{
				question: 'What can JMESPath do that JSONPath cannot?',
				answer:
					'JMESPath has built-in functions (length, sort, join, to_string, etc.), multi-select objects, pipe expressions for chaining transforms, and list projections. Its syntax is simpler and more consistent than JSONPath.'
			},
			{
				question: 'How do I use this with AWS CLI results?',
				answer:
					'Paste the JSON output from an AWS CLI command on the left and enter your JMESPath expression on the right. The same expression can then be used with the --query flag in AWS CLI.'
			}
		],
		useCases: [
			'Test AWS CLI --query expressions before running them in production',
			'Extract specific fields from Terraform state JSON output',
			'Filter and transform JSON API responses with pipe expressions',
			'Learn JMESPath syntax interactively with immediate feedback'
		],
		sampleInput: `{
  "locations": [
    { "name": "Seattle", "state": "WA", "population": 737255 },
    { "name": "Portland", "state": "OR", "population": 652503 },
    { "name": "Denver", "state": "CO", "population": 715522 }
  ]
}`
	}
];
