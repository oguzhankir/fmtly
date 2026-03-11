<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { toasts } from '$stores/toast.store';
	import { CircleCheck, CircleX, Info, TriangleAlert } from 'lucide-svelte';

	const iconMap = {
		success: CircleCheck,
		error: CircleX,
		info: Info,
		warning: TriangleAlert
	};

	const colorMap: Record<string, string> = {
		success: 'var(--success)',
		error: 'var(--error)',
		info: 'var(--accent)',
		warning: 'var(--warning)'
	};

	function getIcon(type: string): typeof CircleCheck {
		return iconMap[type as keyof typeof iconMap];
	}

	const MAX_VISIBLE = 3;

	let visibleToasts = $derived($toasts.slice(-MAX_VISIBLE));
</script>

<div class="toast-container">
	{#each visibleToasts as toast (toast.id)}
		{@const ToastIcon = getIcon(toast.type)}
		<div
			in:fly={{ x: 24, duration: 150 }}
			out:fade={{ duration: 100 }}
			class="toast-card"
			role="status"
			aria-live="polite"
		>
			<ToastIcon
				size={15}
				style="color: {colorMap[toast.type]}; flex-shrink: 0;"
			/>
			<span class="toast-message">{toast.message}</span>
		</div>
	{/each}
</div>

<style>
	.toast-container {
		position: fixed;
		bottom: 16px;
		right: 16px;
		z-index: var(--z-toast);
		display: flex;
		flex-direction: column;
		gap: 6px;
		pointer-events: none;
	}

	.toast-card {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 14px;
		background: var(--bg-overlay);
		border: 1px solid var(--border-default);
		border-radius: 8px;
		box-shadow: var(--shadow-md);
		pointer-events: auto;
		max-width: 320px;
	}

	.toast-message {
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 500;
		color: var(--text-primary);
		line-height: 1.4;
	}
</style>
