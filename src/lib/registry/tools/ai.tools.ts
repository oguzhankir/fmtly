import type { ToolDefinition } from '../types.js';

const aiRelated = [
	{ category: 'ai', slug: 'token-counter' },
	{ category: 'ai', slug: 'token-optimizer' },
	{ category: 'text', slug: 'word-counter' },
	{ category: 'text', slug: 'readability' }
] as const;

export const aiTools: ToolDefinition[] = [
	{
		id: 'ai-token-counter',
		category: 'ai',
		slug: 'token-counter',
		displayName: 'tool.ai-token-counter.display_name',
		tagline: 'tool.ai-token-counter.tagline',
		description: 'tool.ai-token-counter.description',
		primaryKeyword: 'tool.ai-token-counter.primary_keyword',
		metaTitle: 'tool.ai-token-counter.meta_title',
		metaDescription: 'tool.ai-token-counter.meta_description',
		engine: 'ai',
		operation: 'tool.ai-token-counter.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [...aiRelated],
		faqs: [
			{
				question: 'tool.ai-token-counter.faq.0.question',
				answer: 'tool.ai-token-counter.faq.0.answer'
			},
			{
				question: 'tool.ai-token-counter.faq.1.question',
				answer: 'tool.ai-token-counter.faq.1.answer'
			},
			{
				question: 'tool.ai-token-counter.faq.2.question',
				answer: 'tool.ai-token-counter.faq.2.answer'
			},
			{
				question: 'tool.ai-token-counter.faq.3.question',
				answer: 'tool.ai-token-counter.faq.3.answer'
			}
		],
		useCases: [
			'tool.ai-token-counter.use_case.0',
			'tool.ai-token-counter.use_case.1',
			'tool.ai-token-counter.use_case.2',
			'tool.ai-token-counter.use_case.3'
		],
		sampleInput: `System: You are a precise coding assistant.

User: Refactor this Svelte component for readability, keep behavior unchanged, and explain the risky parts before editing.`
	},
	{
		id: 'ai-token-optimizer',
		category: 'ai',
		slug: 'token-optimizer',
		displayName: 'tool.ai-token-optimizer.display_name',
		tagline: 'tool.ai-token-optimizer.tagline',
		description: 'tool.ai-token-optimizer.description',
		primaryKeyword: 'tool.ai-token-optimizer.primary_keyword',
		metaTitle: 'tool.ai-token-optimizer.meta_title',
		metaDescription: 'tool.ai-token-optimizer.meta_description',
		engine: 'ai',
		operation: 'tool.ai-token-optimizer.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [...aiRelated],
		faqs: [
			{
				question: 'tool.ai-token-optimizer.faq.0.question',
				answer: 'tool.ai-token-optimizer.faq.0.answer'
			},
			{
				question: 'tool.ai-token-optimizer.faq.1.question',
				answer: 'tool.ai-token-optimizer.faq.1.answer'
			},
			{
				question: 'tool.ai-token-optimizer.faq.2.question',
				answer: 'tool.ai-token-optimizer.faq.2.answer'
			},
			{
				question: 'tool.ai-token-optimizer.faq.3.question',
				answer: 'tool.ai-token-optimizer.faq.3.answer'
			}
		],
		useCases: [
			'tool.ai-token-optimizer.use_case.0',
			'tool.ai-token-optimizer.use_case.1',
			'tool.ai-token-optimizer.use_case.2',
			'tool.ai-token-optimizer.use_case.3'
		],
		sampleInput:
			'Please carefully analyze this prompt and make sure to remove unnecessary words while preserving the full intent and output requirements.'
	}
];
