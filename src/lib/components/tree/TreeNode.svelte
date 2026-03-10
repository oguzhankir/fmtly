<script lang="ts">
	import { getContext } from 'svelte';
	import { ChevronRight, Copy, Check } from 'lucide-svelte';
	import { addToast } from '$stores/toast.store';
	import type { TreeNode } from '$engines/json/types.js';
	import type { Writable } from 'svelte/store';
	import TreeNodeComponent from './TreeNode.svelte';

	let {
		node,
		searchMatchIds = new Set<string>(),
		currentMatchId = ''
	}: {
		node: TreeNode;
		searchMatchIds?: Set<string>;
		currentMatchId?: string;
	} = $props();

	const expandedNodes = getContext<Writable<Set<string>>>('expandedNodes');

	let expanded = $derived($expandedNodes.has(node.id));
	let hasChildren = $derived(node.children.length > 0);
	let isMatch = $derived(searchMatchIds.has(node.id));
	let isCurrentMatch = $derived(currentMatchId === node.id);
	let justCopied = $state(false);
	let copyTimer: ReturnType<typeof setTimeout> | undefined;
	let contextMenu = $state<{ x: number; y: number } | null>(null);

	function toggle(): void {
		expandedNodes.update((set) => {
			const next = new Set(set);
			if (next.has(node.id)) {
				next.delete(node.id);
			} else {
				next.add(node.id);
			}
			return next;
		});
	}

	function dotPath(): string {
		return node.path || '(root)';
	}

	function bracketPath(): string {
		return node.path.replace(/\.(\w+)/g, '["$1"]').replace(/^/, '$');
	}

	async function copyPath(): Promise<void> {
		const path = dotPath();
		await navigator.clipboard.writeText(path);
		justCopied = true;
		addToast('success', `Copied — ${path}`);
		if (copyTimer) clearTimeout(copyTimer);
		copyTimer = setTimeout(() => {
			justCopied = false;
		}, 1200);
	}

	function handleContextMenu(event: MouseEvent): void {
		event.preventDefault();
		contextMenu = { x: event.clientX, y: event.clientY };

		function close(): void {
			contextMenu = null;
			document.removeEventListener('click', close);
			document.removeEventListener('contextmenu', close);
		}
		setTimeout(() => {
			document.addEventListener('click', close);
			document.addEventListener('contextmenu', close);
		}, 0);
	}

	async function contextCopyDot(): Promise<void> {
		await navigator.clipboard.writeText(dotPath());
		addToast('success', `Copied — ${dotPath()}`);
		contextMenu = null;
	}

	async function contextCopyBracket(): Promise<void> {
		await navigator.clipboard.writeText(bracketPath());
		addToast('success', `Copied — ${bracketPath()}`);
		contextMenu = null;
	}

	async function contextCopyValue(): Promise<void> {
		const val = typeof node.value === 'string' ? node.value : JSON.stringify(node.value);
		await navigator.clipboard.writeText(val);
		addToast('success', 'Copied value');
		contextMenu = null;
	}

	async function contextCopyJSON(): Promise<void> {
		await navigator.clipboard.writeText(JSON.stringify(node.value, null, 2));
		addToast('success', 'Copied value as JSON');
		contextMenu = null;
	}

	function contextExpandAll(): void {
		expandedNodes.update((set) => {
			const next = new Set(set);
			function expandRecursive(n: TreeNode): void {
				if (n.children.length > 0) {
					next.add(n.id);
					for (const child of n.children) expandRecursive(child);
				}
			}
			expandRecursive(node);
			return next;
		});
		contextMenu = null;
	}

	function contextCollapseAll(): void {
		expandedNodes.update((set) => {
			const next = new Set(set);
			function collapseRecursive(n: TreeNode): void {
				next.delete(n.id);
				for (const child of n.children) collapseRecursive(child);
			}
			collapseRecursive(node);
			return next;
		});
		contextMenu = null;
	}

	function formatValue(value: unknown): string {
		if (value === null) return 'null';
		if (typeof value === 'string') {
			if (value.length > 80) return `"${value.slice(0, 77)}…"`;
			return `"${value}"`;
		}
		if (typeof value === 'boolean' || typeof value === 'number') return String(value);
		return '';
	}

	function fullValueTooltip(value: unknown): string {
		if (typeof value === 'string' && value.length > 80) return `"${value}"`;
		return '';
	}

	function typeColor(type: string): string {
		switch (type) {
			case 'string': return 'var(--syntax-string)';
			case 'number': return 'var(--syntax-number)';
			case 'boolean': return 'var(--syntax-boolean)';
			case 'null': return 'var(--syntax-null)';
			default: return 'var(--text-primary)';
		}
	}

	function badge(): string {
		if (node.type === 'array') return `[ ${node.childCount} items ]`;
		if (node.type === 'object') return `{ ${node.childCount} keys }`;
		return '';
	}
</script>

<div class="tree-node">
	<!-- Row -->
	<div
		class="tree-row group"
		class:tree-row--match={isMatch}
		class:tree-row--current={isCurrentMatch}
		style="padding-left: {node.depth * 16}px"
		onclick={copyPath}
		onkeydown={(e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copyPath(); } }}
		oncontextmenu={handleContextMenu}
		role="treeitem"
		aria-selected={isCurrentMatch}
		aria-expanded={hasChildren ? expanded : undefined}
		aria-level={node.depth + 1}
		tabindex="-1"
	>
		<!-- Expand arrow -->
		{#if hasChildren}
			<button
				class="tree-arrow"
				class:tree-arrow--expanded={expanded}
				onclick={(e: MouseEvent) => { e.stopPropagation(); toggle(); }}
				aria-label={expanded ? 'Collapse' : 'Expand'}
				tabindex="-1"
			>
				<ChevronRight size={14} />
			</button>
		{:else}
			<span class="tree-arrow-spacer"></span>
		{/if}

		<!-- Key -->
		{#if node.key !== '(root)'}
			<span class="tree-key">{node.key}</span>
			<span class="tree-colon">:</span>
		{/if}

		<!-- Value or badge -->
		{#if hasChildren}
			<span class="tree-badge">{badge()}</span>
		{:else}
			<span
				class="tree-value"
				style="color: {typeColor(node.type)}"
				title={fullValueTooltip(node.value)}
			>
				{formatValue(node.value)}
			</span>
		{/if}

		<!-- Copy icon (appears on hover) -->
		<span class="tree-copy-icon">
			{#if justCopied}
				<Check size={12} color="var(--status-valid)" />
			{:else}
				<Copy size={12} />
			{/if}
		</span>
	</div>

	<!-- Children (animated) -->
	{#if hasChildren && expanded}
		<div class="tree-children">
			{#each node.children as child (child.id)}
				<TreeNodeComponent node={child} {searchMatchIds} {currentMatchId} />
			{/each}
		</div>
	{/if}
</div>

<!-- Context menu -->
{#if contextMenu}
	<div
		class="tree-context-menu"
		style="left: {contextMenu.x}px; top: {contextMenu.y}px"
		role="menu"
		tabindex="-1"
	>
		<button onclick={contextCopyDot} role="menuitem">Copy path (dot)</button>
		<button onclick={contextCopyBracket} role="menuitem">Copy path (bracket)</button>
		<button onclick={contextCopyValue} role="menuitem">Copy value</button>
		<button onclick={contextCopyJSON} role="menuitem">Copy value as JSON</button>
		{#if hasChildren}
			<hr />
			<button onclick={contextExpandAll} role="menuitem">Expand all children</button>
			<button onclick={contextCollapseAll} role="menuitem">Collapse all children</button>
		{/if}
	</div>
{/if}

<style>
	.tree-node {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		line-height: 1;
	}

	.tree-row {
		display: flex;
		align-items: center;
		height: 26px;
		padding-right: 8px;
		cursor: pointer;
		user-select: none;
		border-radius: 2px;
		transition: background-color 100ms;
		gap: 2px;
	}

	.tree-row:hover {
		background-color: var(--bg-surface-hover);
	}

	.tree-row--match {
		background-color: rgba(245, 158, 11, 0.12);
	}

	.tree-row--current {
		background-color: rgba(245, 158, 11, 0.24);
		outline: 1px solid rgba(245, 158, 11, 0.4);
	}

	.tree-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 18px;
		height: 18px;
		flex-shrink: 0;
		border: none;
		background: none;
		color: var(--text-tertiary);
		cursor: pointer;
		padding: 0;
		transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
		transform: rotate(0deg);
	}

	.tree-arrow--expanded {
		transform: rotate(90deg);
	}

	.tree-arrow:hover {
		color: var(--text-secondary);
	}

	.tree-arrow-spacer {
		width: 18px;
		flex-shrink: 0;
	}

	.tree-key {
		color: var(--syntax-key);
		white-space: nowrap;
	}

	.tree-colon {
		color: var(--text-tertiary);
		margin-right: 4px;
	}

	.tree-value {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 400px;
	}

	.tree-badge {
		color: var(--text-tertiary);
		font-size: 0.6875rem;
		white-space: nowrap;
	}

	.tree-copy-icon {
		margin-left: auto;
		flex-shrink: 0;
		opacity: 0;
		transition: opacity 100ms;
		color: var(--text-tertiary);
		display: flex;
		align-items: center;
	}

	.tree-row:hover .tree-copy-icon {
		opacity: 1;
	}

	.tree-children {
		overflow: hidden;
		animation: tree-expand 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	@keyframes tree-expand {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.tree-context-menu {
		position: fixed;
		z-index: var(--z-modal);
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-lg);
		padding: 4px;
		box-shadow: var(--shadow-lg);
		min-width: 180px;
	}

	.tree-context-menu button {
		display: block;
		width: 100%;
		text-align: left;
		background: none;
		border: none;
		color: var(--text-secondary);
		font-size: var(--text-xs);
		font-family: var(--font-sans);
		padding: 6px 10px;
		border-radius: var(--radius-sm);
		cursor: pointer;
	}

	.tree-context-menu button:hover {
		background: var(--bg-surface-hover);
		color: var(--text-primary);
	}

	.tree-context-menu hr {
		border: none;
		border-top: 1px solid var(--border-subtle);
		margin: 4px 0;
	}
</style>
