import type { ToolDefinition } from '../types.js';

export const colorTools: ToolDefinition[] = [
	{
		id: 'color-contrast',
		category: 'color',
		slug: 'contrast',
		displayName: 'Color Contrast Checker',
		tagline: 'Check WCAG 2.1 AA/AAA compliance for text and backgrounds.',
		description:
			'Calculates the relative luminance contrast ratio between a foreground color and background color, confirming WCAG AA and AAA ratings for normal text, large text, and UI components.',
		primaryKeyword: 'color contrast checker',
		metaTitle: 'Color Contrast Checker | WCAG Compliance | fmtly',
		metaDescription:
			'Check color contrast ratios against WCAG 2.1 accessibility guidelines instantly. Preview text on background.',
		engine: 'color',
		operation: 'contrast',
		layoutVariant: 'dual-input',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: ['{ category: color', 'slug: blindness }', 'json/formatter', 'text/word-counter'],
		faqs: [
			{
				question: 'What is a good contrast ratio?',
				answer:
					'WCAG 2.1 requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (18pt or 14pt bold) to pass Level AA.'
			}
		],
		useCases: [
			'Validating brand colors against accessibility guidelines',
			'Finding safe text colors for a specific background'
		],
		sampleInput: '#FFFFFF\n#000000'
	},
	{
		id: 'color-palette',
		category: 'color',
		slug: 'palette',
		displayName: 'Color Palette Generator',
		tagline: 'Generate analogous, complementary, and triadic palettes geometrically.',
		description:
			'Enter a base color to instantly generate mathematical color harmonies. Generate complementary, analogous, triadic, tetradic, split-complementary, or monochromatic scales.',
		primaryKeyword: 'color palette generator',
		metaTitle: 'Mathematical Color Palette Generator | fmtly',
		metaDescription:
			'Create perfect complementary, analogous, and triadic color combinations using pure HSL mathematics securely in the browser.',
		engine: 'color',
		operation: 'palette',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: ['{ category: color', 'slug: gradient }', 'json/formatter', 'text/word-counter'],
		faqs: [
			{
				question: 'How are palettes calculated?',
				answer:
					'Palettes are dynamically generated using HSL color wheel mathematics. For example, complementary colors sit exactly 180 degrees opposite the base hue.'
			}
		],
		useCases: [
			'Building theme scales for design systems',
			'Finding matching accent colors for web development templates'
		],
		sampleInput: '#4A9EFF'
	},
	{
		id: 'color-gradient',
		category: 'color',
		slug: 'gradient',
		displayName: 'CSS Gradient Generator',
		tagline: 'Visually build linear and radial CSS gradients.',
		description:
			'Design beautiful multi-stop linear and radial gradients with an interactive stops editor. Receive ready-to-use CSS output instantly with live previews.',
		primaryKeyword: 'css gradient generator',
		metaTitle: 'CSS Gradient Builder | Linear and Radial | fmtly',
		metaDescription:
			'Build complex linear and radial CSS gradients with an interactive UI. Add multiple color stops, define angles, and extract clean CSS.',
		engine: 'color',
		operation: 'gradient',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'css',
		hasTreeView: false,
		relatedTools: ['{ category: color', 'slug: palette }', 'json/formatter', 'text/word-counter'],
		faqs: [
			{
				question: 'How do radial gradients map?',
				answer:
					'Instead of an angle, radial gradients map continuously outward into a circular or elliptical shape from a central origin.'
			}
		],
		useCases: [
			'Designing hero section background spans securely',
			'Extracting perfect CSS rule interpolations without syntax errors'
		],
		sampleInput: 'linear-gradient(90deg, #4A9EFF 0%, #CBA6F7 100%)'
	},
	{
		id: 'color-blindness',
		category: 'color',
		slug: 'blindness',
		displayName: 'Color Blindness Simulator',
		tagline: 'Simulate Deuteranopia, Protanopia, and Tritanopia.',
		description:
			'Preview an individual hex color or simulate an uploaded image using standard CVD matrices (Machado et al. 2009) locally on the browser Canvas to audit accessibility boundaries.',
		primaryKeyword: 'color blindness simulator',
		metaTitle: 'Color Blindness CVD Simulator | Image & Hex | fmtly',
		metaDescription:
			'Test your images or hex colors against Deuteranopia, Protanopia, Tritanopia, and Achromatopsia simulations completely securely on-device.',
		engine: 'color',
		operation: 'blindness',
		layoutVariant: 'single-panel',
		inputLanguage: 'plaintext',
		outputLanguage: 'plaintext',
		hasTreeView: false,
		relatedTools: ['{ category: color', 'slug: contrast }', 'json/formatter', 'text/word-counter'],
		faqs: [
			{
				question: 'Are my images uploaded?',
				answer:
					'No. The color blindness simulation runs purely inside your browser memory using the HTML Canvas API and standard transformation matrices.'
			}
		],
		useCases: [
			'Verifying that data graphs and dashboards remain readable with CVD conditions',
			'Checking button contrast mapping under Tritanopia and Achromatopsia'
		],
		sampleInput: '#FF5733'
	}
];
