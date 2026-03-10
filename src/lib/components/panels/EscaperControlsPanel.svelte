<script lang="ts">
    import { escapeOptions } from "../../stores/escape.store";

    let { toolSlug }: { toolSlug: string } = $props();

    const dialects = [
        { value: "mysql", label: "MySQL" },
        { value: "postgres", label: "PostgreSQL" },
        { value: "sqlite", label: "SQLite" },
    ];

    function updateOption(value: string) {
        escapeOptions.update((opts) => ({ ...opts, sqlDialect: value as any }));
    }
</script>

<div
    class="flex items-center gap-[var(--space-4)] border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-4)] py-[var(--space-2)] overflow-x-auto"
>
    {#if toolSlug === "sql"}
        <label class="flex flex-col gap-1 whitespace-nowrap">
            <span
                class="text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                >SQL Dialect</span
            >
            <select
                class="h-8 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-2 text-[length:var(--text-sm)] text-[var(--text-primary)] focus:border-[var(--border-focus)] focus:outline-none"
                value={$escapeOptions.sqlDialect}
                onchange={(e) => updateOption(e.currentTarget.value)}
            >
                {#each dialects as opt}
                    <option value={opt.value}>{opt.label}</option>
                {/each}
            </select>
        </label>
    {/if}
</div>
