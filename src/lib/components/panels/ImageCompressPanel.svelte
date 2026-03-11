<script lang="ts">
    import PdfDropZone from "./PdfDropZone.svelte";
    import ImagePreview from "./ImagePreview.svelte";
    import { Loader } from "lucide-svelte";

    let file: globalThis.File | null = $state(null);
    let origSrc = $state("");
    let resultSrc = $state("");
    let resultBlob: Blob | null = $state(null);
    let origW = $state(0);
    let origH = $state(0);
    let quality = $state(0.8);
    let maxWidthOrHeight = $state(0);
    let useMaxDim = $state(false);
    let processing = $state(false);
    let savings = $state(0);

    async function handleFiles(files: globalThis.File[]) {
        const f = files[0];
        if (!f) return;
        file = f;
        const engine = await import("../../engines/image/image.engine");
        const info = await engine.getImageInfo(f);
        origW = info.width;
        origH = info.height;
        origSrc = await engine.imageToBase64(f);
        maxWidthOrHeight = Math.max(origW, origH);
    }

    async function compress() {
        if (!file) return;
        processing = true;
        try {
            const engine = await import("../../engines/image/image.engine");
            const result = await engine.compressImage(file, {
                maxSizeMB: 10,
                maxWidthOrHeight: useMaxDim ? maxWidthOrHeight : undefined,
                quality,
            });
            resultBlob = result.blob;
            resultSrc = URL.createObjectURL(result.blob);
            savings = result.ratio;
        } finally {
            processing = false;
        }
    }

    function formatSize(b: number): string {
        if (b < 1024) return `${b} B`;
        if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
        return `${(b / (1024 * 1024)).toFixed(1)} MB`;
    }
</script>

<div class="panel">
    {#if !file}
        <div class="drop-wrapper">
            <PdfDropZone
                onfiles={handleFiles}
                accept="image/jpeg,image/png,image/webp"
                label="Drop image here (JPG, PNG, WebP)"
            />
        </div>
    {:else}
        <div class="controls">
            <label class="ctrl">
                <span class="lbl">Quality ({Math.round(quality * 100)}%)</span>
                <input
                    type="range"
                    bind:value={quality}
                    min="0.1"
                    max="1"
                    step="0.05"
                    class="slider"
                />
            </label>
            <label class="ctrl check">
                <input type="checkbox" bind:checked={useMaxDim} />
                <span class="lbl">Limit max dimension</span>
            </label>
            {#if useMaxDim}
                <label class="ctrl">
                    <span class="lbl">Max W/H (px)</span>
                    <input
                        type="number"
                        bind:value={maxWidthOrHeight}
                        min="100"
                        class="num-input"
                    />
                </label>
            {/if}
            <button onclick={compress} disabled={processing} class="action-btn">
                {#if processing}<Loader size={14} class="spin" />{/if} Compress
            </button>
        </div>

        <div class="compare">
            <div class="side">
                <h4 class="side-label">Original — {formatSize(file.size)}</h4>
                <ImagePreview
                    src={origSrc}
                    filename={file.name}
                    width={origW}
                    height={origH}
                    size={file.size}
                />
            </div>
            {#if resultSrc && resultBlob}
                <div class="side">
                    <h4 class="side-label">
                        Compressed — {formatSize(resultBlob.size)}
                        <span class="savings"
                            >({savings.toFixed(1)}% saved)</span
                        >
                    </h4>
                    <ImagePreview
                        src={resultSrc}
                        filename={`compressed_${file.name}`}
                        width={origW}
                        height={origH}
                        size={resultBlob.size}
                        downloadBlob={resultBlob}
                    />
                </div>
            {/if}
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
    .controls {
        padding: var(--space-4);
        display: flex;
        gap: var(--space-3);
        align-items: flex-end;
        flex-wrap: wrap;
        border-bottom: 1px solid var(--border-default);
        flex-shrink: 0;
    }
    .ctrl {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .ctrl.check {
        flex-direction: row;
        align-items: center;
        gap: var(--space-2);
    }
    .lbl {
        font-size: var(--text-xs);
        color: var(--text-secondary);
        font-weight: var(--weight-medium);
    }
    .slider {
        width: 160px;
    }
    .num-input {
        width: 100px;
        padding: var(--space-1) var(--space-2);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        font-size: var(--text-sm);
        color: var(--text-primary);
        font-family: var(--font-mono);
    }
    .num-input:focus {
        outline: none;
        border-color: var(--border-focus);
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
    .compare {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
        padding: var(--space-4);
    }
    @media (max-width: 768px) {
        .compare {
            grid-template-columns: 1fr;
        }
    }
    .side {
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
    }
    .side-label {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        margin: 0;
        font-weight: var(--weight-medium);
    }
    .savings {
        color: var(--status-valid);
        font-weight: var(--weight-semibold);
    }
</style>
