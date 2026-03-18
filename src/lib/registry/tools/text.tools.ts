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
		id: 'text-lorem-ipsum-generator',
		category: 'text',
		slug: 'lorem',
		displayName: 'tool.text-lorem-ipsum-generator.display_name',
		tagline: 'tool.text-lorem-ipsum-generator.tagline',
		description: 'tool.text-lorem-ipsum-generator.description',
		primaryKeyword: 'tool.text-lorem-ipsum-generator.primary_keyword',
		metaTitle: 'tool.text-lorem-ipsum-generator.meta_title',
		metaDescription: 'tool.text-lorem-ipsum-generator.meta_description',
		engine: 'text',
		operation: 'tool.text-lorem-ipsum-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'text', slug: 'word-counter' },
			{ category: 'text', slug: 'case' },
			{ category: 'text', slug: 'whitespace' },
			{ category: 'text', slug: 'diff' }
		],
		faqs: [
			{
				question: 'tool.text-lorem-ipsum-generator.faq.0.question',
				answer: 'tool.text-lorem-ipsum-generator.faq.0.answer'
			},
			{
				question: 'tool.text-lorem-ipsum-generator.faq.1.question',
				answer: 'tool.text-lorem-ipsum-generator.faq.1.answer'
			},
			{
				question: 'tool.text-lorem-ipsum-generator.faq.2.question',
				answer: 'tool.text-lorem-ipsum-generator.faq.2.answer'
			}
		],
		useCases: [
			'tool.text-lorem-ipsum-generator.use_case.0',
			'tool.text-lorem-ipsum-generator.use_case.1',
			'tool.text-lorem-ipsum-generator.use_case.2',
			'tool.text-lorem-ipsum-generator.use_case.3'
		],
		sampleInput:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	},
	{
		id: 'text-markdown-to-html',
		category: 'text',
		slug: 'markdown-to-html',
		displayName: 'tool.text-markdown-to-html.display_name',
		tagline: 'tool.text-markdown-to-html.tagline',
		description: 'tool.text-markdown-to-html.description',
		primaryKeyword: 'tool.text-markdown-to-html.primary_keyword',
		metaTitle: 'tool.text-markdown-to-html.meta_title',
		metaDescription: 'tool.text-markdown-to-html.meta_description',
		engine: 'text',
		operation: 'tool.text-markdown-to-html.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'html',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'to-markdown' },
			{ category: 'yaml', slug: 'to-html' },
			{ category: 'toml', slug: 'to-html' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.text-markdown-to-html.faq.0.question',
				answer: 'tool.text-markdown-to-html.faq.0.answer'
			},
			{
				question: 'tool.text-markdown-to-html.faq.1.question',
				answer: 'tool.text-markdown-to-html.faq.1.answer'
			},
			{
				question: 'tool.text-markdown-to-html.faq.2.question',
				answer: 'tool.text-markdown-to-html.faq.2.answer'
			}
		],
		useCases: [
			'tool.text-markdown-to-html.use_case.0',
			'tool.text-markdown-to-html.use_case.1',
			'tool.text-markdown-to-html.use_case.2',
			'tool.text-markdown-to-html.use_case.3'
		],
		sampleInput:
			'# Markdown -> HTML\n\nUse **Markdown** to write fast docs.\n\n## Table\n\n| Name | Role |\n| --- | --- |\n| Ada | Engineer |\n| Linus | Maintainer |\n\n## Code\n\n```javascript\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n```\n\n> Live preview updates as you type.'
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
		id: 'text-line-sorter',
		category: 'text',
		slug: 'line-sorter',
		displayName: 'tool.text-line-sorter.display_name',
		tagline: 'tool.text-line-sorter.tagline',
		description: 'tool.text-line-sorter.description',
		primaryKeyword: 'tool.text-line-sorter.primary_keyword',
		metaTitle: 'tool.text-line-sorter.meta_title',
		metaDescription: 'tool.text-line-sorter.meta_description',
		engine: 'text',
		operation: 'tool.text-line-sorter.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'text', slug: 'deduplicate' },
			{ category: 'text', slug: 'whitespace' },
			{ category: 'text', slug: 'diff' },
			{ category: 'text', slug: 'regex' }
		],
		faqs: [
			{
				question: 'tool.text-line-sorter.faq.0.question',
				answer: 'tool.text-line-sorter.faq.0.answer'
			},
			{
				question: 'tool.text-line-sorter.faq.1.question',
				answer: 'tool.text-line-sorter.faq.1.answer'
			},
			{
				question: 'tool.text-line-sorter.faq.2.question',
				answer: 'tool.text-line-sorter.faq.2.answer'
			}
		],
		useCases: [
			'tool.text-line-sorter.use_case.0',
			'tool.text-line-sorter.use_case.1',
			'tool.text-line-sorter.use_case.2',
			'tool.text-line-sorter.use_case.3'
		],
		sampleInput: 'zebra\n10\napple\n2\nBanana\n\n42\ncherry'
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
		id: 'text-regex-tester',
		category: 'text',
		slug: 'regex',
		displayName: 'tool.text-regex-tester.display_name',
		tagline: 'tool.text-regex-tester.tagline',
		description: 'tool.text-regex-tester.description',
		primaryKeyword: 'tool.text-regex-tester.primary_keyword',
		metaTitle: 'tool.text-regex-tester.meta_title',
		metaDescription: 'tool.text-regex-tester.meta_description',
		engine: 'text',
		operation: 'tool.text-regex-tester.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'text', slug: 'diff' },
			{ category: 'text', slug: 'word-counter' },
			{ category: 'text', slug: 'case' },
			{ category: 'json', slug: 'jsonpath' }
		],
		faqs: [
			{
				question: 'tool.text-regex-tester.faq.0.question',
				answer: 'tool.text-regex-tester.faq.0.answer'
			},
			{
				question: 'tool.text-regex-tester.faq.1.question',
				answer: 'tool.text-regex-tester.faq.1.answer'
			},
			{
				question: 'tool.text-regex-tester.faq.2.question',
				answer: 'tool.text-regex-tester.faq.2.answer'
			}
		],
		useCases: [
			'tool.text-regex-tester.use_case.0',
			'tool.text-regex-tester.use_case.1',
			'tool.text-regex-tester.use_case.2',
			'tool.text-regex-tester.use_case.3'
		],
		sampleInput: `INFO [auth-api] Login succeeded for user=42
WARN [payments] Retry scheduled for charge_id=ch_9
ERROR [auth-api] Invalid password for user=21
INFO [search] Results cached for query=regex tester`
	},
	{
		id: 'text-escape-unescape',
		category: 'text',
		slug: 'escape',
		displayName: 'tool.text-escape-unescape.display_name',
		tagline: 'tool.text-escape-unescape.tagline',
		description: 'tool.text-escape-unescape.description',
		primaryKeyword: 'tool.text-escape-unescape.primary_keyword',
		metaTitle: 'tool.text-escape-unescape.meta_title',
		metaDescription: 'tool.text-escape-unescape.meta_description',
		engine: 'text',
		operation: 'tool.text-escape-unescape.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'text', slug: 'regex' },
			{ category: 'text', slug: 'markdown-to-html' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'xml', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.text-escape-unescape.faq.0.question',
				answer: 'tool.text-escape-unescape.faq.0.answer'
			},
			{
				question: 'tool.text-escape-unescape.faq.1.question',
				answer: 'tool.text-escape-unescape.faq.1.answer'
			},
			{
				question: 'tool.text-escape-unescape.faq.2.question',
				answer: 'tool.text-escape-unescape.faq.2.answer'
			}
		],
		useCases: [
			'tool.text-escape-unescape.use_case.0',
			'tool.text-escape-unescape.use_case.1',
			'tool.text-escape-unescape.use_case.2',
			'tool.text-escape-unescape.use_case.3'
		],
		sampleInput: `Line 1: "Hello <world> & everyone"
Path: /api/v1/search?q=hello world&lang=en
Regex: ^(test|prod)+$
SQL owner: O'Reilly`
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
