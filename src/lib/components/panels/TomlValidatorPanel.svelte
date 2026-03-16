<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ValidationResult } from '$engines/toml/toml.engine.js';
	import type { ToolDefinition } from '$registry/types.js';
	import { input, initInput } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$lib/stores/language.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import { fetchRemoteText } from '$lib/utils/url-loader.js';
	import { CheckCircle, AlertTriangle, ChevronRight, Wand2, Eraser, Link2, X } from 'lucide-svelte';

	type ErrorLocation = {
		line: number;
		column: number | null;
	};

	type TomlErrorSummary = {
		message: string;
		plainLanguageExplanation: string;
		line: number | null;
		column: number | null;
	};

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
	let validationResult = $state<ValidationResult | null>(null);
	let validationPending = $state(false);
	let validationToken = 0;
	let showLoadUrl = $state(false);
	let loadUrlValue = $state('');
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');

	function extractErrorLocation(message: string): ErrorLocation | null {
		const lineColumnMatch = message.match(/line\s+(\d+)(?:[^\d]+column\s+(\d+))?/i);
		if (lineColumnMatch) {
			return {
				line: Number(lineColumnMatch[1]),
				column: lineColumnMatch[2] ? Number(lineColumnMatch[2]) : null
			};
		}

		const colonMatch = message.match(/\((\d+):(\d+)\)/);
		if (colonMatch) {
			return {
				line: Number(colonMatch[1]),
				column: Number(colonMatch[2])
			};
		}

		return null;
	}

	let isEmpty = $derived(!$input.trim());
	let isValid = $derived(!isEmpty && validationResult?.valid === true);
	let errorLocation = $derived.by(() => {
		if (validationResult?.valid !== false || !validationResult.error) return null;
		return extractErrorLocation(validationResult.error);
	});
	let errorSummary = $derived.by<TomlErrorSummary | null>(() => {
		if (isEmpty || validationResult?.valid !== false) return null;
		const message =
			validationResult.error ?? $t('ui.validity.invalid', { language: 'TOML' }, 'Invalid TOML');
		return {
			message,
			plainLanguageExplanation: message,
			line: errorLocation?.line ?? null,
			column: errorLocation?.column ?? null
		};
	});

	onMount(() => {
		initInput('toml-workspace');
		initializedToolSlug = 'toml-workspace';
		void loadMonacoComponent();
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === 'toml-workspace') return;
		initInput('toml-workspace');
		initializedToolSlug = 'toml-workspace';
	});

	$effect(() => {
		const value = $input;
		if (!value.trim()) {
			validationResult = null;
			validationPending = false;
			return;
		}

		const nextToken = ++validationToken;
		validationPending = true;
		void import('$engines/toml/toml.engine.js')
			.then(({ validate }) => validate(value))
			.then((nextResult) => {
				if (nextToken !== validationToken) return;
				validationResult = nextResult;
				validationPending = false;
			});
	});

	$effect(() => {
		if (!monacoEditorRef) return;
		if (errorSummary?.line != null) {
			monacoEditorRef.setErrorMarkers([
				{
					line: errorSummary.line,
					column: errorSummary.column ?? 1,
					message: errorSummary.plainLanguageExplanation,
					severity: 'error'
				}
			]);
			return;
		}
		monacoEditorRef.setErrorMarkers([]);
	});

	async function loadMonacoComponent(): Promise<void> {
		const mod = await import('$components/editor/MonacoEditor.svelte');
		MonacoEditor = mod.default;
	}

	function navigateToError(): void {
		if (!errorSummary?.line || !monacoEditorRef) return;
		monacoEditorRef.revealLine(errorSummary.line);
	}

	async function formatInPlace(): Promise<void> {
		const value = $input;
		if (!value.trim()) return;
		const { format, validate } = await import('$engines/toml/toml.engine.js');
		const result = await validate(value);
		if (!result.valid) {
			addToast(
				'error',
				result.error ?? $t('ui.validity.invalid', { language: 'TOML' }, 'Invalid TOML')
			);
			return;
		}
		input.set(await format(value));
		addToast('success', $t('ui.toast.format_success', 'Formatted successfully'));
	}

	function clearInputValue(): void {
		if ($input.length > 1000) {
			confirmTitle = $t('ui.confirm.clear', { language: 'TOML' }, 'Clear the current TOML input?');
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
			const { validate } = await import('$engines/toml/toml.engine.js');
			const result = await validate(text);
			if (!result.valid) {
				throw new Error('Response does not look like TOML');
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

<div class="validator-shell" role="region" aria-label={$t('ui.aria.toml_validator', 'TOML validator')}>
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="toml"
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
									placeholder="https://example.com/pyproject.toml"
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
							{$t('ui.validity.valid', { language: 'TOML' }, 'Valid TOML')}
						</span>
					{:else if errorSummary}
						<span class="validator-status validator-status--invalid">
							<AlertTriangle size={13} />
							{$t('ui.validity.invalid', { language: 'TOML' }, 'Invalid TOML')}
						</span>
					{:else if validationPending}
						<span class="validator-status">{$t('ui.status.processing', 'Processing…')}</span>
					{/if}
				</div>
			</div>

			<div class="validator-editor-body">
				{#if MonacoEditor}
					<MonacoEditor bind:this={monacoEditorRef} language="toml" wordWrap={true} />
				{:else}
					<div class="validator-loading">{$t('ui.validator.loading_editor', 'Loading editor…')}</div>
				{/if}
			</div>
		</div>

		<div class="validator-panel">
			{#if isEmpty}
				<div class="validator-empty">
					<p>{$t('ui.paste_language_here', { language: 'TOML' }, 'Paste TOML here…')}</p>
					<p class="validator-empty__hint">
						{$t(
							'tool.toml-validator.description',
							'Validate TOML configuration files locally in your browser. Catch syntax errors before saving or converting.'
						)}
					</p>
				</div>
			{:else if isValid}
				<div class="validator-success">
					<CheckCircle size={32} />
					<p class="validator-success__title">
						{$t('ui.validity.valid', { language: 'TOML' }, 'Valid TOML')}
					</p>
					<p class="validator-success__desc">
						{$t('tool.toml-validator.tagline', 'Validate TOML syntax and catch parse errors')}
					</p>
				</div>
			{:else if errorSummary}
				<div class="validator-errors">
					<div class="validator-errors__header">
						<AlertTriangle size={14} />
						<span>{$t('ui.validator.error_count', { count: 1 }, '1 error found')}</span>
					</div>
					<button type="button" class="validator-error-item" onclick={navigateToError}>
						<div class="validator-error-item__meta">
							{#if errorSummary.line != null}
								<span class="validator-error-item__loc">
									{($t as any)('ui.validator.line_col_label', 'Line {line}, column {column}', {
										line: errorSummary.line,
										column: errorSummary.column ?? 1
									})}
								</span>
							{/if}
						</div>
						<div class="validator-error-item__body">
							<p class="validator-error-item__plain">{errorSummary.plainLanguageExplanation}</p>
							{#if errorSummary.plainLanguageExplanation !== errorSummary.message}
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
