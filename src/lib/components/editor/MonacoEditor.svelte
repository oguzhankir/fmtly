<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { input } from "$stores/input.store";
	import { theme } from "$stores/settings.store";
	import type { Theme } from "$stores/settings.store";

	let {
		language = "json",
		wordWrap = true,
	}: {
		language?: string;
		wordWrap?: boolean;
	} = $props();

	let containerEl: HTMLDivElement | undefined = $state(undefined);
	let textareaEl: HTMLTextAreaElement | undefined = $state(undefined);
	let monacoLoaded = $state(false);
	let monacoLoading = $state(false);
	let editorInstance:
		| import("monaco-editor").editor.IStandaloneCodeEditor
		| undefined = $state(undefined);
	let monacoApi: typeof import("monaco-editor") | undefined =
		$state(undefined);
	let isUpdatingFromStore = false;
	let isUpdatingFromEditor = false;
	let unsubscribeInput: (() => void) | undefined;
	let unsubscribeTheme: (() => void) | undefined;
	let decorationIds: string[] = [];

	const FMTLY_DARK = "fmtly-dark";
	const FMTLY_LIGHT = "fmtly-light";

	function defineThemes(monaco: typeof import("monaco-editor")): void {
		monaco.editor.defineTheme(FMTLY_DARK, {
			base: "vs-dark",
			inherit: true,
			rules: [
				{ token: "string", foreground: "6ee7b7" },
				{ token: "string.key.json", foreground: "e8a44a" },
				{ token: "string.value.json", foreground: "6ee7b7" },
				{ token: "number", foreground: "fbbf24" },
				{ token: "keyword", foreground: "c084fc" },
				{ token: "comment", foreground: "57534e" },
				{ token: "delimiter", foreground: "b5a99a" },
				{ token: "delimiter.bracket", foreground: "b5a99a" },
				{ token: "tag", foreground: "c084fc" },
				{ token: "attribute.name", foreground: "e8a44a" },
				{ token: "attribute.value", foreground: "6ee7b7" },
				{ token: "type", foreground: "fb923c" },
				{ token: "constant", foreground: "fb923c" },
			],
			colors: {
				"editor.background": "#211e1a",
				"editor.foreground": "#f0ebe3",
				"editor.lineHighlightBackground": "#2a2621",
				"editor.selectionBackground": "#d9770630",
				"editor.inactiveSelectionBackground": "#d9770618",
				"editorCursor.foreground": "#d97706",
				"editorLineNumber.foreground": "#57534e",
				"editorLineNumber.activeForeground": "#b5a99a",
				"editorIndentGuide.background": "#27231f",
				"editorIndentGuide.activeBackground": "#332e29",
				"editor.selectionHighlightBackground": "#d9770618",
				"editorBracketMatch.background": "#d9770620",
				"editorBracketMatch.border": "#d9770670",
				"editorGutter.background": "#211e1a",
				"editorWidget.background": "#2d2925",
				"editorWidget.border": "#332e29",
				"input.background": "#27231f",
				"input.border": "#332e29",
				"scrollbarSlider.background": "#4a443d80",
				"scrollbarSlider.hoverBackground": "#524b4380",
				"scrollbarSlider.activeBackground": "#5e574f80",
			},
		});

		monaco.editor.defineTheme(FMTLY_LIGHT, {
			base: "vs",
			inherit: true,
			rules: [
				{ token: "string", foreground: "059669" },
				{ token: "string.key.json", foreground: "c2610c" },
				{ token: "string.value.json", foreground: "059669" },
				{ token: "number", foreground: "c2610c" },
				{ token: "keyword", foreground: "7c3aed" },
				{ token: "comment", foreground: "9a8b7c" },
				{ token: "delimiter", foreground: "5c4f43" },
				{ token: "delimiter.bracket", foreground: "5c4f43" },
				{ token: "tag", foreground: "7c3aed" },
				{ token: "attribute.name", foreground: "c2610c" },
				{ token: "attribute.value", foreground: "059669" },
				{ token: "type", foreground: "ea580c" },
				{ token: "constant", foreground: "ea580c" },
			],
			colors: {
				"editor.background": "#ede5dc",
				"editor.foreground": "#1c1612",
				"editor.lineHighlightBackground": "#e6dcd3",
				"editor.selectionBackground": "#c2610c28",
				"editor.inactiveSelectionBackground": "#c2610c15",
				"editorCursor.foreground": "#c2610c",
				"editorLineNumber.foreground": "#9a8b7c",
				"editorLineNumber.activeForeground": "#5c4f43",
				"editorIndentGuide.background": "#ddd3c8",
				"editorIndentGuide.activeBackground": "#c4b5a8",
				"editor.selectionHighlightBackground": "#c2610c10",
				"editorBracketMatch.background": "#c2610c18",
				"editorBracketMatch.border": "#c2610c55",
				"editorGutter.background": "#ede5dc",
				"editorWidget.background": "#f3ede7",
				"editorWidget.border": "#ddd3c8",
				"input.background": "#faf7f4",
				"input.border": "#ddd3c8",
				"scrollbarSlider.background": "#c4b5a880",
				"scrollbarSlider.hoverBackground": "#9a8b7c80",
				"scrollbarSlider.activeBackground": "#9a8b7ca0",
			},
		});
	}

	function getThemeName(t: Theme): string {
		return t === "dark" ? FMTLY_DARK : FMTLY_LIGHT;
	}

	async function loadMonaco(): Promise<void> {
		if (monacoLoading || monacoLoaded) return;
		monacoLoading = true;

		const loader = await import("@monaco-editor/loader");
		const monaco = await loader.default.init();
		monacoApi = monaco;

		defineThemes(monaco);

		let currentTheme: Theme = "dark";
		theme.subscribe((t) => {
			currentTheme = t;
		})();

		if (!containerEl) {
			monacoLoading = false;
			return;
		}

		const currentValue = textareaEl?.value ?? "";
		const cursorPos = textareaEl?.selectionStart ?? 0;

		editorInstance = monaco.editor.create(containerEl, {
			value: currentValue,
			language,
			theme: getThemeName(currentTheme),
			fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
			fontSize: 13,
			fontLigatures: true,
			lineNumbers: "on",
			minimap: { enabled: false },
			folding: true,
			wordWrap: wordWrap ? "on" : "off",
			automaticLayout: true,
			scrollBeyondLastLine: false,
			padding: { top: 16, bottom: 16 },
			renderLineHighlight: "line",
			bracketPairColorization: { enabled: true },
			guides: { bracketPairs: true, indentation: true },
			smoothScrolling: true,
			cursorBlinking: "smooth",
			cursorSmoothCaretAnimation: "on",
			tabSize: 2,
			overviewRulerBorder: false,
			hideCursorInOverviewRuler: true,
			scrollbar: {
				verticalSliderSize: 6,
				horizontalSliderSize: 6,
				useShadows: false,
			},
		});

		if (!editorInstance) return;

		const model = editorInstance.getModel();
		if (model && cursorPos > 0) {
			const position = model.getPositionAt(cursorPos);
			editorInstance.setPosition(position);
			editorInstance.revealPositionInCenter(position);
		}

		editorInstance.focus();

		editorInstance.onDidChangeModelContent(() => {
			if (isUpdatingFromStore) return;
			const value = editorInstance?.getValue() ?? "";
			isUpdatingFromEditor = true;
			input.set(value);
			isUpdatingFromEditor = false;
		});

		unsubscribeInput = input.subscribe((value) => {
			if (isUpdatingFromEditor) return;
			if (!editorInstance) return;
			const current = editorInstance.getValue();
			if (value !== current) {
				isUpdatingFromStore = true;
				editorInstance.setValue(value);
				isUpdatingFromStore = false;
			}
		});

		unsubscribeTheme = theme.subscribe((t) => {
			if (monacoApi && editorInstance) {
				monacoApi.editor.setTheme(getThemeName(t));
			}
		});

		monacoLoaded = true;
		monacoLoading = false;
	}

	function handleTextareaFocus(): void {
		loadMonaco();
	}

	function handleTextareaInput(event: Event): void {
		const target = event.target as HTMLTextAreaElement;
		input.set(target.value);
	}

	export function setErrorMarkers(
		errors: Array<{ line: number; column: number; message: string }>,
	): void {
		if (!editorInstance || !monacoApi) return;
		const model = editorInstance.getModel();
		if (!model) return;

		if (errors.length === 0) {
			monacoApi.editor.setModelMarkers(model, "fmtly", []);
			decorationIds = editorInstance.deltaDecorations(decorationIds, []);
			return;
		}

		const markers = errors.map((err) => ({
			severity: monacoApi!.MarkerSeverity.Error,
			startLineNumber: err.line,
			startColumn: err.column,
			endLineNumber: err.line,
			endColumn: err.column + 1,
			message: err.message,
		}));

		monacoApi.editor.setModelMarkers(model, "fmtly", markers);

		const newDecorations = errors.map((err) => ({
			range: new monacoApi!.Range(err.line, 1, err.line, 1),
			options: {
				isWholeLine: true,
				className: "fmtly-error-line",
				glyphMarginClassName: "fmtly-error-glyph",
			},
		}));

		decorationIds = editorInstance.deltaDecorations(
			decorationIds,
			newDecorations,
		);
	}

	export function revealLine(line: number): void {
		if (!editorInstance || !monacoApi) return;
		editorInstance.revealLineInCenter(line);
		editorInstance.setPosition({ lineNumber: line, column: 1 });
		editorInstance.focus();
	}

	onMount(() => {
		return () => {
			unsubscribeInput?.();
			unsubscribeTheme?.();
			editorInstance?.dispose();
		};
	});

	onDestroy(() => {
		unsubscribeInput?.();
		unsubscribeTheme?.();
		editorInstance?.dispose();
	});
</script>

<div class="relative h-full w-full">
	{#if !monacoLoaded}
		<textarea
			bind:this={textareaEl}
			value={$input}
			oninput={handleTextareaInput}
			onfocus={handleTextareaFocus}
			placeholder="Paste {language.toUpperCase()} here…"
			class="h-full w-full resize-none border-none bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none"
			spellcheck="false"
			autocomplete="off"
		></textarea>
	{/if}
	<div
		bind:this={containerEl}
		class="h-full w-full {monacoLoaded ? '' : 'invisible absolute inset-0'}"
	></div>
</div>

<style>
	:global(.fmtly-error-line) {
		background-color: rgba(239, 68, 68, 0.1);
	}

	:global(.fmtly-error-glyph) {
		background-color: #ef4444;
		border-radius: 50%;
		margin-left: 4px;
		width: 8px !important;
		height: 8px !important;
	}
</style>
