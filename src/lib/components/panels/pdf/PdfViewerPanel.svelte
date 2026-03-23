<script lang="ts">
	import { onDestroy } from 'svelte';
	import PdfPageThumbnail from '$components/panels/pdf/PdfPageThumbnail.svelte';
	import PdfToolShell from '$components/panels/pdf/PdfToolShell.svelte';
	import PdfUploadSurface from '$components/panels/pdf/PdfUploadSurface.svelte';
	import {
		openPdfViewerDocument,
		renderPdfPageToCanvas,
		type PdfViewerDocument
	} from '$engines/pdf/index.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { formatByteSize } from '$stores/input.store';
	import {
		ChevronLeft,
		ChevronRight,
		FileText,
		Loader2,
		Maximize2,
		RotateCcw,
		Trash2,
		ZoomIn,
		ZoomOut
	} from 'lucide-svelte';

	type ViewerPage = {
		getViewport: (params: { scale: number }) => { width: number };
	};

	const THUMB_MAX_PAGES = 48;

	let currentFileName = $state('');
	let fileSizeBytes = $state(0);
	let pageCount = $state(0);
	let currentPage = $state(1);
	let zoomScale = $state(1);
	let isLoading = $state(false);
	let doc = $state<PdfViewerDocument | null>(null);
	let canvasRef: HTMLCanvasElement | null = $state(null);
	let fileInputRef: HTMLInputElement | null = $state(null);
	let viewportRef: HTMLDivElement | null = $state(null);
	let pageInputStr = $state('1');
	let zoomRenderRaf = 0;

	let pageNumbers = $derived.by(() => {
		if (pageCount < 1) {
			return [] as number[];
		}
		return Array.from({ length: pageCount }, (_, index) => index + 1);
	});

	let thumbPages = $derived.by(() => {
		if (pageCount <= THUMB_MAX_PAGES) {
			return pageNumbers;
		}
		return [] as number[];
	});

	let zoomPercent = $derived(Math.round(zoomScale * 100));

	$effect(() => {
		pageInputStr = String(currentPage);
	});

	async function handleFileChange(event: Event): Promise<void> {
		const input = event.currentTarget;
		if (!(input instanceof HTMLInputElement)) return;
		const file = input.files?.[0];
		if (!file) return;
		await loadPdfFile(file);
	}

	function handleUploadFiles(files: File[]): void {
		const file = files[0];
		if (file) void loadPdfFile(file);
	}

	async function loadPdfFile(file: File): Promise<void> {
		isLoading = true;
		try {
			const bytes = new Uint8Array(await file.arrayBuffer());
			releaseDocument();
			doc = await openPdfViewerDocument(bytes);
			currentFileName = file.name;
			fileSizeBytes = file.size;
			pageCount = doc.pageCount;
			currentPage = 1;
			zoomScale = 1;
			await renderCurrentPage();
			addToast('success', $t('ui.pdf.viewer.loaded', 'PDF loaded'));
		} catch (error: unknown) {
			releaseDocument();
			addToast(
				'error',
				error instanceof Error ? error.message : $t('ui.pdf.viewer.error', 'Failed to open PDF')
			);
		} finally {
			isLoading = false;
		}
	}

	async function renderCurrentPage(): Promise<void> {
		if (!doc || !canvasRef || pageCount < 1) return;
		try {
			await renderPdfPageToCanvas(doc, currentPage, canvasRef, zoomScale);
		} catch (error: unknown) {
			addToast(
				'error',
				error instanceof Error ? error.message : $t('ui.pdf.viewer.render_error', 'Failed to render page')
			);
		}
	}

	function scheduleZoomRender(): void {
		if (typeof globalThis.cancelAnimationFrame === 'function') {
			globalThis.cancelAnimationFrame(zoomRenderRaf);
		}
		if (typeof globalThis.requestAnimationFrame !== 'function') {
			void renderCurrentPage();
			return;
		}
		zoomRenderRaf = globalThis.requestAnimationFrame(() => {
			void renderCurrentPage();
		});
	}

	function handleZoomInput(event: Event): void {
		const input = event.currentTarget;
		if (!(input instanceof HTMLInputElement)) return;
		const next = Number(input.value) / 100;
		zoomScale = Math.max(0.2, Math.min(3, next));
		scheduleZoomRender();
	}

	function handlePageInputCommit(): void {
		const n = Number.parseInt(pageInputStr.trim(), 10);
		if (Number.isNaN(n)) {
			pageInputStr = String(currentPage);
			return;
		}
		const clamped = Math.min(pageCount, Math.max(1, n));
		pageInputStr = String(clamped);
		if (clamped !== currentPage) {
			void selectPage(clamped);
		}
	}

	async function goToPreviousPage(): Promise<void> {
		if (currentPage <= 1) return;
		currentPage -= 1;
		await renderCurrentPage();
	}

	async function goToNextPage(): Promise<void> {
		if (currentPage >= pageCount) return;
		currentPage += 1;
		await renderCurrentPage();
	}

	async function selectPage(page: number): Promise<void> {
		if (page < 1 || page > pageCount || page === currentPage) return;
		currentPage = page;
		await renderCurrentPage();
	}

	async function zoomIn(): Promise<void> {
		zoomScale = Math.min(3, zoomScale + 0.2);
		await renderCurrentPage();
	}

	async function zoomOut(): Promise<void> {
		zoomScale = Math.max(0.2, zoomScale - 0.2);
		await renderCurrentPage();
	}

	async function fitWidth(): Promise<void> {
		if (!doc || !viewportRef) return;
		try {
			const page = (await doc.getPage(currentPage)) as ViewerPage;
			const baseWidth = page.getViewport({ scale: 1 }).width;
			if (baseWidth <= 0) return;
			const targetWidth = viewportRef.clientWidth - 32;
			zoomScale = Math.max(0.2, Math.min(3, targetWidth / baseWidth));
			await renderCurrentPage();
		} catch {
			addToast('error', $t('ui.pdf.viewer.fit_width_error', 'Could not fit page to width'));
		}
	}

	async function resetZoom(): Promise<void> {
		zoomScale = 1;
		await renderCurrentPage();
	}

	function releaseDocument(): void {
		if (doc) {
			doc.destroy();
			doc = null;
		}
		pageCount = 0;
		currentPage = 1;
		zoomScale = 1;
		fileSizeBytes = 0;
	}

	function clearAll(): void {
		releaseDocument();
		currentFileName = '';
		if (fileInputRef) {
			fileInputRef.value = '';
		}
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
	}

	function pickFile(): void {
		fileInputRef?.click();
	}

	onDestroy(() => {
		if (typeof globalThis.cancelAnimationFrame === 'function') {
			globalThis.cancelAnimationFrame(zoomRenderRaf);
		}
		releaseDocument();
	});
</script>

<div class="flex h-full min-h-0 w-full flex-col bg-[var(--bg-surface)]">
	<input
		bind:this={fileInputRef}
		type="file"
		accept="application/pdf"
		class="sr-only"
		aria-label={$t('ui.pdf.upload.input_aria', 'Choose PDF file')}
		onchange={handleFileChange}
	/>

	{#if pageCount === 0}
		<div class="min-h-0 flex-1 p-[var(--space-4)] sm:p-[var(--space-6)]">
			<PdfToolShell
				titleKey="ui.pdf.viewer.hero_title"
				subtitleKey="ui.pdf.viewer.hero_subtitle"
				badgeKey="ui.pdf.viewer.badge_local"
				variant="viewer"
			>
				{#snippet children()}
					<PdfUploadSurface onFiles={handleUploadFiles} />
				{/snippet}
			</PdfToolShell>
		</div>
	{:else}
		<div
			class="sticky top-0 z-20 flex flex-col gap-0 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[var(--bg-surface)]/75"
		>
			<div
				class="flex flex-col gap-[var(--space-3)] px-[var(--space-4)] py-[var(--space-3)] sm:flex-row sm:items-center sm:justify-between"
			>
				<div class="flex min-w-0 flex-1 items-center gap-[var(--space-3)]">
					<div
						class="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--accent)] shadow-[var(--shadow-sm)]"
					>
						<FileText size={22} strokeWidth={1.75} aria-hidden="true" />
					</div>
					<div class="min-w-0">
						<p class="truncate text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							{currentFileName}
						</p>
						<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							<span class="tabular-nums">{pageCount}</span>
							{$t('ui.pdf.viewer.pages_word', 'pages')}
							<span aria-hidden="true"> · </span>
							<span class="tabular-nums">{formatByteSize(fileSizeBytes)}</span>
						</p>
					</div>
				</div>
				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					<button
						type="button"
						class="inline-flex h-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--accent-border)] bg-[var(--accent-dim)] px-[var(--space-4)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--accent)] transition-colors hover:bg-[var(--bg-selected)]"
						onclick={pickFile}
					>
						{$t('ui.pdf.select_file', 'Select PDF')}
					</button>
					<button
						type="button"
						class="inline-flex h-10 items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-hover)]"
						onclick={clearAll}
					>
						<Trash2 size={16} aria-hidden="true" />
						{$t('ui.actions.clear', 'Clear')}
					</button>
				</div>
			</div>

			<div
				class="flex flex-col gap-[var(--space-3)] border-t border-[var(--border-faint)] px-[var(--space-4)] py-[var(--space-3)] sm:flex-row sm:flex-wrap sm:items-center"
			>
				<div class="flex flex-wrap items-center gap-[var(--space-2)]" role="group" aria-label={$t('ui.pdf.viewer.toolbar_pages', 'Page navigation')}>
					<div class="flex items-center gap-[var(--space-1)]">
						<button
							type="button"
							class="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-hover)] disabled:opacity-40"
							disabled={isLoading || currentPage <= 1}
							onclick={goToPreviousPage}
							aria-label={$t('ui.actions.prev', 'Prev')}
						>
							<ChevronLeft size={18} />
						</button>
						<button
							type="button"
							class="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-hover)] disabled:opacity-40"
							disabled={isLoading || currentPage >= pageCount}
							onclick={goToNextPage}
							aria-label={$t('ui.actions.next', 'Next')}
						>
							<ChevronRight size={18} />
						</button>
					</div>
					<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
						<span class="whitespace-nowrap">{$t('ui.pdf.viewer.page', 'Page')}</span>
						<input
							type="text"
							inputmode="numeric"
							autocomplete="off"
							bind:value={pageInputStr}
							class="h-10 w-[4.5rem] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-center text-[length:var(--text-sm)] tabular-nums text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
							aria-label={$t('ui.pdf.viewer.go_page', 'Go to page')}
							onchange={handlePageInputCommit}
							onkeydown={(event) => {
								if (event.key === 'Enter') {
									handlePageInputCommit();
								}
							}}
						/>
						<span class="tabular-nums text-[var(--text-tertiary)]">/ {pageCount}</span>
					</label>
				</div>

				<span class="hidden h-8 w-px bg-[var(--border-default)] sm:block" aria-hidden="true"></span>

				<div class="flex min-w-0 flex-1 flex-col gap-[var(--space-2)] sm:max-w-md" role="group" aria-label={$t('ui.pdf.viewer.toolbar_zoom', 'Zoom controls')}>
					<div class="flex flex-wrap items-center gap-[var(--space-2)]">
						<button
							type="button"
							class="inline-flex h-10 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-hover)] disabled:opacity-40"
							disabled={isLoading}
							onclick={zoomOut}
						>
							<ZoomOut size={16} aria-hidden="true" />
							<span class="hidden sm:inline">{$t('ui.actions.zoom_out', 'Zoom out')}</span>
						</button>
						<label class="flex min-w-0 flex-1 flex-col gap-[var(--space-1)]">
							<span class="sr-only">{$t('ui.pdf.viewer.zoom_slider', 'Zoom')}</span>
							<input
								type="range"
								min="20"
								max="300"
								step="5"
								value={zoomPercent}
								class="pdf-zoom-range h-2 w-full min-w-[120px] cursor-pointer accent-[var(--accent)]"
								disabled={isLoading}
								oninput={handleZoomInput}
							/>
						</label>
						<button
							type="button"
							class="inline-flex h-10 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-hover)] disabled:opacity-40"
							disabled={isLoading}
							onclick={zoomIn}
						>
							<ZoomIn size={16} aria-hidden="true" />
							<span class="hidden sm:inline">{$t('ui.actions.zoom_in', 'Zoom in')}</span>
						</button>
						<span class="w-12 shrink-0 text-right text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] tabular-nums text-[var(--text-tertiary)]"
							>{zoomPercent}%</span
						>
					</div>
					<div class="flex flex-wrap gap-[var(--space-1)]">
						<button
							type="button"
							class="inline-flex h-9 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-hover)] disabled:opacity-40"
							disabled={isLoading}
							onclick={fitWidth}
						>
							<Maximize2 size={14} aria-hidden="true" />
							{$t('ui.pdf.viewer.fit_width', 'Fit width')}
						</button>
						<button
							type="button"
							class="inline-flex h-9 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-surface-hover)] disabled:opacity-40"
							disabled={isLoading}
							onclick={resetZoom}
						>
							<RotateCcw size={14} aria-hidden="true" />
							{$t('ui.pdf.viewer.reset_zoom', 'Reset zoom')}
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="flex min-h-0 flex-1 flex-col lg:flex-row">
			{#if thumbPages.length > 0}
				<aside
					class="shrink-0 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/80 lg:w-[148px] lg:border-b-0 lg:border-r"
					aria-label={$t('ui.pdf.viewer.thumbnails_aria', 'Page thumbnails')}
				>
					<p class="border-b border-[var(--border-faint)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wide text-[var(--text-tertiary)]">
						{$t('ui.pdf.viewer.thumbnails_heading', 'Thumbnails')}
					</p>
					<div
						class="flex gap-[var(--space-2)] overflow-x-auto px-[var(--space-3)] py-[var(--space-3)] lg:flex-col lg:overflow-y-auto lg:overflow-x-hidden lg:px-[var(--space-2)]"
						style="max-height: min(40vh, 320px);"
					>
						{#if doc}
							{#each thumbPages as pageNum (pageNum)}
								<PdfPageThumbnail
									{doc}
									pageNumber={pageNum}
									active={currentPage === pageNum}
									onSelect={selectPage}
								/>
							{/each}
						{/if}
					</div>
				</aside>
			{:else if doc && pageCount > THUMB_MAX_PAGES}
				<aside
					class="shrink-0 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]/80 lg:w-[min(100%,400px)] lg:border-b-0 lg:border-r"
					aria-label={$t('ui.pdf.viewer.page_list_aria', 'Page list')}
				>
					<p class="border-b border-[var(--border-faint)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wide text-[var(--text-tertiary)]">
						{$t('ui.pdf.viewer.page', 'Page')}
					</p>
					<div
						class="flex max-h-[min(40vh,320px)] flex-wrap gap-[var(--space-2)] overflow-y-auto p-[var(--space-3)]"
					>
						{#each pageNumbers as pageNum (pageNum)}
							<button
								type="button"
								class="min-w-[2.75rem] rounded-[var(--radius-md)] border px-[var(--space-2)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] tabular-nums transition-all {currentPage ===
								pageNum
									? 'border-[var(--accent)] bg-[var(--accent-dim)] text-[var(--text-primary)] shadow-[var(--shadow-sm)] ring-1 ring-[var(--accent-border)]'
									: 'border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface-hover)]'}"
								onclick={() => void selectPage(pageNum)}
							>
								{pageNum}
							</button>
						{/each}
					</div>
				</aside>
			{/if}

			<div
				bind:this={viewportRef}
				class="pdf-viewer-viewport relative min-h-0 min-w-0 flex-1 overflow-auto"
			>
				{#if isLoading}
					<div
						class="absolute inset-0 z-10 flex items-center justify-center bg-[var(--scrim)] backdrop-blur-[2px]"
						role="status"
						aria-live="polite"
					>
						<div
							class="flex flex-col items-center gap-[var(--space-3)] rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-[var(--space-8)] py-[var(--space-6)] shadow-[var(--shadow-lg)]"
						>
							<Loader2 class="animate-spin text-[var(--accent)]" size={32} aria-hidden="true" />
							<span class="text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)]"
								>{$t('ui.pdf.viewer.loading', 'Loading PDF…')}</span
							>
						</div>
					</div>
				{/if}
				<div class="pdf-viewer-canvas-wrap flex min-h-full justify-center p-[var(--space-4)] sm:p-[var(--space-6)]">
					<canvas
						bind:this={canvasRef}
						class="max-w-full shadow-[var(--shadow-lg)] ring-1 ring-[var(--border-default)]"
					></canvas>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.pdf-viewer-viewport {
		background-color: var(--bg-base);
		background-image:
			linear-gradient(45deg, var(--border-faint) 25%, transparent 25%),
			linear-gradient(-45deg, var(--border-faint) 25%, transparent 25%),
			linear-gradient(45deg, transparent 75%, var(--border-faint) 75%),
			linear-gradient(-45deg, transparent 75%, var(--border-faint) 75%);
		background-size: 12px 12px;
		background-position:
			0 0,
			0 6px,
			6px -6px,
			-6px 0px;
	}

	.pdf-viewer-canvas-wrap {
		min-height: min(70vh, 900px);
	}
</style>
