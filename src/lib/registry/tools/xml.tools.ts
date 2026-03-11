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
		tagline: 'Convert XML documents to YAML configuration format',
		description:
			'Convert any XML document to clean YAML format entirely in your browser. Handles nested elements, attributes (mapped with @_ prefix), CDATA sections, and repeated sibling elements. Ideal for converting XML configs to YAML for Kubernetes, Ansible, or CI pipelines.',
		primaryKeyword: 'xml to yaml',
		metaTitle: 'XML to YAML Converter — fmtly.dev',
		metaDescription:
			'Convert XML to YAML configuration format instantly in your browser. Nested elements, attributes, and arrays all handled. No server, fully private.',
		engine: 'xml',
		operation: 'toYaml',
		layoutVariant: 'split',
		inputLanguage: 'xml',
		outputLanguage: 'yaml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'xml', slug: 'formatter' },
			{ category: 'xml', slug: 'to-json' },
			{ category: 'json', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'How are XML attributes represented in YAML?',
				answer:
					'Attributes are mapped to keys prefixed with @_. For example, <book id="1"> becomes "@_id: 1" in YAML. This convention matches the fast-xml-parser library used internally.'
			},
			{
				question: 'Can I convert RSS or Atom feeds to YAML?',
				answer:
					'Yes. RSS and Atom feeds are valid XML and are converted as-is. Repeated <item> or <entry> elements will become YAML arrays, which works well for feed processing pipelines.'
			},
			{
				question: 'Is the conversion lossless?',
				answer:
					'The conversion preserves all data but may change representation. XML processing instructions and comments are not included in the YAML output.'
			}
		],
		useCases: [
			'Convert Spring Boot XML config to YAML for modern Spring applications',
			'Transform Maven pom.xml dependency blocks into YAML for documentation',
			'Convert SOAP response payloads to YAML for readable logging',
			'Prepare XML data exports for ingestion into YAML-based pipelines'
		],
		sampleInput: `<?xml version="1.0" encoding="UTF-8"?>
<config>
  <database host="localhost" port="5432">
    <name>myapp_db</name>
    <pool>
      <min>2</min>
      <max>10</max>
    </pool>
  </database>
  <cache enabled="true">
    <ttl>3600</ttl>
    <provider>redis</provider>
  </cache>
</config>`
	},
	{
		id: 'xml-to-csv',
		category: 'xml',
		slug: 'to-csv',
		displayName: 'XML to CSV',
		tagline: 'Extract repeated XML elements as a CSV table',
		description:
			'Convert XML documents containing repeated sibling elements into CSV format. The converter automatically detects the repeating element (e.g., <row>, <item>, <record>) and maps child elements and attributes to CSV columns. Nested objects are flattened with dot notation.',
		primaryKeyword: 'xml to csv',
		metaTitle: 'XML to CSV Converter — fmtly.dev',
		metaDescription:
			'Convert XML arrays to CSV instantly in your browser. Auto-detects repeated elements as rows with column headers. Nested values flattened. No server, fully private.',
		engine: 'xml',
		operation: 'toCsv',
		layoutVariant: 'split',
		inputLanguage: 'xml',
		outputLanguage: 'csv',
		hasTreeView: false,
		relatedTools: [
			{ category: 'xml', slug: 'formatter' },
			{ category: 'xml', slug: 'to-json' },
			{ category: 'json', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'What XML structure produces the best CSV output?',
				answer:
					'XML with a list of repeated sibling elements works best. For example, a <catalog> containing multiple <book> elements will produce one CSV row per book. Single-object XML is also supported and produces a one-row CSV.'
			},
			{
				question: 'How are XML attributes handled in the CSV?',
				answer:
					'Attributes are included as columns prefixed with @_. For example, <book id="1"> adds a column named "@_id" to the CSV output.'
			},
			{
				question: 'How are nested elements represented?',
				answer:
					'Nested elements are flattened using dot notation. For example, <price><amount>9.99</amount></price> becomes a column named "price.amount" in the CSV.'
			}
		],
		useCases: [
			'Export XML database dumps to CSV for spreadsheet analysis',
			'Convert RSS or Atom feed items to CSV for content audits',
			'Transform XML API responses into tabular data for reporting',
			'Prepare XML product catalogs for import into e-commerce platforms'
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
  <book id="3">
    <title>1984</title>
    <author>George Orwell</author>
    <year>1949</year>
    <price>9.99</price>
  </book>
</catalog>`
	},
	{
		id: 'xml-minifier',
		category: 'xml',
		slug: 'minifier',
		displayName: 'XML Minifier',
		tagline: 'Minify XML by removing whitespace and indentation',
		description:
			'Strip all unnecessary whitespace, newlines, and indentation from XML documents to produce compact, minified output. Reduces file size for network transmission and storage while preserving all element data, attributes, and content.',
		primaryKeyword: 'xml minifier',
		metaTitle: 'XML Minifier — Compress & Minify XML — fmtly.dev',
		metaDescription:
			'Minify XML instantly in your browser. Removes whitespace and indentation to produce compact XML. See exact byte savings. No data leaves your device.',
		engine: 'xml',
		operation: 'minify',
		layoutVariant: 'split',
		inputLanguage: 'xml',
		outputLanguage: 'xml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'xml', slug: 'formatter' },
			{ category: 'xml', slug: 'validator' },
			{ category: 'json', slug: 'minifier' }
		],
		faqs: [
			{
				question: 'Does minification change the meaning of the XML?',
				answer:
					'No. Minification only removes insignificant whitespace between tags. The resulting XML is semantically identical and will parse to the same data structure.'
			},
			{
				question: 'How much size reduction can I expect?',
				answer:
					'Typical XML files see 10–40% size reduction depending on indentation depth and whitespace density. The output panel shows the exact byte savings after minification.'
			},
			{
				question: 'Is my data sent to a server?',
				answer:
					'No. All processing happens entirely in your browser using fast-xml-parser. Your XML never leaves your device.'
			}
		],
		useCases: [
			'Minify XML payloads before sending SOAP API requests',
			'Reduce SVG file sizes for web embedding',
			'Compress XML configuration files for production deployment',
			'Minimize XML data files for storage or CDN delivery'
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
		id: 'xml-xpath',
		category: 'xml',
		slug: 'xpath',
		displayName: 'XPath Query',
		tagline: 'Test XPath 1.0 expressions against XML documents',
		description:
			"Run XPath 1.0 queries against any XML document directly in your browser — no dependencies, zero latency. Uses the browser's native DOMParser and document.evaluate for full XPath 1.0 support including predicates, axes, and functions. Results show matched nodes, text content, and attribute values.",
		primaryKeyword: 'xpath query tester',
		metaTitle: 'XPath Query Tester — Test XPath Online — fmtly.dev',
		metaDescription:
			'Test XPath 1.0 expressions against XML in your browser. Native DOMParser, zero dependencies. Supports predicates, axes, and functions. No data leaves your device.',
		engine: 'xml',
		operation: 'xpath',
		layoutVariant: 'split',
		inputLanguage: 'xml',
		outputLanguage: 'xml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'xml', slug: 'formatter' },
			{ category: 'xml', slug: 'validator' },
			{ category: 'json', slug: 'jsonpath' }
		],
		faqs: [
			{
				question: 'What version of XPath is supported?',
				answer:
					'XPath 1.0 is fully supported via the browser\'s native document.evaluate API. XPath 2.0 and 3.0 expressions (such as the "!" operator or sequences) are not supported.'
			},
			{
				question: 'How do I query elements with namespaces?',
				answer:
					'Namespace-prefixed elements require a namespace resolver. This tool provides a simple resolver that maps prefixes declared in the document root. For best results with namespaced XML, use local-name() predicates such as //*[local-name()="Body"].'
			},
			{
				question: 'What result types are returned?',
				answer:
					'The tool returns all matched nodes. For element nodes, the full element tag and content are shown. For attribute nodes, the attribute value is shown. For text nodes, the text content is returned.'
			},
			{
				question: 'Can I use XPath functions like contains() or starts-with()?',
				answer:
					'Yes. All standard XPath 1.0 functions are supported including string functions (contains, starts-with, normalize-space), number functions (sum, count, round), and boolean functions.'
			}
		],
		useCases: [
			'Test XPath selectors for XML parsing code before implementation',
			'Extract specific elements from SOAP responses during API debugging',
			'Navigate and query RSS or Atom feed structure',
			'Validate that an XPath expression matches the expected nodes in an XML document'
		],
		sampleInput: `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="1" available="true">
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
    <price>10.99</price>
  </book>
  <book id="2" available="false">
    <title>To Kill a Mockingbird</title>
    <author>Harper Lee</author>
    <year>1960</year>
    <price>12.99</price>
  </book>
  <book id="3" available="true">
    <title>1984</title>
    <author>George Orwell</author>
    <year>1949</year>
    <price>9.99</price>
  </book>
</catalog>`
	}
];
