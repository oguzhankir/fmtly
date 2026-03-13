<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { validateJSON } from '$engines/json/index.js';
	import type { ToolDefinition } from '$registry/types.js';
	import { jsonStats } from '$stores/json.store';
	import { formatByteSize, initInput, input, inputByteSize } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$stores/language';
	import { jsonSamples } from '$lib/utils/jsonSamples.js';
	import {
		Upload,
		Eraser,
		Link2,
		ClipboardPaste,
		Circle,
		ChevronDown,
		X
	} from 'lucide-svelte';

	let {
		toolSlug,
		inputLanguage,
		sampleInput = '',
		workspaceTools = []
	}: {
		toolSlug: string;
		inputLanguage: string;
		sampleInput?: string;
		workspaceTools?: ToolDefinition[];
	} = $props();

	let fileInputEl: HTMLInputElement | undefined = $state(undefined);
	let isDragOver = $state(false);
	let dragCounter = $state(0);
	let MonacoEditor: typeof import('$components/editor/MonacoEditor.svelte').default | undefined =
		$state(undefined);
	let selectedSample = $state('');
	let clipboardJson = $state('');
	let initializedToolSlug = $state('');
	let showLoadUrl = $state(false);
	let loadUrlValue = $state('');
	let loadedFilename = $state('');
	let validationResult = $derived(validateJSON($input));
	let statusInfo = $derived.by(() => {
		const lines = $input.length === 0 ? 0 : $input.split('\n').length;
		const depth = $jsonStats?.maxDepth ?? 0;
		return `UTF-8 · ${formatByteSize($inputByteSize)} · ${lines.toLocaleString()} lines · depth: ${depth}`;
	});
	let validityLabel = $derived.by(() => {
		if (!$input.trim()) return $t('ui.validity.empty', 'Empty');
		if (validationResult.valid) return $t('ui.validity.valid', { language: 'JSON' }, 'Valid JSON');
		const firstError = validationResult.errors[0];
		if (!firstError) return $t('ui.validity.invalid', { language: 'JSON' }, 'Invalid JSON');
		return $t('ui.validity.error_at', {
			line: firstError.line,
			column: firstError.column,
			message: firstError.message
		}, `Line ${firstError.line}, Col ${firstError.column}: ${firstError.message}`);
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
		initializedToolSlug = toolSlug;
		void loadMonacoComponent();
	});

	$effect(() => {
		if (initializedToolSlug === '' || initializedToolSlug === toolSlug) return;
		initInput(toolSlug);
		initializedToolSlug = toolSlug;
	});

	async function loadMonacoComponent(): Promise<void> {
		const mod = await import('$components/editor/MonacoEditor.svelte');
		MonacoEditor = mod.default;
	}

	function handleFileContent(content: string, label: string): void {
		input.set(content);
		loadedFilename = label;
		addToast('success', $t('ui.toast.file_loaded', { name: label }, `File loaded: ${label}`));
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
		if (!file.type.startsWith('text/') && !/\.(json|txt)$/i.test(file.name)) {
			addToast('error', $t('ui.error.only_json_txt', 'Only .json and .txt files are supported'));
			return;
		}

		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				handleFileContent(reader.result, file.name);
			}
		};
		reader.readAsText(file);
	}

	async function handleFocus(): Promise<void> {
		if (!MonacoEditor) {
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
			loadedFilename = sample.label;
			addToast('success', ($t as any)('ui.loaded_sample', 'Loaded {label}', { label: sample.label }));
		}
	}

	function clearInputValue(): void {
		if ($input.length > 1000 && !window.confirm(($t as any)('ui.confirm.clear', { language: 'JSON' }, 'Clear the current JSON input?'))) {
			return;
		}
		input.set('');
		clipboardJson = '';
		loadedFilename = '';
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
	}

	async function loadUrl(): Promise<void> {
		const url = loadUrlValue.trim();
		if (!url) return;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Request failed');
			}
			const text = await response.text();
			JSON.parse(text);
			input.set(text);
			loadedFilename = new URL(url).hostname;
			showLoadUrl = false;
			loadUrlValue = '';
			addToast('success', 'Loaded JSON from URL');
		} catch {
			addToast('error', 'Could not fetch — try pasting directly');
		}
	}

	function triggerUpload(): void {
		fileInputEl?.click();
	}

	function handleUpload(event: Event): void {
		const target = event.currentTarget as HTMLInputElement;
		const file = target.files?.[0];
		if (!file) return;
		if (!file.type.startsWith('text/') && !/\.(json|txt)$/i.test(file.name)) {
			addToast('error', $t('ui.error.only_json_txt', 'Only .json and .txt files are supported'));
			target.value = '';
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === 'string') {
				handleFileContent(reader.result, file.name);
				target.value = '';
			}
		};
		reader.readAsText(file);
	}

	function pasteClipboardJson(): void {
		if (!clipboardJson) return;
		input.set(clipboardJson);
		loadedFilename = 'Clipboard JSON';
		clipboardJson = '';
		addToast('success', 'Pasted JSON from clipboard');
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

<div
	class="relative flex h-full w-full flex-col"
	ondragenter={handleDragEnter}
	ondragleave={handleDragLeave}
	ondragover={handleDragOver}
	ondrop={handleDrop}
	role="region"
	aria-label="JSON input panel"
>
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

	<div class="json-input-toolbar">
		<div class="json-input-toolbar__group">
			<input
				bind:this={fileInputEl}
				type="file"
				accept=".json,.txt,text/plain,application/json"
				class="sr-only"
				onchange={handleUpload}
			/>
			<div class="json-input-popover-wrap">
				<button type="button" class="json-input-btn" onclick={() => (showLoadUrl = !showLoadUrl)}>
					<Link2 size={13} />
					{$t('ui.actions.load_url', 'Load URL')}
				</button>
				{#if showLoadUrl}
					<div class="json-input-popover">
						<input
							bind:value={loadUrlValue}
							type="url"
							class="json-input-popover__field"
							placeholder="https://example.com/data.json"
						/>
						<div class="json-input-popover__actions">
							<button type="button" class="json-input-btn" onclick={() => (showLoadUrl = false)}>
								<X size={13} />
								{$t('ui.actions.close', 'Close')}
							</button>
							<button type="button" class="json-input-btn" onclick={loadUrl}>
								<Link2 size={13} />
								{$t('ui.actions.fetch', 'Fetch')}
							</button>
						</div>
					</div>
				{/if}
			</div>
			<label class="json-input-select">
				<span>{$t('ui.actions.sample', 'Sample')}</span>
				<ChevronDown size={12} />
				<select
					bind:value={selectedSample}
					onchange={(event) => loadSample((event.currentTarget as HTMLSelectElement).value)}
				>
					<option value="">{$t('ui.actions.choose_sample', 'Choose…')}</option>
					{#each sampleOptions as sample}
						<option value={sample.id}>{sample.label}</option>
					{/each}
				</select>
			</label>
		</div>
		<div class="json-input-toolbar__group">
			<button type="button" class="json-input-btn" onclick={triggerUpload}>
				<Upload size={13} />
				{$t('ui.actions.upload', 'Upload')}
			</button>
			{#if $input}
				<button type="button" class="json-input-btn" onclick={clearInputValue}>
					<Eraser size={13} />
					{$t('ui.actions.clear', 'Clear')}
				</button>
			{/if}
		</div>
	</div>

	{#if clipboardJson}
		<div class="json-input-banner">
			<button type="button" class="json-input-banner__action" onclick={pasteClipboardJson}>
				<ClipboardPaste size={13} />
				{$t('ui.paste_json', 'Paste JSON from clipboard')}
			</button>
		</div>
	{/if}

	<div class="relative flex-1 overflow-hidden">
		{#if MonacoEditor}
			<MonacoEditor language={inputLanguage} wordWrap={false} />
		{:else}
			<div class="json-input-loading">
				Loading editor…
			</div>
		{/if}
	</div>

	<div class="json-input-meta">
		<div class="json-input-meta__section json-input-meta__section--left">
			<span
				class="json-input-meta__validity"
				class:json-input-meta__validity--valid={validationResult.valid && $input.trim().length > 0}
				class:json-input-meta__validity--invalid={!validationResult.valid && $input.trim().length > 0}
			>
				<Circle size={8} fill="currentColor" />
				{validityLabel}
			</span>
		</div>
		<div class="json-input-meta__section json-input-meta__section--center">
			<span>{$t('ui.stats.info', {
				encoding: 'UTF-8',
				size: formatByteSize($inputByteSize),
				lines: $input.length === 0 ? 0 : $input.split('\n').length,
				depth: $jsonStats?.maxDepth ?? 0
			})}</span>
			{#if loadedFilename}
				<span class="json-input-meta__file">{loadedFilename}</span>
			{/if}
		</div>
		<div class="json-input-meta__section json-input-meta__section--right">
			<span class="json-input-meta__hint"><Upload size={12} /> {($t as any)('ui.drop_files', { extension: 'json' }, 'Drop .json files')}</span>
		</div>
	</div>

	{#if isDragOver}
		<div class="json-input-drop">
			<div class="json-input-drop__card">
				<p>{$t('ui.drop_to_load', 'Drop to load')}</p>
			</div>
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

	.json-input-popover-wrap {
		position: relative;
	}

	.json-input-popover {
		position: absolute;
		top: calc(100% + 6px);
		left: 0;
		z-index: var(--z-dropdown);
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		width: min(320px, 80vw);
		padding: var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-lg);
		background: var(--bg-elevated);
		box-shadow: var(--shadow-md);
	}

	.json-input-popover__field {
		height: 32px;
		padding: 0 var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-base);
		color: var(--text-primary);
		font-family: var(--font-ui);
		font-size: 12px;
		outline: none;
	}

	.json-input-popover__actions {
		display: flex;
		justify-content: flex-end;
		gap: var(--space-2);
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

	.json-input-meta__section {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		min-width: 0;
	}

	.json-input-meta__section--center {
		flex: 1;
		justify-content: center;
	}

	.json-input-meta__section--right {
		justify-content: flex-end;
	}

	.json-input-meta__validity {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--text-muted);
	}

	.json-input-meta__validity--valid {
		color: var(--success);
	}

	.json-input-meta__validity--invalid {
		color: var(--error);
	}

	.json-input-meta__file {
		color: var(--text-secondary);
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
		border: 2px dashed var(--accent);
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

		.json-input-meta__section,
		.json-input-meta__section--center,
		.json-input-meta__section--right {
			flex: none;
			justify-content: flex-start;
		}
	}
</style>
