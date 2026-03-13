<script lang="ts">
    import PdfDropZone from "./PdfDropZone.svelte";
    import {
        Download,
        Trash2,
        GripVertical,
        File as FileIcon,
        Loader,
    } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";
    import { t } from '$lib/stores/language.js';

    type PdfEntry = { name: string; size: number; data: ArrayBuffer };

    let files = $state<PdfEntry[]>([]);
    let merging = $state(false);
    let error = $state<string | null>(null);

    async function handleFiles(newFiles: File[]) {
        error = null;
        for (const f of newFiles) {
            const data = await f.arrayBuffer();
            files = [...files, { name: f.name, size: f.size, data }];
        }
    }

    function removeFile(index: number) {
        files = files.filter((_, i) => i !== index);
    }

    function moveUp(index: number) {
        if (index <= 0) return;
        const arr = [...files];
        [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
        files = arr;
    }

    function moveDown(index: number) {
        if (index >= files.length - 1) return;
        const arr = [...files];
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        files = arr;
    }

    async function merge() {
        if (files.length < 2) {
            error = $t('ui.pdf_merge.error_min_files', 'Add at least 2 PDFs to merge.');
            return;
        }
        merging = true;
        error = null;
        try {
            const engine = await import("../../engines/pdf/pdflib.engine");
            const result = await engine.mergePdfs(files.map((f) => f.data));
            const blob = new Blob([new Uint8Array(result)], {
                type: "application/pdf",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "merged.pdf";
            a.click();
            URL.revokeObjectURL(url);
            addToast("success", $t('ui.pdf_merge.toast_success', 'Merged PDF downloaded'));
        } catch (e) {
            error = $t('ui.pdf_merge.error_merge_failed', 'Failed to merge PDFs. One or more files may be corrupted.');
        } finally {
            merging = false;
        }
    }

    function formatSize(bytes: number): string {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }
</script>

<div class="merge-panel">
    <div class="drop-section">
        <PdfDropZone
            onfiles={handleFiles}
            multiple={true}
            label={$t('ui.pdf_merge.drop_label', 'Drop PDFs here or click to add')}
        />
    </div>

    {#if files.length > 0}
        <div class="file-list">
            {#each files as file, i}
                <div class="file-row">
                    <span class="grip"><GripVertical size={14} /></span>
                    <span class="file-index">{i + 1}</span>
                    <FileIcon size={14} />
                    <span class="file-name">{file.name}</span>
                    <span class="file-size">{formatSize(file.size)}</span>
                    <div class="row-actions">
                        <button
                            onclick={() => moveUp(i)}
                            disabled={i === 0}
                            class="small-btn">↑</button
                        >
                        <button
                            onclick={() => moveDown(i)}
                            disabled={i === files.length - 1}
                            class="small-btn">↓</button
                        >
                        <button
                            onclick={() => removeFile(i)}
                            class="small-btn danger"
                            ><Trash2 size={12} /></button
                        >
                    </div>
                </div>
            {/each}
        </div>

        {#if error}
            <p class="error-msg">{error}</p>
        {/if}

        <div class="actions-bar">
            <span class="summary"
                >{files.length} {$t('ui.pdf_merge.files_label', 'files')} — {formatSize(
                    files.reduce((s, f) => s + f.size, 0),
                )} {$t('ui.pdf_merge.total_label', 'total')}</span
            >
            <button
                onclick={merge}
                disabled={merging || files.length < 2}
                class="merge-btn"
            >
                {#if merging}<Loader size={14} class="spin" />{:else}<Download
                        size={14}
                    />{/if}
                {merging ? $t('ui.pdf_merge.merging', 'Merging…') : $t('ui.pdf_merge.merge_button', 'Merge & Download')}
            </button>
        </div>
    {/if}
</div>

<style>
    .merge-panel {
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
    .grip {
        color: var(--text-tertiary);
        cursor: grab;
    }
    .file-index {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        font-weight: var(--weight-semibold);
        min-width: 18px;
    }
    .file-name {
        flex: 1;
        font-size: var(--text-sm);
        color: var(--text-primary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .file-size {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
    }
    .row-actions {
        display: flex;
        gap: var(--space-1);
    }
    .small-btn {
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
        font-size: 11px;
    }
    .small-btn:hover:not(:disabled) {
        border-color: var(--border-focus);
    }
    .small-btn:disabled {
        opacity: 0.3;
        cursor: default;
    }
    .small-btn.danger:hover {
        color: var(--status-invalid);
        border-color: var(--status-invalid);
    }
    .error-msg {
        color: var(--status-invalid);
        font-size: var(--text-sm);
        margin: 0;
    }
    .actions-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-3) 0;
        gap: var(--space-3);
        flex-wrap: wrap;
    }
    .summary {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
    }
    .merge-btn {
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
    .merge-btn:hover:not(:disabled) {
        opacity: 0.9;
    }
    .merge-btn:disabled {
        opacity: 0.5;
        cursor: default;
    }
</style>
