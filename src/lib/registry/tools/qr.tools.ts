import type { ToolDefinition } from '../types.js';

export const qrTools: ToolDefinition[] = [
	{
		id: 'qr-code-generator',
		category: 'qr',
		slug: 'generator',
		displayName: 'tool.qr-code-generator.display_name',
		tagline: 'tool.qr-code-generator.tagline',
		description: 'tool.qr-code-generator.description',
		primaryKeyword: 'tool.qr-code-generator.primary_keyword',
		metaTitle: 'tool.qr-code-generator.meta_title',
		metaDescription: 'tool.qr-code-generator.meta_description',
		engine: 'qr',
		operation: 'tool.qr-code-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'svg',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'url' },
			{ category: 'encode', slug: 'base64' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'escape' }
		],
		faqs: [
			{
				question: 'tool.qr-code-generator.faq.0.question',
				answer: 'tool.qr-code-generator.faq.0.answer'
			},
			{
				question: 'tool.qr-code-generator.faq.1.question',
				answer: 'tool.qr-code-generator.faq.1.answer'
			},
			{
				question: 'tool.qr-code-generator.faq.2.question',
				answer: 'tool.qr-code-generator.faq.2.answer'
			},
			{
				question: 'tool.qr-code-generator.faq.3.question',
				answer: 'tool.qr-code-generator.faq.3.answer'
			}
		],
		useCases: [
			'tool.qr-code-generator.use_case.0',
			'tool.qr-code-generator.use_case.1',
			'tool.qr-code-generator.use_case.2',
			'tool.qr-code-generator.use_case.3'
		],
		sampleInput: 'https://fmtly.dev/json/formatter?utm_source=qr&utm_medium=tool'
	}
];
