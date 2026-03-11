<script lang="ts">
    import PdfDropZone from "./PdfDropZone.svelte";
    import ImagePreview from "./ImagePreview.svelte";
    import { Copy, Check } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    let file: globalThis.File | null = $state(null);
    let base64 = $state("");
    let previewSrc = $state("");
    let imgWidth = $state(0);
    let imgHeight = $state(0);
    let copied = $state(false);

    async function handleFiles(files: globalThis.File[]) {
        const f = files[0];
        if (!f) return;
        file = f;
        const engine = await import("../../engines/image/image.engine");
        base64 = await engine.imageToBase64(f);
        previewSrc = base64;
        const info = await engine.getImageInfo(f);
        imgWidth = info.width;
        imgHeight = info.height;
    }

    function copyBase64() {
        if (!base64) return;
        navigator.clipboard.writeText(base64);
        addToast("success", "Base64 copied");
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }

    function formatSize(bytes: number): string {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }
</script>

<div class="panel">
    {#if !file}
        <div class="drop-wrapper">
            <PdfDropZone
                onfiles={handleFiles}
                accept="image/*"
                label="Drop image here or click to select"
            />
        </div>
    {:else}
        <div class="content">
            <ImagePreview
                src={previewSrc}
                filename={file.name}
                width={imgWidth}
                height={imgHeight}
                size={file.size}
            />

            <div class="info-bar">
                <span>Format: {file.type}</span>
                <span>{imgWidth} × {imgHeight} px</span>
                <span>Original: {formatSize(file.size)}</span>
                <span>Base64: {formatSize(base64.length)}</span>
            </div>

            <div class="output-area">
                <div class="output-header">
                    <span class="label">Data URL</span>
                    <button onclick={copyBase64} class="copy-btn">
                        {#if copied}<Check size={13} />{:else}<Copy
                                size={13}
                            />{/if} Copy
                    </button>
                </div>
                <textarea
                    value={base64}
                    readonly
                    class="base64-textarea"
                    spellcheck="false"
                ></textarea>
            </div>
        </div>
    {/if}
</div>

<style>
    .panel {
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
    .content {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
        padding: var(--space-4);
    }
    .info-bar {
        display: flex;
        gap: var(--space-4);
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        flex-wrap: wrap;
    }
    .output-area {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }
    .output-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .label {
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        color: var(--text-secondary);
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
    .base64-textarea {
        width: 100%;
        min-height: 200px;
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        padding: var(--space-3);
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-primary);
        resize: vertical;
        outline: none;
        word-break: break-all;
    }
</style>
