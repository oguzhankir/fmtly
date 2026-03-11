<script lang="ts">
	import { onMount } from 'svelte';
	import { output } from '$stores/output.store';
	import { input } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import { jsonAdvancedStats, jsonFormatWarnings } from '$stores/json.store';
	import { Check, Copy, Download, WrapText, ChevronDown, ChevronRight } from 'lucide-svelte';

	let {
		outputLanguage,
		downloadFilename = 'output',
		toolSlug
	}: {
		outputLanguage: string;
		downloadFilename?: string;
		toolSlug: string;
	} = $props();

	let highlightedHtml = $state('');
	let hljs: typeof import('highlight.js').default | undefined = $state(undefined);
	let wrapLines = $state(false);
	let copied = $state(false);
	let showStats = $state(false);
	let showCompare = $state(false);
	let supportsStructuredCopy = $derived(outputLanguage === 'json');
	let supportsCompare = $derived(toolSlug === 'formatter' || toolSlug === 'minifier');
	let lines = $derived(highlightedHtml ? highlightedHtml.split('\n') : []);
	let statsSummary = $derived.by(() => {
		if (!$jsonAdvancedStats) return '';
		return `${$jsonAdvancedStats.keys} keys · ${$jsonAdvancedStats.objects} objects · ${$jsonAdvancedStats.arrays} arrays · ${$jsonAdvancedStats.strings} strings · depth: ${$jsonAdvancedStats.maxDepth}`;
	});

	onMount(async () => {
		const mod = await import('highlight.js/lib/core');
		hljs = mod.default;

		const langLoaders: Record<string, () => Promise<{ default: import('highlight.js').LanguageFn }>> = {
			json: () => import('highlight.js/lib/languages/json'),
			xml: () => import('highlight.js/lib/languages/xml'),
			yaml: () => import('highlight.js/lib/languages/yaml')
		};

		const loader = langLoaders[outputLanguage];
		if (loader) {
			const langMod = await loader();
			hljs.registerLanguage(outputLanguage, langMod.default);
		}
	});

	$effect(() => {
		const value = $output;
		if (!value) {
			highlightedHtml = '';
			return;
		}

		if (!hljs) {
			highlightedHtml = escapeHtml(value);
			return;
		}

		try {
			const result = hljs.highlight(value, {
				language: outputLanguage,
				ignoreIllegals: true
			});
			highlightedHtml = result.value;
		} catch {
			highlightedHtml = escapeHtml(value);
		}
	});

	function escapeHtml(str: string): string {
		return str
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;');
	}

	function toCopyFormat(mode: 'json' | 'js' | 'python' | 'escaped'): string {
		if (mode === 'escaped') {
			return JSON.stringify($output);
		}

		if (mode === 'json') {
			return $output;
		}

		try {
			const parsed = JSON.parse($output);
			if (mode === 'js') {
				return JSON.stringify(parsed, null, 2)
					.replaceAll(/"([A-Za-z0-9_$]+)":/g, '$1:')
					.replaceAll('"', "'");
			}

			return JSON.stringify(parsed, null, 2)
				.replaceAll('true', 'True')
				.replaceAll('false', 'False')
				.replaceAll('null', 'None');
		} catch {
			return $output;
		}
	}

	async function handleCopy(mode: 'json' | 'js' | 'python' | 'escaped' = 'json'): Promise<void> {
		if (!$output) return;
		await navigator.clipboard.writeText(toCopyFormat(mode));
		copied = true;
		addToast('success', 'Output copied');
		setTimeout(() => {
			copied = false;
		}, 1500);
	}

	function deriveDownloadName(): string {
		try {
			const parsed = JSON.parse($input) as Record<string, unknown>;
			const name = typeof parsed.name === 'string' ? parsed.name : typeof parsed.title === 'string' ? parsed.title : '';
			if (!name) return downloadFilename;
			return name.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replaceAll(/^-|-$/g, '') || downloadFilename;
		} catch {
			return downloadFilename;
		}
	}

	function handleDownload(): void {
		if (!$output) return;

		const extMap: Record<string, string> = {
			json: '.json',
			xml: '.xml',
			yaml: '.yaml',
			toml: '.toml',
			csv: '.csv',
			markdown: '.md'
		};

		const ext = extMap[outputLanguage] ?? '.txt';
		const blob = new Blob([$output], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `${deriveDownloadName()}${ext}`;
		a.click();
		URL.revokeObjectURL(url);
	}

	function compareLines(source: string, formatted: string): Array<{ left: string; right: string; changed: boolean }> {
		const leftLines = source.split('\n');
		const rightLines = formatted.split('\n');
		const count = Math.max(leftLines.length, rightLines.length);
		return Array.from({ length: count }, (_, index) => ({
			left: leftLines[index] ?? '',
			right: rightLines[index] ?? '',
			changed: (leftLines[index] ?? '') !== (rightLines[index] ?? '')
		}));
	}
</script>

<div class="json-output" role="region" aria-label="JSON output panel">
	{#if $jsonAdvancedStats}
		<button type="button" class="json-stats-toggle" onclick={() => (showStats = !showStats)}>
			{#if showStats}
				<ChevronDown size={14} />
			{:else}
				<ChevronRight size={14} />
			{/if}
			<span>{statsSummary}</span>
		</button>
		{#if showStats}
			<div class="json-stats-grid">
				<span><strong>{$jsonAdvancedStats.keys}</strong> keys</span>
				<span><strong>{$jsonAdvancedStats.values}</strong> values</span>
				<span><strong>{$jsonAdvancedStats.strings}</strong> strings</span>
				<span><strong>{$jsonAdvancedStats.numbers}</strong> numbers</span>
				<span><strong>{$jsonAdvancedStats.booleans}</strong> booleans</span>
				<span><strong>{$jsonAdvancedStats.nulls}</strong> nulls</span>
				<span><strong>{$jsonAdvancedStats.arrays}</strong> arrays</span>
				<span><strong>{$jsonAdvancedStats.objects}</strong> objects</span>
				<span><strong>{$jsonAdvancedStats.maxDepth}</strong> depth</span>
				<span><strong>{$jsonAdvancedStats.sizeOriginal}</strong> B in</span>
				<span><strong>{$jsonAdvancedStats.sizeFormatted}</strong> B out</span>
			</div>
		{/if}
	{/if}

	{#if $jsonFormatWarnings.length > 0}
		<div class="json-output-warnings">
			{#each $jsonFormatWarnings as warning}
				<span>{warning}</span>
			{/each}
		</div>
	{/if}

	{#if $output}
		<div class="json-output-actions">
			<button type="button" class="json-output-btn" onclick={() => (wrapLines = !wrapLines)}>
				<WrapText size={13} />
				Wrap
			</button>
			{#if supportsCompare}
				<button type="button" class="json-output-btn" onclick={() => (showCompare = !showCompare)}>
					Compare
				</button>
			{/if}
			{#if supportsStructuredCopy}
				<select class="json-output-select" onchange={(event) => handleCopy((event.currentTarget as HTMLSelectElement).value as 'json' | 'js' | 'python' | 'escaped')}>
					<option value="json">Copy as JSON</option>
					<option value="js">Copy as JS Object</option>
					<option value="python">Copy as Python Dict</option>
					<option value="escaped">Copy escaped</option>
				</select>
			{/if}
			<button type="button" class="json-output-btn" onclick={() => handleCopy()}>
				{#if copied}
					<Check size={13} />
				{:else}
					<Copy size={13} />
				{/if}
				Copy
			</button>
			<button type="button" class="json-output-btn" onclick={handleDownload}>
				<Download size={13} />
				Download
			</button>
		</div>

		{#if showCompare && supportsCompare}
			<div class="json-compare-grid">
				<div class="json-compare-column">
					<div class="json-compare-title">Input</div>
					{#each compareLines($input, $output) as row, index}
						<div class="json-compare-line" class:json-compare-line--changed={row.changed}>
							<span>{index + 1}</span>
							<code>{row.left || ' '}</code>
						</div>
					{/each}
				</div>
				<div class="json-compare-column">
					<div class="json-compare-title">Output</div>
					{#each compareLines($input, $output) as row, index}
						<div class="json-compare-line" class:json-compare-line--changed={row.changed}>
							<span>{index + 1}</span>
							<code>{row.right || ' '}</code>
						</div>
					{/each}
				</div>
			</div>
		{:else}
			<div class="json-output-code" class:json-output-code--wrap={wrapLines}>
				{#each lines as line, index}
					<div class="json-output-line">
						<span class="json-output-line__number">{index + 1}</span>
						<code class="json-output-line__code">{@html line || ' '}</code>
					</div>
				{/each}
			</div>
		{/if}
	{:else}
		<div class="json-output-empty">Output will appear here</div>
	{/if}
</div>

<style>
	.json-output {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}

	.json-stats-toggle {
		display: flex;
		align-items: center;
		gap: 6px;
		height: 30px;
		padding: 0 var(--space-3);
		border: none;
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		cursor: pointer;
		text-align: left;
	}

	.json-stats-grid,
	.json-output-warnings {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: var(--space-2);
		padding: var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-secondary);
	}

	.json-stats-grid strong {
		color: var(--text-primary);
		font-weight: 600;
	}

	.json-output-actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.json-output-btn,
	.json-output-select {
		height: 28px;
		padding: 0 var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 500;
	}

	.json-output-btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		cursor: pointer;
	}

	.json-output-code,
	.json-compare-grid {
		flex: 1;
		overflow: auto;
		background: var(--bg-base);
		font-family: var(--font-mono);
		font-size: 13px;
	}

	.json-output-line {
		display: grid;
		grid-template-columns: 52px minmax(0, 1fr);
		min-height: 22px;
		border-bottom: 1px solid color-mix(in srgb, var(--border-subtle) 55%, transparent);
	}

	.json-output-line__number {
		padding: 2px 10px 2px 0;
		text-align: right;
		color: var(--text-muted);
		user-select: none;
		border-right: 1px solid var(--border-subtle);
	}

	.json-output-line__code {
		padding: 2px var(--space-3);
		white-space: pre;
		overflow-x: auto;
	}

	.json-output-code--wrap .json-output-line__code {
		white-space: pre-wrap;
		word-break: break-word;
	}

	.json-compare-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.json-compare-column {
		border-right: 1px solid var(--border-subtle);
	}

	.json-compare-column:last-child {
		border-right: none;
	}

	.json-compare-title {
		position: sticky;
		top: 0;
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		color: var(--text-primary);
	}

	.json-compare-line {
		display: grid;
		grid-template-columns: 52px minmax(0, 1fr);
		min-height: 22px;
		border-bottom: 1px solid color-mix(in srgb, var(--border-subtle) 55%, transparent);
	}

	.json-compare-line span {
		padding: 2px 10px 2px 0;
		text-align: right;
		color: var(--text-muted);
		border-right: 1px solid var(--border-subtle);
	}

	.json-compare-line code {
		padding: 2px var(--space-3);
		white-space: pre-wrap;
		word-break: break-word;
	}

	.json-compare-line--changed {
		background: var(--warning-dim, color-mix(in srgb, var(--warning) 12%, transparent));
	}

	.json-output-empty {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: var(--text-sm);
	}

	@media (max-width: 767px) {
		.json-output-actions {
			justify-content: flex-start;
			flex-wrap: wrap;
		}

		.json-compare-grid {
			grid-template-columns: 1fr;
		}

		.json-compare-column {
			border-right: none;
			border-bottom: 1px solid var(--border-subtle);
		}
	}
</style>
