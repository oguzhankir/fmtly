const registryEn: Record<string, string> = {
	// ── Categories ──────────────────────────────────────────────────────────
	'category.json.display_name': 'JSON',
	'category.json.description':
		'Format, validate, minify, compare, and convert JSON data. Every tool runs in your browser with real-time error detection and tree visualization.',
	'category.json.primary_keyword': 'json tools',
	'category.xml.display_name': 'XML',
	'category.xml.description':
		'Format, validate, and convert XML documents. Supports pretty-printing with configurable indentation and conversion to JSON or CSV.',
	'category.xml.primary_keyword': 'xml tools',
	'category.yaml.display_name': 'YAML',
	'category.yaml.description':
		'Format, validate, and convert YAML files. Bidirectional conversion with JSON and syntax validation with precise error locations.',
	'category.yaml.primary_keyword': 'yaml tools',
	'category.csv.display_name': 'CSV',
	'category.csv.description':
		'Parse, format, and convert CSV data. Convert between CSV, JSON, and other tabular formats with custom delimiter support.',
	'category.csv.primary_keyword': 'csv tools',
	'category.css.display_name': 'CSS',
	'category.css.description':
		'Format, minify, and optimize CSS stylesheets. Beautify compressed CSS or minify formatted CSS with property sorting options.',
	'category.css.primary_keyword': 'css tools',
	'category.html.display_name': 'HTML',
	'category.html.description':
		'Format, minify, and validate HTML markup. Prettify compressed HTML or strip whitespace for production.',
	'category.html.primary_keyword': 'html tools',
	'category.js.display_name': 'JavaScript',
	'category.js.description':
		'Format and minify JavaScript code. Beautify compressed scripts or produce minified output for faster page loads.',
	'category.js.primary_keyword': 'javascript tools',
	'category.encode.display_name': 'Encoders & Decoders',
	'category.encode.description':
		'Encode and decode Base64, URL, HTML entities, and more. All operations run instantly in your browser — no data sent to any server.',
	'category.encode.primary_keyword': 'encoder decoder tools',
	'category.escape.display_name': 'Escape Tools',
	'category.escape.description':
		'Escape and unescape strings for JSON, HTML, XML, URLs, and regex. Safely handle special characters across formats.',
	'category.escape.primary_keyword': 'string escape tools',
	'category.diff.display_name': 'Diff & Compare',
	'category.diff.description':
		'Compare two files or data structures side by side. Highlights additions and deletions with JSON, text, and structured diff support.',
	'category.diff.primary_keyword': 'diff compare tools',
	'category.generate.display_name': 'Generators',
	'category.generate.description':
		'Generate type definitions, JSON Schema, Markdown tables, mock test data, and other developer utilities entirely in your browser.',
	'category.generate.primary_keyword': 'code generators',
	'category.text.display_name': 'Text & Strings',
	'category.text.description':
		'Format, manipulate, reverse, sort, and analyze text and strings. Includes word counters, readability scores, and markdown conversions.',
	'category.text.primary_keyword': 'text tools',
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Format, validate, and convert TOML files. Convert TOML to JSON and YAML safely.',
	'category.toml.primary_keyword': 'toml tools',
	'category.number.display_name': 'Numbers & Math',
	'category.number.description':
		'Format numbers, calculate percentages, use scientific notation, and convert values between number systems instantly.',
	'category.number.primary_keyword': 'number tools',
	'category.color.display_name': 'Color Tools',
	'category.color.description':
		'Check contrast ratios, build color palettes, generate CSS gradients, and simulate color blindness.',
	'category.color.primary_keyword': 'color tools',
	'category.crypto.display_name': 'Crypto & Security',
	'category.crypto.description':
		'Generate HMAC signatures, analyze password strength, produce secure random strings, and generate ULIDs — all client-side using the Web Crypto API.',
	'category.crypto.primary_keyword': 'crypto security tools',
	'category.web.display_name': 'Web & Network',
	'category.web.description':
		'Parse URLs, decode User-Agent strings, inspect CORS headers, look up MIME types, geolocate IPs, and query DNS records.',
	'category.web.primary_keyword': 'web tools online',
	'category.code.display_name': 'Code Formatters',
	'category.code.description':
		'Format CSS, SCSS, LESS, HTML, JavaScript, TypeScript, GraphQL, and Markdown entirely locally. Convert cURL commands to fetch() or Axios.',
	'category.code.primary_keyword': 'code formatter online',
	'category.pdf.display_name': 'PDF Tools',
	'category.pdf.description': 'View PDF files and extract text — all locally in your browser.',
	'category.pdf.primary_keyword': 'pdf tools online',
	'category.image.display_name': 'Image Tools',
	'category.image.description':
		'Resize, convert, compress, and encode images — all locally in your browser. No uploads, no server.',
	'category.image.primary_keyword': 'image tools online',
	'category.file.display_name': 'File Tools',
	'category.file.description':
		'Calculate file hashes and perform format conversions between files.',
	'category.file.primary_keyword': 'file tools online',
	'category.qr.display_name': 'QR & Barcode',
	'category.qr.description':
		'Generate customizable QR codes and decode QR codes from images — all locally in your browser.',
	'category.qr.primary_keyword': 'qr code generator',
	'category.accessibility.display_name': 'Accessibility',
	'category.accessibility.description':
		'Test color contrast, simulate color blindness, and check WCAG font size requirements. Ensure your designs are accessible to everyone.',
	'category.accessibility.primary_keyword': 'accessibility tools',

	// ── JSON tools ──────────────────────────────────────────────────────────
	'tool.json-formatter.display_name': 'JSON Formatter',
	'tool.json-formatter.tagline': 'Format and beautify JSON with configurable indentation',
	'tool.json-formatter.description':
		'Parse and display JSON with configurable indentation — 2 spaces, 4 spaces, or tabs. Real-time parsing with precise error locations and an optional tree view.',
	'tool.json-formatter.primary_keyword': 'json formatter',
	'tool.json-formatter.meta_title': 'JSON Formatter & Beautifier — fmtly.dev',
	'tool.json-formatter.meta_description':
		'Format and beautify JSON instantly in your browser. Configurable indentation, real-time error detection, and tree view. No data leaves your device.',
	'tool.json-formatter.operation': 'Format',

	'tool.json-validator.display_name': 'JSON Validator',
	'tool.json-validator.tagline': 'Validate JSON syntax and structure',
	'tool.json-validator.description':
		'Check JSON syntax in real time. Instantly identifies missing brackets, unterminated strings, and duplicate keys. Supports JSON5 comments and trailing commas.',
	'tool.json-validator.primary_keyword': 'json validator',
	'tool.json-validator.meta_title': 'JSON Validator — fmtly.dev',
	'tool.json-validator.meta_description':
		'Validate JSON in your browser instantly. Detects syntax errors with precise line and column numbers. No data leaves your device.',
	'tool.json-validator.operation': 'Validate',

	'tool.json-minifier.display_name': 'JSON Minifier',
	'tool.json-minifier.tagline': 'Remove whitespace and compress JSON to minimum size',
	'tool.json-minifier.description':
		'Strip all whitespace from JSON to produce the smallest possible output. Validates the JSON first, then removes indentation, newlines, and spaces.',
	'tool.json-minifier.primary_keyword': 'json minifier',
	'tool.json-minifier.meta_title': 'JSON Minifier — fmtly.dev',
	'tool.json-minifier.meta_description':
		'Minify JSON in your browser instantly. Removes all whitespace and produces compact output. No data leaves your device.',
	'tool.json-minifier.operation': 'Minify',

	'tool.json-to-yaml.display_name': 'JSON to YAML',
	'tool.json-to-yaml.tagline': 'Convert JSON data to YAML format',
	'tool.json-to-yaml.description':
		'Convert JSON to YAML with proper indentation and formatting. Handles nested objects, arrays, and all JSON data types.',
	'tool.json-to-yaml.primary_keyword': 'json to yaml',
	'tool.json-to-yaml.meta_title': 'JSON to YAML Converter — fmtly.dev',
	'tool.json-to-yaml.meta_description':
		'Convert JSON to YAML instantly in your browser. Handles nested structures and all data types. No data uploaded.',
	'tool.json-to-yaml.operation': 'Convert',

	'tool.json-to-toml.display_name': 'JSON to TOML',
	'tool.json-to-toml.tagline': 'Convert JSON data to TOML configuration format',
	'tool.json-to-toml.description':
		'Convert JSON to TOML format, ideal for configuration files. Supports nested tables and inline arrays.',
	'tool.json-to-toml.primary_keyword': 'json to toml',
	'tool.json-to-toml.meta_title': 'JSON to TOML Converter — fmtly.dev',
	'tool.json-to-toml.meta_description':
		'Convert JSON to TOML instantly in your browser. Handles nested structures and arrays. No data uploaded.',
	'tool.json-to-toml.operation': 'Convert',

	'tool.json-to-markdown.display_name': 'JSON to Markdown Table',
	'tool.json-to-markdown.tagline': 'Convert JSON arrays to Markdown tables',
	'tool.json-to-markdown.description':
		'Convert JSON arrays of objects to formatted Markdown tables. Automatically detects column headers from object keys.',
	'tool.json-to-markdown.primary_keyword': 'json to markdown table',
	'tool.json-to-markdown.meta_title': 'JSON to Markdown Table Converter — fmtly.dev',
	'tool.json-to-markdown.meta_description':
		'Convert JSON arrays to Markdown tables instantly. Auto-detects headers and formats data. No data leaves your device.',
	'tool.json-to-markdown.operation': 'Convert',

	'tool.json-to-xml.display_name': 'JSON to XML',
	'tool.json-to-xml.tagline': 'Convert JSON data to XML format',
	'tool.json-to-xml.description':
		'Convert JSON objects and arrays to well-formed XML. Handles nested structures and configurable root element names.',
	'tool.json-to-xml.primary_keyword': 'json to xml',
	'tool.json-to-xml.meta_title': 'JSON to XML Converter — fmtly.dev',
	'tool.json-to-xml.meta_description':
		'Convert JSON to XML instantly in your browser. Produces well-formed XML. No data uploaded.',
	'tool.json-to-xml.operation': 'Convert',

	'tool.json-to-csv.display_name': 'JSON to CSV',
	'tool.json-to-csv.tagline': 'Convert JSON arrays to CSV format',
	'tool.json-to-csv.description':
		'Convert JSON arrays of objects to CSV format. Automatically extracts column headers from object keys.',
	'tool.json-to-csv.primary_keyword': 'json to csv',
	'tool.json-to-csv.meta_title': 'JSON to CSV Converter — fmtly.dev',
	'tool.json-to-csv.meta_description':
		'Convert JSON arrays to CSV instantly in your browser. Auto-detects headers. No data uploaded.',
	'tool.json-to-csv.operation': 'Convert',

	'tool.json-jsonpath.display_name': 'JSONPath Query',
	'tool.json-jsonpath.tagline': 'Query JSON data with JSONPath expressions',
	'tool.json-jsonpath.description':
		'Run JSONPath expressions against JSON data to extract specific values. Supports filters, wildcards, recursive descent, and all standard JSONPath operators.',
	'tool.json-jsonpath.primary_keyword': 'jsonpath query',
	'tool.json-jsonpath.meta_title': 'JSONPath Query Tool — fmtly.dev',
	'tool.json-jsonpath.meta_description':
		'Query JSON data with JSONPath expressions in your browser. Supports all operators. No data uploaded.',
	'tool.json-jsonpath.operation': 'Query',

	'tool.json-jmespath.display_name': 'JMESPath Query',
	'tool.json-jmespath.tagline': 'Query and transform JSON with JMESPath expressions',
	'tool.json-jmespath.description':
		'Run JMESPath expressions against JSON data to query and transform it. Supports projections, filters, multiselect, and all JMESPath functions.',
	'tool.json-jmespath.primary_keyword': 'jmespath query',
	'tool.json-jmespath.meta_title': 'JMESPath Query Tool — fmtly.dev',
	'tool.json-jmespath.meta_description':
		'Query and transform JSON with JMESPath in your browser. Supports all operators and functions. No data uploaded.',
	'tool.json-jmespath.operation': 'Query',

	// ── XML tools ───────────────────────────────────────────────────────────
	'tool.xml-formatter.display_name': 'XML Formatter',
	'tool.xml-formatter.tagline': 'Prettify and indent XML with configurable spacing',
	'tool.xml-formatter.description':
		'Format and indent XML documents with 2 spaces, 4 spaces, or tabs. Validates XML structure and highlights errors with precise line numbers.',
	'tool.xml-formatter.primary_keyword': 'xml formatter',
	'tool.xml-formatter.meta_title': 'XML Formatter & Beautifier — fmtly.dev',
	'tool.xml-formatter.meta_description':
		'Format and beautify XML in your browser. Configurable indentation and real-time validation. No data leaves your device.',
	'tool.xml-formatter.operation': 'Format',

	'tool.xml-validator.display_name': 'XML Validator',
	'tool.xml-validator.tagline': 'Validate XML syntax and well-formedness',
	'tool.xml-validator.description':
		'Validate XML against well-formedness rules. Identifies unclosed tags, malformed attributes, and invalid characters with precise error locations.',
	'tool.xml-validator.primary_keyword': 'xml validator',
	'tool.xml-validator.meta_title': 'XML Validator — fmtly.dev',
	'tool.xml-validator.meta_description':
		'Validate XML in your browser. Detects syntax errors with line and column numbers. No data leaves your device.',
	'tool.xml-validator.operation': 'Validate',

	'tool.xml-to-json.display_name': 'XML to JSON Converter',
	'tool.xml-to-json.tagline': 'Convert XML documents to JSON format',
	'tool.xml-to-json.description':
		'Convert XML to JSON with automatic attribute and element mapping. Handles namespaces, CDATA sections, and nested XML structures.',
	'tool.xml-to-json.primary_keyword': 'xml to json',
	'tool.xml-to-json.meta_title': 'XML to JSON Converter — fmtly.dev',
	'tool.xml-to-json.meta_description':
		'Convert XML to JSON instantly in your browser. Handles attributes and nested structures. No data uploaded.',
	'tool.xml-to-json.operation': 'Convert',

	'tool.xml-to-yaml.display_name': 'XML to YAML Converter',
	'tool.xml-to-yaml.tagline': 'Convert XML documents to YAML format',
	'tool.xml-to-yaml.description':
		'Convert XML to YAML format with proper indentation. Handles attributes, text content, and nested XML elements.',
	'tool.xml-to-yaml.primary_keyword': 'xml to yaml',
	'tool.xml-to-yaml.meta_title': 'XML to YAML Converter — fmtly.dev',
	'tool.xml-to-yaml.meta_description':
		'Convert XML to YAML instantly in your browser. Handles attributes and nested elements. No data uploaded.',
	'tool.xml-to-yaml.operation': 'Convert',

	'tool.xml-to-csv.display_name': 'XML to CSV Converter',
	'tool.xml-to-csv.tagline': 'Convert XML records to CSV format',
	'tool.xml-to-csv.description':
		'Extract repeating XML elements into CSV rows. Detects column headers from element and attribute names automatically.',
	'tool.xml-to-csv.primary_keyword': 'xml to csv',
	'tool.xml-to-csv.meta_title': 'XML to CSV Converter — fmtly.dev',
	'tool.xml-to-csv.meta_description':
		'Convert XML to CSV instantly in your browser. Auto-detects headers from element names. No data uploaded.',
	'tool.xml-to-csv.operation': 'Convert',

	'tool.xml-minifier.display_name': 'XML Minifier',
	'tool.xml-minifier.tagline': 'Remove whitespace and compress XML',
	'tool.xml-minifier.description':
		'Strip all whitespace and comments from XML to produce compact output. Validates XML first, then minifies to reduce file size.',
	'tool.xml-minifier.primary_keyword': 'xml minifier',
	'tool.xml-minifier.meta_title': 'XML Minifier — fmtly.dev',
	'tool.xml-minifier.meta_description':
		'Minify XML in your browser instantly. Removes whitespace and comments. No data leaves your device.',
	'tool.xml-minifier.operation': 'Minify',

	'tool.xml-xpath.display_name': 'XPath Query',
	'tool.xml-xpath.tagline': 'Query XML data with XPath expressions',
	'tool.xml-xpath.description':
		'Run XPath 1.0 expressions against XML documents. Supports element selection, attribute filtering, and all standard XPath axes and functions.',
	'tool.xml-xpath.primary_keyword': 'xpath query',
	'tool.xml-xpath.meta_title': 'XPath Query Tool — fmtly.dev',
	'tool.xml-xpath.meta_description':
		'Query XML with XPath expressions in your browser. Supports all XPath 1.0 operators. No data uploaded.',
	'tool.xml-xpath.operation': 'Query',

	'tool.xml-diff.display_name': 'XML Diff',
	'tool.xml-diff.tagline': 'Compare XML documents and visualize differences',
	'tool.xml-diff.description':
		'Compare two XML documents side-by-side and highlight differences. Shows added, removed, and modified elements with precise line numbers and XML-aware diff visualization.',
	'tool.xml-diff.primary_keyword': 'xml diff',
	'tool.xml-diff.meta_title': 'XML Diff Tool — fmtly.dev',
	'tool.xml-diff.meta_description':
		'Compare XML files and visualize differences in your browser. Shows element-level changes with line numbers. No data uploaded.',
	'tool.xml-diff.operation': 'Diff',
	'tool.xml-diff.faq.0.question': 'How is XML Diff different from text diff?',
	'tool.xml-diff.faq.0.answer':
		'XML Diff validates both inputs as XML and compares them line by line after XML-aware whitespace normalization. It is better suited to XML documents than plain text comparison.',
	'tool.xml-diff.faq.1.question': 'Can I compare invalid XML?',
	'tool.xml-diff.faq.1.answer':
		'No. Both sides must be valid XML before comparison. If either input is malformed, the tool shows which side needs fixing.',
	'tool.xml-diff.faq.2.question': 'What kinds of changes are highlighted?',
	'tool.xml-diff.faq.2.answer':
		'The tool highlights added, removed, and modified XML lines. This makes it useful for config updates, feed revisions, and markup reviews.',
	'tool.xml-diff.use_case.0': 'Review changes between two XML API payloads',
	'tool.xml-diff.use_case.1': 'Compare sitemap, feed, or config XML revisions',
	'tool.xml-diff.use_case.2': 'Inspect markup changes before deployment',
	'tool.xml-diff.use_case.3': 'Verify generated XML output against an expected version',

	// ── YAML tools ──────────────────────────────────────────────────────────
	'tool.yaml-formatter.display_name': 'YAML Formatter',
	'tool.yaml-formatter.tagline': 'Format and prettify YAML with consistent indentation',
	'tool.yaml-formatter.description':
		'Format YAML files with consistent 2-space indentation. Validates YAML syntax and normalizes quoting, anchors, and key ordering.',
	'tool.yaml-formatter.primary_keyword': 'yaml formatter',
	'tool.yaml-formatter.meta_title': 'YAML Formatter & Beautifier — fmtly.dev',
	'tool.yaml-formatter.meta_description':
		'Format and beautify YAML in your browser. Validates syntax and normalizes indentation. No data leaves your device.',
	'tool.yaml-formatter.operation': 'Format',
	'tool.yaml-formatter.faq.0.question': 'What does the YAML Formatter normalize?',
	'tool.yaml-formatter.faq.0.answer':
		'It reformats indentation, spacing, quoting style, and overall layout so the document is easier to read while staying valid YAML.',
	'tool.yaml-formatter.faq.1.question': 'Will formatting change my YAML data?',
	'tool.yaml-formatter.faq.1.answer':
		'No. It rewrites presentation, not meaning. The goal is to preserve the same data structure while producing cleaner output.',
	'tool.yaml-formatter.use_case.0': 'Beautify Kubernetes manifests before review',
	'tool.yaml-formatter.use_case.1': 'Normalize CI configuration files for cleaner diffs',
	'tool.yaml-formatter.use_case.2': 'Reformat Helm values files before committing',
	'tool.yaml-formatter.use_case.3': 'Make large YAML configs easier to scan and edit',

	'tool.yaml-minifier.display_name': 'YAML Minifier',
	'tool.yaml-minifier.tagline': 'Minify YAML into a compact valid output',
	'tool.yaml-minifier.description':
		'Minify YAML documents into a compact flow-style representation. Supports multi-document YAML and preserves the same data structure while reducing layout noise.',
	'tool.yaml-minifier.primary_keyword': 'yaml minifier',
	'tool.yaml-minifier.meta_title': 'YAML Minifier — fmtly.dev',
	'tool.yaml-minifier.meta_description':
		'Minify YAML in your browser. Supports multi-document YAML and compact output. No data leaves your device.',
	'tool.yaml-minifier.operation': 'Minify',
	'tool.yaml-minifier.faq.0.question': 'How does YAML minification work?',
	'tool.yaml-minifier.faq.0.answer':
		'It parses the YAML first and then rewrites it as a more compact valid YAML document. That removes most formatting noise while preserving the same data.',
	'tool.yaml-minifier.faq.1.question': 'Does it support multiple YAML documents?',
	'tool.yaml-minifier.faq.1.answer':
		'Yes. Multi-document inputs separated by document markers are preserved and minified document by document.',
	'tool.yaml-minifier.use_case.0': 'Shrink YAML before sharing snippets in tickets or chat',
	'tool.yaml-minifier.use_case.1': 'Inspect compact multi-document manifests',
	'tool.yaml-minifier.use_case.2': 'Reduce whitespace before storing generated YAML fixtures',
	'tool.yaml-minifier.use_case.3': 'Compare pretty and compact YAML representations side by side',

	'tool.yaml-validator.display_name': 'YAML Validator',
	'tool.yaml-validator.tagline': 'Validate YAML syntax and schema',
	'tool.yaml-validator.description':
		'Validate YAML syntax in real time and check documents against a schema. Catch indentation problems, malformed structures, and schema mismatches with line-level feedback.',
	'tool.yaml-validator.primary_keyword': 'yaml validator',
	'tool.yaml-validator.meta_title': 'YAML Validator — fmtly.dev',
	'tool.yaml-validator.meta_description':
		'Validate YAML syntax and schema in your browser. Catch parser errors and schema mismatches with line numbers. No data leaves your device.',
	'tool.yaml-validator.operation': 'Validate',
	'tool.yaml-validator.faq.0.question': 'What kinds of YAML errors can it detect?',
	'tool.yaml-validator.faq.0.answer':
		'It catches parser errors such as bad indentation, invalid mappings, misplaced sequences, and malformed documents. In schema mode it also reports paths and values that do not satisfy the schema.',
	'tool.yaml-validator.faq.1.question': 'Can I validate YAML against a schema?',
	'tool.yaml-validator.faq.1.answer':
		'Yes. Switch to Schema mode and provide a JSON Schema. The schema input can be written in JSON or YAML, which is useful for manifests, config files, and API payloads.',
	'tool.yaml-validator.use_case.0': 'Check deployment manifests before shipping',
	'tool.yaml-validator.use_case.1': 'Validate YAML copied from docs or Stack Overflow',
	'tool.yaml-validator.use_case.2': 'Catch indentation mistakes in CI and automation configs',
	'tool.yaml-validator.use_case.3': 'Validate Helm values or manifests against an expected schema',

	'tool.yaml-to-json.display_name': 'YAML to JSON',
	'tool.yaml-to-json.tagline': 'Convert YAML to JSON format',
	'tool.yaml-to-json.description':
		'Convert YAML documents to formatted JSON. Handles anchors, aliases, multi-document YAML, and all YAML data types.',
	'tool.yaml-to-json.primary_keyword': 'yaml to json',
	'tool.yaml-to-json.meta_title': 'YAML to JSON Converter — fmtly.dev',
	'tool.yaml-to-json.meta_description':
		'Convert YAML to JSON instantly in your browser. Handles anchors, aliases, and multi-document YAML. No data uploaded.',
	'tool.yaml-to-json.operation': 'Convert',
	'tool.yaml-to-json.faq.0.question': 'When should I convert YAML to JSON?',
	'tool.yaml-to-json.faq.0.answer':
		'Convert YAML to JSON when you need a stricter data format for APIs, JavaScript tooling, testing pipelines, or downstream processors that expect JSON.',
	'tool.yaml-to-json.faq.1.question': 'Does the converter preserve nested objects and arrays?',
	'tool.yaml-to-json.faq.1.answer':
		'Yes. Nested mappings and sequences are converted to their JSON equivalents so the overall data structure remains intact.',
	'tool.yaml-to-json.use_case.0': 'Turn YAML configs into JSON for API payloads',
	'tool.yaml-to-json.use_case.1': 'Inspect YAML data in a stricter machine-friendly format',
	'tool.yaml-to-json.use_case.2': 'Move configuration data into JavaScript workflows',
	'tool.yaml-to-json.use_case.3': 'Prepare YAML content for JSONPath or schema-based tooling',

	'tool.yaml-to-xml.display_name': 'YAML to XML',
	'tool.yaml-to-xml.tagline': 'Convert YAML to XML format',
	'tool.yaml-to-xml.description':
		'Convert YAML documents to well-formed XML. Maps YAML keys to XML elements and handles nested structures and arrays.',
	'tool.yaml-to-xml.primary_keyword': 'yaml to xml',
	'tool.yaml-to-xml.meta_title': 'YAML to XML Converter — fmtly.dev',
	'tool.yaml-to-xml.meta_description':
		'Convert YAML to XML instantly in your browser. No data uploaded.',
	'tool.yaml-to-xml.operation': 'Convert',
	'tool.yaml-to-xml.faq.0.question': 'How does YAML map to XML during conversion?',
	'tool.yaml-to-xml.faq.0.answer':
		'Keys are turned into element names, nested objects become nested elements, and arrays are expanded into repeated items inside the generated XML tree.',
	'tool.yaml-to-xml.faq.1.question': 'Is the output suitable for further XML tooling?',
	'tool.yaml-to-xml.faq.1.answer':
		'Yes. The result is generated as well-formed XML so you can continue with XML formatting, validation, or downstream processing.',
	'tool.yaml-to-xml.use_case.0': 'Convert YAML config data into XML-based integrations',
	'tool.yaml-to-xml.use_case.1': 'Generate XML fixtures from YAML test data',
	'tool.yaml-to-xml.use_case.2': 'Bridge YAML authoring workflows into XML pipelines',
	'tool.yaml-to-xml.use_case.3': 'Prepare structured YAML content for XML review and export',

	'tool.yaml-to-csv.display_name': 'YAML to CSV',
	'tool.yaml-to-csv.tagline': 'Convert YAML arrays to CSV format',
	'tool.yaml-to-csv.description':
		'Convert YAML arrays of objects to CSV format. Extracts headers from object keys and formats data into rows.',
	'tool.yaml-to-csv.primary_keyword': 'yaml to csv',
	'tool.yaml-to-csv.meta_title': 'YAML to CSV Converter — fmtly.dev',
	'tool.yaml-to-csv.meta_description':
		'Convert YAML to CSV instantly in your browser. No data uploaded.',
	'tool.yaml-to-csv.operation': 'Convert',
	'tool.yaml-to-csv.faq.0.question': 'What YAML structures convert best to CSV?',
	'tool.yaml-to-csv.faq.0.answer':
		'Arrays of objects work best. Each object becomes a row, and matching keys become CSV columns. Nested objects are flattened into dotted paths when possible.',
	'tool.yaml-to-csv.faq.1.question': 'Can I convert a single YAML object to CSV?',
	'tool.yaml-to-csv.faq.1.answer':
		'Yes. A single object can be treated as one row, which is useful for exporting simple records or config snapshots.',
	'tool.yaml-to-csv.use_case.0': 'Export YAML records into spreadsheets for review',
	'tool.yaml-to-csv.use_case.1': 'Turn structured YAML datasets into CSV for analysts',
	'tool.yaml-to-csv.use_case.2': 'Flatten inventory or config lists into tabular output',
	'tool.yaml-to-csv.use_case.3': 'Prepare YAML data for bulk import tools that expect CSV',

	'tool.yaml-to-toml.display_name': 'YAML to TOML',
	'tool.yaml-to-toml.tagline': 'Convert YAML to TOML configuration format',
	'tool.yaml-to-toml.description':
		'Convert YAML configuration files to TOML format. Handles nested tables, arrays, and all YAML data types.',
	'tool.yaml-to-toml.primary_keyword': 'yaml to toml',
	'tool.yaml-to-toml.meta_title': 'YAML to TOML Converter — fmtly.dev',
	'tool.yaml-to-toml.meta_description':
		'Convert YAML to TOML instantly in your browser. No data uploaded.',
	'tool.yaml-to-toml.operation': 'Convert',
	'tool.yaml-to-toml.faq.0.question': 'Why convert YAML to TOML?',
	'tool.yaml-to-toml.faq.0.answer':
		'TOML is often preferred for human-edited configuration files in developer tooling. Converting helps when a project or package manager expects TOML instead of YAML.',
	'tool.yaml-to-toml.faq.1.question': 'Are nested configuration sections preserved?',
	'tool.yaml-to-toml.faq.1.answer':
		'Yes. Nested mappings are converted into TOML tables and arrays where the format allows it, keeping the configuration hierarchy readable.',
	'tool.yaml-to-toml.use_case.0': 'Move YAML app settings into TOML-based projects',
	'tool.yaml-to-toml.use_case.1': 'Generate TOML configs from existing YAML sources',
	'tool.yaml-to-toml.use_case.2': 'Port deployment settings into TOML-friendly tooling',
	'tool.yaml-to-toml.use_case.3': 'Compare the same configuration across YAML and TOML formats',

	'tool.yaml-diff.display_name': 'YAML Diff',
	'tool.yaml-diff.tagline': 'Compare two YAML documents side by side',
	'tool.yaml-diff.description':
		'Compare two YAML documents and highlight additions, deletions, and modifications. Understands YAML structure for semantic comparison.',
	'tool.yaml-diff.primary_keyword': 'yaml diff',
	'tool.yaml-diff.meta_title': 'YAML Diff Tool — fmtly.dev',
	'tool.yaml-diff.meta_description':
		'Compare two YAML documents in your browser. Highlights all additions, deletions, and changes. No data uploaded.',
	'tool.yaml-diff.operation': 'Compare',
	'tool.yaml-diff.faq.0.question': 'How is YAML Diff different from plain text diff?',
	'tool.yaml-diff.faq.0.answer':
		'YAML Diff parses both inputs as YAML data and compares the resulting structure. That means changes are matched by keys, arrays, and values instead of relying on formatting alone.',
	'tool.yaml-diff.faq.1.question': 'Can I compare invalid YAML?',
	'tool.yaml-diff.faq.1.answer':
		'No. Both sides need to be valid YAML first. If one side is malformed, the tool tells you which input needs to be fixed before comparison.',
	'tool.yaml-diff.faq.2.question': 'What kinds of changes are highlighted?',
	'tool.yaml-diff.faq.2.answer':
		'It highlights added, removed, and modified YAML paths and values, which is especially useful for reviewing config revisions and deployment changes.',
	'tool.yaml-diff.use_case.0': 'Review changes between two deployment manifests',
	'tool.yaml-diff.use_case.1': 'Compare CI pipeline config revisions',
	'tool.yaml-diff.use_case.2': 'Inspect edited Helm or values files before commit',
	'tool.yaml-diff.use_case.3': 'Verify generated YAML against an expected config version',
	'tool.yaml-query.display_name': 'YAML Query',
	'tool.yaml-query.tagline': 'Query YAML with JSONPath and JMESPath',
	'tool.yaml-query.description':
		'Run JSONPath or JMESPath expressions against YAML directly in your browser. Parse YAML, query nested data, and inspect results without converting files manually.',
	'tool.yaml-query.primary_keyword': 'yaml query',
	'tool.yaml-query.meta_title': 'YAML Query Tool — fmtly.dev',
	'tool.yaml-query.meta_description':
		'Query YAML with JSONPath or JMESPath in your browser. No manual conversion and no data uploaded.',
	'tool.yaml-query.operation': 'Query',
	'tool.yaml-query.faq.0.question': 'Which query languages are supported?',
	'tool.yaml-query.faq.0.answer':
		'You can switch between JSONPath and JMESPath. Both run against the parsed YAML data model, so nested mappings, sequences, and multi-document inputs can be queried directly.',
	'tool.yaml-query.faq.1.question': 'Do I need to convert YAML to JSON first?',
	'tool.yaml-query.faq.1.answer':
		'No. The tool parses YAML for you and returns JSON-formatted results. That makes it useful for configs, manifests, values files, and other YAML-heavy workflows.',
	'tool.yaml-query.use_case.0': 'Extract specific fields from Kubernetes manifests or Helm values',
	'tool.yaml-query.use_case.1': 'Inspect nested YAML config data without manual conversion',
	'tool.yaml-query.use_case.2': 'Prototype JSONPath or JMESPath expressions against YAML payloads',
	'tool.yaml-query.use_case.3': 'Pull lists, ids, or flags from large multi-level YAML documents',

	// ── CSV tools ───────────────────────────────────────────────────────────
	'tool.csv-to-json.display_name': 'CSV to JSON',
	'tool.csv-to-json.tagline': 'Convert CSV data to a JSON array',
	'tool.csv-to-json.description':
		'Convert CSV with headers to a JSON array of objects. Supports dynamic type detection for numbers and booleans and custom delimiter options.',
	'tool.csv-to-json.primary_keyword': 'csv to json',
	'tool.csv-to-json.meta_title': 'CSV to JSON Converter — fmtly.dev',
	'tool.csv-to-json.meta_description':
		'Convert CSV to JSON instantly in your browser. Supports headers, dynamic typing, and custom delimiters. No data uploaded.',
	'tool.csv-to-json.operation': 'Convert',
	'tool.csv-to-json.faq.0.question': 'Can I treat the first row as headers?',
	'tool.csv-to-json.faq.0.answer':
		'Yes. The CSV controls let you keep the first row as headers or convert every row as plain column data.',
	'tool.csv-to-json.faq.1.question': 'Does it detect numbers and booleans automatically?',
	'tool.csv-to-json.faq.1.answer':
		'Yes. Numeric and boolean-looking values are inferred during CSV to JSON conversion for cleaner output.',
	'tool.csv-to-json.use_case.0': 'Turn spreadsheet exports into API-ready JSON payloads',
	'tool.csv-to-json.use_case.1': 'Inspect CSV rows as structured objects before further processing',
	'tool.csv-to-json.use_case.2': 'Normalize delimiter-separated data into browser-friendly JSON',
	'tool.csv-to-json.use_case.3': 'Prepare CSV datasets for JSON-based downstream tooling',

	'tool.csv-to-xml.display_name': 'CSV to XML',
	'tool.csv-to-xml.tagline': 'Convert CSV data to XML format',
	'tool.csv-to-xml.description':
		'Convert CSV files to well-formed XML. Maps column headers to element names and generates row elements for each record.',
	'tool.csv-to-xml.primary_keyword': 'csv to xml',
	'tool.csv-to-xml.meta_title': 'CSV to XML Converter — fmtly.dev',
	'tool.csv-to-xml.meta_description':
		'Convert CSV to XML instantly in your browser. Maps headers to element names. No data uploaded.',
	'tool.csv-to-xml.operation': 'Convert',
	'tool.csv-to-xml.faq.0.question': 'How are XML element names chosen?',
	'tool.csv-to-xml.faq.0.answer':
		'When header row mode is enabled, each CSV header becomes an XML child element inside a row node.',
	'tool.csv-to-xml.use_case.0': 'Convert tabular exports into XML fixtures for legacy systems',
	'tool.csv-to-xml.use_case.1': 'Preview how CSV headers map into row-based XML records',

	'tool.csv-to-yaml.display_name': 'CSV to YAML',
	'tool.csv-to-yaml.tagline': 'Convert CSV data to YAML format',
	'tool.csv-to-yaml.description':
		'Convert CSV files to YAML arrays of objects. Maps column headers to YAML keys for each row.',
	'tool.csv-to-yaml.primary_keyword': 'csv to yaml',
	'tool.csv-to-yaml.meta_title': 'CSV to YAML Converter — fmtly.dev',
	'tool.csv-to-yaml.meta_description':
		'Convert CSV to YAML instantly in your browser. No data uploaded.',
	'tool.csv-to-yaml.operation': 'Convert',
	'tool.csv-to-yaml.faq.0.question': 'What does each YAML item represent?',
	'tool.csv-to-yaml.faq.0.answer':
		'Each CSV row becomes one YAML object, and column headers become keys when header mode is enabled.',
	'tool.csv-to-yaml.use_case.0': 'Transform CSV configuration data into readable YAML lists',
	'tool.csv-to-yaml.use_case.1': 'Move spreadsheet-driven settings into YAML-based workflows',

	'tool.csv-to-html.display_name': 'CSV to HTML Table',
	'tool.csv-to-html.tagline': 'Convert CSV data to an HTML table',
	'tool.csv-to-html.description':
		'Convert CSV files to formatted HTML tables. Uses the first row as column headers.',
	'tool.csv-to-html.primary_keyword': 'csv to html table',
	'tool.csv-to-html.meta_title': 'CSV to HTML Table Converter — fmtly.dev',
	'tool.csv-to-html.meta_description':
		'Convert CSV to HTML table instantly in your browser. No data uploaded.',
	'tool.csv-to-html.operation': 'Convert',
	'tool.csv-to-html.faq.0.question': 'Can I preview the rendered table before copying the HTML?',
	'tool.csv-to-html.faq.0.answer':
		'Yes. The output panel includes a preview mode so you can inspect the rendered table as well as the raw HTML.',
	'tool.csv-to-html.use_case.0': 'Generate HTML tables for docs, admin tools, or CMS snippets',
	'tool.csv-to-html.use_case.1': 'Check table structure visually before embedding generated markup',

	'tool.csv-formatter.display_name': 'CSV Formatter',
	'tool.csv-formatter.tagline': 'Format and normalize CSV data',
	'tool.csv-formatter.description':
		'Clean and format CSV data with consistent delimiters, quoting, and line endings. Validates CSV structure and normalizes whitespace.',
	'tool.csv-formatter.primary_keyword': 'csv formatter',
	'tool.csv-formatter.meta_title': 'CSV Formatter — fmtly.dev',
	'tool.csv-formatter.meta_description':
		'Format and clean CSV data in your browser. No data uploaded.',
	'tool.csv-formatter.operation': 'Format',
	'tool.csv-formatter.faq.0.question': 'What can I normalize while formatting?',
	'tool.csv-formatter.faq.0.answer':
		'You can change delimiters, trim cell whitespace, choose whether to keep a header row, skip empty lines, and force quotes around every cell.',
	'tool.csv-formatter.use_case.0':
		'Standardize CSV files before importing them into databases or BI tools',
	'tool.csv-formatter.use_case.1':
		'Clean inconsistent spreadsheet exports without sending data to a server',

	'tool.csv-validator.display_name': 'CSV Validator',
	'tool.csv-validator.tagline': 'Validate CSV structure and syntax',
	'tool.csv-validator.description':
		'Validate CSV files for consistent column counts, proper quoting, and encoding issues. Identifies malformed rows with precise line numbers.',
	'tool.csv-validator.primary_keyword': 'csv validator',
	'tool.csv-validator.meta_title': 'CSV Validator — fmtly.dev',
	'tool.csv-validator.meta_description':
		'Validate CSV in your browser. Detects structure errors with line numbers. No data leaves your device.',
	'tool.csv-validator.operation': 'Validate',
	'tool.csv-validator.faq.0.question': 'What issues does the validator detect?',
	'tool.csv-validator.faq.0.answer':
		'It flags parser errors, empty or duplicate headers, and rows whose column count does not match the rest of the file.',
	'tool.csv-validator.use_case.0': 'Catch malformed CSV before import or conversion',
	'tool.csv-validator.use_case.1': 'Verify header consistency and row width across shared datasets',

	// ── Text tools ──────────────────────────────────────────────────────────
	'tool.text-word-counter.display_name': 'Word Counter',
	'tool.text-word-counter.tagline': 'Count words, characters, and sentences in text',
	'tool.text-word-counter.description':
		'Count words, characters, sentences, and paragraphs in any text. Shows reading time estimates and average word length.',
	'tool.text-word-counter.primary_keyword': 'word counter',
	'tool.text-word-counter.meta_title': 'Word Counter — fmtly.dev',
	'tool.text-word-counter.meta_description':
		'Count words, characters, and sentences in your browser. Includes reading time estimates. No data uploaded.',
	'tool.text-word-counter.operation': 'Count',

	'tool.text-readability.display_name': 'Readability Analyzer',
	'tool.text-readability.tagline': 'Measure text readability scores',
	'tool.text-readability.description':
		'Calculate Flesch-Kincaid, Gunning Fog, and other readability scores for any text. Helps optimize content for your target audience.',
	'tool.text-readability.primary_keyword': 'readability analyzer',
	'tool.text-readability.meta_title': 'Readability Analyzer — fmtly.dev',
	'tool.text-readability.meta_description':
		'Measure text readability in your browser with Flesch-Kincaid and other scores. No data uploaded.',
	'tool.text-readability.operation': 'Analyze',

	'tool.text-line-sorter.display_name': 'Line Sorter',
	'tool.text-line-sorter.tagline': 'Sort text lines alphabetically or by length',
	'tool.text-line-sorter.description':
		'Sort lines alphabetically, numerically, or by length. Supports ascending and descending order and case-insensitive sorting.',
	'tool.text-line-sorter.primary_keyword': 'line sorter',
	'tool.text-line-sorter.meta_title': 'Line Sorter — fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Sort text lines in your browser. Supports alphabetical, numeric, and length-based sorting. No data uploaded.',
	'tool.text-line-sorter.operation': 'Sort',

	'tool.text-deduplicate.display_name': 'Duplicate Line Remover',
	'tool.text-deduplicate.tagline': 'Remove duplicate lines from text',
	'tool.text-deduplicate.description':
		'Remove duplicate lines from any text. Supports case-sensitive and case-insensitive matching and preserves original line order.',
	'tool.text-deduplicate.primary_keyword': 'remove duplicate lines',
	'tool.text-deduplicate.meta_title': 'Duplicate Line Remover — fmtly.dev',
	'tool.text-deduplicate.meta_description':
		'Remove duplicate lines from text in your browser. Case-sensitive and insensitive options. No data uploaded.',
	'tool.text-deduplicate.operation': 'Deduplicate',

	'tool.text-whitespace.display_name': 'Whitespace Cleaner',
	'tool.text-whitespace.tagline': 'Remove extra whitespace and normalize spacing',
	'tool.text-whitespace.description':
		'Remove extra spaces, tabs, and blank lines from text. Normalizes multiple spaces to single spaces and trims leading and trailing whitespace.',
	'tool.text-whitespace.primary_keyword': 'whitespace cleaner',
	'tool.text-whitespace.meta_title': 'Whitespace Cleaner — fmtly.dev',
	'tool.text-whitespace.meta_description':
		'Remove extra whitespace from text in your browser. Normalizes spacing and trims lines. No data uploaded.',
	'tool.text-whitespace.operation': 'Clean',

	'tool.text-markdown-to-html.display_name': 'Markdown to HTML',
	'tool.text-markdown-to-html.tagline': 'Convert Markdown to HTML',
	'tool.text-markdown-to-html.description':
		'Convert Markdown text to HTML. Supports headings, lists, tables, code blocks, links, images, and all CommonMark features.',
	'tool.text-markdown-to-html.primary_keyword': 'markdown to html',
	'tool.text-markdown-to-html.meta_title': 'Markdown to HTML Converter — fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Convert Markdown to HTML instantly in your browser. Supports all CommonMark features. No data uploaded.',
	'tool.text-markdown-to-html.operation': 'Convert',

	'tool.text-html-to-markdown.display_name': 'HTML to Markdown',
	'tool.text-html-to-markdown.tagline': 'Convert HTML to Markdown',
	'tool.text-html-to-markdown.description':
		'Convert HTML to clean Markdown. Handles headings, paragraphs, lists, tables, code blocks, and inline formatting.',
	'tool.text-html-to-markdown.primary_keyword': 'html to markdown',
	'tool.text-html-to-markdown.meta_title': 'HTML to Markdown Converter — fmtly.dev',
	'tool.text-html-to-markdown.meta_description':
		'Convert HTML to Markdown instantly in your browser. No data uploaded.',
	'tool.text-html-to-markdown.operation': 'Convert',

	'tool.text-reverser.display_name': 'Text Reverser',
	'tool.text-reverser.tagline': 'Reverse text, words, or lines',
	'tool.text-reverser.description':
		'Reverse text character by character, word by word, or line by line. Bidirectional — paste in either direction.',
	'tool.text-reverser.primary_keyword': 'text reverser',
	'tool.text-reverser.meta_title': 'Text Reverser — fmtly.dev',
	'tool.text-reverser.meta_description':
		'Reverse text instantly in your browser. Reverse characters, words, or lines. No data uploaded.',
	'tool.text-reverser.operation': 'Reverse',

	// ── Code tools ──────────────────────────────────────────────────────────
	'tool.code-css.display_name': 'CSS Formatter',
	'tool.code-css.tagline': 'Format and beautify CSS stylesheets',
	'tool.code-css.description':
		'Format CSS with consistent indentation and property ordering. Supports Prettier-style formatting with configurable line width.',
	'tool.code-css.primary_keyword': 'css formatter',
	'tool.code-css.meta_title': 'CSS Formatter & Beautifier — fmtly.dev',
	'tool.code-css.meta_description':
		'Format and beautify CSS in your browser. Configurable indentation and property ordering. No data leaves your device.',
	'tool.code-css.operation': 'Format',

	'tool.code-scss.display_name': 'SCSS Formatter',
	'tool.code-scss.tagline': 'Format and beautify SCSS stylesheets',
	'tool.code-scss.description':
		'Format SCSS files with consistent indentation. Supports variables, nested rules, mixins, and all SCSS-specific syntax.',
	'tool.code-scss.primary_keyword': 'scss formatter',
	'tool.code-scss.meta_title': 'SCSS Formatter & Beautifier — fmtly.dev',
	'tool.code-scss.meta_description':
		'Format and beautify SCSS in your browser. No data leaves your device.',
	'tool.code-scss.operation': 'Format',

	'tool.code-less.display_name': 'LESS Formatter',
	'tool.code-less.tagline': 'Format and beautify LESS stylesheets',
	'tool.code-less.description':
		'Format LESS files with consistent indentation. Supports variables, mixins, nesting, and all LESS-specific syntax.',
	'tool.code-less.primary_keyword': 'less formatter',
	'tool.code-less.meta_title': 'LESS Formatter & Beautifier — fmtly.dev',
	'tool.code-less.meta_description':
		'Format and beautify LESS in your browser. No data leaves your device.',
	'tool.code-less.operation': 'Format',

	'tool.code-html.display_name': 'HTML Formatter',
	'tool.code-html.tagline': 'Format and beautify HTML markup',
	'tool.code-html.description':
		'Format HTML with proper indentation and tag nesting. Handles inline and block elements, attributes, and embedded CSS and JavaScript.',
	'tool.code-html.primary_keyword': 'html formatter',
	'tool.code-html.meta_title': 'HTML Formatter & Beautifier — fmtly.dev',
	'tool.code-html.meta_description':
		'Format and beautify HTML in your browser. Proper indentation and tag nesting. No data leaves your device.',
	'tool.code-html.operation': 'Format',

	'tool.code-javascript.display_name': 'JavaScript Formatter',
	'tool.code-javascript.tagline': 'Format and beautify JavaScript code',
	'tool.code-javascript.description':
		'Format JavaScript with Prettier-style formatting. Supports ES2022+, JSX, module syntax, and configurable options like semicolons and single quotes.',
	'tool.code-javascript.primary_keyword': 'javascript formatter',
	'tool.code-javascript.meta_title': 'JavaScript Formatter & Beautifier — fmtly.dev',
	'tool.code-javascript.meta_description':
		'Format and beautify JavaScript in your browser. Supports modern ES syntax. No data leaves your device.',
	'tool.code-javascript.operation': 'Format',

	'tool.code-typescript.display_name': 'TypeScript Formatter',
	'tool.code-typescript.tagline': 'Format and beautify TypeScript code',
	'tool.code-typescript.description':
		'Format TypeScript with Prettier-style formatting. Supports all TypeScript features including generics, decorators, and type annotations.',
	'tool.code-typescript.primary_keyword': 'typescript formatter',
	'tool.code-typescript.meta_title': 'TypeScript Formatter & Beautifier — fmtly.dev',
	'tool.code-typescript.meta_description':
		'Format and beautify TypeScript in your browser. Supports all TypeScript syntax. No data leaves your device.',
	'tool.code-typescript.operation': 'Format',

	'tool.code-graphql.display_name': 'GraphQL Formatter',
	'tool.code-graphql.tagline': 'Format and beautify GraphQL schemas and queries',
	'tool.code-graphql.description':
		'Format GraphQL schemas and queries with consistent indentation. Supports SDL, queries, mutations, subscriptions, and fragments.',
	'tool.code-graphql.primary_keyword': 'graphql formatter',
	'tool.code-graphql.meta_title': 'GraphQL Formatter & Beautifier — fmtly.dev',
	'tool.code-graphql.meta_description':
		'Format and beautify GraphQL in your browser. Supports SDL, queries, and mutations. No data leaves your device.',
	'tool.code-graphql.operation': 'Format',

	'tool.code-markdown.display_name': 'Markdown Formatter',
	'tool.code-markdown.tagline': 'Format and normalize Markdown documents',
	'tool.code-markdown.description':
		'Format Markdown with consistent heading styles, list indentation, and table alignment. Normalizes whitespace and blank lines.',
	'tool.code-markdown.primary_keyword': 'markdown formatter',
	'tool.code-markdown.meta_title': 'Markdown Formatter — fmtly.dev',
	'tool.code-markdown.meta_description':
		'Format and normalize Markdown in your browser. No data leaves your device.',
	'tool.code-markdown.operation': 'Format',

	'tool.code-curl-to-fetch.display_name': 'cURL to Fetch',
	'tool.code-curl-to-fetch.tagline': 'Convert cURL commands to JavaScript fetch()',
	'tool.code-curl-to-fetch.description':
		'Convert cURL commands to native JavaScript fetch() calls. Handles headers, request body, authentication, and all common cURL options.',
	'tool.code-curl-to-fetch.primary_keyword': 'curl to fetch converter',
	'tool.code-curl-to-fetch.meta_title': 'cURL to Fetch Converter — fmtly.dev',
	'tool.code-curl-to-fetch.meta_description':
		'Convert cURL commands to JavaScript fetch() in your browser. Handles headers, body, and auth. No data uploaded.',
	'tool.code-curl-to-fetch.operation': 'Convert',

	'tool.code-curl-to-axios.display_name': 'cURL to Axios',
	'tool.code-curl-to-axios.tagline': 'Convert cURL commands to Axios requests',
	'tool.code-curl-to-axios.description':
		'Convert cURL commands to Axios request calls. Handles headers, request body, authentication, and all common cURL options.',
	'tool.code-curl-to-axios.primary_keyword': 'curl to axios converter',
	'tool.code-curl-to-axios.meta_title': 'cURL to Axios Converter — fmtly.dev',
	'tool.code-curl-to-axios.meta_description':
		'Convert cURL commands to Axios requests in your browser. Handles headers, body, and auth. No data uploaded.',
	'tool.code-curl-to-axios.operation': 'Convert',

	// ── Color tools ──────────────────────────────────────────────────────────
	'tool.color-converter.display_name': 'Color Converter',
	'tool.color-converter.tagline': 'Convert colors between HEX, RGB, HSL, and more',
	'tool.color-converter.description':
		'Convert colors between HEX, RGB, RGBA, HSL, HSLA, and named CSS color formats. Shows a live preview of the selected color.',
	'tool.color-converter.primary_keyword': 'color converter',
	'tool.color-converter.meta_title': 'Color Converter — HEX, RGB, HSL — fmtly.dev',
	'tool.color-converter.meta_description':
		'Convert colors between HEX, RGB, HSL, and CSS named colors in your browser. Live preview included.',
	'tool.color-converter.operation': 'Convert',

	'tool.color-contrast.display_name': 'Color Contrast Checker',
	'tool.color-contrast.tagline': 'Check WCAG contrast ratio between two colors',
	'tool.color-contrast.description':
		'Calculate the contrast ratio between two colors and check WCAG 2.1 AA and AAA accessibility compliance for normal and large text.',
	'tool.color-contrast.primary_keyword': 'color contrast checker',
	'tool.color-contrast.meta_title': 'Color Contrast Checker — WCAG — fmtly.dev',
	'tool.color-contrast.meta_description':
		'Check color contrast ratio for WCAG AA and AAA compliance in your browser.',
	'tool.color-contrast.operation': 'Check',

	// ── Crypto tools ─────────────────────────────────────────────────────────
	'tool.crypto-hmac.display_name': 'HMAC Generator',
	'tool.crypto-hmac.tagline': 'Generate HMAC signatures with SHA algorithms',
	'tool.crypto-hmac.description':
		'Generate HMAC signatures using SHA-256, SHA-384, or SHA-512. Outputs hex or Base64 encoded signatures using the Web Crypto API.',
	'tool.crypto-hmac.primary_keyword': 'hmac generator',
	'tool.crypto-hmac.meta_title': 'HMAC Generator — SHA-256, SHA-512 — fmtly.dev',
	'tool.crypto-hmac.meta_description':
		'Generate HMAC signatures in your browser using the Web Crypto API. Supports SHA-256, SHA-384, and SHA-512.',
	'tool.crypto-hmac.operation': 'Generate',

	'tool.crypto-password-strength.display_name': 'Password Strength Checker',
	'tool.crypto-password-strength.tagline': 'Analyze password strength and entropy',
	'tool.crypto-password-strength.description':
		'Evaluate password strength with entropy calculation, pattern detection, and estimated crack time. No data is ever sent to any server.',
	'tool.crypto-password-strength.primary_keyword': 'password strength checker',
	'tool.crypto-password-strength.meta_title': 'Password Strength Checker — fmtly.dev',
	'tool.crypto-password-strength.meta_description':
		'Check password strength and entropy in your browser. No password is ever transmitted. 100% client-side.',
	'tool.crypto-password-strength.operation': 'Analyze',

	'tool.crypto-ulid.display_name': 'ULID Generator',
	'tool.crypto-ulid.tagline': 'Generate Universally Unique Lexicographically Sortable Identifiers',
	'tool.crypto-ulid.description':
		'Generate ULIDs — time-ordered, URL-safe identifiers that are sortable and collision-resistant. Uses the Web Crypto API for cryptographic randomness.',
	'tool.crypto-ulid.primary_keyword': 'ulid generator',
	'tool.crypto-ulid.meta_title': 'ULID Generator — fmtly.dev',
	'tool.crypto-ulid.meta_description':
		'Generate ULIDs in your browser using the Web Crypto API. Sortable, URL-safe identifiers.',
	'tool.crypto-ulid.operation': 'Generate',

	'tool.crypto-random-string.display_name': 'Random String Generator',
	'tool.crypto-random-string.tagline': 'Generate cryptographically secure random strings',
	'tool.crypto-random-string.description':
		'Generate cryptographically secure random strings with configurable length and character sets. Uses the Web Crypto API for true randomness.',
	'tool.crypto-random-string.primary_keyword': 'random string generator',
	'tool.crypto-random-string.meta_title': 'Random String Generator — fmtly.dev',
	'tool.crypto-random-string.meta_description':
		'Generate secure random strings in your browser using the Web Crypto API. Configurable length and character sets.',
	'tool.crypto-random-string.operation': 'Generate',

	// ── Diff tools ───────────────────────────────────────────────────────────
	'tool.diff-text.display_name': 'Text Diff',
	'tool.diff-text.tagline': 'Compare two text blocks and highlight differences',
	'tool.diff-text.description':
		'Compare two text blocks side by side and highlight added, removed, and unchanged lines. Supports word-level and line-level diff modes.',
	'tool.diff-text.primary_keyword': 'text diff',
	'tool.diff-text.meta_title': 'Text Diff Tool — fmtly.dev',
	'tool.diff-text.meta_description':
		'Compare two text blocks in your browser. Highlights additions and deletions at word or line level. No data uploaded.',
	'tool.diff-text.operation': 'Compare',

	// ── Encode tools ─────────────────────────────────────────────────────────
	'tool.encode-base64.display_name': 'Base64 Encoder / Decoder',
	'tool.encode-base64.tagline': 'Encode and decode Base64 strings',
	'tool.encode-base64.description':
		'Encode text or binary data to Base64 and decode Base64 strings back to text. Supports standard and URL-safe Base64 variants.',
	'tool.encode-base64.primary_keyword': 'base64 encoder decoder',
	'tool.encode-base64.meta_title': 'Base64 Encoder & Decoder — fmtly.dev',
	'tool.encode-base64.meta_description':
		'Encode and decode Base64 in your browser. Supports standard and URL-safe variants. No data uploaded.',
	'tool.encode-base64.operation': 'Encode / Decode',

	'tool.encode-url.display_name': 'URL Encoder / Decoder',
	'tool.encode-url.tagline': 'Encode and decode URL-encoded strings',
	'tool.encode-url.description':
		'Percent-encode URLs and URL components or decode percent-encoded strings. Handles all reserved and special characters per RFC 3986.',
	'tool.encode-url.primary_keyword': 'url encoder decoder',
	'tool.encode-url.meta_title': 'URL Encoder & Decoder — fmtly.dev',
	'tool.encode-url.meta_description':
		'Encode and decode URLs in your browser. Handles all special characters. No data uploaded.',
	'tool.encode-url.operation': 'Encode / Decode',

	'tool.encode-html.display_name': 'HTML Encoder / Decoder',
	'tool.encode-html.tagline': 'Encode and decode HTML entities',
	'tool.encode-html.description':
		'Convert special characters to HTML entities and back. Handles &amp;, &lt;, &gt;, &quot;, and all other HTML special characters.',
	'tool.encode-html.primary_keyword': 'html encoder decoder',
	'tool.encode-html.meta_title': 'HTML Encoder & Decoder — fmtly.dev',
	'tool.encode-html.meta_description':
		'Encode and decode HTML entities in your browser. No data uploaded.',
	'tool.encode-html.operation': 'Encode / Decode',

	'tool.encode-html-entities.display_name': 'HTML Entities Reference',
	'tool.encode-html-entities.tagline': 'Browse and look up HTML entity codes',
	'tool.encode-html-entities.description':
		'Search and browse all HTML entities with their decimal, hex, and named forms. Includes Unicode code points and visual previews.',
	'tool.encode-html-entities.primary_keyword': 'html entities reference',
	'tool.encode-html-entities.meta_title': 'HTML Entities Reference — fmtly.dev',
	'tool.encode-html-entities.meta_description':
		'Browse all HTML entities in your browser. Search by name, decimal, or hex code.',
	'tool.encode-html-entities.operation': 'Lookup',

	'tool.encode-unicode.display_name': 'Unicode Analyzer',
	'tool.encode-unicode.tagline': 'Analyze Unicode code points in text',
	'tool.encode-unicode.description':
		'Decode any text into its Unicode code points with hex, CSS escape, JavaScript escape, and UTF-8 byte representations. Handles emoji and multi-codepoint sequences.',
	'tool.encode-unicode.primary_keyword': 'unicode analyzer',
	'tool.encode-unicode.meta_title': 'Unicode Analyzer — fmtly.dev',
	'tool.encode-unicode.meta_description':
		'Analyze Unicode code points in your browser. Inspect hex, CSS escapes, JS escapes, and UTF-8 bytes.',
	'tool.encode-unicode.operation': 'Analyze',

	// ── Escape tools ─────────────────────────────────────────────────────────
	'tool.escape-json.display_name': 'JSON String Escape',
	'tool.escape-json.tagline': 'Escape and unescape JSON strings',
	'tool.escape-json.description':
		'Escape special characters in strings for use inside JSON values, or unescape JSON string values back to plain text. Handles newlines, tabs, quotes, and backslashes.',
	'tool.escape-json.primary_keyword': 'json escape unescape',
	'tool.escape-json.meta_title': 'JSON String Escape & Unescape — fmtly.dev',
	'tool.escape-json.meta_description':
		'Escape and unescape JSON strings in your browser. No data uploaded.',
	'tool.escape-json.operation': 'Escape / Unescape',

	// ── File tools ───────────────────────────────────────────────────────────
	'tool.file-hash.display_name': 'File Hash Calculator',
	'tool.file-hash.tagline': 'Calculate MD5, SHA-1, SHA-256, and SHA-512 file hashes',
	'tool.file-hash.description':
		'Calculate cryptographic hash values for any file. Supports MD5, SHA-1, SHA-256, and SHA-512 algorithms. Runs entirely in your browser.',
	'tool.file-hash.primary_keyword': 'file hash calculator',
	'tool.file-hash.meta_title': 'File Hash Calculator — MD5 SHA-256 — fmtly.dev',
	'tool.file-hash.meta_description':
		'Calculate file hashes in your browser. Supports MD5, SHA-1, SHA-256, and SHA-512. No file is uploaded to any server.',
	'tool.file-hash.operation': 'Hash',

	// ── Generate tools ───────────────────────────────────────────────────────
	'tool.generate-uuid.display_name': 'UUID Generator',
	'tool.generate-uuid.tagline': 'Generate random UUIDs (v4)',
	'tool.generate-uuid.description':
		'Generate RFC 4122 version 4 UUIDs using the Web Crypto API. Generate single or bulk UUIDs with one click.',
	'tool.generate-uuid.primary_keyword': 'uuid generator',
	'tool.generate-uuid.meta_title': 'UUID Generator — fmtly.dev',
	'tool.generate-uuid.meta_description':
		'Generate random UUIDs in your browser using the Web Crypto API. RFC 4122 v4 compliant.',
	'tool.generate-uuid.operation': 'Generate',

	// ── Image tools ──────────────────────────────────────────────────────────
	'tool.image-compressor.display_name': 'Image Compressor',
	'tool.image-compressor.tagline': 'Compress images without quality loss',
	'tool.image-compressor.description':
		'Compress JPEG, PNG, and WebP images in your browser. Adjust quality settings and preview before downloading. No images are uploaded.',
	'tool.image-compressor.primary_keyword': 'image compressor',
	'tool.image-compressor.meta_title': 'Image Compressor — fmtly.dev',
	'tool.image-compressor.meta_description':
		'Compress images in your browser. Supports JPEG, PNG, and WebP. No images are uploaded to any server.',
	'tool.image-compressor.operation': 'Compress',

	// ── Number tools ─────────────────────────────────────────────────────────
	'tool.number-formatter.display_name': 'Number Formatter',
	'tool.number-formatter.tagline': 'Format numbers with locale-specific separators',
	'tool.number-formatter.description':
		'Format numbers with thousands separators, decimal places, and locale-specific notation. Supports currency formatting and scientific notation.',
	'tool.number-formatter.primary_keyword': 'number formatter',
	'tool.number-formatter.meta_title': 'Number Formatter — fmtly.dev',
	'tool.number-formatter.meta_description':
		'Format numbers with locale separators and currency symbols in your browser.',
	'tool.number-formatter.operation': 'Format',

	'tool.number-roman.display_name': 'Roman Numeral Converter',
	'tool.number-roman.tagline': 'Convert between Roman numerals and integers',
	'tool.number-roman.description':
		'Convert integers to Roman numerals and back. Supports numbers from 1 to 3999 with standard Roman numeral notation.',
	'tool.number-roman.primary_keyword': 'roman numeral converter',
	'tool.number-roman.meta_title': 'Roman Numeral Converter — fmtly.dev',
	'tool.number-roman.meta_description':
		'Convert between Roman numerals and integers in your browser.',
	'tool.number-roman.operation': 'Convert',

	'tool.number-percentage.display_name': 'Percentage Calculator',
	'tool.number-percentage.tagline': 'Calculate percentages, increases, and decreases',
	'tool.number-percentage.description':
		'Calculate percentage values, percentage change, and percentage of totals. Supports increase/decrease calculations and reverse percentage lookups.',
	'tool.number-percentage.primary_keyword': 'percentage calculator',
	'tool.number-percentage.meta_title': 'Percentage Calculator — fmtly.dev',
	'tool.number-percentage.meta_description':
		'Calculate percentages and percentage change in your browser.',
	'tool.number-percentage.operation': 'Calculate',

	'tool.number-scientific.display_name': 'Scientific Notation Converter',
	'tool.number-scientific.tagline': 'Convert numbers to and from scientific notation',
	'tool.number-scientific.description':
		'Convert numbers to scientific notation and back. Shows mantissa, exponent, and equivalent engineering notation.',
	'tool.number-scientific.primary_keyword': 'scientific notation converter',
	'tool.number-scientific.meta_title': 'Scientific Notation Converter — fmtly.dev',
	'tool.number-scientific.meta_description':
		'Convert numbers to scientific notation in your browser.',
	'tool.number-scientific.operation': 'Convert',

	'tool.number-statistics.display_name': 'Statistics Calculator',
	'tool.number-statistics.tagline': 'Calculate mean, median, mode, and more',
	'tool.number-statistics.description':
		'Calculate descriptive statistics for a list of numbers: mean, median, mode, standard deviation, variance, min, max, and quartiles.',
	'tool.number-statistics.primary_keyword': 'statistics calculator',
	'tool.number-statistics.meta_title': 'Statistics Calculator — fmtly.dev',
	'tool.number-statistics.meta_description':
		'Calculate mean, median, standard deviation, and more in your browser.',
	'tool.number-statistics.operation': 'Calculate',

	'tool.number-matrix.display_name': 'Matrix Calculator',
	'tool.number-matrix.tagline': 'Perform matrix operations and calculations',
	'tool.number-matrix.description':
		'Perform matrix operations including addition, subtraction, multiplication, transpose, determinant, and inverse on matrices of any size.',
	'tool.number-matrix.primary_keyword': 'matrix calculator',
	'tool.number-matrix.meta_title': 'Matrix Calculator — fmtly.dev',
	'tool.number-matrix.meta_description':
		'Perform matrix operations in your browser. Supports addition, multiplication, inverse, and more.',
	'tool.number-matrix.operation': 'Calculate',

	'tool.number-unit-converter.display_name': 'Unit Converter',
	'tool.number-unit-converter.tagline': 'Convert between units of measurement',
	'tool.number-unit-converter.description':
		'Convert between units of length, weight, temperature, volume, area, speed, and more. Supports metric and imperial systems.',
	'tool.number-unit-converter.primary_keyword': 'unit converter',
	'tool.number-unit-converter.meta_title': 'Unit Converter — fmtly.dev',
	'tool.number-unit-converter.meta_description':
		'Convert between units of measurement in your browser. Supports length, weight, temperature, and more.',
	'tool.number-unit-converter.operation': 'Convert',

	// ── PDF tools ─────────────────────────────────────────────────────────────
	'tool.pdf-viewer.display_name': 'PDF Viewer',
	'tool.pdf-viewer.tagline': 'View and extract text from PDF files',
	'tool.pdf-viewer.description':
		'View PDF files in your browser and extract text content. Supports multi-page PDFs and text selection. No files are uploaded to any server.',
	'tool.pdf-viewer.primary_keyword': 'pdf viewer',
	'tool.pdf-viewer.meta_title': 'PDF Viewer — fmtly.dev',
	'tool.pdf-viewer.meta_description':
		'View PDF files in your browser. Extract text from any PDF. No files uploaded.',
	'tool.pdf-viewer.operation': 'View',

	// ── QR tools ──────────────────────────────────────────────────────────────
	'tool.qr-generator.display_name': 'QR Code Generator',
	'tool.qr-generator.tagline': 'Generate customizable QR codes',
	'tool.qr-generator.description':
		'Generate QR codes from text, URLs, contact info, and more. Customize size, error correction level, and colors. Download as PNG or SVG.',
	'tool.qr-generator.primary_keyword': 'qr code generator',
	'tool.qr-generator.meta_title': 'QR Code Generator — fmtly.dev',
	'tool.qr-generator.meta_description':
		'Generate customizable QR codes in your browser. Download as PNG or SVG.',
	'tool.qr-generator.operation': 'Generate',

	// ── TOML tools ────────────────────────────────────────────────────────────
	'tool.toml-formatter.display_name': 'TOML Formatter',
	'tool.toml-formatter.tagline': 'Format and validate TOML configuration files',
	'tool.toml-formatter.description':
		'Format TOML files with consistent spacing and section organization. Validates TOML syntax and highlights errors with line numbers.',
	'tool.toml-formatter.primary_keyword': 'toml formatter',
	'tool.toml-formatter.meta_title': 'TOML Formatter — fmtly.dev',
	'tool.toml-formatter.meta_description':
		'Format and validate TOML in your browser. No data leaves your device.',
	'tool.toml-formatter.operation': 'Format',

	// ── Web tools ─────────────────────────────────────────────────────────────
	'tool.web-url-parser.display_name': 'URL Parser',
	'tool.web-url-parser.tagline': 'Parse and inspect URL components',
	'tool.web-url-parser.description':
		'Break down URLs into their components: protocol, host, port, path, query parameters, and fragment. Parse and inspect any URL.',
	'tool.web-url-parser.primary_keyword': 'url parser',
	'tool.web-url-parser.meta_title': 'URL Parser — fmtly.dev',
	'tool.web-url-parser.meta_description':
		'Parse and inspect URL components in your browser. Breaks down any URL into its parts.',
	'tool.web-url-parser.operation': 'Parse',

	'tool.web-user-agent.display_name': 'User-Agent Parser',
	'tool.web-user-agent.tagline': 'Parse and decode User-Agent strings',
	'tool.web-user-agent.description':
		'Parse User-Agent strings to identify browser, engine, OS, and device type. Supports modern and legacy browser formats.',
	'tool.web-user-agent.primary_keyword': 'user agent parser',
	'tool.web-user-agent.meta_title': 'User-Agent Parser — fmtly.dev',
	'tool.web-user-agent.meta_description':
		'Parse User-Agent strings in your browser. Identifies browser, OS, and device.',
	'tool.web-user-agent.operation': 'Parse',

	'tool.web-cors.display_name': 'CORS Header Checker',
	'tool.web-cors.tagline': 'Inspect and understand CORS headers',
	'tool.web-cors.description':
		'Look up and explain CORS headers. Understand Access-Control-Allow-Origin, credentials, preflight, and other CORS directives.',
	'tool.web-cors.primary_keyword': 'cors header checker',
	'tool.web-cors.meta_title': 'CORS Header Checker — fmtly.dev',
	'tool.web-cors.meta_description':
		'Inspect CORS headers in your browser. Understand all Access-Control directives.',
	'tool.web-cors.operation': 'Check',

	'tool.web-mime-types.display_name': 'MIME Type Lookup',
	'tool.web-mime-types.tagline': 'Look up MIME types by extension or name',
	'tool.web-mime-types.description':
		'Search MIME types by file extension, name, or content type. Covers all IANA-registered MIME types with examples.',
	'tool.web-mime-types.primary_keyword': 'mime type lookup',
	'tool.web-mime-types.meta_title': 'MIME Type Lookup — fmtly.dev',
	'tool.web-mime-types.meta_description': 'Look up MIME types by file extension in your browser.',
	'tool.web-mime-types.operation': 'Lookup',

	'tool.web-ip-lookup.display_name': 'IP Lookup',
	'tool.web-ip-lookup.tagline': 'Look up geolocation and info for IP addresses',
	'tool.web-ip-lookup.description':
		'Look up geolocation, ASN, and provider information for any IP address. Supports IPv4 and IPv6 addresses.',
	'tool.web-ip-lookup.primary_keyword': 'ip lookup',
	'tool.web-ip-lookup.meta_title': 'IP Lookup — fmtly.dev',
	'tool.web-ip-lookup.meta_description':
		'Look up IP address geolocation and provider info in your browser.',
	'tool.web-ip-lookup.operation': 'Lookup',

	'tool.web-dns-lookup.display_name': 'DNS Lookup',
	'tool.web-dns-lookup.tagline': 'Query DNS records for any domain',
	'tool.web-dns-lookup.description':
		"Query A, AAAA, MX, TXT, CNAME, NS, and other DNS record types for any domain. Uses the browser's DNS over HTTPS.",
	'tool.web-dns-lookup.primary_keyword': 'dns lookup',
	'tool.web-dns-lookup.meta_title': 'DNS Lookup — fmtly.dev',
	'tool.web-dns-lookup.meta_description': 'Query DNS records for any domain in your browser.',
	'tool.web-dns-lookup.operation': 'Lookup',

	// ── Accessibility tools ─────────────────────────────────────────────────────
	'tool.accessibility-contrast.display_name': 'Contrast Checker',
	'tool.accessibility-contrast.tagline':
		'Check WCAG contrast ratios for text and background colors',
	'tool.accessibility-contrast.description':
		'Enter foreground and background colors to calculate contrast ratio. See WCAG AA/AAA compliance for normal text, large text, and UI elements. Live preview included.',
	'tool.accessibility-contrast.primary_keyword': 'wcag contrast checker',
	'tool.accessibility-contrast.meta_title': 'WCAG Contrast Checker — fmtly.dev',
	'tool.accessibility-contrast.meta_description':
		'Check WCAG color contrast ratios in your browser. Live preview, AA/AAA compliance. No data leaves your device.',
	'tool.accessibility-contrast.operation': 'Check',
	'tool.accessibility-contrast.faq.0.question': 'What contrast ratio is required?',
	'tool.accessibility-contrast.faq.0.answer':
		'WCAG AA requires 4.5:1 for normal text and 3:1 for large text. AAA requires 7:1 and 4.5:1 respectively.',
	'tool.accessibility-contrast.use_case.0': 'Verifying accessibility of website text',
	'tool.accessibility-contrast.use_case.1': 'Choosing accessible color combinations',

	'tool.accessibility-color-blindness.display_name': 'Color Blindness Simulator',
	'tool.accessibility-color-blindness.tagline':
		'Simulate how colors appear to people with color vision deficiencies',
	'tool.accessibility-color-blindness.description':
		'Enter a color or upload an image to see how it appears to people with protanopia, deuteranopia, tritanopia, and achromatopsia. Uses color transformation matrices.',
	'tool.accessibility-color-blindness.primary_keyword': 'color blindness simulator',
	'tool.accessibility-color-blindness.meta_title': 'Color Blindness Simulator — fmtly.dev',
	'tool.accessibility-color-blindness.meta_description':
		'Simulate protanopia, deuteranopia, tritanopia vision in your browser. Test colors and images. No data uploaded.',
	'tool.accessibility-color-blindness.operation': 'Simulate',
	'tool.accessibility-color-blindness.faq.0.question':
		'What types of color blindness are simulated?',
	'tool.accessibility-color-blindness.faq.0.answer':
		'Protanopia (no red), deuteranopia (no green), tritanopia (no blue), and achromatopsia (no color).',
	'tool.accessibility-color-blindness.use_case.0':
		'Testing UI designs for color blindness accessibility',
	'tool.accessibility-color-blindness.use_case.1': 'Checking color palette inclusivity',

	'tool.accessibility-font-size.display_name': 'Font Size Checker',
	'tool.accessibility-font-size.tagline': 'Check if text meets WCAG size and contrast requirements',
	'tool.accessibility-font-size.description':
		'Enter font size, weight, and colors to get a combined WCAG report. See if text qualifies as "large text" and what contrast ratio is required.',
	'tool.accessibility-font-size.primary_keyword': 'wcag font size checker',
	'tool.accessibility-font-size.meta_title': 'WCAG Font Size Checker — fmtly.dev',
	'tool.accessibility-font-size.meta_description':
		'Check WCAG font size requirements in your browser. Large text classification, contrast requirements. No data uploaded.',
	'tool.accessibility-font-size.operation': 'Check',
	'tool.accessibility-font-size.faq.0.question': 'What is large text in WCAG?',
	'tool.accessibility-font-size.faq.0.answer':
		'Text ≥18pt (24px) or ≥14pt (18.66px) bold is considered large text, requiring lower contrast ratios.',
	'tool.accessibility-font-size.use_case.0': 'Checking accessibility of text styling',
	'tool.accessibility-font-size.use_case.1':
		'Determining WCAG requirements for different font sizes',

	// ── UI strings ────────────────────────────────────────────────────────────
	'ui.actions.choose_sample': 'Choose…',
	'ui.actions.clear': 'Clear',
	'ui.actions.copied': 'Copied',
	'ui.actions.copy': 'Copy',
	'ui.actions.copy_all': 'Copy all',
	'ui.actions.download': 'Download',
	'ui.actions.fetch': 'Fetch',
	'ui.actions.format': 'Format',
	'ui.actions.load_url': 'Load URL',
	'ui.actions.minify': 'Minify',
	'ui.actions.run': 'Run',
	'ui.actions.running': 'Running…',
	'ui.actions.sample': 'Sample',
	'ui.actions.search': 'Search',
	'ui.actions.diff': 'Diff',
	'ui.actions.share': 'Share',
	'ui.layout.tabs.output': 'Output',
	'ui.layout.tabs.tree': 'Tree',
	'ui.layout.placeholders.input': 'Input',
	'ui.layout.placeholders.output': 'Output',
	'ui.layout.placeholders.output_empty': 'Output will appear here',
	'ui.layout.placeholders.tree_empty': 'Tree view',
	'ui.layout.placeholders.paste_original': 'Paste original here…',
	'ui.layout.placeholders.paste_modified': 'Paste modified here…',
	'ui.diff.labels.original': 'Original',
	'ui.diff.labels.modified': 'Modified',
	'ui.diff.labels.input_panel': 'Diff input panel',
	'ui.diff.controls.ignore_order': 'Ignore array order',
	'ui.diff.controls.only_diffs': 'Show only diffs',
	'ui.diff.controls.case_sensitive': 'Case sensitive',
	'ui.diff.controls.ignore_keys_placeholder': 'Ignore keys: id, timestamp…',
	'ui.diff.controls.swap': 'Swap',
	'ui.diff.controls.export': 'Export',
	'ui.diff.controls.copy_patch': 'Copy as JSON Patch',
	'ui.diff.controls.export_md': 'Download Markdown report',
	'ui.diff.controls.export_csv': 'Download CSV',
	'ui.diff.view.list': 'List view',
	'ui.diff.view.monaco': 'Inline diff view',
	'ui.diff.view.inline_toggle': 'Toggle inline / side-by-side',
	'ui.diff.summary.added': 'added',
	'ui.diff.summary.removed': 'removed',
	'ui.diff.summary.modified': 'modified',
	'ui.diff.summary.similar': 'similar',
	'ui.diff.summary.empty': 'Enter {language} in both panels to compare',
	'ui.diff.summary.identical': 'Documents are identical',
	'ui.diff.summary.difference': 'difference',
	'ui.diff.summary.differences': 'differences',
	'ui.diff.summary.found': 'found',
	'ui.diff.filter.placeholder': 'Filter by path…',
	'ui.diff.types.root': '(root)',
	'ui.diff.types.added': 'Added',
	'ui.diff.types.removed': 'Removed',
	'ui.diff.types.modified': 'Modified',
	'ui.diff.types.unchanged': 'Unchanged',
	'ui.diff.actions.format': 'Format',
	'ui.diff.actions.copy_value': 'Copy value',
	'ui.diff.actions.collapse': 'Collapse',
	'ui.diff.actions.expand': 'Expand',
	'ui.diff.toast.format_error': 'Cannot format — invalid {language}',
	'ui.diff.error.invalid_left': 'Invalid {language} in left (Original) input',
	'ui.diff.error.invalid_right': 'Invalid {language} in right (Modified) input',
	'ui.diff.toast.patch_success': 'JSON Patch copied to clipboard',
	'ui.diff.toast.copy_value': 'Value copied',
	'ui.diff.toast.share_copied': 'Share link copied to clipboard',
	'ui.diff.meta.chars': 'chars',
	'ui.diff.empty.hint': 'Paste {language} in both panels above to compare them.',
	'ui.diff.report.title': '{language} Diff Report',
	'ui.diff.empty.load_sample': 'Load sample data',
	'ui.layout.placeholders.modified': 'Modified',
	'ui.layout.aria.input_panel': 'Input panel',
	'ui.layout.aria.output_panel': 'Output panel',
	'ui.layout.aria.copy_output': 'Copy output',
	'ui.layout.aria.download_output': 'Download output',
	'tool.output_placeholder': 'Output will appear here',
	'ui.actions.upload': 'Upload',
	'ui.actions.validate': 'Validate',
	'ui.actions.wrap': 'Wrap',
	'ui.confirm.clear': 'Clear the current {language} input?',
	'ui.confirm.clear_description': 'This action cannot be undone.',
	'ui.drop_files': 'Drop .{extension} files',
	'ui.drop_to_load': 'Drop to load',
	'ui.history.clear_all': 'Clear History',
	'ui.history.clear_confirm': 'Clear all history?',
	'ui.history.clear_description': 'This action cannot be undone.',
	'ui.history.empty': 'No history yet',
	'ui.history.recent': 'Recently Used',
	'ui.history.title': 'History',
	'ui.paste_here': 'Paste here…',
	'ui.paste_language_here': 'Paste {language} here…',
	'ui.placeholder.original_yaml': 'Paste original YAML here…',
	'ui.placeholder.modified_yaml': 'Paste modified YAML here…',
	'ui.placeholder.search_tools_count': 'Search {count}+ tools...',
	'ui.placeholder.url': 'https://example.com/data.json',
	'ui.placeholder.xpath': '//book[@available=\x27true\x27]',
	'ui.related_categories': 'Related Categories',
	'ui.stats.info': '{encoding} · {size} · {lines} lines · depth: {depth}',
	'ui.toast.copy_error': 'Copy failed — check browser permissions',
	'ui.toast.copy_success': 'Copied to clipboard',
	'ui.toast.input_cleared': 'Input cleared',
	'ui.loaded_sample': 'Loaded {label}',
	'ui.toast.url_error': 'Could not fetch — try pasting directly',
	'ui.json_viewer.toast_copy_path': 'Copied',
	'ui.tree.toast_copy_path': 'Copied',
	'ui.tree.toast.copied_path': 'Copied',
	'ui.toast.url_loaded': 'Loaded from URL',
	'share.link_size': 'Link size',
	'share.large_link_warning': 'This link is large and may not work in all browsers',
	'share.data_encoded_note':
		'The data is encoded in the URL and is never sent to any server for processing.',
	'share.enter_input_first': 'Enter some input first to generate a share link.',
	'ui.share_url_copied': 'Share URL copied',
	'ui.copied': 'Copied',
	'ui.copy_link': 'Copy Link',
	'ui.share': 'Share',
	'ui.close': 'Close',
	'ui.cancel': 'Cancel',
	'ui.confirm': 'Confirm',
	'ui.tool_count.one': '1 tool',
	'ui.tool_count.other': '{count} tools',
	'ui.tree.collapse': 'Collapse',
	'ui.tree.expand': 'Expand',
	'ui.tree.root': 'Tree',
	'ui.tree.summary': '{keyCount} keys · {valueCount} values · depth {maxDepth}',
	'ui.validity.empty': 'Empty',
	'ui.validity.error_at': 'Line {line}, Col {column}: {message}',
	'ui.validity.invalid': 'Invalid {language}',
	'ui.validity.valid': 'Valid {language}',
	'ui.xpath.no_results': 'No results. Try a different expression or check the XML structure.',
	'ui.xpath.placeholder': 'Paste XML in the left panel, then run an XPath expression.',
	'ui.xpath.results_count.one': '1 result',
	'ui.xpath.results_count.other': '{count} results',
	'ui.validator.syntax': 'Syntax',
	'ui.validator.schema': 'Schema',
	'ui.validator.mode': 'Validator mode',
	'ui.validator.issue': 'issue',
	'ui.validator.issues': 'issues',
	'ui.validator.row': 'Row',
	'ui.validator.warning': 'warning',
	'ui.validator.warnings': 'warnings',
	'ui.validator.first_issue': 'First issue',
	'ui.validator.repair_json': 'Repair JSON',
	'ui.validator.schema_title': 'JSON Schema',
	'ui.validator.schema_standard': 'Draft-07+ via AJV',
	'ui.validator.paste_schema_placeholder': 'Paste JSON Schema here…',
	'ui.validator.paste_json': 'Paste JSON to validate',
	'ui.validator.paste_schema': 'Paste a JSON Schema to validate against',
	'ui.validator.validating_schema': 'Validating schema…',
	'ui.validator.schema_invalid': 'Schema is invalid',
	'ui.validator.json_matches_schema': 'JSON matches schema',
	'ui.validator.schema_validation_failed': 'Schema validation failed',
	'ui.validator.no_syntax_errors': 'No syntax errors found.',
	'ui.validator.json_matches_current_schema': 'JSON matches the current schema.',
	'ui.validator.schema_match': 'Schema match',
	'ui.validator.valid_json': 'Valid JSON',
	'ui.validator.explanation_must_satisfy': 'must satisfy',
	'ui.validator.data_error_pos': 'Data error at line {line}, column {column}',
	'ui.validator.paste_yaml': 'Paste YAML to validate',
	'ui.validator.yaml_paste_schema': 'Paste a schema to validate against',
	'ui.validator.yaml_validating_schema': 'Validating schema…',
	'ui.validator.yaml_matches_schema': 'YAML matches schema',
	'ui.validator.yaml_matches_current_schema': 'YAML matches the current schema.',
	'ui.validator.yaml_schema_title': 'Schema',
	'ui.validator.yaml_schema_standard': 'JSON Schema Draft-07+ via AJV',
	'ui.validator.yaml_paste_schema_placeholder': 'Paste JSON Schema or YAML schema here…',
	'ui.validator.yaml_schema_validation_desc':
		'Validate YAML structure against a JSON Schema. Schema input can be written in JSON or YAML.',
	'ui.load_sample': 'Load a sample',
	'ui.share_url': 'Share URL',
	'ui.format_xml': 'Format XML',
	'ui.format_yaml': 'Format YAML',
	'ui.minify_xml': 'Minify XML',
	'ui.format_beautify': 'Format / Beautify',
	'ui.minify': 'Minify',
	'ui.repair_json': 'Repair JSON',
	'ui.expand_all': 'Expand all',
	'ui.collapse_all': 'Collapse all',
	'ui.expand_to_depth': 'Expand to depth {depth}',
	switch_to_tab: 'Switch to tab {index}',
	switch_to_xml_tab: 'Switch to XML tab {index}',
	switch_to_yaml_tab: 'Switch to YAML tab {index}',
	use_cases: 'Use Cases',
	faq: 'FAQ',
	'ui.validator.schema_error_pos': 'Schema error at line {line}, column {column}',
	'ui.validator.syntax_error_pos': 'Syntax error at line {line}, column {column}',
	'ui.validator.line_col_label': 'Line {line}, column {column}',
	'ui.validator.well_formed': 'Well-formed',
	'ui.validator.invalid_xml': 'Invalid XML',
	'ui.validator.loading_editor': 'Loading editor…',
	'ui.validator.xml_paste_hint': 'Paste or type XML to validate it.',
	'ui.validator.xml_validation_desc':
		'Validates well-formedness: unclosed tags, mismatched elements, invalid characters, and more.',
	'ui.validator.xml_success_title': 'Well-formed XML',
	'ui.validator.xml_success_desc':
		'No syntax errors detected. The document is well-formed and can be parsed by any XML processor.',
	'ui.validator.error_count.one': '1 error found',
	'ui.validator.error_count.other': '{count} errors found',
	'ui.toast.file_loaded': 'File loaded: {name}',
	'ui.toast.clipboard_xml': 'Clipboard XML',
	'ui.toast.pasted_xml': 'Pasted XML from clipboard',
	'ui.toast.xml_file_types': 'Only .xml, .svg, .xhtml, .xsd, .wsdl, and .txt files are supported',
	'ui.aria.xml_input_panel': 'XML input panel',
	'ui.aria.xml_output_panel': 'XML output panel',
	'ui.aria.xml_workspace_tabs': 'XML workspace tabs',
	'ui.aria.xpath_panel': 'XPath query panel',
	'ui.aria.xml_validator': 'XML validator',
	'ui.aria.yaml_output_panel': 'YAML output panel',
	'ui.aria.yaml_validator': 'YAML validator',
	'ui.aria.csv_validator': 'CSV validator',
	'ui.csv.controls.delimiter': 'Delimiter',
	'ui.csv.controls.header_row': 'Header row',
	'ui.csv.controls.skip_empty_lines': 'Skip empty lines',
	'ui.csv.controls.trim_cells': 'Trim cells',
	'ui.csv.controls.quote_all': 'Quote all cells',
	'ui.csv.delimiter.comma': 'Comma (,)',
	'ui.csv.delimiter.semicolon': 'Semicolon (;)',
	'ui.csv.delimiter.tab': 'Tab',
	'ui.csv.delimiter.pipe': 'Pipe (|)',
	'ui.csv.view.preview': 'Preview',
	'ui.csv.view.raw': 'Raw',
	'ui.csv.stats.rows': 'rows',
	'ui.csv.stats.columns': 'columns',
	'ui.csv.preview.column_name': 'Column {index}',
	'ui.csv.preview.no_rows': 'No data rows to preview',
	'ui.csv.preview.delimiter': 'delimiter',
	'ui.csv.preview.header_mode': 'header',
	'ui.csv.preview.no_header': 'Generated columns',
	'ui.csv.preview.remaining_rows': 'Showing {count} more rows in preview only',
	'ui.csv.empty.title': 'Paste CSV to get started',
	'ui.csv.empty.desc': 'Format, validate, preview, or convert CSV data entirely in your browser.',
	'ui.csv.empty.waiting_title': 'Waiting for CSV output',
	'ui.csv.empty.waiting_desc':
		'Parsed rows, formatted output, or converted results will appear here.',
	'ui.validator.invalid_yaml': 'Invalid YAML',
	'ui.validator.invalid_csv': 'Invalid CSV',
	'ui.validator.csv_paste_hint': 'Paste or type CSV to validate it.',
	'ui.validator.csv_validation_desc':
		'Validates delimiter structure, row consistency, and malformed quoting in CSV input.',
	'ui.validator.csv_error.header_empty': 'Header column {column} is empty',
	'ui.validator.csv_error.duplicate_header': 'Duplicate header "{value}" found',
	'ui.validator.csv_error.row_width':
		'Row {row} has {actual} columns but expected {expected}',
	'ui.validator.csv_success_title': 'Valid CSV',
	'ui.validator.csv_success_desc':
		'No structural CSV errors were detected. The document can be parsed successfully.',
	'ui.validator.csv_paste_schema': 'Paste a schema to validate against',
	'ui.validator.csv_paste_schema_data': 'Paste CSV to validate',
	'ui.validator.csv_validating_schema': 'Validating schema…',
	'ui.validator.csv_matches_schema': 'CSV matches schema',
	'ui.validator.csv_matches_current_schema': 'CSV rows match the current schema.',
	'ui.validator.csv_schema_title': 'Schema',
	'ui.validator.csv_schema_standard': 'JSON Schema Draft-07+ via AJV',
	'ui.validator.csv_paste_schema_placeholder': 'Paste JSON Schema or YAML schema here…',
	'ui.validator.csv_schema_validation_desc':
		'Validate CSV rows against a browser-side schema. Each parsed row is validated as an object using the current CSV options.',
	'ui.validator.yaml_paste_hint': 'Paste or type YAML to validate it.',
	'ui.validator.yaml_validation_desc':
		'Validates YAML syntax, indentation, invalid characters, and malformed structures.',
	'ui.validator.yaml_success_title': 'Valid YAML',
	'ui.validator.yaml_success_desc':
		'No syntax errors detected. The document can be parsed successfully as YAML.',
	'ui.validator.yaml_warning_title': 'Valid YAML with style warnings',
	'ui.validator.yaml_warning_desc':
		'The document parses successfully, but a few style issues may reduce readability or consistency.',
	'ui.validator.yaml_lint.tabs':
		'Tabs found in indentation. YAML is usually safer with spaces only.',
	'ui.validator.yaml_lint.trailing_whitespace': 'Trailing whitespace found.',
	'ui.validator.yaml_lint.odd_indentation':
		'Odd indentation width found. YAML is usually more consistent with 2-space indentation.',
	'ui.convert.to_json': '→ JSON',
	'ui.convert.to_yaml': '→ YAML',
	'ui.convert.to_csv': '→ CSV',
	'ui.convert.to_xml': '→ XML',
	'ui.convert.to_html': '→ HTML',
	'ui.convert.to_toml': '→ TOML',
	'ui.convert.to_markdown': '→ MD',
	'ui.query.jsonpath': 'JSONPath',
	'ui.query.jmespath': 'JMESPath',
	'ui.query.xpath': 'XPath',
	'ui.query.stats.chars': 'chars',
	'ui.query.stats.lines': 'lines',
	'ui.query.result': 'result',
	'ui.query.results': 'results',
	'ui.query.history': 'History',
	'ui.query.sample_query': 'Sample query',
	'ui.query.guide': 'Guide',
	'ui.query.query': 'Query',
	'ui.query.mode': 'Query mode',
	'ui.query.running': 'Running query…',
	'ui.query.empty_input': 'Paste JSON on the left to evaluate your query.',
	'ui.query.empty_input_yaml': 'Paste YAML on the left to evaluate your query.',
	'ui.query.empty_query': 'Enter a query to see results.',
	'ui.query.error_fallback': 'Query failed',
	'ui.query.copy_error': 'Could not copy output',
	'ui.aria.json_query_panel': 'JSON query panel',
	'ui.aria.yaml_query_panel': 'YAML query panel',
	'ui.status.processing': 'Processing…',
	'ui.status.waiting_output': 'Output will appear here',
	'ui.output.controls.spaces': 'spaces',
	'ui.output.stats.chars': 'chars',
	'ui.output.stats.lines': 'lines',
	'ui.output.stats.documents': 'documents',
	'ui.output.stats.top_level_keys': 'top-level keys',
	'ui.output.stats.keys': 'keys',
	'ui.output.stats.objects': 'objects',
	'ui.output.stats.arrays': 'arrays',
	'ui.output.stats.strings': 'strings',
	'ui.output.stats.values': 'values',
	'ui.output.stats.numbers': 'numbers',
	'ui.output.stats.booleans': 'booleans',
	'ui.output.stats.nulls': 'nulls',
	'ui.output.stats.depth': 'depth',
	'ui.output.stats.size_in': 'in',
	'ui.output.stats.size_out': 'out',
	'ui.output.original': 'Original',
	'ui.command_palette.title': 'Command palette',
	'ui.command_palette.placeholder': 'Search tools, categories, and formats…',
	'ui.command_palette.recent': 'Recent',
	'ui.command_palette.no_results': 'No matching tools found',
	'ui.command_palette.hint_navigate': 'Navigate',
	'ui.command_palette.hint_open': 'Open',
	'ui.command_palette.hint_close': 'Close',
	'ui.output.minified': 'Minified',
	'ui.output.saved': 'saved',
	'ui.output.meta.minified': 'MINIFIED',
	'ui.output.actions.wrap': 'Wrap',
	'ui.output.actions.compare': 'Compare',
	'ui.output.actions.copy_json': 'Copy as JSON',
	'ui.output.actions.copy_js': 'Copy as JS Object',
	'ui.output.actions.copy_python': 'Copy as Python Dict',
	'ui.output.actions.copy_escaped': 'Copy escaped',
	'ui.output.actions.copy': 'Copy',
	'ui.output.actions.download': 'Download',
	'ui.output.compare.input': 'Input',
	'ui.output.compare.output': 'Output',
	'ui.output.error.invalid_title': 'Invalid JSON',
	'ui.output.controls.indent': 'Indent',
	'ui.output.controls.tab': 'Tab',
	'ui.output.controls.sort_keys': 'Sort keys',
	'ui.output.controls.clean': 'Clean',
	'ui.output.controls.clean_nulls': 'Remove null values',
	'ui.output.controls.clean_strings': 'Remove empty strings',
	'ui.output.controls.clean_arrays': 'Remove empty arrays',
	'ui.output.controls.clean_objects': 'Remove empty objects',
	'ui.output.controls.apply': 'Apply',

	// ── Tool FAQs and Use Cases ──────────────────────────────────────────
	'tool.json-formatter.faq.0.question': 'What is JSON formatting?',
	'tool.json-formatter.faq.0.answer':
		'JSON formatting is the process of organizing JSON data with proper indentation and line breaks to make it more readable and easier to understand.',
	'tool.json-formatter.faq.1.question': 'Can I customize the indentation?',
	'tool.json-formatter.faq.1.answer':
		'Yes! You can choose between 2 spaces, 4 spaces, or tabs for indentation. The formatter preserves your original data structure while applying your preferred formatting.',
	'tool.json-formatter.faq.2.question': 'Does this tool modify my data?',
	'tool.json-formatter.faq.2.answer':
		'No. The formatter only changes the visual presentation of your JSON by adding proper indentation and line breaks. The actual data, keys, and values remain exactly the same.',
	'tool.json-formatter.faq.3.question': 'Can I sort JSON keys?',
	'tool.json-formatter.faq.3.answer':
		'Yes! Enable the "Sort keys" option to alphabetically sort all keys in objects. This is useful for comparing JSON files or maintaining consistent ordering.',
	'tool.json-formatter.use_case.0':
		'Debugging API responses by formatting them for better readability',
	'tool.json-formatter.use_case.1': 'Cleaning up minified JSON files from web sources',
	'tool.json-formatter.use_case.2':
		'Preparing configuration files for version control with consistent formatting',
	'tool.json-formatter.use_case.3':
		'Making JSON data more presentable for documentation or presentations',
	'tool.json-formatter.use_case.4':
		'Validating and formatting JSON before manual editing or review',

	'tool.json-validator.faq.0.question': 'What does JSON validation check for?',
	'tool.json-validator.faq.0.answer':
		'JSON validation checks for syntax errors including missing brackets, unmatched quotes, trailing commas, invalid escape sequences, and duplicate keys in objects.',
	'tool.json-validator.faq.1.question':
		'What is the difference between syntax and schema validation?',
	'tool.json-validator.faq.1.answer':
		'Syntax validation ensures the JSON is well-formed according to the JSON specification. Schema validation goes further by checking if the JSON structure matches a predefined schema with specific rules for data types, required fields, and value constraints.',
	'tool.json-validator.faq.2.question': 'Can I validate JSON with comments?',
	'tool.json-validator.faq.2.answer':
		'Yes! This validator supports JSON5 format, which allows comments (both // and /* */), trailing commas, and single quotes for strings. It will automatically detect and handle JSON5 syntax.',
	'tool.json-validator.use_case.0':
		'Verifying API responses before processing them in your application',
	'tool.json-validator.use_case.1':
		'Checking configuration files before deployment to prevent runtime errors',
	'tool.json-validator.use_case.2': 'Validating user-submitted JSON data in forms or file uploads',
	'tool.json-validator.use_case.3': 'Debugging JSON parsing errors in your code',
	'tool.json-validator.use_case.4':
		'Ensuring data integrity when transferring JSON between systems',

	'tool.crypto-hmac.faq.0.question': 'What is HMAC?',
	'tool.crypto-hmac.faq.0.answer':
		'HMAC (Hash-based Message Authentication Code) is a specific type of message authentication code that uses a cryptographic hash function and a secret key. It provides both data integrity and authentication.',
	'tool.crypto-hmac.faq.1.question': 'What algorithms are supported?',
	'tool.crypto-hmac.faq.1.answer':
		'This tool supports multiple HMAC algorithms including SHA-256, SHA-512, SHA-1, MD5, and more. SHA-256 is recommended for most modern applications as it provides a good balance of security and performance.',
	'tool.crypto-hmac.use_case.0': 'Verifying the integrity and authenticity of API requests',
	'tool.crypto-hmac.use_case.1': 'Creating secure tokens for session management',
	'tool.crypto-hmac.use_case.2': 'Generating webhook signatures for services like GitHub or Stripe',
	'tool.crypto-hmac.use_case.3':
		'Implementing message authentication in microservices communication',
	'tool.crypto-hmac.use_case.4': 'Creating checksums for file verification',

	'tool.json-minifier.faq.0.question': 'What is JSON minification?',
	'tool.json-minifier.faq.0.answer':
		'JSON minification is the process of removing all unnecessary characters from JSON data without changing its functionality. This includes removing whitespace, line breaks, and comments to reduce file size.',
	'tool.json-minifier.faq.1.question': 'Does minification affect JSON functionality?',
	'tool.json-minifier.faq.1.answer':
		'No. Minification only removes visual formatting characters like spaces, tabs, and line breaks. The actual data structure, keys, and values remain exactly the same, maintaining full JSON compliance.',
	'tool.json-minifier.faq.2.question': 'When should I use minified JSON?',
	'tool.json-minifier.faq.2.answer':
		'Use minified JSON in production environments, API responses, and when transmitting data over networks. It reduces bandwidth usage and speeds up data transfer. For development and debugging, use formatted JSON.',
	'tool.json-minifier.use_case.0': 'Reducing file size for API responses to improve loading times',
	'tool.json-minifier.use_case.1': 'Optimizing JSON configuration files for production deployments',
	'tool.json-minifier.use_case.2': 'Compressing data before storing in databases or local storage',
	'tool.json-minifier.use_case.3':
		'Minimizing bandwidth usage when transmitting JSON over networks',
	'tool.json-minifier.use_case.4': 'Preparing JSON files for embedding in HTML or JavaScript code',

	'tool.json-to-yaml.faq.0.question': 'What is JSON to YAML conversion?',
	'tool.json-to-yaml.faq.0.answer':
		'JSON to YAML conversion transforms JSON data into YAML format, which is more human-readable and commonly used for configuration files. YAML allows for comments, anchors, and a more flexible syntax.',
	'tool.json-to-yaml.faq.1.question': 'Is the conversion lossless?',
	'tool.json-to-yaml.faq.1.answer':
		'Yes! The conversion preserves all data and structure. JSON and YAML can represent the same data structures, so no information is lost during the conversion process.',
	'tool.json-to-yaml.use_case.0':
		'Converting JSON configuration files to YAML for better readability',
	'tool.json-to-yaml.use_case.1': 'Creating Kubernetes manifests from JSON definitions',
	'tool.json-to-yaml.use_case.2': 'Migrating application configurations from JSON to YAML format',
	'tool.json-to-yaml.use_case.3': 'Generate YAML files for CI/CD pipeline configurations',

	'tool.json-to-toml.faq.0.question': 'What is JSON to TOML conversion?',
	'tool.json-to-toml.faq.0.answer':
		'JSON to TOML conversion transforms JSON data into TOML format, which is designed for human-readable configuration files. TOML uses a simple syntax with sections, key-value pairs, and tables.',
	'tool.json-to-toml.faq.1.question': 'When should I use TOML over JSON?',
	'tool.json-to-toml.faq.1.answer':
		"Use TOML for configuration files that need to be manually edited by humans. TOML's syntax is cleaner and more intuitive for configurations, while JSON is better for machine-to-machine communication.",
	'tool.json-to-toml.use_case.0': 'Converting package.json to pyproject.toml for Python projects',
	'tool.json-to-toml.use_case.1': 'Creating Cargo.toml files from JSON configurations',
	'tool.json-to-toml.use_case.2':
		'Migrating application settings to TOML format for better maintainability',

	'tool.xml-to-csv.faq.2.question': 'What kinds of XML work best for CSV conversion?',
	'tool.xml-to-csv.faq.2.answer':
		'XML with repeated elements (like multiple <row> or <item> tags) works best. The converter detects element names and attributes as column headers automatically.',

	'tool.xml-xpath.faq.2.question': 'What XPath version is supported?',
	'tool.xml-xpath.faq.2.answer':
		'This tool supports XPath 1.0, which is the most widely implemented version. It includes all standard axes, functions, and operators for XML querying.',

	'tool.xml-xpath.faq.3.question': 'Can I test XPath on invalid XML?',
	'tool.xml-xpath.faq.3.answer':
		'No. XPath requires well-formed XML. If your XML has syntax errors, fix them first using the XML Validator or Formatter before running XPath queries.',

	'tool.xml-minifier.faq.2.question': 'Does minification affect XML functionality?',
	'tool.xml-minifier.faq.2.answer':
		'No. XML minification only removes whitespace and comments without changing the structure or data. The minified XML remains fully valid and functionally identical.',

	'tool.json-to-markdown.faq.0.question': 'What is JSON to Markdown table conversion?',
	'tool.json-to-markdown.faq.0.answer':
		'This tool converts JSON data arrays into Markdown table format, making it easy to display structured data in documentation, README files, or any Markdown-compatible platform.',
	'tool.json-to-markdown.faq.1.question': 'What JSON structures are supported?',
	'tool.json-to-markdown.faq.1.answer':
		'The tool works best with arrays of objects. Each object becomes a row in the table, and object properties become columns. Nested objects are flattened using dot notation.',
	'tool.json-to-markdown.use_case.0': 'Creating data tables for README files and documentation',
	'tool.json-to-markdown.use_case.1': 'Converting API response examples to documentation tables',
	'tool.json-to-markdown.use_case.2':
		'Generating Markdown tables from spreadsheet data exported as JSON',
	'tool.json-to-markdown.use_case.3': 'Displaying configuration options in project documentation',

	'tool.json-to-csv.faq.0.question': 'What is JSON to CSV conversion?',
	'tool.json-to-csv.faq.0.answer':
		'JSON to CSV conversion transforms structured JSON data (usually an array of objects) into a flat Comma-Separated Values format. This is ideal for importing data into spreadsheets like Excel or Google Sheets.',
	'tool.json-to-csv.faq.1.question': 'What JSON structures work best?',
	'tool.json-to-csv.faq.1.answer':
		'The tool works best with a flat array of objects where each object has the same keys. These keys become the CSV headers, and the values become the rows. Nested objects or arrays are usually flattened.',
	'tool.json-to-csv.use_case.0': 'Exporting API data to Excel for business analysis',
	'tool.json-to-csv.use_case.1': 'Converting database JSON exports to CSV for bulk imports',
	'tool.json-to-csv.use_case.2':
		'Preparing JSON datasets for training machine learning models in CSV format',
	'tool.json-to-csv.use_case.3': 'Generating report data for spreadsheet applications',

	'tool.json-jsonpath.faq.0.question': 'What is JSONPath?',
	'tool.json-jsonpath.faq.0.answer':
		"JSONPath is a query language for JSON that allows you to extract specific data from JSON documents. It's similar to XPath for XML and uses dot notation and filters to navigate JSON structures.",
	'tool.json-jsonpath.faq.1.question': 'How does JSONPath syntax work?',
	'tool.json-jsonpath.faq.1.answer':
		'JSONPath uses expressions like $.store.book[*].title to navigate through JSON. The $ represents the root, . accesses properties, [*] selects all items in an array, and various operators can filter and transform results.',
	'tool.json-jsonpath.faq.2.question': 'What can I do with JSONPath results?',
	'tool.json-jsonpath.faq.2.answer':
		'You can extract specific values, filter arrays, perform calculations, and transform JSON data. JSONPath is useful for API testing, data extraction, and validating JSON structure in applications.',
	'tool.json-jsonpath.use_case.0': 'Extracting specific fields from API responses',
	'tool.json-jsonpath.use_case.1': 'Filtering and querying large JSON datasets',
	'tool.json-jsonpath.use_case.2': 'Testing API responses in automated tests',
	'tool.json-jsonpath.use_case.3': 'Validating JSON structure and content in data pipelines',

	'tool.json-jmespath.faq.0.question': 'What is JMESPath?',
	'tool.json-jmespath.faq.0.answer':
		'JMESPath is a query language for JSON that enables you to extract and transform elements from JSON documents. It provides more advanced data transformation capabilities than JSONPath, including filtering, mapping, and aggregation functions.',
	'tool.json-jmespath.faq.1.question': 'How is JMESPath different from JSONPath?',
	'tool.json-jmespath.faq.1.answer':
		'JMESPath offers more powerful data transformation features like functions, filters, and pipe expressions. While JSONPath is primarily for extraction, JMESPath can reshape, filter, and transform JSON data into new structures.',
	'tool.json-jmespath.faq.2.question': 'What are common JMESPath operations?',
	'tool.json-jmespath.faq.2.answer':
		'Common operations include filtering with [?condition], selecting fields with {key: value}, sorting with sort_by(), and aggregating data with functions like length(), sum(), and type(). You can also pipe operations with | for complex transformations.',
	'tool.json-jmespath.use_case.0': 'Transforming API responses to match required data structures',
	'tool.json-jmespath.use_case.1': 'Filtering and reshaping data from complex JSON documents',
	'tool.json-jmespath.use_case.2': 'Extracting specific information from nested JSON structures',
	'tool.json-jmespath.use_case.3': 'Clean up JSON responses for simpler frontend consumption',

	// JSON Diff
	'tool.json-diff.display_name': 'JSON Diff',
	'tool.json-diff.tagline': 'Compare two JSON documents',
	'tool.json-diff.description':
		'A powerful semantic JSON comparison tool. Paste two JSON documents to instantly see the differences, ignoring key order and arbitrary whitespace. Perfect for debugging API changes or verifying configuration updates.',
	'tool.json-diff.primary_keyword': 'json diff tool',
	'tool.json-diff.meta_title': 'JSON Diff Tool - Compare JSON Online',
	'tool.json-diff.meta_description':
		'Compare two JSON documents semantically online. Our JSON diff tool ignores key order and formatting differences to show you exactly what changed.',
	'tool.json-diff.operation': 'Compare',
	'tool.json-diff.faq.0.question': 'Does it ignore key order?',
	'tool.json-diff.faq.0.answer':
		'Yes. Our diff engine parses the JSON structure into normalized representations, meaning that {"a": 1, "b": 2} and {"b": 2, "a": 1} are considered identical.',
	'tool.json-diff.faq.1.question': 'Does it handle large JSON files?',
	'tool.json-diff.faq.1.answer':
		'Yes, the comparison is performed efficiently in your browser and displays the additions, removals, and modifications line-by-line.',
	'tool.json-diff.faq.2.question': 'Is my data secure?',
	'tool.json-diff.faq.2.answer':
		'Absolutely. The comparison happens entirely locally in your browser. No JSON data is ever sent to our servers.',
	'tool.json-diff.use_case.0': 'Compare responses from different API versions mapping regressions',
	'tool.json-diff.use_case.1':
		'Debug unexpected configuration changes in production settings files',
	'tool.json-diff.use_case.2': 'Review git merge conflicts involving JSON manifests or lockfiles',
	'tool.json-diff.use_case.3': 'Find discrepancies between staging and production database exports',

	// ── XML Tool FAQs and Use Cases ──────────────────────────────────────────
	'tool.xml-formatter.faq.0.question': 'What is XML formatting?',
	'tool.xml-formatter.faq.0.answer':
		'XML formatting is the process of organizing XML code with proper indentation and line breaks to make it more readable and maintainable. This helps developers understand the document structure and hierarchy.',
	'tool.xml-formatter.faq.1.question': 'Can I customize the indentation?',
	'tool.xml-formatter.faq.1.answer':
		'Yes! You can choose between 2 spaces, 4 spaces, or tabs for indentation. The formatter preserves your XML structure while applying your preferred formatting style.',
	'tool.xml-formatter.faq.2.question': 'Does the formatter preserve comments?',
	'tool.xml-formatter.faq.2.answer':
		'Yes, the XML formatter preserves all comments in their original positions. It only changes the indentation and line breaks to improve readability without affecting the content or structure.',
	'tool.xml-formatter.use_case.0':
		'Making XML files more readable for documentation and code reviews',
	'tool.xml-formatter.use_case.1': 'Cleaning up minified XML from web responses or APIs',
	'tool.xml-formatter.use_case.2': 'Standardizing XML formatting across team projects',
	'tool.xml-formatter.use_case.3': 'Debugging XML structure by improving visual hierarchy',
	'tool.xml-formatter.use_case.4':
		'Preparing XML files for version control with consistent formatting',

	'tool.xml-validator.faq.0.question': 'What does XML validation check for?',
	'tool.xml-validator.faq.0.answer':
		'XML validation checks for well-formedness including proper tag nesting, matching opening/closing tags, valid attribute syntax, correct character encoding, and compliance with XML specification rules.',
	'tool.xml-validator.faq.1.question': "What's the difference between well-formed and valid XML?",
	'tool.xml-validator.faq.1.answer':
		'Well-formed XML follows basic syntax rules but may have structural issues. Valid XML is well-formed AND conforms to a specific DTD or XML Schema that defines the allowed structure and content.',
	'tool.xml-validator.faq.2.question': 'How do I fix XML validation errors?',
	'tool.xml-validator.faq.2.answer':
		'The validator shows exact line and column numbers for each error. Common fixes include: closing unclosed tags, fixing mismatched tags, removing duplicate attributes, and ensuring proper character encoding. Click on any error to see detailed explanations.',
	'tool.xml-validator.use_case.0': 'Validating API responses before processing in applications',
	'tool.xml-validator.use_case.1':
		'Checking configuration files before deployment to prevent errors',
	'tool.xml-validator.use_case.2': 'Verifying XML data imports from third-party systems',
	'tool.xml-validator.use_case.3': 'Debugging XML parsing issues in development environments',
	'tool.xml-validator.use_case.4':
		'Ensuring XML compliance before submitting to enterprise systems',

	'tool.xml-to-json.faq.0.question': 'How does XML to JSON conversion work?',
	'tool.xml-to-json.faq.0.answer':
		'The conversion maps XML elements to JSON objects, attributes to key-value pairs, and text content to string values. XML namespaces are preserved, and multiple elements with the same name become arrays.',
	'tool.xml-to-json.faq.1.question': 'Is the conversion reversible?',
	'tool.xml-to-json.faq.1.answer':
		'Mostly yes, but some XML features like comments, processing instructions, and the order of attributes may be lost. The core data structure remains intact for round-trip conversion.',
	'tool.xml-to-json.faq.2.question': 'How are XML attributes handled in JSON?',
	'tool.xml-to-json.faq.2.answer':
		'XML attributes are converted to JSON properties with an "@" prefix by default. This distinguishes them from child elements. You can customize this behavior in advanced settings to use different naming conventions.',
	'tool.xml-to-json.use_case.0': 'Converting SOAP API responses to JSON for modern applications',
	'tool.xml-to-json.use_case.1': 'Processing XML configuration files in JavaScript applications',
	'tool.xml-to-json.use_case.2': 'Migrating legacy XML data to modern JSON-based systems',
	'tool.xml-to-json.use_case.3': 'Extracting data from XML sitemaps for analysis',
	'tool.xml-to-json.use_case.4': 'Transforming RSS feeds into JSON for mobile app consumption',

	'tool.json-to-xml.faq.0.question': 'What is JSON to XML conversion?',
	'tool.json-to-xml.faq.0.answer':
		'JSON to XML conversion transforms JSON data into XML format, mapping objects to elements, arrays to repeated elements, and primitive values to text content. This enables compatibility with systems that require XML input.',
	'tool.json-to-xml.faq.1.question': 'How are arrays handled in the conversion?',
	'tool.json-to-xml.faq.1.answer':
		'JSON arrays become multiple XML elements with the same tag name. You can configure whether to use wrapper elements or repeat the same element tag for each array item.',
	'tool.json-to-xml.faq.2.question': 'How does the converter handle special characters?',
	'tool.json-to-xml.faq.2.answer':
		'Special characters are automatically escaped according to XML standards. This includes &, <, >, ", and \', which are converted to their corresponding XML entities to ensure valid XML output.',
	'tool.json-to-xml.use_case.0': 'Creating XML sitemaps from JSON data',
	'tool.json-to-xml.use_case.1': 'Generating RSS/Atom feeds from JSON content',
	'tool.json-to-xml.use_case.2': 'Converting API responses for legacy systems requiring XML',
	'tool.json-to-xml.use_case.3': 'Creating configuration files for Java applications from JSON',
	'tool.json-to-xml.use_case.4': 'Generating SOAP envelopes from JSON payloads for web services',

	'tool.xml-to-yaml.faq.0.question': 'Why convert XML to YAML?',
	'tool.xml-to-yaml.faq.0.answer':
		"YAML is more human-readable and easier to edit manually than XML. It's commonly used for configuration files, documents, and data exchange where readability is important.",
	'tool.xml-to-yaml.faq.1.question': 'How are XML attributes handled?',
	'tool.xml-to-yaml.faq.1.answer':
		'XML attributes are typically converted to key-value pairs within the YAML element. You can configure whether to use a special syntax for attributes or treat them as regular properties.',
	'tool.xml-to-yaml.faq.2.question': 'Can complex nested XML be converted to YAML?',
	'tool.xml-to-yaml.faq.2.answer':
		'Yes! The converter handles arbitrarily deep nesting, mixed content, and complex XML structures. The resulting YAML maintains the same data hierarchy in a more readable format.',
	'tool.xml-to-yaml.use_case.0': 'Converting Spring Framework XML configurations to YAML',
	'tool.xml-to-yaml.use_case.1': 'Migrating build scripts from XML to more readable YAML format',
	'tool.xml-to-yaml.use_case.2': 'Creating Kubernetes resources from XML templates',
	'tool.xml-to-yaml.use_case.3': 'Processing XML documents for documentation purposes',
	'tool.xml-to-yaml.use_case.4': 'Transforming XML data for Ansible playbooks and automation',

	'tool.xml-to-csv.faq.0.question': 'How does XML to CSV conversion work?',
	'tool.xml-to-csv.faq.0.answer':
		'The converter extracts repeating elements from XML and creates rows in CSV, with element attributes and child elements becoming columns. You can select which elements to convert and customize the output format.',
	'tool.xml-to-csv.faq.1.question': 'What XML structures work best for CSV conversion?',
	'tool.xml-to-csv.faq.1.answer':
		'XML with repeating record-like elements works best. Each repeated element becomes a row, and its properties become columns. Deeply nested structures may need to be flattened.',
	'tool.xml-to-csv.use_case.0': 'Extracting data from XML reports into spreadsheet format',
	'tool.xml-to-csv.use_case.1': 'Converting XML exports from databases to CSV for analysis',
	'tool.xml-to-csv.use_case.2': 'Processing XML logs for data analysis in Excel',
	'tool.xml-to-csv.use_case.3':
		'Migrating product catalogs from XML to CSV for e-commerce platforms',
	'tool.xml-to-csv.use_case.4': 'Analyzing XML API responses by converting to tabular format',

	'tool.xml-minifier.faq.0.question': 'What is XML minification?',
	'tool.xml-minifier.faq.0.answer':
		'XML minification removes all unnecessary characters from XML without changing its functionality. This includes whitespace, line breaks, and comments to reduce file size.',
	'tool.xml-minifier.faq.1.question': 'Does minification affect XML processing?',
	'tool.xml-minifier.faq.1.answer':
		'No. XML parsers ignore whitespace between tags by default, so minified XML processes identically to formatted XML but loads faster due to smaller file size.',
	'tool.xml-minifier.use_case.0': 'Reducing file sizes for faster API responses',
	'tool.xml-minifier.use_case.1': 'Optimizing XML files for production environments',
	'tool.xml-minifier.use_case.2': 'Minimizing bandwidth usage when transmitting XML data',
	'tool.xml-minifier.use_case.3': 'Preparing XML files for embedding in other documents',

	'tool.xml-xpath.faq.0.question': 'What is XPath?',
	'tool.xml-xpath.faq.0.answer':
		'XPath is a query language for selecting nodes from XML documents. It uses path expressions to navigate through elements and attributes, similar to file system paths.',
	'tool.xml-xpath.faq.1.question': 'What can XPath expressions do?',
	'tool.xml-xpath.faq.1.answer':
		'XPath can select elements by name, attribute value, position, or content. It supports complex conditions, functions for text manipulation, and mathematical operations for advanced querying.',
	'tool.xml-xpath.use_case.0': 'Extracting specific data from large XML documents',
	'tool.xml-xpath.use_case.1': 'Testing XML data in automated test suites',
	'tool.xml-xpath.use_case.2': 'Transforming XML data using XSLT templates',
	'tool.xml-xpath.use_case.3': 'Validating XML structure and content programmatically'
};

export default registryEn;
