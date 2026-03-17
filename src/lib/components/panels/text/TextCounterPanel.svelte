<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import { analyzeText } from '$engines/text/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Eraser } from 'lucide-svelte';
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

	let metrics = $derived(analyzeText($input));
	let lineCount = $derived($input.length === 0 ? 0 : $input.split('\n').length);
	let statusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${lineCount.toLocaleString()} ${$t('ui.text_counter.lines', 'lines')}`
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
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.text_counter.words', 'Words')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{metrics.words.toLocaleString()}</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.text_counter.characters', 'Characters')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{metrics.characters.toLocaleString()}</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.text_counter.characters_no_spaces', 'Characters (no spaces)')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{metrics.charactersNoSpaces.toLocaleString()}</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.text_counter.sentences', 'Sentences')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{metrics.sentences.toLocaleString()}</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.text_counter.paragraphs', 'Paragraphs')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{metrics.paragraphs.toLocaleString()}</div>
			</div>
			<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
				<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.text_counter.reading_time', 'Reading time')}</div>
				<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{metrics.readingTimeMinutes} {$t('ui.text_counter.minutes', 'min')}
				</div>
			</div>
		</div>

		<div class="mt-[var(--space-2)] flex items-center justify-between text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
			<span>{statusLine}</span>
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

	<div class="flex-1 overflow-hidden bg-[var(--bg-base)]">
		<textarea
			bind:value={$input}
			class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
			placeholder={$t('ui.text_counter.placeholder', 'Type or paste your text here...')}
			spellcheck="false"
		></textarea>
	</div>
</div>

<ConfirmModal
	bind:open={confirmModalOpen}
	title={confirmTitle}
	message={confirmMessage}
	onConfirm={doClearInput}
	onCancel={() => {}}
/>
