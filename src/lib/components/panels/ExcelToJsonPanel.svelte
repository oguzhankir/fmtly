<script lang="ts">
    import PdfDropZone from "./PdfDropZone.svelte";
    import { Copy, Check, Loader } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    let jsonOutput = $state("");
    let sheetNames = $state<string[]>([]);
    let activeSheet = $state("");
    let allData: Record<string, unknown[]> = $state({});
    let loading = $state(false);
    let copied = $state(false);

    async function handleFiles(files: globalThis.File[]) {
        const f = files[0];
        if (!f) return;
        loading = true;
        try {
            const buffer = await f.arrayBuffer();
            const engine = await import("../../engines/file/file.engine");
            allData = await engine.excelToJson(buffer);
            sheetNames = Object.keys(allData);
            activeSheet = sheetNames[0] ?? "";
            if (activeSheet)
                jsonOutput = JSON.stringify(allData[activeSheet], null, 2);
        } finally {
            loading = false;
        }
    }

    function selectSheet(name: string) {
        activeSheet = name;
        jsonOutput = JSON.stringify(allData[name], null, 2);
    }

    function copyJson() {
        if (!jsonOutput) return;
        navigator.clipboard.writeText(jsonOutput);
        addToast("success", "JSON copied");
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }
</script>

<div class="panel">
    {#if sheetNames.length === 0 && !loading}
        <div class="drop-wrapper">
            <PdfDropZone
                onfiles={handleFiles}
                accept=".xlsx,.xls,.csv,.ods"
                label="Drop Excel file here (.xlsx, .xls)"
            />
        </div>
    {:else if loading}
        <div class="loading-center">
            <Loader size={24} class="spin" />
            <p>Parsing Excel…</p>
        </div>
    {:else}
        {#if sheetNames.length > 1}
            <div class="sheet-tabs">
                {#each sheetNames as name}
                    <button
                        onclick={() => selectSheet(name)}
                        class="tab"
                        class:active={activeSheet === name}>{name}</button
                    >
                {/each}
            </div>
        {/if}

        <div class="output-section">
            <div class="output-header">
                <span class="label"
                    >{activeSheet} — {allData[activeSheet]?.length ?? 0} rows</span
                >
                <button onclick={copyJson} class="copy-btn">
                    {#if copied}<Check size={12} />{:else}<Copy
                            size={12}
                        />{/if} Copy
                </button>
            </div>
            <textarea
                value={jsonOutput}
                readonly
                class="json-textarea"
                spellcheck="false"
            ></textarea>
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
    .sheet-tabs {
        display: flex;
        gap: var(--space-1);
        padding: var(--space-2) var(--space-4);
        border-bottom: 1px solid var(--border-default);
        background: var(--bg-surface);
        flex-shrink: 0;
        flex-wrap: wrap;
    }
    .tab {
        padding: var(--space-1) var(--space-3);
        border-radius: var(--radius-md);
        font-size: var(--text-xs);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        color: var(--text-secondary);
        cursor: pointer;
    }
    .tab:hover {
        border-color: var(--border-focus);
    }
    .tab.active {
        background: var(--color-primary);
        color: #fff;
        border-color: var(--color-primary);
    }
    .output-section {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: var(--space-4);
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
    }
    .json-textarea {
        flex: 1;
        width: 100%;
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        padding: var(--space-3);
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-primary);
        resize: none;
        outline: none;
        min-height: 300px;
    }
</style>
