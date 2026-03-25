<script lang="ts">
	import InputPanel from '$components/panels/shared/InputPanel.svelte';
	import { jsonNdjsonEntries } from '$stores/json.store';
	import type { NdjsonEntry } from '$engines/json/json.engine.js';
	import { output } from '$stores/output.store';
	import { Download } from 'lucide-svelte';
	import { t } from '$stores/language';

	let {
		toolSlug,
		inputLanguage,
		sampleInput = '',
		downloadFilename = 'output'
	}: {
		toolSlug: string;
		inputLanguage: string;
		sampleInput?: string;
		downloadFilename?: string;
	} = $props();

	function handleDownload(): void {
		const value = $output;
		if (!value) return;

		const blob = new Blob([value], { type: 'application/json;charset=utf-8' });
		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = `${downloadFilename}.json`;
		a.click();

		URL.revokeObjectURL(url);
	}

	function getEntryLabel(entry: NdjsonEntry): { title: string; subtitle?: string } {
		if (entry.kind === 'error') {
			const column = entry.error.column;
			const subtitle =
				column != null
					? ($t as any)(
							'ui.validator.line_col_label',
							{ line: entry.lineNumber, column },
							`Line ${entry.lineNumber}, column ${column}`
						)
					: undefined;

			return { title: `Line ${entry.lineNumber}`, subtitle };
		}

		return { title: `Line ${entry.lineNumber}` };
	}
</script>

<div class="flex h-full w-full flex-col gap-[var(--space-4)]">
	<InputPanel
		toolSlug={toolSlug}
		inputLanguage={inputLanguage}
		sampleInput={sampleInput}
		acceptedExtensions={['.json', '.txt']}
	/>

	<div class="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-[var(--space-3)]">
		<div class="mb-[var(--space-3)] flex items-center justify-between gap-[var(--space-3)]">
			<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
				{$t('tool.ndjson.entries_title', 'NDJSON entries')}
			</div>

			<button
				onclick={handleDownload}
				class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]"
				aria-label={$t('ui.layout.aria.download_output', 'Download output')}
			>
				<Download size={12} />
				{$t('ui.actions.download', 'Download')}
			</button>
		</div>

		{#if $jsonNdjsonEntries.length === 0}
			<div class="flex h-[160px] w-full items-center justify-center rounded-[var(--radius-md)] border border-dashed border-[var(--border-subtle)] bg-[var(--bg-base)]">
				<p class="text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
					{$t('tool.output_placeholder', 'Output will appear here')}
				</p>
			</div>
		{:else}
			<div class="overflow-auto rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-base)]">
				{#each $jsonNdjsonEntries as entry (entry.lineNumber + '-' + entry.kind)}
					<div class="flex gap-[var(--space-4)] border-b border-[var(--border-subtle)] last:border-b-0 p-[var(--space-3)]">
						<div class="min-w-[96px]">
							<div class="font-[number:var(--weight-semibold)] text-[length:var(--text-sm)] text-[var(--text-primary)]">
								{getEntryLabel(entry).title}
							</div>
							{#if entry.kind === 'error'}
								<div class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
									{$t('ui.validator.error', 'Error')}
								</div>
								{#if getEntryLabel(entry).subtitle}
									<div class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
										{getEntryLabel(entry).subtitle}
									</div>
								{/if}
							{/if}
						</div>

						<div class="min-w-0 flex-1">
							{#if entry.kind === 'value'}
								<pre class="overflow-auto whitespace-pre-wrap break-words font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)]">
									<code>{entry.formatted}</code>
								</pre>
							{:else}
								<div class="space-y-[var(--space-2)]">
									<div class="font-[number:var(--weight-semibold)] text-[length:var(--text-sm)] text-[var(--text-primary)]">
										{entry.error.plainLanguageExplanation ?? entry.error.message}
									</div>
									<div class="whitespace-pre-wrap font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
										{entry.error.message}
									</div>
								</div>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

