<script lang="ts">
	import { output } from '$stores/output.store';
	import { input as inputStore } from '$stores/input.store';
	import {
		csvError,
		csvPreviewHeaders,
		csvPreviewRows,
		csvProcessingOptions,
		csvStats
	} from '$stores/csv.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$lib/stores/language.js';
	import { localizeCsvEngineError } from '$lib/utils/csv-errors.js';
	import CsvOptionsToolbar from '$components/panels/CsvOptionsToolbar.svelte';
	import { AlertTriangle, Check, Copy, Download, Eye, FileCode2 } from 'lucide-svelte';

	let {
		outputLanguage,
		downloadFilename = 'output',
		toolSlug
	}: {
		outputLanguage: string;
		downloadFilename?: string;
		toolSlug: string;
	} = $props();

	let copied = $state(false);
	let activeView = $state<'preview' | 'raw'>('preview');
	let isFormatter = $derived(toolSlug === 'formatter');
	let isHtmlTool = $derived(toolSlug === 'to-html');
	let hasPreviewData = $derived($csvPreviewRows.length > 0 || $csvPreviewHeaders.length > 0);
	let canShowTablePreview = $derived(!isHtmlTool && hasPreviewData);
	const PREVIEW_LIMIT = 50;
	let outputMeta = $derived.by(() => {
		const parts: string[] = [];
		if ($csvStats) {
			parts.push(`${$csvStats.rowCount.toLocaleString()} ${$t('ui.csv.stats.rows', 'rows')}`);
			parts.push(`${$csvStats.columnCount.toLocaleString()} ${$t('ui.csv.stats.columns', 'columns')}`);
		}
		if ($output) {
			parts.push(`${$output.length.toLocaleString()} ${$t('ui.output.stats.chars', 'chars')}`);
		}
		return parts.join(' · ');
	});
	let previewHeaders = $derived.by(() =>
		$csvPreviewHeaders.length > 0
			? $csvPreviewHeaders
			: Array.from({ length: $csvStats?.columnCount ?? 0 }, (_, index) =>
					$t('ui.csv.preview.column_name', { index: index + 1 }, 'Column {index}')
				)
	);
	let previewRows = $derived($csvPreviewRows.slice(0, PREVIEW_LIMIT));
	let hiddenPreviewRowCount = $derived.by(() => Math.max(($csvPreviewRows.length || 0) - PREVIEW_LIMIT, 0));
	let localizedCsvError = $derived.by(() =>
		$csvError ? localizeCsvEngineError($csvError, $t) : ''
	);
	let previewSummaryItems = $derived.by(() => [
		{
			label: $t('ui.csv.stats.rows', 'rows'),
			value: $csvStats?.rowCount.toLocaleString() ?? '0'
		},
		{
			label: $t('ui.csv.stats.columns', 'columns'),
			value: $csvStats?.columnCount.toLocaleString() ?? '0'
		},
		{
			label: $t('ui.csv.preview.delimiter', 'delimiter'),
			value: $csvProcessingOptions.delimiter === '\t'
				? $t('ui.csv.delimiter.tab', 'Tab')
				: $csvProcessingOptions.delimiter
		},
		{
			label: $t('ui.csv.preview.header_mode', 'header'),
			value: $csvProcessingOptions.headerRow
				? $t('ui.csv.controls.header_row', 'Header row')
				: $t('ui.csv.preview.no_header', 'Generated columns')
		}
	]);

	async function handleCopy(): Promise<void> {
		if (!$output) return;
		try {
			await navigator.clipboard.writeText($output);
			copied = true;
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
			setTimeout(() => {
				copied = false;
			}, 1500);
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	function handleDownload(): void {
		if (!$output) return;
		const extMap: Record<string, string> = {
			csv: '.csv',
			json: '.json',
			xml: '.xml',
			yaml: '.yaml',
			html: '.html'
		};
		const ext = extMap[outputLanguage] ?? '.txt';
		const blob = new Blob([$output], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = `${downloadFilename}${ext}`;
		anchor.click();
		URL.revokeObjectURL(url);
	}
</script>

<div class="csv-output" role="region" aria-label={$t('ui.layout.aria.output_panel', 'Output panel')}>
	{#if isFormatter || toolSlug === 'to-json' || toolSlug === 'to-xml' || toolSlug === 'to-yaml' || toolSlug === 'to-html'}
		<CsvOptionsToolbar showQuoteAll={isFormatter} />
	{/if}

	{#if outputMeta}
		<div class="csv-output__meta">{outputMeta}</div>
	{/if}

	{#if $csvError && !$output}
		<div class="csv-output__state csv-output__state--error">
			<AlertTriangle size={24} />
			<p class="csv-output__title">{$t('ui.validator.invalid_csv', 'Invalid CSV')}</p>
			<p class="csv-output__desc">{localizedCsvError}</p>
		</div>
	{:else if !$inputStore.trim()}
		<div class="csv-output__state">
			<p class="csv-output__title">{$t('ui.csv.empty.title', 'Paste CSV to get started')}</p>
			<p class="csv-output__desc">{$t('ui.csv.empty.desc', 'Format, validate, preview, or convert CSV data entirely in your browser.')}</p>
		</div>
	{:else if !$output && !hasPreviewData}
		<div class="csv-output__state">
			<p class="csv-output__title">{$t('ui.csv.empty.waiting_title', 'Waiting for CSV output')}</p>
			<p class="csv-output__desc">{$t('ui.csv.empty.waiting_desc', 'Parsed rows, formatted output, or converted results will appear here.')}</p>
		</div>
	{:else}
		<div class="csv-preview-summary">
			{#each previewSummaryItems as item}
				<div class="csv-preview-summary__card">
					<span class="csv-preview-summary__label">{item.label}</span>
					<strong class="csv-preview-summary__value">{item.value}</strong>
				</div>
			{/each}
		</div>

		<div class="csv-output__actions">
			<button type="button" class="csv-output__btn" class:csv-output__btn--active={activeView === 'preview'} onclick={() => (activeView = 'preview')}>
				<Eye size={13} />
				{$t('ui.csv.view.preview', 'Preview')}
			</button>
			<button type="button" class="csv-output__btn" class:csv-output__btn--active={activeView === 'raw'} onclick={() => (activeView = 'raw')}>
				<FileCode2 size={13} />
				{$t('ui.csv.view.raw', 'Raw')}
			</button>
			<div class="csv-output__actions-spacer"></div>
			<button type="button" class="csv-output__btn" onclick={handleCopy}>
				{#if copied}
					<Check size={13} />
				{:else}
					<Copy size={13} />
				{/if}
				{$t('ui.output.actions.copy', 'Copy')}
			</button>
			<button type="button" class="csv-output__btn" onclick={handleDownload}>
				<Download size={13} />
				{$t('ui.output.actions.download', 'Download')}
			</button>
		</div>

		{#if activeView === 'preview' && isHtmlTool && $output}
			<div class="csv-output__html">{@html $output}</div>
		{:else if activeView === 'preview' && canShowTablePreview}
			<div class="table-wrapper">
				<table class="preview-table">
					<thead>
						<tr>
							<th class="preview-table__rownum">#</th>
							{#each previewHeaders as header}
								<th>{header}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#if previewRows.length === 0}
							<tr>
								<td colspan={Math.max(previewHeaders.length + 1, 1)}>{$t('ui.csv.preview.no_rows', 'No data rows to preview')}</td>
							</tr>
						{:else}
							{#each previewRows as row, rowIndex}
								<tr>
									<td class="preview-table__rownum">{rowIndex + 1}</td>
									{#each row as cell}
										<td class:preview-table__cell--empty={cell === ''} title={cell}>{cell || '—'}</td>
									{/each}
								</tr>
							{/each}
						{/if}
					</tbody>
				</table>
			</div>
			{#if hiddenPreviewRowCount > 0}
				<div class="csv-preview-footnote">
					{$t(
						'ui.csv.preview.remaining_rows',
						{ count: hiddenPreviewRowCount },
						'Showing {count} more rows in preview only'
					)}
				</div>
			{/if}
		{:else if $output}
			<pre class="csv-output__code"><code>{$output}</code></pre>
		{/if}
	{/if}
</div>

<style>
	.csv-output {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: var(--bg-base);
	}

	.csv-output__meta {
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-muted);
	}

	.csv-preview-summary {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: var(--space-2);
		padding: var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.csv-preview-summary__card {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		padding: var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
	}

	.csv-preview-summary__label {
		font-family: var(--font-ui);
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--text-muted);
	}

	.csv-preview-summary__value {
		font-family: var(--font-ui);
		font-size: 13px;
		color: var(--text-primary);
	}

	.csv-output__state {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		padding: var(--space-8);
		text-align: center;
		color: var(--text-secondary);
	}

	.csv-output__state--error {
		color: var(--error);
	}

	.csv-output__title {
		margin: 0;
		font-family: var(--font-ui);
		font-size: 16px;
		font-weight: 600;
		color: var(--text-primary);
	}

	.csv-output__desc {
		margin: 0;
		max-width: 36rem;
		color: var(--text-muted);
	}

	.csv-output__actions {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.csv-output__actions-spacer {
		flex: 1;
	}

	.csv-output__btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		height: 30px;
		padding: 0 var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 500;
		cursor: pointer;
	}

	.csv-output__btn:hover,
	.csv-output__btn--active {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.csv-output__code,
	.csv-output__html {
		flex: 1;
		overflow: auto;
		margin: 0;
		padding: var(--space-4);
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--text-primary);
	}

	.csv-output__html {
		font-family: var(--font-ui);
	}

	.table-wrapper {
		flex: 1;
		overflow: auto;
		border-top: 1px solid var(--border-subtle);
	}

	.preview-table {
		width: 100%;
		border-collapse: collapse;
		font-size: var(--text-sm);
	}

	.preview-table th {
		text-align: left;
		padding: var(--space-2) var(--space-3);
		background: var(--bg-surface);
		border-bottom: 1px solid var(--border-default);
		color: var(--text-secondary);
		font-size: var(--text-xs);
		white-space: nowrap;
		position: sticky;
		top: 0;
	}

	.preview-table__rownum {
		width: 3.5rem;
		min-width: 3.5rem;
		text-align: right;
		color: var(--text-muted);
		background: var(--bg-elevated);
		position: sticky;
		left: 0;
		z-index: 1;
	}

	.preview-table td {
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-default);
		color: var(--text-primary);
		vertical-align: top;
		max-width: 20rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.preview-table__cell--empty {
		color: var(--text-muted);
		font-style: italic;
	}

	.csv-preview-footnote {
		padding: var(--space-2) var(--space-3);
		border-top: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-muted);
	}

	@media (max-width: 900px) {
		.csv-preview-summary {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
