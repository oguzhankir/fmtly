import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '$lib/utils/locale-routing.js';
import { getCategoryMeta } from '$registry/categories.js';
import { getCategories } from '$registry/index.js';
import { getToolsByCategory } from '$registry/index.js';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

export function entries(): Array<{ lang: string; category: string }> {
	const categories = getCategories().map((item) => item.category);
	return SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).flatMap((lang) =>
		categories.map((category) => ({ lang, category }))
	);
}

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const { category } = params;
	const meta = getCategoryMeta(category);

	if (!meta) {
		throw error(404, `Category "${category}" not found`);
	}

	const tools = getToolsByCategory(category);

	return { meta, tools };
};
