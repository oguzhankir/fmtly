import type { ToolDefinition } from '../types.js';

export const pdfTools: ToolDefinition[] = [
	{
		id: 'pdf-viewer',
		category: 'pdf',
		slug: 'viewer',
		displayName: 'PDF Viewer',
		tagline: 'View any PDF with page navigation and zoom — no upload.',
		description:
			'Open and view PDF files entirely in your browser using PDF.js. Navigate pages, zoom in/out, and browse documents privately without uploading anything.',
		primaryKeyword: 'pdf viewer online',
		metaTitle: 'PDF Viewer | No Upload | fmtly',
		metaDescription:
			'View PDF files directly in your browser. Page navigation, zoom controls, keyboard shortcuts — no upload, fully private.',
		engine: 'pdf',
		operation: 'viewer',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: ['{ category: pdf', 'slug: to-text }', '{ category: pdf', 'slug: merge }'],
		faqs: [
			{
				question: 'Is my PDF uploaded to a server?',
				answer: 'No. PDF.js runs entirely in your browser. Your file never leaves your device.'
			},
			{
				question: 'Can I view password-protected PDFs?',
				answer:
					'Currently, password-protected PDFs are not supported. You will see an error message.'
			}
		],
		useCases: [
			'Quickly previewing a PDF without installing a reader',
			'Viewing PDFs on devices without a native reader'
		],
		sampleInput: ''
	},
	{
		id: 'pdf-to-text',
		category: 'pdf',
		slug: 'to-text',
		displayName: 'PDF to Text',
		tagline: 'Extract plain text from any PDF file.',
		description:
			'Extract all text content from a PDF document. Shows page count and word count. The extracted text can be copied or downloaded — all locally via PDF.js.',
		primaryKeyword: 'pdf to text',
		metaTitle: 'PDF to Text Extractor | fmtly',
		metaDescription:
			'Extract plain text from PDF files locally. Shows page count and word count — no upload, no server.',
		engine: 'pdf',
		operation: 'to-text',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: ['{ category: pdf', 'slug: viewer }', '{ category: pdf', 'slug: merge }'],
		faqs: [
			{
				question: 'Why is the extracted text garbled?',
				answer:
					'Some PDFs use scanned images instead of embedded text. PDF.js can only extract embedded text, not OCR from images.'
			}
		],
		useCases: [
			'Extracting text from PDFs for further processing',
			'Copying content from read-only PDF documents'
		],
		sampleInput: ''
	},
	{
		id: 'pdf-merge',
		category: 'pdf',
		slug: 'merge',
		displayName: 'PDF Merge',
		tagline: 'Combine multiple PDFs into a single document.',
		description:
			'Upload multiple PDF files, reorder them by dragging, and merge them into a single PDF. Uses pdf-lib — entirely client-side, no upload.',
		primaryKeyword: 'merge pdf online',
		metaTitle: 'Merge PDF Files Online | No Upload | fmtly',
		metaDescription:
			'Merge multiple PDF files into one document locally. Drag to reorder, then download — no server, fully private.',
		engine: 'pdf',
		operation: 'merge',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: ['{ category: pdf', 'slug: split }', '{ category: pdf', 'slug: extract-pages }'],
		faqs: [
			{
				question: 'Is there a file size limit?',
				answer:
					'There is no hard limit, but very large PDFs (100MB+) may be slow due to browser memory constraints.'
			}
		],
		useCases: [
			'Combining scanned documents into one file',
			'Merging report sections into a final document'
		],
		sampleInput: ''
	},
	{
		id: 'pdf-split',
		category: 'pdf',
		slug: 'split',
		displayName: 'PDF Split',
		tagline: 'Split a PDF into multiple files by page ranges.',
		description:
			'Split a PDF by page range or into individual pages. Choose "Each page" to split into single-page PDFs, or specify custom ranges like "1-3, 4-7, 8". Downloads a ZIP of the resulting files.',
		primaryKeyword: 'split pdf online',
		metaTitle: 'Split PDF by Pages | No Upload | fmtly',
		metaDescription:
			'Split PDF files by page range or into individual pages. Download as ZIP — fully local, no server.',
		engine: 'pdf',
		operation: 'split',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: ['{ category: pdf', 'slug: merge }', '{ category: pdf', 'slug: extract-pages }'],
		faqs: [
			{
				question: 'How do I specify page ranges?',
				answer:
					'Use comma-separated ranges like "1-3, 4-7, 8-10". Each range becomes a separate PDF file.'
			}
		],
		useCases: [
			'Separating chapters from a large document',
			'Extracting a specific section to share'
		],
		sampleInput: ''
	},
	{
		id: 'pdf-extract-pages',
		category: 'pdf',
		slug: 'extract-pages',
		displayName: 'PDF Page Extractor',
		tagline: 'Select specific pages from a PDF and download them.',
		description:
			'Upload a PDF, view page thumbnails, select the pages you want, and extract them into a new PDF. Uses pdf-lib — entirely local, nothing uploaded.',
		primaryKeyword: 'extract pdf pages',
		metaTitle: 'Extract Pages from PDF | fmtly',
		metaDescription:
			'Select and extract specific pages from a PDF file. Preview thumbnails, check pages, download — no upload required.',
		engine: 'pdf',
		operation: 'extract-pages',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: ['{ category: pdf', 'slug: split }', '{ category: pdf', 'slug: merge }'],
		faqs: [
			{
				question: 'Can I rearrange the extracted pages?',
				answer:
					'The pages are extracted in the order you select them. Select them in the desired order.'
			}
		],
		useCases: [
			'Extracting specific pages from a long report',
			'Creating a subset document from a larger PDF'
		],
		sampleInput: ''
	}
];
