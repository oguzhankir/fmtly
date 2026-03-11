<script lang="ts">
	import { onMount } from 'svelte';
	import EditorModeToggle from '$components/editor/EditorModeToggle.svelte';
	import type { EditorMode } from '$components/editor/EditorModeToggle.svelte';
	import { initInput, input } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import { jsonSamples } from '$lib/utils/jsonSamples.js';
	import { Upload, Eraser, Link2, ClipboardPaste } from 'lucide-svelte';

	let {
		toolSlug,
		inputLanguage,
		sampleInput = ''
	}: {
		toolSlug: string;
		inputLanguage: string;
		sampleInput?: string;
	} = $props();

	let textareaEl: HTMLTextAreaElement | undefined = $state(undefined);
	let isDragOver = $state(false);
	let dragCounter = $state(0);
	let editorMode = $state<EditorMode>('editor');
	let MonacoEditor: typeof import('$components/editor/MonacoEditor.svelte').default | undefined =
		$state(undefined);
	let selectedSample = $state('');
	let clipboardJson = $state('');
	let encodingInfo = $derived.by(() => {
		const chars = $input.length;
		const lines = $input.length === 0 ? 0 : $input.split('\n').length;
		return `UTF-8 · ${chars.toLocaleString()} chars · ${lines.toLocaleString()} lines`;
	});
	let sampleOptions = $derived.by(() =>
		jsonSamples.map((sample) =>
			sample.id === 'tool-sample' && sampleInput
				? { ...sample, value: sampleInput }
				: sample
		)
	);

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

		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				input.set(reader.result);
				addToast('success', `Loaded ${file.name}`);
			}
		};
		reader.readAsText(file);
	}

	function handleInput(event: Event): void {
		const target = event.target as HTMLTextAreaElement;
		input.set(target.value);
	}

	async function handleFocus(): Promise<void> {
		if (editorMode === 'editor' && !MonacoEditor) {
			loadMonacoComponent();
		}

		if (!navigator.clipboard?.readText) return;

		try {
			const text = await navigator.clipboard.readText();
			JSON.parse(text);
			if (text && text !== $input) {
				clipboardJson = text;
			}
		} catch {
			clipboardJson = '';
		}
	}

	function loadSample(value: string): void {
		const sample = sampleOptions.find((entry) => entry.id === value);
		if (!sample) return;
		selectedSample = value;
		if (sample.value) {
			input.set(sample.value);
			addToast('success', `Loaded ${sample.label}`);
		}
	}

	function clearInputValue(): void {
		input.set('');
		clipboardJson = '';
		addToast('info', 'Input cleared');
	}

	async function loadUrl(): Promise<void> {
		const url = window.prompt('Load JSON from URL');
		if (!url) return;

		try {
			const response = await fetch(url);
			const text = await response.text();
			JSON.parse(text);
			input.set(text);
			addToast('success', 'Loaded JSON from URL');
		} catch {
			addToast('error', 'Could not load valid JSON from that URL');
		}
	}

	function pasteClipboardJson(): void {
		if (!clipboardJson) return;
		input.set(clipboardJson);
		clipboardJson = '';
		addToast('success', 'Pasted JSON from clipboard');
	}
</script>

<div
	class="relative flex h-full w-full flex-col"
	ondragenter={handleDragEnter}
	ondragleave={handleDragLeave}
	ondragover={handleDragOver}
	ondrop={handleDrop}
	role="region"
	aria-label="JSON input panel"
>
	<div class="json-input-toolbar">
		<div class="json-input-toolbar__group">
			<button type="button" class="json-input-btn" onclick={loadUrl}>
				<Link2 size={13} />
				Load URL
			</button>
			<label class="json-input-select">
				<span>Sample</span>
				<select bind:value={selectedSample} onchange={(event) => loadSample((event.currentTarget as HTMLSelectElement).value)}>
					<option value="">Choose…</option>
					{#each sampleOptions as sample}
						<option value={sample.id}>{sample.label}</option>
					{/each}
				</select>
			</label>
		</div>
		<div class="json-input-toolbar__group">
			<EditorModeToggle bind:mode={editorMode} onchange={handleModeChange} />
			{#if $input}
				<button type="button" class="json-input-btn" onclick={clearInputValue}>
					<Eraser size={13} />
					Clear
				</button>
			{/if}
		</div>
	</div>

	{#if clipboardJson}
		<div class="json-input-banner">
			<button type="button" class="json-input-banner__action" onclick={pasteClipboardJson}>
				<ClipboardPaste size={13} />
				Paste JSON from clipboard
			</button>
		</div>
	{/if}

	<div class="relative flex-1 overflow-hidden">
		{#if editorMode === 'editor' && MonacoEditor}
			<MonacoEditor language={inputLanguage} wordWrap={true} />
		{:else}
			<textarea
				bind:this={textareaEl}
				value={$input}
				oninput={handleInput}
				onfocus={handleFocus}
				placeholder="Paste JSON here, drop a file, or load a sample"
				class="json-input-textarea"
				spellcheck="false"
				autocomplete="off"
			></textarea>
		{/if}
	</div>

	<div class="json-input-meta">
		<span>{encodingInfo}</span>
		<span class="json-input-meta__hint"><Upload size={12} /> Drop `.json` files</span>
	</div>

	{#if isDragOver}
		<div class="json-input-drop">
			<div class="json-input-drop__card">
				<p>Drop your JSON file here</p>
			</div>
		</div>
	{/if}
</div>

<style>
	.json-input-toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.json-input-toolbar__group {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	.json-input-btn,
	.json-input-select {
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

	.json-input-select select {
		border: none;
		background: transparent;
		color: var(--text-primary);
		font: inherit;
		outline: none;
	}

	.json-input-btn:hover,
	.json-input-select:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.json-input-banner {
		padding: 0 var(--space-3) var(--space-2);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.json-input-banner__action {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		height: 28px;
		padding: 0 var(--space-2);
		border: 1px solid var(--accent-border);
		border-radius: var(--radius-md);
		background: var(--accent-dim);
		color: var(--text-primary);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 500;
		cursor: pointer;
	}

	.json-input-textarea {
		height: 100%;
		width: 100%;
		resize: none;
		border: none;
		background: transparent;
		padding: var(--space-4);
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		line-height: var(--leading-relaxed);
		color: var(--text-primary);
		outline: none;
	}

	.json-input-textarea::placeholder {
		color: var(--text-muted);
	}

	.json-input-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		padding: 0 var(--space-3);
		height: 28px;
		border-top: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 11px;
		color: var(--text-muted);
	}

	.json-input-meta__hint {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}

	.json-input-drop {
		position: absolute;
		inset: 0;
		z-index: var(--z-overlay);
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-overlay);
		backdrop-filter: blur(6px);
	}

	.json-input-drop__card {
		padding: var(--space-6) var(--space-8);
		border: 2px dashed var(--accent-border);
		border-radius: var(--radius-xl);
		background: var(--bg-elevated);
		color: var(--text-primary);
		font-family: var(--font-ui);
		font-size: var(--text-base);
	}

	@media (max-width: 767px) {
		.json-input-toolbar,
		.json-input-meta {
			padding-left: var(--space-2);
			padding-right: var(--space-2);
		}

		.json-input-meta {
			flex-direction: column;
			align-items: flex-start;
			height: auto;
			padding-top: 6px;
			padding-bottom: 6px;
		}
	}
</style>
