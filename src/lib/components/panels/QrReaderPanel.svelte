<script lang="ts">
    import PdfDropZone from "./PdfDropZone.svelte";
    import { Copy, Check, Loader } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    let decoded = $state("");
    let error = $state<string | null>(null);
    let processing = $state(false);
    let copied = $state(false);
    let previewSrc = $state("");

    async function handleFiles(files: globalThis.File[]) {
        const f = files[0];
        if (!f) return;
        processing = true;
        error = null;
        decoded = "";
        try {
            previewSrc = URL.createObjectURL(f);
            const bitmap = await createImageBitmap(f);
            const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
            const ctx = canvas.getContext("2d")!;
            ctx.drawImage(bitmap, 0, 0);
            const imageData = ctx.getImageData(
                0,
                0,
                bitmap.width,
                bitmap.height,
            );

            const engine = await import("../../engines/qr/qr.engine");
            const result = await engine.decodeQr(
                imageData as unknown as ImageData,
            );
            if (result.success) {
                decoded = result.data;
            } else {
                error =
                    "No QR code found in the image. Try a clearer image with better contrast.";
            }
        } catch {
            error = "Failed to process image.";
        } finally {
            processing = false;
        }
    }

    function copyDecoded() {
        if (!decoded) return;
        navigator.clipboard.writeText(decoded);
        addToast("success", "Content copied");
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }

    function isUrl(s: string): boolean {
        try {
            new URL(s);
            return true;
        } catch {
            return false;
        }
    }
</script>

<div class="panel">
    {#if !decoded && !error && !processing}
        <div class="drop-wrapper">
            <PdfDropZone
                onfiles={handleFiles}
                accept="image/*"
                label="Drop image containing QR code"
            />
        </div>
    {:else if processing}
        <div class="loading-center">
            <Loader size={24} class="spin" />
            <p>Scanning for QR code…</p>
        </div>
    {:else}
        <div class="result-section">
            {#if previewSrc}
                <div class="preview-img">
                    <img src={previewSrc} alt="Uploaded QR code" />
                </div>
            {/if}

            {#if error}
                <div class="error-box">{error}</div>
            {/if}

            {#if decoded}
                <div class="decoded-box">
                    <div class="decoded-header">
                        <span class="label">Decoded Content</span>
                        <button onclick={copyDecoded} class="copy-btn">
                            {#if copied}<Check size={12} />{:else}<Copy
                                    size={12}
                                />{/if} Copy
                        </button>
                    </div>
                    <div class="decoded-content">
                        {#if isUrl(decoded)}
                            <a
                                href={decoded}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="link">{decoded}</a
                            >
                        {:else}
                            <pre>{decoded}</pre>
                        {/if}
                    </div>
                </div>
            {/if}

            <button
                onclick={() => {
                    decoded = "";
                    error = null;
                    previewSrc = "";
                }}
                class="reset-btn">Scan Another</button
            >
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
    .loading-center {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-2);
        color: var(--text-tertiary);
    }
    .result-section {
        padding: var(--space-4);
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
        align-items: center;
    }
    .preview-img {
        max-width: 300px;
    }
    .preview-img img {
        width: 100%;
        border-radius: var(--radius-md);
        border: 1px solid var(--border-default);
    }
    .error-box {
        color: var(--status-invalid);
        font-size: var(--text-sm);
        text-align: center;
    }
    .decoded-box {
        width: 100%;
        max-width: 600px;
    }
    .decoded-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--space-1);
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
    }
    .decoded-content {
        padding: var(--space-3);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        font-family: var(--font-mono);
        font-size: 14px;
        color: var(--text-primary);
        word-break: break-all;
    }
    .decoded-content pre {
        margin: 0;
        white-space: pre-wrap;
    }
    .link {
        color: var(--color-primary);
        text-decoration: underline;
    }
    .reset-btn {
        padding: var(--space-2) var(--space-4);
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        font-size: var(--text-sm);
        color: var(--text-secondary);
        cursor: pointer;
    }
    .reset-btn:hover {
        border-color: var(--border-focus);
    }
</style>
