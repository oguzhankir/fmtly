<script lang="ts">
	import { onMount } from 'svelte';
	import { output } from '$stores/output.store';
	import { input as inputStore } from '$stores/input.store';
	import { yamlError, yamlStats } from '$stores/yaml.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$lib/stores/language.js';
	import {
		AlertTriangle,
		Check,
		ChevronDown,
		ChevronRight,
		Copy,
		Download,
		WrapText
	} from 'lucide-svelte';

	let {
		toolSlug,
		outputLanguage = 'yaml',
		downloadFilename = 'output'
	}: {
		toolSlug: string;
		outputLanguage?: string;
		downloadFilename?: string;
	} = $props();

	let highlightedHtml = $state('');
	let hljs: typeof import('highlight.js').default | undefined = $state(undefined);
	let wrapLines = $state(false);
	let copied = $state(false);
	let showStats = $state(false);
	let lines = $derived(highlightedHtml ? highlightedHtml.split('\n') : []);
	let isMinifier = $derived(toolSlug === 'minifier');
	let inputBytes = $derived(new TextEncoder().encode($inputStore ?? '').length);
	let outputBytes = $derived(new TextEncoder().encode($output ?? '').length);
	let outputMeta = $derived.by(() => {
		if (!$output) return '';
		const lineCount = $output.length === 0 ? 0 : $output.split('\n').length;
		return `${$output.length.toLocaleString()} ${$t('ui.output.stats.chars', 'chars')} · ${lineCount.toLocaleString()} ${$t('ui.output.stats.lines', 'lines')}`;
	});
	let statsSummary = $derived.by(() => {
		if (!$yamlStats) return '';
		return `${$yamlStats.documentCount} ${$t('ui.output.stats.documents', 'documents')} · ${$yamlStats.topLevelKeys} ${$t('ui.output.stats.top_level_keys', 'top-level keys')} · ${$t('ui.output.stats.depth', 'depth')}: ${$yamlStats.maxDepth}`;
	});
	let minifySummary = $derived.by(() => {
		if (!isMinifier || !$output) return '';
		if (inputBytes <= 0 || outputBytes <= 0) return '';
		const saved = Math.max(inputBytes - outputBytes, 0);
		const ratio = saved === 0 ? 0 : (saved / inputBytes) * 100;
		return `${$t('ui.output.original', 'Original')}: ${(inputBytes / 1024).toFixed(1)} KB → ${$t('ui.output.minified', 'Minified')}: ${(outputBytes / 1024).toFixed(1)} KB — ${$t('ui.output.saved', 'saved')} ${ratio.toFixed(1)}%`;
	});
	let errorLocationLabel = $derived.by(() => {
		if (!$yamlError?.line) return '';
		const translateWithVars = $t as (
			key: string,
			vars: { line: number; column: number },
			fallback: string
		) => string;
		return translateWithVars(
			'ui.validator.line_col_label',
			{ line: $yamlError.line, column: $yamlError.column ?? 1 },
			`Line ${$yamlError.line}, column ${$yamlError.column ?? 1}`
		);
	});

	onMount(async () => {
		const mod = await import('highlight.js/lib/core');
		hljs = mod.default;

		const langLoaders: Record<string, () => Promise<{ default: import('highlight.js').LanguageFn }>> = {
			yaml: () => import('highlight.js/lib/languages/yaml'),
			json: () => import('highlight.js/lib/languages/json'),
			xml: () => import('highlight.js/lib/languages/xml')
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
			const language = hljs.getLanguage(outputLanguage) ? outputLanguage : 'yaml';
			const result = hljs.highlight(value, {
				language,
				ignoreIllegals: true
			});
			highlightedHtml = result.value;
		} catch {
			highlightedHtml = escapeHtml(value);
		}
	});

	function escapeHtml(value: string): string {
		return value
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;');
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

	async function handleCopy(): Promise<void> {
		if (!$output) return;
		let copiedSuccessfully = false;
		try {
			await navigator.clipboard.writeText($output);
			copiedSuccessfully = true;
		} catch {
			copiedSuccessfully = fallbackCopy($output);
		}
		if (!copiedSuccessfully) {
			addToast('error', $t('ui.output.error.copy_failed', 'Could not copy output'));
			return;
		}
		copied = true;
		addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		setTimeout(() => {
			copied = false;
		}, 2000);
	}

	function handleDownload(): void {
		if (!$output) return;

		const extMap: Record<string, string> = {
			yaml: '.yaml',
			json: '.json',
			xml: '.xml',
			csv: '.csv',
			toml: '.toml'
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

<div class="yaml-output" role="region" aria-label={$t('ui.aria.yaml_output_panel', 'YAML output panel')}>
	{#if $yamlStats}
		<button type="button" class="yaml-output__stats-toggle" onclick={() => (showStats = !showStats)}>
			{#if showStats}
				<ChevronDown size={14} />
			{:else}
				<ChevronRight size={14} />
			{/if}
			<span>{statsSummary}</span>
		</button>
		{#if showStats}
			<div class="yaml-output__stats-grid">
				<span><strong>{$yamlStats.documentCount}</strong> {$t('ui.output.stats.documents', 'documents')}</span>
				<span><strong>{$yamlStats.topLevelKeys}</strong> {$t('ui.output.stats.top_level_keys', 'top-level keys')}</span>
				<span><strong>{$yamlStats.maxDepth}</strong> {$t('ui.output.stats.depth', 'depth')}</span>
				<span><strong>{inputBytes}</strong> B {$t('ui.output.stats.size_in', 'in')}</span>
				<span><strong>{outputBytes}</strong> B {$t('ui.output.stats.size_out', 'out')}</span>
			</div>
		{/if}
	{/if}

	{#if isMinifier && minifySummary}
		<div class="yaml-output__meta">
			<span class="yaml-output__pill">{$t('ui.output.meta.minified', 'MINIFIED')}</span>
			<span>{minifySummary}</span>
		</div>
	{/if}

	<div class="yaml-output__actions">
		<button type="button" class="yaml-output__btn" onclick={() => (wrapLines = !wrapLines)}>
			<WrapText size={13} />
			{$t('ui.output.actions.wrap', 'Wrap')}
		</button>
		<button type="button" class="yaml-output__btn" onclick={handleCopy} disabled={!$output}>
			{#if copied}
				<Check size={13} />
			{:else}
				<Copy size={13} />
			{/if}
			<span>{$t('ui.actions.copy', 'Copy')}</span>
		</button>
		<button type="button" class="yaml-output__btn" onclick={handleDownload} disabled={!$output}>
			<Download size={13} />
			<span>{$t('ui.actions.download', 'Download')}</span>
		</button>
	</div>

	<div class="yaml-output__body">
		{#if !$output && $inputStore.trim() && $yamlError}
			<div class="yaml-output__error">
				<AlertTriangle size={16} />
				<div class="yaml-output__error-content">
					<p class="yaml-output__error-title">{$t('ui.validator.invalid_yaml', 'Invalid YAML')}</p>
					<p class="yaml-output__error-detail">{$yamlError.plainLanguageExplanation ?? $yamlError.message}</p>
					{#if $yamlError.line != null}
						<p class="yaml-output__error-location">{errorLocationLabel}</p>
					{/if}
				</div>
			</div>
		{:else if $output}
			<div class="yaml-output__code" class:yaml-output__code--wrap={wrapLines}>
				{#each lines as line, index}
					<div class="yaml-output__line">
						<span class="yaml-output__line-number">{index + 1}</span>
						<code class="yaml-output__line-code">{@html line || ' '}</code>
					</div>
				{/each}
			</div>
		{:else if $inputStore.trim()}
			<div class="yaml-output__empty">
				<span>{$t('ui.status.processing', 'Processing…')}</span>
			</div>
		{:else}
			<div class="yaml-output__empty">
				<span>{$t('ui.status.waiting_output', 'Output will appear here')}</span>
			</div>
		{/if}
	</div>

	{#if outputMeta && $output}
		<div class="yaml-output__footer-meta">
			<span>{outputMeta}</span>
		</div>
	{/if}
</div>

<style>
	.yaml-output {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: var(--bg-base);
		overflow: hidden;
	}

	.yaml-output__stats-toggle {
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

	.yaml-output__stats-grid {
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

	.yaml-output__stats-grid strong {
		color: var(--text-primary);
		font-weight: 600;
	}

	.yaml-output__meta,
	.yaml-output__footer-meta {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-muted);
	}

	.yaml-output__footer-meta {
		border-bottom: none;
		border-top: 1px solid var(--border-subtle);
		flex-shrink: 0;
	}

	.yaml-output__pill {
		display: inline-flex;
		align-items: center;
		height: 22px;
		padding: 0 var(--space-2);
		border-radius: var(--radius-full);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-weight: 600;
	}

	.yaml-output__actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.yaml-output__btn {
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

	.yaml-output__btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.yaml-output__body,
	.yaml-output__code {
		flex: 1;
		overflow: auto;
	}

	.yaml-output__line {
		display: grid;
		grid-template-columns: 52px minmax(0, 1fr);
		min-height: 22px;
		border-bottom: 1px solid color-mix(in srgb, var(--border-subtle) 55%, transparent);
		font-family: var(--font-mono);
		font-size: 13px;
	}

	.yaml-output__line-number {
		padding: 2px 10px 2px 0;
		text-align: right;
		color: var(--text-muted);
		user-select: none;
		border-right: 1px solid var(--border-subtle);
	}

	.yaml-output__line-code {
		padding: 2px var(--space-3);
		white-space: pre;
		overflow-x: auto;
	}

	.yaml-output__code--wrap .yaml-output__line-code {
		white-space: pre-wrap;
		word-break: break-word;
	}

	.yaml-output__empty {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 13px;
	}

	.yaml-output__error {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		margin: var(--space-4);
		padding: var(--space-3) var(--space-4);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-lg);
		background: color-mix(in srgb, var(--status-error) 8%, var(--bg-base));
		color: var(--status-error);
	}

	.yaml-output__error-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.yaml-output__error-title,
	.yaml-output__error-detail,
	.yaml-output__error-location {
		margin: 0;
	}

	.yaml-output__error-title {
		font-family: var(--font-ui);
		font-size: 13px;
		font-weight: 600;
	}

	.yaml-output__error-detail {
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-secondary);
	}

	.yaml-output__error-location {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-muted);
	}

	@media (max-width: 767px) {
		.yaml-output__actions {
			justify-content: flex-start;
			flex-wrap: wrap;
		}
	}
</style>
