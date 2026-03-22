<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { get } from 'svelte/store';
	import {
		computeHmac,
		shouldUseHmacWorker,
		type HmacHashAlgorithmId,
		type HmacWorkerRequest,
		type HmacWorkerResponse
	} from '$engines/crypto/index.js';
	import { formatByteSize, initInput, input, inputByteSize } from '$stores/input.store';
	import { clearOutput, output } from '$stores/output.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, RefreshCw } from 'lucide-svelte';

	type Pending = { resolve: (v: string) => void; reject: (e: Error) => void };

	let { toolSlug }: { toolSlug: string } = $props();

	let algorithm = $state<HmacHashAlgorithmId>('SHA-256');
	/** Non-empty default avoids Web Crypto rejecting a zero-length HMAC key before onMount runs. */
	let secretKey = $state('secret');
	let isProcessing = $state(false);
	let usedWorker = $state(false);
	let lastMs = $state(0);
	let worker: Worker | null = null;
	let reqId = 0;
	const pending = new Map<number, Pending>();
	let debounceTimer: ReturnType<typeof setTimeout> | null = null;
	let initSlug = $state('');
	/** Invalidates in-flight async work when inputs change again (typing / algorithm). */
	let computeGeneration = 0;

	const algorithms: HmacHashAlgorithmId[] = ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'];

	function releaseWorker(): void {
		if (worker) {
			worker.terminate();
			worker = null;
		}
		pending.clear();
	}

	function ensureWorker(): Worker {
		if (worker) return worker;
		worker = new Worker(new URL('../../../workers/crypto-hmac.worker.ts', import.meta.url), {
			type: 'module'
		});
		worker.onmessage = (e: MessageEvent<HmacWorkerResponse>) => {
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

	function runWorker(
		alg: HmacHashAlgorithmId,
		key: Uint8Array,
		message: Uint8Array
	): Promise<string> {
		return new Promise((resolve, reject) => {
			const w = ensureWorker();
			const id = ++reqId;
			pending.set(id, { resolve, reject });
			const msg: HmacWorkerRequest = {
				id,
				algorithm: alg,
				key: key.buffer.slice(key.byteOffset, key.byteOffset + key.byteLength) as ArrayBuffer,
				message: message.buffer.slice(
					message.byteOffset,
					message.byteOffset + message.byteLength
				) as ArrayBuffer
			};
			w.postMessage(msg);
		});
	}

	async function computeHmacValue(opts?: { silent?: boolean }): Promise<void> {
		const myGen = ++computeGeneration;
		const enc = new TextEncoder();
		const keyBytes = enc.encode(secretKey);
		const msgBytes = enc.encode($input);

		if (keyBytes.byteLength === 0) {
			if (myGen === computeGeneration) {
				clearOutput();
				lastMs = 0;
				usedWorker = false;
				isProcessing = false;
			}
			return;
		}

		const t0 = performance.now();
		isProcessing = true;
		usedWorker = false;
		try {
			let hex: string;
			if (shouldUseHmacWorker(msgBytes.byteLength)) {
				usedWorker = true;
				try {
					hex = await runWorker(algorithm, keyBytes, msgBytes);
				} catch {
					usedWorker = false;
					hex = await computeHmac(algorithm, keyBytes, msgBytes);
				}
			} else {
				hex = await computeHmac(algorithm, keyBytes, msgBytes);
			}
			if (myGen !== computeGeneration) return;
			output.set(hex);
			lastMs = performance.now() - t0;
		} catch {
			if (myGen !== computeGeneration) return;
			clearOutput();
			if (!opts?.silent) {
				addToast('error', $t('ui.hmac.error_failed', 'Could not compute HMAC.'));
			}
		} finally {
			if (myGen === computeGeneration) {
				isProcessing = false;
			}
		}
	}

	function schedule(): void {
		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			debounceTimer = null;
			void computeHmacValue({ silent: true });
		}, 120);
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
		secretKey = $t('ui.hmac.sample_secret', 'secret');
		if (get(input).length === 0) {
			input.set($t('ui.hmac.sample_message', 'message'));
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
	});

	$effect(() => {
		if (!browser) return;
		const _ = $input;
		const __ = secretKey;
		const ___ = algorithm;
		schedule();
	});

	const fieldClass =
		'min-h-0 w-full flex-1 resize-none rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-4)] py-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)] shadow-[var(--shadow-sm)] outline-none focus-visible:border-[var(--accent-border)] focus-visible:ring-2 focus-visible:ring-[var(--accent-dim)]';
	const keyClass =
		'h-11 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none focus-visible:border-[var(--accent-border)] focus-visible:ring-2 focus-visible:ring-[var(--accent-dim)]';
</script>

<div
	class="mx-auto flex w-full max-w-[1100px] flex-col gap-[var(--space-4)] p-[var(--space-4)]"
>
	<p class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
		{$t(
			'ui.hmac.intro',
			'Compute HMAC with your secret key. Keys stay in this tab — never sent to a server.'
		)}
	</p>

	<div
		class="grid min-h-[min(72vh,720px)] grid-cols-1 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-base)] shadow-[var(--shadow-sm)] xl:grid-cols-2 xl:divide-x xl:divide-[var(--border-default)]"
	>
		<div class="flex min-h-0 flex-col gap-[var(--space-4)] p-[var(--space-4)]">
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
							algorithm = a;
							schedule();
						}}
					>
						HMAC-{a}
					</button>
				{/each}
			</div>

			<div class="flex flex-col gap-[var(--space-2)]">
				<label
					class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wide text-[var(--text-muted)]"
					for="hmac-secret"
				>
					{$t('ui.hmac.secret_label', 'Secret key')}
				</label>
				<input
					id="hmac-secret"
					type="password"
					class={keyClass}
					autocomplete="off"
					spellcheck="false"
					bind:value={secretKey}
					aria-label={$t('ui.hmac.secret_label', 'Secret key')}
				/>
			</div>

			<div class="flex min-h-[200px] flex-1 flex-col gap-[var(--space-2)]">
				<label
					class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wide text-[var(--text-muted)]"
					for="hmac-msg"
				>
					{$t('ui.hmac.message_label', 'Message (UTF-8)')}
				</label>
				<textarea
					id="hmac-msg"
					class={fieldClass}
					rows="8"
					spellcheck="false"
					bind:value={$input}
					aria-label={$t('ui.hmac.message_label', 'Message (UTF-8)')}
				></textarea>
			</div>

			<p class="text-[length:var(--text-xs)] text-[var(--text-muted)]">
				{$t(
					'ui.hmac.worker_hint',
					'Long messages automatically use a Web Worker so the page stays responsive.'
				)}
			</p>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-surface)]">
			<div
				class="flex shrink-0 items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]"
			>
				<span class="font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">HMAC</span>
				<div class="flex flex-wrap items-center justify-end gap-[var(--space-2)]">
					<span class="text-[var(--text-muted)]">
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
						aria-label={$t('ui.hmac.regenerate', 'Recompute')}
						disabled={isProcessing}
						onclick={() => {
							void computeHmacValue({ silent: false });
						}}
					>
						<RefreshCw size={15} class={isProcessing ? 'animate-spin' : ''} aria-hidden="true" />
					</button>
				</div>
			</div>
			<div
				class="min-h-0 flex-1 overflow-auto break-all px-[var(--space-4)] py-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-relaxed text-[var(--text-primary)]"
			>
				{$output || '—'}
			</div>
		</div>
	</div>
</div>
