<script lang="ts">
    import { Download, Loader } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";
    import { t } from '$lib/stores/language.js';

    let input = $state(
        '[{"name":"Alice","email":"alice@example.com","age":30},\n{"name":"Bob","email":"bob@example.com","age":25}]',
    );
    let parsed = $state<Record<string, unknown>[]>([]);
    let columns = $state<string[]>([]);
    let error = $state<string | null>(null);
    let downloading = $state(false);

    function parseInput() {
        error = null;
        try {
            const data = JSON.parse(input);
            if (!Array.isArray(data)) {
                error = $t('ui.json_to_excel.error_not_array', 'JSON must be an array of objects.');
                parsed = [];
                columns = [];
                return;
            }
            parsed = data;
            columns = data.length > 0 ? Object.keys(data[0]) : [];
        } catch {
            error = $t('ui.json_to_excel.error_invalid', 'Invalid JSON.');
            parsed = [];
            columns = [];
        }
    }

    $effect(() => {
        parseInput();
    });

    async function downloadExcel() {
        if (parsed.length === 0) return;
        downloading = true;
        try {
            const engine = await import("../../engines/file/file.engine");
            const blob = await engine.jsonToExcel(parsed);
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "data.xlsx";
            a.click();
            URL.revokeObjectURL(url);
            addToast("success", $t('ui.json_to_excel.toast_success', 'Excel file downloaded'));
        } finally {
            downloading = false;
        }
    }
</script>

<div class="panel">
    <div class="input-section">
        <label for="json-input" class="label">{$t('ui.json_to_excel.label', 'JSON Array of Objects')}</label>
        <textarea
            id="json-input"
            bind:value={input}
            class="json-textarea"
            spellcheck="false"
        ></textarea>
    </div>

    {#if error}
        <p class="error-msg">{error}</p>
    {/if}

    {#if parsed.length > 0}
        <div class="output-section">
            <div class="output-header">
                <span class="meta"
                    >{($t as any)('ui.json_to_excel.preview_header', 'Preview — {{count}} of {{total}} rows', { count: Math.min(parsed.length, 20), total: parsed.length })}</span
                >
                <button
                    onclick={downloadExcel}
                    disabled={downloading}
                    class="action-btn"
                >
                    {#if downloading}<Loader
                            size={14}
                            class="spin"
                        />{:else}<Download size={14} />{/if} {$t('ui.json_to_excel.download_button', 'Download XLSX')}
                </button>
            </div>

            <div class="table-wrapper">
                <table class="preview-table">
                    <thead>
                        <tr
                            >{#each columns as col}<th>{col}</th>{/each}</tr
                        >
                    </thead>
                    <tbody>
                        {#each parsed.slice(0, 20) as row}
                            <tr
                                >{#each columns as col}<td
                                        >{String(row[col] ?? "")}</td
                                    >{/each}</tr
                            >
                        {/each}
                    </tbody>
                </table>
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
    .json-textarea {
        width: 100%;
        min-height: 140px;
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        padding: var(--space-3);
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-primary);
        resize: vertical;
        outline: none;
    }
    .json-textarea:focus {
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
    .output-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: var(--space-2);
    }
    .meta {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
    }
    .action-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-2) var(--space-4);
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
    .table-wrapper {
        overflow-x: auto;
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
    }
    .preview-table {
        width: 100%;
        border-collapse: collapse;
        font-size: var(--text-sm);
    }
    .preview-table th {
        text-align: left;
        padding: var(--space-2) var(--space-3);
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-default);
        font-weight: var(--weight-semibold);
        color: var(--text-secondary);
        font-size: var(--text-xs);
        white-space: nowrap;
    }
    .preview-table td {
        padding: var(--space-1) var(--space-3);
        border-bottom: 1px solid var(--border-default);
        color: var(--text-primary);
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
