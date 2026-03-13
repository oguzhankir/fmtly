import type { ToolDefinition } from '../types.js';

export const encodeTools: ToolDefinition[] = [
	{
		id: 'encode-base64',
		category: 'encode',
		slug: 'base64',
		displayName: 'tool.encode-base64.display_name',
		tagline: 'tool.encode-base64.tagline',
		description: 'tool.encode-base64.description',
		primaryKeyword: 'tool.encode-base64.primary_keyword',
		metaTitle: 'tool.encode-base64.meta_title',
		metaDescription: 'tool.encode-base64.meta_description',
		engine: 'encoder',
		operation: 'tool.encode-base64.operation',
		layoutVariant: 'split',
		inputLanguage: 'text',
		outputLanguage: 'text',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'url' },
			{ category: 'escape', slug: 'html' },
			{ category: 'escape', slug: 'json' }
		],
		faqs: [
			{
				question: 'tool.encode-base64.faq.0.question',
				answer: 'tool.encode-base64.faq.0.answer'
			},
			{
				question: 'tool.encode-base64.faq.1.question',
				answer: 'tool.encode-base64.faq.1.answer'
			},
			{
				question: 'tool.encode-base64.faq.2.question',
				answer: 'tool.encode-base64.faq.2.answer'
			}
		],
		useCases: [
			'tool.encode-base64.use_case.0',
			'tool.encode-base64.use_case.1',
			'tool.encode-base64.use_case.2'
		],
		sampleInput: 'Hello World'
	},
	{
		id: 'encode-url',
		category: 'encode',
		slug: 'url',
		displayName: 'tool.encode-url.display_name',
		tagline: 'tool.encode-url.tagline',
		description: 'tool.encode-url.description',
		primaryKeyword: 'tool.encode-url.primary_keyword',
		metaTitle: 'tool.encode-url.meta_title',
		metaDescription: 'tool.encode-url.meta_description',
		engine: 'encoder',
		operation: 'tool.encode-url.operation',
		layoutVariant: 'bidirectional',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'base64' },
			{ category: 'web', slug: 'url-parser' }
		],
		faqs: [],
		useCases: [],
		sampleInput: 'https://example.com/search?q=hello world'
	},
	{
		id: 'encode-html',
		category: 'encode',
		slug: 'html',
		displayName: 'tool.encode-html.display_name',
		tagline: 'tool.encode-html.tagline',
		description: 'tool.encode-html.description',
		primaryKeyword: 'tool.encode-html.primary_keyword',
		metaTitle: 'tool.encode-html.meta_title',
		metaDescription: 'tool.encode-html.meta_description',
		engine: 'encoder',
		operation: 'tool.encode-html.operation',
		layoutVariant: 'bidirectional',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'base64' },
			{ category: 'escape', slug: 'json' }
		],
		faqs: [],
		useCases: [],
		sampleInput: '<div>Hello & Welcome</div>'
	},
	{
		id: 'encode-html-entities',
		category: 'encode',
		slug: 'html-entities',
		displayName: 'tool.encode-html-entities.display_name',
		tagline: 'tool.encode-html-entities.tagline',
		description: 'tool.encode-html-entities.description',
		primaryKeyword: 'tool.encode-html-entities.primary_keyword',
		metaTitle: 'tool.encode-html-entities.meta_title',
		metaDescription: 'tool.encode-html-entities.meta_description',
		engine: 'encoder',
		operation: 'tool.encode-html-entities.operation',
		layoutVariant: 'bidirectional',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'unicode' },
			{ category: 'escape', slug: 'html' }
		],
		faqs: [
			{
				question: 'tool.encode-html-entities.faq.0.question',
				answer: 'tool.encode-html-entities.faq.0.answer'
			}
		],
		useCases: ['tool.encode-html-entities.use_case.0', 'tool.encode-html-entities.use_case.1'],
		sampleInput: '<script>alert("text")</script>'
	},
	{
		id: 'encode-unicode',
		category: 'encode',
		slug: 'unicode',
		displayName: 'tool.encode-unicode.display_name',
		tagline: 'tool.encode-unicode.tagline',
		description: 'tool.encode-unicode.description',
		primaryKeyword: 'tool.encode-unicode.primary_keyword',
		metaTitle: 'tool.encode-unicode.meta_title',
		metaDescription: 'tool.encode-unicode.meta_description',
		engine: 'encoder',
		operation: 'tool.encode-unicode.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'html-entities' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.encode-unicode.faq.0.question',
				answer: 'tool.encode-unicode.faq.0.answer'
			}
		],
		useCases: ['tool.encode-unicode.use_case.0', 'tool.encode-unicode.use_case.1'],
		sampleInput: 'Hello 🌎'
	}
];
