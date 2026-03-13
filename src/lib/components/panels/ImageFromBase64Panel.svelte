<script lang="ts">
    import ImagePreview from "./ImagePreview.svelte";
    import { Download } from "lucide-svelte";
    import { t } from '$lib/stores/language.js';

    let input = $state("");
    let previewSrc = $state("");
    let detectedFormat = $state("");
    let imgWidth = $state(0);
    let imgHeight = $state(0);
    let blob: Blob | null = $state(null);
    let error = $state<string | null>(null);

    async function decode() {
        const trimmed = input.trim();
        if (!trimmed) {
            previewSrc = "";
            error = null;
            return;
        }
        error = null;

        try {
            const engine = await import("../../engines/image/image.engine");
            const b = await engine.base64ToBlob(trimmed);
            blob = b;
            detectedFormat = b.type || $t('ui.unknown', 'unknown');
            previewSrc = trimmed;

            // Get dimensions
            const img = new Image();
            img.src = trimmed;
            await new Promise<void>((resolve, reject) => {
                img.onload = () => {
                    imgWidth = img.naturalWidth;
                    imgHeight = img.naturalHeight;
                    resolve();
                };
                img.onerror = () => reject(new Error("Invalid image"));
            });
        } catch {
            error = $t('ui.error.invalid_base64', 'Invalid Base64 data URL. Must start with data:image/...');
            previewSrc = "";
            blob = null;
        }
    }

    $effect(() => {
        decode();
    });
</script>

<div class="panel">
    <div class="input-section">
        <label for="b64-input" class="label">{$t('ui.paste_base64_data_url', 'Paste Base64 Data URL')}</label>
        <textarea
            id="b64-input"
            bind:value={input}
            placeholder={$t('ui.placeholder.base64_example', 'data:image/png;base64,iVBOR...')}
            class="input-area"
            spellcheck="false"
        ></textarea>
    </div>

    {#if error}
        <p class="error-msg">{error}</p>
    {/if}

    {#if previewSrc && blob}
        <div class="output-section">
            <ImagePreview
                src={previewSrc}
                filename={`{$t('ui.image', 'image')}.${detectedFormat.split("/")[1] || $t('ui.png', 'png')}`}
                width={imgWidth}
                height={imgHeight}
                size={blob.size}
                downloadBlob={blob}
            />
            <div class="info-bar">
                <span>{$t('ui.format', 'Format')}: {detectedFormat}</span>
                <span>{imgWidth} × {imgHeight} {$t('ui.pixels', 'px')}</span>
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
        gap: var(--space-4);
        padding: var(--space-4);
    }
    .input-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }
    .label {
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        color: var(--text-secondary);
    }
    .input-area {
        width: 100%;
        min-height: 160px;
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
    .input-area:focus {
        border-color: var(--border-focus);
    }
    .error-msg {
        color: var(--status-invalid);
        font-size: var(--text-sm);
        margin: 0;
    }
    .output-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
    }
    .info-bar {
        display: flex;
        gap: var(--space-4);
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        flex-wrap: wrap;
    }
</style>
