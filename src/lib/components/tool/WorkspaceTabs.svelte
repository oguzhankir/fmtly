<script lang="ts">
	import { t } from '$stores/language';
	import { goto, preloadData } from '$app/navigation';
	import { localizePath } from '$lib/utils/locale-routing.js';
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
			case 'to-json':
				return $t('ui.convert.to_json', '→ JSON').replace(/^→\s*/, '');
			case 'to-yaml':
				return $t('ui.convert.to_yaml', '→ YAML').replace(/^→\s*/, '');
			case 'jsonpath':
				return $t('ui.query.jsonpath', 'JSONPath');
			case 'jmespath':
				return $t('ui.query.jmespath', 'JMESPath');
			case 'xpath':
				return $t('ui.query.xpath', 'XPath');
			case 'query':
				return $t('ui.query.query', 'Query');
			case 'to-csv':
				return $t('ui.convert.to_csv', '→ CSV').replace(/^→\s*/, '');
			case 'to-toml':
				return $t('ui.convert.to_toml', '→ TOML').replace(/^→\s*/, '');
			case 'to-xml':
				return $t('ui.convert.to_xml', '→ XML').replace(/^→\s*/, '');
			case 'to-html':
				return $t('ui.convert.to_html', '→ HTML').replace(/^→\s*/, '');
			case 'to-markdown':
				return $t('ui.convert.to_markdown', '→ MD').replace(/^→\s*/, '');
			case 'flatten':
				return $t('ui.json_flatten.tab_label', 'Flatten');
			case 'to-rust':
				return $t('ui.json_to_rust.tab_label', 'Rust');
			case 'patch':
				return $t('ui.json_patch.tab_label', 'Patch');
			case 'schema-validate':
				return $t('ui.validator.schema', 'Schema');
			case 'to-sql':
				return $t('ui.convert.to_sql', 'CSV → SQL');
			case 'case':
				return $t('ui.text_case.tab_label', 'Case');
			case 'reverser':
				return $t('ui.text_reverser.tab_label', 'Reverse');
			case 'deduplicate':
				return $t('ui.duplicate_line_remover.tab_label', 'Deduplicate');
			case 'whitespace':
				return $t('ui.whitespace_cleaner.tab_label', 'Whitespace');
			case 'url':
				return $t('ui.encode_url.tab_label', 'URL');
			case 'html-entities':
				return $t('ui.encode_html_entities.tab_label', 'Entities');
			case 'base64':
				return $t('ui.base64.tab_label', 'Base64');
			case 'unicode':
				return $t('ui.unicode_inspector.tab_label', 'Unicode');
			case 'hex':
				return $t('ui.hex.tab_label', 'Hex');
			case 'rot13':
				return $t('ui.rot13.tab_label', 'ROT13');
			case 'punycode':
				return $t('ui.punycode.tab_label', 'Punycode');
			case 'generator':
				return $t('ui.qr.tab_label', 'QR');
			case 'reader':
				return $t('ui.qr.tab_reader', 'Read');
			case 'barcode':
				return $t('ui.qr.tab_barcode', 'Barcode');
			case 'random-string':
				return $t('ui.random_string.tab_label', 'Random');
			case 'hash':
				return $t('ui.crypto.tab.hash', 'Hash');
			case 'hmac':
				return $t('ui.crypto.tab.hmac', 'HMAC');
			case 'file-hash':
				return $t('ui.crypto.tab.file_hash', 'File');
			case 'password-strength':
				return $t('ui.crypto.tab.password', 'Password');
			case 'uuid':
				return $t('ui.crypto.tab.uuid', 'UUID');
			case 'keypair':
				return $t('ui.crypto.tab.keypair', 'Keys');
			case 'cert-decoder':
				return $t('ui.crypto.tab.cert', 'Cert');
			case 'totp':
				return $t('ui.crypto.tab.totp', 'TOTP');
			default:
				return $t(tDef.displayName, tDef.displayName);
		}
	}

	function targetPath(slug: string): string {
		return localizePath(`/${category}/${slug}`, locale);
	}

	function prefetchTab(slug: string): void {
		if (slug === activeSlug) return;
		void preloadData(targetPath(slug));
	}

	async function handleNavigate(slug: string): Promise<void> {
		if (slug === activeSlug) return;
		const path = targetPath(slug);
		// Best-effort preload keeps tab switches snappy on slower connections.
		void preloadData(path);
		await goto(path, {
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
			onmouseenter={() => prefetchTab(tool.slug)}
			onfocus={() => prefetchTab(tool.slug)}
			onclick={() => {
				void handleNavigate(tool.slug);
			}}
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
