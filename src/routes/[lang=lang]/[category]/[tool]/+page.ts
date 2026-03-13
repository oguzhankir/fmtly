import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '$lib/utils/locale-routing.js';
import { getAllTools, getTool } from '$registry';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

export function entries(): Array<{ lang: string; category: string; tool: string }> {
	return SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).flatMap((lang) =>
		getAllTools().map((tool) => ({
			lang,
			category: tool.category,
			tool: tool.slug
		}))
	);
}

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const tool = getTool(params.category, params.tool);

	if (!tool) {
		throw error(404, {
			message: `Tool not found: ${params.category}/${params.tool}`
		});
	}

	return { tool };
};
