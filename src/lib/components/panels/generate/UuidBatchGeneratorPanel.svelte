<script lang="ts">
	import { onDestroy } from 'svelte';
	import { get } from 'svelte/store';
	import EncodeToolFrame from '$components/panels/encode/EncodeToolFrame.svelte';
	import {
		generateUuidBatch,
		shouldUseUuidBatchWorker,
		type UuidBatchOptions,
		type UuidVersion
	} from '$engines/generate/index.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Download } from 'lucide-svelte';

	type Pending = { resolve: (v: string) => void; reject: (e: Error) => void };

	let version = $state<UuidVersion>(4);
	let count = $state(100);
	let separator = $state<'newline' | 'comma'>('newline');
	let output = $state('');
	let isBusy = $state(false);
	let usedWorker = $state(false);
	let workerInstance: Worker | null = null;
	let requestId = 0;
	const pending = new Map<number, Pending>();

	function ensureWorker(): Worker {
		if (workerInstance) return workerInstance;
		workerInstance = new Worker(new URL('../../../workers/generate-uuid-batch.worker.ts', import.meta.url), {
			type: 'module'
		});
		workerInstance.onmessage = (e: MessageEvent<{ id: number; ok: boolean; output?: string; error?: string }>) => {
			const msg = e.data;
			const p = pending.get(msg.id);
			if (!p) return;
			pending.delete(msg.id);
			if (msg.ok && msg.output !== undefined) {
				p.resolve(msg.output);
			} else {
				p.reject(new Error(msg.error ?? 'Worker error'));
			}
		};
		return workerInstance;
	}

	function releaseWorker(): void {
		workerInstance?.terminate();
		workerInstance = null;
		for (const [, pr] of pending) {
			pr.reject(new Error('Worker terminated'));
		}
		pending.clear();
	}

	onDestroy(() => {
		releaseWorker();
	});

	function buildOptions(): UuidBatchOptions {
		const n = Math.min(500_000, Math.max(1, Math.floor(count)));
		return { version, count: n, separator };
	}

	async function runGenerate(): Promise<void> {
		const opts = buildOptions();
		isBusy = true;
		usedWorker = false;
		try {
			if (shouldUseUuidBatchWorker(opts)) {
				usedWorker = true;
				const w = ensureWorker();
				const id = ++requestId;
				const text = await new Promise<string>((resolve, reject) => {
					pending.set(id, { resolve, reject });
					w.postMessage({ id, payload: opts });
				});
				output = text;
			} else {
				output = await generateUuidBatch(opts);
			}
		} catch (e) {
			addToast('error', e instanceof Error ? e.message : String(e));
			output = '';
		} finally {
			isBusy = false;
		}
	}

	async function copyOut(): Promise<void> {
		const tr = get(t);
		if (!output) {
			addToast('info', tr('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(output);
			addToast('success', tr('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', tr('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	function downloadOut(): void {
		if (!output) return;
		const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `uuids-${version}.txt`;
		a.click();
		URL.revokeObjectURL(url);
	}

	let preview = $derived(
		output.length > 24_000 ? `${output.slice(0, 24_000)}\n\n…` : output
	);
</script>

<div class="flex h-full min-h-0 w-full flex-col">
	<EncodeToolFrame>
		{#snippet toolbar()}
			<div class="flex flex-col gap-[var(--space-3)]">
				<div class="flex flex-wrap gap-[var(--space-2)]">
					{#each [{ v: 4 as const, lab: 'UUID v4' }, { v: 7 as const, lab: 'UUID v7' }] as opt}
						<button
							type="button"
							class="rounded-[var(--radius-md)] border px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)]"
							class:border-[var(--accent)]={version === opt.v}
							class:bg-[var(--accent-dim)]={version === opt.v}
							class:border-[var(--border-default)]={version !== opt.v}
							class:bg-[var(--bg-base)]={version !== opt.v}
							onclick={() => {
								version = opt.v;
							}}
						>
							{opt.lab}
						</button>
					{/each}
				</div>
				<div class="flex flex-wrap items-end gap-[var(--space-4)]">
					<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						<span class="font-[number:var(--weight-semibold)]">{$t('ui.generate_uuid_batch.count', 'Count')}</span>
						<input
							type="number"
							min="1"
							max="500000"
							class="h-9 w-32 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[var(--text-primary)]"
							bind:value={count}
						/>
					</label>
					<div class="flex flex-col gap-[var(--space-1)]">
						<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
							{$t('ui.generate_uuid_batch.separator', 'Separator')}
						</span>
						<div class="flex gap-[var(--space-2)]">
							<button
								type="button"
								class="rounded-[var(--radius-md)] border px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)]"
								class:border-[var(--accent)]={separator === 'newline'}
								class:bg-[var(--accent-dim)]={separator === 'newline'}
								class:border-[var(--border-default)]={separator !== 'newline'}
								onclick={() => {
									separator = 'newline';
								}}
							>
								{$t('ui.generate_uuid_batch.sep_line', 'Newline')}
							</button>
							<button
								type="button"
								class="rounded-[var(--radius-md)] border px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)]"
								class:border-[var(--accent)]={separator === 'comma'}
								class:bg-[var(--accent-dim)]={separator === 'comma'}
								class:border-[var(--border-default)]={separator !== 'comma'}
								onclick={() => {
									separator = 'comma';
								}}
							>
								{$t('ui.generate_uuid_batch.sep_comma', 'Comma')}
							</button>
						</div>
					</div>
				</div>
				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					<button
						type="button"
						disabled={isBusy}
						class="inline-flex h-9 items-center rounded-[var(--radius-md)] border border-[var(--accent-border)] bg-[var(--accent-dim)] px-[var(--space-4)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--accent)] disabled:opacity-50"
						onclick={() => {
							void runGenerate();
						}}
					>
						{isBusy ? $t('ui.actions.running', 'Running…') : $t('ui.generate_uuid_batch.generate', 'Generate')}
					</button>
					{#if usedWorker}
						<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t('ui.generate_uuid_batch.worker', 'Web Worker')}
						</span>
					{/if}
				</div>
			</div>
		{/snippet}
		{#snippet main()}
			<div class="flex h-full min-h-0 flex-1 flex-col">
				<div
					class="flex flex-wrap items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)]"
				>
					<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.generate_uuid_batch.output', 'UUIDs')}
					</span>
					<div class="flex gap-[var(--space-2)]">
						<button
							type="button"
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)]"
							onclick={() => {
								void copyOut();
							}}
						>
							<Copy size={14} />
							{$t('ui.actions.copy', 'Copy')}
						</button>
						<button
							type="button"
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)]"
							onclick={downloadOut}
						>
							<Download size={14} />
							{$t('ui.actions.download', 'Download')}
						</button>
					</div>
				</div>
				<textarea
					readonly
					class="min-h-[240px] flex-1 resize-none border-0 bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none"
					value={preview}
					placeholder={$t('ui.generate_uuid_batch.placeholder', 'Generated UUIDs appear here…')}
					spellcheck="false"
				></textarea>
			</div>
		{/snippet}
	</EncodeToolFrame>
</div>
