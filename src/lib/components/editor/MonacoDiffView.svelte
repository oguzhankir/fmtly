<script lang="ts">
	import { onDestroy } from 'svelte';
	import { theme } from '$stores/settings.store';
	import type { Theme } from '$stores/settings.store';

	let {
		original = '',
		modified = '',
		inline = false
	}: {
		original?: string;
		modified?: string;
		inline?: boolean;
	} = $props();

	let containerEl: HTMLDivElement | undefined = $state(undefined);
	let monacoLoaded = $state(false);
	let diffEditorInstance:
		| import('monaco-editor').editor.IStandaloneDiffEditor
		| undefined = $state(undefined);
	let monacoApi: typeof import('monaco-editor') | undefined = $state(undefined);
	let unsubscribeTheme: (() => void) | undefined;

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
				'diffEditor.insertedTextBackground': '#16a34a22',
				'diffEditor.removedTextBackground': '#dc262622',
				'diffEditor.insertedLineBackground': '#16a34a15',
				'diffEditor.removedLineBackground': '#dc262615',
				'editorLineNumber.foreground': '#57534e',
				'editorGutter.background': '#211e1a',
				'scrollbarSlider.background': '#4a443d80'
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
				'diffEditor.insertedTextBackground': '#16a34a22',
				'diffEditor.removedTextBackground': '#dc262622',
				'diffEditor.insertedLineBackground': '#16a34a15',
				'diffEditor.removedLineBackground': '#dc262615',
				'editorLineNumber.foreground': '#9a8b7c',
				'editorGutter.background': '#ede5dc',
				'scrollbarSlider.background': '#c4b5a880'
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
			readOnly: true,
			minimap: { enabled: false },
			renderSideBySide: !inline,
			automaticLayout: true,
			scrollBeyondLastLine: false,
			padding: { top: 12, bottom: 12 },
			lineNumbers: 'on',
			wordWrap: 'on',
			smoothScrolling: true,
			overviewRulerBorder: false,
			scrollbar: { verticalSliderSize: 6, horizontalSliderSize: 6, useShadows: false }
		});

		updateModels(monaco);

		unsubscribeTheme = theme.subscribe((t) => {
			if (monacoApi) monacoApi.editor.setTheme(getThemeName(t));
		});

		monacoLoaded = true;
	}

	function updateModels(monaco: typeof import('monaco-editor')): void {
		const diffEditor = diffEditorInstance;
		if (!diffEditor) return;
		const originalModel = monaco.editor.createModel(original, 'json');
		const modifiedModel = monaco.editor.createModel(modified, 'json');
		diffEditor.setModel({ original: originalModel, modified: modifiedModel });
	}

	$effect(() => {
		if (!containerEl) return;
		if (!monacoLoaded) {
			void init();
			return;
		}
		const diffEditor = diffEditorInstance;
		const monaco = monacoApi;
		if (!diffEditor || !monaco) return;
		const currentModel = diffEditor.getModel();
		currentModel?.original.dispose();
		currentModel?.modified.dispose();
		updateModels(monaco);
	});

	$effect(() => {
		const diffEditor = diffEditorInstance;
		if (!diffEditor) return;
		diffEditor.updateOptions({ renderSideBySide: !inline });
	});

	onDestroy(() => {
		unsubscribeTheme?.();
		const currentModel = diffEditorInstance?.getModel();
		currentModel?.original.dispose();
		currentModel?.modified.dispose();
		diffEditorInstance?.dispose();
	});
</script>

<div bind:this={containerEl} class="h-full w-full"></div>
