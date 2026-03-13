<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import MonacoEditor from '$components/editor/MonacoEditor.svelte';
	import { validateJSON } from '$engines/json/index.js';
	import { validateJsonSchema } from '$engines/json/schemaValidator.js';
	import type { SchemaValidationResult } from '$engines/json/schemaValidator.js';
	import { format, jsonError, repair } from '$stores/json.store';
	import { initInput, input } from '$stores/input.store';
	import { t } from '$lib/stores/language.js';
	import type { ToolDefinition } from '$registry/types.js';
	import { AlertTriangle, CheckCircle2, Sparkles, Wand2 } from 'lucide-svelte';

	let {
		toolSlug,
		workspaceTools = []
	}: {
		toolSlug: string;
		workspaceTools?: ToolDefinition[];
	} = $props();

	let editorRef: MonacoEditor | undefined = $state(undefined);
	let result = $derived(validateJSON($input));
	let initializedToolSlug = $state('');
	let validationMode = $state<'syntax' | 'schema'>('syntax');
	let schemaInput = $state(
		'{\n  "type": "object",\n  "required": ["id"],\n  "properties": {\n    "id": { "type": "number" }\n  }\n}'
	);
	let schemaValidationResult = $state<SchemaValidationResult | null>(null);
	let schemaValidationToken = 0;
	let schemaErrorMessage = $derived.by(() => {
		if (!schemaValidationResult || schemaValidationResult.success) return '';
		if (schemaValidationResult.dataError) {
			return schemaValidationResult.dataError.plainLanguageExplanation;
		}
		if (schemaValidationResult.schemaError instanceof Error) {
			return schemaValidationResult.schemaError.message;
		}
		if (!schemaValidationResult.schemaError) return '';
		return schemaValidationResult.schemaError.plainLanguageExplanation;
	});
	let activeIssues = $derived.by(() => {
		if (validationMode === 'schema') {
			if (!schemaValidationResult || !schemaValidationResult.success) return [];
			return schemaValidationResult.issues.map((issue) => ({
				line: issue.line,
				column: issue.column,
				message: issue.message,
				code: issue.keyword,
				plainLanguageExplanation: `${issue.instancePath} ${($t as any)('ui.validator.explanation_must_satisfy', 'must satisfy')} ${issue.keyword}`,
				path: issue.instancePath || '/'
			}));
		}
		return result.errors.map((issue) => ({
			...issue,
			path: '/'
		}));
	});
	let isValidationSuccessful = $derived.by(() => {
		if (validationMode === 'schema') {
			return schemaValidationResult?.success === true && schemaValidationResult.valid;
		}
		return result.valid;
	});
	let errorCountLabel = $derived(
		activeIssues.length > 0 ? `${activeIssues.length} ${activeIssues.length === 1 ? $t('ui.validator.issue', 'issue') : $t('ui.validator.issues', 'issues')}` : ''
	);
	let validationSummary = $derived.by(() => {
		if (validationMode === 'schema') {
			if (!$input.trim()) return $t('ui.validator.paste_json', 'Paste JSON to validate');
			if (!schemaInput.trim()) return $t('ui.validator.paste_schema', 'Paste a JSON Schema to validate against');
			if (!schemaValidationResult) return $t('ui.validator.validating_schema', 'Validating schema…');
			if (!schemaValidationResult.success) {
				if (schemaValidationResult.dataError) {
					return ($t as any)('ui.validator.data_error_pos', 'Data error at line {{line}}, column {{column}}', { line: schemaValidationResult.dataError.line, column: schemaValidationResult.dataError.column });
				}
				return $t('ui.validator.schema_invalid', 'Schema is invalid');
			}
			if (schemaValidationResult.valid) return $t('ui.validator.json_matches_schema', 'JSON matches schema');
			const firstIssue = schemaValidationResult.issues[0];
			return firstIssue
				? ($t as any)('ui.validator.schema_error_pos', 'Schema error at line {{line}}, column {{column}}', { line: firstIssue.line, column: firstIssue.column })
				: $t('ui.validator.schema_validation_failed', 'Schema validation failed');
		}
		return result.summary;
	});

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	$effect(() => {
		const errors = activeIssues.map((entry) => ({
			line: entry.line,
			column: entry.column,
			message: entry.message
		}));
		editorRef?.setErrorMarkers(errors);
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
		void validateJsonSchema($input, schemaInput).then((nextResult) => {
			if (nextToken !== schemaValidationToken) return;
			schemaValidationResult = nextResult;
		});
	});

	async function handleRepair(): Promise<void> {
		await repair();
	}

	async function handleFormat(): Promise<void> {
		await format();
	}

	function focusIssue(line: number): void {
		editorRef?.revealLine(line);
	}

	function focusFirstIssue(): void {
		const firstIssue = activeIssues[0];
		if (!firstIssue) return;
		focusIssue(firstIssue.line);
	}

	function getWorkspaceLabel(tool: ToolDefinition): string {
		switch (tool.slug) {
			case 'formatter':
				return $t('ui.actions.format', 'Format');
			case 'viewer':
				return $t('ui.actions.view', 'View');
			case 'validator':
				return $t('ui.actions.validate', 'Validate');
			case 'minifier':
				return $t('ui.actions.minify', 'Minify');
			case 'to-yaml':
				return $t('ui.convert.to_yaml', '→ YAML');
			case 'to-csv':
				return $t('ui.convert.to_csv', '→ CSV');
			case 'to-xml':
				return $t('ui.convert.to_xml', '→ XML');
			case 'to-toml':
				return $t('ui.convert.to_toml', '→ TOML');
			case 'to-markdown':
				return $t('ui.convert.to_markdown', '→ MD');
			case 'jsonpath':
				return $t('ui.query.jsonpath', 'JSONPath');
			case 'jmespath':
				return $t('ui.query.jmespath', 'JMESPath');
			default:
				return tool.displayName;
		}
	}

	function navigateToWorkspaceTool(slug: string): void {
		if (slug === toolSlug) return;
		void goto(`/json/${slug}`, {
			replaceState: true,
			noScroll: true,
			keepFocus: true
		});
	}
</script>

<div class="validator-shell" role="region" aria-label="JSON validator">
	{#if workspaceTools.length > 0}
		<div class="json-workspace-tabs" role="tablist" aria-label="JSON workspace tabs">
			{#each workspaceTools as workspaceTool}
				<button
					type="button"
					role="tab"
					class="json-workspace-tab"
					class:json-workspace-tab--active={workspaceTool.slug === toolSlug}
					aria-selected={workspaceTool.slug === toolSlug}
					onclick={() => navigateToWorkspaceTool(workspaceTool.slug)}
				>
					{getWorkspaceLabel(workspaceTool)}
				</button>
			{/each}
		</div>
	{/if}

	<div class="validator-header">
		<div class="validator-modes" role="tablist" aria-label="Validator mode">
			<button
				type="button"
				role="tab"
				class="validator-mode-btn"
				class:validator-mode-btn--active={validationMode === 'syntax'}
				aria-selected={validationMode === 'syntax'}
				onclick={() => (validationMode = 'syntax')}
			>
				{$t('ui.validator.syntax', 'Syntax')}
			</button>
			<button
				type="button"
				role="tab"
				class="validator-mode-btn"
				class:validator-mode-btn--active={validationMode === 'schema'}
				aria-selected={validationMode === 'schema'}
				onclick={() => (validationMode = 'schema')}
			>
				{$t('ui.validator.schema', 'Schema')}
			</button>
		</div>
		<div
			class="validator-status"
			class:validator-status--invalid={!isValidationSuccessful}
			class:validator-status--valid={isValidationSuccessful}
		>
			{#if isValidationSuccessful}
				<CheckCircle2 size={16} />
				<span>{validationMode === 'schema' ? $t('ui.validator.schema_match', 'Schema match') : $t('ui.validator.valid_json', 'Valid JSON')}</span>
			{:else}
				<AlertTriangle size={16} />
				<span>{validationSummary}</span>
			{/if}
		</div>
		<div class="validator-actions">
			{#if activeIssues.length > 0}
				<button type="button" class="validator-btn validator-btn--secondary" onclick={focusFirstIssue}>
					<AlertTriangle size={13} />
					{$t('ui.validator.first_issue', 'First issue')}
				</button>
			{/if}
			<button type="button" class="validator-btn" onclick={handleFormat}>
				<Sparkles size={13} />
				{$t('ui.actions.format', 'Format')}
			</button>
			<button type="button" class="validator-btn validator-btn--primary" onclick={handleRepair}>
				<Wand2 size={13} />
				{$t('ui.validator.repair_json', 'Repair JSON')}
			</button>
		</div>
	</div>

	<div class="validator-editor">
		<MonacoEditor bind:this={editorRef} language="json" wordWrap={true} />
	</div>

	{#if validationMode === 'schema'}
		<div class="validator-schema">
			<div class="validator-schema__header">
				<strong>{$t('ui.validator.schema_title', 'JSON Schema')}</strong>
				<span>{$t('ui.validator.schema_standard', 'Draft-07+ via AJV')}</span>
			</div>
			<textarea
				bind:value={schemaInput}
				class="validator-schema__input"
				placeholder={$t('ui.validator.paste_schema_placeholder', 'Paste JSON Schema here…')}
				spellcheck="false"
			></textarea>
		</div>
	{/if}

	{#if !isValidationSuccessful}
		<div class="validator-errors">
			{#if activeIssues.length > 0}
				<div class="validator-errors__summary">{errorCountLabel}</div>
			{/if}
			{#if activeIssues.length > 0}
				{#each activeIssues as issue}
					<button
						type="button"
						class="validator-error-item"
						onclick={() => focusIssue(issue.line)}
					>
						<div class="validator-error-item__head">
							<strong>{($t as any)('ui.validator.line_col_label', 'Line {{line}}, column {{column}}', { line: issue.line, column: issue.column })}</strong>
							<span>{issue.code}</span>
						</div>
						<p>{issue.message}</p>
						<p class="validator-error-item__explanation">{issue.plainLanguageExplanation}</p>
						{#if validationMode === 'schema'}
							<p class="validator-error-item__path">{issue.path}</p>
						{/if}
					</button>
				{/each}
			{:else if validationMode === 'schema' && schemaErrorMessage}
				<div class="validator-empty">{schemaErrorMessage}</div>
			{:else if $jsonError}
				<div class="validator-empty">{$jsonError.plainLanguageExplanation}</div>
			{/if}
		</div>
	{:else}
		<div class="validator-success">
			<CheckCircle2 size={15} />
			<span>{validationMode === 'schema' ? $t('ui.validator.json_matches_current_schema', 'JSON matches the current schema.') : $t('ui.validator.no_syntax_errors', 'No syntax errors found.')}</span>
		</div>
	{/if}
</div>

<style>
	.json-workspace-tabs {
		display: flex;
		align-items: center;
		gap: 2px;
		overflow-x: auto;
		padding: 0 var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		scrollbar-width: none;
	}

	.json-workspace-tabs::-webkit-scrollbar {
		display: none;
	}

	.json-workspace-tab {
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

	.json-workspace-tab--active {
		border-bottom-color: var(--accent);
		color: var(--text-primary);
	}

	.json-workspace-tab:hover {
		color: var(--text-primary);
	}

	.validator-shell {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}

	.validator-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3);
		padding: var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
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

	.validator-status {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 6px 10px;
		border-radius: var(--radius-md);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
	}

	.validator-status--valid {
		color: var(--status-success);
		background: color-mix(in srgb, var(--status-success) 12%, transparent);
	}

	.validator-status--invalid {
		color: var(--status-error);
		background: color-mix(in srgb, var(--status-error) 12%, transparent);
	}

	.validator-actions {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	.validator-btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		height: 30px;
		padding: 0 var(--space-3);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
	}

	.validator-btn--primary {
		background: var(--accent);
		border-color: var(--accent);
		color: var(--text-on-accent);
	}

	.validator-editor {
		flex: 1;
		min-height: 0;
	}

	.validator-schema {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-3);
		border-top: 1px solid var(--border-subtle);
		background: var(--bg-base);
	}

	.validator-schema__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-muted);
	}

	.validator-schema__header strong {
		color: var(--text-primary);
	}

	.validator-schema__input {
		min-height: 140px;
		width: 100%;
		resize: vertical;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-surface);
		color: var(--text-primary);
		padding: var(--space-3);
		font-family: var(--font-mono);
		font-size: 12px;
		line-height: 1.6;
	}

	.validator-errors {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-3);
		border-top: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		max-height: 220px;
		overflow: auto;
	}

	.validator-errors__summary {
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		color: var(--text-muted);
	}

	.validator-error-item {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: var(--space-3);
		border: 1px solid color-mix(in srgb, var(--status-error) 24%, var(--border-default));
		border-radius: var(--radius-md);
		background: color-mix(in srgb, var(--status-error) 7%, var(--bg-surface));
		color: var(--text-primary);
		text-align: left;
		cursor: pointer;
	}

	.validator-error-item__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		font-family: var(--font-ui);
		font-size: 12px;
	}

	.validator-error-item__head span {
		color: var(--status-error);
		text-transform: uppercase;
	}

	.validator-error-item__path {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-muted);
	}

	.validator-error-item p {
		margin: 0;
		font-family: var(--font-ui);
		font-size: 12px;
		line-height: 1.5;
		color: var(--text-secondary);
	}

	.validator-error-item__explanation {
		color: var(--text-primary);
	}

	.validator-success,
	.validator-empty {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: var(--space-3);
		border-top: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-secondary);
	}

	.validator-success {
		color: var(--status-success);
	}

	@media (max-width: 767px) {
		.validator-header {
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>
