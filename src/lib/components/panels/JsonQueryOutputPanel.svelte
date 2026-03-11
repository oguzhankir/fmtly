<script lang="ts">
	import { jsonpathQuery, jmespathQuery } from '$engines/json/json.engine.js';
	import { input } from '$stores/input.store';
	import { output } from '$stores/output.store';
	import { addToast } from '$stores/toast.store';
	import { Copy, Play, Sparkles } from 'lucide-svelte';

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

	$effect(() => {
		if (!query) {
			query = defaultQuery;
		}
	});

	$effect(() => {
		void runQuery();
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
		} catch (error) {
			resultCount = null;
			output.set('');
			resultError = error instanceof Error ? error.message : 'Query failed';
		} finally {
			isRunning = false;
		}
	}

	function loadSampleQuery(): void {
		query = defaultQuery;
	}

	async function copyResult(): Promise<void> {
		if (!$output) return;
		await navigator.clipboard.writeText($output);
		addToast('success', 'Query result copied');
	}
</script>

<div class="query-shell" role="region" aria-label="JSON query panel">
	<div class="query-toolbar">
		<div class="query-toolbar__meta">
			<span class="query-pill">{props.toolSlug === 'jsonpath' ? 'JSONPath' : 'JMESPath'}</span>
			{#if resultCount !== null}
				<span class="query-count">{resultCount} result{resultCount === 1 ? '' : 's'}</span>
			{/if}
		</div>
		<div class="query-toolbar__actions">
			<button type="button" class="query-btn" onclick={loadSampleQuery}>
				<Sparkles size={13} />
				Sample query
			</button>
			<button type="button" class="query-btn" onclick={() => void runQuery()}>
				<Play size={13} />
				Run
			</button>
			<button type="button" class="query-btn" onclick={copyResult} disabled={!$output}>
				<Copy size={13} />
				Copy
			</button>
		</div>
	</div>

	<div class="query-input-wrap">
		<label class="query-label" for="json-query-input">Query</label>
		<textarea
			id="json-query-input"
			bind:value={query}
			class="query-input"
			placeholder={props.toolSlug === 'jsonpath' ? '$.items[*].id' : 'items[].id'}
			spellcheck="false"
		></textarea>
	</div>

	{#if resultError}
		<div class="query-error">{resultError}</div>
	{:else if isRunning}
		<div class="query-empty">Running query…</div>
	{:else if !$input.trim()}
		<div class="query-empty">Paste JSON on the left to evaluate your query.</div>
	{:else if !query.trim()}
		<div class="query-empty">Enter a query to see results.</div>
	{:else if $output}
		<pre class="query-result"><code>{$output}</code></pre>
	{:else}
		<div class="query-empty">No results yet.</div>
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
