<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { output } from '$stores/output.store';
	import { input as inputStore } from '$stores/input.store';
	import { xmlError, xmlStats, xmlFormatOptions, setFormatOptions } from '$stores/xml.store';
	import { addToast } from '$stores/toast.store';
	import type { ToolDefinition } from '$registry/types.js';
	import {
		Copy,
		Download,
		WrapText,
		Check,
		AlertTriangle,
		ChevronDown
	} from 'lucide-svelte';

	let {
		toolSlug,
		outputLanguage = 'xml',
		downloadFilename = 'output',
		workspaceTools = []
	}: {
		toolSlug: string;
		outputLanguage?: string;
		downloadFilename?: string;
		workspaceTools?: ToolDefinition[];
	} = $props();

	let highlightedHtml = $state('');
	let hljs: typeof import('highlight.js').default | undefined = $state(undefined);
	let wrapLines = $state(false);
	let copied = $state(false);

	let isFormatter = $derived(toolSlug === 'formatter');
	let isMinifier = $derived(toolSlug === 'minifier');
	let isConverter = $derived(['to-json', 'to-yaml', 'to-csv'].includes(toolSlug));
	let outputMeta = $derived.by(() => {
		if (!$output) return '';
		const lineCount = $output.split('\n').length;
		return `${$output.length.toLocaleString()} chars · ${lineCount.toLocaleString()} lines`;
	});

	let minifySummary = $derived.by(() => {
		if (!isMinifier || !$xmlStats) return '';
		const original = $xmlStats.sizeBytes;
		const minified = new TextEncoder().encode($output).length;
		if (original <= 0 || minified <= 0) return '';
		const saved = Math.max(original - minified, 0);
		const ratio = saved === 0 ? 0 : (saved / original) * 100;
		return `Original: ${(original / 1024).toFixed(1)} KB → Minified: ${(minified / 1024).toFixed(1)} KB — saved ${ratio.toFixed(1)}%`;
	});

	let lines = $derived(highlightedHtml ? highlightedHtml.split('\n') : []);

	onMount(async () => {
		const mod = await import('highlight.js/lib/core');
		hljs = mod.default;

		const langMod = await import('highlight.js/lib/languages/xml');
		hljs.registerLanguage('xml', langMod.default);

		if (outputLanguage === 'json') {
			const jsonMod = await import('highlight.js/lib/languages/json');
			hljs.registerLanguage('json', jsonMod.default);
		} else if (outputLanguage === 'yaml') {
			const yamlMod = await import('highlight.js/lib/languages/yaml');
			hljs.registerLanguage('yaml', yamlMod.default);
		}
	});

	$effect(() => {
		const text = $output;
		if (!hljs || !text) {
			highlightedHtml = '';
			return;
		}
		try {
			const lang = hljs.getLanguage(outputLanguage) ? outputLanguage : 'xml';
			highlightedHtml = hljs.highlight(text, { language: lang }).value;
		} catch {
			highlightedHtml = escapeHtml(text);
		}
	});

	function escapeHtml(text: string): string {
		return text
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	}

	async function copyOutput(): Promise<void> {
		if (!$output) return;
		try {
			await navigator.clipboard.writeText($output);
		} catch {
			const ta = document.createElement('textarea');
			ta.value = $output;
			document.body.appendChild(ta);
			ta.select();
			document.execCommand('copy');
			document.body.removeChild(ta);
		}
		copied = true;
		addToast('success', 'Copied to clipboard');
		setTimeout(() => (copied = false), 2000);
	}

	function downloadOutput(): void {
		if (!$output) return;
		const ext = outputLanguage === 'json' ? '.json'
			: outputLanguage === 'yaml' ? '.yaml'
			: outputLanguage === 'csv' ? '.csv'
			: '.xml';
		const blob = new Blob([$output], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `${downloadFilename}${ext}`;
		a.click();
		URL.revokeObjectURL(url);
		addToast('success', `Downloaded ${downloadFilename}${ext}`);
	}

	function getWorkspaceLabel(tool: ToolDefinition): string {
		switch (tool.slug) {
			case 'formatter': return 'Format';
			case 'validator': return 'Validate';
			case 'minifier': return 'Minify';
			case 'to-json': return '→ JSON';
			case 'to-yaml': return '→ YAML';
			case 'to-csv': return '→ CSV';
			case 'xpath': return 'XPath';
			default: return tool.displayName;
		}
	}

	function navigateToWorkspaceTool(slug: string): void {
		if (slug === toolSlug) return;
		void goto(`/xml/${slug}`, {
			replaceState: true,
			noScroll: true,
			keepFocus: true
		});
	}
</script>

<div class="xml-output" role="region" aria-label="XML output panel">
	{#if workspaceTools.length > 0}
		<div class="xml-workspace-tabs" role="tablist" aria-label="XML workspace tabs">
			{#each workspaceTools as workspaceTool}
				<button
					type="button"
					role="tab"
					class="xml-workspace-tab"
					class:xml-workspace-tab--active={workspaceTool.slug === toolSlug}
					aria-selected={workspaceTool.slug === toolSlug}
					onclick={() => navigateToWorkspaceTool(workspaceTool.slug)}
				>
					{getWorkspaceLabel(workspaceTool)}
				</button>
			{/each}
		</div>
	{/if}

	<div class="xml-output-toolbar">
		<div class="xml-output-toolbar__group">
			{#if isFormatter}
				<label class="xml-output-select" aria-label="Indent style">
					<ChevronDown size={12} />
					<select
						value={$xmlFormatOptions.indent}
						onchange={(e) => {
							const val = (e.currentTarget as HTMLSelectElement).value;
							setFormatOptions({ indent: val === '\t' ? '\t' : (Number(val) as 2 | 4) });
						}}
					>
						<option value="2">2 spaces</option>
						<option value="4">4 spaces</option>
						<option value={'\t'}>Tabs</option>
					</select>
				</label>
			{/if}
			{#if isMinifier && minifySummary}
				<span class="xml-output-stat">{minifySummary}</span>
			{/if}
		</div>
		<div class="xml-output-toolbar__group">
			<button
				type="button"
				class="xml-output-btn xml-output-btn--icon"
				class:xml-output-btn--active={wrapLines}
				onclick={() => (wrapLines = !wrapLines)}
				title="Toggle word wrap"
			>
				<WrapText size={13} />
			</button>
			<button
				type="button"
				class="xml-output-btn xml-output-btn--icon"
				onclick={downloadOutput}
				disabled={!$output}
				title="Download"
			>
				<Download size={13} />
			</button>
			<button
				type="button"
				class="xml-output-btn xml-output-btn--copy"
				onclick={copyOutput}
				disabled={!$output}
			>
				{#if copied}
					<Check size={13} />
					Copied
				{:else}
					<Copy size={13} />
					Copy
				{/if}
			</button>
		</div>
	</div>

	<div class="xml-output-body">
		{#if $xmlError && !isConverter}
			<div class="xml-output-error">
				<AlertTriangle size={16} />
				<div class="xml-output-error__content">
					<p class="xml-output-error__title">Invalid XML</p>
					<p class="xml-output-error__detail">
						{$xmlError.plainLanguageExplanation ?? $xmlError.message}
					</p>
					{#if $xmlError.line != null}
						<p class="xml-output-error__location">Line {$xmlError.line}{$xmlError.column != null ? `, Col ${$xmlError.column}` : ''}</p>
					{/if}
				</div>
			</div>
		{:else if $output}
			<pre
				class="xml-output-pre"
				class:xml-output-pre--wrap={wrapLines}
			><code class="hljs">{#each lines as line, i}{@html line}{#if i < lines.length - 1}{'\n'}{/if}{/each}</code></pre>
		{:else if $inputStore.trim()}
			<div class="xml-output-empty">
				<span>Processing…</span>
			</div>
		{:else}
			<div class="xml-output-empty">
				<span>Output will appear here</span>
			</div>
		{/if}
	</div>

	{#if outputMeta && $output}
		<div class="xml-output-meta">
			<span>{outputMeta}</span>
		</div>
	{/if}
</div>

<style>
	.xml-output {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: var(--bg-base);
		overflow: hidden;
	}

	.xml-workspace-tabs {
		display: flex;
		align-items: center;
		gap: 2px;
		overflow-x: auto;
		padding: 0 var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		scrollbar-width: none;
	}

	.xml-workspace-tabs::-webkit-scrollbar {
		display: none;
	}

	.xml-workspace-tab {
		flex: 0 0 auto;
		height: 36px;
		padding: 0 var(--space-3);
		border: none;
		border-bottom: 2px solid transparent;
		background: transparent;
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 500;
		white-space: nowrap;
		cursor: pointer;
	}

	.xml-workspace-tab--active {
		border-bottom-color: var(--accent);
		color: var(--text-primary);
	}

	.xml-workspace-tab:hover {
		color: var(--text-primary);
	}

	.xml-output-toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		flex-shrink: 0;
	}

	.xml-output-toolbar__group {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.xml-output-stat {
		font-family: var(--font-ui);
		font-size: 11px;
		color: var(--text-muted);
	}

	.xml-output-select {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		height: 28px;
		padding: 0 var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		cursor: pointer;
	}

	.xml-output-select select {
		border: none;
		background: transparent;
		color: var(--text-primary);
		font: inherit;
		outline: none;
	}

	.xml-output-btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		height: 28px;
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

	.xml-output-btn:hover:not(:disabled) {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.xml-output-btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.xml-output-btn--active {
		background: var(--accent-dim);
		border-color: var(--accent-border);
		color: var(--text-primary);
	}

	.xml-output-btn--icon {
		padding: 0 var(--space-2);
	}

	.xml-output-btn--copy {
		background: var(--accent);
		border-color: var(--accent);
		color: white;
	}

	.xml-output-btn--copy:hover:not(:disabled) {
		opacity: 0.9;
		background: var(--accent);
		color: white;
	}

	.xml-output-body {
		flex: 1;
		overflow: auto;
		position: relative;
	}

	.xml-output-error {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		margin: var(--space-4);
		padding: var(--space-3) var(--space-4);
		border: 1px solid var(--error-border, #f87171);
		border-radius: var(--radius-lg);
		background: var(--error-dim, rgba(248, 113, 113, 0.08));
		color: var(--error);
	}

	.xml-output-error__content {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.xml-output-error__title {
		font-family: var(--font-ui);
		font-size: 13px;
		font-weight: 600;
		color: var(--error);
		margin: 0;
	}

	.xml-output-error__detail {
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-secondary);
		margin: 0;
	}

	.xml-output-error__location {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-muted);
		margin: 0;
	}

	.xml-output-pre {
		margin: 0;
		padding: var(--space-4);
		font-family: var(--font-mono);
		font-size: 13px;
		line-height: 1.6;
		color: var(--text-primary);
		white-space: pre;
		tab-size: 2;
	}

	.xml-output-pre--wrap {
		white-space: pre-wrap;
		word-break: break-all;
	}

	.xml-output-empty {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 13px;
	}

	.xml-output-meta {
		display: flex;
		align-items: center;
		padding: 0 var(--space-3);
		height: 28px;
		border-top: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 11px;
		color: var(--text-muted);
		flex-shrink: 0;
	}
</style>
