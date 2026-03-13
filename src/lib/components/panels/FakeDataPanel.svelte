<script lang="ts">
    import { Trash2, Plus, Download, Copy, Check, Loader } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";
    import {
        FIELD_TYPES,
        PRESETS,
        type FakeDataSchema,
    } from "../../engines/generator/faker.engine";
    import { browser } from "$app/environment";
    import { t } from '$lib/stores/language.js';

    const STORAGE_KEY = "fmtly-fake-data-schema";

    type SchemaField = { name: string; type: string };

    let fields = $state<SchemaField[]>(loadSchema());
    let count = $state(10);
    let outputFormat = $state<"json" | "csv" | "sql">("json");
    let generatedOutput = $state("");
    let generating = $state(false);
    let copied = $state(false);

    function loadSchema(): SchemaField[] {
        if (!browser)
            return [
                { name: "id", type: "uuid" },
                { name: "name", type: "fullName" },
                { name: "email", type: "email" },
            ];
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) return JSON.parse(saved);
        } catch {
            /* ignore */
        }
        return [
            { name: "id", type: "uuid" },
            { name: "name", type: "fullName" },
            { name: "email", type: "email" },
        ];
    }

    function saveSchema() {
        if (browser) localStorage.setItem(STORAGE_KEY, JSON.stringify(fields));
    }

    function addField() {
        fields = [...fields, { name: "", type: "fullName" }];
        saveSchema();
    }

    function removeField(i: number) {
        fields = fields.filter((_, idx) => idx !== i);
        saveSchema();
    }

    function updateField(i: number, key: "name" | "type", value: string) {
        fields = fields.map((f, idx) =>
            idx === i ? { ...f, [key]: value } : f,
        );
        saveSchema();
    }

    function applyPreset(presetName: string) {
        const preset = PRESETS[presetName];
        if (!preset) return;
        fields = Object.entries(preset).map(([name, type]) => ({ name, type }));
        saveSchema();
    }

    async function generate() {
        const schema: FakeDataSchema = {};
        for (const f of fields) {
            if (f.name.trim()) schema[f.name.trim()] = f.type;
        }
        if (Object.keys(schema).length === 0) return;

        generating = true;
        try {
            const engine = await import("../../engines/generator/faker.engine");
            generatedOutput = await engine.generateFakeData(
                schema,
                count,
                outputFormat,
            );
        } finally {
            generating = false;
        }
    }

    function copyOutput() {
        if (!generatedOutput) return;
        navigator.clipboard.writeText(generatedOutput);
        addToast("success", $t('ui.data_copied', 'Data copied'));
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }

    function downloadOutput() {
        if (!generatedOutput) return;
        const ext =
            outputFormat === "json"
                ? "json"
                : outputFormat === "csv"
                  ? "csv"
                  : "sql";
        const mime =
            outputFormat === "json" ? "application/json" : "text/plain";
        const blob = new Blob([generatedOutput], { type: mime });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `fake-data.${ext}`;
        a.click();
        URL.revokeObjectURL(url);
    }
</script>

<div class="panel">
    <div class="left">
        <div class="section-header">
            <span class="title">{$t('ui.fake_data.schema_builder', 'Schema Builder')}</span>
            <div class="presets">
                {#each Object.keys(PRESETS) as name}
                    <button onclick={() => applyPreset(name)} class="preset-btn"
                        >{name}</button
                    >
                {/each}
            </div>
        </div>

        <div class="fields-list">
            {#each fields as field, i}
                <div class="field-row">
                    <input
                        type="text"
                        value={field.name}
                        oninput={(e) =>
                            updateField(
                                i,
                                "name",
                                (e.target as HTMLInputElement).value,
                            )}
                        placeholder={$t('ui.fake_data.field_name_placeholder', 'field name')}
                        class="field-name"
                    />
                    <select
                        value={field.type}
                        onchange={(e) =>
                            updateField(
                                i,
                                "type",
                                (e.target as HTMLSelectElement).value,
                            )}
                        class="field-type"
                    >
                        {#each FIELD_TYPES as ft}
                            <option value={ft}>{ft}</option>
                        {/each}
                    </select>
                    <button onclick={() => removeField(i)} class="rm-btn"
                        ><Trash2 size={12} /></button
                    >
                </div>
            {/each}
        </div>

        <button onclick={addField} class="add-btn"
            ><Plus size={12} /> {$t('ui.fake_data.add_field', 'Add Field')}</button
        >

        <div class="controls">
            <label class="ctrl">
                <span class="lbl">($t as any)('ui.fake_data.count_label', 'Count ({count})', { count })</span>
                <input
                    type="range"
                    bind:value={count}
                    min="1"
                    max="1000"
                    step="1"
                    class="slider"
                />
            </label>
            <div class="format-row">
                <span class="lbl">{$t('ui.format', 'Format')}</span>
                <label class="radio-lbl"
                    ><input
                        type="radio"
                        bind:group={outputFormat}
                        value="json"
                    /> JSON</label
                >
                <label class="radio-lbl"
                    ><input
                        type="radio"
                        bind:group={outputFormat}
                        value="csv"
                    /> CSV</label
                >
                <label class="radio-lbl"
                    ><input
                        type="radio"
                        bind:group={outputFormat}
                        value="sql"
                    /> SQL</label
                >
            </div>
        </div>

        <button
            onclick={generate}
            disabled={generating || fields.every((f) => !f.name.trim())}
            class="generate-btn"
        >
            {#if generating}<Loader size={14} class="spin" />{/if} {($t as any)('ui.fake_data.generate_button', 'Generate {count} Rows', { count })}
            Rows
        </button>
    </div>

    <div class="right">
        {#if generatedOutput}
            <div class="output-header">
                <span class="meta">{outputFormat.toUpperCase()} {$t('ui.output', 'output')}</span>
                <div class="output-actions">
                    <button onclick={copyOutput} class="sm-btn">
                        {#if copied}<Check size={12} />{:else}<Copy
                                size={12}
                            />{/if}
                    </button>
                    <button onclick={downloadOutput} class="sm-btn"
                        ><Download size={12} /></button
                    >
                </div>
            </div>
            <textarea
                value={generatedOutput}
                readonly
                class="output-area"
                spellcheck="false"
            ></textarea>
        {:else}
            <div class="empty-right">
                <p>{$t('ui.fake_data.empty_state', 'Configure schema and click Generate')}</p>
            </div>
        {/if}
    </div>
</div>

<style>
    .panel {
        display: grid;
        grid-template-columns: 360px 1fr;
        height: 100%;
        overflow: hidden;
    }
    @media (max-width: 768px) {
        .panel {
            grid-template-columns: 1fr;
        }
    }
    .left {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        padding: var(--space-4);
        border-right: 1px solid var(--border-default);
        overflow: auto;
    }
    .right {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: var(--space-2);
    }
    .title {
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        color: var(--text-primary);
    }
    .presets {
        display: flex;
        gap: var(--space-1);
        flex-wrap: wrap;
    }
    .preset-btn {
        padding: 2px var(--space-2);
        font-size: 10px;
        border-radius: var(--radius-sm);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        color: var(--text-tertiary);
        cursor: pointer;
    }
    .preset-btn:hover {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }
    .fields-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }
    .field-row {
        display: flex;
        gap: var(--space-1);
        align-items: center;
    }
    .field-name {
        flex: 1;
        padding: var(--space-1) var(--space-2);
        font-size: var(--text-xs);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-sm);
        color: var(--text-primary);
        outline: none;
        font-family: var(--font-mono);
    }
    .field-name:focus {
        border-color: var(--border-focus);
    }
    .field-type {
        width: 120px;
        padding: var(--space-1);
        font-size: var(--text-xs);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-sm);
        color: var(--text-primary);
    }
    .rm-btn {
        width: 22px;
        height: 22px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-sm);
        color: var(--text-secondary);
        cursor: pointer;
    }
    .rm-btn:hover {
        color: var(--status-invalid);
        border-color: var(--status-invalid);
    }
    .add-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-1);
        align-self: flex-start;
        padding: var(--space-1) var(--space-3);
        font-size: var(--text-xs);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        color: var(--text-secondary);
        cursor: pointer;
    }
    .add-btn:hover {
        border-color: var(--border-focus);
    }
    .controls {
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
        padding-top: var(--space-2);
        border-top: 1px solid var(--border-default);
    }
    .ctrl {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .lbl {
        font-size: var(--text-xs);
        color: var(--text-secondary);
        font-weight: var(--weight-medium);
    }
    .slider {
        width: 100%;
    }
    .format-row {
        display: flex;
        align-items: center;
        gap: var(--space-3);
    }
    .radio-lbl {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: var(--text-xs);
        color: var(--text-primary);
        cursor: pointer;
    }
    .generate-btn {
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
    .generate-btn:hover:not(:disabled) {
        opacity: 0.9;
    }
    .generate-btn:disabled {
        opacity: 0.5;
        cursor: default;
    }
    .output-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-2) var(--space-3);
        border-bottom: 1px solid var(--border-default);
        background: var(--bg-surface);
        flex-shrink: 0;
    }
    .meta {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        font-weight: var(--weight-medium);
    }
    .output-actions {
        display: flex;
        gap: var(--space-1);
    }
    .sm-btn {
        width: 24px;
        height: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-sm);
        color: var(--text-secondary);
        cursor: pointer;
    }
    .sm-btn:hover {
        border-color: var(--border-focus);
    }
    .output-area {
        flex: 1;
        width: 100%;
        background: var(--bg-base);
        border: none;
        padding: var(--space-3);
        font-family: var(--font-mono);
        font-size: 12px;
        color: var(--text-primary);
        resize: none;
        outline: none;
    }
    .empty-right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-tertiary);
    }
</style>
