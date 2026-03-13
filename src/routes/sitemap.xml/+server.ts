import { examples } from '$lib/registry/examples/index.js';
import { SUPPORTED_LOCALES, localizePath } from '$lib/utils/locale-routing.js';
import { getAllCategoryMeta } from '$registry/categories.js';
import { getAllTools } from '$registry/index.js';
import { getCategories } from '$registry/index.js';
import type { RequestHandler } from './$types.js';

const BASE_URL = 'https://fmtly.dev';

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export const GET: RequestHandler = () => {
	const tools = getAllTools();
	const categoryMeta = getAllCategoryMeta();
	const categoriesWithTools = new Set(getCategories().map((c) => c.category));

	const urls: string[] = [];

	function addUrl(path: string, changefreq: string, priority: string): void {
		urls.push(`
	<url>
		<loc>${escapeXml(`${BASE_URL}${path}`)}</loc>
		<changefreq>${changefreq}</changefreq>
		<priority>${priority}</priority>
	</url>`);
	}

	for (const locale of SUPPORTED_LOCALES) {
		addUrl(localizePath('/', locale), 'weekly', '1.0');
	}

	for (const cat of categoryMeta) {
		if (!categoriesWithTools.has(cat.slug)) continue;
		for (const locale of SUPPORTED_LOCALES) {
			addUrl(localizePath(`/${cat.slug}`, locale), 'weekly', '0.8');
		}
	}

	for (const tool of tools) {
		for (const locale of SUPPORTED_LOCALES) {
			addUrl(localizePath(`/${tool.category}/${tool.slug}`, locale), 'monthly', '0.7');
		}
	}

	for (const locale of SUPPORTED_LOCALES) {
		addUrl(localizePath('/examples', locale), 'monthly', '0.6');
	}

	for (const example of examples) {
		for (const locale of SUPPORTED_LOCALES) {
			addUrl(localizePath(`/examples/${example.slug}`, locale), 'monthly', '0.5');
		}
	}

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
