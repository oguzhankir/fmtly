<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import {
		yamlError,
		yamlLintWarnings,
		formatYAMLText,
		type YAMLLintCode
	} from '$stores/yaml.store';
	import {
		validateYamlSchema,
		type YamlSchemaValidationResult
	} from '$engines/yaml/schemaValidator.js';
	import { input, initInput } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$lib/stores/language.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import { CheckCircle, AlertTriangle, ChevronRight, Wand2 } from 'lucide-svelte';

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
	let initialized = $state(false);
	let validationMode = $state<'syntax' | 'schema'>('syntax');
	let schemaInput = $state(
		'type: object\nrequired:\n  - apiVersion\n  - kind\nproperties:\n  apiVersion:\n    type: string\n  kind:\n    type: string\n  metadata:\n    type: object'
	);
	let schemaValidationResult = $state<YamlSchemaValidationResult | null>(null);
	let schemaValidationToken = 0;

	let isValid = $derived($input.trim().length > 0 && !$yamlError);
	let isEmpty = $derived(!$input.trim());
	let hasWarnings = $derived(isValid && $yamlLintWarnings.length > 0);
	let errorSummary = $derived($yamlError);
	let schemaErrorMessage = $derived.by(() => {
		if (!schemaValidationResult || schemaValidationResult.success) return '';
		if (schemaValidationResult.dataError) {
			return schemaValidationResult.dataError.plainLanguageExplanation ?? schemaValidationResult.dataError.message;
		}
		if (!schemaValidationResult.schemaError) return '';
		if (schemaValidationResult.schemaError instanceof Error) {
			return schemaValidationResult.schemaError.message;
		}
		return schemaValidationResult.schemaError.plainLanguageExplanation ?? schemaValidationResult.schemaError.message;
	});
	let warningSummary = $derived.by(() =>
		$yamlLintWarnings.map((warning) => ({
			...warning,
			message: getLintMessage(warning.code)
		}))
	);
	let schemaIssues = $derived.by(() => {
		if (!schemaValidationResult || !schemaValidationResult.success) return [];
		return schemaValidationResult.issues.map((issue) => ({
			line: issue.line,
			column: issue.column,
			message: issue.message,
			code: issue.keyword,
			path: issue.instancePath || '/',
			plainLanguageExplanation: `${issue.instancePath || '/'} ${($t as any)('ui.validator.explanation_must_satisfy', 'must satisfy')} ${issue.keyword}`
		}));
	});
	let warningCountLabel = $derived(
		warningSummary.length > 0
			? `${warningSummary.length} ${warningSummary.length === 1 ? $t('ui.validator.warning', 'warning') : $t('ui.validator.warnings', 'warnings')}`
			: ''
	);
	let schemaIssueCountLabel = $derived(
		schemaIssues.length > 0
			? `${schemaIssues.length} ${schemaIssues.length === 1 ? $t('ui.validator.issue', 'issue') : $t('ui.validator.issues', 'issues')}`
			: ''
	);
	let isSchemaMode = $derived(validationMode === 'schema');
	let isSchemaValidationSuccessful = $derived(
		schemaValidationResult?.success === true && schemaValidationResult.valid
	);
	let statusTone = $derived.by(() => {
		if (isSchemaMode) {
			if (!$input.trim() || !schemaInput.trim()) return 'idle';
			if (schemaValidationResult?.success === true && schemaValidationResult.valid) return 'valid';
			return 'invalid';
		}
		if (errorSummary) return 'invalid';
		if (hasWarnings) return 'warning';
		if (isValid) return 'valid';
		return 'idle';
	});
	let statusText = $derived.by(() => {
		if (isSchemaMode) {
			if (!$input.trim()) return $t('ui.validator.paste_yaml', 'Paste YAML to validate');
			if (!schemaInput.trim()) return $t('ui.validator.yaml_paste_schema', 'Paste a schema to validate against');
			if (!schemaValidationResult) return $t('ui.validator.yaml_validating_schema', 'Validating schema…');
			if (!schemaValidationResult.success) {
				if (schemaValidationResult.dataError) {
					return ($t as any)('ui.validator.data_error_pos', 'Data error at line {line}, column {column}', {
						line: schemaValidationResult.dataError.line,
						column: schemaValidationResult.dataError.column
					});
				}
				return schemaErrorMessage || $t('ui.validator.schema_invalid', 'Schema is invalid');
			}
			if (schemaValidationResult.valid) {
				return $t('ui.validator.yaml_matches_schema', 'YAML matches schema');
			}
			const firstIssue = schemaValidationResult.issues[0];
			return firstIssue
				? ($t as any)('ui.validator.schema_error_pos', 'Schema error at line {line}, column {column}', {
						line: firstIssue.line,
						column: firstIssue.column
					})
				: $t('ui.validator.schema_validation_failed', 'Schema validation failed');
		}
		if (errorSummary) return $t('ui.validator.invalid_yaml', 'Invalid YAML');
		if (hasWarnings) return warningCountLabel;
		if (isValid) return $t('ui.validity.valid', { language: 'YAML' }, 'Valid YAML');
		return '';
	});

	onMount(() => {
		initInput('yaml-workspace');
		initialized = true;
		void loadMonacoComponent();
	});

	$effect(() => {
		if (!initialized || !monacoEditorRef) return;
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
		if ($yamlError?.line != null) {
			monacoEditorRef.setErrorMarkers([
				{
					line: $yamlError.line,
					column: $yamlError.column ?? 1,
					message: $yamlError.plainLanguageExplanation ?? $yamlError.message,
					severity: 'error'
				}
			]);
			return;
		}
		monacoEditorRef.setErrorMarkers(
			$yamlLintWarnings.map((warning) => ({
				line: warning.line,
				column: warning.column,
				message: getLintMessage(warning.code),
				severity: 'warning'
			}))
		);
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
		void validateYamlSchema($input, schemaInput).then((nextResult) => {
			if (nextToken !== schemaValidationToken) return;
			schemaValidationResult = nextResult;
		});
	});

	async function loadMonacoComponent(): Promise<void> {
		const mod = await import('$components/editor/MonacoEditor.svelte');
		MonacoEditor = mod.default;
	}

	function navigateToError(): void {
		if (!$yamlError?.line || !monacoEditorRef) return;
		monacoEditorRef.revealLine($yamlError.line);
	}

	function navigateToWarning(line: number): void {
		if (!monacoEditorRef) return;
		monacoEditorRef.revealLine(line);
	}

	function navigateToSchemaIssue(line: number): void {
		if (!monacoEditorRef) return;
		monacoEditorRef.revealLine(line);
	}

	function getLintMessage(code: YAMLLintCode): string {
		switch (code) {
			case 'tabs':
				return $t('ui.validator.yaml_lint.tabs', 'Tabs found in indentation. YAML is usually safer with spaces only.');
			case 'trailing_whitespace':
				return $t('ui.validator.yaml_lint.trailing_whitespace', 'Trailing whitespace found.');
			case 'odd_indentation':
				return $t('ui.validator.yaml_lint.odd_indentation', 'Odd indentation width found. YAML is usually more consistent with 2-space indentation.');
		}
	}

	async function formatInPlace(): Promise<void> {
		const value = $input;
		if (!value.trim()) return;
		const result = await formatYAMLText(value);
		if (result.success) {
			input.set(result.output);
			addToast('success', $t('ui.toast.format_success', 'Formatted successfully'));
			return;
		}
		addToast('error', result.error.plainLanguageExplanation ?? result.error.message);
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
</script>

<div class="validator-shell" role="region" aria-label={$t('ui.aria.yaml_validator', 'YAML validator')}>
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="yaml"
			locale={$page.params.lang || 'en'}
		/>
	{/if}
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
					{#if !isEmpty}
						<button type="button" class="validator-btn" onclick={formatInPlace}>
							<Wand2 size={13} />
							{$t('ui.actions.format', 'Format')}
						</button>
					{/if}
				</div>
				<div class="validator-editor-toolbar__group">
					{#if statusTone === 'invalid'}
						<span class="validator-status validator-status--invalid">
							<AlertTriangle size={13} />
							{statusText}
						</span>
					{:else if statusTone === 'warning'}
						<span class="validator-status validator-status--warning">
							<AlertTriangle size={13} />
							{statusText}
						</span>
					{:else if statusTone === 'valid'}
						<span class="validator-status validator-status--valid">
							<CheckCircle size={13} />
							{statusText}
						</span>
					{/if}
				</div>
			</div>

			<div class="validator-editor-body">
				{#if MonacoEditor}
					<MonacoEditor bind:this={monacoEditorRef} language="yaml" wordWrap={true} />
				{:else}
					<div class="validator-loading">{$t('ui.validator.loading_editor', 'Loading editor…')}</div>
				{/if}
			</div>
		</div>

		<div class="validator-panel">
			{#if isSchemaMode}
				<div class="validator-schema">
					<div class="validator-schema__header">
						<strong>{$t('ui.validator.yaml_schema_title', 'Schema')}</strong>
						<span>{$t('ui.validator.yaml_schema_standard', 'JSON Schema Draft-07+ via AJV')}</span>
					</div>
					<textarea
						value={schemaInput}
						class="validator-schema__input"
						placeholder={$t('ui.validator.yaml_paste_schema_placeholder', 'Paste JSON Schema or YAML schema here…')}
						spellcheck="false"
						oninput={handleSchemaInput}
					></textarea>
				</div>
				{#if isEmpty}
					<div class="validator-empty validator-panel-section">
						<p>{$t('ui.validator.paste_yaml', 'Paste YAML to validate')}</p>
						<p class="validator-empty__hint">
							{$t('ui.validator.yaml_schema_validation_desc', 'Validate YAML structure against a JSON Schema. Schema input can be written in JSON or YAML.')}
						</p>
					</div>
				{:else if errorSummary}
					<div class="validator-errors validator-panel-section">
						<div class="validator-errors__header">
							<AlertTriangle size={14} />
							<span>{($t as any)('ui.validator.error_count', { count: 1 }, '1 error found')}</span>
						</div>
						<button type="button" class="validator-error-item" onclick={navigateToError}>
							<div class="validator-error-item__meta">
								{#if errorSummary.line != null}
									<span class="validator-error-item__loc">
										{($t as any)('ui.validator.line_col_label', 'Line {line}, column {column}', { line: errorSummary.line, column: errorSummary.column ?? 1 })}
									</span>
								{/if}
							</div>
							<div class="validator-error-item__body">
								<p class="validator-error-item__plain">
									{errorSummary.plainLanguageExplanation ?? errorSummary.message}
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
										{($t as any)('ui.validator.line_col_label', 'Line {line}, column {column}', { line: issue.line, column: issue.column })}
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
							{$t('ui.validator.yaml_matches_schema', 'YAML matches schema')}
						</p>
						<p class="validator-success__desc">
							{$t('ui.validator.yaml_matches_current_schema', 'YAML matches the current schema.')}
						</p>
					</div>
				{/if}
			{:else if isEmpty}
				<div class="validator-empty">
					<p>{$t('ui.validator.yaml_paste_hint', 'Paste or type YAML to validate it.')}</p>
					<p class="validator-empty__hint">{$t('ui.validator.yaml_validation_desc', 'Validates YAML syntax, indentation, invalid characters, and malformed structures.')}</p>
				</div>
			{:else if errorSummary}
				<div class="validator-errors">
					<div class="validator-errors__header">
						<AlertTriangle size={14} />
						<span>{($t as any)('ui.validator.error_count', { count: 1 }, '1 error found')}</span>
					</div>
					<button type="button" class="validator-error-item" onclick={navigateToError}>
						<div class="validator-error-item__meta">
							{#if errorSummary.line != null}
								<span class="validator-error-item__loc">
									{($t as any)('ui.validator.line_col_label', 'Line {line}, column {column}', { line: errorSummary.line, column: errorSummary.column ?? 1 })}
								</span>
							{/if}
						</div>
						<div class="validator-error-item__body">
							<p class="validator-error-item__plain">
								{errorSummary.plainLanguageExplanation ?? errorSummary.message}
							</p>
						</div>
						<span class="validator-error-item__arrow">
							<ChevronRight size={14} />
						</span>
					</button>
				</div>
			{:else if hasWarnings}
				<div class="validator-warnings">
					<div class="validator-warnings__intro">
						<AlertTriangle size={20} />
						<div class="validator-warnings__copy">
							<p class="validator-warnings__title">{$t('ui.validator.yaml_warning_title', 'Valid YAML with style warnings')}</p>
							<p class="validator-warnings__desc">{$t('ui.validator.yaml_warning_desc', 'The document parses successfully, but a few style issues may reduce readability or consistency.')}</p>
						</div>
					</div>
					<div class="validator-errors__header validator-errors__header--warning">
						<AlertTriangle size={14} />
						<span>{warningCountLabel}</span>
					</div>
					{#each warningSummary as warning}
						<button type="button" class="validator-error-item validator-error-item--warning" onclick={() => navigateToWarning(warning.line)}>
							<div class="validator-error-item__meta">
								<span class="validator-error-item__loc">
									{($t as any)('ui.validator.line_col_label', 'Line {line}, column {column}', { line: warning.line, column: warning.column })}
								</span>
							</div>
							<div class="validator-error-item__body">
								<p class="validator-error-item__plain">{warning.message}</p>
							</div>
							<span class="validator-error-item__arrow">
								<ChevronRight size={14} />
							</span>
						</button>
					{/each}
				</div>
			{:else if isValid}
				<div class="validator-success">
					<CheckCircle size={32} />
					<p class="validator-success__title">{$t('ui.validator.yaml_success_title', 'Valid YAML')}</p>
					<p class="validator-success__desc">{$t('ui.validator.yaml_success_desc', 'No syntax errors detected. The document can be parsed successfully as YAML.')}</p>
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
		gap: 4px;
		padding: 4px;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
	}

	.validator-mode-btn {
		height: 28px;
		padding: 0 var(--space-3);
		border: none;
		border-radius: var(--radius-sm);
		background: transparent;
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
	}

	.validator-mode-btn--active {
		background: var(--accent);
		color: var(--text-on-accent);
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
		height: 28px;
		padding: 0 var(--space-2);
		border-radius: var(--radius-full);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
	}

	.validator-status--valid {
		background: var(--success-bg);
		color: var(--success-text);
	}

	.validator-status--invalid {
		background: var(--danger-bg);
		color: var(--danger-text);
	}

	.validator-status--warning {
		background: var(--status-warning-bg);
		color: var(--status-warning);
	}

	.validator-panel {
		width: min(360px, 35%);
		min-width: 280px;
		max-width: 420px;
		padding: var(--space-4);
		overflow: auto;
		background: var(--bg-surface);
	}

	.validator-panel-section {
		min-height: 220px;
	}

	.validator-schema {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		margin-bottom: var(--space-4);
	}

	.validator-schema__header {
		display: flex;
		flex-direction: column;
		gap: 2px;
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-muted);
	}

	.validator-schema__header strong {
		color: var(--text-primary);
	}

	.validator-schema__input {
		min-height: 160px;
		width: 100%;
		resize: vertical;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-base);
		color: var(--text-primary);
		padding: var(--space-3);
		font-family: var(--font-mono);
		font-size: 12px;
		line-height: 1.6;
	}

	.validator-loading,
	.validator-empty,
	.validator-success {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		text-align: center;
		color: var(--text-secondary);
		padding: var(--space-6);
		gap: var(--space-2);
	}

	.validator-empty__hint,
	.validator-success__desc {
		color: var(--text-tertiary);
		font-size: var(--text-sm);
	}

	.validator-success__title {
		font-weight: 600;
		color: var(--text-primary);
	}

	.validator-errors {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.validator-warnings {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.validator-warnings__intro {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		padding: var(--space-3);
		border: 1px solid color-mix(in srgb, var(--status-warning) 25%, transparent);
		border-radius: var(--radius-lg);
		background: var(--status-warning-bg);
		color: var(--status-warning);
	}

	.validator-warnings__copy {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.validator-warnings__title,
	.validator-warnings__desc {
		margin: 0;
	}

	.validator-warnings__title {
		font-size: 13px;
		font-weight: 600;
		color: var(--text-primary);
	}

	.validator-warnings__desc {
		font-size: 12px;
		color: var(--text-secondary);
	}

	.validator-errors__header {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		font-size: 12px;
		font-weight: 600;
		color: var(--danger-text);
	}

	.validator-errors__header--warning {
		color: var(--status-warning);
	}

	.validator-error-item {
		width: 100%;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--space-3);
		padding: var(--space-3);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-lg);
		background: var(--bg-base);
		text-align: left;
		cursor: pointer;
	}

	.validator-error-item:hover {
		border-color: var(--border-focus);
		background: var(--bg-hover);
	}

	.validator-error-item--warning {
		border-color: color-mix(in srgb, var(--status-warning) 18%, var(--border-default));
	}

	.validator-error-item__meta {
		flex-shrink: 0;
	}

	.validator-error-item__loc {
		font-size: 11px;
		font-weight: 600;
		color: var(--text-tertiary);
	}

	.validator-error-item__body {
		flex: 1;
		min-width: 0;
	}

	.validator-error-item__plain {
		margin: 0;
		font-size: 13px;
		line-height: 1.5;
		color: var(--text-primary);
	}

	.validator-error-item__detail,
	.validator-error-item__path {
		margin: 4px 0 0;
		font-size: 12px;
		line-height: 1.5;
		color: var(--text-secondary);
	}

	.validator-error-item__path {
		font-family: var(--font-mono);
		color: var(--text-tertiary);
	}

	.validator-error-item__arrow {
		flex-shrink: 0;
		color: var(--text-tertiary);
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
			max-width: none;
			min-width: 0;
		}
	}
</style>
