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

<div class="toolbar">
	{#each buttons as btn}
		{@const BtnIcon = btn.icon}
		<button
			onclick={btn.action}
			class="toolbar-btn"
			class:toolbar-btn--primary={btn.primary}
		>
			<BtnIcon size={14} />
			{btn.label}
		</button>
	{/each}
</div>

<style>
	.toolbar {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.toolbar-btn {
		display: flex;
		align-items: center;
		gap: 5px;
		height: 28px;
		padding: 0 12px;
		border: none;
		border-radius: 6px;
		font-family: var(--font-ui);
		font-size: 12px;
		font-weight: 500;
		cursor: pointer;
		transition: background 100ms ease, color 100ms ease;
		background: var(--bg-hover);
		color: var(--text-secondary);
		white-space: nowrap;
	}

	.toolbar-btn:hover {
		background: var(--bg-active);
		color: var(--text-primary);
	}

	.toolbar-btn--primary {
		background: var(--accent);
		color: var(--text-on-accent);
	}

	.toolbar-btn--primary:hover {
		background: var(--accent-hover);
		color: var(--text-on-accent);
	}
</style>
