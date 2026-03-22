<script lang="ts">
	import type { Snippet } from 'svelte';

	let { toolbar, main }: { toolbar: Snippet; main: Snippet } = $props();
</script>

<div
	class="flex min-h-0 flex-1 flex-col px-[var(--space-3)] pb-[var(--space-4)] pt-0 sm:px-[var(--space-4)]"
>
	<div
		class="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-base)] shadow-[var(--shadow-sm)]"
	>
		<div
			class="max-h-[min(44vh,420px)] shrink-0 overflow-x-hidden overflow-y-auto border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)] sm:p-[var(--space-4)]"
		>
			{@render toolbar()}
		</div>
		<div class="flex min-h-0 flex-1 flex-col">
			{@render main()}
		</div>
	</div>
</div>
