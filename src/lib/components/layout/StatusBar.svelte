<script lang="ts">
	import { CircleCheck, CircleX, Loader, Minus } from 'lucide-svelte';

	type Validity = 'valid' | 'invalid' | 'empty' | 'processing';

	let {
		validity = 'empty',
		message = '',
		inputSize = undefined,
		outputSize = undefined,
		nodeCount = undefined,
		depth = undefined,
		cursorLine = undefined,
		cursorColumn = undefined
	}: {
		validity?: Validity;
		message?: string;
		inputSize?: number;
		outputSize?: number;
		nodeCount?: number;
		depth?: number;
		cursorLine?: number;
		cursorColumn?: number;
	} = $props();

	function formatSize(bytes: number): string {
		if (bytes < 1024) return `${bytes} B`;
		return `${(bytes / 1024).toFixed(1)} KB`;
	}

	const validityConfig: Record<Validity, { color: string; label: string }> = {
		valid: { color: 'var(--status-valid)', label: 'Valid' },
		invalid: { color: 'var(--status-invalid)', label: 'Invalid' },
		empty: { color: 'var(--text-tertiary)', label: 'Empty' },
		processing: { color: 'var(--status-info)', label: 'Processing' }
	};

	const iconMap = {
		valid: CircleCheck,
		invalid: CircleX,
		empty: Minus,
		processing: Loader
	};

	let ValidityIcon = $derived(iconMap[validity]);
</script>

<footer
	class="fixed bottom-0 left-0 right-0 z-[var(--z-sticky)] flex h-[var(--status-bar-height)] items-center border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-4)]"
>
	<div
		class="flex items-center gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]"
	>
		<!-- Validity indicator -->
		<span class="flex items-center gap-[var(--space-1)]" style="color: {validityConfig[validity].color}">
			<ValidityIcon
				size={12}
				class={validity === 'processing' ? 'animate-spin' : ''}
			/>
			{validityConfig[validity].label}
		</span>

		{#if message}
			<span class="text-[var(--text-tertiary)]">·</span>
			<span>{message}</span>
		{/if}

		{#if inputSize !== undefined}
			<span class="text-[var(--text-tertiary)]">·</span>
			<span>In: {formatSize(inputSize)}</span>
		{/if}

		{#if outputSize !== undefined}
			<span class="text-[var(--text-tertiary)]">·</span>
			<span>Out: {formatSize(outputSize)}</span>
		{/if}

		{#if nodeCount !== undefined}
			<span class="text-[var(--text-tertiary)]">·</span>
			<span>{nodeCount} nodes</span>
		{/if}

		{#if depth !== undefined}
			<span class="text-[var(--text-tertiary)]">·</span>
			<span>Depth {depth}</span>
		{/if}

		{#if cursorLine !== undefined && cursorColumn !== undefined}
			<span class="text-[var(--text-tertiary)]">·</span>
			<span>Ln {cursorLine}, Col {cursorColumn}</span>
		{/if}
	</div>
</footer>
