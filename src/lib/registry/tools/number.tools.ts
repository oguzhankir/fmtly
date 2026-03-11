import type { ToolDefinition } from '../types.js';

export const numberTools: ToolDefinition[] = [
	{
		id: 'number-formatter',
		category: 'number',
		slug: 'formatter',
		displayName: 'Number Formatter',
		tagline: 'Format numbers with locales, currency, and custom decimal places.',
		description:
			'A dedicated tool to format numerical data according to international locale standards. Custom group separators, varying decimal limits, and explicit precision.',
		primaryKeyword: 'number formatter',
		metaTitle: 'Number Formatter | Locale, Decimals, Groups | fmtly',
		metaDescription:
			'Format raw numbers safely into human readable values based on any locale with precision controls and grouping.',
		engine: 'number',
		operation: 'formatNumber',
		layoutVariant: 'split',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'percentage' },
			{ category: 'number', slug: 'scientific' },
			{ category: 'number', slug: 'roman' }
		],
		faqs: [
			{
				question: 'What is localization formatting?',
				answer:
					'It converts a raw value like "1234.5" into "1,234.50" (US) or "1.234,50" (DE) based on regional conventions.'
			}
		],
		useCases: [
			'Preparing values for financial reports',
			'Internationalizing a user interface with dynamic digits',
			'Rounding decimals efficiently'
		],
		sampleInput: '1234567.89'
	},
	{
		id: 'number-roman',
		category: 'number',
		slug: 'roman',
		displayName: 'Roman Numerals',
		tagline: 'Convert standard integers to Roman numerals and vice versa.',
		description:
			'A bidirectional tool converting Arabic numerals (like 1, 4, 1994) to Roman (I, IV, MCMXCIV) up to 3999 securely with strict validation checks.',
		primaryKeyword: 'roman numerals',
		metaTitle: 'Roman Numeral Converter | 1 to 3999 | fmtly',
		metaDescription:
			'Strictly validate and convert Roman numerals to integers or integers back to Roman representations.',
		engine: 'number',
		operation: 'roman',
		layoutVariant: 'bidirectional',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'What is the highest Roman numeral?',
				answer: 'Standard Roman numeral notation maxes out at 3,999 (MMMCMXCIX).'
			}
		],
		useCases: [
			'Translating ancient manuscript numbering',
			'Generating stylized copyright dates (e.g. MMXXI)',
			'Parsing user-entry from decorative web formats'
		],
		sampleInput: '1994'
	},
	{
		id: 'number-percentage',
		category: 'number',
		slug: 'percentage',
		displayName: 'Percentage Calculator',
		tagline: 'Calculate percentages, differences, and changes between numbers.',
		description:
			'A comprehensive visual tool for percentage extraction (X% of Y), percentage changes (difference mapping with directions), and percentage divergence between two numbers.',
		primaryKeyword: 'percentage calculator',
		metaTitle: 'Percentage Tool | Diff, Change, Margin Calc | fmtly',
		metaDescription:
			'Effortlessly calculate percent change, percent diffs, and relative shares quickly within a visual interface.',
		engine: 'number',
		operation: 'percentage',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'What is the difference between Percent Change vs Percent Diff?',
				answer:
					'Percent Change is relative to the original value (e.g., from 50 to 100 is +100%). Percent Diff compares the gap to their average (the difference between 50 and 100 relative to 75 is ~66.6%).'
			}
		],
		useCases: [
			'Calculating margin variations between two price points',
			'Finding precise discount cuts mathematically',
			'Drafting statistical discrepancy reports'
		],
		sampleInput: '100'
	},
	{
		id: 'number-scientific',
		category: 'number',
		slug: 'scientific',
		displayName: 'Scientific Notation',
		tagline: 'Convert large/small numbers to clear scientific expressions.',
		description:
			'Switch freely between decimal/raw number formatting and proper scientific exponential notations with correct superscript handling (e.g., 1.2 × 10⁴).',
		primaryKeyword: 'scientific notation',
		metaTitle: 'Scientific Notation Converter | e values | fmtly',
		metaDescription:
			'Turn big decimal values into tiny e-notation expressions and vice versa seamlessly.',
		engine: 'number',
		operation: 'scientific',
		layoutVariant: 'bidirectional',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'What notation does it output?',
				answer:
					'It renders standard strings using real unicode superscripts (e.g. 5 × 10³) making it easy to copy-paste into articles vs "5e3".'
			}
		],
		useCases: [
			'Formatting astronomical values for academic papers',
			'Standardizing floating point data for readability'
		],
		sampleInput: '12340'
	},
	{
		id: 'number-statistics',
		category: 'number',
		slug: 'statistics',
		displayName: 'Statistics Calculator',
		tagline: 'Calculate mean, median, mode, standard deviation, and more.',
		description:
			'Enter numbers (one per line or comma-separated) and get a full statistical summary: mean, median, mode, variance, standard deviation, percentiles, and IQR. Uses mathjs locally.',
		primaryKeyword: 'statistics calculator',
		metaTitle: 'Statistics Calculator | Mean Median StdDev | fmtly',
		metaDescription:
			'Calculate mean, median, mode, variance, standard deviation, percentiles. No upload — fully local.',
		engine: 'number',
		operation: 'statistics',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{ question: 'How are values entered?', answer: 'One number per line, or comma-separated.' }
		],
		useCases: [
			'Calculating statistics for homework or reports',
			'Quick data analysis without a spreadsheet'
		],
		sampleInput: ''
	},
	{
		id: 'number-matrix',
		category: 'number',
		slug: 'matrix',
		displayName: 'Matrix Calculator',
		tagline: 'Add, subtract, multiply, transpose, and invert matrices.',
		description:
			'Perform matrix operations: addition, subtraction, multiplication, determinant, transpose, and inverse. Supports 2x2 to 5x5 matrices. Uses mathjs locally.',
		primaryKeyword: 'matrix calculator',
		metaTitle: 'Matrix Calculator | Add Multiply Inverse | fmtly',
		metaDescription:
			'Matrix math: add, subtract, multiply, determinant, transpose, inverse. Local — no upload.',
		engine: 'number',
		operation: 'matrix',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'statistics' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'What matrix sizes are supported?',
				answer: '2x2 up to 5x5 — adjust with the size selector.'
			}
		],
		useCases: ['Matrix math for linear algebra homework', 'Quick matrix operations without MATLAB'],
		sampleInput: ''
	},
	{
		id: 'number-unit-converter',
		category: 'number',
		slug: 'unit-converter',
		displayName: 'Unit Converter',
		tagline:
			'Convert between length, weight, temperature, area, volume, speed, and pressure units.',
		description:
			'Enter a value and see all conversions in the selected category simultaneously. Supports 7 categories: length, weight, temperature, area, volume, speed, pressure. Pure JS — no library needed.',
		primaryKeyword: 'unit converter',
		metaTitle: 'Unit Converter | 7 Categories | fmtly',
		metaDescription:
			'Convert units: length, weight, temperature, area, volume, speed, pressure — instant, local.',
		engine: 'number',
		operation: 'unit-converter',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'number', slug: 'formatter' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'How accurate are the conversions?',
				answer: 'Conversions use standard SI factors and are accurate to floating-point precision.'
			}
		],
		useCases: ['Quick unit conversions without searching', 'Converting recipe measurements'],
		sampleInput: ''
	}
];
