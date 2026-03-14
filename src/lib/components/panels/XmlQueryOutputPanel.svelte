<script lang="ts">
	import { goto } from '$app/navigation';
	import { input as xmlInputStore } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$stores/language';
	import type { ToolDefinition } from '$registry/types.js';
	import type { XPathResultNode } from '$engines/xml/xpathEngine.js';
	import { xpathSamples } from '$engines/xml/xpathEngine.js';
	import {
		Copy,
		Check,
		ChevronDown,
		Search,
		AlertTriangle,
		Hash
	} from 'lucide-svelte';

	let {
		workspaceTools = []
	}: {
		workspaceTools?: ToolDefinition[];
	} = $props();

	let expression = $state('//book');
	let results = $state<XPathResultNode[]>([]);
	let resultCount = $state(0);
	let resultType = $state('');
	let error = $state('');
	let isRunning = $state(false);
	let copied = $state(false);
	let selectedSample = $state('');

	const toolSlug = 'xpath';

	async function runQuery(): Promise<void> {
		const xml = $xmlInputStore;
		if (!xml.trim() || !expression.trim()) return;

		isRunning = true;
		error = '';
		results = [];

		try {
			const { xpathQuery } = await import('$engines/xml/xpathEngine.js');
			const result = xpathQuery(xml, expression);

			if (result.success) {
				results = result.nodes;
				resultCount = result.count;
				resultType = result.resultType;
			} else {
				error = result.error;
				resultCount = 0;
			}
		} catch (err) {
			error = (err as Error).message ?? 'XPath evaluation failed';
		} finally {
			isRunning = false;
		}
	}

	function loadSample(value: string): void {
		const sample = xpathSamples.find((s) => s.expression === value);
		if (!sample) return;
		selectedSample = value;
		expression = sample.expression;
		void runQuery();
	}

	async function copyResults(): Promise<void> {
		if (!results.length) return;
		const text = results.map((n) => n.value).join('\n---\n');
		try {
			await navigator.clipboard.writeText(text);
		} catch {
			const ta = document.createElement('textarea');
			ta.value = text;
			document.body.appendChild(ta);
			ta.select();
			document.execCommand('copy');
			document.body.removeChild(ta);
		}
		copied = true;
		addToast('success', $t('ui.toast.copy_success', 'Results copied to clipboard'));
		setTimeout(() => (copied = false), 2000);
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
			void runQuery();
		}
	}

</script>

<div class="xpath-panel" role="region" aria-label={$t('ui.aria.xpath_panel', 'XPath query panel')}>
	<div class="xpath-query-bar">
		<div class="xpath-query-bar__input-wrap">
			<Search size={14} class="xpath-query-bar__icon" />
			<input
				bind:value={expression}
				type="text"
				class="xpath-query-bar__input"
				placeholder="//book[@available='true']"
				spellcheck="false"
				onkeydown={handleKeydown}
			/>
		</div>
		<div class="xpath-query-bar__actions">
			<label class="xpath-sample-select">
				<ChevronDown size={12} />
				<select
					bind:value={selectedSample}
					onchange={(e) => loadSample((e.currentTarget as HTMLSelectElement).value)}
				>
					<option value="">{$t('ui.actions.choose_sample', 'Samples…')}</option>
					{#each xpathSamples as sample}
						<option value={sample.expression}>{sample.label}</option>
					{/each}
				</select>
			</label>
			<button
				type="button"
				class="xpath-run-btn"
				onclick={runQuery}
				disabled={isRunning || !$xmlInputStore.trim() || !expression.trim()}
			>
				{isRunning ? $t('ui.actions.running', 'Running…') : $t('ui.actions.run', 'Run')}
			</button>
		</div>
	</div>

	<div class="xpath-hint">
		<kbd>Ctrl</kbd><kbd>Enter</kbd> to run
	</div>

	<div class="xpath-results">
		{#if error}
			<div class="xpath-error">
				<AlertTriangle size={14} />
				<span>{error}</span>
			</div>
		{:else if results.length > 0}
			<div class="xpath-results-header">
				<span class="xpath-results-count">
					<Hash size={12} />
					{resultCount === 1 ? $t('ui.xpath.results_count.one') : $t('ui.xpath.results_count.other', { count: resultCount })}
					{#if resultType && resultType !== 'nodeset'}
						· {resultType}
					{/if}
				</span>
				<button
					type="button"
					class="xpath-copy-btn"
					onclick={copyResults}
				>
					{#if copied}
						<Check size={12} />
						{$t('ui.actions.copied', 'Copied')}
					{:else}
						<Copy size={12} />
						{$t('ui.actions.copy_all', 'Copy all')}
					{/if}
				</button>
			</div>
			<div class="xpath-results-list">
				{#each results as node, i}
					<div class="xpath-result-item">
						<div class="xpath-result-item__header">
							<span class="xpath-result-item__index">{i + 1}</span>
							<span class="xpath-result-item__label">{node.label}</span>
							{#if node.path}
								<span class="xpath-result-item__path">{node.path}</span>
							{/if}
						</div>
						<pre class="xpath-result-item__value">{node.value}</pre>
					</div>
				{/each}
			</div>
		{:else if !$xmlInputStore.trim()}
			<div class="xpath-placeholder">
				<p>{$t('ui.xpath.placeholder', 'Paste XML in the left panel, then run an XPath expression.')}</p>
			</div>
		{:else}
			<div class="xpath-placeholder">
				<p>{$t('ui.xpath.no_results', 'No results. Try a different expression or check the XML structure.')}</p>
			</div>
		{/if}
	</div>
</div>

<style>
	.xpath-panel {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: var(--bg-base);
		overflow: hidden;
	}

	
	.xpath-query-bar {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		flex-shrink: 0;
	}

	.xpath-query-bar__input-wrap {
		flex: 1;
		display: flex;
		align-items: center;
		gap: var(--space-2);
		height: 32px;
		padding: 0 var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-base);
	}

	.xpath-query-bar__input-wrap:focus-within {
		border-color: var(--accent);
	}

	:global(.xpath-query-bar__icon) {
		color: var(--text-muted);
		flex-shrink: 0;
	}

	.xpath-query-bar__input {
		flex: 1;
		border: none;
		background: transparent;
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-size: 13px;
		outline: none;
	}

	.xpath-query-bar__input::placeholder {
		color: var(--text-muted);
	}

	.xpath-query-bar__actions {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.xpath-sample-select {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		height: 32px;
		padding: 0 var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		cursor: pointer;
	}

	.xpath-sample-select select {
		border: none;
		background: transparent;
		color: var(--text-primary);
		font: inherit;
		outline: none;
	}

	.xpath-run-btn {
		height: 32px;
		padding: 0 var(--space-3);
		border: none;
		border-radius: var(--radius-md);
		background: var(--accent);
		color: white;
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
		white-space: nowrap;
	}

	.xpath-run-btn:hover:not(:disabled) {
		opacity: 0.9;
	}

	.xpath-run-btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.xpath-hint {
		display: flex;
		align-items: center;
		gap: 4px;
		padding: var(--space-1) var(--space-3);
		background: var(--bg-surface);
		border-bottom: 1px solid var(--border-subtle);
		font-family: var(--font-ui);
		font-size: 11px;
		color: var(--text-muted);
		flex-shrink: 0;
	}

	kbd {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 16px;
		padding: 0 4px;
		border: 1px solid var(--border-default);
		border-radius: 3px;
		background: var(--bg-elevated);
		font-family: var(--font-ui);
		font-size: 10px;
		color: var(--text-secondary);
	}

	.xpath-results {
		flex: 1;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
	}

	.xpath-error {
		display: flex;
		align-items: flex-start;
		gap: var(--space-2);
		margin: var(--space-3);
		padding: var(--space-3);
		border: 1px solid var(--error-border, #f87171);
		border-radius: var(--radius-lg);
		background: var(--error-dim, rgba(248, 113, 113, 0.08));
		color: var(--error);
		font-family: var(--font-ui);
		font-size: 13px;
	}

	.xpath-results-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		flex-shrink: 0;
	}

	.xpath-results-count {
		display: flex;
		align-items: center;
		gap: var(--space-1);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		color: var(--text-secondary);
	}

	.xpath-copy-btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		height: 26px;
		padding: 0 var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 11px;
		cursor: pointer;
	}

	.xpath-copy-btn:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.xpath-results-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-3);
	}

	.xpath-result-item {
		border: 1px solid var(--border-default);
		border-radius: var(--radius-lg);
		background: var(--bg-surface);
		overflow: hidden;
	}

	.xpath-result-item__header {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-elevated);
	}

	.xpath-result-item__index {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		border-radius: var(--radius-full, 9999px);
		background: var(--accent-dim);
		color: var(--accent);
		font-family: var(--font-mono);
		font-size: 10px;
		font-weight: 700;
		flex-shrink: 0;
	}

	.xpath-result-item__label {
		font-family: var(--font-mono);
		font-size: 12px;
		font-weight: 600;
		color: var(--text-primary);
	}

	.xpath-result-item__path {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-muted);
		margin-left: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		max-width: 200px;
	}

	.xpath-result-item__value {
		margin: 0;
		padding: var(--space-2) var(--space-3);
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--text-primary);
		white-space: pre-wrap;
		word-break: break-all;
		max-height: 200px;
		overflow-y: auto;
	}

	.xpath-placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: var(--space-6);
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 13px;
		text-align: center;
	}
</style>
