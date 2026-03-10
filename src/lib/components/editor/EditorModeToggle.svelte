<script lang="ts">
	import { browser } from '$app/environment';
	import { Code, Type } from 'lucide-svelte';

	export type EditorMode = 'simple' | 'editor';

	const STORAGE_KEY = 'fmtly-editor-mode';

	function getInitialMode(): EditorMode {
		if (!browser) return 'editor';
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored === 'simple' || stored === 'editor') return stored;
		const isMobile = window.innerWidth < 768;
		return isMobile ? 'simple' : 'editor';
	}

	let {
		mode = $bindable(getInitialMode()),
		onchange
	}: {
		mode?: EditorMode;
		onchange?: (mode: EditorMode) => void;
	} = $props();

	function setMode(newMode: EditorMode): void {
		mode = newMode;
		if (browser) {
			localStorage.setItem(STORAGE_KEY, newMode);
		}
		onchange?.(newMode);
	}
</script>

<div
	class="flex items-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-inset)] p-[1px]"
	role="radiogroup"
	aria-label="Editor mode"
>
	<button
		onclick={() => setMode('simple')}
		class="flex items-center gap-[var(--space-1)] rounded-[calc(var(--radius-md)-1px)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] transition-colors duration-[var(--duration-fast)] {mode ===
		'simple'
			? 'bg-[var(--bg-surface-hover)] text-[var(--text-primary)]'
			: 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'}"
		role="radio"
		aria-checked={mode === 'simple'}
	>
		<Type size={12} />
		Simple
	</button>
	<button
		onclick={() => setMode('editor')}
		class="flex items-center gap-[var(--space-1)] rounded-[calc(var(--radius-md)-1px)] px-[var(--space-2)] py-[2px] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] transition-colors duration-[var(--duration-fast)] {mode ===
		'editor'
			? 'bg-[var(--bg-surface-hover)] text-[var(--text-primary)]'
			: 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'}"
		role="radio"
		aria-checked={mode === 'editor'}
	>
		<Code size={12} />
		Editor
	</button>
</div>
