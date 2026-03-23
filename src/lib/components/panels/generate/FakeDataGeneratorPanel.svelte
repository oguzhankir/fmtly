<script lang="ts">
	import { onDestroy } from 'svelte';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';
	import EncodeToolFrame from '$components/panels/encode/EncodeToolFrame.svelte';
	import {
		FAKE_DATA_FIELD_IDS,
		shouldUseFakeDataWorker,
		generateFakeDataMain,
		type FakeDataFieldId,
		type FakeDataFormat
	} from '$engines/generate/index.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Download } from 'lucide-svelte';

	type Pending = { resolve: (v: string) => void; reject: (e: Error) => void };

	let selected = $state<Set<FakeDataFieldId>>(
		new Set(['fullName', 'email', 'phone', 'city', 'country'])
	);
	let rowCount = $state(25);
	let format = $state<FakeDataFormat>('json');
	let tableName = $state('records');
	let output = $state('');
	let isBusy = $state(false);
	let usedWorker = $state(false);
	let workerInstance: Worker | null = null;
	let requestId = 0;
	const pending = new Map<number, Pending>();

	function ensureWorker(): Worker {
		if (workerInstance) return workerInstance;
		workerInstance = new Worker(new URL('../../../workers/generate-fake-data.worker.ts', import.meta.url), {
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

	function toggleField(id: FakeDataFieldId): void {
		const next = new Set(selected);
		if (next.has(id)) next.delete(id);
		else next.add(id);
		selected = next;
	}

	function localeCode(): string {
		return $page.params.lang?.slice(0, 2) ?? 'en';
	}

	async function runGenerate(): Promise<void> {
		const fields = [...selected];
		const tr = get(t);
		if (fields.length === 0) {
			addToast('info', tr('ui.generate_fake_data.no_fields', 'Select at least one field.'));
			return;
		}
		const rows = Math.min(100_000, Math.max(1, Math.floor(rowCount)));
		const req = {
			fields,
			rowCount: rows,
			format,
			tableName: tableName.trim() || 'records',
			localeCode: localeCode(),
			seed: undefined as number | undefined
		};
		isBusy = true;
		usedWorker = false;
		try {
			if (shouldUseFakeDataWorker(req)) {
				usedWorker = true;
				const w = ensureWorker();
				const id = ++requestId;
				const text = await new Promise<string>((resolve, reject) => {
					pending.set(id, { resolve, reject });
					w.postMessage({ id, payload: req });
				});
				output = text;
			} else {
				output = await generateFakeDataMain(req);
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
		const ext = format === 'json' ? 'json' : format === 'csv' ? 'csv' : 'sql';
		const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `fake-data.${ext}`;
		a.click();
		URL.revokeObjectURL(url);
	}
</script>

<div class="flex h-full min-h-0 w-full flex-col">
	<EncodeToolFrame>
		{#snippet toolbar()}
			<div class="flex flex-col gap-[var(--space-3)]">
				<div class="flex flex-col gap-[var(--space-2)]">
					<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
						{$t('ui.generate_fake_data.fields_label', 'Fields')}
					</span>
					<div class="flex flex-wrap gap-[var(--space-2)]">
						{#each FAKE_DATA_FIELD_IDS as fid}
							<button
								type="button"
								class="rounded-[var(--radius-md)] border px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] transition-colors"
								class:border-[var(--accent)]={selected.has(fid)}
								class:bg-[var(--accent-dim)]={selected.has(fid)}
								class:text-[var(--text-primary)]={selected.has(fid)}
								class:border-[var(--border-default)]={!selected.has(fid)}
								class:bg-[var(--bg-base)]={!selected.has(fid)}
								class:text-[var(--text-secondary)]={!selected.has(fid)}
								onclick={() => {
									toggleField(fid);
								}}
							>
								{$t(`ui.generate_fake_data.field.${fid}`, fid)}
							</button>
						{/each}
					</div>
				</div>
				<div class="flex flex-wrap items-end gap-[var(--space-4)]">
					<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						<span class="font-[number:var(--weight-semibold)]">{$t('ui.generate_fake_data.rows', 'Rows')}</span>
						<input
							type="number"
							min="1"
							max="100000"
							class="h-9 w-28 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[var(--text-primary)]"
							bind:value={rowCount}
						/>
					</label>
					<div class="flex flex-col gap-[var(--space-1)]">
						<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
							{$t('ui.generate_fake_data.format', 'Export format')}
						</span>
						<div class="flex flex-wrap gap-[var(--space-2)]">
							{#each [{ v: 'json' as const, lab: 'JSON' }, { v: 'csv' as const, lab: 'CSV' }, { v: 'sql' as const, lab: 'SQL' }] as opt}
								<button
									type="button"
									class="rounded-[var(--radius-md)] border px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)]"
									class:border-[var(--accent)]={format === opt.v}
									class:bg-[var(--accent-dim)]={format === opt.v}
									class:border-[var(--border-default)]={format !== opt.v}
									onclick={() => {
										format = opt.v;
									}}
								>
									{opt.lab}
								</button>
							{/each}
						</div>
					</div>
					{#if format === 'sql'}
						<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
							<span class="font-[number:var(--weight-semibold)]">{$t('ui.generate_fake_data.table', 'SQL table name')}</span>
							<input
								type="text"
								class="h-9 w-48 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] font-[family-name:var(--font-mono)] text-[var(--text-primary)]"
								bind:value={tableName}
							/>
						</label>
					{/if}
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
						{isBusy ? $t('ui.actions.running', 'Running…') : $t('ui.generate_fake_data.generate', 'Generate')}
					</button>
					{#if usedWorker}
						<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t('ui.generate_fake_data.worker_badge', 'Web Worker')}
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
						{$t('ui.generate_fake_data.preview', 'Output')}
					</span>
					<div class="flex flex-wrap gap-[var(--space-2)]">
						<button
							type="button"
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]"
							onclick={() => {
								void copyOut();
							}}
						>
							<Copy size={14} />
							{$t('ui.actions.copy', 'Copy')}
						</button>
						<button
							type="button"
							class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]"
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
					value={output}
					placeholder={$t('ui.generate_fake_data.placeholder', 'Generated data appears here…')}
					spellcheck="false"
				></textarea>
			</div>
		{/snippet}
	</EncodeToolFrame>
</div>
