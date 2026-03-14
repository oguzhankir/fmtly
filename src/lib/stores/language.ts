import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';

import registryEn from '$lib/i18n/registry/en.js';
import registries from '$lib/i18n/registry/index.js';

const allTranslations: Record<string, Record<string, string>> = {
	en: registryEn,
	de: registries.de,
	es: registries.es,
	fr: registries.fr,
	it: registries.it,
	tr: registries.tr
};

const RTL_LANGS = new Set(['ar', 'ur']);

export type Language = {
	code: string;
	name: string;
	nativeName: string;
	flag: string;
	rtl?: boolean;
};

export const languages: Language[] = [
	{ code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
	{ code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' }
];

function detectLocale(): string {
	if (!browser) return 'en';
	const saved = localStorage.getItem('fmtly-language');
	if (saved && allTranslations[saved]) return saved;
	const browserLang = navigator.language.split('-')[0];
	return allTranslations[browserLang] ? browserLang : 'en';
}

export const locale = writable<string>(browser ? detectLocale() : 'en');

export const t = derived(locale, ($locale) => {
	const dict = allTranslations[$locale] ?? allTranslations.en;
	return (key: string, paramsOrFallback?: any, maybeFallback?: string): string => {
		let params: Record<string, string | number> = {};
		let fallback: string = key;

		if (typeof paramsOrFallback === 'string') {
			fallback = paramsOrFallback;
			if (maybeFallback && typeof maybeFallback === 'object') {
				params = maybeFallback;
			}
		} else if (paramsOrFallback && typeof paramsOrFallback === 'object') {
			params = paramsOrFallback;
			if (typeof maybeFallback === 'string') {
				fallback = maybeFallback;
			}
		}

		let text = dict[key] ?? allTranslations.en[key] ?? fallback;
		Object.entries(params).forEach(([k, v]) => {
			text = text.replace(`{${k}}`, String(v));
		});
		return text;
	};
});

export const currentLanguageInfo = derived(locale, ($locale) =>
	languages.find((l) => l.code === $locale)
);

export function setLocale(lang: string): void {
	if (!allTranslations[lang]) return;
	locale.set(lang);
	if (browser) {
		localStorage.setItem('fmtly-language', lang);
		document.documentElement.lang = lang;
		document.documentElement.dir = RTL_LANGS.has(lang) ? 'rtl' : 'ltr';
	}
}
