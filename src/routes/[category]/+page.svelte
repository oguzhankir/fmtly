<script lang="ts">
	import { page } from '$app/stores';
	import SeoHead from '$components/layout/SeoHead.svelte';
	import { getToolsByCategory, getCategories } from '$registry/index.js';
	import { getCategoryMeta, getAllCategoryMeta } from '$registry/categories.js';
	import { localizeCategoryMeta, localizeCategoryMetas, localizeToolDefinitions } from '$lib/registry/localized.js';
	import { t } from '$stores/language';
	import { buildCategorySeo } from '$utils/seo.js';
	import { buildAlternateLinks, localizePath, stripLocalePrefix } from '$lib/utils/locale-routing.js';
	import { ArrowRight } from 'lucide-svelte';

	const BASE_URL = 'https://fmtly.dev';
	let currentPath = $derived(stripLocalePrefix($page.url.pathname));
	let currentLocale = $derived($page.params.lang ?? 'en');

	let categorySlug = $derived($page.params.category ?? '');
	let categoryMeta = $derived.by(() => {
		const rawCategory = getCategoryMeta(categorySlug);
		return rawCategory ? localizeCategoryMeta(rawCategory, $t) : undefined;
	});
	let tools = $derived(localizeToolDefinitions(getToolsByCategory(categorySlug), $t));
	let seo = $derived(
		buildCategorySeo(
			categoryMeta?.displayName ?? categorySlug,
			categoryMeta?.description ?? '',
			`${BASE_URL}${currentPath}`,
			buildAlternateLinks(BASE_URL, `/${categorySlug}`)
		)
	);

	let relatedCategories = $derived.by(() => {
		const allMeta = localizeCategoryMetas(getAllCategoryMeta(), $t);
		const allCats = getCategories();
		const currentIndex = allMeta.findIndex((c) => c.slug === categorySlug);
		if (currentIndex < 0) return [];
		const nearby: typeof allMeta = [];
		for (let i = -2; i <= 2; i++) {
			if (i === 0) continue;
			const idx = (currentIndex + i + allMeta.length) % allMeta.length;
			const cat = allMeta[idx];
			const catInfo = allCats.find((c) => c.category === cat.slug);
			if (catInfo && catInfo.toolCount > 0) {
				nearby.push(cat);
			}
		}
		return nearby.slice(0, 4);
	});
</script>

<SeoHead metadata={seo} />

<div class="category-page">
	<!-- Header -->
	<section class="cat-header">
		<div class="cat-header-top">
			<a href={localizePath('/', currentLocale)} class="cat-breadcrumb">{$t('home', 'Home')}</a>
			<span class="cat-breadcrumb-sep">/</span>
			<span class="cat-breadcrumb-current">{categoryMeta?.displayName ?? categorySlug}</span>
		</div>
		<section class="hero-section">
			<h1 class="hero-title">{categoryMeta?.displayName ?? categorySlug}</h1>
			{#if categoryMeta?.description}
				<p class="hero-subtitle">{categoryMeta.description}</p>
			{/if}
			<span class="cat-count">
				{tools.length === 1 ? $t('ui.tool_count.one') : $t('ui.tool_count.other', { count: tools.length })}
			</span>
		</section>
	</section>

	<!-- Tools grid -->
	<section class="tools-section">
		<div class="tools-grid">
			{#each tools as tool (tool.id)}
				<a href={localizePath(`/${tool.category}/${tool.slug}`, currentLocale)} class="tool-card">
					<div class="tool-card-header">
						<span class="tool-card-op">{tool.operation}</span>
						<ArrowRight size={14} class="tool-card-arrow" />
					</div>
					<h3 class="tool-card-name">{tool.displayName}</h3>
					<p class="tool-card-tagline">{tool.tagline}</p>
				</a>
			{/each}
		</div>
	</section>

	<!-- Related categories -->
	{#if relatedCategories.length > 0}
		<section class="related-section">
			<h2 class="related-title">{$t('ui.related_categories', 'Related Categories')}</h2>
			<div class="related-grid">
				{#each relatedCategories as cat}
					{@const count = getCategories().find((c) => c.category === cat.slug)?.toolCount ?? 0}
					<a href={localizePath(`/${cat.slug}`, currentLocale)} class="related-card">
						<h3 class="related-card-name">{cat.displayName}</h3>
						<span class="related-card-count">
							{count === 1 ? $t('ui.tool_count.one') : $t('ui.tool_count.other', { count })}
						</span>
					</a>
				{/each}
			</div>
		</section>
	{/if}
</div>

<style>
	.category-page {
		max-width: var(--max-content-width);
		margin: 0 auto;
		padding: 0 24px 80px;
	}

	/* Header */
	.cat-header {
		padding: 40px 0 32px;
	}

	.cat-header-top {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 16px;
	}

	.cat-breadcrumb {
		font-size: 12px;
		color: var(--text-muted);
		text-decoration: none;
		transition: color 100ms ease;
	}

	.cat-breadcrumb:hover {
		color: var(--text-secondary);
	}

	.cat-breadcrumb-sep {
		font-size: 12px;
		color: var(--text-disabled);
	}

	.cat-breadcrumb-current {
		font-size: 12px;
		color: var(--text-secondary);
	}



	.cat-count {
		font-size: 12px;
		color: var(--text-muted);
		font-weight: 500;
	}

	/* Tools grid */
	.tools-section {
		margin-top: 8px;
	}

	.tools-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
	}

	/* Tool card */
	.tool-card {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 16px;
		background: var(--bg-elevated);
		border: 1px solid var(--border-subtle);
		border-radius: 10px;
		text-decoration: none;
		transition: border-color 120ms ease, transform 120ms ease;
	}

	.tool-card:hover {
		border-color: var(--border-default);
		transform: translateY(-1px);
	}

	.tool-card:hover :global(.tool-card-arrow) {
		opacity: 1;
		transform: translateX(2px);
	}

	.tool-card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tool-card-op {
		font-size: 10px;
		font-weight: 600;
		color: var(--accent);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	:global(.tool-card-arrow) {
		color: var(--text-muted);
		opacity: 0;
		transition: opacity 120ms ease, transform 120ms ease;
	}

	.tool-card-name {
		font-family: var(--font-ui);
		font-size: 14px;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.tool-card-tagline {
		font-size: 12px;
		color: var(--text-muted);
		margin: 0;
		line-height: 1.5;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* Related section */
	.related-section {
		margin-top: 64px;
		padding-top: 32px;
		border-top: 1px solid var(--border-subtle);
	}

	.related-title {
		font-family: var(--font-ui);
		font-size: 13px;
		font-weight: 500;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin: 0 0 16px;
	}

	.related-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
	}

	.related-card {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 14px;
		background: var(--bg-elevated);
		border: 1px solid var(--border-subtle);
		border-radius: 10px;
		text-decoration: none;
		transition: border-color 120ms ease;
	}

	.related-card:hover {
		border-color: var(--border-default);
	}

	.related-card-name {
		font-size: 14px;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.related-card-count {
		font-size: 12px;
		color: var(--text-muted);
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.tools-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.related-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.tools-grid {
			grid-template-columns: 1fr;
		}

		.related-grid {
			grid-template-columns: 1fr;
		}

	}
</style>
