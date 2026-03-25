<script lang="ts">
	import { onMount } from 'svelte';
	import StandaloneMonacoEditor from '$components/editor/StandaloneMonacoEditor.svelte';
	import { initInput, input } from '$stores/input.store';
	import {
		xmlError,
		xmlXsdSchema,
		xmlXsdValidationResult,
		setXsdSchema
	} from '$stores/xml.store';
	import { output } from '$stores/output.store';
	import { t } from '$stores/language';
	import { Download } from 'lucide-svelte';

	let {
		toolSlug,
		downloadFilename = 'output'
	}: {
		toolSlug: string;
		downloadFilename?: string;
	} = $props();

	onMount(() => {
		initInput(toolSlug);
	});

	function handleXmlChange(next: string): void {
		input.set(next);
	}

	function handleXsdChange(next: string): void {
		setXsdSchema(next);
	}

	function handleDownload(): void {
		const value = $output;
		if (!value) return;

		const blob = new Blob([value], { type: 'application/json;charset=utf-8' });
		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = `${downloadFilename}.json`;
		a.click();

		URL.revokeObjectURL(url);
	}
</script>

<div class="flex h-full w-full flex-col gap-[var(--space-4)]">
	<div class="grid grid-cols-1 gap-[var(--space-4)] md:grid-cols-2">
		<div class="flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
			<div class="border-b border-[var(--border-subtle)] p-[var(--space-3)]">
				<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{$t('tool.xml-xsd-validate.xml_label', 'XML')}
				</div>
			</div>
			<div class="flex-1 overflow-auto">
				<StandaloneMonacoEditor
					value={$input}
					onchange={handleXmlChange}
					language="xml"
					placeholder="Paste XML to validate…"
					wordWrap={true}
				/>
			</div>
		</div>

		<div class="flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
			<div class="border-b border-[var(--border-subtle)] p-[var(--space-3)]">
				<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{$t('tool.xml-xsd-validate.xsd_label', 'XSD')}
				</div>
			</div>
			<div class="flex-1 overflow-auto">
				<StandaloneMonacoEditor
					value={$xmlXsdSchema}
					onchange={handleXsdChange}
					language="xml"
					placeholder="Paste XSD schema…"
					wordWrap={true}
				/>
			</div>
		</div>
	</div>

	<div class="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-[var(--space-4)]">
		<div class="mb-[var(--space-4)] flex items-center justify-between gap-[var(--space-3)]">
			<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
				{$t('tool.xml-xsd-validate.result_title', 'Validation result')}
			</div>

			<button
				onclick={handleDownload}
				disabled={!$output}
				class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)] disabled:opacity-50"
				aria-label={$t('ui.layout.aria.download_output', 'Download output')}
			>
				<Download size={12} />
				{$t('ui.actions.download', 'Download')}
			</button>
		</div>

		{#if !$input.trim() && !$xmlXsdSchema.trim()}
			<p class="text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
				{$t('tool.xml-xsd-validate.empty_hint', 'Paste both XML and XSD to validate.')}
			</p>
		{:else if $xmlError}
			<div class="space-y-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-[var(--space-3)]">
				<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{$t('tool.xml-xsd-validate.xml_well_formed_error', 'XML is not well-formed')}
				</div>
				<div class="text-[length:var(--text-sm)] text-[var(--text-secondary)] whitespace-pre-wrap font-[family-name:var(--font-mono)]">
					{$xmlError.message}
				</div>
				{#if $xmlError.line != null && $xmlError.column != null}
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{($t as any)(
							'ui.validator.line_col_label',
							{ line: $xmlError.line, column: $xmlError.column },
							'Line {line}, column {column}'
						)}
					</div>
				{/if}
			</div>
		{:else if $xmlXsdValidationResult}
			<div class="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-[var(--space-3)]">
				<div class="flex items-center justify-between gap-[var(--space-3)]">
					<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
						{#if $xmlXsdValidationResult.valid}
							{$t('tool.xml-xsd-validate.valid', 'XML matches the XSD')}
						{:else}
							{$t('tool.xml-xsd-validate.invalid', 'XML does not match the XSD')}
						{/if}
					</div>
					{#if $xmlXsdValidationResult.warnings.length > 0}
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
							{$t(
								'tool.xml-xsd-validate.warnings',
								{ count: $xmlXsdValidationResult.warnings.length },
								'{count} warning(s)'
							)}
						</div>
					{/if}
				</div>

				{#if $xmlXsdValidationResult.errors.length > 0}
					<div class="mt-[var(--space-3)]">
						<div class="mb-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							{$t('tool.xml-xsd-validate.errors_title', 'Errors')}
						</div>
						<ul class="space-y-[var(--space-2)]">
							{#each $xmlXsdValidationResult.errors as err (String(err.line ?? '-') + ':' + err.message)}
								<li class="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-[var(--space-2)]">
									<div class="font-[number:var(--weight-semibold)] text-[length:var(--text-sm)] text-[var(--text-primary)]">
										{err.message}
									</div>
									{#if err.line != null && err.column != null}
										<div class="mt-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
											{($t as any)(
												'ui.validator.line_col_label',
												{ line: err.line, column: err.column },
												'Line {line}, column {column}'
											)}
										</div>
									{/if}
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				{#if $xmlXsdValidationResult.warnings.length > 0}
					<div class="mt-[var(--space-3)]">
						<div class="mb-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							{$t('tool.xml-xsd-validate.warnings_title', 'Warnings')}
						</div>
						<ul class="space-y-[var(--space-2)]">
							{#each $xmlXsdValidationResult.warnings as warning (warning)}
								<li class="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-[var(--space-2)]">
									<div class="text-[length:var(--text-sm)] text-[var(--text-secondary)] whitespace-pre-wrap">
										{warning}
									</div>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		{:else}
			<p class="text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
				{$t('tool.xml-xsd-validate.waiting_hint', 'Paste XSD schema to run validation.')}
			</p>
		{/if}
	</div>
</div>

