import type { ToolDefinition } from '../types.js';

const imageRelated = [
	{ category: 'image', slug: 'resize' },
	{ category: 'image', slug: 'convert' },
	{ category: 'image', slug: 'compress' }
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
		id: 'image-compressor',
		category: 'image',
		slug: 'compress',
		displayName: 'tool.image-compressor.display_name',
		tagline: 'tool.image-compressor.tagline',
		description: 'tool.image-compressor.description',
		primaryKeyword: 'tool.image-compressor.primary_keyword',
		metaTitle: 'tool.image-compressor.meta_title',
		metaDescription: 'tool.image-compressor.meta_description',
		engine: 'image',
		operation: 'tool.image-compressor.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'image',
		outputLanguage: 'image',
		hasTreeView: false,
		relatedTools: [...imageRelated],
		faqs: [
			{
				question: 'tool.image-compressor.faq.0.question',
				answer: 'tool.image-compressor.faq.0.answer'
			},
			{
				question: 'tool.image-compressor.faq.1.question',
				answer: 'tool.image-compressor.faq.1.answer'
			},
			{
				question: 'tool.image-compressor.faq.2.question',
				answer: 'tool.image-compressor.faq.2.answer'
			},
			{
				question: 'tool.image-compressor.faq.3.question',
				answer: 'tool.image-compressor.faq.3.answer'
			}
		],
		useCases: [
			'tool.image-compressor.use_case.0',
			'tool.image-compressor.use_case.1',
			'tool.image-compressor.use_case.2',
			'tool.image-compressor.use_case.3'
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
	}
];
