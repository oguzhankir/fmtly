import type { ToolDefinition } from '../types.js';

export const imageTools: ToolDefinition[] = [
	{
		id: 'image-to-base64',
		category: 'image',
		slug: 'to-base64',
		displayName: 'Image to Base64',
		tagline: 'Convert any image to a Base64 data URL.',
		description:
			'Convert PNG, JPG, SVG, WebP, or GIF images to Base64 data URLs. See a live preview, copy the data URL, and view format, dimensions, and size information — all locally.',
		primaryKeyword: 'image to base64',
		metaTitle: 'Image to Base64 Converter | fmtly',
		metaDescription:
			'Convert images to Base64 data URLs instantly in your browser. Supports PNG, JPG, SVG, WebP, GIF — no upload required.',
		engine: 'image',
		operation: 'to-base64',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'image', slug: 'from-base64' },
			{ category: 'image', slug: 'convert' }
		],
		faqs: [
			{
				question: 'Is there a file size limit?',
				answer:
					'No hard limit, but large images (10MB+) may be slow due to Base64 encoding overhead.'
			}
		],
		useCases: [
			'Embedding images directly in CSS or HTML',
			'Creating data URIs for email templates'
		],
		sampleInput: ''
	},
	{
		id: 'image-from-base64',
		category: 'image',
		slug: 'from-base64',
		displayName: 'Base64 to Image',
		tagline: 'Convert a Base64 data URL back to a downloadable image.',
		description:
			'Paste a Base64 data URL and instantly see the rendered image. Download in its original format. Shows detected format and dimensions.',
		primaryKeyword: 'base64 to image',
		metaTitle: 'Base64 to Image Converter | fmtly',
		metaDescription:
			'Convert Base64 data URLs to downloadable images. Detects format, shows preview — no server required.',
		engine: 'image',
		operation: 'from-base64',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'image', slug: 'to-base64' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'What formats are supported?',
				answer: 'Any format your browser can render: PNG, JPG, WebP, GIF, SVG, BMP.'
			}
		],
		useCases: [
			'Decoding embedded images from CSS/HTML',
			'Previewing base64 images from API responses'
		],
		sampleInput: ''
	},
	{
		id: 'image-resize',
		category: 'image',
		slug: 'resize',
		displayName: 'Image Resizer',
		tagline: 'Resize images by pixels with aspect ratio lock.',
		description:
			'Resize any image by specifying width and height in pixels. Toggle aspect ratio lock, choose output format (PNG/JPG/WebP), and adjust quality — all in your browser.',
		primaryKeyword: 'image resizer online',
		metaTitle: 'Image Resizer | No Upload | fmtly',
		metaDescription:
			'Resize images locally with pixel-precise controls. Lock aspect ratio, choose format, adjust quality — no upload.',
		engine: 'image',
		operation: 'resize',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'image', slug: 'compress' },
			{ category: 'image', slug: 'convert' }
		],
		faqs: [
			{
				question: 'Does resizing reduce file size?',
				answer:
					'Usually yes — smaller dimensions mean fewer pixels. Combine with quality adjustment for maximum reduction.'
			}
		],
		useCases: [
			'Resizing images for social media dimensions',
			'Creating thumbnails from large photos'
		],
		sampleInput: ''
	},
	{
		id: 'image-convert',
		category: 'image',
		slug: 'convert',
		displayName: 'Image Converter',
		tagline: 'Convert between PNG, JPG, and WebP formats.',
		description:
			'Convert images between PNG, JPG, and WebP formats using the Canvas API. Adjust quality for lossy formats. Preview and download the converted file.',
		primaryKeyword: 'image converter online',
		metaTitle: 'Image Format Converter | PNG JPG WebP | fmtly',
		metaDescription:
			'Convert images between PNG, JPG, and WebP locally. Adjust quality, preview, download — no server upload.',
		engine: 'image',
		operation: 'convert',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'image', slug: 'compress' },
			{ category: 'image', slug: 'resize' }
		],
		faqs: [
			{
				question: 'Why is WebP recommended?',
				answer:
					'WebP typically provides 25-35% smaller files than JPEG at equivalent quality, with transparency support.'
			}
		],
		useCases: [
			'Converting PNG screenshots to WebP for web performance',
			'Converting WebP images to PNG for compatibility'
		],
		sampleInput: ''
	},
	{
		id: 'image-compress',
		category: 'image',
		slug: 'compress',
		displayName: 'Image Compressor',
		tagline: 'Reduce image file size with configurable quality.',
		description:
			'Compress JPEG, PNG, and WebP images with a quality slider. See before/after preview and savings percentage. Uses browser-image-compression — fully local.',
		primaryKeyword: 'image compressor online',
		metaTitle: 'Image Compressor | Reduce File Size | fmtly',
		metaDescription:
			'Compress images with adjustable quality. See savings percentage, side-by-side preview — no upload, fully private.',
		engine: 'image',
		operation: 'compress',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'image', slug: 'resize' },
			{ category: 'image', slug: 'convert' }
		],
		faqs: [
			{
				question: 'How much compression can I expect?',
				answer:
					'Typically 50-80% file size reduction for photos at quality 70-80%. Results vary by image content.'
			}
		],
		useCases: [
			'Optimizing images for web performance',
			'Reducing image size for email attachments'
		],
		sampleInput: ''
	},
	{
		id: 'image-svg-optimizer',
		category: 'image',
		slug: 'svg-optimizer',
		displayName: 'SVG Optimizer',
		tagline: 'Optimize SVG files with SVGO — remove metadata, minify.',
		description:
			'Paste or upload SVG code and get an optimized version with SVGO. Removes metadata, comments, unused definitions, and optimizes transforms. See live SVG preview and savings percentage.',
		primaryKeyword: 'svg optimizer online',
		metaTitle: 'SVG Optimizer | SVGO | fmtly',
		metaDescription:
			'Optimize SVG files with SVGO. Remove metadata, minify paths, see savings — all locally, no upload.',
		engine: 'image',
		operation: 'svg-optimizer',
		layoutVariant: 'single-panel',
		inputLanguage: 'xml',
		outputLanguage: 'xml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'image', slug: 'to-base64' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'Is SVGO safe for all SVGs?',
				answer:
					'SVGO uses safe defaults. However, complex SVGs with animations or scripts may need custom plugin configuration.'
			}
		],
		useCases: ['Optimizing SVG icons before bundling', 'Reducing SVG file size for web use'],
		sampleInput:
			'<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">\n  <!-- A simple circle -->\n  <circle cx="50" cy="50" r="40" fill="#d97706" stroke="#000" stroke-width="2"/>\n  <text x="50" y="55" text-anchor="middle" fill="white" font-size="14">Hello</text>\n</svg>'
	}
];
