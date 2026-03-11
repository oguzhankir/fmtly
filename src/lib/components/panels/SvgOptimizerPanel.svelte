<script lang="ts">
    import PdfDropZone from "./PdfDropZone.svelte";
    import { Copy, Check, Loader, Download } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    let inputSvg = $state("");
    let outputSvg = $state("");
    let originalSize = $state(0);
    let optimizedSize = $state(0);
    let savings = $state("");
    let processing = $state(false);
    let error = $state<string | null>(null);
    let copied = $state(false);

    async function handleFiles(files: globalThis.File[]) {
        const f = files[0];
        if (!f) return;
        inputSvg = await f.text();
        await optimize();
    }

    async function optimize() {
        if (!inputSvg.trim()) {
            outputSvg = "";
            return;
        }
        processing = true;
        error = null;
        try {
            const engine = await import("../../engines/image/svg.engine");
            const result = await engine.optimizeSvg(inputSvg);
            outputSvg = result.data;
            originalSize = result.originalSize;
            optimizedSize = result.optimizedSize;
            savings = result.savings;
        } catch {
            error =
                "Failed to optimize SVG. Check that the input is valid SVG.";
            outputSvg = "";
        } finally {
            processing = false;
        }
    }

    function copyOutput() {
        if (!outputSvg) return;
        navigator.clipboard.writeText(outputSvg);
        addToast("success", "Optimized SVG copied");
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }

    function downloadSvg() {
        if (!outputSvg) return;
        const blob = new Blob([outputSvg], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "optimized.svg";
        a.click();
        URL.revokeObjectURL(url);
    }

    function formatSize(b: number): string {
        if (b < 1024) return `${b} B`;
        if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
        return `${(b / (1024 * 1024)).toFixed(1)} MB`;
    }
</script>

<div class="panel">
    <div class="drop-section">
        <PdfDropZone
            onfiles={handleFiles}
            accept=".svg,image/svg+xml"
            label="Drop SVG here or paste below"
        />
    </div>

    <div class="split-view">
        <div class="col">
            <div class="col-header">
                <span class="col-title">Input SVG</span>
                {#if inputSvg}<span class="col-meta"
                        >{formatSize(inputSvg.length)}</span
                    >{/if}
            </div>
            <textarea
                bind:value={inputSvg}
                placeholder={"<svg xmlns='http://www.w3.org/2000/svg' ...>"}
                class="code-area"
                spellcheck="false"
            ></textarea>
            <button
                onclick={optimize}
                disabled={processing || !inputSvg.trim()}
                class="action-btn"
            >
                {#if processing}<Loader size={14} class="spin" />{/if} Optimize
            </button>
        </div>

        <div class="col">
            <div class="col-header">
                <span class="col-title">Optimized SVG</span>
                {#if outputSvg}
                    <span class="col-meta"
                        >{formatSize(optimizedSize)} —
                        <span class="savings">{savings}% saved</span></span
                    >
                {/if}
                <div class="col-actions">
                    <button
                        onclick={copyOutput}
                        disabled={!outputSvg}
                        class="sm-btn"
                    >
                        {#if copied}<Check size={12} />{:else}<Copy
                                size={12}
                            />{/if}
                    </button>
                    <button
                        onclick={downloadSvg}
                        disabled={!outputSvg}
                        class="sm-btn"><Download size={12} /></button
                    >
                </div>
            </div>
            <textarea
                value={outputSvg}
                readonly
                class="code-area"
                spellcheck="false"
                placeholder="Optimized SVG will appear here"
            ></textarea>
        </div>
    </div>

    {#if error}
        <p class="error-msg">{error}</p>
    {/if}

    {#if outputSvg}
        <div class="preview-section">
            <span class="preview-label">Preview</span>
            <div class="svg-preview">{@html outputSvg}</div>
        </div>
    {/if}
</div>

<style>
    .panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;
        gap: var(--space-3);
        padding: var(--space-4);
    }
    .drop-section {
        flex-shrink: 0;
    }
    .split-view {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-3);
        flex: 1;
        min-height: 300px;
    }
    @media (max-width: 768px) {
        .split-view {
            grid-template-columns: 1fr;
        }
    }
    .col {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }
    .col-header {
        display: flex;
        align-items: center;
        gap: var(--space-2);
    }
    .col-title {
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        color: var(--text-secondary);
    }
    .col-meta {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
    }
    .col-actions {
        display: flex;
        gap: var(--space-1);
        margin-left: auto;
    }
    .sm-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-sm);
        color: var(--text-secondary);
        cursor: pointer;
    }
    .sm-btn:hover:not(:disabled) {
        border-color: var(--border-focus);
    }
    .sm-btn:disabled {
        opacity: 0.3;
        cursor: default;
    }
    .code-area {
        flex: 1;
        width: 100%;
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        padding: var(--space-3);
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-primary);
        resize: none;
        outline: none;
        min-height: 200px;
    }
    .code-area:focus {
        border-color: var(--border-focus);
    }
    .action-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        align-self: flex-start;
        padding: var(--space-2) var(--space-4);
        background: var(--color-primary);
        color: #fff;
        border: none;
        border-radius: var(--radius-md);
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        cursor: pointer;
    }
    .action-btn:hover:not(:disabled) {
        opacity: 0.9;
    }
    .action-btn:disabled {
        opacity: 0.5;
        cursor: default;
    }
    .savings {
        color: var(--status-valid);
        font-weight: var(--weight-semibold);
    }
    .error-msg {
        color: var(--status-invalid);
        font-size: var(--text-sm);
        margin: 0;
    }
    .preview-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }
    .preview-label {
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        color: var(--text-secondary);
    }
    .svg-preview {
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        padding: var(--space-4);
        background: repeating-conic-gradient(
                var(--bg-base) 0% 25%,
                transparent 0% 50%
            )
            50% / 16px 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 120px;
    }
    .svg-preview :global(svg) {
        max-width: 100%;
        max-height: 300px;
    }
</style>
