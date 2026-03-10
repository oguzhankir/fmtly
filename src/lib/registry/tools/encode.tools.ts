import type { ToolDefinition } from '../types.js';

export const encodeTools: ToolDefinition[] = [
	{
		id: 'encode-base64',
		category: 'encode',
		slug: 'base64',
		displayName: 'Base64 Encoder / Decoder',
		tagline: 'Encode and decode Base64 strings instantly',
		description:
			'Encode text to Base64 or decode Base64 back to text. Supports full Unicode including emoji and multi-byte characters. Auto-detects Base64 input for one-click decoding.',
		primaryKeyword: 'base64 encoder decoder',
		metaTitle: 'Base64 Encoder / Decoder — fmtly.dev',
		metaDescription:
			'Encode and decode Base64 strings instantly in your browser. Full Unicode support including emoji and multi-byte characters. No data leaves your device.',
		engine: 'encoder',
		operation: 'base64',
		layoutVariant: 'split',
		inputLanguage: 'text',
		outputLanguage: 'text',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'url' },
			{ category: 'escape', slug: 'html' },
			{ category: 'escape', slug: 'json' }
		],
		faqs: [
			{
				question: 'What is Base64 encoding?',
				answer:
					'Base64 is a binary-to-text encoding scheme that represents binary data as an ASCII string. It is commonly used to embed binary data in text-based formats like JSON, HTML, and email.'
			},
			{
				question: 'Does this support Unicode?',
				answer:
					'Yes. This tool uses TextEncoder/TextDecoder for full UTF-8 support, correctly handling multi-byte characters, emoji, and all Unicode code points.'
			},
			{
				question: 'Is my data sent to a server?',
				answer:
					'No. All encoding and decoding happens entirely in your browser using native APIs. Your data never leaves your device.'
			}
		],
		useCases: [
			'Encode API keys or tokens for HTTP headers',
			'Decode Base64-encoded JWT payloads for inspection',
			'Embed small images as Base64 data URIs in HTML or CSS',
			'Encode binary data for inclusion in JSON payloads',
			'Decode Base64 strings from email headers or MIME attachments'
		],
		sampleInput: 'Hello, World!'
	},
	{
		id: 'encode-url',
		category: 'encode',
		slug: 'url',
		displayName: 'URL Encoder / Decoder',
		tagline: 'Encode and decode URL components safely',
		description:
			'Encode special characters in URLs using percent-encoding, or decode percent-encoded URLs back to readable text. Handles all reserved and unsafe characters per RFC 3986.',
		primaryKeyword: 'url encoder decoder',
		metaTitle: 'URL Encoder / Decoder — fmtly.dev',
		metaDescription:
			'Encode and decode URL components instantly in your browser. Handles all reserved and unsafe characters per RFC 3986. No data leaves your device.',
		engine: 'encoder',
		operation: 'url',
		layoutVariant: 'split',
		inputLanguage: 'text',
		outputLanguage: 'text',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'base64' },
			{ category: 'escape', slug: 'html' },
			{ category: 'escape', slug: 'javascript' }
		],
		faqs: [
			{
				question: 'What is URL encoding?',
				answer:
					'URL encoding (percent-encoding) replaces unsafe characters with a percent sign followed by two hex digits. For example, a space becomes %20 and an ampersand becomes %26.'
			},
			{
				question: 'What is the difference between encodeURI and encodeURIComponent?',
				answer:
					'encodeURI encodes a full URI, preserving characters like : / ? # that have meaning in URLs. encodeURIComponent encodes everything except unreserved characters, suitable for encoding query parameter values.'
			}
		],
		useCases: [
			'Encode query parameters before appending to URLs',
			'Decode percent-encoded URLs for readability',
			'Prepare strings for use in URL path segments',
			'Encode special characters in form data submissions',
			'Debug URL encoding issues in web applications'
		],
		sampleInput: 'https://example.com/path?name=John Doe&city=New York'
	},
	{
		id: 'encode-html-entities',
		category: 'encode',
		slug: 'html-entities',
		displayName: 'HTML Entities Encoder / Decoder',
		tagline: 'Convert characters to corresponding HTML entities.',
		description: 'Securely convert characters to HTML entities like &amp; and &lt; preventing XSS or document flow issues. Supports named, numeric, and hex mappings.',
		primaryKeyword: 'html entities encoder',
		metaTitle: 'HTML Entities Converter | Named, Numeric, Hex | fmtly',
		metaDescription: 'Encode or decode HTML entities directly from text strings to cleanly support markup inputs without risking arbitrary code execution.',
		engine: 'encoder',
		operation: 'html-entities',
		layoutVariant: 'bidirectional',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'unicode' },
			{ category: 'escape', slug: 'html' }
		],
		faqs: [
			{
				question: 'What is the difference between Named and Hex HTML entities?',
				answer: 'Named entities use recognizable English phrases (like &amp;amp; for ampersand), while Hex entities reference the raw unicode hex points (like &amp;#x26;).'
			}
		],
		useCases: [
			'Safely displaying code blocks on blogs without raw rendering',
			'Encoding special symbols securely without UTF-8 reliance'
		],
		sampleInput: '<script>alert("text")</script>'
	},
	{
		id: 'encode-unicode',
		category: 'encode',
		slug: 'unicode',
		displayName: 'Unicode Analyzer & Converter',
		tagline: 'Detailed Unicode component breakdown.',
		description: 'Instantly identify internal characters in given strings by decoding them to Unicode Hex strings, Javascript Escapes, CSS Escapes, and raw UTF-8 Bytes.',
		primaryKeyword: 'unicode analyzer',
		metaTitle: 'Unicode Analyzer | Hex, CSS, JS, UTF-8 Bytes | fmtly',
		metaDescription: 'Inspect text explicitly capturing Code points alongside their CSS, Javascript, and UTF-8 Byte conversions safely.',
		engine: 'encoder',
		operation: 'unicode',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'encode', slug: 'html-entities' }
		],
		faqs: [
			{
				question: 'Can this inspect Emoji mappings?',
				answer: 'Yes, passing an emoji will instantly deconstruct it rendering its equivalent Hex and utf-8 bytes securely.'
			}
		],
		useCases: [
			'Investigating zero-width hidden characters polluting datasets',
			'Extracting raw CSS string codes for pseudo-element icon injection'
		],
		sampleInput: 'Hello 🌎'
	}
];
