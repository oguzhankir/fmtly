<script lang="ts">
	import { t } from '$stores/language';
	import { Copy, Share2, History, Play, Minimize2, Search, Braces } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	let {
		oncopy = () => {},
		onshare = () => {},
		onhistory = () => {},
		onsearch = () => {},
		showSearch = false
	}: {
		oncopy?: () => void;
		onshare?: () => void;
		onhistory?: () => void;
		onsearch?: () => void;
		showSearch?: boolean;
	} = $props();

	type ToolbarAction = {
		label: string;
		icon: any;
		action: () => void;
		show?: boolean;
		primary?: boolean;
	};

	const actions = $derived.by<ToolbarAction[]>(() => [
		{
			label: $t('ui.actions.search', 'Search'),
			icon: Search,
			action: onsearch,
			show: showSearch
		},
		{
			label: $t('ui.actions.copy', 'Copy'),
			icon: Copy,
			action: oncopy
		},
		{
			label: $t('ui.actions.share', 'Share'),
			icon: Share2,
			action: onshare
		},
		{
			label: $t('ui.history.title', 'History'),
			icon: History,
			action: onhistory
		}
	]);
</script>

<div class="tool-toolbar" transition:fade={{ duration: 100 }}>
	<div class="toolbar-inner">
		{#each actions.filter((a) => a.show !== false) as action}
			<button
				type="button"
				class="toolbar-btn"
				class:toolbar-btn--primary={action.primary}
				onclick={action.action}
				title={action.label}
			>
				<action.icon size={16} />
				<span class="toolbar-btn-label">{action.label}</span>
			</button>
		{/each}
	</div>
</div>

<style>
	.tool-toolbar {
		height: 48px;
		background: var(--bg-surface);
		border-bottom: 1px solid var(--border-subtle);
		display: flex;
		align-items: center;
		padding: 0 16px;
		flex-shrink: 0;
	}

	.toolbar-inner {
		display: flex;
		align-items: center;
		gap: 8px;
		width: 100%;
	}

	.toolbar-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		height: 32px;
		padding: 0 12px;
		border: 1px solid var(--border-default);
		border-radius: 8px;
		background: var(--bg-elevated);
		color: var(--text-secondary);
		font-family: var(--font-ui);
		font-size: 13px;
		font-weight: 500;
		cursor: pointer;
		transition: all 150ms ease;
	}

	.toolbar-btn:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
		border-color: var(--border-default);
	}

	.toolbar-btn--primary {
		background: var(--accent);
		color: white;
		border-color: var(--accent);
	}

	.toolbar-btn--primary:hover {
		background: var(--accent);
		opacity: 0.9;
		color: white;
		border-color: var(--accent);
	}

	@media (max-width: 640px) {
		.toolbar-btn-label {
			display: none;
		}
		.toolbar-btn {
			padding: 0 8px;
		}
	}
</style>
