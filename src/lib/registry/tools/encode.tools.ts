import type { ToolDefinition } from '../types.js';

export const encodeTools: ToolDefinition[] = [
	{
		id: 'encode-jwt-decoder',
		category: 'encode',
		slug: 'jwt',
		displayName: 'tool.encode-jwt-decoder.display_name',
		tagline: 'tool.encode-jwt-decoder.tagline',
		description: 'tool.encode-jwt-decoder.description',
		primaryKeyword: 'tool.encode-jwt-decoder.primary_keyword',
		metaTitle: 'tool.encode-jwt-decoder.meta_title',
		metaDescription: 'tool.encode-jwt-decoder.meta_description',
		engine: 'encode',
		operation: 'tool.encode-jwt-decoder.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'validator' },
			{ category: 'text', slug: 'escape' }
		],
		faqs: [
			{
				question: 'tool.encode-jwt-decoder.faq.0.question',
				answer: 'tool.encode-jwt-decoder.faq.0.answer'
			},
			{
				question: 'tool.encode-jwt-decoder.faq.1.question',
				answer: 'tool.encode-jwt-decoder.faq.1.answer'
			},
			{
				question: 'tool.encode-jwt-decoder.faq.2.question',
				answer: 'tool.encode-jwt-decoder.faq.2.answer'
			},
			{
				question: 'tool.encode-jwt-decoder.faq.3.question',
				answer: 'tool.encode-jwt-decoder.faq.3.answer'
			}
		],
		useCases: [
			'tool.encode-jwt-decoder.use_case.0',
			'tool.encode-jwt-decoder.use_case.1',
			'tool.encode-jwt-decoder.use_case.2',
			'tool.encode-jwt-decoder.use_case.3'
		],
		sampleInput:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
	}
];
