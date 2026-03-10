<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { X } from 'lucide-svelte';
	import { getShortcuts, formatShortcutKeys } from '$utils/keyboard.js';
	import type { ShortcutEntry } from '$utils/keyboard.js';

	let {
		open = $bindable(false)
	}: {
		open?: boolean;
	} = $props();

	let allShortcuts = $derived(getShortcuts());

	let globalShortcuts = $derived(allShortcuts.filter((s) => s.scope === 'global'));
	let toolShortcuts = $derived(allShortcuts.filter((s) => s.scope === 'tool'));

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

	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
	});

	onDestroy(() => {
		if (browser) document.removeEventListener('keydown', handleKeydown);
	});

	function renderKeys(entry: ShortcutEntry): string[] {
		return formatShortcutKeys(entry);
	}
</script>

{#if open}
	<div
		class="modal-overlay"
		onclick={handleOverlayClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-label="Keyboard shortcuts"
		tabindex="-1"
	>
		<div class="modal-card">
			<!-- Header -->
			<div class="modal-header">
				<h2 class="modal-title">Keyboard Shortcuts</h2>
				<button class="modal-close" onclick={() => (open = false)} aria-label="Close">
					<X size={16} />
				</button>
			</div>

			<!-- Content -->
			<div class="modal-body">
				{#if globalShortcuts.length > 0}
					<div class="shortcut-section">
						<h3 class="shortcut-section-title">Global</h3>
						{#each globalShortcuts as entry}
							<div class="shortcut-row">
								<span class="shortcut-label">{entry.label}</span>
								<span class="shortcut-keys">
									{#each renderKeys(entry) as key, i}
										{#if i > 0}<span class="shortcut-plus">+</span>{/if}
										<kbd class="shortcut-kbd">{key}</kbd>
									{/each}
								</span>
							</div>
						{/each}
					</div>
				{/if}

				{#if toolShortcuts.length > 0}
					<div class="shortcut-section">
						<h3 class="shortcut-section-title">Tool</h3>
						{#each toolShortcuts as entry}
							<div class="shortcut-row">
								<span class="shortcut-label">{entry.label}</span>
								<span class="shortcut-keys">
									{#each renderKeys(entry) as key, i}
										{#if i > 0}<span class="shortcut-plus">+</span>{/if}
										<kbd class="shortcut-kbd">{key}</kbd>
									{/each}
								</span>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		inset: 0;
		z-index: var(--z-modal);
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-overlay);
		backdrop-filter: blur(4px);
	}

	.modal-card {
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-xl);
		box-shadow: var(--shadow-lg);
		max-width: 560px;
		width: 90vw;
		max-height: 80vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.modal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 20px;
		border-bottom: 1px solid var(--border-subtle);
	}

	.modal-title {
		font-size: var(--text-lg);
		font-weight: var(--weight-semibold);
		color: var(--text-primary);
		margin: 0;
	}

	.modal-close {
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

	.modal-close:hover {
		background: var(--bg-surface-hover);
		color: var(--text-primary);
	}

	.modal-body {
		padding: 16px 20px;
		overflow-y: auto;
	}

	.shortcut-section {
		margin-bottom: 20px;
	}

	.shortcut-section:last-child {
		margin-bottom: 0;
	}

	.shortcut-section-title {
		font-size: var(--text-xs);
		font-weight: var(--weight-semibold);
		color: var(--text-tertiary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin: 0 0 8px 0;
	}

	.shortcut-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 6px 0;
	}

	.shortcut-label {
		font-size: var(--text-sm);
		color: var(--text-secondary);
	}

	.shortcut-keys {
		display: flex;
		align-items: center;
		gap: 3px;
	}

	.shortcut-plus {
		color: var(--text-tertiary);
		font-size: var(--text-xs);
	}

	.shortcut-kbd {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 22px;
		height: 22px;
		padding: 0 6px;
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		color: var(--text-secondary);
		background: var(--bg-inset);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-sm);
		line-height: 1;
	}
</style>
