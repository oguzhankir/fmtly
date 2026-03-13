<script lang="ts">
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import { Loader, Copy, Check, WrapText, Minimize2 } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";
    import { marked } from "marked";
    import { t } from '$lib/stores/language.js';

    type Props = {
        toolSlug: string;
        sampleInput?: string;
    };

    let { toolSlug, sampleInput = "" }: Props = $props();

    // ─── State ────────────────────────────────────────────────────────────────
    let inputValue = $state("");
    let outputValue = $state("");
    let loading = $state(false);
    let loadingPrettier = $state(false);
    let error = $state<string | null>(null);
    let mode = $state<"format" | "minify">("format");
    let copied = $state(false);
    let tabWidth = $state(2);
    let printWidth = $state(80);
    let singleQuote = $state(false);
    let semi = $state(true);

    let markdownHtml = $state("");
    $effect(() => {
        if (toolSlug === "markdown" && outputValue) {
            markdownHtml = marked.parse(outputValue, {
                gfm: true,
                breaks: false,
            }) as string;
        } else {
            markdownHtml = "";
        }
    });

    // Engine—format and minify functions, typed loosely to avoid variance issues
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fmtFn: ((code: string, opts?: any) => Promise<string>) | null = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let minFn: ((code: string) => Promise<string>) | null = null;

    async function loadEngine() {
        if (fmtFn) return;
        loadingPrettier = true;
        try {
            if (
                toolSlug === "css" ||
                toolSlug === "scss" ||
                toolSlug === "less"
            ) {
                const mod = await import("../../engines/code/css.engine");
                if (toolSlug === "css") {
                    fmtFn = mod.formatCSS;
                    minFn = mod.minifyCSS;
                } else if (toolSlug === "scss") {
                    fmtFn = mod.formatSCSS;
                    minFn = mod.minifySCSS;
                } else {
                    fmtFn = mod.formatLESS;
                    minFn = mod.minifyLESS;
                }
            } else if (toolSlug === "html") {
                const mod = await import("../../engines/code/html.engine");
                fmtFn = mod.formatHTML;
                minFn = mod.minifyHTML;
            } else if (toolSlug === "javascript" || toolSlug === "typescript") {
                const mod = await import("../../engines/code/js.engine");
                const lang = toolSlug === "typescript" ? "typescript" : "babel";
                fmtFn = (code: string, opts?: object) =>
                    mod.formatJS(code, lang as "babel" | "typescript", opts);
                minFn = (code: string) =>
                    mod.minifyJS(code, lang as "babel" | "typescript");
            } else if (toolSlug === "graphql") {
                const mod = await import("../../engines/code/graphql.engine");
                fmtFn = mod.formatGraphQL;
            } else if (toolSlug === "markdown") {
                const mod = await import("../../engines/code/markdown.engine");
                fmtFn = mod.formatMarkdown;
            }
        } catch (e) {
            error = e instanceof Error ? e.message : $t('ui.error.failed_to_load_formatter', 'Failed to load formatter');
        } finally {
            loadingPrettier = false;
        }
    }

    async function run() {
        if (!inputValue.trim()) {
            outputValue = "";
            return;
        }
        error = null;
        loading = true;
        try {
            await loadEngine();
            if (!fmtFn) throw new Error($t('ui.error.formatter_not_available', 'Formatter not available'));
            const opts = { tabWidth, printWidth, singleQuote, semi };
            if (mode === "minify" && minFn) {
                outputValue = await minFn(inputValue);
            } else {
                outputValue = await fmtFn(inputValue, opts);
            }
        } catch (e) {
            error = e instanceof Error ? e.message : $t('ui.error.formatting_failed', 'Formatting failed');
            outputValue = "";
        } finally {
            loading = false;
        }
    }

    let runTimer: ReturnType<typeof setTimeout>;

    $effect(() => {
        const _ = inputValue;
        if (!browser) return;
        clearTimeout(runTimer);
        runTimer = setTimeout(() => run(), 600);
    });

    $effect(() => {
        const _deps = `${mode}|${tabWidth}|${printWidth}|${singleQuote}|${semi}`;
        void _deps;
        if (!browser || !inputValue.trim()) return;
        run();
    });

    function copyOutput() {
        if (!outputValue) return;
        navigator.clipboard.writeText(outputValue);
        addToast("success", $t('ui.copied_formatted_code', 'Copied formatted code'));
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }

    onMount(() => {
        inputValue = sampleInput;
    });

    const hasModes = $derived([
        "css",
        "scss",
        "less",
        "html",
        "javascript",
        "typescript",
    ].includes(toolSlug));
    const hasOptions = $derived([
        "javascript",
        "typescript",
        "css",
        "scss",
        "less",
        "html",
    ].includes(toolSlug));
    const hasJsOptions = $derived(["javascript", "typescript"].includes(toolSlug));
    const isMarkdown = $derived(toolSlug === "markdown");
</script>

<div class="code-fmt-panel">
    <!-- Toolbar -->
    <div class="toolbar">
        <div class="toolbar-left">
            {#if hasModes}
                <div class="mode-toggle">
                    <button
                        onclick={() => {
                            mode = "format";
                        }}
                        class="mode-btn {mode === 'format' ? 'active' : ''}"
                    >
                        <WrapText size={13} /> {$t('ui.format', 'Format')}
                    </button>
                    <button
                        onclick={() => {
                            mode = "minify";
                        }}
                        class="mode-btn {mode === 'minify' ? 'active' : ''}"
                    >
                        <Minimize2 size={13} /> {$t('ui.minify', 'Minify')}
                    </button>
                </div>
            {/if}

            {#if hasOptions && mode === "format"}
                <div class="options">
                    <label class="option">
                        <span>{$t('ui.tab', 'Tab')}</span>
                        <select bind:value={tabWidth} class="option-select">
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={8}>8</option>
                        </select>
                    </label>
                    <label class="option">
                        <span>{$t('ui.width', 'Width')}</span>
                        <select bind:value={printWidth} class="option-select">
                            <option value={60}>60</option>
                            <option value={80}>80</option>
                            <option value={100}>100</option>
                            <option value={120}>120</option>
                        </select>
                    </label>
                    {#if hasJsOptions}
                        <label class="option toggle-option">
                            <input type="checkbox" bind:checked={singleQuote} />
                            <span>{$t('ui.single_quotes', 'Single quotes')}</span>
                        </label>
                        <label class="option toggle-option">
                            <input type="checkbox" bind:checked={semi} />
                            <span>{$t('ui.semicolons', 'Semicolons')}</span>
                        </label>
                    {/if}
                </div>
            {/if}
        </div>

        <div class="toolbar-right">
            {#if loadingPrettier}
                <span class="loading-badge">
                    <Loader size={12} class="spin" /> {$t('ui.loading_formatter', 'Loading formatter…')}
                </span>
            {/if}
            {#if outputValue}
                <button onclick={copyOutput} class="copy-btn">
                    {#if copied}<Check size={13} />{:else}<Copy
                            size={13}
                        />{/if}
                    {$t('ui.copy', 'Copy')}
                </button>
            {/if}
        </div>
    </div>

    <!-- Main split area -->
    <div
        class="editor-area {isMarkdown && outputValue
            ? 'three-col'
            : 'two-col'}"
    >
        <!-- Input -->
        <div class="pane input-pane">
            <div class="pane-label">{$t('ui.input', 'Input')}</div>
            <textarea
                bind:value={inputValue}
                placeholder={$t('ui.paste_your_code_here', 'Paste your code here…')}
                spellcheck="false"
                class="code-textarea"
            ></textarea>
        </div>

        <!-- Output / Formatted -->
        <div class="pane output-pane">
            <div class="pane-label">
                {mode === "minify" ? $t('ui.minified', 'Minified') : $t('ui.formatted', 'Formatted')}
                {#if outputValue}
                    <span class="byte-count"
                        >{new Blob([outputValue]).size} {$t('ui.bytes', 'bytes')}</span
                    >
                {/if}
            </div>

            {#if loading || loadingPrettier}
                <div class="skeleton-area">
                    {#each [80, 65, 90, 55, 70, 60, 85] as w}
                        <div class="skeleton-line" style="width:{w}%"></div>
                    {/each}
                </div>
            {:else if error}
                <div class="error-pane">
                    <span class="error-label">{$t('ui.error', 'Error')}</span>
                    <pre class="error-msg">{error}</pre>
                </div>
            {:else}
                <textarea
                    value={outputValue}
                    readonly
                    spellcheck="false"
                    class="code-textarea output-textarea"
                    placeholder={$t('ui.formatted_output_will_appear_here', 'Formatted output will appear here…')}
                ></textarea>
            {/if}
        </div>

        <!-- Markdown rendered preview -->
        {#if isMarkdown && outputValue}
            <div class="pane preview-pane">
                <div class="pane-label">{$t('ui.preview', 'Preview')}</div>
                <div class="markdown-preview">
                    {@html markdownHtml}
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    .code-fmt-panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
    }
    .toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-2) var(--space-4);
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-default);
        gap: var(--space-3);
        flex-wrap: wrap;
        flex-shrink: 0;
    }
    .toolbar-left {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        flex-wrap: wrap;
    }
    .toolbar-right {
        display: flex;
        align-items: center;
        gap: var(--space-2);
    }
    .mode-toggle {
        display: flex;
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        overflow: hidden;
    }
    .mode-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-1);
        padding: var(--space-1) var(--space-3);
        background: none;
        border: none;
        font-size: var(--text-xs);
        font-weight: var(--weight-medium);
        color: var(--text-secondary);
        cursor: pointer;
    }
    .mode-btn:hover {
        color: var(--text-primary);
    }
    .mode-btn.active {
        background: var(--color-primary);
        color: #fff;
    }
    .options {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        flex-wrap: wrap;
    }
    .option {
        display: flex;
        align-items: center;
        gap: var(--space-1-5);
        font-size: var(--text-xs);
        color: var(--text-secondary);
    }
    .toggle-option {
        cursor: pointer;
    }
    .toggle-option input {
        accent-color: var(--color-primary);
    }
    .option-select {
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-sm);
        padding: 1px var(--space-2);
        font-size: var(--text-xs);
        color: var(--text-primary);
    }
    .option-select:focus {
        outline: none;
        border-color: var(--border-focus);
    }
    .loading-badge {
        display: inline-flex;
        align-items: center;
        gap: var(--space-1);
        font-size: var(--text-xs);
        color: var(--text-tertiary);
    }
    .copy-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-1);
        padding: var(--space-1) var(--space-2);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        color: var(--text-secondary);
        font-size: var(--text-xs);
        cursor: pointer;
    }
    .copy-btn:hover {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }
    .editor-area {
        display: grid;
        flex: 1;
        overflow: hidden;
        min-height: 0;
    }
    .two-col {
        grid-template-columns: 1fr 1fr;
    }
    .three-col {
        grid-template-columns: 1fr 1fr 1fr;
    }
    .pane {
        display: flex;
        flex-direction: column;
        border-right: 1px solid var(--border-default);
        overflow: hidden;
    }
    .pane:last-child {
        border-right: none;
    }
    .pane-label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-1) var(--space-3);
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--text-tertiary);
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-subtle);
        flex-shrink: 0;
    }
    .byte-count {
        font-size: 10px;
        color: var(--text-tertiary);
        font-weight: normal;
        text-transform: none;
        letter-spacing: 0;
    }
    .code-textarea {
        flex: 1;
        width: 100%;
        background: var(--bg-base);
        border: none;
        padding: var(--space-4);
        font-family: var(--font-mono);
        font-size: 13px;
        line-height: 1.6;
        color: var(--text-primary);
        resize: none;
        outline: none;
    }
    .output-textarea {
        color: var(--text-secondary);
    }
    .skeleton-area {
        flex: 1;
        padding: var(--space-4);
        background: var(--bg-base);
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
    }
    .skeleton-line {
        height: 14px;
        background: var(--bg-surface);
        border-radius: var(--radius-sm);
        animation: pulse 1.4s ease-in-out infinite;
    }
    @keyframes pulse {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0.4;
        }
    }
    .error-pane {
        flex: 1;
        padding: var(--space-4);
        background: var(--status-invalid-bg);
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
    }
    .error-label {
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        text-transform: uppercase;
        color: var(--status-invalid);
    }
    .error-msg {
        margin: 0;
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--status-invalid);
        white-space: pre-wrap;
        word-break: break-word;
    }
    .markdown-preview {
        flex: 1;
        overflow: auto;
        padding: var(--space-5) var(--space-6);
        background: var(--bg-base);
        line-height: 1.7;
        color: var(--text-primary);
    }
    :global(.markdown-preview h1) {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 0 1rem;
    }
    :global(.markdown-preview h2) {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 1.5rem 0 0.75rem;
    }
    :global(.markdown-preview h3) {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 1.25rem 0 0.5rem;
    }
    :global(.markdown-preview p) {
        margin: 0 0 0.75rem;
    }
    :global(.markdown-preview ul, .markdown-preview ol) {
        padding-left: 1.5rem;
        margin: 0 0 0.75rem;
    }
    :global(.markdown-preview li) {
        line-height: 1.6;
        margin-bottom: 0.25rem;
    }
    :global(.markdown-preview code) {
        font-family: var(--font-mono);
        font-size: 0.875em;
        background: var(--bg-surface);
        padding: 0.1em 0.4em;
        border-radius: 3px;
    }
    :global(.markdown-preview pre) {
        background: var(--bg-surface);
        padding: 1rem;
        border-radius: 8px;
        overflow: auto;
        margin: 0 0 1rem;
    }
    :global(.markdown-preview pre code) {
        background: none;
        padding: 0;
    }
    :global(.markdown-preview table) {
        width: 100%;
        border-collapse: collapse;
        margin: 0 0 1rem;
        font-size: 0.875rem;
    }
    :global(.markdown-preview th, .markdown-preview td) {
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--border-default);
        text-align: left;
    }
    :global(.markdown-preview th) {
        background: var(--bg-surface);
        font-weight: 600;
    }
    :global(.markdown-preview a) {
        color: var(--color-primary);
    }
    :global(.markdown-preview blockquote) {
        border-left: 3px solid var(--color-primary);
        margin: 0 0 1rem;
        padding: 0.5rem 1rem;
        background: var(--bg-surface);
        color: var(--text-secondary);
    }
    :global(.spin) {
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @media (max-width: 768px) {
        .two-col,
        .three-col {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }
        .pane {
            border-right: none;
            border-bottom: 1px solid var(--border-default);
        }
    }
</style>
