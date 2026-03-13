export const DEFAULT_LOCALE = 'en';

export const SUPPORTED_LOCALES = [
	'en',
	'tr',
	'es',
	'fr',
	'de',
	'it',
	'pt',
	'ru',
	'ja',
	'ko',
	'zh',
	'ar',
	'hi',
	'bn',
	'ur'
] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export function isSupportedLocale(locale: string): locale is SupportedLocale {
	return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function normalizePath(pathname: string): string {
	if (!pathname) return '/';
	const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return normalized === '/' ? normalized : normalized.replace(/\/+$/, '');
}

export function stripLocalePrefix(pathname: string): string {
	const normalized = normalizePath(pathname);
	const segments = normalized.split('/').filter(Boolean);
	if (segments.length === 0) return '/';
	if (!isSupportedLocale(segments[0])) return normalized;
	const stripped = `/${segments.slice(1).join('/')}`;
	return stripped === '/' ? '/' : stripped.replace(/\/+$/, '') || '/';
}

export function localizePath(pathname: string, locale: string): string {
	const stripped = stripLocalePrefix(pathname);
	if (!isSupportedLocale(locale) || locale === DEFAULT_LOCALE) return stripped;
	return stripped === '/' ? `/${locale}` : `/${locale}${stripped}`;
}

export function toAbsoluteUrl(baseUrl: string, pathname: string, locale: string): string {
	return `${baseUrl}${localizePath(pathname, locale)}`;
}

export type AlternateLink = {
	hreflang: string;
	href: string;
};

export function buildAlternateLinks(baseUrl: string, pathname: string): AlternateLink[] {
	const links: AlternateLink[] = SUPPORTED_LOCALES.map((locale) => ({
		hreflang: locale,
		href: toAbsoluteUrl(baseUrl, pathname, locale)
	}));

	links.push({
		hreflang: 'x-default',
		href: toAbsoluteUrl(baseUrl, pathname, DEFAULT_LOCALE)
	});

	return links;
}

export function getLocaleFromPathname(pathname: string): SupportedLocale {
	const normalized = normalizePath(pathname);
	const firstSegment = normalized.split('/').filter(Boolean)[0];
	return firstSegment && isSupportedLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE;
}

export function replaceLocaleInPathname(pathname: string, locale: string): string {
	return localizePath(pathname, locale);
}
