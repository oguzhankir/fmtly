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
	},
	{
		id: 'text-text-reverser',
		category: 'text',
		slug: 'reverser',
		displayName: 'tool.text-text-reverser.display_name',
		tagline: 'tool.text-text-reverser.tagline',
		description: 'tool.text-text-reverser.description',
		primaryKeyword: 'tool.text-text-reverser.primary_keyword',
		metaTitle: 'tool.text-text-reverser.meta_title',
		metaDescription: 'tool.text-text-reverser.meta_description',
		engine: 'text',
		operation: 'tool.text-text-reverser.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'text', slug: 'word-counter' },
			{ category: 'text', slug: 'case' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'yaml', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.text-text-reverser.faq.0.question',
				answer: 'tool.text-text-reverser.faq.0.answer'
			},
			{
				question: 'tool.text-text-reverser.faq.1.question',
				answer: 'tool.text-text-reverser.faq.1.answer'
			},
			{
				question: 'tool.text-text-reverser.faq.2.question',
				answer: 'tool.text-text-reverser.faq.2.answer'
			}
		],
		useCases: [
			'tool.text-text-reverser.use_case.0',
			'tool.text-text-reverser.use_case.1',
			'tool.text-text-reverser.use_case.2',
			'tool.text-text-reverser.use_case.3'
		],
		sampleInput: 'line one\nline two\nline three'
	},
	{
		id: 'text-duplicate-line-remover',
		category: 'text',
		slug: 'deduplicate',
		displayName: 'tool.text-duplicate-line-remover.display_name',
		tagline: 'tool.text-duplicate-line-remover.tagline',
		description: 'tool.text-duplicate-line-remover.description',
		primaryKeyword: 'tool.text-duplicate-line-remover.primary_keyword',
		metaTitle: 'tool.text-duplicate-line-remover.meta_title',
		metaDescription: 'tool.text-duplicate-line-remover.meta_description',
		engine: 'text',
		operation: 'tool.text-duplicate-line-remover.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'text', slug: 'word-counter' },
			{ category: 'text', slug: 'reverser' },
			{ category: 'text', slug: 'case' },
			{ category: 'json', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.text-duplicate-line-remover.faq.0.question',
				answer: 'tool.text-duplicate-line-remover.faq.0.answer'
			},
			{
				question: 'tool.text-duplicate-line-remover.faq.1.question',
				answer: 'tool.text-duplicate-line-remover.faq.1.answer'
			},
			{
				question: 'tool.text-duplicate-line-remover.faq.2.question',
				answer: 'tool.text-duplicate-line-remover.faq.2.answer'
			}
		],
		useCases: [
			'tool.text-duplicate-line-remover.use_case.0',
			'tool.text-duplicate-line-remover.use_case.1',
			'tool.text-duplicate-line-remover.use_case.2',
			'tool.text-duplicate-line-remover.use_case.3'
		],
		sampleInput: 'apple\nbanana\napple\ncherry\nbanana\ncherry\ndate'
	},
	{
		id: 'text-diff-compare',
		category: 'text',
		slug: 'diff',
		displayName: 'tool.text-diff-compare.display_name',
		tagline: 'tool.text-diff-compare.tagline',
		description: 'tool.text-diff-compare.description',
		primaryKeyword: 'tool.text-diff-compare.primary_keyword',
		metaTitle: 'tool.text-diff-compare.meta_title',
		metaDescription: 'tool.text-diff-compare.meta_description',
		engine: 'text',
		operation: 'tool.text-diff-compare.operation',
		layoutVariant: 'split',
		inputLanguage: 'txt',
		outputLanguage: 'diff',
		hasTreeView: false,
		relatedTools: [
			{ category: 'text', slug: 'whitespace' },
			{ category: 'json', slug: 'diff' },
			{ category: 'xml', slug: 'diff' },
			{ category: 'yaml', slug: 'diff' }
		],
		faqs: [
			{
				question: 'tool.text-diff-compare.faq.0.question',
				answer: 'tool.text-diff-compare.faq.0.answer'
			},
			{
				question: 'tool.text-diff-compare.faq.1.question',
				answer: 'tool.text-diff-compare.faq.1.answer'
			},
			{
				question: 'tool.text-diff-compare.faq.2.question',
				answer: 'tool.text-diff-compare.faq.2.answer'
			}
		],
		useCases: [
			'tool.text-diff-compare.use_case.0',
			'tool.text-diff-compare.use_case.1',
			'tool.text-diff-compare.use_case.2',
			'tool.text-diff-compare.use_case.3'
		],
		sampleInput: 'Line 1\nLine 2\nLine 3\nLine 4'
	},
	{
		id: 'text-whitespace-cleaner',
		category: 'text',
		slug: 'whitespace',
		displayName: 'tool.text-whitespace-cleaner.display_name',
		tagline: 'tool.text-whitespace-cleaner.tagline',
		description: 'tool.text-whitespace-cleaner.description',
		primaryKeyword: 'tool.text-whitespace-cleaner.primary_keyword',
		metaTitle: 'tool.text-whitespace-cleaner.meta_title',
		metaDescription: 'tool.text-whitespace-cleaner.meta_description',
		engine: 'text',
		operation: 'tool.text-whitespace-cleaner.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'text', slug: 'deduplicate' },
			{ category: 'text', slug: 'reverser' },
			{ category: 'text', slug: 'case' },
			{ category: 'json', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.text-whitespace-cleaner.faq.0.question',
				answer: 'tool.text-whitespace-cleaner.faq.0.answer'
			},
			{
				question: 'tool.text-whitespace-cleaner.faq.1.question',
				answer: 'tool.text-whitespace-cleaner.faq.1.answer'
			},
			{
				question: 'tool.text-whitespace-cleaner.faq.2.question',
				answer: 'tool.text-whitespace-cleaner.faq.2.answer'
			}
		],
		useCases: [
			'tool.text-whitespace-cleaner.use_case.0',
			'tool.text-whitespace-cleaner.use_case.1',
			'tool.text-whitespace-cleaner.use_case.2',
			'tool.text-whitespace-cleaner.use_case.3'
		],
		sampleInput:
			'Line with trailing spaces   \t\nMixed\t\ttabs   and  spaces\n\r\nWindows line endings\r\n  \n  \nExtra blank lines'
	}
];
