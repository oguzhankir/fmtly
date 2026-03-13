<script lang="ts">
	import { onMount } from 'svelte';
	import { output } from '$stores/output.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$stores/language';
	import { Copy, Download } from 'lucide-svelte';

	let {
		outputLanguage,
		downloadFilename = 'output',
		isHtmlPreview = false
	}: {
		outputLanguage: string;
		downloadFilename?: string;
		isHtmlPreview?: boolean;
	} = $props();

	let highlightedHtml = $state('');
	let hljs: typeof import('highlight.js').default | undefined = $state(undefined);

	onMount(async () => {
		const mod = await import('highlight.js/lib/core');
		hljs = mod.default;

		const langLoaders: Record<string, () => Promise<{ default: import('highlight.js').LanguageFn }>> = {
			json: () => import('highlight.js/lib/languages/json'),
			xml: () => import('highlight.js/lib/languages/xml'),
			yaml: () => import('highlight.js/lib/languages/yaml'),
			css: () => import('highlight.js/lib/languages/css'),
			html: () => import('highlight.js/lib/languages/xml')
		};

		const loader = langLoaders[outputLanguage];
		if (loader) {
			const langMod = await loader();
			hljs.registerLanguage(outputLanguage === 'html' ? 'xml' : outputLanguage, langMod.default);
		}
	});

	$effect(() => {
		const value = $output;
		if (!value || !hljs) {
			highlightedHtml = '';
			return;
		}

		const langName = outputLanguage === 'html' ? 'xml' : outputLanguage;
		try {
			const result = hljs.highlight(value, { language: langName });
			highlightedHtml = result.value;
		} catch {
			highlightedHtml = escapeHtml(value);
		}
	});

	function escapeHtml(str: string): string {
		return str
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	}

	async function handleCopy(): Promise<void> {
		const value = $output;
		if (!value) return;
		await navigator.clipboard.writeText(value);
		addToast('success', $t('ui.toast.copy_success', 'Output copied'));
	}

	function handleDownload(): void {
		const value = $output;
		if (!value) return;

		const extMap: Record<string, string> = {
			json: '.json',
			xml: '.xml',
			yaml: '.yaml',
			css: '.css',
			html: '.html',
			csv: '.csv',
			txt: '.txt'
		};

		const ext = extMap[outputLanguage] ?? '.txt';
		const blob = new Blob([value], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `${downloadFilename}${ext}`;
		a.click();
		URL.revokeObjectURL(url);
	}
</script>

<div class="relative flex h-full w-full flex-col" role="region" aria-label="Output panel">
	{#if $output}
		<!-- Action buttons -->
		<div class="absolute right-[var(--space-2)] top-[var(--space-2)] z-[var(--z-above)] flex gap-[var(--space-1)]">
			<button
				onclick={handleCopy}
				class="flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]"
				aria-label="Copy output"
			>
				<Copy size={12} />
				{$t('ui.actions.copy', 'Copy')}
			</button>
			<button
				onclick={handleDownload}
				class="flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]"
				aria-label={$t('ui.actions.download', 'Download output')}
			>
				<Download size={12} />
				{$t('ui.actions.download', 'Download')}
			</button>
		</div>

		<!-- Highlighted output -->
		{#if isHtmlPreview}
			<div class="output-html-preview">
				{@html $output}
			</div>
		{:else}
			<pre
				class="h-full w-full overflow-auto p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)]"
			><code>{#if highlightedHtml}{@html highlightedHtml}{:else}{$output}{/if}</code></pre>
		{/if}
	{:else}
		<!-- Empty state -->
		<div class="flex h-full w-full items-center justify-center">
			<p class="text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
				{$t('tool.output_placeholder', 'Output will appear here')}
			</p>
		</div>
	{/if}
</div>

<style>
	.output-html-preview {
		height: 100%;
		width: 100%;
		overflow: auto;
		padding: var(--space-4);
		background: var(--bg-base);
		color: var(--text-primary);
		font-family: var(--font-ui);
	}

	.output-html-preview :global(*) {
		max-width: 100%;
	}
</style>
