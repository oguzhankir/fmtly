<script lang="ts">
	import { onDestroy } from 'svelte';
	import PdfToolShell from '$components/panels/pdf/PdfToolShell.svelte';
	import PdfUploadSurface from '$components/panels/pdf/PdfUploadSurface.svelte';
	import {
		mergePdfFiles,
		shouldUsePdfWorker,
		type PdfFileInput,
		type PdfWorkerRequest,
		type PdfWorkerResponse
	} from '$engines/pdf/index.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { formatByteSize } from '$stores/input.store';
	import { CheckCircle2, Download, FileText, GripVertical, Loader2 } from 'lucide-svelte';
	import { SvelteMap } from 'svelte/reactivity';

	type Pending = { resolve: (bytes: Uint8Array) => void; reject: (error: Error) => void };
	type MergeFile = PdfFileInput & { size: number };

	let files = $state<MergeFile[]>([]);
	let isProcessing = $state(false);
	let usedWorker = $state(false);
	let mergedBytes = $state<Uint8Array | null>(null);
	let worker: Worker | null = null;
	let requestId = 0;
	let inputRef: HTMLInputElement | null = $state(null);
	let dragFromIndex = $state<number | null>(null);
	let addZoneDragOver = $state(false);
	const pending = new SvelteMap<number, Pending>();

	let totalBytes = $derived(files.reduce((sum, file) => sum + file.size, 0));
	let mergedOutputSize = $derived(mergedBytes?.byteLength ?? 0);

	let successBannerRef: HTMLDivElement | null = $state(null);

	$effect(() => {
		if (mergedBytes && successBannerRef) {
			successBannerRef.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
		}
	});

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
			if (response.result?.operation === 'merge') {
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

	function runMergeWorker(payload: { files: PdfFileInput[] }): Promise<Uint8Array> {
		return new Promise((resolve, reject) => {
			const instance = ensureWorker();
			const id = ++requestId;
			pending.set(id, { resolve, reject });
			const request: PdfWorkerRequest = { id, request: { operation: 'merge', payload } };
			instance.postMessage(request);
		});
	}

	async function appendPdfFiles(selected: FileList | File[]): Promise<void> {
		const list = selected instanceof FileList ? Array.from(selected) : selected;
		const next: MergeFile[] = [...files];
		for (const file of list) {
			if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
				continue;
			}
			next.push({
				name: file.name,
				bytes: new Uint8Array(await file.arrayBuffer()),
				size: file.size
			});
		}
		if (next.length === files.length) {
			return;
		}
		files = next;
		mergedBytes = null;
	}

	async function handleFilesChange(event: Event): Promise<void> {
		const input = event.currentTarget;
		if (!(input instanceof HTMLInputElement)) return;
		const selected = input.files;
		if (!selected || selected.length === 0) return;
		await appendPdfFiles(selected);
		input.value = '';
	}

	function handleDropzoneFiles(fileList: File[]): void {
		void appendPdfFiles(fileList);
	}

	function moveUp(index: number): void {
		if (index <= 0) return;
		const next = [...files];
		const temp = next[index - 1];
		next[index - 1] = next[index];
		next[index] = temp;
		files = next;
		mergedBytes = null;
	}

	function moveDown(index: number): void {
		if (index >= files.length - 1) return;
		const next = [...files];
		const temp = next[index + 1];
		next[index + 1] = next[index];
		next[index] = temp;
		files = next;
		mergedBytes = null;
	}

	function removeFile(index: number): void {
		files = files.filter((_, currentIndex) => currentIndex !== index);
		mergedBytes = null;
	}

	function reorderFiles(fromIndex: number, toIndex: number): void {
		if (fromIndex === toIndex) return;
		const next = [...files];
		const [item] = next.splice(fromIndex, 1);
		next.splice(toIndex, 0, item);
		files = next;
		mergedBytes = null;
	}

	function handleRowDragStart(index: number, event: DragEvent): void {
		dragFromIndex = index;
		event.dataTransfer?.setData('text/plain', String(index));
		if (event.dataTransfer) {
			event.dataTransfer.effectAllowed = 'move';
		}
	}

	function handleRowDragEnd(): void {
		dragFromIndex = null;
	}

	function handleRowDragOver(event: DragEvent): void {
		event.preventDefault();
		if (event.dataTransfer) {
			event.dataTransfer.dropEffect = 'move';
		}
	}

	function handleRowDrop(targetIndex: number, event: DragEvent): void {
		event.preventDefault();
		const raw = event.dataTransfer?.getData('text/plain');
		const from = raw !== undefined ? Number.parseInt(raw, 10) : Number.NaN;
		if (Number.isNaN(from) || from === targetIndex) {
			return;
		}
		reorderFiles(from, targetIndex);
		dragFromIndex = null;
	}

	function handleAddZoneDragOver(event: DragEvent): void {
		event.preventDefault();
		if (event.dataTransfer) {
			event.dataTransfer.dropEffect = 'copy';
		}
		addZoneDragOver = true;
	}

	function handleAddZoneDragLeave(event: DragEvent): void {
		if (event.currentTarget === event.target) {
			addZoneDragOver = false;
		}
	}

	function handleAddZoneDrop(event: DragEvent): void {
		event.preventDefault();
		addZoneDragOver = false;
		const list = event.dataTransfer?.files;
		if (!list || list.length === 0) return;
		void appendPdfFiles(list);
	}

	async function mergeFiles(): Promise<void> {
		if (files.length < 2) {
			addToast('info', $t('ui.pdf.merge.select_more', 'Select at least two PDF files'));
			return;
		}

		isProcessing = true;
		usedWorker = false;
		try {
			const payload = { files: files.map((file) => ({ name: file.name, bytes: file.bytes })) };
			if (shouldUsePdfWorker(totalBytes)) {
				usedWorker = true;
				mergedBytes = await runMergeWorker(payload);
			} else {
				mergedBytes = await mergePdfFiles(payload);
			}
			addToast('success', $t('ui.pdf.merge.done', 'PDF files merged'));
		} catch (error: unknown) {
			addToast(
				'error',
				error instanceof Error ? error.message : $t('ui.pdf.merge.error', 'Failed to merge PDFs')
			);
		} finally {
			isProcessing = false;
		}
	}

	function downloadMerged(): void {
		if (!mergedBytes) {
			addToast('info', $t('ui.pdf.merge.no_output', 'No merged PDF to download'));
			return;
		}
		const normalized = new Uint8Array(mergedBytes.byteLength);
		normalized.set(mergedBytes);
		const blob = new Blob([normalized], { type: 'application/pdf' });
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = 'merged.pdf';
		anchor.click();
		URL.revokeObjectURL(url);
	}

	function pickFiles(): void {
		inputRef?.click();
	}

	function clearAll(): void {
		files = [];
		mergedBytes = null;
		if (inputRef) inputRef.value = '';
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
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
		multiple
		class="sr-only"
		aria-label={$t('ui.pdf.upload.input_aria_multiple', 'Choose PDF files')}
		onchange={handleFilesChange}
	/>

	{#if files.length === 0}
		<PdfToolShell
			titleKey="ui.pdf.merge.hero_title"
			subtitleKey="ui.pdf.merge.hero_subtitle"
			variant="merge"
		>
			{#snippet children()}
				<div class="flex h-full min-h-0 flex-col gap-[var(--space-4)]">
					<p class="text-center text-[length:var(--text-sm)] text-[var(--text-secondary)]">
						{$t('ui.pdf.merge.drop_hint', 'Drop PDFs here to add — drag rows to reorder')}
					</p>
					<PdfUploadSurface multiple onFiles={handleDropzoneFiles} />
				</div>
			{/snippet}
		</PdfToolShell>
	{:else}
		<div
			class="flex flex-col gap-[var(--space-4)] rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-elevated)] p-[var(--space-4)] shadow-[var(--shadow-md)] sm:p-[var(--space-6)]"
		>
			{#if mergedBytes}
				<div
					bind:this={successBannerRef}
					class="sticky top-0 z-10 flex flex-col gap-[var(--space-4)] rounded-[var(--radius-xl)] border border-[var(--border-success)] bg-[var(--success-dim)] p-[var(--space-4)] shadow-[var(--shadow-md)] sm:flex-row sm:items-center sm:justify-between sm:p-[var(--space-5)]"
					role="status"
					aria-live="polite"
				>
					<div class="flex min-w-0 flex-1 items-start gap-[var(--space-3)]">
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--bg-base)] text-[var(--success)] ring-1 ring-[var(--border-success)]"
						>
							<CheckCircle2 size={28} strokeWidth={2} aria-hidden="true" />
						</div>
						<div class="min-w-0">
							<p class="text-[length:var(--text-base)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
								{$t('ui.pdf.merge.ready_title', 'Merged PDF is ready')}
							</p>
							<p class="mt-[var(--space-1)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
								{$t(
									'ui.pdf.merge.ready_subtitle',
									{ size: formatByteSize(mergedOutputSize) },
									'Output size {size}. Saves as merged.pdf.'
								)}
							</p>
						</div>
					</div>
					<button
						type="button"
						class="inline-flex h-12 w-full shrink-0 items-center justify-center gap-[var(--space-2)] rounded-[var(--radius-lg)] bg-[var(--success)] px-[var(--space-6)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-inverse)] shadow-[var(--shadow-md)] transition-transform hover:brightness-110 active:scale-[0.99] sm:w-auto sm:min-w-[220px]"
						onclick={downloadMerged}
					>
						<Download size={20} strokeWidth={2} aria-hidden="true" />
						{$t('ui.pdf.merge.download_primary', 'Download merged PDF')}
					</button>
				</div>
			{:else if files.length >= 2}
				<p
					class="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-base)] px-[var(--space-4)] py-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
					role="note"
				>
					{$t(
						'ui.pdf.merge.merge_hint',
						'1. Put files in order · 2. Tap Merge · 3. Download your merged PDF below.'
					)}
				</p>
			{/if}

			<div
				class="flex flex-col gap-[var(--space-4)] border-b border-[var(--border-subtle)] pb-[var(--space-4)] sm:flex-row sm:items-center sm:justify-between"
			>
				<div class="flex items-start gap-[var(--space-3)]">
					<div
						class="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-base)] text-[var(--accent)]"
					>
						<FileText size={24} strokeWidth={1.75} aria-hidden="true" />
					</div>
					<div>
						<p class="text-[length:var(--text-base)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							<span class="tabular-nums">{files.length}</span>
							{$t('ui.pdf.merge.files_selected', 'files selected')}
						</p>
						<p class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{formatByteSize(totalBytes)}
							{#if usedWorker}
								<span aria-hidden="true"> · </span>
								{$t('ui.pdf.worker_used', 'Worker')}
							{/if}
						</p>
						{#if !mergedBytes && files.length >= 2}
							<p class="mt-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-muted)]">
								{$t('ui.pdf.merge.download_locked', 'Run Merge first — your download button will appear here.')}
							</p>
						{/if}
					</div>
				</div>
				<div class="flex flex-wrap gap-[var(--space-2)]">
					<button
						type="button"
						class="inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-4)] text-[length:var(--text-sm)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-hover)]"
						onclick={pickFiles}
					>
						{$t('ui.pdf.merge.select_files', 'Select PDF files')}
					</button>
					<button
						type="button"
						class="inline-flex h-10 min-w-[120px] items-center justify-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--accent-border)] bg-[var(--accent-dim)] px-[var(--space-4)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--accent)] transition-colors hover:bg-[var(--bg-selected)] disabled:opacity-50"
						disabled={isProcessing || files.length < 2}
						onclick={() => void mergeFiles()}
					>
						{#if isProcessing}
							<Loader2 class="animate-spin" size={18} aria-hidden="true" />
						{/if}
						{isProcessing ? $t('ui.actions.running', 'Running…') : $t('ui.pdf.merge.run', 'Merge')}
					</button>
					<button
						type="button"
						class="inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] border border-transparent px-[var(--space-4)] text-[length:var(--text-sm)] text-[var(--text-tertiary)] underline-offset-4 hover:text-[var(--text-secondary)] hover:underline"
						onclick={clearAll}
					>
						{$t('ui.actions.clear', 'Clear')}
					</button>
				</div>
			</div>

			<div
				role="region"
				aria-label={$t('ui.pdf.merge.reorder_drag', 'Drag to reorder')}
				class="rounded-[var(--radius-xl)] border border-dashed border-[var(--border-default)] bg-[var(--bg-base)]/80 p-[var(--space-3)] transition-colors {addZoneDragOver
					? 'border-[var(--accent)] bg-[var(--accent-dim)]'
					: ''}"
				ondragover={handleAddZoneDragOver}
				ondragleave={handleAddZoneDragLeave}
				ondrop={handleAddZoneDrop}
			>
				<p class="mb-[var(--space-3)] text-center text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-secondary)]">
					{$t('ui.pdf.merge.drop_more', 'Drop more PDFs here to append')}
				</p>
				<div class="flex max-h-[min(50vh,440px)] flex-col gap-[var(--space-2)] overflow-y-auto" role="list">
					{#each files as file, index (file.name + '-' + index)}
						<div
							role="listitem"
							aria-label={file.name}
							class="flex items-center gap-[var(--space-3)] rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-3)] shadow-[var(--shadow-sm)] transition-all {dragFromIndex ===
							index
								? 'scale-[0.99] opacity-80 ring-2 ring-[var(--accent)]'
								: 'hover:border-[var(--border-strong)]'}"
							draggable="true"
							ondragstart={(event) => handleRowDragStart(index, event)}
							ondragend={handleRowDragEnd}
							ondragover={handleRowDragOver}
							ondrop={(event) => handleRowDrop(index, event)}
						>
							<span
								class="cursor-grab touch-none text-[var(--text-tertiary)] active:cursor-grabbing"
								aria-hidden="true"
							>
								<GripVertical size={18} />
							</span>
							<span
								class="flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--bg-base)] text-[length:var(--text-xs)] font-[number:var(--weight-bold)] tabular-nums text-[var(--accent)]"
								>{index + 1}</span
							>
							<FileText size={18} class="shrink-0 text-[var(--text-tertiary)]" aria-hidden="true" />
							<span class="min-w-0 flex-1 truncate text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)]"
								>{file.name}</span
							>
							<span class="shrink-0 text-[length:var(--text-xs)] tabular-nums text-[var(--text-tertiary)]"
								>{formatByteSize(file.size)}</span
							>
							<div class="flex shrink-0 items-center gap-[var(--space-1)]">
								<button
									type="button"
									class="rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] transition-colors hover:bg-[var(--bg-surface-hover)]"
									onclick={() => moveUp(index)}
								>
									{$t('ui.actions.up', 'Up')}
								</button>
								<button
									type="button"
									class="rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] transition-colors hover:bg-[var(--bg-surface-hover)]"
									onclick={() => moveDown(index)}
								>
									{$t('ui.actions.down', 'Down')}
								</button>
								<button
									type="button"
									class="rounded-[var(--radius-md)] border border-[var(--border-error)]/40 px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--error)] transition-colors hover:bg-[var(--error-dim)]"
									onclick={() => removeFile(index)}
								>
									{$t('ui.actions.remove', 'Remove')}
								</button>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</div>
