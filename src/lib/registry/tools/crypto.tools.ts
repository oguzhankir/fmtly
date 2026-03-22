import type { ToolDefinition } from '../types.js';

const cryptoRelated = [
	{ category: 'crypto', slug: 'hash' },
	{ category: 'crypto', slug: 'hmac' },
	{ category: 'crypto', slug: 'random-string' },
	{ category: 'encode', slug: 'hex' }
] as const;

export const cryptoTools: ToolDefinition[] = [
	{
		id: 'hash-generator',
		category: 'crypto',
		slug: 'hash',
		displayName: 'tool.hash-generator.display_name',
		tagline: 'tool.hash-generator.tagline',
		description: 'tool.hash-generator.description',
		primaryKeyword: 'tool.hash-generator.primary_keyword',
		metaTitle: 'tool.hash-generator.meta_title',
		metaDescription: 'tool.hash-generator.meta_description',
		engine: 'crypto',
		operation: 'tool.hash-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [...cryptoRelated],
		faqs: [
			{
				question: 'tool.hash-generator.faq.0.question',
				answer: 'tool.hash-generator.faq.0.answer'
			},
			{
				question: 'tool.hash-generator.faq.1.question',
				answer: 'tool.hash-generator.faq.1.answer'
			},
			{
				question: 'tool.hash-generator.faq.2.question',
				answer: 'tool.hash-generator.faq.2.answer'
			},
			{
				question: 'tool.hash-generator.faq.3.question',
				answer: 'tool.hash-generator.faq.3.answer'
			}
		],
		useCases: [
			'tool.hash-generator.use_case.0',
			'tool.hash-generator.use_case.1',
			'tool.hash-generator.use_case.2',
			'tool.hash-generator.use_case.3'
		],
		sampleInput: 'fmtly'
	},
	{
		id: 'hmac-generator',
		category: 'crypto',
		slug: 'hmac',
		displayName: 'tool.hmac-generator.display_name',
		tagline: 'tool.hmac-generator.tagline',
		description: 'tool.hmac-generator.description',
		primaryKeyword: 'tool.hmac-generator.primary_keyword',
		metaTitle: 'tool.hmac-generator.meta_title',
		metaDescription: 'tool.hmac-generator.meta_description',
		engine: 'crypto',
		operation: 'tool.hmac-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [...cryptoRelated],
		faqs: [
			{
				question: 'tool.hmac-generator.faq.0.question',
				answer: 'tool.hmac-generator.faq.0.answer'
			},
			{
				question: 'tool.hmac-generator.faq.1.question',
				answer: 'tool.hmac-generator.faq.1.answer'
			},
			{
				question: 'tool.hmac-generator.faq.2.question',
				answer: 'tool.hmac-generator.faq.2.answer'
			},
			{
				question: 'tool.hmac-generator.faq.3.question',
				answer: 'tool.hmac-generator.faq.3.answer'
			}
		],
		useCases: [
			'tool.hmac-generator.use_case.0',
			'tool.hmac-generator.use_case.1',
			'tool.hmac-generator.use_case.2',
			'tool.hmac-generator.use_case.3'
		],
		sampleInput: 'message'
	},
	{
		id: 'file-hash-calculator',
		category: 'crypto',
		slug: 'file-hash',
		displayName: 'tool.file-hash-calculator.display_name',
		tagline: 'tool.file-hash-calculator.tagline',
		description: 'tool.file-hash-calculator.description',
		primaryKeyword: 'tool.file-hash-calculator.primary_keyword',
		metaTitle: 'tool.file-hash-calculator.meta_title',
		metaDescription: 'tool.file-hash-calculator.meta_description',
		engine: 'crypto',
		operation: 'tool.file-hash-calculator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [...cryptoRelated],
		faqs: [
			{
				question: 'tool.file-hash-calculator.faq.0.question',
				answer: 'tool.file-hash-calculator.faq.0.answer'
			},
			{
				question: 'tool.file-hash-calculator.faq.1.question',
				answer: 'tool.file-hash-calculator.faq.1.answer'
			},
			{
				question: 'tool.file-hash-calculator.faq.2.question',
				answer: 'tool.file-hash-calculator.faq.2.answer'
			},
			{
				question: 'tool.file-hash-calculator.faq.3.question',
				answer: 'tool.file-hash-calculator.faq.3.answer'
			}
		],
		useCases: [
			'tool.file-hash-calculator.use_case.0',
			'tool.file-hash-calculator.use_case.1',
			'tool.file-hash-calculator.use_case.2',
			'tool.file-hash-calculator.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'password-strength-meter',
		category: 'crypto',
		slug: 'password-strength',
		displayName: 'tool.password-strength-meter.display_name',
		tagline: 'tool.password-strength-meter.tagline',
		description: 'tool.password-strength-meter.description',
		primaryKeyword: 'tool.password-strength-meter.primary_keyword',
		metaTitle: 'tool.password-strength-meter.meta_title',
		metaDescription: 'tool.password-strength-meter.meta_description',
		engine: 'crypto',
		operation: 'tool.password-strength-meter.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [...cryptoRelated],
		faqs: [
			{
				question: 'tool.password-strength-meter.faq.0.question',
				answer: 'tool.password-strength-meter.faq.0.answer'
			},
			{
				question: 'tool.password-strength-meter.faq.1.question',
				answer: 'tool.password-strength-meter.faq.1.answer'
			},
			{
				question: 'tool.password-strength-meter.faq.2.question',
				answer: 'tool.password-strength-meter.faq.2.answer'
			},
			{
				question: 'tool.password-strength-meter.faq.3.question',
				answer: 'tool.password-strength-meter.faq.3.answer'
			}
		],
		useCases: [
			'tool.password-strength-meter.use_case.0',
			'tool.password-strength-meter.use_case.1',
			'tool.password-strength-meter.use_case.2',
			'tool.password-strength-meter.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'random-string-generator',
		category: 'crypto',
		slug: 'random-string',
		displayName: 'tool.random-string-generator.display_name',
		tagline: 'tool.random-string-generator.tagline',
		description: 'tool.random-string-generator.description',
		primaryKeyword: 'tool.random-string-generator.primary_keyword',
		metaTitle: 'tool.random-string-generator.meta_title',
		metaDescription: 'tool.random-string-generator.meta_description',
		engine: 'crypto',
		operation: 'tool.random-string-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [
			{ category: 'crypto', slug: 'hash' },
			{ category: 'encode', slug: 'base64' },
			{ category: 'encode', slug: 'hex' },
			{ category: 'qr', slug: 'generator' }
		],
		faqs: [
			{
				question: 'tool.random-string-generator.faq.0.question',
				answer: 'tool.random-string-generator.faq.0.answer'
			},
			{
				question: 'tool.random-string-generator.faq.1.question',
				answer: 'tool.random-string-generator.faq.1.answer'
			},
			{
				question: 'tool.random-string-generator.faq.2.question',
				answer: 'tool.random-string-generator.faq.2.answer'
			},
			{
				question: 'tool.random-string-generator.faq.3.question',
				answer: 'tool.random-string-generator.faq.3.answer'
			}
		],
		useCases: [
			'tool.random-string-generator.use_case.0',
			'tool.random-string-generator.use_case.1',
			'tool.random-string-generator.use_case.2',
			'tool.random-string-generator.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'uuid-generator',
		category: 'crypto',
		slug: 'uuid',
		displayName: 'tool.uuid-generator.display_name',
		tagline: 'tool.uuid-generator.tagline',
		description: 'tool.uuid-generator.description',
		primaryKeyword: 'tool.uuid-generator.primary_keyword',
		metaTitle: 'tool.uuid-generator.meta_title',
		metaDescription: 'tool.uuid-generator.meta_description',
		engine: 'crypto',
		operation: 'tool.uuid-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [...cryptoRelated],
		faqs: [
			{
				question: 'tool.uuid-generator.faq.0.question',
				answer: 'tool.uuid-generator.faq.0.answer'
			},
			{
				question: 'tool.uuid-generator.faq.1.question',
				answer: 'tool.uuid-generator.faq.1.answer'
			},
			{
				question: 'tool.uuid-generator.faq.2.question',
				answer: 'tool.uuid-generator.faq.2.answer'
			},
			{
				question: 'tool.uuid-generator.faq.3.question',
				answer: 'tool.uuid-generator.faq.3.answer'
			}
		],
		useCases: [
			'tool.uuid-generator.use_case.0',
			'tool.uuid-generator.use_case.1',
			'tool.uuid-generator.use_case.2',
			'tool.uuid-generator.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'keypair-generator',
		category: 'crypto',
		slug: 'keypair',
		displayName: 'tool.keypair-generator.display_name',
		tagline: 'tool.keypair-generator.tagline',
		description: 'tool.keypair-generator.description',
		primaryKeyword: 'tool.keypair-generator.primary_keyword',
		metaTitle: 'tool.keypair-generator.meta_title',
		metaDescription: 'tool.keypair-generator.meta_description',
		engine: 'crypto',
		operation: 'tool.keypair-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [...cryptoRelated],
		faqs: [
			{
				question: 'tool.keypair-generator.faq.0.question',
				answer: 'tool.keypair-generator.faq.0.answer'
			},
			{
				question: 'tool.keypair-generator.faq.1.question',
				answer: 'tool.keypair-generator.faq.1.answer'
			},
			{
				question: 'tool.keypair-generator.faq.2.question',
				answer: 'tool.keypair-generator.faq.2.answer'
			},
			{
				question: 'tool.keypair-generator.faq.3.question',
				answer: 'tool.keypair-generator.faq.3.answer'
			}
		],
		useCases: [
			'tool.keypair-generator.use_case.0',
			'tool.keypair-generator.use_case.1',
			'tool.keypair-generator.use_case.2',
			'tool.keypair-generator.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'certificate-decoder',
		category: 'crypto',
		slug: 'cert-decoder',
		displayName: 'tool.certificate-decoder.display_name',
		tagline: 'tool.certificate-decoder.tagline',
		description: 'tool.certificate-decoder.description',
		primaryKeyword: 'tool.certificate-decoder.primary_keyword',
		metaTitle: 'tool.certificate-decoder.meta_title',
		metaDescription: 'tool.certificate-decoder.meta_description',
		engine: 'crypto',
		operation: 'tool.certificate-decoder.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [...cryptoRelated],
		faqs: [
			{
				question: 'tool.certificate-decoder.faq.0.question',
				answer: 'tool.certificate-decoder.faq.0.answer'
			},
			{
				question: 'tool.certificate-decoder.faq.1.question',
				answer: 'tool.certificate-decoder.faq.1.answer'
			},
			{
				question: 'tool.certificate-decoder.faq.2.question',
				answer: 'tool.certificate-decoder.faq.2.answer'
			},
			{
				question: 'tool.certificate-decoder.faq.3.question',
				answer: 'tool.certificate-decoder.faq.3.answer'
			}
		],
		useCases: [
			'tool.certificate-decoder.use_case.0',
			'tool.certificate-decoder.use_case.1',
			'tool.certificate-decoder.use_case.2',
			'tool.certificate-decoder.use_case.3'
		],
		sampleInput: ''
	},
	{
		id: 'totp-generator',
		category: 'crypto',
		slug: 'totp',
		displayName: 'tool.totp-generator.display_name',
		tagline: 'tool.totp-generator.tagline',
		description: 'tool.totp-generator.description',
		primaryKeyword: 'tool.totp-generator.primary_keyword',
		metaTitle: 'tool.totp-generator.meta_title',
		metaDescription: 'tool.totp-generator.meta_description',
		engine: 'crypto',
		operation: 'tool.totp-generator.operation',
		layoutVariant: 'single-panel',
		inputLanguage: 'txt',
		outputLanguage: 'txt',
		hasTreeView: false,
		relatedTools: [...cryptoRelated],
		faqs: [
			{
				question: 'tool.totp-generator.faq.0.question',
				answer: 'tool.totp-generator.faq.0.answer'
			},
			{
				question: 'tool.totp-generator.faq.1.question',
				answer: 'tool.totp-generator.faq.1.answer'
			},
			{
				question: 'tool.totp-generator.faq.2.question',
				answer: 'tool.totp-generator.faq.2.answer'
			},
			{
				question: 'tool.totp-generator.faq.3.question',
				answer: 'tool.totp-generator.faq.3.answer'
			}
		],
		useCases: [
			'tool.totp-generator.use_case.0',
			'tool.totp-generator.use_case.1',
			'tool.totp-generator.use_case.2',
			'tool.totp-generator.use_case.3'
		],
		sampleInput: ''
	}
];
