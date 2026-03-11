<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { ToolDefinition } from '$registry/types.js';
	import { xmlStats, xmlError } from '$stores/xml.store';
	import { initInput, input, inputByteSize, formatByteSize } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import { xmlSamples } from '$lib/utils/xmlSamples.js';
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
		sampleInput = '',
		workspaceTools = []
	}: {
		toolSlug: string;
		sampleInput?: string;
		workspaceTools?: ToolDefinition[];
	} = $props();

	let fileInputEl: HTMLInputElement | undefined = $state(undefined);
	let isDragOver = $state(false);
	let dragCounter = $state(0);
	let MonacoEditor: typeof import('$components/editor/MonacoEditor.svelte').default | undefined =
		$state(undefined);
	let selectedSample = $state('');
	let clipboardXml = $state('');
	let initializedToolSlug = $state('');
	let showLoadUrl = $state(false);
	let loadUrlValue = $state('');
	let loadedFilename = $state('');

	let statusInfo = $derived.by(() => {
		const lines = $input.length === 0 ? 0 : $input.split('\n').length;
		const depth = $xmlStats?.maxDepth ?? 0;
		const bytes = formatByteSize($inputByteSize);
		return `UTF-8 · ${bytes} · ${lines.toLocaleString()} lines · depth: ${depth}`;
	});

	let validityLabel = $derived.by(() => {
		if (!$input.trim()) return 'Empty';
		if (!$xmlError) return 'Well-formed';
		const err = $xmlError;
		if (err.line != null && err.column != null) {
			return `Line ${err.line}, Col ${err.column}: ${err.message}`;
		}
		return err.message;
	});

	let isValid = $derived($input.trim().length > 0 && !$xmlError);
	let isInvalid = $derived($input.trim().length > 0 && !!$xmlError);

	let sampleOptions = $derived.by(() =>
		xmlSamples.map((sample) =>
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
		addToast('success', `File loaded: ${label}`);
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
		if (!isXmlFile(file)) {
			addToast('error', 'Only .xml, .svg, .xhtml, .xsd, .wsdl, and .txt files are supported');
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

	function isXmlFile(file: File): boolean {
		if (file.type.startsWith('text/')) return true;
		return /\.(xml|svg|xhtml|xsd|wsdl|txt)$/i.test(file.name);
	}

	async function handleFocus(): Promise<void> {
		if (!MonacoEditor) {
			void loadMonacoComponent();
		}

		if (!navigator.clipboard?.readText) return;

		try {
			const text = await navigator.clipboard.readText();
			if (text && text !== $input && looksLikeXml(text)) {
				clipboardXml = text;
			}
		} catch {
			clipboardXml = '';
		}
	}

	function looksLikeXml(text: string): boolean {
		const trimmed = text.trim();
		return trimmed.startsWith('<') && trimmed.includes('>');
	}

	function loadSample(value: string): void {
		const sample = sampleOptions.find((entry) => entry.id === value);
		if (!sample) return;
		selectedSample = value;
		if (sample.value) {
			input.set(sample.value);
			loadedFilename = sample.label;
			addToast('success', `Loaded ${sample.label}`);
		}
	}

	function clearInputValue(): void {
		if ($input.length > 1000 && !window.confirm('Clear the current XML input?')) {
			return;
		}
		input.set('');
		clipboardXml = '';
		loadedFilename = '';
		addToast('info', 'Input cleared');
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
			if (!looksLikeXml(text)) {
				throw new Error('Response does not look like XML');
			}
			input.set(text);
			loadedFilename = new URL(url).hostname;
			showLoadUrl = false;
			loadUrlValue = '';
			addToast('success', 'Loaded XML from URL');
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
		if (!isXmlFile(file)) {
			addToast('error', 'Only .xml, .svg, .xhtml, .xsd, .wsdl, and .txt files are supported');
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

	function pasteClipboardXml(): void {
		if (!clipboardXml) return;
		input.set(clipboardXml);
		loadedFilename = 'Clipboard XML';
		clipboardXml = '';
		addToast('success', 'Pasted XML from clipboard');
	}

	function getWorkspaceLabel(tool: ToolDefinition): string {
		switch (tool.slug) {
			case 'formatter': return 'Format';
			case 'validator': return 'Validate';
			case 'minifier': return 'Minify';
			case 'to-json': return '→ JSON';
			case 'to-yaml': return '→ YAML';
			case 'to-csv': return '→ CSV';
			case 'xpath': return 'XPath';
			default: return tool.displayName;
		}
	}

	function navigateToWorkspaceTool(slug: string): void {
		if (slug === toolSlug) return;
		void goto(`/xml/${slug}`, {
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
	aria-label="XML input panel"
>
	{#if workspaceTools.length > 0}
		<div class="xml-workspace-tabs" role="tablist" aria-label="XML workspace tabs">
			{#each workspaceTools as workspaceTool}
				<button
					type="button"
					role="tab"
					class="xml-workspace-tab"
					class:xml-workspace-tab--active={workspaceTool.slug === toolSlug}
					aria-selected={workspaceTool.slug === toolSlug}
					onclick={() => navigateToWorkspaceTool(workspaceTool.slug)}
				>
					{getWorkspaceLabel(workspaceTool)}
				</button>
			{/each}
		</div>
	{/if}

	<div class="xml-input-toolbar">
		<div class="xml-input-toolbar__group">
			<input
				bind:this={fileInputEl}
				type="file"
				accept=".xml,.svg,.xhtml,.xsd,.wsdl,.txt,text/plain,text/xml,application/xml,image/svg+xml"
				class="sr-only"
				onchange={handleUpload}
			/>
			<div class="xml-input-popover-wrap">
				<button type="button" class="xml-input-btn" onclick={() => (showLoadUrl = !showLoadUrl)}>
					<Link2 size={13} />
					Load URL
				</button>
				{#if showLoadUrl}
					<div class="xml-input-popover">
						<input
							bind:value={loadUrlValue}
							type="url"
							class="xml-input-popover__field"
							placeholder="https://example.com/feed.xml"
						/>
						<div class="xml-input-popover__actions">
							<button type="button" class="xml-input-btn" onclick={() => (showLoadUrl = false)}>
								<X size={13} />
								Close
							</button>
							<button type="button" class="xml-input-btn" onclick={loadUrl}>
								<Link2 size={13} />
								Fetch
							</button>
						</div>
					</div>
				{/if}
			</div>
			<label class="xml-input-select">
				<span>Sample</span>
				<ChevronDown size={12} />
				<select
					bind:value={selectedSample}
					onchange={(event) => loadSample((event.currentTarget as HTMLSelectElement).value)}
				>
					<option value="">Choose…</option>
					{#each sampleOptions as sample}
						<option value={sample.id}>{sample.label}</option>
					{/each}
				</select>
			</label>
		</div>
		<div class="xml-input-toolbar__group">
			<button type="button" class="xml-input-btn" onclick={triggerUpload}>
				<Upload size={13} />
				Upload
			</button>
			{#if $input}
				<button type="button" class="xml-input-btn" onclick={clearInputValue}>
					<Eraser size={13} />
					Clear
				</button>
			{/if}
		</div>
	</div>

	{#if clipboardXml}
		<div class="xml-input-banner">
			<button type="button" class="xml-input-banner__action" onclick={pasteClipboardXml}>
				<ClipboardPaste size={13} />
				Paste XML from clipboard
			</button>
		</div>
	{/if}

	<div class="relative flex-1 overflow-hidden" onfocus={handleFocus} role="presentation">
		{#if MonacoEditor}
			<MonacoEditor language="xml" wordWrap={false} />
		{:else}
			<div class="xml-input-loading">
				Loading editor…
			</div>
		{/if}
	</div>

	<div class="xml-input-meta">
		<div class="xml-input-meta__section xml-input-meta__section--left">
			<span
				class="xml-input-meta__validity"
				class:xml-input-meta__validity--valid={isValid}
				class:xml-input-meta__validity--invalid={isInvalid}
			>
				<Circle size={8} fill="currentColor" />
				{validityLabel}
			</span>
		</div>
		<div class="xml-input-meta__section xml-input-meta__section--center">
			<span>{statusInfo}</span>
			{#if loadedFilename}
				<span class="xml-input-meta__file">{loadedFilename}</span>
			{/if}
		</div>
		<div class="xml-input-meta__section xml-input-meta__section--right">
			<span class="xml-input-meta__hint"><Upload size={12} /> Drop .xml files</span>
		</div>
	</div>

	{#if isDragOver}
		<div class="xml-input-drop">
			<div class="xml-input-drop__card">
				<p>Drop to load</p>
			</div>
		</div>
	{/if}
</div>

<style>
	.xml-workspace-tabs {
		display: flex;
		align-items: center;
		gap: 2px;
		overflow-x: auto;
		padding: 0 var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		scrollbar-width: none;
	}

	.xml-workspace-tabs::-webkit-scrollbar {
		display: none;
	}

	.xml-workspace-tab {
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

	.xml-workspace-tab--active {
		border-bottom-color: var(--accent);
		color: var(--text-primary);
	}

	.xml-workspace-tab:hover {
		color: var(--text-primary);
	}

	.xml-input-toolbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.xml-input-toolbar__group {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	.xml-input-popover-wrap {
		position: relative;
	}

	.xml-input-popover {
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

	.xml-input-popover__field {
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

	.xml-input-popover__actions {
		display: flex;
		justify-content: flex-end;
		gap: var(--space-2);
	}

	.xml-input-btn,
	.xml-input-select {
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

	.xml-input-select select {
		border: none;
		background: transparent;
		color: var(--text-primary);
		font: inherit;
		outline: none;
	}

	.xml-input-btn:hover,
	.xml-input-select:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.xml-input-banner {
		padding: 0 var(--space-3) var(--space-2);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.xml-input-banner__action {
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

	.xml-input-loading {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 13px;
	}

	.xml-input-meta {
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

	.xml-input-meta__section {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		min-width: 0;
	}

	.xml-input-meta__section--center {
		flex: 1;
		justify-content: center;
	}

	.xml-input-meta__section--right {
		justify-content: flex-end;
	}

	.xml-input-meta__validity {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--text-muted);
	}

	.xml-input-meta__validity--valid {
		color: var(--success);
	}

	.xml-input-meta__validity--invalid {
		color: var(--error);
	}

	.xml-input-meta__file {
		color: var(--text-secondary);
	}

	.xml-input-meta__hint {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}

	.xml-input-drop {
		position: absolute;
		inset: 0;
		z-index: var(--z-overlay);
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-overlay);
		backdrop-filter: blur(6px);
	}

	.xml-input-drop__card {
		padding: var(--space-6) var(--space-8);
		border: 2px dashed var(--accent);
		border-radius: var(--radius-xl);
		background: var(--bg-elevated);
		color: var(--text-primary);
		font-family: var(--font-ui);
		font-size: var(--text-base);
	}

	@media (max-width: 767px) {
		.xml-input-toolbar,
		.xml-input-meta {
			padding-left: var(--space-2);
			padding-right: var(--space-2);
		}

		.xml-input-meta {
			flex-direction: column;
			align-items: flex-start;
			height: auto;
			padding-top: 6px;
			padding-bottom: 6px;
		}

		.xml-input-meta__section,
		.xml-input-meta__section--center,
		.xml-input-meta__section--right {
			flex: none;
			justify-content: flex-start;
		}
	}
</style>
