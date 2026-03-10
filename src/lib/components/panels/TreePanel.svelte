<script lang="ts">
	import type { TreeNode } from '$engines/json/index.js';
	import { jsonTree } from '$stores/json.store';
	import TreeNodeComponent from './TreeNode.svelte';
	import { ChevronsDownUp, ChevronsUpDown, Search } from 'lucide-svelte';

	let expandedNodes = $state(new Set<string>());
	let searchQuery = $state('');
	let searchInputEl: HTMLInputElement | undefined = $state(undefined);

	let currentTree = $derived($jsonTree);

	$effect(() => {
		if (currentTree.length > 0) {
			expandToDepth(1);
		}
	});

	function collectNodeIds(nodes: TreeNode[], maxDepth: number): string[] {
		const ids: string[] = [];
		function walk(node: TreeNode): void {
			if ((node.type === 'object' || node.type === 'array') && node.depth < maxDepth) {
				ids.push(node.id);
				for (const child of node.children) {
					walk(child);
				}
			}
		}
		for (const node of nodes) {
			walk(node);
		}
		return ids;
	}

	function collectAllExpandableIds(nodes: TreeNode[]): string[] {
		const ids: string[] = [];
		function walk(node: TreeNode): void {
			if (node.type === 'object' || node.type === 'array') {
				ids.push(node.id);
				for (const child of node.children) {
					walk(child);
				}
			}
		}
		for (const node of nodes) {
			walk(node);
		}
		return ids;
	}

	function expandToDepth(depth: number): void {
		const ids = collectNodeIds(currentTree, depth);
		expandedNodes = new Set(ids);
	}

	function expandAll(): void {
		const ids = collectAllExpandableIds(currentTree);
		expandedNodes = new Set(ids);
	}

	function collapseAll(): void {
		expandedNodes = new Set();
	}

	function handleToggle(id: string): void {
		const next = new Set(expandedNodes);
		if (next.has(id)) {
			next.delete(id);
		} else {
			next.add(id);
		}
		expandedNodes = next;
	}

	function getMaxDepth(nodes: TreeNode[]): number {
		let max = 0;
		function walk(node: TreeNode): void {
			if (node.depth > max) max = node.depth;
			for (const child of node.children) {
				walk(child);
			}
		}
		for (const node of nodes) {
			walk(node);
		}
		return max;
	}

	let maxDepth = $derived(getMaxDepth(currentTree));

	let filteredTree = $derived.by(() => {
		if (!searchQuery.trim()) return currentTree;
		const q = searchQuery.toLowerCase();
		return filterNodes(currentTree, q);
	});

	function filterNodes(nodes: TreeNode[], query: string): TreeNode[] {
		const result: TreeNode[] = [];
		for (const node of nodes) {
			const keyMatch = node.key.toLowerCase().includes(query);
			const valueMatch =
				node.type !== 'object' &&
				node.type !== 'array' &&
				String(node.value).toLowerCase().includes(query);
			const filteredChildren = filterNodes(node.children, query);

			if (keyMatch || valueMatch || filteredChildren.length > 0) {
				result.push({
					...node,
					children: filteredChildren.length > 0 ? filteredChildren : node.children
				});

				if (filteredChildren.length > 0 || keyMatch) {
					const next = new Set(expandedNodes);
					next.add(node.id);
					expandedNodes = next;
				}
			}
		}
		return result;
	}

	export function setDepth(depth: number): void {
		expandToDepth(depth);
	}

	export function expand(): void {
		expandAll();
	}

	export function collapse(): void {
		collapseAll();
	}
</script>

<div class="flex h-full w-full flex-col" role="region" aria-label="JSON Tree View">
	<!-- Controls bar -->
	<div class="flex shrink-0 items-center gap-[var(--space-2)] border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-1)]">
		<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-tertiary)]">Tree</span>

		<div class="flex items-center gap-[var(--space-1)]">
			<button
				onclick={expandAll}
				class="flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] px-[var(--space-1)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-muted)] transition-colors duration-[80ms] hover:bg-[var(--bg-hover)] hover:text-[var(--text-secondary)]"
				aria-label="Expand all"
				title="Expand all"
			>
				<ChevronsUpDown size={12} />
			</button>
			<button
				onclick={collapseAll}
				class="flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] px-[var(--space-1)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-muted)] transition-colors duration-[80ms] hover:bg-[var(--bg-hover)] hover:text-[var(--text-secondary)]"
				aria-label="Collapse all"
				title="Collapse all"
			>
				<ChevronsDownUp size={12} />
			</button>

			<!-- Depth buttons -->
			{#each Array.from({ length: Math.min(maxDepth + 1, 5) }, (_, i) => i + 1) as depth}
				<button
					onclick={() => expandToDepth(depth)}
					class="flex h-[20px] w-[20px] items-center justify-center rounded-[var(--radius-sm)] text-[length:var(--text-xs)] text-[var(--text-muted)] transition-colors duration-[80ms] hover:bg-[var(--bg-hover)] hover:text-[var(--text-secondary)]"
					aria-label="Expand to depth {depth}"
					title="Expand to depth {depth}"
				>
					{depth}
				</button>
			{/each}
		</div>

		<!-- Search -->
		<div class="relative ml-auto flex items-center">
			<Search size={11} class="absolute left-[var(--space-1)] text-[var(--text-muted)]" />
			<input
				bind:this={searchInputEl}
				bind:value={searchQuery}
				type="text"
				placeholder="Search keys…"
				class="h-[22px] w-[120px] rounded-[var(--radius-sm)] border border-[var(--border-default)] bg-[var(--bg-inset)] pl-[20px] pr-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--border-focus)] focus:outline-none"
			/>
		</div>
	</div>

	<!-- Tree content -->
	<div class="flex-1 overflow-auto py-[var(--space-1)]" role="tree">
		{#if filteredTree.length > 0}
			{#each filteredTree as node (node.id)}
				<TreeNodeComponent
					{node}
					{expandedNodes}
					onToggle={handleToggle}
					{maxDepth}
				/>
			{/each}
		{:else if currentTree.length === 0}
			<div class="flex h-full items-center justify-center">
				<p class="text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
					Paste JSON to see tree view
				</p>
			</div>
		{:else}
			<div class="flex h-full items-center justify-center">
				<p class="text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
					No matches found
				</p>
			</div>
		{/if}
	</div>
</div>
