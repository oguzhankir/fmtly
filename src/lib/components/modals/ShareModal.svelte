<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { X, Copy, Check, AlertTriangle } from 'lucide-svelte';
	import { addToast } from '$stores/toast.store';
	import { input as inputStore } from '$stores/input.store';
	import { generateShareURL } from '$utils/share.js';
	import type { ShareURLResult } from '$utils/share.js';

	let {
		open = $bindable(false),
		toolPath = ''
	}: {
		open?: boolean;
		toolPath?: string;
	} = $props();

	let shareResult = $state<ShareURLResult | null>(null);
	let justCopied = $state(false);
	let copyTimer: ReturnType<typeof setTimeout> | undefined;

	$effect(() => {
		if (open) {
			const value = $inputStore;
			if (value.trim()) {
				shareResult = generateShareURL(value, toolPath, 'https://fmtly.dev');
			} else {
				shareResult = null;
			}
			justCopied = false;
		}
	});

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

	async function handleCopy(): Promise<void> {
		if (!shareResult) return;
		await navigator.clipboard.writeText(shareResult.url);
		justCopied = true;
		addToast('success', 'Share link copied');
		if (copyTimer) clearTimeout(copyTimer);
		copyTimer = setTimeout(() => {
			justCopied = false;
		}, 2000);
	}

	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
	});

	onDestroy(() => {
		if (browser) document.removeEventListener('keydown', handleKeydown);
		if (copyTimer) clearTimeout(copyTimer);
	});
</script>

{#if open}
	<div
		class="modal-overlay"
		onclick={handleOverlayClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-label="Share"
		tabindex="-1"
	>
		<div class="modal-card">
			<!-- Header -->
			<div class="modal-header">
				<h2 class="modal-title">Share</h2>
				<button class="modal-close" onclick={() => (open = false)} aria-label="Close">
					<X size={16} />
				</button>
			</div>

			<!-- Content -->
			<div class="modal-body">
				{#if shareResult}
					<div class="share-url-row">
						<input
							type="text"
							readonly
							value={shareResult.url}
							class="share-url-input"
							onclick={(e: Event) => (e.target as HTMLInputElement).select()}
						/>
						<button class="share-copy-btn" onclick={handleCopy}>
							{#if justCopied}
								<Check size={14} />
								<span>Copied</span>
							{:else}
								<Copy size={14} />
								<span>Copy Link</span>
							{/if}
						</button>
					</div>

					<p class="share-size">
						Link size: {shareResult.sizeKB.toFixed(1)} KB
					</p>

					{#if shareResult.sizeKB > 6}
						<div class="share-warning">
							<AlertTriangle size={14} />
							<span>This link is large and may not work in all browsers</span>
						</div>
					{/if}

					<p class="share-note">
						The data is encoded in the URL hash and is never sent to any server.
					</p>
				{:else}
					<p class="share-empty">Enter some input first to generate a share link.</p>
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
		padding: 20px;
	}

	.share-url-row {
		display: flex;
		gap: 8px;
	}

	.share-url-input {
		flex: 1;
		background: var(--bg-inset);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		padding: 8px 12px;
		outline: none;
	}

	.share-url-input:focus {
		border-color: var(--border-focus);
	}

	.share-copy-btn {
		display: flex;
		align-items: center;
		gap: 6px;
		background: var(--bg-accent);
		color: var(--text-on-accent);
		border: none;
		border-radius: var(--radius-md);
		font-size: var(--text-sm);
		font-family: var(--font-sans);
		padding: 8px 16px;
		cursor: pointer;
		white-space: nowrap;
		transition: background-color 100ms;
	}

	.share-copy-btn:hover {
		background: var(--bg-accent-hover);
	}

	.share-size {
		margin: 12px 0 0;
		font-size: var(--text-xs);
		color: var(--text-tertiary);
	}

	.share-warning {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-top: 12px;
		padding: 8px 12px;
		background: var(--status-warning-bg);
		color: var(--status-warning);
		border-radius: var(--radius-md);
		font-size: var(--text-xs);
	}

	.share-note {
		margin: 12px 0 0;
		font-size: var(--text-xs);
		color: var(--text-tertiary);
	}

	.share-empty {
		color: var(--text-tertiary);
		font-size: var(--text-sm);
		text-align: center;
		padding: 16px 0;
	}
</style>
