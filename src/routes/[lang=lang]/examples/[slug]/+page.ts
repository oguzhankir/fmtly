import { examples } from '$lib/registry/examples';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '$lib/utils/locale-routing.js';
import { error } from '@sveltejs/kit';

export function load({ params }: { params: { slug: string } }) {
	const example = examples.find((e) => e.slug === params.slug);
	if (!example) throw error(404);
	return { example };
}

export function entries(): Array<{ lang: string; slug: string }> {
	return SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).flatMap((lang) =>
		examples.map((example) => ({ lang, slug: example.slug }))
	);
}

export const prerender = true;
