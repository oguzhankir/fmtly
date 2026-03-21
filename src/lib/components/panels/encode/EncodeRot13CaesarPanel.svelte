<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		processRot13Caesar,
		shouldUseRot13CaesarWorker,
		ROT13_CAESAR_WORKER_THRESHOLD_BYTES,
		normalizeCaesarShift,
		type Rot13CaesarMode,
		type CaesarDirection,
		type Rot13CaesarOptions,
		type Rot13CaesarResult,
		type Rot13CaesarWorkerRequest,
		type Rot13CaesarWorkerResponse
	} from '$engines/encode/rot13-caesar.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { ArrowLeftRight, Copy, Eraser } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: Rot13CaesarResult) => void;
		reject: (reason: Error) => void;
	};

	const DEFAULT_SAMPLE_INPUT =
		'Hello from fmtly! Use ROT13 or Caesar shift (1–25) on A–Z and a–z; emoji like 👋 stay as-is.';

	const SHIFT_PRESETS = [1, 3, 5, 7, 13] as const;

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let mode = $state<Rot13CaesarMode>('rot13');
	let caesarShift = $state(3);
	let caesarDirection = $state<CaesarDirection>('encrypt');
	let conversionResult = $state<Rot13CaesarResult>(processRot13Caesar('', buildOptionsSnapshot()));
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new Map<number, PendingWorkerRequest>();

	function buildOptionsSnapshot(): Rot13CaesarOptions {
		return {
			mode,
			caesarShift: normalizeCaesarShift(caesarShift),
			caesarDirection
		};
	}

	let inputStatusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${$input.length.toLocaleString()} ${$t('ui.rot13.characters', 'chars')}`
	);
	let outputStatusLine = $derived(
		`${formatByteSize(conversionResult.metrics.outputBytes)} · ${conversionResult.output.length.toLocaleString()} ${$t('ui.rot13.characters', 'chars')}`
	);
	let isWorkerEligible = $derived(shouldUseRot13CaesarWorker($input));
	let workerThresholdLabel = $derived(formatByteSize(ROT13_CAESAR_WORKER_THRESHOLD_BYTES));

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		if ($input.length === 0) {
			input.set(DEFAULT_SAMPLE_INPUT);
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
		const opts = buildOptionsSnapshot();
		const token = ++latestProcessToken;
		const useWorker = shouldUseRot13CaesarWorker(inputValue);
		isProcessing = useWorker;
		void runTransform(token, inputValue, opts, useWorker);
	});

	async function runTransform(
		token: number,
		inputValue: string,
		opts: Rot13CaesarOptions,
		useWorker: boolean
	): Promise<void> {
		if (!useWorker) {
			const next = processRot13Caesar(inputValue, opts);
			if (token !== latestProcessToken) return;
			conversionResult = next;
			processedByWorker = false;
			isProcessing = false;
			return;
		}

		try {
			const workerResult = await postWorker(inputValue, opts);
			if (token !== latestProcessToken) return;
			conversionResult = workerResult;
			processedByWorker = true;
		} catch {
			if (token !== latestProcessToken) return;
			conversionResult = processRot13Caesar(inputValue, opts);
			processedByWorker = false;
			addToast(
				'error',
				$t(
					'ui.rot13.worker_failed',
					'Worker processing failed. Falling back to main thread processing.'
				)
			);
		} finally {
			if (token === latestProcessToken) {
				isProcessing = false;
			}
		}
	}

	function ensureWorker(): Worker {
		if (workerInstance !== null) return workerInstance;
		workerInstance = new Worker(
			new URL('../../../workers/encode-rot13-caesar.worker.ts', import.meta.url),
			{ type: 'module' }
		);
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

	function handleWorkerMessage(event: MessageEvent<Rot13CaesarWorkerResponse>): void {
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

	function postWorker(inputValue: string, opts: Rot13CaesarOptions): Promise<Rot13CaesarResult> {
		const worker = ensureWorker();
		return new Promise<Rot13CaesarResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });
			const request: Rot13CaesarWorkerRequest = {
				id: requestId,
				input: inputValue,
				options: opts
			};
			worker.postMessage(request);
		});
	}

	function handleTextInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		input.set(target.value);
	}

	function handleModeClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const v = target.dataset.mode as Rot13CaesarMode | undefined;
		if (!v) return;
		mode = v;
	}

	function handleDirectionClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const v = target.dataset.direction as CaesarDirection | undefined;
		if (!v) return;
		caesarDirection = v;
	}

	function handleShiftPresetClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const raw = target.dataset.shift;
		if (raw === undefined) return;
		const n = Number.parseInt(raw, 10);
		if (Number.isFinite(n)) {
			caesarShift = normalizeCaesarShift(n);
		}
	}

	function handleShiftRangeChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const n = Number.parseInt(target.value, 10);
		if (Number.isFinite(n)) {
			caesarShift = normalizeCaesarShift(n);
		}
	}

	function handleShiftNumberChange(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const n = Number.parseInt(target.value, 10);
		caesarShift = Number.isFinite(n) ? normalizeCaesarShift(n) : 3;
	}

	function loadSampleInput(): void {
		input.set(DEFAULT_SAMPLE_INPUT);
		mode = 'rot13';
		caesarShift = 3;
		caesarDirection = 'encrypt';
	}

	function applyOutputToInput(): void {
		if (!conversionResult.output) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		input.set(conversionResult.output);
		addToast('success', $t('ui.rot13.toast.applied', 'Output applied to input'));
	}

	function clearInputValue(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('ui.rot13.tab_label', 'ROT13') },
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

	async function copyOutput(): Promise<void> {
		if (!conversionResult.output) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(conversionResult.output);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	function getChoiceButtonClass(active: boolean): string {
		return active
			? 'border-[var(--color-primary)] bg-[var(--bg-surface)] text-[var(--text-primary)]'
			: 'border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]';
	}
</script>

<div class="flex h-full w-full min-h-0 flex-col">
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="encode"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
		<div class="flex flex-col gap-[var(--space-3)]">
			<div class="flex flex-col gap-[var(--space-2)]">
				<span
					class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
				>
					{$t('ui.rot13.mode_label', 'Cipher')}
				</span>
				<div class="flex flex-wrap gap-[var(--space-2)]">
					<button
						type="button"
						data-mode="rot13"
						onclick={handleModeClick}
						class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(mode === 'rot13')}`}
					>
						{$t('ui.rot13.mode.rot13', 'ROT13')}
					</button>
					<button
						type="button"
						data-mode="caesar"
						onclick={handleModeClick}
						class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(mode === 'caesar')}`}
					>
						{$t('ui.rot13.mode.caesar', 'Caesar')}
					</button>
				</div>
				{#if mode === 'rot13'}
					<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t(
							'ui.rot13.rot13_hint',
							'ROT13 rotates A–Z and a–z by 13 places. Applying it twice returns the original text.'
						)}
					</p>
				{/if}
			</div>

			{#if mode === 'caesar'}
				<div class="flex flex-col gap-[var(--space-3)]">
					<div class="flex flex-col gap-[var(--space-2)]">
						<span
							class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
						>
							{$t('ui.rot13.direction_label', 'Direction')}
						</span>
						<div class="flex flex-wrap gap-[var(--space-2)]">
							<button
								type="button"
								data-direction="encrypt"
								onclick={handleDirectionClick}
								class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(caesarDirection === 'encrypt')}`}
							>
								{$t('ui.rot13.direction.encrypt', 'Encrypt (shift forward)')}
							</button>
							<button
								type="button"
								data-direction="decrypt"
								onclick={handleDirectionClick}
								class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(caesarDirection === 'decrypt')}`}
							>
								{$t('ui.rot13.direction.decrypt', 'Decrypt (shift backward)')}
							</button>
						</div>
					</div>

					<div class="flex flex-col gap-[var(--space-2)]">
						<span
							class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
						>
							{$t('ui.rot13.shift_label', 'Shift (1–25)')}
						</span>
						<div class="flex flex-wrap items-center gap-[var(--space-3)]">
							<input
								type="range"
								min="1"
								max="25"
								value={normalizeCaesarShift(caesarShift)}
								oninput={handleShiftRangeChange}
								class="h-2 w-full max-w-[220px] cursor-pointer accent-[var(--color-primary)]"
								aria-label={$t('ui.rot13.shift_label', 'Shift (1–25)')}
							/>
							<input
								type="number"
								min="1"
								max="25"
								value={normalizeCaesarShift(caesarShift)}
								onchange={handleShiftNumberChange}
								class="h-8 w-16 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-center font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
							/>
						</div>
						<div class="flex flex-wrap gap-[var(--space-2)]">
							<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
								>{$t('ui.rot13.presets_label', 'Presets')}</span
							>
							{#each SHIFT_PRESETS as p}
								<button
									type="button"
									data-shift={p}
									onclick={handleShiftPresetClick}
									class={`inline-flex h-7 min-w-[2rem] items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-2)] text-[length:var(--text-xs)] font-[family-name:var(--font-mono)] font-[number:var(--weight-semibold)] ${getChoiceButtonClass(normalizeCaesarShift(caesarShift) === p)}`}
								>
									{p}
								</button>
							{/each}
						</div>
					</div>

					<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t(
							'ui.rot13.caesar_scope_hint',
							'Only basic Latin letters A–Z and a–z are shifted; numbers, punctuation, spaces, and other Unicode stay unchanged.'
						)}
					</p>
				</div>
			{/if}
		</div>

		<div
			class="mt-[var(--space-2)] flex flex-wrap items-center justify-between gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
		>
			{#if isWorkerEligible}
				<span>
					{$t(
						'ui.rot13.worker_active',
						{ size: workerThresholdLabel },
						'Large input detected (>{size}). Processing runs in a Web Worker.'
					)}
				</span>
			{:else}
				<span></span>
			{/if}
			<div class="flex flex-wrap items-center gap-[var(--space-2)]">
				<button
					type="button"
					onclick={applyOutputToInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<ArrowLeftRight size={14} />
					{$t('ui.rot13.button.apply_output', 'Apply output to input')}
				</button>
				<button
					type="button"
					onclick={loadSampleInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					{$t('ui.actions.sample', 'Sample')}
				</button>
			</div>
		</div>
	</div>

	<div
		class="grid min-h-0 flex-1 grid-cols-1 xl:grid-cols-2 xl:divide-x xl:divide-[var(--border-default)]"
	>
		<div class="flex min-h-[200px] min-w-0 flex-col bg-[var(--bg-base)] xl:min-h-0">
			<div
				class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
			>
				<span>{$t('ui.rot13.input_label', 'Input')}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					<span>{inputStatusLine}</span>
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
			<textarea
				value={$input}
				oninput={handleTextInput}
				class="min-h-[200px] w-full flex-1 resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none xl:min-h-0"
				placeholder={$t('ui.rot13.input_placeholder', 'Type or paste text to transform…')}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-[200px] min-w-0 flex-col bg-[var(--bg-surface)] xl:min-h-0">
			<div
				class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
			>
				<span>{$t('ui.rot13.output_label', 'Output')}</span>
				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.actions.running', 'Running…')}</span>
					{/if}
					{#if processedByWorker}
						<span
							class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[var(--text-secondary)]"
						>
							{$t('ui.rot13.worker_badge', 'Worker')}
						</span>
					{/if}
					<span>{outputStatusLine}</span>
					<button
						type="button"
						onclick={copyOutput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Copy size={14} />
						{$t('ui.actions.copy', 'Copy')}
					</button>
				</div>
			</div>
			<textarea
				readonly
				value={conversionResult.output}
				class="min-h-[200px] w-full flex-1 resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none xl:min-h-0"
				placeholder={$t('ui.rot13.output_placeholder', 'Transformed text appears here…')}
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
