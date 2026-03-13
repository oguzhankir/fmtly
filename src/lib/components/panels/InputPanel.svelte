<script lang="ts">
	import { onMount } from 'svelte';
	import { input, initInput } from '$stores/input.store';
	import { t } from '$stores/language';
	import EditorModeToggle from '$components/editor/EditorModeToggle.svelte';
	import type { EditorMode } from '$components/editor/EditorModeToggle.svelte';

	let {
		toolSlug,
		inputLanguage,
		wordWrap = true,
		acceptedExtensions = ['.json', '.xml', '.yaml', '.yml', '.csv', '.txt', '.log'],
		sampleInput = ''
	}: {
		toolSlug: string;
		inputLanguage: string;
		wordWrap?: boolean;
		acceptedExtensions?: string[];
		sampleInput?: string;
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
</script>

<div
	class="relative flex h-full w-full flex-col"
	ondragenter={handleDragEnter}
	ondragleave={handleDragLeave}
	ondragover={handleDragOver}
	ondrop={handleDrop}
	role="region"
	aria-label="Input panel"
>
	<!-- Mode toggle toolbar -->
	<div
		class="flex items-center justify-end border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[var(--space-1)]"
	>
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
