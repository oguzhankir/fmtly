import type { ToolDefinition } from '../types.js';

export const encodeTools: ToolDefinition[] = [
	{
		id: 'encode-base64-encode-decode',
		category: 'encode',
		slug: 'base64',
		displayName: 'tool.encode-base64-encode-decode.display_name',
		tagline: 'tool.encode-base64-encode-decode.tagline',
		description: 'tool.encode-base64-encode-decode.description',
		primaryKeyword: 'tool.encode-base64-encode-decode.primary_keyword',
		metaTitle: 'tool.encode-base64-encode-decode.meta_title',
		metaDescription: 'tool.encode-base64-encode-decode.meta_description',
		engine: 'encode',
		operation: 'tool.encode-base64-encode-decode.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'url' },
			{ category: 'encode', slug: 'jwt' },
			{ category: 'text', slug: 'escape' },
			{ category: 'json', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.encode-base64-encode-decode.faq.0.question',
				answer: 'tool.encode-base64-encode-decode.faq.0.answer'
			},
			{
				question: 'tool.encode-base64-encode-decode.faq.1.question',
				answer: 'tool.encode-base64-encode-decode.faq.1.answer'
			},
			{
				question: 'tool.encode-base64-encode-decode.faq.2.question',
				answer: 'tool.encode-base64-encode-decode.faq.2.answer'
			},
			{
				question: 'tool.encode-base64-encode-decode.faq.3.question',
				answer: 'tool.encode-base64-encode-decode.faq.3.answer'
			}
		],
		useCases: [
			'tool.encode-base64-encode-decode.use_case.0',
			'tool.encode-base64-encode-decode.use_case.1',
			'tool.encode-base64-encode-decode.use_case.2',
			'tool.encode-base64-encode-decode.use_case.3'
		],
		sampleInput: 'Hello fmtly 👋 — Encode me safely!'
	},
	{
		id: 'encode-url-encode-decode',
		category: 'encode',
		slug: 'url',
		displayName: 'tool.encode-url-encode-decode.display_name',
		tagline: 'tool.encode-url-encode-decode.tagline',
		description: 'tool.encode-url-encode-decode.description',
		primaryKeyword: 'tool.encode-url-encode-decode.primary_keyword',
		metaTitle: 'tool.encode-url-encode-decode.meta_title',
		metaDescription: 'tool.encode-url-encode-decode.meta_description',
		engine: 'encode',
		operation: 'tool.encode-url-encode-decode.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'text', slug: 'escape' },
			{ category: 'encode', slug: 'jwt' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'yaml', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'tool.encode-url-encode-decode.faq.0.question',
				answer: 'tool.encode-url-encode-decode.faq.0.answer'
			},
			{
				question: 'tool.encode-url-encode-decode.faq.1.question',
				answer: 'tool.encode-url-encode-decode.faq.1.answer'
			},
			{
				question: 'tool.encode-url-encode-decode.faq.2.question',
				answer: 'tool.encode-url-encode-decode.faq.2.answer'
			},
			{
				question: 'tool.encode-url-encode-decode.faq.3.question',
				answer: 'tool.encode-url-encode-decode.faq.3.answer'
			}
		],
		useCases: [
			'tool.encode-url-encode-decode.use_case.0',
			'tool.encode-url-encode-decode.use_case.1',
			'tool.encode-url-encode-decode.use_case.2',
			'tool.encode-url-encode-decode.use_case.3'
		],
		sampleInput:
			'https://fmtly.dev/search?q=hello world&redirect=%2Fdocs%2Fstart%3Ftab%3Durl+tools#quick start'
	},
	{
		id: 'encode-html-entities-encode-decode',
		category: 'encode',
		slug: 'html-entities',
		displayName: 'tool.encode-html-entities-encode-decode.display_name',
		tagline: 'tool.encode-html-entities-encode-decode.tagline',
		description: 'tool.encode-html-entities-encode-decode.description',
		primaryKeyword: 'tool.encode-html-entities-encode-decode.primary_keyword',
		metaTitle: 'tool.encode-html-entities-encode-decode.meta_title',
		metaDescription: 'tool.encode-html-entities-encode-decode.meta_description',
		engine: 'encode',
		operation: 'tool.encode-html-entities-encode-decode.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'url' },
			{ category: 'encode', slug: 'base64' },
			{ category: 'text', slug: 'escape' },
			{ category: 'text', slug: 'markdown-to-html' }
		],
		faqs: [
			{
				question: 'tool.encode-html-entities-encode-decode.faq.0.question',
				answer: 'tool.encode-html-entities-encode-decode.faq.0.answer'
			},
			{
				question: 'tool.encode-html-entities-encode-decode.faq.1.question',
				answer: 'tool.encode-html-entities-encode-decode.faq.1.answer'
			},
			{
				question: 'tool.encode-html-entities-encode-decode.faq.2.question',
				answer: 'tool.encode-html-entities-encode-decode.faq.2.answer'
			},
			{
				question: 'tool.encode-html-entities-encode-decode.faq.3.question',
				answer: 'tool.encode-html-entities-encode-decode.faq.3.answer'
			}
		],
		useCases: [
			'tool.encode-html-entities-encode-decode.use_case.0',
			'tool.encode-html-entities-encode-decode.use_case.1',
			'tool.encode-html-entities-encode-decode.use_case.2',
			'tool.encode-html-entities-encode-decode.use_case.3'
		],
		sampleInput: '<p title="Tom & Jerry">café "100%" safe: <code>&lt;tag&gt;</code> ©</p>'
	},
	{
		id: 'encode-jwt-decoder',
		category: 'encode',
		slug: 'jwt',
		displayName: 'tool.encode-jwt-decoder.display_name',
		tagline: 'tool.encode-jwt-decoder.tagline',
		description: 'tool.encode-jwt-decoder.description',
		primaryKeyword: 'tool.encode-jwt-decoder.primary_keyword',
		metaTitle: 'tool.encode-jwt-decoder.meta_title',
		metaDescription: 'tool.encode-jwt-decoder.meta_description',
		engine: 'encode',
		operation: 'tool.encode-jwt-decoder.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'url' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'validator' },
			{ category: 'text', slug: 'escape' }
		],
		faqs: [
			{
				question: 'tool.encode-jwt-decoder.faq.0.question',
				answer: 'tool.encode-jwt-decoder.faq.0.answer'
			},
			{
				question: 'tool.encode-jwt-decoder.faq.1.question',
				answer: 'tool.encode-jwt-decoder.faq.1.answer'
			},
			{
				question: 'tool.encode-jwt-decoder.faq.2.question',
				answer: 'tool.encode-jwt-decoder.faq.2.answer'
			},
			{
				question: 'tool.encode-jwt-decoder.faq.3.question',
				answer: 'tool.encode-jwt-decoder.faq.3.answer'
			}
		],
		useCases: [
			'tool.encode-jwt-decoder.use_case.0',
			'tool.encode-jwt-decoder.use_case.1',
			'tool.encode-jwt-decoder.use_case.2',
			'tool.encode-jwt-decoder.use_case.3'
		],
		sampleInput:
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
	}
];
