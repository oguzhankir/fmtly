<script lang="ts">
	import { t } from '$stores/language';
	import { goto } from '$app/navigation';
	import { localizePath, stripLocalePrefix } from '$lib/utils/locale-routing.js';
	import type { ToolDefinition } from '$lib/registry/types.js';

	let {
		tools = [],
		activeSlug = '',
		category = 'json',
		locale = 'en'
	}: {
		tools: ToolDefinition[];
		activeSlug: string;
		category: string;
		locale: string;
	} = $props();

	function getWorkspaceLabel(tDef: ToolDefinition): string {
		switch (tDef.slug) {
			case 'formatter':
				return $t('ui.actions.format', 'Format');
			case 'validator':
				return $t('ui.actions.validate', 'Validate');
			case 'minifier':
				return $t('ui.actions.minify', 'Minify');
			case 'diff':
				return $t('ui.actions.diff', 'Diff');
			case 'to-yaml':
				return 'YAML';
			case 'jsonpath':
				return 'JSONPath';
			case 'jmespath':
				return 'JMESPath';
			case 'to-csv':
				return 'CSV';
			case 'to-toml':
				return 'TOML';
			case 'to-xml':
				return 'XML';
			case 'to-markdown':
				return 'MD';
			default:
				return stripLocalePrefix($t(tDef.displayName, tDef.displayName));
		}
	}

	function handleNavigate(slug: string) {
		if (slug === activeSlug) return;
		void goto(localizePath(`/${category}/${slug}`, locale), {
			replaceState: true,
			noScroll: true,
			keepFocus: true
		});
	}
</script>

<div class="workspace-tabs-container" role="tablist">
	{#each tools as tool}
		<button
			type="button"
			role="tab"
			class="workspace-tab"
			class:workspace-tab--active={tool.slug === activeSlug}
			aria-selected={tool.slug === activeSlug}
			onclick={() => handleNavigate(tool.slug)}
		>
			{getWorkspaceLabel(tool)}
		</button>
	{/each}
</div>

<style>
	.workspace-tabs-container {
		display: flex;
		align-items: center;
		gap: 4px;
		overflow-x: auto;
		padding: 0 var(--space-3);
		border-bottom: 1px solid var(--border-subtle);
		background: var(--bg-surface);
		scrollbar-width: none;
		-ms-overflow-style: none;
		min-height: 36px;
	}

	.workspace-tabs-container::-webkit-scrollbar {
		display: none;
	}

	.workspace-tab {
		flex: 0 0 auto;
		height: 36px;
		padding: 0 var(--space-4);
		border: none;
		border-bottom: 2px solid transparent;
		background: transparent;
		color: var(--text-muted);
		font-family: var(--font-ui);
		font-size: 13px;
		font-weight: 500;
		white-space: nowrap;
		cursor: pointer;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: fit-content;
	}

	.workspace-tab:hover {
		color: var(--text-primary);
		background: var(--bg-surface-hover);
	}

	.workspace-tab--active {
		border-bottom-color: var(--accent);
		color: var(--text-primary);
	}
</style>
