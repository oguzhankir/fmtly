<script lang="ts">
	import { browser } from '$app/environment';
	import { jsonpathQuery, jmespathQuery } from '$engines/json/json.engine.js';
	import { input } from '$stores/input.store';
	import { output } from '$stores/output.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$lib/stores/language.js';
	import { Check, Copy, Play, Sparkles, WrapText, History, CircleHelp } from 'lucide-svelte';

	const props = $props<{
		toolSlug: 'jsonpath' | 'jmespath';
	}>();

	let defaultQuery = $derived(
		props.toolSlug === 'jsonpath' ? '$.store.book[*].title' : 'foo.bar'
	);
	let query = $state('');
	let resultError = $state('');
	let isRunning = $state(false);
	let resultCount = $state<number | null>(null);
	let copied = $state(false);
	let wrapLines = $state(false);
	let queryHistory = $state<string[]>([]);
	let selectedHistory = $state('');
	let showCheatSheet = $state(false);
	let cheatSheet = $derived(
		props.toolSlug === 'jsonpath'
			? [
					'$.store.book[*].title',
					'$.users[?(@.age > 18)].name',
					'$.orders[*].items[*].sku',
					'$.features[0].geometry.coordinates'
				]
			: ['foo.bar', 'users[?age > `18`].name', 'orders[].items[].sku', 'features[0].geometry']
	);
	let resultMeta = $derived.by(() => {
		if (!$output) return '';
		const lines = $output.length === 0 ? 0 : $output.split('\n').length;
		return `${$output.length.toLocaleString()} ${$t('ui.query.stats.chars', 'chars')} · ${lines.toLocaleString()} ${$t('ui.query.stats.lines', 'lines')}`;
	});

	function getHistoryKey(): string {
		return `fmtly-${props.toolSlug}-query-history`;
	}

	$effect(() => {
		if (!query) {
			query = defaultQuery;
		}
	});

	$effect(() => {
		void runQuery();
	});

	$effect(() => {
		if (!browser) return;
		try {
			const raw = localStorage.getItem(getHistoryKey());
			queryHistory = raw ? (JSON.parse(raw) as string[]) : [];
		} catch {
			queryHistory = [];
		}
	});

	async function runQuery(): Promise<void> {
		if (!$input.trim() || !query.trim()) {
			output.set('');
			resultError = '';
			resultCount = null;
			return;
		}

		isRunning = true;
		resultError = '';

		try {
			const result =
				props.toolSlug === 'jsonpath'
					? await jsonpathQuery($input, query)
					: await jmespathQuery($input, query);

			resultCount = Array.isArray(result) ? result.length : result === null || result === undefined ? 0 : 1;
			output.set(JSON.stringify(result, null, 2));
			saveQueryToHistory(query);
		} catch (error) {
			resultCount = null;
			output.set('');
			resultError = error instanceof Error ? error.message : $t('ui.query.error_fallback', 'Query failed');
		} finally {
			isRunning = false;
		}
	}

	function loadSampleQuery(): void {
		query = defaultQuery;
	}

	function saveQueryToHistory(value: string): void {
		if (!browser) return;
		const normalized = value.trim();
		if (!normalized) return;
		const nextHistory = [normalized, ...queryHistory.filter((entry) => entry !== normalized)].slice(0, 10);
		queryHistory = nextHistory;
		localStorage.setItem(getHistoryKey(), JSON.stringify(nextHistory));
	}

	function loadHistoryQuery(value: string): void {
		if (!value) return;
		query = value;
		selectedHistory = value;
	}

	function applyCheatSheet(value: string): void {
		query = value;
		showCheatSheet = false;
	}

	function fallbackCopy(text: string): boolean {
		try {
			const textarea = document.createElement('textarea');
			textarea.value = text;
			textarea.setAttribute('readonly', 'true');
			textarea.style.position = 'fixed';
			textarea.style.opacity = '0';
			document.body.appendChild(textarea);
			textarea.select();
			const didCopy = document.execCommand('copy');
			document.body.removeChild(textarea);
			return didCopy;
		} catch {
			return false;
		}
	}

	async function copyResult(): Promise<void> {
		if (!$output) return;
		let copiedSuccessfully = false;
		try {
			await navigator.clipboard.writeText($output);
			copiedSuccessfully = true;
		} catch {
			copiedSuccessfully = fallbackCopy($output);
		}
		if (!copiedSuccessfully) {
			addToast('error', $t('ui.query.copy_error', 'Could not copy output'));
			return;
		}
		copied = true;
		addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		setTimeout(() => {
			copied = false;
		}, 2000);
	}
</script>

<div class="query-shell" role="region" aria-label="JSON query panel">
	<div class="query-toolbar">
		<div class="query-toolbar__meta">
			<span class="query-pill">{props.toolSlug === 'jsonpath' ? 'JSONPath' : 'JMESPath'}</span>
			{#if resultCount !== null}
				<span class="query-count">{resultCount} {resultCount === 1 ? $t('ui.query.result', 'result') : $t('ui.query.results', 'results')}</span>
			{/if}
		</div>
		<div class="query-toolbar__actions">
			{#if queryHistory.length > 0}
				<label class="query-history">
					<History size={13} />
					<select bind:value={selectedHistory} onchange={(event) => loadHistoryQuery((event.currentTarget as HTMLSelectElement).value)}>
						<option value="">{$t('ui.query.history', 'History')}</option>
						{#each queryHistory as entry}
							<option value={entry}>{entry}</option>
						{/each}
					</select>
				</label>
			{/if}
			<button type="button" class="query-btn" onclick={loadSampleQuery}>
				<Sparkles size={13} />
				{$t('ui.query.sample_query', 'Sample query')}
			</button>
			<button type="button" class="query-btn" onclick={() => (showCheatSheet = !showCheatSheet)}>
				<CircleHelp size={13} />
				{$t('ui.query.guide', 'Guide')}
			</button>
			<button type="button" class="query-btn query-btn--primary" onclick={() => void runQuery()}>
				<Play size={13} />
				{$t('ui.actions.run', 'Run')}
			</button>
			<button type="button" class="query-btn" onclick={() => (wrapLines = !wrapLines)} disabled={!$output}>
				<WrapText size={13} />
				{$t('ui.actions.wrap', 'Wrap')}
			</button>
			<button type="button" class="query-btn" onclick={copyResult} disabled={!$output}>
				{#if copied}
					<Check size={13} />
				{:else}
					<Copy size={13} />
				{/if}
				{$t('ui.actions.copy', 'Copy')}
			</button>
		</div>
	</div>

	<div class="query-input-wrap">
		<label class="query-label" for="json-query-input">{$t('ui.query.query', 'Query')}</label>
		<textarea
			id="json-query-input"
			bind:value={query}
			class="query-input"
			placeholder={props.toolSlug === 'jsonpath' ? '$.items[*].id' : 'items[].id'}
			spellcheck="false"
		></textarea>
		{#if showCheatSheet}
			<div class="query-cheatsheet">
				{#each cheatSheet as example}
					<button type="button" class="query-cheatsheet__item" onclick={() => applyCheatSheet(example)}>
						{example}
					</button>
				{/each}
			</div>
		{/if}
	</div>

	{#if resultError}
		<div class="query-error">{resultError}</div>
	{:else if isRunning}
		<div class="query-empty">{$t('ui.query.running', 'Running query…')}</div>
	{:else if !$input.trim()}
		<div class="query-empty">{$t('ui.query.empty_input', 'Paste JSON on the left to evaluate your query.')}</div>
	{:else if !query.trim()}
		<div class="query-empty">{$t('ui.query.empty_query', 'Enter a query to see results.')}</div>
	{:else if $output}
		<div class="query-result-meta">{resultMeta}</div>
		<pre class="query-result" class:query-result--wrap={wrapLines}><code>{$output}</code></pre>
	{/if}
</div>

<style>
	.query-shell {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}

	.query-toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		padding: var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.query-toolbar__meta,
	.query-toolbar__actions {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	.query-history {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		height: 30px;
		padding: 0 var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
	}

	.query-history select {
		border: none;
		background: transparent;
		color: var(--text-primary);
		font: inherit;
		outline: none;
		max-width: 180px;
	}

	.query-pill,
	.query-count {
		display: inline-flex;
		align-items: center;
		height: 24px;
		padding: 0 var(--space-2);
		border-radius: var(--radius-full);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
	}

	.query-pill {
		color: var(--accent);
		background: var(--accent-dim);
	}

	.query-count {
		color: var(--text-secondary);
		background: var(--bg-elevated);
	}

	.query-btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		height: 30px;
		padding: 0 var(--space-3);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
	}

	.query-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.query-input-wrap {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.query-cheatsheet {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-2);
		margin-top: var(--space-2);
	}

	.query-cheatsheet__item {
		display: flex;
		align-items: center;
		width: 100%;
		padding: var(--space-2) var(--space-3);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-size: 12px;
		cursor: pointer;
		text-align: left;
	}

	.query-label {
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		color: var(--text-secondary);
	}

	.query-input {
		min-height: 78px;
		resize: vertical;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-base);
		padding: var(--space-3);
		font-family: var(--font-mono);
		font-size: 13px;
		line-height: var(--leading-relaxed);
		color: var(--text-primary);
		outline: none;
	}

	.query-result,
	.query-empty,
	.query-error {
		flex: 1;
		margin: 0;
		overflow: auto;
		padding: var(--space-4);
		font-family: var(--font-mono);
		font-size: 13px;
		line-height: var(--leading-relaxed);
	}

	.query-result {
		color: var(--text-primary);
		background: var(--bg-base);
	}

	.query-result-meta {
		padding: var(--space-2) var(--space-4);
		border-top: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-muted);
	}

	.query-result code {
		white-space: pre;
	}

	.query-result--wrap code {
		white-space: pre-wrap;
		word-break: break-word;
	}

	.query-empty {
		font-family: var(--font-ui);
		color: var(--text-muted);
		background: var(--bg-base);
	}

	.query-error {
		font-family: var(--font-ui);
		color: var(--status-error);
		background: color-mix(in srgb, var(--status-error) 7%, var(--bg-base));
	}

	@media (max-width: 767px) {
		.query-toolbar {
			align-items: stretch;
			flex-direction: column;
		}
	}
</style>
