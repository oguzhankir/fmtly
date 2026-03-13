<script lang="ts">
	import { t } from '$stores/language';
	import {
		historyEntries as history,
		deleteHistoryEntry,
		renameHistoryEntry,
		clearHistory,
		loadHistoryEntry
	} from '$stores/history.store';
	import type { HistoryEntry } from '$stores/history.store';
	import { X, Trash2, Edit2, Check, Clock, ExternalLink } from 'lucide-svelte';
	import { fade, slide } from 'svelte/transition';

	let { open = $bindable(false) } = $props();

	let editingId = $state<string | null>(null);
	let editingLabel = $state('');

	function focusInput(el: HTMLInputElement) {
		el.focus();
	}

	function handleLoad(entry: HistoryEntry): void {
		loadHistoryEntry(entry.id);
		open = false;
	}

	function handleDelete(id: string, event: MouseEvent): void {
		event.stopPropagation();
		deleteHistoryEntry(id);
	}

	function startRename(event: MouseEvent, entry: HistoryEntry): void {
		event.stopPropagation();
		editingId = entry.id;
		editingLabel = entry.label;
	}

	function saveRename(event: MouseEvent): void {
		event.stopPropagation();
		if (editingId && editingLabel.trim()) {
			renameHistoryEntry(editingId, editingLabel.trim());
		}
		editingId = null;
	}

	function handleClear(): void {
		if (window.confirm($t('ui.history.clear_confirm', 'Clear all history?'))) {
			clearHistory();
		}
	}
</script>

{#if open}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="history-overlay" onclick={() => (open = false)} transition:fade={{ duration: 150 }}>
		<div class="history-panel" onclick={(e) => e.stopPropagation()} transition:slide={{ axis: 'x', duration: 250 }}>
			<div class="panel-header">
				<div class="header-left">
					<Clock size={18} />
					<h2 class="panel-title">{$t('ui.history.title', 'History')}</h2>
				</div>
				<button class="close-btn" onclick={() => (open = false)}>
					<X size={20} />
				</button>
			</div>

			<div class="panel-content">
				{#if $history.length === 0}
					<div class="empty-state">
						<Clock size={32} class="empty-icon" />
						<p>{$t('ui.history.empty', 'No history yet')}</p>
					</div>
				{:else}
					<div class="history-list">
						{#each $history as entry (entry.id)}
							<div class="history-item" onclick={() => handleLoad(entry)}>
								<div class="item-main">
									{#if editingId === entry.id}
										<input
											type="text"
											bind:value={editingLabel}
											class="rename-input"
											use:focusInput
											onclick={(e) => e.stopPropagation()}
											onkeydown={(e) => e.key === 'Enter' && saveRename(e as any)}
										/>
									{:else}
										<span class="item-label">{entry.label}</span>
									{/if}
									<span class="item-meta">
										{new Date(entry.timestamp).toLocaleString()}
									</span>
								</div>
								<div class="item-actions">
									{#if editingId === entry.id}
										<button class="action-btn save" onclick={saveRename}>
											<Check size={14} />
										</button>
									{:else}
										<button class="action-btn" onclick={(e) => startRename(e, entry)}>
											<Edit2 size={14} />
										</button>
									{/if}
									<button class="action-btn delete" onclick={(e) => handleDelete(entry.id, e)}>
										<Trash2 size={14} />
									</button>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>

			{#if $history.length > 0}
				<div class="panel-footer">
					<button class="clear-all-btn" onclick={handleClear}>
						<Trash2 size={14} />
						{$t('ui.history.clear_all', 'Clear History')}
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.history-overlay {
		position: fixed;
		inset: 0;
		z-index: var(--z-overlay);
		background: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(2px);
		display: flex;
		justify-content: flex-end;
	}

	.history-panel {
		width: 100%;
		max-width: 360px;
		height: 100%;
		background: var(--bg-elevated);
		border-left: 1px solid var(--border-default);
		display: flex;
		flex-direction: column;
		box-shadow: var(--shadow-xl);
	}

	.panel-header {
		padding: 16px 20px;
		border-bottom: 1px solid var(--border-subtle);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.header-left {
		display: flex;
		align-items: center;
		gap: 10px;
		color: var(--text-primary);
	}

	.panel-title {
		font-size: 16px;
		font-weight: 600;
		margin: 0;
	}

	.close-btn {
		background: none;
		border: none;
		color: var(--text-muted);
		cursor: pointer;
		padding: 4px;
		border-radius: 6px;
		transition: all 0.2s;
	}

	.close-btn:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.panel-content {
		flex: 1;
		overflow-y: auto;
		padding: 12px;
	}

	.empty-state {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--text-muted);
		gap: 12px;
	}


	.history-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.history-item {
		padding: 12px 16px;
		border-radius: 10px;
		border: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: all 0.2s;
	}

	.history-item:hover {
		border-color: var(--accent);
		background: var(--bg-hover);
	}

	.item-main {
		display: flex;
		flex-direction: column;
		gap: 2px;
		flex: 1;
		min-width: 0;
	}

	.item-label {
		font-size: 14px;
		font-weight: 500;
		color: var(--text-primary);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.item-meta {
		font-size: 11px;
		color: var(--text-muted);
	}

	.rename-input {
		background: var(--bg-base);
		border: 1px solid var(--accent);
		color: var(--text-primary);
		font-size: 14px;
		padding: 2px 8px;
		border-radius: 4px;
		width: 100%;
		outline: none;
	}

	.item-actions {
		display: flex;
		gap: 4px;
		opacity: 0;
		transition: opacity 0.2s;
	}

	.history-item:hover .item-actions {
		opacity: 1;
	}

	.action-btn {
		background: none;
		border: none;
		color: var(--text-muted);
		cursor: pointer;
		padding: 6px;
		border-radius: 6px;
		transition: all 0.2s;
	}

	.action-btn:hover {
		background: var(--bg-base);
		color: var(--text-primary);
	}

	.action-btn.delete:hover {
		color: var(--error);
		background: var(--error-dim);
	}

	.action-btn.save {
		color: var(--success);
	}

	.panel-footer {
		padding: 16px;
		border-top: 1px solid var(--border-subtle);
	}

	.clear-all-btn {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 10px;
		background: var(--bg-surface);
		border: 1px solid var(--border-default);
		border-radius: 8px;
		color: var(--text-secondary);
		font-size: 13px;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s;
	}

	.clear-all-btn:hover {
		background: var(--error-dim);
		color: var(--error);
		border-color: var(--error);
	}
</style>
