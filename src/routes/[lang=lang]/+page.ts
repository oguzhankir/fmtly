import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '$lib/utils/locale-routing.js';

export function entries(): Array<{ lang: string }> {
	return SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((lang) => ({ lang }));
}

export const prerender = true;
