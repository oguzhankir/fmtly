<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import {
		analyzeText,
		generateLoremIpsum,
		type LoremGenerationMode,
		type LoremGenerationResult,
		type LoremOutputFormat
	} from '$engines/text/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Download, Eraser, RefreshCw, Settings, WandSparkles } from 'lucide-svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';

	let {
		toolSlug,
		workspaceTools = []
	}: {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	} = $props();

	let initializedToolSlug = $state('');
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');
	let showAdvanced = $state(false);
	let autoGenerate = $state(true);
	let outputView = $state<'source' | 'preview'>('source');

	let mode = $state<LoremGenerationMode>('paragraphs');
	let count = $state(3);
	let seed = $state(2026);
	let includeClassicOpening = $state(true);
	let outputFormat = $state<LoremOutputFormat>('plain');
	let minWordsPerSentence = $state(6);
	let maxWordsPerSentence = $state(16);
	let minSentencesPerParagraph = $state(3);
	let maxSentencesPerParagraph = $state(6);

	let result = $state<LoremGenerationResult>(createEmptyResult());

	let lineCount = $derived($input.length === 0 ? 0 : $input.split(/\r?\n/).length);
	let statusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${lineCount.toLocaleString()} ${$t('ui.text_counter.lines', 'lines')}`
	);

	let modeOptions = $derived(
		[
			{ value: 'paragraphs' as const, label: $t('ui.lorem.mode.paragraphs', 'Paragraphs') },
			{ value: 'sentences' as const, label: $t('ui.lorem.mode.sentences', 'Sentences') },
			{ value: 'words' as const, label: $t('ui.lorem.mode.words', 'Words') }
		] as const
	);

	function createEmptyResult(): LoremGenerationResult {
		const empty = '';
		return {
			text: empty,
			plainText: empty,
			mode,
			outputFormat,
			seed,
			metrics: analyzeText(empty)
		};
	}

	function maxCountForMode(nextMode: LoremGenerationMode): number {
		if (nextMode === 'words') return 5000;
		if (nextMode === 'sentences') return 1000;
		return 300;
	}

	function clampInteger(value: number, min: number, max: number): number {
		if (!Number.isFinite(value)) return min;
		return Math.min(max, Math.max(min, Math.floor(value)));
	}

	function normalizeCount(nextValue: number): number {
		return clampInteger(nextValue, 1, maxCountForMode(mode));
	}

	function generateText(): void {
		const generated = generateLoremIpsum({
			mode,
			count,
			seed,
			includeClassicOpening,
			outputFormat,
			minWordsPerSentence,
			maxWordsPerSentence,
			minSentencesPerParagraph,
			maxSentencesPerParagraph
		});

		result = generated;
		input.set(generated.text);
	}

	function handleGenerate(): void {
		generateText();
		addToast('success', $t('ui.lorem.generated', 'Lorem Ipsum generated'));
	}

	function handleModeSelect(nextMode: LoremGenerationMode): void {
		mode = nextMode;
		count = normalizeCount(count);
	}

	function handleCountInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		count = normalizeCount(Number(target.value));
	}

	function handleSeedInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		seed = clampInteger(Number(target.value), 1, 2147483647);
	}

	function handleOutputFormatChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		outputFormat = target.value === 'html' ? 'html' : 'plain';
	}

	function handleAutoGenerateChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		autoGenerate = target.checked;
	}

	function handleClassicOpeningChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		includeClassicOpening = target.checked;
	}

	function updateMinWordsPerSentence(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const nextValue = clampInteger(Number(target.value), 2, 40);
		minWordsPerSentence = nextValue;
		if (nextValue > maxWordsPerSentence) {
			maxWordsPerSentence = nextValue;
		}
	}

	function updateMaxWordsPerSentence(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const nextValue = clampInteger(Number(target.value), 2, 40);
		maxWordsPerSentence = nextValue;
		if (nextValue < minWordsPerSentence) {
			minWordsPerSentence = nextValue;
		}
	}

	function updateMinSentencesPerParagraph(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const nextValue = clampInteger(Number(target.value), 1, 20);
		minSentencesPerParagraph = nextValue;
		if (nextValue > maxSentencesPerParagraph) {
			maxSentencesPerParagraph = nextValue;
		}
	}

	function updateMaxSentencesPerParagraph(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const nextValue = clampInteger(Number(target.value), 1, 20);
		maxSentencesPerParagraph = nextValue;
		if (nextValue < minSentencesPerParagraph) {
			minSentencesPerParagraph = nextValue;
		}
	}

	function randomizeSeed(): void {
		seed = Math.floor(Math.random() * 2147483647) + 1;
		addToast('success', $t('ui.lorem.seed_randomized', 'Seed randomized'));
		if (!autoGenerate) {
			generateText();
		}
	}

	async function copyOutput(): Promise<void> {
		if (!$input) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}

		try {
			await navigator.clipboard.writeText($input);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	function downloadOutput(): void {
		if (!$input) {
			addToast('info', $t('ui.lorem.no_output', 'No generated output yet'));
			return;
		}

		const extension = outputFormat === 'html' ? 'html' : 'txt';
		const file = new Blob([$input], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(file);
		const link = document.createElement('a');
		link.href = url;
		link.download = `lorem-ipsum-${mode}-${count}.${extension}`;
		link.click();
		URL.revokeObjectURL(url);
		addToast('success', $t('ui.toast.download_success', 'Downloaded successfully'));
	}

	function setSourceView(): void {
		outputView = 'source';
	}

	function setPreviewView(): void {
		outputView = 'preview';
	}

	function toggleAdvanced(): void {
		showAdvanced = !showAdvanced;
	}

	function clearOutput(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('category.text.display_name', 'Text') },
			'Clear the current text input?'
		);
		confirmMessage = $t('ui.confirm.clear_description', 'This action cannot be undone.');
		confirmModalOpen = true;
	}

	function doClearOutput(): void {
		result = createEmptyResult();
		input.set('');
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
	}

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		generateText();
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		generateText();
	});

	$effect(() => {
		if (!autoGenerate) return;
		mode;
		count;
		seed;
		includeClassicOpening;
		outputFormat;
		minWordsPerSentence;
		maxWordsPerSentence;
		minSentencesPerParagraph;
		maxSentencesPerParagraph;
		generateText();
	});

	$effect(() => {
		if (outputFormat === 'plain' && outputView === 'preview') {
			outputView = 'source';
		}
	});
</script>

<div class="flex h-full w-full flex-col">
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="text"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
		<div class="grid grid-cols-1 gap-[var(--space-2)] xl:grid-cols-12">
			<div class="xl:col-span-5">
				<p id="lorem-mode-label" class="mb-[var(--space-1)] block text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
					{$t('ui.lorem.mode', 'Mode')}
				</p>
				<div role="group" aria-labelledby="lorem-mode-label" class="flex flex-wrap gap-[var(--space-1)]">
					{#each modeOptions as item}
						<button
							type="button"
							aria-pressed={mode === item.value}
							onclick={() => handleModeSelect(item.value)}
							class="rounded-[var(--radius-md)] border px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] {mode === item.value
								? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
								: 'border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]'}"
						>
							{item.label}
						</button>
					{/each}
				</div>
			</div>

			<div class="xl:col-span-2">
				<label for="lorem-count" class="mb-[var(--space-1)] block text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
					{$t('ui.lorem.count', 'Count')}
				</label>
				<input
					id="lorem-count"
					type="number"
					min="1"
					max={maxCountForMode(mode)}
					value={count}
					oninput={handleCountInput}
					class="h-9 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none focus:border-[var(--color-primary)]"
				/>
			</div>

			<div class="xl:col-span-3">
				<label for="lorem-seed" class="mb-[var(--space-1)] block text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
					{$t('ui.lorem.seed', 'Seed')}
				</label>
				<div class="flex gap-[var(--space-1)]">
					<input
						id="lorem-seed"
						type="number"
						min="1"
						max="2147483647"
						value={seed}
						oninput={handleSeedInput}
						class="h-9 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none focus:border-[var(--color-primary)]"
					/>
					<button
						type="button"
						onclick={randomizeSeed}
						class="inline-flex h-9 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<RefreshCw size={14} />
						<span class="sr-only">{$t('ui.lorem.random_seed', 'Randomize seed')}</span>
					</button>
				</div>
			</div>

			<div class="xl:col-span-2 flex items-end">
				<button
					type="button"
					onclick={handleGenerate}
					class="inline-flex h-9 w-full items-center justify-center gap-[var(--space-1)] rounded-[var(--radius-md)] bg-[var(--color-primary)] px-[var(--space-3)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-white hover:opacity-90"
				>
					<WandSparkles size={14} />
					{$t('ui.lorem.generate', 'Generate')}
				</button>
			</div>
		</div>

		<div class="mt-[var(--space-3)] flex flex-wrap items-center gap-x-[var(--space-3)] gap-y-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
			<label class="inline-flex items-center gap-[var(--space-1)]">
				<input type="checkbox" checked={includeClassicOpening} onchange={handleClassicOpeningChange} />
				<span>{$t('ui.lorem.include_classic_opening', 'Include classic opening')}</span>
			</label>

			<label class="inline-flex items-center gap-[var(--space-1)]">
				<input type="checkbox" checked={autoGenerate} onchange={handleAutoGenerateChange} />
				<span>{$t('ui.lorem.auto_generate', 'Auto-generate on changes')}</span>
			</label>

			<div class="inline-flex items-center gap-[var(--space-1)]">
				<label for="lorem-output-format">{$t('ui.lorem.output_format', 'Output format')}</label>
				<select
					id="lorem-output-format"
					value={outputFormat}
					onchange={handleOutputFormatChange}
					class="h-8 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-primary)]"
				>
					<option value="plain">{$t('ui.lorem.output_format.plain', 'Plain text')}</option>
					<option value="html">{$t('ui.lorem.output_format.html', 'HTML')}</option>
				</select>
			</div>

			<button
				type="button"
				onclick={toggleAdvanced}
				class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] hover:bg-[var(--bg-surface-hover)]"
			>
				<Settings size={13} />
				{$t('ui.lorem.advanced_options', 'Advanced options')}
			</button>
		</div>

		{#if showAdvanced}
			<div class="mt-[var(--space-3)] grid grid-cols-1 gap-[var(--space-2)] md:grid-cols-2 xl:grid-cols-4">
				<div>
					<label for="lorem-min-words" class="mb-[var(--space-1)] block text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.lorem.min_words_per_sentence', 'Min words / sentence')}
					</label>
					<input
						id="lorem-min-words"
						type="number"
						min="2"
						max="40"
						value={minWordsPerSentence}
						oninput={updateMinWordsPerSentence}
						class="h-9 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none"
					/>
				</div>
				<div>
					<label for="lorem-max-words" class="mb-[var(--space-1)] block text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.lorem.max_words_per_sentence', 'Max words / sentence')}
					</label>
					<input
						id="lorem-max-words"
						type="number"
						min="2"
						max="40"
						value={maxWordsPerSentence}
						oninput={updateMaxWordsPerSentence}
						class="h-9 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none"
					/>
				</div>
				<div>
					<label for="lorem-min-sentences" class="mb-[var(--space-1)] block text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.lorem.min_sentences_per_paragraph', 'Min sentences / paragraph')}
					</label>
					<input
						id="lorem-min-sentences"
						type="number"
						min="1"
						max="20"
						value={minSentencesPerParagraph}
						oninput={updateMinSentencesPerParagraph}
						disabled={mode !== 'paragraphs'}
						class="h-9 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none disabled:opacity-50"
					/>
				</div>
				<div>
					<label for="lorem-max-sentences" class="mb-[var(--space-1)] block text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.lorem.max_sentences_per_paragraph', 'Max sentences / paragraph')}
					</label>
					<input
						id="lorem-max-sentences"
						type="number"
						min="1"
						max="20"
						value={maxSentencesPerParagraph}
						oninput={updateMaxSentencesPerParagraph}
						disabled={mode !== 'paragraphs'}
						class="h-9 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none disabled:opacity-50"
					/>
				</div>
			</div>
		{/if}
	</div>

	<div class="border-b border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-3)]">
		<div class="grid grid-cols-2 gap-[var(--space-2)] sm:grid-cols-3 lg:grid-cols-6">
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.text_counter.words', 'Words')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{result.metrics.words.toLocaleString()}
				</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.text_counter.characters', 'Characters')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{result.metrics.characters.toLocaleString()}
				</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.text_counter.characters_no_spaces', 'Characters (no spaces)')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{result.metrics.charactersNoSpaces.toLocaleString()}
				</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.text_counter.sentences', 'Sentences')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{result.metrics.sentences.toLocaleString()}
				</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.text_counter.paragraphs', 'Paragraphs')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{result.metrics.paragraphs.toLocaleString()}
				</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.text_counter.reading_time', 'Reading time')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{result.metrics.readingTimeMinutes} {$t('ui.text_counter.minutes', 'min')}
				</div>
			</div>
		</div>
	</div>

	<div class="flex min-h-0 flex-1 flex-col bg-[var(--bg-base)]">
		<div class="flex flex-wrap items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
			<span>{statusLine}</span>
			<div class="flex items-center gap-[var(--space-1)]">
				{#if outputFormat === 'html'}
					<button
						type="button"
						onclick={setSourceView}
						class="rounded-[var(--radius-sm)] border px-[var(--space-2)] py-[2px] {outputView === 'source' ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-[var(--border-default)] text-[var(--text-secondary)]'}"
					>
						{$t('ui.lorem.source', 'Source')}
					</button>
					<button
						type="button"
						onclick={setPreviewView}
						class="rounded-[var(--radius-sm)] border px-[var(--space-2)] py-[2px] {outputView === 'preview' ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-[var(--border-default)] text-[var(--text-secondary)]'}"
					>
						{$t('ui.lorem.preview', 'Preview')}
					</button>
				{/if}
				<button
					type="button"
					onclick={copyOutput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<Copy size={12} />
					{$t('ui.actions.copy', 'Copy')}
				</button>
				<button
					type="button"
					onclick={downloadOutput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<Download size={12} />
					{$t('ui.actions.download', 'Download')}
				</button>
				<button
					type="button"
					onclick={clearOutput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<Eraser size={12} />
					{$t('ui.actions.clear', 'Clear')}
				</button>
			</div>
		</div>

		<div class="min-h-0 flex-1 overflow-hidden">
			{#if outputFormat === 'html' && outputView === 'preview'}
				<div class="h-full overflow-auto p-[var(--space-4)]">
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)]">
						{@html result.text}
					</div>
				</div>
			{:else}
				<textarea
					readonly
					value={result.text}
					class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
					placeholder={$t('ui.lorem.empty_output', 'Generated output will appear here...')}
				></textarea>
			{/if}
		</div>
	</div>
</div>

<ConfirmModal
	bind:open={confirmModalOpen}
	title={confirmTitle}
	message={confirmMessage}
	onConfirm={doClearOutput}
	onCancel={() => {}}
/>
