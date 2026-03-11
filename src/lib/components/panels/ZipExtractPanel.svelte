<script lang="ts">
    import PdfDropZone from "./PdfDropZone.svelte";
    import { Eye, Download, Loader, FileText, X } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";
    import type { ZipEntry } from "../../engines/file/file.engine";

    let zipBuffer: ArrayBuffer | null = $state(null);
    let fileName = $state("");
    let entries = $state<ZipEntry[]>([]);
    let loading = $state(false);
    let preview = $state<{ name: string; content: string } | null>(null);
    let extracting = $state(false);

    async function handleFiles(files: globalThis.File[]) {
        const f = files[0];
        if (!f) return;
        loading = true;
        fileName = f.name;
        try {
            zipBuffer = await f.arrayBuffer();
            const engine = await import("../../engines/file/file.engine");
            entries = await engine.extractZip(zipBuffer);
        } catch {
            entries = [];
        } finally {
            loading = false;
        }
    }

    async function previewFile(name: string) {
        if (!zipBuffer) return;
        try {
            const engine = await import("../../engines/file/file.engine");
            const content = await engine.extractZipFile(zipBuffer, name);
            preview = { name, content };
        } catch {
            addToast("error", "Cannot preview this file");
        }
    }

    async function extractAll() {
        if (!zipBuffer) return;
        extracting = true;
        try {
            const engine = await import("../../engines/file/file.engine");
            const allFiles = await engine.extractZipAll(zipBuffer);
            for (const { name, blob } of allFiles) {
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = name.split("/").pop() ?? name;
                a.click();
                URL.revokeObjectURL(url);
            }
            addToast("success", `Extracted ${allFiles.length} files`);
        } finally {
            extracting = false;
        }
    }

    function formatSize(b: number): string {
        if (b < 1024) return `${b} B`;
        if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
        return `${(b / 1048576).toFixed(1)} MB`;
    }
</script>

<div class="panel">
    {#if !zipBuffer && !loading}
        <div class="drop-wrapper">
            <PdfDropZone
                onfiles={handleFiles}
                accept=".zip,application/zip,application/x-zip-compressed"
                label="Drop ZIP file here"
            />
        </div>
    {:else if loading}
        <div class="loading-center">
            <Loader size={24} class="spin" />
            <p>Reading ZIP…</p>
        </div>
    {:else}
        <div class="toolbar">
            <span class="file-info">{fileName} — {entries.length} files</span>
            <button
                onclick={extractAll}
                disabled={extracting}
                class="action-btn"
            >
                {#if extracting}<Loader
                        size={14}
                        class="spin"
                    />{:else}<Download size={14} />{/if} Extract All
            </button>
        </div>

        <div class="entry-list">
            {#each entries as entry}
                <div class="entry-row">
                    <FileText size={14} />
                    <span class="ename">{entry.name}</span>
                    <span class="esize">{formatSize(entry.size)}</span>
                    {#if entry.preview}
                        <button
                            onclick={() => previewFile(entry.name)}
                            class="sm-btn"><Eye size={12} /></button
                        >
                    {/if}
                </div>
            {/each}
        </div>

        {#if preview}
            <div class="preview-overlay">
                <div class="preview-card">
                    <div class="preview-header">
                        <span>{preview.name}</span>
                        <button
                            onclick={() => {
                                preview = null;
                            }}
                            class="sm-btn"><X size={14} /></button
                        >
                    </div>
                    <pre class="preview-content">{preview.content}</pre>
                </div>
            </div>
        {/if}
    {/if}
</div>

<style>
    .panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;
        position: relative;
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
        padding: var(--space-2) var(--space-4);
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-default);
        flex-shrink: 0;
        flex-wrap: wrap;
        gap: var(--space-2);
    }
    .file-info {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
    }
    .action-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-1) var(--space-3);
        background: var(--color-primary);
        color: #fff;
        border: none;
        border-radius: var(--radius-md);
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        cursor: pointer;
    }
    .action-btn:disabled {
        opacity: 0.5;
    }
    .entry-list {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
    .entry-row {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-2) var(--space-4);
        border-bottom: 1px solid var(--border-default);
        color: var(--text-secondary);
    }
    .ename {
        flex: 1;
        font-size: var(--text-sm);
        color: var(--text-primary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .esize {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
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
    .sm-btn:hover {
        border-color: var(--border-focus);
    }
    .preview-overlay {
        position: absolute;
        inset: 0;
        background: color-mix(in srgb, var(--bg-base) 85%, transparent);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--space-4);
        z-index: 10;
    }
    .preview-card {
        width: 100%;
        max-width: 700px;
        max-height: 80%;
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .preview-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-2) var(--space-3);
        border-bottom: 1px solid var(--border-default);
        font-size: var(--text-sm);
        font-weight: var(--weight-medium);
        color: var(--text-primary);
    }
    .preview-content {
        flex: 1;
        overflow: auto;
        padding: var(--space-3);
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-primary);
        white-space: pre-wrap;
        margin: 0;
        background: var(--bg-base);
    }
</style>
