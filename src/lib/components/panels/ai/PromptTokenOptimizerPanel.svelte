<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		MODEL_PROFILES,
		PROMPT_OPTIMIZER_DEFAULT_TEXT,
		PROMPT_OPTIMIZER_WORKER_THRESHOLD_BYTES,
		optimizePrompt,
		shouldUsePromptOptimizerWorker,
		type AiModelId,
		type PromptOptimizationOptions,
		type PromptOptimizationResult,
		type PromptOptimizerWorkerRequest,
		type PromptOptimizerWorkerResponse
	} from '$engines/ai/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Eraser, Upload } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type ModelProfile = (typeof MODEL_PROFILES)[number];

	type PendingWorkerRequest = {
		resolve: (value: PromptOptimizationResult) => void;
		reject: (reason: Error) => void;
	};

	type PromptOptionId =
		| 'removeFillerWords'
		| 'compressWhitespace'
		| 'simplifyMarkdown'
		| 'abbreviateKnownPatterns';

	type PromptOptimizerUiOptions = Record<PromptOptionId, boolean>;

	type PromptOptionItem = {
		id: PromptOptionId;
		labelKey: string;
		fallbackLabel: string;
		descriptionKey: string;
		fallbackDescription: string;
	};

	type StatCard = {
		label: string;
		value: string;
		helper: string;
	};

	const DEFAULT_OPTIONS: PromptOptimizerUiOptions = {
		removeFillerWords: true,
		compressWhitespace: true,
		simplifyMarkdown: true,
		abbreviateKnownPatterns: false
	};

	const ACCEPTED_TEXT_FILE_TYPES = '.txt,.md,.json,.jsonl,.csv,.log,.yaml,.yml,.xml,.toml';

	const optionItems: PromptOptionItem[] = [
		{
			id: 'removeFillerWords',
			labelKey: 'ui.prompt_optimizer.option.filler',
			fallbackLabel: 'Remove filler words',
			descriptionKey: 'ui.prompt_optimizer.option.filler_desc',
			fallbackDescription: 'Trim low-signal phrases while preserving intent.'
		},
		{
			id: 'compressWhitespace',
			labelKey: 'ui.prompt_optimizer.option.whitespace',
			fallbackLabel: 'Compress whitespace',
			descriptionKey: 'ui.prompt_optimizer.option.whitespace_desc',
			fallbackDescription: 'Normalize repeated spaces and blank lines.'
		},
		{
			id: 'simplifyMarkdown',
			labelKey: 'ui.prompt_optimizer.option.markdown',
			fallbackLabel: 'Simplify Markdown',
			descriptionKey: 'ui.prompt_optimizer.option.markdown_desc',
			fallbackDescription: 'Reduce decorative formatting that costs tokens.'
		},
		{
			id: 'abbreviateKnownPatterns',
			labelKey: 'ui.prompt_optimizer.option.abbreviation',
			fallbackLabel: 'Use abbreviations',
			descriptionKey: 'ui.prompt_optimizer.option.abbreviation_desc',
			fallbackDescription: 'Shorten common AI prompt phrases where safe.'
		}
	];

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let selectedModelId = $state<AiModelId>(getDefaultModelId());
	let optimizerOptions = $state<PromptOptimizerUiOptions>({ ...DEFAULT_OPTIONS });
	let optimizationResult = $state<PromptOptimizationResult | null>(null);
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');
	let fileInputElement: HTMLInputElement | undefined = $state(undefined);

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new Map<number, PendingWorkerRequest>();

	let lineCount = $derived($input.length === 0 ? 0 : $input.split(/\r?\n/).length);
	let inputStatusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${$input.length.toLocaleString()} ${$t('ui.prompt_optimizer.characters', 'chars')} · ${lineCount.toLocaleString()} ${$t('ui.text_counter.lines', 'lines')}`
	);
	let isWorkerEligible = $derived(shouldUsePromptOptimizerWorker($input));
	let workerThresholdLabel = $derived(formatByteSize(PROMPT_OPTIMIZER_WORKER_THRESHOLD_BYTES));
	let optimizedText = $derived(readOptimizedText(optimizationResult));
	let beforeTokens = $derived(readBeforeTokenCount(optimizationResult));
	let afterTokens = $derived(readAfterTokenCount(optimizationResult));
	let savedTokens = $derived(readSavedTokens(optimizationResult));
	let savingsPercent = $derived(readSavingsPercent(optimizationResult));
	let estimatedCostSaved = $derived(readEstimatedCostSaved(optimizationResult));
	let durationMs = $derived(readDurationMs(optimizationResult));
	let outputStatusLine = $derived(
		`${afterTokens.toLocaleString()} ${$t('ui.prompt_optimizer.tokens', 'tokens')} · ${optimizedText.length.toLocaleString()} ${$t('ui.prompt_optimizer.characters', 'chars')}`
	);
	let statCards = $derived<StatCard[]>([
		{
			label: $t('ui.prompt_optimizer.stat.before', 'Before'),
			value: beforeTokens.toLocaleString(),
			helper: $t('ui.prompt_optimizer.stat.before_helper', 'Original token count')
		},
		{
			label: $t('ui.prompt_optimizer.stat.after', 'After'),
			value: afterTokens.toLocaleString(),
			helper: $t('ui.prompt_optimizer.stat.after_helper', 'Optimized token count')
		},
		{
			label: $t('ui.prompt_optimizer.stat.saved', 'Saved tokens'),
			value: savedTokens.toLocaleString(),
			helper: $t('ui.prompt_optimizer.stat.saved_helper', 'Estimated reduction')
		},
		{
			label: $t('ui.prompt_optimizer.stat.savings_percent', 'Savings'),
			value: formatPercent(savingsPercent),
			helper: $t('ui.prompt_optimizer.stat.savings_percent_helper', 'Before vs after')
		},
		{
			label: $t('ui.prompt_optimizer.stat.cost_saved', 'Cost saved'),
			value: formatCurrency(estimatedCostSaved),
			helper: getModelLabelById(selectedModelId)
		}
	]);

	onMount(() => {
		initializeInputForTool();
	});

	onDestroy(() => {
		releaseWorker();
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initializeInputForTool();
	});

	$effect(() => {
		if (initializedToolSlug === '') return;

		const inputValue = $input;
		const modelId = selectedModelId;
		const optionsSnapshot: PromptOptimizerUiOptions = { ...optimizerOptions };
		const token = ++latestProcessToken;
		const useWorker = shouldUsePromptOptimizerWorker(inputValue);

		isProcessing = true;
		void processInput(token, inputValue, modelId, optionsSnapshot, useWorker);
	});

	function initializeInputForTool(): void {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;

		if ($input.length === 0) {
			input.set(PROMPT_OPTIMIZER_DEFAULT_TEXT);
		}
	}

	async function processInput(
		token: number,
		inputValue: string,
		modelId: AiModelId,
		options: PromptOptimizerUiOptions,
		useWorker: boolean
	): Promise<void> {
		try {
			const nextResult = useWorker
				? await runWorker(inputValue, modelId, options)
				: await optimizePrompt(inputValue, modelId, toPromptOptimizationOptions(options));
			if (token !== latestProcessToken) return;
			optimizationResult = nextResult;
			processedByWorker = useWorker;
		} catch {
			if (token !== latestProcessToken) return;
			optimizationResult = await optimizePrompt(inputValue, modelId, toPromptOptimizationOptions(options));
			processedByWorker = false;
			addToast(
				'error',
				$t(
					'ui.prompt_optimizer.worker_failed',
					'Worker optimization failed. Falling back to main thread processing.'
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

		workerInstance = new Worker(new URL('../../../workers/ai-token-optimizer.worker.ts', import.meta.url), {
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

	function handleWorkerMessage(event: MessageEvent<PromptOptimizerWorkerResponse>): void {
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

	function runWorker(
		inputValue: string,
		modelId: AiModelId,
		options: PromptOptimizerUiOptions
	): Promise<PromptOptimizationResult> {
		const worker = ensureWorker();

		return new Promise<PromptOptimizationResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });

			const request: PromptOptimizerWorkerRequest = {
				id: requestId,
				input: inputValue,
				selectedModelId: modelId,
				options: toPromptOptimizationOptions(options)
			};

			worker.postMessage(request);
		});
	}

	function handleTextInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		input.set(target.value);
	}

	function handleModelChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		selectedModelId = target.value as AiModelId;
	}

	function handleOptionChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const optionId = target.dataset.option;
		if (!isPromptOptionId(optionId)) return;

		optimizerOptions = {
			...optimizerOptions,
			[optionId]: target.checked
		};
	}

	function loadSampleInput(): void {
		input.set(PROMPT_OPTIMIZER_DEFAULT_TEXT);
		optimizerOptions = { ...DEFAULT_OPTIONS };
	}

	function openFilePicker(): void {
		fileInputElement?.click();
	}

	async function handleFileInputChange(event: Event): Promise<void> {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;

		const file = target.files?.[0];
		if (!file) return;

		try {
			const text = await file.text();
			input.set(text);
			addToast(
				'success',
				$t('ui.prompt_optimizer.file_loaded', { name: file.name }, 'Loaded {name}')
			);
		} catch {
			addToast(
				'error',
				$t('ui.prompt_optimizer.file_failed', 'Could not load file')
			);
		} finally {
			target.value = '';
		}
	}

	function clearInputValue(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('category.ai.display_name', 'AI') },
			'Clear the current input?'
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

	async function copyOptimizedOutput(): Promise<void> {
		if (!optimizedText.trim()) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}

		try {
			await navigator.clipboard.writeText(optimizedText);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	function toPromptOptimizationOptions(
		options: PromptOptimizerUiOptions
	): Partial<PromptOptimizationOptions> {
		return { ...options } as Partial<PromptOptimizationOptions>;
	}

	function isPromptOptionId(value: string | undefined): value is PromptOptionId {
		return (
			value === 'removeFillerWords' ||
			value === 'compressWhitespace' ||
			value === 'simplifyMarkdown' ||
			value === 'abbreviateKnownPatterns'
		);
	}

	function getModelProfiles(): ModelProfile[] {
		return [...MODEL_PROFILES];
	}

	function getDefaultModelId(): AiModelId {
		const firstProfile = MODEL_PROFILES[0];
		if (!firstProfile) {
			return 'gpt-4o' as AiModelId;
		}

		return getProfileId(firstProfile);
	}

	function getProfileId(profile: ModelProfile): AiModelId {
		return readStringFromRecord(profile, ['id'], 'gpt-4o') as AiModelId;
	}

	function getProfileLabel(profile: ModelProfile): string {
		return readStringFromRecord(profile, ['displayName', 'label', 'name', 'id'], 'GPT-4o');
	}

	function getModelLabelById(modelId: AiModelId): string {
		const profile = getModelProfiles().find((candidate) => getProfileId(candidate) === modelId);
		return profile ? getProfileLabel(profile) : String(modelId);
	}

	function readOptimizedText(result: PromptOptimizationResult | null): string {
		return readStringFromRecord(
			result,
			['optimizedText', 'optimizedPrompt', 'output', 'text'],
			$input.length > 0 ? $input : ''
		);
	}

	function readBeforeTokenCount(result: PromptOptimizationResult | null): number {
		return readNumberFromRecord(
			result,
			['beforeTokenCount', 'originalTokenCount', 'inputTokenCount', 'tokensBefore', 'beforeTokens'],
			0
		);
	}

	function readAfterTokenCount(result: PromptOptimizationResult | null): number {
		return readNumberFromRecord(
			result,
			['afterTokenCount', 'optimizedTokenCount', 'outputTokenCount', 'tokensAfter', 'afterTokens'],
			0
		);
	}

	function readSavedTokens(result: PromptOptimizationResult | null): number {
		const explicitValue = readNumberFromRecord(
			result,
			['savedTokens', 'tokensSaved', 'tokenSavings'],
			Number.NaN
		);
		if (Number.isFinite(explicitValue)) return Math.max(0, explicitValue);

		return Math.max(0, readBeforeTokenCount(result) - readAfterTokenCount(result));
	}

	function readSavingsPercent(result: PromptOptimizationResult | null): number {
		const explicitValue = readNumberFromRecord(
			result,
			['savingsPercent', 'percentSaved', 'tokenSavingsPercent'],
			Number.NaN
		);
		if (Number.isFinite(explicitValue)) return Math.max(0, explicitValue);

		const before = readBeforeTokenCount(result);
		return before > 0 ? (readSavedTokens(result) / before) * 100 : 0;
	}

	function readEstimatedCostSaved(result: PromptOptimizationResult | null): number {
		return readNumberFromRecord(
			result,
			['estimatedCostSavedUsd', 'costSavedUsd', 'estimatedSavingsUsd'],
			0
		);
	}

	function readDurationMs(result: PromptOptimizationResult | null): number {
		return readNumberFromRecord(result, ['durationMs', 'processingTimeMs'], 0);
	}

	function readNumberFromRecord(
		value: object | null,
		keys: string[],
		fallbackValue: number
	): number {
		if (value === null) return fallbackValue;
		const record = value as Record<string, unknown>;

		for (const key of keys) {
			const candidate = record[key];
			if (typeof candidate === 'number' && Number.isFinite(candidate)) {
				return candidate;
			}
		}

		return fallbackValue;
	}

	function readStringFromRecord(value: object | null, keys: string[], fallbackValue: string): string {
		if (value === null) return fallbackValue;
		const record = value as Record<string, unknown>;

		for (const key of keys) {
			const candidate = record[key];
			if (typeof candidate === 'string') {
				return candidate;
			}
		}

		return fallbackValue;
	}

	function formatPercent(value: number): string {
		return `${value.toFixed(1)}%`;
	}

	function formatCurrency(value: number): string {
		if (!Number.isFinite(value) || value <= 0) return '$0.000000';
		if (value < 0.000001) return '<$0.000001';
		if (value < 0.01) return `$${value.toFixed(6)}`;
		return `$${value.toFixed(4)}`;
	}

	function formatDuration(value: number): string {
		return `${value.toFixed(2)} ms`;
	}
</script>

<div class="flex h-full min-h-0 w-full flex-col">
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="ai"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
		<div class="grid grid-cols-1 gap-[var(--space-3)] xl:grid-cols-[minmax(220px,320px)_minmax(0,1fr)]">
			<label class="flex flex-col gap-[var(--space-1)]">
				<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
					{$t('ui.prompt_optimizer.model_label', 'Model')}
				</span>
				<select
					value={selectedModelId}
					onchange={handleModelChange}
					class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none"
				>
					{#each getModelProfiles() as profile (getProfileId(profile))}
						<option value={getProfileId(profile)}>{getProfileLabel(profile)}</option>
					{/each}
				</select>
			</label>

			<div class="flex flex-wrap items-end justify-between gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<div class="flex flex-col gap-[var(--space-1)]">
					<span>{inputStatusLine}</span>
					{#if isWorkerEligible}
						<span>
							{$t(
								'ui.prompt_optimizer.worker_active',
								{ size: workerThresholdLabel },
								'Large input detected (>{size}). Optimization runs in a Web Worker.'
							)}
						</span>
					{/if}
				</div>

				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					<input
						bind:this={fileInputElement}
						type="file"
						accept={ACCEPTED_TEXT_FILE_TYPES}
						onchange={handleFileInputChange}
						class="hidden"
						aria-label={$t('ui.prompt_optimizer.upload_file', 'Upload file')}
					/>
					<button
						type="button"
						onclick={loadSampleInput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						{$t('ui.actions.sample', 'Sample')}
					</button>
					<button
						type="button"
						onclick={openFilePicker}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Upload size={14} />
						{$t('ui.prompt_optimizer.upload_file', 'Upload file')}
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
		</div>

		<div class="mt-[var(--space-3)] grid grid-cols-1 gap-[var(--space-2)] md:grid-cols-2 xl:grid-cols-4">
			{#each optionItems as option (option.id)}
				<label class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						data-option={option.id}
						checked={optimizerOptions[option.id]}
						onchange={handleOptionChange}
						class="mt-[2px] h-4 w-4 rounded border-[var(--border-default)]"
					/>
					<span>
						<span class="block font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							{$t(option.labelKey, option.fallbackLabel)}
						</span>
						<span class="mt-[var(--space-1)] block text-[var(--text-tertiary)]">
							{$t(option.descriptionKey, option.fallbackDescription)}
						</span>
					</span>
				</label>
			{/each}
		</div>
	</div>

	<div class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-2 xl:divide-x xl:divide-[var(--border-default)]">
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
				{$t('ui.prompt_optimizer.input_label', 'Original prompt')}
			</div>
			<textarea
				value={$input}
				oninput={handleTextInput}
				class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t('ui.prompt_optimizer.input_placeholder', 'Paste a prompt to optimize for token usage...')}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.prompt_optimizer.output_label', 'Optimized output')}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.prompt_optimizer.processing', 'Optimizing...')}</span>
					{/if}
					{#if processedByWorker}
						<span class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[var(--text-secondary)]">
							{$t('ui.prompt_optimizer.worker_badge', 'Worker')}
						</span>
					{/if}
					<span>{formatDuration(durationMs)}</span>
					<button
						type="button"
						onclick={copyOptimizedOutput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Copy size={14} />
						{$t('ui.prompt_optimizer.copy_output', 'Copy optimized')}
					</button>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-[var(--space-2)] border-b border-[var(--border-default)] p-[var(--space-3)] lg:grid-cols-5">
				{#each statCards as card (card.label)}
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{card.label}</div>
						<div class="mt-[var(--space-1)] text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							{card.value}
						</div>
						<div class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{card.helper}</div>
					</div>
				{/each}
			</div>

			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.prompt_optimizer.preview_title', 'Preview')}</span>
				<span>{outputStatusLine}</span>
			</div>

			<textarea
				readonly
				value={optimizedText}
				class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t('ui.prompt_optimizer.output_placeholder', 'Optimized prompt appears here...')}
				spellcheck="false"
			></textarea>
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
