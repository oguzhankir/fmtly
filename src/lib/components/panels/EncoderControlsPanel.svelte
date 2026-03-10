<script lang="ts">
    import { encodeOptions } from "../../stores/encode.store";

    let { toolSlug }: { toolSlug: string } = $props();

    const options = [
        { value: "named", label: "Named (&amp;)" },
        { value: "numeric", label: "Numeric (&#38;)" },
        { value: "hex", label: "Hex (&#x26;)" },
    ];

    function updateOption(value: string) {
        encodeOptions.update((opts) => ({
            ...opts,
            htmlEntitiesMode: value as any,
        }));
    }
</script>

<div
    class="flex items-center gap-[var(--space-4)] border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-4)] py-[var(--space-2)] overflow-x-auto"
>
    {#if toolSlug === "html-entities"}
        <label class="flex flex-col gap-1 whitespace-nowrap">
            <span
                class="text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                >Entity Mode</span
            >
            <select
                class="h-8 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-2 text-[length:var(--text-sm)] text-[var(--text-primary)] focus:border-[var(--border-focus)] focus:outline-none"
                value={$encodeOptions.htmlEntitiesMode}
                onchange={(e) => updateOption(e.currentTarget.value)}
            >
                {#each options as opt}
                    <option value={opt.value}>{opt.label}</option>
                {/each}
            </select>
        </label>
    {/if}
</div>
