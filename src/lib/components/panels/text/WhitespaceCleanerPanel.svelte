<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import { cleanWhitespace, type TextWhitespaceCleanupOptions, type TextWhitespaceCleanupResult } from '$engines/text/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Eraser, Settings } from 'lucide-svelte';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';

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
	let showStats = $state(true);

	let options = $state<TextWhitespaceCleanupOptions>({
		removeLeading: false,
		removeTrailing: true,
		collapseSpaces: true,
		collapseTabs: true,
		convertTabsToSpaces: false,
		tabSize: 4,
		removeAllSpaces: false,
		removeAllLineBreaks: false,
		trimLines: false,
		preserveParagraphBreaks: true,
		convertSpacesToTabs: false
	});

	let result = $derived(cleanWhitespace($input, options));
	let lineCount = $derived($input.length === 0 ? 0 : $input.split(/\r?\n/).length);
	let statusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${lineCount.toLocaleString()} ${$t('ui.text_reverser.lines_count', 'lines')}`
	);

	onMount(() => {
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	async function copyValue(value: string): Promise<void> {
		if (!value) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}

		try {
			await navigator.clipboard.writeText(value);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
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

	function resetOptions(): void {
		options = {
			removeLeading: false,
			removeTrailing: true,
			collapseSpaces: true,
			collapseTabs: true,
			convertTabsToSpaces: false,
			tabSize: 4,
			removeAllSpaces: false,
			removeAllLineBreaks: false,
			trimLines: false,
			preserveParagraphBreaks: true,
			convertSpacesToTabs: false
		};
	}

	const hasChanges = $derived(
		options.removeLeading ||
		options.removeTrailing ||
		options.collapseSpaces ||
		options.collapseTabs ||
		options.convertTabsToSpaces ||
		options.tabSize !== 4 ||
		options.removeAllSpaces ||
		options.removeAllLineBreaks ||
		options.trimLines ||
		!options.preserveParagraphBreaks ||
		options.convertSpacesToTabs
	);
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

	<!-- Statistics Section -->
	{#if result.cleaned}
		<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
			<div class="mb-[var(--space-3)] flex items-center justify-between">
				<h3 class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{$t('ui.whitespace_cleaner.statistics', 'Statistics')}
				</h3>
				<button
					type="button"
					onclick={() => showStats = !showStats}
					class="text-[length:var(--text-xs)] text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
				>
					{showStats ? $t('ui.actions.hide', 'Hide') : $t('ui.actions.show', 'Show')}
				</button>
			</div>
			
			{#if showStats}
				<div class="grid grid-cols-2 gap-[var(--space-2)] sm:grid-cols-3 lg:grid-cols-6">
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.whitespace_cleaner.trailing_spaces', 'Trailing spaces')}</div>
						<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{result.trailingSpacesRemoved.toLocaleString()}</div>
					</div>
					
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.whitespace_cleaner.leading_spaces', 'Leading spaces')}</div>
						<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{result.leadingSpacesRemoved.toLocaleString()}</div>
					</div>
					
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.whitespace_cleaner.blanks_collapsed', 'Blanks collapsed')}</div>
						<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{result.multipleBlanksCollapsed.toLocaleString()}</div>
					</div>
					
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.whitespace_cleaner.tabs_converted', 'Tabs converted')}</div>
						<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{result.tabsConverted.toLocaleString()}</div>
					</div>
					
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.whitespace_cleaner.spaces_converted', 'Spaces converted')}</div>
						<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{result.spacesConverted.toLocaleString()}</div>
					</div>
					
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.whitespace_cleaner.lines_processed', 'Lines processed')}</div>
						<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{result.linesProcessed.toLocaleString()}</div>
					</div>
				</div>
			{/if}
		</div>
	{/if}

	<div class="grid h-full min-h-0 grid-cols-1 lg:grid-cols-2">
		<div class="flex min-h-0 flex-col border-r border-[var(--border-default)] bg-[var(--bg-base)] lg:border-r-0 lg:border-b">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{statusLine}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					<button
						type="button"
						onclick={() => showOptions = !showOptions}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Settings size={14} />
						{$t('ui.actions.options', 'Options')}
						{#if hasChanges}
							<span class="h-2 w-2 rounded-full bg-[var(--color-primary)]"></span>
						{/if}
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
				<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
					<div class="mb-[var(--space-3)] flex items-center justify-between">
						<h3 class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
							{$t('ui.whitespace_cleaner.options', 'Cleaning Options')}
						</h3>
						<button
							type="button"
							onclick={resetOptions}
							class="text-[length:var(--text-xs)] text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
						>
							{$t('ui.actions.reset', 'Reset')}
						</button>
					</div>

					<div class="grid grid-cols-1 gap-[var(--space-3)] sm:grid-cols-2 lg:grid-cols-3">
						<label class="flex items-center gap-[var(--space-2)]">
							<input
								type="checkbox"
								bind:checked={options.removeLeading}
								class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
							/>
							<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.whitespace_cleaner.remove_leading', 'Remove leading spaces')}</span>
						</label>

						<label class="flex items-center gap-[var(--space-2)]">
							<input
								type="checkbox"
								bind:checked={options.removeTrailing}
								class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
							/>
							<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.whitespace_cleaner.remove_trailing', 'Remove trailing spaces')}</span>
						</label>

						<label class="flex items-center gap-[var(--space-2)]">
							<input
								type="checkbox"
								bind:checked={options.collapseSpaces}
								class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
							/>
							<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.whitespace_cleaner.collapse_spaces', 'Collapse multiple spaces')}</span>
						</label>

						<label class="flex items-center gap-[var(--space-2)]">
							<input
								type="checkbox"
								bind:checked={options.collapseTabs}
								class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
							/>
							<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.whitespace_cleaner.collapse_tabs', 'Collapse tabs to spaces')}</span>
						</label>

						<label class="flex items-center gap-[var(--space-2)]">
							<input
								type="checkbox"
								bind:checked={options.convertTabsToSpaces}
								class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
							/>
							<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.whitespace_cleaner.convert_tabs_to_spaces', 'Convert tabs to spaces')}</span>
						</label>

						<label class="flex items-center gap-[var(--space-2)]">
							<input
								type="checkbox"
								bind:checked={options.convertSpacesToTabs}
								class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
							/>
							<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.whitespace_cleaner.convert_spaces_to_tabs', 'Convert spaces to tabs')}</span>
						</label>

						<label class="flex items-center gap-[var(--space-2)]">
							<input
								type="checkbox"
								bind:checked={options.trimLines}
								class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
							/>
							<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.whitespace_cleaner.trim_lines', 'Trim each line')}</span>
						</label>

						<label class="flex items-center gap-[var(--space-2)]">
							<input
								type="checkbox"
								bind:checked={options.removeAllSpaces}
								class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
							/>
							<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.whitespace_cleaner.remove_all_spaces', 'Remove all spaces')}</span>
						</label>

						<label class="flex items-center gap-[var(--space-2)]">
							<input
								type="checkbox"
								bind:checked={options.removeAllLineBreaks}
								class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
							/>
							<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.whitespace_cleaner.remove_all_line_breaks', 'Remove all line breaks')}</span>
						</label>

						<label class="flex items-center gap-[var(--space-2)]">
							<input
								type="checkbox"
								bind:checked={options.preserveParagraphBreaks}
								class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
							/>
							<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.whitespace_cleaner.preserve_paragraph_breaks', 'Preserve paragraph breaks')}</span>
						</label>

						<div class="flex items-center gap-[var(--space-2)]">
							<label 
								for="tab-size-input"
								class="text-[length:var(--text-sm)] text-[var(--text-secondary)]"
							>
								{$t('ui.whitespace_cleaner.tab_size', 'Tab size')}:
							</label>
							<input
								id="tab-size-input"
								type="number"
								bind:value={options.tabSize}
								min="1"
								max="8"
								class="h-8 w-16 rounded border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-1)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
							/>
						</div>
					</div>
				</div>
			{/if}

			<textarea
				bind:value={$input}
				class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t('ui.whitespace_cleaner.placeholder', 'Type or paste text to clean whitespace...')}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col bg-[var(--bg-base)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
				<span>{$t('ui.whitespace_cleaner.output', 'Output')}</span>
				<div class="flex items-center gap-[var(--space-2)]">
					{#if result.lineEndingsNormalized}
						<div class="flex items-center gap-[var(--space-1)]">
							<div class="h-2 w-2 rounded-full bg-[var(--color-success)]"></div>
							<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.whitespace_cleaner.normalized', 'Normalized')}</span>
						</div>
					{/if}
					<button
						type="button"
						onclick={() => copyValue(result.cleaned)}
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					>
						<Copy size={12} />
						{$t('ui.actions.copy', 'Copy')}
					</button>
				</div>
			</div>

			<div class="flex-1 overflow-hidden">
				<div class="h-full overflow-y-auto">
					<div class="whitespace-pre-wrap break-all p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)]">
						{result.cleaned}
					</div>
				</div>
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
