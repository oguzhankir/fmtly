<script lang="ts">
    import PdfDropZone from "./PdfDropZone.svelte";
    import { Download, File as FileIcon, Loader } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    let pdfData: ArrayBuffer | null = $state(null);
    let fileName = $state("");
    let fileSize = $state(0);
    let pageCount = $state(0);
    let splitting = $state(false);
    let loading = $state(false);
    let error = $state<string | null>(null);
    let splitMode = $state<"each" | "custom">("each");
    let customRanges = $state("");

    async function handleFiles(files: File[]) {
        const file = files[0];
        if (!file) return;
        error = null;
        loading = true;
        fileName = file.name;
        fileSize = file.size;

        try {
            pdfData = await file.arrayBuffer();
            const engine = await import("../../engines/pdf/pdfjs.engine");
            pageCount = await engine.getPageCount(pdfData!);
        } catch {
            error =
                "Could not read PDF. The file may be corrupted or password-protected.";
            pdfData = null;
        } finally {
            loading = false;
        }
    }

    function parseRanges(
        input: string,
        total: number,
    ): Array<{ from: number; to: number }> {
        return input
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)
            .map((part) => {
                if (part.includes("-")) {
                    const [a, b] = part.split("-").map(Number);
                    return { from: Math.max(1, a), to: Math.min(total, b) };
                }
                const n = Number(part);
                return { from: n, to: n };
            })
            .filter((r) => r.from >= 1 && r.to >= r.from);
    }

    async function split() {
        if (!pdfData) return;
        splitting = true;
        error = null;

        try {
            const pdflib = await import("../../engines/pdf/pdflib.engine");
            let ranges: Array<{ from: number; to: number }>;

            if (splitMode === "each") {
                ranges = Array.from({ length: pageCount }, (_, i) => ({
                    from: i + 1,
                    to: i + 1,
                }));
            } else {
                ranges = parseRanges(customRanges, pageCount);
                if (!ranges.length) {
                    error = 'Invalid range format. Use e.g. "1-3, 4-7, 8"';
                    splitting = false;
                    return;
                }
            }

            const results = await pdflib.splitPdf(pdfData, ranges);

            if (results.length === 1) {
                const blob = new Blob([new Uint8Array(results[0])], {
                    type: "application/pdf",
                });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `${fileName.replace(/\.pdf$/i, "")}_split.pdf`;
                a.click();
                URL.revokeObjectURL(url);
            } else {
                // Download as individual files
                for (let i = 0; i < results.length; i++) {
                    const blob = new Blob([new Uint8Array(results[i])], {
                        type: "application/pdf",
                    });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    const label =
                        splitMode === "each"
                            ? `page_${i + 1}`
                            : `part_${i + 1}`;
                    a.download = `${fileName.replace(/\.pdf$/i, "")}_${label}.pdf`;
                    a.click();
                    URL.revokeObjectURL(url);
                }
            }
            addToast(
                "success",
                `Split into ${results.length} file${results.length > 1 ? "s" : ""}`,
            );
        } catch (e) {
            error = "Failed to split PDF.";
        } finally {
            splitting = false;
        }
    }

    function formatSize(bytes: number): string {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }
</script>

<div class="split-panel">
    {#if !pdfData && !loading}
        <div class="drop-wrapper">
            <PdfDropZone onfiles={handleFiles} />
        </div>
    {:else if loading}
        <div class="loading-center">
            <Loader size={24} class="spin" />
            <p>Loading PDF…</p>
        </div>
    {:else if pdfData}
        <div class="toolbar">
            <div class="file-info">
                <FileIcon size={13} />
                {fileName} — {pageCount} pages — {formatSize(fileSize)}
            </div>
        </div>

        <div class="controls">
            <div class="mode-toggle">
                <button
                    onclick={() => {
                        splitMode = "each";
                    }}
                    class="mode-btn {splitMode === 'each' ? 'active' : ''}"
                >
                    Each page
                </button>
                <button
                    onclick={() => {
                        splitMode = "custom";
                    }}
                    class="mode-btn {splitMode === 'custom' ? 'active' : ''}"
                >
                    Custom ranges
                </button>
            </div>

            {#if splitMode === "custom"}
                <div class="range-input-group">
                    <input
                        type="text"
                        bind:value={customRanges}
                        placeholder="e.g. 1-3, 4-7, 8"
                        class="range-input"
                    />
                    <p class="hint">
                        Comma-separated page ranges. Each range becomes a
                        separate PDF.
                    </p>
                </div>
            {:else}
                <p class="hint">
                    Each page will be saved as a separate PDF file. ({pageCount} files)
                </p>
            {/if}

            {#if error}
                <p class="error-msg">{error}</p>
            {/if}

            <button onclick={split} disabled={splitting} class="action-btn">
                {#if splitting}<Loader size={14} class="spin" />{:else}<Download
                        size={14}
                    />{/if}
                {splitting ? "Splitting…" : "Split & Download"}
            </button>
        </div>
    {/if}
</div>

<style>
    .split-panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;
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
    }
    .toolbar {
        display: flex;
        align-items: center;
        padding: var(--space-2) var(--space-4);
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-default);
        flex-shrink: 0;
    }
    .file-info {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        display: flex;
        align-items: center;
        gap: var(--space-1);
    }
    .controls {
        padding: var(--space-6);
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
        max-width: 500px;
    }
    .mode-toggle {
        display: flex;
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        overflow: hidden;
    }
    .mode-btn {
        flex: 1;
        padding: var(--space-2) var(--space-3);
        background: none;
        border: none;
        font-size: var(--text-sm);
        font-weight: var(--weight-medium);
        color: var(--text-secondary);
        cursor: pointer;
        text-align: center;
    }
    .mode-btn:hover {
        color: var(--text-primary);
    }
    .mode-btn.active {
        background: var(--color-primary);
        color: #fff;
    }
    .range-input-group {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }
    .range-input {
        padding: var(--space-2) var(--space-3);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        font-size: var(--text-sm);
        color: var(--text-primary);
        font-family: var(--font-mono);
    }
    .range-input:focus {
        outline: none;
        border-color: var(--border-focus);
    }
    .hint {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        margin: 0;
    }
    .error-msg {
        color: var(--status-invalid);
        font-size: var(--text-sm);
        margin: 0;
    }
    .action-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        align-self: flex-start;
        padding: var(--space-2) var(--space-5);
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
</style>
