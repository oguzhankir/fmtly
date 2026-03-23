<script lang="ts">
	import { onDestroy } from 'svelte';
	import PdfFileActionBar from '$components/panels/pdf/PdfFileActionBar.svelte';
	import PdfPageRangeField from '$components/panels/pdf/PdfPageRangeField.svelte';
	import PdfToolShell from '$components/panels/pdf/PdfToolShell.svelte';
	import PdfUploadSurface from '$components/panels/pdf/PdfUploadSurface.svelte';
	import {
		extractPdfPages,
		getPdfPageCount,
		PAGE_RANGE_ERROR_PREFIX,
		shouldUsePdfWorker,
		tryParsePageRanges,
		type PdfWorkerRequest,
		type PdfWorkerResponse
	} from '$engines/pdf/index.js';
	import { messageForPdfToolError } from '$utils/pdf-range-error.js';
	import { Loader2 } from 'lucide-svelte';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { SvelteMap } from 'svelte/reactivity';

	type Pending = { resolve: (bytes: Uint8Array) => void; reject: (error: Error) => void };

	let fileName = $state('');
	let bytes: Uint8Array | null = $state(null);
	let pageCount = $state(0);
	let pageRanges = $state('1');
	let outputBytes: Uint8Array | null = $state(null);

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
			if (response.result?.operation === 'extract-pages') {
				handler.resolve(response.result.bytes);
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

	function runExtractWorker(payload: { bytes: Uint8Array; pageRanges: string }): Promise<Uint8Array> {
		return new Promise((resolve, reject) => {
			const instance = ensureWorker();
			const id = ++requestId;
			pending.set(id, { resolve, reject });
			const request: PdfWorkerRequest = { id, request: { operation: 'extract-pages', payload } };
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
		outputBytes = null;
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

	async function extractPages(): Promise<void> {
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
					$t('ui.pdf.extract.error', 'Failed to extract pages')
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
				outputBytes = await runExtractWorker(payload);
			} else {
				outputBytes = await extractPdfPages(payload);
			}
			addToast('success', $t('ui.pdf.extract.done', 'Pages extracted'));
		} catch (error: unknown) {
			addToast(
				'error',
				messageForPdfToolError(
					error,
					(k, fb) => $t(k, fb),
					$t('ui.pdf.extract.error', 'Failed to extract pages')
				)
			);
		} finally {
			isProcessing = false;
		}
	}

	function downloadOutput(): void {
		if (!outputBytes) {
			addToast('info', $t('ui.pdf.extract.no_output', 'No output PDF to download'));
			return;
		}
		const normalized = new Uint8Array(outputBytes.byteLength);
		normalized.set(outputBytes);
		const blob = new Blob([normalized], { type: 'application/pdf' });
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = 'extracted-pages.pdf';
		anchor.click();
		URL.revokeObjectURL(url);
	}

	function clearAll(): void {
		fileName = '';
		bytes = null;
		pageCount = 0;
		pageRanges = '1';
		outputBytes = null;
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
				titleKey="ui.pdf.extract.hero_title"
				subtitleKey="ui.pdf.extract.hero_subtitle"
				badgeKey="ui.pdf.viewer.badge_local"
				variant="extract"
			>
				{#snippet children()}
					<PdfUploadSurface
						titleKey="ui.pdf.extract.upload_title"
						hintKey="ui.pdf.extract.upload_hint"
						onFiles={handleUploadFiles}
					/>
				{/snippet}
			</PdfToolShell>
		</div>
	{:else}
		<div class="flex min-h-0 flex-1 flex-col gap-[var(--space-4)]">
			<div
				class="flex flex-col gap-[var(--space-4)] rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-elevated)] p-[var(--space-4)] shadow-[var(--shadow-md)] sm:p-[var(--space-6)]"
			>
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
							class="inline-flex h-10 min-w-[140px] items-center justify-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--accent-border)] bg-[var(--accent-dim)] px-[var(--space-3)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--accent)] transition-colors hover:bg-[var(--bg-selected)] disabled:opacity-50"
							disabled={isProcessing || !rangeParse.ok || pageCount < 1}
							onclick={() => void extractPages()}
						>
							{#if isProcessing}
								<Loader2 class="animate-spin" size={18} aria-hidden="true" />
							{/if}
							{isProcessing ? $t('ui.actions.running', 'Running…') : $t('ui.pdf.extract.run', 'Extract pages')}
						</button>
						<button
							type="button"
							class="inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] text-[length:var(--text-sm)] transition-colors hover:bg-[var(--bg-surface-hover)]"
							onclick={downloadOutput}
						>
							{$t('ui.actions.download', 'Download')}
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

				<div
					class="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-[var(--space-4)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
				>
					{#if outputBytes}
						<p class="text-[length:var(--text-sm)] text-[var(--text-primary)]">
							{$t('ui.pdf.extract.ready', 'Output PDF is ready to download')}
						</p>
						{#if usedWorker}
							<p class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
								{$t('ui.pdf.worker_used', 'Worker')}
							</p>
						{/if}
					{:else}
						<p>{$t('ui.pdf.extract.empty_hint', 'Upload one PDF and pick page ranges')}</p>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</div>
