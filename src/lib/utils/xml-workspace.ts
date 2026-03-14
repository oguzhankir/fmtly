import { goto } from '$app/navigation';
import type { ToolDefinition } from '$lib/registry/types.js';
import { t } from '$lib/stores/language.js';
import { get } from 'svelte/store';

/**
 * Get the display label for an XML tool in workspace tabs
 */
export function getXmlWorkspaceLabel(tool: ToolDefinition): string {
	const $t = get(t);
	switch (tool.slug) {
		case 'formatter':
			return $t('ui.actions.format', 'Format');
		case 'validator':
			return $t('ui.actions.validate', 'Validate');
		case 'minifier':
			return $t('ui.actions.minify', 'Minify');
		case 'to-json':
			return $t('ui.convert.to_json', '→ JSON');
		case 'to-yaml':
			return $t('ui.convert.to_yaml', '→ YAML');
		case 'to-csv':
			return $t('ui.convert.to_csv', '→ CSV');
		case 'xpath':
			return $t('ui.query.xpath', 'XPath');
		default:
			// Fallback to localized display name
			return $t(tool.displayName, tool.displayName);
	}
}

/**
 * Navigate to an XML tool within the workspace
 */
export function navigateToXmlWorkspaceTool(slug: string, currentSlug?: string): void {
	if (slug === currentSlug) return;
	void goto(`/xml/${slug}`, {
		replaceState: true,
		noScroll: true,
		keepFocus: true
	});
}
