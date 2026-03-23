<script lang="ts">
	import type { Snippet } from 'svelte';
	import { BookOpen, FileOutput, FileText, Info, Layers2, Scissors } from 'lucide-svelte';
	import { t } from '$stores/language';

	let {
		titleKey,
		subtitleKey,
		badgeKey,
		variant,
		children
	}: {
		titleKey: string;
		subtitleKey: string;
		badgeKey?: string;
		variant: 'viewer' | 'merge' | 'split' | 'to-text' | 'extract' | 'metadata';
		children: Snippet;
	} = $props();

	const titleId = $derived(`pdf-tool-title-${titleKey.replaceAll('.', '-')}`);
</script>

<section
	class="relative min-h-0 flex-1 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-elevated)] shadow-[var(--shadow-md)]"
	aria-labelledby={titleId}
>
	<div class="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--accent)] opacity-[0.07] blur-3xl" aria-hidden="true"></div>
	<div
		class="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[var(--accent)] opacity-[0.05] blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.35]"
		aria-hidden="true"
		style="background-image: radial-gradient(var(--border-subtle) 1px, transparent 1px); background-size: 20px 20px;"
	></div>

	<div class="relative flex min-h-0 flex-col gap-[var(--space-6)] p-[var(--space-5)] sm:p-[var(--space-8)]">
		<header class="flex flex-col gap-[var(--space-4)] lg:flex-row lg:items-start lg:justify-between lg:gap-[var(--space-8)]">
			<div class="flex min-w-0 gap-[var(--space-4)]">
				<div
					class="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--accent)] shadow-[var(--shadow-sm)] ring-1 ring-[var(--accent-border)]"
				>
					{#if variant === 'viewer'}
						<BookOpen size={26} strokeWidth={1.75} aria-hidden="true" />
					{:else if variant === 'merge'}
						<Layers2 size={26} strokeWidth={1.75} aria-hidden="true" />
					{:else if variant === 'split'}
						<Scissors size={26} strokeWidth={1.75} aria-hidden="true" />
					{:else if variant === 'to-text'}
						<FileText size={26} strokeWidth={1.75} aria-hidden="true" />
					{:else if variant === 'extract'}
						<FileOutput size={26} strokeWidth={1.75} aria-hidden="true" />
					{:else}
						<Info size={26} strokeWidth={1.75} aria-hidden="true" />
					{/if}
				</div>
				<div class="min-w-0 flex-1 space-y-[var(--space-2)]">
					<h2
						id={titleId}
						class="text-balance text-[length:var(--text-xl)] font-[number:var(--weight-semibold)] tracking-tight text-[var(--text-primary)] sm:text-[length:var(--text-2xl)]"
					>
						{$t(titleKey, '')}
					</h2>
					<p class="max-w-[52ch] text-pretty text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]">
						{$t(subtitleKey, '')}
					</p>
					{#if badgeKey}
						<p
							class="inline-flex w-fit items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-dim)] px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--accent)]"
						>
							{$t(badgeKey, '')}
						</p>
					{/if}
				</div>
			</div>
		</header>

		<div class="min-h-[min(52vh,420px)] flex-1">
			{@render children()}
		</div>
	</div>
</section>
