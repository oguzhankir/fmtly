import { browser } from '$app/environment';
import { derived, writable } from 'svelte/store';

import registryEn from '$lib/i18n/registry/en.js';
import registries from '$lib/i18n/registry/index.js';
import ar from '$lib/paraglide/messages/ar.js';
import bn from '$lib/paraglide/messages/bn.js';
import de from '$lib/paraglide/messages/de.js';
import en from '$lib/paraglide/messages/en.js';
import es from '$lib/paraglide/messages/es.js';
import fr from '$lib/paraglide/messages/fr.js';
import hi from '$lib/paraglide/messages/hi.js';
import it from '$lib/paraglide/messages/it.js';
import ja from '$lib/paraglide/messages/ja.js';
import ko from '$lib/paraglide/messages/ko.js';
import pt from '$lib/paraglide/messages/pt.js';
import ru from '$lib/paraglide/messages/ru.js';
import tr from '$lib/paraglide/messages/tr.js';
import ur from '$lib/paraglide/messages/ur.js';
import zh from '$lib/paraglide/messages/zh.js';

const allTranslations: Record<string, Record<string, string>> = {
	en: { ...en, ...registryEn },
	ar: { ...ar, ...registries.ar },
	bn: { ...bn, ...registries.bn },
	de: { ...de, ...registries.de },
	es: { ...es, ...registries.es },
	fr: { ...fr, ...registries.fr },
	hi: { ...hi, ...registries.hi },
	it: { ...it, ...registries.it },
	ja: { ...ja, ...registries.ja },
	ko: { ...ko, ...registries.ko },
	pt: { ...pt, ...registries.pt },
	ru: { ...ru, ...registries.ru },
	tr: { ...tr, ...registries.tr },
	ur: { ...ur, ...registries.ur },
	zh: { ...zh, ...registries.zh }
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
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', rtl: true },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
	{ code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩' },
	{ code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', rtl: true }
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
