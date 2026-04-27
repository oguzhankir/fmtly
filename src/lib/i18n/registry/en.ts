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
	'category.ai.display_name': 'AI',
	'category.ai.description':
		'Count AI tokens, estimate LLM costs, compress prompts, and build production-ready system prompts for GPT-4o, Claude, Llama, Gemini, and Mistral without uploading text.',
	'category.ai.primary_keyword': 'ai tools',
	'category.image.display_name': 'Image',
	'category.image.description':
		'Resize, optimize, convert, and inspect images directly in your browser with high-quality output controls and zero uploads.',
	'category.image.primary_keyword': 'image tools',
	'category.pdf.display_name': 'PDF',
	'category.pdf.description':
		'View, extract, merge, split, and inspect PDF files directly in your browser with zero uploads.',
	'category.pdf.primary_keyword': 'pdf tools',
	// ── AI tools ────────────────────────────────────────────────────────────
	'tool.ai-token-counter.display_name': 'LLM Token Counter',
	'tool.ai-token-counter.tagline': 'Count tokens and estimate input cost across leading LLMs',
	'tool.ai-token-counter.description':
		'Paste prompts, documents, or transcripts to count GPT-4o tokens exactly and estimate Claude, Llama 3, Gemini, and Mistral usage with cost and token-per-word metrics.',
	'tool.ai-token-counter.primary_keyword': 'llm token counter',
	'tool.ai-token-counter.meta_title': 'LLM Token Counter for GPT-4o & Claude — fmtly.dev',
	'tool.ai-token-counter.meta_description':
		'Count GPT-4o tokens and estimate Claude, Llama 3, Gemini, and Mistral usage. See token-per-word ratio and input cost in your browser.',
	'tool.ai-token-counter.operation': 'Count tokens',
	'tool.ai-token-counter.faq.0.question': 'Is the token count exact for every model?',
	'tool.ai-token-counter.faq.0.answer':
		'GPT-4o uses a real tokenizer loaded on demand. Claude, Llama 3, Gemini, and Mistral use calibrated browser-side estimates because their exact production tokenizers are not publicly shipped for identical local use.',
	'tool.ai-token-counter.faq.1.question': 'Does my prompt leave the browser?',
	'tool.ai-token-counter.faq.1.answer':
		'No. Text is processed locally in your browser, and large inputs move to a Web Worker so the interface stays responsive.',
	'tool.ai-token-counter.faq.2.question': 'How is cost estimated?',
	'tool.ai-token-counter.faq.2.answer':
		'Cost uses the selected model profile and input tokens per million. It is designed for planning and comparison, not billing reconciliation.',
	'tool.ai-token-counter.faq.3.question': 'Can I compare token density between models?',
	'tool.ai-token-counter.faq.3.answer':
		'Yes. The comparison table shows token count, token-per-word ratio, and estimated input cost for each supported model family.',
	'tool.ai-token-counter.use_case.0': 'Estimate prompt size before calling an LLM API',
	'tool.ai-token-counter.use_case.1':
		'Compare token cost across GPT-4o, Claude, Llama, Gemini, and Mistral',
	'tool.ai-token-counter.use_case.2': 'Check whether long documents fit into a context window',
	'tool.ai-token-counter.use_case.3':
		'Measure token-per-word density for prompts, datasets, and transcripts',

	'tool.ai-token-optimizer.display_name': 'Prompt Token Optimizer',
	'tool.ai-token-optimizer.tagline':
		'Shorten prompts while preserving intent and output requirements',
	'tool.ai-token-optimizer.description':
		'Compress AI prompts by removing filler, normalizing whitespace, simplifying Markdown, and optionally abbreviating common patterns while tracking token savings.',
	'tool.ai-token-optimizer.primary_keyword': 'prompt token optimizer',
	'tool.ai-token-optimizer.meta_title': 'Prompt Token Optimizer — Shorten AI Prompts | fmtly.dev',
	'tool.ai-token-optimizer.meta_description':
		'Shorten AI prompts while preserving meaning. Remove filler, compress whitespace, compare before/after tokens, and estimate cost savings.',
	'tool.ai-token-optimizer.operation': 'Optimize prompt',
	'tool.ai-token-optimizer.faq.0.question': 'Does the optimizer rewrite my prompt creatively?',
	'tool.ai-token-optimizer.faq.0.answer':
		'No. It applies conservative, transparent reductions such as filler removal, whitespace compression, and Markdown cleanup so the prompt intent remains intact.',
	'tool.ai-token-optimizer.faq.1.question': 'Can I control what gets optimized?',
	'tool.ai-token-optimizer.faq.1.answer':
		'Yes. Toggle filler removal, whitespace compression, Markdown simplification, and known abbreviations independently.',
	'tool.ai-token-optimizer.faq.2.question': 'How are token savings calculated?',
	'tool.ai-token-optimizer.faq.2.answer':
		'The tool counts the original and optimized prompt with the selected model profile, then reports saved tokens, savings percentage, and estimated input cost reduction.',
	'tool.ai-token-optimizer.faq.3.question': 'Is it safe for long prompts?',
	'tool.ai-token-optimizer.faq.3.answer':
		'Large prompts are processed in a Web Worker above 500KB, keeping the UI responsive while all text remains local.',
	'tool.ai-token-optimizer.use_case.0': 'Reduce API spend on repeated system prompts',
	'tool.ai-token-optimizer.use_case.1':
		'Fit prompts into tighter context windows without changing intent',
	'tool.ai-token-optimizer.use_case.2': 'Clean prompt templates before sharing them with a team',
	'tool.ai-token-optimizer.use_case.3':
		'Compare before/after token budgets during prompt engineering',

	'tool.ai-system-prompt-builder.display_name': 'System Prompt Builder',
	'tool.ai-system-prompt-builder.tagline':
		'Build production-ready system prompts from structured templates',
	'tool.ai-system-prompt-builder.description':
		'Compose high-quality system prompts for coding assistants, data analysts, translators, and support agents with structured sections, safety boundaries, quality checks, and OpenAI JSON export.',
	'tool.ai-system-prompt-builder.primary_keyword': 'system prompt builder',
	'tool.ai-system-prompt-builder.meta_title': 'System Prompt Builder for AI Assistants — fmtly.dev',
	'tool.ai-system-prompt-builder.meta_description':
		'Build clear system prompts for AI assistants in your browser. Use templates, constraints, examples, safety rules, quality checks, and export plain text or OpenAI JSON messages.',
	'tool.ai-system-prompt-builder.operation': 'Build prompt',
	'tool.ai-system-prompt-builder.faq.0.question': 'What is a system prompt?',
	'tool.ai-system-prompt-builder.faq.0.answer':
		'A system prompt defines the assistant role, objective, operating context, boundaries, and output rules before the user message is handled.',
	'tool.ai-system-prompt-builder.faq.1.question': 'Does this tool call an AI model?',
	'tool.ai-system-prompt-builder.faq.1.answer':
		'No. It deterministically assembles your prompt in the browser. Nothing is uploaded and no model receives your text.',
	'tool.ai-system-prompt-builder.faq.2.question': 'Can I export OpenAI chat messages?',
	'tool.ai-system-prompt-builder.faq.2.answer':
		'Yes. Switch the output format to OpenAI JSON messages to export a system-role message array you can paste into API code or prompt tests.',
	'tool.ai-system-prompt-builder.faq.3.question': 'Is it safe for very large context blocks?',
	'tool.ai-system-prompt-builder.faq.3.answer':
		'Large builder inputs above 500KB run in a Web Worker so the interface stays responsive while all processing remains local.',
	'tool.ai-system-prompt-builder.use_case.0':
		'Create reusable system prompts for AI product features',
	'tool.ai-system-prompt-builder.use_case.1':
		'Standardize coding assistant, analyst, translator, and support agent behavior',
	'tool.ai-system-prompt-builder.use_case.2':
		'Export system prompts as plain text or OpenAI-compatible JSON messages',
	'tool.ai-system-prompt-builder.use_case.3':
		'Add safety boundaries, reasoning guidance, examples, and quality checks to prompts',
	'tool.image-resizer.display_name': 'Image Resizer',
	'tool.image-resizer.tagline':
		'Resize images with aspect lock, percentage scaling, and quality controls',
	'tool.image-resizer.description':
		'Resize PNG, JPEG, and WebP images in your browser with fixed dimensions or percentage scaling. Preview before/after size, keep aspect ratio, tune output quality, and export instantly.',
	'tool.image-resizer.primary_keyword': 'image resizer',
	'tool.image-resizer.meta_title': 'Image Resizer — Resize PNG, JPG, WebP Online | fmtly.dev',
	'tool.image-resizer.meta_description':
		'Resize images online with locked aspect ratio, custom width/height, percentage scaling, and quality settings. Browser-only, private, and instant.',
	'tool.image-resizer.operation': 'Resize image',
	'tool.image-resizer.faq.0.question': 'Do my images leave the browser?',
	'tool.image-resizer.faq.0.answer':
		'No. Image resizing runs entirely in your browser. Files are never uploaded to a server.',
	'tool.image-resizer.faq.1.question': 'Can I keep the original aspect ratio?',
	'tool.image-resizer.faq.1.answer':
		'Yes. Enable aspect lock to keep proportional width and height while resizing.',
	'tool.image-resizer.faq.2.question': 'Which output formats are supported?',
	'tool.image-resizer.faq.2.answer':
		'The tool exports PNG, JPEG, and WebP. PNG preserves transparency, while JPEG/WebP provide adjustable quality.',
	'tool.image-resizer.faq.3.question': 'How are large images processed?',
	'tool.image-resizer.faq.3.answer':
		'Large inputs above 500KB are processed in a Web Worker to keep the interface responsive.',
	'tool.image-resizer.use_case.0': 'Resize hero images and thumbnails for faster pages',
	'tool.image-resizer.use_case.1': 'Generate responsive image variants from a single source file',
	'tool.image-resizer.use_case.2':
		'Reduce upload sizes before sending files to APIs or CMS systems',
	'tool.image-resizer.use_case.3':
		'Convert between PNG, JPEG, and WebP while preserving output control',
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
	'ui.actions.up': 'Up',
	'ui.actions.down': 'Down',
	'ui.actions.remove': 'Remove',
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
	'tool.json-to-rust-serde.display_name': 'JSON to Rust Serde',
	'tool.json-to-rust-serde.tagline':
		'Generate serde-ready Rust structs with serde(rename) and Option from JSON',
	'tool.json-to-rust-serde.description':
		'Turn JSON samples into Rust structs with serde derive, JSON key renames, Option for optional/null fields, Vec for arrays, and serde_json::Value for heterogeneous data. Nested shapes are deduplicated like our Go generator. Large inputs run in a Web Worker; everything stays in your browser.',
	'tool.json-to-rust-serde.primary_keyword': 'json to rust serde structs',
	'tool.json-to-rust-serde.meta_title': 'JSON to Rust Serde Structs — fmtly.dev',
	'tool.json-to-rust-serde.meta_description':
		'Generate Rust structs with serde from JSON in your browser. Rename attributes, Option, Vec, nested types. Private, fast, Worker for large JSON.',
	'tool.json-to-rust-serde.operation': 'Convert',
	'tool.json-to-rust-serde.faq.0.question': 'How are JSON types mapped to Rust?',
	'tool.json-to-rust-serde.faq.0.answer':
		'Strings map to String, booleans to bool, integers to i64, floating numbers to f64, arrays to Vec, objects to generated structs, and mixed or unknown shapes to serde_json::Value.',
	'tool.json-to-rust-serde.faq.1.question': 'Why serde(rename) on every field?',
	'tool.json-to-rust-serde.faq.1.answer':
		'Field names use idiomatic snake_case in Rust while your JSON often uses camelCase or other styles. Explicit rename keeps serde aligned with the original keys without a global rename policy that might miss edge cases.',
	'tool.json-to-rust-serde.faq.2.question': 'Do I need serde and serde_json in Cargo.toml?',
	'tool.json-to-rust-serde.faq.2.answer':
		'Yes. Add serde with derive feature and serde_json for Value types: e.g. serde = { version = "1", features = ["derive"] } and serde_json = "1".',
	'tool.json-to-rust-serde.use_case.0':
		'Bootstrap Rust API models from real JSON request and response bodies',
	'tool.json-to-rust-serde.use_case.1':
		'Create typed serde models for webhooks, queues, and CLI tools from sample payloads',
	'tool.json-to-rust-serde.use_case.2':
		'Compare with Go or TypeScript output from the same JSON in fmtly',
	'tool.json-to-rust-serde.use_case.3':
		'Prototype serde schemas before committing to manual struct definitions',
	'ui.json_to_rust.tab_label': 'Rust',
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
	'ui.ai_tokens.characters': 'chars',
	'ui.ai_tokens.model_label': 'Model',
	'ui.ai_tokens.upload_file': 'Upload file',
	'ui.ai_tokens.file_loaded': 'Loaded {name}',
	'ui.ai_tokens.file_failed': 'Could not load file',
	'ui.ai_tokens.copy_summary': 'Copy summary',
	'ui.ai_tokens.copy.title': 'AI token summary',
	'ui.ai_tokens.worker_active':
		'Large input detected (>{size}). Token analysis runs in a Web Worker.',
	'ui.ai_tokens.worker_failed': 'Token analysis failed. Try a smaller input or refresh the page.',
	'ui.ai_tokens.worker_badge': 'Worker',
	'ui.ai_tokens.input_label': 'Prompt or text',
	'ui.ai_tokens.input_placeholder':
		'Paste a prompt, chat transcript, or document to estimate tokens...',
	'ui.ai_tokens.analysis_title': 'Token analysis',
	'ui.ai_tokens.processing': 'Counting...',
	'ui.ai_tokens.comparison_title': 'Model comparison',
	'ui.ai_tokens.stat.tokens': 'Tokens',
	'ui.ai_tokens.stat.words': 'Words',
	'ui.ai_tokens.stat.words_helper': 'Whitespace-delimited words',
	'ui.ai_tokens.stat.characters': 'Characters',
	'ui.ai_tokens.stat.tokens_per_word': 'Tokens / word',
	'ui.ai_tokens.stat.tokens_per_word_helper': 'Lower is usually cheaper',
	'ui.ai_tokens.stat.estimated_cost': 'Estimated cost',
	'ui.ai_tokens.stat.estimated_cost_helper': 'Input token estimate',
	'ui.ai_tokens.table.model': 'Model',
	'ui.ai_tokens.table.tokens': 'Tokens',
	'ui.ai_tokens.table.ratio': 'Tokens / word',
	'ui.ai_tokens.table.cost': 'Cost',
	'ui.prompt_optimizer.characters': 'chars',
	'ui.prompt_optimizer.tokens': 'tokens',
	'ui.prompt_optimizer.model_label': 'Model',
	'ui.prompt_optimizer.upload_file': 'Upload file',
	'ui.prompt_optimizer.file_loaded': 'Loaded {name}',
	'ui.prompt_optimizer.file_failed': 'Could not load file',
	'ui.prompt_optimizer.worker_active':
		'Large input detected (>{size}). Optimization runs in a Web Worker.',
	'ui.prompt_optimizer.worker_failed':
		'Worker optimization failed. Falling back to main thread processing.',
	'ui.prompt_optimizer.worker_badge': 'Worker',
	'ui.prompt_optimizer.input_label': 'Original prompt',
	'ui.prompt_optimizer.input_placeholder': 'Paste a prompt to optimize for token usage...',
	'ui.prompt_optimizer.output_label': 'Optimized output',
	'ui.prompt_optimizer.processing': 'Optimizing...',
	'ui.prompt_optimizer.copy_output': 'Copy optimized',
	'ui.prompt_optimizer.preview_title': 'Preview',
	'ui.prompt_optimizer.output_placeholder': 'Optimized prompt appears here...',
	'ui.prompt_optimizer.option.filler': 'Remove filler words',
	'ui.prompt_optimizer.option.filler_desc': 'Trim low-signal phrases while preserving intent.',
	'ui.prompt_optimizer.option.whitespace': 'Compress whitespace',
	'ui.prompt_optimizer.option.whitespace_desc': 'Normalize repeated spaces and blank lines.',
	'ui.prompt_optimizer.option.markdown': 'Simplify Markdown',
	'ui.prompt_optimizer.option.markdown_desc': 'Reduce decorative formatting that costs tokens.',
	'ui.prompt_optimizer.option.abbreviation': 'Use abbreviations',
	'ui.prompt_optimizer.option.abbreviation_desc': 'Shorten common AI prompt phrases where safe.',
	'ui.prompt_optimizer.stat.before': 'Before',
	'ui.prompt_optimizer.stat.before_helper': 'Original token count',
	'ui.prompt_optimizer.stat.after': 'After',
	'ui.prompt_optimizer.stat.after_helper': 'Optimized token count',
	'ui.prompt_optimizer.stat.saved': 'Saved tokens',
	'ui.prompt_optimizer.stat.saved_helper': 'Estimated reduction',
	'ui.prompt_optimizer.stat.savings_percent': 'Savings',
	'ui.prompt_optimizer.stat.savings_percent_helper': 'Before vs after',
	'ui.prompt_optimizer.stat.cost_saved': 'Cost saved',
	'ui.system_prompt_builder.template.custom': 'Custom',
	'ui.system_prompt_builder.template.code_assistant': 'Code assistant',
	'ui.system_prompt_builder.template.data_analyst': 'Data analyst',
	'ui.system_prompt_builder.template.translator': 'Translator',
	'ui.system_prompt_builder.template.customer_support': 'Customer support',
	'ui.system_prompt_builder.format.plain_text': 'Plain text',
	'ui.system_prompt_builder.format.openai_json': 'OpenAI JSON messages',
	'ui.system_prompt_builder.field.role': 'Role',
	'ui.system_prompt_builder.field.objective': 'Objective',
	'ui.system_prompt_builder.field.context': 'Context',
	'ui.system_prompt_builder.field.constraints': 'Constraints',
	'ui.system_prompt_builder.field.examples': 'Examples',
	'ui.system_prompt_builder.field.output_requirements': 'Output requirements',
	'ui.system_prompt_builder.placeholder.role':
		'Define the assistant identity and level of expertise...',
	'ui.system_prompt_builder.placeholder.objective':
		'Describe what the assistant should accomplish...',
	'ui.system_prompt_builder.placeholder.context':
		'Add operating context, audience, domain, or product details...',
	'ui.system_prompt_builder.placeholder.constraints':
		'List boundaries, policies, forbidden behavior, or hard requirements...',
	'ui.system_prompt_builder.placeholder.examples':
		'Provide example user requests and ideal assistant behavior...',
	'ui.system_prompt_builder.placeholder.output_requirements':
		'Specify answer structure, formatting, citation, or tone requirements...',
	'ui.system_prompt_builder.option.safety_boundaries': 'Safety boundaries',
	'ui.system_prompt_builder.option.safety_boundaries_desc':
		'Add instructions for privacy, uncertainty, unsafe requests, and fabrication.',
	'ui.system_prompt_builder.option.quality_checklist': 'Quality checklist',
	'ui.system_prompt_builder.option.quality_checklist_desc':
		'Add a final self-check for requirements, format, and limitations.',
	'ui.system_prompt_builder.option.reasoning_guidance': 'Reasoning guidance',
	'ui.system_prompt_builder.option.reasoning_guidance_desc':
		'Guide the assistant to think first and expose only useful conclusions.',
	'ui.system_prompt_builder.output_status': '{size} · {characters} chars · {lines} lines',
	'ui.system_prompt_builder.input_status': '{size} · {characters} chars · {lines} lines',
	'ui.system_prompt_builder.stat.characters': 'Characters',
	'ui.system_prompt_builder.stat.characters_helper': 'Generated output',
	'ui.system_prompt_builder.stat.size': 'Size',
	'ui.system_prompt_builder.stat.size_helper': 'UTF-8 output size',
	'ui.system_prompt_builder.stat.lines': 'Lines',
	'ui.system_prompt_builder.stat.lines_helper': 'Preview line count',
	'ui.system_prompt_builder.stat.sections': 'Sections',
	'ui.system_prompt_builder.worker_failed':
		'Worker build failed. Falling back to main thread processing.',
	'ui.system_prompt_builder.build_failed':
		'Could not build the system prompt. Try reducing the input size.',
	'ui.system_prompt_builder.sample_loaded': 'Sample loaded',
	'ui.system_prompt_builder.clear_title': 'Clear system prompt builder fields?',
	'ui.system_prompt_builder.clear_description':
		'This removes the current builder inputs and preview.',
	'ui.system_prompt_builder.input_cleared': 'Builder inputs cleared',
	'ui.system_prompt_builder.copy_empty': 'Nothing to copy yet',
	'ui.system_prompt_builder.copy_success': 'System prompt copied',
	'ui.system_prompt_builder.copy_error': 'Copy failed. Check browser permissions.',
	'ui.system_prompt_builder.download_empty': 'Nothing to download yet',
	'ui.system_prompt_builder.download_success': 'Downloaded {filename}',
	'ui.system_prompt_builder.download_error': 'Download failed. Try copying the output instead.',
	'ui.system_prompt_builder.milliseconds': 'ms',
	'ui.system_prompt_builder.template_label': 'Template',
	'ui.system_prompt_builder.output_format_label': 'Output format',
	'ui.system_prompt_builder.worker_active':
		'Large builder input detected (>{size}). Prompt generation runs in a Web Worker.',
	'ui.system_prompt_builder.load_sample': 'Load sample',
	'ui.system_prompt_builder.clear': 'Clear',
	'ui.system_prompt_builder.builder_inputs_title': 'Builder inputs',
	'ui.system_prompt_builder.output_label': 'Output preview',
	'ui.system_prompt_builder.processing': 'Building...',
	'ui.system_prompt_builder.worker_badge': 'Worker',
	'ui.system_prompt_builder.worker_used': 'Processed off-thread',
	'ui.system_prompt_builder.copy_output': 'Copy output',
	'ui.system_prompt_builder.download_output': 'Download',
	'ui.system_prompt_builder.preview_title': 'Preview',
	'ui.system_prompt_builder.output_placeholder': 'Built system prompt appears here...',
	'ui.image_resizer.drop_title': 'Drop image here or browse',
	'ui.image_resizer.drop_hint':
		'Images are processed locally in your browser. Nothing is uploaded.',
	'ui.image_resizer.browse': 'Browse image',
	'ui.image_resizer.input_aria': 'Choose image file',
	'ui.image_resizer.no_file': 'Upload an image to start resizing.',
	'ui.image_resizer.file_loaded': 'Loaded {name}',
	'ui.image_resizer.file_read_error': 'Could not read image file.',
	'ui.image_resizer.preview_alt': 'Selected image preview',
	'ui.image_resizer.controls_title': 'Resize controls',
	'ui.image_resizer.width_label': 'Width',
	'ui.image_resizer.height_label': 'Height',
	'ui.image_resizer.scale_label': 'Scale (%)',
	'ui.image_resizer.lock_ratio': 'Lock aspect ratio',
	'ui.image_resizer.keep_format': 'Keep original format',
	'ui.image_resizer.output_format': 'Output format',
	'ui.image_resizer.quality_label': 'Quality',
	'ui.image_resizer.worker_active':
		'Large source image detected (>{size}). Resizing runs in a Web Worker.',
	'ui.image_resizer.worker_badge': 'Worker',
	'ui.image_resizer.worker_used': 'Processed off-thread',
	'ui.image_resizer.worker_failed': 'Worker resize failed. Falling back to main-thread processing.',
	'ui.image_resizer.resize_failed': 'Image resize failed. Please try another file.',
	'ui.image_resizer.output_title': 'Resized output',
	'ui.image_resizer.output_placeholder': 'Resized image preview appears here.',
	'ui.image_resizer.processing': 'Resizing...',
	'ui.image_resizer.copy_image': 'Copy image',
	'ui.image_resizer.download_image': 'Download image',
	'ui.image_resizer.clear': 'Clear',
	'ui.image_resizer.copy_empty': 'No resized image to copy yet.',
	'ui.image_resizer.copy_success': 'Resized image copied to clipboard',
	'ui.image_resizer.copy_error': 'Copy failed. Download the image instead.',
	'ui.image_resizer.download_empty': 'No resized image to download yet.',
	'ui.image_resizer.download_success': 'Downloaded {filename}',
	'ui.image_resizer.download_error': 'Download failed. Please try again.',
	'ui.image_resizer.clear_title': 'Clear image and output?',
	'ui.image_resizer.clear_description':
		'This removes the current image, resize options, and generated output.',
	'ui.image_resizer.input_cleared': 'Image resizer input cleared',
	'ui.image_resizer.stat.input_dimensions': 'Input dimensions',
	'ui.image_resizer.stat.input_size': 'Input size',
	'ui.image_resizer.stat.output_dimensions': 'Output dimensions',
	'ui.image_resizer.stat.output_size': 'Output size',
	'ui.image_resizer.stat.reduction': 'Size reduction',
	'ui.image_resizer.stat.reduction_helper': 'Compared to original file size',
	'ui.image_resizer.placeholder_width': 'Auto',
	'ui.image_resizer.placeholder_height': 'Auto',
	'ui.image_resizer.png': 'PNG',
	'ui.image_resizer.jpeg': 'JPEG',
	'ui.image_resizer.webp': 'WebP',
	'ui.image_resizer.source_status': '{size} · {dimensions}',
	'ui.image_resizer.output_status': '{size} · {dimensions}',
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
	// ── HTML Entity Encode / Decode tool ─────────────────────────────────────
	'tool.encode-html-entities-encode-decode.display_name': 'HTML Entity Encode / Decode',
	'tool.encode-html-entities-encode-decode.tagline':
		'Encode or decode HTML character references with WHATWG-named, decimal, and hex output',
	'tool.encode-html-entities-encode-decode.description':
		'Convert text to safe HTML entities or decode entities back to Unicode in your browser. Supports every WHATWG named reference plus numeric forms, strict or permissive decoding, optional non-ASCII encoding, and Web Worker offload for inputs above 500KB.',
	'tool.encode-html-entities-encode-decode.primary_keyword': 'html entity encode decode online',
	'tool.encode-html-entities-encode-decode.meta_title':
		'HTML Entities: Encode & Decode Online | fmtly.dev',
	'tool.encode-html-entities-encode-decode.meta_description':
		'Encode or decode HTML entities instantly in your browser. Full WHATWG named map, decimal and hex modes, strict decode validation, essentials vs full Unicode scope, and large-input Web Worker support.',
	'tool.encode-html-entities-encode-decode.operation': 'Encode / Decode HTML entities',
	'tool.encode-html-entities-encode-decode.faq.0.question': 'Is my text sent to a server?',
	'tool.encode-html-entities-encode-decode.faq.0.answer':
		'No. All encoding and decoding runs locally in your browser. Your input never leaves your device.',
	'tool.encode-html-entities-encode-decode.faq.1.question':
		'What is the difference between strict and permissive decode?',
	'tool.encode-html-entities-encode-decode.faq.1.answer':
		'Permissive mode leaves unknown or malformed references untouched so you can process mixed or partial snippets. Strict mode stops with an error when a reference is incomplete or not recognized.',
	'tool.encode-html-entities-encode-decode.faq.2.question': 'Which named entities are supported?',
	'tool.encode-html-entities-encode-decode.faq.2.answer':
		'Decoding uses the full WHATWG HTML named character reference list (over 2,100 names) plus decimal and hexadecimal numeric references.',
	'tool.encode-html-entities-encode-decode.faq.3.question': 'Can this handle very large documents?',
	'tool.encode-html-entities-encode-decode.faq.3.answer':
		'Yes. Inputs larger than 500KB are processed in a Web Worker so the tab stays responsive.',
	'tool.encode-html-entities-encode-decode.use_case.0':
		'Escape user-generated snippets before inserting them into HTML templates',
	'tool.encode-html-entities-encode-decode.use_case.1':
		'Decode entities from scraped or exported HTML for readable plain text',
	'tool.encode-html-entities-encode-decode.use_case.2':
		'Normalize quotes, ampersands, and symbols for CMS or email markup',
	'tool.encode-html-entities-encode-decode.use_case.3':
		'Verify strict parsing rules when validating HTML fragments or test fixtures',
	// ── HTML Entity Encode / Decode UI strings ───────────────────────────────
	'ui.encode_html_entities.tab_label': 'Entities',
	'ui.encode_html_entities.action_label': 'Action',
	'ui.encode_html_entities.action.encode': 'Encode',
	'ui.encode_html_entities.action.decode': 'Decode',
	'ui.encode_html_entities.format_label': 'Output format',
	'ui.encode_html_entities.format.named': 'Named + numeric fallback',
	'ui.encode_html_entities.format.decimal': 'Decimal numeric',
	'ui.encode_html_entities.format.hex': 'Hex numeric',
	'ui.encode_html_entities.scope_label': 'Encode scope',
	'ui.encode_html_entities.scope.essentials': 'Essentials (& < > " \')',
	'ui.encode_html_entities.scope.all_non_ascii': 'Essentials + all non-ASCII',
	'ui.encode_html_entities.apostrophe_label': 'Apostrophe (named mode)',
	'ui.encode_html_entities.apostrophe.numeric': '&#39;',
	'ui.encode_html_entities.apostrophe.apos': '&apos;',
	'ui.encode_html_entities.option.encode_line_breaks': 'Encode CR/LF as numeric entities',
	'ui.encode_html_entities.option.encode_apostrophe': 'Encode apostrophe (U+0027)',
	'ui.encode_html_entities.decode_mode_label': 'Decode mode',
	'ui.encode_html_entities.decode.permissive': 'Permissive',
	'ui.encode_html_entities.decode.strict': 'Strict',
	'ui.encode_html_entities.decode.hint':
		'Strict mode rejects unknown or malformed references. Permissive leaves invalid fragments unchanged.',
	'ui.encode_html_entities.input_label': 'Input',
	'ui.encode_html_entities.output_label': 'Output',
	'ui.encode_html_entities.input_placeholder': 'Paste text or HTML snippets with entities...',
	'ui.encode_html_entities.output_placeholder': 'Encoded or decoded output appears here...',
	'ui.encode_html_entities.worker_active':
		'Large input detected (>{size}). Processing runs in a Web Worker.',
	'ui.encode_html_entities.worker_failed':
		'Worker processing failed. Falling back to main thread processing.',
	'ui.encode_html_entities.worker_badge': 'Worker',
	'ui.encode_html_entities.warning.no_changes': 'No changes detected for the selected options.',
	'ui.encode_html_entities.error.invalid_entity': '{detail} (offset {offset})',
	'ui.encode_html_entities.error.incomplete_reference': '{detail} (offset {offset})',
	'ui.encode_html_entities.button.swap_direction': 'Swap direction',
	'ui.encode_html_entities.button.apply_output': 'Apply output to input',
	'ui.encode_html_entities.toast.applied': 'Output applied to input',
	'ui.encode_html_entities.characters': 'chars',
	// ── Unicode Inspector tool ───────────────────────────────────────────────
	'tool.encode-unicode-inspector.display_name': 'Unicode Inspector',
	'tool.encode-unicode-inspector.tagline':
		'Inspect code points, UTF-8 bytes, names, category, script, and East Asian width',
	'tool.encode-unicode-inspector.description':
		'Paste any UTF-8 text to see each grapheme cluster or Unicode scalar value with U+ notation, UTF-8 hex bytes, official character name, General Category, script, and East Asian width. Large inputs run in a Web Worker; everything stays in your browser.',
	'tool.encode-unicode-inspector.primary_keyword': 'unicode code point inspector',
	'tool.encode-unicode-inspector.meta_title': 'Unicode Inspector — Code Points & UTF-8 | fmtly.dev',
	'tool.encode-unicode-inspector.meta_description':
		'Inspect Unicode in your browser: U+ code points, UTF-8 bytes, names, category, script, and East Asian width. Grapheme or scalar mode; Worker for large text. Private and instant.',
	'tool.encode-unicode-inspector.operation': 'Inspect Unicode',
	'tool.encode-unicode-inspector.faq.0.question': 'Is my text uploaded to a server?',
	'tool.encode-unicode-inspector.faq.0.answer':
		'No. Inspection runs entirely in your browser. Your input never leaves your device.',
	'tool.encode-unicode-inspector.faq.1.question':
		'What is the difference between grapheme and scalar mode?',
	'tool.encode-unicode-inspector.faq.1.answer':
		'Grapheme mode groups user-perceived characters (emoji with skin tones, ZWJ sequences, combining marks) when your browser supports Intl.Segmenter. Scalar mode lists every Unicode code point separately.',
	'tool.encode-unicode-inspector.faq.2.question':
		'Why do names or properties sometimes look unfamiliar?',
	'tool.encode-unicode-inspector.faq.2.answer':
		'Names and properties follow the Unicode Character Database. Unassigned code points show as "unassigned" or similar, and some symbols use normative Unicode names.',
	'tool.encode-unicode-inspector.faq.3.question': 'Why does large input use a Web Worker?',
	'tool.encode-unicode-inspector.faq.3.answer':
		'Inputs over 500KB are processed off the main thread so the table, scrolling, and controls stay responsive while Unicode tables are consulted.',
	'tool.encode-unicode-inspector.use_case.0':
		'Debug invisible characters, wrong encoding, or mixed scripts in logs and user input',
	'tool.encode-unicode-inspector.use_case.1':
		'Verify UTF-8 byte sequences and code points for internationalized filenames or APIs',
	'tool.encode-unicode-inspector.use_case.2':
		'Teach Unicode basics: grapheme clusters, combining marks, and emoji sequences',
	'tool.encode-unicode-inspector.use_case.3':
		'Export a TSV table of segments and properties for documentation or test fixtures',
	// ── Unicode Inspector UI ─────────────────────────────────────────────────
	'ui.unicode_inspector.tab_label': 'Unicode',
	'ui.unicode_inspector.utf16_units': 'UTF-16 units',
	'ui.unicode_inspector.backend_load_error':
		'Could not load Unicode name tables. Check your connection and try again.',
	'ui.unicode_inspector.worker_failed': 'Worker processing failed. Falling back to main thread.',
	'ui.unicode_inspector.granularity_label': 'Segmentation',
	'ui.unicode_inspector.granularity.grapheme': 'Grapheme clusters',
	'ui.unicode_inspector.granularity.codepoint': 'Unicode scalar values',
	'ui.unicode_inspector.granularity_hint':
		'Grapheme mode uses Intl.Segmenter when available (emoji ZWJ sequences, combining marks). Otherwise each scalar is shown.',
	'ui.unicode_inspector.max_scalars_label': 'Row limit (scalars)',
	'ui.unicode_inspector.worker_active': 'Large input (>{size}). Inspection runs in a Web Worker.',
	'ui.unicode_inspector.copy_tsv': 'Copy TSV',
	'ui.unicode_inspector.input_label': 'Input',
	'ui.unicode_inspector.input_placeholder': 'Paste any UTF-8 text to inspect code points…',
	'ui.unicode_inspector.results_label': 'Inspection',
	'ui.unicode_inspector.loading_backend': 'Loading Unicode data…',
	'ui.unicode_inspector.worker_badge': 'Worker',
	'ui.unicode_inspector.summary':
		'{clusters} clusters · {scalars} scalars · {bytes} bytes UTF-8 · {ms} ms',
	'ui.unicode_inspector.truncated':
		'Output truncated; {omitted} more scalar(s) not shown. Raise the row limit or shorten input.',
	'ui.unicode_inspector.col.segment': 'Segment',
	'ui.unicode_inspector.col.codepoint': 'U+',
	'ui.unicode_inspector.col.glyph': 'Glyph',
	'ui.unicode_inspector.col.utf8': 'UTF-8',
	'ui.unicode_inspector.col.category': 'Cat.',
	'ui.unicode_inspector.col.script': 'Script',
	'ui.unicode_inspector.col.eaw': 'EaW',
	'ui.unicode_inspector.col.name': 'Name',
	'ui.unicode_inspector.table_region': 'Unicode scalar table',
	'ui.unicode_inspector.empty_hint': 'Type or paste text to see code points and names.',
	'ui.unicode_inspector.gc.Lu': 'Letter, uppercase',
	'ui.unicode_inspector.gc.Ll': 'Letter, lowercase',
	'ui.unicode_inspector.gc.Lt': 'Letter, titlecase',
	'ui.unicode_inspector.gc.Lm': 'Letter, modifier',
	'ui.unicode_inspector.gc.Lo': 'Letter, other',
	'ui.unicode_inspector.gc.Mn': 'Mark, nonspacing',
	'ui.unicode_inspector.gc.Mc': 'Mark, spacing combining',
	'ui.unicode_inspector.gc.Me': 'Mark, enclosing',
	'ui.unicode_inspector.gc.Nd': 'Number, decimal digit',
	'ui.unicode_inspector.gc.Nl': 'Number, letter',
	'ui.unicode_inspector.gc.No': 'Number, other',
	'ui.unicode_inspector.gc.Pc': 'Punctuation, connector',
	'ui.unicode_inspector.gc.Pd': 'Punctuation, dash',
	'ui.unicode_inspector.gc.Ps': 'Punctuation, open',
	'ui.unicode_inspector.gc.Pe': 'Punctuation, close',
	'ui.unicode_inspector.gc.Pi': 'Punctuation, initial quote',
	'ui.unicode_inspector.gc.Pf': 'Punctuation, final quote',
	'ui.unicode_inspector.gc.Po': 'Punctuation, other',
	'ui.unicode_inspector.gc.Sm': 'Symbol, math',
	'ui.unicode_inspector.gc.Sc': 'Symbol, currency',
	'ui.unicode_inspector.gc.Sk': 'Symbol, modifier',
	'ui.unicode_inspector.gc.So': 'Symbol, other',
	'ui.unicode_inspector.gc.Zs': 'Separator, space',
	'ui.unicode_inspector.gc.Zl': 'Separator, line',
	'ui.unicode_inspector.gc.Zp': 'Separator, paragraph',
	'ui.unicode_inspector.gc.Cc': 'Other, control',
	'ui.unicode_inspector.gc.Cf': 'Other, format',
	'ui.unicode_inspector.gc.Cs': 'Other, surrogate',
	'ui.unicode_inspector.gc.Co': 'Other, private use',
	'ui.unicode_inspector.gc.Cn': 'Other, not assigned',
	// ── Hex ↔ Text tool ──────────────────────────────────────────────────────
	'tool.encode-hex-encode-decode.display_name': 'Hex ↔ ASCII / UTF-8',
	'tool.encode-hex-encode-decode.tagline':
		'Convert UTF-8 text to hex bytes or hex dumps back to readable text',
	'tool.encode-hex-encode-decode.description':
		'Encode any UTF-8 string to hexadecimal byte pairs with your choice of case, separators, and line wrapping. Decode permissive hex (spaces, commas, 0x prefixes) back to text with strict UTF-8 validation. Large inputs run in a Web Worker; everything stays in your browser.',
	'tool.encode-hex-encode-decode.primary_keyword': 'hex to text utf-8',
	'tool.encode-hex-encode-decode.meta_title': 'Hex ↔ Text — UTF-8 & ASCII | fmtly.dev',
	'tool.encode-hex-encode-decode.meta_description':
		'Convert hex to UTF-8 text or text to hex in your browser. Custom delimiters, case, line wrap, 0x prefixes, and Worker support. Private, fast, no upload.',
	'tool.encode-hex-encode-decode.operation': 'Hex encode / decode',
	'tool.encode-hex-encode-decode.faq.0.question': 'Is my data sent to a server?',
	'tool.encode-hex-encode-decode.faq.0.answer':
		'No. All conversion runs in your browser. Your text and hex never leave your device.',
	'tool.encode-hex-encode-decode.faq.1.question': 'What encoding does the tool use?',
	'tool.encode-hex-encode-decode.faq.1.answer':
		'Text is interpreted as UTF-8 for both directions. ASCII is a subset of UTF-8, so plain English works the same way.',
	'tool.encode-hex-encode-decode.faq.2.question': 'Why does decoding fail with “invalid UTF-8”?',
	'tool.encode-hex-encode-decode.faq.2.answer':
		'Decoded bytes must form valid UTF-8. Random binary hex or legacy encodings will not decode as text — use a hex dump viewer or the right codec instead.',
	'tool.encode-hex-encode-decode.faq.3.question': 'Why use a Web Worker for large input?',
	'tool.encode-hex-encode-decode.faq.3.answer':
		'Inputs over 500KB are processed off the main thread so typing, scrolling, and controls stay smooth.',
	'tool.encode-hex-encode-decode.use_case.0':
		'Turn clipboard hex from logs or wire captures back into readable UTF-8 snippets',
	'tool.encode-hex-encode-decode.use_case.1':
		'Produce formatted hex dumps of strings for docs, tests, or embedded firmware constants',
	'tool.encode-hex-encode-decode.use_case.2':
		'Verify how emoji and non-Latin characters expand to UTF-8 byte sequences',
	'tool.encode-hex-encode-decode.use_case.3':
		'Quickly round-trip hex and text when debugging APIs, tokens, or encoded payloads',
	// ── Hex ↔ Text UI ───────────────────────────────────────────────────────
	'ui.hex.tab_label': 'Hex',
	'ui.hex.action_label': 'Action',
	'ui.hex.action.encode': 'Text → hex',
	'ui.hex.action.decode': 'Hex → text',
	'ui.hex.hex_case_label': 'Hex case',
	'ui.hex.hex_case.upper': 'Uppercase',
	'ui.hex.hex_case.lower': 'Lowercase',
	'ui.hex.delimiter_label': 'Byte separator',
	'ui.hex.delimiter.space': 'Space',
	'ui.hex.delimiter.none': 'None',
	'ui.hex.delimiter.comma': 'Comma',
	'ui.hex.bytes_per_line_label': 'Bytes per line',
	'ui.hex.bytes_per_line.off': 'No wrap',
	'ui.hex.bytes_per_line.n': '{n} bytes',
	'ui.hex.decode_options_label': 'Decode options',
	'ui.hex.option.ignore_whitespace': 'Ignore spaces and line breaks',
	'ui.hex.option.ignore_commas': 'Ignore comma separators',
	'ui.hex.option.allow_0x': 'Allow 0x prefix before each byte',
	'ui.hex.worker_active': 'Large input detected (>{size}). Processing runs in a Web Worker.',
	'ui.hex.worker_failed': 'Worker processing failed. Falling back to main thread processing.',
	'ui.hex.worker_badge': 'Worker',
	'ui.hex.button.swap_direction': 'Swap direction',
	'ui.hex.button.apply_output': 'Apply output to input',
	'ui.hex.input_label': 'Input',
	'ui.hex.output_label': 'Output',
	'ui.hex.input_placeholder': 'Plain text to encode, or hex digits to decode to UTF-8…',
	'ui.hex.output_placeholder': 'Hex output or decoded UTF-8 text appears here…',
	'ui.hex.characters': 'chars',
	'ui.hex.toast.applied': 'Output applied to input',
	'ui.hex.warning.whitespace_skipped': 'Whitespace was skipped while parsing hex digits.',
	'ui.hex.warning.commas_skipped': 'Comma separators were skipped while parsing.',
	'ui.hex.error.invalid_hex_digit': 'Invalid character in hex input (near column {position}).',
	'ui.hex.error.odd_hex_length':
		'Odd number of hex digits ({count}). Pairs are required for bytes.',
	'ui.hex.error.invalid_utf8': 'Decoded bytes are not valid UTF-8 ({bytes} bytes).',
	// ── ROT13 / Caesar tool ──────────────────────────────────────────────────
	'tool.encode-rot13-caesar-cipher.display_name': 'ROT13 / Caesar Cipher',
	'tool.encode-rot13-caesar-cipher.tagline':
		'ROT13 spoilers or Caesar-shift A–Z and a–z with encrypt and decrypt modes',
	'tool.encode-rot13-caesar-cipher.description':
		'Apply classic ROT13 (rotate letters by 13, its own inverse) or a Caesar cipher with any shift from 1 to 25. Choose encrypt or decrypt for Caesar, use presets or a slider, and keep numbers, punctuation, and Unicode outside basic Latin untouched. Large inputs run in a Web Worker; everything stays in your browser.',
	'tool.encode-rot13-caesar-cipher.primary_keyword': 'rot13 caesar cipher online',
	'tool.encode-rot13-caesar-cipher.meta_title': 'ROT13 & Caesar Cipher — fmtly.dev',
	'tool.encode-rot13-caesar-cipher.meta_description':
		'ROT13 and Caesar shift in your browser: encrypt, decrypt, presets 1–25, Worker for big text. Letters only; private and instant.',
	'tool.encode-rot13-caesar-cipher.operation': 'ROT13 / Caesar shift',
	'tool.encode-rot13-caesar-cipher.faq.0.question': 'Is my text uploaded anywhere?',
	'tool.encode-rot13-caesar-cipher.faq.0.answer':
		'No. The transformation runs entirely in your browser. Your text never leaves your device.',
	'tool.encode-rot13-caesar-cipher.faq.1.question': 'Which characters are changed?',
	'tool.encode-rot13-caesar-cipher.faq.1.answer':
		'Only basic Latin letters A–Z and a–z are rotated. Spaces, digits, punctuation, accented letters, emoji, and all other Unicode code points are left unchanged.',
	'tool.encode-rot13-caesar-cipher.faq.2.question': 'Is this real encryption?',
	'tool.encode-rot13-caesar-cipher.faq.2.answer':
		'No. ROT13 and Caesar ciphers are obfuscation for fun, spoilers, or teaching — they are trivial to break and must not be used to protect secrets.',
	'tool.encode-rot13-caesar-cipher.faq.3.question': 'Why does large input use a Web Worker?',
	'tool.encode-rot13-caesar-cipher.faq.3.answer':
		'Inputs over 500KB are processed off the main thread so the editor stays responsive while every character is scanned.',
	'tool.encode-rot13-caesar-cipher.use_case.0':
		'Hide puzzle or story spoilers in forums and chats with reversible ROT13 text',
	'tool.encode-rot13-caesar-cipher.use_case.1':
		'Teach classical substitution ciphers and modular arithmetic on the alphabet',
	'tool.encode-rot13-caesar-cipher.use_case.2':
		'Quickly try several Caesar shifts when solving CTF or pen-and-paper riddles',
	'tool.encode-rot13-caesar-cipher.use_case.3':
		'Normalize ROT13-encoded payloads from APIs or logs back to readable prose',
	// ── ROT13 / Caesar UI ────────────────────────────────────────────────────
	'ui.rot13.tab_label': 'ROT13',
	'ui.rot13.mode_label': 'Cipher',
	'ui.rot13.mode.rot13': 'ROT13',
	'ui.rot13.mode.caesar': 'Caesar',
	'ui.rot13.rot13_hint':
		'ROT13 rotates A–Z and a–z by 13 places. Applying it twice returns the original text.',
	'ui.rot13.direction_label': 'Direction',
	'ui.rot13.direction.encrypt': 'Encrypt (shift forward)',
	'ui.rot13.direction.decrypt': 'Decrypt (shift backward)',
	'ui.rot13.shift_label': 'Shift (1–25)',
	'ui.rot13.presets_label': 'Presets',
	'ui.rot13.caesar_scope_hint':
		'Only basic Latin letters A–Z and a–z are shifted; numbers, punctuation, spaces, and other Unicode stay unchanged.',
	'ui.rot13.worker_active': 'Large input detected (>{size}). Processing runs in a Web Worker.',
	'ui.rot13.worker_failed': 'Worker processing failed. Falling back to main thread processing.',
	'ui.rot13.worker_badge': 'Worker',
	'ui.rot13.button.apply_output': 'Apply output to input',
	'ui.rot13.input_label': 'Input',
	'ui.rot13.output_label': 'Output',
	'ui.rot13.input_placeholder': 'Type or paste text to transform…',
	'ui.rot13.output_placeholder': 'Transformed text appears here…',
	'ui.rot13.characters': 'chars',
	'ui.rot13.toast.applied': 'Output applied to input',
	// ── Punycode / IDN tool ───────────────────────────────────────────────────
	'tool.encode-punycode-encode-decode.display_name': 'Punycode / IDN',
	'tool.encode-punycode-encode-decode.tagline':
		'Convert internationalized domain names and emails between Unicode and ASCII xn-- form',
	'tool.encode-punycode-encode-decode.description':
		'Convert domain names and email addresses with non-ASCII labels to Punycode (ASCII with xn-- prefixes) and back. Handles multiple labels and @-separated mailboxes locally in your browser. Large inputs run in a Web Worker.',
	'tool.encode-punycode-encode-decode.primary_keyword': 'punycode idn encode decode online',
	'tool.encode-punycode-encode-decode.meta_title': 'Punycode & IDN — Encode / Decode — fmtly.dev',
	'tool.encode-punycode-encode-decode.meta_description':
		'Convert Unicode domains and emails to Punycode (xn--) and decode back. Private, instant, browser-only; Web Worker for large text.',
	'tool.encode-punycode-encode-decode.operation': 'Punycode / IDN',
	'tool.encode-punycode-encode-decode.faq.0.question': 'Is my domain or email sent to a server?',
	'tool.encode-punycode-encode-decode.faq.0.answer':
		'No. Conversion uses the Punycode library entirely in your browser. Your strings never leave your device.',
	'tool.encode-punycode-encode-decode.faq.1.question': 'What does “encode” do here?',
	'tool.encode-punycode-encode-decode.faq.1.answer':
		'Encode runs IDNA toASCII: each label with non-ASCII characters becomes ASCII with an xn-- prefix. Plain ASCII labels are left unchanged.',
	'tool.encode-punycode-encode-decode.faq.2.question':
		'Does this validate real DNS registration rules?',
	'tool.encode-punycode-encode-decode.faq.2.answer':
		'It applies Punycode conversion per RFC 3492 / 5891-style behavior. Full UTS #46 domain registration checks (mapping, validation) are beyond this tool—use registrar or specialized libraries for that.',
	'tool.encode-punycode-encode-decode.faq.3.question': 'Why use a Web Worker for large input?',
	'tool.encode-punycode-encode-decode.faq.3.answer':
		'Inputs over 500KB are processed off the main thread so typing, scrolling, and controls stay responsive.',
	'tool.encode-punycode-encode-decode.use_case.0':
		'Preview how a Unicode hostname or email domain will look in DNS (xn-- form) before configuring DNS or mail',
	'tool.encode-punycode-encode-decode.use_case.1':
		'Decode xn-- hostnames from logs, certificates, or browser devtools back to readable Unicode',
	'tool.encode-punycode-encode-decode.use_case.2':
		'Batch-convert IDN examples in documentation, slides, or support tickets',
	'tool.encode-punycode-encode-decode.use_case.3':
		'Debug URL and email handling when mixing ASCII and internationalized labels',
	// ── Punycode / IDN UI ─────────────────────────────────────────────────────
	'ui.punycode.tab_label': 'Punycode',
	'ui.punycode.action_label': 'Action',
	'ui.punycode.action.encode': 'Unicode → ASCII (IDN)',
	'ui.punycode.action.decode': 'ASCII → Unicode',
	'ui.punycode.hint':
		'Converts internationalized domain names and emails: Unicode labels become ASCII with xn-- prefixes; decode reverses that.',
	'ui.punycode.loading_library': 'Loading Punycode…',
	'ui.punycode.library_load_failed': 'Could not load Punycode library.',
	'ui.punycode.worker_active': 'Large input detected (>{size}). Processing runs in a Web Worker.',
	'ui.punycode.worker_failed': 'Worker processing failed. Falling back to main thread processing.',
	'ui.punycode.worker_badge': 'Worker',
	'ui.punycode.button.swap_direction': 'Swap direction',
	'ui.punycode.button.apply_output': 'Apply output to input',
	'ui.punycode.input_label': 'Input',
	'ui.punycode.output_label': 'Output',
	'ui.punycode.input_placeholder':
		'Domain or email with Unicode labels, or ASCII with xn-- segments…',
	'ui.punycode.output_placeholder': 'ASCII IDN or decoded Unicode appears here…',
	'ui.punycode.characters': 'chars',
	'ui.punycode.toast.applied': 'Output applied to input',
	'ui.punycode.error.invalid_punycode':
		'Invalid Punycode or domain input. Check labels and xn-- prefixes.',
	'ui.punycode.error.processing': 'Conversion failed: {detail}',
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
	'tool.qr-code-generator.meta_title': 'QR Code Generator — SVG, PNG, Colors & Logo | fmtly',
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
	'tool.qr-code-reader.display_name': 'QR Code Reader',
	'tool.qr-code-reader.tagline':
		'Scan QR codes from images in your browser with fast decode, clipboard paste, and Web Worker offload',
	'tool.qr-code-reader.description':
		'Upload PNG, JPG, WebP, or paste a screenshot to extract QR payloads instantly. Decoding runs locally with optional Web Workers for large images—no uploads, no accounts.',
	'tool.qr-code-reader.primary_keyword': 'qr code reader online',
	'tool.qr-code-reader.meta_title': 'QR Code Reader — Scan Images & Paste Screenshots | fmtly',
	'tool.qr-code-reader.meta_description':
		'Read QR codes from images in your browser. Drag-and-drop, camera capture, clipboard paste, and large-image Web Worker decoding. Private and offline-friendly.',
	'tool.qr-code-reader.operation': 'Read QR Code',
	'tool.qr-code-reader.faq.0.question': 'Are my images uploaded to a server?',
	'tool.qr-code-reader.faq.0.answer':
		'No. Images are processed entirely in your browser using JavaScript and Web Workers when needed.',
	'tool.qr-code-reader.faq.1.question': 'Which image formats work best?',
	'tool.qr-code-reader.faq.1.answer':
		'PNG and JPG are the most reliable. WebP and GIF also work. Very small or heavily compressed images may be harder to decode.',
	'tool.qr-code-reader.faq.2.question': 'Why use a Web Worker?',
	'tool.qr-code-reader.faq.2.answer':
		'Large photos produce big pixel buffers. Offloading decode keeps scrolling and typing smooth while the scan finishes.',
	'tool.qr-code-reader.faq.3.question': 'Can I scan a QR from a screenshot?',
	'tool.qr-code-reader.faq.3.answer':
		'Yes. Copy an image to the clipboard and paste it into this page, or save the screenshot and upload it.',
	'tool.qr-code-reader.use_case.0':
		'Open Wi-Fi QR stickers, event links, or app deep links from a photo',
	'tool.qr-code-reader.use_case.1':
		'Verify marketing QR artwork before print by testing the extracted URL',
	'tool.qr-code-reader.use_case.2': 'Decode a QR from a screenshot without installing a mobile app',
	'tool.qr-code-reader.use_case.3':
		'Recover plain text or vCard payloads from conference badge photos',
	'tool.barcode-generator.display_name': 'Barcode Generator',
	'tool.barcode-generator.tagline':
		'Create Code 128, EAN-13, UPC-A, ITF-14, and more as crisp SVG or PNG — tuned for print and scanners',
	'tool.barcode-generator.description':
		'Generate professional 1D barcodes in your browser with live preview. Pick a symbology, tune bar width, height, quiet zone, and colors, then export SVG or PNG. Large payloads can render in a Web Worker so the UI stays responsive — nothing leaves your device.',
	'tool.barcode-generator.primary_keyword': 'barcode generator online',
	'tool.barcode-generator.meta_title': 'Barcode Generator — Code 128, EAN-13, UPC | fmtly',
	'tool.barcode-generator.meta_description':
		'Free browser barcode maker for Code 128, EAN-13, UPC-A, ITF-14, Codabar, MSI, Pharmacode, and more. Custom colors, quiet zone, vector SVG and PNG export. Private Web Worker mode for huge payloads.',
	'tool.barcode-generator.operation': 'Generate Barcode',
	'tool.barcode-generator.faq.0.question': 'Is my barcode data sent to a server?',
	'tool.barcode-generator.faq.0.answer':
		'No. Rendering uses JavaScript in your browser. Large inputs can be processed in a Web Worker on your device.',
	'tool.barcode-generator.faq.1.question': 'Which symbology should I use for retail products?',
	'tool.barcode-generator.faq.1.answer':
		'Use EAN-13 or UPC-A for POS scanning in most retail environments. Use ITF-14 for carton logistics. Code 128 is a strong general-purpose choice when you need flexible alphanumeric data.',
	'tool.barcode-generator.faq.2.question': 'Why would SVG export matter?',
	'tool.barcode-generator.faq.2.answer':
		'SVG stays sharp at any print size and is ideal for packaging, InDesign, and web assets. PNG is convenient for quick previews and raster workflows.',
	'tool.barcode-generator.faq.3.question': 'When does the tool use a Web Worker?',
	'tool.barcode-generator.faq.3.answer':
		'When the encoded payload exceeds about 500 KB of UTF-8 text, generation moves to a Web Worker so the page stays interactive.',
	'tool.barcode-generator.use_case.0':
		'Produce ITF-14 and Code 128 symbols for warehouse labels and shipping cartons',
	'tool.barcode-generator.use_case.1':
		'Generate EAN-13 or UPC-A artwork for packaging mockups before sending to print',
	'tool.barcode-generator.use_case.2':
		'Export vector SVG barcodes for brand guidelines, slides, or documentation',
	'tool.barcode-generator.use_case.3':
		'Create Codabar or MSI symbols for legacy systems and internal tooling',
	'category.crypto.display_name': 'Crypto',
	'category.crypto.description':
		'Hashing, HMAC, file checksums, password checks, UUIDs/ULIDs, RSA/EC keys, X.509 inspection, TOTP, and random strings — all in your browser.',
	'category.crypto.primary_keyword': 'browser crypto tools',
	'tool.random-string-generator.display_name': 'Random String Generator',
	'tool.random-string-generator.tagline':
		'Generate cryptographically secure random strings with charset presets, custom alphabets, separators, and Web Worker offload',
	'tool.random-string-generator.description':
		'Create random strings for passwords, tokens, identifiers, and test data using Web Crypto getRandomValues—no uploads, no server. Choose alphanumeric, hex, numeric, Base64 URL-safe, or a custom alphabet; exclude ambiguous characters; control length, count, and separators; large jobs run in a Web Worker.',
	'tool.random-string-generator.primary_keyword': 'random string generator',
	'tool.random-string-generator.meta_title':
		'Random String Generator — Secure Browser Crypto | fmtly',
	'tool.random-string-generator.meta_description':
		'Generate cryptographically strong random strings in your browser. Presets, custom charset, batch output, ambiguous-safe mode, and Web Worker support. Private and instant.',
	'tool.random-string-generator.operation': 'Generate random strings',
	'tool.random-string-generator.faq.0.question': 'Is this suitable for passwords and API keys?',
	'tool.random-string-generator.faq.0.answer':
		'Strings use crypto.getRandomValues with unbiased sampling from your chosen alphabet. For passwords, prefer long length, a large alphabet, and your own secret management practices.',
	'tool.random-string-generator.faq.1.question': 'Why does it sometimes use a Web Worker?',
	'tool.random-string-generator.faq.1.answer':
		'Very large outputs or huge custom alphabets can block the UI thread. The tool offloads work above a size threshold so the page stays responsive.',
	'tool.random-string-generator.faq.2.question': 'What does “exclude ambiguous characters” do?',
	'tool.random-string-generator.faq.2.answer':
		'It removes characters that are easy to confuse visually (like 0/O, 1/l) from presets, helping humans copy values reliably.',
	'tool.random-string-generator.faq.3.question': 'Is my data sent to a server?',
	'tool.random-string-generator.faq.3.answer':
		'No. Generation runs entirely in your browser. Nothing is uploaded or logged by fmtly.',
	'tool.random-string-generator.use_case.0':
		'Generate password-reset tokens, invite codes, and one-time secrets locally',
	'tool.random-string-generator.use_case.1':
		'Create test fixtures with controlled length, charset, and multi-line batch output',
	'tool.random-string-generator.use_case.2':
		'Produce URL-safe Base64 alphabet strings for identifiers and opaque IDs',
	'tool.random-string-generator.use_case.3':
		'Build custom-alphabet strings for simulations, games, and constrained systems',
	'tool.hash-generator.display_name': 'Hash Generator',
	'tool.hash-generator.tagline':
		'MD5 and SHA family digests for any UTF-8 text — private and instant',
	'tool.hash-generator.description':
		'Compute MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes of pasted text using Web Crypto (and audited MD5). Large inputs offload to a Web Worker so the UI stays smooth.',
	'tool.hash-generator.primary_keyword': 'online hash generator md5 sha256',
	'tool.hash-generator.meta_title': 'Hash Generator — MD5 & SHA in Browser | fmtly',
	'tool.hash-generator.meta_description':
		'Generate MD5, SHA-1, SHA-256, SHA-384, SHA-512 hashes locally. No uploads. Web Worker support for large text.',
	'tool.hash-generator.operation': 'Hash text',
	'tool.hash-generator.faq.0.question': 'Is MD5 still useful?',
	'tool.hash-generator.faq.0.answer':
		'MD5 is legacy and not suitable for security-sensitive integrity. It remains common for checksums and compatibility. Prefer SHA-256 for new designs.',
	'tool.hash-generator.faq.1.question': 'Why does large text use a worker?',
	'tool.hash-generator.faq.1.answer':
		'Hashing megabytes on the main thread can freeze the page. Above a threshold, work moves to a Web Worker.',
	'tool.hash-generator.faq.2.question': 'Which encoding is used?',
	'tool.hash-generator.faq.2.answer':
		'Input is hashed as UTF-8 bytes, matching typical developer expectations.',
	'tool.hash-generator.faq.3.question': 'Is data sent to a server?',
	'tool.hash-generator.faq.3.answer': 'No. Everything runs locally in your browser.',
	'tool.hash-generator.use_case.0': 'Verify downloads and configs against published checksums',
	'tool.hash-generator.use_case.1':
		'Compare file fingerprints without uploading the file (use File Hash for binaries)',
	'tool.hash-generator.use_case.2': 'Debug API payloads and canonical string hashing',
	'tool.hash-generator.use_case.3': 'Generate quick digests for logs and cache keys',
	'tool.hmac-generator.display_name': 'HMAC Generator',
	'tool.hmac-generator.tagline': 'Keyed HMAC-SHA signatures for messages and test vectors',
	'tool.hmac-generator.description':
		'Compute HMAC with SHA-1, SHA-256, SHA-384, or SHA-512. Your secret and message stay in the tab; long messages can use a Web Worker.',
	'tool.hmac-generator.primary_keyword': 'hmac generator online',
	'tool.hmac-generator.meta_title': 'HMAC Generator — SHA HMAC in Browser | fmtly',
	'tool.hmac-generator.meta_description':
		'Compute HMAC signatures with configurable hash and secret. Browser-only, no uploads, worker offload for large messages.',
	'tool.hmac-generator.operation': 'Compute HMAC',
	'tool.hmac-generator.faq.0.question': 'How do I format the key?',
	'tool.hmac-generator.faq.0.answer':
		'The key is interpreted as UTF-8 text, matching common API examples. For raw binary keys, hex-decode elsewhere first.',
	'tool.hmac-generator.faq.1.question': 'Is this the same as JWT signing?',
	'tool.hmac-generator.faq.1.answer':
		'JWT uses a specific encoding (Base64URL segments). This tool is raw HMAC over the message bytes for debugging and test vectors.',
	'tool.hmac-generator.faq.2.question': 'Why avoid SHA-1?',
	'tool.hmac-generator.faq.2.answer':
		'SHA-1 is legacy. HMAC-SHA1 still appears in older systems, but prefer SHA-256 for new work.',
	'tool.hmac-generator.faq.3.question': 'Are secrets stored?',
	'tool.hmac-generator.faq.3.answer':
		'Secrets stay in page memory only. Clear the field when done; fmtly does not upload your data.',
	'tool.hmac-generator.use_case.0': 'Reproduce webhook signature test vectors',
	'tool.hmac-generator.use_case.1': 'Verify AWS-style signing building blocks',
	'tool.hmac-generator.use_case.2':
		'Compare outputs against OpenSSL or language standard libraries',
	'tool.hmac-generator.use_case.3': 'Teach MAC vs hash differences in coursework',
	'tool.file-hash-calculator.display_name': 'File Hash Calculator',
	'tool.file-hash-calculator.tagline': 'MD5, SHA-256, and CRC32 of any local file — never uploaded',
	'tool.file-hash-calculator.description':
		'Drag in a file to compute MD5, SHA-256, and CRC32 in the browser. Large files hash in a Web Worker to keep the UI responsive.',
	'tool.file-hash-calculator.primary_keyword': 'file hash calculator sha256',
	'tool.file-hash-calculator.meta_title': 'File Hash Calculator — MD5, SHA-256, CRC32 | fmtly',
	'tool.file-hash-calculator.meta_description':
		'Local file hashing: MD5, SHA-256, CRC32. No cloud upload. Worker support for large files.',
	'tool.file-hash-calculator.operation': 'Hash files locally',
	'tool.file-hash-calculator.faq.0.question': 'Are files uploaded?',
	'tool.file-hash-calculator.faq.0.answer':
		'No. The file is read with the File API and processed in-memory in your browser.',
	'tool.file-hash-calculator.faq.1.question': 'Why three algorithms?',
	'tool.file-hash-calculator.faq.1.answer':
		'SHA-256 is a modern fingerprint; MD5 appears in older manifests; CRC32 shows up in zip and network stacks.',
	'tool.file-hash-calculator.faq.2.question': 'What about RAM for huge files?',
	'tool.file-hash-calculator.faq.2.answer':
		'The whole file is loaded into memory for hashing. Very large files may require a machine with enough free RAM.',
	'tool.file-hash-calculator.faq.3.question': 'Can I verify downloads?',
	'tool.file-hash-calculator.faq.3.answer':
		'Yes — compare the computed digest to the publisher checksum. Prefer SHA-256 when the source publishes it.',
	'tool.file-hash-calculator.use_case.0': 'Verify ISO and installer checksums',
	'tool.file-hash-calculator.use_case.1': 'Compare build artifacts across CI nodes',
	'tool.file-hash-calculator.use_case.2': 'Fingerprint assets before attaching to tickets',
	'tool.file-hash-calculator.use_case.3': 'Quick integrity checks for archives and datasets',
	'tool.password-strength-meter.display_name': 'Password Strength Meter',
	'tool.password-strength-meter.tagline':
		'Entropy, zxcvbn, and breach checks without sending your password',
	'tool.password-strength-meter.description':
		'Estimate entropy, show zxcvbn score, and query Have I Been Pwned using k-anonymity (SHA-1 prefix only). Your full password never leaves the browser.',
	'tool.password-strength-meter.primary_keyword': 'password strength checker',
	'tool.password-strength-meter.meta_title': 'Password Strength Meter — Entropy & HIBP | fmtly',
	'tool.password-strength-meter.meta_description':
		'Analyze password strength with entropy and zxcvbn. Optional HIBP k-anonymity check. Runs locally in the browser.',
	'tool.password-strength-meter.operation': 'Analyze password strength',
	'tool.password-strength-meter.faq.0.question': 'How does the breach check work?',
	'tool.password-strength-meter.faq.0.answer':
		'Your password is SHA-1 hashed locally. Only the first five hex characters are sent to Have I Been Pwned to retrieve candidate matches — a k-anonymity design.',
	'tool.password-strength-meter.faq.1.question': 'Does fmtly see my password?',
	'tool.password-strength-meter.faq.1.answer':
		'No. Analysis runs in your browser. The breach API never receives your full password.',
	'tool.password-strength-meter.faq.2.question': 'Is zxcvbn enough?',
	'tool.password-strength-meter.faq.2.answer':
		'zxcvbn is a strong heuristic. Combine it with a unique password and a password manager.',
	'tool.password-strength-meter.faq.3.question': 'What if I am offline?',
	'tool.password-strength-meter.faq.3.answer':
		'Entropy and zxcvbn still work; the breach count may be unavailable without network access.',
	'tool.password-strength-meter.use_case.0': 'Coach users during sign-up flows',
	'tool.password-strength-meter.use_case.1': 'Compare passphrase ideas before adopting them',
	'tool.password-strength-meter.use_case.2': 'Security awareness labs without installing software',
	'tool.password-strength-meter.use_case.3': 'Explain why length and diversity matter',
	'tool.uuid-generator.display_name': 'UUID / ULID Generator',
	'tool.uuid-generator.tagline': 'UUID v4, UUID v7, and ULID batches with ULID time decode',
	'tool.uuid-generator.description':
		'Generate random UUID v4, time-sortable UUID v7, and ULID identifiers. Decode ULID timestamps locally. Batch up to 500 values for fixtures.',
	'tool.uuid-generator.primary_keyword': 'uuid v7 generator ulid',
	'tool.uuid-generator.meta_title': 'UUID v4 v7 & ULID Generator | fmtly',
	'tool.uuid-generator.meta_description':
		'Create UUID v4, UUID v7, and ULID values in bulk. Decode ULID time in-browser. No server storage.',
	'tool.uuid-generator.operation': 'Generate identifiers',
	'tool.uuid-generator.faq.0.question': 'Which ID should I use?',
	'tool.uuid-generator.faq.0.answer':
		'Use v4 for pure randomness; v7 or ULID when you want time-ordered IDs and friendlier sorting in databases.',
	'tool.uuid-generator.faq.1.question': 'Are these cryptographically random?',
	'tool.uuid-generator.faq.1.answer':
		'UUID v4/v7 and ULID use secure randomness from the browser where available.',
	'tool.uuid-generator.faq.2.question': 'What does ULID decode show?',
	'tool.uuid-generator.faq.2.answer':
		'ULID embeds a millisecond timestamp in the first characters; we convert that to an ISO time.',
	'tool.uuid-generator.faq.3.question': 'Can I export?',
	'tool.uuid-generator.faq.3.answer':
		'Copy the batch from the output area or use your clipboard utilities — fmtly does not store it.',
	'tool.uuid-generator.use_case.0': 'Seed databases with realistic identifiers',
	'tool.uuid-generator.use_case.1': 'Generate correlation IDs for distributed tracing demos',
	'tool.uuid-generator.use_case.2': 'Create sortable IDs for event streams',
	'tool.uuid-generator.use_case.3': 'Prototype APIs that require UUID or ULID fields',
	'tool.keypair-generator.display_name': 'RSA / EC Key Pair Generator',
	'tool.keypair-generator.tagline':
		'RSA-PSS and ECDSA PEM keys via Web Crypto — private to your session',
	'tool.keypair-generator.description':
		'Generate RSA 2048/4096 and ECDSA P-256/P-384 key pairs, exported as PEM. Keys never leave the browser; download or copy from the page.',
	'tool.keypair-generator.primary_keyword': 'generate rsa key pem browser',
	'tool.keypair-generator.meta_title': 'RSA & EC Key Pair Generator (PEM) | fmtly',
	'tool.keypair-generator.meta_description':
		'Create RSA and elliptic-curve key pairs in PEM format using Web Crypto. Client-side only.',
	'tool.keypair-generator.operation': 'Generate key pairs',
	'tool.keypair-generator.faq.0.question': 'What algorithms are used?',
	'tool.keypair-generator.faq.0.answer':
		'RSA keys use RSA-PSS with SHA-256; EC keys use ECDSA with NIST curves. Exported as PKIX SPKI and PKCS#8 PEM.',
	'tool.keypair-generator.faq.1.question': 'Are these production keys?',
	'tool.keypair-generator.faq.1.answer':
		'They are real keys from Web Crypto, but you must protect private material and follow your org policy for production use.',
	'tool.keypair-generator.faq.2.question': 'Can I use them for TLS?',
	'tool.keypair-generator.faq.2.answer':
		'You still need a certificate signed by a CA (or your own PKI). This tool only generates raw key pairs.',
	'tool.keypair-generator.faq.3.question': 'Where are private keys stored?',
	'tool.keypair-generator.faq.3.answer':
		'Only in your page until you leave or refresh. Save them securely if you need them later.',
	'tool.keypair-generator.use_case.0': 'Prototype JWT signing with local PEM files',
	'tool.keypair-generator.use_case.1': 'Generate throwaway keys for dev containers',
	'tool.keypair-generator.use_case.2': 'Teach asymmetric cryptography with exportable PEM',
	'tool.keypair-generator.use_case.3': 'Compare RSA vs elliptic curve key sizes',
	'tool.certificate-decoder.display_name': 'Certificate Decoder',
	'tool.certificate-decoder.tagline':
		'Parse PEM X.509 certificates: subject, SANs, validity, fingerprint',
	'tool.certificate-decoder.description':
		'Load a PEM certificate to inspect subject, issuer, validity window, signature algorithm, Subject Alternative Names, and SHA-256 fingerprint — parsed locally.',
	'tool.certificate-decoder.primary_keyword': 'x509 certificate decoder pem',
	'tool.certificate-decoder.meta_title': 'X.509 Certificate Decoder — PEM Inspector | fmtly',
	'tool.certificate-decoder.meta_description':
		'Decode PEM certificates in the browser. View SANs, validity, algorithms, and fingerprints without uploading.',
	'tool.certificate-decoder.operation': 'Decode certificates',
	'tool.certificate-decoder.faq.0.question': 'Does this validate trust chains?',
	'tool.certificate-decoder.faq.0.answer':
		'It parses and displays fields. Full chain validation against trust stores is out of scope for this lightweight viewer.',
	'tool.certificate-decoder.faq.1.question': 'Why two fingerprint styles?',
	'tool.certificate-decoder.faq.1.answer':
		'We show SHA-256 as colon-separated hex, a common admin format.',
	'tool.certificate-decoder.faq.2.question': 'Can I paste DER?',
	'tool.certificate-decoder.faq.2.answer':
		'The decoder accepts PEM and common encodings supported by the parser; PEM with headers is the easiest path.',
	'tool.certificate-decoder.faq.3.question': 'Is the certificate uploaded?',
	'tool.certificate-decoder.faq.3.answer': 'No. Parsing happens entirely in your browser.',
	'tool.certificate-decoder.use_case.0': 'Quickly read SANs and expiry during incidents',
	'tool.certificate-decoder.use_case.1': 'Compare dev vs prod cert metadata',
	'tool.certificate-decoder.use_case.2': 'Document handshake issues with precise fingerprints',
	'tool.certificate-decoder.use_case.3': 'Teach X.509 structure without openssl installed',
	'tool.totp-generator.display_name': 'TOTP Generator',
	'tool.totp-generator.tagline': 'RFC 6238 codes from Base32 secrets — matches authenticator apps',
	'tool.totp-generator.description':
		'Generate time-based one-time passwords with configurable period, digits, and HMAC algorithm. Secret stays local; codes refresh every second.',
	'tool.totp-generator.primary_keyword': 'totp generator authenticator',
	'tool.totp-generator.meta_title': 'TOTP Generator — RFC 6238 OTP | fmtly',
	'tool.totp-generator.meta_description':
		'Compute TOTP codes from Base32 secrets. Adjustable period, digits, SHA-1/256/512. Browser-only.',
	'tool.totp-generator.operation': 'Generate TOTP codes',
	'tool.totp-generator.faq.0.question': 'Why Base32?',
	'tool.totp-generator.faq.0.answer':
		'Authenticator apps commonly ship secrets as Base32 strings. We decode that to bytes before HMAC.',
	'tool.totp-generator.faq.1.question': 'Does this replace Google Authenticator?',
	'tool.totp-generator.faq.1.answer':
		'It mirrors the math for debugging. Keep your phone app as the primary second factor for accounts.',
	'tool.totp-generator.faq.2.question': 'Clock skew?',
	'tool.totp-generator.faq.2.answer':
		'Codes depend on UTC time. Large device clock drift can mismatch servers; sync your system clock.',
	'tool.totp-generator.faq.3.question': 'Is the secret stored?',
	'tool.totp-generator.faq.3.answer':
		'Only in memory while this tab is open. Clear it when finished.',
	'tool.totp-generator.use_case.0': 'Verify authenticator implementations during development',
	'tool.totp-generator.use_case.1': 'Compare codes against RFC test vectors',
	'tool.totp-generator.use_case.2': 'Rotate secrets with a known-good generator',
	'tool.totp-generator.use_case.3': 'Support engineers reproducing MFA issues',
	'ui.random_string.tab_label': 'Random',
	'ui.random_string.simple_hint':
		'Change length and character types — output updates automatically.',
	'ui.random_string.length_with_value': 'Length: {n}',
	'ui.random_string.characters_used': 'Characters used',
	'ui.random_string.pick.upper': 'ABC',
	'ui.random_string.pick.lower': 'abc',
	'ui.random_string.pick.digits': '123',
	'ui.random_string.pick.symbols': '#$&',
	'ui.random_string.preset_active_hint':
		'A preset charset is selected. Open Advanced to switch to “Pick” for ABC / abc / 123 / symbols.',
	'ui.random_string.advanced.title': 'Advanced',
	'ui.random_string.exact_length': 'Exact length',
	'ui.random_string.slider_hint':
		'The slider above is quick for lengths 1–256. Type here for longer strings (up to 100,000).',
	'ui.random_string.regenerate': 'Regenerate',
	'ui.random_string.decrease_length': 'Decrease length',
	'ui.random_string.increase_length': 'Increase length',
	'ui.random_string.mode.pick': 'Pick (toggles)',
	'ui.random_string.strength.very_weak': 'Very weak',
	'ui.random_string.strength.weak': 'Weak',
	'ui.random_string.strength.fair': 'Fair',
	'ui.random_string.strength.strong': 'Strong',
	'ui.random_string.strength.very_strong': 'Very strong',
	'ui.random_string.toast.one_charset': 'Select at least one character type.',
	'ui.random_string.generate': 'Generate',
	'ui.random_string.processing': 'Working…',
	'ui.random_string.length_label': 'Length per string',
	'ui.random_string.count_label': 'How many strings',
	'ui.random_string.charset_label': 'Character set',
	'ui.random_string.custom_charset_label': 'Custom characters',
	'ui.random_string.custom_charset_placeholder':
		'Paste or type the exact characters to sample from…',
	'ui.random_string.separator_label': 'Separator between strings',
	'ui.random_string.charset.alphanumeric': 'Alphanumeric',
	'ui.random_string.charset.hex_lower': 'Hex (lowercase)',
	'ui.random_string.charset.hex_upper': 'Hex (uppercase)',
	'ui.random_string.charset.numeric': 'Numeric',
	'ui.random_string.charset.base64url': 'Base64 URL-safe',
	'ui.random_string.charset.custom': 'Custom',
	'ui.random_string.separator.newline': 'New line',
	'ui.random_string.separator.comma': 'Comma',
	'ui.random_string.separator.space': 'Space',
	'ui.random_string.separator.none': 'None (concat)',
	'ui.random_string.exclude_ambiguous': 'Exclude visually ambiguous characters (0/O, 1/l, …)',
	'ui.random_string.output_label': 'Output',
	'ui.random_string.panel_options_heading': 'Generation options',
	'ui.random_string.panel_options_hint':
		'Length, count, charset, and how multiple strings are joined.',
	'ui.random_string.output_placeholder': 'Generated strings appear here',
	'ui.random_string.worker_active':
		'Large input detected (>{size}). Generation runs in a Web Worker.',
	'ui.random_string.worker_failed':
		'Worker processing failed. Falling back to main thread generation.',
	'ui.random_string.worker_badge': 'Worker',
	'ui.random_string.toast.generated': 'Random strings generated',
	'ui.random_string.toast.cleared': 'Output cleared',
	'ui.random_string.toast.nothing_to_download': 'Nothing to download yet',
	'ui.random_string.error.invalid_length': 'Length must be within the allowed range.',
	'ui.random_string.error.invalid_count': 'Count must be within the allowed range.',
	'ui.random_string.error.empty_charset': 'Choose a non-empty character set.',
	'ui.random_string.error.charset_too_large': 'Character set is too large.',
	'ui.random_string.error.crypto_unavailable': 'Web Crypto is not available in this environment.',
	'ui.random_string.error.unknown': 'Could not generate strings.',
	'ui.crypto.tab.hash': 'Hash',
	'ui.crypto.tab.hmac': 'HMAC',
	'ui.crypto.tab.file_hash': 'File',
	'ui.crypto.tab.password': 'Password',
	'ui.crypto.tab.uuid': 'UUID',
	'ui.crypto.tab.keypair': 'Keys',
	'ui.crypto.tab.cert': 'Cert',
	'ui.crypto.tab.totp': 'TOTP',
	'ui.hash.intro':
		'Hash text with MD5 or SHA. Everything runs in your browser — nothing is uploaded.',
	'ui.hash.sample_input': 'fmtly',
	'ui.hash.input_label': 'Input (UTF-8)',
	'ui.hash.regenerate': 'Recompute',
	'ui.hash.error_failed': 'Could not compute hash.',
	'ui.hash.worker_label': 'Worker',
	'ui.hash.worker_hint':
		'Large inputs automatically use a Web Worker so the page stays responsive.',
	'ui.hmac.intro':
		'Compute HMAC with your secret key. Keys stay in this tab — never sent to a server.',
	'ui.hmac.sample_message': 'message',
	'ui.hmac.sample_secret': 'secret',
	'ui.hmac.secret_label': 'Secret key',
	'ui.hmac.message_label': 'Message (UTF-8)',
	'ui.hmac.regenerate': 'Recompute',
	'ui.hmac.error_failed': 'Could not compute HMAC.',
	'ui.hmac.worker_hint':
		'Long messages automatically use a Web Worker so the page stays responsive.',
	'ui.file_hash.intro': 'MD5, SHA-256, and CRC32 of any file — processed locally in your browser.',
	'ui.file_hash.drop_zone': 'Drop a file here or click to choose',
	'ui.file_hash.drop_hint': 'Files are never uploaded.',
	'ui.file_hash.rehash': 'Rehash',
	'ui.file_hash.error_failed': 'Could not hash file.',
	'ui.file_hash.worker_hint':
		'Large files automatically use a Web Worker so the page stays responsive.',
	'ui.password_strength.intro':
		'Entropy, zxcvbn score, and Have I Been Pwned (k-anonymity). Your password never leaves the browser except the anonymous range query.',
	'ui.password_strength.field_label': 'Password',
	'ui.password_strength.show': 'Show',
	'ui.password_strength.hide': 'Hide',
	'ui.password_strength.bits': 'bits',
	'ui.password_strength.band.very_weak': 'Very weak',
	'ui.password_strength.band.weak': 'Weak',
	'ui.password_strength.band.fair': 'Fair',
	'ui.password_strength.band.good': 'Good',
	'ui.password_strength.band.strong': 'Strong',
	'ui.password_strength.summary.entropy': 'Entropy (estimate)',
	'ui.password_strength.summary.crack': 'Crack time (rough)',
	'ui.password_strength.summary.zxcvbn': 'zxcvbn score',
	'ui.password_strength.summary.pwned': 'Known breaches (HIBP)',
	'ui.password_strength.summary.pwned_unknown': 'Breach check unavailable (offline or error).',
	'ui.password_strength.zxcvbn_label': 'zxcvbn score',
	'ui.password_strength.hibp_label': 'HIBP count',
	'ui.uuid.intro':
		'UUID v4, UUID v7, and ULID — generated locally. ULID embeds a timestamp you can decode.',
	'ui.uuid.count': 'Count',
	'ui.uuid.regenerate': 'Regenerate',
	'ui.uuid.output_label': 'Generated identifiers',
	'ui.uuid.ulid_decode_label': 'Decode ULID time',
	'ui.uuid.ulid_placeholder': 'Paste a ULID',
	'ui.uuid.ulid_decode_invalid': 'Not a valid ULID',
	'ui.uuid.decode': 'Decode',
	'ui.keypair.intro':
		'RSA (PSS) and ECDSA key pairs exported as PEM. Generated only in your browser via Web Crypto.',
	'ui.keypair.bits': 'bits',
	'ui.keypair.generate': 'Generate',
	'ui.keypair.public': 'Public key',
	'ui.keypair.private': 'Private key',
	'ui.keypair.error_failed': 'Could not generate key pair.',
	'ui.cert.intro':
		'Inspect PEM X.509 certificates: subject, validity, SANs, fingerprint — parsed locally.',
	'ui.cert.pem_label': 'PEM certificate',
	'ui.cert.placeholder_hint': 'Paste a PEM-encoded certificate…',
	'ui.cert.subject': 'Subject',
	'ui.cert.issuer': 'Issuer',
	'ui.cert.serial': 'Serial',
	'ui.cert.valid_from': 'Valid from',
	'ui.cert.valid_to': 'Valid to',
	'ui.cert.sig_alg': 'Signature',
	'ui.cert.public_key': 'Public key',
	'ui.cert.fp256': 'SHA-256 fingerprint',
	'ui.cert.san': 'Subject Alternative Names',
	'ui.cert.redo': 'Decode again',
	'ui.totp.intro':
		'RFC 6238 TOTP from a Base32 secret. Matches authenticator apps when settings align.',
	'ui.totp.secret_label': 'Secret (Base32)',
	'ui.totp.period': 'Period (s)',
	'ui.totp.digits': 'Digits',
	'ui.totp.code_label': 'Code',
	'ui.totp.refresh': 'Refresh',
	'ui.totp.error_failed': 'Invalid secret or settings.',
	'ui.qr.tab_label': 'QR',
	'ui.qr.tab_reader': 'Read',
	'ui.qr.tab_barcode': 'Barcode',
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
	'ui.qr.toast.logo_removed': 'Logo overlay removed',
	'ui.qr.reader.upload': 'Upload',
	'ui.qr.reader.camera': 'Camera',
	'ui.qr.reader.drop_title': 'Drop an image here',
	'ui.qr.reader.drop_hint':
		'PNG, JPG, WebP, GIF, or SVG. Large images decode off the main thread. You can also paste a screenshot.',
	'ui.qr.reader.drop_aria': 'Upload or drop an image to scan',
	'ui.qr.reader.preview_alt': 'Uploaded image preview',
	'ui.qr.reader.result_label': 'Decoded content',
	'ui.qr.reader.empty_state': 'Decoded text appears here. Your image never leaves the browser.',
	'ui.qr.reader.status_decoding': 'Scanning image…',
	'ui.qr.reader.status_ok': '{size} · {ms} ms',
	'ui.qr.reader.error_no_qr':
		'No QR code was found. Try a sharper photo, better lighting, or a larger crop.',
	'ui.qr.reader.error_decode': 'Could not read this image. Try another file or format.',
	'ui.qr.reader.error_load': 'Could not load this image. Try PNG, JPG, or WebP from your device.',
	'ui.qr.reader.error_type': 'Please choose an image file.',
	'ui.qr.reader.worker_active':
		'Large image ({size}). Decoding runs in a Web Worker to keep the UI responsive.',
	'ui.qr.reader.worker_badge': 'Worker',
	'ui.qr.reader.worker_failed': 'Worker decoding failed. Retrying on the main thread.',
	'ui.barcode.characters': 'chars',
	'ui.barcode.content_label': 'Barcode data',
	'ui.barcode.input_placeholder': 'Type or paste the payload for the selected symbology…',
	'ui.barcode.format_label': 'Symbology',
	'ui.barcode.format_hint': 'Retail GTINs use EAN/UPC; logistics often uses Code 128 or ITF-14.',
	'ui.barcode.preview_label': 'Preview',
	'ui.barcode.preview_alt': 'Barcode preview',
	'ui.barcode.output_empty': 'Generate a barcode to preview and export it.',
	'ui.barcode.raster_only': 'PNG only (worker)',
	'ui.barcode.empty_preview': 'Adjust data and options to render a vector or raster preview.',
	'ui.barcode.copy_svg': 'Copy SVG',
	'ui.barcode.copy_png': 'Copy PNG data URL',
	'ui.barcode.copy_svg_unavailable': 'SVG is not available for this preview.',
	'ui.barcode.download_svg': 'SVG',
	'ui.barcode.download_png': 'PNG',
	'ui.barcode.section.appearance': 'Appearance',
	'ui.barcode.display_value': 'Show human-readable text',
	'ui.barcode.bar_width': 'Bar width',
	'ui.barcode.bar_height': 'Bar height',
	'ui.barcode.font_size': 'Label size',
	'ui.barcode.quiet_zone': 'Quiet zone',
	'ui.barcode.line_color': 'Bars',
	'ui.barcode.background': 'Background',
	'ui.barcode.worker_active': 'Large payload ({size}). Barcode generation runs in a Web Worker.',
	'ui.barcode.worker_badge': 'Worker',
	'ui.barcode.worker_failed': 'Worker failed. Retrying on the main thread.',
	'ui.barcode.error.empty': 'Enter a value to encode.',
	'ui.barcode.error.invalid_value': 'This value does not match the selected format.',
	'ui.barcode.error.generation_failed': 'Could not generate barcode: {detail}',
	'ui.barcode.error.ean13': 'EAN-13 requires 12 or 13 digits.',
	'ui.barcode.error.ean8': 'EAN-8 requires 7 or 8 digits.',
	'ui.barcode.error.upc': 'UPC-A requires 11 or 12 digits.',
	'ui.barcode.error.itf14': 'ITF-14 requires 13 or 14 digits.',
	'ui.barcode.error.itf': 'ITF requires an even number of digits (at least two).',
	'ui.barcode.error.msi': 'MSI encodes digits only.',
	'ui.barcode.error.pharmacode': 'Pharmacode must be an integer from 1 to 131070.',
	'ui.barcode.format.CODE128': 'Code 128',
	'ui.barcode.format.CODE39': 'Code 39',
	'ui.barcode.format.CODE93': 'Code 93',
	'ui.barcode.format.codabar': 'Codabar',
	'ui.barcode.format.EAN13': 'EAN-13',
	'ui.barcode.format.EAN8': 'EAN-8',
	'ui.barcode.format.UPC': 'UPC-A',
	'ui.barcode.format.ITF14': 'ITF-14',
	'ui.barcode.format.ITF': 'ITF (interleaved)',
	'ui.barcode.format.MSI': 'MSI',
	'ui.barcode.format.MSI10': 'MSI (mod 10)',
	'ui.barcode.format.MSI11': 'MSI (mod 11)',
	'ui.barcode.format.MSI1010': 'MSI (mod 1010)',
	'ui.barcode.format.MSI1110': 'MSI (mod 1110)',
	'ui.barcode.format.pharmacode': 'Pharmacode',

	'category.generate.display_name': 'Generators',
	'category.generate.description':
		'Create test data, identifiers, passwords, .gitignore files, and README skeletons — instantly in your browser.',
	'category.generate.primary_keyword': 'developer generators',

	'tool.fake-data-generator.display_name': 'Fake Data Generator',
	'tool.fake-data-generator.tagline': 'Realistic rows for QA and demos',
	'tool.fake-data-generator.description':
		'Generate names, emails, addresses, and more with locale-aware Faker. Export as JSON, CSV, or SQL INSERT statements. Large batches run in a Web Worker.',
	'tool.fake-data-generator.primary_keyword': 'fake data generator',
	'tool.fake-data-generator.meta_title': 'Fake Data Generator — JSON, CSV, SQL | fmtly',
	'tool.fake-data-generator.meta_description':
		'Free in-browser fake data: configurable fields, locale, row count, JSON/CSV/SQL export. No upload, Web Worker for huge outputs.',
	'tool.fake-data-generator.operation': 'generate',
	'tool.fake-data-generator.faq.0.question': 'Is data truly random?',
	'tool.fake-data-generator.faq.0.answer':
		'Values are produced with Faker and Web Crypto–backed randomness where applicable. Use only for testing — never as real PII.',
	'tool.fake-data-generator.faq.1.question': 'When does generation use a worker?',
	'tool.fake-data-generator.faq.1.answer':
		'Very large row counts or estimated output over ~500KB are generated off the main thread so the page stays responsive.',
	'tool.fake-data-generator.faq.2.question': 'Which export formats are supported?',
	'tool.fake-data-generator.faq.2.answer':
		'JSON array of objects, CSV with a header row, or SQL INSERT into a table name you choose.',
	'tool.fake-data-generator.faq.3.question': 'Does my data leave the browser?',
	'tool.fake-data-generator.faq.3.answer':
		'No. Everything runs locally; fmtly does not send your input or output to a server.',
	'tool.fake-data-generator.use_case.0': 'Seed integration tests and staging databases',
	'tool.fake-data-generator.use_case.1': 'Demo apps without exposing real customer data',
	'tool.fake-data-generator.use_case.2': 'Prototype CSV imports and ETL pipelines',
	'tool.fake-data-generator.use_case.3': 'Share reproducible samples with teammates',

	'tool.uuid-batch-generator.display_name': 'UUID Batch Generator',
	'tool.uuid-batch-generator.tagline': 'Thousands of UUID v4 or v7 values',
	'tool.uuid-batch-generator.description':
		'Generate newline or comma-separated UUID batches, copy all, or download a text file. Large batches use a Web Worker.',
	'tool.uuid-batch-generator.primary_keyword': 'uuid batch generator',
	'tool.uuid-batch-generator.meta_title': 'UUID Batch Generator — v4 & v7 | fmtly',
	'tool.uuid-batch-generator.meta_description':
		'Generate up to hundreds of thousands of UUID v4 or v7 identifiers in the browser. Copy or download; worker offload for huge counts.',
	'tool.uuid-batch-generator.operation': 'generate',
	'tool.uuid-batch-generator.faq.0.question': 'How is this different from the single UUID tool?',
	'tool.uuid-batch-generator.faq.0.answer':
		'This tool is optimized for bulk lists, file download, and comma-separated export. The crypto UUID tool focuses on one ID and ULID decode.',
	'tool.uuid-batch-generator.faq.1.question': 'v4 vs v7?',
	'tool.uuid-batch-generator.faq.1.answer':
		'v4 is random. v7 is time-sortable (RFC 9562) — useful for ordered IDs. Both are generated locally.',
	'tool.uuid-batch-generator.faq.2.question': 'Why use a worker?',
	'tool.uuid-batch-generator.faq.2.answer':
		'Generating hundreds of thousands of UUIDs can block the UI; the worker keeps scrolling and typing smooth.',
	'tool.uuid-batch-generator.faq.3.question': 'Are these cryptographically secure?',
	'tool.uuid-batch-generator.faq.3.answer':
		'They use the same uuid package as common runtimes. For security-critical secrets, follow your threat model and platform guidance.',
	'tool.uuid-batch-generator.use_case.0': 'Load tests and fixture files',
	'tool.uuid-batch-generator.use_case.1': 'Populate spreadsheet columns with unique IDs',
	'tool.uuid-batch-generator.use_case.2': 'Seed databases with time-ordered v7 keys',
	'tool.uuid-batch-generator.use_case.3': 'Quick clipboard paste into config or scripts',

	'tool.generate-password-generator.display_name': 'Password Generator',
	'tool.generate-password-generator.tagline': 'Strong passwords in the browser',
	'tool.generate-password-generator.description':
		'Build passwords from length and character classes with Web Crypto randomness. Optional readability dashes and a local zxcvbn strength hint.',
	'tool.generate-password-generator.primary_keyword': 'password generator',
	'tool.generate-password-generator.meta_title': 'Password Generator — secure & local | fmtly',
	'tool.generate-password-generator.meta_description':
		'Generate secure passwords with custom length, symbols, and ambiguity options. Strength hint via zxcvbn; no data sent to a server.',
	'tool.generate-password-generator.operation': 'generate',
	'tool.generate-password-generator.faq.0.question':
		'How is this different from the password strength checker?',
	'tool.generate-password-generator.faq.0.answer':
		'This tool creates new passwords. The crypto strength meter scores passwords you already have.',
	'tool.generate-password-generator.faq.1.question': 'Where does randomness come from?',
	'tool.generate-password-generator.faq.1.answer':
		'From crypto.getRandomValues in your browser — the same API used for TLS and other secure contexts.',
	'tool.generate-password-generator.faq.2.question': 'What does the strength hint mean?',
	'tool.generate-password-generator.faq.2.answer':
		'zxcvbn estimates guessability from patterns. It runs locally and is a hint, not a guarantee.',
	'tool.generate-password-generator.faq.3.question': 'Should I use these passwords in production?',
	'tool.generate-password-generator.faq.3.answer':
		'Combine generated secrets with your organization’s policies, rotation, and vault tooling.',
	'tool.generate-password-generator.use_case.0': 'New admin or service account credentials',
	'tool.generate-password-generator.use_case.1': 'Temporary share secrets for demos',
	'tool.generate-password-generator.use_case.2': 'High-entropy strings when symbols are required',
	'tool.generate-password-generator.use_case.3': 'Teaching secure defaults in workshops',

	'tool.gitignore-builder.display_name': '.gitignore Builder',
	'tool.gitignore-builder.tagline': 'Merge curated ignore rules',
	'tool.gitignore-builder.description':
		'Pick stacks and environments — Node, Python, Rust, OS noise, IDEs, and more — and merge into one .gitignore. Static templates, no network calls.',
	'tool.gitignore-builder.primary_keyword': 'gitignore generator',
	'tool.gitignore-builder.meta_title': '.gitignore Builder — merged templates | fmtly',
	'tool.gitignore-builder.meta_description':
		'Combine curated gitignore-style fragments for languages, frameworks, Docker, Terraform, and editors. Copy the result in one click.',
	'tool.gitignore-builder.operation': 'generate',
	'tool.gitignore-builder.faq.0.question': 'Is this the same as gitignore.io?',
	'tool.gitignore-builder.faq.0.answer':
		'We ship curated fragments inspired by common community templates; you merge them locally without API calls.',
	'tool.gitignore-builder.faq.1.question': 'Can I edit the output?',
	'tool.gitignore-builder.faq.1.answer':
		'Yes — copy to your repo and adjust. Order and sections are deterministic for easy diffs.',
	'tool.gitignore-builder.faq.2.question': 'Why merge instead of one giant template?',
	'tool.gitignore-builder.faq.2.answer':
		'Smaller, relevant rules reduce noise and merge conflicts in new projects.',
	'tool.gitignore-builder.faq.3.question': 'Do you log my selections?',
	'tool.gitignore-builder.faq.3.answer': 'No. Selections stay in your browser.',
	'tool.gitignore-builder.use_case.0': 'Bootstrap a new repo with sensible defaults',
	'tool.gitignore-builder.use_case.1': 'Add OS and editor cruft rules quickly',
	'tool.gitignore-builder.use_case.2': 'Combine Docker or Terraform snippets with app stacks',
	'tool.gitignore-builder.use_case.3': 'Teach Git hygiene in courses',

	'tool.readme-template-generator.display_name': 'README Template',
	'tool.readme-template-generator.tagline': 'Project readme skeleton in seconds',
	'tool.readme-template-generator.description':
		'Fill title, description, install, usage, license, and optional GitHub badges — get a clean Markdown README you can paste into your repo.',
	'tool.readme-template-generator.primary_keyword': 'readme generator',
	'tool.readme-template-generator.meta_title': 'README Template Generator — Markdown | fmtly',
	'tool.readme-template-generator.meta_description':
		'Create a structured README.md from form fields: install commands, usage, license, optional badges. All client-side.',
	'tool.readme-template-generator.operation': 'generate',
	'tool.readme-template-generator.faq.0.question': 'Can I customize sections later?',
	'tool.readme-template-generator.faq.0.answer':
		'Yes. The output is plain Markdown — edit in any editor or extend with your own sections.',
	'tool.readme-template-generator.faq.1.question': 'Do badges work for any host?',
	'tool.readme-template-generator.faq.1.answer':
		'Badges use a common shields.io-style pattern for GitHub paths. Adjust URLs for other forges if needed.',
	'tool.readme-template-generator.faq.2.question': 'Is my project name sent anywhere?',
	'tool.readme-template-generator.faq.2.answer': 'No. Text is assembled only in your browser.',
	'tool.readme-template-generator.faq.3.question': 'Can I use this for private repos?',
	'tool.readme-template-generator.faq.3.answer':
		'Yes — nothing is uploaded; copy the Markdown into your repository manually.',
	'tool.readme-template-generator.use_case.0': 'Open source releases on GitHub or GitLab',
	'tool.readme-template-generator.use_case.1': 'Internal libraries needing a consistent readme',
	'tool.readme-template-generator.use_case.2': 'Hackathons and prototypes that need polish fast',
	'tool.readme-template-generator.use_case.3': 'Teaching Markdown and repo hygiene',

	'tool.pdf-viewer.display_name': 'PDF Viewer',
	'tool.pdf-viewer.tagline': 'Render PDF pages with zoom and navigation controls',
	'tool.pdf-viewer.description':
		'Open PDFs in the browser and navigate pages with smooth zoom controls and quick page switching.',
	'tool.pdf-viewer.primary_keyword': 'pdf viewer',
	'tool.pdf-viewer.meta_title': 'PDF Viewer Online — fmtly.dev',
	'tool.pdf-viewer.meta_description':
		'View PDF files directly in your browser with page navigation and zoom controls. No upload required.',
	'tool.pdf-viewer.operation': 'View',
	'tool.pdf-viewer.faq.0.question': 'Are PDF files uploaded to a server?',
	'tool.pdf-viewer.faq.0.answer': 'No. Files stay in your browser and are never uploaded.',
	'tool.pdf-viewer.faq.1.question': 'Can I navigate large PDFs?',
	'tool.pdf-viewer.faq.1.answer':
		'Yes. You can jump page by page and zoom in or out for easier reading.',
	'tool.pdf-viewer.faq.2.question': 'Does it support password-protected PDFs?',
	'tool.pdf-viewer.faq.2.answer': 'Encrypted PDFs are not supported in this viewer flow yet.',
	'tool.pdf-viewer.faq.3.question': 'Which browsers are recommended?',
	'tool.pdf-viewer.faq.3.answer':
		'Latest Chrome, Edge, Firefox, and Safari versions provide the best compatibility.',
	'tool.pdf-viewer.use_case.0': 'Quickly preview attachments before sharing',
	'tool.pdf-viewer.use_case.1': 'Inspect scanned files without desktop software',
	'tool.pdf-viewer.use_case.2': 'Review long PDFs with zoom and page controls',
	'tool.pdf-viewer.use_case.3': 'Open PDF files securely in-browser',

	'tool.pdf-to-text.display_name': 'PDF to Text',
	'tool.pdf-to-text.tagline': 'Extract raw text page by page from PDF files',
	'tool.pdf-to-text.description':
		'Extract plain text from PDF pages and review each page output separately for copy and export.',
	'tool.pdf-to-text.primary_keyword': 'pdf to text',
	'tool.pdf-to-text.meta_title': 'PDF to Text Extractor — fmtly.dev',
	'tool.pdf-to-text.meta_description':
		'Extract text from PDF files page by page in your browser. Copy or download extracted text instantly.',
	'tool.pdf-to-text.operation': 'Extract',
	'tool.pdf-to-text.faq.0.question': 'How accurate is text extraction?',
	'tool.pdf-to-text.faq.0.answer':
		'Text-based PDFs extract accurately. Scanned image PDFs may require OCR outside this tool.',
	'tool.pdf-to-text.faq.1.question': 'Is output grouped by page?',
	'tool.pdf-to-text.faq.1.answer': 'Yes. Each page is returned with its own extracted text block.',
	'tool.pdf-to-text.faq.2.question': 'Can I download extracted text?',
	'tool.pdf-to-text.faq.2.answer': 'Yes. You can download all extracted pages as a text file.',
	'tool.pdf-to-text.faq.3.question': 'Does it work offline?',
	'tool.pdf-to-text.faq.3.answer':
		'Once loaded, processing is local in your browser without sending file contents to any server.',
	'tool.pdf-to-text.use_case.0': 'Extract legal clauses for quick review',
	'tool.pdf-to-text.use_case.1': 'Reuse content from reports and manuals',
	'tool.pdf-to-text.use_case.2': 'Prepare text for translation workflows',
	'tool.pdf-to-text.use_case.3': 'Create searchable copies of text PDFs',

	'tool.pdf-merge.display_name': 'PDF Merge',
	'tool.pdf-merge.tagline': 'Combine multiple PDF files into one document',
	'tool.pdf-merge.description':
		'Merge multiple PDFs in your preferred order into a single downloadable file.',
	'tool.pdf-merge.primary_keyword': 'pdf merge',
	'tool.pdf-merge.meta_title': 'Merge PDF Files Online — fmtly.dev',
	'tool.pdf-merge.meta_description':
		'Merge multiple PDF files in-browser and download one combined PDF. Reorder files before merging.',
	'tool.pdf-merge.operation': 'Merge',
	'tool.pdf-merge.faq.0.question': 'Can I reorder files before merging?',
	'tool.pdf-merge.faq.0.answer': 'Yes. Move files up or down before starting merge.',
	'tool.pdf-merge.faq.1.question': 'Is there a file count limit?',
	'tool.pdf-merge.faq.1.answer':
		'There is no strict count limit, but very large sets may take longer depending on memory.',
	'tool.pdf-merge.faq.2.question': 'Will quality change after merge?',
	'tool.pdf-merge.faq.2.answer':
		'No re-encoding is applied; pages are copied directly into a new PDF.',
	'tool.pdf-merge.faq.3.question': 'Is my data private?',
	'tool.pdf-merge.faq.3.answer': 'Yes. All merge processing happens locally in your browser.',
	'tool.pdf-merge.use_case.0': 'Combine invoice batches into one file',
	'tool.pdf-merge.use_case.1': 'Bundle report chapters before delivery',
	'tool.pdf-merge.use_case.2': 'Join signed document parts in order',
	'tool.pdf-merge.use_case.3': 'Assemble project documentation quickly',

	'tool.pdf-split.display_name': 'PDF Split',
	'tool.pdf-split.tagline': 'Split a PDF into individual page files',
	'tool.pdf-split.description': 'Split one PDF into separate files by entering custom page ranges.',
	'tool.pdf-split.primary_keyword': 'pdf split',
	'tool.pdf-split.meta_title': 'Split PDF Pages Online — fmtly.dev',
	'tool.pdf-split.meta_description':
		'Split PDF documents by page ranges and download each selected page as its own PDF file.',
	'tool.pdf-split.operation': 'Split',
	'tool.pdf-split.faq.0.question': 'How do page ranges work?',
	'tool.pdf-split.faq.0.answer':
		'Use formats like 1,3,5-8. You can mix single pages and ranges in one input.',
	'tool.pdf-split.faq.1.question': 'Can I split all pages?',
	'tool.pdf-split.faq.1.answer': 'Yes. Enter a full range like 1-200 or your document page count.',
	'tool.pdf-split.faq.2.question': 'Are pages renumbered?',
	'tool.pdf-split.faq.2.answer': 'Output files keep original page positions in their filenames.',
	'tool.pdf-split.faq.3.question': 'Is this secure for confidential files?',
	'tool.pdf-split.faq.3.answer':
		'Yes. File processing runs fully in your browser without server upload.',
	'tool.pdf-split.use_case.0': 'Send only required pages to clients',
	'tool.pdf-split.use_case.1': 'Break long manuals into smaller parts',
	'tool.pdf-split.use_case.2': 'Archive specific sections independently',
	'tool.pdf-split.use_case.3': 'Prepare per-page review packets',

	'tool.pdf-page-extractor.display_name': 'PDF Page Extractor',
	'tool.pdf-page-extractor.tagline': 'Extract specific pages into a new PDF',
	'tool.pdf-page-extractor.description':
		'Select custom pages and generate a new PDF containing only the pages you need.',
	'tool.pdf-page-extractor.primary_keyword': 'extract pages from pdf',
	'tool.pdf-page-extractor.meta_title': 'Extract PDF Pages — fmtly.dev',
	'tool.pdf-page-extractor.meta_description':
		'Extract selected pages from a PDF and create a new document instantly in your browser.',
	'tool.pdf-page-extractor.operation': 'Extract Pages',
	'tool.pdf-page-extractor.faq.0.question': 'What is the difference from split?',
	'tool.pdf-page-extractor.faq.0.answer':
		'Extractor creates one new PDF with selected pages. Split creates multiple single-page files.',
	'tool.pdf-page-extractor.faq.1.question': 'Can I keep page order?',
	'tool.pdf-page-extractor.faq.1.answer':
		'Yes. Selected pages are included in ascending order by default.',
	'tool.pdf-page-extractor.faq.2.question': 'Can I remove duplicates in selection?',
	'tool.pdf-page-extractor.faq.2.answer':
		'Duplicate pages are automatically de-duplicated when processing page ranges.',
	'tool.pdf-page-extractor.faq.3.question': 'Are bookmarks preserved?',
	'tool.pdf-page-extractor.faq.3.answer':
		'Only page content is preserved in this lightweight extraction workflow.',
	'tool.pdf-page-extractor.use_case.0': 'Create focused packets from large files',
	'tool.pdf-page-extractor.use_case.1': 'Send appendix-only versions',
	'tool.pdf-page-extractor.use_case.2': 'Prepare evidence or reference subsets',
	'tool.pdf-page-extractor.use_case.3': 'Build concise review documents',

	'tool.pdf-metadata-viewer.display_name': 'PDF Metadata Viewer',
	'tool.pdf-metadata-viewer.tagline': 'Inspect PDF metadata fields and file details',
	'tool.pdf-metadata-viewer.description':
		'Read PDF metadata such as title, author, creator, dates, page count, and file size.',
	'tool.pdf-metadata-viewer.primary_keyword': 'pdf metadata',
	'tool.pdf-metadata-viewer.meta_title': 'PDF Metadata Viewer — fmtly.dev',
	'tool.pdf-metadata-viewer.meta_description':
		'Inspect PDF metadata in your browser, including document info, page count, and file size.',
	'tool.pdf-metadata-viewer.operation': 'Inspect',
	'tool.pdf-metadata-viewer.faq.0.question': 'Which metadata fields are shown?',
	'tool.pdf-metadata-viewer.faq.0.answer':
		'The tool shows title, author, subject, keywords, creator, producer, and dates when available.',
	'tool.pdf-metadata-viewer.faq.1.question': 'Can I edit metadata?',
	'tool.pdf-metadata-viewer.faq.1.answer':
		'This tool is read-only and focuses on fast metadata inspection.',
	'tool.pdf-metadata-viewer.faq.2.question': 'What if fields are empty?',
	'tool.pdf-metadata-viewer.faq.2.answer':
		'Some PDFs do not define all fields. Missing values are displayed as unavailable.',
	'tool.pdf-metadata-viewer.faq.3.question': 'Is metadata extraction local?',
	'tool.pdf-metadata-viewer.faq.3.answer': 'Yes. Metadata is parsed entirely in your browser.',
	'tool.pdf-metadata-viewer.use_case.0': 'Audit document provenance fields',
	'tool.pdf-metadata-viewer.use_case.1': 'Check page count before batch processing',
	'tool.pdf-metadata-viewer.use_case.2': 'Validate publishing metadata quickly',
	'tool.pdf-metadata-viewer.use_case.3': 'Confirm file details before sharing',

	'ui.generate_fake_data.no_fields': 'Select at least one field.',
	'ui.generate_fake_data.fields_label': 'Fields',
	'ui.generate_fake_data.rows': 'Rows',
	'ui.generate_fake_data.format': 'Export format',
	'ui.generate_fake_data.table': 'SQL table name',
	'ui.generate_fake_data.generate': 'Generate',
	'ui.generate_fake_data.worker_badge': 'Web Worker',
	'ui.generate_fake_data.preview': 'Output',
	'ui.generate_fake_data.placeholder': 'Generated data appears here…',
	'ui.generate_fake_data.field.fullName': 'Full name',
	'ui.generate_fake_data.field.firstName': 'First name',
	'ui.generate_fake_data.field.lastName': 'Last name',
	'ui.generate_fake_data.field.email': 'Email',
	'ui.generate_fake_data.field.phone': 'Phone',
	'ui.generate_fake_data.field.street': 'Street',
	'ui.generate_fake_data.field.city': 'City',
	'ui.generate_fake_data.field.zip': 'ZIP',
	'ui.generate_fake_data.field.country': 'Country',
	'ui.generate_fake_data.field.company': 'Company',
	'ui.generate_fake_data.field.jobTitle': 'Job title',
	'ui.generate_fake_data.field.ipv4': 'IPv4',
	'ui.generate_fake_data.field.date': 'Date',
	'ui.generate_fake_data.field.uuid': 'UUID',

	'ui.generate_uuid_batch.count': 'Count',
	'ui.generate_uuid_batch.separator': 'Separator',
	'ui.generate_uuid_batch.sep_line': 'Newline',
	'ui.generate_uuid_batch.sep_comma': 'Comma',
	'ui.generate_uuid_batch.generate': 'Generate',
	'ui.generate_uuid_batch.worker': 'Web Worker',
	'ui.generate_uuid_batch.output': 'UUIDs',
	'ui.generate_uuid_batch.placeholder': 'Generated UUIDs appear here…',

	'ui.generate_password.length': 'Length',
	'ui.generate_password.upper': 'A–Z',
	'ui.generate_password.lower': 'a–z',
	'ui.generate_password.digits': '0–9',
	'ui.generate_password.symbols': 'Symbols',
	'ui.generate_password.no_ambiguous': 'Avoid ambiguous',
	'ui.generate_password.groups': 'Dash every N chars (0 = off)',
	'ui.generate_password.regenerate': 'Regenerate',
	'ui.generate_password.strength_hint': 'Hint',
	'ui.generate_password.strength.0': 'Too guessable',
	'ui.generate_password.strength.1': 'Very weak',
	'ui.generate_password.strength.2': 'Weak',
	'ui.generate_password.strength.3': 'Good',
	'ui.generate_password.strength.4': 'Strong',
	'ui.generate_password.disclaimer':
		'Generated in your browser with Web Crypto. Strength hint uses zxcvbn locally — verify policies for production secrets.',

	'ui.generate_gitignore.search': 'Filter stacks…',

	'ui.generate_readme.title': 'Title',
	'ui.generate_readme.license': 'License',
	'ui.generate_readme.description': 'Description',
	'ui.generate_readme.install': 'Installation',
	'ui.generate_readme.usage': 'Usage',
	'ui.generate_readme.badges': 'Include GitHub-style badges',
	'ui.generate_readme.repo_user': 'GitHub user/org',
	'ui.generate_readme.repo_name': 'Repository name',

	'ui.pdf.select_file': 'Select PDF',
	'ui.pdf.upload.aria': 'Upload PDF files',
	'ui.pdf.upload.drop_title': 'Drop PDF here or browse',
	'ui.pdf.upload.drop_hint': 'Your files stay in this browser — nothing is uploaded to a server.',
	'ui.pdf.upload.browse': 'Browse files',
	'ui.pdf.upload.pill_private': 'Private',
	'ui.pdf.upload.pill_instant': 'Instant',
	'ui.pdf.upload.pill_local': 'Local-only',
	'ui.pdf.upload.keyboard_hint': 'Browse to choose a file, or drag PDFs into this area',
	'ui.pdf.upload.input_aria': 'Choose PDF file',
	'ui.pdf.upload.input_aria_multiple': 'Choose PDF files',
	'ui.pdf.select_file_first': 'Select a PDF file first',
	'ui.pdf.worker_used': 'Worker',
	'ui.pdf.bytes': 'bytes',
	'ui.pdf.page': 'Page',
	'ui.pdf.page_ranges_placeholder': 'e.g. 1,3-5',
	'ui.pdf.ranges_label': 'Page ranges',
	'ui.pdf.ranges.help':
		'Comma-separated pages, or ranges with a hyphen (1-based). Example: 1,3-5,8. En-dash and semicolons are accepted.',
	'ui.pdf.ranges.valid_summary': '{n} pages in selection',
	'ui.pdf.ranges.document_pages': '{n} pages in file',
	'ui.pdf.ranges.err_empty': 'Enter at least one page or range.',
	'ui.pdf.ranges.err_no_pdf_pages': 'This PDF has no pages.',
	'ui.pdf.ranges.err_ambiguous_hyphen':
		'Use one hyphen per range (e.g. 3-7). Separate multiple ranges with commas — not 1-2-3.',
	'ui.pdf.ranges.err_invalid_number': 'Each entry must be a whole page number.',
	'ui.pdf.ranges.err_range_out_of_bounds': 'A page number is outside this document.',
	'ui.pdf.ranges.err_invalid_range_bounds':
		'Invalid range — use numbers from 1 through the last page.',
	'ui.pdf.error.load_failed': 'Could not read this PDF. It may be corrupted or not a PDF.',

	'ui.pdf.viewer.hero_title': 'PDF viewer',
	'ui.pdf.viewer.hero_subtitle':
		'Navigate pages, zoom, and preview thumbnails — entirely in your browser.',
	'ui.pdf.viewer.badge_local': 'Local · No upload',
	'ui.pdf.viewer.pages_word': 'pages',
	'ui.pdf.viewer.loading': 'Loading PDF…',
	'ui.pdf.viewer.thumbnails_aria': 'Page thumbnails',
	'ui.pdf.viewer.thumbnails_heading': 'Thumbnails',
	'ui.pdf.viewer.page_list_aria': 'Page list',
	'ui.pdf.viewer.page_n': 'Page {n}',
	'ui.pdf.viewer.loaded': 'PDF loaded',
	'ui.pdf.viewer.error': 'Failed to open PDF',
	'ui.pdf.viewer.render_error': 'Failed to render page',
	'ui.pdf.viewer.fit_width_error': 'Could not fit page to width',
	'ui.pdf.viewer.page': 'Page',
	'ui.pdf.viewer.fit_width': 'Fit width',
	'ui.pdf.viewer.reset_zoom': 'Reset zoom',
	'ui.pdf.viewer.empty': 'Upload a PDF to preview pages',
	'ui.pdf.viewer.go_page': 'Go to page',
	'ui.pdf.viewer.zoom_slider': 'Zoom',
	'ui.pdf.viewer.toolbar_pages': 'Page navigation',
	'ui.pdf.viewer.toolbar_zoom': 'Zoom controls',

	'ui.pdf.to_text.hero_title': 'PDF to text',
	'ui.pdf.to_text.hero_subtitle':
		'Extract raw text from each page. Files never leave your browser.',
	'ui.pdf.to_text.upload_title': 'Drop a PDF to extract text',
	'ui.pdf.to_text.upload_hint':
		'Page-by-page output you can copy or download. Large files may run in a Web Worker.',
	'ui.pdf.to_text.extract': 'Extract text',
	'ui.pdf.to_text.done': 'Text extracted',
	'ui.pdf.to_text.error': 'Failed to extract text',
	'ui.pdf.to_text.empty': 'No extracted text to download',
	'ui.pdf.to_text.empty_hint': 'Upload a PDF and extract page-by-page text',
	'ui.pdf.to_text.no_output': 'No extracted text yet',

	'ui.pdf.merge.hero_title': 'Merge PDFs',
	'ui.pdf.merge.hero_subtitle':
		'Combine files in order — drag rows to reorder, then merge and download in one click.',
	'ui.pdf.merge.select_files': 'Select PDF files',
	'ui.pdf.merge.select_more': 'Select at least two PDF files',
	'ui.pdf.merge.run': 'Merge',
	'ui.pdf.merge.done': 'PDF files merged',
	'ui.pdf.merge.error': 'Failed to merge PDFs',
	'ui.pdf.merge.no_output': 'No merged PDF to download',
	'ui.pdf.merge.files_selected': 'files selected',
	'ui.pdf.merge.empty': 'Add PDF files to merge',
	'ui.pdf.merge.drop_hint': 'Drop PDFs here to add — drag rows to reorder',
	'ui.pdf.merge.drop_more': 'Drop more PDFs here to append',
	'ui.pdf.merge.reorder_drag': 'Drag to reorder',
	'ui.pdf.merge.merge_hint':
		'1. Put files in order · 2. Tap Merge · 3. Download your merged PDF below.',
	'ui.pdf.merge.ready_title': 'Merged PDF is ready',
	'ui.pdf.merge.ready_subtitle': 'Output size {size}. Saves as merged.pdf.',
	'ui.pdf.merge.download_primary': 'Download merged PDF',
	'ui.pdf.merge.download_locked': 'Run Merge first — your download button will appear here.',

	'ui.pdf.split.hero_title': 'Split PDF',
	'ui.pdf.split.hero_subtitle': 'Split selected pages into separate PDF files — processed locally.',
	'ui.pdf.split.upload_title': 'Drop a PDF to split',
	'ui.pdf.split.upload_hint': 'Then enter page ranges like 1,3-5 below.',
	'ui.pdf.split.run': 'Split',
	'ui.pdf.split.done': 'PDF split complete',
	'ui.pdf.split.error': 'Failed to split PDF',
	'ui.pdf.split.empty_hint': 'Upload one PDF and provide page ranges',
	'ui.pdf.split.no_output': 'No split files generated',
	'ui.pdf.split.use_cases_title': 'Common use cases',
	'ui.pdf.split.use_case.0': 'Send only the pages clients need',
	'ui.pdf.split.use_case.1': 'Break long manuals into smaller parts',
	'ui.pdf.split.use_case.2': 'Archive specific sections independently',
	'ui.pdf.split.use_case.3': 'Prepare page-based review packages',

	'ui.pdf.extract.hero_title': 'Extract pages',
	'ui.pdf.extract.hero_subtitle': 'Build a new PDF from selected pages — nothing is uploaded.',
	'ui.pdf.extract.upload_title': 'Drop a PDF to extract pages',
	'ui.pdf.extract.upload_hint': 'Choose page ranges, then download a single new PDF.',
	'ui.pdf.extract.run': 'Extract pages',
	'ui.pdf.extract.done': 'Pages extracted',
	'ui.pdf.extract.error': 'Failed to extract pages',
	'ui.pdf.extract.no_output': 'No output PDF to download',
	'ui.pdf.extract.empty_hint': 'Upload one PDF and pick page ranges',
	'ui.pdf.extract.ready': 'Output PDF is ready to download',

	'ui.pdf.metadata.hero_title': 'PDF metadata',
	'ui.pdf.metadata.hero_subtitle':
		'Inspect document properties, dates, and page count — all parsed in your browser.',
	'ui.pdf.metadata.upload_title': 'Drop a PDF to read metadata',
	'ui.pdf.metadata.upload_hint': 'No editing — fast read-only inspection.',
	'ui.pdf.metadata.run': 'Read metadata',
	'ui.pdf.metadata.done': 'Metadata loaded',
	'ui.pdf.metadata.error': 'Failed to read metadata',
	'ui.pdf.metadata.empty_hint': 'Upload a PDF to inspect metadata',
	'ui.pdf.metadata.no_output': 'No metadata loaded',
	'ui.pdf.metadata.title': 'Title',
	'ui.pdf.metadata.author': 'Author',
	'ui.pdf.metadata.subject': 'Subject',
	'ui.pdf.metadata.keywords': 'Keywords',
	'ui.pdf.metadata.creator': 'Creator',
	'ui.pdf.metadata.producer': 'Producer',
	'ui.pdf.metadata.creation_date': 'Creation date',
	'ui.pdf.metadata.modification_date': 'Modification date',
	'ui.pdf.metadata.page_count': 'Page count',
	'ui.pdf.metadata.file_size': 'File size (bytes)',

	'tool.json-to-zod.display_name': 'JSON to Zod Schema',
	'tool.json-to-zod.tagline': 'Generate a Zod schema from a JSON sample',
	'tool.json-to-zod.description':
		'Infer a practical Zod validation schema from sample JSON data. Great for bootstrapping runtime validation and typed parsing.',
	'tool.json-to-zod.primary_keyword': 'json to zod',
	'tool.json-to-zod.meta_title': 'JSON to Zod Schema Generator — fmtly.dev',
	'tool.json-to-zod.meta_description':
		'Generate Zod schemas from JSON samples instantly in your browser. No uploads, no server, fast type-safe validation scaffolding.',
	'tool.json-to-zod.operation': 'Generate',
	'tool.json-to-zod.faq.0.question': 'How accurate is inferred schema output?',
	'tool.json-to-zod.faq.0.answer':
		'It reflects the shape of your sample input. Add more representative samples for better coverage.',
	'tool.json-to-zod.faq.1.question': 'Does it mark optional fields?',
	'tool.json-to-zod.faq.1.answer':
		'Fields that are absent in parts of the sample can be emitted as optional in the inferred schema.',
	'tool.json-to-zod.faq.2.question': 'Can I edit the generated schema?',
	'tool.json-to-zod.faq.2.answer':
		'Yes. The output is plain Zod code meant to be copied and customized in your project.',
	'tool.json-to-zod.use_case.0': 'Bootstrap API response validators quickly',
	'tool.json-to-zod.use_case.1': 'Create type-safe parsing boundaries',
	'tool.json-to-zod.use_case.2': 'Generate starter schemas for forms',
	'tool.json-to-zod.use_case.3': 'Speed up migration to runtime validation',

	'tool.json-ndjson.display_name': 'JSON Lines (NDJSON) Viewer',
	'tool.json-ndjson.tagline': 'Parse NDJSON and inspect each line with formatting',
	'tool.json-ndjson.description':
		'Parse newline-delimited JSON and render each record with line numbers. Quickly spot malformed rows while preserving valid entries.',
	'tool.json-ndjson.primary_keyword': 'ndjson viewer',
	'tool.json-ndjson.meta_title': 'NDJSON Viewer & Formatter — fmtly.dev',
	'tool.json-ndjson.meta_description':
		'Parse and format JSON Lines (NDJSON) in your browser. See per-line records, errors, and line numbers instantly.',
	'tool.json-ndjson.operation': 'Parse',
	'tool.json-ndjson.faq.0.question': 'What happens with invalid lines?',
	'tool.json-ndjson.faq.0.answer':
		'Invalid lines are reported with line numbers while valid lines are still parsed and displayed.',
	'tool.json-ndjson.faq.1.question': 'Can I export parsed output?',
	'tool.json-ndjson.faq.1.answer':
		'Yes. You can copy or download the generated structured report from the output panel.',
	'tool.json-ndjson.use_case.0': 'Inspect log pipelines using JSON Lines',
	'tool.json-ndjson.use_case.1': 'Debug broken rows in large NDJSON feeds',
	'tool.json-ndjson.use_case.2': 'Validate streaming JSON batch output',

	'tool.json-from-protobuf.display_name': 'Protocol Buffers to JSON',
	'tool.json-from-protobuf.tagline': 'Generate sample JSON from .proto definitions',
	'tool.json-from-protobuf.description':
		'Parse Protocol Buffers schemas and generate sample JSON payloads for selected message types.',
	'tool.json-from-protobuf.primary_keyword': 'protobuf to json',
	'tool.json-from-protobuf.meta_title': 'Protobuf to JSON Sample Generator — fmtly.dev',
	'tool.json-from-protobuf.meta_description':
		'Parse .proto files and generate JSON examples for message types in your browser. Fast, private, and developer-friendly.',
	'tool.json-from-protobuf.operation': 'Generate',
	'tool.json-from-protobuf.faq.0.question': 'Do you support nested messages?',
	'tool.json-from-protobuf.faq.0.answer':
		'Yes. Nested and referenced message types are resolved and included in generated examples.',
	'tool.json-from-protobuf.faq.1.question': 'Can I choose the root message?',
	'tool.json-from-protobuf.faq.1.answer':
		'Yes. Select any discovered message type from the dropdown and regenerate instantly.',
	'tool.json-from-protobuf.faq.2.question': 'Does this upload proto files?',
	'tool.json-from-protobuf.faq.2.answer':
		'No. Everything runs locally in your browser and your schema never leaves your device.',
	'tool.json-from-protobuf.use_case.0': 'Create API example payloads from proto contracts',
	'tool.json-from-protobuf.use_case.1': 'Test mock responses for gRPC gateways',
	'tool.json-from-protobuf.use_case.2': 'Understand unfamiliar protobuf models quickly',

	'tool.yaml-resolve-anchors.display_name': 'YAML Anchor Resolver',
	'tool.yaml-resolve-anchors.tagline': 'Expand YAML anchors and aliases to full values',
	'tool.yaml-resolve-anchors.description':
		'Resolve YAML anchors and aliases into explicit output so the final document has no references.',
	'tool.yaml-resolve-anchors.primary_keyword': 'yaml anchor resolver',
	'tool.yaml-resolve-anchors.meta_title': 'YAML Anchor Resolver — fmtly.dev',
	'tool.yaml-resolve-anchors.meta_description':
		'Expand YAML anchors and aliases instantly. Produce explicit YAML without merges or references directly in your browser.',
	'tool.yaml-resolve-anchors.operation': 'Resolve',
	'tool.yaml-resolve-anchors.faq.0.question': 'Will merge keys be expanded?',
	'tool.yaml-resolve-anchors.faq.0.answer':
		'Yes. Merged values are emitted directly in output for easier downstream processing.',
	'tool.yaml-resolve-anchors.faq.1.question': 'Does it keep document order?',
	'tool.yaml-resolve-anchors.faq.1.answer':
		'The output preserves logical structure while removing aliases and references.',
	'tool.yaml-resolve-anchors.use_case.0': 'Prepare config for systems that do not support anchors',
	'tool.yaml-resolve-anchors.use_case.1': 'Debug inherited values in complex YAML',
	'tool.yaml-resolve-anchors.use_case.2': 'Generate explicit deployment manifests',
	'tool.yaml-resolve-anchors.use_case.3': 'Normalize YAML before diffs and reviews',

	'tool.yaml-split.display_name': 'YAML Multi-Doc Splitter',
	'tool.yaml-split.tagline': 'Split multi-document YAML into separate documents',
	'tool.yaml-split.description':
		'Split YAML files containing multiple `---` documents and emit each document clearly and consistently.',
	'tool.yaml-split.primary_keyword': 'yaml split',
	'tool.yaml-split.meta_title': 'YAML Multi-Document Splitter — fmtly.dev',
	'tool.yaml-split.meta_description':
		'Split multi-doc YAML files into individual documents in your browser. Great for Kubernetes and CI config workflows.',
	'tool.yaml-split.operation': 'Split',
	'tool.yaml-split.faq.0.question': 'Do comments survive splitting?',
	'tool.yaml-split.faq.0.answer':
		'The tool focuses on structural correctness; formatting and comments may be normalized.',
	'tool.yaml-split.faq.1.question': 'Can it handle single-document YAML?',
	'tool.yaml-split.faq.1.answer':
		'Yes. Single documents are returned as-is with consistent formatting.',
	'tool.yaml-split.use_case.0': 'Extract Kubernetes resources into separate docs',
	'tool.yaml-split.use_case.1': 'Review long config bundles document by document',
	'tool.yaml-split.use_case.2': 'Prepare per-document processing in CI',

	'tool.xml-xsd-validate.display_name': 'XSD Validator',
	'tool.xml-xsd-validate.tagline': 'Validate XML against an XSD schema',
	'tool.xml-xsd-validate.description':
		'Validate XML instances with XSD and get structured validation results including line-aware issues when available.',
	'tool.xml-xsd-validate.primary_keyword': 'xml xsd validator',
	'tool.xml-xsd-validate.meta_title': 'XML XSD Validator — fmtly.dev',
	'tool.xml-xsd-validate.meta_description':
		'Validate XML against XSD in your browser with clear valid/invalid output and detailed error reporting.',
	'tool.xml-xsd-validate.operation': 'Validate',
	'tool.xml-xsd-validate.faq.0.question': 'Do I need both XML and XSD input?',
	'tool.xml-xsd-validate.faq.0.answer':
		'Yes. Paste the XML document and its XSD schema to run validation.',
	'tool.xml-xsd-validate.faq.1.question': 'Will I get line and column details?',
	'tool.xml-xsd-validate.faq.1.answer':
		'When provided by the validator, line and column data are shown in the results.',
	'tool.xml-xsd-validate.use_case.0': 'Verify XML payloads before integration tests',
	'tool.xml-xsd-validate.use_case.1': 'Catch schema violations in ETL pipelines',
	'tool.xml-xsd-validate.use_case.2': 'Validate vendor XML feeds quickly',

	'tool.csv-columns.display_name': 'CSV Column Reorder / Drop',
	'tool.csv-columns.tagline': 'Reorder, rename, and drop CSV columns',
	'tool.csv-columns.description':
		'Transform CSV column layout by selecting, reordering, and renaming fields for downstream systems.',
	'tool.csv-columns.primary_keyword': 'csv column reorder',
	'tool.csv-columns.meta_title': 'CSV Column Reorder & Drop — fmtly.dev',
	'tool.csv-columns.meta_description':
		'Reorder, rename, and remove CSV columns directly in your browser. Keep delimiter and quoting behavior under control.',
	'tool.csv-columns.operation': 'Transform',
	'tool.csv-columns.faq.0.question': 'Can I output only selected columns?',
	'tool.csv-columns.faq.0.answer':
		'Yes. Define the exact target column list to keep and drop everything else.',
	'tool.csv-columns.faq.1.question': 'Can I rename columns while reordering?',
	'tool.csv-columns.faq.1.answer':
		'Yes. Each selected source column can map to a new output header name.',
	'tool.csv-columns.use_case.0': 'Prepare CSV exports for third-party imports',
	'tool.csv-columns.use_case.1': 'Remove sensitive fields before sharing',
	'tool.csv-columns.use_case.2': 'Normalize inconsistent column order between systems',

	'tool.csv-deduplicate.display_name': 'CSV Deduplicator',
	'tool.csv-deduplicate.tagline': 'Remove duplicate CSV rows using key columns',
	'tool.csv-deduplicate.description':
		'Deduplicate CSV rows by one or more key columns while preserving stable first-seen row order.',
	'tool.csv-deduplicate.primary_keyword': 'csv deduplicate',
	'tool.csv-deduplicate.meta_title': 'CSV Deduplicator — fmtly.dev',
	'tool.csv-deduplicate.meta_description':
		'Remove duplicate CSV rows with configurable key columns. Keep the first occurrence and export clean output instantly.',
	'tool.csv-deduplicate.operation': 'Deduplicate',
	'tool.csv-deduplicate.faq.0.question': 'How are duplicates determined?',
	'tool.csv-deduplicate.faq.0.answer':
		'Rows are considered duplicates when selected key-column values match exactly.',
	'tool.csv-deduplicate.faq.1.question': 'Which row is kept?',
	'tool.csv-deduplicate.faq.1.answer':
		'The first row encountered for each unique key is kept, preserving input order.',
	'tool.csv-deduplicate.use_case.0': 'Clean customer exports before import',
	'tool.csv-deduplicate.use_case.1': 'Remove duplicate events in analytics CSVs',
	'tool.csv-deduplicate.use_case.2': 'Normalize joined data from multiple sources',

	'tool.ndjson.entries_title': 'NDJSON entries',
	'tool.json-from-protobuf.message_type': 'Message type',
	'tool.json-from-protobuf.select_message_type': 'Select a message type',
	'tool.xml-xsd-validate.xml_label': 'XML',
	'tool.xml-xsd-validate.xsd_label': 'XSD',
	'tool.xml-xsd-validate.result_title': 'Validation result',
	'tool.xml-xsd-validate.empty_hint': 'Paste both XML and XSD to validate.',
	'tool.xml-xsd-validate.xml_well_formed_error': 'XML is not well-formed',
	'tool.xml-xsd-validate.valid': 'XML matches the XSD',
	'tool.xml-xsd-validate.invalid': 'XML does not match the XSD',
	'tool.xml-xsd-validate.warnings': '{count} warning(s)',
	'tool.xml-xsd-validate.errors_title': 'Errors',
	'tool.xml-xsd-validate.warnings_title': 'Warnings',
	'tool.xml-xsd-validate.waiting_hint': 'Paste XSD schema to run validation.'
};

export default registryEn;
