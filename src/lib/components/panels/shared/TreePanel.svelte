<script lang="ts">
	import { jsonStats, jsonTree } from '$stores/json.store';
	import { t } from '$stores/language';
	import { ChevronDown, ChevronUp, ChevronsDownUp, ChevronsUpDown } from 'lucide-svelte';
	import TreeView from '$components/tree/TreeView.svelte';

	let treeViewRef: TreeView | undefined = $state(undefined);
	let treeSummary = $derived.by(() => {
		if (!$jsonStats) return '';
		return $t('ui.tree.summary', {
			keyCount: $jsonStats.keyCount,
			valueCount: $jsonStats.valueCount,
			maxDepth: $jsonStats.maxDepth
		});
	});

	export function setDepth(depth: number): void {
		treeViewRef?.setDepth(depth);
	}

	export function expand(): void {
		treeViewRef?.expand();
	}

	export function collapse(): void {
		treeViewRef?.collapse();
	}
</script>

<div class="tree-panel" role="region" aria-label="JSON Tree View">
	<div class="tree-toolbar">
		<div class="tree-toolbar__meta">
			<span class="tree-toolbar__title">{$t('ui.tree.root', 'Tree')}</span>
			{#if treeSummary}
				<span class="tree-toolbar__summary">{treeSummary}</span>
			{/if}
		</div>
		<div class="tree-toolbar__actions">
			<button type="button" class="tree-btn" onclick={expand}>
				<ChevronsDownUp size={13} />
				{$t('ui.tree.expand', 'Expand')}
			</button>
			<button type="button" class="tree-btn" onclick={collapse}>
				<ChevronsUpDown size={13} />
				{$t('ui.tree.collapse', 'Collapse')}
			</button>
			<div class="tree-depth-controls" aria-label="Tree depth controls">
				<button type="button" class="tree-btn tree-btn--compact" onclick={() => setDepth(1)}>
					<ChevronUp size={13} />
					1
				</button>
				<button type="button" class="tree-btn tree-btn--compact" onclick={() => setDepth(2)}>
					2
				</button>
				<button type="button" class="tree-btn tree-btn--compact" onclick={() => setDepth(3)}>
					3
				</button>
				<button type="button" class="tree-btn tree-btn--compact" onclick={() => setDepth(5)}>
					<ChevronDown size={13} />
					5
				</button>
			</div>
		</div>
	</div>
	<div class="tree-panel__content">
		<TreeView bind:this={treeViewRef} nodes={$jsonTree} />
	</div>
</div>

<style>
	.tree-panel {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}

	.tree-toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.tree-toolbar__meta,
	.tree-toolbar__actions,
	.tree-depth-controls {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	.tree-toolbar__title {
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 700;
		color: var(--text-primary);
	}

	.tree-toolbar__summary {
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-muted);
	}

	.tree-btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		height: 28px;
		padding: 0 var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 500;
		cursor: pointer;
	}

	.tree-btn--compact {
		min-width: 34px;
		justify-content: center;
	}

	.tree-panel__content {
		flex: 1;
		min-height: 0;
	}

	@media (max-width: 767px) {
		.tree-toolbar {
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>
