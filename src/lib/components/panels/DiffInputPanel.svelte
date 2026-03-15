<script lang="ts">
	import { onMount } from 'svelte';
	import { t } from '$lib/stores/language.js';
	import { addToast } from '$stores/toast.store';
	import { WandSparkles, Upload, Eraser, Circle } from 'lucide-svelte';
	import type StandaloneMonacoEditorType from '$components/editor/StandaloneMonacoEditor.svelte';

	let {
		value = '',
		onchange,
		language = 'json',
		placeholder
	}: {
		value?: string;
		onchange?: (value: string) => void;
		language?: string;
		placeholder?: string;
	} = $props();

	let languageLabel = $derived(language === 'xml' ? 'XML' : 'JSON');
	let reactivePlaceholder = $derived(
		placeholder ??
			(language === 'xml'
				? $t('ui.placeholder.original_xml', 'Paste XML here…')
				: $t('ui.placeholder.original_json', 'Paste JSON here…'))
	);
	let acceptedFileTypes = $derived(
		language === 'xml'
			? '.xml,.txt,text/plain,application/xml,text/xml'
			: '.json,.txt,text/plain,application/json'
	);

	let StandaloneMonacoEditor: typeof StandaloneMonacoEditorType | undefined = $state(undefined);
	let editorRef: StandaloneMonacoEditorType | undefined = $state(undefined);
	let fileInputEl: HTMLInputElement | undefined = $state(undefined);
	let isDragOver = $state(false);
	let dragCounter = $state(0);

	function isValidXml(input: string): boolean {
		if (typeof DOMParser === 'undefined') return true;
		const doc = new DOMParser().parseFromString(input, 'application/xml');
		return !doc.querySelector('parsererror');
	}

	let isValidContent = $derived.by(() => {
		if (!value.trim()) return null;
		if (language === 'xml') return isValidXml(value);
		try {
			JSON.parse(value);
			return true;
		} catch {
			return false;
		}
	});

	let validityLabel = $derived.by(() => {
		if (isValidContent === null) return $t('ui.validity.empty', 'Empty');
		return isValidContent
			? $t('ui.validity.valid', { language: languageLabel }, `Valid ${languageLabel}`)
			: $t('ui.validity.invalid', { language: languageLabel }, `Invalid ${languageLabel}`);
	});

	onMount(() => {
		void loadEditor();
	});

	async function loadEditor(): Promise<void> {
		const mod = await import('$components/editor/StandaloneMonacoEditor.svelte');
		StandaloneMonacoEditor = mod.default;
	}

	async function formatInput(): Promise<void> {
		if (!value.trim()) return;
		if (language === 'xml') {
			const { formatXML } = await import('$lib/engines/xml/index.js');
			const result = formatXML(value, { indent: 2 });
			if (result.success) {
				onchange?.(result.output);
				return;
			}
			addToast(
				'error',
				$t(
					'ui.diff.toast.format_error',
					{ language: languageLabel },
					`Cannot format — invalid ${languageLabel}`
				)
			);
			return;
		}
		try {
			const formatted = JSON.stringify(JSON.parse(value), null, 2);
			onchange?.(formatted);
		} catch {
			addToast(
				'error',
				$t(
					'ui.diff.toast.format_error',
					{ language: languageLabel },
					`Cannot format — invalid ${languageLabel}`
				)
			);
		}
	}

	function clearValue(): void {
		onchange?.('');
	}

	function triggerUpload(): void {
		fileInputEl?.click();
	}

	function handleUpload(event: Event): void {
		const target = event.currentTarget as HTMLInputElement;
		const file = target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				onchange?.(reader.result);
				addToast('success', $t('ui.toast.file_loaded', { name: file.name }, `File loaded: ${file.name}`));
				target.value = '';
			}
		};
		reader.readAsText(file);
	}

	function handleDragEnter(event: DragEvent): void {
		event.preventDefault();
		dragCounter++;
		isDragOver = true;
	}

	function handleDragLeave(event: DragEvent): void {
		event.preventDefault();
		dragCounter--;
		if (dragCounter <= 0) { isDragOver = false; dragCounter = 0; }
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
				onchange?.(reader.result);
				addToast('success', $t('ui.toast.file_loaded', { name: file.name }, `File loaded: ${file.name}`));
			}
		};
		reader.readAsText(file);
	}
</script>

<div
	class="diff-input-wrap"
	ondragenter={handleDragEnter}
	ondragleave={handleDragLeave}
	ondragover={handleDragOver}
	ondrop={handleDrop}
	role="region"
	aria-label={$t('ui.diff.labels.input_panel', 'Diff input panel')}
>
	<input
		bind:this={fileInputEl}
		type="file"
		accept={acceptedFileTypes}
		class="sr-only"
		onchange={handleUpload}
	/>

	<div class="diff-input-toolbar">
		<div class="diff-toolbar-group">
			<button type="button" class="diff-toolbar-btn" onclick={formatInput} title={$t('ui.diff.actions.format', 'Format')}>
				<WandSparkles size={12} />
				{$t('ui.diff.actions.format', 'Format')}
			</button>
			<button type="button" class="diff-toolbar-btn" onclick={triggerUpload} title={$t('ui.actions.upload', 'Upload file')}>
				<Upload size={12} />
				{$t('ui.actions.upload', 'Upload')}
			</button>
		</div>
		{#if value}
			<button type="button" class="diff-toolbar-btn diff-toolbar-btn--ghost" onclick={clearValue} aria-label={$t('ui.actions.clear', 'Clear')}>
				<Eraser size={12} />
			</button>
		{/if}
	</div>

	<div class="diff-editor-area">
		{#if StandaloneMonacoEditor}
			<StandaloneMonacoEditor
				bind:this={editorRef}
				{value}
				onchange={(v) => onchange?.(v)}
				{language}
				placeholder={reactivePlaceholder}
			/>
		{:else}
			<textarea
				{value}
				oninput={(e) => onchange?.((e.target as HTMLTextAreaElement).value)}
				placeholder={reactivePlaceholder}
				class="h-full w-full resize-none border-none bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none"
				spellcheck="false"
				autocomplete="off"
			></textarea>
		{/if}
	</div>

	<div class="diff-input-meta">
		<span
			class="diff-validity"
			class:diff-validity--valid={isValidContent === true}
			class:diff-validity--invalid={isValidContent === false}
		>
			<Circle size={7} fill="currentColor" />
			{validityLabel}
		</span>
		{#if value.trim()}
			<span class="diff-meta-chars">{value.length.toLocaleString()} {$t('ui.diff.meta.chars', 'chars')}</span>
		{/if}
	</div>

	{#if isDragOver}
		<div class="diff-drop-overlay">
			<div class="diff-drop-card">
				<p>{$t('ui.drop_to_load', 'Drop to load')}</p>
			</div>
		</div>
	{/if}
</div>

<style>
	.diff-input-wrap {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}

	.diff-input-toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-1);
		padding: 4px 8px;
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		flex-shrink: 0;
	}

	.diff-toolbar-group {
		display: flex;
		align-items: center;
		gap: var(--space-1);
	}

	.diff-toolbar-btn {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		height: 24px;
		padding: 0 8px;
		border: 1px solid var(--border-default);
		border-radius: var(--radius-sm);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 11px;
		font-weight: 500;
		cursor: pointer;
		transition: color 80ms, background 80ms;
	}

	.diff-toolbar-btn:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.diff-toolbar-btn--ghost {
		border-color: transparent;
		background: transparent;
	}

	.diff-editor-area {
		flex: 1;
		overflow: hidden;
		position: relative;
	}

	.diff-input-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		padding: 0 8px;
		height: 24px;
		border-top: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 10px;
		color: var(--text-muted);
		flex-shrink: 0;
	}

	.diff-validity {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		color: var(--text-muted);
	}

	.diff-validity--valid { color: var(--status-success); }
	.diff-validity--invalid { color: var(--status-error); }

	.diff-meta-chars {
		color: var(--text-muted);
	}

	.diff-drop-overlay {
		position: absolute;
		inset: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-overlay);
		backdrop-filter: blur(4px);
	}

	.diff-drop-card {
		padding: var(--space-4) var(--space-6);
		border: 2px dashed var(--accent);
		border-radius: var(--radius-xl);
		background: var(--bg-elevated);
		color: var(--text-primary);
		font-family: var(--font-ui);
		font-size: var(--text-sm);
	}
</style>
