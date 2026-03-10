<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ToolDefinition } from '$registry/types.js';
	import { browser } from '$app/environment';
	import StatusBar from '$components/layout/StatusBar.svelte';
	import ToolToolbar from './ToolToolbar.svelte';
	import HistoryPanel from './HistoryPanel.svelte';

	let historyOpen = $state(false);
	let activeOutputTab: 'output' | 'tree' = $state('tree');

	let {
		tool,
		inputPanel,
		outputPanel,
		treePanel,
		diffPanel
	}: {
		tool: ToolDefinition;
		inputPanel?: Snippet;
		outputPanel?: Snippet;
		treePanel?: Snippet;
		diffPanel?: Snippet;
	} = $props();

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

<div class="flex h-[calc(100vh-var(--header-height)-var(--status-bar-height))] flex-col">
	<!-- Toolbar -->
	<div
		class="flex items-center border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-4)] py-[var(--space-2)]"
	>
		<span
			class="mr-[var(--space-4)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]"
		>
			{tool.displayName}
		</span>
		<ToolToolbar {tool} onhistory={() => { historyOpen = !historyOpen; }} />
	</div>

	<!-- Panel area -->
	{#if tool.layoutVariant === 'split' || tool.layoutVariant === 'bidirectional'}
		<div
			class="flex flex-1 overflow-hidden"
			role="application"
			bind:this={containerEl}
			onpointermove={handlePointerMove}
			onpointerup={handlePointerUp}
		>
			<!-- Input panel -->
			<div
				class="flex flex-col overflow-hidden border-r border-[var(--border-subtle)]"
				style="width: {dividerPosition}%"
			>
				<div
					class="flex-1 overflow-auto bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
				>
					{#if inputPanel}
						{@render inputPanel()}
					{:else}
						<p>Paste or type {tool.inputLanguage.toUpperCase()} here…</p>
					{/if}
				</div>
			</div>

			<!-- Draggable divider -->
			<div
				class="flex w-[6px] shrink-0 cursor-col-resize items-center justify-center transition-colors duration-[var(--duration-fast)] hover:bg-[var(--bg-accent-subtle)] {isDragging
					? 'bg-[var(--bg-accent-subtle)]'
					: 'bg-[var(--bg-surface)]'}"
				role="separator"
				aria-orientation="vertical"
				aria-valuenow={Math.round(dividerPosition)}
				tabindex="-1"
				onpointerdown={handlePointerDown}
			>
				<div class="h-[24px] w-[2px] rounded-[var(--radius-full)] bg-[var(--border-strong)]"></div>
			</div>

			<!-- Output / Tree panel -->
			<div class="flex flex-1 flex-col overflow-hidden">
				{#if tool.hasTreeView && treePanel}
					<!-- Tab bar: Output | Tree -->
					<div class="flex shrink-0 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
						<button
							onclick={() => { activeOutputTab = 'output'; }}
							class="px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] transition-colors duration-[80ms] {activeOutputTab === 'output' ? 'border-b-2 border-[var(--color-accent)] text-[var(--text-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'}"
						>
							Output
						</button>
						<button
							onclick={() => { activeOutputTab = 'tree'; }}
							class="px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] transition-colors duration-[80ms] {activeOutputTab === 'tree' ? 'border-b-2 border-[var(--color-accent)] text-[var(--text-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'}"
						>
							Tree
						</button>
					</div>
					{#if activeOutputTab === 'tree'}
						<div class="flex-1 overflow-hidden">
							{@render treePanel()}
						</div>
					{:else}
						<div
							class="flex-1 overflow-auto bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
						>
							{#if outputPanel}
								{@render outputPanel()}
							{:else}
								<p>Output will appear here</p>
							{/if}
						</div>
					{/if}
				{:else}
					<div
						class="flex-1 overflow-auto bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
					>
						{#if outputPanel}
							{@render outputPanel()}
						{:else}
							<p>Output will appear here</p>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	{:else if tool.layoutVariant === 'single'}
		<div
			class="flex flex-1 overflow-hidden"
			role="application"
			bind:this={containerEl}
			onpointermove={handlePointerMove}
			onpointerup={handlePointerUp}
		>
			<!-- Input panel -->
			<div
				class="flex flex-col overflow-hidden border-r border-[var(--border-subtle)]"
				style="width: {dividerPosition}%"
			>
				<div
					class="flex-1 overflow-auto bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
				>
					{#if inputPanel}
						{@render inputPanel()}
					{:else}
						<p>Paste or type {tool.inputLanguage.toUpperCase()} here…</p>
					{/if}
				</div>
			</div>

			<!-- Draggable divider -->
			<div
				class="flex w-[6px] shrink-0 cursor-col-resize items-center justify-center transition-colors duration-[var(--duration-fast)] hover:bg-[var(--bg-accent-subtle)] {isDragging
					? 'bg-[var(--bg-accent-subtle)]'
					: 'bg-[var(--bg-surface)]'}"
				role="separator"
				aria-orientation="vertical"
				aria-valuenow={Math.round(dividerPosition)}
				tabindex="-1"
				onpointerdown={handlePointerDown}
			>
				<div class="h-[24px] w-[2px] rounded-[var(--radius-full)] bg-[var(--border-strong)]"></div>
			</div>

			<!-- Output panel -->
			<div class="flex flex-1 flex-col overflow-hidden">
				<div
					class="flex-1 overflow-auto bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
				>
					{#if outputPanel}
						{@render outputPanel()}
					{:else}
						<p>Output will appear here</p>
					{/if}
				</div>
			</div>
		</div>
	{:else if tool.layoutVariant === 'triple' && diffPanel}
		<!-- Diff layout: left + right inputs on top, results below -->
		<div class="flex flex-1 flex-col overflow-hidden">
			<div class="flex flex-1 overflow-hidden" style="min-height: 40%">
				<!-- Left (Original) input -->
				<div class="flex flex-1 flex-col overflow-hidden border-r border-[var(--border-subtle)]">
					<div class="flex items-center border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-1)]">
						<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-tertiary)]">Original</span>
					</div>
					<div class="flex-1 overflow-auto bg-[var(--bg-base)]">
						{#if inputPanel}
							{@render inputPanel()}
						{:else}
							<p class="p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">Paste original JSON here…</p>
						{/if}
					</div>
				</div>

				<!-- Right (Modified) input -->
				<div class="flex flex-1 flex-col overflow-hidden">
					<div class="flex items-center border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-1)]">
						<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-tertiary)]">Modified</span>
					</div>
					<div class="flex-1 overflow-auto bg-[var(--bg-base)]">
						{#if outputPanel}
							{@render outputPanel()}
						{:else}
							<p class="p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">Paste modified JSON here…</p>
						{/if}
					</div>
				</div>
			</div>

			<!-- Diff results -->
			<div class="flex flex-col overflow-hidden border-t border-[var(--border-subtle)]" style="min-height: 30%; max-height: 60%">
				{@render diffPanel()}
			</div>
		</div>
	{:else if tool.layoutVariant === 'triple'}
		<div class="flex flex-1 overflow-hidden" bind:this={containerEl}>
			<!-- Input panel -->
			<div
				class="flex flex-col overflow-hidden border-r border-[var(--border-subtle)]"
				style="width: 33.3%"
			>
				<div
					class="flex-1 overflow-auto bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
				>
					{#if inputPanel}
						{@render inputPanel()}
					{:else}
						<p>Paste or type {tool.inputLanguage.toUpperCase()} here…</p>
					{/if}
				</div>
			</div>

			<!-- Tree panel -->
			<div
				class="flex flex-col overflow-hidden border-r border-[var(--border-subtle)]"
				style="width: 33.3%"
			>
				<div
					class="flex-1 overflow-auto bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
				>
					{#if treePanel}
						{@render treePanel()}
					{:else}
						<p>Tree view</p>
					{/if}
				</div>
			</div>

			<!-- Output panel -->
			<div class="flex flex-1 flex-col overflow-hidden">
				<div
					class="flex-1 overflow-auto bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
				>
					{#if outputPanel}
						{@render outputPanel()}
					{:else}
						<p>Output will appear here</p>
					{/if}
				</div>
			</div>
		</div>
	{:else if tool.layoutVariant === 'single-panel'}
		<!-- Single-panel variant: one full-width panel -->
		<div class="flex flex-1 flex-col overflow-auto bg-[var(--bg-surface)] p-[var(--space-4)] font-sans text-[length:var(--text-sm)] text-[var(--text-primary)]">
			{#if inputPanel}
				{@render inputPanel()}
			{:else}
				<p>Single panel view</p>
			{/if}
			{#if outputPanel}
				{@render outputPanel()}
			{/if}
		</div>
	{:else}
		<!-- Generator variant: single input, output below -->
		<div class="flex flex-1 flex-col overflow-hidden">
			<div
				class="flex-1 overflow-auto border-b border-[var(--border-subtle)] bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
			>
				{#if inputPanel}
					{@render inputPanel()}
				{:else}
					<p>Paste or type {tool.inputLanguage.toUpperCase()} here…</p>
				{/if}
			</div>
			<div
				class="flex-1 overflow-auto bg-[var(--bg-base)] p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
			>
				{#if outputPanel}
					{@render outputPanel()}
				{:else}
					<p>Output will appear here</p>
				{/if}
			</div>
		</div>
	{/if}
</div>

<HistoryPanel bind:open={historyOpen} />

<StatusBar />

<style>
	div[role='separator']:focus-visible {
		outline: 2px solid var(--border-focus);
		outline-offset: -1px;
	}
</style>
