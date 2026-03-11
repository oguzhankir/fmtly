export type CategoryMeta = {
	slug: string;
	displayName: string;
	description: string;
	primaryKeyword: string;
};

const categoryMetaList: CategoryMeta[] = [
	{
		slug: 'json',
		displayName: 'JSON',
		description:
			'Format, validate, minify, compare, and convert JSON data. Every tool runs in your browser with real-time error detection and tree visualization.',
		primaryKeyword: 'json tools'
	},
	{
		slug: 'xml',
		displayName: 'XML',
		description:
			'Format, validate, and convert XML documents. Supports pretty-printing with configurable indentation and conversion to JSON or CSV.',
		primaryKeyword: 'xml tools'
	},
	{
		slug: 'yaml',
		displayName: 'YAML',
		description:
			'Format, validate, and convert YAML files. Bidirectional conversion with JSON and syntax validation with precise error locations.',
		primaryKeyword: 'yaml tools'
	},
	{
		slug: 'csv',
		displayName: 'CSV',
		description:
			'Parse, format, and convert CSV data. Convert between CSV, JSON, and other tabular formats with custom delimiter support.',
		primaryKeyword: 'csv tools'
	},
	{
		slug: 'css',
		displayName: 'CSS',
		description:
			'Format, minify, and optimize CSS stylesheets. Beautify compressed CSS or minify formatted CSS with full property sorting options.',
		primaryKeyword: 'css tools'
	},
	{
		slug: 'html',
		displayName: 'HTML',
		description:
			'Format, minify, and validate HTML markup. Pretty-print compressed HTML or strip whitespace for production-ready output.',
		primaryKeyword: 'html tools'
	},
	{
		slug: 'js',
		displayName: 'JavaScript',
		description:
			'Format and minify JavaScript code. Beautify compressed scripts or produce minified output for faster page loads.',
		primaryKeyword: 'javascript tools'
	},
	{
		slug: 'encode',
		displayName: 'Encoders & Decoders',
		description:
			'Encode and decode Base64, URL, HTML entities, and more. All conversions happen instantly in your browser with no server round-trips.',
		primaryKeyword: 'encoder decoder tools'
	},
	{
		slug: 'escape',
		displayName: 'Escapers & Unescapers',
		description:
			'Escape and unescape strings for JSON, HTML, XML, URLs, and regular expressions. Handle special characters safely across formats.',
		primaryKeyword: 'string escape tools'
	},
	{
		slug: 'diff',
		displayName: 'Diff & Compare',
		description:
			'Compare two files or data structures side by side. Supports JSON, text, and structured diff with highlighted additions and removals.',
		primaryKeyword: 'diff compare tools'
	},
	{
		slug: 'generate',
		displayName: 'Generators',
		description:
			'Generate UUIDs, Lorem Ipsum, mock data, hash values, and other developer utilities. Configurable output with instant copy-to-clipboard.',
		primaryKeyword: 'generator tools'
	},
	{
		slug: 'text',
		displayName: 'Text & Strings',
		description:
			'Format, manipulate, reverse, sort, and analyze text and strings. Includes word counters, readable scores, and markdown conversions.',
		primaryKeyword: 'text tools'
	},
	{
		slug: 'toml',
		displayName: 'TOML',
		description: 'Format, validate, and convert TOML files. Convert TOML to JSON and YAML safely.',
		primaryKeyword: 'toml tools'
	},
	{
		slug: 'number',
		displayName: 'Numbers & Math',
		description:
			'Format numbers, calculate percentages, use scientific notation, or execute base conversions across different units and numeral systems instantly.',
		primaryKeyword: 'number tools'
	},
	{
		slug: 'color',
		displayName: 'Color Tools',
		description:
			'Check contrast ratios, generate color palettes, build CSS gradients, and simulate color blindness. All pure math, no server calls.',
		primaryKeyword: 'color tools'
	},
	{
		slug: 'crypto',
		displayName: 'Crypto & Security',
		description:
			'Generate HMAC signatures, analyze password strength, generate secure random strings, and create ULIDs — all 100% client-side using the Web Crypto API.',
		primaryKeyword: 'crypto security tools'
	},
	{
		slug: 'web',
		displayName: 'Web & Network',
		description:
			'Parse URLs, decode User-Agent strings, explain CORS headers, look up MIME types, geolocate IP addresses, and query DNS records — all in one place.',
		primaryKeyword: 'web tools online'
	},
	{
		slug: 'code',
		displayName: 'Code Formatters',
		description:
			'Format and minify CSS, SCSS, LESS, HTML, JavaScript, TypeScript, GraphQL, and Markdown with Prettier WASM — entirely local, no uploads. Convert cURL to fetch() or Axios.',
		primaryKeyword: 'code formatter online'
	},
	{
		slug: 'pdf',
		displayName: 'PDF Tools',
		description:
			'View, extract text, merge, split, and extract pages from PDF files — all locally in your browser using PDF.js and pdf-lib. No upload, no server.',
		primaryKeyword: 'pdf tools online'
	},
	{
		slug: 'image',
		displayName: 'Image Tools',
		description:
			'Resize, convert, compress, and encode images — all locally in your browser. SVG optimizer with SVGO. No upload, no server.',
		primaryKeyword: 'image tools online'
	},
	{
		slug: 'file',
		displayName: 'File Tools',
		description:
			'Create and extract ZIP archives, calculate file hashes, and convert between Excel and JSON formats — all locally in your browser.',
		primaryKeyword: 'file tools online'
	},
	{
		slug: 'qr',
		displayName: 'QR & Barcode',
		description:
			'Generate customizable QR codes for text, URLs, contacts, WiFi, and email. Decode QR codes from images — all locally.',
		primaryKeyword: 'qr code generator'
	},
	{
		slug: 'generate',
		displayName: 'Generators',
		description:
			'Generate type definitions (TypeScript, Python, Go, Rust, Java, C#, Zod), JSON Schema, Markdown tables, and fake test data — all locally.',
		primaryKeyword: 'code generators'
	}
];

const categoryMetaMap = new Map<string, CategoryMeta>(categoryMetaList.map((c) => [c.slug, c]));

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
	return categoryMetaMap.get(slug);
}

export function getAllCategoryMeta(): CategoryMeta[] {
	return categoryMetaList;
}
