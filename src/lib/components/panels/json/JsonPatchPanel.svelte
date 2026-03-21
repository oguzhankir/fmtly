<script lang="ts">
	import { onMount } from 'svelte';
	import type StandaloneMonacoEditorType from '$components/editor/StandaloneMonacoEditor.svelte';
	import { validateJSON } from '$engines/json/index.js';
	import { input, initInput } from '$stores/input.store';
	import { output } from '$stores/output.store';
	import {
		jsonError,
		jsonFormatWarnings,
		jsonPatchOptions,
		setJsonPatchOptions
	} from '$stores/json.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Download, Eraser, Upload } from 'lucide-svelte';

	type Props = {
		toolSlug: string;
	};

	type ValidationState = {
		message: string;
		toneClass: string;
	};

	const SAMPLE_BASE_JSON = `{
  "app": {
    "name": "fmtly",
    "version": "1.0.0",
    "features": ["format", "validate"],
    "settings": {
      "theme": "light",
      "telemetry": false
    }
  },
  "limits": {
    "projects": 3,
    "members": 5
  }
}`;

	const SAMPLE_TARGET_JSON = `{
  "app": {
    "name": "fmtly",
    "version": "1.1.0",
    "features": ["format", "validate", "patch"],
    "settings": {
      "theme": "dark",
      "telemetry": false
    }
  },
  "limits": {
    "projects": 5,
    "members": 5
  },
  "regions": ["eu", "us"]
}`;

	const SAMPLE_PATCH_JSON = `[
  {
    "op": "replace",
    "path": "/app/version",
    "value": "1.1.0"
  },
  {
    "op": "add",
    "path": "/app/features/-",
    "value": "patch"
  },
  {
    "op": "replace",
    "path": "/app/settings/theme",
    "value": "dark"
  },
  {
    "op": "replace",
    "path": "/limits/projects",
    "value": 5
  },
  {
    "op": "add",
    "path": "/regions",
    "value": ["eu", "us"]
  }
]`;

	let { toolSlug }: Props = $props();

	let StandaloneMonacoEditor: typeof StandaloneMonacoEditorType | undefined = $state(undefined);
	let wrapResult = $state(false);
	let copied = $state(false);
	let baseFileInputEl: HTMLInputElement | undefined = $state(undefined);
	let operandFileInputEl: HTMLInputElement | undefined = $state(undefined);

	let baseValidation = $derived.by<ValidationState>(() => {
		const value = $input.trim();
		if (!value) {
			return {
				message: $t('ui.validity.empty', 'Empty'),
				toneClass: 'text-[var(--text-tertiary)]'
			};
		}

		const result = validateJSON(value);
		if (result.valid) {
			return {
				message: $t('ui.validity.valid', { language: 'JSON' }, 'Valid JSON'),
				toneClass: 'text-green-600'
			};
		}

		return {
			message: $t('ui.validity.invalid', { language: 'JSON' }, 'Invalid JSON'),
			toneClass: 'text-red-600'
		};
	});

	let operandValidation = $derived.by<ValidationState>(() => {
		const value = $jsonPatchOptions.operand.trim();
		if (!value) {
			return {
				message: $t('ui.validity.empty', 'Empty'),
				toneClass: 'text-[var(--text-tertiary)]'
			};
		}

		const result = validateJSON(value);
		if (result.valid) {
			return {
				message: $t('ui.validity.valid', { language: 'JSON' }, 'Valid JSON'),
				toneClass: 'text-green-600'
			};
		}

		return {
			message: $t('ui.validity.invalid', { language: 'JSON' }, 'Invalid JSON'),
			toneClass: 'text-red-600'
		};
	});

	let resultMeta = $derived.by(() => {
		if (!$output) return '';
		const lines = $output.split('\n').length;
		const bytes = new TextEncoder().encode($output).length;
		return `${formatByteSize(bytes)} · ${lines.toLocaleString()} ${$t('ui.output.stats.lines', 'lines')}`;
	});

	let resultLabel = $derived(
		$jsonPatchOptions.mode === 'generate'
			? $t('ui.json_patch.result_label_generate', 'Generated Patch')
			: $t('ui.json_patch.result_label_apply', 'Patched JSON')
	);

	let emptyResultMessage = $derived(
		$jsonPatchOptions.mode === 'generate'
			? $t(
					'ui.json_patch.empty_generate',
					'Add a target JSON document to generate an RFC 6902 patch.'
				)
			: $t(
					'ui.json_patch.empty_apply',
					'Add a JSON Patch array to apply it to the base document.'
				)
	);

	onMount((): void => {
		initInput(toolSlug);
		void loadStandaloneEditor();
		if ($input.trim().length === 0 && $jsonPatchOptions.operand.trim().length === 0) {
			loadSamplePair();
		}
	});

	async function loadStandaloneEditor(): Promise<void> {
		const module = await import('$components/editor/StandaloneMonacoEditor.svelte');
		StandaloneMonacoEditor = module.default;
	}

	function handleBaseInputChange(value: string): void {
		input.set(value);
	}

	function handleOperandInputChange(value: string): void {
		setJsonPatchOptions({ operand: value });
	}

	function handleGenerateMode(): void {
		setJsonPatchOptions({ mode: 'generate' });
	}

	function handleApplyMode(): void {
		setJsonPatchOptions({ mode: 'apply' });
	}

	function loadSamplePair(): void {
		input.set(SAMPLE_BASE_JSON);
		setJsonPatchOptions({
			operand: $jsonPatchOptions.mode === 'generate' ? SAMPLE_TARGET_JSON : SAMPLE_PATCH_JSON
		});
	}

	function clearAll(): void {
		input.set('');
		setJsonPatchOptions({ operand: '' });
		addToast('info', $t('ui.toast.input_cleared', 'Input cleared'));
	}

	function clearBaseInput(): void {
		input.set('');
	}

	function clearOperandInput(): void {
		setJsonPatchOptions({ operand: '' });
	}

	function triggerBaseUpload(): void {
		baseFileInputEl?.click();
	}

	function triggerOperandUpload(): void {
		operandFileInputEl?.click();
	}

	function handleBaseUpload(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const file = target.files?.[0];
		if (!file) return;
		void loadFile(file, handleBaseInputChange, () => {
			target.value = '';
		});
	}

	function handleOperandUpload(event: Event): void {
		const target = event.currentTarget;
		if (!(target instanceof HTMLInputElement)) return;
		const file = target.files?.[0];
		if (!file) return;
		void loadFile(file, handleOperandInputChange, () => {
			target.value = '';
		});
	}

	async function loadFile(
		file: File,
		onLoad: (value: string) => void,
		onComplete: () => void
	): Promise<void> {
		if (!file.type.startsWith('text/') && !/\.(json|txt)$/i.test(file.name)) {
			addToast('error', $t('ui.error.only_json_txt', 'Only .json and .txt files are supported'));
			onComplete();
			return;
		}

		const content = await readFileAsText(file);
		onLoad(content);
		onComplete();
		addToast('success', $t('ui.toast.file_loaded', { name: file.name }, `File loaded: ${file.name}`));
	}

	function readFileAsText(file: File): Promise<string> {
		return new Promise<string>((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = (): void => {
				if (typeof reader.result === 'string') {
					resolve(reader.result);
					return;
				}
				reject(new Error('Could not read file'));
			};
			reader.onerror = (): void => {
				reject(new Error('Could not read file'));
			};
			reader.readAsText(file);
		});
	}

	async function copyResult(): Promise<void> {
		if (!$output) return;
		try {
			await navigator.clipboard.writeText($output);
			copied = true;
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
			window.setTimeout((): void => {
				copied = false;
			}, 1500);
		} catch {
			addToast('error', $t('ui.output.error.copy_failed', 'Could not copy output'));
		}
	}

	function downloadResult(): void {
		if (!$output) return;
		const filename = $jsonPatchOptions.mode === 'generate' ? 'json-patch.json' : 'patched-json.json';
		const blob = new Blob([$output], { type: 'application/json;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = filename;
		link.click();
		URL.revokeObjectURL(url);
	}

	function toggleWrapResult(): void {
		wrapResult = !wrapResult;
	}

	function resolveWarningText(warning: string): string {
		if (warning.startsWith('ui.')) {
			return $t(warning, warning);
		}
		return warning;
	}

	function formatByteSize(bytes: number): string {
		if (bytes === 0) return '0 B';
		if (bytes < 1024) return `${bytes} B`;
		return `${(bytes / 1024).toFixed(1)} KB`;
	}
</script>

<div class="flex h-full min-h-0 w-full flex-col bg-[var(--bg-surface)] text-[var(--text-primary)]">
	<div class="flex flex-wrap items-center gap-[var(--space-3)] border-b border-[var(--border-subtle)] px-[var(--space-4)] py-[var(--space-3)]">
		<div class="inline-flex rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[2px]">
			<button
				type="button"
				class={`rounded-[calc(var(--radius-md)-2px)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] ${$jsonPatchOptions.mode === 'generate' ? 'bg-[var(--accent)] text-white' : 'text-[var(--text-secondary)]'}`}
				onclick={handleGenerateMode}
			>
				{$t('ui.json_patch.mode.generate', 'Generate Patch')}
			</button>
			<button
				type="button"
				class={`rounded-[calc(var(--radius-md)-2px)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] ${$jsonPatchOptions.mode === 'apply' ? 'bg-[var(--accent)] text-white' : 'text-[var(--text-secondary)]'}`}
				onclick={handleApplyMode}
			>
				{$t('ui.json_patch.mode.apply', 'Apply Patch')}
			</button>
		</div>

		<div class="ml-auto flex flex-wrap items-center gap-[var(--space-2)]">
			<button
				type="button"
				class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				onclick={loadSamplePair}
			>
				{$t('ui.actions.sample', 'Sample')}
			</button>
			<button
				type="button"
				class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				onclick={clearAll}
			>
				<Eraser size={14} />
				{$t('ui.actions.clear', 'Clear')}
			</button>
		</div>
	</div>

	<div class="grid min-h-0 flex-1 grid-cols-1 gap-[var(--space-4)] p-[var(--space-4)] xl:grid-cols-2">
		<section class="flex min-h-0 flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)]">
			<div class="flex items-center gap-[var(--space-2)] border-b border-[var(--border-subtle)] px-[var(--space-4)] py-[var(--space-3)]">
				<div class="min-w-0 flex-1">
					<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
						{$t('ui.json_patch.base_label', 'Base JSON')}
					</div>
					<div class={`text-[length:var(--text-xs)] ${baseValidation.toneClass}`}>
						{baseValidation.message}
					</div>
				</div>
				<input
					bind:this={baseFileInputEl}
					type="file"
					accept=".json,.txt,text/plain,application/json"
					class="sr-only"
					onchange={handleBaseUpload}
				/>
				<button
					type="button"
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					onclick={triggerBaseUpload}
				>
					<Upload size={12} />
					{$t('ui.actions.upload', 'Upload')}
				</button>
				<button
					type="button"
					class="rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					onclick={clearBaseInput}
				>
					{$t('ui.actions.clear', 'Clear')}
				</button>
			</div>
			<div class="h-[320px] min-h-0 xl:h-auto xl:flex-1">
				{#if StandaloneMonacoEditor}
					<StandaloneMonacoEditor
						language="json"
						wordWrap={true}
						value={$input}
						onchange={handleBaseInputChange}
					/>
				{:else}
					<div class="flex h-full items-center justify-center text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
						{$t('ui.validator.loading_editor', 'Loading editor…')}
					</div>
				{/if}
			</div>
		</section>

		<section class="flex min-h-0 flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)]">
			<div class="flex items-center gap-[var(--space-2)] border-b border-[var(--border-subtle)] px-[var(--space-4)] py-[var(--space-3)]">
				<div class="min-w-0 flex-1">
					<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
						{$jsonPatchOptions.mode === 'generate'
							? $t('ui.json_patch.target_label', 'Target JSON')
							: $t('ui.json_patch.patch_label', 'JSON Patch (RFC 6902)')}
					</div>
					<div class={`text-[length:var(--text-xs)] ${operandValidation.toneClass}`}>
						{operandValidation.message}
					</div>
				</div>
				<input
					bind:this={operandFileInputEl}
					type="file"
					accept=".json,.txt,text/plain,application/json"
					class="sr-only"
					onchange={handleOperandUpload}
				/>
				<button
					type="button"
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					onclick={triggerOperandUpload}
				>
					<Upload size={12} />
					{$t('ui.actions.upload', 'Upload')}
				</button>
				<button
					type="button"
					class="rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					onclick={clearOperandInput}
				>
					{$t('ui.actions.clear', 'Clear')}
				</button>
			</div>
			<div class="h-[320px] min-h-0 xl:h-auto xl:flex-1">
				{#if StandaloneMonacoEditor}
					<StandaloneMonacoEditor
						language="json"
						wordWrap={true}
						value={$jsonPatchOptions.operand}
						onchange={handleOperandInputChange}
					/>
				{:else}
					<div class="flex h-full items-center justify-center text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
						{$t('ui.validator.loading_editor', 'Loading editor…')}
					</div>
				{/if}
			</div>
		</section>

		<section class="flex min-h-0 flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] xl:col-span-2">
			<div class="flex flex-wrap items-center gap-[var(--space-2)] border-b border-[var(--border-subtle)] px-[var(--space-4)] py-[var(--space-3)]">
				<div class="min-w-0 flex-1">
					<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
						{resultLabel}
					</div>
					{#if resultMeta}
						<div class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">{resultMeta}</div>
					{/if}
				</div>
				<button
					type="button"
					class="rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
					onclick={toggleWrapResult}
				>
					{$t('ui.output.actions.wrap', 'Wrap')}
				</button>
				<button
					type="button"
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] disabled:cursor-not-allowed disabled:opacity-50"
					onclick={copyResult}
					disabled={!$output}
				>
					<Copy size={12} />
					{copied ? $t('ui.toast.copy_success', 'Copied to clipboard') : $t('ui.output.actions.copy', 'Copy')}
				</button>
				<button
					type="button"
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] disabled:cursor-not-allowed disabled:opacity-50"
					onclick={downloadResult}
					disabled={!$output}
				>
					<Download size={12} />
					{$t('ui.output.actions.download', 'Download')}
				</button>
			</div>

			{#if $jsonError}
				<div class="border-b border-[var(--border-subtle)] bg-red-500/10 px-[var(--space-4)] py-[var(--space-3)] text-[length:var(--text-sm)] text-red-700 dark:text-red-300">
					{$jsonError.message}
				</div>
			{/if}

			{#if $jsonFormatWarnings.length > 0}
				<div class="border-b border-[var(--border-subtle)] bg-amber-500/10 px-[var(--space-4)] py-[var(--space-3)]">
					<div class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-sm)] text-amber-700 dark:text-amber-300">
						{#each $jsonFormatWarnings as warning}
							<span>{resolveWarningText(warning)}</span>
						{/each}
					</div>
				</div>
			{/if}

			<div class="min-h-[220px] flex-1 overflow-auto">
				{#if $output}
					<pre class="h-full w-full p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)]" class:whitespace-pre-wrap={wrapResult} class:break-words={wrapResult} class:whitespace-pre={!wrapResult}>{$output}</pre>
				{:else}
					<div class="flex h-full min-h-[220px] items-center justify-center px-[var(--space-6)] text-center text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
						{emptyResultMessage}
					</div>
				{/if}
			</div>
		</section>
	</div>
</div>
