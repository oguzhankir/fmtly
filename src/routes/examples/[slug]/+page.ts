import { examples } from '$lib/registry/examples';
import { error } from '@sveltejs/kit';

export function load({ params }: { params: { slug: string } }) {
	const example = examples.find((e) => e.slug === params.slug);
	if (!example) error(404);
	return { example };
}

export function entries() {
	return examples.map((e) => ({ slug: e.slug }));
}

export const prerender = true;
