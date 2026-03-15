<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import { csvError, csvProcessingOptions, csvStats } from '$stores/csv.store';
	import { format as formatCSV } from '$engines/csv/csv.engine.js';
	import {
		validateCsvSchema,
		type CsvSchemaValidationResult
	} from '$engines/csv/schemaValidator.js';
	import { parseCSV } from '$engines/csv/index.js';
	import { input, initInput } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$lib/stores/language.js';
	import { localizeCsvEngineError } from '$lib/utils/csv-errors.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import CsvOptionsToolbar from '$components/panels/CsvOptionsToolbar.svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import { fetchRemoteText } from '$lib/utils/url-loader.js';
	import { CheckCircle, AlertTriangle, ChevronRight, Wand2, Eraser, Link2, X } from 'lucide-svelte';

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
	let validationMode = $state<'syntax' | 'schema'>('syntax');
	let schemaInput = $state(
		'{\n  "type": "object",\n  "required": ["id", "status"],\n  "properties": {\n    "id": { "type": "number" },\n    "status": { "enum": ["active", "inactive"] }\n  }\n}'
	);
	let schemaValidationResult = $state<CsvSchemaValidationResult | null>(null);
	let schemaValidationToken = 0;
	let showLoadUrl = $state(false);
	let loadUrlValue = $state('');
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');

	let isEmpty = $derived(!$input.trim());
	let isValid = $derived($input.trim().length > 0 && !$csvError);
	let errorSummary = $derived($csvError);
	let localizedErrorSummary = $derived.by(() =>
		errorSummary ? localizeCsvEngineError(errorSummary, $t) : ''
	);
	let isSchemaMode = $derived(validationMode === 'schema');
	let statsSummary = $derived.by(() => {
		if (!$csvStats) return '';
		return `${$csvStats.rowCount.toLocaleString()} ${$t('ui.csv.stats.rows', 'rows')} · ${$csvStats.columnCount.toLocaleString()} ${$t('ui.csv.stats.columns', 'columns')}`;
	});
	let schemaIssues = $derived.by(() => {
		if (!schemaValidationResult || !schemaValidationResult.success) return [];
		return schemaValidationResult.issues.map((issue) => ({
			...issue,
			path: issue.instancePath || '/',
			plainLanguageExplanation: issue.columnName
				? `${issue.columnName} ${$t('ui.validator.explanation_must_satisfy', 'must satisfy')} ${issue.keyword}`
				: `${$t('ui.validator.row', 'Row')} ${issue.row} ${$t('ui.validator.explanation_must_satisfy', 'must satisfy')} ${issue.keyword}`
		}));
	});
	let schemaErrorMessage = $derived.by(() => {
		if (!schemaValidationResult || schemaValidationResult.success) return '';
		if (schemaValidationResult.dataError) {
			return localizeCsvEngineError(schemaValidationResult.dataError, $t);
		}
		if (!schemaValidationResult.schemaError) return '';
		if (schemaValidationResult.schemaError instanceof Error) {
			return schemaValidationResult.schemaError.message;
		}
		return schemaValidationResult.schemaError.plainLanguageExplanation ?? schemaValidationResult.schemaError.message;
	});
	let schemaIssueCountLabel = $derived(
		schemaIssues.length > 0
			? `${schemaIssues.length} ${schemaIssues.length === 1 ? $t('ui.validator.issue', 'issue') : $t('ui.validator.issues', 'issues')}`
			: ''
	);
	let isSchemaValidationSuccessful = $derived(
		schemaValidationResult?.success === true && schemaValidationResult.valid
	);
	let statusTone = $derived.by(() => {
		if (isSchemaMode) {
			if (!$input.trim() || !schemaInput.trim()) return 'idle';
			if (schemaValidationResult?.success === true && schemaValidationResult.valid) return 'valid';
			return 'invalid';
		}
		if (isValid) return 'valid';
		if (errorSummary) return 'invalid';
		return 'idle';
	});
	let statusText = $derived.by(() => {
		if (isSchemaMode) {
			if (!$input.trim()) return $t('ui.validator.csv_paste_schema_data', 'Paste CSV to validate');
			if (!schemaInput.trim()) return $t('ui.validator.csv_paste_schema', 'Paste a schema to validate against');
			if (!schemaValidationResult) return $t('ui.validator.csv_validating_schema', 'Validating schema…');
			if (!schemaValidationResult.success) {
				if (schemaValidationResult.dataError) {
					return $t(
						'ui.validator.data_error_pos',
						{
							line: schemaValidationResult.dataError.line ?? 1,
							column: schemaValidationResult.dataError.column ?? 1
						},
						'Data error at line {line}, column {column}'
					);
				}
				return schemaErrorMessage || $t('ui.validator.schema_invalid', 'Schema is invalid');
			}
			if (schemaValidationResult.valid) {
				return $t('ui.validator.csv_matches_schema', 'CSV matches schema');
			}
			const firstIssue = schemaValidationResult.issues[0];
			return firstIssue
				? $t(
						'ui.validator.schema_error_pos',
						{ line: firstIssue.line, column: firstIssue.column },
						'Schema error at line {line}, column {column}'
					)
				: $t('ui.validator.schema_validation_failed', 'Schema validation failed');
		}

		if (isValid) return $t('ui.validity.valid', { language: 'CSV' }, 'Valid CSV');
		if (errorSummary) return $t('ui.validator.invalid_csv', 'Invalid CSV');
		return '';
	});

	onMount(() => {
		initInput('csv-workspace');
		void loadMonacoComponent();
	});

	$effect(() => {
		if (!monacoEditorRef) return;
		if (isSchemaMode) {
			monacoEditorRef.setErrorMarkers(
				schemaIssues.map((issue) => ({
					line: issue.line,
					column: issue.column,
					message: issue.message,
					severity: 'error'
				}))
			);
			return;
		}
		const err = $csvError;
		if (err?.line != null) {
			monacoEditorRef.setErrorMarkers([
				{
					line: err.line,
					column: err.column ?? 1,
					message: localizeCsvEngineError(err, $t),
					severity: 'error'
				}
			]);
			return;
		}
		monacoEditorRef.setErrorMarkers([]);
	});

	$effect(() => {
		if (validationMode !== 'schema') {
			schemaValidationResult = null;
			return;
		}

		if (!$input.trim() || !schemaInput.trim()) {
			schemaValidationResult = null;
			return;
		}

		const nextToken = ++schemaValidationToken;
		void validateCsvSchema($input, schemaInput, $csvProcessingOptions).then((nextResult) => {
			if (nextToken !== schemaValidationToken) return;
			schemaValidationResult = nextResult;
		});
	});

	async function loadMonacoComponent(): Promise<void> {
		const mod = await import('$components/editor/MonacoEditor.svelte');
		MonacoEditor = mod.default;
	}

	function navigateToError(): void {
		if (!$csvError?.line || !monacoEditorRef) return;
		monacoEditorRef.revealLine($csvError.line);
	}

	function navigateToSchemaIssue(line: number): void {
		if (!monacoEditorRef) return;
		monacoEditorRef.revealLine(line);
	}

	async function formatInPlace(): Promise<void> {
		const value = $input;
		if (!value.trim()) return;
		input.set(await formatCSV(value, $csvProcessingOptions));
	}

	function selectSyntaxMode(): void {
		validationMode = 'syntax';
	}

	function selectSchemaMode(): void {
		validationMode = 'schema';
	}

	function handleSchemaInput(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLTextAreaElement)) return;
		schemaInput = target.value;
	}

	function clearInputValue(): void {
		if ($input.length > 1000) {
			confirmTitle = $t('ui.confirm.clear', { language: 'CSV' }, 'Clear the current CSV input?');
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
			const result = await parseCSV(text, {
				delimiter: $csvProcessingOptions.delimiter,
				skipEmptyLines: $csvProcessingOptions.skipEmptyLines,
				trimCells: $csvProcessingOptions.trimCells
			});
			if (!result.success) {
				throw new Error('Response does not look like CSV');
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

<div class="validator-shell" role="region" aria-label={$t('ui.aria.csv_validator', 'CSV validator')}>
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="csv"
			locale={$page.params.lang || 'en'}
		/>
	{/if}
	<CsvOptionsToolbar showQuoteAll={true} />
	<div class="validator-layout">
		<div class="validator-editor">
			<div class="validator-editor-toolbar">
				<div class="validator-editor-toolbar__group">
					<div class="validator-modes" role="tablist" aria-label={$t('ui.validator.mode', 'Validator mode')}>
						<button
							type="button"
							role="tab"
							class="validator-mode-btn"
							class:validator-mode-btn--active={validationMode === 'syntax'}
							aria-selected={validationMode === 'syntax'}
							onclick={selectSyntaxMode}
						>
							{$t('ui.validator.syntax', 'Syntax')}
						</button>
						<button
							type="button"
							role="tab"
							class="validator-mode-btn"
							class:validator-mode-btn--active={validationMode === 'schema'}
							aria-selected={validationMode === 'schema'}
							onclick={selectSchemaMode}
						>
							{$t('ui.validator.schema', 'Schema')}
						</button>
					</div>
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
									placeholder="https://example.com/data.csv"
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
					{#if statusTone === 'valid'}
						<span class="validator-status validator-status--valid">
							<CheckCircle size={13} />
							{statusText}
						</span>
					{:else if statusTone === 'invalid'}
						<span class="validator-status validator-status--invalid">
							<AlertTriangle size={13} />
							{statusText}
						</span>
					{/if}
				</div>
			</div>

			<div class="validator-editor-body">
				{#if MonacoEditor}
					<MonacoEditor bind:this={monacoEditorRef} language="plaintext" wordWrap={true} />
				{:else}
					<div class="validator-loading">{$t('ui.validator.loading_editor', 'Loading editor…')}</div>
				{/if}
			</div>
		</div>

		<div class="validator-panel">
			{#if isSchemaMode}
				<div class="validator-schema">
					<div class="validator-schema__header">
						<strong>{$t('ui.validator.csv_schema_title', 'Schema')}</strong>
						<span>{$t('ui.validator.csv_schema_standard', 'JSON Schema Draft-07+ via AJV')}</span>
					</div>
					<textarea
						value={schemaInput}
						class="validator-schema__input"
						placeholder={$t('ui.validator.csv_paste_schema_placeholder', 'Paste JSON Schema or YAML schema here…')}
						spellcheck="false"
						oninput={handleSchemaInput}
					></textarea>
				</div>
				{#if isEmpty}
					<div class="validator-empty validator-panel-section">
						<p>{$t('ui.validator.csv_paste_schema_data', 'Paste CSV to validate')}</p>
						<p class="validator-empty__hint">
							{$t('ui.validator.csv_schema_validation_desc', 'Validate CSV rows against a browser-side schema. Each parsed row is validated as an object using the current CSV options.')}
						</p>
					</div>
				{:else if errorSummary}
					<div class="validator-errors validator-panel-section">
						<div class="validator-errors__header">
							<AlertTriangle size={14} />
							<span>{$t('ui.validator.error_count.one', '1 error found')}</span>
						</div>
						<button type="button" class="validator-error-item" onclick={navigateToError}>
							<div class="validator-error-item__meta">
								{#if errorSummary.line != null}
									<span class="validator-error-item__loc">
										{$t(
											'ui.validator.line_col_label',
											{ line: errorSummary.line, column: errorSummary.column ?? 1 },
											'Line {line}, column {column}'
										)}
									</span>
								{/if}
							</div>
							<div class="validator-error-item__body">
								<p class="validator-error-item__plain">
									{localizedErrorSummary}
								</p>
							</div>
							<span class="validator-error-item__arrow">
								<ChevronRight size={14} />
							</span>
						</button>
					</div>
				{:else if schemaIssues.length > 0}
					<div class="validator-errors validator-panel-section">
						<div class="validator-errors__header">
							<AlertTriangle size={14} />
							<span>{schemaIssueCountLabel}</span>
						</div>
						{#each schemaIssues as issue}
							<button
								type="button"
								class="validator-error-item"
								onclick={() => navigateToSchemaIssue(issue.line)}
							>
								<div class="validator-error-item__meta">
									<span class="validator-error-item__loc">
										{$t(
											'ui.validator.line_col_label',
											{ line: issue.line, column: issue.column },
											'Line {line}, column {column}'
										)}
									</span>
								</div>
								<div class="validator-error-item__body">
									<p class="validator-error-item__plain">{issue.message}</p>
									<p class="validator-error-item__detail">{issue.plainLanguageExplanation}</p>
									<p class="validator-error-item__path">{issue.path}</p>
								</div>
								<span class="validator-error-item__arrow">
									<ChevronRight size={14} />
								</span>
							</button>
						{/each}
					</div>
				{:else if schemaErrorMessage}
					<div class="validator-empty validator-panel-section">
						<p>{schemaErrorMessage}</p>
					</div>
				{:else if isSchemaValidationSuccessful}
					<div class="validator-success validator-panel-section">
						<CheckCircle size={32} />
						<p class="validator-success__title">
							{$t('ui.validator.csv_matches_schema', 'CSV matches schema')}
						</p>
						<p class="validator-success__desc">
							{$t('ui.validator.csv_matches_current_schema', 'CSV rows match the current schema.')}
						</p>
						{#if statsSummary}
							<p class="validator-success__desc">{statsSummary}</p>
						{/if}
					</div>
				{/if}
			{:else if isEmpty}
				<div class="validator-empty">
					<p>{$t('ui.validator.csv_paste_hint', 'Paste or type CSV to validate it.')}</p>
					<p class="validator-empty__hint">
						{$t('ui.validator.csv_validation_desc', 'Validates delimiter structure, row consistency, and malformed quoting in CSV input.')}
					</p>
				</div>
			{:else if isValid}
				<div class="validator-success">
					<CheckCircle size={32} />
					<p class="validator-success__title">{$t('ui.validator.csv_success_title', 'Valid CSV')}</p>
					<p class="validator-success__desc">
						{$t('ui.validator.csv_success_desc', 'No structural CSV errors were detected. The document can be parsed successfully.')}
					</p>
					{#if statsSummary}
						<p class="validator-success__desc">{statsSummary}</p>
					{/if}
				</div>
			{:else if errorSummary}
				<div class="validator-errors">
					<div class="validator-errors__header">
						<AlertTriangle size={14} />
						<span>{$t('ui.validator.error_count.one', '1 error found')}</span>
					</div>
					<button type="button" class="validator-error-item" onclick={navigateToError}>
						<div class="validator-error-item__meta">
							{#if errorSummary.line != null}
								<span class="validator-error-item__loc">
									{$t(
										'ui.validator.line_col_label',
										{ line: errorSummary.line, column: errorSummary.column ?? 1 },
										'Line {line}, column {column}'
									)}
								</span>
							{/if}
						</div>
						<div class="validator-error-item__body">
							<p class="validator-error-item__plain">
								{localizedErrorSummary}
							</p>
						</div>
						<span class="validator-error-item__arrow">
							<ChevronRight size={14} />
						</span>
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

	.validator-modes {
		display: inline-flex;
		align-items: center;
		padding: 2px;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
	}

	.validator-mode-btn {
		height: 26px;
		padding: 0 var(--space-2);
		border: none;
		border-radius: calc(var(--radius-md) - 2px);
		background: transparent;
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
	}

	.validator-mode-btn--active {
		background: var(--bg-hover);
		color: var(--text-primary);
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
		height: 24px;
		padding: 0 var(--space-2);
		border-radius: var(--radius-full);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
	}

	.validator-status--valid {
		background: color-mix(in srgb, var(--success) 14%, transparent);
		color: var(--success);
	}

	.validator-status--invalid {
		background: color-mix(in srgb, var(--error) 14%, transparent);
		color: var(--error);
	}

	.validator-loading,
	.validator-empty,
	.validator-success {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding: var(--space-8);
		text-align: center;
		color: var(--text-secondary);
	}

	.validator-empty__hint,
	.validator-success__desc {
		max-width: 34rem;
		color: var(--text-muted);
	}

	.validator-success {
		gap: var(--space-3);
		color: var(--success);
	}

	.validator-success__title {
		margin: 0;
		font-size: var(--text-lg);
		font-weight: var(--weight-semibold);
		color: var(--text-primary);
	}

	.validator-success__desc,
	.validator-empty p {
		margin: 0;
	}

	.validator-panel-section {
		flex: 1;
	}

	.validator-panel {
		width: min(32rem, 38%);
		min-width: 18rem;
		display: flex;
		flex-direction: column;
		background: var(--bg-surface);
	}

	.validator-errors {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: var(--space-4);
	}

	.validator-schema {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-4);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-base);
	}

	.validator-schema__header {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-muted);
	}

	.validator-schema__input {
		min-height: 10rem;
		resize: vertical;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		padding: var(--space-3);
		font-family: var(--font-mono);
		font-size: 12px;
		color: var(--text-primary);
	}

	.validator-errors__header {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		color: var(--error);
	}

	.validator-error-item {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: var(--space-3);
		width: 100%;
		padding: var(--space-3);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-lg);
		background: var(--bg-base);
		text-align: left;
		cursor: pointer;
	}

	.validator-error-item:hover {
		border-color: var(--border-focus);
	}

	.validator-error-item__meta {
		grid-column: 1 / -1;
	}

	.validator-error-item__loc {
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		color: var(--text-muted);
	}

	.validator-error-item__body {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.validator-error-item__plain {
		margin: 0;
		color: var(--text-primary);
	}

	.validator-error-item__detail,
	.validator-error-item__path {
		margin: 0;
		font-size: 12px;
		color: var(--text-muted);
	}

	.validator-error-item__arrow {
		align-self: center;
		color: var(--text-muted);
	}

	@media (max-width: 900px) {
		.validator-layout {
			flex-direction: column;
		}

		.validator-editor {
			border-right: none;
			border-bottom: 1px solid var(--border-subtle);
		}

		.validator-panel {
			width: 100%;
			min-width: 0;
		}
	}
</style>
