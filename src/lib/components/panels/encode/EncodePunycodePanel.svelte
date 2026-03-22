<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import {
		processPunycodeIdn,
		shouldUsePunycodeIdnWorker,
		PUNYCODE_IDN_WORKER_THRESHOLD_BYTES,
		type PunycodeIdnAction,
		type PunycodeIdnLib,
		type PunycodeIdnResult,
		type PunycodeIdnWorkerRequest,
		type PunycodeIdnWorkerResponse,
		type PunycodeIdnError
	} from '$engines/encode/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { ArrowLeftRight, Copy, Eraser, RefreshCw } from 'lucide-svelte';
	import EncodeToolFrame from './EncodeToolFrame.svelte';
	import { encodeChoiceButtonClass } from './encode-panel-ui.js';

	type Props = {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	};

	type PendingWorkerRequest = {
		resolve: (value: PunycodeIdnResult) => void;
		reject: (reason: Error) => void;
	};

	const DEFAULT_SAMPLE_INPUT = 'münchen.de\nuser@münchen.de\nxn--mnchen-3ya.de';

	const actionOptions: Array<{ value: PunycodeIdnAction; labelKey: string }> = [
		{ value: 'encode', labelKey: 'ui.punycode.action.encode' },
		{ value: 'decode', labelKey: 'ui.punycode.action.decode' }
	];

	let { toolSlug, workspaceTools = [] }: Props = $props();

	let initializedToolSlug = $state('');
	let punyLib = $state<PunycodeIdnLib | null>(null);
	let libraryLoadFailed = $state(false);
	let selectedAction = $state<PunycodeIdnAction>('encode');
	let conversionResult = $state<PunycodeIdnResult>({
		output: '',
		error: null,
		metrics: { inputBytes: 0, outputBytes: 0 }
	});
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');

	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new Map<number, PendingWorkerRequest>();

	let inputStatusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${$input.length.toLocaleString()} ${$t('ui.punycode.characters', 'chars')}`
	);
	let outputStatusLine = $derived(
		`${formatByteSize(conversionResult.metrics.outputBytes)} · ${conversionResult.output.length.toLocaleString()} ${$t('ui.punycode.characters', 'chars')}`
	);
	let isWorkerEligible = $derived(shouldUsePunycodeIdnWorker($input));
	let workerThresholdLabel = $derived(formatByteSize(PUNYCODE_IDN_WORKER_THRESHOLD_BYTES));
	let errorMessage = $derived(getErrorMessage(conversionResult.error));

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
		let cancelled = false;
		void import('punycode')
			.then((mod) => {
				if (cancelled) return;
				const puny = mod.default;
				punyLib = {
					toASCII: (s: string): string => puny.toASCII(s),
					toUnicode: (s: string): string => puny.toUnicode(s)
				};
				libraryLoadFailed = false;
			})
			.catch(() => {
				if (cancelled) return;
				punyLib = null;
				libraryLoadFailed = true;
				addToast('error', $t('ui.punycode.library_load_failed', 'Could not load Punycode library.'));
			});
		return (): void => {
			cancelled = true;
		};
	});

	$effect(() => {
		const lib = punyLib;
		const inputValue = $input;
		const action = selectedAction;
		const token = ++latestProcessToken;
		if (!lib) {
			conversionResult = {
				output: '',
				error: null,
				metrics: {
					inputBytes: new TextEncoder().encode(inputValue).length,
					outputBytes: 0
				}
			};
			isProcessing = false;
			processedByWorker = false;
			return;
		}
		const useWorker = shouldUsePunycodeIdnWorker(inputValue);
		isProcessing = useWorker;
		void runTransform(token, inputValue, action, lib, useWorker);
	});

	async function runTransform(
		token: number,
		inputValue: string,
		action: PunycodeIdnAction,
		lib: PunycodeIdnLib,
		useWorker: boolean
	): Promise<void> {
		if (!useWorker) {
			const next = processPunycodeIdn(inputValue, action, lib);
			if (token !== latestProcessToken) return;
			conversionResult = next;
			processedByWorker = false;
			isProcessing = false;
			return;
		}

		try {
			const workerResult = await postWorker(inputValue, action);
			if (token !== latestProcessToken) return;
			conversionResult = workerResult;
			processedByWorker = true;
		} catch {
			if (token !== latestProcessToken) return;
			conversionResult = processPunycodeIdn(inputValue, action, lib);
			processedByWorker = false;
			addToast(
				'error',
				$t(
					'ui.punycode.worker_failed',
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
		workerInstance = new Worker(new URL('../../../workers/encode-punycode.worker.ts', import.meta.url), {
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

	function handleWorkerMessage(event: MessageEvent<PunycodeIdnWorkerResponse>): void {
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

	function postWorker(inputValue: string, action: PunycodeIdnAction): Promise<PunycodeIdnResult> {
		const worker = ensureWorker();
		return new Promise<PunycodeIdnResult>((resolve, reject) => {
			const requestId = ++workerRequestId;
			pendingWorkerRequests.set(requestId, { resolve, reject });
			const request: PunycodeIdnWorkerRequest = {
				id: requestId,
				input: inputValue,
				action
			};
			worker.postMessage(request);
		});
	}

	function handleTextInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		input.set(target.value);
	}

	function handleActionClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const next = target.dataset.action as PunycodeIdnAction | undefined;
		if (!next) return;
		selectedAction = next;
	}

	function loadSampleInput(): void {
		input.set(DEFAULT_SAMPLE_INPUT);
		selectedAction = 'encode';
	}

	function swapDirection(): void {
		selectedAction = selectedAction === 'encode' ? 'decode' : 'encode';
	}

	function applyOutputToInput(): void {
		if (!conversionResult.output) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		input.set(conversionResult.output);
		addToast('success', $t('ui.punycode.toast.applied', 'Output applied to input'));
	}

	function clearInputValue(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('ui.punycode.tab_label', 'Punycode') },
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

	function getErrorMessage(err: PunycodeIdnError | null): string {
		if (!err) return '';
		if (err.code === 'invalid_punycode') {
			return $t(
				'ui.punycode.error.invalid_punycode',
				'Invalid Punycode or domain input. Check labels and xn-- prefixes.'
			);
		}
		return $t(
			'ui.punycode.error.processing',
			{ detail: err.detail },
			'Conversion failed: {detail}'
		);
	}

</script>

<div class="flex h-full min-h-0 w-full flex-col">
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="encode"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<EncodeToolFrame>
		{#snippet toolbar()}
		<div class="grid grid-cols-1 gap-[var(--space-3)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
			<div class="flex flex-col gap-[var(--space-2)]">
				<span
					class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
				>
					{$t('ui.punycode.action_label', 'Action')}
				</span>
				<div class="flex flex-wrap gap-[var(--space-2)]">
					{#each actionOptions as option}
						<button
							type="button"
							data-action={option.value}
							onclick={handleActionClick}
							class={`inline-flex h-8 items-center justify-center rounded-[var(--radius-md)] border px-[var(--space-3)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] ${encodeChoiceButtonClass(selectedAction === option.value)}`}
						>
							{$t(option.labelKey, option.value)}
						</button>
					{/each}
				</div>
			</div>
			<div class="flex flex-col gap-[var(--space-2)]">
				<p class="text-[length:var(--text-xs)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]">
					{$t(
						'ui.punycode.hint',
						'Converts internationalized domain names and emails: Unicode labels become ASCII with xn-- prefixes; decode reverses that.'
					)}
				</p>
			</div>
		</div>

		<div
			class="mt-[var(--space-2)] flex flex-wrap items-center justify-between gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
		>
			{#if libraryLoadFailed}
				<span class="text-[var(--text-danger)]">
					{$t('ui.punycode.library_load_failed', 'Could not load Punycode library.')}
				</span>
			{:else if !punyLib}
				<span>{$t('ui.punycode.loading_library', 'Loading Punycode…')}</span>
			{:else if isWorkerEligible}
				<span>
					{$t(
						'ui.punycode.worker_active',
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
					onclick={swapDirection}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<RefreshCw size={14} />
					{$t('ui.punycode.button.swap_direction', 'Swap direction')}
				</button>
				<button
					type="button"
					onclick={applyOutputToInput}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<ArrowLeftRight size={14} />
					{$t('ui.punycode.button.apply_output', 'Apply output to input')}
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
		{/snippet}

		{#snippet main()}
	<div
		class="grid h-full min-h-0 flex-1 grid-cols-1 xl:grid-cols-2 xl:divide-x xl:divide-[var(--border-default)]"
	>
		<div class="flex min-h-[200px] min-w-0 flex-col bg-[var(--bg-base)] xl:min-h-0">
			<div
				class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
			>
				<span>{$t('ui.punycode.input_label', 'Input')}</span>
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
				placeholder={$t(
					'ui.punycode.input_placeholder',
					'Domain or email with Unicode labels, or ASCII with xn-- segments…'
				)}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-[200px] min-w-0 flex-col bg-[var(--bg-surface)] xl:min-h-0">
			<div
				class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
			>
				<span>{$t('ui.punycode.output_label', 'Output')}</span>
				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					{#if isProcessing}
						<span>{$t('ui.actions.running', 'Running…')}</span>
					{/if}
					{#if processedByWorker}
						<span
							class="rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-1)] py-[1px] text-[var(--text-secondary)]"
						>
							{$t('ui.punycode.worker_badge', 'Worker')}
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

			{#if errorMessage}
				<div
					class="mx-[var(--space-3)] mt-[var(--space-3)] rounded-[var(--radius-md)] border border-[var(--border-danger)] bg-[var(--bg-danger-subtle)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-danger)]"
				>
					{errorMessage}
				</div>
			{/if}

			<textarea
				readonly
				value={conversionResult.output}
				class="min-h-[200px] w-full flex-1 resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none xl:min-h-0"
				placeholder={$t(
					'ui.punycode.output_placeholder',
					'ASCII IDN or decoded Unicode appears here…'
				)}
				spellcheck="false"
			></textarea>
		</div>
	</div>
		{/snippet}
	</EncodeToolFrame>
</div>

<ConfirmModal
	bind:open={confirmModalOpen}
	title={confirmTitle}
	message={confirmMessage}
	onConfirm={doClearInput}
	onCancel={noop}
/>
