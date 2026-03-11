<script lang="ts">
	import { createVirtualizer } from '@tanstack/svelte-virtual';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { ChevronsDownUp, ChevronsUpDown } from 'lucide-svelte';
	import { formatByteSize, inputByteSize } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import TreeNodeComponent from './TreeNode.svelte';
	import SearchBar from '$components/tool/SearchBar.svelte';
	import type { TreeNode } from '$engines/json/types.js';

	let {
		nodes = []
	}: {
		nodes?: TreeNode[];
	} = $props();

	let searchVisible = $state(false);
	let searchMatchIds = $state(new Set<string>());
	let currentMatchId = $state('');
	let filterActive = $state(false);
	let activePath = $state('root');
	let scrollElement: HTMLDivElement | undefined = $state(undefined);
	const LARGE_FILE_THRESHOLD = 200 * 1024;
	let isLargeFile = $derived($inputByteSize > LARGE_FILE_THRESHOLD);
	let largeFileSummary = $derived(`Large file — parsing ${formatByteSize($inputByteSize)}. Showing top 2 levels; expand nodes to load children.`);

	const expandedNodes = writable<Set<string>>(new Set());
	setContext('expandedNodes', expandedNodes);
	setContext('setActivePath', (path: string) => {
		activePath = path || 'root';
	});

	$effect(() => {
		if (nodes.length > 0) {
			expandToDepth(isLargeFile ? 2 : 1);
		}
	});

	function expandToDepth(maxDepth: number): void {
		expandedNodes.update(() => {
			const next = new Set<string>();
			function walk(nodeList: TreeNode[]): void {
				for (const n of nodeList) {
					if (n.depth <= maxDepth && n.children.length > 0) {
						next.add(n.id);
						walk(n.children);
					}
				}
			}
			walk(nodes);
			return next;
		});
	}

	export function setDepth(depth: number): void {
		expandToDepth(depth);
	}

	function expandAll(): void {
		expandedNodes.update(() => {
			const next = new Set<string>();
			function walk(nodeList: TreeNode[]): void {
				for (const n of nodeList) {
					if (n.children.length > 0) {
						next.add(n.id);
						walk(n.children);
					}
				}
			}
			walk(nodes);
			return next;
		});
	}

	export function expand(): void {
		expandAll();
	}

	function collapseAll(): void {
		expandedNodes.set(new Set());
	}

	export function collapse(): void {
		collapseAll();
	}

	function handleMatchChange(ids: Set<string>, currentId: string): void {
		searchMatchIds = ids;
		currentMatchId = currentId;

		if (currentId) {
			ensureNodeVisible(currentId);
		}
	}

	function handleFilterChange(active: boolean): void {
		filterActive = active;
	}

	function ensureNodeVisible(nodeId: string): void {
		const ancestors = findAncestors(nodes, nodeId) ?? [];
		if (ancestors.length > 0) {
			expandedNodes.update((set) => {
				const next = new Set(set);
				for (const id of ancestors) {
					next.add(id);
				}
				return next;
			});
		}
	}

	function findAncestors(nodeList: TreeNode[], targetId: string): string[] | null {
		for (const n of nodeList) {
			if (n.id === targetId) return [];
			if (n.children.length > 0) {
				const path = findAncestors(n.children, targetId);
				if (path !== null) {
					return [n.id, ...path];
				}
			}
		}
		return null;
	}

	function getVisibleNodes(): TreeNode[] {
		if (!filterActive || searchMatchIds.size === 0) return nodes;
		return filterNodes(nodes, searchMatchIds);
	}

	function filterNodes(nodeList: TreeNode[], matchSet: Set<string>): TreeNode[] {
		const filtered: TreeNode[] = [];
		for (const n of nodeList) {
			if (matchSet.has(n.id)) {
				filtered.push(n);
			} else if (n.children.length > 0) {
				const filteredChildren = filterNodes(n.children, matchSet);
				if (filteredChildren.length > 0) {
					filtered.push({ ...n, children: filteredChildren, childCount: filteredChildren.length });
				}
			}
		}
		return filtered;
	}

	let visibleNodes = $derived(getVisibleNodes());
	let flattenedNodes = $derived.by(() => {
		const expanded = $expandedNodes;
		const flat: TreeNode[] = [];
		function walk(nodeList: TreeNode[]): void {
			for (const node of nodeList) {
				flat.push(node);
				if (node.children.length > 0 && expanded.has(node.id)) {
					walk(node.children);
				}
			}
		}
		walk(visibleNodes);
		return flat;
	});
	let rowVirtualizer = $derived(
		createVirtualizer<HTMLDivElement, HTMLDivElement>({
			count: flattenedNodes.length,
			getScrollElement: () => scrollElement ?? null,
			estimateSize: () => 28,
			overscan: 12
		})
	);

	async function copyActivePath(): Promise<void> {
		await navigator.clipboard.writeText(activePath);
		addToast('success', `Copied — ${activePath}`);
	}

	$effect(() => {
		if (!currentMatchId) return;
		const nextIndex = flattenedNodes.findIndex((node) => node.id === currentMatchId);
		if (nextIndex >= 0) {
			$rowVirtualizer.scrollToIndex(nextIndex, { align: 'center' });
		}
	});
</script>

<div class="tree-view" role="tree">
	<button type="button" class="tree-pathbar" onclick={() => void copyActivePath()}>
		{#each activePath.split('.').filter(Boolean) as segment, index}
			{#if index > 0}
				<span class="tree-pathbar__sep">›</span>
			{/if}
			<span class="tree-pathbar__segment">{segment}</span>
		{/each}
	</button>

	<!-- Toolbar -->
	<div class="tree-toolbar">
		<div class="tree-toolbar-group">
			<button class="tree-toolbar-btn" onclick={expandAll} title="Expand all">
				<ChevronsUpDown size={14} />
				<span>Expand</span>
			</button>
			<button class="tree-toolbar-btn" onclick={collapseAll} title="Collapse all">
				<ChevronsDownUp size={14} />
				<span>Collapse</span>
			</button>
		</div>

		<div class="tree-toolbar-group tree-depth-buttons">
			{#each [1, 2, 3, 4, 5] as depth}
				<button
					class="tree-depth-btn"
					onclick={() => expandToDepth(depth)}
					title="Expand to depth {depth}"
				>
					{depth}
				</button>
			{/each}
		</div>

		<div class="tree-toolbar-group">
			<button
				class="tree-toolbar-btn"
				onclick={() => { searchVisible = !searchVisible; }}
				title="Search (Ctrl+K)"
			>
				<span>Search</span>
			</button>
		</div>
	</div>

	<!-- Search bar -->
	<SearchBar
		{nodes}
		bind:visible={searchVisible}
		onmatchchange={handleMatchChange}
		onfilterchange={handleFilterChange}
	/>

	{#if isLargeFile}
		<div class="tree-banner">{largeFileSummary}</div>
	{/if}

	<!-- Tree content -->
	<div class="tree-content" bind:this={scrollElement}>
		{#if flattenedNodes.length > 0}
			<div
				class="tree-content__inner"
				style={`height: ${$rowVirtualizer.getTotalSize()}px; position: relative; width: 100%;`}
			>
				{#each $rowVirtualizer.getVirtualItems() as virtualRow (virtualRow.key)}
					<div
						class="tree-virtual-row"
						style={`position: absolute; top: 0; left: 0; width: 100%; transform: translateY(${virtualRow.start}px);`}
					>
						<TreeNodeComponent
							node={flattenedNodes[virtualRow.index]}
							{searchMatchIds}
							{currentMatchId}
						/>
					</div>
				{/each}
			</div>
		{:else if filterActive}
			<div class="tree-content__empty">No matches found.</div>
		{:else if nodes.length === 0}
			<div class="tree-content__empty"></div>
		{:else}
			{#each visibleNodes as node (node.id)}
				<TreeNodeComponent {node} {searchMatchIds} {currentMatchId} />
			{/each}
		{/if}
	</div>
</div>

<style>
	.tree-view {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
	}

	.tree-toolbar {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 4px 8px;
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		flex-shrink: 0;
	}

	.tree-pathbar {
		display: flex;
		align-items: center;
		gap: 6px;
		min-height: 28px;
		padding: 0 var(--space-3);
		border: none;
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		color: var(--text-secondary);
		font-family: var(--font-mono);
		font-size: 12px;
		cursor: pointer;
		text-align: left;
		overflow-x: auto;
	}

	.tree-pathbar__sep {
		color: var(--text-muted);
	}

	.tree-pathbar__segment {
		white-space: nowrap;
	}

	.tree-toolbar-group {
		display: flex;
		align-items: center;
		gap: 2px;
	}

	.tree-toolbar-btn {
		display: flex;
		align-items: center;
		gap: 4px;
		background: none;
		border: none;
		color: var(--text-tertiary);
		font-size: var(--text-xs);
		font-family: var(--font-sans);
		padding: 3px 8px;
		border-radius: var(--radius-sm);
		cursor: pointer;
		white-space: nowrap;
	}

	.tree-toolbar-btn:hover {
		background: var(--bg-surface-hover);
		color: var(--text-primary);
	}

	.tree-depth-buttons {
		border-left: 1px solid var(--border-subtle);
		border-right: 1px solid var(--border-subtle);
		padding: 0 6px;
		margin: 0 2px;
	}

	.tree-depth-btn {
		width: 22px;
		height: 22px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: none;
		border: none;
		color: var(--text-tertiary);
		font-size: var(--text-xs);
		font-family: var(--font-mono);
		border-radius: var(--radius-sm);
		cursor: pointer;
		padding: 0;
	}

	.tree-depth-btn:hover {
		background: var(--bg-surface-hover);
		color: var(--text-primary);
	}

	.tree-content {
		flex: 1;
		overflow: auto;
		padding: 4px 0;
	}

	.tree-banner {
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--accent-dim);
		color: var(--text-primary);
		font-family: var(--font-ui);
		font-size: 12px;
	}

	.tree-content__inner {
		min-width: 100%;
	}

	.tree-content__empty {
		padding: var(--space-4);
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 12px;
	}
</style>
