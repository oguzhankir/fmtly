import type { LayoutLoad } from './$types.js';

export const prerender = true;

export const load: LayoutLoad = ({ params }) => {
	return {
		lang: params.lang
	};
};
