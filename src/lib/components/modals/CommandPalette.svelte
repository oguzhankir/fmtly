<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { get } from 'svelte/store';
	import { Search } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { getAllTools } from '$registry/index.js';
	import { localizeToolDefinitions } from '$registry/localized.js';
	import { locale, t } from '$stores/language';
	import type { ToolDefinition } from '$registry/types.js';
	import { localizePath } from '$lib/utils/locale-routing.js';

	let { open = $bindable(false) }: { open?: boolean } = $props();
	let query = $state('');
	let selectedIndex = $state(0);
	let inputEl = $state<HTMLInputElement | null>(null);

	let recentIds = $state<string[]>([]);

	let allTools = $derived(localizeToolDefinitions(getAllTools(), get(t)));

	let filteredTools = $derived.by<ToolDefinition[]>(() => {
		if (!query.trim()) {
			if (recentIds.length > 0) {
				return recentIds
					.map((id) => allTools.find((t) => t.id === id))
					.filter((t): t is ToolDefinition => t !== undefined);
			}
			return allTools.slice(0, 12);
		}
		const q = query.toLowerCase();
		return allTools.filter((tool) => {
			const searchStr = `${tool.displayName} ${tool.category} ${tool.primaryKeyword}`.toLowerCase();
			return searchStr.includes(q);
		});
	});

	function loadRecent(): void {
		try {
			const raw = localStorage.getItem('fmtly-recent-tools');
			if (raw) recentIds = JSON.parse(raw);
		} catch {
			recentIds = [];
		}
	}

	function openTool(tool: ToolDefinition): void {
		open = false;
		query = '';
		void goto(localizePath(`/${tool.category}/${tool.slug}`, get(locale)));
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape') {
			event.preventDefault();
			open = false;
			query = '';
			return;
		}

		const tools = filteredTools;
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			selectedIndex = Math.min(selectedIndex + 1, tools.length - 1);
		} else if (event.key === 'ArrowUp') {
			event.preventDefault();
			selectedIndex = Math.max(selectedIndex - 1, 0);
		} else if (event.key === 'Enter' && tools.length > 0) {
			event.preventDefault();
			openTool(tools[selectedIndex]);
		}
	}

	function handleOverlayClick(event: MouseEvent): void {
		if (event.target === event.currentTarget) {
			open = false;
			query = '';
		}
	}

	function handleGlobalKeydown(event: KeyboardEvent): void {
		if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
			event.preventDefault();
			open = !open;
			if (open) {
				query = '';
				selectedIndex = 0;
			}
		}
	}

	$effect(() => {
		if (open && browser) {
			loadRecent();
			selectedIndex = 0;
			setTimeout(() => inputEl?.focus(), 10);
		}
	});

	$effect(() => {
		query;
		selectedIndex = 0;
	});

	onMount(() => {
		document.addEventListener('keydown', handleGlobalKeydown);
	});

	onDestroy(() => {
		if (browser) document.removeEventListener('keydown', handleGlobalKeydown);
	});
</script>

{#if open}
	<div
		class="palette-overlay"
		onclick={handleOverlayClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-label={$t('ui.command_palette.title', 'Command palette')}
		tabindex="-1"
	>
		<div class="palette-modal">
			<div class="palette-search-row">
				<div class="search-input-wrapper">
					<Search class="search-icon" size={20} />
					<input
						bind:this={inputEl}
						type="text"
						placeholder={get(t)('ui.command_palette.placeholder', 'Search tools, categories, and formats…')}
						bind:value={query}
						onkeydown={handleKeydown}
					/>
				</div>
			</div>

			<div class="palette-results">
				{#if !query.trim() && recentIds.length > 0}
					<div class="palette-section-label">{$t('ui.command_palette.recent', 'Recent')}</div>
				{/if}

				{#each filteredTools as tool, i (tool.id)}
					<button
						class="palette-result"
						class:palette-result--active={i === selectedIndex}
						onclick={() => openTool(tool)}
						onmouseenter={() => { selectedIndex = i; }}
					>
						<div class="palette-result-left">
							<span class="palette-result-badge">{tool.category.toUpperCase()}</span>
							<span class="palette-result-name">{tool.displayName}</span>
						</div>
						<span class="palette-result-category">{tool.tagline}</span>
					</button>
				{:else}
					<div class="no-results">
						<p>{get(t)('ui.command_palette.no_results', 'No matching tools found')}</p>
					</div>
				{/each}
			</div>

			<div class="palette-footer">
				<span class="palette-hint"><kbd>↑↓</kbd> {$t('ui.command_palette.hint_navigate', 'Navigate')}</span>
				<span class="palette-hint"><kbd>↵</kbd> {$t('ui.command_palette.hint_open', 'Open')}</span>
				<span class="palette-hint"><kbd>esc</kbd> {$t('ui.command_palette.hint_close', 'Close')}</span>
			</div>
		</div>
	</div>
{/if}

<style>
	.palette-overlay {
		position: fixed;
		inset: 0;
		z-index: var(--z-modal);
		display: flex;
		align-items: flex-start;
		justify-content: center;
		padding-top: 20vh;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(4px);
	}

	.palette-modal {
		width: 560px;
		max-width: 90vw;
		max-height: 480px;
		display: flex;
		flex-direction: column;
		background: var(--bg-overlay);
		border: 1px solid var(--border-default);
		border-radius: 12px;
		box-shadow: var(--shadow-xl);
		overflow: hidden;
	}

	.palette-search-row {
		padding: 12px 16px;
		border-bottom: 1px solid var(--border-subtle);
	}

	.search-input-wrapper {
		display: flex;
		align-items: center;
		gap: 10px;
		width: 100%;
		min-width: 0;
	}

	.search-input-wrapper :global(svg) {
		flex-shrink: 0;
		color: var(--text-muted);
	}

	.search-input-wrapper input {
		width: 100%;
		min-width: 0;
		height: 36px;
		border: none;
		background: transparent;
		color: var(--text-primary);
		font-family: var(--font-ui);
		font-size: 14px;
		outline: none;
	}

	.search-input-wrapper input::placeholder {
		color: var(--text-tertiary);
	}


	.palette-results {
		flex: 1;
		overflow-y: auto;
		padding: 6px;
		min-height: 0;
		max-height: 380px;
	}

	.palette-section-label {
		padding: 8px 12px 4px;
		font-size: 11px;
		font-weight: 500;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.palette-result {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 40px;
		padding: 0 12px;
		border: none;
		border-radius: 8px;
		background: transparent;
		cursor: pointer;
		text-align: left;
		font-family: var(--font-ui);
		transition: background 60ms ease;
	}

	.palette-result:hover,
	.palette-result--active {
		background: var(--bg-hover);
	}

	.palette-result-left {
		display: flex;
		align-items: center;
		gap: 8px;
		min-width: 0;
		flex: 1;
	}

	.palette-result-badge {
		display: inline-block;
		padding: 1px 6px;
		border-radius: 4px;
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 0.03em;
		color: var(--accent);
		background: var(--accent-dim);
		flex-shrink: 0;
	}

	.palette-result-name {
		font-size: 13px;
		font-weight: 500;
		color: var(--text-primary);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.palette-result-category {
		font-size: 11px;
		color: var(--text-muted);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 200px;
		flex-shrink: 0;
		margin-left: 8px;
	}

	.no-results {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 120px;
		padding: 24px 16px;
		color: var(--text-muted);
		font-size: 13px;
		text-align: center;
	}


	.palette-footer {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 16px;
		padding: 8px 16px;
		border-top: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.palette-hint {
		font-size: 11px;
		color: var(--text-muted);
		display: flex;
		align-items: center;
		gap: 4px;
	}

	.palette-hint kbd {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 18px;
		height: 18px;
		padding: 0 4px;
		font-family: var(--font-ui);
		font-size: 10px;
		color: var(--text-secondary);
		background: var(--bg-subtle);
		border: 1px solid var(--border-subtle);
		border-radius: 3px;
		line-height: 1;
	}
</style>
