<script lang="ts">
	import { onMount } from 'svelte';
	import { input, initInput } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$stores/language';
	import ConfirmModal from '$components/modals/ConfirmModal.svelte';
	import EditorModeToggle from '$components/editor/EditorModeToggle.svelte';
	import type { EditorMode } from '$components/editor/EditorModeToggle.svelte';
	import { fetchRemoteText } from '$lib/utils/url-loader.js';
	import { Eraser, Link2, X } from 'lucide-svelte';

	type RemoteInputKind = 'yaml' | 'csv';

	let {
		toolSlug,
		inputLanguage,
		wordWrap = true,
		acceptedExtensions = ['.json', '.xml', '.yaml', '.yml', '.csv', '.txt', '.log'],
		sampleInput = '',
		enableRemoteActions = false,
		remoteInputKind
	}: {
		toolSlug: string;
		inputLanguage: string;
		wordWrap?: boolean;
		acceptedExtensions?: string[];
		sampleInput?: string;
		enableRemoteActions?: boolean;
		remoteInputKind?: RemoteInputKind;
	} = $props();

	let isEmpty = $derived(!$input || $input.trim().length === 0);

	function loadSample(): void {
		if (sampleInput) {
			input.set(sampleInput);
		}
	}

	let textareaEl: HTMLTextAreaElement | undefined = $state(undefined);
	let isDragOver = $state(false);
	let dragCounter = $state(0);
	let editorMode = $state<EditorMode>('editor');
	let MonacoEditor: typeof import('$components/editor/MonacoEditor.svelte').default | undefined =
		$state(undefined);
	let showLoadUrl = $state(false);
	let loadUrlValue = $state('');
	let confirmModalOpen = $state(false);
	let confirmTitle = $state('');
	let confirmMessage = $state('');

	onMount(() => {
		initInput(toolSlug);
		if (editorMode === 'simple') {
			textareaEl?.focus();
		}
	});

	function handleModeChange(mode: EditorMode): void {
		editorMode = mode;
		if (mode === 'editor' && !MonacoEditor) {
			loadMonacoComponent();
		}
	}

	async function loadMonacoComponent(): Promise<void> {
		const mod = await import('$components/editor/MonacoEditor.svelte');
		MonacoEditor = mod.default;
	}

	function handleDragEnter(event: DragEvent): void {
		event.preventDefault();
		dragCounter++;
		isDragOver = true;
	}

	function handleDragLeave(event: DragEvent): void {
		event.preventDefault();
		dragCounter--;
		if (dragCounter <= 0) {
			isDragOver = false;
			dragCounter = 0;
		}
	}

	function handleDragOver(event: DragEvent): void {
		event.preventDefault();
	}

	function handleDrop(event: DragEvent): void {
		event.preventDefault();
		isDragOver = false;
		dragCounter = 0;

		const file = event.dataTransfer?.files[0];
		if (!file) return;

		const ext = `.${file.name.split('.').pop()?.toLowerCase()}`;
		if (!acceptedExtensions.includes(ext)) return;

		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				input.set(reader.result);
			}
		};
		reader.readAsText(file);
	}

	function handleInput(event: Event): void {
		const target = event.target as HTMLTextAreaElement;
		input.set(target.value);
	}

	function handleTextareaFocus(): void {
		if (editorMode === 'editor' && !MonacoEditor) {
			loadMonacoComponent();
		}
	}

	function getUrlPlaceholder(): string {
		switch (remoteInputKind) {
			case 'yaml':
				return 'https://example.com/data.yaml';
			case 'csv':
				return 'https://example.com/data.csv';
			default:
				return 'https://example.com/data.txt';
		}
	}

	async function validateRemoteText(text: string): Promise<void> {
		switch (remoteInputKind) {
			case 'yaml': {
				const { parseYAMLText } = await import('$stores/yaml.store.js');
				const result = await parseYAMLText(text);
				if (!result.success) {
					throw new Error('Response does not look like YAML');
				}
				return;
			}
			case 'csv': {
				const [{ get }, { csvProcessingOptions }, { parseCSV }] = await Promise.all([
					import('svelte/store'),
					import('$stores/csv.store.js'),
					import('$engines/csv/index.js')
				]);
				const csvOptions = get(csvProcessingOptions);
				const result = await parseCSV(text, {
					delimiter: csvOptions.delimiter,
					skipEmptyLines: csvOptions.skipEmptyLines,
					trimCells: csvOptions.trimCells
				});
				if (!result.success) {
					throw new Error('Response does not look like CSV');
				}
				return;
			}
			default:
				return;
		}
	}

	function clearInputValue(): void {
		if ($input.length > 1000) {
			confirmTitle = $t(
				'ui.confirm.clear',
				{ language: inputLanguage.toUpperCase() },
				`Clear the current ${inputLanguage.toUpperCase()} input?`
			);
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
		if (!url || !remoteInputKind) return;

		try {
			const text = await fetchRemoteText(url);
			await validateRemoteText(text);
			input.set(text);
			showLoadUrl = false;
			loadUrlValue = '';
			addToast('success', $t('ui.toast.url_loaded', 'Loaded from URL'));
		} catch {
			addToast('error', $t('ui.toast.url_error', 'Could not fetch — try pasting directly'));
		}
	}
</script>

<div
	class="relative flex h-full w-full flex-col"
	ondragenter={handleDragEnter}
	ondragleave={handleDragLeave}
	ondragover={handleDragOver}
	ondrop={handleDrop}
	role="region"
	aria-label={$t('ui.layout.aria.input_panel', 'Input panel')}
>
	<!-- Mode toggle toolbar -->
	<div
		class="flex items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[var(--space-1)]"
	>
		<div class="flex min-w-0 flex-wrap items-center gap-[var(--space-2)]">
			{#if enableRemoteActions}
				<div class="relative">
					<button
						type="button"
						class="inline-flex h-[28px] items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-[var(--space-2)] text-[12px] font-[500] text-[var(--text-secondary)]"
						onclick={() => (showLoadUrl = !showLoadUrl)}
					>
						<Link2 size={13} />
						{$t('ui.actions.load_url', 'Load URL')}
					</button>
					{#if showLoadUrl}
						<div class="absolute left-0 top-[calc(100%+6px)] z-[var(--z-dropdown)] flex w-[min(320px,80vw)] flex-col gap-[var(--space-2)] rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-elevated)] p-[var(--space-2)] shadow-[var(--shadow-md)]">
							<input
								bind:value={loadUrlValue}
								type="url"
								class="h-[32px] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[12px] text-[var(--text-primary)] outline-none"
								placeholder={getUrlPlaceholder()}
							/>
							<div class="flex justify-end gap-[var(--space-2)]">
								<button
									type="button"
									class="inline-flex h-[28px] items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-[var(--space-2)] text-[12px] font-[500] text-[var(--text-secondary)]"
									onclick={() => (showLoadUrl = false)}
								>
									<X size={13} />
									{$t('ui.actions.close', 'Close')}
								</button>
								<button
									type="button"
									class="inline-flex h-[28px] items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-[var(--space-2)] text-[12px] font-[500] text-[var(--text-secondary)]"
									onclick={loadUrl}
								>
									<Link2 size={13} />
									{$t('ui.actions.fetch', 'Fetch')}
								</button>
							</div>
						</div>
					{/if}
				</div>
				{#if !isEmpty}
					<button
						type="button"
						class="inline-flex h-[28px] items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-elevated)] px-[var(--space-2)] text-[12px] font-[500] text-[var(--text-secondary)]"
						onclick={clearInputValue}
					>
						<Eraser size={13} />
						{$t('ui.actions.clear', 'Clear')}
					</button>
				{/if}
			{/if}
		</div>
		<EditorModeToggle bind:mode={editorMode} onchange={handleModeChange} />
	</div>

	<!-- Editor area -->
	<div class="relative flex-1 overflow-hidden">
		{#if editorMode === 'editor' && MonacoEditor}
			<MonacoEditor language={inputLanguage} {wordWrap} />
		{:else}
			<textarea
				bind:this={textareaEl}
				value={$input}
				oninput={handleInput}
				onfocus={handleTextareaFocus}
				placeholder={$t('ui.paste_here', { language: inputLanguage.toUpperCase() }, `Paste ${inputLanguage.toUpperCase()} here…`)}
				class="h-full w-full resize-none border-none bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none"
				spellcheck="false"
				autocomplete="off"
			></textarea>
		{/if}

		{#if isEmpty && sampleInput}
			<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
				<button
					onclick={loadSample}
					class="pointer-events-auto rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-secondary)] shadow-[var(--shadow-sm)] transition-colors duration-[var(--duration-fast)] hover:border-[var(--border-focus)] hover:text-[var(--text-primary)]"
				>
					{$t('ui.load_sample', 'Load a sample')}
				</button>
			</div>
		{/if}
	</div>

	<!-- Drop overlay -->
	{#if isDragOver}
		<div
			class="absolute inset-0 z-[var(--z-overlay)] flex items-center justify-center bg-[var(--bg-overlay)] backdrop-blur-sm"
		>
			<div
				class="rounded-[var(--radius-xl)] border-2 border-dashed border-[var(--bg-accent)] px-[var(--space-8)] py-[var(--space-6)]"
			>
				<p class="text-[length:var(--text-lg)] font-[number:var(--weight-medium)] text-[var(--text-primary)]">
					{$t('ui.drop_to_load', 'Drop your file here')}
				</p>
			</div>
		</div>
	{/if}
</div>

{#if enableRemoteActions}
	<ConfirmModal bind:open={confirmModalOpen} title={confirmTitle} message={confirmMessage} onConfirm={doClearInput} onCancel={() => {}} />
{/if}
