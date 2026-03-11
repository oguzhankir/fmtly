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
		valid: { color: 'var(--success)', label: 'Valid' },
		invalid: { color: 'var(--error)', label: 'Invalid' },
		empty: { color: 'var(--text-muted)', label: 'Empty' },
		processing: { color: 'var(--accent)', label: 'Processing' }
	};

	const iconMap = {
		valid: CircleCheck,
		invalid: CircleX,
		empty: Minus,
		processing: Loader
	};

	let ValidityIcon = $derived(iconMap[validity]);
</script>

<footer class="status-bar">
	<div class="status-left">
		<span class="status-validity" style="color: {validityConfig[validity].color}">
			<ValidityIcon
				size={12}
				class={validity === 'processing' ? 'animate-spin' : ''}
			/>
			{validityConfig[validity].label}
		</span>

		{#if message}
			<span class="status-sep">&middot;</span>
			<span>{message}</span>
		{/if}

		{#if inputSize !== undefined}
			<span class="status-sep">&middot;</span>
			<span>In: {formatSize(inputSize)}</span>
		{/if}

		{#if outputSize !== undefined}
			<span class="status-sep">&middot;</span>
			<span>Out: {formatSize(outputSize)}</span>
		{/if}

		{#if nodeCount !== undefined}
			<span class="status-sep">&middot;</span>
			<span>{nodeCount} nodes</span>
		{/if}

		{#if depth !== undefined}
			<span class="status-sep">&middot;</span>
			<span>Depth {depth}</span>
		{/if}
	</div>

	<div class="status-right">
		{#if cursorLine !== undefined && cursorColumn !== undefined}
			<span>Ln {cursorLine}, Col {cursorColumn}</span>
		{/if}
	</div>
</footer>

<style>
	.status-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: var(--z-sticky);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--status-bar-height);
		padding: 0 12px;
		background: var(--bg-surface);
		border-top: 1px solid var(--border-faint);
		font-family: var(--font-ui);
		font-size: 11px;
		color: var(--text-secondary);
	}

	.status-left {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.status-right {
		display: flex;
		align-items: center;
		gap: 8px;
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-muted);
	}

	.status-validity {
		display: flex;
		align-items: center;
		gap: 4px;
		font-weight: 500;
	}

	.status-sep {
		color: var(--text-disabled);
	}
</style>
