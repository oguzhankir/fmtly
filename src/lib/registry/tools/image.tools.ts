import type { ToolDefinition } from '../types.js';

const imageRelated = [
	{ category: 'image', slug: 'resize' },
	{ category: 'image', slug: 'convert' },
	{ category: 'image', slug: 'svg-optimizer' }
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
	},
	{
		id: 'image-svg-optimizer',
		category: 'image',
		slug: 'svg-optimizer',
		displayName: 'tool.image-svg-optimizer.display_name',
		tagline: 'tool.image-svg-optimizer.tagline',
		description: 'tool.image-svg-optimizer.description',
		primaryKeyword: 'tool.image-svg-optimizer.primary_keyword',
		metaTitle: 'tool.image-svg-optimizer.meta_title',
		metaDescription: 'tool.image-svg-optimizer.meta_description',
		engine: 'image',
		operation: 'tool.image-svg-optimizer.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'svg',
		outputLanguage: 'svg',
		hasTreeView: false,
		relatedTools: [...imageRelated],
		faqs: [
			{
				question: 'tool.image-svg-optimizer.faq.0.question',
				answer: 'tool.image-svg-optimizer.faq.0.answer'
			},
			{
				question: 'tool.image-svg-optimizer.faq.1.question',
				answer: 'tool.image-svg-optimizer.faq.1.answer'
			},
			{
				question: 'tool.image-svg-optimizer.faq.2.question',
				answer: 'tool.image-svg-optimizer.faq.2.answer'
			},
			{
				question: 'tool.image-svg-optimizer.faq.3.question',
				answer: 'tool.image-svg-optimizer.faq.3.answer'
			}
		],
		useCases: [
			'tool.image-svg-optimizer.use_case.0',
			'tool.image-svg-optimizer.use_case.1',
			'tool.image-svg-optimizer.use_case.2',
			'tool.image-svg-optimizer.use_case.3'
		],
		sampleInput: `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  <metadata>fmtly SVG optimizer sample</metadata>
  <desc>Sample badge icon</desc>
  <!-- Decorative comment -->
  <g id="badge">
    <path d="M64 8 L78 46 H118 L86 70 L98 110 L64 86 L30 110 L42 70 L10 46 H50 Z" fill="#2563eb" />
    <circle cx="64" cy="64" r="14" fill="#ffffff" />
  </g>
</svg>`
	}
];
