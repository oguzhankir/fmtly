import type { ToolDefinition } from '../types.js';

export const codeTools: ToolDefinition[] = [
	{
		id: 'code-css',
		category: 'code',
		slug: 'css',
		displayName: 'tool.code-css.display_name',
		tagline: 'tool.code-css.tagline',
		description: 'tool.code-css.description',
		primaryKeyword: 'tool.code-css.primary_keyword',
		metaTitle: 'tool.code-css.meta_title',
		metaDescription: 'tool.code-css.meta_description',
		engine: 'code',
		operation: 'tool.code-css.operation',
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
				question: 'tool.code-css.faq.0.question',
				answer: 'tool.code-css.faq.0.answer'
			},
			{
				question: 'tool.code-css.faq.1.question',
				answer: 'tool.code-css.faq.1.answer'
			}
		],
		useCases: ['tool.code-css.use_case.0', 'tool.code-css.use_case.1'],
		sampleInput:
			'.container{display:flex;flex-direction:column;align-items:center;padding:16px;background-color:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1)}\n.container .title{font-size:24px;font-weight:700;color:#111;margin-bottom:8px}'
	},
	{
		id: 'code-scss',
		category: 'code',
		slug: 'scss',
		displayName: 'tool.code-scss.display_name',
		tagline: 'tool.code-scss.tagline',
		description: 'tool.code-scss.description',
		primaryKeyword: 'tool.code-scss.primary_keyword',
		metaTitle: 'tool.code-scss.meta_title',
		metaDescription: 'tool.code-scss.meta_description',
		engine: 'code',
		operation: 'tool.code-scss.operation',
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
				question: 'tool.code-scss.faq.0.question',
				answer: 'tool.code-scss.faq.0.answer'
			}
		],
		useCases: ['tool.code-scss.use_case.0', 'tool.code-scss.use_case.1'],
		sampleInput:
			'$primary:#d97706;.container{display:flex;.title{font-size:24px;font-weight:700;color:$primary;&:hover{color:darken($primary,10%)}}}'
	},
	{
		id: 'code-less',
		category: 'code',
		slug: 'less',
		displayName: 'tool.code-less.display_name',
		tagline: 'tool.code-less.tagline',
		description: 'tool.code-less.description',
		primaryKeyword: 'tool.code-less.primary_keyword',
		metaTitle: 'tool.code-less.meta_title',
		metaDescription: 'tool.code-less.meta_description',
		engine: 'code',
		operation: 'tool.code-less.operation',
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
				question: 'tool.code-less.faq.0.question',
				answer: 'tool.code-less.faq.0.answer'
			}
		],
		useCases: ['tool.code-less.use_case.0', 'tool.code-less.use_case.1'],
		sampleInput: '@primary:#d97706;.container{padding:16px;.title{color:@primary;font-size:24px;}}'
	},
	{
		id: 'code-html',
		category: 'code',
		slug: 'html',
		displayName: 'tool.code-html.display_name',
		tagline: 'tool.code-html.tagline',
		description: 'tool.code-html.description',
		primaryKeyword: 'tool.code-html.primary_keyword',
		metaTitle: 'tool.code-html.meta_title',
		metaDescription: 'tool.code-html.meta_description',
		engine: 'code',
		operation: 'tool.code-html.operation',
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
				question: 'tool.code-html.faq.0.question',
				answer: 'tool.code-html.faq.0.answer'
			}
		],
		useCases: ['tool.code-html.use_case.0', 'tool.code-html.use_case.1'],
		sampleInput:
			'<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Hello</title></head><body><div class="container"><h1>Hello World</h1><p>This is a paragraph.</p></div></body></html>'
	},
	{
		id: 'code-javascript',
		category: 'code',
		slug: 'javascript',
		displayName: 'tool.code-javascript.display_name',
		tagline: 'tool.code-javascript.tagline',
		description: 'tool.code-javascript.description',
		primaryKeyword: 'tool.code-javascript.primary_keyword',
		metaTitle: 'tool.code-javascript.meta_title',
		metaDescription: 'tool.code-javascript.meta_description',
		engine: 'code',
		operation: 'tool.code-javascript.operation',
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
				question: 'tool.code-javascript.faq.0.question',
				answer: 'tool.code-javascript.faq.0.answer'
			},
			{
				question: 'tool.code-javascript.faq.1.question',
				answer: 'tool.code-javascript.faq.1.answer'
			}
		],
		useCases: ['tool.code-javascript.use_case.0', 'tool.code-javascript.use_case.1'],
		sampleInput:
			'const greet = (name) => { const msg = `Hello, ${name}!`; console.log(msg); return msg; }; greet("World");'
	},
	{
		id: 'code-typescript',
		category: 'code',
		slug: 'typescript',
		displayName: 'tool.code-typescript.display_name',
		tagline: 'tool.code-typescript.tagline',
		description: 'tool.code-typescript.description',
		primaryKeyword: 'tool.code-typescript.primary_keyword',
		metaTitle: 'tool.code-typescript.meta_title',
		metaDescription: 'tool.code-typescript.meta_description',
		engine: 'code',
		operation: 'tool.code-typescript.operation',
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
				question: 'tool.code-typescript.faq.0.question',
				answer: 'tool.code-typescript.faq.0.answer'
			}
		],
		useCases: ['tool.code-typescript.use_case.0', 'tool.code-typescript.use_case.1'],
		sampleInput:
			'interface User{id:number;name:string;email:string;role:"admin"|"user"}async function fetchUser(id:number):Promise<User>{const res=await fetch(`/api/users/${id}`);if(!res.ok)throw new Error("Not found");return res.json();}'
	},
	{
		id: 'code-graphql',
		category: 'code',
		slug: 'graphql',
		displayName: 'tool.code-graphql.display_name',
		tagline: 'tool.code-graphql.tagline',
		description: 'tool.code-graphql.description',
		primaryKeyword: 'tool.code-graphql.primary_keyword',
		metaTitle: 'tool.code-graphql.meta_title',
		metaDescription: 'tool.code-graphql.meta_description',
		engine: 'code',
		operation: 'tool.code-graphql.operation',
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
				question: 'tool.code-graphql.faq.0.question',
				answer: 'tool.code-graphql.faq.0.answer'
			}
		],
		useCases: ['tool.code-graphql.use_case.0', 'tool.code-graphql.use_case.1'],
		sampleInput:
			'type Query{user(id:ID!):User users(limit:Int=10 offset:Int=0):[User!]!}type User{id:ID! name:String! email:String! posts:[Post!]! createdAt:String!}type Post{id:ID! title:String! body:String! author:User!}'
	},
	{
		id: 'code-markdown',
		category: 'code',
		slug: 'markdown',
		displayName: 'tool.code-markdown.display_name',
		tagline: 'tool.code-markdown.tagline',
		description: 'tool.code-markdown.description',
		primaryKeyword: 'tool.code-markdown.primary_keyword',
		metaTitle: 'tool.code-markdown.meta_title',
		metaDescription: 'tool.code-markdown.meta_description',
		engine: 'code',
		operation: 'tool.code-markdown.operation',
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
				question: 'tool.code-markdown.faq.0.question',
				answer: 'tool.code-markdown.faq.0.answer'
			}
		],
		useCases: ['tool.code-markdown.use_case.0', 'tool.code-markdown.use_case.1'],
		sampleInput:
			'# Hello World\n\nThis is a paragraph with **bold** and *italic* text.\n\n## Features\n\n- Item one\n- Item two\n  - Nested item\n\n## Table\n\n| Name | Age |\n|------|-----|\n| Alice | 30 |\n| Bob | 25 |'
	},
	{
		id: 'code-curl-to-fetch',
		category: 'code',
		slug: 'curl-to-fetch',
		displayName: 'tool.code-curl-to-fetch.display_name',
		tagline: 'tool.code-curl-to-fetch.tagline',
		description: 'tool.code-curl-to-fetch.description',
		primaryKeyword: 'tool.code-curl-to-fetch.primary_keyword',
		metaTitle: 'tool.code-curl-to-fetch.meta_title',
		metaDescription: 'tool.code-curl-to-fetch.meta_description',
		engine: 'code',
		operation: 'tool.code-curl-to-fetch.operation',
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
				question: 'tool.code-curl-to-fetch.faq.0.question',
				answer: 'tool.code-curl-to-fetch.faq.0.answer'
			}
		],
		useCases: ['tool.code-curl-to-fetch.use_case.0', 'tool.code-curl-to-fetch.use_case.1'],
		sampleInput: `curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGci...' \\\n  -d '{"name":"Alice","email":"alice@example.com"}'`
	},
	{
		id: 'code-curl-to-axios',
		category: 'code',
		slug: 'curl-to-axios',
		displayName: 'tool.code-curl-to-axios.display_name',
		tagline: 'tool.code-curl-to-axios.tagline',
		description: 'tool.code-curl-to-axios.description',
		primaryKeyword: 'tool.code-curl-to-axios.primary_keyword',
		metaTitle: 'tool.code-curl-to-axios.meta_title',
		metaDescription: 'tool.code-curl-to-axios.meta_description',
		engine: 'code',
		operation: 'tool.code-curl-to-axios.operation',
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
				question: 'tool.code-curl-to-axios.faq.0.question',
				answer: 'tool.code-curl-to-axios.faq.0.answer'
			}
		],
		useCases: ['tool.code-curl-to-axios.use_case.0', 'tool.code-curl-to-axios.use_case.1'],
		sampleInput: `curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGci...' \\\n  -d '{"name":"Alice","email":"alice@example.com"}'`
	}
];
