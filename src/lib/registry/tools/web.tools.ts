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
		operation: 'url-parser',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'web', slug: 'cors' },
			{ category: 'encode', slug: 'url' }
		],
		faqs: [
			{
				question: 'tool.web-url-parser.faq.0.question',
				answer: 'tool.web-url-parser.faq.0.answer'
			},
			{
				question: 'tool.web-url-parser.faq.1.question',
				answer: 'tool.web-url-parser.faq.1.answer'
			}
		],
		useCases: [
			'tool.web-url-parser.use_case.0',
			'tool.web-url-parser.use_case.1',
			'tool.web-url-parser.use_case.2'
		],
		sampleInput:
			'https://user:pass@api.example.com:8080/v1/users?page=2&limit=10&filter=active#results'
	},
	{
		id: 'web-user-agent',
		category: 'web',
		slug: 'user-agent',
		displayName: 'tool.web-user-agent.display_name',
		tagline: 'tool.web-user-agent.tagline',
		description: 'tool.web-user-agent.description',
		primaryKeyword: 'tool.web-user-agent.primary_keyword',
		metaTitle: 'tool.web-user-agent.meta_title',
		metaDescription: 'tool.web-user-agent.meta_description',
		engine: 'web',
		operation: 'user-agent',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'web', slug: 'cors' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.web-user-agent.faq.0.question',
				answer: 'tool.web-user-agent.faq.0.answer'
			}
		],
		useCases: [
			'tool.web-user-agent.use_case.0',
			'tool.web-user-agent.use_case.1',
			'tool.web-user-agent.use_case.2'
		],
		sampleInput:
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
	},
	{
		id: 'web-cors',
		category: 'web',
		slug: 'cors',
		displayName: 'tool.web-cors.display_name',
		tagline: 'tool.web-cors.tagline',
		description: 'tool.web-cors.description',
		primaryKeyword: 'tool.web-cors.primary_keyword',
		metaTitle: 'tool.web-cors.meta_title',
		metaDescription: 'tool.web-cors.meta_description',
		engine: 'web',
		operation: 'cors',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'web', slug: 'url-parser' },
			{ category: 'web', slug: 'dns-lookup' }
		],
		faqs: [
			{
				question: 'tool.web-cors.faq.0.question',
				answer: 'tool.web-cors.faq.0.answer'
			},
			{
				question: 'tool.web-cors.faq.1.question',
				answer: 'tool.web-cors.faq.1.answer'
			}
		],
		useCases: ['tool.web-cors.use_case.0', 'tool.web-cors.use_case.1', 'tool.web-cors.use_case.2'],
		sampleInput: 'Access-Control-Allow-Origin'
	},
	{
		id: 'web-mime-types',
		category: 'web',
		slug: 'mime-types',
		displayName: 'tool.web-mime-types.display_name',
		tagline: 'tool.web-mime-types.tagline',
		description: 'tool.web-mime-types.description',
		primaryKeyword: 'tool.web-mime-types.primary_keyword',
		metaTitle: 'tool.web-mime-types.meta_title',
		metaDescription: 'tool.web-mime-types.meta_description',
		engine: 'web',
		operation: 'mime-types',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'web', slug: 'url-parser' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.web-mime-types.faq.0.question',
				answer: 'tool.web-mime-types.faq.0.answer'
			}
		],
		useCases: [
			'tool.web-mime-types.use_case.0',
			'tool.web-mime-types.use_case.1',
			'tool.web-mime-types.use_case.2'
		],
		sampleInput: 'json'
	},
	{
		id: 'web-ip-lookup',
		category: 'web',
		slug: 'ip-lookup',
		displayName: 'tool.web-ip-lookup.display_name',
		tagline: 'tool.web-ip-lookup.tagline',
		description: 'tool.web-ip-lookup.description',
		primaryKeyword: 'tool.web-ip-lookup.primary_keyword',
		metaTitle: 'tool.web-ip-lookup.meta_title',
		metaDescription: 'tool.web-ip-lookup.meta_description',
		engine: 'web',
		operation: 'ip-lookup',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'web', slug: 'dns-lookup' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.web-ip-lookup.faq.0.question',
				answer: 'tool.web-ip-lookup.faq.0.answer'
			}
		],
		useCases: [
			'tool.web-ip-lookup.use_case.0',
			'tool.web-ip-lookup.use_case.1',
			'tool.web-ip-lookup.use_case.2'
		],
		sampleInput: '8.8.8.8'
	},
	{
		id: 'web-dns-lookup',
		category: 'web',
		slug: 'dns-lookup',
		displayName: 'tool.web-dns-lookup.display_name',
		tagline: 'tool.web-dns-lookup.tagline',
		description: 'tool.web-dns-lookup.description',
		primaryKeyword: 'tool.web-dns-lookup.primary_keyword',
		metaTitle: 'tool.web-dns-lookup.meta_title',
		metaDescription: 'tool.web-dns-lookup.meta_description',
		engine: 'web',
		operation: 'dns-lookup',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'web', slug: 'ip-lookup' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.web-dns-lookup.faq.0.question',
				answer: 'tool.web-dns-lookup.faq.0.answer'
			}
		],
		useCases: [
			'tool.web-dns-lookup.use_case.0',
			'tool.web-dns-lookup.use_case.1',
			'tool.web-dns-lookup.use_case.2'
		],
		sampleInput: 'example.com'
	}
];
