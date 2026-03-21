<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import {
		computeRandomStringEntropyBits,
		DEFAULT_RANDOM_STRING_OPTIONS,
		generateRandomStrings,
		MAX_STRING_LENGTH,
		MIN_STRING_LENGTH,
		normalizeRandomStringOptions,
		randomStringStrengthLevel,
		shouldUseRandomStringWorker,
		type RandomStringCharsetMode,
		type RandomStringError,
		type RandomStringOptions,
		type RandomStringResult,
		type RandomStringStrengthLevel,
		type RandomStringWorkerRequest,
		type RandomStringWorkerResponse
	} from '$engines/crypto/index.js';
	import { formatByteSize, initInput, input } from '$stores/input.store';
	import { clearOutput, output, outputByteSize } from '$stores/output.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { ChevronDown, Copy, Download, Minus, Plus, RefreshCw } from 'lucide-svelte';

	type PendingWorkerRequest = {
		resolve: (value: RandomStringResult) => void;
		reject: (reason: Error) => void;
	};

	const SLIDER_MAX = 256;

	let { toolSlug }: { toolSlug: string } = $props();

	let options = $state<RandomStringOptions>({ ...DEFAULT_RANDOM_STRING_OPTIONS });
	let isProcessing = $state(false);
	let processedByWorker = $state(false);
	let lastDurationMs = $state(0);
	let advancedOpen = $state(false);
	let workerInstance: Worker | null = null;
	let workerRequestId = 0;
	let latestProcessToken = 0;
	const pendingWorkerRequests = new Map<number, PendingWorkerRequest>();
	let regenTimer: ReturnType<typeof setTimeout> | null = null;

	let statusLine = $derived(
		`${formatByteSize($outputByteSize)} · ${lastDurationMs.toFixed(1)} ms`
	);
	let mergedOptions = $derived(normalizeRandomStringOptions(options));
	let entropyBits = $derived(computeRandomStringEntropyBits(mergedOptions));
	let strengthLevel = $derived(randomStringStrengthLevel(entropyBits));

	let charsetPresetOptions = $derived(
		[
			{ value: 'pick' as const, label: $t('ui.random_string.mode.pick', 'Pick (toggles)') },
			{ value: 'alphanumeric' as const, label: $t('ui.random_string.charset.alphanumeric', 'Alphanumeric') },
			{ value: 'hex_lower' as const, label: $t('ui.random_string.charset.hex_lower', 'Hex (lowercase)') },
			{ value: 'hex_upper' as const, label: $t('ui.random_string.charset.hex_upper', 'Hex (uppercase)') },
			{ value: 'numeric' as const, label: $t('ui.random_string.charset.numeric', 'Numeric') },
			{ value: 'base64url' as const, label: $t('ui.random_string.charset.base64url', 'Base64 URL-safe') },
			{ value: 'custom' as const, label: $t('ui.random_string.charset.custom', 'Custom') }
		] as const
	);
	let separatorOptions = $derived(
		[
			{ value: 'newline' as const, label: $t('ui.random_string.separator.newline', 'New line') },
			{ value: 'comma' as const, label: $t('ui.random_string.separator.comma', 'Comma') },
			{ value: 'space' as const, label: $t('ui.random_string.separator.space', 'Space') },
			{ value: 'none' as const, label: $t('ui.random_string.separator.none', 'None (concat)') }
		] as const
	);

	const fieldClass =
		'h-10 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none transition-[border-color,box-shadow] focus-visible:border-[var(--accent-border)] focus-visible:ring-2 focus-visible:ring-[var(--accent-dim)]';

	function strengthLabel(level: RandomStringStrengthLevel): string {
		switch (level) {
			case 'very_weak':
				return $t('ui.random_string.strength.very_weak', 'Very weak');
			case 'weak':
				return $t('ui.random_string.strength.weak', 'Weak');
			case 'fair':
				return $t('ui.random_string.strength.fair', 'Fair');
			case 'strong':
				return $t('ui.random_string.strength.strong', 'Strong');
			case 'very_strong':
				return $t('ui.random_string.strength.very_strong', 'Very strong');
			default:
				return '';
		}
	}

	function resolveErrorMessage(error: RandomStringError): string {
		switch (error.code) {
			case 'invalid_length':
				return $t('ui.random_string.error.invalid_length', 'Length must be within the allowed range.');
			case 'invalid_count':
				return $t('ui.random_string.error.invalid_count', 'Count must be within the allowed range.');
			case 'empty_charset':
				return $t('ui.random_string.error.empty_charset', 'Choose a non-empty character set.');
			case 'charset_too_large':
				return $t('ui.random_string.error.charset_too_large', 'Character set is too large.');
			case 'crypto_unavailable':
				return $t('ui.random_string.error.crypto_unavailable', 'Web Crypto is not available in this environment.');
			default:
				return $t('ui.random_string.error.unknown', 'Could not generate strings.');
		}
	}

	function buildOptionsFromState(): RandomStringOptions {
		return normalizeRandomStringOptions(options);
	}

	function applyResult(result: RandomStringResult): void {
		if (result.kind === 'success') {
			output.set(result.text);
			lastDurationMs = result.durationMs;
			return;
		}
		clearOutput();
		lastDurationMs = result.durationMs;
		addToast('error', resolveErrorMessage(result.error));
	}

	function releaseWorker(): void {
		if (workerInstance) {
			workerInstance.terminate();
			workerInstance = null;
		}
		pendingWorkerRequests.clear();
	}

	function ensureWorker(): Worker {
		if (workerInstance !== null) {
			return workerInstance;
		}
		workerInstance = new Worker(new URL('../../../workers/random-string.worker.ts', import.meta.url), {
			type: 'module'
		});
		workerInstance.onmessage = handleWorkerMessage;
		workerInstance.onerror = handleWorkerError;
		return workerInstance;
	}

	function handleWorkerMessage(event: MessageEvent<RandomStringWorkerResponse>): void {
		const { id, result, error } = event.data;
		const pending = pendingWorkerRequests.get(id);
		if (!pending) return;
		pendingWorkerRequests.delete(id);
		if (error) {
			pending.reject(new Error(error));
			return;
		}
		if (!result) {
			pending.reject(new Error('Worker returned no result'));
			return;
		}
		pending.resolve(result);
	}

	function handleWorkerError(event: ErrorEvent): void {
		for (const [, pending] of pendingWorkerRequests) {
			pending.reject(event.error instanceof Error ? event.error : new Error(event.message));
		}
		pendingWorkerRequests.clear();
	}

	function runWorker(requestOptions: RandomStringOptions): Promise<RandomStringResult> {
		return new Promise<RandomStringResult>((resolve, reject) => {
			const worker = ensureWorker();
			const id = ++workerRequestId;
			pendingWorkerRequests.set(id, { resolve, reject });
			const payload: RandomStringWorkerRequest = { id, options: requestOptions };
			worker.postMessage(payload);
		});
	}

	async function runGeneration(silent = true): Promise<void> {
		const merged = buildOptionsFromState();
		const token = ++latestProcessToken;
		isProcessing = true;
		processedByWorker = false;

		try {
			let result: RandomStringResult;
			if (shouldUseRandomStringWorker(merged)) {
				processedByWorker = true;
				try {
					result = await runWorker(merged);
				} catch {
					addToast(
						'warning',
						$t(
							'ui.random_string.worker_failed',
							'Worker processing failed. Falling back to main thread generation.'
						)
					);
					processedByWorker = false;
					result = generateRandomStrings(merged);
				}
			} else {
				result = generateRandomStrings(merged);
			}

			if (token !== latestProcessToken) return;
			applyResult(result);
			if (!silent && result.kind === 'success') {
				addToast('success', $t('ui.random_string.toast.generated', 'Random strings generated'));
			}
		} finally {
			if (token === latestProcessToken) {
				isProcessing = false;
			}
		}
	}

	function scheduleRegenerate(): void {
		if (regenTimer !== null) {
			clearTimeout(regenTimer);
		}
		regenTimer = setTimeout(() => {
			regenTimer = null;
			void runGeneration(true);
		}, 100);
	}

	function flushRegenerate(): void {
		if (regenTimer !== null) {
			clearTimeout(regenTimer);
			regenTimer = null;
		}
		void runGeneration(true);
	}

	function handleGenerateClick(): void {
		void runGeneration(true);
	}

	function clampLength(n: number): number {
		return Math.min(MAX_STRING_LENGTH, Math.max(MIN_STRING_LENGTH, Math.floor(n)));
	}

	function adjustLength(delta: number): void {
		options.length = clampLength(options.length + delta);
		flushRegenerate();
	}

	function onLengthSliderInput(event: Event): void {
		const t = event.currentTarget;
		if (!(t instanceof HTMLInputElement)) return;
		options.length = clampLength(Number(t.value));
		scheduleRegenerate();
	}

	function pickCountActive(): number {
		let n = 0;
		if (options.charsetUpper) n += 1;
		if (options.charsetLower) n += 1;
		if (options.charsetDigits) n += 1;
		if (options.charsetSymbols) n += 1;
		return n;
	}

	function togglePick(
		key: 'charsetUpper' | 'charsetLower' | 'charsetDigits' | 'charsetSymbols',
		next: boolean
	): void {
		if (!next && pickCountActive() <= 1 && options[key]) {
			addToast('info', $t('ui.random_string.toast.one_charset', 'Select at least one character type.'));
			return;
		}
		options[key] = next;
		flushRegenerate();
	}

	function handleCharsetModeChange(event: Event): void {
		const t = event.currentTarget;
		if (!(t instanceof HTMLSelectElement)) return;
		options.charsetMode = t.value as RandomStringCharsetMode;
		flushRegenerate();
	}

	function handleSeparatorChange(event: Event): void {
		const t = event.currentTarget;
		if (!(t instanceof HTMLSelectElement)) return;
		options.separator = t.value as RandomStringOptions['separator'];
		flushRegenerate();
	}

	function handleCountInput(event: Event): void {
		const t = event.currentTarget;
		if (!(t instanceof HTMLInputElement)) return;
		options.count = Math.min(10000, Math.max(1, Math.floor(Number(t.value))));
		flushRegenerate();
	}

	function loadSample(): void {
		options = {
			...DEFAULT_RANDOM_STRING_OPTIONS,
			length: 24,
			count: 1,
			charsetMode: 'pick',
			charsetUpper: true,
			charsetLower: true,
			charsetDigits: true,
			charsetSymbols: true,
			customCharset: '',
			excludeAmbiguous: true,
			separator: 'newline'
		};
		void runGeneration(false);
	}

	function clearAll(): void {
		clearOutput();
		lastDurationMs = 0;
		addToast('info', $t('ui.random_string.toast.cleared', 'Output cleared'));
	}

	async function copyOutput(): Promise<void> {
		const text = $output;
		if (!text) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(text);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	function downloadOutput(): void {
		const text = $output;
		if (!text) {
			addToast('info', $t('ui.random_string.toast.nothing_to_download', 'Nothing to download yet'));
			return;
		}
		const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = 'random-strings.txt';
		anchor.click();
		URL.revokeObjectURL(url);
	}

	function toggleAdvanced(): void {
		advancedOpen = !advancedOpen;
	}

	onMount(() => {
		initInput(toolSlug);
		input.set('');
		clearOutput();
		lastDurationMs = 0;
		options = { ...DEFAULT_RANDOM_STRING_OPTIONS };
		void runGeneration(true);
	});

	onDestroy(() => {
		if (regenTimer !== null) {
			clearTimeout(regenTimer);
		}
		releaseWorker();
		clearOutput();
		lastDurationMs = 0;
	});
</script>

<div
	class="flex h-full min-h-0 w-full flex-col overflow-hidden bg-[var(--bg-surface)] text-[var(--text-primary)]"
>
	<div class="mx-auto flex w-full max-w-[720px] flex-col gap-[var(--space-5)] overflow-auto px-[var(--space-4)] py-[var(--space-5)]">
		<p class="text-center text-[length:var(--text-xs)] text-[var(--text-secondary)]">
			{$t(
				'ui.random_string.simple_hint',
				'Change length and character types — output updates automatically.'
			)}
		</p>

		<!-- Result + compact actions row -->
		<div
			class="flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] shadow-[var(--shadow-sm)]"
		>
			{#if options.count === 1}
				<input
					type="text"
					readonly
					class="rs-out-input w-full border-0 bg-transparent py-[var(--space-4)] pl-[var(--space-4)] pr-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-lg)] tracking-tight text-[var(--text-primary)] outline-none"
					value={$output}
					placeholder={$t('ui.random_string.output_placeholder', 'Generated strings appear here')}
					aria-label={$t('ui.random_string.output_label', 'Output')}
					spellcheck="false"
				/>
			{:else}
				<textarea
					readonly
					class="rs-out-input min-h-[120px] w-full resize-y border-0 bg-transparent px-[var(--space-4)] py-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
					value={$output}
					placeholder={$t('ui.random_string.output_placeholder', 'Generated strings appear here')}
					aria-label={$t('ui.random_string.output_label', 'Output')}
					spellcheck="false"
				></textarea>
			{/if}
			<div
				class="flex flex-wrap items-center justify-end gap-[var(--space-2)] border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-2)]"
			>
				<span
					class="rs-strength rs-strength--{strengthLevel} shrink-0 rounded-[var(--radius-full)] px-[var(--space-2)] py-[3px] text-[length:11px] font-[number:var(--weight-semibold)]"
				>
					{strengthLabel(strengthLevel)}
				</span>
				<button
					type="button"
					class="inline-flex h-8 shrink-0 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					onclick={() => {
						void copyOutput();
					}}
				>
					<Copy size={14} aria-hidden="true" />
					{$t('ui.actions.copy', 'Copy')}
				</button>
				<button
					type="button"
					class="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					aria-label={$t('ui.random_string.regenerate', 'Regenerate')}
					disabled={isProcessing}
					onclick={handleGenerateClick}
				>
					<RefreshCw size={15} class={isProcessing ? 'animate-spin' : ''} aria-hidden="true" />
				</button>
			</div>
		</div>

		<div class="flex flex-col gap-[var(--space-3)]">
			<div class="flex items-center justify-between gap-[var(--space-2)]">
				<span class="text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)]">
					{$t('ui.random_string.length_with_value', { n: options.length }, 'Length: {n}')}
				</span>
				<span class="text-[length:var(--text-xs)] text-[var(--text-muted)]">{statusLine}</span>
			</div>
			<div class="flex items-center gap-[var(--space-2)]">
				<button
					type="button"
					class="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					aria-label={$t('ui.random_string.decrease_length', 'Decrease length')}
					onclick={() => {
						adjustLength(-1);
					}}
				>
					<Minus size={18} aria-hidden="true" />
				</button>
				<input
					type="range"
					class="rs-range h-2 flex-1 cursor-pointer accent-[var(--accent)]"
					min={MIN_STRING_LENGTH}
					max={SLIDER_MAX}
					value={Math.min(options.length, SLIDER_MAX)}
					aria-label={$t('ui.random_string.length_label', 'Length per string')}
					oninput={onLengthSliderInput}
				/>
				<button
					type="button"
					class="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					aria-label={$t('ui.random_string.increase_length', 'Increase length')}
					onclick={() => {
						adjustLength(1);
					}}
				>
					<Plus size={18} aria-hidden="true" />
				</button>
			</div>
		</div>

		{#if options.charsetMode === 'pick'}
			<div class="flex flex-col gap-[var(--space-3)]">
				<p class="text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)]">
					{$t('ui.random_string.characters_used', 'Characters used')}
				</p>
				<div class="flex flex-wrap gap-[var(--space-2)]">
					<button
						type="button"
						class="rs-pill"
						class:rs-pill--on={options.charsetUpper}
						onclick={() => {
							togglePick('charsetUpper', !options.charsetUpper);
						}}
					>
						{$t('ui.random_string.pick.upper', 'ABC')}
					</button>
					<button
						type="button"
						class="rs-pill"
						class:rs-pill--on={options.charsetLower}
						onclick={() => {
							togglePick('charsetLower', !options.charsetLower);
						}}
					>
						{$t('ui.random_string.pick.lower', 'abc')}
					</button>
					<button
						type="button"
						class="rs-pill"
						class:rs-pill--on={options.charsetDigits}
						onclick={() => {
							togglePick('charsetDigits', !options.charsetDigits);
						}}
					>
						{$t('ui.random_string.pick.digits', '123')}
					</button>
					<button
						type="button"
						class="rs-pill"
						class:rs-pill--on={options.charsetSymbols}
						onclick={() => {
							togglePick('charsetSymbols', !options.charsetSymbols);
						}}
					>
						{$t('ui.random_string.pick.symbols', '#$&')}
					</button>
				</div>
			</div>
		{:else}
			<p class="rounded-[var(--radius-md)] border border-dashed border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
				{$t(
					'ui.random_string.preset_active_hint',
					'A preset charset is selected. Open Advanced to switch to “Pick” for ABC / abc / 123 / symbols.'
				)}
			</p>
		{/if}

		<button
			type="button"
			class="flex w-full items-center justify-between gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-3)] text-left text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]"
			onclick={toggleAdvanced}
			aria-expanded={advancedOpen}
		>
			{$t('ui.random_string.advanced.title', 'Advanced')}
			<ChevronDown
				size={18}
				class="shrink-0 text-[var(--text-secondary)] transition-transform {advancedOpen ? 'rotate-180' : ''}"
				aria-hidden="true"
			/>
		</button>

		{#if advancedOpen}
			<div
				class="flex flex-col gap-[var(--space-4)] rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-[var(--space-4)]"
			>
				<div class="flex flex-wrap gap-[var(--space-2)]">
					<button
						type="button"
						class="inline-flex h-9 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface)]"
						onclick={loadSample}
					>
						{$t('ui.actions.sample', 'Sample')}
					</button>
					<button
						type="button"
						class="inline-flex h-9 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface)]"
						onclick={clearAll}
					>
						{$t('ui.actions.clear', 'Clear')}
					</button>
					<button
						type="button"
						class="inline-flex h-9 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface)]"
						onclick={downloadOutput}
					>
						<Download size={14} aria-hidden="true" />
						{$t('ui.actions.download', 'Download')}
					</button>
					{#if processedByWorker && !isProcessing}
						<span
							class="inline-flex items-center rounded-[var(--radius-full)] border border-[var(--accent-border)] bg-[var(--accent-dim)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--accent)]"
						>
							{$t('ui.random_string.worker_badge', 'Worker')}
						</span>
					{/if}
				</div>

				<div class="flex flex-col gap-[var(--space-2)]">
					<label class="text-[length:var(--text-xs)] text-[var(--text-secondary)]" for="rs-exact-len-{toolSlug}">
						{$t('ui.random_string.exact_length', 'Exact length')}
					</label>
					<input
						id="rs-exact-len-{toolSlug}"
						type="number"
						class={fieldClass}
						min={MIN_STRING_LENGTH}
						max={MAX_STRING_LENGTH}
						value={options.length}
						oninput={(e) => {
							const el = e.currentTarget;
							if (!(el instanceof HTMLInputElement)) return;
							options.length = clampLength(Number(el.value));
							flushRegenerate();
						}}
					/>
					<p class="text-[length:var(--text-xs)] text-[var(--text-muted)]">
						{$t(
							'ui.random_string.slider_hint',
							'The slider above is quick for lengths 1–256. Type here for longer strings (up to 100,000).'
						)}
					</p>
				</div>

				<div class="grid grid-cols-1 gap-[var(--space-3)] sm:grid-cols-2">
					<div class="flex flex-col gap-[var(--space-2)]">
						<label class="text-[length:var(--text-xs)] text-[var(--text-secondary)]" for="rs-mode-{toolSlug}">
							{$t('ui.random_string.charset_label', 'Character set')}
						</label>
						<select
							id="rs-mode-{toolSlug}"
							class={fieldClass}
							value={options.charsetMode}
							onchange={handleCharsetModeChange}
						>
							{#each charsetPresetOptions as opt}
								<option value={opt.value}>{opt.label}</option>
							{/each}
						</select>
					</div>
					<div class="flex flex-col gap-[var(--space-2)]">
						<label class="text-[length:var(--text-xs)] text-[var(--text-secondary)]" for="rs-count-{toolSlug}">
							{$t('ui.random_string.count_label', 'How many strings')}
						</label>
						<input
							id="rs-count-{toolSlug}"
							type="number"
							min="1"
							max="10000"
							class={fieldClass}
							value={options.count}
							oninput={handleCountInput}
						/>
					</div>
				</div>

				{#if options.charsetMode === 'custom'}
					<div class="flex flex-col gap-[var(--space-2)]">
						<label class="text-[length:var(--text-xs)] text-[var(--text-secondary)]" for="rs-custom-{toolSlug}">
							{$t('ui.random_string.custom_charset_label', 'Custom characters')}
						</label>
						<textarea
							id="rs-custom-{toolSlug}"
							class="min-h-[88px] resize-y rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-2)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-dim)]"
							placeholder={$t(
								'ui.random_string.custom_charset_placeholder',
								'Paste or type the exact characters to sample from…'
							)}
							value={options.customCharset}
							oninput={(e) => {
								const v = e.currentTarget;
								if (!(v instanceof HTMLTextAreaElement)) return;
								options.customCharset = v.value;
								scheduleRegenerate();
							}}
						></textarea>
					</div>
				{/if}

				<div class="grid grid-cols-1 gap-[var(--space-3)] sm:grid-cols-2">
					<div class="flex flex-col gap-[var(--space-2)]">
						<label class="text-[length:var(--text-xs)] text-[var(--text-secondary)]" for="rs-sep-{toolSlug}">
							{$t('ui.random_string.separator_label', 'Separator between strings')}
						</label>
						<select
							id="rs-sep-{toolSlug}"
							class={fieldClass}
							value={options.separator}
							onchange={handleSeparatorChange}
						>
							{#each separatorOptions as opt}
								<option value={opt.value}>{opt.label}</option>
							{/each}
						</select>
					</div>
					<label class="flex cursor-pointer items-start gap-[var(--space-3)] rounded-[var(--radius-md)] border border-[var(--border-subtle)] p-[var(--space-3)]">
						<input
							type="checkbox"
							class="mt-0.5 h-4 w-4 shrink-0 rounded border-[var(--border-default)]"
							checked={options.excludeAmbiguous}
							onchange={(e) => {
								const v = e.currentTarget;
								if (!(v instanceof HTMLInputElement)) return;
								options.excludeAmbiguous = v.checked;
								flushRegenerate();
							}}
						/>
						<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
							{$t(
								'ui.random_string.exclude_ambiguous',
								'Exclude visually ambiguous characters (0/O, 1/l, …)'
							)}
						</span>
					</label>
				</div>

			</div>
		{/if}
	</div>
</div>

<style>
	.rs-out-input::placeholder {
		color: var(--text-muted);
	}

	.rs-pill {
		min-width: 4.5rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-default);
		background: var(--bg-base);
		padding: var(--space-3) var(--space-4);
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--text-secondary);
		transition:
			background 120ms ease,
			border-color 120ms ease,
			color 120ms ease;
	}

	.rs-pill:hover {
		border-color: var(--border-focus);
		background: var(--bg-surface-hover);
	}

	.rs-pill--on {
		border-color: var(--accent-border);
		background: var(--accent-dim);
		color: var(--accent);
	}

	.rs-strength--very_weak {
		color: var(--status-invalid);
		background: var(--status-invalid-bg);
	}

	.rs-strength--weak {
		color: var(--status-warning);
		background: var(--status-warning-bg);
	}

	.rs-strength--fair {
		color: var(--status-info);
		background: var(--status-info-bg);
	}

	.rs-strength--strong,
	.rs-strength--very_strong {
		color: var(--status-valid);
		background: var(--status-valid-bg);
	}

	.rs-range {
		accent-color: var(--accent);
	}
</style>
