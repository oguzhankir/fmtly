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
		success: 'var(--status-valid)',
		error: 'var(--status-invalid)',
		info: 'var(--status-info)',
		warning: 'var(--status-warning)'
	};

	function getIcon(type: string): typeof CircleCheck {
		return iconMap[type as keyof typeof iconMap];
	}
</script>

<div
	class="fixed bottom-[var(--space-4)] left-[var(--space-4)] z-[var(--z-toast)] flex flex-col gap-[var(--space-2)]"
>
	{#each $toasts as toast (toast.id)}
		{@const ToastIcon = getIcon(toast.type)}
		<div
			in:fly={{ y: 20, duration: 120 }}
			out:fade={{ duration: 120 }}
			class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-[var(--space-3)] py-[var(--space-2)] shadow-[var(--shadow-md)]"
			role="status"
			aria-live="polite"
		>
			<ToastIcon
				size={16}
				style="color: {colorMap[toast.type]}; flex-shrink: 0;"
			/>
			<span class="text-[length:var(--text-sm)] text-[var(--text-primary)]">
				{toast.message}
			</span>
		</div>
	{/each}
</div>
