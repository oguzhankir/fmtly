import type { ToolDefinition } from '../types.js';

export const xmlTools: ToolDefinition[] = [
	{
		id: 'xml-formatter',
		category: 'xml',
		slug: 'formatter',
		displayName: 'tool.xml-formatter.display_name',
		tagline: 'tool.xml-formatter.tagline',
		description: 'tool.xml-formatter.description',
		primaryKeyword: 'tool.xml-formatter.primary_keyword',
		metaTitle: 'tool.xml-formatter.meta_title',
		metaDescription: 'tool.xml-formatter.meta_description',
		engine: 'xml',
		operation: 'tool.xml-formatter.operation',
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
				question: 'tool.xml-formatter.faq.0.question',
				answer: 'tool.xml-formatter.faq.0.answer'
			},
			{
				question: 'tool.xml-formatter.faq.1.question',
				answer: 'tool.xml-formatter.faq.1.answer'
			}
		],
		useCases: [
			'tool.xml-formatter.use_case.0',
			'tool.xml-formatter.use_case.1',
			'tool.xml-formatter.use_case.2',
			'tool.xml-formatter.use_case.3'
		],
		sampleInput: `<?xml version="1.0" encoding="UTF-8"?><catalog><book id="1"><title>The Great Gatsby</title><author>F. Scott Fitzgerald</author><year>1925</year><price>10.99</price></book><book id="2"><title>To Kill a Mockingbird</title><author>Harper Lee</author><year>1960</year><price>12.99</price></book></catalog>`
	},
	{
		id: 'xml-validator',
		category: 'xml',
		slug: 'validator',
		displayName: 'tool.xml-validator.display_name',
		tagline: 'tool.xml-validator.tagline',
		description: 'tool.xml-validator.description',
		primaryKeyword: 'tool.xml-validator.primary_keyword',
		metaTitle: 'tool.xml-validator.meta_title',
		metaDescription: 'tool.xml-validator.meta_description',
		engine: 'xml',
		operation: 'tool.xml-validator.operation',
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
				question: 'tool.xml-validator.faq.0.question',
				answer: 'tool.xml-validator.faq.0.answer'
			},
			{
				question: 'tool.xml-validator.faq.1.question',
				answer: 'tool.xml-validator.faq.1.answer'
			}
		],
		useCases: [
			'tool.xml-validator.use_case.0',
			'tool.xml-validator.use_case.1',
			'tool.xml-validator.use_case.2',
			'tool.xml-validator.use_case.3'
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
		displayName: 'tool.xml-to-json.display_name',
		tagline: 'tool.xml-to-json.tagline',
		description: 'tool.xml-to-json.description',
		primaryKeyword: 'tool.xml-to-json.primary_keyword',
		metaTitle: 'tool.xml-to-json.meta_title',
		metaDescription: 'tool.xml-to-json.meta_description',
		engine: 'xml',
		operation: 'tool.xml-to-json.operation',
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
				question: 'tool.xml-to-json.faq.0.question',
				answer: 'tool.xml-to-json.faq.0.answer'
			},
			{
				question: 'tool.xml-to-json.faq.1.question',
				answer: 'tool.xml-to-json.faq.1.answer'
			}
		],
		useCases: [
			'tool.xml-to-json.use_case.0',
			'tool.xml-to-json.use_case.1',
			'tool.xml-to-json.use_case.2',
			'tool.xml-to-json.use_case.3'
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
		displayName: 'tool.json-to-xml.display_name',
		tagline: 'tool.json-to-xml.tagline',
		description: 'tool.json-to-xml.description',
		primaryKeyword: 'tool.json-to-xml.primary_keyword',
		metaTitle: 'tool.json-to-xml.meta_title',
		metaDescription: 'tool.json-to-xml.meta_description',
		engine: 'json',
		operation: 'tool.json-to-xml.operation',
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
				question: 'tool.json-to-xml.faq.0.question',
				answer: 'tool.json-to-xml.faq.0.answer'
			},
			{
				question: 'tool.json-to-xml.faq.1.question',
				answer: 'tool.json-to-xml.faq.1.answer'
			}
		],
		useCases: [
			'tool.json-to-xml.use_case.0',
			'tool.json-to-xml.use_case.1',
			'tool.json-to-xml.use_case.2',
			'tool.json-to-xml.use_case.3'
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
		displayName: 'tool.xml-to-yaml.display_name',
		tagline: 'tool.xml-to-yaml.tagline',
		description: 'tool.xml-to-yaml.description',
		primaryKeyword: 'tool.xml-to-yaml.primary_keyword',
		metaTitle: 'tool.xml-to-yaml.meta_title',
		metaDescription: 'tool.xml-to-yaml.meta_description',
		engine: 'xml',
		operation: 'tool.xml-to-yaml.operation',
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
				question: 'tool.xml-to-yaml.faq.0.question',
				answer: 'tool.xml-to-yaml.faq.0.answer'
			},
			{
				question: 'tool.xml-to-yaml.faq.1.question',
				answer: 'tool.xml-to-yaml.faq.1.answer'
			},
			{
				question: 'tool.xml-to-yaml.faq.2.question',
				answer: 'tool.xml-to-yaml.faq.2.answer'
			}
		],
		useCases: [
			'tool.xml-to-yaml.use_case.0',
			'tool.xml-to-yaml.use_case.1',
			'tool.xml-to-yaml.use_case.2',
			'tool.xml-to-yaml.use_case.3'
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
		displayName: 'tool.xml-to-csv.display_name',
		tagline: 'tool.xml-to-csv.tagline',
		description: 'tool.xml-to-csv.description',
		primaryKeyword: 'tool.xml-to-csv.primary_keyword',
		metaTitle: 'tool.xml-to-csv.meta_title',
		metaDescription: 'tool.xml-to-csv.meta_description',
		engine: 'xml',
		operation: 'tool.xml-to-csv.operation',
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
				question: 'tool.xml-to-csv.faq.0.question',
				answer: 'tool.xml-to-csv.faq.0.answer'
			},
			{
				question: 'tool.xml-to-csv.faq.1.question',
				answer: 'tool.xml-to-csv.faq.1.answer'
			},
			{
				question: 'tool.xml-to-csv.faq.2.question',
				answer: 'tool.xml-to-csv.faq.2.answer'
			}
		],
		useCases: [
			'tool.xml-to-csv.use_case.0',
			'tool.xml-to-csv.use_case.1',
			'tool.xml-to-csv.use_case.2',
			'tool.xml-to-csv.use_case.3'
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
		displayName: 'tool.xml-minifier.display_name',
		tagline: 'tool.xml-minifier.tagline',
		description: 'tool.xml-minifier.description',
		primaryKeyword: 'tool.xml-minifier.primary_keyword',
		metaTitle: 'tool.xml-minifier.meta_title',
		metaDescription: 'tool.xml-minifier.meta_description',
		engine: 'xml',
		operation: 'tool.xml-minifier.operation',
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
				question: 'tool.xml-minifier.faq.0.question',
				answer: 'tool.xml-minifier.faq.0.answer'
			},
			{
				question: 'tool.xml-minifier.faq.1.question',
				answer: 'tool.xml-minifier.faq.1.answer'
			},
			{
				question: 'tool.xml-minifier.faq.2.question',
				answer: 'tool.xml-minifier.faq.2.answer'
			}
		],
		useCases: [
			'tool.xml-minifier.use_case.0',
			'tool.xml-minifier.use_case.1',
			'tool.xml-minifier.use_case.2',
			'tool.xml-minifier.use_case.3'
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
		displayName: 'tool.xml-xpath.display_name',
		tagline: 'tool.xml-xpath.tagline',
		description: 'tool.xml-xpath.description',
		primaryKeyword: 'tool.xml-xpath.primary_keyword',
		metaTitle: 'tool.xml-xpath.meta_title',
		metaDescription: 'tool.xml-xpath.meta_description',
		engine: 'xml',
		operation: 'tool.xml-xpath.operation',
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
				question: 'tool.xml-xpath.faq.0.question',
				answer: 'tool.xml-xpath.faq.0.answer'
			},
			{
				question: 'tool.xml-xpath.faq.1.question',
				answer: 'tool.xml-xpath.faq.1.answer'
			},
			{
				question: 'tool.xml-xpath.faq.2.question',
				answer: 'tool.xml-xpath.faq.2.answer'
			},
			{
				question: 'tool.xml-xpath.faq.3.question',
				answer: 'tool.xml-xpath.faq.3.answer'
			}
		],
		useCases: [
			'tool.xml-xpath.use_case.0',
			'tool.xml-xpath.use_case.1',
			'tool.xml-xpath.use_case.2',
			'tool.xml-xpath.use_case.3'
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
