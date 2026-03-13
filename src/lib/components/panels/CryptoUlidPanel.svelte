<script lang="ts">
    import { cryptoOptions } from "../../stores/crypto.store";
    import { generateUlidBulk } from "../../engines/crypto";
    import { Copy, RefreshCw, Check } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";
    import { t } from '$lib/stores/language.js';

    let generatedUlids = $state<string[]>([]);
    let copied = $state(false);
    let timeout: ReturnType<typeof setTimeout>;

    function generate() {
        const count = Math.max(1, Math.min(100, $cryptoOptions.ulidCount || 1));
        generatedUlids = generateUlidBulk(count);
    }

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text);
        addToast("success", $t('ui.copied_to_clipboard', 'Copied to clipboard'));
    }

    async function handleCopy() {
        if (generatedUlids.length === 0) return;
        await copyToClipboard(generatedUlids.join("\n"));
        copied = true;
        clearTimeout(timeout);
        timeout = setTimeout(() => (copied = false), 2000);
    }

    // Generate initially
    $effect(() => {
        if (generatedUlids.length === 0) {
            generate();
        }
    });
</script>

<div
    class="flex h-full w-full flex-col gap-[var(--space-6)] overflow-y-auto bg-[var(--bg-base)] p-[var(--space-6)] text-[var(--text-primary)]"
>
    <!-- Controls -->
    <div
        class="flex items-end gap-[var(--space-4)] pb-[var(--space-4)] border-b border-[var(--border-subtle)]"
    >
        <div class="flex flex-col gap-[var(--space-2)] flex-1 md:flex-none">
            <span
                class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                >{$t('ui.amount_to_generate', 'Amount to Generate')}</span
            >
            <input
                type="number"
                bind:value={$cryptoOptions.ulidCount}
                min="1"
                max="100"
                class="w-full md:w-32 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] outline-none focus-within:border-[var(--color-primary)] placeholder:text-[var(--text-muted)]"
            />
        </div>
        <button
            onclick={generate}
            class="flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--bg-selected)] px-4 py-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors border border-[var(--border-default)]"
        >
            <RefreshCw size={16} /> {$t('ui.generate_new', 'Generate New')}
        </button>
    </div>

    <!-- Output Area -->
    <div class="flex flex-col gap-[var(--space-2)] flex-1">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <span
                    class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                    >{$t('ui.generated_ulids', 'Generated ULIDs')}</span
                >
                <span
                    class="text-[length:var(--text-xs)] text-[var(--text-muted)] px-2 py-0.5 rounded bg-[var(--bg-surface)]"
                    >{generatedUlids.length} item{generatedUlids.length !== 1
                        ? "s"
                        : ""}</span
                >
            </div>
            <button
                onclick={handleCopy}
                title={$t('ui.copy_all', 'Copy all')}
                disabled={generatedUlids.length === 0}
                class="flex items-center gap-2 rounded-[var(--radius-sm)] px-3 py-1.5 text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-muted)] bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-50"
            >
                {#if copied}
                    <Check size={16} class="text-[var(--color-success)]" /> {$t('ui.copied', 'Copied')}
                {:else}
                    <Copy size={16} /> {$t('ui.copy_all', 'Copy All')}
                {/if}
            </button>
        </div>

        <div
            class="flex-1 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-inset)] p-[var(--space-3)] overflow-auto min-h-[200px]"
        >
            {#if generatedUlids.length > 0}
                <ul
                    class="flex flex-col gap-1 text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] text-[var(--text-primary)]"
                >
                    {#each generatedUlids as id}
                        <li
                            class="flex items-center gap-2 hover:bg-[var(--bg-hover)] p-1 rounded group"
                        >
                            <!-- Display with colored components for educational value -->
                            <span
                                class="text-[var(--color-primary)] opacity-80 group-hover:opacity-100 transition-opacity"
                                title={$t('ui.timestamp_component', 'Timestamp component (48 bits)')}
                                >{id.substring(0, 10)}</span
                            >
                            <span
                                class="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors"
                                title={$t('ui.randomness_component', 'Randomness component (80 bits)')}
                                >{id.substring(10)}</span
                            >
                        </li>
                    {/each}
                </ul>
            {:else}
                <div
                    class="flex h-full items-center justify-center text-[var(--text-muted)]"
                >
                    {$t('ui.no_ulids_generated', 'No ULIDs generated.')}
                </div>
            {/if}
        </div>
    </div>

    <!-- Information -->
    <div
        class="rounded-md bg-[var(--bg-surface)] p-[var(--space-4)] border border-[var(--border-default)]"
    >
        <h4
            class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)] mb-2"
        >
            {$t('ui.ulid_anatomy', 'ULID Anatomy')}
        </h4>
        <p
            class="text-[length:var(--text-sm)] text-[var(--text-secondary)] leading-relaxed"
        >
            {$t('ui.ulid_description', 'A ULID is a 128-bit identifier represented as a 26-character base32')}
            string. Unlike UUIDs, they are lexicographically sortable.
            <br /><br />
            <span class="font-[family-name:var(--font-mono)]"
                ><strong class="text-[var(--color-primary)]">01ARZ3NDEK</strong
                ><strong>TSV4RRFFQ69G5FAV</strong></span
            >
            <br />
            • {$t('ui.first_10_chars', 'First 10 chars:')}
            <span class="text-[var(--color-primary)]">{$t('ui.timestamp', 'Timestamp')}</span>
            (48 bits, precise to milliseconds, valid until 10889 AD)<br />
            • {$t('ui.last_16_chars', 'Last 16 chars:')} {$t('ui.randomness', 'Randomness')} (80 bits CSPRNG)
        </p>
    </div>
</div>
