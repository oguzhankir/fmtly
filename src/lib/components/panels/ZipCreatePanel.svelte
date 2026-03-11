<script lang="ts">
    import PdfDropZone from "./PdfDropZone.svelte";
    import { Download, Trash2, Loader } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    type FileEntry = { name: string; size: number; data: ArrayBuffer };

    let files = $state<FileEntry[]>([]);
    let creating = $state(false);

    async function handleFiles(newFiles: globalThis.File[]) {
        for (const f of newFiles) {
            const data = await f.arrayBuffer();
            files = [...files, { name: f.name, size: f.size, data }];
        }
    }

    function removeFile(i: number) {
        files = files.filter((_, idx) => idx !== i);
    }

    async function createZip() {
        if (files.length === 0) return;
        creating = true;
        try {
            const engine = await import("../../engines/file/file.engine");
            const blob = await engine.createZip(
                files.map((f) => ({ name: f.name, content: f.data })),
            );
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "archive.zip";
            a.click();
            URL.revokeObjectURL(url);
            addToast("success", "ZIP created and downloaded");
        } finally {
            creating = false;
        }
    }

    function formatSize(b: number): string {
        if (b < 1024) return `${b} B`;
        if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
        return `${(b / 1048576).toFixed(1)} MB`;
    }
</script>

<div class="panel">
    <div class="drop-section">
        <PdfDropZone
            onfiles={handleFiles}
            accept="*/*"
            multiple={true}
            label="Drop files here or click to add"
        />
    </div>

    {#if files.length > 0}
        <div class="file-list">
            {#each files as file, i}
                <div class="file-row">
                    <span class="idx">{i + 1}</span>
                    <span class="fname">{file.name}</span>
                    <span class="fsize">{formatSize(file.size)}</span>
                    <button onclick={() => removeFile(i)} class="rm-btn"
                        ><Trash2 size={12} /></button
                    >
                </div>
            {/each}
        </div>

        <div class="actions-bar">
            <span class="summary"
                >{files.length} files — {formatSize(
                    files.reduce((s, f) => s + f.size, 0),
                )} total</span
            >
            <button onclick={createZip} disabled={creating} class="action-btn">
                {#if creating}<Loader size={14} class="spin" />{:else}<Download
                        size={14}
                    />{/if}
                {creating ? "Creating…" : "Create ZIP & Download"}
            </button>
        </div>
    {/if}
</div>

<style>
    .panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;
        padding: var(--space-4);
        gap: var(--space-4);
    }
    .drop-section {
        flex-shrink: 0;
    }
    .file-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }
    .file-row {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-2) var(--space-3);
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
    }
    .idx {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        min-width: 18px;
        font-weight: var(--weight-semibold);
    }
    .fname {
        flex: 1;
        font-size: var(--text-sm);
        color: var(--text-primary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .fsize {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
    }
    .rm-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border-radius: var(--radius-sm);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        color: var(--text-secondary);
        cursor: pointer;
    }
    .rm-btn:hover {
        color: var(--status-invalid);
        border-color: var(--status-invalid);
    }
    .actions-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
