<script lang="ts">
    import PdfDropZone from "./PdfDropZone.svelte";
    import { Copy, Check, Loader } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";
    import { t } from '$lib/stores/language.js';

    let file: globalThis.File | null = $state(null);
    let fileName = $state("");
    let fileSize = $state(0);
    let hashing = $state(false);
    let hashes = $state<Record<string, string>>({});
    let algorithms = $state({ "SHA-256": true, "SHA-512": true, MD5: true });
    let copiedKey = $state("");

    async function handleFiles(files: globalThis.File[]) {
        const f = files[0];
        if (!f) return;
        file = f;
        fileName = f.name;
        fileSize = f.size;
        await computeHashes();
    }

    async function computeHashes() {
        if (!file) return;
        hashing = true;
        hashes = {};
        const buffer = await file.arrayBuffer();
        const engine = await import("../../engines/file/file.engine");
        const algs = Object.entries(algorithms)
            .filter(([, v]) => v)
            .map(([k]) => k as "SHA-256" | "SHA-512" | "MD5");
        for (const alg of algs) {
            hashes[alg] = await engine.hashFile(buffer, alg);
            hashes = { ...hashes };
        }
        hashing = false;
    }

    function copyHash(alg: string) {
        if (!hashes[alg]) return;
        navigator.clipboard.writeText(hashes[alg]);
        addToast("success", ($t as any)('ui.hash_copied', '{alg} hash copied', { alg }));
        copiedKey = alg;
        setTimeout(() => {
            copiedKey = "";
        }, 2000);
    }

    function formatSize(b: number): string {
        if (b < 1024) return `${b} B`;
        if (b < 1048576) return `${(b / 1024).toFixed(1)} KB`;
        return `${(b / 1048576).toFixed(1)} MB`;
    }
</script>

<div class="panel">
    {#if !file}
        <div class="drop-wrapper">
            <PdfDropZone
                onfiles={handleFiles}
                accept="*/*"
                label={$t('ui.drop_any_file_hash', 'Drop any file to calculate hash')}
            />
        </div>
    {:else}
        <div class="toolbar">
            <span class="file-info">{fileName} — {formatSize(fileSize)}</span>
        </div>

        <div class="hash-results">
            {#each Object.entries(hashes) as [alg, hash]}
                <div class="hash-row">
                    <div class="hash-label">{alg}</div>
                    <div class="hash-value">
                        <code>{hash}</code>
                        <button onclick={() => copyHash(alg)} class="copy-btn">
                            {#if copiedKey === alg}<Check
                                    size={12}
                                />{:else}<Copy size={12} />{/if}
                        </button>
                    </div>
                </div>
            {/each}

            {#if hashing}
                <div class="hashing">
                    <Loader size={16} class="spin" /> {$t('ui.computing', 'Computing…')}
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
    .toolbar {
        display: flex;
        align-items: center;
        padding: var(--space-2) var(--space-4);
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-default);
        flex-shrink: 0;
    }
    .file-info {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
    }
    .hash-results {
        padding: var(--space-4);
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
    }
    .hash-row {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }
    .hash-label {
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        color: var(--text-secondary);
    }
    .hash-value {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-2) var(--space-3);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        overflow: hidden;
    }
    .hash-value code {
        flex: 1;
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-primary);
        word-break: break-all;
        line-height: 1.5;
    }
    .copy-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-sm);
        color: var(--text-secondary);
        cursor: pointer;
    }
    .copy-btn:hover {
        border-color: var(--border-focus);
    }
    .hashing {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        font-size: var(--text-sm);
        color: var(--text-tertiary);
    }
</style>
