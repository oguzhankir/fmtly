<script lang="ts">
	import { onDestroy } from 'svelte';
	import { theme } from '$stores/settings.store';
	import type { Theme } from '$stores/settings.store';

	let {
		original = '',
		modified = '',
		inline = false,
		ignoreTrimWhitespace = false,
		wordWrap = true,
		minimap = false,
		onchangeOriginal,
		onchangeModified
	}: {
		original?: string;
		modified?: string;
		inline?: boolean;
		ignoreTrimWhitespace?: boolean;
		wordWrap?: boolean;
		minimap?: boolean;
		onchangeOriginal?: (val: string) => void;
		onchangeModified?: (val: string) => void;
	} = $props();

	let containerEl: HTMLDivElement | undefined = $state(undefined);
	let monacoLoaded = $state(false);
	let diffEditorInstance:
		| import('monaco-editor').editor.IStandaloneDiffEditor
		| undefined = $state.raw(undefined);
	let monacoApi: typeof import('monaco-editor') | undefined = $state.raw(undefined);
	
	let isUpdatingOriginalFromProp = false;
	let isUpdatingOriginalFromEditor = false;
	let isUpdatingModifiedFromProp = false;
	let isUpdatingModifiedFromEditor = false;
	
	let unsubscribeTheme: (() => void) | undefined;
	let originalContentListener: import('monaco-editor').IDisposable | undefined;
	let modifiedContentListener: import('monaco-editor').IDisposable | undefined;

	const FMTLY_DARK = 'fmtly-dark';
	const FMTLY_LIGHT = 'fmtly-light';

	function getThemeName(t: Theme): string {
		return t === 'dark' ? FMTLY_DARK : FMTLY_LIGHT;
	}

	function defineThemes(monaco: typeof import('monaco-editor')): void {
		monaco.editor.defineTheme(FMTLY_DARK, {
			base: 'vs-dark',
			inherit: true,
			rules: [
				{ token: 'string.key.json', foreground: 'e8a44a' },
				{ token: 'string.value.json', foreground: '6ee7b7' },
				{ token: 'number', foreground: 'fbbf24' },
				{ token: 'keyword', foreground: 'c084fc' }
			],
			colors: {
				'editor.background': '#211e1a',
				'editor.foreground': '#f0ebe3',
				'diffEditor.insertedTextBackground': '#10b98140',
				'diffEditor.removedTextBackground': '#ef444440',
				'diffEditor.insertedLineBackground': '#10b98120',
				'diffEditor.removedLineBackground': '#ef444420',
				'diffEditor.insertedTextBorder': '#10b981',
				'diffEditor.removedTextBorder': '#ef4444',
				'editorLineNumber.foreground': '#57534e',
				'editorGutter.background': '#211e1a',
				'scrollbarSlider.background': '#4a443d80',
				'diffEditorOverview.insertedForeground': '#10b981',
				'diffEditorOverview.removedForeground': '#ef4444'
			}
		});
		monaco.editor.defineTheme(FMTLY_LIGHT, {
			base: 'vs',
			inherit: true,
			rules: [
				{ token: 'string.key.json', foreground: 'c2610c' },
				{ token: 'string.value.json', foreground: '059669' },
				{ token: 'number', foreground: 'c2610c' },
				{ token: 'keyword', foreground: '7c3aed' }
			],
			colors: {
				'editor.background': '#ede5dc',
				'editor.foreground': '#1c1612',
				'diffEditor.insertedTextBackground': '#10b98140',
				'diffEditor.removedTextBackground': '#ef444440',
				'diffEditor.insertedLineBackground': '#10b98120',
				'diffEditor.removedLineBackground': '#ef444420',
				'diffEditor.insertedTextBorder': '#10b981',
				'diffEditor.removedTextBorder': '#ef4444',
				'editorLineNumber.foreground': '#9a8b7c',
				'editorGutter.background': '#ede5dc',
				'scrollbarSlider.background': '#c4b5a880',
				'diffEditorOverview.insertedForeground': '#10b981',
				'diffEditorOverview.removedForeground': '#ef4444'
			}
		});
	}

	async function init(): Promise<void> {
		if (monacoLoaded || !containerEl) return;

		const loader = await import('@monaco-editor/loader');
		const monaco = await loader.default.init();
		monacoApi = monaco;

		defineThemes(monaco);

		let currentTheme: Theme = 'dark';
		theme.subscribe((t) => { currentTheme = t; })();

		diffEditorInstance = monaco.editor.createDiffEditor(containerEl, {
			theme: getThemeName(currentTheme),
			fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
			fontSize: 13,
			fontLigatures: true,
			readOnly: false,
			originalEditable: true,
			minimap: { enabled: minimap },
			renderSideBySide: !inline,
			automaticLayout: true,
			scrollBeyondLastLine: false,
			padding: { top: 12, bottom: 12 },
			lineNumbers: 'on',
			wordWrap: wordWrap ? 'on' : 'off',
			smoothScrolling: true,
			overviewRulerBorder: false,
			scrollbar: { verticalSliderSize: 6, horizontalSliderSize: 6, useShadows: false },
			renderLineHighlight: 'line',
			diffAlgorithm: 'advanced',
			ignoreTrimWhitespace: ignoreTrimWhitespace,
			diffWordWrap: 'on',
			renderIndicators: true,
			renderMarginRevertIcon: true,
			renderWhitespace: 'none'
		});

		const originalModel = monaco.editor.createModel(original ?? '', 'text');
		const modifiedModel = monaco.editor.createModel(modified ?? '', 'text');
		if (diffEditorInstance) {
			diffEditorInstance.setModel({ original: originalModel, modified: modifiedModel });
		}

		// Attach listeners to sync back upstream
		attachListeners();

		unsubscribeTheme = theme.subscribe((t) => {
			if (monacoApi) monacoApi.editor.setTheme(getThemeName(t));
		});

		monacoLoaded = true;
	}

	function attachListeners() {
		const diffEditor = diffEditorInstance;
		if (!diffEditor) return;
		const models = diffEditor.getModel();
		if (!models) return;

		originalContentListener?.dispose();
		modifiedContentListener?.dispose();

		originalContentListener = models.original.onDidChangeContent(() => {
			if (isUpdatingOriginalFromProp) return;
			const newVal = models.original.getValue();
			isUpdatingOriginalFromEditor = true;
			onchangeOriginal?.(newVal);
			isUpdatingOriginalFromEditor = false;
		});

		modifiedContentListener = models.modified.onDidChangeContent(() => {
			if (isUpdatingModifiedFromProp) return;
			const newVal = models.modified.getValue();
			isUpdatingModifiedFromEditor = true;
			onchangeModified?.(newVal);
			isUpdatingModifiedFromEditor = false;
		});
	}

	$effect(() => {
		if (!containerEl) return;
		if (!monacoLoaded) {
			void init();
			return;
		}
	});

	// Sync options dynamically
	$effect(() => {
		const diffEditor = diffEditorInstance;
		if (!diffEditor) return;
		diffEditor.updateOptions({ 
			renderSideBySide: !inline,
			ignoreTrimWhitespace: ignoreTrimWhitespace
		});
		
		const originalEditor = diffEditor.getOriginalEditor();
		const modifiedEditor = diffEditor.getModifiedEditor();
		if (originalEditor) {
			originalEditor.updateOptions({ 
				wordWrap: wordWrap ? 'on' : 'off',
				minimap: { enabled: minimap }
			});
		}
		if (modifiedEditor) {
			modifiedEditor.updateOptions({ 
				wordWrap: wordWrap ? 'on' : 'off',
				minimap: { enabled: minimap }
			});
		}
	});

	// Sync Original Prop -> Editor
	$effect(() => {
		const diffEditor = diffEditorInstance;
		if (!diffEditor || isUpdatingOriginalFromEditor) return;
		const models = diffEditor.getModel();
		if (models && models.original.getValue() !== original) {
			isUpdatingOriginalFromProp = true;
			models.original.setValue(original ?? '');
			isUpdatingOriginalFromProp = false;
			// Reattach listeners because sometimes model drops its listeners or we recreate it, etc.
			// (Though it's the exact same model instance here, no harm if we leave it alone.
			// But just cleanly letting $effect track `original`)
		}
	});

	// Sync Modified Prop -> Editor
	$effect(() => {
		const diffEditor = diffEditorInstance;
		if (!diffEditor || isUpdatingModifiedFromEditor) return;
		const models = diffEditor.getModel();
		if (models && models.modified.getValue() !== modified) {
			isUpdatingModifiedFromProp = true;
			models.modified.setValue(modified ?? '');
			isUpdatingModifiedFromProp = false;
		}
	});

	onDestroy(() => {
		unsubscribeTheme?.();
		originalContentListener?.dispose();
		modifiedContentListener?.dispose();
		const currentModel = diffEditorInstance?.getModel();
		currentModel?.original.dispose();
		currentModel?.modified.dispose();
		diffEditorInstance?.dispose();
	});
</script>

<div bind:this={containerEl} class="h-full w-full"></div>

