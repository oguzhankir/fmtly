import type { ToolDefinition } from '../types.js';

export const cryptoTools: ToolDefinition[] = [
	{
		id: 'random-string-generator',
		category: 'crypto',
		slug: 'random-string',
		displayName: 'tool.random-string-generator.display_name',
		tagline: 'tool.random-string-generator.tagline',
		description: 'tool.random-string-generator.description',
		primaryKeyword: 'tool.random-string-generator.primary_keyword',
		metaTitle: 'tool.random-string-generator.meta_title',
		metaDescription: 'tool.random-string-generator.meta_description',
		engine: 'crypto',
		operation: 'tool.random-string-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'base64' },
			{ category: 'encode', slug: 'hex' },
			{ category: 'qr', slug: 'generator' },
			{ category: 'text', slug: 'escape' }
		],
		faqs: [
			{
				question: 'tool.random-string-generator.faq.0.question',
				answer: 'tool.random-string-generator.faq.0.answer'
			},
			{
				question: 'tool.random-string-generator.faq.1.question',
				answer: 'tool.random-string-generator.faq.1.answer'
			},
			{
				question: 'tool.random-string-generator.faq.2.question',
				answer: 'tool.random-string-generator.faq.2.answer'
			},
			{
				question: 'tool.random-string-generator.faq.3.question',
				answer: 'tool.random-string-generator.faq.3.answer'
			}
		],
		useCases: [
			'tool.random-string-generator.use_case.0',
			'tool.random-string-generator.use_case.1',
			'tool.random-string-generator.use_case.2',
			'tool.random-string-generator.use_case.3'
		],
		sampleInput: ''
	}
];
