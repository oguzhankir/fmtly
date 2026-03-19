<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import SeoHead from "$components/layout/SeoHead.svelte";
	import LZString from "lz-string";
	import ToolLayout from "$components/tool/ToolLayout.svelte";
	import InputPanel from "$components/panels/shared/InputPanel.svelte";
	import OutputPanel from "$components/panels/shared/OutputPanel.svelte";
	import DiffInputPanel from "$components/panels/shared/DiffInputPanel.svelte";
	import DiffResultsPanel from "$components/tool/DiffResultsPanel.svelte";
	import JsonInputPanel from "$components/panels/json/JsonInputPanel.svelte";
	import JsonOutputPanel from "$components/panels/json/JsonOutputPanel.svelte";
	import JsonQueryOutputPanel from "$components/panels/json/JsonQueryOutputPanel.svelte";
	import JsonValidatorPanel from "$components/panels/json/JsonValidatorPanel.svelte";
	import WorkspaceTabs from "$components/tool/WorkspaceTabs.svelte";
	import XmlInputPanel from "$components/panels/xml/XmlInputPanel.svelte";
	import XmlOutputPanel from "$components/panels/xml/XmlOutputPanel.svelte";
	import XmlValidatorPanel from "$components/panels/xml/XmlValidatorPanel.svelte";
	import XmlQueryOutputPanel from "$components/panels/xml/XmlQueryOutputPanel.svelte";
	import CsvValidatorPanel from "$components/panels/csv/CsvValidatorPanel.svelte";
	import CsvOutputPanel from "$components/panels/csv/CsvOutputPanel.svelte";
	import TextCaseConverterPanel from "$components/panels/text/TextCaseConverterPanel.svelte";
	import TextCounterPanel from "$components/panels/text/TextCounterPanel.svelte";
	import LoremIpsumGeneratorPanel from "$components/panels/text/LoremIpsumGeneratorPanel.svelte";
	import TextMarkdownToHtmlPanel from "$components/panels/text/TextMarkdownToHtmlPanel.svelte";
	import TextReverserPanel from "$components/panels/text/TextReverserPanel.svelte";
	import DuplicateLineRemoverPanel from "$components/panels/text/DuplicateLineRemoverPanel.svelte";
	import TextLineSorterPanel from "$components/panels/text/TextLineSorterPanel.svelte";
	import WhitespaceCleanerPanel from "$components/panels/text/WhitespaceCleanerPanel.svelte";
	import TextDiffPanel from "$components/panels/text/TextDiffPanel.svelte";
	import TextRegexTesterPanel from "$components/panels/text/TextRegexTesterPanel.svelte";
	import TextEscapeUnescapePanel from "$components/panels/text/TextEscapeUnescapePanel.svelte";
	import TextReadabilityAnalyzerPanel from "$components/panels/text/TextReadabilityAnalyzerPanel.svelte";
	import TextMorseCodeTranslatorPanel from "$components/panels/text/TextMorseCodeTranslatorPanel.svelte";
	import EncodeUrlPanel from "$components/panels/encode/EncodeUrlPanel.svelte";
	import EncodeJwtDecoderPanel from "$components/panels/encode/EncodeJwtDecoderPanel.svelte";
	import YamlOutputPanel from "$components/panels/yaml/YamlOutputPanel.svelte";
	import YamlValidatorPanel from "$components/panels/yaml/YamlValidatorPanel.svelte";
	import TomlValidatorPanel from "$components/panels/toml/TomlValidatorPanel.svelte";
	import TreePanel from "$components/panels/shared/TreePanel.svelte";
	import ShareModal from "$components/modals/ShareModal.svelte";
	import { getToolsByCategory } from "$registry";
	import { localizeToolDefinition, localizeToolDefinitions } from "$lib/registry/localized.js";
	import { t } from "$stores/language";
	import { addToast } from "$stores/toast.store";
	import { generateToolSEO } from "$utils/seo.js";
	import { registerShortcuts } from "$utils/keyboard.js";
	import type { ShortcutEntry } from "$utils/keyboard.js";
	import { extractShareData } from "$utils/share.js";
	import { input } from "$stores/input.store";
	import {
		destroyJSONStore,
		format,
		minify,
		repair,
		initJSONStore,
	} from "$stores/json.store";
	import {
		initXMLStore,
		destroyXMLStore,
		formatXml,
		minifyXml,
	} from "$stores/xml.store";
	import {
		initYAMLStore,
		destroyYAMLStore,
		formatYaml,
		minifyYaml,
		processYamlTool
	} from "$stores/yaml.store";
	import {
		initCSVStore,
		destroyCSVStore,
		formatCsv,
		processCsvTool
	} from "$stores/csv.store";
	import {
		initTOMLStore,
		destroyTOMLStore,
		formatToml,
		minifyTomlTool,
		processTomlTool
	} from "$stores/toml.store";
	import { initHistory, destroyHistory } from "$stores/history.store";
	import { page } from "$app/stores";
	import { localizePath, stripLocalePrefix } from "$lib/utils/locale-routing.js";
	import type { PageData } from "./$types.js";

	let { data }: { data: PageData } = $props();

	let localizedTool = $derived(localizeToolDefinition(data.tool, $t));
	let currentLocale = $derived($page.params.lang ?? 'en');
	let currentPath = $derived(stripLocalePrefix($page.url.pathname));
	let seo = $derived(generateToolSEO(localizedTool, "https://fmtly.dev", currentPath));
	let shareModalOpen = $state(false);
	let toolPath = $derived(`${data.tool.category}/${data.tool.slug}`);
	let jsonWorkspaceTools = $derived(
		data.tool.category === "json"
			? localizeToolDefinitions(getToolsByCategory("json"), $t)
			: []
	);
	let xmlWorkspaceTools = $derived(
		data.tool.category === "xml"
			? localizeToolDefinitions(getToolsByCategory("xml"), $t)
			: []
	);
	let yamlWorkspaceTools = $derived(
		data.tool.category === "yaml"
			? localizeToolDefinitions(getToolsByCategory("yaml"), $t)
			: []
	);
	let csvWorkspaceTools = $derived(
		data.tool.category === "csv"
			? localizeToolDefinitions(getToolsByCategory("csv"), $t)
			: []
	);
	let tomlWorkspaceTools = $derived(
		data.tool.category === "toml"
			? localizeToolDefinitions(getToolsByCategory("toml"), $t)
			: []
	);
	let textWorkspaceTools = $derived(
		data.tool.category === "text"
			? localizeToolDefinitions(getToolsByCategory("text"), $t)
			: []
	);
	let encodeWorkspaceTools = $derived(
		data.tool.category === "encode"
			? localizeToolDefinitions(getToolsByCategory("encode"), $t)
			: []
	);
	let isDiffTool = $derived(data.tool.engine === "diff");
	let diffLeft = $state("");
	let diffRight = $state("");

	function swapDiffPanels(): void {
		const tmp = diffLeft;
		diffLeft = diffRight;
		diffRight = tmp;
	}

	function loadDiffSample(left: string, right: string): void {
		diffLeft = left;
		diffRight = right;
	}

	function shareDiff(): void {
		if (!browser) return;
		const params = new URLSearchParams();
		if (diffLeft.trim()) params.set('left', LZString.compressToEncodedURIComponent(diffLeft));
		if (diffRight.trim()) params.set('right', LZString.compressToEncodedURIComponent(diffRight));
		const url = `${window.location.pathname}?${params.toString()}`;
		void navigator.clipboard.writeText(`${window.location.origin}${url}`);
		addToast('success', $t('ui.diff.toast.share_copied', 'Share link copied to clipboard'));
	}
	let treePanelRef: TreePanel | undefined = $state(undefined);

	function navigateToJsonWorkspaceIndex(index: number): void {
		const target = jsonWorkspaceTools[index];
		if (!target || target.slug === data.tool.slug) return;
		void goto(localizePath(`/json/${target.slug}`, currentLocale), {
			replaceState: true,
			noScroll: true,
			keepFocus: true,
		});
	}

	function navigateToYamlWorkspaceIndex(index: number): void {
		const target = yamlWorkspaceTools[index];
		if (!target || target.slug === data.tool.slug) return;
		void goto(localizePath(`/yaml/${target.slug}`, currentLocale), {
			replaceState: true,
			noScroll: true,
			keepFocus: true,
		});
	}

	function navigateToCsvWorkspaceIndex(index: number): void {
		const target = csvWorkspaceTools[index];
		if (!target || target.slug === data.tool.slug) return;
		void goto(localizePath(`/csv/${target.slug}`, currentLocale), {
			replaceState: true,
			noScroll: true,
			keepFocus: true,
		});
	}

	function navigateToTomlWorkspaceIndex(index: number): void {
		const target = tomlWorkspaceTools[index];
		if (!target || target.slug === data.tool.slug) return;
		void goto(localizePath(`/toml/${target.slug}`, currentLocale), {
			replaceState: true,
			noScroll: true,
			keepFocus: true,
		});
	}

	let faqStructuredData = $derived(
		JSON.stringify({
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: localizedTool.faqs.map((faq) => ({
				"@type": "Question",
				name: faq.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: faq.answer,
				},
			})),
		}),
	);

	const extensionMap: Record<string, string[]> = {
		json: [".json", ".txt"],
		xml: [".xml", ".txt"],
		yaml: [".yaml", ".yml", ".txt"],
		toml: [".toml", ".txt"],
		csv: [".csv", ".txt"],
		txt: [".txt", ".md", ".log"],
	};

	let acceptedExts = $derived(
		extensionMap[data.tool.inputLanguage] ?? [".txt", ".log"],
	);

	let unregisterToolShortcuts: (() => void) | undefined;
	let initializedToolKey = $state("");

	function initializeToolRuntime(): void {
		initHistory(data.tool.category, data.tool.slug);
		destroyJSONStore();
		destroyXMLStore();
		destroyYAMLStore();
		destroyCSVStore();
		destroyTOMLStore();

		if (data.tool.engine === "json") {
			initJSONStore(data.tool.slug);
		} else if (data.tool.engine === "xml") {
			initXMLStore(data.tool.slug);
		} else if (data.tool.engine === "yaml") {
			initYAMLStore(data.tool.slug);
		} else if (data.tool.engine === "csv") {
			initCSVStore(data.tool.slug);
		} else if (data.tool.engine === "toml") {
			initTOMLStore(data.tool.slug);
		}
	}

	onMount(() => {
		initializeToolRuntime();
		initializedToolKey = `${data.tool.category}/${data.tool.slug}`;

		if (browser) {
			const urlParams = new URLSearchParams(window.location.search);

			if (isDiffTool) {
				const leftParam = urlParams.get('left');
				const rightParam = urlParams.get('right');
				if (leftParam) diffLeft = LZString.decompressFromEncodedURIComponent(leftParam) ?? '';
				if (rightParam) diffRight = LZString.decompressFromEncodedURIComponent(rightParam) ?? '';
				if (leftParam || rightParam) history.replaceState(null, '', window.location.pathname);
			} else {
				const inputParam = urlParams.get("input");
				const initialInput = inputParam
					? LZString.decompressFromEncodedURIComponent(inputParam)
					: null;

				const shared = extractShareData();
				if (initialInput) {
					input.set(initialInput);
					history.replaceState(null, "", window.location.pathname);
				} else if (shared) {
					input.set(shared);
					history.replaceState(null, "", window.location.pathname);
				}
			}
		}

		const shortcuts: ShortcutEntry[] = [
			{
				key: "s",
				ctrl: true,
				shift: true,
				scope: "global",
				label: $t('ui.share_url', 'Share URL'),
				handler: () => {
					shareModalOpen = true;
				},
			},
		];

		if (data.tool.engine === "xml") {
			shortcuts.push(
				{
					key: "f",
					ctrl: true,
					shift: true,
					scope: "tool",
					label: $t('ui.format_xml', 'Format XML'),
					handler: () => { formatXml(); },
				},
				{
					key: "m",
					ctrl: true,
					shift: true,
					scope: "tool",
					label: $t('ui.minify_xml', 'Minify XML'),
					handler: () => { minifyXml(); },
				},
			);

			for (const [index] of xmlWorkspaceTools.entries()) {
				if (index > 8) break;
				shortcuts.push({
					key: String(index + 1),
					scope: "tool",
					label: ($t as any)('switch_to_xml_tab', 'Switch to XML tab {index}', { index: index + 1 }),
					handler: () => {
						const target = xmlWorkspaceTools[index];
						if (!target || target.slug === data.tool.slug) return;
						void goto(localizePath(`/xml/${target.slug}`, currentLocale), {
							replaceState: true,
							noScroll: true,
							keepFocus: true
						});
					},
				});
			}
		}

		if (data.tool.engine === "yaml") {
			shortcuts.push(
				{
					key: "f",
					ctrl: true,
					shift: true,
					scope: "tool",
					label: $t('ui.format_yaml', 'Format YAML'),
					handler: () => { void formatYaml(); },
				},
				{
					key: "m",
					ctrl: true,
					shift: true,
					scope: "tool",
					label: $t('ui.minify', 'Minify'),
					handler: () => { void minifyYaml(); },
				}
			);

			for (const [index] of yamlWorkspaceTools.entries()) {
				if (index > 8) break;
				shortcuts.push({
					key: String(index + 1),
					scope: "tool",
					label: ($t as any)('switch_to_yaml_tab', 'Switch to YAML tab {index}', { index: index + 1 }),
					handler: () => {
						navigateToYamlWorkspaceIndex(index);
					},
				});
			}
		}

		if (data.tool.engine === "csv") {
			shortcuts.push({
				key: "f",
				ctrl: true,
				shift: true,
				scope: "tool",
				label: $t('ui.actions.format', 'Format'),
				handler: () => { void formatCsv(); },
			});

			for (const [index] of csvWorkspaceTools.entries()) {
				if (index > 8) break;
				shortcuts.push({
					key: String(index + 1),
					scope: "tool",
					label: ($t as any)('switch_to_tab', 'Switch to tab {index}', { index: index + 1 }),
					handler: () => {
						navigateToCsvWorkspaceIndex(index);
					},
				});
			}
		}

		if (data.tool.engine === "toml") {
			shortcuts.push(
				{
					key: "f",
					ctrl: true,
					shift: true,
					scope: "tool",
					label: $t('ui.actions.format', 'Format'),
					handler: () => { void formatToml(); },
				},
				{
					key: "m",
					ctrl: true,
					shift: true,
					scope: "tool",
					label: $t('ui.actions.minify', 'Minify'),
					handler: () => { void minifyTomlTool(); },
				}
			);

			for (const [index] of tomlWorkspaceTools.entries()) {
				if (index > 8) break;
				shortcuts.push({
					key: String(index + 1),
					scope: "tool",
					label: ($t as any)('switch_to_tab', 'Switch to tab {index}', { index: index + 1 }),
					handler: () => {
						navigateToTomlWorkspaceIndex(index);
					},
				});
			}
		}

		if (data.tool.engine === "json") {
			shortcuts.push(
				{
					key: "f",
					ctrl: true,
					shift: true,
					scope: "tool",
					label: $t('ui.format_beautify', 'Format / Beautify'),
					handler: () => {
						format();
					},
				},
				{
					key: "m",
					ctrl: true,
					shift: true,
					scope: "tool",
					label: $t('ui.minify', 'Minify'),
					handler: () => {
						minify();
					},
				},
				{
					key: "r",
					ctrl: true,
					shift: true,
					scope: "tool",
					label: $t('ui.repair_json', 'Repair JSON'),
					handler: () => {
						repair();
					},
				},
			);

			for (const [index] of jsonWorkspaceTools.entries()) {
				if (index > 8) break;
				shortcuts.push({
					key: String(index + 1),
					scope: "tool",
					label: ($t as any)('switch_to_tab', 'Switch to tab {index}', { index: index + 1 }),
					handler: () => {
						navigateToJsonWorkspaceIndex(index);
					},
				});
			}
		}

		if (data.tool.hasTreeView) {
			shortcuts.push(
				{
					key: "]",
					ctrl: true,
					scope: "tool",
					label: $t('ui.expand_all', 'Expand all'),
					handler: () => {
						treePanelRef?.expand();
					},
				},
				{
					key: "[",
					ctrl: true,
					scope: "tool",
					label: $t('ui.collapse_all', 'Collapse all'),
					handler: () => {
						treePanelRef?.collapse();
					},
				},
				{
					key: "1",
					ctrl: true,
					scope: "tool",
					label: ($t as any)('ui.expand_to_depth', 'Expand to depth {depth}', { depth: 1 }),
					handler: () => {
						treePanelRef?.setDepth(1);
					},
				},
				{
					key: "2",
					ctrl: true,
					scope: "tool",
					label: ($t as any)('ui.expand_to_depth', 'Expand to depth {depth}', { depth: 2 }),
					handler: () => {
						treePanelRef?.setDepth(2);
					},
				},
				{
					key: "3",
					ctrl: true,
					scope: "tool",
					label: ($t as any)('ui.expand_to_depth', 'Expand to depth {depth}', { depth: 3 }),
					handler: () => {
						treePanelRef?.setDepth(3);
					},
				},
				{
					key: "4",
					ctrl: true,
					scope: "tool",
					label: ($t as any)('ui.expand_to_depth', 'Expand to depth {depth}', { depth: 4 }),
					handler: () => {
						treePanelRef?.setDepth(4);
					},
				},
				{
					key: "5",
					ctrl: true,
					scope: "tool",
					label: ($t as any)('ui.expand_to_depth', 'Expand to depth {depth}', { depth: 5 }),
					handler: () => {
						treePanelRef?.setDepth(5);
					},
				},
			);
		}

		unregisterToolShortcuts = registerShortcuts(shortcuts);
	});

	$effect(() => {
		const nextToolKey = `${data.tool.category}/${data.tool.slug}`;
		if (!browser || initializedToolKey === "" || initializedToolKey === nextToolKey) return;
		initializeToolRuntime();
		initializedToolKey = nextToolKey;
	});

	onDestroy(() => {
		unregisterToolShortcuts?.();
		destroyJSONStore();
		destroyXMLStore();
		destroyYAMLStore();
		destroyCSVStore();
		destroyHistory();
	});
</script>

<SeoHead metadata={seo} />

{#if data.tool.category === "text" && data.tool.slug === "diff"}
	<TextDiffPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
{:else if isDiffTool}
	<ToolLayout tool={localizedTool}>
		{#snippet workspaceTabs()}
			{#if data.tool.category === 'json' && jsonWorkspaceTools.length > 0}
				<WorkspaceTabs tools={jsonWorkspaceTools} activeSlug={data.tool.slug} category="json" locale={currentLocale} />
			{:else if data.tool.category === 'xml' && xmlWorkspaceTools.length > 0}
				<WorkspaceTabs tools={xmlWorkspaceTools} activeSlug={data.tool.slug} category="xml" locale={currentLocale} />
			{:else if data.tool.category === 'yaml' && yamlWorkspaceTools.length > 0}
				<WorkspaceTabs tools={yamlWorkspaceTools} activeSlug={data.tool.slug} category="yaml" locale={currentLocale} />
			{:else if data.tool.category === 'toml' && tomlWorkspaceTools.length > 0}
				<WorkspaceTabs tools={tomlWorkspaceTools} activeSlug={data.tool.slug} category="toml" locale={currentLocale} />
			{/if}
		{/snippet}
		{#snippet inputPanel()}
				<DiffInputPanel
					value={diffLeft}
					onchange={(v) => {
						diffLeft = v;
					}}
					language={data.tool.inputLanguage}
					placeholder={data.tool.category === 'xml'
						? $t('ui.placeholder.original_xml', 'Paste original XML here…')
						: data.tool.category === 'yaml'
							? $t('ui.placeholder.original_yaml', 'Paste original YAML here…')
							: data.tool.category === 'toml'
								? $t('ui.paste_language_here', { language: 'TOML' }, 'Paste TOML here…')
							: $t('ui.placeholder.original_json', 'Paste original JSON here…')}
				/>
		{/snippet}
		{#snippet outputPanel()}
			<DiffInputPanel
				value={diffRight}
				onchange={(v) => {
					diffRight = v;
				}}
				language={data.tool.inputLanguage}
				placeholder={data.tool.category === 'xml'
					? $t('ui.placeholder.modified_xml', 'Paste modified XML here…')
					: data.tool.category === 'yaml'
						? $t('ui.placeholder.modified_yaml', 'Paste modified YAML here…')
						: data.tool.category === 'toml'
							? $t('ui.paste_language_here', { language: 'TOML' }, 'Paste TOML here…')
						: $t('ui.placeholder.modified_json', 'Paste modified JSON here…')}
			/>
		{/snippet}
			{#snippet diffPanel()}
				<DiffResultsPanel
					leftInput={diffLeft}
					rightInput={diffRight}
					language={data.tool.inputLanguage}
					onswap={swapDiffPanels}
					onsample={loadDiffSample}
					onchangeLeft={(v) => diffLeft = v}
					onchangeRight={(v) => diffRight = v}
				/>
			{/snippet}
	</ToolLayout>
{:else}
	<ToolLayout
		tool={localizedTool}
		onprocess={() => {
			if (data.tool.engine === 'json') { format(); }
			else if (data.tool.engine === 'xml') { formatXml(); }
			else if (data.tool.engine === 'yaml') { void processYamlTool(); }
			else if (data.tool.engine === 'csv') { void processCsvTool(); }
			else if (data.tool.engine === 'toml') { void processTomlTool(); }
		}}
		onshare={() => { shareModalOpen = true; }}
	>
		{#snippet workspaceTabs()}
			{#if data.tool.category === 'json' && jsonWorkspaceTools.length > 0}
				<WorkspaceTabs tools={jsonWorkspaceTools} activeSlug={data.tool.slug} category="json" locale={currentLocale} />
			{:else if data.tool.category === 'xml' && xmlWorkspaceTools.length > 0}
				<WorkspaceTabs tools={xmlWorkspaceTools} activeSlug={data.tool.slug} category="xml" locale={currentLocale} />
			{:else if data.tool.category === 'yaml' && yamlWorkspaceTools.length > 0}
				<WorkspaceTabs tools={yamlWorkspaceTools} activeSlug={data.tool.slug} category="yaml" locale={currentLocale} />
			{:else if data.tool.category === 'csv' && csvWorkspaceTools.length > 0}
				<WorkspaceTabs tools={csvWorkspaceTools} activeSlug={data.tool.slug} category="csv" locale={currentLocale} />
			{:else if data.tool.category === 'toml' && tomlWorkspaceTools.length > 0}
				<WorkspaceTabs tools={tomlWorkspaceTools} activeSlug={data.tool.slug} category="toml" locale={currentLocale} />
			{/if}
		{/snippet}
		{#snippet inputPanel()}
			{#if data.tool.category === "xml" && data.tool.slug === "validator"}
				<XmlValidatorPanel toolSlug={data.tool.slug} workspaceTools={[]} />
			{:else if data.tool.category === "xml" && data.tool.slug !== "validator"}
				<XmlInputPanel
					toolSlug={data.tool.slug}
					sampleInput={data.tool.sampleInput ?? ""}
					workspaceTools={[]}
				/>
			{:else if data.tool.category === "json" && ["validator", "schema-validate"].includes(data.tool.slug)}
				<JsonValidatorPanel toolSlug={data.tool.slug} workspaceTools={[]} />
			{:else if data.tool.category === "json" && !["validator", "schema-validate"].includes(data.tool.slug)}
				<JsonInputPanel
					toolSlug={data.tool.slug}
					inputLanguage={data.tool.inputLanguage}
					sampleInput={data.tool.sampleInput ?? ""}
					workspaceTools={[]}
				/>
			{:else if data.tool.category === "yaml" && data.tool.slug === "validator"}
				<YamlValidatorPanel toolSlug={data.tool.slug} workspaceTools={[]} />
			{:else if data.tool.category === "yaml"}
				<InputPanel
					toolSlug="yaml-workspace"
					inputLanguage={data.tool.inputLanguage}
					acceptedExtensions={acceptedExts}
					sampleInput={data.tool.sampleInput}
					enableRemoteActions={true}
					remoteInputKind="yaml"
				/>
			{:else if data.tool.category === "csv" && data.tool.slug === "validator"}
				<CsvValidatorPanel toolSlug={data.tool.slug} workspaceTools={[]} />
			{:else if data.tool.category === "csv"}
				<InputPanel
					toolSlug="csv-workspace"
					inputLanguage={data.tool.inputLanguage}
					acceptedExtensions={acceptedExts}
					sampleInput={data.tool.sampleInput}
					enableRemoteActions={true}
					remoteInputKind="csv"
				/>
			{:else if data.tool.category === "toml" && data.tool.slug === "validator"}
				<TomlValidatorPanel toolSlug={data.tool.slug} workspaceTools={[]} />
			{:else if data.tool.category === "toml"}
				<InputPanel
					toolSlug="toml-workspace"
					inputLanguage={data.tool.inputLanguage}
					acceptedExtensions={acceptedExts}
					sampleInput={data.tool.sampleInput}
					enableRemoteActions={true}
					remoteInputKind="toml"
				/>
			{:else if data.tool.category === "text" && data.tool.slug === "word-counter"}
				<TextCounterPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "text" && data.tool.slug === "lorem"}
				<LoremIpsumGeneratorPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "text" && data.tool.slug === "markdown-to-html"}
				<TextMarkdownToHtmlPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "text" && data.tool.slug === "case"}
				<TextCaseConverterPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "text" && data.tool.slug === "reverser"}
				<TextReverserPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "text" && data.tool.slug === "deduplicate"}
				<DuplicateLineRemoverPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "text" && data.tool.slug === "line-sorter"}
				<TextLineSorterPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "text" && data.tool.slug === "whitespace"}
				<WhitespaceCleanerPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "text" && data.tool.slug === "regex"}
				<TextRegexTesterPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "text" && data.tool.slug === "escape"}
				<TextEscapeUnescapePanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "text" && data.tool.slug === "readability"}
				<TextReadabilityAnalyzerPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "text" && data.tool.slug === "morse"}
				<TextMorseCodeTranslatorPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "text" && data.tool.slug === "diff"}
				<TextDiffPanel toolSlug={data.tool.slug} workspaceTools={textWorkspaceTools} />
			{:else if data.tool.category === "encode" && data.tool.slug === "url"}
				<EncodeUrlPanel toolSlug={data.tool.slug} workspaceTools={encodeWorkspaceTools} />
			{:else if data.tool.category === "encode" && data.tool.slug === "jwt"}
				<EncodeJwtDecoderPanel toolSlug={data.tool.slug} workspaceTools={encodeWorkspaceTools} />
			{:else}
				<InputPanel
					toolSlug={data.tool.slug}
					inputLanguage={data.tool.inputLanguage}
					acceptedExtensions={acceptedExts}
					sampleInput={data.tool.sampleInput}
				/>
			{/if}
		{/snippet}
		{#snippet outputPanel()}
			{#if data.tool.layoutVariant !== "single-panel"}
				{#if data.tool.category === "xml" && data.tool.slug === "xpath"}
					<XmlQueryOutputPanel workspaceTools={xmlWorkspaceTools} />
				{:else if data.tool.category === "xml" && data.tool.slug !== "validator"}
					<XmlOutputPanel
						outputLanguage={data.tool.outputLanguage}
						downloadFilename={data.tool.id}
						toolSlug={data.tool.slug}
					/>
				{:else if data.tool.category === "json" && ["jsonpath", "jmespath"].includes(data.tool.slug)}
					<JsonQueryOutputPanel toolSlug={data.tool.slug === "jsonpath" ? "jsonpath" : "jmespath"} />
				{:else if data.tool.category === "json" && data.tool.slug !== "validator"}
					<JsonOutputPanel
						outputLanguage={data.tool.outputLanguage}
						downloadFilename={data.tool.id}
						toolSlug={data.tool.slug}
					/>
				{:else if data.tool.category === "yaml" && data.tool.slug === "query"}
					<JsonQueryOutputPanel
						toolSlug="jsonpath"
						inputLanguage="yaml"
						allowModeSwitching={true}
					/>
				{:else if data.tool.category === "yaml" && data.tool.slug !== "validator"}
					<YamlOutputPanel
						outputLanguage={data.tool.outputLanguage}
						downloadFilename={data.tool.id}
						toolSlug={data.tool.slug}
					/>
				{:else if data.tool.category === "csv" && data.tool.slug !== "validator"}
					<CsvOutputPanel
						outputLanguage={data.tool.outputLanguage}
						downloadFilename={data.tool.id}
						toolSlug={data.tool.slug}
					/>
				{:else}
					<OutputPanel
						outputLanguage={data.tool.outputLanguage}
						downloadFilename={data.tool.id}
					/>
				{/if}
			{/if}
		{/snippet}
		{#snippet treePanel()}
			{#if data.tool.hasTreeView}
				<TreePanel bind:this={treePanelRef} />
			{/if}
		{/snippet}
	</ToolLayout>
{/if}

<!-- Content section -->
<section
	class="mx-auto max-w-[var(--max-content-width)] px-[var(--space-6)] py-[var(--space-8)]"
>
	<!-- Description -->
	<div class="mb-[var(--space-8)]">
		<h1
			class="mb-[var(--space-3)] text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]"
		>
			{localizedTool.displayName}
		</h1>
		<p
			class="max-w-[640px] text-[length:var(--text-base)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]"
		>
			{localizedTool.description}
		</p>
	</div>

	<!-- Use Cases -->
	{#if localizedTool.useCases.length > 0}
		<div class="mb-[var(--space-8)]">
			<h2
				class="mb-[var(--space-3)] text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]"
			>
				{localizedTool.displayName} {$t('use_cases', 'Use Cases')}
			</h2>
			<ul class="flex flex-col gap-[var(--space-2)] pl-[var(--space-4)]">
				{#each localizedTool.useCases as useCase}
					<li
						class="list-disc text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]"
					>
						{useCase}
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	<!-- FAQ Section with Schema.org FAQPage markup -->
	{#if localizedTool.faqs.length > 0}
		<div class="mb-[var(--space-8)]">
			<h2
				class="mb-[var(--space-4)] text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]"
			>
				{localizedTool.displayName} {$t('faq', 'FAQ')}
			</h2>
			<div class="flex flex-col gap-[var(--space-4)]">
				{#each localizedTool.faqs as faq}
					<div
						class="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)]"
					>
						<h3
							class="mb-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]"
						>
							{faq.question}
						</h3>
						<p
							class="text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-secondary)]"
						>
							{faq.answer}
						</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</section>

<ShareModal bind:open={shareModalOpen} {toolPath} />

<!-- FAQPage structured data -->
<svelte:head>
	{#if localizedTool.faqs.length > 0}
		{@html `<script type="application/ld+json">${faqStructuredData}<\/script>`}
	{/if}
</svelte:head>
