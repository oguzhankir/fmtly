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
