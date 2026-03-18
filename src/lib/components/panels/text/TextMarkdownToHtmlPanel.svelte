<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import {
		convertMarkdownToHtml,
		type MarkdownToHtmlOptions,
		type MarkdownToHtmlResult,
		type MarkdownToHtmlStats,
		type MarkdownToHtmlWarningCode
	} from '$engines/text/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Download, Eraser, Eye, Code2, Settings } from 'lucide-svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';

	type ViewMode = 'preview' | 'html';

	const DEFAULT_STATS: MarkdownToHtmlStats = {
		headings: 0,
		tables: 0,
		codeBlocks: 0,
		links: 0,
		images: 0,
		listItems: 0,
		blockquotes: 0,
		words: 0,
		characters: 0
	};

	const DEFAULT_RESULT: MarkdownToHtmlResult = {
		html: '',
		stats: DEFAULT_STATS,
		warnings: []
	};

	let {
		toolSlug,
		workspaceTools = []
	}: {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	} = $props();

	let initializedToolSlug = $state('');
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');
	let showOptions = $state(false);
	let viewMode = $state<ViewMode>('preview');
	let isConverting = $state(false);
	let conversionError = $state('');
	let conversionResult = $state<MarkdownToHtmlResult>(DEFAULT_RESULT);
	let outputHighlightedHtml = $state('');
	let outputHighlighter: typeof import('highlight.js').default | undefined = $state(undefined);
	let convertRunId = 0;

	let options = $state<MarkdownToHtmlOptions>({
		gfm: true,
		breaks: false,
		highlightCode: true,
		allowRawHtml: false,
		openLinksInNewTab: true
	});

	const warningLabelKeyMap: Record<MarkdownToHtmlWarningCode, string> = {
		unsafe_link_removed: 'ui.markdown_to_html.warning.unsafe_link_removed',
		unsafe_image_removed: 'ui.markdown_to_html.warning.unsafe_image_removed',
		raw_html_escaped: 'ui.markdown_to_html.warning.raw_html_escaped'
	};

	let inputLineCount = $derived($input.length === 0 ? 0 : $input.split(/\r?\n/).length);
	let inputStatusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${inputLineCount.toLocaleString()} ${$t('ui.text_reverser.lines_count', 'lines')}`
	);

	let outputByteSize = $derived(new TextEncoder().encode(conversionResult.html).length);
	let outputLineCount = $derived(
		conversionResult.html.length === 0 ? 0 : conversionResult.html.split(/\r?\n/).length
	);
	let outputStatusLine = $derived(
		`${formatByteSize(outputByteSize)} · ${outputLineCount.toLocaleString()} ${$t('ui.text_reverser.lines_count', 'lines')}`
	);

	let statsCards = $derived([
		{ key: 'headings', label: $t('ui.markdown_to_html.stats.headings', 'Headings') },
		{ key: 'tables', label: $t('ui.markdown_to_html.stats.tables', 'Tables') },
		{ key: 'codeBlocks', label: $t('ui.markdown_to_html.stats.code_blocks', 'Code blocks') },
		{ key: 'links', label: $t('ui.markdown_to_html.stats.links', 'Links') },
		{ key: 'images', label: $t('ui.markdown_to_html.stats.images', 'Images') },
		{ key: 'words', label: $t('ui.markdown_to_html.stats.words', 'Words') }
	] as const);

	let warningMessages = $derived(
		conversionResult.warnings.map((warningCode) =>
			$t(warningLabelKeyMap[warningCode], warningCode)
		)
	);

	let previewDocument = $derived(buildPreviewDocument(conversionResult.html));

	onMount(async () => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;

		const mod = await import('highlight.js/lib/core');
		outputHighlighter = mod.default;

		const xmlMod = await import('highlight.js/lib/languages/xml');
		outputHighlighter.registerLanguage('xml', xmlMod.default);
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	$effect(() => {
		const source = $input;
		const normalizedOptions: MarkdownToHtmlOptions = {
			gfm: options.gfm,
			breaks: options.breaks,
			highlightCode: options.highlightCode,
			allowRawHtml: options.allowRawHtml,
			openLinksInNewTab: options.openLinksInNewTab
		};
		const runId = ++convertRunId;

		isConverting = true;
		conversionError = '';

		void convertMarkdownToHtml(source, normalizedOptions)
			.then((result) => {
				if (runId !== convertRunId) return;
				conversionResult = result;
			})
			.catch(() => {
				if (runId !== convertRunId) return;
				conversionResult = DEFAULT_RESULT;
				conversionError = $t(
					'ui.markdown_to_html.error.conversion_failed',
					'Markdown conversion failed. Please check your input and try again.'
				);
			})
			.finally(() => {
				if (runId !== convertRunId) return;
				isConverting = false;
			});
	});

	$effect(() => {
		if (!outputHighlighter || !conversionResult.html) {
			outputHighlightedHtml = '';
			return;
		}

		try {
			outputHighlightedHtml = outputHighlighter.highlight(conversionResult.html, {
				language: 'xml',
				ignoreIllegals: true
			}).value;
		} catch {
			outputHighlightedHtml = escapeHtml(conversionResult.html);
		}
	});

	function buildPreviewDocument(html: string): string {
		const styles = `
			:root {
				color-scheme: light dark;
				font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
			}
			body {
				margin: 0;
				padding: 16px;
				line-height: 1.6;
				font-size: 14px;
			}
			h1,h2,h3,h4,h5,h6 { margin-top: 1.5em; margin-bottom: 0.5em; line-height: 1.3; }
			p,ul,ol,blockquote,pre,table { margin: 0 0 1rem; }
			a { text-decoration: underline; }
			pre {
				overflow-x: auto;
				padding: 12px;
				border-radius: 8px;
			}
			code {
				font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
				font-size: 12px;
			}
			:not(pre) > code {
				padding: 0.15rem 0.35rem;
				border-radius: 4px;
			}
			table {
				width: 100%;
				border-collapse: collapse;
			}
			th, td {
				border: 1px solid currentColor;
				padding: 8px;
				text-align: left;
			}
			blockquote {
				padding: 0.5rem 0.75rem;
				border-left: 3px solid currentColor;
			}
			img {
				max-width: 100%;
				height: auto;
			}
		`;

		return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>${styles}</style></head><body>${html}</body></html>`;
	}

	function escapeHtml(str: string): string {
		return str
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');
	}

	function toggleOptionsPanel(): void {
		showOptions = !showOptions;
	}

	function switchToPreview(): void {
		viewMode = 'preview';
	}

	function switchToHtml(): void {
		viewMode = 'html';
	}

	function clearInputValue(): void {
		confirmTitle = $t(
			'ui.confirm.clear',
			{ language: $t('category.text.display_name', 'Text') },
			'Clear the current text input?'
		);
		confirmMessage = $t('ui.confirm.clear_description', 'This action cannot be undone.');
		confirmModalOpen = true;
	}

	function doClearInput(): void {
		input.set('');
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
	}

	async function copyHtmlOutput(): Promise<void> {
		if (!conversionResult.html) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}

		try {
			await navigator.clipboard.writeText(conversionResult.html);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	function downloadHtmlOutput(): void {
		if (!conversionResult.html) {
			addToast('info', $t('ui.markdown_to_html.toast.no_html_output', 'No HTML output to download'));
			return;
		}

		const blob = new Blob([conversionResult.html], { type: 'text/html;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `markdown-output-${Date.now()}.html`;
		link.click();
		URL.revokeObjectURL(url);

		addToast('success', $t('ui.toast.download_success', 'Downloaded successfully'));
	}
</script>

<div class="flex h-full w-full flex-col">
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="text"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
		<div class="grid grid-cols-2 gap-[var(--space-2)] sm:grid-cols-3 lg:grid-cols-6">
			{#each statsCards as card}
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{card.label}</div>
					<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
						{conversionResult.stats[card.key].toLocaleString()}
					</div>
				</div>
			{/each}
		</div>

		{#if warningMessages.length > 0}
			<div class="mt-[var(--space-2)] flex flex-wrap gap-[var(--space-2)]">
				{#each warningMessages as warningMessage}
					<span class="rounded-[var(--radius-full)] border border-[var(--color-warning)] bg-[var(--bg-base)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						{warningMessage}
					</span>
				{/each}
			</div>
		{/if}
	</div>

	<div class="grid h-full min-h-0 grid-cols-1 lg:grid-cols-2">
		<div class="flex min-h-0 flex-col border-b border-[var(--border-default)] bg-[var(--bg-base)] lg:border-b-0 lg:border-r">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{inputStatusLine}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					<button
						type="button"
						onclick={toggleOptionsPanel}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Settings size={14} />
						{$t('ui.actions.options', 'Options')}
					</button>
					<button
						type="button"
						onclick={clearInputValue}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Eraser size={14} />
						{$t('ui.actions.clear', 'Clear')}
					</button>
				</div>
			</div>

			{#if showOptions}
				<div class="grid grid-cols-1 gap-[var(--space-2)] border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)] sm:grid-cols-2">
					<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
						<input
							type="checkbox"
							bind:checked={options.gfm}
							class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)]"
						/>
						{$t('ui.markdown_to_html.option.gfm', 'Enable GFM tables and task lists')}
					</label>
					<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
						<input
							type="checkbox"
							bind:checked={options.breaks}
							class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)]"
						/>
						{$t('ui.markdown_to_html.option.breaks', 'Convert single line breaks to <br>')}
					</label>
					<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
						<input
							type="checkbox"
							bind:checked={options.highlightCode}
							class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)]"
						/>
						{$t('ui.markdown_to_html.option.highlight_code', 'Syntax highlight fenced code blocks')}
					</label>
					<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
						<input
							type="checkbox"
							bind:checked={options.openLinksInNewTab}
							class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)]"
						/>
						{$t('ui.markdown_to_html.option.open_links_in_new_tab', 'Open links in new tab')}
					</label>
					<label class="col-span-1 flex items-center gap-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] sm:col-span-2">
						<input
							type="checkbox"
							bind:checked={options.allowRawHtml}
							class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)]"
						/>
						{$t('ui.markdown_to_html.option.allow_raw_html', 'Allow raw HTML blocks (advanced)')}
					</label>
				</div>
			{/if}

			<textarea
				bind:value={$input}
				class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t('ui.markdown_to_html.placeholder', 'Type or paste Markdown here...')}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<div class="flex items-center gap-[var(--space-2)]">
					<button
						type="button"
						onclick={switchToPreview}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] px-[var(--space-2)] py-[var(--space-1)] {viewMode === 'preview' ? 'bg-[var(--color-primary)] text-white' : 'border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]'}"
					>
						<Eye size={14} />
						{$t('ui.markdown_to_html.view.preview', 'Preview')}
					</button>
					<button
						type="button"
						onclick={switchToHtml}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] px-[var(--space-2)] py-[var(--space-1)] {viewMode === 'html' ? 'bg-[var(--color-primary)] text-white' : 'border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]'}"
					>
						<Code2 size={14} />
						{$t('ui.markdown_to_html.view.html', 'HTML')}
					</button>
				</div>

				<div class="flex items-center gap-[var(--space-2)]">
					<span>{outputStatusLine}</span>
					<button
						type="button"
						onclick={copyHtmlOutput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Copy size={12} />
						{$t('ui.actions.copy', 'Copy')}
					</button>
					<button
						type="button"
						onclick={downloadHtmlOutput}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Download size={12} />
						{$t('ui.actions.download', 'Download')}
					</button>
				</div>
			</div>

			<div class="min-h-0 flex-1">
				{#if conversionError}
					<div class="flex h-full items-center justify-center p-[var(--space-4)] text-center text-[length:var(--text-sm)] text-[var(--color-danger)]">
						{conversionError}
					</div>
				{:else if isConverting}
					<div class="flex h-full items-center justify-center p-[var(--space-4)] text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
						{$t('ui.markdown_to_html.status.converting', 'Converting Markdown...')}
					</div>
				{:else if viewMode === 'preview'}
					{#if conversionResult.html}
						<iframe
							title={$t('ui.markdown_to_html.preview_aria', 'Markdown HTML live preview')}
							sandbox="allow-popups allow-popups-to-escape-sandbox"
							srcdoc={previewDocument}
							class="h-full w-full border-0"
						></iframe>
					{:else}
						<div class="flex h-full items-center justify-center p-[var(--space-4)] text-center text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
							{$t('ui.markdown_to_html.empty_preview', 'Live preview appears here once you enter Markdown.')}
						</div>
					{/if}
				{:else}
					<div class="h-full overflow-auto p-[var(--space-4)]">
						{#if conversionResult.html}
							<pre class="whitespace-pre-wrap break-all rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)]"><code class="hljs language-xml">{@html outputHighlightedHtml || escapeHtml(conversionResult.html)}</code></pre>
						{:else}
							<div class="flex h-full items-center justify-center text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
								{$t('ui.markdown_to_html.empty_html', 'Generated HTML output will appear here.')}
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<ConfirmModal
	bind:open={confirmModalOpen}
	title={confirmTitle}
	message={confirmMessage}
	onConfirm={doClearInput}
	onCancel={() => {}}
/>
