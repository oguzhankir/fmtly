<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Search } from 'lucide-svelte';
	import SeoHead from '$components/layout/SeoHead.svelte';
	import { getAllTools } from '$registry/index.js';
	import { getAllCategoryMeta } from '$registry/categories.js';
	import { getCategories } from '$registry/index.js';
	import type { ToolDefinition } from '$registry/types.js';
	import type { SeoMetadata } from '$utils/seo.js';

	const BASE_URL = 'https://fmtly.dev';

	const allTools = getAllTools();
	const allCategoryMeta = getAllCategoryMeta();
	const categoryCounts = new Map(getCategories().map((c) => [c.category, c.toolCount]));

	const featuredIds = [
		'json-formatter',
		'json-viewer',
		'json-validator',
		'json-minifier'
	];
	const featuredTools = featuredIds
		.map((id) => allTools.find((t) => t.id === id))
		.filter((t): t is ToolDefinition => t !== undefined);

	let searchQuery = $state('');
	let recentTools = $state<ToolDefinition[]>([]);

	let filteredTools = $derived(() => {
		if (!searchQuery.trim()) return [];
		const q = searchQuery.toLowerCase();
		return allTools.filter(
			(t) =>
				t.displayName.toLowerCase().includes(q) ||
				t.tagline.toLowerCase().includes(q) ||
				t.category.toLowerCase().includes(q) ||
				t.primaryKeyword.toLowerCase().includes(q)
		);
	});

	onMount(() => {
		if (browser) {
			loadRecentTools();
		}
	});

	function loadRecentTools(): void {
		try {
			const raw = localStorage.getItem('fmtly-recent-tools');
			if (!raw) return;
			const ids: string[] = JSON.parse(raw);
			recentTools = ids
				.slice(0, 4)
				.map((id) => allTools.find((t) => t.id === id))
				.filter((t): t is ToolDefinition => t !== undefined);
		} catch {
			recentTools = [];
		}
	}

	const seo: SeoMetadata = {
		title: 'Developer Tools — fmtly.dev',
		description:
			'Free online developer tools. Format, convert, and validate JSON, XML, YAML, CSV, CSS and more. Instant, no login, your data stays in your browser.',
		canonical: BASE_URL,
		ogTitle: 'Developer Tools — fmtly.dev',
		ogDescription:
			'Free online developer tools. Format, convert, and validate JSON, XML, YAML, CSV, CSS and more. Instant, no login, your data stays in your browser.',
		ogUrl: BASE_URL,
		ogImage: `${BASE_URL}/og/home.png`,
		ogType: 'website',
		twitterCard: 'summary_large_image',
		twitterTitle: 'Developer Tools — fmtly.dev',
		twitterDescription:
			'Free online developer tools. Format, convert, and validate JSON, XML, YAML, CSV, CSS and more.',
		twitterImage: `${BASE_URL}/og/home.png`,
		structuredData: JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: 'fmtly.dev',
			url: BASE_URL,
			description:
				'Free online developer tools. Format, convert, and validate JSON, XML, YAML, CSV, CSS and more.',
			potentialAction: {
				'@type': 'SearchAction',
				target: {
					'@type': 'EntryPoint',
					urlTemplate: `${BASE_URL}/?q={search_term_string}`
				},
				'query-input': 'required name=search_term_string'
			}
		})
	};
</script>

<SeoHead metadata={seo} />

<div class="home">
	<!-- Hero -->
	<section class="hero">
		<h1 class="hero-headline">Developer tools that just work.</h1>
		<p class="hero-subline">Format, convert, validate. Instantly. In your browser.</p>

		<!-- Search -->
		<div class="search-wrapper">
			<Search size={16} />
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Search tools…"
				class="search-input"
				spellcheck="false"
			/>
		</div>

		<!-- Search results -->
		{#if searchQuery.trim() && filteredTools().length > 0}
			<div class="search-results">
				{#each filteredTools() as tool (tool.id)}
					<a href="/{tool.category}/{tool.slug}" class="tool-card">
						<span class="tool-card-badge">{tool.category.toUpperCase()}</span>
						<h3 class="tool-card-name">{tool.displayName}</h3>
						<p class="tool-card-tagline">{tool.tagline}</p>
					</a>
				{/each}
			</div>
		{:else if searchQuery.trim()}
			<p class="search-empty">No tools match "{searchQuery}"</p>
		{/if}
	</section>

	<!-- Featured tools -->
	{#if !searchQuery.trim()}
		{#if featuredTools.length > 0}
			<section class="section">
				<h2 class="section-title">Featured Tools</h2>
				<div class="tools-grid">
					{#each featuredTools as tool (tool.id)}
						<a href="/{tool.category}/{tool.slug}" class="tool-card">
							<span class="tool-card-badge">{tool.category.toUpperCase()}</span>
							<h3 class="tool-card-name">{tool.displayName}</h3>
							<p class="tool-card-tagline">{tool.tagline}</p>
						</a>
					{/each}
				</div>
			</section>
		{/if}

		<!-- Recently used -->
		{#if recentTools.length > 0}
			<section class="section">
				<h2 class="section-title">Recently Used</h2>
				<div class="tools-grid">
					{#each recentTools as tool (tool.id)}
						<a href="/{tool.category}/{tool.slug}" class="tool-card">
							<span class="tool-card-badge">{tool.category.toUpperCase()}</span>
							<h3 class="tool-card-name">{tool.displayName}</h3>
							<p class="tool-card-tagline">{tool.tagline}</p>
						</a>
					{/each}
				</div>
			</section>
		{/if}

		<!-- All categories -->
		<section class="section">
			<h2 class="section-title">All Categories</h2>
			<div class="categories-grid">
				{#each allCategoryMeta as cat}
					{@const count = categoryCounts.get(cat.slug) ?? 0}
					{#if count > 0}
						<a href="/{cat.slug}" class="category-card">
							<h3 class="category-card-name">{cat.displayName}</h3>
							<p class="category-card-desc">{cat.description}</p>
							<span class="category-card-count">{count} {count === 1 ? 'tool' : 'tools'}</span>
						</a>
					{/if}
				{/each}
			</div>
		</section>
	{/if}
</div>

<style>
	.home {
		max-width: var(--max-content-width);
		margin: 0 auto;
		padding: 0 var(--space-6);
		padding-bottom: var(--space-16);
	}

	/* Hero */
	.hero {
		padding: var(--space-16) 0 var(--space-8);
		text-align: center;
	}

	.hero-headline {
		font-size: var(--text-3xl);
		font-weight: var(--weight-semibold);
		color: var(--text-primary);
		margin: 0 0 var(--space-2);
		line-height: var(--leading-tight);
	}

	.hero-subline {
		font-size: var(--text-lg);
		color: var(--text-tertiary);
		margin: 0 0 var(--space-8);
	}

	.search-wrapper {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		max-width: 480px;
		margin: 0 auto;
		padding: var(--space-2) var(--space-4);
		background: var(--bg-surface);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-lg);
		transition: border-color var(--duration-fast);
		color: var(--text-tertiary);
	}

	.search-wrapper:focus-within {
		border-color: var(--border-focus);
	}

	.search-input {
		flex: 1;
		background: none;
		border: none;
		outline: none;
		font-size: var(--text-base);
		font-family: var(--font-sans);
		color: var(--text-primary);
	}

	.search-input::placeholder {
		color: var(--text-tertiary);
	}

	.search-results {
		max-width: 640px;
		margin: var(--space-4) auto 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.search-empty {
		color: var(--text-tertiary);
		font-size: var(--text-sm);
		margin-top: var(--space-4);
	}

	/* Sections */
	.section {
		margin-top: var(--space-12);
	}

	.section-title {
		font-size: var(--text-xl);
		font-weight: var(--weight-semibold);
		color: var(--text-primary);
		margin: 0 0 var(--space-4);
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

	/* Categories grid */
	.categories-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-3);
	}

	@media (max-width: 768px) {
		.categories-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 480px) {
		.categories-grid {
			grid-template-columns: 1fr;
		}
	}

	/* Category card */
	.category-card {
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

	.category-card:hover {
		border-color: var(--border-focus);
		box-shadow: var(--shadow-sm);
	}

	.category-card-name {
		font-size: var(--text-base);
		font-weight: var(--weight-semibold);
		color: var(--text-primary);
		margin: 0;
	}

	.category-card-desc {
		font-size: var(--text-xs);
		color: var(--text-tertiary);
		margin: 0;
		line-height: var(--leading-relaxed);
	}

	.category-card-count {
		font-size: var(--text-xs);
		color: var(--text-accent);
		font-weight: var(--weight-medium);
		margin-top: var(--space-1);
	}
</style>
