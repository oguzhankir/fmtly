<script lang="ts">
    import { Download } from "lucide-svelte";
    import { t } from '$lib/stores/language.js';

    type Props = {
        src: string;
        filename?: string;
        width?: number;
        height?: number;
        size?: number;
        downloadBlob?: Blob | null;
    };

    let {
        src,
        filename = "",
        width = 0,
        height = 0,
        size = 0,
        downloadBlob = null,
    }: Props = $props();

    function formatSize(bytes: number): string {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }

    function download() {
        const blob = downloadBlob ?? null;
        if (!blob && !src) return;
        const url = blob ? URL.createObjectURL(blob) : src;
        const a = document.createElement("a");
        a.href = url;
        a.download = filename || $t('ui.image', 'image');
        a.click();
        if (blob) URL.revokeObjectURL(url);
    }
</script>

<div class="img-preview">
    <div class="img-container">
        <img {src} alt={filename || $t('ui.preview', 'Preview')} />
    </div>
    <div class="img-info">
        <div class="meta">
            {#if filename}<span class="fname">{filename}</span>{/if}
            {#if width && height}<span>{width} × {height} {$t('ui.pixels', 'px')}</span>{/if}
            {#if size}<span>{formatSize(size)}</span>{/if}
        </div>
        <button onclick={download} class="dl-btn"
            ><Download size={13} /> {$t('ui.download', 'Download')}</button
        >
    </div>
</div>

<style>
    .img-preview {
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        overflow: hidden;
        background: var(--bg-surface);
    }
    .img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--space-4);
        min-height: 120px;
        background: repeating-conic-gradient(
                var(--bg-base) 0% 25%,
                transparent 0% 50%
            )
            50% / 16px 16px;
    }
    .img-container img {
        max-width: 100%;
        max-height: 400px;
        object-fit: contain;
        border-radius: 2px;
    }
    .img-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-2);
        padding: var(--space-2) var(--space-3);
        border-top: 1px solid var(--border-default);
        flex-wrap: wrap;
    }
    .meta {
        display: flex;
        gap: var(--space-3);
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        align-items: center;
        flex-wrap: wrap;
    }
    .fname {
        color: var(--text-secondary);
        font-weight: var(--weight-medium);
    }
    .dl-btn {
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
    .dl-btn:hover {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }
</style>
