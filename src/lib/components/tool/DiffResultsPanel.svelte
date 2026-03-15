<script lang="ts">
	import { Copy, ClipboardList, ArrowLeftRight, Download, Search, ChevronDown, ChevronUp, GitCompare, List, Loader2 } from 'lucide-svelte';
	import { addToast } from '$stores/toast.store';
	import { computeJSONDiff, toJSONPatch, summarizeJSONDiff, toDiffMarkdown, toDiffCSV } from '$lib/engines/diff/json-diff.js';
	import { computeXMLDiff, computeDiffSummary } from '$lib/engines/diff/xml-diff.js';
	import type { DiffEntry, DiffOptions } from '$lib/engines/diff/json-diff.js';
	import { t } from '$lib/stores/language.js';
	import type MonacoDiffViewType from '$components/editor/MonacoDiffView.svelte';

	let {
		leftInput = '',
		rightInput = '',
		language = 'json',
		onswap,
		onsample
	}: {
		leftInput?: string;
		rightInput?: string;
		language?: string;
		onswap?: () => void;
		onsample?: (left: string, right: string) => void;
	} = $props();

	let ignoreArrayOrder = $state(false);
	let showOnlyDiffs = $state(true);
	let caseSensitive = $state(true);
	let ignoreKeysInput = $state('');
	let pathFilter = $state('');
	let viewMode = $state<'list' | 'monaco'>('list');
	let monacoInline = $state(false);
	let exportOpen = $state(false);
	let expandedEntries = $state(new Set<string>());

	let MonacoDiffView: typeof MonacoDiffViewType | undefined = $state(undefined);
	let monacoViewLoading = $state(false);

	let ignoreKeys = $derived(
		ignoreKeysInput
			.split(',')
			.map((k) => k.trim())
			.filter(Boolean)
	);

	let options = $derived<DiffOptions>({
		ignoreArrayOrder,
		ignoreWhitespace: true,
		ignoreKeys,
		caseSensitive
	});

	let isXmlDiff = $derived(language === 'xml');
	let languageLabel = $derived(isXmlDiff ? 'XML' : 'JSON');

	let result = $derived(
		leftInput.trim() && rightInput.trim()
			? isXmlDiff
				? computeXMLDiff(leftInput, rightInput, options)
				: computeJSONDiff(leftInput, rightInput, options)
			: null
	);

	let diffEntries = $derived(result?.entries ?? []);
	let summary = $derived(isXmlDiff ? computeDiffSummary(diffEntries) : summarizeJSONDiff(diffEntries));
	let diffCount = $derived(summary.added + summary.removed + summary.modified);
	let errorLabel = $derived.by(() => {
		if (!result?.error) return null;
		if (result.error.includes('left')) {
			return $t(
				'ui.diff.error.invalid_left',
				{ language: languageLabel },
				`Invalid ${languageLabel} in left (Original) input`
			);
		}
		if (result.error.includes('right')) {
			return $t(
				'ui.diff.error.invalid_right',
				{ language: languageLabel },
				`Invalid ${languageLabel} in right (Modified) input`
			);
		}
		return result.error;
	});

	let filteredEntries = $derived.by(() => {
		let entries = showOnlyDiffs ? diffEntries.filter((e) => e.type !== 'unchanged') : diffEntries;
		if (pathFilter.trim()) {
			const q = pathFilter.toLowerCase();
			entries = entries.filter((e) => (e.path || '(root)').toLowerCase().includes(q));
		}
		return entries;
	});

	const SAMPLE_LEFT = $derived(language === 'xml' ? `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="1" available="true">
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
    <price>10.99</price>
  </book>
  <book id="2" available="false">
    <title>To Kill a Mockingbird</title>
    <author>Harper Lee</author>
    <year>1960</year>
    <price>12.99</price>
  </book>
</catalog>` : JSON.stringify({
		name: "Alice",
		age: 30,
		roles: ["admin", "editor"],
		address: { city: "Berlin", zip: "10115" }
	}, null, 2));

	const SAMPLE_RIGHT = $derived(language === 'xml' ? `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="1" available="true">
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
    <price>10.99</price>
  </book>
  <book id="2" available="true">
    <title>To Kill a Mockingbird</title>
    <author>Harper Lee</author>
    <year>1960</year>
    <price>12.99</price>
  </book>
  <book id="3" available="true">
    <title>1984</title>
    <author>George Orwell</author>
    <year>1949</year>
    <price>9.99</price>
  </book>
</catalog>` : JSON.stringify({
		name: "Alice",
		age: 31,
		roles: ["admin", "viewer"],
		address: { city: "Berlin", zip: "10117" },
		email: "alice@example.com"
	}, null, 2));

	function formatValue(value: unknown): string {
		if (value === undefined) return '—';
		if (typeof value === 'string') return `"${value}"`;
		return JSON.stringify(value, null, 2);
	}

	function truncateValue(value: unknown, max = 160): string {
		const str = formatValue(value);
		return str.length > max ? str.slice(0, max) + '…' : str;
	}

	function entryKey(entry: DiffEntry): string {
		return entry.path + '|' + entry.type;
	}

	function toggleExpand(entry: DiffEntry): void {
		const key = entryKey(entry);
		const next = new Set(expandedEntries);
		if (next.has(key)) next.delete(key);
		else next.add(key);
		expandedEntries = next;
	}

	function isExpanded(entry: DiffEntry): boolean {
		return expandedEntries.has(entryKey(entry));
	}

	function isLong(value: unknown): boolean {
		return formatValue(value).length > 160;
	}

	async function copyEntryValue(value: unknown): Promise<void> {
		const str = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
		await navigator.clipboard.writeText(str);
		addToast('success', $t('ui.diff.toast.copy_value', 'Value copied'));
	}

	async function copyJSONPatch(): Promise<void> {
		const diffs = diffEntries.filter((e) => e.type !== 'unchanged');
		const patch = toJSONPatch(diffs);
		await navigator.clipboard.writeText(JSON.stringify(patch, null, 2));
		addToast('success', $t('ui.diff.toast.patch_success', 'JSON Patch copied to clipboard'));
		exportOpen = false;
	}

	function downloadFile(content: string, filename: string, mime: string): void {
		const blob = new Blob([content], { type: mime });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = filename;
		a.click();
		URL.revokeObjectURL(url);
		exportOpen = false;
	}

	function exportMarkdown(): void {
		const reportTitle = $t(
			'ui.diff.report.title',
			{ language: languageLabel },
			`${languageLabel} Diff Report`
		);
		downloadFile(
			toDiffMarkdown(diffEntries).replace('# JSON Diff Report', `# ${reportTitle}`),
			'diff-report.md',
			'text/markdown'
		);
	}

	function exportCSV(): void {
		downloadFile(toDiffCSV(diffEntries), 'diff-report.csv', 'text/csv');
	}

	async function switchToMonacoView(): Promise<void> {
		if (MonacoDiffView) { viewMode = 'monaco'; return; }
		monacoViewLoading = true;
		const mod = await import('$components/editor/MonacoDiffView.svelte');
		MonacoDiffView = mod.default;
		monacoViewLoading = false;
		viewMode = 'monaco';
	}

	function typeLabel(type: string | null): string {
		if (!type) return '';
		return type.charAt(0).toUpperCase() + type.slice(1);
	}
</script>

<div class="diff-panel">
	<!-- Controls bar -->
	<div class="diff-controls">
		<div class="diff-controls-left">
			{#if !isXmlDiff}
				<label class="diff-toggle">
					<input type="checkbox" bind:checked={ignoreArrayOrder} />
					<span>{$t('ui.diff.controls.ignore_order', 'Ignore array order')}</span>
				</label>
			{/if}
			<label class="diff-toggle">
				<input type="checkbox" bind:checked={showOnlyDiffs} />
				<span>{$t('ui.diff.controls.only_diffs', 'Show only diffs')}</span>
			</label>
			<label class="diff-toggle">
				<input type="checkbox" bind:checked={caseSensitive} />
				<span>{$t('ui.diff.controls.case_sensitive', 'Case sensitive')}</span>
			</label>
			{#if !isXmlDiff}
				<div class="diff-ignore-keys">
					<input
						type="text"
						bind:value={ignoreKeysInput}
						placeholder={$t('ui.diff.controls.ignore_keys_placeholder', 'Ignore keys: id, timestamp…')}
						class="diff-keys-input"
					/>
				</div>
			{/if}
		</div>
		<div class="diff-controls-right">
			{#if onswap}
				<button class="diff-action-btn" onclick={onswap} title={$t('ui.diff.controls.swap', 'Swap panels')}>
					<ArrowLeftRight size={12} />
					{$t('ui.diff.controls.swap', 'Swap')}
				</button>
			{/if}

			<div class="diff-view-toggle">
				<button
					class="diff-view-btn"
					class:diff-view-btn--active={viewMode === 'list'}
					onclick={() => { viewMode = 'list'; }}
					title={$t('ui.diff.view.list', 'List view')}
				>
					<List size={12} />
				</button>
				<button
					class="diff-view-btn"
					class:diff-view-btn--active={viewMode === 'monaco'}
					onclick={switchToMonacoView}
					title={$t('ui.diff.view.monaco', 'Inline diff view')}
					disabled={monacoViewLoading}
				>
					{#if monacoViewLoading}
						<Loader2 size={12} class="diff-spin" />
					{:else}
						<GitCompare size={12} />
					{/if}
				</button>
				{#if viewMode === 'monaco'}
					<button
						class="diff-view-btn"
						class:diff-view-btn--active={monacoInline}
						onclick={() => { monacoInline = !monacoInline; }}
						title={$t('ui.diff.view.inline_toggle', 'Toggle inline/side-by-side')}
					>
						<span style="font-size:9px;font-weight:700;">{monacoInline ? '1' : '2'}</span>
					</button>
				{/if}
			</div>

			{#if diffCount > 0}
				<div class="diff-export-wrap">
					<button class="diff-action-btn" onclick={() => { exportOpen = !exportOpen; }}>
						<Download size={12} />
						{$t('ui.diff.controls.export', 'Export')}
					</button>
					{#if exportOpen}
						<div class="diff-export-menu" role="menu">
							{#if !isXmlDiff}
								<button class="diff-export-item" role="menuitem" onclick={copyJSONPatch}>
									<ClipboardList size={12} />
									{$t('ui.diff.controls.copy_patch', 'Copy as JSON Patch')}
								</button>
							{/if}
							<button class="diff-export-item" role="menuitem" onclick={exportMarkdown}>
								<Download size={12} />
								{$t('ui.diff.controls.export_md', 'Download Markdown report')}
							</button>
							<button class="diff-export-item" role="menuitem" onclick={exportCSV}>
								<Download size={12} />
								{$t('ui.diff.controls.export_csv', 'Download CSV')}
							</button>
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>

	<!-- Summary bar -->
	{#if result && !result.error && diffCount > 0}
		<div class="diff-summary-bar">
			<span class="diff-stat diff-stat--added">+{summary.added} {$t('ui.diff.summary.added', 'added')}</span>
			<span class="diff-stat diff-stat--removed">−{summary.removed} {$t('ui.diff.summary.removed', 'removed')}</span>
			<span class="diff-stat diff-stat--modified">~{summary.modified} {$t('ui.diff.summary.modified', 'modified')}</span>
			<span class="diff-stat diff-stat--score">{summary.similarityScore}% {$t('ui.diff.summary.similar', 'similar')}</span>
		</div>
	{/if}

	<!-- Status line -->
	<div class="diff-status">
		{#if result?.error}
			<span class="diff-status--error">{errorLabel}</span>
		{:else if !result}
			<span class="diff-status--empty">
				{$t('ui.diff.summary.empty', { language: languageLabel }, `Enter ${languageLabel} in both panels to compare`)}
			</span>
		{:else if diffCount === 0}
			<span class="diff-status--identical">✓ {$t('ui.diff.summary.identical', 'Documents are identical')}</span>
		{:else}
			<span class="diff-status--count">{diffCount} {diffCount === 1 ? $t('ui.diff.summary.difference', 'difference') : $t('ui.diff.summary.differences', 'differences')} {$t('ui.diff.summary.found', 'found')}</span>
		{/if}
	</div>

	{#if viewMode === 'list'}
		<!-- Path filter -->
		{#if diffEntries.length > 0}
			<div class="diff-filter">
				<Search size={12} class="diff-filter-icon" />
				<input
					type="text"
					bind:value={pathFilter}
					placeholder={$t('ui.diff.filter.placeholder', 'Filter by path…')}
					class="diff-filter-input"
				/>
				{#if pathFilter}
					<button class="diff-filter-clear" onclick={() => { pathFilter = ''; }} aria-label={$t('ui.actions.clear', 'Clear')}>×</button>
				{/if}
			</div>
		{/if}

		<!-- Entries list -->
		{#if filteredEntries.length > 0}
			<div class="diff-entries">
				{#each filteredEntries as entry (entryKey(entry))}
					{@const expanded = isExpanded(entry)}
					{@const hasLongLeft = entry.type !== 'added' && isLong(entry.leftValue)}
					{@const hasLongRight = entry.type !== 'removed' && isLong(entry.rightValue)}
					{@const isExpandable = hasLongLeft || hasLongRight}
					<div class="diff-entry diff-entry--{entry.type}">
						<div class="diff-entry-header">
							<span class="diff-path">{entry.path || $t('ui.diff.types.root', '(root)')}</span>
							<div class="diff-entry-badges">
								{#if entry.type === 'modified' && entry.leftType && entry.rightType && entry.leftType !== entry.rightType}
									<span class="diff-type-change">{typeLabel(entry.leftType)} → {typeLabel(entry.rightType)}</span>
								{/if}
								<span class="diff-type-badge diff-type-badge--{entry.type}">
									{entry.type === 'added' ? $t('ui.diff.types.added', 'Added') : entry.type === 'removed' ? $t('ui.diff.types.removed', 'Removed') : entry.type === 'modified' ? $t('ui.diff.types.modified', 'Modified') : $t('ui.diff.types.unchanged', 'Unchanged')}
								</span>
								{#if entry.type !== 'unchanged'}
									<button
										class="diff-copy-btn"
										onclick={() => copyEntryValue(entry.type === 'added' ? entry.rightValue : entry.leftValue)}
										aria-label={$t('ui.diff.actions.copy_value', 'Copy value')}
										title={$t('ui.diff.actions.copy_value', 'Copy value')}
									>
										<Copy size={10} />
									</button>
								{/if}
							</div>
						</div>

						{#if entry.type === 'modified'}
							<div class="diff-values">
								<span class="diff-value diff-value--old">{expanded ? formatValue(entry.leftValue) : truncateValue(entry.leftValue)}</span>
								<span class="diff-arrow">→</span>
								<span class="diff-value diff-value--new">{expanded ? formatValue(entry.rightValue) : truncateValue(entry.rightValue)}</span>
							</div>
						{:else if entry.type === 'added'}
							<div class="diff-values">
								<span class="diff-value diff-value--new">{expanded ? formatValue(entry.rightValue) : truncateValue(entry.rightValue)}</span>
							</div>
						{:else if entry.type === 'removed'}
							<div class="diff-values">
								<span class="diff-value diff-value--old">{expanded ? formatValue(entry.leftValue) : truncateValue(entry.leftValue)}</span>
							</div>
						{/if}

						{#if isExpandable}
							<button class="diff-expand-btn" onclick={() => toggleExpand(entry)}>
								{#if expanded}
									<ChevronUp size={10} />
									{$t('ui.diff.actions.collapse', 'Collapse')}
								{:else}
									<ChevronDown size={10} />
									{$t('ui.diff.actions.expand', 'Expand')}
								{/if}
							</button>
						{/if}
					</div>
				{/each}
			</div>
		{:else if !result && !leftInput.trim() && !rightInput.trim()}
			<div class="diff-empty-state">
				<p class="diff-empty-hint">
					{$t('ui.diff.empty.hint', { language: languageLabel }, `Paste ${languageLabel} in both panels above to compare them.`)}
				</p>
				<button class="diff-sample-btn" onclick={() => onsample?.(SAMPLE_LEFT, SAMPLE_RIGHT)}>
					{$t('ui.diff.empty.load_sample', 'Load sample data')}
				</button>
			</div>
		{/if}
	{:else if viewMode === 'monaco' && MonacoDiffView}
		<div class="diff-monaco-view">
			<MonacoDiffView original={leftInput} modified={rightInput} inline={monacoInline} />
		</div>
	{/if}
</div>

<!-- Close export menu on outside click -->
{#if exportOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="diff-backdrop" onclick={() => { exportOpen = false; }}></div>
{/if}

<style>
	.diff-panel {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
	}

	.diff-controls {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 6px 10px;
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		flex-shrink: 0;
		gap: 8px;
		flex-wrap: wrap;
	}

	.diff-controls-left {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}

	.diff-controls-right {
		display: flex;
		align-items: center;
		gap: 6px;
		flex-wrap: wrap;
	}

	.diff-toggle {
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: 11px;
		color: var(--text-secondary);
		cursor: pointer;
		user-select: none;
		white-space: nowrap;
	}

	.diff-toggle input {
		accent-color: var(--accent);
		width: 12px;
		height: 12px;
	}

	.diff-ignore-keys {
		display: flex;
		align-items: center;
	}

	.diff-keys-input {
		height: 22px;
		padding: 0 6px;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-sm);
		background: var(--bg-base);
		color: var(--text-primary);
		font-family: var(--font-ui);
		font-size: 11px;
		width: 160px;
		outline: none;
	}

	.diff-keys-input:focus {
		border-color: var(--accent);
	}

	.diff-keys-input::placeholder {
		color: var(--text-muted);
	}

	.diff-action-btn {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		height: 24px;
		padding: 0 8px;
		font-size: 11px;
		font-family: var(--font-ui);
		font-weight: 500;
		color: var(--text-secondary);
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-sm);
		cursor: pointer;
		transition: color 80ms, background 80ms;
		white-space: nowrap;
	}

	.diff-action-btn:hover {
		color: var(--text-primary);
		background: var(--bg-hover);
	}

	.diff-view-toggle {
		display: flex;
		align-items: center;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-sm);
		overflow: hidden;
	}

	.diff-view-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 26px;
		height: 24px;
		border: none;
		border-right: 1px solid var(--border-default);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		cursor: pointer;
		transition: color 80ms, background 80ms;
	}

	.diff-view-btn:last-child {
		border-right: none;
	}

	.diff-view-btn:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.diff-view-btn--active {
		background: var(--accent-dim);
		color: var(--accent);
	}

	.diff-view-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.diff-export-wrap {
		position: relative;
	}

	.diff-export-menu {
		position: absolute;
		top: calc(100% + 4px);
		right: 0;
		z-index: 50;
		min-width: 200px;
		padding: 4px;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		box-shadow: var(--shadow-md);
	}

	.diff-export-item {
		display: flex;
		align-items: center;
		gap: 8px;
		width: 100%;
		padding: 6px 8px;
		border: none;
		border-radius: var(--radius-sm);
		background: transparent;
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		cursor: pointer;
		text-align: left;
		transition: background 80ms, color 80ms;
	}

	.diff-export-item:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.diff-backdrop {
		position: fixed;
		inset: 0;
		z-index: 40;
	}

	.diff-summary-bar {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 5px 10px;
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		flex-shrink: 0;
		flex-wrap: wrap;
	}

	.diff-stat {
		font-family: var(--font-ui);
		font-size: 11px;
		font-weight: 600;
	}

	.diff-stat--added { color: var(--status-success); }
	.diff-stat--removed { color: var(--status-error); }
	.diff-stat--modified { color: var(--status-warning); }
	.diff-stat--score { color: var(--text-muted); font-weight: 400; }

	.diff-status {
		padding: 5px 10px;
		font-size: 11px;
		font-family: var(--font-ui);
		font-weight: 500;
		border-bottom: 1px solid var(--border-subtle);
		flex-shrink: 0;
	}

	.diff-status--error { color: var(--status-error); }
	.diff-status--empty { color: var(--text-muted); }
	.diff-status--identical { color: var(--status-success); }
	.diff-status--count { color: var(--text-primary); }

	.diff-filter {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 4px 10px;
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		flex-shrink: 0;
		color: var(--text-muted);
	}

	.diff-filter-input {
		flex: 1;
		height: 22px;
		border: none;
		background: transparent;
		color: var(--text-primary);
		font-family: var(--font-ui);
		font-size: 12px;
		outline: none;
	}

	.diff-filter-input::placeholder { color: var(--text-muted); }

	.diff-filter-clear {
		border: none;
		background: transparent;
		color: var(--text-muted);
		cursor: pointer;
		font-size: 14px;
		line-height: 1;
		padding: 0 2px;
	}

	.diff-filter-clear:hover { color: var(--text-primary); }

	.diff-entries {
		flex: 1;
		overflow-y: auto;
		padding: 2px 0;
	}

	.diff-entry {
		padding: 7px 10px;
		border-left: 3px solid transparent;
		transition: background 80ms;
	}

	.diff-entry:hover { background: var(--bg-surface-hover); }
	.diff-entry--added { border-left-color: var(--status-success); }
	.diff-entry--removed { border-left-color: var(--status-error); }
	.diff-entry--modified { border-left-color: var(--status-warning); }
	.diff-entry--unchanged { opacity: 0.35; border-left-color: var(--border-subtle); }

	.diff-entry-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		margin-bottom: 3px;
	}

	.diff-path {
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--text-primary);
		font-weight: 600;
		word-break: break-all;
	}

	.diff-entry-badges {
		display: flex;
		align-items: center;
		gap: 5px;
		flex-shrink: 0;
	}

	.diff-type-change {
		font-family: var(--font-mono);
		font-size: 9px;
		color: var(--text-muted);
		background: var(--bg-inset);
		padding: 1px 5px;
		border-radius: var(--radius-full);
		white-space: nowrap;
	}

	.diff-type-badge {
		font-size: 9px;
		font-family: var(--font-ui);
		font-weight: 700;
		padding: 1px 6px;
		border-radius: var(--radius-full);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		white-space: nowrap;
	}

	.diff-type-badge--added {
		color: var(--status-success);
		background: color-mix(in srgb, var(--status-success) 14%, transparent);
	}

	.diff-type-badge--removed {
		color: var(--status-error);
		background: color-mix(in srgb, var(--status-error) 14%, transparent);
	}

	.diff-type-badge--modified {
		color: var(--status-warning);
		background: color-mix(in srgb, var(--status-warning) 14%, transparent);
	}

	.diff-type-badge--unchanged {
		color: var(--text-muted);
		background: var(--bg-inset);
	}

	.diff-copy-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 18px;
		height: 18px;
		border: none;
		border-radius: var(--radius-sm);
		background: transparent;
		color: var(--text-muted);
		cursor: pointer;
		transition: color 80ms, background 80ms;
	}

	.diff-copy-btn:hover {
		color: var(--text-primary);
		background: var(--bg-hover);
	}

	.diff-values {
		display: flex;
		align-items: baseline;
		gap: 6px;
		font-family: var(--font-mono);
		font-size: 11px;
		line-height: 1.6;
		flex-wrap: wrap;
	}

	.diff-value {
		word-break: break-all;
		white-space: pre-wrap;
	}

	.diff-value--old { color: var(--status-error); }
	.diff-value--new { color: var(--status-success); }

	.diff-arrow {
		color: var(--text-muted);
		flex-shrink: 0;
	}

	.diff-expand-btn {
		display: inline-flex;
		align-items: center;
		gap: 3px;
		margin-top: 4px;
		border: none;
		background: transparent;
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 10px;
		cursor: pointer;
		padding: 0;
	}

	.diff-expand-btn:hover { color: var(--text-secondary); }

	.diff-monaco-view {
		flex: 1;
		overflow: hidden;
	}

	.diff-empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 12px;
		flex: 1;
		padding: 24px;
		color: var(--text-muted);
	}

	.diff-empty-hint {
		font-family: var(--font-ui);
		font-size: 13px;
		text-align: center;
		margin: 0;
	}

	.diff-sample-btn {
		height: 32px;
		padding: 0 16px;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 500;
		cursor: pointer;
		transition: color 80ms, background 80ms;
	}

	.diff-sample-btn:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	:global(.diff-spin) {
		animation: diff-spin 1s linear infinite;
	}

	@keyframes diff-spin {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}
</style>
