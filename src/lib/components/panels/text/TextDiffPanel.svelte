<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { initInput, formatByteSize } from '$stores/input.store';
	import { diffTexts, generateUnifiedDiff, generateSideBySideDiff, type TextDiffOptions } from '$lib/engines/text/diff.js';
	import { Copy, Download, Settings, ArrowRightLeft, FileText, List, Eye, WandSparkles, Upload, Eraser, Link2, X } from 'lucide-svelte';
	import MonacoDiffView from '$lib/components/editor/MonacoDiffView.svelte';
	import WorkspaceTabs from '$lib/components/tool/WorkspaceTabs.svelte';
	import type StandaloneMonacoEditorType from '$components/editor/StandaloneMonacoEditor.svelte';
	import type { ToolDefinition } from '$lib/registry/types.js';

	interface Props {
		toolSlug: string;
		workspaceTools: ToolDefinition[];
	}

	let { toolSlug, workspaceTools }: Props = $props();

	// State
	let leftInput = $state('');
	let rightInput = $state('');
	let showOptions = $state(false);
	let viewMode = $state<'side-by-side' | 'unified' | 'inline'>('side-by-side');
	let options = $state<TextDiffOptions>({
		ignoreWhitespace: false,
		ignoreCase: false,
		ignoreEmptyLines: false,
		showInline: false,
		contextLines: 3,
		algorithm: 'myers'
	});

	// UI State
	let leftShowLoadUrl = $state(false);
	let rightShowLoadUrl = $state(false);
	let leftLoadUrlValue = $state('');
	let rightLoadUrlValue = $state('');
	let leftIsDragOver = $state(false);
	let rightIsDragOver = $state(false);
	let showStats = $state(false);

	// Refs
	let leftFileInputEl: HTMLInputElement | undefined = $state(undefined);
	let rightFileInputEl: HTMLInputElement | undefined = $state(undefined);
	let leftEditorRef: StandaloneMonacoEditorType | undefined = $state(undefined);
	let rightEditorRef: StandaloneMonacoEditorType | undefined = $state(undefined);
	let StandaloneMonacoEditor: typeof StandaloneMonacoEditorType | undefined = $state(undefined);
	let isMonacoLoaded = $state(false);

	// Computed
	let leftLineCount = $derived(leftInput ? leftInput.split('\n').length : 0);
	let rightLineCount = $derived(rightInput ? rightInput.split('\n').length : 0);
	let leftStatusLine = $derived(
		`${formatByteSize(leftInput.length)} · ${leftLineCount.toLocaleString()} ${$t('ui.text_reverser.lines_count', 'lines')}`
	);
	let rightStatusLine = $derived(
		`${formatByteSize(rightInput.length)} · ${rightLineCount.toLocaleString()} ${$t('ui.text_reverser.lines_count', 'lines')}`
	);

	let diffResult = $derived.by(() => {
		if (!leftInput && !rightInput) return {
			hasChanges: false,
			additions: 0,
			deletions: 0,
			modifications: 0,
			totalLines: 0,
			similarity: 100,
			addedLines: 0,
			removedLines: 0,
			hunkCount: 0
		};

		return diffTexts(leftInput, rightInput, options);
	});

	let unifiedDiff = $derived.by(() => {
		if (!leftInput && !rightInput) return '';
		return generateUnifiedDiff(leftInput, rightInput, 'a/file.txt', 'b/file.txt');
	});

	// Drag state
	let panelDragCounter = $state(0);
	let isPanelDragging = $derived(panelDragCounter > 0);

	function handlePanelDragEnter(e: DragEvent) {
		e.preventDefault();
		if (e.dataTransfer?.types.includes('Files')) {
			panelDragCounter++;
		}
	}

	function handlePanelDragLeave(e: DragEvent) {
		e.preventDefault();
		if (e.dataTransfer?.types.includes('Files')) {
			panelDragCounter--;
			if (panelDragCounter < 0) panelDragCounter = 0;
		}
	}

	function handlePanelDrop(e: DragEvent) {
		panelDragCounter = 0;
	}

	// Actions
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

	async function downloadDiff(): Promise<void> {
		if (!leftInput || !rightInput) {
			addToast('info', $t('ui.diff_compare.no_content', 'No content to diff'));
			return;
		}

		const diff = generateSideBySideDiff(leftInput, rightInput, options);
		const blob = new Blob([JSON.stringify(diff)], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `diff-${Date.now()}.txt`;
		a.click();
		URL.revokeObjectURL(url);
		addToast('success', $t('ui.toast.download_success', 'Downloaded successfully'));
	}

	function swapInputs(): void {
		const temp = leftInput;
		leftInput = rightInput;
		rightInput = temp;
		addToast('info', $t('ui.diff_compare.swapped', 'Inputs swapped'));
	}

	async function formatLeftInput(): Promise<void> {
		if (!leftInput) return;
		// Simple text formatting - trim lines and remove extra whitespace
		const formatted = leftInput
			.split('\n')
			.map(line => line.trim())
			.filter(line => line.length > 0)
			.join('\n');
		leftInput = formatted;
		addToast('success', $t('ui.toast.format_success', 'Formatted successfully'));
	}

	async function formatRightInput(): Promise<void> {
		if (!rightInput) return;
		const formatted = rightInput
			.split('\n')
			.map(line => line.trim())
			.filter(line => line.length > 0)
			.join('\n');
		rightInput = formatted;
		addToast('success', $t('ui.toast.format_success', 'Formatted successfully'));
	}

	async function loadLeftUrl(): Promise<void> {
		if (!leftLoadUrlValue) return;
		try {
			const response = await fetch(leftLoadUrlValue);
			if (!response.ok) throw new Error('Failed to fetch');
			const text = await response.text();
			leftInput = text;
			leftLoadUrlValue = '';
			addToast('success', $t('ui.toast.url_loaded', 'Loaded from URL'));
		} catch {
			addToast('error', $t('ui.toast.url_error', 'Could not fetch — try pasting directly'));
		}
	}

	async function loadRightUrl(): Promise<void> {
		if (!rightLoadUrlValue) return;
		try {
			const response = await fetch(rightLoadUrlValue);
			if (!response.ok) throw new Error('Failed to fetch');
			const text = await response.text();
			rightInput = text;
			rightLoadUrlValue = '';
			addToast('success', $t('ui.toast.url_loaded', 'Loaded from URL'));
		} catch {
			addToast('error', $t('ui.toast.url_error', 'Could not fetch — try pasting directly'));
		}
	}

	function triggerLeftUpload(): void {
		leftFileInputEl?.click();
	}

	function triggerRightUpload(): void {
		rightFileInputEl?.click();
	}

	function handleLeftUpload(event: Event): void {
		const target = event.target as HTMLInputElement;
		const file = target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			const result = e.target?.result as string;
			if (result) {
				leftInput = result;
				addToast('success', $t('ui.toast.file_loaded', { name: file.name }, `File loaded: ${file.name}`));
				target.value = '';
			}
		};
		reader.readAsText(file);
	}

	function handleRightUpload(event: Event): void {
		const target = event.target as HTMLInputElement;
		const file = target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (e) => {
			const result = e.target?.result as string;
			if (result) {
				rightInput = result;
				addToast('success', $t('ui.toast.file_loaded', { name: file.name }, `File loaded: ${file.name}`));
				target.value = '';
			}
		};
		reader.readAsText(file);
	}

	// Drag and drop
	function handleLeftDragEnter(e: DragEvent): void {
		e.preventDefault();
		leftIsDragOver = true;
	}

	function handleLeftDragLeave(e: DragEvent): void {
		e.preventDefault();
		leftIsDragOver = false;
	}

	function handleLeftDragOver(e: DragEvent): void {
		e.preventDefault();
	}

	function handleLeftDrop(e: DragEvent): void {
		e.preventDefault();
		leftIsDragOver = false;

		const files = e.dataTransfer?.files;
		if (!files || files.length === 0) return;

		const file = files[0];
		if (!file.type.startsWith('text/') && !file.name.endsWith('.txt') && !file.name.endsWith('.md') && !file.name.endsWith('.log')) {
			addToast('error', $t('ui.toast.invalid_file', 'Please select a text file'));
			return;
		}

		const reader = new FileReader();
		reader.onload = (event) => {
			const result = event.target?.result as string;
			if (result) {
				leftInput = result;
				addToast('success', $t('ui.toast.file_loaded', { name: file.name }, `File loaded: ${file.name}`));
			}
		};
		reader.readAsText(file);
	}

	function handleRightDragEnter(e: DragEvent): void {
		e.preventDefault();
		rightIsDragOver = true;
	}

	function handleRightDragLeave(e: DragEvent): void {
		e.preventDefault();
		rightIsDragOver = false;
	}

	function handleRightDragOver(e: DragEvent): void {
		e.preventDefault();
	}

	function handleRightDrop(e: DragEvent): void {
		e.preventDefault();
		rightIsDragOver = false;

		const files = e.dataTransfer?.files;
		if (!files || files.length === 0) return;

		const file = files[0];
		if (!file.type.startsWith('text/') && !file.name.endsWith('.txt') && !file.name.endsWith('.md') && !file.name.endsWith('.log')) {
			addToast('error', $t('ui.toast.invalid_file', 'Please select a text file'));
			return;
		}

		const reader = new FileReader();
		reader.onload = (event) => {
			const result = event.target?.result as string;
			if (result) {
				rightInput = result;
				addToast('success', $t('ui.toast.file_loaded', { name: file.name }, `File loaded: ${file.name}`));
			}
		};
		reader.readAsText(file);
	}

	function clearLeftInput(): void {
		leftInput = '';
	}

	function clearRightInput(): void {
		rightInput = '';
	}

	function copyToLeft(): void {
		leftInput = rightInput;
	}

	function copyToRight(): void {
		rightInput = leftInput;
	}

	// Initialize Monaco Editor
	onMount(async () => {
		initInput('');
		try {
			const module = await import('$components/editor/StandaloneMonacoEditor.svelte');
			StandaloneMonacoEditor = module.default;
			isMonacoLoaded = true;
		} catch {
			// Monaco not available, fallback to textarea
		}
	});
</script>

<div class="flex h-[calc(100vh-var(--header-height))] w-full flex-col">
	{#if workspaceTools.length > 0}
		<WorkspaceTabs
			tools={workspaceTools}
			activeSlug={toolSlug}
			category="text"
			locale={$page.params.lang || 'en'}
		/>
	{/if}

	<!-- Statistics Section -->
	{#if showStats && (leftInput || rightInput)}
		<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)]">
			<div class="grid grid-cols-2 gap-4 lg:grid-cols-5">
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.diff_compare.additions', 'Additions')}</div>
					<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-green-600">{(diffResult as any).addedLines?.toLocaleString() || 0}</div>
				</div>
				
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.diff_compare.deletions', 'Deletions')}</div>
					<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-red-600">{(diffResult as any).removedLines?.toLocaleString() || 0}</div>
				</div>
				
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.diff_compare.modifications', 'Changes')}</div>
					<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-yellow-600">{(diffResult as any).hunkCount?.toLocaleString() || 0}</div>
				</div>
				
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.diff_compare.total_lines', 'Total lines')}</div>
					<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{diffResult.totalLines.toLocaleString()}</div>
				</div>
				
				<div class="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-2)]">
					<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{$t('ui.diff_compare.similarity', 'Similarity')}</div>
					<div class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">{diffResult.similarity.toFixed(1)}%</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- View Mode Selector -->
	<div class="flex items-center gap-[var(--space-2)] border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]">
		<div class="flex items-center gap-[var(--space-1)]">
			<button
				type="button"
				onclick={() => viewMode = 'side-by-side'}
				class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] {viewMode === 'side-by-side' ? 'bg-[var(--color-primary)] text-white' : 'border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]'}"
			>
				<ArrowRightLeft size={14} />
				{$t('ui.diff_compare.side_by_side', 'Side by Side')}
			</button>
			
			<button
				type="button"
				onclick={() => viewMode = 'unified'}
				class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] {viewMode === 'unified' ? 'bg-[var(--color-primary)] text-white' : 'border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]'}"
			>
				<FileText size={14} />
				{$t('ui.diff_compare.unified', 'Unified')}
			</button>
			
			<button
				type="button"
				onclick={() => viewMode = 'inline'}
				class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] {viewMode === 'inline' ? 'bg-[var(--color-primary)] text-white' : 'border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]'}"
			>
				<List size={14} />
				{$t('ui.diff_compare.inline', 'Inline')}
			</button>
		</div>

		<div class="flex-1"></div>

		<div class="flex items-center gap-[var(--space-2)]">
			<button
				type="button"
				onclick={() => showStats = !showStats}
				class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] {showStats ? 'bg-[var(--color-primary)] text-white' : 'border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]'}"
			>
				<Settings size={14} />
				{$t('ui.diff_compare.statistics', 'Statistics')}
			</button>
			
			{#if leftInput && rightInput}
				<button
					type="button"
					onclick={swapInputs}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				>
					<ArrowRightLeft size={14} />
					{$t('ui.diff_compare.swap', 'Swap')}
				</button>
			{/if}
		</div>
	</div>

	<!-- Options Panel -->
	{#if showOptions}
		<div class="border-b border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)]">
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div class="space-y-3">
					<label class="flex items-center gap-[var(--space-2)]">
						<input
							type="checkbox"
							bind:checked={options.ignoreWhitespace}
							class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
						/>
						<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.diff_compare.ignore_whitespace', 'Ignore whitespace')}</span>
					</label>
					
					<label class="flex items-center gap-[var(--space-2)]">
						<input
							type="checkbox"
							bind:checked={options.ignoreCase}
							class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
						/>
						<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.diff_compare.ignore_case', 'Ignore case')}</span>
					</label>
					
					<label class="flex items-center gap-[var(--space-2)]">
						<input
							type="checkbox"
							bind:checked={options.ignoreEmptyLines}
							class="h-4 w-4 rounded border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
						/>
						<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.diff_compare.ignore_empty_lines', 'Ignore empty lines')}</span>
					</label>
				</div>
				
				<div class="space-y-3">
					<div class="flex items-center gap-[var(--space-2)]">
						<label for="diff-context-lines" class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.diff_compare.context_lines', 'Context lines')}:</label>
						<input
							id="diff-context-lines"
							type="number"
							bind:value={options.contextLines}
							min="0"
							max="10"
							class="h-8 w-16 rounded border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-1)] text-[length:var(--text-sm)]"
						/>
					</div>
					
					<div class="flex items-center gap-[var(--space-2)]">
						<label for="diff-algorithm" class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">{$t('ui.diff_compare.algorithm', 'Algorithm')}:</label>
						<select
							id="diff-algorithm"
							bind:value={options.algorithm}
							class="h-8 rounded border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-1)] text-[length:var(--text-sm)]"
						>
							<option value="default">{$t('ui.diff_compare.algorithm_default', 'Default')}</option>
							<option value="patience">{$t('ui.diff_compare.algorithm_patience', 'Patience')}</option>
							<option value="minimal">{$t('ui.diff_compare.algorithm_minimal', 'Minimal')}</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- Main Content -->
	<div class="flex min-h-0 flex-1 flex-col">
		<!-- Toolbars Row (Always visible) -->
		{#if viewMode === 'side-by-side' || viewMode === 'inline'}
			<div class="grid w-full grid-cols-1 lg:grid-cols-2">
				<!-- Left Header & Toolbar -->
				<div class="flex flex-col border-r border-[var(--border-default)] bg-[var(--bg-base)]">
					<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						<span>{$t('ui.diff_compare.original', 'Original')} - {leftStatusLine}</span>
						<div class="flex items-center gap-[var(--space-2)]">
							{#if diffResult.hasChanges}
								<button
									type="button"
									onclick={copyToLeft}
									class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
								>
									<ArrowRightLeft size={12} />
									{$t('ui.actions.copy_left', 'Copy Left')}
								</button>
							{/if}
						</div>
					</div>
					
					<div class="flex items-center justify-between gap-[var(--space-1)] px-[var(--space-2)] py-[4px] border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
						<div class="flex items-center gap-[var(--space-1)]">
							<div class="relative">
								<button type="button" class="diff-toolbar-btn" onclick={() => (leftShowLoadUrl = !leftShowLoadUrl)}>
									<Link2 size={12} />
									{$t('ui.actions.load_url', 'Load URL')}
								</button>
								{#if leftShowLoadUrl}
									<div class="absolute top-full left-0 z-10 mt-1 flex gap-1">
										<input
											type="url"
											bind:value={leftLoadUrlValue}
											placeholder="https://..."
											class="h-8 w-48 rounded border border-[var(--border-default)] bg-[var(--bg-base)] px-2 text-[length:var(--text-xs)] outline-none focus:border-[var(--color-primary)]"
										/>
										<button
											type="button"
											onclick={loadLeftUrl}
											class="h-8 rounded bg-[var(--color-primary)] px-2 text-white"
										>
											{$t('ui.actions.load', 'Load')}
										</button>
									</div>
								{/if}
							</div>
							<button type="button" class="diff-toolbar-btn" onclick={formatLeftInput} title={$t('ui.diff.actions.format', 'Format')}>
								<WandSparkles size={12} />
								{$t('ui.diff.actions.format', 'Format')}
							</button>
							<button type="button" class="diff-toolbar-btn" onclick={triggerLeftUpload} title={$t('ui.actions.upload', 'Upload file')}>
								<Upload size={12} />
								{$t('ui.actions.upload', 'Upload')}
							</button>
						</div>
						{#if leftInput}
							<button type="button" class="diff-toolbar-btn" onclick={clearLeftInput} aria-label={$t('ui.actions.clear', 'Clear')}>
								<Eraser size={12} />
								{$t('ui.actions.clear', 'Clear')}
							</button>
						{/if}
					</div>
				</div>

				<!-- Right Header & Toolbar -->
				<div class="flex flex-col bg-[var(--bg-base)]">
					<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						<span>{$t('ui.diff_compare.modified', 'Modified')} - {rightStatusLine}</span>
						<div class="flex items-center gap-[var(--space-2)]">
							{#if diffResult.hasChanges}
								<button
									type="button"
									onclick={copyToRight}
									class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
								>
									<ArrowRightLeft size={12} />
									{$t('ui.actions.copy_right', 'Copy Right')}
								</button>
							{/if}
						</div>
					</div>
					
					<div class="flex items-center justify-between gap-[var(--space-1)] px-[var(--space-2)] py-[4px] border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
						<div class="flex items-center gap-[var(--space-1)]">
							<div class="relative">
								<button type="button" class="diff-toolbar-btn" onclick={() => (rightShowLoadUrl = !rightShowLoadUrl)}>
									<Link2 size={12} />
									{$t('ui.actions.load_url', 'Load URL')}
								</button>
								{#if rightShowLoadUrl}
									<div class="absolute top-full left-0 z-10 mt-1 flex gap-1">
										<input
											type="url"
											bind:value={rightLoadUrlValue}
											placeholder="https://..."
											class="h-8 w-48 rounded border border-[var(--border-default)] bg-[var(--bg-base)] px-2 text-[length:var(--text-xs)] outline-none focus:border-[var(--color-primary)]"
										/>
										<button
											type="button"
											onclick={loadRightUrl}
											class="h-8 rounded bg-[var(--color-primary)] px-2 text-white"
										>
											{$t('ui.actions.load', 'Load')}
										</button>
									</div>
								{/if}
							</div>
							<button type="button" class="diff-toolbar-btn" onclick={formatRightInput} title={$t('ui.diff.actions.format', 'Format')}>
								<WandSparkles size={12} />
								{$t('ui.diff.actions.format', 'Format')}
							</button>
							<button type="button" class="diff-toolbar-btn" onclick={triggerRightUpload} title={$t('ui.actions.upload', 'Upload file')}>
								<Upload size={12} />
								{$t('ui.actions.upload', 'Upload')}
							</button>
						</div>
						{#if rightInput}
							<button type="button" class="diff-toolbar-btn" onclick={clearRightInput} aria-label={$t('ui.actions.clear', 'Clear')}>
								<Eraser size={12} />
								{$t('ui.actions.clear', 'Clear')}
							</button>
						{/if}
					</div>
				</div>
			</div>
			
			<input
				bind:this={leftFileInputEl}
				type="file"
				accept=".txt,.md,.log,text/plain"
				class="sr-only"
				onchange={handleLeftUpload}
			/>
			<input
				bind:this={rightFileInputEl}
				type="file"
				accept=".txt,.md,.log,text/plain"
				class="sr-only"
				onchange={handleRightUpload}
			/>
		{/if}

		<div 
			class="flex min-h-0 flex-1 relative bg-[var(--bg-base)]"
			ondragenter={handlePanelDragEnter}
			ondragleave={handlePanelDragLeave}
			ondrop={handlePanelDrop}
			role="region"
			aria-label="Diff Editor Zone"
		>
			{#if viewMode === 'side-by-side' || viewMode === 'inline'}
				<div class="absolute inset-0 z-0">
					<MonacoDiffView 
						original={leftInput} 
						modified={rightInput} 
						inline={viewMode === 'inline'} 
						ignoreTrimWhitespace={options.ignoreWhitespace}
						wordWrap={true}
						onchangeOriginal={(v) => leftInput = v}
						onchangeModified={(v) => rightInput = v}
					/>
				</div>
				
				<!-- Drag and Drop Overlays (Invisible when not dragging, positioned over the left/right halves) -->
				<div class="absolute inset-0 z-10 grid grid-cols-1 lg:grid-cols-2 {isPanelDragging ? 'pointer-events-auto' : 'pointer-events-none'}">
					<div
						class="h-full w-full"
						ondragenter={handleLeftDragEnter}
						ondragleave={handleLeftDragLeave}
						ondragover={handleLeftDragOver}
						ondrop={(e) => { handleLeftDrop(e); isPanelDragging = false; }}
						role="region"
						aria-label="Original Drop Zone"
					>
						{#if leftIsDragOver && isPanelDragging}
							<div class="diff-drop-overlay">
								<div class="diff-drop-card">
									<p>{$t('ui.drop_to_load', 'Drop to load')} {$t('ui.diff_compare.original', 'Original')}</p>
								</div>
							</div>
						{/if}
					</div>
					<div
						class="h-full w-full"
						ondragenter={handleRightDragEnter}
						ondragleave={handleRightDragLeave}
						ondragover={handleRightDragOver}
						ondrop={(e) => { handleRightDrop(e); isPanelDragging = false; }}
						role="region"
						aria-label="Modified Drop Zone"
					>
						{#if rightIsDragOver && isPanelDragging}
							<div class="diff-drop-overlay">
								<div class="diff-drop-card">
									<p>{$t('ui.drop_to_load', 'Drop to load')} {$t('ui.diff_compare.modified', 'Modified')}</p>
								</div>
							</div>
						{/if}
					</div>
				</div>
			{:else if viewMode === 'unified'}
				<!-- Unified Diff View -->
				<div class="flex min-h-0 flex-1 flex-col w-full z-10 bg-[var(--bg-base)]">
					<div class="flex items-center justify-between border-b border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						<span>{$t('ui.diff_compare.unified_diff', 'Unified Diff')}</span>
						<div class="flex items-center gap-[var(--space-2)]">
							{#if unifiedDiff}
								<button
									type="button"
									onclick={() => copyValue(unifiedDiff)}
									class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
								>
									<Copy size={12} />
									{$t('ui.actions.copy', 'Copy')}
								</button>
								<button
									type="button"
									onclick={downloadDiff}
									class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-sm)] border border-[var(--border-default)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
								>
									<Download size={12} />
									{$t('ui.actions.download', 'Download')}
								</button>
							{/if}
						</div>
					</div>
					<div class="flex-1 overflow-y-auto">
						{#if unifiedDiff}
							<pre class="whitespace-pre-wrap p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)]">{unifiedDiff}</pre>
						{:else}
							<div class="flex h-full items-center justify-center text-[var(--text-tertiary)]">
								<div class="text-center">
									<Eye size={48} class="mx-auto mb-[var(--space-2)] opacity-50" />
									<p class="text-[length:var(--text-sm)]">{$t('ui.diff_compare.add_content', 'Add content to both sides to see diff')}</p>
								</div>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
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
		background: var(--bg-surface-hover);
		color: var(--text-primary);
	}

	.diff-drop-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
	}

	.diff-drop-card {
		background: var(--bg-elevated);
		border: 2px dashed var(--color-primary);
		border-radius: var(--radius-md);
		padding: var(--space-4);
		color: var(--text-primary);
		text-align: center;
	}
</style>
