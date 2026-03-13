import type { ToolDefinition } from '../types.js';

export const cryptoTools: ToolDefinition[] = [
	{
		id: 'crypto-hmac',
		category: 'crypto',
		slug: 'hmac',
		displayName: 'tool.crypto-hmac.display_name',
		tagline: 'tool.crypto-hmac.tagline',
		description: 'tool.crypto-hmac.description',
		primaryKeyword: 'tool.crypto-hmac.primary_keyword',
		metaTitle: 'tool.crypto-hmac.meta_title',
		metaDescription: 'tool.crypto-hmac.meta_description',
		engine: 'crypto',
		operation: 'tool.crypto-hmac.operation',
		layoutVariant: 'dual-input',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'crypto', slug: 'random-string' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.crypto-hmac.faq.0.question',
				answer: 'tool.crypto-hmac.faq.0.answer'
			}
		],
		useCases: ['tool.crypto-hmac.use_case.0', 'tool.crypto-hmac.use_case.1'],
		sampleInput: 'The quick brown fox jumps over the lazy dog\nkey' // message \n key
	},
	{
		id: 'crypto-password-strength',
		category: 'crypto',
		slug: 'password-strength',
		displayName: 'tool.crypto-password-strength.display_name',
		tagline: 'tool.crypto-password-strength.tagline',
		description: 'tool.crypto-password-strength.description',
		primaryKeyword: 'tool.crypto-password-strength.primary_keyword',
		metaTitle: 'tool.crypto-password-strength.meta_title',
		metaDescription: 'tool.crypto-password-strength.meta_description',
		engine: 'crypto',
		operation: 'tool.crypto-password-strength.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'crypto', slug: 'random-string' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.crypto-password-strength.faq.0.question',
				answer: 'tool.crypto-password-strength.faq.0.answer'
			}
		],
		useCases: [
			'tool.crypto-password-strength.use_case.0',
			'tool.crypto-password-strength.use_case.1'
		],
		sampleInput: 'P@ssw0rd!'
	},
	{
		id: 'crypto-ulid',
		category: 'crypto',
		slug: 'ulid',
		displayName: 'tool.crypto-ulid.display_name',
		tagline: 'tool.crypto-ulid.tagline',
		description: 'tool.crypto-ulid.description',
		primaryKeyword: 'tool.crypto-ulid.primary_keyword',
		metaTitle: 'tool.crypto-ulid.meta_title',
		metaDescription: 'tool.crypto-ulid.meta_description',
		engine: 'crypto',
		operation: 'tool.crypto-ulid.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'crypto', slug: 'random-string' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.crypto-ulid.faq.0.question',
				answer: 'tool.crypto-ulid.faq.0.answer'
			}
		],
		useCases: ['tool.crypto-ulid.use_case.0', 'tool.crypto-ulid.use_case.1'],
		sampleInput: ''
	},
	{
		id: 'crypto-random-string',
		category: 'crypto',
		slug: 'random-string',
		displayName: 'tool.crypto-random-string.display_name',
		tagline: 'tool.crypto-random-string.tagline',
		description: 'tool.crypto-random-string.description',
		primaryKeyword: 'tool.crypto-random-string.primary_keyword',
		metaTitle: 'tool.crypto-random-string.meta_title',
		metaDescription: 'tool.crypto-random-string.meta_description',
		engine: 'crypto',
		operation: 'tool.crypto-random-string.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'crypto', slug: 'password-strength' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.crypto-random-string.faq.0.question',
				answer: 'tool.crypto-random-string.faq.0.answer'
			}
		],
		useCases: ['tool.crypto-random-string.use_case.0', 'tool.crypto-random-string.use_case.1'],
		sampleInput: ''
	}
];
