<script lang="ts">
	import { onDestroy } from 'svelte';
	import PdfFileActionBar from '$components/panels/pdf/PdfFileActionBar.svelte';
	import PdfToolShell from '$components/panels/pdf/PdfToolShell.svelte';
	import PdfUploadSurface from '$components/panels/pdf/PdfUploadSurface.svelte';
	import { getPdfMetadata, shouldUsePdfWorker, type PdfMetadata, type PdfWorkerRequest, type PdfWorkerResponse } from '$engines/pdf/index.js';
	import { Loader2 } from 'lucide-svelte';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';

	type Pending = { resolve: (metadata: PdfMetadata) => void; reject: (error: Error) => void };

	let fileName = $state('');
	let bytes: Uint8Array | null = $state(null);
	let metadata = $state<PdfMetadata | null>(null);
	let isProcessing = $state(false);
	let usedWorker = $state(false);
	let worker: Worker | null = null;
	let requestId = 0;
	let inputRef: HTMLInputElement | null = $state(null);
	const pending = new Map<number, Pending>();

	const fields = $derived(
		metadata
			? [
					{ key: $t('ui.pdf.metadata.title', 'Title'), value: metadata.title },
					{ key: $t('ui.pdf.metadata.author', 'Author'), value: metadata.author },
					{ key: $t('ui.pdf.metadata.subject', 'Subject'), value: metadata.subject },
					{ key: $t('ui.pdf.metadata.keywords', 'Keywords'), value: metadata.keywords },
					{ key: $t('ui.pdf.metadata.creator', 'Creator'), value: metadata.creator },
					{ key: $t('ui.pdf.metadata.producer', 'Producer'), value: metadata.producer },
					{ key: $t('ui.pdf.metadata.creation_date', 'Creation date'), value: metadata.creationDate },
					{
						key: $t('ui.pdf.metadata.modification_date', 'Modification date'),
						value: metadata.modificationDate
					},
					{
						key: $t('ui.pdf.metadata.page_count', 'Page count'),
						value: String(metadata.pageCount)
					},
					{
						key: $t('ui.pdf.metadata.file_size', 'File size (bytes)'),
						value: String(metadata.fileSizeBytes)
					}
				]
			: []
	);

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
			if (response.result?.operation === 'metadata') {
				handler.resolve(response.result.metadata);
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

	function runMetadataWorker(fileBytes: Uint8Array): Promise<PdfMetadata> {
		return new Promise((resolve, reject) => {
			const instance = ensureWorker();
			const id = ++requestId;
			pending.set(id, { resolve, reject });
			const request: PdfWorkerRequest = { id, request: { operation: 'metadata', bytes: fileBytes } };
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
		bytes = new Uint8Array(await file.arrayBuffer());
		metadata = null;
	}

	function handleUploadFiles(files: File[]): void {
		const file = files[0];
		if (file) void loadFile(file);
	}

	async function loadMetadata(): Promise<void> {
		if (!bytes) {
			addToast('info', $t('ui.pdf.select_file_first', 'Select a PDF file first'));
			return;
		}
		isProcessing = true;
		usedWorker = false;
		try {
			if (shouldUsePdfWorker(bytes.byteLength)) {
				usedWorker = true;
				metadata = await runMetadataWorker(bytes);
			} else {
				metadata = await getPdfMetadata(bytes);
			}
			addToast('success', $t('ui.pdf.metadata.done', 'Metadata loaded'));
		} catch (error: unknown) {
			addToast(
				'error',
				error instanceof Error ? error.message : $t('ui.pdf.metadata.error', 'Failed to read metadata')
			);
		} finally {
			isProcessing = false;
		}
	}

	function clearAll(): void {
		fileName = '';
		bytes = null;
		metadata = null;
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
				titleKey="ui.pdf.metadata.hero_title"
				subtitleKey="ui.pdf.metadata.hero_subtitle"
				badgeKey="ui.pdf.viewer.badge_local"
				variant="metadata"
			>
				{#snippet children()}
					<PdfUploadSurface
						titleKey="ui.pdf.metadata.upload_title"
						hintKey="ui.pdf.metadata.upload_hint"
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
							class="inline-flex h-10 min-w-[140px] items-center justify-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--accent-border)] bg-[var(--accent-dim)] px-[var(--space-3)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--accent)] transition-colors hover:bg-[var(--bg-selected)] disabled:opacity-50"
							disabled={isProcessing}
							onclick={() => void loadMetadata()}
						>
							{#if isProcessing}
								<Loader2 class="animate-spin" size={18} aria-hidden="true" />
							{/if}
							{isProcessing ? $t('ui.actions.running', 'Running…') : $t('ui.pdf.metadata.run', 'Read metadata')}
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
				{#if !metadata}
					<div
						class="flex min-h-[220px] flex-col items-center justify-center gap-[var(--space-2)] px-[var(--space-4)] text-center"
					>
						<p class="text-[length:var(--text-sm)] text-[var(--text-muted)]">
							{$t('ui.pdf.metadata.no_output', 'No metadata loaded')}
						</p>
						<p class="max-w-[40ch] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t('ui.pdf.metadata.empty_hint', 'Upload a PDF to inspect metadata')}
						</p>
					</div>
				{:else}
					<div class="grid gap-[var(--space-3)] sm:grid-cols-2">
						{#each fields as field (field.key)}
							<div
								class="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)] shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--border-strong)]"
							>
								<div class="text-[length:var(--text-xs)] font-[number:var(--weight-medium)] uppercase tracking-wide text-[var(--text-tertiary)]">
									{field.key}
								</div>
								<div
									class="mt-[var(--space-2)] break-words text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)]"
								>
									{field.value || '—'}
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
