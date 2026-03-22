<script lang="ts">
	import { onDestroy } from 'svelte';
	import {
		computeFileHashes,
		shouldUseFileHashWorker,
		type FileHashResult,
		type FileHashWorkerRequest,
		type FileHashWorkerResponse
	} from '$engines/crypto/index.js';
	import { formatByteSize } from '$stores/input.store';
	import { clearOutput, output } from '$stores/output.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, FileUp, RefreshCw } from 'lucide-svelte';

	type Pending = { resolve: (v: FileHashResult) => void; reject: (e: Error) => void };

	let { toolSlug: _toolSlug }: { toolSlug: string } = $props();

	let fileName = $state('');
	let byteLength = $state(0);
	let buffer = $state<ArrayBuffer | null>(null);
	let isProcessing = $state(false);
	let usedWorker = $state(false);
	let result = $state<FileHashResult | null>(null);
	let worker: Worker | null = null;
	let reqId = 0;
	const pending = new Map<number, Pending>();
	let inputRef: HTMLInputElement | null = $state(null);

	function releaseWorker(): void {
		if (worker) {
			worker.terminate();
			worker = null;
		}
		pending.clear();
	}

	function ensureWorker(): Worker {
		if (worker) return worker;
		worker = new Worker(new URL('../../../workers/crypto-file-hash.worker.ts', import.meta.url), {
			type: 'module'
		});
		worker.onmessage = (e: MessageEvent<FileHashWorkerResponse>) => {
			const { id, result: r, error } = e.data;
			const p = pending.get(id);
			if (!p) return;
			pending.delete(id);
			if (error) p.reject(new Error(error));
			else if (r) p.resolve(r);
			else p.reject(new Error('empty'));
		};
		worker.onerror = (ev) => {
			for (const [, pr] of pending) pr.reject(new Error(ev.message));
			pending.clear();
		};
		return worker;
	}

	function runWorker(data: ArrayBuffer): Promise<FileHashResult> {
		return new Promise((resolve, reject) => {
			const w = ensureWorker();
			const id = ++reqId;
			pending.set(id, { resolve, reject });
			const msg: FileHashWorkerRequest = { id, data };
			w.postMessage(msg);
		});
	}

	async function computeFromBuffer(ab: ArrayBuffer, len: number): Promise<void> {
		const u8 = new Uint8Array(ab);
		isProcessing = true;
		usedWorker = false;
		try {
			let res: FileHashResult;
			if (shouldUseFileHashWorker(len)) {
				usedWorker = true;
				try {
					res = await runWorker(ab.slice(0));
				} catch {
					usedWorker = false;
					res = await computeFileHashes(u8);
				}
			} else {
				res = await computeFileHashes(u8);
			}
			result = res;
			const lines = [
				`MD5:    ${res.md5}`,
				`SHA-256: ${res.sha256}`,
				`CRC32:  ${res.crc32}`
			].join('\n');
			output.set(lines);
		} catch {
			result = null;
			clearOutput();
			addToast('error', $t('ui.file_hash.error_failed', 'Could not hash file.'));
		} finally {
			isProcessing = false;
		}
	}

	async function handleFile(f: File): Promise<void> {
		fileName = f.name;
		const ab = await f.arrayBuffer();
		buffer = ab;
		byteLength = ab.byteLength;
		await computeFromBuffer(ab, ab.byteLength);
	}

	function onFileChange(e: Event): void {
		const el = e.currentTarget as HTMLInputElement;
		const f = el.files?.[0];
		if (f) void handleFile(f);
	}

	function onDrop(e: DragEvent): void {
		e.preventDefault();
		const f = e.dataTransfer?.files?.[0];
		if (f) void handleFile(f);
	}

	function onDragOver(e: DragEvent): void {
		e.preventDefault();
	}

	async function copyAll(): Promise<void> {
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

	function pickFile(): void {
		inputRef?.click();
	}

	onDestroy(() => {
		releaseWorker();
	});
</script>

<div class="mx-auto flex w-full max-w-[720px] flex-col gap-[var(--space-5)] p-[var(--space-4)]">
	<p class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
		{$t(
			'ui.file_hash.intro',
			'MD5, SHA-256, and CRC32 of any file — processed locally in your browser.'
		)}
	</p>

	<input
		bind:this={inputRef}
		type="file"
		class="sr-only"
		aria-hidden="true"
		onchange={onFileChange}
	/>

	<button
		type="button"
		class="flex min-h-[140px] w-full flex-col items-center justify-center gap-[var(--space-3)] rounded-[var(--radius-lg)] border-2 border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-4)] py-[var(--space-6)] text-[var(--text-secondary)] transition-colors hover:border-[var(--accent-border)] hover:bg-[var(--bg-base)]"
		ondragover={onDragOver}
		ondrop={onDrop}
		onclick={pickFile}
	>
		<FileUp size={28} class="text-[var(--text-muted)]" aria-hidden="true" />
		<span class="text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)]">
			{$t('ui.file_hash.drop_zone', 'Drop a file here or click to choose')}
		</span>
		<span class="text-[length:var(--text-xs)] text-[var(--text-muted)]">
			{$t('ui.file_hash.drop_hint', 'Files are never uploaded.')}
		</span>
	</button>

	{#if fileName}
		<div class="text-[length:var(--text-sm)] text-[var(--text-primary)]">
			<span class="font-[number:var(--weight-semibold)]">{fileName}</span>
			<span class="text-[var(--text-muted)]"> · {formatByteSize(byteLength)}</span>
		</div>
	{/if}

	{#if result}
		<div
			class="flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] shadow-[var(--shadow-sm)]"
		>
			<div class="grid gap-[var(--space-2)] px-[var(--space-4)] py-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)]">
				<div>
					<span class="text-[var(--text-muted)]">MD5</span>
					<div class="break-all">{result.md5}</div>
				</div>
				<div>
					<span class="text-[var(--text-muted)]">SHA-256</span>
					<div class="break-all">{result.sha256}</div>
				</div>
				<div>
					<span class="text-[var(--text-muted)]">CRC32</span>
					<div class="break-all">{result.crc32}</div>
				</div>
			</div>
			<div
				class="flex flex-wrap items-center justify-end gap-[var(--space-2)] border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-muted)]"
			>
				<span
					>{result.durationMs.toFixed(1)} ms{#if usedWorker}
						· {$t('ui.hash.worker_label', 'Worker')}{/if}</span
				>
				<button
					type="button"
					class="inline-flex h-8 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					onclick={() => {
						void copyAll();
					}}
				>
					<Copy size={14} aria-hidden="true" />
					{$t('ui.actions.copy', 'Copy')}
				</button>
				<button
					type="button"
					class="flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					aria-label={$t('ui.file_hash.rehash', 'Rehash')}
					disabled={isProcessing || !buffer}
					onclick={() => {
						if (buffer) void computeFromBuffer(buffer, byteLength);
					}}
				>
					<RefreshCw size={15} class={isProcessing ? 'animate-spin' : ''} aria-hidden="true" />
				</button>
			</div>
		</div>
	{/if}

	<p class="text-[length:var(--text-xs)] text-[var(--text-muted)]">
		{$t(
			'ui.file_hash.worker_hint',
			'Large files automatically use a Web Worker so the page stays responsive.'
		)}
	</p>
</div>
