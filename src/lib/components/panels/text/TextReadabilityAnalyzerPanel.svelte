<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		analyzeTextReadability,
		shouldUseTextReadabilityWorker,
		TEXT_READABILITY_WORKER_THRESHOLD_BYTES,
		type TextReadabilityLevel,
		type TextReadabilityResult,
		type TextReadabilityWarningCode,
		type TextReadabilityWorkerRequest,
		type TextReadabilityWorkerResponse
	} from '$engines/text/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Eraser } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: TextReadabilityResult) => void;
		reject: (reason: Error) => void;
	};

	type ScoreItem = {
		labelKey: string;
		descriptionKey: string;
		score: number | null;
	};

	const SAMPLE_TEXT = `The readability analyzer helps technical teams assess how easy text is to understand.

Use short, direct sentences for instructions. Prefer concrete verbs over abstract phrasing. Replace stacked clauses with simple sentence structures so readers can scan quickly.

Before publishing docs, check readability scores to identify dense sections and improve clarity.`;

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let analysisResult = $state<TextReadabilityResult>(analyzeTextReadability(''));
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new Map<number, PendingWorkerRequest>();

	let lineCount = $derived($input.length === 0 ? 0 : $input.split(/\r?\n/).length);
	let inputStatusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${lineCount.toLocaleString()} ${$t('ui.text_counter.lines', 'lines')}`
	);
	let workerThresholdLabel = $derived(formatByteSize(TEXT_READABILITY_WORKER_THRESHOLD_BYTES));
	let isWorkerEligible = $derived(shouldUseTextReadabilityWorker($input));
	let warningMessages = $derived(
		analysisResult.warnings
			.map((warningCode) => getWarningMessage(warningCode))
			.filter((message) => message.length > 0)
	);
	let scoreItems = $derived<ScoreItem[]>([
		{
			labelKey: 'ui.readability.score.flesch_ease',
			descriptionKey: 'ui.readability.score_desc.flesch_ease',
			score: analysisResult.fleschReadingEase
		},
		{
			labelKey: 'ui.readability.score.flesch_kincaid',
			descriptionKey: 'ui.readability.score_desc.flesch_kincaid',
			score: analysisResult.fleschKincaidGrade
		},
		{
			labelKey: 'ui.readability.score.gunning_fog',
			descriptionKey: 'ui.readability.score_desc.gunning_fog',
			score: analysisResult.gunningFog
		},
		{
			labelKey: 'ui.readability.score.coleman_liau',
			descriptionKey: 'ui.readability.score_desc.coleman_liau',
			score: analysisResult.colemanLiau
		},
		{
			labelKey: 'ui.readability.score.smog',
			descriptionKey: 'ui.readability.score_desc.smog',
			score: analysisResult.smog
		}
	]);
	let levelLabel = $derived(getLevelLabel(analysisResult.level));
	let levelDescription = $derived(getLevelDescription(analysisResult.level));
	let readingAgeLabel = $derived(
		analysisResult.words === 0
			? $t('ui.readability.unavailable', '—')
			: `${analysisResult.estimatedReadingAgeMin}–${analysisResult.estimatedReadingAgeMax}`
	);

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;

		if ($input.length === 0) {
			input.set(SAMPLE_TEXT);
		}
	});

	onDestroy(() => {
		releaseWorker();
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	$effect(() => {
		const inputValue = $input;
		const token = ++latestProcessToken;
		const useWorker = shouldUseTextReadabilityWorker(inputValue);

		isProcessing = useWorker;

		void processInput(token, inputValue, useWorker);
	});

	async function processInput(token: number, inputValue: string, useWorker: boolean): Promise<void> {
		if (!useWorker) {
			analysisResult = analyzeTextReadability(inputValue);
			processedByWorker = false;
			isProcessing = false;
			return;
		}

		try {
			const workerResult = await runWorker(inputValue);
			if (token !== latestProcessToken) return;
			analysisResult = workerResult;
			processedByWorker = true;
		} catch {
			if (token !== latestProcessToken) return;
			analysisResult = analyzeTextReadability(inputValue);
			processedByWorker = false;
			addToast(
				'error',
				$t(
					'ui.readability.worker_failed',
					'Worker processing failed. Falling back to main thread analysis.'
				)
			);
		} finally {
			if (token === latestProcessToken) {
				isProcessing = false;
			}
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance !== null) {
			return workerInstance;
		}

		workerInstance = new Worker(new URL('../../../workers/text-readability.worker.ts', import.meta.url), {
			type: 'module'
		});
		workerInstance.onmessage = handleWorkerMessage;
		workerInstance.onerror = handleWorkerError;

		return workerInstance;
	}

	function releaseWorker(): void {
		if (workerInstance) {
			workerInstance.terminate();
			workerInstance = null;
		}

		for (const pending of pendingWorkerRequests.values()) {
			pending.reject(new Error('Worker terminated'));
		}
		pendingWorkerRequests.clear();
	}

	function handleWorkerMessage(event: MessageEvent<TextReadabilityWorkerResponse>): void {
		const message = event.data;
		const pending = pendingWorkerRequests.get(message.id);
		if (!pending) return;
		pendingWorkerRequests.delete(message.id);

		if (message.error) {
			pending.reject(new Error(message.error));
			return;
		}

		if (!message.result) {
			pending.reject(new Error('Worker returned no result'));
			return;
		}

		pending.resolve(message.result);
	}

	function handleWorkerError(): void {
		for (const pending of pendingWorkerRequests.values()) {
			pending.reject(new Error('Worker runtime error'));
		}
		pendingWorkerRequests.clear();
	}

	function runWorker(inputValue: string): Promise<TextReadabilityResult> {
		const worker = ensureWorker();

		return new Promise<TextReadabilityResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });

			const request: TextReadabilityWorkerRequest = {
				id: requestId,
				input: inputValue
			};

			worker.postMessage(request);
		});
	}

	function handleTextInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		input.set(target.value);
	}

	function loadSampleInput(): void {
		input.set(SAMPLE_TEXT);
	}

	function clearInputValue(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('category.text.display_name', 'Text') },
			'Clear the current text input?'
		);
		confirmMessage = $t('ui.confirm.clear_description', 'This action cannot be undone.');
		confirmModalOpen = true;
	}

	function doClearInput(): void {
		input.set('');
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
	}

	function noop(): void {
		return;
	}

	function formatScore(score: number | null): string {
		if (score === null) {
			return $t('ui.readability.unavailable', '—');
		}

		return score.toFixed(2);
	}

	function getWarningMessage(code: TextReadabilityWarningCode): string {
		switch (code) {
			case 'insufficient_sentences_for_smog':
				return $t(
					'ui.readability.warning.insufficient_sentences_for_smog',
					'SMOG needs at least 3 sentences for a stable estimate.'
				);
			default:
				return '';
		}
	}

	function getLevelLabel(level: TextReadabilityLevel): string {
		switch (level) {
			case 'very_easy':
				return $t('ui.readability.level.very_easy', 'Very Easy');
			case 'easy':
				return $t('ui.readability.level.easy', 'Easy');
			case 'fairly_easy':
				return $t('ui.readability.level.fairly_easy', 'Fairly Easy');
			case 'standard':
				return $t('ui.readability.level.standard', 'Standard');
			case 'fairly_difficult':
				return $t('ui.readability.level.fairly_difficult', 'Fairly Difficult');
			case 'difficult':
				return $t('ui.readability.level.difficult', 'Difficult');
			case 'very_difficult':
				return $t('ui.readability.level.very_difficult', 'Very Difficult');
			default:
				return $t('ui.readability.level.standard', 'Standard');
		}
	}

	function getLevelDescription(level: TextReadabilityLevel): string {
		switch (level) {
			case 'very_easy':
				return $t(
					'ui.readability.level_desc.very_easy',
					'Suitable for broad audiences and quick scanning.'
				);
			case 'easy':
				return $t('ui.readability.level_desc.easy', 'Clear language with minimal cognitive load.');
			case 'fairly_easy':
				return $t(
					'ui.readability.level_desc.fairly_easy',
					'Good for product docs, guides, and general web copy.'
				);
			case 'standard':
				return $t(
					'ui.readability.level_desc.standard',
					'Balanced readability for mixed technical and non-technical readers.'
				);
			case 'fairly_difficult':
				return $t(
					'ui.readability.level_desc.fairly_difficult',
					'Dense in parts — simplify long sentences where possible.'
				);
			case 'difficult':
				return $t(
					'ui.readability.level_desc.difficult',
					'Requires focused reading. Consider shorter sentences and simpler wording.'
				);
			case 'very_difficult':
				return $t(
					'ui.readability.level_desc.very_difficult',
					'Highly dense text. Rewrite for clarity before publishing widely.'
				);
			default:
				return '';
		}
	}

	function formatDuration(value: number): string {
		return `${value.toFixed(2)} ms`;
	}

	async function copySummary(): Promise<void> {
		if (!analysisResult.input.trim()) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}

		const lines: string[] = [
			$t('ui.readability.report_title', 'Readability Report'),
			`${$t('ui.readability.report_level', 'Level')}: ${levelLabel}`,
			`${$t('ui.readability.report_reading_age', 'Estimated reading age')}: ${readingAgeLabel}`,
			`${$t('ui.readability.score.flesch_ease', 'Flesch Reading Ease')}: ${formatScore(analysisResult.fleschReadingEase)}`,
			`${$t('ui.readability.score.flesch_kincaid', 'Flesch-Kincaid Grade')}: ${formatScore(analysisResult.fleschKincaidGrade)}`,
			`${$t('ui.readability.score.gunning_fog', 'Gunning Fog')}: ${formatScore(analysisResult.gunningFog)}`,
			`${$t('ui.readability.score.coleman_liau', 'Coleman-Liau Index')}: ${formatScore(analysisResult.colemanLiau)}`,
			`${$t('ui.readability.score.smog', 'SMOG')}: ${formatScore(analysisResult.smog)}`,
			`${$t('ui.readability.metric.words', 'Words')}: ${analysisResult.words.toLocaleString()}`,
			`${$t('ui.readability.metric.sentences', 'Sentences')}: ${analysisResult.sentences.toLocaleString()}`,
			`${$t('ui.readability.metric.syllables', 'Syllables')}: ${analysisResult.syllables.toLocaleString()}`
		];

		try {
			await navigator.clipboard.writeText(lines.join('\n'));
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}
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
		<div class="flex flex-wrap items-center justify-between gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
			<div class="flex items-center gap-[var(--space-2)]">
				<span>{inputStatusLine}</span>
				<span>{$t('ui.readability.metric.reading_time', 'Reading time')}: {analysisResult.readingTimeMinutes} {$t('ui.text_counter.minutes', 'min')}</span>
			</div>
			<div class="flex items-center gap-[var(--space-2)]">
				<button
					type="button"
					onclick={loadSampleInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					{$t('ui.actions.sample', 'Sample')}
				</button>
				<button
					type="button"
					onclick={copySummary}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<Copy size={14} />
					{$t('ui.readability.copy_report', 'Copy report')}
				</button>
				<button
					type="button"
					onclick={clearInputValue}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<Eraser size={14} />
					{$t('ui.actions.clear', 'Clear')}
				</button>
			</div>
		</div>
		{#if isWorkerEligible}
			<p class="mt-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				{$t(
					'ui.readability.worker_active',
					{ size: workerThresholdLabel },
					'Large input detected (>{size}). Analysis runs in a Web Worker.'
				)}
			</p>
		{/if}
	</div>

	<div class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:divide-x xl:divide-[var(--border-default)]">
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
				{$t('ui.readability.input_label', 'Input text')}
			</div>
			<textarea
				value={$input}
				oninput={handleTextInput}
				class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t('ui.readability.input_placeholder', 'Paste or type text to analyze readability...')}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.readability.output_title', 'Readability analysis')}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.readability.processing', 'Analyzing...')}</span>
					{/if}
					{#if processedByWorker}
						<span class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[var(--text-secondary)]">Worker</span>
					{/if}
					<span>{formatDuration(analysisResult.durationMs)}</span>
				</div>
			</div>

			<div class="min-h-0 flex-1 overflow-y-auto p-[var(--space-3)]">
				<div class="mb-[var(--space-3)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-3)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.readability.level_label', 'Overall readability')}</div>
					<div class="mt-[var(--space-1)] text-[length:var(--text-xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{levelLabel}</div>
					<p class="mt-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">{levelDescription}</p>
				</div>

				<div class="mb-[var(--space-3)] grid grid-cols-2 gap-[var(--space-2)] lg:grid-cols-4">
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.readability.metric.words', 'Words')}</div>
						<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{analysisResult.words.toLocaleString()}</div>
					</div>
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.readability.metric.sentences', 'Sentences')}</div>
						<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{analysisResult.sentences.toLocaleString()}</div>
					</div>
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.readability.metric.syllables', 'Syllables')}</div>
						<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{analysisResult.syllables.toLocaleString()}</div>
					</div>
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.readability.metric.reading_age', 'Reading age')}</div>
						<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{readingAgeLabel}</div>
					</div>
				</div>

				<div class="mb-[var(--space-3)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)]">
					<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
						{$t('ui.readability.scores_title', 'Readability formulas')}
					</div>
					<ul class="divide-y divide-[var(--border-subtle)]">
						{#each scoreItems as scoreItem}
							<li class="grid grid-cols-[minmax(0,1fr)_auto] gap-[var(--space-2)] px-[var(--space-3)] py-[var(--space-2)]">
								<div>
									<div class="text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)]">
										{$t(scoreItem.labelKey, scoreItem.labelKey)}
									</div>
									<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
										{$t(scoreItem.descriptionKey, scoreItem.descriptionKey)}
									</div>
								</div>
								<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
									{formatScore(scoreItem.score)}
								</div>
							</li>
						{/each}
					</ul>
				</div>

				<div class="grid grid-cols-2 gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[var(--space-2)]">
						{$t('ui.readability.metric.paragraphs', 'Paragraphs')}: {analysisResult.paragraphs.toLocaleString()}
					</div>
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[var(--space-2)]">
						{$t('ui.readability.metric.complex_words', 'Complex words')}: {analysisResult.complexWords.toLocaleString()}
					</div>
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[var(--space-2)]">
						{$t('ui.readability.stat.avg_words_per_sentence', 'Avg words/sentence')}: {analysisResult.averageWordsPerSentence.toFixed(2)}
					</div>
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[var(--space-2)]">
						{$t('ui.readability.stat.avg_syllables_per_word', 'Avg syllables/word')}: {analysisResult.averageSyllablesPerWord.toFixed(2)}
					</div>
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[var(--space-2)]">
						{$t('ui.readability.stat.characters', 'Characters')}: {analysisResult.characters.toLocaleString()}
					</div>
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] py-[var(--space-2)]">
						{$t('ui.readability.stat.letters', 'Letters')}: {analysisResult.letters.toLocaleString()}
					</div>
				</div>

				{#if warningMessages.length > 0}
					<div class="mt-[var(--space-3)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						{#each warningMessages as message}
							<p>{message}</p>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<ConfirmModal
	bind:open={confirmModalOpen}
	title={confirmTitle}
	message={confirmMessage}
	onConfirm={doClearInput}
	onCancel={noop}
/>
