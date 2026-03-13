<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Search, ArrowRight } from 'lucide-svelte';
	import { page } from '$app/stores';
	import SeoHead from '$components/layout/SeoHead.svelte';
	import { getAllTools, getToolsByCategory } from '$registry/index.js';
	import { localizeCategoryMetas, localizeToolDefinitions } from '$lib/registry/localized.js';
	import { getAllCategoryMeta } from '$registry/categories.js';
	import { getCategories } from '$registry/index.js';
	import type { ToolDefinition } from '$registry/types.js';
	import type { SeoMetadata } from '$utils/seo.js';
	import { t } from '$lib/stores/language';
	import { buildAlternateLinks, localizePath, stripLocalePrefix } from '$lib/utils/locale-routing.js';

	const BASE_URL = 'https://fmtly.dev';
	let currentPath = $derived(stripLocalePrefix($page.url.pathname));
	let currentLocale = $derived($page.params.lang ?? 'en');

	const rawTools = getAllTools();
	const rawCategoryMeta = getAllCategoryMeta();
	const categoryCounts = new Map(getCategories().map((c) => [c.category, c.toolCount]));

	const categoryIcons: Record<string, string> = {
		json: '{}',
		xml: '</>',
		yaml: '~',
		csv: '\u229E',
		toml: '\u2261',
		text: 'T',
		number: '#',
		encode: '\u27F3',
		escape: '\\',
		diff: '\u2194',
		color: '\u25C9',
		crypto: '\u26BF',
		web: '\u2B21',
		code: '\u2328',
		pdf: '\u25A4',
		image: '\u2B1A',
		file: '\u25A1',
		qr: '\u229E',
		generate: '\u26A1',
		css: '{ }',
		html: '<>',
		js: 'JS'
	};

	let searchQuery = $state('');
	let searchFocused = $state(false);
	let recentTools = $state<ToolDefinition[]>([]);
	let searchShortcut = $state('');

	let filteredTools = $derived.by<ToolDefinition[]>(() => {
		const localizedTools = localizeToolDefinitions(rawTools, $t);
		if (!searchQuery.trim()) return [];
		const q = searchQuery.toLowerCase();
		return localizedTools.filter(
			(t) =>
				t.displayName.toLowerCase().includes(q) ||
				t.tagline.toLowerCase().includes(q) ||
				t.category.toLowerCase().includes(q) ||
				t.primaryKeyword.toLowerCase().includes(q)
		);
	});

	let allTools = $derived(localizeToolDefinitions(rawTools, $t));
	let allCategoryMeta = $derived(localizeCategoryMetas(rawCategoryMeta, $t));

	function getTopTools(slug: string): string[] {
		return allTools
			.filter(t => t.category === slug)
			.slice(0, 3)
			.map((t) => t.displayName);
	}

	onMount(() => {
		if (browser) {
			const platform = navigator.platform ?? '';
			const userAgent = navigator.userAgent ?? '';
			const isMac = platform.includes('Mac') || userAgent.includes('Mac');
			searchShortcut = isMac ? '⌘K' : 'Ctrl+K';
			loadRecentTools();
		}
	});

	function loadRecentTools(): void {
		try {
			const raw = localStorage.getItem('fmtly-recent-tools');
			if (!raw) return;
			const ids: string[] = JSON.parse(raw);
			recentTools = ids
				.slice(0, 6)
				.map((id) => allTools.find((t) => t.id === id))
				.filter((t): t is ToolDefinition => t !== undefined);
		} catch {
			recentTools = [];
		}
	}

	const seo: SeoMetadata = $derived.by(() => ({
		title: $t('seo.home.title', 'Free Online Developer Tools — JSON, XML, YAML, CSV Formatter & Validator'),
		description: $t('seo.home.description', 'Free online developer tools for JSON, XML, YAML, CSV. Format, convert, validate in your browser. No login, instant results.'),
		canonical: `${BASE_URL}${currentPath}`,
		ogTitle: $t('seo.home.og_title', 'Free Online Developer Tools — JSON, XML, YAML, CSV Formatter & Validator'),
		ogDescription: $t('seo.home.og_description', 'Free online developer tools for JSON, XML, YAML, CSV. Format, convert, validate in your browser. No login, instant results.'),
		ogUrl: `${BASE_URL}${currentPath}`,
		ogImage: `${BASE_URL}/og/home.png`,
		ogType: 'website',
		twitterCard: 'summary_large_image',
		twitterTitle: $t('seo.home.twitter_title', 'Free Online Developer Tools — JSON, XML, YAML, CSV Formatter & Validator'),
		twitterDescription: $t('seo.home.twitter_description', 'Free online developer tools for JSON, XML, YAML, CSV. Format, convert, validate in your browser. No login, instant results.'),
		twitterImage: `${BASE_URL}/og/home.png`,
		alternates: buildAlternateLinks(BASE_URL, '/'),
		structuredData: JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: 'fmtly.dev',
			url: `${BASE_URL}${currentPath}`,
			description: $t('seo.home.structured_description', 'Free online developer tools for JSON, XML, YAML, CSV. Format, convert, validate in your browser. No login, instant results.'),
			potentialAction: {
				'@type': 'SearchAction',
				target: {
					'@type': 'EntryPoint',
					urlTemplate: `${BASE_URL}/?q={search_term_string}`
				},
				'query-input': 'required name=search_term_string'
			}
		})
	}));
</script>

<SeoHead metadata={seo} />

<div class="home">
	<!-- Hero -->
	<section class="hero">
		<p class="hero-eyebrow">
			{$t('open_source_browser_only_no_login', 'Open source · Browser-only · No login')}
		</p>
		<h1 class="hero-headline">
			{$t('every_tool_a_developer_needs', 'Every tool a developer needs.')}
		</h1>
		<p class="hero-subtitle">
			{$t(
				'hero_subtitle',
				'Format, convert, encode, hash, diff, generate — everything runs in your browser. Nothing sent to a server.'
			)}
		</p>
		<!-- Search bar -->
		<div class="hero-search" class:hero-search--focused={searchFocused}>
			<Search size={16} style="color: var(--text-muted); flex-shrink: 0;" />
			<input
				type="text"
				bind:value={searchQuery}
				placeholder={$t('ui.placeholder.search_tools_count', { count: allTools.length }, `Search ${allTools.length}+ tools...`)}
				class="hero-search-input"
				spellcheck="false"
				onfocus={() => { searchFocused = true; }}
				onblur={() => { searchFocused = false; }}
			/>
			{#if searchShortcut}
				<kbd class="hero-search-kbd">{searchShortcut}</kbd>
			{/if}
		</div>

		<!-- Search results -->
		{#if searchQuery.trim() && filteredTools.length > 0}
			<div class="search-results">
				{#each filteredTools.slice(0, 8) as tool (tool.id)}
					<a href={localizePath(`/${tool.category}/${tool.slug}`, currentLocale)} class="search-result-card">
						<div class="search-result-left">
							<span class="search-result-badge">{tool.category.toUpperCase()}</span>
							<span class="search-result-name">{tool.displayName}</span>
						</div>
						<ArrowRight size={14} style="color: var(--text-muted);" />
					</a>
				{/each}
			</div>
		{:else if searchQuery.trim()}
			<p class="search-empty">{$t('no_tools_match', 'No tools match')} &ldquo;{searchQuery}&rdquo;</p>
		{/if}
	</section>

	{#if !searchQuery.trim()}
		<!-- Recently used -->
		{#if recentTools.length > 0}
			<section class="section">
				<h2 class="section-label">{$t('recently_used', 'Recently Used')}</h2>
				<div class="recent-scroll">
					{#each recentTools as tool (tool.id)}
						<a href={localizePath(`/${tool.category}/${tool.slug}`, currentLocale)} class="recent-card">
							<span class="recent-card-badge">{tool.category.toUpperCase()}</span>
							<span class="recent-card-name">{tool.displayName}</span>
							<span class="recent-card-tagline">{tool.tagline}</span>
						</a>
					{/each}
				</div>
			</section>
		{/if}

		<!-- All categories grid -->
		<section class="section section--categories">
			<h2 class="section-label">{$t('all_categories', 'All Categories')}</h2>
			<div class="categories-grid">
				{#each allCategoryMeta as cat}
					{@const count = categoryCounts.get(cat.slug) ?? 0}
					{#if count > 0}
						<a href={localizePath(`/${cat.slug}`, currentLocale)} class="category-card">
							<div class="category-card-top">
								<div class="category-card-icon">{categoryIcons[cat.slug] ?? '#'}</div>
								<h3 class="category-card-name">{cat.displayName}</h3>
							</div>
							<span class="category-card-count">
								{count === 1 ? $t('ui.tool_count.one') : $t('ui.tool_count.other', { count })}
							</span>
							<span class="category-card-tools">{getTopTools(cat.slug).join(' · ')}</span>
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
		padding: 0 24px;
		padding-bottom: 80px;
	}

	/* Hero */
	.hero {
		padding: 72px 0 40px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero-eyebrow {
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 500;
		color: var(--text-muted);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin: 0 0 16px;
	}

	.hero-headline {
		font-family: var(--font-ui);
		font-size: 48px;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
		max-width: 600px;
		line-height: 1.1;
	}

	.hero-subtitle {
		font-family: var(--font-ui);
		font-size: 16px;
		font-weight: 400;
		color: var(--text-secondary);
		max-width: 480px;
		margin: 16px 0 0;
		line-height: 1.5;
	}

	/* Hero search */
	.hero-search {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 520px;
		max-width: 100%;
		height: 44px;
		margin-top: 32px;
		padding: 0 12px;
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
		border-radius: 10px;
		transition: border-color 100ms ease, box-shadow 100ms ease;
	}

	.hero-search--focused {
		border-color: var(--border-focus);
		box-shadow: 0 0 0 3px var(--accent-dim);
	}

	.hero-search-input {
		flex: 1;
		background: none;
		border: none;
		outline: none;
		font-family: var(--font-ui);
		font-size: 14px;
		color: var(--text-primary);
	}

	.hero-search-input::placeholder {
		color: var(--text-muted);
	}

	.hero-search-kbd {
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-muted);
		background: var(--bg-subtle);
		border: 1px solid var(--border-subtle);
		border-radius: 4px;
		padding: 2px 6px;
		line-height: 1;
		flex-shrink: 0;
	}

	/* Search results */
	.search-results {
		width: 520px;
		max-width: 100%;
		margin-top: 8px;
		display: flex;
		flex-direction: column;
		gap: 2px;
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
		border-radius: 10px;
		padding: 4px;
		overflow: hidden;
	}

	.search-result-card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 12px;
		border-radius: 8px;
		text-decoration: none;
		transition: background 80ms ease;
	}

	.search-result-card:hover {
		background: var(--bg-hover);
	}

	.search-result-left {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.search-result-badge {
		display: inline-block;
		padding: 1px 6px;
		border-radius: 4px;
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 0.03em;
		color: var(--accent);
		background: var(--accent-dim);
	}

	.search-result-name {
		font-size: 13px;
		font-weight: 500;
		color: var(--text-primary);
	}

	.search-empty {
		color: var(--text-muted);
		font-size: 13px;
		margin-top: 12px;
	}

	/* Sections */
	.section {
		margin-top: 48px;
	}

	.section--categories {
		margin-top: 48px;
	}

	.section-label {
		font-family: var(--font-ui);
		font-size: 13px;
		font-weight: 500;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin: 0 0 16px;
	}

	/* Recent scroll */
	.recent-scroll {
		display: flex;
		gap: 12px;
		overflow-x: auto;
		padding-bottom: 4px;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	.recent-scroll::-webkit-scrollbar {
		display: none;
	}

	.recent-card {
		flex-shrink: 0;
		width: 200px;
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 14px;
		background: var(--bg-elevated);
		border: 1px solid var(--border-subtle);
		border-radius: 10px;
		text-decoration: none;
		transition: border-color 120ms ease, transform 120ms ease;
	}

	.recent-card:hover {
		border-color: var(--border-default);
		transform: translateY(-1px);
	}

	.recent-card-badge {
		font-size: 10px;
		font-weight: 600;
		color: var(--accent);
		letter-spacing: 0.04em;
	}

	.recent-card-name {
		font-size: 14px;
		font-weight: 600;
		color: var(--text-primary);
	}

	.recent-card-tagline {
		font-size: 11px;
		color: var(--text-muted);
		line-height: 1.4;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* Categories grid */
	.categories-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 12px;
		align-items: stretch;
	}

	.category-card {
		display: block;
		height: 100%;
		padding: 18px 20px;
		background: var(--bg-elevated);
		border: 1px solid var(--border-subtle);
		border-radius: 10px;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		transition: border-color 120ms ease, transform 120ms ease, box-shadow 120ms ease;
	}

	.category-card:hover {
		border-color: var(--border-strong);
		transform: translateY(-1px);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
	}

	:global([data-theme="light"]) .category-card:hover {
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
	}

	.category-card-top {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.category-card-icon {
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 20px;
		font-family: var(--font-mono);
		color: var(--text-secondary);
		flex-shrink: 0;
	}

	.category-card-name {
		font-family: var(--font-ui);
		font-size: 14px;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.category-card-count {
		display: block;
		font-size: 12px;
		color: var(--text-muted);
		margin-top: 4px;
	}

	.category-card-tools {
		display: block;
		font-size: 11px;
		color: var(--text-muted);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 8px;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero-headline {
			font-size: 32px;
		}

		.hero-search-kbd {
			display: none;
		}

	}

	@media (max-width: 480px) {
		.home {
			padding: 0 16px;
			padding-bottom: 80px;
		}

		.hero {
			padding: 48px 0 32px;
		}

		.hero-headline {
			font-size: 28px;
			line-height: 1.2;
		}

		.hero-subtitle {
			font-size: 15px;
		}

		.hero-search {
			height: 48px;
			margin-top: 24px;
		}

		.category-card {
			padding: 16px;
		}

		.recent-card {
			width: 180px;
		}
	}
</style>
