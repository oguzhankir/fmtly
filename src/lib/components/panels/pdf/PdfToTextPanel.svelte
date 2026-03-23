<script lang="ts">
	import { onDestroy } from 'svelte';
	import PdfFileActionBar from '$components/panels/pdf/PdfFileActionBar.svelte';
	import PdfToolShell from '$components/panels/pdf/PdfToolShell.svelte';
	import PdfUploadSurface from '$components/panels/pdf/PdfUploadSurface.svelte';
	import {
		extractPdfText,
		shouldUsePdfWorker,
		type PdfPageText,
		type PdfWorkerRequest,
		type PdfWorkerResponse
	} from '$engines/pdf/index.js';
	import { Loader2 } from 'lucide-svelte';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';

	type Pending = { resolve: (pages: PdfPageText[]) => void; reject: (error: Error) => void };

	let fileName = $state('');
	let fileBytes: Uint8Array | null = $state(null);
	let pages = $state<PdfPageText[]>([]);
	let isProcessing = $state(false);
	let usedWorker = $state(false);
	let worker: Worker | null = null;
	let requestId = 0;
	let inputRef: HTMLInputElement | null = $state(null);
	const pending = new Map<number, Pending>();

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
			if (response.result?.operation === 'to-text') {
				handler.resolve(response.result.pages);
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

	function runToTextWorker(bytes: Uint8Array): Promise<PdfPageText[]> {
		return new Promise((resolve, reject) => {
			const instance = ensureWorker();
			const id = ++requestId;
			pending.set(id, { resolve, reject });
			const request: PdfWorkerRequest = { id, request: { operation: 'to-text', bytes } };
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
		fileBytes = new Uint8Array(await file.arrayBuffer());
		pages = [];
	}

	function handleUploadFiles(files: File[]): void {
		const file = files[0];
		if (file) void loadFile(file);
	}

	async function extractText(): Promise<void> {
		if (!fileBytes) {
			addToast('info', $t('ui.pdf.select_file_first', 'Select a PDF file first'));
			return;
		}

		isProcessing = true;
		usedWorker = false;
		try {
			if (shouldUsePdfWorker(fileBytes.byteLength)) {
				usedWorker = true;
				pages = await runToTextWorker(fileBytes);
			} else {
				pages = await extractPdfText(fileBytes);
			}
			addToast('success', $t('ui.pdf.to_text.done', 'Text extracted'));
		} catch (error: unknown) {
			addToast(
				'error',
				error instanceof Error ? error.message : $t('ui.pdf.to_text.error', 'Failed to extract text')
			);
		} finally {
			isProcessing = false;
		}
	}

	async function copyAllText(): Promise<void> {
		if (pages.length === 0) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		const text = pages.map((page) => `# ${$t('ui.pdf.page', 'Page')} ${page.page}\n${page.text}`).join('\n\n');
		try {
			await navigator.clipboard.writeText(text);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	function downloadText(): void {
		if (pages.length === 0) {
			addToast('info', $t('ui.pdf.to_text.empty', 'No extracted text to download'));
			return;
		}
		const text = pages.map((page) => `# ${$t('ui.pdf.page', 'Page')} ${page.page}\n${page.text}`).join('\n\n');
		const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = 'pdf-text.txt';
		anchor.click();
		URL.revokeObjectURL(url);
	}

	function clearAll(): void {
		fileName = '';
		fileBytes = null;
		pages = [];
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

	{#if !fileBytes}
		<div class="min-h-0 flex-1">
			<PdfToolShell
				titleKey="ui.pdf.to_text.hero_title"
				subtitleKey="ui.pdf.to_text.hero_subtitle"
				badgeKey="ui.pdf.viewer.badge_local"
				variant="to-text"
			>
				{#snippet children()}
					<PdfUploadSurface
						titleKey="ui.pdf.to_text.upload_title"
						hintKey="ui.pdf.to_text.upload_hint"
						onFiles={handleUploadFiles}
					/>
				{/snippet}
			</PdfToolShell>
		</div>
	{:else}
		<div class="flex min-h-0 flex-1 flex-col gap-[var(--space-4)]">
			<div class="flex flex-col gap-[var(--space-3)] rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-elevated)] p-[var(--space-4)] shadow-[var(--shadow-md)]">
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
							class="inline-flex h-10 min-w-[120px] items-center justify-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--accent-border)] bg-[var(--accent-dim)] px-[var(--space-3)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--accent)] transition-colors hover:bg-[var(--bg-selected)] disabled:opacity-50"
							disabled={isProcessing}
							onclick={() => void extractText()}
						>
							{#if isProcessing}
								<Loader2 class="animate-spin" size={18} aria-hidden="true" />
							{/if}
							{isProcessing ? $t('ui.actions.running', 'Running…') : $t('ui.pdf.to_text.extract', 'Extract text')}
						</button>
						<button
							type="button"
							class="inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] text-[length:var(--text-sm)] transition-colors hover:bg-[var(--bg-surface-hover)]"
							onclick={copyAllText}
						>
							{$t('ui.actions.copy', 'Copy')}
						</button>
						<button
							type="button"
							class="inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] text-[length:var(--text-sm)] transition-colors hover:bg-[var(--bg-surface-hover)]"
							onclick={downloadText}
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
				{#if usedWorker}
					<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.pdf.worker_used', 'Worker')}
					</p>
				{/if}
			</div>

			<div
				class="min-h-0 flex-1 overflow-auto rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-4)] shadow-[var(--shadow-sm)]"
			>
				{#if pages.length === 0}
					<div
						class="flex min-h-[220px] flex-col items-center justify-center gap-[var(--space-2)] px-[var(--space-4)] text-center"
					>
						<p class="text-[length:var(--text-sm)] text-[var(--text-muted)]">
							{$t('ui.pdf.to_text.no_output', 'No extracted text yet')}
						</p>
						<p class="max-w-[40ch] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t('ui.pdf.to_text.empty_hint', 'Upload a PDF and extract page-by-page text')}
						</p>
					</div>
				{:else}
					<div class="flex flex-col gap-[var(--space-3)]">
						{#each pages as page (page.page)}
							<section
								class="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)] shadow-[var(--shadow-sm)]"
							>
								<h3
									class="mb-[var(--space-3)] border-b border-[var(--border-faint)] pb-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]"
								>
									{$t('ui.pdf.page', 'Page')}
									{page.page}
								</h3>
								<pre
									class="max-h-[min(50vh,480px)] overflow-auto whitespace-pre-wrap break-words rounded-[var(--radius-md)] bg-[var(--bg-base)] p-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] leading-relaxed text-[var(--text-secondary)]"
								>{page.text}</pre>
							</section>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
