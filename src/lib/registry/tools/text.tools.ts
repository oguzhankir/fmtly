import type { ToolDefinition } from '../types.js';

export const textTools: ToolDefinition[] = [
	{
		id: 'text-word-character-counter',
		category: 'text',
		slug: 'word-counter',
		displayName: 'tool.text-word-character-counter.display_name',
		tagline: 'tool.text-word-character-counter.tagline',
		description: 'tool.text-word-character-counter.description',
		primaryKeyword: 'tool.text-word-character-counter.primary_keyword',
		metaTitle: 'tool.text-word-character-counter.meta_title',
		metaDescription: 'tool.text-word-character-counter.meta_description',
		engine: 'text',
		operation: 'tool.text-word-character-counter.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'yaml', slug: 'formatter' },
			{ category: 'csv', slug: 'formatter' },
			{ category: 'toml', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.text-word-character-counter.faq.0.question',
				answer: 'tool.text-word-character-counter.faq.0.answer'
			},
			{
				question: 'tool.text-word-character-counter.faq.1.question',
				answer: 'tool.text-word-character-counter.faq.1.answer'
			},
			{
				question: 'tool.text-word-character-counter.faq.2.question',
				answer: 'tool.text-word-character-counter.faq.2.answer'
			}
		],
		useCases: [
			'tool.text-word-character-counter.use_case.0',
			'tool.text-word-character-counter.use_case.1',
			'tool.text-word-character-counter.use_case.2',
			'tool.text-word-character-counter.use_case.3'
		],
		sampleInput: `fmtly helps developers work faster.

Paste any text to instantly count words, characters, sentences, and paragraphs.
Use the reading-time estimate to optimize content length for docs, UX copy, and technical writing.`
	},
	{
		id: 'text-string-case-converter',
		category: 'text',
		slug: 'case',
		displayName: 'tool.text-string-case-converter.display_name',
		tagline: 'tool.text-string-case-converter.tagline',
		description: 'tool.text-string-case-converter.description',
		primaryKeyword: 'tool.text-string-case-converter.primary_keyword',
		metaTitle: 'tool.text-string-case-converter.meta_title',
		metaDescription: 'tool.text-string-case-converter.meta_description',
		engine: 'text',
		operation: 'tool.text-string-case-converter.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'text', slug: 'word-counter' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'yaml', slug: 'formatter' },
			{ category: 'toml', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.text-string-case-converter.faq.0.question',
				answer: 'tool.text-string-case-converter.faq.0.answer'
			},
			{
				question: 'tool.text-string-case-converter.faq.1.question',
				answer: 'tool.text-string-case-converter.faq.1.answer'
			},
			{
				question: 'tool.text-string-case-converter.faq.2.question',
				answer: 'tool.text-string-case-converter.faq.2.answer'
			}
		],
		useCases: [
			'tool.text-string-case-converter.use_case.0',
			'tool.text-string-case-converter.use_case.1',
			'tool.text-string-case-converter.use_case.2',
			'tool.text-string-case-converter.use_case.3'
		],
		sampleInput: 'user profile API response'
	}
];
