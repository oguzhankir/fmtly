import type { ToolDefinition } from '../types.js';

export const escapeTools: ToolDefinition[] = [
	{
		id: 'escape-html',
		category: 'escape',
		slug: 'html',
		displayName: 'HTML Escape / Unescape',
		tagline: 'Escape and unescape HTML entities safely',
		description:
			'Convert special characters to HTML entities (&lt;, &gt;, &amp;, &quot;, &#39;) or reverse the process. Prevents XSS when embedding user content in HTML pages.',
		primaryKeyword: 'html escape unescape',
		metaTitle: 'HTML Escape / Unescape — fmtly.dev',
		metaDescription:
			'Escape and unescape HTML entities instantly in your browser. Converts special characters to safe HTML entities and back. No data leaves your device.',
		engine: 'escaper',
		operation: 'html',
		layoutVariant: 'split',
		inputLanguage: 'html',
		outputLanguage: 'html',
		hasTreeView: false,
		relatedTools: [
			{ category: 'escape', slug: 'javascript' },
			{ category: 'escape', slug: 'json' },
			{ category: 'encode', slug: 'url' }
		],
		faqs: [
			{
				question: 'What characters are escaped?',
				answer:
					'The five characters with special meaning in HTML are escaped: < becomes &lt;, > becomes &gt;, & becomes &amp;, " becomes &quot;, and \' becomes &#39;.'
			},
			{
				question: 'Why is HTML escaping important?',
				answer:
					'HTML escaping prevents Cross-Site Scripting (XSS) attacks by ensuring that user-provided content is displayed as text rather than interpreted as HTML or JavaScript code.'
			}
		],
		useCases: [
			'Sanitize user input before displaying in HTML pages',
			'Prepare code snippets for display in HTML documentation',
			'Escape HTML content for embedding in XML or RSS feeds',
			'Decode HTML entities in scraped web content',
			'Convert between HTML entity formats for templating engines'
		],
		sampleInput: '<script>alert("XSS")</script>\n<p class="note">Hello & welcome</p>'
	},
	{
		id: 'escape-javascript',
		category: 'escape',
		slug: 'javascript',
		displayName: 'JavaScript String Escape / Unescape',
		tagline: 'Escape and unescape JavaScript string literals',
		description:
			'Escape special characters for safe use inside JavaScript string literals, or unescape escaped strings back to their original form. Handles quotes, newlines, tabs, null bytes, and Unicode.',
		primaryKeyword: 'javascript string escape',
		metaTitle: 'JS String Escape / Unescape — fmtly.dev',
		metaDescription:
			'Escape and unescape JavaScript string literals instantly. Handles quotes, newlines, tabs, null bytes, and Unicode sequences. No data leaves your device.',
		engine: 'escaper',
		operation: 'javascript',
		layoutVariant: 'split',
		inputLanguage: 'javascript',
		outputLanguage: 'javascript',
		hasTreeView: false,
		relatedTools: [
			{ category: 'escape', slug: 'json' },
			{ category: 'escape', slug: 'html' },
			{ category: 'encode', slug: 'base64' }
		],
		faqs: [
			{
				question: 'What characters are escaped?',
				answer:
					'Backslashes, single quotes, double quotes, newlines (\\n), carriage returns (\\r), tabs (\\t), null bytes (\\0), and Unicode line/paragraph separators (U+2028, U+2029).'
			},
			{
				question: 'Is this different from JSON escaping?',
				answer:
					'Yes. JavaScript string escaping handles single quotes and additional escape sequences like \\0 and \\x hex escapes that are not part of the JSON specification.'
			}
		],
		useCases: [
			'Prepare strings for embedding in JavaScript source code',
			'Escape user input for safe use in dynamically generated scripts',
			'Debug escaped strings by converting them to readable text',
			'Convert multi-line text to a single-line JavaScript string',
			'Escape content for use in template literals or eval contexts'
		],
		sampleInput: 'He said "Hello"\nLine 2\tTabbed\nPath: C:\\Users\\test'
	},
	{
		id: 'escape-json',
		category: 'escape',
		slug: 'json',
		displayName: 'JSON String Escape / Unescape',
		tagline: 'Escape and unescape strings for JSON embedding',
		description:
			'Escape a string for safe embedding inside a JSON string value, or unescape a JSON-escaped string. Uses the JSON specification rules for control characters, quotes, and backslashes.',
		primaryKeyword: 'json string escape',
		metaTitle: 'JSON String Escape / Unescape — fmtly.dev',
		metaDescription:
			'Escape and unescape strings for JSON embedding instantly. Follows the JSON specification for control characters, quotes, and backslashes. No data uploaded.',
		engine: 'escaper',
		operation: 'json',
		layoutVariant: 'split',
		inputLanguage: 'json',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			{ category: 'escape', slug: 'javascript' },
			{ category: 'escape', slug: 'html' },
			{ category: 'json', slug: 'formatter' }
		],
		faqs: [
			{
				question: 'What characters are escaped in JSON?',
				answer:
					'JSON requires escaping of backslashes (\\\\), double quotes (\\"), and control characters like newline (\\n), tab (\\t), carriage return (\\r), form feed (\\f), and backspace (\\b).'
			},
			{
				question: 'When would I need to escape a string for JSON?',
				answer:
					'When building JSON manually, embedding strings in JSON templates, or debugging JSON parsing errors caused by unescaped special characters in string values.'
			}
		],
		useCases: [
			'Prepare strings for manual JSON construction in code',
			'Escape multi-line text for embedding in JSON API payloads',
			'Debug JSON parsing errors caused by unescaped characters',
			'Convert readable text to JSON-safe string values',
			'Unescape JSON strings for human-readable inspection'
		],
		sampleInput: 'Line 1\nLine 2\n"Quoted text"\nPath: C:\\Users\\test'
	},
	{
		id: 'escape-xml',
		category: 'escape',
		slug: 'xml',
		displayName: 'XML Escape / Unescape',
		tagline: 'Safely escape characters for XML structures.',
		description:
			'Converts reserved characters to XML entities and unescapes valid XML text back to plain text. Helps maintain valid document structures.',
		primaryKeyword: 'xml escape',
		metaTitle: 'XML Scrubber | Escape, Unescape characters | fmtly',
		metaDescription:
			'Escape reserved characters & < > " \' into raw XML-friendly equivalents directly in the browser.',
		engine: 'escaper',
		operation: 'xml',
		layoutVariant: 'bidirectional',
		inputLanguage: 'xml',
		outputLanguage: 'xml',
		hasTreeView: false,
		relatedTools: [
			{ category: 'escape', slug: 'html' },
			{ category: 'escape', slug: 'json' }
		],
		faqs: [
			{
				question: 'How is XML escaping different from HTML?',
				answer:
					'XML has a stricter set of default entities (only 5 built-in: lt, gt, amp, apos, quot). It avoids named entities common in standard HTML forms.'
			}
		],
		useCases: [
			'Preparing unsanitized user inputs to store verbatim in RSS feeds',
			'Escaping dynamic values pushed into API SOAP requests'
		],
		sampleInput: '<item name="Quote: \'Test\'">Value & Context</item>'
	},
	{
		id: 'escape-sql',
		category: 'escape',
		slug: 'sql',
		displayName: 'SQL String Escape',
		tagline: 'Prevent SQL injection via literal escaping.',
		description:
			'Select your database dialect (MySQL, Postgres, SQLite) to escape single quotes, backslashes, and more. A context-dependent tool outputting safe database strings.',
		primaryKeyword: 'sql escape',
		metaTitle: 'SQL Injection Preventer | MySQL, Postgres | fmtly',
		metaDescription:
			'Secure your literal string interpolations via specific MySQL, standard PostgreSQL, or SQLite trailing escapes mitigating manual query building risks.',
		engine: 'escaper',
		operation: 'sql',
		layoutVariant: 'bidirectional', // using bidirectional mainly just to keep left-to-right flow though only 'encode' direction is really used.
		inputLanguage: 'sql',
		outputLanguage: 'sql',
		hasTreeView: false,
		relatedTools: [
			{ category: 'escape', slug: 'csv' },
			{ category: 'escape', slug: 'shell' }
		],
		faqs: [
			{
				question: 'Can this unescape my database dumps?',
				answer:
					'SQL unescaping is highly context-dependent on how the original driver serialized it. We only support one-way escaping generation to secure raw strings.'
			}
		],
		useCases: [
			'Generating safe literals to copy/paste into manual repair scripts',
			"Testing the correct representation of names like O'Brian inserted natively"
		],
		sampleInput: "SELECT * FROM users WHERE name = 'O'Connor'"
	},
	{
		id: 'escape-csv',
		category: 'escape',
		slug: 'csv',
		displayName: 'CSV Escape / Unescape',
		tagline: 'Format strings strictly for comma-separated sheets.',
		description:
			'Double inline quotes and correctly wrap commas or trailing line breaks so tabular output behaves as a single distinct row column uniformly.',
		primaryKeyword: 'csv string escaper',
		metaTitle: 'CSV String Wrapping | Escape Quotes | fmtly',
		metaDescription:
			'Safeguard your dataset exports properly escaping inline commas, double quotes, and line terminators into universal CSV compatibility format.',
		engine: 'escaper',
		operation: 'csv',
		layoutVariant: 'bidirectional',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'csv', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'What triggers a CSV wrap?',
				answer:
					'Any string containing a comma, a newline character, or a double quote defaults to triggering full wrapper quotes per standard CSV spec RFC 4180.'
			}
		],
		useCases: [
			'Escaping markdown snippets into single CSV column logs',
			'Extracting actual text blocks parsed confusingly by broken CSV viewers'
		],
		sampleInput: 'She said, "This features a comma and a\nnewline directly inside."'
	},
	{
		id: 'escape-shell',
		category: 'escape',
		slug: 'shell',
		displayName: 'Shell Escape / Unescape',
		tagline: 'Safely map variables for bash command execution.',
		description:
			'Ensure CLI injections remain as distinct static arguments. Follows simple bash quoting rules securing scripts and remote execution flags securely.',
		primaryKeyword: 'bash shell escape',
		metaTitle: 'Bash & Shell Escaper | Secure CLI Args | fmtly',
		metaDescription:
			'Quote your shell parameters to stop accidental bash evaluation, injection vulnerabilities, and trailing pipe executions immediately.',
		engine: 'escaper',
		operation: 'shell',
		layoutVariant: 'bidirectional',
		inputLanguage: 'bash',
		outputLanguage: 'bash',
		hasTreeView: false,
		relatedTools: [
			{ category: 'escape', slug: 'javascript' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'How do you secure it?',
				answer:
					'Following the most portable POSIX standard, the tool wraps the string natively in single quotes and safely resolves internal conflict singles.'
			}
		],
		useCases: [
			'Drafting custom curl arguments packing raw JSON bodies',
			'Piping complex nested string tokens securely into docker run commands'
		],
		sampleInput: 'curl -d \'{"flag": true}\' http://example.com/api?a=1&b=2'
	}
];
