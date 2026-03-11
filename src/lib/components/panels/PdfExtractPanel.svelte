<script lang="ts">
    import PdfDropZone from "./PdfDropZone.svelte";
    import { Download, File as FileIcon, Loader, Check } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    let pdfData: ArrayBuffer | null = $state(null);
    let fileName = $state("");
    let fileSize = $state(0);
    let pageCount = $state(0);
    let loading = $state(false);
    let extracting = $state(false);
    let error = $state<string | null>(null);
    let thumbnails = $state<HTMLCanvasElement[]>([]);
    let selectedPages = $state<Set<number>>(new Set());

    async function handleFiles(files: File[]) {
        const file = files[0];
        if (!file) return;
        error = null;
        loading = true;
        fileName = file.name;
        fileSize = file.size;
        thumbnails = [];
        selectedPages = new Set();

        try {
            pdfData = await file.arrayBuffer();
            const engine = await import("../../engines/pdf/pdfjs.engine");
            pageCount = await engine.getPageCount(pdfData!);

            // Render thumbnails progressively
            const thumbs: HTMLCanvasElement[] = [];
            for (let i = 1; i <= pageCount; i++) {
                const canvas = await engine.renderThumbnail(pdfData!, i, 140);
                thumbs.push(canvas);
                thumbnails = [...thumbs];
            }
        } catch {
            error =
                "Could not read PDF. The file may be corrupted or password-protected.";
            pdfData = null;
        } finally {
            loading = false;
        }
    }

    function togglePage(pageNum: number) {
        const next = new Set(selectedPages);
        if (next.has(pageNum)) next.delete(pageNum);
        else next.add(pageNum);
        selectedPages = next;
    }

    function selectAll() {
        selectedPages = new Set(
            Array.from({ length: pageCount }, (_, i) => i + 1),
        );
    }
    function deselectAll() {
        selectedPages = new Set();
    }

    async function extract() {
        if (!pdfData || selectedPages.size === 0) return;
        extracting = true;
        error = null;
        try {
            const pdflib = await import("../../engines/pdf/pdflib.engine");
            const pages = Array.from(selectedPages).sort((a, b) => a - b);
            const result = await pdflib.extractPages(pdfData, pages);
            const blob = new Blob([new Uint8Array(result)], {
                type: "application/pdf",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${fileName.replace(/\.pdf$/i, "")}_extracted.pdf`;
            a.click();
            URL.revokeObjectURL(url);
            addToast(
                "success",
                `Extracted ${pages.length} page${pages.length > 1 ? "s" : ""}`,
            );
        } catch {
            error = "Failed to extract pages.";
        } finally {
            extracting = false;
        }
    }

    function formatSize(bytes: number): string {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }
</script>

<div class="extract-panel">
    {#if !pdfData && !loading}
        <div class="drop-wrapper">
            <PdfDropZone onfiles={handleFiles} />
        </div>
    {:else if loading}
        <div class="loading-center">
            <Loader size={24} class="spin" />
            <p>
                Loading PDF… {thumbnails.length > 0
                    ? `(${thumbnails.length}/${pageCount} thumbnails)`
                    : ""}
            </p>
        </div>
    {:else if pdfData}
        <div class="toolbar">
            <div class="file-info">
                <FileIcon size={13} />
                {fileName} — {pageCount} pages — {formatSize(fileSize)}
            </div>
            <div class="select-actions">
                <button onclick={selectAll} class="tb-btn">Select all</button>
                <button onclick={deselectAll} class="tb-btn"
                    >Deselect all</button
                >
            </div>
        </div>

        <div class="thumb-grid">
            {#each thumbnails as canvas, i}
                {@const pageNum = i + 1}
                <button
                    class="thumb-card {selectedPages.has(pageNum)
                        ? 'selected'
                        : ''}"
                    onclick={() => togglePage(pageNum)}
                >
                    <div class="thumb-canvas-wrap">
                        {@html canvas.outerHTML}
                        {#if selectedPages.has(pageNum)}
                            <div class="check-badge"><Check size={14} /></div>
                        {/if}
                    </div>
                    <span class="thumb-label">Page {pageNum}</span>
                </button>
            {/each}
        </div>

        {#if error}
            <p class="error-msg">{error}</p>
        {/if}

        <div class="actions-bar">
            <span class="summary"
                >{selectedPages.size} of {pageCount} pages selected</span
            >
            <button
                onclick={extract}
                disabled={extracting || selectedPages.size === 0}
                class="action-btn"
            >
                {#if extracting}<Loader
                        size={14}
                        class="spin"
                    />{:else}<Download size={14} />{/if}
                {extracting ? "Extracting…" : "Extract Selected & Download"}
            </button>
        </div>
    {/if}
</div>

<style>
    .extract-panel {
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
    .select-actions {
        display: flex;
        gap: var(--space-2);
    }
    .tb-btn {
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
    .thumb-grid {
        flex: 1;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        gap: var(--space-3);
        padding: var(--space-4);
        align-content: start;
    }
    .thumb-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-1);
        padding: var(--space-2);
        background: var(--bg-surface);
        border: 2px solid var(--border-default);
        border-radius: var(--radius-md);
        cursor: pointer;
        transition: border-color 0.15s;
    }
    .thumb-card:hover {
        border-color: var(--border-focus);
    }
    .thumb-card.selected {
        border-color: var(--color-primary);
        background: color-mix(
            in srgb,
            var(--color-primary) 6%,
            var(--bg-surface)
        );
    }
    .thumb-canvas-wrap {
        position: relative;
        width: 100%;
    }
    .thumb-canvas-wrap :global(canvas) {
        width: 100%;
        height: auto;
        border-radius: 2px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    }
    .check-badge {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 22px;
        height: 22px;
        background: var(--color-primary);
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .thumb-label {
        font-size: 11px;
        color: var(--text-tertiary);
        font-weight: var(--weight-medium);
    }
    .error-msg {
        color: var(--status-invalid);
        font-size: var(--text-sm);
        padding: 0 var(--space-4);
        margin: 0;
    }
    .actions-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-3) var(--space-4);
        background: var(--bg-surface);
        border-top: 1px solid var(--border-default);
        flex-shrink: 0;
        flex-wrap: wrap;
        gap: var(--space-2);
    }
    .summary {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
    }
    .action-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
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
