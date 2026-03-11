import type { ToolDefinition } from '../types.js';

export const fileTools: ToolDefinition[] = [
	{
		id: 'file-zip',
		category: 'file',
		slug: 'zip',
		displayName: 'ZIP Creator',
		tagline: 'Create ZIP archives from multiple files.',
		description:
			'Select multiple files, then create and download a ZIP archive — entirely in your browser using JSZip.',
		primaryKeyword: 'create zip online',
		metaTitle: 'ZIP Creator | No Upload | fmtly',
		metaDescription:
			'Create ZIP archives locally in your browser. Select files, download ZIP — no server.',
		engine: 'file',
		operation: 'zip',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: ['{ category: file', 'slug: unzip }', 'json/formatter', 'text/word-counter'],
		faqs: [
			{
				question: 'Is there a file size limit?',
				answer: 'No hard limit, but very large files may be slow due to browser memory.'
			}
		],
		useCases: [
			'Bundling files for email or sharing',
			'Creating ZIP archives without installing software'
		],
		sampleInput: ''
	},
	{
		id: 'file-unzip',
		category: 'file',
		slug: 'unzip',
		displayName: 'ZIP Extractor',
		tagline: 'Extract and browse ZIP file contents.',
		description:
			'Open a ZIP archive, browse files, preview text content, and extract individual or all files — locally via JSZip.',
		primaryKeyword: 'unzip online',
		metaTitle: 'ZIP Extractor | Browse & Extract | fmtly',
		metaDescription:
			'Extract ZIP files in your browser. Browse contents, preview text files, download — no upload.',
		engine: 'file',
		operation: 'unzip',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: ['{ category: file', 'slug: zip }', 'json/formatter', 'text/word-counter'],
		faqs: [
			{
				question: 'Can I preview files inside the ZIP?',
				answer: 'Yes — text, JSON, CSV, and Markdown files can be previewed directly.'
			}
		],
		useCases: [
			'Inspecting ZIP contents without extracting',
			'Extracting specific files from an archive'
		],
		sampleInput: ''
	},
	{
		id: 'file-hash',
		category: 'file',
		slug: 'hash',
		displayName: 'File Hash Calculator',
		tagline: 'Calculate SHA-256, SHA-512, and MD5 hashes of any file.',
		description:
			'Drop any file to calculate its cryptographic hash. Supports SHA-256, SHA-512 (Web Crypto API) and MD5 (pure JS). Results are hex strings.',
		primaryKeyword: 'file hash calculator',
		metaTitle: 'File Hash Calculator | SHA-256 SHA-512 MD5 | fmtly',
		metaDescription:
			'Calculate SHA-256, SHA-512, MD5 file hashes locally. No upload — fully private.',
		engine: 'file',
		operation: 'hash',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: ['{ category: crypto', 'slug: hash }', 'json/formatter', 'text/word-counter'],
		faqs: [
			{
				question: 'Is MD5 secure?',
				answer:
					'MD5 is not cryptographically secure for signatures, but useful for checksum verification.'
			}
		],
		useCases: ['Verifying file integrity after download', 'Comparing files by hash'],
		sampleInput: ''
	},
	{
		id: 'file-excel-to-json',
		category: 'file',
		slug: 'excel-to-json',
		displayName: 'Excel to JSON',
		tagline: 'Convert Excel spreadsheets to JSON.',
		description:
			'Upload XLSX or XLS files and convert to JSON arrays. Supports multiple sheets — select which sheet to export. Uses SheetJS locally.',
		primaryKeyword: 'excel to json',
		metaTitle: 'Excel to JSON Converter | fmtly',
		metaDescription:
			'Convert Excel files to JSON locally. Multiple sheet support, instant conversion — no upload.',
		engine: 'file',
		operation: 'excel-to-json',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'json',
		hasTreeView: false,
		relatedTools: [
			'{ category: file',
			'slug: json-to-excel }',
			'{ category: csv',
			'slug: to-json }'
		],
		faqs: [
			{
				question: 'What formats are supported?',
				answer: 'XLSX, XLS, CSV, and ODS files are supported via SheetJS.'
			}
		],
		useCases: ['Converting spreadsheet data for APIs', 'Extracting data from Excel for processing'],
		sampleInput: ''
	},
	{
		id: 'file-json-to-excel',
		category: 'file',
		slug: 'json-to-excel',
		displayName: 'JSON to Excel',
		tagline: 'Convert JSON arrays to downloadable XLSX files.',
		description:
			'Paste a JSON array of objects and download it as an Excel (XLSX) file. Preview the first 20 rows as a table. Uses SheetJS locally.',
		primaryKeyword: 'json to excel',
		metaTitle: 'JSON to Excel Converter | fmtly',
		metaDescription:
			'Convert JSON arrays to Excel (XLSX) files. Preview table, download — no upload.',
		engine: 'file',
		operation: 'json-to-excel',
		layoutVariant: 'single-panel',
		inputLanguage: 'json',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			'{ category: file',
			'slug: excel-to-json }',
			'{ category: json',
			'slug: to-csv }'
		],
		faqs: [
			{
				question: 'What JSON structure is expected?',
				answer: 'An array of objects, e.g. [{"name":"Alice","age":30},{"name":"Bob","age":25}].'
			}
		],
		useCases: [
			'Creating spreadsheets from API data',
			'Exporting JSON data for non-technical users'
		],
		sampleInput:
			'[{"name":"Alice","email":"alice@example.com","age":30},{"name":"Bob","email":"bob@example.com","age":25},{"name":"Charlie","email":"charlie@example.com","age":35}]'
	}
];
