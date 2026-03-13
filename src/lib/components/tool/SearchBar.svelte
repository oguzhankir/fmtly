<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { ChevronUp, ChevronDown, X, Filter } from 'lucide-svelte';
	import type { TreeNode } from '$engines/json/types.js';
	import { t } from '$lib/stores/language.js';

	type SearchTab = 'keys' | 'values' | 'path' | 'regex';

	let {
		nodes = [],
		onmatchchange = (_ids: Set<string>, _currentId: string) => {},
		onfilterchange = (_active: boolean) => {},
		visible = $bindable(false)
	}: {
		nodes?: TreeNode[];
		onmatchchange?: (matchIds: Set<string>, currentId: string) => void;
		onfilterchange?: (active: boolean) => void;
		visible?: boolean;
	} = $props();

	let query = $state('');
	let activeTab = $state<SearchTab>('keys');
	let filterMode = $state(false);
	let inputEl: HTMLInputElement | undefined = $state(undefined);

	let matchIds = $state<string[]>([]);
	let currentIndex = $state(0);

	function handleKeydown(event: KeyboardEvent): void {
		if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
			event.preventDefault();
			visible = !visible;
			if (visible) {
				setTimeout(() => inputEl?.focus(), 0);
			} else {
				resetSearch();
			}
		}
		if (event.key === 'Escape' && visible) {
			event.preventDefault();
			visible = false;
			resetSearch();
		}
	}

	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
	});

	onDestroy(() => {
		if (browser) {
			document.removeEventListener('keydown', handleKeydown);
		}
	});

	function resetSearch(): void {
		query = '';
		matchIds = [];
		currentIndex = 0;
		onmatchchange(new Set(), '');
		onfilterchange(false);
		filterMode = false;
	}

	function collectAll(nodeList: TreeNode[]): TreeNode[] {
		const flat: TreeNode[] = [];
		function walk(n: TreeNode): void {
			flat.push(n);
			for (const child of n.children) walk(child);
		}
		for (const n of nodeList) walk(n);
		return flat;
	}

	$effect(() => {
		if (!query.trim()) {
			matchIds = [];
			currentIndex = 0;
			onmatchchange(new Set(), '');
			return;
		}

		const allNodes = collectAll(nodes);
		const found: string[] = [];

		for (const n of allNodes) {
			if (matchesNode(n, query, activeTab)) {
				found.push(n.id);
			}
		}

		matchIds = found;
		currentIndex = found.length > 0 ? 0 : -1;
		onmatchchange(new Set(found), found[0] ?? '');
	});

	$effect(() => {
		onfilterchange(filterMode);
	});

	function matchesNode(node: TreeNode, q: string, tab: SearchTab): boolean {
		const lower = q.toLowerCase();

		if (tab === 'regex') {
			try {
				const re = new RegExp(q, 'i');
				return re.test(node.key) || re.test(formatVal(node));
			} catch {
				return false;
			}
		}

		if (tab === 'keys') {
			return node.key.toLowerCase().includes(lower);
		}

		if (tab === 'values') {
			return formatVal(node).toLowerCase().includes(lower);
		}

		if (tab === 'path') {
			return node.path.toLowerCase().includes(lower);
		}

		return false;
	}

	function formatVal(node: TreeNode): string {
		if (node.value === null) return 'null';
		if (typeof node.value === 'string') return node.value;
		if (typeof node.value === 'number' || typeof node.value === 'boolean') return String(node.value);
		return '';
	}

	function goNext(): void {
		if (matchIds.length === 0) return;
		currentIndex = (currentIndex + 1) % matchIds.length;
		onmatchchange(new Set(matchIds), matchIds[currentIndex]);
	}

	function goPrev(): void {
		if (matchIds.length === 0) return;
		currentIndex = (currentIndex - 1 + matchIds.length) % matchIds.length;
		onmatchchange(new Set(matchIds), matchIds[currentIndex]);
	}

	function handleInputKeydown(event: KeyboardEvent): void {
		if (event.key === 'Enter') {
			event.shiftKey ? goPrev() : goNext();
		}
	}

	const tabs: { key: SearchTab; label: string }[] = [
		{ key: 'keys', label: $t('ui.search.tabs.keys', 'Keys') },
		{ key: 'values', label: $t('ui.search.tabs.values', 'Values') },
		{ key: 'path', label: $t('ui.search.tabs.path', 'Path') },
		{ key: 'regex', label: $t('ui.search.tabs.regex', 'Regex') }
	];
</script>

{#if visible}
	<div class="search-bar">
		<!-- Tabs -->
		<div class="search-tabs">
			{#each tabs as tab}
				<button
					class="search-tab"
					class:search-tab--active={activeTab === tab.key}
					onclick={() => (activeTab = tab.key)}
				>
					{tab.label}
				</button>
			{/each}
		</div>

		<!-- Input row -->
		<div class="search-input-row">
			<input
				bind:this={inputEl}
				bind:value={query}
				onkeydown={handleInputKeydown}
				placeholder={($t as any)('ui.search.placeholder', 'Search {{tab}}…', { tab: activeTab })}
				class="search-input"
				type="text"
				spellcheck="false"
			/>

			<!-- Match count -->
			{#if query.trim()}
				<span class="search-count">
					{matchIds.length > 0 ? `${currentIndex + 1} / ${matchIds.length}` : '0 / 0'}
				</span>
			{/if}

			<!-- Nav arrows -->
			<button class="search-nav-btn" onclick={goPrev} aria-label={$t('ui.search.aria.previous', 'Previous match')} disabled={matchIds.length === 0}>
				<ChevronUp size={14} />
			</button>
			<button class="search-nav-btn" onclick={goNext} aria-label={$t('ui.search.aria.next', 'Next match')} disabled={matchIds.length === 0}>
				<ChevronDown size={14} />
			</button>

			<!-- Filter toggle -->
			<button
				class="search-nav-btn"
				class:search-filter-active={filterMode}
				onclick={() => (filterMode = !filterMode)}
				aria-label={$t('ui.search.aria.filter', 'Toggle filter mode')}
				title={$t('ui.search.aria.filter_hint', 'Filter: hide non-matching branches')}
			>
				<Filter size={14} />
			</button>

			<!-- Close -->
			<button class="search-nav-btn" onclick={() => { visible = false; resetSearch(); }} aria-label={$t('ui.search.aria.close', 'Close search')}>
				<X size={14} />
			</button>
		</div>
	</div>
{/if}

<style>
	.search-bar {
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		padding: 4px 8px;
	}

	.search-tabs {
		display: flex;
		gap: 2px;
		margin-bottom: 4px;
	}

	.search-tab {
		background: none;
		border: none;
		color: var(--text-tertiary);
		font-size: var(--text-xs);
		font-family: var(--font-sans);
		padding: 2px 8px;
		border-radius: var(--radius-sm);
		cursor: pointer;
		transition: color 100ms, background-color 100ms;
	}

	.search-tab:hover {
		color: var(--text-secondary);
	}

	.search-tab--active {
		background: var(--bg-surface-hover);
		color: var(--text-primary);
	}

	.search-input-row {
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.search-input {
		flex: 1;
		background: var(--bg-inset);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-sm);
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		padding: 3px 8px;
		outline: none;
	}

	.search-input:focus {
		border-color: var(--border-focus);
	}

	.search-count {
		color: var(--text-tertiary);
		font-size: var(--text-xs);
		font-family: var(--font-mono);
		white-space: nowrap;
		min-width: 48px;
		text-align: center;
	}

	.search-nav-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		border: none;
		background: none;
		color: var(--text-tertiary);
		border-radius: var(--radius-sm);
		cursor: pointer;
		padding: 0;
		flex-shrink: 0;
	}

	.search-nav-btn:hover:not(:disabled) {
		background: var(--bg-surface-hover);
		color: var(--text-primary);
	}

	.search-nav-btn:disabled {
		opacity: 0.3;
		cursor: default;
	}

	.search-filter-active {
		color: var(--bg-accent);
		background: var(--bg-accent-subtle);
	}
</style>
