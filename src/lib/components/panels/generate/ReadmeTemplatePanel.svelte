<script lang="ts">
	import { get } from 'svelte/store';
	import EncodeToolFrame from '$components/panels/encode/EncodeToolFrame.svelte';
	import { buildReadmeMarkdown, type ReadmeTemplateFields } from '$engines/generate/index.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy } from 'lucide-svelte';

	let fields = $state<ReadmeTemplateFields>({
		title: 'My Project',
		description: 'A short description of what this project does.',
		install: '```bash\nnpm install\n```',
		usage: '```bash\nnpm start\n```',
		license: 'MIT',
		includeBadges: false,
		repoUser: '',
		repoName: ''
	});

	let output = $derived(buildReadmeMarkdown(fields));

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
			<div class="grid grid-cols-1 gap-[var(--space-3)] lg:grid-cols-2">
				<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<span class="font-[number:var(--weight-semibold)]">{$t('ui.generate_readme.title', 'Title')}</span>
					<input
						type="text"
						class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[var(--text-primary)]"
						bind:value={fields.title}
					/>
				</label>
				<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<span class="font-[number:var(--weight-semibold)]">{$t('ui.generate_readme.license', 'License')}</span>
					<input
						type="text"
						class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[var(--text-primary)]"
						bind:value={fields.license}
					/>
				</label>
				<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] lg:col-span-2">
					<span class="font-[number:var(--weight-semibold)]">{$t('ui.generate_readme.description', 'Description')}</span>
					<textarea
						class="min-h-[72px] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
						bind:value={fields.description}
					></textarea>
				</label>
				<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] lg:col-span-2">
					<span class="font-[number:var(--weight-semibold)]">{$t('ui.generate_readme.install', 'Installation')}</span>
					<textarea
						class="min-h-[88px] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[var(--space-2)] font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--text-primary)]"
						bind:value={fields.install}
					></textarea>
				</label>
				<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] lg:col-span-2">
					<span class="font-[number:var(--weight-semibold)]">{$t('ui.generate_readme.usage', 'Usage')}</span>
					<textarea
						class="min-h-[88px] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[var(--space-2)] font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--text-primary)]"
						bind:value={fields.usage}
					></textarea>
				</label>
				<div class="flex flex-col gap-[var(--space-2)] lg:col-span-2">
					<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						<input type="checkbox" bind:checked={fields.includeBadges} class="rounded border-[var(--border-default)]" />
						{$t('ui.generate_readme.badges', 'Include GitHub-style badges')}
					</label>
					{#if fields.includeBadges}
						<div class="flex flex-wrap gap-[var(--space-3)]">
							<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)]">
								<span>{$t('ui.generate_readme.repo_user', 'GitHub user/org')}</span>
								<input
									type="text"
									class="h-9 w-48 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)]"
									bind:value={fields.repoUser}
								/>
							</label>
							<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)]">
								<span>{$t('ui.generate_readme.repo_name', 'Repository name')}</span>
								<input
									type="text"
									class="h-9 w-48 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)]"
									bind:value={fields.repoName}
								/>
							</label>
						</div>
					{/if}
				</div>
			</div>
		{/snippet}
		{#snippet main()}
			<div class="flex h-full min-h-0 flex-1 flex-col">
				<div
					class="flex flex-wrap items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)]"
				>
					<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">README.md</span>
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
					class="min-h-[280px] flex-1 resize-none border-0 bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none"
					value={output}
					spellcheck="false"
				></textarea>
			</div>
		{/snippet}
	</EncodeToolFrame>
</div>
