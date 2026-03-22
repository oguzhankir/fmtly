<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { get } from 'svelte/store';
	import {
		hashUtf8Text,
		shouldUseDigestWorker,
		type HashAlgorithmId,
		type HashWorkerRequest,
		type HashWorkerResponse
	} from '$engines/crypto/index.js';
	import { formatByteSize, initInput, input, inputByteSize } from '$stores/input.store';
	import { clearOutput, output } from '$stores/output.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, RefreshCw } from 'lucide-svelte';

	type Pending = { resolve: (v: string) => void; reject: (e: Error) => void };

	let { toolSlug }: { toolSlug: string } = $props();

	let algorithm = $state<HashAlgorithmId>('SHA-256');
	let isProcessing = $state(false);
	let usedWorker = $state(false);
	let lastMs = $state(0);
	let worker: Worker | null = null;
	let reqId = 0;
	const pending = new Map<number, Pending>();
	let debounceTimer: ReturnType<typeof setTimeout> | null = null;
	let initSlug = $state('');

	const algorithms: HashAlgorithmId[] = ['MD5', 'SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'];

	function releaseWorker(): void {
		if (worker) {
			worker.terminate();
			worker = null;
		}
		pending.clear();
	}

	function ensureWorker(): Worker {
		if (worker) return worker;
		worker = new Worker(new URL('../../../workers/crypto-hash.worker.ts', import.meta.url), {
			type: 'module'
		});
		worker.onmessage = (e: MessageEvent<HashWorkerResponse>) => {
			const { id, hex, error } = e.data;
			const p = pending.get(id);
			if (!p) return;
			pending.delete(id);
			if (error) p.reject(new Error(error));
			else if (hex !== undefined) p.resolve(hex);
			else p.reject(new Error('empty'));
		};
		worker.onerror = (ev) => {
			for (const [, pr] of pending) pr.reject(new Error(ev.message));
			pending.clear();
		};
		return worker;
	}

	function runWorker(alg: HashAlgorithmId, data: ArrayBuffer): Promise<string> {
		return new Promise((resolve, reject) => {
			const w = ensureWorker();
			const id = ++reqId;
			pending.set(id, { resolve, reject });
			const msg: HashWorkerRequest = { id, algorithm: alg, data };
			w.postMessage(msg);
		});
	}

	async function computeHash(): Promise<void> {
		const text = $input;
		const enc = new TextEncoder();
		const bytes = enc.encode(text);
		const t0 = performance.now();
		isProcessing = true;
		usedWorker = false;
		try {
			let hex: string;
			if (shouldUseDigestWorker(bytes.byteLength)) {
				usedWorker = true;
				try {
					hex = await runWorker(algorithm, bytes.buffer.slice(0) as ArrayBuffer);
				} catch {
					usedWorker = false;
					hex = await hashUtf8Text(algorithm, text);
				}
			} else {
				hex = await hashUtf8Text(algorithm, text);
			}
			output.set(hex);
			lastMs = performance.now() - t0;
		} catch {
			clearOutput();
			addToast('error', $t('ui.hash.error_failed', 'Could not compute hash.'));
		} finally {
			isProcessing = false;
		}
	}

	function scheduleHash(): void {
		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			debounceTimer = null;
			void computeHash();
		}, 120);
	}

	function onAlgorithmChange(v: HashAlgorithmId): void {
		algorithm = v;
		scheduleHash();
	}

	async function copyHex(): Promise<void> {
		const v = $output;
		if (!v) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(v);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	onMount(() => {
		initInput(toolSlug);
		initSlug = toolSlug;
		if (get(input).length === 0) {
			input.set($t('ui.hash.sample_input', 'fmtly'));
		}
	});

	onDestroy(() => {
		if (debounceTimer) clearTimeout(debounceTimer);
		releaseWorker();
	});

	$effect(() => {
		if (initSlug === '' || initSlug === toolSlug) return;
		initInput(toolSlug);
		initSlug = toolSlug;
		void computeHash();
	});

	$effect(() => {
		if (!browser) return;
		const _ = $input;
		const __ = algorithm;
		scheduleHash();
	});

	const fieldClass =
		'min-h-[140px] w-full rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-4)] py-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)] shadow-[var(--shadow-sm)] outline-none focus-visible:border-[var(--accent-border)] focus-visible:ring-2 focus-visible:ring-[var(--accent-dim)]';
</script>

<div class="mx-auto flex w-full max-w-[720px] flex-col gap-[var(--space-5)] p-[var(--space-4)]">
	<p class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
		{$t(
			'ui.hash.intro',
			'Hash text with MD5 or SHA. Everything runs in your browser — nothing is uploaded.'
		)}
	</p>

	<div class="flex flex-wrap gap-[var(--space-2)]">
		{#each algorithms as a}
			<button
				type="button"
				class="rounded-[var(--radius-full)] border px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] transition-colors"
				class:border-[var(--accent)]={algorithm === a}
				class:bg-[var(--accent-dim)]={algorithm === a}
				class:text-[var(--text-primary)]={algorithm === a}
				class:border-[var(--border-default)]={algorithm !== a}
				class:bg-[var(--bg-surface)]={algorithm !== a}
				class:text-[var(--text-secondary)]={algorithm !== a}
				onclick={() => {
					onAlgorithmChange(a);
				}}
			>
				{a}
			</button>
		{/each}
	</div>

	<label class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wide text-[var(--text-muted)]" for="hash-input">
		{$t('ui.hash.input_label', 'Input (UTF-8)')}
	</label>
	<textarea
		id="hash-input"
		class={fieldClass}
		rows="6"
		spellcheck="false"
		bind:value={$input}
		aria-label={$t('ui.hash.input_label', 'Input (UTF-8)')}
	></textarea>

	<div
		class="flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] shadow-[var(--shadow-sm)]"
	>
		<div
			class="break-all px-[var(--space-4)] py-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
		>
			{$output || '—'}
		</div>
		<div
			class="flex flex-wrap items-center justify-end gap-[var(--space-2)] border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-muted)]"
		>
			<span>
				{formatByteSize($inputByteSize)} · {lastMs.toFixed(1)} ms
				{#if usedWorker}
					· {$t('ui.hash.worker_label', 'Worker')}
				{/if}
			</span>
			<button
				type="button"
				class="inline-flex h-8 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				onclick={() => {
					void copyHex();
				}}
			>
				<Copy size={14} aria-hidden="true" />
				{$t('ui.actions.copy', 'Copy')}
			</button>
			<button
				type="button"
				class="flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				aria-label={$t('ui.hash.regenerate', 'Recompute')}
				disabled={isProcessing}
				onclick={() => {
					void computeHash();
				}}
			>
				<RefreshCw size={15} class={isProcessing ? 'animate-spin' : ''} aria-hidden="true" />
			</button>
		</div>
	</div>

	<p class="text-[length:var(--text-xs)] text-[var(--text-muted)]">
		{$t(
			'ui.hash.worker_hint',
			'Large inputs automatically use a Web Worker so the page stays responsive.'
		)}
	</p>
</div>
