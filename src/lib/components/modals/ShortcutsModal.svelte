<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { X } from 'lucide-svelte';
	import { getShortcuts, formatShortcutKeys } from '$utils/keyboard.js';
	import type { ShortcutEntry } from '$utils/keyboard.js';
	import { t } from '$stores/language';

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
		aria-label={$t('ui.shortcuts.title')}
		tabindex="-1"
	>
		<div class="modal-card">
			<!-- Header -->
			<div class="modal-header">
				<h2 class="modal-title">{$t('ui.shortcuts.title')}</h2>
				<button class="modal-close" onclick={() => (open = false)} aria-label={$t('ui.shortcuts.close')}>
					<X size={16} />
				</button>
			</div>

			<!-- Content -->
			<div class="modal-body">
				{#if globalShortcuts.length > 0}
					<div class="shortcut-section">
						<h3 class="shortcut-section-title">{$t('ui.shortcuts.global')}</h3>
						{#each globalShortcuts as entry}
							<div class="shortcut-row">
								<span class="shortcut-label">{$t(`ui.shortcuts.label.${entry.label}`)}</span>
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
						<h3 class="shortcut-section-title">{$t('ui.shortcuts.tool')}</h3>
						{#each toolShortcuts as entry}
							<div class="shortcut-row">
								<span class="shortcut-label">{$t(`ui.shortcuts.label.${entry.label}`)}</span>
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
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(4px);
	}

	.modal-card {
		background: var(--bg-overlay);
		border: 1px solid var(--border-default);
		border-radius: 12px;
		box-shadow: var(--shadow-xl);
		max-width: 480px;
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
		padding: 14px 16px;
		border-bottom: 1px solid var(--border-subtle);
	}

	.modal-title {
		font-family: var(--font-ui);
		font-size: 14px;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}

	.modal-close {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 26px;
		height: 26px;
		border: none;
		background: none;
		color: var(--text-muted);
		border-radius: 6px;
		cursor: pointer;
		transition: background 80ms ease, color 80ms ease;
	}

	.modal-close:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.modal-body {
		padding: 12px 16px 16px;
		overflow-y: auto;
	}

	.shortcut-section {
		margin-bottom: 16px;
	}

	.shortcut-section:last-child {
		margin-bottom: 0;
	}

	.shortcut-section-title {
		font-family: var(--font-ui);
		font-size: 11px;
		font-weight: 500;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin: 0 0 8px 0;
	}

	.shortcut-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px 0;
	}

	.shortcut-label {
		font-family: var(--font-ui);
		font-size: 13px;
		color: var(--text-secondary);
	}

	.shortcut-keys {
		display: flex;
		align-items: center;
		gap: 3px;
	}

	.shortcut-plus {
		color: var(--text-disabled);
		font-size: 11px;
	}

	.shortcut-kbd {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 20px;
		height: 20px;
		padding: 0 5px;
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-secondary);
		background: var(--bg-subtle);
		border: 1px solid var(--border-subtle);
		border-radius: 4px;
		line-height: 1;
	}
</style>
