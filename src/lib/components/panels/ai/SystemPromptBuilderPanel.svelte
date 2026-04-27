<script lang="ts">
	import { onDestroy } from 'svelte';
	import { SvelteMap } from 'svelte/reactivity';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		SYSTEM_PROMPT_BUILDER_DEFAULT_INPUT,
		SYSTEM_PROMPT_BUILDER_WORKER_THRESHOLD_BYTES,
		buildSystemPrompt,
		getSystemPromptTemplateDefaults,
		shouldUseSystemPromptBuilderWorker,
		type SystemPromptBuilderInput,
		type SystemPromptBuilderOptions,
		type SystemPromptBuilderResult,
		type SystemPromptBuilderWorkerRequest,
		type SystemPromptBuilderWorkerResponse,
		type SystemPromptOutputFormat,
		type SystemPromptTemplateId
	} from '$engines/ai/index.js';
	import { formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Download, Eraser } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: SystemPromptBuilderResult) => void;
		reject: (reason: Error) => void;
	};

	type BuilderFieldId = Exclude<keyof SystemPromptBuilderInput, 'templateId'>;
	type BuilderToggleOptionId = Exclude<keyof SystemPromptBuilderOptions, 'outputFormat'>;

	type TemplateItem = {
		id: SystemPromptTemplateId;
		labelKey: string;
		fallbackLabel: string;
	};

	type OutputFormatItem = {
		id: SystemPromptOutputFormat;
		labelKey: string;
		fallbackLabel: string;
	};

	type FieldItem = {
		id: BuilderFieldId;
		labelKey: string;
		fallbackLabel: string;
		placeholderKey: string;
		fallbackPlaceholder: string;
		rows: number;
	};

	type OptionItem = {
		id: BuilderToggleOptionId;
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

	const DEFAULT_OPTIONS: SystemPromptBuilderOptions = {
		outputFormat: 'plain-text',
		includeSafetyBoundaries: true,
		includeQualityChecklist: true,
		includeReasoningGuidance: true
	};

	const EMPTY_INPUT: SystemPromptBuilderInput = {
		templateId: 'custom',
		role: '',
		objective: '',
		context: '',
		constraints: '',
		examples: '',
		outputRequirements: ''
	};

	const templateItems: TemplateItem[] = [
		{
			id: 'custom',
			labelKey: 'ui.system_prompt_builder.template.custom',
			fallbackLabel: 'Custom'
		},
		{
			id: 'code-assistant',
			labelKey: 'ui.system_prompt_builder.template.code_assistant',
			fallbackLabel: 'Code assistant'
		},
		{
			id: 'data-analyst',
			labelKey: 'ui.system_prompt_builder.template.data_analyst',
			fallbackLabel: 'Data analyst'
		},
		{
			id: 'translator',
			labelKey: 'ui.system_prompt_builder.template.translator',
			fallbackLabel: 'Translator'
		},
		{
			id: 'customer-support',
			labelKey: 'ui.system_prompt_builder.template.customer_support',
			fallbackLabel: 'Customer support'
		}
	];

	const outputFormatItems: OutputFormatItem[] = [
		{
			id: 'plain-text',
			labelKey: 'ui.system_prompt_builder.format.plain_text',
			fallbackLabel: 'Plain text'
		},
		{
			id: 'openai-json',
			labelKey: 'ui.system_prompt_builder.format.openai_json',
			fallbackLabel: 'OpenAI JSON messages'
		}
	];

	const fieldItems: FieldItem[] = [
		{
			id: 'role',
			labelKey: 'ui.system_prompt_builder.field.role',
			fallbackLabel: 'Role',
			placeholderKey: 'ui.system_prompt_builder.placeholder.role',
			fallbackPlaceholder: 'Define the assistant identity and level of expertise...',
			rows: 3
		},
		{
			id: 'objective',
			labelKey: 'ui.system_prompt_builder.field.objective',
			fallbackLabel: 'Objective',
			placeholderKey: 'ui.system_prompt_builder.placeholder.objective',
			fallbackPlaceholder: 'Describe what the assistant should accomplish...',
			rows: 4
		},
		{
			id: 'context',
			labelKey: 'ui.system_prompt_builder.field.context',
			fallbackLabel: 'Context',
			placeholderKey: 'ui.system_prompt_builder.placeholder.context',
			fallbackPlaceholder: 'Add operating context, audience, domain, or product details...',
			rows: 4
		},
		{
			id: 'constraints',
			labelKey: 'ui.system_prompt_builder.field.constraints',
			fallbackLabel: 'Constraints',
			placeholderKey: 'ui.system_prompt_builder.placeholder.constraints',
			fallbackPlaceholder: 'List boundaries, policies, forbidden behavior, or hard requirements...',
			rows: 4
		},
		{
			id: 'examples',
			labelKey: 'ui.system_prompt_builder.field.examples',
			fallbackLabel: 'Examples',
			placeholderKey: 'ui.system_prompt_builder.placeholder.examples',
			fallbackPlaceholder: 'Provide example user requests and ideal assistant behavior...',
			rows: 5
		},
		{
			id: 'outputRequirements',
			labelKey: 'ui.system_prompt_builder.field.output_requirements',
			fallbackLabel: 'Output requirements',
			placeholderKey: 'ui.system_prompt_builder.placeholder.output_requirements',
			fallbackPlaceholder: 'Specify answer structure, formatting, citation, or tone requirements...',
			rows: 4
		}
	];

	const optionItems: OptionItem[] = [
		{
			id: 'includeSafetyBoundaries',
			labelKey: 'ui.system_prompt_builder.option.safety_boundaries',
			fallbackLabel: 'Safety boundaries',
			descriptionKey: 'ui.system_prompt_builder.option.safety_boundaries_desc',
			fallbackDescription: 'Add instructions for privacy, uncertainty, unsafe requests, and fabrication.'
		},
		{
			id: 'includeQualityChecklist',
			labelKey: 'ui.system_prompt_builder.option.quality_checklist',
			fallbackLabel: 'Quality checklist',
			descriptionKey: 'ui.system_prompt_builder.option.quality_checklist_desc',
			fallbackDescription: 'Add a final self-check for requirements, format, and limitations.'
		},
		{
			id: 'includeReasoningGuidance',
			labelKey: 'ui.system_prompt_builder.option.reasoning_guidance',
			fallbackLabel: 'Reasoning guidance',
			descriptionKey: 'ui.system_prompt_builder.option.reasoning_guidance_desc',
			fallbackDescription: 'Guide the assistant to think first and expose only useful conclusions.'
		}
	];

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let builderInput = $state<SystemPromptBuilderInput>(cloneBuilderInput(SYSTEM_PROMPT_BUILDER_DEFAULT_INPUT));
	let builderOptions = $state<SystemPromptBuilderOptions>({ ...DEFAULT_OPTIONS });
	let systemPromptResult = $state<SystemPromptBuilderResult | null>(null);
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new SvelteMap<number, PendingWorkerRequest>();

	let inputSnapshot = $derived.by(() => cloneBuilderInput(builderInput));
	let optionsSnapshot = $derived.by(() => cloneBuilderOptions(builderOptions));
	let serializedInput = $derived(serializeBuilderInput(inputSnapshot));
	let inputByteCount = $derived(getByteCount(serializedInput));
	let inputCharacterCount = $derived(getCharacterCount(serializedInput));
	let inputLineCount = $derived(serializedInput.length === 0 ? 0 : serializedInput.split(/\r?\n/u).length);
	let inputSizeLabel = $derived(formatByteSize(inputByteCount));
	let isWorkerEligible = $derived(shouldUseSystemPromptBuilderWorker(inputSnapshot));
	let workerThresholdLabel = $derived(formatByteSize(SYSTEM_PROMPT_BUILDER_WORKER_THRESHOLD_BYTES));
	let outputText = $derived(systemPromptResult?.output ?? '');
	let outputFormatLabel = $derived(getOutputFormatLabel(builderOptions.outputFormat));
	let durationMs = $derived(systemPromptResult?.durationMs ?? 0);
	let outputStatusLine = $derived(
		$t(
			'ui.system_prompt_builder.output_status',
			{
				size: formatByteSize(systemPromptResult?.byteCount ?? 0),
				characters: (systemPromptResult?.characterCount ?? 0).toLocaleString(),
				lines: (systemPromptResult?.lineCount ?? 0).toLocaleString()
			},
			'{size} · {characters} chars · {lines} lines'
		)
	);
	let inputStatusLine = $derived(
		$t(
			'ui.system_prompt_builder.input_status',
			{
				size: inputSizeLabel,
				characters: inputCharacterCount.toLocaleString(),
				lines: inputLineCount.toLocaleString()
			},
			'{size} · {characters} chars · {lines} lines'
		)
	);
	let statCards = $derived<StatCard[]>([
		{
			label: $t('ui.system_prompt_builder.stat.characters', 'Characters'),
			value: (systemPromptResult?.characterCount ?? 0).toLocaleString(),
			helper: $t('ui.system_prompt_builder.stat.characters_helper', 'Generated output')
		},
		{
			label: $t('ui.system_prompt_builder.stat.size', 'Size'),
			value: formatByteSize(systemPromptResult?.byteCount ?? 0),
			helper: $t('ui.system_prompt_builder.stat.size_helper', 'UTF-8 output size')
		},
		{
			label: $t('ui.system_prompt_builder.stat.lines', 'Lines'),
			value: (systemPromptResult?.lineCount ?? 0).toLocaleString(),
			helper: $t('ui.system_prompt_builder.stat.lines_helper', 'Preview line count')
		},
		{
			label: $t('ui.system_prompt_builder.stat.sections', 'Sections'),
			value: (systemPromptResult?.sections.length ?? 0).toLocaleString(),
			helper: outputFormatLabel
		}
	]);

	onDestroy(() => {
		releaseWorker();
	});

	$effect(() => {
		const inputValue = inputSnapshot;
		const optionsValue = optionsSnapshot;
		const token = ++latestProcessToken;

		if (isBuilderInputBlank(inputValue)) {
			systemPromptResult = null;
			isProcessing = false;
			processedByWorker = false;
			return;
		}

		isProcessing = true;
		void processInput(token, inputValue, optionsValue, shouldUseSystemPromptBuilderWorker(inputValue));
	});

	async function processInput(
		token: number,
		inputValue: SystemPromptBuilderInput,
		options: SystemPromptBuilderOptions,
		useWorker: boolean
	): Promise<void> {
		try {
			const { result, usedWorker, usedFallback } = await runBuilder(inputValue, options, useWorker);
			if (token !== latestProcessToken) return;

			systemPromptResult = result;
			processedByWorker = usedWorker;

			if (usedFallback) {
				addToast(
					'warning',
					$t(
						'ui.system_prompt_builder.worker_failed',
						'Worker build failed. Falling back to main thread processing.'
					)
				);
			}
		} catch {
			if (token !== latestProcessToken) return;
			systemPromptResult = null;
			processedByWorker = false;
			addToast(
				'error',
				$t(
					'ui.system_prompt_builder.build_failed',
					'Could not build the system prompt. Try reducing the input size.'
				)
			);
		} finally {
			if (token === latestProcessToken) {
				isProcessing = false;
			}
		}
	}

	async function runBuilder(
		inputValue: SystemPromptBuilderInput,
		options: SystemPromptBuilderOptions,
		useWorker: boolean
	): Promise<{ result: SystemPromptBuilderResult; usedWorker: boolean; usedFallback: boolean }> {
		if (!useWorker) {
			return {
				result: await buildSystemPrompt(inputValue, options),
				usedWorker: false,
				usedFallback: false
			};
		}

		try {
			return {
				result: await runWorker(inputValue, options),
				usedWorker: true,
				usedFallback: false
			};
		} catch {
			return {
				result: await buildSystemPrompt(inputValue, options),
				usedWorker: false,
				usedFallback: true
			};
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance !== null) {
			return workerInstance;
		}

		workerInstance = new Worker(new URL('../../../workers/system-prompt-builder.worker.ts', import.meta.url), {
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

	function handleWorkerMessage(event: MessageEvent<SystemPromptBuilderWorkerResponse>): void {
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
		inputValue: SystemPromptBuilderInput,
		options: SystemPromptBuilderOptions
	): Promise<SystemPromptBuilderResult> {
		const worker = ensureWorker();

		return new Promise<SystemPromptBuilderResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });

			const request: SystemPromptBuilderWorkerRequest = {
				id: requestId,
				input: cloneBuilderInput(inputValue),
				options: cloneBuilderOptions(options)
			};

			worker.postMessage(request);
		});
	}

	function handleTemplateChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		if (!isTemplateId(target.value)) return;

		builderInput = getSystemPromptTemplateDefaults(target.value);
	}

	function handleOutputFormatChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLSelectElement)) return;
		if (!isOutputFormat(target.value)) return;

		builderOptions = {
			...builderOptions,
			outputFormat: target.value
		};
	}

	function handleFieldInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		const fieldId = target.dataset.field;
		if (!isBuilderFieldId(fieldId)) return;

		builderInput = {
			...builderInput,
			[fieldId]: target.value
		};
	}

	function handleOptionChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const optionId = target.dataset.option;
		if (!isBuilderOptionId(optionId)) return;

		builderOptions = {
			...builderOptions,
			[optionId]: target.checked
		};
	}

	function loadSampleInput(): void {
		loadDefaultInput();
		addToast('success', $t('ui.system_prompt_builder.sample_loaded', 'Sample loaded'));
	}

	function loadDefaultInput(): void {
		builderInput = cloneBuilderInput(SYSTEM_PROMPT_BUILDER_DEFAULT_INPUT);
		builderOptions = { ...DEFAULT_OPTIONS };
	}

	function clearInputValue(): void {
		confirmTitle = $t(
			'ui.system_prompt_builder.clear_title',
			'Clear system prompt builder fields?'
		);
		confirmMessage = $t(
			'ui.system_prompt_builder.clear_description',
			'This removes the current builder inputs and preview.'
		);
		confirmModalOpen = true;
	}

	function doClearInput(): void {
		builderInput = cloneBuilderInput(EMPTY_INPUT);
		builderOptions = { ...DEFAULT_OPTIONS };
		systemPromptResult = null;
		addToast('info', $t('ui.system_prompt_builder.input_cleared', 'Builder inputs cleared'));
	}

	function noop(): void {
		return;
	}

	async function copyOutput(): Promise<void> {
		if (!outputText.trim()) {
			addToast('info', $t('ui.system_prompt_builder.copy_empty', 'Nothing to copy yet'));
			return;
		}

		try {
			await navigator.clipboard.writeText(outputText);
			addToast('success', $t('ui.system_prompt_builder.copy_success', 'System prompt copied'));
		} catch {
			addToast(
				'error',
				$t('ui.system_prompt_builder.copy_error', 'Copy failed. Check browser permissions.')
			);
		}
	}

	function downloadOutput(): void {
		if (!outputText.trim()) {
			addToast('info', $t('ui.system_prompt_builder.download_empty', 'Nothing to download yet'));
			return;
		}

		const filename = getDownloadFilename(builderOptions.outputFormat);
		const mimeType = getDownloadMimeType(builderOptions.outputFormat);

		try {
			const blob = new Blob([outputText], { type: `${mimeType};charset=utf-8` });
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');

			link.href = url;
			link.download = filename;
			document.body.append(link);
			link.click();
			link.remove();
			URL.revokeObjectURL(url);

			addToast(
				'success',
				$t('ui.system_prompt_builder.download_success', { filename }, 'Downloaded {filename}')
			);
		} catch {
			addToast(
				'error',
				$t('ui.system_prompt_builder.download_error', 'Download failed. Try copying the output instead.')
			);
		}
	}

	function cloneBuilderInput(inputValue: SystemPromptBuilderInput): SystemPromptBuilderInput {
		return {
			templateId: inputValue.templateId,
			role: inputValue.role,
			objective: inputValue.objective,
			context: inputValue.context,
			constraints: inputValue.constraints,
			examples: inputValue.examples,
			outputRequirements: inputValue.outputRequirements
		};
	}

	function cloneBuilderOptions(options: SystemPromptBuilderOptions): SystemPromptBuilderOptions {
		return {
			outputFormat: options.outputFormat,
			includeSafetyBoundaries: options.includeSafetyBoundaries,
			includeQualityChecklist: options.includeQualityChecklist,
			includeReasoningGuidance: options.includeReasoningGuidance
		};
	}

	function serializeBuilderInput(inputValue: SystemPromptBuilderInput): string {
		return [
			inputValue.role,
			inputValue.objective,
			inputValue.context,
			inputValue.constraints,
			inputValue.examples,
			inputValue.outputRequirements
		].join('\n\n');
	}

	function isBuilderInputBlank(inputValue: SystemPromptBuilderInput): boolean {
		return serializeBuilderInput(inputValue).trim().length === 0;
	}

	function isTemplateId(value: string): value is SystemPromptTemplateId {
		return (
			value === 'custom' ||
			value === 'code-assistant' ||
			value === 'data-analyst' ||
			value === 'translator' ||
			value === 'customer-support'
		);
	}

	function isOutputFormat(value: string): value is SystemPromptOutputFormat {
		return value === 'plain-text' || value === 'openai-json';
	}

	function isBuilderFieldId(value: string | undefined): value is BuilderFieldId {
		return (
			value === 'role' ||
			value === 'objective' ||
			value === 'context' ||
			value === 'constraints' ||
			value === 'examples' ||
			value === 'outputRequirements'
		);
	}

	function isBuilderOptionId(value: string | undefined): value is BuilderToggleOptionId {
		return (
			value === 'includeSafetyBoundaries' ||
			value === 'includeQualityChecklist' ||
			value === 'includeReasoningGuidance'
		);
	}

	function getOutputFormatLabel(format: SystemPromptOutputFormat): string {
		if (format === 'openai-json') {
			return $t('ui.system_prompt_builder.format.openai_json', 'OpenAI JSON messages');
		}

		return $t('ui.system_prompt_builder.format.plain_text', 'Plain text');
	}

	function getDownloadFilename(format: SystemPromptOutputFormat): string {
		return format === 'openai-json' ? 'system-prompt.messages.json' : 'system-prompt.txt';
	}

	function getDownloadMimeType(format: SystemPromptOutputFormat): string {
		return format === 'openai-json' ? 'application/json' : 'text/plain';
	}

	function getByteCount(value: string): number {
		return new TextEncoder().encode(value).byteLength;
	}

	function getCharacterCount(value: string): number {
		return Array.from(value).length;
	}

	function formatDuration(value: number): string {
		return `${value.toFixed(2)} ${$t('ui.system_prompt_builder.milliseconds', 'ms')}`;
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
		<div class="grid grid-cols-1 gap-[var(--space-3)] xl:grid-cols-[minmax(220px,320px)_minmax(220px,320px)_minmax(0,1fr)]">
			<label class="flex flex-col gap-[var(--space-1)]">
				<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
					{$t('ui.system_prompt_builder.template_label', 'Template')}
				</span>
				<select
					value={builderInput.templateId}
					onchange={handleTemplateChange}
					class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none"
				>
					{#each templateItems as template (template.id)}
						<option value={template.id}>{$t(template.labelKey, template.fallbackLabel)}</option>
					{/each}
				</select>
			</label>

			<label class="flex flex-col gap-[var(--space-1)]">
				<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
					{$t('ui.system_prompt_builder.output_format_label', 'Output format')}
				</span>
				<select
					value={builderOptions.outputFormat}
					onchange={handleOutputFormatChange}
					class="h-9 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none"
				>
					{#each outputFormatItems as format (format.id)}
						<option value={format.id}>{$t(format.labelKey, format.fallbackLabel)}</option>
					{/each}
				</select>
			</label>

			<div class="flex flex-wrap items-end justify-between gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<div class="flex flex-col gap-[var(--space-1)]">
					<span>{inputStatusLine}</span>
					{#if isWorkerEligible}
						<span>
							{$t(
								'ui.system_prompt_builder.worker_active',
								{ size: workerThresholdLabel },
								'Large builder input detected (>{size}). Prompt generation runs in a Web Worker.'
							)}
						</span>
					{/if}
				</div>

				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					<button
						type="button"
						onclick={loadSampleInput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						{$t('ui.system_prompt_builder.load_sample', 'Load sample')}
					</button>
					<button
						type="button"
						onclick={clearInputValue}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Eraser size={14} />
						{$t('ui.system_prompt_builder.clear', 'Clear')}
					</button>
				</div>
			</div>
		</div>

		<div class="mt-[var(--space-3)] grid grid-cols-1 gap-[var(--space-2)] md:grid-cols-3">
			{#each optionItems as option (option.id)}
				<label class="flex items-start gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
					<input
						type="checkbox"
						data-option={option.id}
						checked={builderOptions[option.id]}
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

	<div class="grid h-full min-h-0 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] xl:divide-x xl:divide-[var(--border-default)]">
		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div class="border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
				{$t('ui.system_prompt_builder.builder_inputs_title', 'Builder inputs')}
			</div>

			<div class="min-h-0 flex-1 overflow-y-auto p-[var(--space-3)]">
				<div class="grid grid-cols-1 gap-[var(--space-3)] lg:grid-cols-2">
					{#each fieldItems as field (field.id)}
						<label class="flex flex-col gap-[var(--space-1)]">
							<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
								{$t(field.labelKey, field.fallbackLabel)}
							</span>
							<textarea
								data-field={field.id}
								value={builderInput[field.id]}
								rows={field.rows}
								oninput={handleFieldInput}
								class="min-h-[112px] resize-y rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none focus:border-[var(--border-focus)]"
								placeholder={$t(field.placeholderKey, field.fallbackPlaceholder)}
								spellcheck="true"
							></textarea>
						</label>
					{/each}
				</div>
			</div>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.system_prompt_builder.output_label', 'Output preview')}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.system_prompt_builder.processing', 'Building...')}</span>
					{/if}
					{#if isWorkerEligible}
						<span class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[var(--text-secondary)]">
							{$t('ui.system_prompt_builder.worker_badge', 'Worker')}
						</span>
					{/if}
					{#if processedByWorker}
						<span>{$t('ui.system_prompt_builder.worker_used', 'Processed off-thread')}</span>
					{/if}
					<span>{formatDuration(durationMs)}</span>
					<button
						type="button"
						onclick={copyOutput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Copy size={14} />
						{$t('ui.system_prompt_builder.copy_output', 'Copy output')}
					</button>
					<button
						type="button"
						onclick={downloadOutput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Download size={14} />
						{$t('ui.system_prompt_builder.download_output', 'Download')}
					</button>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-[var(--space-2)] border-b border-[var(--border-default)] p-[var(--space-3)]">
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
				<span>{$t('ui.system_prompt_builder.preview_title', 'Preview')}</span>
				<span>{outputStatusLine}</span>
			</div>

			<textarea
				readonly
				value={outputText}
				class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t(
					'ui.system_prompt_builder.output_placeholder',
					'Built system prompt appears here...'
				)}
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
