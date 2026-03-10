import { getCategoryMeta } from '$registry/categories.js';
import { getToolsByCategory } from '$registry/index.js';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

export const load: PageLoad = ({ params }) => {
	const { category } = params;
	const meta = getCategoryMeta(category);

	if (!meta) {
		throw error(404, `Category "${category}" not found`);
	}

	const tools = getToolsByCategory(category);

	return { meta, tools };
};
