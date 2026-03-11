<script lang="ts">
	import { onMount } from 'svelte';
	import { output } from '$stores/output.store';
	import { input as inputStore } from '$stores/input.store';
	import { addToast } from '$stores/toast.store';
	import {
		jsonError,
		jsonAdvancedStats,
		jsonFormatOptions,
		jsonFormatWarnings,
		setFormatOptions
	} from '$stores/json.store';
	import {
		AlertTriangle,
		Check,
		Copy,
		Download,
		WrapText,
		ChevronDown,
		ChevronRight,
		Sparkles
	} from 'lucide-svelte';

	let {
		outputLanguage,
		downloadFilename = 'output',
		toolSlug
	}: {
		outputLanguage: string;
		downloadFilename?: string;
		toolSlug: string;
	} = $props();

	let highlightedHtml = $state('');
	let hljs: typeof import('highlight.js').default | undefined = $state(undefined);
	let wrapLines = $state(false);
	let copied = $state(false);
	let showStats = $state(false);
	let showCompare = $state(false);
	let showCleanMenu = $state(false);
	let isFormatter = $derived(toolSlug === 'formatter');
	let isMinifier = $derived(toolSlug === 'minifier');
	let isConverter = $derived(
		['to-yaml', 'to-csv', 'to-xml', 'to-toml', 'to-markdown'].includes(toolSlug)
	);
	let canSwapConverter = $derived(['to-yaml', 'to-csv', 'to-xml', 'to-toml'].includes(toolSlug));
	let needsValidJson = $derived(
		['formatter', 'viewer', 'minifier', 'to-yaml', 'to-csv', 'to-xml', 'to-toml', 'to-markdown'].includes(
			toolSlug
		)
	);
	let supportsStructuredCopy = $derived(outputLanguage === 'json');
	let supportsCompare = $derived(toolSlug === 'formatter' || toolSlug === 'minifier');
	let lines = $derived(highlightedHtml ? highlightedHtml.split('\n') : []);
	let outputMeta = $derived.by(() => {
		if (!$output) return '';
		const lineCount = $output.length === 0 ? 0 : $output.split('\n').length;
		return `${$output.length.toLocaleString()} chars · ${lineCount.toLocaleString()} lines`;
	});
	let statsSummary = $derived.by(() => {
		if (!$jsonAdvancedStats) return '';
		return `${$jsonAdvancedStats.keys} keys · ${$jsonAdvancedStats.objects} objects · ${$jsonAdvancedStats.arrays} arrays · ${$jsonAdvancedStats.strings} strings · depth: ${$jsonAdvancedStats.maxDepth}`;
	});
	let minifySummary = $derived.by(() => {
		if (!isMinifier || !$jsonAdvancedStats) return '';
		const original = $jsonAdvancedStats.sizeOriginal;
		const minified = $jsonAdvancedStats.sizeFormatted;
		if (original <= 0) return '';
		const saved = Math.max(original - minified, 0);
		const ratio = saved === 0 ? 0 : (saved / original) * 100;
		return `Original: ${(original / 1024).toFixed(1)} KB → Minified: ${(minified / 1024).toFixed(1)} KB — saved ${ratio.toFixed(1)}% (${(saved / 1024).toFixed(1)} KB)`;
	});

	onMount(async () => {
		const mod = await import('highlight.js/lib/core');
		hljs = mod.default;

		const langLoaders: Record<string, () => Promise<{ default: import('highlight.js').LanguageFn }>> = {
			json: () => import('highlight.js/lib/languages/json'),
			xml: () => import('highlight.js/lib/languages/xml'),
			yaml: () => import('highlight.js/lib/languages/yaml')
		};

		const loader = langLoaders[outputLanguage];
		if (loader) {
			const langMod = await loader();
			hljs.registerLanguage(outputLanguage, langMod.default);
		}
	});

	$effect(() => {
		const value = $output;
		if (!value) {
			highlightedHtml = '';
			return;
		}

		if (!hljs) {
			highlightedHtml = escapeHtml(value);
			return;
		}

		try {
			const result = hljs.highlight(value, {
				language: outputLanguage,
				ignoreIllegals: true
			});
			highlightedHtml = result.value;
		} catch {
			highlightedHtml = escapeHtml(value);
		}
	});

	function escapeHtml(str: string): string {
		return str
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;');
	}

	function toCopyFormat(mode: 'json' | 'js' | 'python' | 'escaped'): string {
		if (mode === 'escaped') {
			return JSON.stringify($output);
		}

		if (mode === 'json') {
			return $output;
		}

		try {
			const parsed = JSON.parse($output);
			if (mode === 'js') {
				return JSON.stringify(parsed, null, 2)
					.replaceAll(/"([A-Za-z0-9_$]+)":/g, '$1:')
					.replaceAll('"', "'");
			}

			return JSON.stringify(parsed, null, 2)
				.replaceAll('true', 'True')
				.replaceAll('false', 'False')
				.replaceAll('null', 'None');
		} catch {
			return $output;
		}
	}

	function fallbackCopy(text: string): boolean {
		try {
			const textarea = document.createElement('textarea');
			textarea.value = text;
			textarea.setAttribute('readonly', 'true');
			textarea.style.position = 'fixed';
			textarea.style.opacity = '0';
			document.body.appendChild(textarea);
			textarea.select();
			const didCopy = document.execCommand('copy');
			document.body.removeChild(textarea);
			return didCopy;
		} catch {
			return false;
		}
	}

	async function handleCopy(mode: 'json' | 'js' | 'python' | 'escaped' = 'json'): Promise<void> {
		if (!$output) return;
		const text = toCopyFormat(mode);
		let copiedSuccessfully = false;
		try {
			await navigator.clipboard.writeText(text);
			copiedSuccessfully = true;
		} catch {
			copiedSuccessfully = fallbackCopy(text);
		}
		if (!copiedSuccessfully) {
			addToast('error', 'Could not copy output');
			return;
		}
		copied = true;
		addToast('success', 'Copied to clipboard');
		setTimeout(() => {
			copied = false;
		}, 1500);
	}

	function deriveDownloadName(): string {
		try {
			const parsed = JSON.parse($inputStore) as Record<string, unknown>;
			const name = typeof parsed.name === 'string' ? parsed.name : typeof parsed.title === 'string' ? parsed.title : '';
			if (!name) return downloadFilename;
			return name.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replaceAll(/^-|-$/g, '') || downloadFilename;
		} catch {
			return downloadFilename;
		}
	}

	function handleDownload(): void {
		if (!$output) return;

		const extMap: Record<string, string> = {
			json: '.json',
			xml: '.xml',
			yaml: '.yaml',
			toml: '.toml',
			csv: '.csv',
			markdown: '.md'
		};

		const ext = extMap[outputLanguage] ?? '.txt';
		const blob = new Blob([$output], { type: 'text/plain;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `${deriveDownloadName()}${ext}`;
		a.click();
		URL.revokeObjectURL(url);
	}

	async function handleSwap(): Promise<void> {
		if (!$output || !canSwapConverter) return;

		try {
			let nextJson = '';
			switch (toolSlug) {
				case 'to-yaml': {
					const { yamlToJSON } = await import('$engines/yaml/index.js');
					const result = yamlToJSON($output);
					if (!result.success) throw new Error(result.error.message);
					nextJson = result.output;
					break;
				}
				case 'to-csv': {
					const { csvToJSON } = await import('$engines/csv/index.js');
					const result = csvToJSON($output);
					if (!result.success) throw new Error(result.error.message);
					nextJson = result.output;
					break;
				}
				case 'to-xml': {
					const { xmlToJSON } = await import('$engines/xml/index.js');
					const result = xmlToJSON($output);
					if (!result.success) throw new Error(result.error.message);
					nextJson = result.output;
					break;
				}
				case 'to-toml': {
					const { toJson } = await import('$engines/toml/toml.engine.js');
					nextJson = await toJson($output);
					break;
				}
				default:
					return;
			}

			inputStore.set(nextJson);
			addToast('success', 'Swapped output into JSON input');
		} catch (error) {
			addToast('error', error instanceof Error ? error.message : 'Could not swap converter output');
		}
	}

	function compareLines(source: string, formatted: string): Array<{ left: string; right: string; changed: boolean }> {
		const leftLines = source.split('\n');
		const rightLines = formatted.split('\n');
		const count = Math.max(leftLines.length, rightLines.length);
		return Array.from({ length: count }, (_, index) => ({
			left: leftLines[index] ?? '',
			right: rightLines[index] ?? '',
			changed: (leftLines[index] ?? '') !== (rightLines[index] ?? '')
		}));
	}

	function setIndent(indent: 2 | 4 | 'tab'): void {
		setFormatOptions({ indent });
	}

	function toggleSortKeys(): void {
		setFormatOptions({ sortKeys: !$jsonFormatOptions.sortKeys });
	}

	function applyCleanOptions(): void {
		showCleanMenu = false;
		setFormatOptions({
			removeNulls: $jsonFormatOptions.removeNulls,
			removeEmptyStrings: $jsonFormatOptions.removeEmptyStrings,
			removeEmptyArrays: $jsonFormatOptions.removeEmptyArrays,
			removeEmptyObjects: $jsonFormatOptions.removeEmptyObjects
		});
	}

	function toggleCleanOption(
		key: 'removeNulls' | 'removeEmptyStrings' | 'removeEmptyArrays' | 'removeEmptyObjects'
	): void {
		setFormatOptions({
			[key]: !$jsonFormatOptions[key]
		});
	}
</script>

<div class="json-output" role="region" aria-label="JSON output panel">
	{#if $jsonAdvancedStats}
		<button type="button" class="json-stats-toggle" onclick={() => (showStats = !showStats)}>
			{#if showStats}
				<ChevronDown size={14} />
			{:else}
				<ChevronRight size={14} />
			{/if}
			<span>{statsSummary}</span>
		</button>
		{#if showStats}
			<div class="json-stats-grid">
				<span><strong>{$jsonAdvancedStats.keys}</strong> keys</span>
				<span><strong>{$jsonAdvancedStats.values}</strong> values</span>
				<span><strong>{$jsonAdvancedStats.strings}</strong> strings</span>
				<span><strong>{$jsonAdvancedStats.numbers}</strong> numbers</span>
				<span><strong>{$jsonAdvancedStats.booleans}</strong> booleans</span>
				<span><strong>{$jsonAdvancedStats.nulls}</strong> nulls</span>
				<span><strong>{$jsonAdvancedStats.arrays}</strong> arrays</span>
				<span><strong>{$jsonAdvancedStats.objects}</strong> objects</span>
				<span><strong>{$jsonAdvancedStats.maxDepth}</strong> depth</span>
				<span><strong>{$jsonAdvancedStats.sizeOriginal}</strong> B in</span>
				<span><strong>{$jsonAdvancedStats.sizeFormatted}</strong> B out</span>
			</div>
		{/if}
	{/if}

	{#if $jsonFormatWarnings.length > 0}
		<div class="json-output-warnings">
			{#each $jsonFormatWarnings as warning}
				<span>{warning}</span>
			{/each}
		</div>
	{/if}

	{#if !$output && needsValidJson && $inputStore.trim() && $jsonError}
		<div class="json-output-error">
			<AlertTriangle size={20} />
			<strong>Invalid JSON</strong>
			<span>{$jsonError.message}</span>
		</div>
	{:else if $output}
		{#if isConverter}
			<div class="json-output-meta">
				<span class="json-output-meta__pill">{outputLanguage.toUpperCase()}</span>
				<span>{outputMeta}</span>
			</div>
		{/if}

		{#if isFormatter}
			<div class="json-output-controls">
				<div class="json-output-controls__group">
					<span class="json-output-controls__label">Indent</span>
					<button
						type="button"
						class="json-output-chip"
						class:json-output-chip--active={$jsonFormatOptions.indent === 2}
						onclick={() => setIndent(2)}
					>
						2
					</button>
					<button
						type="button"
						class="json-output-chip"
						class:json-output-chip--active={$jsonFormatOptions.indent === 4}
						onclick={() => setIndent(4)}
					>
						4
					</button>
					<button
						type="button"
						class="json-output-chip"
						class:json-output-chip--active={$jsonFormatOptions.indent === 'tab'}
						onclick={() => setIndent('tab')}
					>
						Tab
					</button>
				</div>
				<div class="json-output-controls__group">
					<button
						type="button"
						class="json-output-chip"
						class:json-output-chip--active={$jsonFormatOptions.sortKeys}
						onclick={toggleSortKeys}
					>
						Sort keys
					</button>
					<div class="json-output-menu-wrap">
						<button
							type="button"
							class="json-output-chip"
							class:json-output-chip--active={showCleanMenu}
							onclick={() => (showCleanMenu = !showCleanMenu)}
						>
							<Sparkles size={12} />
							Clean
						</button>
						{#if showCleanMenu}
							<div class="json-output-menu">
								<label class="json-output-menu__row">
									<input
										type="checkbox"
										checked={$jsonFormatOptions.removeNulls ? true : undefined}
										onchange={() => toggleCleanOption('removeNulls')}
									/>
									<span>Remove null values</span>
								</label>
								<label class="json-output-menu__row">
									<input
										type="checkbox"
										checked={$jsonFormatOptions.removeEmptyStrings ? true : undefined}
										onchange={() => toggleCleanOption('removeEmptyStrings')}
									/>
									<span>Remove empty strings</span>
								</label>
								<label class="json-output-menu__row">
									<input
										type="checkbox"
										checked={$jsonFormatOptions.removeEmptyArrays ? true : undefined}
										onchange={() => toggleCleanOption('removeEmptyArrays')}
									/>
									<span>Remove empty arrays</span>
								</label>
								<label class="json-output-menu__row">
									<input
										type="checkbox"
										checked={$jsonFormatOptions.removeEmptyObjects ? true : undefined}
										onchange={() => toggleCleanOption('removeEmptyObjects')}
									/>
									<span>Remove empty objects</span>
								</label>
								<button type="button" class="json-output-btn" onclick={applyCleanOptions}>
									Apply
								</button>
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/if}

		{#if isMinifier && minifySummary}
			<div class="json-output-meta">
				<span class="json-output-meta__pill">MINIFIED</span>
				<span>{minifySummary}</span>
			</div>
		{/if}

		<div class="json-output-actions">
			<button type="button" class="json-output-btn" onclick={() => (wrapLines = !wrapLines)}>
				<WrapText size={13} />
				Wrap
			</button>
			{#if canSwapConverter}
				<button type="button" class="json-output-btn" onclick={() => void handleSwap()}>
					Swap ⇄
				</button>
			{/if}
			{#if supportsCompare}
				<button type="button" class="json-output-btn" onclick={() => (showCompare = !showCompare)}>
					Compare
				</button>
			{/if}
			{#if supportsStructuredCopy}
				<select class="json-output-select" onchange={(event) => handleCopy((event.currentTarget as HTMLSelectElement).value as 'json' | 'js' | 'python' | 'escaped')}>
					<option value="json">Copy as JSON</option>
					<option value="js">Copy as JS Object</option>
					<option value="python">Copy as Python Dict</option>
					<option value="escaped">Copy escaped</option>
				</select>
			{/if}
			<button type="button" class="json-output-btn" onclick={() => handleCopy()}>
				{#if copied}
					<Check size={13} />
				{:else}
					<Copy size={13} />
				{/if}
				Copy
			</button>
			<button type="button" class="json-output-btn" onclick={handleDownload}>
				<Download size={13} />
				Download
			</button>
		</div>

		{#if showCompare && supportsCompare}
			<div class="json-compare-grid">
				<div class="json-compare-column">
					<div class="json-compare-title">Input</div>
					{#each compareLines($inputStore, $output) as row, index}
						<div class="json-compare-line" class:json-compare-line--changed={row.changed}>
							<span>{index + 1}</span>
							<code>{row.left || ' '}</code>
						</div>
					{/each}
				</div>
				<div class="json-compare-column">
					<div class="json-compare-title">Output</div>
					{#each compareLines($inputStore, $output) as row, index}
						<div class="json-compare-line" class:json-compare-line--changed={row.changed}>
							<span>{index + 1}</span>
							<code>{row.right || ' '}</code>
						</div>
					{/each}
				</div>
			</div>
		{:else}
			<div class="json-output-code" class:json-output-code--wrap={wrapLines}>
				{#each lines as line, index}
					<div class="json-output-line">
						<span class="json-output-line__number">{index + 1}</span>
						<code class="json-output-line__code">{@html line || ' '}</code>
					</div>
				{/each}
			</div>
		{/if}
	{/if}
</div>

<style>
	.json-output {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
	}

	.json-output-error {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		padding: var(--space-6);
		color: var(--status-error);
		background: color-mix(in srgb, var(--status-error) 8%, var(--bg-base));
		font-family: var(--font-ui);
		font-size: 13px;
		text-align: center;
	}

	.json-stats-toggle {
		display: flex;
		align-items: center;
		gap: 6px;
		height: 30px;
		padding: 0 var(--space-3);
		border: none;
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		cursor: pointer;
		text-align: left;
	}

	.json-stats-grid,
	.json-output-warnings {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: var(--space-2);
		padding: var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-secondary);
	}

	.json-stats-grid strong {
		color: var(--text-primary);
		font-weight: 600;
	}

	.json-output-actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.json-output-meta {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-muted);
	}

	.json-output-meta__pill {
		display: inline-flex;
		align-items: center;
		height: 22px;
		padding: 0 var(--space-2);
		border-radius: var(--radius-full);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-weight: 600;
	}

	.json-output-controls {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
	}

	.json-output-controls__group {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	.json-output-menu-wrap {
		position: relative;
	}

	.json-output-menu {
		position: absolute;
		top: calc(100% + 6px);
		right: 0;
		z-index: var(--z-dropdown);
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		width: min(260px, 80vw);
		padding: var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-lg);
		background: var(--bg-elevated);
		box-shadow: var(--shadow-md);
	}

	.json-output-menu__row {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-ui);
		font-size: 12px;
		color: var(--text-primary);
	}

	.json-output-controls__label {
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 11px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.json-output-btn,
	.json-output-select,
	.json-output-chip {
		height: 28px;
		padding: 0 var(--space-2);
		border: 1px solid var(--border-default);
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 500;
	}

	.json-output-btn,
	.json-output-chip {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		cursor: pointer;
	}

	.json-output-chip--active {
		border-color: var(--accent-border);
		background: var(--accent-dim);
		color: var(--text-primary);
	}

	.json-output-code,
	.json-compare-grid {
		flex: 1;
		overflow: auto;
		background: var(--bg-base);
		font-family: var(--font-mono);
		font-size: 13px;
	}

	.json-output-line {
		display: grid;
		grid-template-columns: 52px minmax(0, 1fr);
		min-height: 22px;
		border-bottom: 1px solid color-mix(in srgb, var(--border-subtle) 55%, transparent);
	}

	.json-output-line__number {
		padding: 2px 10px 2px 0;
		text-align: right;
		color: var(--text-muted);
		user-select: none;
		border-right: 1px solid var(--border-subtle);
	}

	.json-output-line__code {
		padding: 2px var(--space-3);
		white-space: pre;
		overflow-x: auto;
	}

	.json-output-code--wrap .json-output-line__code {
		white-space: pre-wrap;
		word-break: break-word;
	}

	.json-compare-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.json-compare-column {
		border-right: 1px solid var(--border-subtle);
	}

	.json-compare-column:last-child {
		border-right: none;
	}

	.json-compare-title {
		position: sticky;
		top: 0;
		padding: var(--space-2) var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 600;
		color: var(--text-primary);
	}

	.json-compare-line {
		display: grid;
		grid-template-columns: 52px minmax(0, 1fr);
		min-height: 22px;
		border-bottom: 1px solid color-mix(in srgb, var(--border-subtle) 55%, transparent);
	}

	.json-compare-line span {
		padding: 2px 10px 2px 0;
		text-align: right;
		color: var(--text-muted);
		border-right: 1px solid var(--border-subtle);
	}

	.json-compare-line code {
		padding: 2px var(--space-3);
		white-space: pre-wrap;
		word-break: break-word;
	}

	.json-compare-line--changed {
		background: var(--warning-dim, color-mix(in srgb, var(--warning) 12%, transparent));
	}

	@media (max-width: 767px) {
		.json-output-actions {
			justify-content: flex-start;
			flex-wrap: wrap;
		}

		.json-compare-grid {
			grid-template-columns: 1fr;
		}

		.json-compare-column {
			border-right: none;
			border-bottom: 1px solid var(--border-subtle);
		}
	}
</style>
