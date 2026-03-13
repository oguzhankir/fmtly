<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ToolDefinition } from '$registry/types.js';
	import { browser } from '$app/environment';
	import { get } from 'svelte/store';
	import { output } from '$stores/output.store';
	import { addToast } from '$stores/toast.store';
	import { t } from '$lib/stores/language.js';
	import ToolToolbar from './ToolToolbar.svelte';
	import HistoryPanel from './HistoryPanel.svelte';

	let historyOpen = $state(false);
	let activeOutputTab: 'output' | 'tree' = $state('tree');

	let {
		tool,
		inputPanel,
		outputPanel,
		treePanel,
		diffPanel,
		onprocess = undefined,
		onshare = undefined
	}: {
		tool: ToolDefinition;
		inputPanel?: Snippet;
		outputPanel?: Snippet;
		treePanel?: Snippet;
		diffPanel?: Snippet;
		onprocess?: () => void;
		onshare?: () => void;
	} = $props();

	async function handleCopy(): Promise<void> {
		const text = get(output);
		if (!text) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(text);
			addToast('success', $t('ui.layout.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.layout.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	let DIVIDER_KEY = $derived(`fmtly-divider-${tool.category}`);
	const MIN_PANEL_PCT = 20;

	let containerEl: HTMLDivElement | undefined = $state(undefined);
	let isDragging = $state(false);
	let dividerPosition = $state(getInitialDividerPosition());

	function getInitialDividerPosition(): number {
		if (!browser) return 50;
		const stored = localStorage.getItem(DIVIDER_KEY);
		if (stored) {
			const val = Number(stored);
			if (val >= MIN_PANEL_PCT && val <= 100 - MIN_PANEL_PCT) return val;
		}
		return 50;
	}

	function saveDividerPosition(pct: number): void {
		if (browser) {
			localStorage.setItem(DIVIDER_KEY, String(pct));
		}
	}

	function handlePointerDown(event: PointerEvent): void {
		isDragging = true;
		(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
	}

	function handlePointerMove(event: PointerEvent): void {
		if (!isDragging || !containerEl) return;
		const rect = containerEl.getBoundingClientRect();
		let pct = ((event.clientX - rect.left) / rect.width) * 100;
		pct = Math.max(MIN_PANEL_PCT, Math.min(100 - MIN_PANEL_PCT, pct));
		dividerPosition = Math.round(pct * 10) / 10;
	}

	function handlePointerUp(): void {
		if (isDragging) {
			isDragging = false;
			saveDividerPosition(dividerPosition);
		}
	}

	let secondDividerPosition = $state(66.6);

	function handleSecondPointerDown(event: PointerEvent): void {
		isDragging = true;
		(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
	}
</script>

<div class="tool-layout">
	<!-- Toolbar -->
	<div class="tool-toolbar-row">
		<span class="tool-toolbar-name">{tool.displayName}</span>
		<ToolToolbar
			onformat={onprocess ?? (() => {})}
			onminify={onprocess ?? (() => {})}
			oncopy={handleCopy}
			onshare={onshare ?? (() => {})}
			onhistory={() => { historyOpen = !historyOpen; }}
		/>
	</div>

	<!-- Panel area -->
	{#if tool.layoutVariant === 'split' || tool.layoutVariant === 'bidirectional' || tool.layoutVariant === 'dual-input'}
		<div
			class="panel-container desktop-panels"
			role="application"
			bind:this={containerEl}
			onpointermove={handlePointerMove}
			onpointerup={handlePointerUp}
		>
			<!-- Input panel -->
			<div class="panel panel-input" style="width: {dividerPosition}%">
				<div class="panel-content">
					{#if inputPanel}
						{@render inputPanel()}
					{:else}
						<p class="panel-placeholder">{($t as any)('ui.layout.placeholders.input_with_lang', 'Paste or type {{language}} here…', { language: tool.inputLanguage.toUpperCase() })}</p>
					{/if}
				</div>
			</div>

			<!-- Draggable divider -->
			<div
				class="divider"
				class:divider--active={isDragging}
				role="separator"
				aria-orientation="vertical"
				aria-valuenow={Math.round(dividerPosition)}
				tabindex="-1"
				onpointerdown={handlePointerDown}
			>
				<div class="divider-handle"></div>
			</div>

			<!-- Output / Tree panel -->
			<div class="panel panel-output">
				{#if tool.hasTreeView && treePanel}
					<div class="output-tabs">
						<button
							class="output-tab"
							class:output-tab--active={activeOutputTab === 'output'}
							onclick={() => { activeOutputTab = 'output'; }}
						>{$t('ui.layout.tabs.output', 'Output')}</button>
						<button
							class="output-tab"
							class:output-tab--active={activeOutputTab === 'tree'}
							onclick={() => { activeOutputTab = 'tree'; }}
						>{$t('ui.layout.tabs.tree', 'Tree')}</button>
					</div>
					{#if activeOutputTab === 'tree'}
						<div class="panel-content panel-content--tree">
							{@render treePanel()}
						</div>
					{:else}
						<div class="panel-content">
							{#if outputPanel}
								{@render outputPanel()}
							{:else}
								<p class="panel-placeholder">{$t('ui.layout.placeholders.output_empty', 'Output will appear here')}</p>
							{/if}
						</div>
					{/if}
				{:else}
					<div class="panel-content">
						{#if outputPanel}
							{@render outputPanel()}
						{:else}
							<p class="panel-placeholder">{$t('ui.layout.placeholders.output_empty', 'Output will appear here')}</p>
						{/if}
					</div>
				{/if}
			</div>
		</div>

		<!-- Mobile panels -->
		<div class="panel-container mobile-panels">
			<div class="panel panel-full">
				<div class="panel-content">
					{#if inputPanel}
						{@render inputPanel()}
					{:else}
						<p class="panel-placeholder">{($t as any)('ui.layout.placeholders.input_with_lang', 'Paste or type {{language}} here…', { language: tool.inputLanguage.toUpperCase() })}</p>
					{/if}
				</div>
			</div>
			<div class="panel panel-full">
				{#if tool.hasTreeView && treePanel}
					<div class="output-tabs">
						<button
							class="output-tab"
							class:output-tab--active={activeOutputTab === 'output'}
							onclick={() => { activeOutputTab = 'output'; }}
						>{$t('ui.layout.tabs.output', 'Output')}</button>
						<button
							class="output-tab"
							class:output-tab--active={activeOutputTab === 'tree'}
							onclick={() => { activeOutputTab = 'tree'; }}
						>{$t('ui.layout.tabs.tree', 'Tree')}</button>
					</div>
					{#if activeOutputTab === 'tree'}
						<div class="panel-content panel-content--tree">
							{@render treePanel()}
						</div>
					{:else}
						<div class="panel-content">
							{#if outputPanel}
								{@render outputPanel()}
							{:else}
								<p class="panel-placeholder">{$t('ui.layout.placeholders.output_empty', 'Output will appear here')}</p>
							{/if}
						</div>
					{/if}
				{:else}
					<div class="panel-content">
						{#if outputPanel}
							{@render outputPanel()}
						{:else}
							<p class="panel-placeholder">{$t('ui.layout.placeholders.output_empty', 'Output will appear here')}</p>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	{:else if tool.layoutVariant === 'single'}
		<div
			class="panel-container desktop-panels"
			role="application"
			bind:this={containerEl}
			onpointermove={handlePointerMove}
			onpointerup={handlePointerUp}
		>
			<div class="panel panel-input" style="width: {dividerPosition}%">
				<div class="panel-content">
					{#if inputPanel}
						{@render inputPanel()}
					{:else}
						<p class="panel-placeholder">{($t as any)('ui.layout.placeholders.input_with_lang', 'Paste or type {{language}} here…', { language: tool.inputLanguage.toUpperCase() })}</p>
					{/if}
				</div>
			</div>

			<div
				class="divider"
				class:divider--active={isDragging}
				role="separator"
				aria-orientation="vertical"
				aria-valuenow={Math.round(dividerPosition)}
				tabindex="-1"
				onpointerdown={handlePointerDown}
			>
				<div class="divider-handle"></div>
			</div>

			<div class="panel panel-output">
				<div class="panel-content">
					{#if outputPanel}
						{@render outputPanel()}
					{:else}
						<p class="panel-placeholder">Output will appear here</p>
					{/if}
				</div>
			</div>
		</div>

		<div class="panel-container mobile-panels">
			<div class="panel panel-full">
				<div class="panel-content">
					{#if inputPanel}{@render inputPanel()}{:else}<p class="panel-placeholder">Input</p>{/if}
				</div>
			</div>
			<div class="panel panel-full">
				<div class="panel-content">
					{#if outputPanel}{@render outputPanel()}{:else}<p class="panel-placeholder">Output</p>{/if}
				</div>
			</div>
		</div>
	{:else if tool.layoutVariant === 'triple' && diffPanel}
		<div class="panel-container desktop-panels" style="flex-direction: column;">
			<div class="panel-container" style="min-height: 40%; flex: 1;">
				<div class="panel panel-input" style="width: 50%; border-right: 1px solid var(--border-subtle);">
					<div class="diff-label">Original</div>
					<div class="panel-content">
						{#if inputPanel}{@render inputPanel()}{:else}<p class="panel-placeholder">Paste original here…</p>{/if}
					</div>
				</div>
				<div class="panel panel-output">
					<div class="diff-label">Modified</div>
					<div class="panel-content">
						{#if outputPanel}{@render outputPanel()}{:else}<p class="panel-placeholder">Paste modified here…</p>{/if}
					</div>
				</div>
			</div>
			<div class="panel" style="border-top: 1px solid var(--border-subtle); min-height: 30%; max-height: 60%; overflow: hidden; display: flex; flex-direction: column;">
				{@render diffPanel()}
			</div>
		</div>

		<div class="panel-container mobile-panels">
			<div class="panel panel-full">
				<div class="panel-content">
					{#if inputPanel}{@render inputPanel()}{:else}<p class="panel-placeholder">Original</p>{/if}
				</div>
			</div>
			<div class="panel panel-full">
				<div class="panel-content">
					{#if outputPanel}{@render outputPanel()}{:else}<p class="panel-placeholder">Modified</p>{/if}
				</div>
			</div>
		</div>
	{:else if tool.layoutVariant === 'triple'}
		<div class="panel-container desktop-panels" bind:this={containerEl}>
			<div class="panel" style="width: 33.3%; border-right: 1px solid var(--border-subtle);">
				<div class="panel-content">
					{#if inputPanel}{@render inputPanel()}{:else}<p class="panel-placeholder">Input</p>{/if}
				</div>
			</div>
			<div class="panel" style="width: 33.3%; border-right: 1px solid var(--border-subtle);">
				<div class="panel-content">
					{#if treePanel}{@render treePanel()}{:else}<p class="panel-placeholder">Tree view</p>{/if}
				</div>
			</div>
			<div class="panel panel-output">
				<div class="panel-content">
					{#if outputPanel}{@render outputPanel()}{:else}<p class="panel-placeholder">Output</p>{/if}
				</div>
			</div>
		</div>

		<div class="panel-container mobile-panels">
			<div class="panel panel-full">
				<div class="panel-content">
					{#if inputPanel}{@render inputPanel()}{:else}<p class="panel-placeholder">Input</p>{/if}
				</div>
			</div>
			<div class="panel panel-full">
				<div class="panel-content">
					{#if outputPanel}{@render outputPanel()}{:else}<p class="panel-placeholder">Output</p>{/if}
				</div>
			</div>
		</div>
	{:else if tool.layoutVariant === 'single-panel'}
		<div class="panel-container desktop-panels" style="flex-direction: column;">
			<div class="panel panel-full">
				<div class="panel-content panel-content--single">
					{#if inputPanel}{@render inputPanel()}{/if}
					{#if outputPanel}{@render outputPanel()}{/if}
				</div>
			</div>
		</div>

		<div class="panel-container mobile-panels">
			<div class="panel panel-full">
				<div class="panel-content panel-content--single">
					{#if inputPanel}{@render inputPanel()}{/if}
					{#if outputPanel}{@render outputPanel()}{/if}
				</div>
			</div>
		</div>
	{:else}
		<!-- Generator variant -->
		<div class="panel-container desktop-panels" style="flex-direction: column;">
			<div class="panel" style="border-bottom: 1px solid var(--border-subtle); flex: 1;">
				<div class="panel-content">
					{#if inputPanel}{@render inputPanel()}{:else}<p class="panel-placeholder">Input</p>{/if}
				</div>
			</div>
			<div class="panel" style="flex: 1;">
				<div class="panel-content">
					{#if outputPanel}{@render outputPanel()}{:else}<p class="panel-placeholder">Output</p>{/if}
				</div>
			</div>
		</div>

		<div class="panel-container mobile-panels">
			<div class="panel panel-full">
				<div class="panel-content">
					{#if inputPanel}{@render inputPanel()}{:else}<p class="panel-placeholder">Input</p>{/if}
				</div>
			</div>
			<div class="panel panel-full">
				<div class="panel-content">
					{#if outputPanel}{@render outputPanel()}{:else}<p class="panel-placeholder">Output</p>{/if}
				</div>
			</div>
		</div>
	{/if}
</div>

<HistoryPanel bind:open={historyOpen} />

<style>
	.tool-layout {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--header-height));
	}

	/* Toolbar row */
	.tool-toolbar-row {
		display: flex;
		align-items: center;
		height: var(--toolbar-height);
		padding: 0 12px;
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		flex-shrink: 0;
	}

	.tool-toolbar-name {
		font-family: var(--font-ui);
		font-size: 13px;
		font-weight: 600;
		color: var(--text-primary);
		margin-right: 12px;
		white-space: nowrap;
	}

	/* Panels */
	.panel-container {
		display: flex;
		flex: 1;
		overflow: hidden;
	}

	.panel {
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.panel-input {
		flex-shrink: 0;
	}

	.panel-output {
		flex: 1;
	}

	.panel-full {
		flex: 1;
	}

	.panel-content {
		flex: 1;
		overflow: auto;
		background: var(--bg-base);
		padding: 12px;
		font-family: var(--font-mono);
		font-size: 13px;
		color: var(--text-secondary);
	}

	.panel-content--tree {
		overflow: hidden;
	}

	.panel-content--single {
		font-family: var(--font-ui);
		color: var(--text-primary);
		background: var(--bg-surface);
	}

	.panel-placeholder {
		color: var(--text-muted);
		margin: 0;
	}

	/* Divider */
	.divider {
		display: flex;
		width: 6px;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		cursor: col-resize;
		background: var(--bg-surface);
		transition: background 100ms ease;
	}

	.divider:hover,
	.divider--active {
		background: var(--accent-dim);
	}

	.divider-handle {
		width: 2px;
		height: 24px;
		border-radius: 9999px;
		background: var(--border-strong);
	}

	.divider:focus-visible {
		outline: 2px solid var(--border-focus);
		outline-offset: -1px;
	}

	/* Output tabs */
	.output-tabs {
		display: flex;
		flex-shrink: 0;
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.output-tab {
		padding: 4px 12px;
		border: none;
		border-bottom: 2px solid transparent;
		background: transparent;
		font-family: var(--font-ui);
		font-size: 11px;
		font-weight: 600;
		color: var(--text-muted);
		cursor: pointer;
		transition: color 80ms ease;
	}

	.output-tab:hover {
		color: var(--text-secondary);
	}

	.output-tab--active {
		color: var(--text-primary);
		border-bottom-color: var(--accent);
	}

	/* Diff label */
	.diff-label {
		display: flex;
		align-items: center;
		height: 28px;
		padding: 0 12px;
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 11px;
		font-weight: 600;
		color: var(--text-muted);
		flex-shrink: 0;
	}

	.mobile-panels {
		display: none;
	}

	/* Responsive */
	@media (max-width: 767px) {
		.tool-layout {
			overflow: hidden;
		}

		.tool-toolbar-row {
			padding: 0 8px;
		}

		.desktop-panels {
			display: none;
		}

		.mobile-panels {
			display: flex;
			flex-direction: column;
			overflow-x: hidden;
			overflow-y: auto;
		}

		.mobile-panels .panel {
			flex: 0 0 auto;
			width: 100%;
			min-height: 200px;
			max-height: 40vh;
			border-bottom: 1px solid var(--border-subtle);
		}

		.mobile-panels .panel:last-child {
			border-bottom: none;
		}

		.mobile-panels .panel-content,
		.mobile-panels .panel-content--tree,
		.mobile-panels .panel-content--single {
			min-height: 200px;
			max-height: 40vh;
			overflow: auto;
		}
	}
</style>
