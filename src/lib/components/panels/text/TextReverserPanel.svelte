<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ToolDefinition } from '$registry/types.js';
	import WorkspaceTabs from '$components/tool/WorkspaceTabs.svelte';
	import { reverseText, type TextReverseResults } from '$engines/text/index.js';
	import { input, initInput, inputByteSize, formatByteSize } from '$stores/input.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Eraser } from 'lucide-svelte';
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

	let results = $derived(reverseText($input));
	let lineCount = $derived($input.length === 0 ? 0 : $input.split(/\r?\n/).length);
	let statusLine = $derived(
		`${formatByteSize($inputByteSize)} · ${lineCount.toLocaleString()} ${$t('ui.text_reverser.lines_count', 'lines')}`
	);

	const outputOrder: Array<keyof TextReverseResults> = ['characters', 'words', 'lines'];

	const labelMap: Record<keyof TextReverseResults, string> = {
		characters: 'ui.text_reverser.characters',
		words: 'ui.text_reverser.words',
		lines: 'ui.text_reverser.lines'
	};

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

	function handleCopyClick(event: MouseEvent): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLButtonElement)) return;
		const key = target.dataset.reverseKey as keyof TextReverseResults | undefined;
		if (!key) return;
		void copyValue(results[key]);
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

	<div class="grid h-full min-h-0 grid-cols-1 md:grid-cols-2">
		<div class="flex min-h-0 flex-col border-r border-[var(--border-default)] bg-[var(--bg-base)]">
			<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
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
			<textarea
				bind:value={$input}
				class="h-full w-full resize-none border-0 bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] outline-none"
				placeholder={$t('ui.text_reverser.placeholder', 'Type or paste text to reverse...')}
				spellcheck="false"
			></textarea>
		</div>

		<div class="flex min-h-0 flex-col overflow-y-auto bg-[var(--bg-surface)] p-[var(--space-3)]">
			<div class="grid grid-cols-1 gap-[var(--space-2)]">
				{#each outputOrder as key}
					<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-3)]">
						<div class="mb-[var(--space-2)] flex items-center justify-between gap-[var(--space-2)]">
							<h3 class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]">
								{$t(labelMap[key], key)}
							</h3>
							<button
								type="button"
								data-reverse-key={key}
								onclick={handleCopyClick}
								class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
							>
								<Copy size={12} />
								{$t('ui.actions.copy', 'Copy')}
							</button>
						</div>
						<div class="max-h-32 overflow-y-auto whitespace-pre-wrap break-all rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[var(--space-2)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)]">
							{results[key]}
						</div>
					</div>
				{/each}
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
