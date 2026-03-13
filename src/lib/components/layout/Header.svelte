<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getToolsByCategory } from '$registry';
	import { getAllCategoryMeta } from '$registry/categories.js';
	import { localizeCategoryMetas } from '$lib/registry/localized.js';
	import { localizePath, replaceLocaleInPathname, stripLocalePrefix } from '$lib/utils/locale-routing.js';
	import { theme, toggleTheme } from '$stores/settings.store';
	import { currentLanguageInfo, locale, t } from '$stores/language';
	import { Moon, Sun, Search, Menu, X, Github } from 'lucide-svelte';
	import LanguageSelector from '../../../components/LanguageSelector.svelte';

	type NavCategory = {
		label: string;
		slug: string;
	};

	const navCategoryOrder: string[] = [
		'json',
		'xml',
		'yaml',
		'text',
		'crypto',
		'web',
		'code',
		'csv',
		'toml',
		'number',
		'encode',
		'color',
		'pdf',
		'image',
		'file',
		'qr',
		'generate'
	];

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);
	let searchShortcut = $state('');
	let showLanguageSelector = $state(false);

	let {
		onOpenCommandPalette = () => {}
	}: {
		onOpenCommandPalette?: () => void;
	} = $props();

	let currentPath = $derived($page.url.pathname);
	let currentLocale = $derived($page.params.lang ?? 'en');
	let navCategories = $derived.by<NavCategory[]>(() => {
		const categoryMap = new Map(
			localizeCategoryMetas(getAllCategoryMeta(), $t).map((category) => [category.slug, category.displayName])
		);
		return navCategoryOrder.map((slug) => ({
			slug,
			label: categoryMap.get(slug) ?? slug
		}));
	});

	function isActiveCategory(slug: string): boolean {
		const normalizedPath = stripLocalePrefix(currentPath);
		return normalizedPath === `/${slug}` || normalizedPath.startsWith(`/${slug}/`);
	}

	function handleLanguageSelectorOpen(): void {
		locale.set(currentLocale);
		showLanguageSelector = true;
	}

	async function handleLanguageChange(code: string): Promise<void> {
		await goto(replaceLocaleInPathname(currentPath, code), {
			keepFocus: true,
			noScroll: true
		});
	}

	function handleWindowKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape') {
			mobileMenuOpen = false;
		}
	}

	function handleThemeToggle(): void {
		toggleTheme();
	}

	function handleScroll(): void {
		scrolled = window.scrollY > 0;
	}

	onMount(() => {
		const platform = navigator.platform ?? '';
		const userAgent = navigator.userAgent ?? '';
		const isMac = platform.includes('Mac') || userAgent.includes('Mac');
		searchShortcut = isMac ? '⌘K' : 'Ctrl+K';
	});
</script>

<svelte:window onscroll={handleScroll} onkeydown={handleWindowKeydown} />

<header
	class="header"
	class:header--scrolled={scrolled}
>
	<!-- Left: Logo -->
	<a href={localizePath('/', currentLocale)} class="header-logo" onclick={() => { mobileMenuOpen = false; }}>
		<img src="/favicon.svg" alt="" class="header-logo-icon" />
		<span class="header-logo-name">fmtly</span>
	</a>

	<!-- Center: Category pills (desktop ≥1024px) -->
	<nav class="header-nav" aria-label="Category navigation">
		<div class="header-nav-scroll">
			{#each navCategories as navCat}
				<a
					href={localizePath(`/${navCat.slug}`, currentLocale)}
					class="header-pill"
					class:header-pill--active={isActiveCategory(navCat.slug)}
				>
					{navCat.label}
				</a>
			{/each}
		</div>
	</nav>

	<!-- Right: Actions -->
	<div class="header-actions">
		<!-- Search (⌘K) -->
		<button
			class="header-action-btn"
			onclick={onOpenCommandPalette}
			aria-label={$t('search_tools_label', 'Search tools')}
		>
			<Search size={16} />
			{#if searchShortcut}
				<kbd class="header-kbd">{searchShortcut}</kbd>
			{/if}
		</button>

		<!-- Language selector -->
		<button
			class="header-action-btn"
			onclick={handleLanguageSelectorOpen}
			aria-label={$t('select_language', 'Select language')}
			title={$currentLanguageInfo?.nativeName || $t('select_language', 'Select language')}
		>
			{$currentLanguageInfo?.flag || '🌐'}
		</button>

		<!-- Theme toggle -->
		<button
			class="header-action-btn"
			onclick={handleThemeToggle}
			aria-label={
				$theme === 'dark'
					? $t('switch_to_light_mode', 'Switch to light mode')
					: $t('switch_to_dark_mode', 'Switch to dark mode')
			}
		>
			<Sun
				size={18}
				class="header-theme-icon {$theme === 'dark' ? 'header-theme-icon--visible' : 'header-theme-icon--hidden'}"
			/>
			<Moon
				size={18}
				class="header-theme-icon {$theme === 'dark' ? 'header-theme-icon--hidden' : 'header-theme-icon--visible'}"
			/>
		</button>

		<!-- GitHub -->
		<a
			href="https://github.com/oguzhankir/fmtly"
			target="_blank"
			rel="noopener noreferrer"
			class="header-action-btn"
			aria-label={$t('github_repository', 'GitHub repository')}
		>
			<Github size={18} />
		</a>

		<!-- Mobile hamburger -->
		<button
			class="header-hamburger"
			onclick={() => { mobileMenuOpen = !mobileMenuOpen; }}
			aria-label={mobileMenuOpen ? $t('close_menu', 'Close menu') : $t('open_menu', 'Open menu')}
		>
			{#if mobileMenuOpen}
				<X size={20} />
			{:else}
				<Menu size={20} />
			{/if}
		</button>
	</div>
</header>

<!-- Language Selector Modal -->
<LanguageSelector bind:show={showLanguageSelector} onselect={handleLanguageChange} />

<!-- Mobile overlay menu -->
{#if mobileMenuOpen}
	<div class="mobile-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
		<div class="mobile-menu">
			<div class="mobile-search-row">
				<button class="mobile-search-btn" onclick={() => { mobileMenuOpen = false; onOpenCommandPalette(); }}>
					<Search size={16} />
					<span>{$t('search_tools', 'Search tools…')}</span>
				</button>
			</div>
			<nav class="mobile-categories">
				{#each navCategories as navCat}
					<a
						href={localizePath(`/${navCat.slug}`, currentLocale)}
						class="mobile-category-link"
						class:mobile-category-link--active={isActiveCategory(navCat.slug)}
						onclick={() => { mobileMenuOpen = false; }}
					>
						{navCat.label}
						<span class="mobile-category-count">
							{getToolsByCategory(navCat.slug).length}
						</span>
					</a>
				{/each}
			</nav>
		</div>
	</div>
{/if}

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: var(--z-sticky);
		display: flex;
		align-items: center;
		height: var(--header-height);
		padding: 0 16px;
		background: var(--bg-surface);
		border-bottom: 1px solid var(--border-faint);
		transition: backdrop-filter 200ms ease;
	}

	.header--scrolled {
		background: rgba(15, 15, 15, 0.85);
		backdrop-filter: blur(12px);
	}

	:global([data-theme="light"]) .header--scrolled {
		background: rgba(255, 255, 255, 0.85);
	}

	/* Logo */
	.header-logo {
		display: flex;
		align-items: center;
		gap: 8px;
		text-decoration: none;
		flex-shrink: 0;
	}

	.header-logo-icon {
		width: 22px;
		height: 22px;
		display: block;
		flex-shrink: 0;
	}

	.header-logo-name {
		color: var(--text-primary);
		font-family: var(--font-ui);
		font-size: 14px;
		font-weight: 600;
	}

	/* Nav */
	.header-nav {
		flex: 1;
		display: flex;
		align-items: center;
		min-width: 0;
		overflow: hidden;
		margin: 0 12px;
	}

	.header-nav-scroll {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 4px;
		overflow-x: auto;
		overflow-y: hidden;
		scrollbar-width: none;
		-ms-overflow-style: none;
		-webkit-overflow-scrolling: touch;
	}

	.header-nav-scroll::-webkit-scrollbar {
		display: none;
	}

	.header-pill {
		display: inline-flex;
		align-items: center;
		height: 28px;
		padding: 0 10px;
		border-radius: 6px;
		border: 1px solid transparent;
		background: transparent;
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 500;
		cursor: pointer;
		white-space: nowrap;
		text-decoration: none;
		flex-shrink: 0;
		transition: background 100ms ease, color 100ms ease, border-color 100ms ease;
	}

	.header-pill:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.header-pill--active {
		background: var(--bg-active);
		color: var(--text-primary);
		border-color: var(--border-default);
	}

	/* Actions */
	.header-actions {
		display: flex;
		align-items: center;
		gap: 4px;
		flex-shrink: 0;
	}

	.header-action-btn {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		width: 32px;
		height: 32px;
		border: none;
		background: transparent;
		color: var(--text-secondary);
		border-radius: 6px;
		cursor: pointer;
		text-decoration: none;
		transition: background 100ms ease, color 100ms ease;
	}

	.header-action-btn:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.header-kbd {
		display: none;
		font-family: var(--font-ui);
		font-size: 11px;
		color: var(--text-muted);
		background: var(--bg-subtle);
		border: 1px solid var(--border-subtle);
		border-radius: 4px;
		padding: 1px 5px;
		line-height: 1;
	}

	/* Theme icons */
	:global(.header-theme-icon) {
		position: absolute;
		transition: transform 200ms ease, opacity 200ms ease;
	}

	:global(.header-theme-icon--visible) {
		opacity: 1;
		transform: rotate(0deg) scale(1);
	}

	:global(.header-theme-icon--hidden) {
		opacity: 0;
		transform: rotate(90deg) scale(0);
	}

	/* Mobile hamburger */
	.header-hamburger {
		display: none;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border: none;
		background: transparent;
		color: var(--text-secondary);
		border-radius: 6px;
		cursor: pointer;
	}

	.header-hamburger:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	/* Mobile overlay */
	.mobile-overlay {
		position: fixed;
		inset: 0;
		top: var(--header-height);
		z-index: var(--z-overlay);
		background: var(--bg-base);
		overflow-y: auto;
	}

	.mobile-menu {
		padding: 16px;
	}

	.mobile-search-row {
		margin-bottom: 16px;
	}

	.mobile-search-btn {
		display: flex;
		align-items: center;
		gap: 8px;
		width: 100%;
		padding: 10px 14px;
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
		border-radius: 10px;
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 14px;
		cursor: pointer;
		text-align: left;
	}

	.mobile-categories {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.mobile-category-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 14px;
		border-radius: 8px;
		text-decoration: none;
		color: var(--text-secondary);
		font-size: 15px;
		font-weight: 500;
		transition: background 100ms ease;
	}

	.mobile-category-link:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.mobile-category-link--active {
		background: var(--bg-active);
		color: var(--text-primary);
	}

	.mobile-category-count {
		font-size: 12px;
		color: var(--text-muted);
		font-weight: 400;
	}

	/* Responsive */
	@media (max-width: 767px) {
		.header {
			height: 48px;
			padding: 0 12px;
		}

		.header-nav {
			display: none;
		}

		.header-kbd {
			display: none !important;
		}

		.header-hamburger {
			display: flex;
		}
	}

	@media (min-width: 768px) {
		.mobile-overlay {
			display: none;
		}

		.header-hamburger {
			display: none;
		}
	}

	@media (min-width: 1024px) {
		.header-action-btn:first-child {
			width: auto;
			padding: 0 10px;
		}

		.header-kbd {
			display: inline-block;
		}
	}

	@media (max-width: 1279px) {
		.header-nav-scroll {
			justify-content: flex-start;
		}
	}
</style>
