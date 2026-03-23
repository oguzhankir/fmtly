import type { ToolDefinition } from '../types.js';

const pdfRelated = [
	{ category: 'pdf', slug: 'viewer' },
	{ category: 'pdf', slug: 'to-text' },
	{ category: 'pdf', slug: 'merge' },
	{ category: 'pdf', slug: 'split' },
	{ category: 'pdf', slug: 'extract-pages' },
	{ category: 'pdf', slug: 'metadata' }
] as const;

function crossLink(excludeSlug: string): ToolDefinition['relatedTools'] {
	return pdfRelated.filter((r) => r.slug !== excludeSlug) as ToolDefinition['relatedTools'];
}

export const pdfTools: ToolDefinition[] = [
	{
		id: 'pdf-viewer',
		category: 'pdf',
		slug: 'viewer',
		displayName: 'tool.pdf-viewer.display_name',
		tagline: 'tool.pdf-viewer.tagline',
		description: 'tool.pdf-viewer.description',
		primaryKeyword: 'tool.pdf-viewer.primary_keyword',
		metaTitle: 'tool.pdf-viewer.meta_title',
		metaDescription: 'tool.pdf-viewer.meta_description',
		engine: 'pdf',
		operation: 'tool.pdf-viewer.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'pdf',
		outputLanguage: 'pdf',
		hasTreeView: false,
		relatedTools: crossLink('viewer'),
		faqs: [
			{ question: 'tool.pdf-viewer.faq.0.question', answer: 'tool.pdf-viewer.faq.0.answer' },
			{ question: 'tool.pdf-viewer.faq.1.question', answer: 'tool.pdf-viewer.faq.1.answer' },
			{ question: 'tool.pdf-viewer.faq.2.question', answer: 'tool.pdf-viewer.faq.2.answer' },
			{ question: 'tool.pdf-viewer.faq.3.question', answer: 'tool.pdf-viewer.faq.3.answer' }
		],
		useCases: [
			'tool.pdf-viewer.use_case.0',
			'tool.pdf-viewer.use_case.1',
			'tool.pdf-viewer.use_case.2',
			'tool.pdf-viewer.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'pdf-to-text',
		category: 'pdf',
		slug: 'to-text',
		displayName: 'tool.pdf-to-text.display_name',
		tagline: 'tool.pdf-to-text.tagline',
		description: 'tool.pdf-to-text.description',
		primaryKeyword: 'tool.pdf-to-text.primary_keyword',
		metaTitle: 'tool.pdf-to-text.meta_title',
		metaDescription: 'tool.pdf-to-text.meta_description',
		engine: 'pdf',
		operation: 'tool.pdf-to-text.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'pdf',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: crossLink('to-text'),
		faqs: [
			{ question: 'tool.pdf-to-text.faq.0.question', answer: 'tool.pdf-to-text.faq.0.answer' },
			{ question: 'tool.pdf-to-text.faq.1.question', answer: 'tool.pdf-to-text.faq.1.answer' },
			{ question: 'tool.pdf-to-text.faq.2.question', answer: 'tool.pdf-to-text.faq.2.answer' },
			{ question: 'tool.pdf-to-text.faq.3.question', answer: 'tool.pdf-to-text.faq.3.answer' }
		],
		useCases: [
			'tool.pdf-to-text.use_case.0',
			'tool.pdf-to-text.use_case.1',
			'tool.pdf-to-text.use_case.2',
			'tool.pdf-to-text.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'pdf-merge',
		category: 'pdf',
		slug: 'merge',
		displayName: 'tool.pdf-merge.display_name',
		tagline: 'tool.pdf-merge.tagline',
		description: 'tool.pdf-merge.description',
		primaryKeyword: 'tool.pdf-merge.primary_keyword',
		metaTitle: 'tool.pdf-merge.meta_title',
		metaDescription: 'tool.pdf-merge.meta_description',
		engine: 'pdf',
		operation: 'tool.pdf-merge.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'pdf',
		outputLanguage: 'pdf',
		hasTreeView: false,
		relatedTools: crossLink('merge'),
		faqs: [
			{ question: 'tool.pdf-merge.faq.0.question', answer: 'tool.pdf-merge.faq.0.answer' },
			{ question: 'tool.pdf-merge.faq.1.question', answer: 'tool.pdf-merge.faq.1.answer' },
			{ question: 'tool.pdf-merge.faq.2.question', answer: 'tool.pdf-merge.faq.2.answer' },
			{ question: 'tool.pdf-merge.faq.3.question', answer: 'tool.pdf-merge.faq.3.answer' }
		],
		useCases: [
			'tool.pdf-merge.use_case.0',
			'tool.pdf-merge.use_case.1',
			'tool.pdf-merge.use_case.2',
			'tool.pdf-merge.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'pdf-split',
		category: 'pdf',
		slug: 'split',
		displayName: 'tool.pdf-split.display_name',
		tagline: 'tool.pdf-split.tagline',
		description: 'tool.pdf-split.description',
		primaryKeyword: 'tool.pdf-split.primary_keyword',
		metaTitle: 'tool.pdf-split.meta_title',
		metaDescription: 'tool.pdf-split.meta_description',
		engine: 'pdf',
		operation: 'tool.pdf-split.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'pdf',
		outputLanguage: 'pdf',
		hasTreeView: false,
		relatedTools: crossLink('split'),
		faqs: [
			{ question: 'tool.pdf-split.faq.0.question', answer: 'tool.pdf-split.faq.0.answer' },
			{ question: 'tool.pdf-split.faq.1.question', answer: 'tool.pdf-split.faq.1.answer' },
			{ question: 'tool.pdf-split.faq.2.question', answer: 'tool.pdf-split.faq.2.answer' },
			{ question: 'tool.pdf-split.faq.3.question', answer: 'tool.pdf-split.faq.3.answer' }
		],
		useCases: [
			'tool.pdf-split.use_case.0',
			'tool.pdf-split.use_case.1',
			'tool.pdf-split.use_case.2',
			'tool.pdf-split.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'pdf-page-extractor',
		category: 'pdf',
		slug: 'extract-pages',
		displayName: 'tool.pdf-page-extractor.display_name',
		tagline: 'tool.pdf-page-extractor.tagline',
		description: 'tool.pdf-page-extractor.description',
		primaryKeyword: 'tool.pdf-page-extractor.primary_keyword',
		metaTitle: 'tool.pdf-page-extractor.meta_title',
		metaDescription: 'tool.pdf-page-extractor.meta_description',
		engine: 'pdf',
		operation: 'tool.pdf-page-extractor.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'pdf',
		outputLanguage: 'pdf',
		hasTreeView: false,
		relatedTools: crossLink('extract-pages'),
		faqs: [
			{
				question: 'tool.pdf-page-extractor.faq.0.question',
				answer: 'tool.pdf-page-extractor.faq.0.answer'
			},
			{
				question: 'tool.pdf-page-extractor.faq.1.question',
				answer: 'tool.pdf-page-extractor.faq.1.answer'
			},
			{
				question: 'tool.pdf-page-extractor.faq.2.question',
				answer: 'tool.pdf-page-extractor.faq.2.answer'
			},
			{
				question: 'tool.pdf-page-extractor.faq.3.question',
				answer: 'tool.pdf-page-extractor.faq.3.answer'
			}
		],
		useCases: [
			'tool.pdf-page-extractor.use_case.0',
			'tool.pdf-page-extractor.use_case.1',
			'tool.pdf-page-extractor.use_case.2',
			'tool.pdf-page-extractor.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'pdf-metadata-viewer',
		category: 'pdf',
		slug: 'metadata',
		displayName: 'tool.pdf-metadata-viewer.display_name',
		tagline: 'tool.pdf-metadata-viewer.tagline',
		description: 'tool.pdf-metadata-viewer.description',
		primaryKeyword: 'tool.pdf-metadata-viewer.primary_keyword',
		metaTitle: 'tool.pdf-metadata-viewer.meta_title',
		metaDescription: 'tool.pdf-metadata-viewer.meta_description',
		engine: 'pdf',
		operation: 'tool.pdf-metadata-viewer.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'pdf',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: crossLink('metadata'),
		faqs: [
			{
				question: 'tool.pdf-metadata-viewer.faq.0.question',
				answer: 'tool.pdf-metadata-viewer.faq.0.answer'
			},
			{
				question: 'tool.pdf-metadata-viewer.faq.1.question',
				answer: 'tool.pdf-metadata-viewer.faq.1.answer'
			},
			{
				question: 'tool.pdf-metadata-viewer.faq.2.question',
				answer: 'tool.pdf-metadata-viewer.faq.2.answer'
			},
			{
				question: 'tool.pdf-metadata-viewer.faq.3.question',
				answer: 'tool.pdf-metadata-viewer.faq.3.answer'
			}
		],
		useCases: [
			'tool.pdf-metadata-viewer.use_case.0',
			'tool.pdf-metadata-viewer.use_case.1',
			'tool.pdf-metadata-viewer.use_case.2',
			'tool.pdf-metadata-viewer.use_case.3'
		],
		sampleInput: ''
	}
];
