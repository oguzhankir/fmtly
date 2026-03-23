<script lang="ts">
	import { get } from 'svelte/store';
	import EncodeToolFrame from '$components/panels/encode/EncodeToolFrame.svelte';
	import {
		GITIGNORE_TEMPLATE_KEYS,
		mergeGitignoreTemplates,
		type GitignoreTemplateKey
	} from '$engines/generate/index.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Search } from 'lucide-svelte';

	let selected = $state<Set<GitignoreTemplateKey>>(new Set(['node', 'macos', 'vscode']));
	let filter = $state('');

	let filteredKeys = $derived(
		GITIGNORE_TEMPLATE_KEYS.filter((k) => k.toLowerCase().includes(filter.trim().toLowerCase()))
	);

	let output = $derived(mergeGitignoreTemplates([...selected]));

	function toggle(key: GitignoreTemplateKey): void {
		const n = new Set(selected);
		if (n.has(key)) n.delete(key);
		else n.add(key);
		selected = n;
	}

	async function copyOut(): Promise<void> {
		const tr = get(t);
		try {
			await navigator.clipboard.writeText(output);
			addToast('success', tr('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', tr('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}
</script>

<div class="flex h-full min-h-0 w-full flex-col">
	<EncodeToolFrame>
		{#snippet toolbar()}
			<div class="flex flex-col gap-[var(--space-3)]">
				<div class="relative max-w-md">
					<Search
						class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[var(--text-tertiary)]"
						aria-hidden="true"
					/>
					<input
						type="search"
						class="h-10 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] py-[var(--space-2)] pl-10 pr-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
						placeholder={$t('ui.generate_gitignore.search', 'Filter stacks…')}
						bind:value={filter}
					/>
				</div>
				<div class="flex max-h-[min(36vh,320px)] flex-wrap gap-[var(--space-2)] overflow-y-auto">
					{#each filteredKeys as key}
						<button
							type="button"
							class="rounded-[var(--radius-md)] border px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)]"
							class:border-[var(--accent)]={selected.has(key)}
							class:bg-[var(--accent-dim)]={selected.has(key)}
							class:border-[var(--border-default)]={!selected.has(key)}
							class:bg-[var(--bg-base)]={!selected.has(key)}
							onclick={() => {
								toggle(key);
							}}
						>
							{key}
						</button>
					{/each}
				</div>
			</div>
		{/snippet}
		{#snippet main()}
			<div class="flex h-full min-h-0 flex-1 flex-col">
				<div
					class="flex flex-wrap items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)]"
				>
					<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">.gitignore</span>
					<button
						type="button"
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)]"
						onclick={() => {
							void copyOut();
						}}
					>
						<Copy size={14} />
						{$t('ui.actions.copy', 'Copy')}
					</button>
				</div>
				<textarea
					readonly
					class="min-h-[280px] flex-1 resize-none border-0 bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--text-primary)] outline-none"
					value={output}
					spellcheck="false"
				></textarea>
			</div>
		{/snippet}
	</EncodeToolFrame>
</div>
