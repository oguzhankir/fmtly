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
	'category.toml.display_name': 'TOML',
	'category.toml.description':
		'Format, validate, and convert TOML files. Convert TOML to JSON and YAML safely.',
	'category.toml.primary_keyword': 'toml tools',
	'category.text.display_name': 'Text',
	'category.text.description':
		'Count, analyze, and transform plain text. Measure words, characters, structure, and readability instantly in your browser.',
	'category.text.primary_keyword': 'text tools',
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
	'tool.xml-to-json-schema.display_name': 'XML to JSON Schema',
	'tool.xml-to-json-schema.tagline': 'Infer JSON Schema from XML structure',
	'tool.xml-to-json-schema.description':
		'Generate a Draft 2020-12 JSON Schema from XML by analyzing element structure, attributes, and cardinality. Repeated elements are inferred as arrays, and required fields are inferred from shared element presence.',
	'tool.xml-to-json-schema.primary_keyword': 'xml to json schema',
	'tool.xml-to-json-schema.meta_title': 'XML to JSON Schema Generator — fmtly.dev',
	'tool.xml-to-json-schema.meta_description':
		'Infer JSON Schema from XML in your browser. Detects nested structures, repeated elements, and required fields automatically.',
	'tool.xml-to-json-schema.operation': 'Generate Schema',
	'tool.xml-to-json-schema.faq.0.question': 'How is cardinality inferred from XML?',
	'tool.xml-to-json-schema.faq.0.answer':
		'When sibling elements repeat under the same parent, they are inferred as arrays. Single occurrences are inferred as scalar/object nodes unless repetition is observed.',
	'tool.xml-to-json-schema.faq.1.question': 'How are XML attributes represented in the schema?',
	'tool.xml-to-json-schema.faq.1.answer':
		'Attributes are included as regular properties using the parsed attribute key format (for example, @_id) so they can be validated alongside child elements.',
	'tool.xml-to-json-schema.faq.2.question': 'Which JSON Schema draft does it generate?',
	'tool.xml-to-json-schema.faq.2.answer':
		'The output uses JSON Schema Draft 2020-12 and includes standard keywords such as $schema, type, properties, required, and items.',
	'tool.xml-to-json-schema.use_case.0':
		'Bootstrap validation schemas from existing XML payload samples',
	'tool.xml-to-json-schema.use_case.1':
		'Document complex XML feed structures for downstream consumers',
	'tool.xml-to-json-schema.use_case.2':
		'Generate baseline schemas before tightening constraints manually',
	'tool.xml-to-json-schema.use_case.3':
		'Map XML integrations into JSON-native validation workflows',

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

	'tool.csv-diff.display_name': 'CSV Diff',
	'tool.csv-diff.tagline': 'Compare two CSV files side by side',
	'tool.csv-diff.description':
		'Compare two CSV files structurally. Understands columns and rows for accurate tabular comparison.',
	'tool.csv-diff.primary_keyword': 'csv diff',
	'tool.csv-diff.meta_title': 'CSV Diff Tool — fmtly.dev',
	'tool.csv-diff.meta_description':
		'Compare two CSV files in your browser. Highlights added, deleted, and changed rows and columns. No data uploaded.',
	'tool.csv-diff.operation': 'Compare',
	'tool.csv-diff.faq.0.question': 'Is CSV Diff a plain text diff?',
	'tool.csv-diff.faq.0.answer':
		'It parses both CSV inputs as tabular data first, mapping each row structurally to detect structural additions and cell modifications accurately.',
	'tool.csv-diff.faq.1.question': 'Can I compare invalid CSV files?',
	'tool.csv-diff.faq.1.answer':
		'Both sides need to be valid CSV data. If one side cannot be parsed, the tool will indicate an error.',
	'tool.csv-diff.use_case.0': 'Inspect the difference between two spreadsheet exports',
	'tool.csv-diff.use_case.1': 'Review tabular data modifications before importing to database',

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
	'tool.toml-formatter.faq.0.question': 'Does formatting change TOML values?',
	'tool.toml-formatter.faq.0.answer':
		'No. It rewrites valid TOML into a normalized layout without altering the values or interpreted data structure.',
	'tool.toml-formatter.faq.1.question': 'When should I use the formatter instead of the validator?',
	'tool.toml-formatter.faq.1.answer':
		'Use the validator if you only want to check syntax. Use the formatter when the TOML is already valid and you want cleaner, consistent output.',
	'tool.toml-formatter.use_case.0': 'Normalizing pyproject.toml before a commit',
	'tool.toml-formatter.use_case.1': 'Cleaning up configuration snippets copied from documentation',
	'tool.toml-formatter.use_case.2': 'Making long TOML sections more readable',
	'tool.toml-formatter.use_case.3': 'Preparing TOML before diffing or converting',

	'tool.toml-validator.display_name': 'TOML Validator',
	'tool.toml-validator.tagline': 'Validate TOML syntax before formatting or converting',
	'tool.toml-validator.description':
		'Validate TOML configuration files locally in your browser. Catch syntax errors before saving, converting, or comparing.',
	'tool.toml-validator.primary_keyword': 'toml validator',
	'tool.toml-validator.meta_title': 'TOML Validator — fmtly.dev',
	'tool.toml-validator.meta_description':
		'Validate TOML in your browser and catch syntax errors before formatting or converting.',
	'tool.toml-validator.operation': 'Validate',
	'tool.toml-validator.faq.0.question': 'What TOML issues does the validator catch?',
	'tool.toml-validator.faq.0.answer':
		'It catches parsing errors such as malformed strings, invalid table syntax, broken arrays, and other TOML syntax issues reported by the parser.',
	'tool.toml-validator.faq.1.question': 'Does the TOML validator support schemas?',
	'tool.toml-validator.faq.1.answer':
		'No. It only validates TOML syntax. It is meant to confirm that a document can be cleanly parsed before you format, convert, or compare it.',
	'tool.toml-validator.use_case.0': 'Checking pyproject.toml before running build tools',
	'tool.toml-validator.use_case.1': 'Finding syntax errors in application configs',
	'tool.toml-validator.use_case.2': 'Verifying TOML copied from package documentation',
	'tool.toml-validator.use_case.3': 'Confirming configuration changes before diffing',

	'tool.toml-to-json.display_name': 'TOML to JSON',
	'tool.toml-to-json.tagline': 'Convert TOML documents to JSON',
	'tool.toml-to-json.description':
		'Convert TOML configuration data into formatted JSON directly in your browser. Preserves nested tables, arrays, and scalar values without uploading files.',
	'tool.toml-to-json.primary_keyword': 'toml to json',
	'tool.toml-to-json.meta_title': 'TOML to JSON Converter — fmtly.dev',
	'tool.toml-to-json.meta_description':
		'Convert TOML to formatted JSON instantly in your browser. No data leaves your device.',
	'tool.toml-to-json.operation': 'Convert',
	'tool.toml-to-json.faq.0.question': 'Are nested tables and arrays preserved in JSON?',
	'tool.toml-to-json.faq.0.answer':
		'Yes. The parsed TOML objects are converted into equivalent JSON objects and arrays, so the overall structure is maintained.',
	'tool.toml-to-json.faq.1.question': 'When is converting TOML to JSON useful?',
	'tool.toml-to-json.faq.1.answer':
		'It is useful when a toolchain, API, script, or test fixture expects JSON instead of TOML, but you need to reuse the same configuration data.',
	'tool.toml-to-json.use_case.0': 'Converting TOML config into JSON for JavaScript tooling',
	'tool.toml-to-json.use_case.1': 'Inspecting TOML as a stricter machine-readable structure',
	'tool.toml-to-json.use_case.2': 'Reusing TOML settings in API fixtures or tests',
	'tool.toml-to-json.use_case.3': 'Bridging configuration data between TOML and JSON systems',

	'tool.toml-to-yaml.display_name': 'TOML to YAML',
	'tool.toml-to-yaml.tagline': 'Convert TOML documents to YAML',
	'tool.toml-to-yaml.description':
		'Convert TOML configuration data into readable YAML directly in your browser. Preserves nested tables, arrays, and core scalar values.',
	'tool.toml-to-yaml.primary_keyword': 'toml to yaml',
	'tool.toml-to-yaml.meta_title': 'TOML to YAML Converter — fmtly.dev',
	'tool.toml-to-yaml.meta_description':
		'Convert TOML to YAML instantly in your browser. No files uploaded.',
	'tool.toml-to-yaml.operation': 'Convert',
	'tool.toml-to-yaml.faq.0.question': 'Why convert TOML to YAML?',
	'tool.toml-to-yaml.faq.0.answer':
		'YAML is often quicker to scan visually in infrastructure and automation workflows. Conversion helps when a team or tool prefers YAML syntax.',
	'tool.toml-to-yaml.faq.1.question': 'Is the TOML structure preserved in YAML output?',
	'tool.toml-to-yaml.faq.1.answer':
		'Yes. Tables, nested objects, arrays, and scalar values are mapped into their YAML equivalents.',
	'tool.toml-to-yaml.use_case.0': 'Rewriting TOML config into YAML for deployment workflows',
	'tool.toml-to-yaml.use_case.1': 'Sharing TOML-based settings with YAML-first teams',
	'tool.toml-to-yaml.use_case.2': 'Comparing the same configuration in TOML and YAML forms',
	'tool.toml-to-yaml.use_case.3':
		'Migrating config between ecosystems with different preferred formats',

	'tool.toml-to-xml.display_name': 'TOML to XML',
	'tool.toml-to-xml.tagline': 'Convert TOML configuration files to XML format',
	'tool.toml-to-xml.description':
		'Convert TOML data structures into XML documents directly in your browser. Preserves nested tables and arrays in XML node hierarchies.',
	'tool.toml-to-xml.primary_keyword': 'toml to xml',
	'tool.toml-to-xml.meta_title': 'TOML to XML Converter — fmtly.dev',
	'tool.toml-to-xml.meta_description':
		'Convert TOML configurations to XML instantly in your browser. No files uploaded.',
	'tool.toml-to-xml.operation': 'Convert',
	'tool.toml-to-xml.faq.0.question': 'How are TOML arrays converted to XML?',
	'tool.toml-to-xml.faq.0.answer':
		'XML does not natively support unnamed arrays, so arrays are typically represented by repeating the node name or wrapping items in standard list tags depending on the parser.',
	'tool.toml-to-xml.faq.1.question': 'Can I convert it back to TOML later?',
	'tool.toml-to-xml.faq.1.answer':
		'Yes, you can use our XML to TOML converter, though some type information (like explicit strings vs numbers) might be interpreted differently by the XML parser upon return.',
	'tool.toml-to-xml.use_case.0': 'Adapting modern TOML configurations for legacy XML systems',
	'tool.toml-to-xml.use_case.1': 'Integrating TOML-based apps with enterprise SOAP APIs',
	'tool.toml-to-xml.use_case.2': 'Converting pyproject.toml data into Maven or Ant build files',
	'tool.toml-to-xml.use_case.3': 'Extracting configuration logic into generic XML datasets',

	'tool.toml-to-html.display_name': 'TOML to HTML Table',
	'tool.toml-to-html.tagline': 'Convert TOML configuration into a responsive HTML table',
	'tool.toml-to-html.description':
		'Transform TOML configuration files into clean, readable HTML tables. Perfect for documentation, reporting, and sharing configuration states.',
	'tool.toml-to-html.primary_keyword': 'toml to html',
	'tool.toml-to-html.meta_title': 'TOML to HTML Table Converter — fmtly.dev',
	'tool.toml-to-html.meta_description':
		'Convert TOML to HTML tables instantly in your browser. Creates responsive, clean tables from nested TOML data.',
	'tool.toml-to-html.operation': 'Convert',
	'tool.toml-to-html.faq.0.question': 'How does it handle nested TOML tables?',
	'tool.toml-to-html.faq.0.answer':
		'Nested tables and arrays are recursively rendered as inner HTML tables, ensuring the exact data structure is maintained visually.',
	'tool.toml-to-html.faq.1.question': 'Can I copy the output directly into my documentation?',
	'tool.toml-to-html.faq.1.answer':
		'Yes, the output is standard HTML that can be copied and pasted directly into Markdown files, Notion, Confluence, or any standard web page.',
	'tool.toml-to-html.use_case.0': 'Generating visual reports from TOML configuration files',
	'tool.toml-to-html.use_case.1': 'Pasting application settings into project documentation',
	'tool.toml-to-html.use_case.2':
		'Displaying environment-specific variables on internal dashboards',
	'tool.toml-to-html.use_case.3':
		'Reviewing complex nested TOML structures in an accessible format',

	'tool.toml-minifier.display_name': 'TOML Minifier',
	'tool.toml-minifier.tagline': 'Minify and compress TOML configuration files',
	'tool.toml-minifier.description':
		'Remove unnecessary whitespace and comments from TOML files to reduce file size. Minify TOML configurations locally in your browser.',
	'tool.toml-minifier.primary_keyword': 'toml minifier',
	'tool.toml-minifier.meta_title': 'TOML Minifier — fmtly.dev',
	'tool.toml-minifier.meta_description':
		'Minify and compress TOML files in your browser. Remove whitespace and comments safely. No data leaves your device.',
	'tool.toml-minifier.operation': 'Minify',
	'tool.toml-minifier.faq.0.question': 'What does the TOML minifier do?',
	'tool.toml-minifier.faq.0.answer':
		'It parses your TOML file and rewrites it with the minimum amount of whitespace required. Comments are also removed to reduce the overall file size.',
	'tool.toml-minifier.faq.1.question': 'Is it safe to minify TOML files?',
	'tool.toml-minifier.faq.1.answer':
		'Yes. The minifier ensures that the structural meaning of the TOML data remains exactly the same. Only formatting and comments are stripped.',
	'tool.toml-minifier.use_case.0': 'Compressing large TOML configs for deployment',
	'tool.toml-minifier.use_case.1': 'Removing comments before sharing configuration files',
	'tool.toml-minifier.use_case.2': 'Preparing TOML files for embedded systems or limited storage',
	'tool.toml-minifier.use_case.3': 'Normalizing TOML files into a compact format',

	'tool.toml-diff.display_name': 'TOML Diff',
	'tool.toml-diff.tagline': 'Compare two TOML documents side by side',
	'tool.toml-diff.description':
		'Compare two TOML documents and highlight added, removed, and modified keys. Review configuration changes without leaving the browser.',
	'tool.toml-diff.primary_keyword': 'toml diff',
	'tool.toml-diff.meta_title': 'TOML Diff Tool — fmtly.dev',
	'tool.toml-diff.meta_description':
		'Compare two TOML documents in your browser and highlight every change.',
	'tool.toml-diff.operation': 'Compare',
	'tool.toml-diff.faq.0.question': 'Is TOML Diff a text diff or a structural diff?',
	'tool.toml-diff.faq.0.answer':
		'It is structural. Both inputs are parsed as TOML first, then the resulting data is compared by keys, arrays, and values.',
	'tool.toml-diff.faq.1.question': 'Can I compare invalid TOML documents?',
	'tool.toml-diff.faq.1.answer':
		'No. Both inputs must be valid TOML. If either side fails to parse, the tool will indicate which side is invalid.',
	'tool.toml-diff.use_case.0': 'Reviewing configuration changes between two releases',
	'tool.toml-diff.use_case.1': 'Comparing environment-specific TOML settings',
	'tool.toml-diff.use_case.2': 'Checking generated TOML against an expected version',
	'tool.toml-diff.use_case.3': 'Inspecting pyproject.toml or toolchain changes before commit',

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
	'ui.validator.csv_error.row_width': 'Row {row} has {actual} columns but expected {expected}',
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
	'ui.json_flatten.tab_label': 'Flatten',
	'ui.json_flatten.mode_label': 'Mode',
	'ui.json_flatten.mode.flatten': 'Flatten',
	'ui.json_flatten.mode.unflatten': 'Unflatten',
	'ui.json_flatten.separator': 'Separator',
	'ui.json_flatten.separator_placeholder': '.',
	'ui.json_flatten.error.generic': 'Could not transform JSON with the current flatten settings.',
	'ui.json_flatten.error.empty_separator': 'Separator cannot be empty.',
	'ui.json_flatten.error.invalid_result': 'Transformation failed because output was invalid.',
	'ui.json_flatten.error.invalid_flat_object':
		'Unflatten input must be a JSON object with flattened paths.',
	'ui.json_flatten.error.root_conflict':
		'Root key cannot be used together with other flattened paths.',
	'ui.json_flatten.error.invalid_path': 'One or more flattened paths are invalid.',
	'ui.json_flatten.error.invalid_escape': 'A flattened path contains an invalid escape sequence.',
	'ui.json_flatten.error.invalid_array_index':
		'Array indices in flattened paths must be non-negative integers.',
	'ui.json_flatten.error.path_conflict': 'Flattened paths conflict and cannot be merged safely.',
	'ui.json_flatten.error.unsafe_key':
		'Path contains an unsafe key (__proto__, constructor, or prototype).',
	'ui.json_patch.tab_label': 'Patch',
	'ui.json_patch.mode_label': 'Mode',
	'ui.json_patch.mode.generate': 'Generate Patch',
	'ui.json_patch.mode.apply': 'Apply Patch',
	'ui.json_patch.target_label': 'Target JSON',
	'ui.json_patch.patch_label': 'JSON Patch (RFC 6902)',
	'ui.json_patch.target_placeholder': 'Paste target JSON document here…',
	'ui.json_patch.patch_placeholder': 'Paste JSON Patch array here…',
	'ui.json_patch.base_label': 'Base JSON',
	'ui.json_patch.base_hint': 'Input panel is the base JSON. Output is the generated patch.',
	'ui.json_patch.apply_hint': 'Input panel is the base JSON. Output is the patched result.',
	'ui.json_patch.result_label_generate': 'Generated Patch',
	'ui.json_patch.result_label_apply': 'Patched JSON',
	'ui.json_patch.empty_generate': 'Add a target JSON document to generate an RFC 6902 patch.',
	'ui.json_patch.empty_apply': 'Add a JSON Patch array to apply it to the base document.',
	'ui.json_patch.error.generic': 'Could not process JSON Patch with the current inputs.',
	'ui.json_patch.error.invalid_result': 'Patch operation failed because output was invalid.',
	'ui.json_patch.error.invalid_patch_array': 'Patch input must be a JSON array of operations.',
	'ui.json_patch.error.invalid_operation': 'Patch contains an invalid operation object.',
	'ui.json_patch.error.unsupported_operation': 'Patch contains an unsupported operation.',
	'ui.json_patch.error.missing_from': 'Patch operation is missing a required "from" path.',
	'ui.json_patch.error.missing_value': 'Patch operation is missing a required "value".',
	'ui.json_patch.error.invalid_pointer': 'Patch operation contains an invalid JSON Pointer path.',
	'ui.json_patch.error.path_not_found': 'Patch path was not found in the current document.',
	'ui.json_patch.error.test_failed': 'Patch test operation failed for the given path.',
	'ui.json_patch.error.invalid_array_index': 'Patch operation references an invalid array index.',

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
	'tool.xml-xpath.use_case.3': 'Validating XML structure and content programmatically',
	'tool.csv-to-sql.display_name': 'CSV → SQL',
	'tool.csv-to-sql.tagline': 'Convert CSV data to SQL INSERT statements',
	'tool.csv-to-sql.description':
		'Convert CSV rows to SQL INSERT statements with type inference for numbers and booleans. Configurable table name and batch size.',
	'tool.csv-to-sql.primary_keyword': 'csv to sql',
	'tool.csv-to-sql.meta_title': 'CSV to SQL Converter — fmtly.dev',
	'tool.csv-to-sql.meta_description':
		'Generate SQL INSERT statements from CSV data in your browser. Configurable table name and batch sizes. No data uploaded.',
	'tool.csv-to-sql.operation': 'To SQL',
	'tool.csv-to-sql.faq.0.question': 'How does type inference work?',
	'tool.csv-to-sql.faq.0.answer':
		'The converter automatically detects numbers and boolean values (true/false). Everything else is safely escaped as string literals using single quotes.',
	'tool.csv-to-sql.use_case.0': 'Generate SQL seeds from spreadsheet data for database migrations',
	'tool.csv-to-sql.use_case.1':
		'Quickly import CSV data into SQL databases without writing custom scripts',
	'tool.json-schema-generator.display_name': 'JSON Schema Generator',
	'tool.json-schema-generator.tagline': 'Infer JSON Schema from JSON samples',
	'tool.json-schema-generator.description':
		'Generate a Draft 2020-12 JSON Schema from any JSON document. Infers nested objects, arrays, required fields, primitive types, and candidate enum values.',
	'tool.json-schema-generator.primary_keyword': 'json schema generator',
	'tool.json-schema-generator.meta_title': 'JSON Schema Generator — fmtly.dev',
	'tool.json-schema-generator.meta_description':
		'Infer JSON Schema from JSON instantly in your browser. Auto-detects nested types, required fields, and enum candidates. No data leaves your device.',
	'tool.json-schema-generator.operation': 'Generate Schema',
	'tool.json-schema-generator.faq.0.question': 'How are required fields detected?',
	'tool.json-schema-generator.faq.0.answer':
		'For objects, keys that appear in all observed entries are marked as required. Missing keys are treated as optional.',
	'tool.json-schema-generator.faq.1.question': 'How are enums inferred?',
	'tool.json-schema-generator.faq.1.answer':
		'When a field has a small, repeating set of scalar values, the generator adds an enum to capture those likely categories.',
	'tool.json-schema-generator.faq.2.question': 'Which JSON Schema draft is generated?',
	'tool.json-schema-generator.faq.2.answer':
		'The output includes the JSON Schema Draft 2020-12 $schema URI and uses standard keywords such as type, properties, required, anyOf, and items.',
	'tool.json-schema-generator.use_case.0':
		'Bootstrap API contracts from real sample payloads before formal schema design',
	'tool.json-schema-generator.use_case.1':
		'Create validation schemas for test fixtures and mock data generation',
	'tool.json-schema-generator.use_case.2':
		'Quickly document nested JSON event formats for integrations',
	'tool.json-schema-generator.use_case.3':
		'Prepare a baseline schema before refining constraints manually',
	'tool.json-to-go.display_name': 'JSON to Go Structs',
	'tool.json-to-go.tagline': 'Generate clean Go structs from JSON payloads instantly',
	'tool.json-to-go.description':
		'Convert any JSON payload into idiomatic Go struct definitions with nested type inference, json tags, and optional-field handling. Fast, private, and browser-based.',
	'tool.json-to-go.primary_keyword': 'json to go structs',
	'tool.json-to-go.meta_title': 'JSON to Go Structs Generator — fmtly.dev',
	'tool.json-to-go.meta_description':
		'Generate Go struct definitions from JSON instantly in your browser. Includes nested structs, json tags, and optional-field inference. No data leaves your device.',
	'tool.json-to-go.operation': 'Convert',
	'tool.json-to-go.faq.0.question': 'How does the tool map JSON types to Go types?',
	'tool.json-to-go.faq.0.answer':
		'Strings map to string, booleans to bool, integers to int64, decimals to float64, arrays to slices, and nested objects to generated struct types.',
	'tool.json-to-go.faq.1.question': 'Does it add json tags and omitempty automatically?',
	'tool.json-to-go.faq.1.answer':
		'Yes. Generated fields include json tags, and fields that appear optional or nullable in the sample can be emitted with omitempty and pointer types where appropriate.',
	'tool.json-to-go.faq.2.question': 'Can I use this output directly in Go projects?',
	'tool.json-to-go.faq.2.answer':
		'Yes. The output is designed to be drop-in ready for Go codebases and works well for API clients, webhook payloads, and config models.',
	'tool.json-to-go.use_case.0': 'Bootstrap Go API models from real request and response payloads',
	'tool.json-to-go.use_case.1': 'Generate typed structs for webhook and event-driven integrations',
	'tool.json-to-go.use_case.2':
		'Replace manual model writing when exploring unfamiliar JSON schemas',
	'tool.json-to-go.use_case.3':
		'Speed up backend prototyping with production-ready Go type scaffolding',
	'tool.json-to-typescript.display_name': 'JSON to TypeScript Types',
	'tool.json-to-typescript.tagline':
		'Generate precise TypeScript interfaces and types from JSON instantly',
	'tool.json-to-typescript.description':
		'Convert JSON samples into clean TypeScript interfaces and union types with nested inference, optional-field detection, and null-safe typing. Fast, private, and browser-based.',
	'tool.json-to-typescript.primary_keyword': 'json to typescript types',
	'tool.json-to-typescript.meta_title': 'JSON to TypeScript Types Generator — fmtly.dev',
	'tool.json-to-typescript.meta_description':
		'Generate TypeScript interfaces and types from JSON in your browser. Supports nested objects, arrays, unions, and optional fields. No data leaves your device.',
	'tool.json-to-typescript.operation': 'Convert',
	'tool.json-to-typescript.faq.0.question':
		'How does the tool map JSON values to TypeScript types?',
	'tool.json-to-typescript.faq.0.answer':
		'Strings become string, numbers become number, booleans become boolean, arrays become typed arrays, and nested objects become generated interfaces. Mixed values are represented as union types.',
	'tool.json-to-typescript.faq.1.question': 'How are optional and nullable fields handled?',
	'tool.json-to-typescript.faq.1.answer':
		'If a key is missing in part of the sample set, it is marked optional with ?. If a value can be null, the generated type includes a null union.',
	'tool.json-to-typescript.faq.2.question':
		'Can I use the generated output directly in production code?',
	'tool.json-to-typescript.faq.2.answer':
		'Yes. The output is designed as a practical starting point for app and API models. You can paste it directly into your codebase and refine naming conventions if needed.',
	'tool.json-to-typescript.use_case.0':
		'Bootstrap frontend and backend models from real API payloads',
	'tool.json-to-typescript.use_case.1':
		'Generate typed contracts for SDKs and webhook integrations',
	'tool.json-to-typescript.use_case.2':
		'Replace manual interface drafting for deeply nested JSON data',
	'tool.json-to-typescript.use_case.3':
		'Accelerate refactors by deriving strict types from existing sample data',
	'tool.json-flatten.display_name': 'JSON Flattener / Unflattener',
	'tool.json-flatten.tagline': 'Flatten nested JSON paths and restore them instantly',
	'tool.json-flatten.description':
		'Convert deeply nested JSON into flat path-based objects and unflatten it back without leaving your browser. Supports arrays, escaped keys, and custom separators.',
	'tool.json-flatten.primary_keyword': 'json flattener unflattener',
	'tool.json-flatten.meta_title': 'JSON Flattener / Unflattener — fmtly.dev',
	'tool.json-flatten.meta_description':
		'Flatten nested JSON into path-based key maps and unflatten back to original structure. Supports arrays and custom separators. 100% browser-based.',
	'tool.json-flatten.operation': 'Flatten & Unflatten',
	'tool.json-flatten.faq.0.question': 'How are array values represented in flattened output?',
	'tool.json-flatten.faq.0.answer':
		'Array items use bracket indices in generated paths, such as users[0].email or matrix[2][1], so structures can be restored deterministically.',
	'tool.json-flatten.faq.1.question': 'What if keys already contain dots or brackets?',
	'tool.json-flatten.faq.1.answer':
		'Special characters in keys are escaped during flattening. Unflatten mode understands these escapes and recreates original keys safely.',
	'tool.json-flatten.faq.2.question':
		'Can I switch between flatten and unflatten in the same tool?',
	'tool.json-flatten.faq.2.answer':
		'Yes. Use the mode toggle to flatten nested JSON or reverse flattened path maps back into nested JSON.',
	'tool.json-flatten.use_case.0': 'Prepare i18n dictionaries and config payloads as flat key maps',
	'tool.json-flatten.use_case.1': 'Normalize nested API fixtures for spreadsheet-style editing',
	'tool.json-flatten.use_case.2': 'Rebuild nested structures from environment-style key paths',
	'tool.json-flatten.use_case.3':
		'Debug path-level changes in large JSON documents before deployment',
	'tool.json-patch.display_name': 'JSON Patch Builder',
	'tool.json-patch.tagline': 'Generate and apply RFC 6902 JSON Patch operations instantly',
	'tool.json-patch.description':
		'Build RFC 6902 JSON Patch operations from a base and target document, or apply a patch array to a base JSON payload. Everything runs locally in your browser.',
	'tool.json-patch.primary_keyword': 'json patch builder',
	'tool.json-patch.meta_title': 'JSON Patch Builder (RFC 6902) — fmtly.dev',
	'tool.json-patch.meta_description':
		'Generate JSON Patch operations from two JSON documents or apply RFC 6902 patches instantly in your browser. Private, fast, and no uploads.',
	'tool.json-patch.operation': 'Patch',
	'tool.json-patch.faq.0.question': 'What is JSON Patch (RFC 6902)?',
	'tool.json-patch.faq.0.answer':
		'JSON Patch is a standard format for describing changes as operations like add, remove, and replace using JSON Pointer paths.',
	'tool.json-patch.faq.1.question': 'How does Generate mode work?',
	'tool.json-patch.faq.1.answer':
		'Paste your base JSON in the input panel and the target JSON in the side panel. The tool computes the patch operations needed to transform base into target.',
	'tool.json-patch.faq.2.question': 'How does Apply mode work?',
	'tool.json-patch.faq.2.answer':
		'Paste your base JSON in the input panel and a valid JSON Patch array in the side panel. The output shows the patched JSON result.',
	'tool.json-patch.use_case.0': 'Version API payload changes as deterministic patch operations',
	'tool.json-patch.use_case.1': 'Apply migration-style document updates in testing workflows',
	'tool.json-patch.use_case.2': 'Debug integration failures by replaying patch sequences safely',
	'tool.json-patch.use_case.3': 'Review structured JSON changes beyond plain text diffs',
	'tool.json-schema-validate.display_name': 'JSON Schema Validator',
	'tool.json-schema-validate.tagline': 'Validate JSON against a user-supplied schema',
	'tool.json-schema-validate.description':
		'Validate JSON payloads against JSON Schema Draft-07 or Draft 2020-12. See per-path errors with line and column mapping to fix invalid fields quickly.',
	'tool.json-schema-validate.primary_keyword': 'json schema validator',
	'tool.json-schema-validate.meta_title': 'JSON Schema Validator — fmtly.dev',
	'tool.json-schema-validate.meta_description':
		'Validate JSON against Draft-07 and 2020-12 JSON Schema in your browser. Get path-based error annotations with line and column locations.',
	'tool.json-schema-validate.operation': 'Validate Schema',
	'tool.json-schema-validate.faq.0.question': 'Which schema drafts are supported?',
	'tool.json-schema-validate.faq.0.answer':
		'The validator supports JSON Schema Draft-07 and Draft 2020-12. The draft is detected from the schema $schema URI automatically.',
	'tool.json-schema-validate.faq.1.question': 'How are validation errors mapped back to the input?',
	'tool.json-schema-validate.faq.1.answer':
		'Each schema error includes a JSON Pointer path and is mapped to the matching line and column in your JSON input for faster debugging.',
	'tool.json-schema-validate.faq.2.question': 'Can I validate invalid schema documents?',
	'tool.json-schema-validate.faq.2.answer':
		'Yes. If the schema itself is invalid or cannot be compiled, the tool reports schema-level errors separately from data validation errors.',
	'tool.json-schema-validate.use_case.0':
		'Validate API request and response payloads against contract schemas',
	'tool.json-schema-validate.use_case.1':
		'Debug failed webhook payloads with path-based validation feedback',
	'tool.json-schema-validate.use_case.2':
		'Test fixture and mock data against strict schema constraints',
	'tool.json-schema-validate.use_case.3': 'Verify migration from Draft-07 schemas to Draft 2020-12',
	'tool.text-word-character-counter.display_name': 'Word & Character Counter',
	'tool.text-word-character-counter.tagline': 'Count words, characters, and reading time instantly',
	'tool.text-word-character-counter.description':
		'Count words, characters, sentences, paragraphs, and estimated reading time for any text. Fast, private, and fully browser-based.',
	'tool.text-word-character-counter.primary_keyword': 'word character counter',
	'tool.text-word-character-counter.meta_title': 'Word & Character Counter — fmtly.dev',
	'tool.text-word-character-counter.meta_description':
		'Free online word and character counter with sentence, paragraph, and reading-time metrics. Runs entirely in your browser.',
	'tool.text-word-character-counter.operation': 'Count Text',
	'tool.text-word-character-counter.faq.0.question': 'How are words counted?',
	'tool.text-word-character-counter.faq.0.answer':
		'Words are counted from letter and number groups, including common apostrophes and hyphenated forms.',
	'tool.text-word-character-counter.faq.1.question': 'How is reading time estimated?',
	'tool.text-word-character-counter.faq.1.answer':
		'Reading time is estimated at about 200 words per minute and rounded up to whole minutes.',
	'tool.text-word-character-counter.faq.2.question': 'Does my text leave my device?',
	'tool.text-word-character-counter.faq.2.answer':
		'No. Counting and analysis run entirely in your browser and no text is uploaded to a server.',
	'tool.text-word-character-counter.use_case.0':
		'Check article and documentation length before publishing',
	'tool.text-word-character-counter.use_case.1':
		'Optimize UI copy and prompts against character constraints',
	'tool.text-word-character-counter.use_case.2':
		'Estimate reading time for blog posts, docs, and release notes',
	'tool.text-word-character-counter.use_case.3':
		'Compare draft versions using objective text length metrics',
	'tool.text-lorem-ipsum-generator.display_name': 'Lorem Ipsum Generator',
	'tool.text-lorem-ipsum-generator.tagline':
		'Generate placeholder text in paragraphs, sentences, or words with seed control',
	'tool.text-lorem-ipsum-generator.description':
		'Generate deterministic Lorem Ipsum text for mockups, UI previews, and content testing. Control paragraphs, sentences, words, seed value, and plain/HTML output directly in your browser.',
	'tool.text-lorem-ipsum-generator.primary_keyword': 'lorem ipsum generator',
	'tool.text-lorem-ipsum-generator.meta_title': 'Lorem Ipsum Generator — fmtly.dev',
	'tool.text-lorem-ipsum-generator.meta_description':
		'Free Lorem Ipsum generator with paragraph, sentence, and word modes, seeded output, and plain/HTML export. Fast, private, and 100% browser-based.',
	'tool.text-lorem-ipsum-generator.operation': 'Generate Lorem Ipsum',
	'tool.text-lorem-ipsum-generator.faq.0.question': 'Can I generate deterministic Lorem Ipsum?',
	'tool.text-lorem-ipsum-generator.faq.0.answer':
		'Yes. Use the seed field to reproduce the exact same output across runs with identical options.',
	'tool.text-lorem-ipsum-generator.faq.1.question':
		'Can I output HTML paragraphs instead of plain text?',
	'tool.text-lorem-ipsum-generator.faq.1.answer':
		'Yes. Switch output format to HTML to generate paragraph markup for direct use in prototypes.',
	'tool.text-lorem-ipsum-generator.faq.2.question': 'Is generated text created locally?',
	'tool.text-lorem-ipsum-generator.faq.2.answer':
		'Yes. Generation runs entirely in your browser and no text is sent to a server.',
	'tool.text-lorem-ipsum-generator.use_case.0':
		'Fill wireframes and UI mocks with realistic placeholder copy',
	'tool.text-lorem-ipsum-generator.use_case.1':
		'Test typography, spacing, and overflow behaviors in responsive layouts',
	'tool.text-lorem-ipsum-generator.use_case.2':
		'Generate repeatable seeded fixtures for frontend snapshots and visual tests',
	'tool.text-lorem-ipsum-generator.use_case.3':
		'Create plain text or HTML placeholder content for CMS demos',
	'tool.text-markdown-to-html.display_name': 'Markdown to HTML',
	'tool.text-markdown-to-html.tagline':
		'Convert Markdown into production-ready HTML with live preview',
	'tool.text-markdown-to-html.description':
		'Convert Markdown to clean HTML with live preview, GFM tables, fenced code highlighting, and link/image safety controls. Everything runs locally in your browser.',
	'tool.text-markdown-to-html.primary_keyword': 'markdown to html converter',
	'tool.text-markdown-to-html.meta_title': 'Markdown to HTML Converter — Live Preview | fmtly.dev',
	'tool.text-markdown-to-html.meta_description':
		'Convert Markdown to HTML with live preview, GFM table support, and syntax-highlighted code blocks. Fast, private, and browser-based.',
	'tool.text-markdown-to-html.operation': 'Convert Markdown',
	'tool.text-markdown-to-html.faq.0.question':
		'Does this converter support GitHub-Flavored Markdown tables?',
	'tool.text-markdown-to-html.faq.0.answer':
		'Yes. GFM table syntax is supported and can be toggled on or off in the options panel.',
	'tool.text-markdown-to-html.faq.1.question':
		'Can fenced code blocks be syntax highlighted automatically?',
	'tool.text-markdown-to-html.faq.1.answer':
		'Yes. The converter highlights fenced code blocks and keeps language classes in the generated HTML for downstream styling.',
	'tool.text-markdown-to-html.faq.2.question': 'How does the tool handle unsafe links or raw HTML?',
	'tool.text-markdown-to-html.faq.2.answer':
		'Unsafe link/image protocols are removed, and raw HTML blocks are escaped by default. Advanced users can allow raw HTML from the options panel.',
	'tool.text-markdown-to-html.use_case.0':
		'Prepare README and docs content for static site generators',
	'tool.text-markdown-to-html.use_case.1':
		'Preview Markdown output before publishing release notes or changelogs',
	'tool.text-markdown-to-html.use_case.2':
		'Generate sanitized HTML snippets for CMS editors and knowledge bases',
	'tool.text-markdown-to-html.use_case.3':
		'Convert technical tutorials with code blocks into embeddable HTML',
	'tool.text-string-case-converter.display_name': 'String Case Converter',
	'tool.text-string-case-converter.tagline':
		'Convert text between camelCase, PascalCase, snake_case, kebab-case, and more',
	'tool.text-string-case-converter.description':
		'Convert text instantly between camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case, and Sentence case. Fast, private, and fully browser-based.',
	'tool.text-string-case-converter.primary_keyword': 'string case converter',
	'tool.text-string-case-converter.meta_title': 'String Case Converter — fmtly.dev',
	'tool.text-string-case-converter.meta_description':
		'Free online string case converter for camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case, and Sentence case.',
	'tool.text-string-case-converter.operation': 'Convert Case',
	'tool.text-string-case-converter.faq.0.question':
		'Which naming styles does the converter support?',
	'tool.text-string-case-converter.faq.0.answer':
		'The tool supports camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case, and Sentence case in one view.',
	'tool.text-string-case-converter.faq.1.question':
		'Can it parse mixed input like camelCase, underscores, and hyphens?',
	'tool.text-string-case-converter.faq.1.answer':
		'Yes. Mixed delimiters and existing casing are tokenized first, then converted to each target style consistently.',
	'tool.text-string-case-converter.faq.2.question': 'Does text conversion happen locally?',
	'tool.text-string-case-converter.faq.2.answer':
		'Yes. All case conversion runs in your browser and no text is sent to a server.',
	'tool.text-string-case-converter.use_case.0':
		'Normalize API fields and config keys across different naming conventions',
	'tool.text-string-case-converter.use_case.1':
		'Convert UI labels into code-ready variable names quickly',
	'tool.text-string-case-converter.use_case.2':
		'Standardize team naming patterns in docs, schemas, and payload examples',
	'tool.text-string-case-converter.use_case.3':
		'Prepare consistent identifiers for TypeScript, Python, SQL, and shell scripts',
	'tool.text-text-reverser.display_name': 'Text Reverser',
	'tool.text-text-reverser.tagline': 'Reverse text by characters, words, or lines in one click',
	'tool.text-text-reverser.description':
		'Reverse text instantly by characters, words, or lines. Great for quick string transformations, debugging text flows, and content experiments in your browser.',
	'tool.text-text-reverser.primary_keyword': 'text reverser',
	'tool.text-text-reverser.meta_title': 'Text Reverser — fmtly.dev',
	'tool.text-text-reverser.meta_description':
		'Free online text reverser that flips text by characters, words, or lines instantly. Fast, private, and fully browser-based.',
	'tool.text-text-reverser.operation': 'Reverse Text',
	'tool.text-text-reverser.faq.0.question': 'What reverse modes are available?',
	'tool.text-text-reverser.faq.0.answer':
		'You can reverse text by individual characters, by words, or by full lines, each shown as a separate output.',
	'tool.text-text-reverser.faq.1.question': 'Does word reverse keep spaces and tabs in place?',
	'tool.text-text-reverser.faq.1.answer':
		'Yes. Word mode preserves whitespace structure while reversing token order, so spacing stays readable.',
	'tool.text-text-reverser.faq.2.question': 'Does my text stay on device?',
	'tool.text-text-reverser.faq.2.answer':
		'Yes. Reversal runs locally in your browser and no input is uploaded to any server.',
	'tool.text-text-reverser.use_case.0':
		'Generate mirrored strings for testing parsers and tokenizers',
	'tool.text-text-reverser.use_case.1': 'Reorder multiline notes quickly by reversing line order',
	'tool.text-text-reverser.use_case.2':
		'Validate word-splitting logic with whitespace-preserving reverse output',
	'tool.text-text-reverser.use_case.3':
		'Create playful transformed text variants for content experiments',
	'tool.text-duplicate-line-remover.display_name': 'Duplicate Line Remover',
	'tool.text-duplicate-line-remover.tagline':
		'Remove duplicate lines while preserving first occurrence order',
	'tool.text-duplicate-line-remover.description':
		'Remove duplicate lines from text while preserving the first occurrence of each line. Ideal for cleaning logs, deduplicating lists, and preparing unique datasets in your browser.',
	'tool.text-duplicate-line-remover.primary_keyword': 'duplicate line remover',
	'tool.text-duplicate-line-remover.meta_title': 'Duplicate Line Remover — fmtly.dev',
	'tool.text-duplicate-line-remover.meta_description':
		'Free duplicate line remover that removes duplicate lines while preserving first occurrence order. Fast, private, and 100% in your browser.',
	'tool.text-duplicate-line-remover.operation': 'Remove Duplicates',
	'tool.text-duplicate-line-remover.faq.0.question': 'Which lines are kept as duplicates?',
	'tool.text-duplicate-line-remover.faq.0.answer':
		'The first occurrence of each line is kept; subsequent identical lines are removed as duplicates.',
	'tool.text-duplicate-line-remover.faq.1.question': 'Are empty lines treated as duplicates?',
	'tool.text-duplicate-line-remover.faq.1.answer':
		'Yes. Empty lines are unique entries, so multiple empty lines will be deduplicated to a single empty line.',
	'tool.text-duplicate-line-remover.faq.2.question': 'Is my text processed locally?',
	'tool.text-duplicate-line-remover.faq.2.answer':
		'Yes. All deduplication runs in your browser; your text never leaves your device.',
	'tool.text-duplicate-line-remover.use_case.0':
		'Clean server logs and application traces by removing repeated entries',
	'tool.text-duplicate-line-remover.use_case.1':
		'Deduplicate URL lists, email lists, or inventory records before import',
	'tool.text-duplicate-line-remover.use_case.2':
		'Prepare unique word lists for testing vocabulary or language models',
	'tool.text-duplicate-line-remover.use_case.3': 'Deduplicate configuration files',
	'tool.text-line-sorter.display_name': 'Line Sorter',
	'tool.text-line-sorter.tagline':
		'Sort lines alphabetically, numerically, by length, or with seeded shuffle',
	'tool.text-line-sorter.description':
		'Sort text lines instantly with advanced controls for case sensitivity, trimming, deduplication, empty-line removal, and deterministic shuffle seeds. Everything runs locally in your browser.',
	'tool.text-line-sorter.primary_keyword': 'line sorter',
	'tool.text-line-sorter.meta_title': 'Line Sorter — Sort Text Lines Fast | fmtly.dev',
	'tool.text-line-sorter.meta_description':
		'Sort lines alphabetically, numerically, by length, or random shuffle with dedupe and empty-line controls. Fast, private, and fully browser-based.',
	'tool.text-line-sorter.operation': 'Sort Lines',
	'tool.text-line-sorter.faq.0.question': 'Which sort modes are supported?',
	'tool.text-line-sorter.faq.0.answer':
		'Alphabetical, numeric, length-based, and deterministic random shuffle modes are available. You can also switch between ascending and descending order.',
	'tool.text-line-sorter.faq.1.question': 'Can I remove empty lines and duplicates before sorting?',
	'tool.text-line-sorter.faq.1.answer':
		'Yes. Enable empty-line removal and deduplication to normalize input before sorting, which is useful for logs, lists, and exported data.',
	'tool.text-line-sorter.faq.2.question': 'Does it stay responsive for large files?',
	'tool.text-line-sorter.faq.2.answer':
		'Yes. Inputs over 500KB are processed in a Web Worker, so sorting stays responsive while keeping your data in the browser.',
	'tool.text-line-sorter.use_case.0': 'Normalize and sort log files before comparing environments',
	'tool.text-line-sorter.use_case.1': 'Prepare clean sorted lists of domains, emails, IDs, or tags',
	'tool.text-line-sorter.use_case.2':
		'Sort release notes, changelog entries, or checklist items quickly',
	'tool.text-line-sorter.use_case.3': 'Create deterministic shuffled datasets for testing and QA',
	'tool.text-diff-compare.display_name': 'Diff & Compare',
	'tool.text-diff-compare.tagline': 'Compare two text inputs side-by-side',
	'tool.text-diff-compare.description':
		'Side-by-side or unified diff of two plain text inputs with line-level and word-level change highlighting.',
	'tool.text-diff-compare.primary_keyword': 'text diff compare',
	'tool.text-diff-compare.meta_title': 'Text Diff & Compare Tool - Side-by-side Comparison',
	'tool.text-diff-compare.meta_description':
		'Compare two text inputs with side-by-side or unified diff view. Highlight line and word-level changes.',
	'tool.text-diff-compare.operation': 'Compare two texts and show differences',
	'tool.text-diff-compare.faq.0.question': 'What diff algorithms are supported?',
	'tool.text-diff-compare.faq.0.answer':
		'We support Myers, Patience, and Histogram algorithms. Myers is the default and works well for most cases. Patience is better for structured changes, and Histogram is faster for large files.',
	'tool.text-diff-compare.faq.1.question': 'Can I ignore whitespace or case differences?',
	'tool.text-diff-compare.faq.1.answer':
		'Yes, you can configure the diff to ignore whitespace changes, case differences, and empty lines using the options panel.',
	'tool.text-diff-compare.faq.2.question': 'What output formats are available?',
	'tool.text-diff-compare.faq.2.answer':
		'You can view diffs in side-by-side mode, unified format, or inline with Monaco editor. The unified diff can be downloaded as a .diff file.',
	'tool.text-diff-compare.use_case.0': 'Compare code versions before committing',
	'tool.text-diff-compare.use_case.1': 'Review document changes and edits',
	'tool.text-diff-compare.use_case.2': 'Analyze configuration file modifications',
	'tool.text-diff-compare.use_case.3': 'Track changes in logs or data exports',
	'tool.text-regex-tester.display_name': 'Regex Tester',
	'tool.text-regex-tester.tagline':
		'Test regular expressions with live highlights, capture groups, and flag toggles',
	'tool.text-regex-tester.description':
		'Test JavaScript regular expressions against sample text with real-time highlighting, full flag controls, capture group inspection, and detailed match metrics. Everything runs locally in your browser.',
	'tool.text-regex-tester.primary_keyword': 'regex tester',
	'tool.text-regex-tester.meta_title': 'Regex Tester — Live Regex Matches | fmtly.dev',
	'tool.text-regex-tester.meta_description':
		'Test regular expressions online with live match highlights, capture groups, and full regex flag toggles. Fast, private, and fully browser-based on fmtly.',
	'tool.text-regex-tester.operation': 'Test Regex',
	'tool.text-regex-tester.faq.0.question':
		'Does this tool support JavaScript regex flags like g, i, m, s, u, y, and d?',
	'tool.text-regex-tester.faq.0.answer':
		'Yes. You can toggle all supported JavaScript regex flags individually and inspect how each flag changes matches instantly.',
	'tool.text-regex-tester.faq.1.question':
		'Can I inspect numbered and named capture groups for each match?',
	'tool.text-regex-tester.faq.1.answer':
		'Yes. Every match includes numbered capture groups and named groups, including values and positions when available.',
	'tool.text-regex-tester.faq.2.question': 'Is my pattern and test text processed on a server?',
	'tool.text-regex-tester.faq.2.answer':
		'No. Pattern matching runs locally in your browser and no regex or text data is uploaded.',
	'tool.text-regex-tester.use_case.0':
		'Debug API log parsing patterns before using them in production',
	'tool.text-regex-tester.use_case.1':
		'Validate form input patterns and edge cases with real sample text',
	'tool.text-regex-tester.use_case.2':
		'Prototype search and extraction rules for scripts, ETL, and automation tasks',
	'tool.text-regex-tester.use_case.3':
		'Teach and learn regex fundamentals with instant visual match feedback',
	'tool.text-escape-unescape.display_name': 'Text Escape / Unescape',
	'tool.text-escape-unescape.tagline':
		'Escape or unescape text for JSON, HTML, XML, URL, SQL, and regex contexts',
	'tool.text-escape-unescape.description':
		'Convert strings safely between escaped and plain forms for JSON, HTML entities, XML entities, URL encoding, SQL literals, and regular expressions. Includes large-input worker processing for responsive UX.',
	'tool.text-escape-unescape.primary_keyword': 'text escape unescape',
	'tool.text-escape-unescape.meta_title': 'Text Escape/Unescape — JSON, HTML, URL, SQL | fmtly.dev',
	'tool.text-escape-unescape.meta_description':
		'Escape and unescape text instantly for JSON, HTML, XML, URL, SQL, and regex. Browser-only processing with fast large-text performance and zero uploads.',
	'tool.text-escape-unescape.operation': 'Escape / Unescape Text',
	'tool.text-escape-unescape.faq.0.question':
		'Which formats can I escape and unescape with this tool?',
	'tool.text-escape-unescape.faq.0.answer':
		'You can process JSON strings, HTML entities, XML entities, URL encoding, SQL string literals, and regex-special characters in both escape and unescape directions.',
	'tool.text-escape-unescape.faq.1.question':
		'How does this differ from a basic URL or HTML encoder?',
	'tool.text-escape-unescape.faq.1.answer':
		'It combines multiple escape standards in one workspace, supports direction switching, and includes format-specific options like URL plus handling and SQL quote wrapping.',
	'tool.text-escape-unescape.faq.2.question': 'Does large text stay fast and private?',
	'tool.text-escape-unescape.faq.2.answer':
		'Yes. Processing stays in your browser, and inputs above 500KB are handled in a Web Worker to keep the UI responsive without uploading data.',
	'tool.text-escape-unescape.use_case.0':
		'Prepare user input safely for JSON payloads, query strings, and SQL statements',
	'tool.text-escape-unescape.use_case.1':
		'Decode escaped logs or API samples back to readable plain text',
	'tool.text-escape-unescape.use_case.2':
		'Build and debug regex patterns by escaping or unescaping metacharacters',
	'tool.text-escape-unescape.use_case.3':
		'Normalize mixed escaped content while preserving browser-only privacy guarantees',
	'ui.text_escape.format_label': 'Format',
	'ui.text_escape.action_label': 'Action',
	'ui.text_escape.action.escape': 'Escape',
	'ui.text_escape.action.unescape': 'Unescape',
	'ui.text_escape.format.json': 'JSON String',
	'ui.text_escape.format.html': 'HTML Entities',
	'ui.text_escape.format.xml': 'XML Entities',
	'ui.text_escape.format.url': 'URL Component',
	'ui.text_escape.format.sql': 'SQL String',
	'ui.text_escape.format.regex': 'Regex Pattern',
	'ui.text_escape.input_label': 'Input',
	'ui.text_escape.output_label': 'Output',
	'ui.text_escape.input_placeholder': 'Type or paste text to process...',
	'ui.text_escape.output_placeholder': 'Escaped or unescaped output appears here...',
	'ui.text_escape.option.url_encode_plus': 'Encode spaces as +',
	'ui.text_escape.option.url_decode_plus': 'Decode + as space',
	'ui.text_escape.option.sql_wrap_quotes': 'Wrap with single quotes',
	'ui.text_escape.button.swap_action': 'Swap action',
	'ui.text_escape.worker_active':
		'Large input detected (>{size}). Processing runs in a Web Worker.',
	'ui.text_escape.worker_failed':
		'Worker processing failed. Falling back to main thread processing.',
	'ui.text_escape.warning.no_changes': 'No changes detected for the selected format and action.',
	'ui.text_escape.error.invalid_json_escape': 'Invalid JSON escape sequence: {detail}',
	'ui.text_escape.error.invalid_url_encoding': 'Invalid URL-encoded input: {detail}',
	'ui.text_escape.error.detail': 'Processing failed: {detail}',
	'ui.diff_compare.statistics': 'Comparison Statistics',
	'ui.diff_compare.added_lines': 'Added lines',
	'ui.diff_compare.removed_lines': 'Removed lines',
	'ui.diff_compare.unchanged_lines': 'Unchanged lines',
	'ui.diff_compare.total_lines': 'Total lines',
	'ui.diff_compare.similarity': 'Similarity',
	'ui.diff_compare.hunks': 'Hunks',
	'ui.diff_compare.side_by_side': 'Side by Side',
	'ui.diff_compare.unified': 'Unified',
	'ui.diff_compare.inline': 'Inline',
	'ui.diff_compare.swap': 'Swap',
	'ui.diff_compare.diff_options': 'Diff Options',
	'ui.diff_compare.ignore_whitespace': 'Ignore whitespace',
	'ui.diff_compare.ignore_case': 'Ignore case',
	'ui.diff_compare.ignore_empty_lines': 'Ignore empty lines',
	'ui.diff_compare.show_inline': 'Show inline changes',
	'ui.diff_compare.context_lines': 'Context lines',
	'ui.diff_compare.algorithm': 'Algorithm',
	'ui.diff_compare.original': 'Original',
	'ui.diff_compare.modified': 'Modified',
	'ui.diff_compare.placeholder_left': 'Paste original text here...',
	'ui.diff_compare.placeholder_right': 'Paste modified text here...',
	'ui.diff_compare.unified_diff': 'Unified Diff',
	'ui.diff_compare.add_content': 'Add content to both sides to see diff',
	'ui.diff_compare.no_content': 'No content to diff',
	'ui.diff_compare.swapped': 'Inputs swapped',
	'ui.toast.download_success': 'Downloaded successfully',
	'tool.text-whitespace-cleaner.display_name': 'Whitespace Cleaner',
	'tool.text-whitespace-cleaner.tagline':
		'Trim trailing spaces, collapse multiple blanks, normalize line endings',
	'tool.text-whitespace-cleaner.description':
		'Clean up text formatting by removing trailing spaces, collapsing multiple spaces/tabs to single spaces, and normalizing line endings. Perfect for preparing code, logs, and content for version control or processing.',
	'tool.text-whitespace-cleaner.primary_keyword': 'whitespace cleaner',
	'tool.text-whitespace-cleaner.meta_title': 'Whitespace Cleaner — fmtly.dev',
	'tool.text-whitespace-cleaner.meta_description':
		'Free whitespace cleaner that removes trailing spaces, collapses multiple blanks, and normalizes line endings. Fast, private, and 100% in your browser.',
	'tool.text-whitespace-cleaner.operation': 'Clean Whitespace',
	'tool.text-whitespace-cleaner.faq.0.question': 'Which whitespace characters are removed?',
	'tool.text-whitespace-cleaner.faq.0.answer':
		'Trailing spaces and tabs at end of lines are removed. Multiple spaces/tabs within text are collapsed to single spaces. Line endings are normalized to LF (\\n).',
	'tool.text-whitespace-cleaner.faq.1.question': 'Are leading spaces preserved?',
	'tool.text-whitespace-cleaner.faq.1.answer':
		'Yes. Only trailing whitespace is removed. Leading indentation and spaces within lines are preserved, except multiple spaces/tabs are collapsed to single spaces.',
	'tool.text-whitespace-cleaner.faq.2.question': 'How are line endings normalized?',
	'tool.text-whitespace-cleaner.faq.2.answer':
		'Windows (CRLF) and old Mac (CR) line endings are converted to Unix-style LF (\\n). Multiple consecutive blank lines are collapsed to double line breaks.',
	'tool.text-whitespace-cleaner.use_case.0':
		'Clean code before committing to version control to remove trailing spaces',
	'tool.text-whitespace-cleaner.use_case.1':
		'Normalize text copied from different sources with inconsistent spacing',
	'tool.text-whitespace-cleaner.use_case.2':
		'Prepare logs and data files for consistent processing and analysis',
	'tool.text-whitespace-cleaner.use_case.3':
		'Format content from rich text editors to plain text with consistent spacing',
	'ui.text_counter.words': 'Words',
	'ui.text_counter.characters': 'Characters',
	'ui.text_counter.characters_no_spaces': 'Characters (no spaces)',
	'ui.text_counter.sentences': 'Sentences',
	'ui.text_counter.paragraphs': 'Paragraphs',
	'ui.text_counter.reading_time': 'Reading time',
	'ui.text_counter.minutes': 'min',
	'ui.text_counter.lines': 'lines',
	'ui.text_counter.placeholder': 'Type or paste your text here...',
	'ui.lorem.mode': 'Mode',
	'ui.lorem.mode.paragraphs': 'Paragraphs',
	'ui.lorem.mode.sentences': 'Sentences',
	'ui.lorem.mode.words': 'Words',
	'ui.lorem.count': 'Count',
	'ui.lorem.seed': 'Seed',
	'ui.lorem.random_seed': 'Randomize seed',
	'ui.lorem.generate': 'Generate',
	'ui.lorem.include_classic_opening': 'Include classic opening',
	'ui.lorem.auto_generate': 'Auto-generate on changes',
	'ui.lorem.output_format': 'Output format',
	'ui.lorem.output_format.plain': 'Plain text',
	'ui.lorem.output_format.html': 'HTML',
	'ui.lorem.advanced_options': 'Advanced options',
	'ui.lorem.min_words_per_sentence': 'Min words / sentence',
	'ui.lorem.max_words_per_sentence': 'Max words / sentence',
	'ui.lorem.min_sentences_per_paragraph': 'Min sentences / paragraph',
	'ui.lorem.max_sentences_per_paragraph': 'Max sentences / paragraph',
	'ui.lorem.source': 'Source',
	'ui.lorem.preview': 'Preview',
	'ui.lorem.empty_output': 'Generated output will appear here...',
	'ui.lorem.generated': 'Lorem Ipsum generated',
	'ui.lorem.seed_randomized': 'Seed randomized',
	'ui.lorem.no_output': 'No generated output yet',
	'ui.markdown_to_html.placeholder': 'Type or paste Markdown here...',
	'ui.markdown_to_html.option.gfm': 'Enable GFM tables and task lists',
	'ui.markdown_to_html.option.breaks': 'Convert single line breaks to <br>',
	'ui.markdown_to_html.option.highlight_code': 'Syntax highlight fenced code blocks',
	'ui.markdown_to_html.option.open_links_in_new_tab': 'Open links in new tab',
	'ui.markdown_to_html.option.allow_raw_html': 'Allow raw HTML blocks (advanced)',
	'ui.markdown_to_html.view.preview': 'Preview',
	'ui.markdown_to_html.view.html': 'HTML',
	'ui.markdown_to_html.status.converting': 'Converting Markdown...',
	'ui.markdown_to_html.preview_aria': 'Markdown HTML live preview',
	'ui.markdown_to_html.empty_preview': 'Live preview appears here once you enter Markdown.',
	'ui.markdown_to_html.empty_html': 'Generated HTML output will appear here.',
	'ui.markdown_to_html.error.conversion_failed':
		'Markdown conversion failed. Please check your input and try again.',
	'ui.markdown_to_html.toast.no_html_output': 'No HTML output to download',
	'ui.markdown_to_html.warning.unsafe_link_removed': 'Unsafe link removed',
	'ui.markdown_to_html.warning.unsafe_image_removed': 'Unsafe image removed',
	'ui.markdown_to_html.warning.raw_html_escaped': 'Raw HTML escaped for safety',
	'ui.markdown_to_html.stats.headings': 'Headings',
	'ui.markdown_to_html.stats.tables': 'Tables',
	'ui.markdown_to_html.stats.code_blocks': 'Code blocks',
	'ui.markdown_to_html.stats.links': 'Links',
	'ui.markdown_to_html.stats.images': 'Images',
	'ui.markdown_to_html.stats.words': 'Words',
	'ui.text_case.tab_label': 'Case',
	'ui.text_case.placeholder': 'Type or paste text to convert case...',
	'ui.text_case.camel_case': 'camelCase',
	'ui.text_case.pascal_case': 'PascalCase',
	'ui.text_case.snake_case': 'snake_case',
	'ui.text_case.kebab_case': 'kebab-case',
	'ui.text_case.constant_case': 'CONSTANT_CASE',
	'ui.text_case.title_case': 'Title Case',
	'ui.text_case.sentence_case': 'Sentence case',
	'ui.regex.pattern_label': 'Pattern',
	'ui.regex.pattern_placeholder': 'e.g. (?<name>\\w+)',
	'ui.regex.flags_label': 'Flags',
	'ui.regex.test_text_label': 'Test Text',
	'ui.regex.test_text_placeholder': 'Type or paste text to test your pattern...',
	'ui.regex.copy_regex': 'Copy Regex',
	'ui.regex.global_hint':
		'Enable g to iterate all matches. Without g, only the first match is returned.',
	'ui.regex.stats.matches': 'Matches',
	'ui.regex.stats.unique_matches': 'Unique',
	'ui.regex.stats.lines_with_matches': 'Lines',
	'ui.regex.stats.coverage': 'Coverage',
	'ui.regex.stats.duration': 'Runtime',
	'ui.regex.highlight_title': 'Live Highlight',
	'ui.regex.preview_truncated': 'Preview limited to {limit} characters',
	'ui.regex.no_highlight': 'Matches will be highlighted here.',
	'ui.regex.matches_title': 'Matches',
	'ui.regex.match_limit_reached': 'Match limit reached',
	'ui.regex.no_matches': 'No matches found.',
	'ui.regex.match_label': 'Match #{index}',
	'ui.regex.match_position': 'Line {line}, Col {column}',
	'ui.regex.match_range': 'Range: {range}',
	'ui.regex.capture_groups': 'Capture Groups',
	'ui.regex.no_capture_groups': 'No capture groups',
	'ui.regex.named_capture_groups': 'Named Groups',
	'ui.regex.no_named_capture_groups': 'No named groups',
	'ui.regex.group_label': 'Group {index}',
	'ui.regex.group_unmatched': 'No match',
	'ui.regex.error.empty_pattern': 'Enter a regular expression pattern to begin testing.',
	'ui.regex.error.invalid_flag': 'Invalid regex flag: {flag}',
	'ui.regex.error.duplicate_flag': 'Duplicate regex flag: {flag}',
	'ui.regex.error.unsupported_flag': 'Regex flag is not supported in this environment: {flag}',
	'ui.regex.error.syntax_error': 'Pattern syntax error: {detail}',
	'ui.regex.flags.g.label': 'Global',
	'ui.regex.flags.g.description': 'Find all matches, not just the first one',
	'ui.regex.flags.i.label': 'Ignore case',
	'ui.regex.flags.i.description': 'Match letters without case sensitivity',
	'ui.regex.flags.m.label': 'Multiline',
	'ui.regex.flags.m.description': 'Make ^ and $ work per line',
	'ui.regex.flags.s.label': 'Dotall',
	'ui.regex.flags.s.description': 'Allow dot (.) to match new lines',
	'ui.regex.flags.u.label': 'Unicode',
	'ui.regex.flags.u.description': 'Enable full Unicode mode',
	'ui.regex.flags.y.label': 'Sticky',
	'ui.regex.flags.y.description': 'Match strictly from the current lastIndex',
	'ui.regex.flags.d.label': 'Indices',
	'ui.regex.flags.d.description': 'Expose start/end indexes for groups when supported',
	'tool.text-readability-analyzer.display_name': 'Readability Analyzer',
	'tool.text-readability-analyzer.tagline':
		'Measure how easy your text is to read with trusted readability formulas',
	'tool.text-readability-analyzer.description':
		'Analyze text readability with Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, Coleman-Liau, and SMOG. Get sentence complexity and reading-age insights instantly in your browser.',
	'tool.text-readability-analyzer.primary_keyword': 'readability analyzer',
	'tool.text-readability-analyzer.meta_title':
		'Readability Analyzer — Flesch, Fog, SMOG Scores | fmtly.dev',
	'tool.text-readability-analyzer.meta_description':
		'Free readability analyzer with Flesch, Flesch-Kincaid, Gunning Fog, Coleman-Liau, and SMOG metrics. Fast, private, and fully browser-based.',
	'tool.text-readability-analyzer.operation': 'Analyze Readability',
	'tool.text-readability-analyzer.faq.0.question':
		'Which readability formulas are included in this analyzer?',
	'tool.text-readability-analyzer.faq.0.answer':
		'The analyzer includes Flesch Reading Ease, Flesch-Kincaid Grade, Gunning Fog, Coleman-Liau, and SMOG, along with supporting text complexity metrics.',
	'tool.text-readability-analyzer.faq.1.question':
		'Why can the SMOG score be unavailable for short texts?',
	'tool.text-readability-analyzer.faq.1.answer':
		'SMOG is statistically more reliable with at least 3 sentences. For shorter inputs, the tool shows a warning instead of an unstable score.',
	'tool.text-readability-analyzer.faq.2.question':
		'Does readability analysis run locally or on a server?',
	'tool.text-readability-analyzer.faq.2.answer':
		'Everything runs locally in your browser. Your text is never uploaded to any server.',
	'tool.text-readability-analyzer.use_case.0':
		'Assess docs, onboarding flows, and help center articles before publishing',
	'tool.text-readability-analyzer.use_case.1':
		'Compare multiple draft versions and pick the clearest copy',
	'tool.text-readability-analyzer.use_case.2':
		'Optimize product microcopy and in-app guidance for broader audiences',
	'tool.text-readability-analyzer.use_case.3':
		'Spot dense sections in technical documentation and simplify them',
	'tool.text-morse-code-translator.display_name': 'Morse Code Translator',
	'tool.text-morse-code-translator.tagline':
		'Translate plain text to Morse code and decode Morse back to readable text',
	'tool.text-morse-code-translator.description':
		'Convert text to International Morse code and decode Morse sequences back instantly. Supports letters, numbers, punctuation, large-input worker processing, and browser-only privacy.',
	'tool.text-morse-code-translator.primary_keyword': 'morse code translator',
	'tool.text-morse-code-translator.meta_title': 'Morse Code Translator — Text ↔ Morse | fmtly.dev',
	'tool.text-morse-code-translator.meta_description':
		'Translate text to Morse code and decode Morse back to plain text instantly. Fast, private, and fully browser-based with large-input worker support.',
	'tool.text-morse-code-translator.operation': 'Translate Morse Code',
	'tool.text-morse-code-translator.faq.0.question': 'Which Morse variant does this translator use?',
	'tool.text-morse-code-translator.faq.0.answer':
		'It uses standard International Morse code for Latin letters, numbers, and common punctuation.',
	'tool.text-morse-code-translator.faq.1.question': 'How does decoding treat unknown Morse tokens?',
	'tool.text-morse-code-translator.faq.1.answer':
		'Unknown tokens are flagged and can be replaced with a configurable placeholder so you can keep reviewing partial results.',
	'tool.text-morse-code-translator.faq.2.question': 'Can I process large logs or long payloads?',
	'tool.text-morse-code-translator.faq.2.answer':
		'Yes. Inputs above 500KB are processed in a Web Worker to keep typing and UI interactions responsive.',
	'tool.text-morse-code-translator.use_case.0':
		'Encode call signs, alerts, or training phrases into Morse code quickly',
	'tool.text-morse-code-translator.use_case.1':
		'Decode captured Morse snippets from logs, transcripts, or exercises',
	'tool.text-morse-code-translator.use_case.2':
		'Teach Morse fundamentals with instant encode/decode feedback',
	'tool.text-morse-code-translator.use_case.3':
		'Verify punctuation and spacing behavior before using Morse in tooling',
	'ui.morse.mode_label': 'Mode',
	'ui.morse.mode.encode': 'Text → Morse',
	'ui.morse.mode.decode': 'Morse → Text',
	'ui.morse.separator_label': 'Word separator',
	'ui.morse.separator.slash': '/ slash',
	'ui.morse.separator.pipe': '| pipe',
	'ui.morse.separator.newline': 'New line',
	'ui.morse.option.preserve_unsupported_encode': 'Keep unsupported input characters in output',
	'ui.morse.option.preserve_unsupported_decode': 'Insert placeholder for unknown Morse tokens',
	'ui.morse.option.unknown_placeholder': 'Unknown placeholder',
	'ui.morse.input_label': 'Input',
	'ui.morse.output_label': 'Output',
	'ui.morse.input_placeholder.encode': 'Type or paste text to convert into Morse code...',
	'ui.morse.input_placeholder.decode': 'Paste Morse code (., -, /, |) to decode...',
	'ui.morse.output_placeholder.encode': 'Morse output appears here...',
	'ui.morse.output_placeholder.decode': 'Decoded text appears here...',
	'ui.morse.button.swap_mode': 'Swap mode & use output',
	'ui.morse.worker_active': 'Large input detected (>{size}). Processing runs in a Web Worker.',
	'ui.morse.worker_failed': 'Worker processing failed. Falling back to main thread processing.',
	'ui.morse.warning.unsupported_input_characters':
		'Some input characters are not part of supported Morse mappings.',
	'ui.morse.warning.unknown_morse_tokens': 'Some Morse tokens could not be decoded.',
	'ui.morse.warning.no_changes': 'No changes detected for the selected mode.',
	'ui.morse.stat.symbols': 'Symbols',
	'ui.morse.stat.words': 'Words',
	'ui.morse.stat.unsupported': 'Unsupported',
	'ui.morse.stat.unknown_tokens': 'Unknown tokens',
	'ui.readability.unavailable': '—',
	'ui.readability.input_label': 'Input text',
	'ui.readability.input_placeholder': 'Paste or type text to analyze readability...',
	'ui.readability.output_title': 'Readability analysis',
	'ui.readability.processing': 'Analyzing...',
	'ui.readability.copy_report': 'Copy report',
	'ui.readability.worker_active': 'Large input detected (>{size}). Analysis runs in a Web Worker.',
	'ui.readability.worker_failed': 'Worker processing failed. Falling back to main thread analysis.',
	'ui.readability.level_label': 'Overall readability',
	'ui.readability.level.very_easy': 'Very Easy',
	'ui.readability.level.easy': 'Easy',
	'ui.readability.level.fairly_easy': 'Fairly Easy',
	'ui.readability.level.standard': 'Standard',
	'ui.readability.level.fairly_difficult': 'Fairly Difficult',
	'ui.readability.level.difficult': 'Difficult',
	'ui.readability.level.very_difficult': 'Very Difficult',
	'ui.readability.level_desc.very_easy': 'Suitable for broad audiences and quick scanning.',
	'ui.readability.level_desc.easy': 'Clear language with minimal cognitive load.',
	'ui.readability.level_desc.fairly_easy': 'Good for product docs, guides, and general web copy.',
	'ui.readability.level_desc.standard':
		'Balanced readability for mixed technical and non-technical readers.',
	'ui.readability.level_desc.fairly_difficult':
		'Dense in parts — simplify long sentences where possible.',
	'ui.readability.level_desc.difficult':
		'Requires focused reading. Consider shorter sentences and simpler wording.',
	'ui.readability.level_desc.very_difficult':
		'Highly dense text. Rewrite for clarity before publishing widely.',
	'ui.readability.metric.words': 'Words',
	'ui.readability.metric.sentences': 'Sentences',
	'ui.readability.metric.syllables': 'Syllables',
	'ui.readability.metric.reading_age': 'Reading age',
	'ui.readability.metric.reading_time': 'Reading time',
	'ui.readability.metric.paragraphs': 'Paragraphs',
	'ui.readability.metric.complex_words': 'Complex words',
	'ui.readability.stat.avg_words_per_sentence': 'Avg words/sentence',
	'ui.readability.stat.avg_syllables_per_word': 'Avg syllables/word',
	'ui.readability.stat.characters': 'Characters',
	'ui.readability.stat.letters': 'Letters',
	'ui.readability.scores_title': 'Readability formulas',
	'ui.readability.score.flesch_ease': 'Flesch Reading Ease',
	'ui.readability.score.flesch_kincaid': 'Flesch-Kincaid Grade',
	'ui.readability.score.gunning_fog': 'Gunning Fog',
	'ui.readability.score.coleman_liau': 'Coleman-Liau Index',
	'ui.readability.score.smog': 'SMOG',
	'ui.readability.score_desc.flesch_ease': 'Higher is easier to read.',
	'ui.readability.score_desc.flesch_kincaid': 'Estimated U.S. school grade level.',
	'ui.readability.score_desc.gunning_fog': 'Complexity based on sentence and word difficulty.',
	'ui.readability.score_desc.coleman_liau': 'Readability from characters and sentence density.',
	'ui.readability.score_desc.smog': 'Reading grade estimate from polysyllabic words.',
	'ui.readability.warning.insufficient_sentences_for_smog':
		'SMOG needs at least 3 sentences for a stable estimate.',
	'ui.readability.report_title': 'Readability Report',
	'ui.readability.report_level': 'Level',
	'ui.readability.report_reading_age': 'Estimated reading age',
	'ui.text_reverser.tab_label': 'Reverse',
	'ui.text_reverser.placeholder': 'Type or paste text to reverse...',
	'ui.text_reverser.characters': 'Reverse by characters',
	'ui.text_reverser.words': 'Reverse by words',
	'ui.text_reverser.lines': 'Reverse by lines',
	'ui.text_reverser.lines_count': 'lines',
	'ui.duplicate_line_remover.tab_label': 'Deduplicate',
	'ui.duplicate_line_remover.placeholder': 'Type or paste text to remove duplicate lines...',
	'ui.duplicate_line_remover.unique_lines': 'Unique lines',
	'ui.duplicate_line_remover.duplicates_removed': 'Duplicates removed',
	'ui.duplicate_line_remover.result': 'Result',
	'ui.line_sorter.tab_label': 'Sort',
	'ui.line_sorter.placeholder': 'Type or paste lines to sort...',
	'ui.line_sorter.mode_label': 'Sort mode',
	'ui.line_sorter.mode.alphabetical': 'Alphabetical',
	'ui.line_sorter.mode.numeric': 'Numeric',
	'ui.line_sorter.mode.length': 'By length',
	'ui.line_sorter.mode.random': 'Random shuffle',
	'ui.line_sorter.direction_label': 'Direction',
	'ui.line_sorter.direction.asc': 'Ascending',
	'ui.line_sorter.direction.desc': 'Descending',
	'ui.line_sorter.option.case_sensitive': 'Case-sensitive sort',
	'ui.line_sorter.option.trim_before_sort': 'Trim each line before sorting',
	'ui.line_sorter.option.remove_empty_lines': 'Remove empty lines',
	'ui.line_sorter.option.deduplicate': 'Deduplicate lines first',
	'ui.line_sorter.shuffle_seed': 'Shuffle seed',
	'ui.line_sorter.generate_seed': 'Randomize seed',
	'ui.line_sorter.input_lines': 'Input lines',
	'ui.line_sorter.output_lines': 'Output lines',
	'ui.line_sorter.empty_lines_removed': 'Empty lines removed',
	'ui.line_sorter.duplicates_removed': 'Duplicates removed',
	'ui.line_sorter.lines_moved': 'Lines moved',
	'ui.line_sorter.output': 'Sorted output',
	'ui.line_sorter.apply_output': 'Apply to input',
	'ui.line_sorter.status.processing': 'Sorting lines...',
	'ui.line_sorter.status.worker': 'Large input mode (Web Worker)',
	'ui.line_sorter.error.processing_failed':
		'Line sorting failed. Please adjust options or input and try again.',
	'ui.line_sorter.toast.applied': 'Sorted output applied to input',
	'ui.line_sorter.no_output': 'No sorted output to display yet',
	'ui.whitespace_cleaner.tab_label': 'Whitespace',
	'ui.whitespace_cleaner.placeholder': 'Type or paste text to clean whitespace...',
	'ui.whitespace_cleaner.output': 'Output',
	'ui.whitespace_cleaner.statistics': 'Statistics',
	'ui.whitespace_cleaner.normalized': 'Normalized',
	'ui.whitespace_cleaner.trailing_spaces': 'Trailing spaces',
	'ui.whitespace_cleaner.leading_spaces': 'Leading spaces',
	'ui.whitespace_cleaner.blanks_collapsed': 'Blanks collapsed',
	'ui.whitespace_cleaner.tabs_converted': 'Tabs converted',
	'ui.whitespace_cleaner.spaces_converted': 'Spaces converted',
	'ui.whitespace_cleaner.lines_processed': 'Lines processed',
	'ui.whitespace_cleaner.line_endings_normalized': 'Line endings normalized',
	'ui.whitespace_cleaner.result': 'Result',
	'ui.whitespace_cleaner.options': 'Cleaning Options',
	'ui.whitespace_cleaner.remove_leading': 'Remove leading spaces',
	'ui.whitespace_cleaner.remove_trailing': 'Remove trailing spaces',
	'ui.whitespace_cleaner.collapse_spaces': 'Collapse multiple spaces',
	'ui.whitespace_cleaner.collapse_tabs': 'Collapse tabs to spaces',
	'ui.whitespace_cleaner.convert_tabs_to_spaces': 'Convert tabs to spaces',
	'ui.whitespace_cleaner.convert_spaces_to_tabs': 'Convert spaces to tabs',
	'ui.whitespace_cleaner.trim_lines': 'Trim each line',
	'ui.whitespace_cleaner.remove_all_spaces': 'Remove all spaces',
	'ui.whitespace_cleaner.remove_all_line_breaks': 'Remove all line breaks',
	'ui.whitespace_cleaner.preserve_paragraph_breaks': 'Preserve paragraph breaks',
	'ui.whitespace_cleaner.tab_size': 'Tab size',
	'ui.csv.controls.table_name': 'Table Name',
	'ui.csv.controls.batch_size': 'Batch Size',
	// ── Encode category ──────────────────────────────────────────────────────
	'category.encode.display_name': 'Encode / Decode',
	'category.encode.description':
		'Encode and decode data across common formats — JWT, Base64, URL, HTML entities, and more. Every tool runs entirely in your browser.',
	'category.encode.primary_keyword': 'encode decode tools',
	// ── JWT Decoder tool ─────────────────────────────────────────────────────
	'tool.encode-jwt-decoder.display_name': 'JWT Decoder',
	'tool.encode-jwt-decoder.tagline': 'Decode JWT tokens and inspect claims, expiry, and algorithm',
	'tool.encode-jwt-decoder.description':
		'Decode JSON Web Tokens instantly — inspect the header algorithm, payload claims, expiry timestamps, and raw Base64URL signature. All processing stays in your browser; nothing is ever sent to a server.',
	'tool.encode-jwt-decoder.primary_keyword': 'jwt decoder',
	'tool.encode-jwt-decoder.meta_title':
		'JWT Decoder — Inspect Header, Payload & Claims | fmtly.dev',
	'tool.encode-jwt-decoder.meta_description':
		'Decode and inspect JWT tokens in your browser. View header, payload claims, expiry status, and signature. Fast, private, and free — no data leaves your device.',
	'tool.encode-jwt-decoder.operation': 'Decode JWT',
	'tool.encode-jwt-decoder.faq.0.question': 'Is my JWT sent to a server?',
	'tool.encode-jwt-decoder.faq.0.answer':
		'No. All decoding happens entirely in your browser. Your token never leaves your device, making this tool safe to use with real authentication tokens.',
	'tool.encode-jwt-decoder.faq.1.question': 'Does this tool verify the signature?',
	'tool.encode-jwt-decoder.faq.1.answer':
		'No. Signature verification requires the secret key or public key. This tool decodes and displays the payload only — use your server-side library to verify authenticity.',
	'tool.encode-jwt-decoder.faq.2.question': 'What JWT algorithms are supported?',
	'tool.encode-jwt-decoder.faq.2.answer':
		'The decoder handles any standard three-part JWT regardless of algorithm (HS256, RS256, ES256, etc.), since it only decodes the Base64URL-encoded content without verifying the signature.',
	'tool.encode-jwt-decoder.faq.3.question': 'Can I decode large JWTs or token batches?',
	'tool.encode-jwt-decoder.faq.3.answer':
		'Inputs exceeding 500KB are automatically offloaded to a Web Worker, keeping the UI thread responsive even for unusually large tokens or test payloads.',
	'tool.encode-jwt-decoder.use_case.0':
		'Inspect authentication tokens during local API development and debugging',
	'tool.encode-jwt-decoder.use_case.1':
		'Check token expiry and standard claim values (iss, sub, aud) at a glance',
	'tool.encode-jwt-decoder.use_case.2':
		'Teach JWT structure and the role of header, payload, and signature sections',
	'tool.encode-jwt-decoder.use_case.3':
		'Troubleshoot authorization failures by examining custom claims in the payload',
	// ── JWT Decoder UI strings ────────────────────────────────────────────────
	'ui.jwt.input_placeholder': 'Paste your JWT token here (eyJ…)',
	'ui.jwt.section.header': 'Header',
	'ui.jwt.section.payload': 'Payload',
	'ui.jwt.section.signature': 'Signature',
	'ui.jwt.standard_claims': 'Standard Claims',
	'ui.jwt.all_claims': 'All Claims',
	'ui.jwt.signature_note':
		'Signatures are not verified. Use your server-side library to verify token authenticity.',
	'ui.jwt.status.valid': 'Valid',
	'ui.jwt.status.expired': 'Expired',
	'ui.jwt.status.not_yet_valid': 'Not yet valid',
	'ui.jwt.status.no_expiry': 'No expiry',
	'ui.jwt.expires_in': 'Expires in {time}',
	'ui.jwt.expired_ago': 'Expired {time} ago',
	'ui.jwt.claim.iss': 'Issuer',
	'ui.jwt.claim.sub': 'Subject',
	'ui.jwt.claim.aud': 'Audience',
	'ui.jwt.claim.exp': 'Expires',
	'ui.jwt.claim.nbf': 'Not Before',
	'ui.jwt.claim.iat': 'Issued At',
	'ui.jwt.claim.jti': 'JWT ID',
	'ui.jwt.error.empty': 'Paste a JWT token above to decode it.',
	'ui.jwt.error.invalid_format': 'Invalid JWT format: expected 3 dot-separated parts.',
	'ui.jwt.error.invalid_base64': 'Failed to decode Base64URL encoding.',
	'ui.jwt.error.invalid_json': 'Decoded content is not valid JSON.',
	'ui.jwt.clear': 'Clear',
	'ui.jwt.copy_jwt': 'Copy Token',
	'ui.jwt.copy_header': 'Copy',
	'ui.jwt.copy_payload': 'Copy',
	'ui.jwt.copy_signature': 'Copy',
	'ui.jwt.worker_active': 'Large input (>{size}) runs in Worker.',
	'ui.jwt.worker_failed': 'Worker processing failed. Falling back to main thread.',
	// ── Base64 Encode / Decode tool ──────────────────────────────────────────
	'tool.encode-base64-encode-decode.display_name': 'Base64 Encode / Decode',
	'tool.encode-base64-encode-decode.tagline':
		'Encode or decode Base64 text with standard and URL-safe variants',
	'tool.encode-base64-encode-decode.description':
		'Encode plain text to Base64 or decode Base64 back to UTF-8 text instantly in your browser. Switch between standard and URL-safe variants, control padding behavior, ignore whitespace during decode, and process large input in a Web Worker.',
	'tool.encode-base64-encode-decode.primary_keyword': 'base64 encode decode',
	'tool.encode-base64-encode-decode.meta_title':
		'Base64 Encode / Decode — Standard + URL-Safe | fmtly.dev',
	'tool.encode-base64-encode-decode.meta_description':
		'Encode or decode Base64 in your browser with standard and URL-safe variants, padding controls, and Worker support. No data leaves your device.',
	'tool.encode-base64-encode-decode.operation': 'Encode / Decode Base64',
	'tool.encode-base64-encode-decode.faq.0.question': 'Is my Base64 input sent to a server?',
	'tool.encode-base64-encode-decode.faq.0.answer':
		'No. All Base64 encoding and decoding runs entirely in your browser. Your data never leaves your device.',
	'tool.encode-base64-encode-decode.faq.1.question':
		'What is the difference between standard and URL-safe Base64?',
	'tool.encode-base64-encode-decode.faq.1.answer':
		'Standard Base64 uses + and /, while URL-safe Base64 uses - and _. URL-safe output is preferred in JWTs, query parameters, and filenames where reserved URL characters can cause issues.',
	'tool.encode-base64-encode-decode.faq.2.question':
		'Can this tool decode Base64 with missing padding or line breaks?',
	'tool.encode-base64-encode-decode.faq.2.answer':
		'Yes. The decoder can ignore whitespace and automatically restore missing padding when possible, making it easier to handle copied payloads from logs and tokens.',
	'tool.encode-base64-encode-decode.faq.3.question': 'Can it handle large Base64 payloads?',
	'tool.encode-base64-encode-decode.faq.3.answer':
		'Yes. Inputs larger than 500KB are automatically processed in a Web Worker to keep the interface responsive.',
	'tool.encode-base64-encode-decode.use_case.0':
		'Encode API credentials or test payloads to Base64 during development',
	'tool.encode-base64-encode-decode.use_case.1':
		'Decode Base64 snippets copied from logs, headers, or debugging tools',
	'tool.encode-base64-encode-decode.use_case.2':
		'Switch quickly between standard and URL-safe Base64 variants',
	'tool.encode-base64-encode-decode.use_case.3':
		'Normalize messy Base64 input with whitespace and missing padding',
	// ── Base64 Encode / Decode UI strings ────────────────────────────────────
	'ui.base64.tab_label': 'Base64',
	'ui.base64.action_label': 'Action',
	'ui.base64.action.encode': 'Encode',
	'ui.base64.action.decode': 'Decode',
	'ui.base64.variant_label': 'Variant',
	'ui.base64.variant.standard': 'Standard',
	'ui.base64.variant.url_safe': 'URL-safe',
	'ui.base64.input_label': 'Input',
	'ui.base64.output_label': 'Output',
	'ui.base64.input_placeholder': 'Paste plain text or Base64 content...',
	'ui.base64.output_placeholder': 'Encoded or decoded output appears here...',
	'ui.base64.option.omit_padding': 'Remove trailing = padding',
	'ui.base64.option.ignore_whitespace': 'Ignore line breaks and spaces while decoding',
	'ui.base64.worker_active': 'Large input detected (>{size}). Processing runs in a Web Worker.',
	'ui.base64.worker_failed': 'Worker processing failed. Falling back to main thread processing.',
	'ui.base64.worker_badge': 'Worker',
	'ui.base64.warning.no_changes': 'No changes detected for the selected mode and action.',
	'ui.base64.warning.whitespace_ignored': 'Whitespace characters were removed before decoding.',
	'ui.base64.warning.padding_auto_added':
		'Missing padding was added automatically before decoding.',
	'ui.base64.warning.alphabet_normalized':
		'URL-safe characters were normalized to standard Base64 for decoding.',
	'ui.base64.error.invalid_base64_characters': 'Invalid Base64 input: {detail}',
	'ui.base64.error.invalid_base64_length': 'Invalid Base64 length: {detail}',
	'ui.base64.error.invalid_utf8_output': 'Decoded bytes are not valid UTF-8 text: {detail}',
	'ui.base64.button.swap_direction': 'Swap direction',
	'ui.base64.button.apply_output': 'Apply output to input',
	'ui.base64.toast.applied': 'Output applied to input',
	'ui.base64.characters': 'chars',
	// ── URL Encode / Decode tool ─────────────────────────────────────────────
	'tool.encode-url-encode-decode.display_name': 'URL Encode / Decode',
	'tool.encode-url-encode-decode.tagline':
		'Percent-encode or decode URL text with component and full-URL modes',
	'tool.encode-url-encode-decode.description':
		'Encode or decode URL strings instantly in your browser. Switch between component mode (encodeURIComponent/decodeURIComponent) and full URL mode (encodeURI/decodeURI), handle + as spaces for form-style payloads, and process large input in a Web Worker.',
	'tool.encode-url-encode-decode.primary_keyword': 'url encode decode',
	'tool.encode-url-encode-decode.meta_title':
		'URL Encode / Decode — Percent Encode URLs Online | fmtly.dev',
	'tool.encode-url-encode-decode.meta_description':
		'Encode or decode URL strings instantly in your browser. Supports component/full URL modes, plus-space handling, and large-input Web Worker processing.',
	'tool.encode-url-encode-decode.operation': 'Encode / Decode URL',
	'tool.encode-url-encode-decode.faq.0.question': 'Is my URL data uploaded to a server?',
	'tool.encode-url-encode-decode.faq.0.answer':
		'No. All encoding and decoding happens entirely in your browser. Your input stays on your device.',
	'tool.encode-url-encode-decode.faq.1.question':
		'What is the difference between component mode and full URL mode?',
	'tool.encode-url-encode-decode.faq.1.answer':
		'Component mode is for single fragments like query values and path segments, so it escapes delimiters such as ?, &, and =. Full URL mode keeps URL structure delimiters intact and encodes only unsafe characters.',
	'tool.encode-url-encode-decode.faq.2.question': 'Why does + sometimes decode to a space?',
	'tool.encode-url-encode-decode.faq.2.answer':
		'In application/x-www-form-urlencoded payloads, spaces are often represented as +. Enable the plus-to-space option during decode when you work with form-style data.',
	'tool.encode-url-encode-decode.faq.3.question': 'Can this handle large URL payloads?',
	'tool.encode-url-encode-decode.faq.3.answer':
		'Yes. Inputs above 500KB are automatically processed in a Web Worker to keep the UI responsive.',
	'tool.encode-url-encode-decode.use_case.0':
		'Encode query parameter values safely before sending API requests',
	'tool.encode-url-encode-decode.use_case.1':
		'Decode copied URL fragments from logs while debugging routing issues',
	'tool.encode-url-encode-decode.use_case.2':
		'Validate plus-space behavior in form-urlencoded payload samples',
	'tool.encode-url-encode-decode.use_case.3':
		'Compare encoded and decoded URLs when troubleshooting redirects',
	// ── URL Encode / Decode UI strings ───────────────────────────────────────
	'ui.encode_url.tab_label': 'URL',
	'ui.encode_url.action_label': 'Action',
	'ui.encode_url.action.encode': 'Encode',
	'ui.encode_url.action.decode': 'Decode',
	'ui.encode_url.mode_label': 'Mode',
	'ui.encode_url.mode.component': 'URL component',
	'ui.encode_url.mode.full_url': 'Full URL',
	'ui.encode_url.input_label': 'Input',
	'ui.encode_url.output_label': 'Output',
	'ui.encode_url.input_placeholder': 'Paste text, query params, or a full URL...',
	'ui.encode_url.output_placeholder': 'Encoded or decoded output appears here...',
	'ui.encode_url.option.encode_spaces_as_plus': 'Encode spaces as +',
	'ui.encode_url.option.decode_plus_as_space': 'Decode + as space',
	'ui.encode_url.worker_active': 'Large input detected (>{size}). Processing runs in a Web Worker.',
	'ui.encode_url.worker_failed':
		'Worker processing failed. Falling back to main thread processing.',
	'ui.encode_url.worker_badge': 'Worker',
	'ui.encode_url.warning.no_changes': 'No changes detected for the selected mode and action.',
	'ui.encode_url.error.invalid_url_encoding': 'Invalid URL input: {detail}',
	'ui.encode_url.button.swap_direction': 'Swap direction',
	'ui.encode_url.button.apply_output': 'Apply output to input',
	'ui.encode_url.toast.applied': 'Output applied to input',
	'ui.encode_url.characters': 'chars',
	'category.qr.display_name': 'QR',
	'category.qr.description':
		'Generate QR codes in your browser with export-ready SVG and PNG output, logo overlays, color controls, and scan-friendly error correction presets.',
	'category.qr.primary_keyword': 'qr code tools',
	'tool.qr-code-generator.display_name': 'QR Code Generator',
	'tool.qr-code-generator.tagline':
		'Generate branded QR codes with live preview, SVG/PNG export, colors, margin, and logo overlay',
	'tool.qr-code-generator.description':
		'Create scan-friendly QR codes instantly in your browser. Customize size, quiet zone, colors, transparent background, error correction level, and centered logo overlays, then export production-ready SVG or PNG without sending data to a server.',
	'tool.qr-code-generator.primary_keyword': 'qr code generator',
	'tool.qr-code-generator.meta_title':
		'QR Code Generator — SVG, PNG, Colors & Logo Overlay | fmtly.dev',
	'tool.qr-code-generator.meta_description':
		'Generate QR codes online with live preview, SVG and PNG export, custom colors, quiet zone controls, transparent background, and logo overlay. Browser-only and private.',
	'tool.qr-code-generator.operation': 'Generate QR Code',
	'tool.qr-code-generator.faq.0.question': 'Is my QR content uploaded to a server?',
	'tool.qr-code-generator.faq.0.answer':
		'No. QR generation happens entirely in your browser. The text, URL, Wi-Fi payload, or any other content stays on your device.',
	'tool.qr-code-generator.faq.1.question': 'Which export formats are supported?',
	'tool.qr-code-generator.faq.1.answer':
		'The tool exports both SVG and PNG. SVG is ideal for print, design systems, and scaling without quality loss, while PNG is convenient for quick sharing and social graphics.',
	'tool.qr-code-generator.faq.2.question': 'What does error correction affect?',
	'tool.qr-code-generator.faq.2.answer':
		'Higher error correction makes the QR code more resilient to damage, compression, and center logos, but it also reduces how much content can fit into a single code.',
	'tool.qr-code-generator.faq.3.question': 'Why can very long text fail to generate?',
	'tool.qr-code-generator.faq.3.answer':
		'A QR code has a finite data capacity. If your content is too large for the selected error correction level, shorten the payload or use a shorter redirect URL.',
	'tool.qr-code-generator.use_case.0':
		'Generate marketing QR codes for landing pages, app installs, or campaign URLs',
	'tool.qr-code-generator.use_case.1':
		'Create branded QR codes with centered logos for posters, packaging, and print materials',
	'tool.qr-code-generator.use_case.2':
		'Export crisp SVG QR assets for Figma, design systems, or developer documentation',
	'tool.qr-code-generator.use_case.3':
		'Test how margin, colors, and error correction affect scan reliability before publishing',
	'ui.qr.tab_label': 'QR',
	'ui.qr.characters': 'chars',
	'ui.qr.output_empty': 'Generate a QR code to preview and export it.',
	'ui.qr.preview_alt': 'Generated QR code preview',
	'ui.qr.worker_active':
		'Large input detected (>{size}). QR generation is running in a Web Worker.',
	'ui.qr.worker_failed': 'Worker processing failed. Falling back to main thread generation.',
	'ui.qr.worker_badge': 'Worker',
	'ui.qr.content_label': 'QR content',
	'ui.qr.encoding_hint': 'Text, URLs, Wi-Fi payloads, vCards, or app deep links',
	'ui.qr.input_placeholder':
		'Paste a URL, plain text, Wi-Fi payload, or any QR-ready content here...',
	'ui.qr.preview_label': 'Live preview',
	'ui.qr.copy_svg': 'Copy SVG',
	'ui.qr.download_svg': 'Download SVG',
	'ui.qr.download_png': 'Download PNG',
	'ui.qr.empty_state':
		'Enter content to generate a QR code preview with export-ready SVG and PNG output.',
	'ui.qr.metric.version': 'Version',
	'ui.qr.metric.modules': 'Modules',
	'ui.qr.metric.mask': 'Mask',
	'ui.qr.metric.segments': 'Segments',
	'ui.qr.scan_readiness_label': 'Scan readiness',
	'ui.qr.scan_readiness.excellent': 'Excellent scan readiness',
	'ui.qr.scan_readiness.excellent_hint':
		'These settings are well balanced for reliable on-screen and printed scans.',
	'ui.qr.scan_readiness.balanced': 'Balanced setup',
	'ui.qr.scan_readiness.balanced_hint':
		'This QR should scan well, but stronger correction or more quiet zone can improve resilience.',
	'ui.qr.scan_readiness.risky': 'Risky for scanning',
	'ui.qr.scan_readiness.risky_hint':
		'Current settings may reduce scan reliability. Increase quiet zone or correction, especially when using a logo.',
	'ui.qr.section.reliability': 'Reliability',
	'ui.qr.section.appearance': 'Appearance',
	'ui.qr.section.logo': 'Center logo (optional)',
	'ui.qr.error_correction_hint':
		'Higher correction survives more damage, scratches, and logo overlays, but slightly reduces total capacity.',
	'ui.qr.size_label': 'Size',
	'ui.qr.margin_label': 'Quiet zone',
	'ui.qr.dark_color_label': 'Foreground',
	'ui.qr.light_color_label': 'Background',
	'ui.qr.transparent': 'Transparent',
	'ui.qr.transparent_background_label': 'Transparent background',
	'ui.qr.logo_hint':
		'Add a small logo to the center of the QR code for branded posters, menus, packaging, or print. Leave it empty for the most reliable scans.',
	'ui.qr.upload_logo': 'Upload logo',
	'ui.qr.logo_preview_alt': 'Uploaded logo preview',
	'ui.qr.logo_scale_label': 'Logo size',
	'ui.qr.remove_logo': 'Remove logo',
	'ui.qr.logo_empty':
		'No logo selected. This is optional and only useful if you want your brand mark in the middle of the QR code. Leave it empty for the simplest and most reliable scans.',
	'ui.qr.error.invalid_logo': 'Please upload a valid image file for the logo.',
	'ui.qr.error.input_too_long':
		'This text is too large to fit into a single QR code. Shorten the content or remove some data.',
	'ui.qr.error.generation_failed': 'QR generation failed: {detail}',
	'ui.qr.error.png_export_failed': 'PNG export failed for this QR code.',
	'ui.qr.warning.logo_overlay_low_error_correction':
		'Using a center logo with L or M correction can reduce scan reliability. Prefer Q or H.',
	'ui.qr.toast.logo_added': 'Logo overlay added',
	'ui.qr.toast.logo_removed': 'Logo overlay removed'
};

export default registryEn;
