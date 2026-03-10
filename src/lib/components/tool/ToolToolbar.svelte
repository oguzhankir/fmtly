<script lang="ts">
	import type { ToolDefinition } from '$registry/types.js';
	import { addToast } from '$stores/toast.store';
	import { Copy, Share2, History, Play, Minimize2, Search, Braces } from 'lucide-svelte';

	let {
		tool,
		onprocess = () => {},
		oncopy = () => {},
		onshare = () => {},
		onhistory = () => {}
	}: {
		tool: ToolDefinition;
		onprocess?: () => void;
		oncopy?: () => void;
		onshare?: () => void;
		onhistory?: () => void;
	} = $props();

	type ToolbarButton = {
		label: string;
		icon: typeof Play;
		action: () => void;
		primary: boolean;
	};

	const operationLabels: Record<string, string> = {
		format: 'Format',
		minify: 'Minify',
		validate: 'Validate',
		view: 'View',
		'to-yaml': 'Convert',
		'to-json': 'Convert',
		'to-xml': 'Convert',
		'to-csv': 'Convert'
	};

	const operationIcons: Record<string, typeof Play> = {
		format: Braces,
		minify: Minimize2,
		validate: Search,
		view: Search
	};

	let buttons = $derived<ToolbarButton[]>([
		{
			label: operationLabels[tool.operation] ?? 'Process',
			icon: operationIcons[tool.operation] ?? Play,
			action: onprocess,
			primary: true
		},
		{
			label: 'Copy',
			icon: Copy,
			action: () => {
				oncopy();
				addToast('success', 'Copied to clipboard');
			},
			primary: false
		},
		{
			label: 'Share',
			icon: Share2,
			action: () => {
				onshare();
				addToast('info', 'Link copied');
			},
			primary: false
		},
		{
			label: 'History',
			icon: History,
			action: onhistory,
			primary: false
		}
	]);
</script>

<div class="flex items-center gap-[var(--space-2)]">
	{#each buttons as btn}
		{@const BtnIcon = btn.icon}
		<button
			onclick={btn.action}
			class="flex items-center gap-[var(--space-1-5)] rounded-[var(--radius-md)] px-[var(--space-3)] py-[var(--space-1-5)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] transition-colors duration-[var(--duration-fast)] {btn.primary
				? 'bg-[var(--bg-accent)] text-[var(--text-on-accent)] hover:bg-[var(--bg-accent-hover)]'
				: 'bg-[var(--bg-surface-hover)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]'}"
		>
			<BtnIcon size={14} />
			{btn.label}
		</button>
	{/each}
</div>
