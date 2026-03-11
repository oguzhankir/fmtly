<script lang="ts">
    import PdfDropZone from "./PdfDropZone.svelte";
    import { Copy, Check, Download, File, Loader } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    let pdfData: ArrayBuffer | null = $state(null);
    let fileName = $state("");
    let fileSize = $state(0);
    let extractedText = $state("");
    let pageCount = $state(0);
    let loading = $state(false);
    let progress = $state("");
    let error = $state<string | null>(null);
    let copied = $state(false);

    async function handleFiles(files: File[]) {
        const file = files[0];
        if (!file) return;
        error = null;
        loading = true;
        fileName = file.name;
        fileSize = file.size;
        progress = "Loading PDF…";

        try {
            pdfData = await file.arrayBuffer();
            const engine = await import("../../engines/pdf/pdfjs.engine");
            pageCount = await engine.getPageCount(pdfData!);
            progress = "Extracting text…";
            extractedText = await engine.extractText(
                pdfData!,
                (page, total) => {
                    progress = `Processing page ${page} of ${total}…`;
                },
            );
        } catch (e) {
            error =
                "Could not read PDF. The file may be corrupted or password-protected.";
            pdfData = null;
        } finally {
            loading = false;
            progress = "";
        }
    }

    function copyText() {
        if (!extractedText) return;
        navigator.clipboard.writeText(extractedText);
        addToast("success", "Text copied");
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }

    function downloadText() {
        if (!extractedText) return;
        const blob = new Blob([extractedText], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName.replace(/\.pdf$/i, "") + ".txt";
        a.click();
        URL.revokeObjectURL(url);
    }

    function formatSize(bytes: number): string {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }

    let wordCount = $derived(
        extractedText ? extractedText.split(/\s+/).filter(Boolean).length : 0,
    );
</script>

<div class="totext-panel">
    {#if !pdfData && !loading}
        <div class="drop-wrapper">
            <PdfDropZone onfiles={handleFiles} />
        </div>
    {:else if loading}
        <div class="loading-center">
            <Loader size={24} class="spin" />
            <p>{progress}</p>
        </div>
    {:else if error}
        <div class="error-center">{error}</div>
    {:else}
        <div class="toolbar">
            <div class="file-info">
                <File size={13} />
                {fileName} — {pageCount} pages — {formatSize(fileSize)} — {wordCount.toLocaleString()}
                words
            </div>
            <div class="actions">
                <button onclick={copyText} class="tb-btn">
                    {#if copied}<Check size={13} />{:else}<Copy
                            size={13}
                        />{/if} Copy
                </button>
                <button onclick={downloadText} class="tb-btn">
                    <Download size={13} /> Download .txt
                </button>
            </div>
        </div>
        <div class="text-output">
            <textarea
                value={extractedText}
                readonly
                spellcheck="false"
                class="text-area"
            ></textarea>
        </div>
    {/if}
</div>

<style>
    .totext-panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
    }
    .drop-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--space-8);
    }
    .loading-center {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-2);
        color: var(--text-tertiary);
        font-size: var(--text-sm);
    }
    .error-center {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--status-invalid);
        font-size: var(--text-sm);
        padding: var(--space-8);
        text-align: center;
    }
    .toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-3);
        padding: var(--space-2) var(--space-4);
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-default);
        flex-shrink: 0;
        flex-wrap: wrap;
    }
    .file-info {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        display: flex;
        align-items: center;
        gap: var(--space-1);
    }
    .actions {
        display: flex;
        gap: var(--space-2);
    }
    .tb-btn {
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
    .tb-btn:hover {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }
    .text-output {
        flex: 1;
        overflow: hidden;
    }
    .text-area {
        width: 100%;
        height: 100%;
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
</style>
