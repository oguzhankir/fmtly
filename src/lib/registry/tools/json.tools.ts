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
			{ category: 'json', slug: 'viewer' },
			{ category: 'json', slug: 'validator' },
			{ category: 'json', slug: 'minifier' },
			{ category: 'json', slug: 'to-yaml' }
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
		id: 'json-viewer',
		category: 'json',
		slug: 'viewer',
		displayName: 'JSON Viewer',
		tagline: 'Explore JSON data as an interactive, collapsible tree',
		description:
			'Tree-focused view of JSON data with expand/collapse controls, depth filtering, in-tree search, and path copy on node click. Ideal for exploring large or deeply nested structures.',
		primaryKeyword: 'json viewer',
		metaTitle: 'JSON Viewer — Interactive Tree Explorer — fmtly.dev',
		metaDescription:
			'View JSON as an interactive collapsible tree. Click any node to copy its path. Search, filter by depth, and explore nested data — all in your browser.',
		engine: 'json',
		operation: 'view',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'json',
		hasTreeView: true,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'validator' },
			{ category: 'json', slug: 'minifier' },
			{ category: 'diff', slug: 'json' }
		],
		faqs: [
			{
				question: 'How do I copy the path to a specific JSON node?',
				answer:
					'Click on any node in the tree view. The full JSONPath to that node is copied to your clipboard automatically.'
			},
			{
				question: 'Can I view very large JSON files?',
				answer:
					'Yes. The tree view uses virtualized rendering and can handle files with tens of thousands of nodes without performance issues.'
			},
			{
				question: 'What does the depth filter do?',
				answer:
					'The depth filter expands or collapses the tree to a specific depth level. Press Ctrl+1 through Ctrl+5 to expand to depth 1–5, or Ctrl+] to expand all.'
			}
		],
		useCases: [
			'Explore deeply nested API responses without scrolling through raw text',
			'Find specific keys in large JSON payloads by searching the tree',
			'Copy the exact path to a nested field for use in code',
			'Quickly understand the structure of an unfamiliar JSON document',
			'Share a tree view of configuration data with teammates'
		],
		sampleInput: `{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "email": "alice@example.com",
      "roles": ["admin", "editor"],
      "settings": {
        "theme": "dark",
        "notifications": true
      }
    },
    {
      "id": 2,
      "name": "Bob",
      "email": "bob@example.com",
      "roles": ["viewer"],
      "settings": {
        "theme": "light",
        "notifications": false
      }
    }
  ]
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
		layoutVariant: 'single',
		inputLanguage: 'json',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'viewer' },
			{ category: 'json', slug: 'minifier' },
			{ category: 'json', slug: 'to-yaml' }
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
			{ category: 'json', slug: 'viewer' },
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
		tagline: 'Convert JSON to TOML format',
		description: 'Convert JSON configuration to TOML format cleanly.',
		primaryKeyword: 'json to toml',
		metaTitle: 'JSON to TOML Converter',
		metaDescription: 'Convert JSON to TOML instantly.',
		engine: 'json',
		operation: 'toToml',
		layoutVariant: 'split',
		inputLanguage: 'json',
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
		sampleInput: '{\n  "title": "TOML Example"\n}'
	},
	{
		id: 'json-to-markdown',
		category: 'json',
		slug: 'to-markdown',
		displayName: 'JSON to Markdown',
		tagline: 'Convert JSON array to Markdown table',
		description: 'Convert JSON arrays or objects into a formatted Markdown table.',
		primaryKeyword: 'json to markdown',
		metaTitle: 'JSON to Markdown Table Converter',
		metaDescription: 'Convert JSON arrays to Markdown tables instantly.',
		engine: 'json',
		operation: 'toMarkdownTable',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'markdown',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' },
			{ category: 'color', slug: 'contrast' },
			{ category: 'crypto', slug: 'hash' }
		],
		faqs: [],
		useCases: [],
		sampleInput: '[{\n  "name": "fmtly",\n  "type": "tool"\n}]'
	},
	{
		id: 'json-jsonpath',
		category: 'json',
		slug: 'jsonpath',
		displayName: 'JSONPath Query',
		tagline: 'Query JSON using JSONPath',
		description: 'Evaluate JSONPath queries against your JSON data.',
		primaryKeyword: 'jsonpath tester',
		metaTitle: 'JSONPath Online Tester & Evaluator',
		metaDescription: 'Test JSONPath queries online in your browser.',
		engine: 'json',
		operation: 'jsonpathQuery',
		layoutVariant: 'dual-input',
		inputLanguage: 'json',
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
		sampleInput:
			'{\n  "store": {\n    "book": [\n      { "title": "Sayings of the Century" }\n    ]\n  }\n}'
	},
	{
		id: 'json-jmespath',
		category: 'json',
		slug: 'jmespath',
		displayName: 'JMESPath Query',
		tagline: 'Query JSON using JMESPath',
		description: 'Evaluate JMESPath queries against your JSON data.',
		primaryKeyword: 'jmespath tester',
		metaTitle: 'JMESPath Online Tester & Evaluator',
		metaDescription: 'Test JMESPath queries online in your browser.',
		engine: 'json',
		operation: 'jmespathQuery',
		layoutVariant: 'dual-input',
		inputLanguage: 'json',
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
		sampleInput: '{\n  "foo": {"bar": "baz"}\n}'
	}
];
