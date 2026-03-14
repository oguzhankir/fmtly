<script lang="ts">
	import { onDestroy } from 'svelte';
	import { theme } from '$stores/settings.store';
	import type { Theme } from '$stores/settings.store';

	let {
		value = '',
		onchange,
		language = 'json',
		placeholder = 'Paste here…',
		wordWrap = false
	}: {
		value?: string;
		onchange?: (value: string) => void;
		language?: string;
		placeholder?: string;
		wordWrap?: boolean;
	} = $props();

	let containerEl: HTMLDivElement | undefined = $state(undefined);
	let textareaEl: HTMLTextAreaElement | undefined = $state(undefined);
	let monacoLoaded = $state(false);
	let monacoLoading = $state(false);
	let editorInstance:
		| import('monaco-editor').editor.IStandaloneCodeEditor
		| undefined = $state(undefined);
	let monacoApi: typeof import('monaco-editor') | undefined = $state(undefined);
	let isUpdatingFromProp = false;
	let isUpdatingFromEditor = false;
	let unsubscribeTheme: (() => void) | undefined;

	const FMTLY_DARK = 'fmtly-dark';
	const FMTLY_LIGHT = 'fmtly-light';

	function defineThemes(monaco: typeof import('monaco-editor')): void {
		monaco.editor.defineTheme(FMTLY_DARK, {
			base: 'vs-dark',
			inherit: true,
			rules: [
				{ token: 'string', foreground: '6ee7b7' },
				{ token: 'string.key.json', foreground: 'e8a44a' },
				{ token: 'string.value.json', foreground: '6ee7b7' },
				{ token: 'number', foreground: 'fbbf24' },
				{ token: 'keyword', foreground: 'c084fc' },
				{ token: 'comment', foreground: '57534e' },
				{ token: 'delimiter', foreground: 'b5a99a' },
				{ token: 'delimiter.bracket', foreground: 'b5a99a' }
			],
			colors: {
				'editor.background': '#211e1a',
				'editor.foreground': '#f0ebe3',
				'editor.lineHighlightBackground': '#2a2621',
				'editor.selectionBackground': '#d9770630',
				'editor.inactiveSelectionBackground': '#d9770618',
				'editorCursor.foreground': '#d97706',
				'editorLineNumber.foreground': '#57534e',
				'editorLineNumber.activeForeground': '#b5a99a',
				'editorIndentGuide.background1': '#27231f',
				'editorIndentGuide.activeBackground1': '#332e29',
				'editor.selectionHighlightBackground': '#d9770618',
				'editorBracketMatch.background': '#d9770620',
				'editorBracketMatch.border': '#d9770670',
				'editorGutter.background': '#211e1a',
				'editorWidget.background': '#2d2925',
				'editorWidget.border': '#332e29',
				'input.background': '#27231f',
				'input.border': '#332e29',
				'scrollbarSlider.background': '#4a443d80',
				'scrollbarSlider.hoverBackground': '#524b4380',
				'scrollbarSlider.activeBackground': '#5e574f80'
			}
		});
		monaco.editor.defineTheme(FMTLY_LIGHT, {
			base: 'vs',
			inherit: true,
			rules: [
				{ token: 'string', foreground: '059669' },
				{ token: 'string.key.json', foreground: 'c2610c' },
				{ token: 'string.value.json', foreground: '059669' },
				{ token: 'number', foreground: 'c2610c' },
				{ token: 'keyword', foreground: '7c3aed' },
				{ token: 'comment', foreground: '9a8b7c' },
				{ token: 'delimiter', foreground: '5c4f43' },
				{ token: 'delimiter.bracket', foreground: '5c4f43' }
			],
			colors: {
				'editor.background': '#ede5dc',
				'editor.foreground': '#1c1612',
				'editor.lineHighlightBackground': '#e6dcd3',
				'editor.selectionBackground': '#c2610c28',
				'editor.inactiveSelectionBackground': '#c2610c15',
				'editorCursor.foreground': '#c2610c',
				'editorLineNumber.foreground': '#9a8b7c',
				'editorLineNumber.activeForeground': '#5c4f43',
				'editorIndentGuide.background1': '#ddd3c8',
				'editorIndentGuide.activeBackground1': '#c4b5a8',
				'editor.selectionHighlightBackground': '#c2610c10',
				'editorBracketMatch.background': '#c2610c18',
				'editorBracketMatch.border': '#c2610c55',
				'editorGutter.background': '#ede5dc',
				'editorWidget.background': '#f3ede7',
				'editorWidget.border': '#ddd3c8',
				'input.background': '#faf7f4',
				'input.border': '#ddd3c8',
				'scrollbarSlider.background': '#c4b5a880',
				'scrollbarSlider.hoverBackground': '#9a8b7c80',
				'scrollbarSlider.activeBackground': '#9a8b7ca0'
			}
		});
	}

	function getThemeName(t: Theme): string {
		return t === 'dark' ? FMTLY_DARK : FMTLY_LIGHT;
	}

	async function loadMonaco(): Promise<void> {
		if (monacoLoading || monacoLoaded) return;
		monacoLoading = true;

		const loader = await import('@monaco-editor/loader');
		const monaco = await loader.default.init();
		monacoApi = monaco;

		defineThemes(monaco);

		let currentTheme: Theme = 'dark';
		theme.subscribe((t) => {
			currentTheme = t;
		})();

		if (!containerEl) {
			monacoLoading = false;
			return;
		}

		const initialValue = textareaEl?.value ?? value;

		editorInstance = monaco.editor.create(containerEl, {
			value: initialValue,
			language,
			theme: getThemeName(currentTheme),
			fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
			fontSize: 13,
			fontLigatures: true,
			lineNumbers: 'on',
			minimap: { enabled: false },
			folding: true,
			wordWrap: wordWrap ? 'on' : 'off',
			automaticLayout: true,
			scrollBeyondLastLine: false,
			padding: { top: 12, bottom: 12 },
			renderLineHighlight: 'line',
			bracketPairColorization: { enabled: true },
			guides: { bracketPairs: true, indentation: true },
			smoothScrolling: true,
			cursorBlinking: 'smooth',
			cursorSmoothCaretAnimation: 'on',
			tabSize: 2,
			overviewRulerBorder: false,
			hideCursorInOverviewRuler: true,
			scrollbar: {
				verticalSliderSize: 6,
				horizontalSliderSize: 6,
				useShadows: false
			}
		});

		if (!editorInstance) return;
		const editor = editorInstance;

		editor.onDidChangeModelContent(() => {
			if (isUpdatingFromProp) return;
			const newVal = editor.getValue();
			isUpdatingFromEditor = true;
			onchange?.(newVal);
			isUpdatingFromEditor = false;
		});

		unsubscribeTheme = theme.subscribe((t) => {
			if (monacoApi && editorInstance) {
				monacoApi.editor.setTheme(getThemeName(t));
			}
		});

		monacoLoaded = true;
		monacoLoading = false;
	}

	$effect(() => {
		const editor = editorInstance;
		if (!editor || isUpdatingFromEditor) return;
		const current = editor.getValue();
		if (value !== current) {
			isUpdatingFromProp = true;
			editor.setValue(value);
			isUpdatingFromProp = false;
		}
	});

	export function formatDocument(): void {
		if (editorInstance) {
			editorInstance.getAction('editor.action.formatDocument')?.run();
		}
	}

	export function focus(): void {
		editorInstance?.focus();
	}

	function handleTextareaInput(event: Event): void {
		const target = event.target as HTMLTextAreaElement;
		onchange?.(target.value);
	}

	function handleTextareaFocus(): void {
		void loadMonaco();
	}

	onDestroy(() => {
		unsubscribeTheme?.();
		editorInstance?.dispose();
	});
</script>

<div class="relative h-full w-full">
	{#if !monacoLoaded}
		<textarea
			bind:this={textareaEl}
			{value}
			oninput={handleTextareaInput}
			onfocus={handleTextareaFocus}
			{placeholder}
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
