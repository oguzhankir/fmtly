import type { ToolDefinition } from '../types.js';

export const accessibilityTools: ToolDefinition[] = [
	{
		id: 'accessibility-contrast',
		category: 'accessibility',
		slug: 'contrast',
		displayName: 'tool.accessibility-contrast.display_name',
		tagline: 'tool.accessibility-contrast.tagline',
		description: 'tool.accessibility-contrast.description',
		primaryKeyword: 'tool.accessibility-contrast.primary_keyword',
		metaTitle: 'tool.accessibility-contrast.meta_title',
		metaDescription: 'tool.accessibility-contrast.meta_description',
		engine: 'accessibility',
		operation: 'tool.accessibility-contrast.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'accessibility', slug: 'color-blindness' },
			{ category: 'accessibility', slug: 'font-size' }
		],
		faqs: [
			{
				question: 'tool.accessibility-contrast.faq.0.question',
				answer: 'tool.accessibility-contrast.faq.0.answer'
			}
		],
		useCases: ['tool.accessibility-contrast.use_case.0', 'tool.accessibility-contrast.use_case.1'],
		sampleInput: ''
	},
	{
		id: 'accessibility-color-blindness',
		category: 'accessibility',
		slug: 'color-blindness',
		displayName: 'tool.accessibility-color-blindness.display_name',
		tagline: 'tool.accessibility-color-blindness.tagline',
		description: 'tool.accessibility-color-blindness.description',
		primaryKeyword: 'tool.accessibility-color-blindness.primary_keyword',
		metaTitle: 'tool.accessibility-color-blindness.meta_title',
		metaDescription: 'tool.accessibility-color-blindness.meta_description',
		engine: 'accessibility',
		operation: 'tool.accessibility-color-blindness.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'accessibility', slug: 'contrast' },
			{ category: 'color', slug: 'picker' }
		],
		faqs: [
			{
				question: 'tool.accessibility-color-blindness.faq.0.question',
				answer: 'tool.accessibility-color-blindness.faq.0.answer'
			}
		],
		useCases: [
			'tool.accessibility-color-blindness.use_case.0',
			'tool.accessibility-color-blindness.use_case.1'
		],
		sampleInput: ''
	},
	{
		id: 'accessibility-font-size',
		category: 'accessibility',
		slug: 'font-size',
		displayName: 'tool.accessibility-font-size.display_name',
		tagline: 'tool.accessibility-font-size.tagline',
		description: 'tool.accessibility-font-size.description',
		primaryKeyword: 'tool.accessibility-font-size.primary_keyword',
		metaTitle: 'tool.accessibility-font-size.meta_title',
		metaDescription: 'tool.accessibility-font-size.meta_description',
		engine: 'accessibility',
		operation: 'tool.accessibility-font-size.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'accessibility', slug: 'contrast' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'tool.accessibility-font-size.faq.0.question',
				answer: 'tool.accessibility-font-size.faq.0.answer'
			}
		],
		useCases: [
			'tool.accessibility-font-size.use_case.0',
			'tool.accessibility-font-size.use_case.1'
		],
		sampleInput: ''
	}
];
