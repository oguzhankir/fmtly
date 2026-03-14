<script lang="ts">
	import { X } from 'lucide-svelte';
	import { t } from '$lib/stores/language.js';

	let {
		open = $bindable(false),
		title = '',
		message = '',
		onConfirm = () => {},
		onCancel = () => {}
	}: {
		open?: boolean;
		title?: string;
		message?: string;
		onConfirm?: () => void;
		onCancel?: () => void;
	} = $props();

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape' && open) {
			event.preventDefault();
			handleCancel();
		}
	}

	function handleOverlayClick(event: MouseEvent): void {
		if (event.target === event.currentTarget) {
			handleCancel();
		}
	}

	function handleConfirm(): void {
		onConfirm();
		open = false;
	}

	function handleCancel(): void {
		onCancel();
		open = false;
	}
</script>

{#if open}
	<div
		class="modal-overlay"
		onclick={handleOverlayClick}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-label={title}
		tabindex="-1"
	>
		<div class="modal-card">
			<!-- Header -->
			<div class="modal-header">
				<h2 class="modal-title">{title}</h2>
				<button class="modal-close" onclick={handleCancel} aria-label={$t('ui.close', 'Close')}>
					<X size={16} />
				</button>
			</div>

			<!-- Content -->
			<div class="modal-body">
				<p class="confirm-message">{message}</p>
				<div class="confirm-actions">
					<button class="btn-cancel" onclick={handleCancel}>
						{$t('ui.cancel', 'Cancel')}
					</button>
					<button class="btn-confirm" onclick={handleConfirm}>
						{$t('ui.confirm', 'Confirm')}
					</button>
				</div>
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
		max-width: 400px;
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

	.confirm-message {
		color: var(--text-secondary);
		margin: 0 0 20px 0;
		line-height: 1.5;
	}

	.confirm-actions {
		display: flex;
		gap: 12px;
		justify-content: flex-end;
	}

	.btn-cancel {
		background: var(--bg-surface);
		color: var(--text-primary);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		padding: 8px 16px;
		font-size: var(--text-sm);
		cursor: pointer;
		transition: all 100ms;
	}

	.btn-cancel:hover {
		background: var(--bg-surface-hover);
		border-color: var(--border-hover);
	}

	.btn-confirm {
		background: var(--bg-accent);
		color: var(--text-on-accent);
		border: none;
		border-radius: var(--radius-md);
		padding: 8px 16px;
		font-size: var(--text-sm);
		cursor: pointer;
		transition: background-color 100ms;
	}

	.btn-confirm:hover {
		background: var(--bg-accent-hover);
	}
</style>
