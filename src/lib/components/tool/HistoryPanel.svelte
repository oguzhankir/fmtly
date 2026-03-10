<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { X, Trash2, Clock, AlertTriangle } from 'lucide-svelte';
	import {
		historyEntries,
		deleteHistoryEntry,
		renameHistoryEntry,
		clearHistory,
		loadHistoryEntry
	} from '$stores/history.store';
	import type { HistoryEntry } from '$stores/history.store';

	let {
		open = $bindable(false)
	}: {
		open?: boolean;
	} = $props();

	let confirmClear = $state(false);
	let editingId = $state<string | null>(null);
	let editingLabel = $state('');

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape' && open) {
			event.preventDefault();
			open = false;
		}
	}

	function handleOverlayClick(event: MouseEvent): void {
		if (event.target === event.currentTarget) {
			open = false;
		}
	}

	function handleLoad(entry: HistoryEntry): void {
		loadHistoryEntry(entry.id);
		open = false;
	}

	function handleDelete(event: MouseEvent, id: string): void {
		event.stopPropagation();
		deleteHistoryEntry(id);
	}

	function startRename(event: MouseEvent, entry: HistoryEntry): void {
		event.stopPropagation();
		editingId = entry.id;
		editingLabel = entry.label || '';
	}

	function commitRename(): void {
		if (editingId) {
			renameHistoryEntry(editingId, editingLabel.trim());
			editingId = null;
			editingLabel = '';
		}
	}

	function handleRenameKeydown(event: KeyboardEvent): void {
		if (event.key === 'Enter') {
			event.preventDefault();
			commitRename();
		} else if (event.key === 'Escape') {
			event.stopPropagation();
			editingId = null;
			editingLabel = '';
		}
	}

	function handleClearAll(): void {
		if (confirmClear) {
			clearHistory();
			confirmClear = false;
		} else {
			confirmClear = true;
			setTimeout(() => {
				confirmClear = false;
			}, 3000);
		}
	}

	function relativeTime(timestamp: number): string {
		const diff = Date.now() - timestamp;
		const seconds = Math.floor(diff / 1000);
		if (seconds < 60) return 'just now';
		const minutes = Math.floor(seconds / 60);
		if (minutes < 60) return `${minutes}m ago`;
		const hours = Math.floor(minutes / 60);
		if (hours < 24) return `${hours}h ago`;
		const days = Math.floor(hours / 24);
		if (days < 30) return `${days}d ago`;
		return new Date(timestamp).toLocaleDateString();
	}

	function formatSize(bytes: number): string {
		if (bytes < 1024) return `${bytes} B`;
		return `${(bytes / 1024).toFixed(1)} KB`;
	}

	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
	});

	onDestroy(() => {
		if (browser) document.removeEventListener('keydown', handleKeydown);
	});
</script>

{#if open}
	<div
		class="panel-overlay"
		onclick={handleOverlayClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-label="Input history"
		tabindex="-1"
	>
		<div class="panel">
			<!-- Header -->
			<div class="panel-header">
				<div class="panel-header-left">
					<Clock size={16} />
					<h2 class="panel-title">History</h2>
				</div>
				<button class="panel-close" onclick={() => (open = false)} aria-label="Close">
					<X size={16} />
				</button>
			</div>

			<!-- Entries list -->
			<div class="panel-body">
				{#if $historyEntries.length === 0}
					<p class="panel-empty">No history entries yet. Start typing to save entries automatically.</p>
				{:else}
					{#each $historyEntries as entry (entry.id)}
						<div
							class="entry"
							onclick={() => handleLoad(entry)}
							onkeydown={(e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleLoad(entry); } }}
							role="button"
							tabindex="0"
						>
							<div class="entry-top">
								{#if editingId === entry.id}
									<input
										type="text"
										class="entry-label-input"
										bind:value={editingLabel}
										onblur={commitRename}
										onkeydown={handleRenameKeydown}
										placeholder="Add a label…"
										onclick={(e: MouseEvent) => e.stopPropagation()}
									/>
								{:else}
									<span
										class="entry-label"
										onclick={(e: MouseEvent) => startRename(e, entry)}
										onkeydown={(e: KeyboardEvent) => { if (e.key === 'Enter') { e.stopPropagation(); startRename(e as unknown as MouseEvent, entry); } }}
										role="textbox"
										tabindex="-1"
									>
										{entry.label || 'Untitled'}
									</span>
								{/if}
								<span class="entry-time">{relativeTime(entry.timestamp)}</span>
							</div>
							<div class="entry-bottom">
								<span class="entry-preview">{entry.contentPreview}</span>
								<span class="entry-meta">
									<span class="entry-size">{formatSize(entry.size)}</span>
									<button
										class="entry-delete"
										onclick={(e: MouseEvent) => handleDelete(e, entry.id)}
										aria-label="Delete entry"
									>
										<Trash2 size={12} />
									</button>
								</span>
							</div>
						</div>
					{/each}
				{/if}
			</div>

			<!-- Footer -->
			{#if $historyEntries.length > 0}
				<div class="panel-footer">
					<button class="clear-btn" onclick={handleClearAll}>
						{#if confirmClear}
							<AlertTriangle size={12} />
							Confirm clear all
						{:else}
							<Trash2 size={12} />
							Clear all
						{/if}
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.panel-overlay {
		position: fixed;
		inset: 0;
		z-index: var(--z-modal);
		display: flex;
		justify-content: flex-end;
		background: var(--bg-overlay);
	}

	.panel {
		width: 380px;
		max-width: 100vw;
		height: 100%;
		background: var(--bg-elevated);
		border-left: 1px solid var(--border-default);
		display: flex;
		flex-direction: column;
		animation: slide-in 200ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	@keyframes slide-in {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}

	.panel-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 20px;
		border-bottom: 1px solid var(--border-subtle);
		flex-shrink: 0;
	}

	.panel-header-left {
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--text-primary);
	}

	.panel-title {
		font-size: var(--text-base);
		font-weight: var(--weight-semibold);
		color: var(--text-primary);
		margin: 0;
	}

	.panel-close {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		border: none;
		background: none;
		color: var(--text-tertiary);
		border-radius: var(--radius-sm);
		cursor: pointer;
	}

	.panel-close:hover {
		background: var(--bg-surface-hover);
		color: var(--text-primary);
	}

	.panel-body {
		flex: 1;
		overflow-y: auto;
		padding: 8px;
	}

	.panel-empty {
		color: var(--text-tertiary);
		font-size: var(--text-sm);
		text-align: center;
		padding: 32px 16px;
		line-height: var(--leading-relaxed);
	}

	.entry {
		display: flex;
		flex-direction: column;
		gap: 4px;
		width: 100%;
		padding: 10px 12px;
		background: none;
		border: 1px solid transparent;
		border-radius: var(--radius-md);
		cursor: pointer;
		text-align: left;
		transition:
			background-color 100ms,
			border-color 100ms;
		font-family: var(--font-sans);
	}

	.entry:hover {
		background: var(--bg-surface-hover);
		border-color: var(--border-default);
	}

	.entry-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
	}

	.entry-label {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--text-primary);
		cursor: text;
		padding: 1px 4px;
		border-radius: var(--radius-sm);
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.entry-label:hover {
		background: var(--bg-inset);
	}

	.entry-label-input {
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		color: var(--text-primary);
		background: var(--bg-inset);
		border: 1px solid var(--border-focus);
		border-radius: var(--radius-sm);
		padding: 1px 4px;
		outline: none;
		flex: 1;
		min-width: 0;
		font-family: var(--font-sans);
	}

	.entry-time {
		font-size: var(--text-xs);
		color: var(--text-tertiary);
		white-space: nowrap;
		flex-shrink: 0;
	}

	.entry-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
	}

	.entry-preview {
		font-size: var(--text-xs);
		font-family: var(--font-mono);
		color: var(--text-tertiary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		min-width: 0;
		flex: 1;
	}

	.entry-meta {
		display: flex;
		align-items: center;
		gap: 6px;
		flex-shrink: 0;
	}

	.entry-size {
		font-size: 0.625rem;
		color: var(--text-tertiary);
		background: var(--bg-inset);
		padding: 1px 6px;
		border-radius: var(--radius-full);
		white-space: nowrap;
	}

	.entry-delete {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		border: none;
		background: none;
		color: var(--text-tertiary);
		border-radius: var(--radius-sm);
		cursor: pointer;
		opacity: 0;
		transition: opacity 100ms;
	}

	.entry:hover .entry-delete {
		opacity: 1;
	}

	.entry-delete:hover {
		color: var(--status-error);
		background: var(--bg-surface-hover);
	}

	.panel-footer {
		padding: 12px 16px;
		border-top: 1px solid var(--border-subtle);
		flex-shrink: 0;
	}

	.clear-btn {
		display: flex;
		align-items: center;
		gap: 6px;
		width: 100%;
		justify-content: center;
		padding: 8px;
		font-size: var(--text-xs);
		font-family: var(--font-sans);
		color: var(--text-tertiary);
		background: none;
		border: 1px solid var(--border-subtle);
		border-radius: var(--radius-md);
		cursor: pointer;
		transition:
			color 100ms,
			border-color 100ms;
	}

	.clear-btn:hover {
		color: var(--status-error);
		border-color: var(--status-error);
	}

	@media (max-width: 480px) {
		.panel {
			width: 100vw;
		}
	}
</style>
