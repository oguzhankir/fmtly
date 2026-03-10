<script lang="ts">
	import { textOptions } from '$stores/text.store';
	export let toolSlug: string;
</script>

{#if toolSlug === 'line-sorter'}
	<div class="flex items-center gap-[var(--space-4)] px-[var(--space-4)] py-[var(--space-2)] bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] overflow-x-auto whitespace-nowrap">
		<div class="flex items-center gap-[var(--space-2)]">
			<label class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)]" for="sort-direction">Direction</label>
			<select id="sort-direction" class="text-[length:var(--text-sm)] bg-[var(--bg-inset)] border border-[var(--border-default)] rounded-[var(--radius-sm)] px-[var(--space-2)] py-[var(--space-1)]" bind:value={$textOptions.sortDirection}>
				<option value="asc">Ascending (A-Z)</option>
				<option value="desc">Descending (Z-A)</option>
			</select>
		</div>

		<div class="flex items-center gap-[var(--space-2)]">
			<label class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)]" for="sort-mode">Mode</label>
			<select id="sort-mode" class="text-[length:var(--text-sm)] bg-[var(--bg-inset)] border border-[var(--border-default)] rounded-[var(--radius-sm)] px-[var(--space-2)] py-[var(--space-1)]" bind:value={$textOptions.sortMode}>
				<option value="alpha">Alphabetical</option>
				<option value="numeric">Numerical</option>
				<option value="length">Length</option>
			</select>
		</div>

		<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] cursor-pointer">
			<input type="checkbox" bind:checked={$textOptions.caseSensitive} class="w-4 h-4 rounded border-[var(--border-default)] text-[var(--color-accent)] focus:ring-[var(--color-accent)] transition-colors" />
			<span>Case Sensitive</span>
		</label>
	</div>
{:else if toolSlug === 'deduplicate'}
	<div class="flex items-center gap-[var(--space-4)] px-[var(--space-4)] py-[var(--space-2)] bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] overflow-x-auto whitespace-nowrap">
		<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] cursor-pointer">
			<input type="checkbox" bind:checked={$textOptions.caseSensitive} class="w-4 h-4 rounded border-[var(--border-default)] text-[var(--color-accent)] focus:ring-[var(--color-accent)] transition-colors" />
			<span>Case Sensitive</span>
		</label>
	</div>
{:else if toolSlug === 'whitespace'}
	<div class="flex items-center gap-[var(--space-4)] px-[var(--space-4)] py-[var(--space-2)] bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] overflow-x-auto whitespace-nowrap">
		<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] cursor-pointer">
			<input type="checkbox" bind:checked={$textOptions.trimLines} class="w-4 h-4 rounded border-[var(--border-default)] text-[var(--color-accent)] focus:ring-[var(--color-accent)] transition-colors" />
			<span>Trim Lines</span>
		</label>
		<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] cursor-pointer">
			<input type="checkbox" bind:checked={$textOptions.collapseSpaces} class="w-4 h-4 rounded border-[var(--border-default)] text-[var(--color-accent)] focus:ring-[var(--color-accent)] transition-colors" />
			<span>Collapse Spaces</span>
		</label>
		<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] cursor-pointer">
			<input type="checkbox" bind:checked={$textOptions.normalizeNewlines} class="w-4 h-4 rounded border-[var(--border-default)] text-[var(--color-accent)] focus:ring-[var(--color-accent)] transition-colors" />
			<span>Normalize Newlines</span>
		</label>
		<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] cursor-pointer">
			<input type="checkbox" bind:checked={$textOptions.removeBlankLines} class="w-4 h-4 rounded border-[var(--border-default)] text-[var(--color-accent)] focus:ring-[var(--color-accent)] transition-colors" />
			<span>Remove Blank Lines</span>
		</label>
	</div>
{:else if toolSlug === 'markdown-to-html'}
	<div class="flex items-center gap-[var(--space-4)] px-[var(--space-4)] py-[var(--space-2)] bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] overflow-x-auto whitespace-nowrap">
		<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] cursor-pointer">
			<input type="checkbox" bind:checked={$textOptions.markdownPreview} class="w-4 h-4 rounded border-[var(--border-default)] text-[var(--color-accent)] focus:ring-[var(--color-accent)] transition-colors" />
			<span>Show Rendered Preview</span>
		</label>
	</div>
{:else if toolSlug === 'reverser'}
	<div class="flex items-center gap-[var(--space-4)] px-[var(--space-4)] py-[var(--space-2)] bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] overflow-x-auto whitespace-nowrap">
		<div class="flex items-center gap-[var(--space-2)]">
			<label class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)]" for="reverse-mode">Reverse By</label>
			<select id="reverse-mode" class="text-[length:var(--text-sm)] bg-[var(--bg-inset)] border border-[var(--border-default)] rounded-[var(--radius-sm)] px-[var(--space-2)] py-[var(--space-1)]" bind:value={$textOptions.reverserMode}>
				<option value="chars">Characters</option>
				<option value="words">Words</option>
				<option value="lines">Lines</option>
			</select>
		</div>
	</div>
{/if}
