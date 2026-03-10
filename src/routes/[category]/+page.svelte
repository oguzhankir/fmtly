<script lang="ts">
	import SeoHead from '$components/layout/SeoHead.svelte';
	import { getAllCategoryMeta } from '$registry/categories.js';
	import type { SeoMetadata } from '$utils/seo.js';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();

	const BASE_URL = 'https://fmtly.dev';

	let seo = $derived<SeoMetadata>({
		title: `${data.meta.displayName} Tools — fmtly.dev`,
		description: data.meta.description,
		canonical: `${BASE_URL}/${data.meta.slug}`,
		ogTitle: `${data.meta.displayName} Tools — fmtly.dev`,
		ogDescription: data.meta.description,
		ogUrl: `${BASE_URL}/${data.meta.slug}`,
		ogImage: `${BASE_URL}/og/${data.meta.slug}.png`,
		ogType: 'website',
		twitterCard: 'summary_large_image',
		twitterTitle: `${data.meta.displayName} Tools — fmtly.dev`,
		twitterDescription: data.meta.description,
		twitterImage: `${BASE_URL}/og/${data.meta.slug}.png`,
		structuredData: JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'CollectionPage',
			name: `${data.meta.displayName} Tools`,
			description: data.meta.description,
			url: `${BASE_URL}/${data.meta.slug}`
		})
	});

	const allCategoryMeta = getAllCategoryMeta();
	let relatedCategories = $derived(
		allCategoryMeta.filter((c) => c.slug !== data.meta.slug).slice(0, 6)
	);
</script>

<SeoHead metadata={seo} />

<div class="category-page">
	<!-- Header -->
	<section class="category-header">
		<h1 class="category-title">{data.meta.displayName} Tools</h1>
		<p class="category-desc">{data.meta.description}</p>
	</section>

	<!-- Tools grid -->
	<section class="category-tools">
		<div class="tools-grid">
			{#each data.tools as tool (tool.id)}
				<a href="/{tool.category}/{tool.slug}" class="tool-card">
					<span class="tool-card-badge">{tool.category.toUpperCase()}</span>
					<h3 class="tool-card-name">{tool.displayName}</h3>
					<p class="tool-card-tagline">{tool.tagline}</p>
				</a>
			{/each}
		</div>
	</section>

	<!-- Related categories -->
	{#if relatedCategories.length > 0}
		<section class="related-section">
			<h2 class="related-title">Related Categories</h2>
			<div class="related-grid">
				{#each relatedCategories as cat}
					<a href="/{cat.slug}" class="related-card">
						<span class="related-card-name">{cat.displayName}</span>
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
		padding: 0 var(--space-6);
		padding-bottom: var(--space-16);
	}

	.category-header {
		padding: var(--space-12) 0 var(--space-8);
	}

	.category-title {
		font-size: var(--text-2xl);
		font-weight: var(--weight-semibold);
		color: var(--text-primary);
		margin: 0 0 var(--space-2);
	}

	.category-desc {
		font-size: var(--text-base);
		color: var(--text-secondary);
		margin: 0;
		max-width: 640px;
		line-height: var(--leading-relaxed);
	}

	.category-tools {
		margin-bottom: var(--space-12);
	}

	/* Tools grid */
	.tools-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-3);
	}

	@media (max-width: 1024px) {
		.tools-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 768px) {
		.tools-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.tools-grid {
			grid-template-columns: 1fr;
		}
	}

	/* Tool card */
	.tool-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		padding: var(--space-4);
		background: var(--bg-surface);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-lg);
		text-decoration: none;
		transition:
			border-color var(--duration-fast),
			box-shadow var(--duration-fast);
	}

	.tool-card:hover {
		border-color: var(--border-focus);
		box-shadow: var(--shadow-sm);
	}

	.tool-card-badge {
		font-size: 0.625rem;
		font-weight: var(--weight-semibold);
		color: var(--text-accent);
		letter-spacing: 0.05em;
	}

	.tool-card-name {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		color: var(--text-primary);
		margin: 0;
	}

	.tool-card-tagline {
		font-size: var(--text-xs);
		color: var(--text-tertiary);
		margin: 0;
		line-height: var(--leading-relaxed);
	}

	/* Related categories */
	.related-section {
		border-top: 1px solid var(--border-subtle);
		padding-top: var(--space-8);
	}

	.related-title {
		font-size: var(--text-lg);
		font-weight: var(--weight-semibold);
		color: var(--text-primary);
		margin: 0 0 var(--space-4);
	}

	.related-grid {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.related-card {
		padding: var(--space-2) var(--space-4);
		background: var(--bg-surface);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-full);
		text-decoration: none;
		transition:
			border-color var(--duration-fast),
			box-shadow var(--duration-fast);
	}

	.related-card:hover {
		border-color: var(--border-focus);
	}

	.related-card-name {
		font-size: var(--text-sm);
		color: var(--text-secondary);
		font-weight: var(--weight-medium);
	}
</style>
