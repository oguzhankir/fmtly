import type { ToolDefinition } from '../types.js';

export const numberTools: ToolDefinition[] = [
	{
		id: 'number-formatter',
		category: 'number',
		slug: 'formatter',
		displayName: 'tool.number-formatter.display_name',
		tagline: 'tool.number-formatter.tagline',
		description: 'tool.number-formatter.description',
		primaryKeyword: 'tool.number-formatter.primary_keyword',
		metaTitle: 'tool.number-formatter.meta_title',
		metaDescription: 'tool.number-formatter.meta_description',
		engine: 'number',
		operation: 'tool.number-formatter.operation',
		layoutVariant: 'split',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'percentage' },
			{ category: 'number', slug: 'scientific' },
			{ category: 'number', slug: 'roman' }
		],
		faqs: [
			{
				question: 'tool.number-formatter.faq.0.question',
				answer: 'tool.number-formatter.faq.0.answer'
			}
		],
		useCases: [
			'tool.number-formatter.use_case.0',
			'tool.number-formatter.use_case.1',
			'tool.number-formatter.use_case.2'
		],
		sampleInput: '1234567.89'
	},
	{
		id: 'number-roman',
		category: 'number',
		slug: 'roman',
		displayName: 'tool.number-roman.display_name',
		tagline: 'tool.number-roman.tagline',
		description: 'tool.number-roman.description',
		primaryKeyword: 'tool.number-roman.primary_keyword',
		metaTitle: 'tool.number-roman.meta_title',
		metaDescription: 'tool.number-roman.meta_description',
		engine: 'number',
		operation: 'tool.number-roman.operation',
		layoutVariant: 'bidirectional',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.number-roman.faq.0.question',
				answer: 'tool.number-roman.faq.0.answer'
			}
		],
		useCases: [
			'tool.number-roman.use_case.0',
			'tool.number-roman.use_case.1',
			'tool.number-roman.use_case.2'
		],
		sampleInput: '1994'
	},
	{
		id: 'number-percentage',
		category: 'number',
		slug: 'percentage',
		displayName: 'tool.number-percentage.display_name',
		tagline: 'tool.number-percentage.tagline',
		description: 'tool.number-percentage.description',
		primaryKeyword: 'tool.number-percentage.primary_keyword',
		metaTitle: 'tool.number-percentage.meta_title',
		metaDescription: 'tool.number-percentage.meta_description',
		engine: 'number',
		operation: 'tool.number-percentage.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.number-percentage.faq.0.question',
				answer: 'tool.number-percentage.faq.0.answer'
			}
		],
		useCases: [
			'tool.number-percentage.use_case.0',
			'tool.number-percentage.use_case.1',
			'tool.number-percentage.use_case.2'
		],
		sampleInput: '100'
	},
	{
		id: 'number-scientific',
		category: 'number',
		slug: 'scientific',
		displayName: 'tool.number-scientific.display_name',
		tagline: 'tool.number-scientific.tagline',
		description: 'tool.number-scientific.description',
		primaryKeyword: 'tool.number-scientific.primary_keyword',
		metaTitle: 'tool.number-scientific.meta_title',
		metaDescription: 'tool.number-scientific.meta_description',
		engine: 'number',
		operation: 'tool.number-scientific.operation',
		layoutVariant: 'bidirectional',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.number-scientific.faq.0.question',
				answer: 'tool.number-scientific.faq.0.answer'
			}
		],
		useCases: ['tool.number-scientific.use_case.0', 'tool.number-scientific.use_case.1'],
		sampleInput: '12340'
	},
	{
		id: 'number-statistics',
		category: 'number',
		slug: 'statistics',
		displayName: 'tool.number-statistics.display_name',
		tagline: 'tool.number-statistics.tagline',
		description: 'tool.number-statistics.description',
		primaryKeyword: 'tool.number-statistics.primary_keyword',
		metaTitle: 'tool.number-statistics.meta_title',
		metaDescription: 'tool.number-statistics.meta_description',
		engine: 'number',
		operation: 'tool.number-statistics.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.number-statistics.faq.0.question',
				answer: 'tool.number-statistics.faq.0.answer'
			}
		],
		useCases: ['tool.number-statistics.use_case.0', 'tool.number-statistics.use_case.1'],
		sampleInput: ''
	},
	{
		id: 'number-matrix',
		category: 'number',
		slug: 'matrix',
		displayName: 'tool.number-matrix.display_name',
		tagline: 'tool.number-matrix.tagline',
		description: 'tool.number-matrix.description',
		primaryKeyword: 'tool.number-matrix.primary_keyword',
		metaTitle: 'tool.number-matrix.meta_title',
		metaDescription: 'tool.number-matrix.meta_description',
		engine: 'number',
		operation: 'tool.number-matrix.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'statistics' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.number-matrix.faq.0.question',
				answer: 'tool.number-matrix.faq.0.answer'
			}
		],
		useCases: ['tool.number-matrix.use_case.0', 'tool.number-matrix.use_case.1'],
		sampleInput: ''
	},
	{
		id: 'number-unit-converter',
		category: 'number',
		slug: 'unit-converter',
		displayName: 'tool.number-unit-converter.display_name',
		tagline: 'tool.number-unit-converter.tagline',
		description: 'tool.number-unit-converter.description',
		primaryKeyword: 'tool.number-unit-converter.primary_keyword',
		metaTitle: 'tool.number-unit-converter.meta_title',
		metaDescription: 'tool.number-unit-converter.meta_description',
		engine: 'number',
		operation: 'tool.number-unit-converter.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.number-unit-converter.faq.0.question',
				answer: 'tool.number-unit-converter.faq.0.answer'
			}
		],
		useCases: ['tool.number-unit-converter.use_case.0', 'tool.number-unit-converter.use_case.1'],
		sampleInput: ''
	}
];
