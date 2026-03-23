<script lang="ts">
	import { renderPdfThumbnailToCanvas, type PdfViewerDocument } from '$engines/pdf/index.js';
	import { t } from '$stores/language';

	let {
		doc,
		pageNumber,
		active,
		maxWidthPx = 112,
		onSelect
	}: {
		doc: PdfViewerDocument;
		pageNumber: number;
		active: boolean;
		maxWidthPx?: number;
		onSelect: (page: number) => void;
	} = $props();

	let canvas: HTMLCanvasElement | null = $state(null);

	$effect(() => {
		if (!canvas || !doc) {
			return;
		}
		void renderPdfThumbnailToCanvas(doc, pageNumber, canvas, maxWidthPx).catch(() => {});
	});
</script>

<button
	type="button"
	class="group flex shrink-0 flex-col items-center gap-[var(--space-1)] rounded-[var(--radius-lg)] border p-[var(--space-1)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] {active
		? 'border-[var(--accent)] bg-[var(--accent-dim)] shadow-[var(--shadow-sm)] ring-1 ring-[var(--accent-border)]'
		: 'border-[var(--border-default)] bg-[var(--bg-surface)] hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-sm)]'}"
	onclick={() => onSelect(pageNumber)}
	aria-current={active ? 'page' : undefined}
	aria-label={$t('ui.pdf.viewer.page_n', { n: String(pageNumber) }, 'Page {n}')}
>
	<canvas
		bind:this={canvas}
		class="block max-h-[120px] w-[112px] rounded-[var(--radius-md)] bg-[var(--bg-base)] object-contain shadow-[var(--shadow-sm)] ring-1 ring-[var(--border-subtle)] transition-transform duration-200 group-hover:scale-[1.02]"
	></canvas>
	<span
		class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] tabular-nums {active
			? 'text-[var(--text-primary)]'
			: 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'}"
		>{pageNumber}</span
	>
</button>
