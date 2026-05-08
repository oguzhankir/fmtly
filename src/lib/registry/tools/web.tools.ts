import type { ToolDefinition } from '../types.js';

export const webTools: ToolDefinition[] = [
	{
		id: 'web-url-parser',
		category: 'web',
		slug: 'url-parser',
		displayName: 'tool.web-url-parser.display_name',
		tagline: 'tool.web-url-parser.tagline',
		description: 'tool.web-url-parser.description',
		primaryKeyword: 'tool.web-url-parser.primary_keyword',
		metaTitle: 'tool.web-url-parser.meta_title',
		metaDescription: 'tool.web-url-parser.meta_description',
		engine: 'web',
		operation: 'tool.web-url-parser.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'url' },
			{ category: 'encode', slug: 'punycode' },
			{ category: 'encode', slug: 'base64' },
			{ category: 'text', slug: 'escape' }
		],
		faqs: [
			{
				question: 'tool.web-url-parser.faq.0.question',
				answer: 'tool.web-url-parser.faq.0.answer'
			},
			{
				question: 'tool.web-url-parser.faq.1.question',
				answer: 'tool.web-url-parser.faq.1.answer'
			},
			{
				question: 'tool.web-url-parser.faq.2.question',
				answer: 'tool.web-url-parser.faq.2.answer'
			},
			{
				question: 'tool.web-url-parser.faq.3.question',
				answer: 'tool.web-url-parser.faq.3.answer'
			}
		],
		useCases: [
			'tool.web-url-parser.use_case.0',
			'tool.web-url-parser.use_case.1',
			'tool.web-url-parser.use_case.2',
			'tool.web-url-parser.use_case.3'
		],
		sampleInput:
			'https://user:pass@api.example.com:8080/v2/search?q=hello+world&lang=en&page=2#results'
	}
];
