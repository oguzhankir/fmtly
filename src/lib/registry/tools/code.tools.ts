import type { ToolDefinition } from '../types.js';

export const codeTools: ToolDefinition[] = [
	{
		id: 'code-css',
		category: 'code',
		slug: 'css',
		displayName: 'CSS Formatter',
		tagline: 'Format and beautify CSS code with Prettier.',
		description:
			'Instantly format and beautify CSS stylesheets using Prettier WASM — no server, no upload. Configure tab width and print width. Supports all modern CSS features.',
		primaryKeyword: 'css formatter',
		metaTitle: 'CSS Formatter & Beautifier | Prettier | fmtly',
		metaDescription:
			'Format and beautify CSS code instantly in your browser using Prettier WASM. Supports CSS, nested rules, custom properties, and all modern syntax.',
		engine: 'code',
		operation: 'css',
		layoutVariant: 'split',
		inputLanguage: 'css',
		outputLanguage: 'css',
		hasTreeView: false,
		relatedTools: [
			{ category: 'code', slug: 'scss' },
			{ category: 'code', slug: 'html' }
		],
		faqs: [
			{
				question: 'Is my CSS uploaded anywhere?',
				answer:
					'No. Prettier runs as a WebAssembly module entirely in your browser. Your code never leaves your device.'
			},
			{
				question: 'Why is the first format slow?',
				answer:
					'The first format downloads the Prettier WASM bundle (~400KB). Subsequent formats on the same page are instant.'
			}
		],
		useCases: [
			'Standardizing CSS code style across a team',
			'Cleaning up minified CSS for debugging'
		],
		sampleInput:
			'.container{display:flex;flex-direction:column;align-items:center;padding:16px;background-color:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1)}\n.container .title{font-size:24px;font-weight:700;color:#111;margin-bottom:8px}'
	},
	{
		id: 'code-scss',
		category: 'code',
		slug: 'scss',
		displayName: 'SCSS Formatter',
		tagline: 'Format SCSS/Sass code with Prettier.',
		description:
			'Format SCSS stylesheets using Prettier WASM. Handles nested rules, variables, mixins, functions, and all Sass syntax — entirely locally.',
		primaryKeyword: 'scss formatter',
		metaTitle: 'SCSS / Sass Formatter | Prettier | fmtly',
		metaDescription:
			'Format and beautify SCSS and Sass code online using Prettier WASM. All processing is local — no server uploads.',
		engine: 'code',
		operation: 'scss',
		layoutVariant: 'split',
		inputLanguage: 'scss',
		outputLanguage: 'scss',
		hasTreeView: false,
		relatedTools: [
			{ category: 'code', slug: 'css' },
			{ category: 'code', slug: 'less' }
		],
		faqs: [
			{
				question: 'Does this support nested rules?',
				answer: 'Yes. Prettier handles all SCSS syntax including nesting, variables, and mixins.'
			}
		],
		useCases: [
			'Formatting SCSS from various developers with different styles',
			'Standardizing indentation in Sass codebases'
		],
		sampleInput:
			'$primary:#d97706;.container{display:flex;.title{font-size:24px;font-weight:700;color:$primary;&:hover{color:darken($primary,10%)}}}'
	},
	{
		id: 'code-less',
		category: 'code',
		slug: 'less',
		displayName: 'LESS Formatter',
		tagline: 'Format LESS stylesheets with Prettier.',
		description:
			'Format LESS (Leaner CSS) stylesheets using Prettier WASM. Supports all LESS features including variables, mixins, and nesting — entirely in your browser.',
		primaryKeyword: 'less formatter',
		metaTitle: 'LESS Formatter & Beautifier | fmtly',
		metaDescription:
			'Format and beautify LESS stylesheets locally with Prettier WASM. Handles variables, mixins, nesting — no server required.',
		engine: 'code',
		operation: 'less',
		layoutVariant: 'split',
		inputLanguage: 'less',
		outputLanguage: 'less',
		hasTreeView: false,
		relatedTools: [
			{ category: 'code', slug: 'css' },
			{ category: 'code', slug: 'scss' }
		],
		faqs: [
			{
				question: 'Is this different from the CSS formatter?',
				answer:
					'Yes. It uses the Prettier LESS parser which understands LESS-specific syntax like @variables and mixins.'
			}
		],
		useCases: [
			'Formatting LESS files in Bootstrap-based projects',
			'Cleaning up generated LESS code'
		],
		sampleInput: '@primary:#d97706;.container{padding:16px;.title{color:@primary;font-size:24px;}}'
	},
	{
		id: 'code-html',
		category: 'code',
		slug: 'html',
		displayName: 'HTML Formatter',
		tagline: 'Format and indent HTML markup with Prettier.',
		description:
			'Beautify HTML markup with proper indentation and consistent attribute formatting using Prettier WASM. Excellent for minified HTML, email templates, and raw markup from CMS exports.',
		primaryKeyword: 'html formatter',
		metaTitle: 'HTML Formatter & Beautifier | Prettier | fmtly',
		metaDescription:
			'Format and indent HTML markup instantly using Prettier WASM. Works with full pages, fragments, email templates — fully local.',
		engine: 'code',
		operation: 'html',
		layoutVariant: 'split',
		inputLanguage: 'html',
		outputLanguage: 'html',
		hasTreeView: false,
		relatedTools: [
			{ category: 'code', slug: 'css' },
			{ category: 'code', slug: 'javascript' }
		],
		faqs: [
			{
				question: 'Can it format inline scripts and styles?',
				answer:
					'Yes. Prettier formats embedded <script> and <style> blocks using the appropriate sub-parser.'
			}
		],
		useCases: [
			'Formatting minified HTML from CMS or build tools',
			'Cleaning up email template HTML before testing'
		],
		sampleInput:
			'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Hello</title></head><body><div class="container"><h1>Hello World</h1><p>This is a paragraph.</p></div></body></html>'
	},
	{
		id: 'code-javascript',
		category: 'code',
		slug: 'javascript',
		displayName: 'JavaScript Formatter',
		tagline: 'Format and minify JavaScript with Prettier.',
		description:
			'Format or minify JavaScript code using Prettier WASM. Supports ESNext, JSX, async/await, optional chaining, and all modern JS syntax. Toggle between format and minify modes.',
		primaryKeyword: 'javascript formatter',
		metaTitle: 'JavaScript Formatter & Minifier | Prettier | fmtly',
		metaDescription:
			'Format and minify JavaScript code locally with Prettier WASM. Supports all modern JS syntax including ES2024, JSX, and async/await.',
		engine: 'code',
		operation: 'javascript',
		layoutVariant: 'split',
		inputLanguage: 'javascript',
		outputLanguage: 'javascript',
		hasTreeView: false,
		relatedTools: [
			{ category: 'code', slug: 'typescript' },
			{ category: 'code', slug: 'html' }
		],
		faqs: [
			{
				question: 'Does it support JSX?',
				answer: 'Yes. The Babel parser used supports JSX syntax natively.'
			},
			{
				question: 'Does minify actually compress the code?',
				answer:
					"Prettier's minify mode removes whitespace and newlines but does not rename variables like Terser would. It's useful for quick copy-paste compression, not production builds."
			}
		],
		useCases: [
			'Formatting pasted code snippets before adding to documentation',
			'Quick minification for testing purposes'
		],
		sampleInput:
			'const greet = (name) => { const msg = `Hello, ${name}!`; console.log(msg); return msg; }; greet("World");'
	},
	{
		id: 'code-typescript',
		category: 'code',
		slug: 'typescript',
		displayName: 'TypeScript Formatter',
		tagline: 'Format TypeScript types, interfaces, and code with Prettier.',
		description:
			'Format TypeScript source files using Prettier WASM. Handles type annotations, interfaces, generics, decorators, and all modern TypeScript syntax — entirely offline.',
		primaryKeyword: 'typescript formatter',
		metaTitle: 'TypeScript Formatter | Online Prettier | fmtly',
		metaDescription:
			'Format TypeScript code locally with Prettier WASM. Supports types, interfaces, generics, decorators — no server required.',
		engine: 'code',
		operation: 'typescript',
		layoutVariant: 'split',
		inputLanguage: 'typescript',
		outputLanguage: 'typescript',
		hasTreeView: false,
		relatedTools: [
			{ category: 'code', slug: 'javascript' },
			{ category: 'code', slug: 'graphql' }
		],
		faqs: [
			{
				question: 'Does this type-check my code?',
				answer:
					'No. Prettier only handles formatting. Type checking requires a TypeScript compiler (tsc).'
			}
		],
		useCases: [
			'Formatting TypeScript snippets from Stack Overflow',
			'Standardizing code style before committing'
		],
		sampleInput:
			'interface User{id:number;name:string;email:string;role:"admin"|"user"}async function fetchUser(id:number):Promise<User>{const res=await fetch(`/api/users/${id}`);if(!res.ok)throw new Error("Not found");return res.json();}'
	},
	{
		id: 'code-graphql',
		category: 'code',
		slug: 'graphql',
		displayName: 'GraphQL Formatter',
		tagline: 'Format GraphQL schemas and queries with Prettier.',
		description:
			'Format GraphQL schema definitions, queries, mutations, and subscriptions using Prettier WASM. Works with SDL and query documents alike.',
		primaryKeyword: 'graphql formatter',
		metaTitle: 'GraphQL Schema & Query Formatter | fmtly',
		metaDescription:
			'Format GraphQL SDL schemas, queries, mutations, and subscriptions with Prettier WASM. Fully local, no server.',
		engine: 'code',
		operation: 'graphql',
		layoutVariant: 'split',
		inputLanguage: 'graphql',
		outputLanguage: 'graphql',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'code', slug: 'typescript' }
		],
		faqs: [
			{
				question: 'Does this validate the schema?',
				answer:
					'Prettier validates syntax during parsing. Invalid GraphQL will produce an error, but full semantic validation requires graphql-js.'
			}
		],
		useCases: [
			'Formatting SDL schemas copied from documentation',
			'Standardizing query formatting in GraphQL files'
		],
		sampleInput:
			'type Query{user(id:ID!):User users(limit:Int=10 offset:Int=0):[User!]!}type User{id:ID! name:String! email:String! posts:[Post!]! createdAt:String!}type Post{id:ID! title:String! body:String! author:User!}'
	},
	{
		id: 'code-markdown',
		category: 'code',
		slug: 'markdown',
		displayName: 'Markdown Formatter',
		tagline: 'Format Markdown and preview the rendered output.',
		description:
			'Format Markdown files with Prettier — normalizes lists, heading spacing, blank lines, and table alignment. Shows a live rendered preview alongside the formatted source.',
		primaryKeyword: 'markdown formatter',
		metaTitle: 'Markdown Formatter & Preview | fmtly',
		metaDescription:
			'Format Markdown with Prettier and preview the rendered HTML output side-by-side. Live preview updates as you type.',
		engine: 'code',
		operation: 'markdown',
		layoutVariant: 'split',
		inputLanguage: 'markdown',
		outputLanguage: 'markdown',
		hasTreeView: false,
		relatedTools: [
			{ category: 'text', slug: 'markdown-to-html' },
			{ category: 'code', slug: 'html' }
		],
		faqs: [
			{
				question: 'What does Prettier change in Markdown?',
				answer:
					'Prettier normalizes list markers (-/*/+), ensures consistent blank lines between sections, fixes table column alignment, and enforces consistent heading style.'
			}
		],
		useCases: [
			'Normalizing Markdown files before committing to a repo',
			'Cleaning up AI-generated Markdown with inconsistent formatting'
		],
		sampleInput:
			'# Hello World\n\nThis is a paragraph with **bold** and *italic* text.\n\n## Features\n\n- Item one\n- Item two\n  - Nested item\n\n## Table\n\n| Name | Age |\n|------|-----|\n| Alice | 30 |\n| Bob | 25 |'
	},
	{
		id: 'code-curl-to-fetch',
		category: 'code',
		slug: 'curl-to-fetch',
		displayName: 'cURL to Fetch',
		tagline: 'Convert cURL commands to JavaScript fetch() calls.',
		description:
			'Paste any cURL command and instantly get the equivalent JavaScript fetch() call with proper headers, method, body, and authentication. Handles -H, -d, -X, -u, and all common flags.',
		primaryKeyword: 'curl to fetch converter',
		metaTitle: 'cURL to JavaScript Fetch Converter | fmtly',
		metaDescription:
			'Convert cURL commands to fetch() code instantly. Handles headers, JSON body, auth, HTTP methods — all locally, no server.',
		engine: 'code',
		operation: 'curl-to-fetch',
		layoutVariant: 'split',
		inputLanguage: 'plaintext',
		outputLanguage: 'javascript',
		hasTreeView: false,
		relatedTools: [
			{ category: 'code', slug: 'curl-to-axios' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'Which cURL options are supported?',
				answer:
					'-X (method), -H (headers), -d/--data/--data-raw/--data-binary (body), -u (basic auth), -A (user-agent), -L (follow redirects, noted but not added), --compressed.'
			}
		],
		useCases: [
			'Translating API documentation cURL examples to JS',
			"Converting copy-pasted cURL from DevTools' network panel"
		],
		sampleInput: `curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGci...' \\\n  -d '{"name":"Alice","email":"alice@example.com"}'`
	},
	{
		id: 'code-curl-to-axios',
		category: 'code',
		slug: 'curl-to-axios',
		displayName: 'cURL to Axios',
		tagline: 'Convert cURL commands to Axios JavaScript calls.',
		description:
			'Convert cURL commands to Axios configuration objects. Handles all common cURL options including headers, body, HTTP method, and basic authentication.',
		primaryKeyword: 'curl to axios converter',
		metaTitle: 'cURL to Axios Converter | fmtly',
		metaDescription:
			'Convert cURL commands to axios({ method, url, headers, data }) calls. Handles all common flags — no server, fully local.',
		engine: 'code',
		operation: 'curl-to-axios',
		layoutVariant: 'split',
		inputLanguage: 'plaintext',
		outputLanguage: 'javascript',
		hasTreeView: false,
		relatedTools: [
			{ category: 'code', slug: 'curl-to-fetch' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: "Why isn't this converting the body properly?",
				answer:
					'JSON bodies are automatically parsed and formatted. If the body is not valid JSON, it is treated as a raw string.'
			}
		],
		useCases: [
			'Translating API examples from docs to Axios for React/Vue apps',
			'Converting DevTools cURL exports to Axios config objects'
		],
		sampleInput: `curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGci...' \\\n  -d '{"name":"Alice","email":"alice@example.com"}'`
	}
];
