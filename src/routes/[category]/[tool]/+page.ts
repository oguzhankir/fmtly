import { getAllTools, getTool } from '$registry';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';

export function entries() {
	return getAllTools().map((tool) => ({
		category: tool.category,
		tool: tool.slug
	}));
}

export const load: PageLoad = ({ params }) => {
	const tool = getTool(params.category, params.tool);

	if (!tool) {
		error(404, {
			message: `Tool not found: ${params.category}/${params.tool}`
		});
	}

	return { tool };
};
