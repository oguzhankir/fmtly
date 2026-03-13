<script lang="ts">
	import { Copy, ClipboardList } from 'lucide-svelte';
	import { addToast } from '$stores/toast.store';
	import { computeJSONDiff, toJSONPatch } from '$lib/engines/diff/json-diff.js';
	import type { DiffEntry, DiffOptions } from '$lib/engines/diff/json-diff.js';
	import { t } from '$lib/stores/language.js';

	let {
		leftInput = '',
		rightInput = ''
	}: {
		leftInput?: string;
		rightInput?: string;
	} = $props();

	let ignoreArrayOrder = $state(false);
	let showOnlyDiffs = $state(true);

	let options = $derived<DiffOptions>({
		ignoreArrayOrder,
		ignoreWhitespace: true
	});

	let result = $derived(
		leftInput.trim() && rightInput.trim()
			? computeJSONDiff(leftInput, rightInput, options)
			: null
	);

	let diffEntries = $derived(result?.entries ?? []);
	let diffCount = $derived(diffEntries.filter((e) => e.type !== 'unchanged').length);
	let displayEntries = $derived(
		showOnlyDiffs ? diffEntries.filter((e) => e.type !== 'unchanged') : diffEntries
	);

	function formatValue(value: unknown): string {
		if (value === undefined) return '—';
		if (typeof value === 'string') return `"${value}"`;
		return JSON.stringify(value);
	}

	function truncate(str: string, max: number): string {
		return str.length > max ? str.slice(0, max) + '…' : str;
	}

	async function copyJSONPatch(): Promise<void> {
		const diffs = diffEntries.filter((e) => e.type !== 'unchanged');
		const patch = toJSONPatch(diffs);
		await navigator.clipboard.writeText(JSON.stringify(patch, null, 2));
		addToast('success', $t('ui.diff.toast.patch_success', 'JSON Patch copied to clipboard'));
	}
</script>

<div class="diff-panel">
	<!-- Controls bar -->
	<div class="diff-controls">
		<div class="diff-controls-left">
			<label class="diff-toggle">
				<input type="checkbox" bind:checked={ignoreArrayOrder} />
				<span>{$t('ui.diff.controls.ignore_order', 'Ignore array order')}</span>
			</label>
			<label class="diff-toggle">
				<input type="checkbox" bind:checked={showOnlyDiffs} />
				<span>{$t('ui.diff.controls.only_diffs', 'Show only differences')}</span>
			</label>
		</div>
		{#if diffCount > 0}
			<button class="diff-action-btn" onclick={copyJSONPatch}>
				<ClipboardList size={12} />
				{$t('ui.diff.controls.copy_patch', 'Copy as JSON Patch')}
			</button>
		{/if}
	</div>

	<!-- Summary -->
	<div class="diff-summary">
		{#if result?.error}
			<span class="diff-summary-error">{result.error}</span>
		{:else if !result}
			<span class="diff-summary-empty">{$t('ui.diff.summary.empty', 'Enter JSON in both panels to compare')}</span>
		{:else if diffCount === 0}
			<span class="diff-summary-identical">{$t('ui.diff.summary.identical', 'Documents are identical')}</span>
		{:else}
			<span class="diff-summary-count">{($t as any)('ui.diff.summary.count', '{{count}} difference found', { count: diffCount })}{diffCount === 1 ? '' : ($t('ui.diff.summary.count_plural', 's'))} found</span>
		{/if}
	</div>

	<!-- Results list -->
	{#if displayEntries.length > 0}
		<div class="diff-entries">
			{#each displayEntries as entry (entry.path + entry.type)}
				<div class="diff-entry diff-entry--{entry.type}">
					<div class="diff-entry-header">
						<span class="diff-path">{entry.path || $t('ui.diff.types.root', '(root)')}</span>
						<span class="diff-type diff-type--{entry.type}">
							{entry.type === 'added' ? $t('ui.diff.types.added', 'Added') : entry.type === 'removed' ? $t('ui.diff.types.removed', 'Removed') : entry.type === 'modified' ? $t('ui.diff.types.modified', 'Modified') : $t('ui.diff.types.unchanged', 'Unchanged')}
						</span>
					</div>
					{#if entry.type === 'modified'}
						<div class="diff-values">
							<span class="diff-value diff-value--old">{truncate(formatValue(entry.leftValue), 120)}</span>
							<span class="diff-arrow">→</span>
							<span class="diff-value diff-value--new">{truncate(formatValue(entry.rightValue), 120)}</span>
						</div>
					{:else if entry.type === 'added'}
						<div class="diff-values">
							<span class="diff-value diff-value--new">{truncate(formatValue(entry.rightValue), 120)}</span>
						</div>
					{:else if entry.type === 'removed'}
						<div class="diff-values">
							<span class="diff-value diff-value--old">{truncate(formatValue(entry.leftValue), 120)}</span>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.diff-panel {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
	}

	.diff-controls {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 12px;
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		flex-shrink: 0;
		gap: 12px;
		flex-wrap: wrap;
	}

	.diff-controls-left {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.diff-toggle {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: var(--text-xs);
		color: var(--text-secondary);
		cursor: pointer;
		user-select: none;
	}

	.diff-toggle input {
		accent-color: var(--bg-accent);
	}

	.diff-action-btn {
		display: flex;
		align-items: center;
		gap: 4px;
		padding: 4px 10px;
		font-size: var(--text-xs);
		font-family: var(--font-sans);
		color: var(--text-secondary);
		background: var(--bg-surface-hover);
		border: none;
		border-radius: var(--radius-sm);
		cursor: pointer;
		transition: color 100ms, background 100ms;
	}

	.diff-action-btn:hover {
		color: var(--text-primary);
		background: var(--bg-elevated);
	}

	.diff-summary {
		padding: 10px 12px;
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		border-bottom: 1px solid var(--border-subtle);
		flex-shrink: 0;
	}

	.diff-summary-error {
		color: var(--status-error);
	}

	.diff-summary-empty {
		color: var(--text-tertiary);
	}

	.diff-summary-identical {
		color: var(--status-success);
	}

	.diff-summary-count {
		color: var(--text-primary);
	}

	.diff-entries {
		flex: 1;
		overflow-y: auto;
		padding: 4px 0;
	}

	.diff-entry {
		padding: 8px 12px;
		border-left: 3px solid transparent;
		transition: background 100ms;
	}

	.diff-entry:hover {
		background: var(--bg-surface-hover);
	}

	.diff-entry--added {
		border-left-color: var(--status-success);
	}

	.diff-entry--removed {
		border-left-color: var(--status-error);
	}

	.diff-entry--modified {
		border-left-color: var(--status-warning);
	}

	.diff-entry--unchanged {
		opacity: 0.4;
		border-left-color: var(--border-subtle);
	}

	.diff-entry-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		margin-bottom: 2px;
	}

	.diff-path {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--text-primary);
		font-weight: var(--weight-medium);
	}

	.diff-type {
		font-size: 0.625rem;
		font-weight: var(--weight-semibold);
		padding: 1px 6px;
		border-radius: var(--radius-full);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		flex-shrink: 0;
	}

	.diff-type--added {
		color: var(--status-success);
		background: color-mix(in srgb, var(--status-success) 12%, transparent);
	}

	.diff-type--removed {
		color: var(--status-error);
		background: color-mix(in srgb, var(--status-error) 12%, transparent);
	}

	.diff-type--modified {
		color: var(--status-warning);
		background: color-mix(in srgb, var(--status-warning) 12%, transparent);
	}

	.diff-type--unchanged {
		color: var(--text-tertiary);
		background: var(--bg-inset);
	}

	.diff-values {
		display: flex;
		align-items: baseline;
		gap: 6px;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		line-height: var(--leading-relaxed);
		flex-wrap: wrap;
	}

	.diff-value {
		word-break: break-all;
	}

	.diff-value--old {
		color: var(--status-error);
	}

	.diff-value--new {
		color: var(--status-success);
	}

	.diff-arrow {
		color: var(--text-tertiary);
		flex-shrink: 0;
	}
</style>
