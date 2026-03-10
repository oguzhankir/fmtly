import type { ToolDefinition } from '../types.js';

export const diffTools: ToolDefinition[] = [
	{
		id: 'diff-json',
		category: 'diff',
		slug: 'json',
		displayName: 'JSON Diff',
		tagline: 'Compare two JSON documents and find semantic differences',
		description:
			'Semantic JSON comparison that understands structure, not just text. Detects added, removed, and modified values at every nesting level. Optionally ignore array order for set-like comparison. Export differences as RFC 6902 JSON Patch.',
		primaryKeyword: 'json diff',
		metaTitle: 'JSON Diff — Compare JSON Online — fmtly.dev',
		metaDescription:
			'Compare two JSON documents semantically. Find added, removed, and modified values at every level. Export as JSON Patch. Runs entirely in your browser.',
		engine: 'diff',
		operation: 'diff',
		layoutVariant: 'triple',
		inputLanguage: 'json',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'formatter' },
			{ category: 'json', slug: 'validator' },
			{ category: 'json', slug: 'viewer' }
		],
		faqs: [
			{
				question: 'Is this a line-based or semantic diff?',
				answer:
					'This is a semantic diff. It parses both JSON documents and compares their structure, not their text representation. Two documents with different key order but identical content are reported as identical.'
			},
			{
				question: 'What is JSON Patch format?',
				answer:
					'JSON Patch (RFC 6902) is a standard format for describing changes to a JSON document. Each operation has an "op" (add, remove, replace), a "path" (JSON Pointer), and optionally a "value".'
			},
			{
				question: 'Can I ignore array order?',
				answer:
					'Yes. Enable the "Ignore array order" toggle to treat arrays as unordered sets. Two arrays with the same elements in different order will be reported as identical.'
			}
		],
		useCases: [
			'Compare API responses before and after a code change',
			'Find differences between two JSON configuration files',
			'Verify that a migration preserved all data correctly',
			'Review changes in JSON-based infrastructure definitions',
			'Generate JSON Patch documents for programmatic updates'
		],
		sampleInput: `{
  "name": "fmtly",
  "version": "1.0.0",
  "description": "The modern developer toolkit"
}`
	}
];
