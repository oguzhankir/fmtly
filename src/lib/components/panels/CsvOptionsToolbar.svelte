<script lang="ts">
	import { csvProcessingOptions, setCsvProcessingOptions } from '$stores/csv.store';
	import { t } from '$lib/stores/language.js';

	let {
		showHeaderRow = true,
		showQuoteAll = true
	}: {
		showHeaderRow?: boolean;
		showQuoteAll?: boolean;
	} = $props();

	const delimiterOptions: Array<{ value: string; labelKey: string; fallback: string }> = [
		{ value: ',', labelKey: 'ui.csv.delimiter.comma', fallback: 'Comma (,)' },
		{ value: ';', labelKey: 'ui.csv.delimiter.semicolon', fallback: 'Semicolon (;)' },
		{ value: '\t', labelKey: 'ui.csv.delimiter.tab', fallback: 'Tab' },
		{ value: '|', labelKey: 'ui.csv.delimiter.pipe', fallback: 'Pipe (|)' }
	];

	function updateDelimiter(value: string): void {
		setCsvProcessingOptions({ delimiter: value });
	}

	function updateToggle(key: 'headerRow' | 'skipEmptyLines' | 'trimCells' | 'quoteAll', value: boolean): void {
		setCsvProcessingOptions({ [key]: value });
	}
</script>

<div class="csv-toolbar">
	<label class="csv-toolbar__field">
		<span class="csv-toolbar__label">{$t('ui.csv.controls.delimiter', 'Delimiter')}</span>
		<select
			class="csv-toolbar__select"
			value={$csvProcessingOptions.delimiter}
			onchange={(event) => updateDelimiter((event.currentTarget as HTMLSelectElement).value)}
		>
			{#each delimiterOptions as option}
				<option value={option.value}>{$t(option.labelKey, option.fallback)}</option>
			{/each}
		</select>
	</label>

	{#if showHeaderRow}
		<label class="csv-toolbar__toggle">
			<input
				type="checkbox"
				checked={$csvProcessingOptions.headerRow}
				onchange={(event) => updateToggle('headerRow', (event.currentTarget as HTMLInputElement).checked)}
			/>
			<span>{$t('ui.csv.controls.header_row', 'Header row')}</span>
		</label>
	{/if}

	<label class="csv-toolbar__toggle">
		<input
			type="checkbox"
			checked={$csvProcessingOptions.skipEmptyLines}
			onchange={(event) => updateToggle('skipEmptyLines', (event.currentTarget as HTMLInputElement).checked)}
		/>
		<span>{$t('ui.csv.controls.skip_empty_lines', 'Skip empty lines')}</span>
	</label>

	<label class="csv-toolbar__toggle">
		<input
			type="checkbox"
			checked={$csvProcessingOptions.trimCells}
			onchange={(event) => updateToggle('trimCells', (event.currentTarget as HTMLInputElement).checked)}
		/>
		<span>{$t('ui.csv.controls.trim_cells', 'Trim cells')}</span>
	</label>

	{#if showQuoteAll}
		<label class="csv-toolbar__toggle">
			<input
				type="checkbox"
				checked={$csvProcessingOptions.quoteAll}
				onchange={(event) => updateToggle('quoteAll', (event.currentTarget as HTMLInputElement).checked)}
			/>
			<span>{$t('ui.csv.controls.quote_all', 'Quote all cells')}</span>
		</label>
	{/if}
</div>

<style>
	.csv-toolbar {
		display: flex;
		align-items: flex-end;
		gap: var(--space-4);
		overflow-x: auto;
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.csv-toolbar__field {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		min-width: 9rem;
	}

	.csv-toolbar__label {
		font-family: var(--font-ui);
		font-size: 11px;
		font-weight: 600;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.csv-toolbar__select {
		height: 32px;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-base);
		padding: 0 var(--space-2);
		color: var(--text-primary);
		font-family: var(--font-ui);
		font-size: 13px;
	}

	.csv-toolbar__toggle {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		height: 32px;
		white-space: nowrap;
		font-family: var(--font-ui);
		font-size: 13px;
		color: var(--text-primary);
	}

	.csv-toolbar__toggle input {
		accent-color: var(--accent);
	}
</style>
