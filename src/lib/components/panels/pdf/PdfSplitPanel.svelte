<script lang="ts">
	import { onDestroy } from 'svelte';
	import PdfFileActionBar from '$components/panels/pdf/PdfFileActionBar.svelte';
	import PdfPageRangeField from '$components/panels/pdf/PdfPageRangeField.svelte';
	import PdfToolShell from '$components/panels/pdf/PdfToolShell.svelte';
	import PdfUploadSurface from '$components/panels/pdf/PdfUploadSurface.svelte';
	import {
		getPdfPageCount,
		PAGE_RANGE_ERROR_PREFIX,
		shouldUsePdfWorker,
		splitPdf,
		tryParsePageRanges,
		type PdfFileInput,
		type PdfWorkerRequest,
		type PdfWorkerResponse
	} from '$engines/pdf/index.js';
	import { messageForPdfToolError } from '$utils/pdf-range-error.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Loader2 } from 'lucide-svelte';
	import { SvelteMap } from 'svelte/reactivity';

	type Pending = { resolve: (files: PdfFileInput[]) => void; reject: (error: Error) => void };

	const SPLIT_USE_CASE_KEYS = [
		'ui.pdf.split.use_case.0',
		'ui.pdf.split.use_case.1',
		'ui.pdf.split.use_case.2',
		'ui.pdf.split.use_case.3'
	] as const;
	const SPLIT_USE_CASE_FALLBACKS = [
		'Send only the pages clients need',
		'Break long manuals into smaller parts',
		'Archive specific sections independently',
		'Prepare page-based review packages'
	] as const;

	let fileName = $state('');
	let bytes: Uint8Array | null = $state(null);
	let pageCount = $state(0);
	let pageRanges = $state('1');
	let outputs = $state<PdfFileInput[]>([]);

	const rangeParse = $derived(tryParsePageRanges(pageRanges, pageCount));
	let isProcessing = $state(false);
	let usedWorker = $state(false);
	let worker: Worker | null = null;
	let requestId = 0;
	let inputRef: HTMLInputElement | null = $state(null);
	const pending = new SvelteMap<number, Pending>();

	function ensureWorker(): Worker {
		if (worker) return worker;
		worker = new Worker(new URL('../../../workers/pdf.worker.ts', import.meta.url), { type: 'module' });
		worker.onmessage = (event: MessageEvent<PdfWorkerResponse>) => {
			const response = event.data;
			const handler = pending.get(response.id);
			if (!handler) return;
			pending.delete(response.id);
			if (response.error) {
				handler.reject(new Error(response.error));
				return;
			}
			if (response.result?.operation === 'split') {
				handler.resolve(response.result.files);
				return;
			}
			handler.reject(new Error('Unexpected worker response'));
		};
		worker.onerror = () => {
			for (const p of pending.values()) p.reject(new Error('PDF worker runtime error'));
			pending.clear();
		};
		return worker;
	}

	function terminateWorker(): void {
		if (worker) {
			worker.terminate();
			worker = null;
		}
		pending.clear();
	}

	function runSplitWorker(payload: { bytes: Uint8Array; pageRanges: string }): Promise<PdfFileInput[]> {
		return new Promise((resolve, reject) => {
			const instance = ensureWorker();
			const id = ++requestId;
			pending.set(id, { resolve, reject });
			const request: PdfWorkerRequest = { id, request: { operation: 'split', payload } };
			instance.postMessage(request);
		});
	}

	async function handleFileChange(event: Event): Promise<void> {
		const input = event.currentTarget;
		if (!(input instanceof HTMLInputElement)) return;
		const file = input.files?.[0];
		if (!file) return;
		await loadFile(file);
	}

	async function loadFile(file: File): Promise<void> {
		fileName = file.name;
		const raw = new Uint8Array(await file.arrayBuffer());
		outputs = [];
		pageCount = 0;
		bytes = null;
		try {
			pageCount = await getPdfPageCount(raw);
			bytes = raw;
			pageRanges = pageCount === 1 ? '1' : `1-${pageCount}`;
		} catch {
			fileName = '';
			addToast('error', $t('ui.pdf.error.load_failed', 'Could not read this PDF. It may be corrupted or not a PDF.'));
		}
	}

	function handleUploadFiles(files: File[]): void {
		const file = files[0];
		if (file) void loadFile(file);
	}

	async function splitDocument(): Promise<void> {
		if (!bytes) {
			addToast('info', $t('ui.pdf.select_file_first', 'Select a PDF file first'));
			return;
		}
		const check = tryParsePageRanges(pageRanges, pageCount);
		if (!check.ok) {
			addToast(
				'error',
				messageForPdfToolError(
					new Error(`${PAGE_RANGE_ERROR_PREFIX}${check.reason}`),
					(k, fb) => $t(k, fb),
					$t('ui.pdf.split.error', 'Failed to split PDF')
				)
			);
			return;
		}
		isProcessing = true;
		usedWorker = false;
		try {
			const payload = { bytes, pageRanges };
			if (shouldUsePdfWorker(bytes.byteLength)) {
				usedWorker = true;
				outputs = await runSplitWorker(payload);
			} else {
				outputs = await splitPdf(payload);
			}
			addToast('success', $t('ui.pdf.split.done', 'PDF split complete'));
		} catch (error: unknown) {
			addToast(
				'error',
				messageForPdfToolError(
					error,
					(k, fb) => $t(k, fb),
					$t('ui.pdf.split.error', 'Failed to split PDF')
				)
			);
		} finally {
			isProcessing = false;
		}
	}

	function downloadFile(file: PdfFileInput): void {
		const normalized = new Uint8Array(file.bytes.byteLength);
		normalized.set(file.bytes);
		const blob = new Blob([normalized], { type: 'application/pdf' });
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = file.name;
		anchor.click();
		URL.revokeObjectURL(url);
	}

	function clearAll(): void {
		fileName = '';
		bytes = null;
		pageCount = 0;
		pageRanges = '1';
		outputs = [];
		if (inputRef) inputRef.value = '';
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
	}

	function pickFile(): void {
		inputRef?.click();
	}

	onDestroy(() => {
		terminateWorker();
	});
</script>

<div class="flex h-full min-h-0 w-full flex-col gap-[var(--space-4)] p-[var(--space-4)] sm:p-[var(--space-6)]">
	<input
		bind:this={inputRef}
		type="file"
		accept="application/pdf"
		class="sr-only"
		aria-label={$t('ui.pdf.upload.input_aria', 'Choose PDF file')}
		onchange={handleFileChange}
	/>

	{#if !bytes}
		<div class="min-h-0 flex-1">
			<PdfToolShell
				titleKey="ui.pdf.split.hero_title"
				subtitleKey="ui.pdf.split.hero_subtitle"
				badgeKey="ui.pdf.viewer.badge_local"
				variant="split"
			>
				{#snippet children()}
					<div class="flex min-h-0 flex-1 flex-col gap-[var(--space-4)]">
						<div
							class="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-base)]/60 p-[var(--space-4)]"
						>
							<p
								class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wide text-[var(--text-tertiary)]"
							>
								{$t('ui.pdf.split.use_cases_title', 'Common use cases')}
							</p>
							<ul
								class="mt-[var(--space-3)] list-disc space-y-[var(--space-2)] pl-[var(--space-5)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]"
							>
								{#each SPLIT_USE_CASE_KEYS as key, useCaseIndex (key)}
									<li>{$t(key, SPLIT_USE_CASE_FALLBACKS[useCaseIndex])}</li>
								{/each}
							</ul>
						</div>
						<div class="min-h-[200px] flex-1">
							<PdfUploadSurface
								titleKey="ui.pdf.split.upload_title"
								hintKey="ui.pdf.split.upload_hint"
								onFiles={handleUploadFiles}
							/>
						</div>
					</div>
				{/snippet}
			</PdfToolShell>
		</div>
	{:else}
		<div class="flex min-h-0 flex-1 flex-col gap-[var(--space-4)]">
			<div class="flex flex-col gap-[var(--space-4)] rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-elevated)] p-[var(--space-4)] shadow-[var(--shadow-md)]">
				<PdfFileActionBar fileName={fileName}>
					{#snippet children()}
						<button
							type="button"
							class="inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] text-[length:var(--text-sm)] transition-colors hover:bg-[var(--bg-surface-hover)]"
							onclick={pickFile}
						>
							{$t('ui.pdf.select_file', 'Select PDF')}
						</button>
						<button
							type="button"
							class="inline-flex h-10 min-w-[100px] items-center justify-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--accent-border)] bg-[var(--accent-dim)] px-[var(--space-3)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--accent)] transition-colors hover:bg-[var(--bg-selected)] disabled:opacity-50"
							disabled={isProcessing || !rangeParse.ok || pageCount < 1}
							onclick={() => void splitDocument()}
						>
							{#if isProcessing}
								<Loader2 class="animate-spin" size={18} aria-hidden="true" />
							{/if}
							{isProcessing ? $t('ui.actions.running', 'Running…') : $t('ui.pdf.split.run', 'Split')}
						</button>
						<button
							type="button"
							class="inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] border border-transparent px-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
							onclick={clearAll}
						>
							{$t('ui.actions.clear', 'Clear')}
						</button>
					{/snippet}
				</PdfFileActionBar>
				<PdfPageRangeField bind:value={pageRanges} pageCount={pageCount} disabled={isProcessing} />
				{#if usedWorker}
					<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.pdf.worker_used', 'Worker')}
					</p>
				{/if}
			</div>

			<div
				class="min-h-0 flex-1 overflow-auto rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-4)] shadow-[var(--shadow-sm)]"
			>
				{#if outputs.length === 0}
					<div
						class="flex min-h-[220px] flex-col items-center justify-center gap-[var(--space-2)] px-[var(--space-4)] text-center"
					>
						<p class="text-[length:var(--text-sm)] text-[var(--text-muted)]">
							{$t('ui.pdf.split.no_output', 'No split files generated')}
						</p>
						<p class="max-w-[40ch] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t('ui.pdf.split.empty_hint', 'Upload one PDF and provide page ranges')}
						</p>
					</div>
				{:else}
					<div class="flex flex-col gap-[var(--space-2)]">
						{#each outputs as file (file.name)}
							<div
								class="flex items-center justify-between gap-[var(--space-3)] rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-4)] py-[var(--space-3)] shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--border-strong)]"
							>
								<span class="min-w-0 truncate text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)]"
									>{file.name}</span
								>
								<button
									type="button"
									class="shrink-0 rounded-[var(--radius-md)] border border-[var(--accent-border)] bg-[var(--accent-dim)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--accent)] transition-colors hover:bg-[var(--bg-selected)]"
									onclick={() => downloadFile(file)}
								>
									{$t('ui.actions.download', 'Download')}
								</button>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
