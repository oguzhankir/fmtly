<script lang="ts">
	import {
		pageRangeReasonToI18nKey,
		tryParsePageRanges,
		type PageRangeFailureReason
	} from '$engines/pdf/index.js';
	import { t } from '$stores/language';

	let {
		pageCount,
		value = $bindable('1'),
		inputId = 'pdf-page-ranges-input',
		disabled = false
	}: {
		pageCount: number;
		value?: string;
		inputId?: string;
		disabled?: boolean;
	} = $props();

	const parseResult = $derived(tryParsePageRanges(value, pageCount));

	function fallbackFor(reason: PageRangeFailureReason): string {
		switch (reason) {
			case 'empty':
				return 'Enter at least one page or range.';
			case 'no_pdf_pages':
				return 'This PDF has no pages.';
			case 'ambiguous_hyphen':
				return 'Use one hyphen per range (e.g. 3-7).';
			case 'invalid_number':
				return 'Each entry must be a whole page number.';
			case 'range_out_of_bounds':
				return 'A page number is outside this document.';
			case 'invalid_range_bounds':
				return 'Invalid range.';
			default:
				return '';
		}
	}
</script>

<div class="flex flex-col gap-[var(--space-2)]">
	<div class="flex flex-wrap items-baseline justify-between gap-[var(--space-2)]">
		<label
			for={inputId}
			class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]"
		>
			{$t('ui.pdf.ranges_label', 'Page ranges')}
			{#if pageCount > 0}
				<span class="font-[number:var(--weight-normal)] text-[var(--text-tertiary)]">
					· {$t('ui.pdf.ranges.document_pages', { n: pageCount }, '{n} pages in file')}</span
				>
			{/if}
		</label>
	</div>
	<input
		id={inputId}
		type="text"
		autocomplete="off"
		spellcheck="false"
		{disabled}
		bind:value
		placeholder={$t('ui.pdf.page_ranges_placeholder', 'e.g. 1,3-5')}
		class="w-full rounded-[var(--radius-lg)] border bg-[var(--bg-base)] px-[var(--space-4)] py-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-primary)] shadow-[var(--shadow-sm)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] disabled:opacity-50 {parseResult.ok
			? 'border-[var(--border-default)]'
			: value.trim().length > 0
				? 'border-[var(--border-error)]'
				: 'border-[var(--border-default)]'}"
		aria-invalid={parseResult.ok ? undefined : true}
		aria-describedby={`${inputId}-hint`}
	/>
	<p id={`${inputId}-hint`} class="text-[length:var(--text-xs)] leading-relaxed text-[var(--text-tertiary)]">
		{$t(
			'ui.pdf.ranges.help',
			'Comma-separated pages, or ranges with a hyphen (1-based). Example: 1,3-5,8.'
		)}
	</p>
	{#if parseResult.ok}
		<p class="text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--success)]">
			{$t('ui.pdf.ranges.valid_summary', { n: parseResult.pages.length }, '{n} pages in selection')}
		</p>
	{:else if value.trim().length > 0}
		<p class="text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--error)]" role="alert">
			{$t(pageRangeReasonToI18nKey(parseResult.reason), fallbackFor(parseResult.reason))}
		</p>
	{/if}
</div>
