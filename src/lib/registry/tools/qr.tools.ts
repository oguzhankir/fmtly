import type { ToolDefinition } from '../types.js';

export const qrTools: ToolDefinition[] = [
	{
		id: 'qr-generator',
		category: 'qr',
		slug: 'generator',
		displayName: 'QR Code Generator',
		tagline: 'Generate QR codes for text, URLs, contacts, WiFi, and email.',
		description:
			'Create customizable QR codes for text, URLs, vCard contacts, WiFi networks, and email addresses. Adjust size, error correction, and colors. Download as PNG.',
		primaryKeyword: 'qr code generator',
		metaTitle: 'QR Code Generator | Customizable | fmtly',
		metaDescription:
			'Generate QR codes for URLs, text, contacts, WiFi, email. Customize size, colors, download PNG — no server.',
		engine: 'qr',
		operation: 'generator',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'qr', slug: 'reader' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'What is error correction?',
				answer:
					'Higher error correction allows the QR code to be scanned even if partially damaged. L=7%, M=15%, Q=25%, H=30% recovery.'
			},
			{
				question: 'Can I customize the colors?',
				answer:
					'Yes — choose dark and light colors. Ensure sufficient contrast for reliable scanning.'
			}
		],
		useCases: [
			'Creating QR codes for business cards',
			'Sharing WiFi credentials via QR code',
			'Linking to a website from printed material'
		],
		sampleInput: 'https://fmtly.dev'
	},
	{
		id: 'qr-reader',
		category: 'qr',
		slug: 'reader',
		displayName: 'QR Code Reader',
		tagline: 'Decode QR codes from images.',
		description:
			'Upload an image containing a QR code and instantly decode its content. Uses jsQR locally — nothing uploaded.',
		primaryKeyword: 'qr code reader',
		metaTitle: 'QR Code Reader | Decode from Image | fmtly',
		metaDescription:
			'Read and decode QR codes from images instantly in your browser — no upload, fully private.',
		engine: 'qr',
		operation: 'reader',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'qr', slug: 'generator' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'What image formats are supported?',
				answer: 'Any format your browser supports: PNG, JPG, WebP, GIF, BMP.'
			}
		],
		useCases: ['Decoding QR codes from screenshots', 'Reading QR code content without a phone'],
		sampleInput: ''
	}
];
