import type { ToolDefinition } from '../types.js';

export const accessibilityTools: ToolDefinition[] = [
	{
		id: 'accessibility-contrast',
		category: 'accessibility',
		slug: 'contrast',
		displayName: 'Contrast Checker',
		tagline: 'Check WCAG contrast ratios for text and background colors.',
		description:
			'Enter foreground and background colors to calculate contrast ratio. See WCAG AA/AAA compliance for normal text, large text, and UI elements. Live preview included.',
		primaryKeyword: 'wcag contrast checker',
		metaTitle: 'WCAG Contrast Checker | AA & AAA | fmtly',
		metaDescription:
			'Check WCAG color contrast ratios. Live preview, AA/AAA compliance — no upload, fully local.',
		engine: 'accessibility',
		operation: 'contrast',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'accessibility', slug: 'color-blindness' },
			{ category: 'accessibility', slug: 'font-size' }
		],
		faqs: [
			{
				question: 'What contrast ratio is required?',
				answer:
					'WCAG AA requires 4.5:1 for normal text and 3:1 for large text. AAA requires 7:1 and 4.5:1 respectively.'
			}
		],
		useCases: ['Verifying accessibility of website text', 'Choosing accessible color combinations'],
		sampleInput: ''
	},
	{
		id: 'accessibility-color-blindness',
		category: 'accessibility',
		slug: 'color-blindness',
		displayName: 'Color Blindness Simulator',
		tagline: 'Simulate how colors appear to people with color vision deficiencies.',
		description:
			'Enter a color or upload an image to see how it appears to people with protanopia, deuteranopia, tritanopia, and achromatopsia. Uses color transformation matrices.',
		primaryKeyword: 'color blindness simulator',
		metaTitle: 'Color Blindness Simulator | fmtly',
		metaDescription:
			'Simulate protanopia, deuteranopia, tritanopia vision. Test colors and images — fully local.',
		engine: 'accessibility',
		operation: 'color-blindness',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'accessibility', slug: 'contrast' },
			{ category: 'color', slug: 'picker' }
		],
		faqs: [
			{
				question: 'What types of color blindness are simulated?',
				answer:
					'Protanopia (no red), deuteranopia (no green), tritanopia (no blue), and achromatopsia (no color).'
			}
		],
		useCases: [
			'Testing UI designs for color blindness accessibility',
			'Checking color palette inclusivity'
		],
		sampleInput: ''
	},
	{
		id: 'accessibility-font-size',
		category: 'accessibility',
		slug: 'font-size',
		displayName: 'Font Size Checker',
		tagline: 'Check if text meets WCAG size and contrast requirements.',
		description:
			'Enter font size, weight, and colors to get a combined WCAG report. See if text qualifies as "large text" and what contrast ratio is required.',
		primaryKeyword: 'wcag font size checker',
		metaTitle: 'WCAG Font Size Checker | fmtly',
		metaDescription:
			'Check WCAG font size requirements. Large text classification, contrast requirement — fully local.',
		engine: 'accessibility',
		operation: 'font-size',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: [
			{ category: 'accessibility', slug: 'contrast' },
			{ category: 'json', slug: 'formatter' },
			{ category: 'text', slug: 'word-counter' }
		],
		faqs: [
			{
				question: 'What is large text in WCAG?',
				answer:
					'Text ≥18pt (24px) or ≥14pt (18.66px) bold is considered large text, requiring lower contrast ratios.'
			}
		],
		useCases: [
			'Checking accessibility of text styling',
			'Determining WCAG requirements for different font sizes'
		],
		sampleInput: ''
	}
];
