<script lang="ts">
	import type { TreeNode } from '$engines/json/index.js';
	import { addToast } from '$stores/toast.store';
	import { ChevronRight, Copy } from 'lucide-svelte';
	import Self from './TreeNode.svelte';

	let {
		node,
		expandedNodes,
		onToggle,
		maxDepth
	}: {
		node: TreeNode;
		expandedNodes: Set<string>;
		onToggle: (id: string) => void;
		maxDepth: number;
	} = $props();

	let isExpandable = $derived(node.type === 'object' || node.type === 'array');
	let isExpanded = $derived(expandedNodes.has(node.id));
	let showChildren = $derived(isExpandable && isExpanded);
	let isHovered = $state(false);

	function handleToggle(): void {
		onToggle(node.id);
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			if (isExpandable) handleToggle();
		}
	}

	async function handleCopyPath(): Promise<void> {
		await navigator.clipboard.writeText(node.path);
		addToast('success', `Copied — ${node.path}`);
	}

	function getValueDisplay(n: TreeNode): string {
		if (n.type === 'string') {
			const str = n.value as string;
			if (str.length > 80) return `"${str.slice(0, 77)}…"`;
			return `"${str}"`;
		}
		if (n.type === 'null') return 'null';
		if (n.type === 'boolean' || n.type === 'number') return String(n.value);
		return '';
	}

	function getCountBadge(n: TreeNode): string {
		if (n.type === 'object') return `{ ${n.childCount} ${n.childCount === 1 ? 'key' : 'keys'} }`;
		if (n.type === 'array') return `[ ${n.childCount} ${n.childCount === 1 ? 'item' : 'items'} ]`;
		return '';
	}

	function getValueColorClass(n: TreeNode): string {
		switch (n.type) {
			case 'string':
				return 'text-[var(--syntax-string)]';
			case 'number':
				return 'text-[var(--syntax-number)]';
			case 'boolean':
				return 'text-[var(--syntax-boolean)]';
			case 'null':
				return 'text-[var(--syntax-null)]';
			default:
				return 'text-[var(--text-secondary)]';
		}
	}
</script>

<div
	class="tree-node"
	role="treeitem"
	aria-selected={false}
	aria-expanded={isExpandable ? isExpanded : undefined}
	aria-level={node.depth + 1}
	tabindex={node.depth === 0 ? 0 : -1}
	onkeydown={handleKeydown}
	onmouseenter={() => { isHovered = true; }}
	onmouseleave={() => { isHovered = false; }}
>
	<!-- Row -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="group flex min-h-[28px] cursor-default items-center rounded-[var(--radius-sm)] pr-[var(--space-2)] transition-colors duration-[80ms] hover:bg-[var(--bg-hover)]"
		style="padding-left: {node.depth * 16 + 4}px"
		onclick={isExpandable ? handleToggle : handleCopyPath}
		onkeydown={handleKeydown}
	>
		<!-- Expand arrow or spacer -->
		<span class="flex w-[16px] shrink-0 items-center justify-center">
			{#if isExpandable}
				<span
					class="inline-flex transition-transform duration-[var(--duration-normal)] {isExpanded ? 'rotate-90' : 'rotate-0'}"
				>
					<ChevronRight size={12} class="text-[var(--text-muted)]" />
				</span>
			{/if}
		</span>

		<!-- Key -->
		{#if node.key}
			<span class="mr-[2px] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--syntax-key)]">
				{node.key}
			</span>
			<span class="mr-[var(--space-1)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--syntax-bracket)]">:</span>
		{/if}

		<!-- Value or count badge -->
		{#if isExpandable}
			{#if !isExpanded}
				<span class="font-[family-name:var(--font-mono)] text-[length:11px] italic text-[var(--text-muted)]">
					{getCountBadge(node)}
				</span>
			{:else}
				<span class="font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--syntax-bracket)]">
					{node.type === 'object' ? '{' : '['}
				</span>
			{/if}
		{:else}
			<span class="font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] {getValueColorClass(node)}" title={node.type === 'string' && (node.value as string).length > 80 ? String(node.value) : undefined}>
				{getValueDisplay(node)}
			</span>
		{/if}

		<!-- Copy icon on hover -->
		{#if isHovered}
			<button
				class="ml-auto flex shrink-0 items-center rounded-[var(--radius-sm)] p-[2px] text-[var(--text-muted)] transition-colors duration-[80ms] hover:text-[var(--text-primary)]"
				onclick={(e) => { e.stopPropagation(); handleCopyPath(); }}
				aria-label="Copy path: {node.path}"
			>
				<Copy size={12} />
			</button>
		{/if}
	</div>

	<!-- Children -->
	{#if showChildren && node.children.length > 0}
		<div role="group">
			{#each node.children as child (child.id)}
				<Self
					node={child}
					{expandedNodes}
					{onToggle}
					{maxDepth}
				/>
			{/each}
			<!-- Closing bracket -->
			<div
				class="flex min-h-[20px] items-center"
				style="padding-left: {node.depth * 16 + 20}px"
			>
				<span class="font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--syntax-bracket)]">
					{node.type === 'object' ? '}' : ']'}
				</span>
			</div>
		</div>
	{/if}
</div>
