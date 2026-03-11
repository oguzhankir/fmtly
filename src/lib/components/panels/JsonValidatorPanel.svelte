<script lang="ts">
	import { onMount } from 'svelte';
	import MonacoEditor from '$components/editor/MonacoEditor.svelte';
	import { validateJSON } from '$engines/json/index.js';
	import { format, jsonError, repair } from '$stores/json.store';
	import { initInput, input } from '$stores/input.store';
	import { AlertTriangle, CheckCircle2, Sparkles, Wand2 } from 'lucide-svelte';

	let {
		toolSlug
	}: {
		toolSlug: string;
	} = $props();

	let editorRef: MonacoEditor | undefined = $state(undefined);
	let result = $derived(validateJSON($input));

	onMount(() => {
		initInput(toolSlug);
	});

	$effect(() => {
		const errors = result.errors.map((entry) => ({
			line: entry.line,
			column: entry.column,
			message: entry.message
		}));
		editorRef?.setErrorMarkers(errors);
	});

	async function handleRepair(): Promise<void> {
		await repair();
	}

	async function handleFormat(): Promise<void> {
		await format();
	}
</script>

<div class="validator-shell" role="region" aria-label="JSON validator">
	<div class="validator-header">
		<div
			class="validator-status"
			class:validator-status--invalid={!result.valid}
			class:validator-status--valid={result.valid}
		>
			{#if result.valid}
				<CheckCircle2 size={16} />
				<span>Valid JSON</span>
			{:else}
				<AlertTriangle size={16} />
				<span>{result.summary}</span>
			{/if}
		</div>
		<div class="validator-actions">
			<button type="button" class="validator-btn" onclick={handleFormat}>
				<Sparkles size={13} />
				Format
			</button>
			<button type="button" class="validator-btn validator-btn--primary" onclick={handleRepair}>
				<Wand2 size={13} />
				Repair JSON
			</button>
		</div>
	</div>

	<div class="validator-editor">
		<MonacoEditor bind:this={editorRef} language="json" wordWrap={true} />
	</div>

	{#if !result.valid}
		<div class="validator-errors">
			{#if result.errors.length > 0}
				{#each result.errors as issue}
					<button
						type="button"
						class="validator-error-item"
						onclick={() => editorRef?.revealLine(issue.line)}
					>
						<div class="validator-error-item__head">
							<strong>Line {issue.line}, column {issue.column}</strong>
							<span>{issue.code}</span>
						</div>
						<p>{issue.message}</p>
						<p class="validator-error-item__explanation">{issue.plainLanguageExplanation}</p>
					</button>
				{/each}
			{:else if !$input.trim()}
				<div class="validator-empty">Paste JSON to validate syntax and see inline Monaco markers.</div>
			{:else if $jsonError}
				<div class="validator-empty">{$jsonError.plainLanguageExplanation}</div>
			{/if}
		</div>
	{:else}
		<div class="validator-success">
			<CheckCircle2 size={15} />
			<span>No syntax errors found.</span>
		</div>
	{/if}
</div>

<style>
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
		font-size: 11px;
		font-weight: 700;
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
