import type { ToolDefinition } from '../types.js';

const imageRelated = [
	{ category: 'image', slug: 'resize' },
	{ category: 'image', slug: 'convert' },
	{ category: 'image', slug: 'to-base64' },
	{ category: 'image', slug: 'from-base64' }
] as const;

export const imageTools: ToolDefinition[] = [
	{
		id: 'image-resizer',
		category: 'image',
		slug: 'resize',
		displayName: 'tool.image-resizer.display_name',
		tagline: 'tool.image-resizer.tagline',
		description: 'tool.image-resizer.description',
		primaryKeyword: 'tool.image-resizer.primary_keyword',
		metaTitle: 'tool.image-resizer.meta_title',
		metaDescription: 'tool.image-resizer.meta_description',
		engine: 'image',
		operation: 'tool.image-resizer.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'image',
		outputLanguage: 'image',
		hasTreeView: false,
		relatedTools: [...imageRelated],
		faqs: [
			{ question: 'tool.image-resizer.faq.0.question', answer: 'tool.image-resizer.faq.0.answer' },
			{ question: 'tool.image-resizer.faq.1.question', answer: 'tool.image-resizer.faq.1.answer' },
			{ question: 'tool.image-resizer.faq.2.question', answer: 'tool.image-resizer.faq.2.answer' },
			{ question: 'tool.image-resizer.faq.3.question', answer: 'tool.image-resizer.faq.3.answer' }
		],
		useCases: [
			'tool.image-resizer.use_case.0',
			'tool.image-resizer.use_case.1',
			'tool.image-resizer.use_case.2',
			'tool.image-resizer.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'image-format-converter',
		category: 'image',
		slug: 'convert',
		displayName: 'tool.image-format-converter.display_name',
		tagline: 'tool.image-format-converter.tagline',
		description: 'tool.image-format-converter.description',
		primaryKeyword: 'tool.image-format-converter.primary_keyword',
		metaTitle: 'tool.image-format-converter.meta_title',
		metaDescription: 'tool.image-format-converter.meta_description',
		engine: 'image',
		operation: 'tool.image-format-converter.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'image',
		outputLanguage: 'image',
		hasTreeView: false,
		relatedTools: [...imageRelated],
		faqs: [
			{
				question: 'tool.image-format-converter.faq.0.question',
				answer: 'tool.image-format-converter.faq.0.answer'
			},
			{
				question: 'tool.image-format-converter.faq.1.question',
				answer: 'tool.image-format-converter.faq.1.answer'
			},
			{
				question: 'tool.image-format-converter.faq.2.question',
				answer: 'tool.image-format-converter.faq.2.answer'
			},
			{
				question: 'tool.image-format-converter.faq.3.question',
				answer: 'tool.image-format-converter.faq.3.answer'
			}
		],
		useCases: [
			'tool.image-format-converter.use_case.0',
			'tool.image-format-converter.use_case.1',
			'tool.image-format-converter.use_case.2',
			'tool.image-format-converter.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'image-to-base64',
		category: 'image',
		slug: 'to-base64',
		displayName: 'tool.image-to-base64.display_name',
		tagline: 'tool.image-to-base64.tagline',
		description: 'tool.image-to-base64.description',
		primaryKeyword: 'tool.image-to-base64.primary_keyword',
		metaTitle: 'tool.image-to-base64.meta_title',
		metaDescription: 'tool.image-to-base64.meta_description',
		engine: 'image',
		operation: 'tool.image-to-base64.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'image',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [...imageRelated],
		faqs: [
			{
				question: 'tool.image-to-base64.faq.0.question',
				answer: 'tool.image-to-base64.faq.0.answer'
			},
			{
				question: 'tool.image-to-base64.faq.1.question',
				answer: 'tool.image-to-base64.faq.1.answer'
			},
			{
				question: 'tool.image-to-base64.faq.2.question',
				answer: 'tool.image-to-base64.faq.2.answer'
			},
			{
				question: 'tool.image-to-base64.faq.3.question',
				answer: 'tool.image-to-base64.faq.3.answer'
			}
		],
		useCases: [
			'tool.image-to-base64.use_case.0',
			'tool.image-to-base64.use_case.1',
			'tool.image-to-base64.use_case.2',
			'tool.image-to-base64.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'image-from-base64',
		category: 'image',
		slug: 'from-base64',
		displayName: 'tool.image-from-base64.display_name',
		tagline: 'tool.image-from-base64.tagline',
		description: 'tool.image-from-base64.description',
		primaryKeyword: 'tool.image-from-base64.primary_keyword',
		metaTitle: 'tool.image-from-base64.meta_title',
		metaDescription: 'tool.image-from-base64.meta_description',
		engine: 'image',
		operation: 'tool.image-from-base64.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'image',
		hasTreeView: false,
		relatedTools: [...imageRelated],
		faqs: [
			{
				question: 'tool.image-from-base64.faq.0.question',
				answer: 'tool.image-from-base64.faq.0.answer'
			},
			{
				question: 'tool.image-from-base64.faq.1.question',
				answer: 'tool.image-from-base64.faq.1.answer'
			},
			{
				question: 'tool.image-from-base64.faq.2.question',
				answer: 'tool.image-from-base64.faq.2.answer'
			},
			{
				question: 'tool.image-from-base64.faq.3.question',
				answer: 'tool.image-from-base64.faq.3.answer'
			}
		],
		useCases: [
			'tool.image-from-base64.use_case.0',
			'tool.image-from-base64.use_case.1',
			'tool.image-from-base64.use_case.2',
			'tool.image-from-base64.use_case.3'
		],
		sampleInput:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+a5WQAAAAASUVORK5CYII='
	}
];
