<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import type { ToolDefinition } from '$registry/types.js';
	import { xmlError } from '$stores/xml.store';
	import { input, initInput } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$lib/stores/language.js';
	import { formatXML } from '$engines/xml/index.js';
	import {
		CheckCircle,
		AlertTriangle,
		ChevronRight,
		Wand2
	} from 'lucide-svelte';

	let {
		toolSlug,
		workspaceTools = []
	}: {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	} = $props();

	let MonacoEditor: typeof import('$components/editor/MonacoEditor.svelte').default | undefined =
		$state(undefined);
	let monacoEditorRef: import('$components/editor/MonacoEditor.svelte').default | undefined =
		$state(undefined);
	let initializedToolSlug = $state('');

	let isValid = $derived($input.trim().length > 0 && !$xmlError);
	let isEmpty = $derived(!$input.trim());

	let errorSummary = $derived.by(() => {
		if (isEmpty) return null;
		if (!$xmlError) return null;
		return $xmlError;
	});

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
		void loadMonacoComponent();
	});

	onDestroy(() => {
		// cleanup if needed
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	$effect(() => {
		const err = $xmlError;
		if (!monacoEditorRef) return;
		if (err && err.line != null) {
			monacoEditorRef.setErrorMarkers([
				{
					line: err.line,
					column: err.column ?? 1,
					message: err.plainLanguageExplanation ?? err.message
				}
			]);
		} else {
			monacoEditorRef.setErrorMarkers([]);
		}
	});

	async function loadMonacoComponent(): Promise<void> {
		const mod = await import('$components/editor/MonacoEditor.svelte');
		MonacoEditor = mod.default;
	}

	function navigateToError(): void {
		if (!$xmlError?.line || !monacoEditorRef) return;
		monacoEditorRef.revealLine($xmlError.line);
	}

	function formatInPlace(): void {
		const value = $input;
		if (!value.trim()) return;
		const result = formatXML(value, { indent: 2 });
		if (result.success) {
			input.set(result.output);
			addToast('success', 'XML formatted');
		} else {
			addToast('error', result.error.plainLanguageExplanation ?? result.error.message);
		}
	}

	function getWorkspaceLabel(tool: ToolDefinition): string {
		switch (tool.slug) {
			case 'formatter': return $t('ui.actions.format', 'Format');
			case 'validator': return $t('ui.actions.validate', 'Validate');
			case 'minifier': return $t('ui.actions.minify', 'Minify');
			case 'to-json': return $t('ui.convert.to_json', '→ JSON');
			case 'to-yaml': return $t('ui.convert.to_yaml', '→ YAML');
			case 'to-csv': return $t('ui.convert.to_csv', '→ CSV');
			case 'xpath': return $t('ui.query.xpath', 'XPath');
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

<div class="validator-shell" role="region" aria-label="XML validator">
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

	<div class="validator-layout">
		<div class="validator-editor">
			<div class="validator-editor-toolbar">
				<div class="validator-editor-toolbar__group">
					{#if !isEmpty}
						<button type="button" class="validator-btn" onclick={formatInPlace}>
							<Wand2 size={13} />
							Format
						</button>
					{/if}
				</div>
				<div class="validator-editor-toolbar__group">
					{#if isValid}
						<span class="validator-status validator-status--valid">
							<CheckCircle size={13} />
							Well-formed
						</span>
					{:else if errorSummary}
						<span class="validator-status validator-status--invalid">
							<AlertTriangle size={13} />
							Invalid XML
						</span>
					{/if}
				</div>
			</div>

			<div class="validator-editor-body">
				{#if MonacoEditor}
					<MonacoEditor bind:this={monacoEditorRef} language="xml" wordWrap={true} />
				{:else}
					<div class="validator-loading">Loading editor…</div>
				{/if}
			</div>
		</div>

		<div class="validator-panel">
			{#if isEmpty}
				<div class="validator-empty">
					<p>Paste or type XML to validate it.</p>
					<p class="validator-empty__hint">Validates well-formedness: unclosed tags, mismatched elements, invalid characters, and more.</p>
				</div>
			{:else if isValid}
				<div class="validator-success">
					<CheckCircle size={32} />
					<p class="validator-success__title">Well-formed XML</p>
					<p class="validator-success__desc">No syntax errors detected. The document is well-formed and can be parsed by any XML processor.</p>
				</div>
			{:else if errorSummary}
				<div class="validator-errors">
					<div class="validator-errors__header">
						<AlertTriangle size={14} />
						<span>1 error found</span>
					</div>
					<button
						type="button"
						class="validator-error-item"
						onclick={navigateToError}
					>
						<div class="validator-error-item__meta">
							{#if errorSummary.line != null}
								<span class="validator-error-item__loc">
									Line {errorSummary.line}{errorSummary.column != null ? `, Col ${errorSummary.column}` : ''}
								</span>
							{/if}
						</div>
						<div class="validator-error-item__body">
							<p class="validator-error-item__plain">
								{errorSummary.plainLanguageExplanation ?? errorSummary.message}
							</p>
							{#if errorSummary.plainLanguageExplanation && errorSummary.plainLanguageExplanation !== errorSummary.message}
								<p class="validator-error-item__raw">{errorSummary.message}</p>
							{/if}
						</div>
						<ChevronRight size={14} class="validator-error-item__arrow" />
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.validator-shell {
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
		flex-shrink: 0;
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

	.validator-layout {
		display: flex;
		flex: 1;
		overflow: hidden;
		min-height: 0;
	}

	.validator-editor {
		flex: 1;
		display: flex;
		flex-direction: column;
		border-right: 1px solid var(--border-subtle);
		min-width: 0;
	}

	.validator-editor-toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		flex-shrink: 0;
		height: 44px;
	}

	.validator-editor-toolbar__group {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.validator-editor-body {
		flex: 1;
		overflow: hidden;
		position: relative;
	}

	.validator-btn {
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

	.validator-btn:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.validator-status {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 500;
	}

	.validator-status--valid {
		color: var(--success);
	}

	.validator-status--invalid {
		color: var(--error);
	}

	.validator-loading {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 13px;
	}

	.validator-panel {
		width: 320px;
		flex-shrink: 0;
		overflow-y: auto;
		background: var(--bg-surface);
		display: flex;
		flex-direction: column;
	}

	.validator-empty {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-6) var(--space-4);
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 13px;
	}

	.validator-empty__hint {
		font-size: 12px;
		line-height: 1.5;
	}

	.validator-success {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-3);
		padding: var(--space-8) var(--space-4);
		text-align: center;
		color: var(--success);
		flex: 1;
	}

	.validator-success__title {
		font-family: var(--font-ui);
		font-size: 15px;
		font-weight: 600;
		margin: 0;
	}

	.validator-success__desc {
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-muted);
		line-height: 1.5;
		margin: 0;
	}

	.validator-errors {
		display: flex;
		flex-direction: column;
		padding: var(--space-3);
		gap: var(--space-2);
	}

	.validator-errors__header {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		color: var(--error);
		padding-bottom: var(--space-2);
		border-bottom: 1px solid var(--border-subtle);
	}

	.validator-error-item {
		display: flex;
		align-items: flex-start;
		gap: var(--space-2);
		width: 100%;
		padding: var(--space-3);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-lg);
		background: var(--bg-elevated);
		text-align: left;
		cursor: pointer;
	}

	.validator-error-item:hover {
		background: var(--bg-hover);
		border-color: var(--error);
	}

	.validator-error-item__meta {
		display: flex;
		flex-direction: column;
		gap: 2px;
		flex-shrink: 0;
	}

	.validator-error-item__loc {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--error);
		font-weight: 600;
	}

	.validator-error-item__body {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.validator-error-item__plain {
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-primary);
		line-height: 1.4;
		margin: 0;
	}

	.validator-error-item__raw {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-muted);
		line-height: 1.4;
		margin: 0;
	}

	:global(.validator-error-item__arrow) {
		flex-shrink: 0;
		color: var(--text-muted);
		margin-top: 2px;
	}

	@media (max-width: 767px) {
		.validator-layout {
			flex-direction: column;
		}

		.validator-editor {
			border-right: none;
			border-bottom: 1px solid var(--border-subtle);
			min-height: 300px;
		}

		.validator-panel {
			width: 100%;
		}
	}
</style>
