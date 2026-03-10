<script lang="ts">
	import { input } from '$stores/input.store';
	import { countWords, readability, type WordStats, type ReadabilityResult } from '$lib/engines/text/text.engine.js';
	export let toolSlug: 'word-counter' | 'readability';

	let wordStats: WordStats | null = null;
	let readStats: ReadabilityResult | null = null;
	
	$: {
		if (toolSlug === 'word-counter') {
			wordStats = countWords($input);
		} else if (toolSlug === 'readability') {
			readStats = readability($input);
		}
	}
</script>

<div class="flex flex-col gap-[var(--space-6)] w-full max-w-[800px] mx-auto">
	<div class="flex flex-col gap-[var(--space-2)]">
		<label class="text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)]" for="text-input">
			Input Text
		</label>
		<textarea
			id="text-input"
			class="w-full min-h-[300px] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)] text-[length:var(--text-sm)] text-[var(--text-primary)] focus:border-[var(--border-focus)] focus:outline-none focus:ring-1 focus:ring-[var(--border-focus)] transition-colors resize-y"
			placeholder="Type or paste your text here..."
			bind:value={$input}
		></textarea>
	</div>

	{#if toolSlug === 'word-counter' && wordStats}
		<!-- Stats Grid -->
		<div class="grid grid-cols-2 md:grid-cols-3 gap-[var(--space-4)]">
			<div class="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-4)]">
				<span class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)] uppercase tracking-wider">Words</span>
				<span class="text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{wordStats.words}</span>
			</div>
			<div class="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-4)]">
				<span class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)] uppercase tracking-wider">Characters</span>
				<span class="text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{wordStats.characters}</span>
			</div>
			<div class="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-4)]">
				<span class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)] uppercase tracking-wider">Chars (no spaces)</span>
				<span class="text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{wordStats.charactersNoSpaces}</span>
			</div>
			<div class="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-4)]">
				<span class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)] uppercase tracking-wider">Sentences</span>
				<span class="text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{wordStats.sentences}</span>
			</div>
			<div class="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-4)]">
				<span class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)] uppercase tracking-wider">Paragraphs</span>
				<span class="text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{wordStats.paragraphs}</span>
			</div>
			<div class="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-4)]">
				<span class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)] uppercase tracking-wider">Reading Time</span>
				<span class="text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{wordStats.readingTimeMinutes} min</span>
			</div>
		</div>

		{#if wordStats.topKeywords.length > 0}
			<div class="flex flex-col gap-[var(--space-2)]">
				<h3 class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">Keyword Density</h3>
				<div class="overflow-x-auto border border-[var(--border-default)] rounded-[var(--radius-md)] bg-[var(--bg-surface)]">
					<table class="w-full text-left border-collapse">
						<thead>
							<tr class="bg-[var(--bg-inset)] border-b border-[var(--border-default)]">
								<th class="px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-secondary)]">Keyword</th>
								<th class="px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-secondary)]">Count</th>
							</tr>
						</thead>
						<tbody>
							{#each wordStats.topKeywords as { word, count }}
								<tr class="border-b border-[var(--border-subtle)] last:border-0 hover:bg-[var(--bg-inset)] transition-colors">
									<td class="px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]">{word}</td>
									<td class="px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] font-[family-name:var(--font-mono)]">{count}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		{/if}

	{:else if toolSlug === 'readability' && readStats}
		<!-- Readability Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)]">
			<div class="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-4)]">
				<span class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)] uppercase tracking-wider">Flesch-Kincaid Grade Level</span>
				<span class="text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{readStats.fleschKincaid}</span>
			</div>
			<div class="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-4)]">
				<span class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)] uppercase tracking-wider">Flesch Reading Ease</span>
				<span class="text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{readStats.fleschReading}</span>
			</div>
			<div class="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-4)]">
				<span class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)] uppercase tracking-wider">Gunning Fog Index</span>
				<span class="text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{readStats.gunningFog}</span>
			</div>
			<div class="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-4)]">
				<span class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)] uppercase tracking-wider">SMOG Index</span>
				<span class="text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{readStats.smog}</span>
			</div>
			<div class="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-4)]">
				<span class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)] uppercase tracking-wider">Coleman-Liau Index</span>
				<span class="text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{readStats.colemanLiau}</span>
			</div>
			<div class="flex flex-col bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-[var(--space-4)]">
				<span class="text-[length:var(--text-xs)] text-[var(--text-secondary)] font-[number:var(--weight-medium)] uppercase tracking-wider">Sentence & Word Stats</span>
				<div class="flex flex-col mt-[var(--space-1)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
					<span>Avg Words/Sentence: <strong>{readStats.averageWordsPerSentence}</strong></span>
					<span>Avg Syllables/Word: <strong>{readStats.averageSyllablesPerWord}</strong></span>
				</div>
			</div>
		</div>
	{/if}
</div>
