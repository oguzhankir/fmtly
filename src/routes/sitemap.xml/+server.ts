import { examples } from '$lib/registry/examples/index.js';
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

	urls.push(`
	<url>
		<loc>${escapeXml(BASE_URL)}</loc>
		<changefreq>weekly</changefreq>
		<priority>1.0</priority>
	</url>`);

	for (const cat of categoryMeta) {
		if (!categoriesWithTools.has(cat.slug)) continue;
		urls.push(`
	<url>
		<loc>${escapeXml(`${BASE_URL}/${cat.slug}`)}</loc>
		<changefreq>weekly</changefreq>
		<priority>0.8</priority>
	</url>`);
	}

	for (const tool of tools) {
		urls.push(`
	<url>
		<loc>${escapeXml(`${BASE_URL}/${tool.category}/${tool.slug}`)}</loc>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>`);
	}

	urls.push(`
	<url>
		<loc>${escapeXml(`${BASE_URL}/examples`)}</loc>
		<changefreq>monthly</changefreq>
		<priority>0.6</priority>
	</url>`);

	for (const example of examples) {
		urls.push(`
	<url>
		<loc>${escapeXml(`${BASE_URL}/examples/${example.slug}`)}</loc>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
	</url>`);
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
