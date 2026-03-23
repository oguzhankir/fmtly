<script lang="ts">
	import type { Snippet } from 'svelte';
	import { FileText } from 'lucide-svelte';

	let { fileName, children }: { fileName: string; children: Snippet } = $props();
</script>

<div
	class="flex flex-col gap-[var(--space-3)] rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-elevated)] p-[var(--space-4)] shadow-[var(--shadow-sm)] sm:flex-row sm:items-center sm:justify-between"
>
	<div class="flex min-w-0 flex-1 items-start gap-[var(--space-3)] sm:items-center">
		<div
			class="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--accent)] shadow-[var(--shadow-sm)]"
		>
			<FileText size={22} strokeWidth={1.75} aria-hidden="true" />
		</div>
		<p
			class="min-w-0 flex-1 truncate text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]"
			title={fileName}
		>
			{fileName}
		</p>
	</div>
	<div class="flex flex-wrap items-center gap-[var(--space-2)] sm:justify-end">
		{@render children()}
	</div>
</div>
