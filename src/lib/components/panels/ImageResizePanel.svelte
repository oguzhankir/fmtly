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
    let newW = $state(0);
    let newH = $state(0);
    let lockAspect = $state(true);
    let outputFormat = $state<"image/png" | "image/jpeg" | "image/webp">(
        "image/png",
    );
    let quality = $state(0.92);
    let processing = $state(false);

    async function handleFiles(files: globalThis.File[]) {
        const f = files[0];
        if (!f) return;
        file = f;
        const engine = await import("../../engines/image/image.engine");
        const info = await engine.getImageInfo(f);
        origW = info.width;
        origH = info.height;
        newW = info.width;
        newH = info.height;
        origSrc = await engine.imageToBase64(f);
    }

    function onWidthChange(e: Event) {
        newW = Number((e.target as HTMLInputElement).value) || 0;
        if (lockAspect && origW) newH = Math.round((newW * origH) / origW);
    }

    function onHeightChange(e: Event) {
        newH = Number((e.target as HTMLInputElement).value) || 0;
        if (lockAspect && origH) newW = Math.round((newH * origW) / origH);
    }

    async function resize() {
        if (!file || !newW || !newH) return;
        processing = true;
        try {
            const engine = await import("../../engines/image/image.engine");
            const blob = await engine.resizeImage(file, {
                width: newW,
                height: newH,
                maintainAspectRatio: false,
                outputFormat,
                quality,
            });
            resultBlob = blob;
            resultSrc = URL.createObjectURL(blob);
        } finally {
            processing = false;
        }
    }

    function formatSize(b: number): string {
        if (b < 1024) return `${b} B`;
        if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
        return `${(b / (1024 * 1024)).toFixed(1)} MB`;
    }

    function ext() {
        return outputFormat.split("/")[1];
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
        <div class="controls">
            <div class="row">
                <label class="ctrl">
                    <span class="lbl">Width</span>
                    <input
                        type="number"
                        value={newW}
                        oninput={onWidthChange}
                        min="1"
                        class="num-input"
                    />
                </label>
                <label class="ctrl">
                    <span class="lbl">Height</span>
                    <input
                        type="number"
                        value={newH}
                        oninput={onHeightChange}
                        min="1"
                        class="num-input"
                    />
                </label>
                <label class="ctrl check">
                    <input type="checkbox" bind:checked={lockAspect} />
                    <span class="lbl">Lock aspect ratio</span>
                </label>
            </div>
            <div class="row">
                <label class="ctrl">
                    <span class="lbl">Format</span>
                    <select bind:value={outputFormat} class="sel">
                        <option value="image/png">PNG</option>
                        <option value="image/jpeg">JPEG</option>
                        <option value="image/webp">WebP</option>
                    </select>
                </label>
                {#if outputFormat !== "image/png"}
                    <label class="ctrl">
                        <span class="lbl"
                            >Quality ({Math.round(quality * 100)}%)</span
                        >
                        <input
                            type="range"
                            bind:value={quality}
                            min="0.1"
                            max="1"
                            step="0.05"
                            class="slider"
                        />
                    </label>
                {/if}
                <button
                    onclick={resize}
                    disabled={processing}
                    class="action-btn"
                >
                    {#if processing}<Loader size={14} class="spin" />{/if} Resize
                </button>
            </div>
        </div>

        <div class="compare">
            <div class="side">
                <h4 class="side-label">
                    Original ({origW}×{origH}) — {formatSize(file.size)}
                </h4>
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
                        Resized ({newW}×{newH}) — {formatSize(resultBlob.size)}
                    </h4>
                    <ImagePreview
                        src={resultSrc}
                        filename={`resized.${ext()}`}
                        width={newW}
                        height={newH}
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
        flex-direction: column;
        gap: var(--space-3);
        border-bottom: 1px solid var(--border-default);
        flex-shrink: 0;
    }
    .row {
        display: flex;
        gap: var(--space-3);
        align-items: flex-end;
        flex-wrap: wrap;
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
    .sel {
        padding: var(--space-1) var(--space-2);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        font-size: var(--text-sm);
        color: var(--text-primary);
    }
    .slider {
        width: 120px;
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
</style>
