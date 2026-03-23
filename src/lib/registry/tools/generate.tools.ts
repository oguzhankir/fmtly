import type { ToolDefinition } from '../types.js';

const generateRelated = [
	{ category: 'generate', slug: 'fake-data' },
	{ category: 'generate', slug: 'uuid-batch' },
	{ category: 'generate', slug: 'password' },
	{ category: 'generate', slug: 'gitignore' },
	{ category: 'generate', slug: 'readme' }
] as const;

function crossLink(excludeSlug: string): ToolDefinition['relatedTools'] {
	return generateRelated.filter((r) => r.slug !== excludeSlug) as ToolDefinition['relatedTools'];
}

export const generateTools: ToolDefinition[] = [
	{
		id: 'fake-data-generator',
		category: 'generate',
		slug: 'fake-data',
		displayName: 'tool.fake-data-generator.display_name',
		tagline: 'tool.fake-data-generator.tagline',
		description: 'tool.fake-data-generator.description',
		primaryKeyword: 'tool.fake-data-generator.primary_keyword',
		metaTitle: 'tool.fake-data-generator.meta_title',
		metaDescription: 'tool.fake-data-generator.meta_description',
		engine: 'generate',
		operation: 'tool.fake-data-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: crossLink('fake-data'),
		faqs: [
			{
				question: 'tool.fake-data-generator.faq.0.question',
				answer: 'tool.fake-data-generator.faq.0.answer'
			},
			{
				question: 'tool.fake-data-generator.faq.1.question',
				answer: 'tool.fake-data-generator.faq.1.answer'
			},
			{
				question: 'tool.fake-data-generator.faq.2.question',
				answer: 'tool.fake-data-generator.faq.2.answer'
			},
			{
				question: 'tool.fake-data-generator.faq.3.question',
				answer: 'tool.fake-data-generator.faq.3.answer'
			}
		],
		useCases: [
			'tool.fake-data-generator.use_case.0',
			'tool.fake-data-generator.use_case.1',
			'tool.fake-data-generator.use_case.2',
			'tool.fake-data-generator.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'uuid-batch-generator',
		category: 'generate',
		slug: 'uuid-batch',
		displayName: 'tool.uuid-batch-generator.display_name',
		tagline: 'tool.uuid-batch-generator.tagline',
		description: 'tool.uuid-batch-generator.description',
		primaryKeyword: 'tool.uuid-batch-generator.primary_keyword',
		metaTitle: 'tool.uuid-batch-generator.meta_title',
		metaDescription: 'tool.uuid-batch-generator.meta_description',
		engine: 'generate',
		operation: 'tool.uuid-batch-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: crossLink('uuid-batch'),
		faqs: [
			{
				question: 'tool.uuid-batch-generator.faq.0.question',
				answer: 'tool.uuid-batch-generator.faq.0.answer'
			},
			{
				question: 'tool.uuid-batch-generator.faq.1.question',
				answer: 'tool.uuid-batch-generator.faq.1.answer'
			},
			{
				question: 'tool.uuid-batch-generator.faq.2.question',
				answer: 'tool.uuid-batch-generator.faq.2.answer'
			},
			{
				question: 'tool.uuid-batch-generator.faq.3.question',
				answer: 'tool.uuid-batch-generator.faq.3.answer'
			}
		],
		useCases: [
			'tool.uuid-batch-generator.use_case.0',
			'tool.uuid-batch-generator.use_case.1',
			'tool.uuid-batch-generator.use_case.2',
			'tool.uuid-batch-generator.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'generate-password-generator',
		category: 'generate',
		slug: 'password',
		displayName: 'tool.generate-password-generator.display_name',
		tagline: 'tool.generate-password-generator.tagline',
		description: 'tool.generate-password-generator.description',
		primaryKeyword: 'tool.generate-password-generator.primary_keyword',
		metaTitle: 'tool.generate-password-generator.meta_title',
		metaDescription: 'tool.generate-password-generator.meta_description',
		engine: 'generate',
		operation: 'tool.generate-password-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: crossLink('password'),
		faqs: [
			{
				question: 'tool.generate-password-generator.faq.0.question',
				answer: 'tool.generate-password-generator.faq.0.answer'
			},
			{
				question: 'tool.generate-password-generator.faq.1.question',
				answer: 'tool.generate-password-generator.faq.1.answer'
			},
			{
				question: 'tool.generate-password-generator.faq.2.question',
				answer: 'tool.generate-password-generator.faq.2.answer'
			},
			{
				question: 'tool.generate-password-generator.faq.3.question',
				answer: 'tool.generate-password-generator.faq.3.answer'
			}
		],
		useCases: [
			'tool.generate-password-generator.use_case.0',
			'tool.generate-password-generator.use_case.1',
			'tool.generate-password-generator.use_case.2',
			'tool.generate-password-generator.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'gitignore-builder',
		category: 'generate',
		slug: 'gitignore',
		displayName: 'tool.gitignore-builder.display_name',
		tagline: 'tool.gitignore-builder.tagline',
		description: 'tool.gitignore-builder.description',
		primaryKeyword: 'tool.gitignore-builder.primary_keyword',
		metaTitle: 'tool.gitignore-builder.meta_title',
		metaDescription: 'tool.gitignore-builder.meta_description',
		engine: 'generate',
		operation: 'tool.gitignore-builder.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: crossLink('gitignore'),
		faqs: [
			{
				question: 'tool.gitignore-builder.faq.0.question',
				answer: 'tool.gitignore-builder.faq.0.answer'
			},
			{
				question: 'tool.gitignore-builder.faq.1.question',
				answer: 'tool.gitignore-builder.faq.1.answer'
			},
			{
				question: 'tool.gitignore-builder.faq.2.question',
				answer: 'tool.gitignore-builder.faq.2.answer'
			},
			{
				question: 'tool.gitignore-builder.faq.3.question',
				answer: 'tool.gitignore-builder.faq.3.answer'
			}
		],
		useCases: [
			'tool.gitignore-builder.use_case.0',
			'tool.gitignore-builder.use_case.1',
			'tool.gitignore-builder.use_case.2',
			'tool.gitignore-builder.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'readme-template-generator',
		category: 'generate',
		slug: 'readme',
		displayName: 'tool.readme-template-generator.display_name',
		tagline: 'tool.readme-template-generator.tagline',
		description: 'tool.readme-template-generator.description',
		primaryKeyword: 'tool.readme-template-generator.primary_keyword',
		metaTitle: 'tool.readme-template-generator.meta_title',
		metaDescription: 'tool.readme-template-generator.meta_description',
		engine: 'generate',
		operation: 'tool.readme-template-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'md',
		hasTreeView: false,
		relatedTools: crossLink('readme'),
		faqs: [
			{
				question: 'tool.readme-template-generator.faq.0.question',
				answer: 'tool.readme-template-generator.faq.0.answer'
			},
			{
				question: 'tool.readme-template-generator.faq.1.question',
				answer: 'tool.readme-template-generator.faq.1.answer'
			},
			{
				question: 'tool.readme-template-generator.faq.2.question',
				answer: 'tool.readme-template-generator.faq.2.answer'
			},
			{
				question: 'tool.readme-template-generator.faq.3.question',
				answer: 'tool.readme-template-generator.faq.3.answer'
			}
		],
		useCases: [
			'tool.readme-template-generator.use_case.0',
			'tool.readme-template-generator.use_case.1',
			'tool.readme-template-generator.use_case.2',
			'tool.readme-template-generator.use_case.3'
		],
		sampleInput: ''
	}
];
