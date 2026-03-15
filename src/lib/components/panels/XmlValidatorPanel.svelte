<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import { xmlError } from '$stores/xml.store';
	import { input, initInput } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$lib/stores/language.js';
	import { formatXML, parseXML } from '$engines/xml/index.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import { fetchRemoteText } from '$lib/utils/url-loader.js';
	import {
		CheckCircle,
		AlertTriangle,
		ChevronRight,
		Wand2,
		Eraser,
		Link2,
		X
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
	let showLoadUrl = $state(false);
	let loadUrlValue = $state('');
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');

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
			addToast('success', $t('ui.toast.format_success', 'Formatted successfully'));
		} else {
			addToast('error', result.error.plainLanguageExplanation ?? result.error.message);
		}
	}

	function clearInputValue(): void {
		if ($input.length > 1000) {
			confirmTitle = $t('ui.confirm.clear', { language: 'XML' }, 'Clear the current XML input?');
			confirmMessage = $t('ui.confirm.clear_description', 'This action cannot be undone.');
			confirmModalOpen = true;
			return;
		}

		doClearInput();
	}

	function doClearInput(): void {
		input.set('');
		showLoadUrl = false;
		loadUrlValue = '';
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
	}

	async function loadUrl(): Promise<void> {
		const url = loadUrlValue.trim();
		if (!url) return;

		try {
			const text = await fetchRemoteText(url);
			const result = parseXML(text);
			if (!result.success) {
				throw new Error('Response does not look like XML');
			}
			input.set(text);
			showLoadUrl = false;
			loadUrlValue = '';
			addToast('success', $t('ui.toast.url_loaded', 'Loaded from URL'));
		} catch {
			addToast('error', $t('ui.toast.url_error', 'Could not fetch — try pasting directly'));
		}
	}

</script>

<div class="validator-shell" role="region" aria-label={$t('ui.aria.xml_validator', 'XML validator')}>
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="xml"
			locale={$page.params.lang || 'en'}
		/>
	{/if}
	<div class="validator-layout">
		<div class="validator-editor">
			<div class="validator-editor-toolbar">
				<div class="validator-editor-toolbar__group">
					<div class="relative">
						<button type="button" class="validator-btn" onclick={() => (showLoadUrl = !showLoadUrl)}>
							<Link2 size={13} />
							{$t('ui.actions.load_url', 'Load URL')}
						</button>
						{#if showLoadUrl}
							<div class="absolute left-0 top-[calc(100%+6px)] z-[var(--z-dropdown)] flex w-[min(320px,80vw)] flex-col gap-[var(--space-2)] rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-elevated)] p-[var(--space-2)] shadow-[var(--shadow-md)]">
								<input
									bind:value={loadUrlValue}
									type="url"
									class="h-[32px] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[12px] text-[var(--text-primary)] outline-none"
									placeholder="https://example.com/feed.xml"
								/>
								<div class="flex justify-end gap-[var(--space-2)]">
									<button type="button" class="validator-btn" onclick={() => (showLoadUrl = false)}>
										<X size={13} />
										{$t('ui.actions.close', 'Close')}
									</button>
									<button type="button" class="validator-btn" onclick={loadUrl}>
										<Link2 size={13} />
										{$t('ui.actions.fetch', 'Fetch')}
									</button>
								</div>
							</div>
						{/if}
					</div>
					{#if !isEmpty}
						<button type="button" class="validator-btn" onclick={formatInPlace}>
							<Wand2 size={13} />
							{$t('ui.actions.format', 'Format')}
						</button>
						<button type="button" class="validator-btn" onclick={clearInputValue}>
							<Eraser size={13} />
							{$t('ui.actions.clear', 'Clear')}
						</button>
					{/if}
				</div>
				<div class="validator-editor-toolbar__group">
					{#if isValid}
						<span class="validator-status validator-status--valid">
							<CheckCircle size={13} />
							{$t('ui.validator.well_formed', 'Well-formed')}
						</span>
					{:else if errorSummary}
						<span class="validator-status validator-status--invalid">
							<AlertTriangle size={13} />
							{$t('ui.validator.invalid_xml', 'Invalid XML')}
						</span>
					{/if}
				</div>
			</div>

			<div class="validator-editor-body">
				{#if MonacoEditor}
					<MonacoEditor bind:this={monacoEditorRef} language="xml" wordWrap={true} />
				{:else}
					<div class="validator-loading">{$t('ui.validator.loading_editor', 'Loading editor…')}</div>
				{/if}
			</div>
		</div>

		<div class="validator-panel">
			{#if isEmpty}
				<div class="validator-empty">
					<p>{$t('ui.validator.xml_paste_hint', 'Paste or type XML to validate it.')}</p>
					<p class="validator-empty__hint">{$t('ui.validator.xml_validation_desc', 'Validates well-formedness: unclosed tags, mismatched elements, invalid characters, and more.')}</p>
				</div>
			{:else if isValid}
				<div class="validator-success">
					<CheckCircle size={32} />
					<p class="validator-success__title">{$t('ui.validator.xml_success_title', 'Well-formed XML')}</p>
					<p class="validator-success__desc">{$t('ui.validator.xml_success_desc', 'No syntax errors detected. The document is well-formed and can be parsed by any XML processor.')}</p>
				</div>
			{:else if errorSummary}
				<div class="validator-errors">
					<div class="validator-errors__header">
						<AlertTriangle size={14} />
						<span>{$t('ui.validator.error_count', { count: 1 }, '1 error found')}</span>
					</div>
					<button
						type="button"
						class="validator-error-item"
						onclick={navigateToError}
					>
						<div class="validator-error-item__meta">
							{#if errorSummary.line != null}
								<span class="validator-error-item__loc">
									{($t as any)('ui.validator.line_col_label', 'Line {line}, column {column}', { line: errorSummary.line, column: errorSummary.column })}
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

<ConfirmModal
	bind:open={confirmModalOpen}
	title={confirmTitle}
	message={confirmMessage}
	onConfirm={doClearInput}
	onCancel={() => {}}
/>

<style>
	.validator-shell {
		display: flex;
		flex-direction: column;
		height: 100%;
		background: var(--bg-base);
		overflow: hidden;
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
