import type { ToolDefinition } from '$registry/types.js';

export type SeoMetadata = {
	title: string;
	description: string;
	canonical: string;
	ogTitle: string;
	ogDescription: string;
	ogUrl: string;
	ogImage: string;
	ogType: string;
	twitterCard: string;
	twitterTitle: string;
	twitterDescription: string;
	twitterImage: string;
	structuredData: string;
};

export function buildCategorySeo(
	displayName: string,
	description: string,
	canonical: string
): SeoMetadata {
	const title = `${displayName} Tools — fmtly.dev`;
	const ogImage = `${canonical.split('/').slice(0, 3).join('/')}/og/category.png`;

	return {
		title,
		description: description || `${displayName} developer tools — free, instant, browser-only.`,
		canonical,
		ogTitle: title,
		ogDescription: description || `${displayName} developer tools — free, instant, browser-only.`,
		ogUrl: canonical,
		ogImage,
		ogType: 'website',
		twitterCard: 'summary_large_image',
		twitterTitle: title,
		twitterDescription: description || `${displayName} developer tools.`,
		twitterImage: ogImage,
		structuredData: JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'CollectionPage',
			name: title,
			url: canonical,
			description
		})
	};
}

export function generateToolSEO(tool: ToolDefinition, baseUrl: string): SeoMetadata {
	const canonical = `${baseUrl}/${tool.category}/${tool.slug}`;
	const ogImage = `${baseUrl}/og/${tool.category}-${tool.slug}.png`;

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		name: tool.displayName,
		applicationCategory: 'DeveloperApplication',
		operatingSystem: 'Any',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		},
		url: canonical,
		description: tool.description
	};

	return {
		title: tool.metaTitle,
		description: tool.metaDescription,
		canonical,
		ogTitle: tool.metaTitle,
		ogDescription: tool.metaDescription,
		ogUrl: canonical,
		ogImage,
		ogType: 'website',
		twitterCard: 'summary_large_image',
		twitterTitle: tool.metaTitle,
		twitterDescription: tool.metaDescription,
		twitterImage: ogImage,
		structuredData: JSON.stringify(structuredData)
	};
}
