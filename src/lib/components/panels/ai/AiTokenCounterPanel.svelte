<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		AI_TOKEN_WORKER_THRESHOLD_BYTES,
		MODEL_PROFILES,
		TOKEN_COUNTER_DEFAULT_TEXT,
		analyzeAiTokens,
		shouldUseAiTokenWorker,
		type AiModelId,
		type AiTokenCounterResult,
		type AiTokenCounterWorkerRequest,
		type AiTokenCounterWorkerResponse
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
		resolve: (value: AiTokenCounterResult) => void;
		reject: (reason: Error) => void;
	};

	type ModelAnalysis = {
		modelId: AiModelId;
		label: string;
		provider: string;
		result: AiTokenCounterResult;
	};

	type StatCard = {
		label: string;
		value: string;
		helper: string;
	};

	const ACCEPTED_TEXT_FILE_TYPES = '.txt,.md,.json,.jsonl,.csv,.log,.yaml,.yml,.xml,.toml';

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let selectedModelId = $state<AiModelId>(getDefaultModelId());
	let selectedResult = $state<AiTokenCounterResult | null>(null);
	let modelAnalyses = $state.raw<ModelAnalysis[]>([]);
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
		`${formatByteSize($inputByteSize)} · ${$input.length.toLocaleString()} ${$t('ui.ai_tokens.characters', 'chars')} · ${lineCount.toLocaleString()} ${$t('ui.text_counter.lines', 'lines')}`
	);
	let isWorkerEligible = $derived(shouldUseAiTokenWorker($input));
	let workerThresholdLabel = $derived(formatByteSize(AI_TOKEN_WORKER_THRESHOLD_BYTES));
	let selectedModelLabel = $derived(getModelLabelById(selectedModelId));
	let selectedTokens = $derived(readTokenCount(selectedResult));
	let selectedWords = $derived(readWordCount(selectedResult));
	let selectedCharacters = $derived(readCharacterCount(selectedResult));
	let selectedTokensPerWord = $derived(readTokensPerWord(selectedResult));
	let selectedCost = $derived(readEstimatedCost(selectedResult));
	let selectedDuration = $derived(readDurationMs(selectedResult));
	let statCards = $derived<StatCard[]>([
		{
			label: $t('ui.ai_tokens.stat.tokens', 'Tokens'),
			value: selectedTokens.toLocaleString(),
			helper: selectedModelLabel
		},
		{
			label: $t('ui.ai_tokens.stat.words', 'Words'),
			value: selectedWords.toLocaleString(),
			helper: $t('ui.ai_tokens.stat.words_helper', 'Whitespace-delimited words')
		},
		{
			label: $t('ui.ai_tokens.stat.characters', 'Characters'),
			value: selectedCharacters.toLocaleString(),
			helper: formatByteSize($inputByteSize)
		},
		{
			label: $t('ui.ai_tokens.stat.tokens_per_word', 'Tokens / word'),
			value: formatRatio(selectedTokensPerWord),
			helper: $t('ui.ai_tokens.stat.tokens_per_word_helper', 'Lower is usually cheaper')
		},
		{
			label: $t('ui.ai_tokens.stat.estimated_cost', 'Estimated cost'),
			value: formatCurrency(selectedCost),
			helper: $t('ui.ai_tokens.stat.estimated_cost_helper', 'Input token estimate')
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
		const token = ++latestProcessToken;
		const useWorker = shouldUseAiTokenWorker(inputValue);

		isProcessing = true;
		void processInput(token, inputValue, modelId, useWorker);
	});

	function initializeInputForTool(): void {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;

		if ($input.length === 0) {
			input.set(TOKEN_COUNTER_DEFAULT_TEXT);
		}
	}

	async function processInput(
		token: number,
		inputValue: string,
		modelId: AiModelId,
		useWorker: boolean
	): Promise<void> {
		try {
			const profiles = getModelProfiles();
			const analyses = await Promise.all(
				profiles.map(async (profile) => {
					const profileModelId = getProfileId(profile);
					const result = await runAnalysis(inputValue, profileModelId, useWorker);
					return {
						modelId: profileModelId,
						label: getProfileLabel(profile),
						provider: getProfileProvider(profile),
						result
					};
				})
			);

			if (token !== latestProcessToken) return;

			modelAnalyses = analyses;
			selectedResult =
				analyses.find((analysis) => analysis.modelId === modelId)?.result ?? analyses[0]?.result ?? null;
			processedByWorker = useWorker;
		} catch {
			if (token !== latestProcessToken) return;
			addToast(
				'error',
				$t(
					'ui.ai_tokens.worker_failed',
					'Token analysis failed. Try a smaller input or refresh the page.'
				)
			);
		} finally {
			if (token === latestProcessToken) {
				isProcessing = false;
			}
		}
	}

	async function runAnalysis(
		inputValue: string,
		modelId: AiModelId,
		useWorker: boolean
	): Promise<AiTokenCounterResult> {
		if (useWorker) {
			return runWorker(inputValue, modelId);
		}

		return analyzeAiTokens(inputValue, modelId);
	}

	function ensureWorker(): Worker {
		if (workerInstance !== null) {
			return workerInstance;
		}

		workerInstance = new Worker(new URL('../../../workers/ai-token-counter.worker.ts', import.meta.url), {
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

	function handleWorkerMessage(event: MessageEvent<AiTokenCounterWorkerResponse>): void {
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

	function runWorker(inputValue: string, modelId: AiModelId): Promise<AiTokenCounterResult> {
		const worker = ensureWorker();

		return new Promise<AiTokenCounterResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });

			const request: AiTokenCounterWorkerRequest = {
				id: requestId,
				input: inputValue,
				selectedModelId: modelId
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

	function loadSampleInput(): void {
		input.set(TOKEN_COUNTER_DEFAULT_TEXT);
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
				$t('ui.ai_tokens.file_loaded', { name: file.name }, 'Loaded {name}')
			);
		} catch {
			addToast(
				'error',
				$t('ui.ai_tokens.file_failed', 'Could not load file')
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

	async function copySummary(): Promise<void> {
		if (!$input.trim() || selectedResult === null) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}

		const lines: string[] = [
			$t('ui.ai_tokens.copy.title', 'AI token summary'),
			`${$t('ui.ai_tokens.model_label', 'Model')}: ${selectedModelLabel}`,
			`${$t('ui.ai_tokens.stat.tokens', 'Tokens')}: ${selectedTokens.toLocaleString()}`,
			`${$t('ui.ai_tokens.stat.words', 'Words')}: ${selectedWords.toLocaleString()}`,
			`${$t('ui.ai_tokens.stat.characters', 'Characters')}: ${selectedCharacters.toLocaleString()}`,
			`${$t('ui.ai_tokens.stat.tokens_per_word', 'Tokens / word')}: ${formatRatio(selectedTokensPerWord)}`,
			`${$t('ui.ai_tokens.stat.estimated_cost', 'Estimated cost')}: ${formatCurrency(selectedCost)}`
		];

		try {
			await navigator.clipboard.writeText(lines.join('\n'));
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
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

	function getProfileProvider(profile: ModelProfile): string {
		return readStringFromRecord(profile, ['provider', 'family'], '');
	}

	function getModelLabelById(modelId: AiModelId): string {
		const profile = getModelProfiles().find((candidate) => getProfileId(candidate) === modelId);
		return profile ? getProfileLabel(profile) : String(modelId);
	}

	function readTokenCount(result: AiTokenCounterResult | null): number {
		return readNumberFromRecord(result, ['tokenCount', 'tokens', 'estimatedTokens'], 0);
	}

	function readWordCount(result: AiTokenCounterResult | null): number {
		return readNumberFromRecord(result, ['wordCount', 'words'], 0);
	}

	function readCharacterCount(result: AiTokenCounterResult | null): number {
		return readNumberFromRecord(result, ['characterCount', 'characters', 'chars'], $input.length);
	}

	function readTokensPerWord(result: AiTokenCounterResult | null): number {
		const explicitValue = readNumberFromRecord(
			result,
			['tokensPerWord', 'tokenPerWordRatio', 'tokensPerWordRatio'],
			Number.NaN
		);
		if (Number.isFinite(explicitValue)) return explicitValue;

		const words = readWordCount(result);
		return words > 0 ? readTokenCount(result) / words : 0;
	}

	function readEstimatedCost(result: AiTokenCounterResult | null): number {
		return readNumberFromRecord(result, ['estimatedCostUsd', 'costUsd', 'estimatedCost'], 0);
	}

	function readDurationMs(result: AiTokenCounterResult | null): number {
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

	function readStringFromRecord(value: object, keys: string[], fallbackValue: string): string {
		const record = value as Record<string, unknown>;

		for (const key of keys) {
			const candidate = record[key];
			if (typeof candidate === 'string' && candidate.length > 0) {
				return candidate;
			}
		}

		return fallbackValue;
	}

	function formatRatio(value: number): string {
		return Number.isFinite(value) ? value.toFixed(2) : '0.00';
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
					{$t('ui.ai_tokens.model_label', 'Model')}
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
								'ui.ai_tokens.worker_active',
								{ size: workerThresholdLabel },
								'Large input detected (>{size}). Token analysis runs in a Web Worker.'
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
						aria-label={$t('ui.ai_tokens.upload_file', 'Upload file')}
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
						{$t('ui.ai_tokens.upload_file', 'Upload file')}
					</button>
					<button
						type="button"
						onclick={copySummary}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Copy size={14} />
						{$t('ui.ai_tokens.copy_summary', 'Copy summary')}
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
	</div>

	<div class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] xl:divide-x xl:divide-[var(--border-default)]">
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
				{$t('ui.ai_tokens.input_label', 'Prompt or text')}
			</div>
			<textarea
				value={$input}
				oninput={handleTextInput}
				class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t('ui.ai_tokens.input_placeholder', 'Paste a prompt, chat transcript, or document to estimate tokens...')}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.ai_tokens.analysis_title', 'Token analysis')}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.ai_tokens.processing', 'Counting...')}</span>
					{/if}
					{#if processedByWorker}
						<span class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[var(--text-secondary)]">
							{$t('ui.ai_tokens.worker_badge', 'Worker')}
						</span>
					{/if}
					<span>{formatDuration(selectedDuration)}</span>
				</div>
			</div>

			<div class="min-h-0 flex-1 overflow-y-auto p-[var(--space-3)]">
				<div class="mb-[var(--space-3)] grid grid-cols-1 gap-[var(--space-2)] sm:grid-cols-2">
					{#each statCards as card (card.label)}
						<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-3)]">
							<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{card.label}</div>
							<div class="mt-[var(--space-1)] text-[length:var(--text-xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
								{card.value}
							</div>
							<div class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{card.helper}</div>
						</div>
					{/each}
				</div>

				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)]">
					<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
						{$t('ui.ai_tokens.comparison_title', 'Model comparison')}
					</div>
					<div class="overflow-x-auto">
						<table class="w-full min-w-[520px] text-left text-[length:var(--text-xs)]">
							<thead class="border-b border-[var(--border-default)] text-[var(--text-tertiary)]">
								<tr>
									<th class="px-[var(--space-3)] py-[var(--space-2)] font-[number:var(--weight-semibold)]">
										{$t('ui.ai_tokens.table.model', 'Model')}
									</th>
									<th class="px-[var(--space-3)] py-[var(--space-2)] text-right font-[number:var(--weight-semibold)]">
										{$t('ui.ai_tokens.table.tokens', 'Tokens')}
									</th>
									<th class="px-[var(--space-3)] py-[var(--space-2)] text-right font-[number:var(--weight-semibold)]">
										{$t('ui.ai_tokens.table.ratio', 'Tokens / word')}
									</th>
									<th class="px-[var(--space-3)] py-[var(--space-2)] text-right font-[number:var(--weight-semibold)]">
										{$t('ui.ai_tokens.table.cost', 'Cost')}
									</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-[var(--border-subtle)]">
								{#each modelAnalyses as analysis (analysis.modelId)}
									<tr class={analysis.modelId === selectedModelId ? 'bg-[var(--bg-surface)]' : ''}>
										<td class="px-[var(--space-3)] py-[var(--space-2)]">
											<div class="font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{analysis.label}</div>
											{#if analysis.provider}
												<div class="text-[var(--text-tertiary)]">{analysis.provider}</div>
											{/if}
										</td>
										<td class="px-[var(--space-3)] py-[var(--space-2)] text-right text-[var(--text-secondary)]">
											{readTokenCount(analysis.result).toLocaleString()}
										</td>
										<td class="px-[var(--space-3)] py-[var(--space-2)] text-right text-[var(--text-secondary)]">
											{formatRatio(readTokensPerWord(analysis.result))}
										</td>
										<td class="px-[var(--space-3)] py-[var(--space-2)] text-right text-[var(--text-secondary)]">
											{formatCurrency(readEstimatedCost(analysis.result))}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
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
