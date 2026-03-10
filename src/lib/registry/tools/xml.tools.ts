import type { ToolDefinition } from '../types.js';

export const xmlTools: ToolDefinition[] = [
	{
		id: 'xml-formatter',
		category: 'xml',
		slug: 'formatter',
		displayName: 'XML Formatter',
		tagline: 'Format and beautify XML with configurable indentation',
		description:
			'Pretty-print XML with configurable indentation — 2 spaces, 4 spaces, or tabs. Preserves attributes and handles self-closing tags correctly.',
		primaryKeyword: 'xml formatter',
		metaTitle: 'XML Formatter & Beautifier — fmtly.dev',
		metaDescription:
			'Format and beautify XML instantly in your browser. Configurable indentation with 2-space, 4-space, or tab options. No data leaves your device.',
		engine: 'xml',
		operation: 'format',
		layoutVariant: 'split',
		inputLanguage: 'xml',
		outputLanguage: 'xml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'xml', slug: 'validator' },
			{ category: 'xml', slug: 'to-json' },
			{ category: 'json', slug: 'to-xml' }
		],
		faqs: [
			{
				question: 'Does this preserve XML attributes?',
				answer:
					'Yes. All attributes are preserved during formatting, including namespace declarations and attribute order.'
			},
			{
				question: 'Is my data sent to a server?',
				answer:
					'No. All processing happens entirely in your browser. Your XML never leaves your device.'
			}
		],
		useCases: [
			'Beautify minified SOAP responses for debugging',
			'Format XML configuration files before committing',
			'Pretty-print SVG files for readability',
			'Clean up XML exports from databases'
		],
		sampleInput: `<?xml version="1.0" encoding="UTF-8"?><catalog><book id="1"><title>The Great Gatsby</title><author>F. Scott Fitzgerald</author><year>1925</year><price>10.99</price></book><book id="2"><title>To Kill a Mockingbird</title><author>Harper Lee</author><year>1960</year><price>12.99</price></book></catalog>`
	},
	{
		id: 'xml-validator',
		category: 'xml',
		slug: 'validator',
		displayName: 'XML Validator',
		tagline: 'Validate XML syntax with precise error location',
		description:
			'Validates XML well-formedness and reports errors with exact line and column numbers. Detects unclosed tags, mismatched elements, invalid characters, and attribute errors.',
		primaryKeyword: 'xml validator',
		metaTitle: 'XML Validator — Well-Formedness Checker — fmtly.dev',
		metaDescription:
			'Validate XML well-formedness instantly. Get precise error locations with line and column numbers and clear explanations. Runs entirely in your browser.',
		engine: 'xml',
		operation: 'validate',
		layoutVariant: 'single',
		inputLanguage: 'xml',
		outputLanguage: 'xml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'xml', slug: 'formatter' },
			{ category: 'xml', slug: 'to-json' },
			{ category: 'json', slug: 'to-xml' }
		],
		faqs: [
			{
				question: 'What XML errors does this tool detect?',
				answer:
					'It detects all well-formedness errors including unclosed tags, mismatched element names, invalid characters, duplicate attributes, and missing root elements.'
			},
			{
				question: 'Does this validate against an XML Schema?',
				answer:
					'This tool validates well-formedness only (syntax). It does not validate against XSD or DTD schemas.'
			}
		],
		useCases: [
			'Check if XML is well-formed before processing',
			'Debug XML parsing errors in API integrations',
			'Validate XML configuration files',
			'Verify SVG markup is syntactically correct'
		],
		sampleInput: `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="1">
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
  </book>
</catalog>`
	},
	{
		id: 'xml-to-json',
		category: 'xml',
		slug: 'to-json',
		displayName: 'XML to JSON',
		tagline: 'Convert XML to formatted JSON',
		description:
			'Convert XML documents to JSON with attribute preservation. Handles nested elements, arrays, text content, and CDATA sections.',
		primaryKeyword: 'xml to json',
		metaTitle: 'XML to JSON Converter — fmtly.dev',
		metaDescription:
			'Convert XML to JSON instantly in your browser. Preserves attributes with @_ prefix, handles nested elements and CDATA sections. No data leaves your device.',
		engine: 'xml',
		operation: 'to-json',
		layoutVariant: 'split',
		inputLanguage: 'xml',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'json', slug: 'to-xml' },
			{ category: 'xml', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'How are XML attributes handled?',
				answer:
					'Attributes are preserved in the JSON output with an "@_" prefix. For example, <book id="1"> becomes {"@_id": "1"}.'
			},
			{
				question: 'Is the conversion lossless?',
				answer:
					'The conversion preserves all data but may change the representation. XML-specific features like processing instructions and comments are handled as special properties.'
			}
		],
		useCases: [
			'Convert SOAP API responses to JSON for web apps',
			'Transform XML feeds (RSS, Atom) to JSON',
			'Convert legacy XML data for modern JavaScript applications',
			'Parse XML configuration into JSON for easier manipulation'
		],
		sampleInput: `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="1">
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
    <price>10.99</price>
  </book>
  <book id="2">
    <title>To Kill a Mockingbird</title>
    <author>Harper Lee</author>
    <year>1960</year>
    <price>12.99</price>
  </book>
</catalog>`
	},
	{
		id: 'json-to-xml',
		category: 'json',
		slug: 'to-xml',
		displayName: 'JSON to XML',
		tagline: 'Convert JSON to formatted XML',
		description:
			'Convert JSON objects and arrays to well-formed XML with configurable root element name. Produces indented, readable XML output.',
		primaryKeyword: 'json to xml',
		metaTitle: 'JSON to XML Converter — fmtly.dev',
		metaDescription:
			'Convert JSON to XML instantly in your browser. Configurable root element name, formatted indented output with XML declaration. No data leaves your device.',
		engine: 'json',
		operation: 'to-xml',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'xml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'xml', slug: 'to-json' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'xml', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'What root element name is used?',
				answer:
					'By default, the root element is named "root". You can customize this in the tool settings.'
			},
			{
				question: 'How are JSON arrays converted?',
				answer:
					'Array items are wrapped in individual element tags using the array key name. For example, {"items": [1, 2]} becomes <items>1</items><items>2</items>.'
			}
		],
		useCases: [
			'Generate XML payloads for SOAP APIs from JSON data',
			'Convert JSON configuration to XML format',
			'Create XML feeds from JSON data sources',
			'Prepare data for XML-only systems and tools'
		],
		sampleInput: `{
  "catalog": {
    "book": [
      {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "year": 1925
      },
      {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "year": 1960
      }
    ]
  }
}`
	},
	{
		id: 'xml-to-yaml',
		category: 'xml',
		slug: 'to-yaml',
		displayName: 'XML to YAML',
		tagline: 'Convert XML to YAML format',
		description: 'Convert XML configuration to YAML format clearly.',
		primaryKeyword: 'xml to yaml',
		metaTitle: 'XML to YAML Converter',
		metaDescription: 'Convert XML to YAML instantly.',
		engine: 'xml',
		operation: 'toYaml',
		layoutVariant: 'split',
		inputLanguage: 'xml',
		outputLanguage: 'yaml',
		hasTreeView: false,
		relatedTools: [],
		faqs: [],
		useCases: [],
		sampleInput: '<root><item>Hello</item></root>'
	},
	{
		id: 'xml-to-csv',
		category: 'xml',
		slug: 'to-csv',
		displayName: 'XML to CSV',
		tagline: 'Convert XML data to CSV format',
		description: 'Convert flattened XML arrays to CSV format easily.',
		primaryKeyword: 'xml to csv',
		metaTitle: 'XML to CSV Converter',
		metaDescription: 'Convert XML to CSV instantly.',
		engine: 'xml',
		operation: 'toCsv',
		layoutVariant: 'split',
		inputLanguage: 'xml',
		outputLanguage: 'csv',
		hasTreeView: false,
		relatedTools: [],
		faqs: [],
		useCases: [],
		sampleInput: '<root><row><id>1</id></row></root>'
	}
];
