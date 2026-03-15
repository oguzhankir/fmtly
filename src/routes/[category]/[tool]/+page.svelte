<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
	import SeoHead from "$components/layout/SeoHead.svelte";
	import LZString from "lz-string";
	import ToolLayout from "$components/tool/ToolLayout.svelte";
	import InputPanel from "$components/panels/InputPanel.svelte";
	import OutputPanel from "$components/panels/OutputPanel.svelte";
	import DiffInputPanel from "$components/panels/DiffInputPanel.svelte";
	import DiffResultsPanel from "$components/tool/DiffResultsPanel.svelte";
	import JsonInputPanel from "$components/panels/JsonInputPanel.svelte";
	import JsonOutputPanel from "$components/panels/JsonOutputPanel.svelte";
	import JsonQueryOutputPanel from "$components/panels/JsonQueryOutputPanel.svelte";
	import JsonValidatorPanel from "$components/panels/JsonValidatorPanel.svelte";
	import WorkspaceTabs from "$components/tool/WorkspaceTabs.svelte";
	import XmlInputPanel from "$components/panels/XmlInputPanel.svelte";
	import XmlOutputPanel from "$components/panels/XmlOutputPanel.svelte";
	import XmlValidatorPanel from "$components/panels/XmlValidatorPanel.svelte";
	import XmlQueryOutputPanel from "$components/panels/XmlQueryOutputPanel.svelte";
	import TreePanel from "$components/panels/TreePanel.svelte";
	import TextAnalysisPanel from "$components/panels/TextAnalysisPanel.svelte";
	import TextControlsPanel from "$components/panels/TextControlsPanel.svelte";
	import NumberControlsPanel from "$components/panels/NumberControlsPanel.svelte";
	import PercentagePanel from "$components/panels/PercentagePanel.svelte";
	import UnicodePanel from "$components/panels/UnicodePanel.svelte";
	import EncoderControlsPanel from "$components/panels/EncoderControlsPanel.svelte";
	import EscaperControlsPanel from "$components/panels/EscaperControlsPanel.svelte";
	import ColorContrastPanel from "$components/panels/ColorContrastPanel.svelte";
	import ColorPalettePanel from "$components/panels/ColorPalettePanel.svelte";
	import ColorGradientPanel from "$components/panels/ColorGradientPanel.svelte";
	import ColorBlindnessPanel from "$components/panels/ColorBlindnessPanel.svelte";
	import CryptoHmacPanel from "$components/panels/CryptoHmacPanel.svelte";
	import CryptoPasswordStrengthPanel from "$components/panels/CryptoPasswordStrengthPanel.svelte";
	import CryptoUlidPanel from "$components/panels/CryptoUlidPanel.svelte";
	import CryptoRandomStringPanel from "$components/panels/CryptoRandomStringPanel.svelte";
	import WebUrlParserPanel from "$components/panels/WebUrlParserPanel.svelte";
	import WebUserAgentPanel from "$components/panels/WebUserAgentPanel.svelte";
	import WebCorsPanel from "$components/panels/WebCorsPanel.svelte";
	import WebMimeTypesPanel from "$components/panels/WebMimeTypesPanel.svelte";
	import WebIpLookupPanel from "$components/panels/WebIpLookupPanel.svelte";
	import WebDnsLookupPanel from "$components/panels/WebDnsLookupPanel.svelte";
	import CodeFormatterPanel from "$components/panels/CodeFormatterPanel.svelte";
	import CurlConverterPanel from "$components/panels/CurlConverterPanel.svelte";
	import PdfViewerPanel from "$components/panels/PdfViewerPanel.svelte";
	import PdfToTextPanel from "$components/panels/PdfToTextPanel.svelte";
	import PdfMergePanel from "$components/panels/PdfMergePanel.svelte";
	import PdfSplitPanel from "$components/panels/PdfSplitPanel.svelte";
	import PdfExtractPanel from "$components/panels/PdfExtractPanel.svelte";
	import ImageToBase64Panel from "$components/panels/ImageToBase64Panel.svelte";
	import ImageFromBase64Panel from "$components/panels/ImageFromBase64Panel.svelte";
	import ImageResizePanel from "$components/panels/ImageResizePanel.svelte";
	import ImageConvertPanel from "$components/panels/ImageConvertPanel.svelte";
	import ImageCompressPanel from "$components/panels/ImageCompressPanel.svelte";
	import SvgOptimizerPanel from "$components/panels/SvgOptimizerPanel.svelte";
	import ZipCreatePanel from "$components/panels/ZipCreatePanel.svelte";
	import ZipExtractPanel from "$components/panels/ZipExtractPanel.svelte";
	import FileHashPanel from "$components/panels/FileHashPanel.svelte";
	import ExcelToJsonPanel from "$components/panels/ExcelToJsonPanel.svelte";
	import JsonToExcelPanel from "$components/panels/JsonToExcelPanel.svelte";
	import QrGeneratorPanel from "$components/panels/QrGeneratorPanel.svelte";
	import QrReaderPanel from "$components/panels/QrReaderPanel.svelte";
	import FakeDataPanel from "$components/panels/FakeDataPanel.svelte";
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
		sortKeys,
		initJSONStore,
	} from "$stores/json.store";
	import {
		initXMLStore,
		destroyXMLStore,
		formatXml,
		minifyXml,
	} from "$stores/xml.store";
	import { initTextStore, textOptions } from "$stores/text.store";
	import { initNumberStore, numberOptions } from "$stores/number.store";
	import { initEncodeStore, encodeOptions } from "$stores/encode.store";
	import { initEscapeStore, escapeOptions } from "$stores/escape.store";
	import { initColorStore } from "$stores/color.store";
	import { initCryptoStore } from "$stores/crypto.store";
	import { initGenerateStore } from "$stores/generate.store";
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
		css: [".css", ".txt"],
		html: [".html", ".htm", ".txt"],
		csv: [".csv", ".txt"],
	};

	let acceptedExts = $derived(
		extensionMap[data.tool.inputLanguage] ?? [".txt", ".log"],
	);

	let unregisterToolShortcuts: (() => void) | undefined;
	let initializedToolKey = $state("");

	function initializeToolRuntime(): void {
		initHistory(data.tool.category, data.tool.slug);

		if (data.tool.engine === "json") {
			initJSONStore(data.tool.slug);
		} else if (data.tool.engine === "xml") {
			initXMLStore(data.tool.slug);
		} else if (data.tool.engine === "text") {
			initTextStore(data.tool.slug);
		} else if (data.tool.engine === "number") {
			initNumberStore(data.tool.slug);
		} else if (data.tool.engine === "encoder") {
			initEncodeStore(data.tool.slug);
		} else if (data.tool.engine === "escaper") {
			initEscapeStore(data.tool.slug);
		} else if (data.tool.engine === "color") {
			initColorStore(data.tool.slug);
		} else if (data.tool.engine === "crypto") {
			initCryptoStore(data.tool.slug);
		} else if (data.tool.engine === "generate") {
			initGenerateStore(data.tool.slug);
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
		destroyHistory();
	});
</script>

<SeoHead metadata={seo} />

{#if isDiffTool}
	<ToolLayout tool={localizedTool}>
			{#snippet inputPanel()}
				<div class="flex h-full w-full flex-col">
					{#if data.tool.category === "json" && jsonWorkspaceTools.length > 0}
						<WorkspaceTabs 
							tools={jsonWorkspaceTools} 
							activeSlug={data.tool.slug} 
							category="json" 
							locale={currentLocale} 
						/>
					{:else if data.tool.category === "xml" && xmlWorkspaceTools.length > 0}
						<WorkspaceTabs 
							tools={xmlWorkspaceTools} 
							activeSlug={data.tool.slug} 
							category="xml" 
							locale={currentLocale} 
						/>
					{/if}
					<div class="flex-1 overflow-hidden">
						<DiffInputPanel
							value={diffLeft}
							onchange={(v) => {
								diffLeft = v;
							}}
							language={data.tool.inputLanguage}
							placeholder={data.tool.category === 'xml' 
								? $t('ui.placeholder.original_xml', 'Paste original XML here…')
								: $t('ui.placeholder.original_json', 'Paste original JSON here…')}
						/>
					</div>
				</div>
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
				/>
			{/snippet}
	</ToolLayout>
{:else}
	<ToolLayout
		tool={localizedTool}
		onprocess={() => {
			if (data.tool.engine === 'json') { format(); }
			else if (data.tool.engine === 'xml') { formatXml(); }
		}}
		onshare={() => { shareModalOpen = true; }}
	>
		{#snippet inputPanel()}
			{#if data.tool.category === "text" && (data.tool.slug === "word-counter" || data.tool.slug === "readability")}
				<TextAnalysisPanel toolSlug={data.tool.slug} />
			{:else if data.tool.category === "text" && ["line-sorter", "deduplicate", "whitespace", "markdown-to-html", "reverser"].includes(data.tool.slug)}
				<div class="flex flex-col h-full w-full">
					<TextControlsPanel toolSlug={data.tool.slug} />
					<div class="flex-1 overflow-hidden relative">
						<InputPanel
							toolSlug={data.tool.slug}
							inputLanguage={data.tool.inputLanguage}
							acceptedExtensions={acceptedExts}
							sampleInput={data.tool.sampleInput}
						/>
					</div>
				</div>
			{:else if data.tool.category === "number" && data.tool.slug === "percentage"}
				<PercentagePanel />
			{:else if data.tool.category === "number" && ["formatter"].includes(data.tool.slug)}
				<div class="flex flex-col h-full w-full">
					<NumberControlsPanel toolSlug={data.tool.slug} />
					<div class="flex-1 overflow-hidden relative">
						<InputPanel
							toolSlug={data.tool.slug}
							inputLanguage={data.tool.inputLanguage}
							acceptedExtensions={acceptedExts}
							sampleInput={data.tool.sampleInput}
						/>
					</div>
				</div>
			{:else if data.tool.category === "encode" && data.tool.slug === "unicode"}
				<UnicodePanel />
			{:else if data.tool.category === "encode" && ["html-entities"].includes(data.tool.slug)}
				<div class="flex flex-col h-full w-full">
					<EncoderControlsPanel toolSlug={data.tool.slug} />
					<div class="flex-1 overflow-hidden relative">
						<InputPanel
							toolSlug={data.tool.slug}
							inputLanguage={data.tool.inputLanguage}
							acceptedExtensions={acceptedExts}
							sampleInput={data.tool.sampleInput}
						/>
					</div>
				</div>
			{:else if data.tool.category === "escape" && ["sql"].includes(data.tool.slug)}
				<div class="flex flex-col h-full w-full">
					<EscaperControlsPanel toolSlug={data.tool.slug} />
					<div class="flex-1 overflow-hidden relative">
						<InputPanel
							toolSlug={data.tool.slug}
							inputLanguage={data.tool.inputLanguage}
							acceptedExtensions={acceptedExts}
							sampleInput={data.tool.sampleInput}
						/>
					</div>
				</div>
			{:else if data.tool.category === "color" && data.tool.slug === "contrast"}
				<ColorContrastPanel />
			{:else if data.tool.category === "color" && data.tool.slug === "palette"}
				<ColorPalettePanel />
			{:else if data.tool.category === "color" && data.tool.slug === "gradient"}
				<ColorGradientPanel />
			{:else if data.tool.category === "color" && data.tool.slug === "blindness"}
				<ColorBlindnessPanel />
			{:else if data.tool.category === "crypto" && data.tool.slug === "hmac"}
				<CryptoHmacPanel />
			{:else if data.tool.category === "crypto" && data.tool.slug === "password-strength"}
				<CryptoPasswordStrengthPanel />
			{:else if data.tool.category === "crypto" && data.tool.slug === "ulid"}
				<CryptoUlidPanel />
			{:else if data.tool.category === "crypto" && data.tool.slug === "random-string"}
				<CryptoRandomStringPanel />
			{:else if data.tool.category === "web" && data.tool.slug === "url-parser"}
				<WebUrlParserPanel />
			{:else if data.tool.category === "web" && data.tool.slug === "user-agent"}
				<WebUserAgentPanel />
			{:else if data.tool.category === "web" && data.tool.slug === "cors"}
				<WebCorsPanel />
			{:else if data.tool.category === "web" && data.tool.slug === "mime-types"}
				<WebMimeTypesPanel />
			{:else if data.tool.category === "web" && data.tool.slug === "ip-lookup"}
				<WebIpLookupPanel />
			{:else if data.tool.category === "web" && data.tool.slug === "dns-lookup"}
				<WebDnsLookupPanel />
			{:else if data.tool.category === "code" && (data.tool.slug === "curl-to-fetch" || data.tool.slug === "curl-to-axios")}
				<CurlConverterPanel
					mode={data.tool.slug === "curl-to-fetch"
						? "fetch"
						: "axios"}
					sampleInput={data.tool.sampleInput ?? ""}
				/>
			{:else if data.tool.category === "code"}
				<CodeFormatterPanel
					toolSlug={data.tool.slug}
					sampleInput={data.tool.sampleInput ?? ""}
				/>
			{:else if data.tool.category === "pdf" && data.tool.slug === "viewer"}
				<PdfViewerPanel />
			{:else if data.tool.category === "pdf" && data.tool.slug === "to-text"}
				<PdfToTextPanel />
			{:else if data.tool.category === "pdf" && data.tool.slug === "merge"}
				<PdfMergePanel />
			{:else if data.tool.category === "pdf" && data.tool.slug === "split"}
				<PdfSplitPanel />
			{:else if data.tool.category === "pdf" && data.tool.slug === "extract-pages"}
				<PdfExtractPanel />
			{:else if data.tool.category === "image" && data.tool.slug === "to-base64"}
				<ImageToBase64Panel />
			{:else if data.tool.category === "image" && data.tool.slug === "from-base64"}
				<ImageFromBase64Panel />
			{:else if data.tool.category === "image" && data.tool.slug === "resize"}
				<ImageResizePanel />
			{:else if data.tool.category === "image" && data.tool.slug === "convert"}
				<ImageConvertPanel />
			{:else if data.tool.category === "image" && data.tool.slug === "compress"}
				<ImageCompressPanel />
			{:else if data.tool.category === "image" && data.tool.slug === "svg-optimizer"}
				<SvgOptimizerPanel />
			{:else if data.tool.category === "file" && data.tool.slug === "zip"}
				<ZipCreatePanel />
			{:else if data.tool.category === "file" && data.tool.slug === "unzip"}
				<ZipExtractPanel />
			{:else if data.tool.category === "file" && data.tool.slug === "hash"}
				<FileHashPanel />
			{:else if data.tool.category === "file" && data.tool.slug === "excel-to-json"}
				<ExcelToJsonPanel />
			{:else if data.tool.category === "file" && data.tool.slug === "json-to-excel"}
				<JsonToExcelPanel />
			{:else if data.tool.category === "qr" && data.tool.slug === "generator"}
				<QrGeneratorPanel />
			{:else if data.tool.category === "qr" && data.tool.slug === "reader"}
				<QrReaderPanel />
			{:else if data.tool.category === "generate" && data.tool.slug === "fake-data"}
				<FakeDataPanel />
			{:else if data.tool.category === "xml" && data.tool.slug === "validator"}
				<XmlValidatorPanel toolSlug={data.tool.slug} workspaceTools={xmlWorkspaceTools} />
			{:else if data.tool.category === "xml" && data.tool.slug !== "validator"}
				<XmlInputPanel
					toolSlug={data.tool.slug}
					sampleInput={data.tool.sampleInput ?? ""}
					workspaceTools={xmlWorkspaceTools}
				/>
			{:else if data.tool.category === "json" && data.tool.slug === "validator"}
				<JsonValidatorPanel toolSlug={data.tool.slug} workspaceTools={jsonWorkspaceTools} />
			{:else if data.tool.category === "json" && data.tool.slug !== "validator"}
				<JsonInputPanel
					toolSlug={data.tool.slug}
					inputLanguage={data.tool.inputLanguage}
					sampleInput={data.tool.sampleInput ?? ""}
					workspaceTools={jsonWorkspaceTools}
				/>
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
				{:else}
					<OutputPanel
						outputLanguage={data.tool.outputLanguage}
						downloadFilename={data.tool.id}
						isHtmlPreview={data.tool.slug === "markdown-to-html" &&
							$textOptions.markdownPreview}
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
