<script lang="ts">
    import { cryptoOptions } from "../../stores/crypto.store";
    import { generateRandom } from "../../engines/crypto";
    import { Copy, RefreshCw, Check, CheckSquare, Square } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";
    import { t } from '$lib/stores/language.js';

    let generatedString = $state("");
    let copied = $state(false);
    let timeout: ReturnType<typeof setTimeout>;

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text);
        addToast("success", $t('ui.copied_to_clipboard', 'Copied to clipboard'));
    }

    // Ensure at least one character set is selected when checkboxes change
    function handleCheckboxChange(
        field:
            | "randomUppercase"
            | "randomLowercase"
            | "randomDigits"
            | "randomSymbols"
            | "randomExcludeAmbiguous",
    ) {
        $cryptoOptions[field] = !$cryptoOptions[field];

        // If all default classes are disabled, force lowercase on
        if (
            !$cryptoOptions.randomUppercase &&
            !$cryptoOptions.randomLowercase &&
            !$cryptoOptions.randomDigits &&
            !$cryptoOptions.randomSymbols &&
            !$cryptoOptions.randomCustomChars
        ) {
            $cryptoOptions.randomLowercase = true;
        }
        generate();
    }

    function generate() {
        const length = Math.max(
            1,
            Math.min(2048, $cryptoOptions.randomLength || 16),
        );
        generatedString = generateRandom({
            length,
            uppercase: $cryptoOptions.randomUppercase,
            lowercase: $cryptoOptions.randomLowercase,
            digits: $cryptoOptions.randomDigits,
            symbols: $cryptoOptions.randomSymbols,
            customChars: $cryptoOptions.randomCustomChars,
            excludeAmbiguous: $cryptoOptions.randomExcludeAmbiguous,
        });
    }

    async function handleCopy() {
        if (!generatedString) return;
        copyToClipboard(generatedString);
        copied = true;
        clearTimeout(timeout);
        timeout = setTimeout(() => (copied = false), 2000);
    }

    // Watch all reactive bounds for auto generation
    $effect(() => {
        // Just accessing them tracks them
        const _ = $cryptoOptions;
        generate();
    });
</script>

```html
<div
    class="flex h-full w-full flex-col gap-[var(--space-6)] overflow-y-auto bg-[var(--bg-base)] p-[var(--space-6)] text-[var(--text-primary)]"
>
    <!-- Output Display -->
    <div class="flex flex-col gap-[var(--space-2)]">
        <div class="flex items-center justify-between">
            <span
                class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                >{$t('ui.generated_output', 'Generated Output')}</span
            >
            <button
                onclick={generate}
                class="flex items-center gap-1.5 text-[length:var(--text-sm)] text-[var(--color-primary)] hover:opacity-80 transition-opacity"
            >
                <RefreshCw size={14} /> {$t('ui.regenerate', 'Re-generate')}
            </button>
        </div>

        <div class="relative min-h-[100px] flex items-stretch">
            <div
                class="flex-1 w-full break-all rounded-l-[var(--radius-md)] border-y border-l border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)] text-[length:var(--text-lg)] font-[family-name:var(--font-mono)] text-[var(--text-primary)]"
            >
                {generatedString}
            </div>
            <button
                onclick={handleCopy}
                title={$t('ui.copy_to_clipboard', 'Copy to clipboard')}
                class="flex w-16 flex-col items-center justify-center gap-1 rounded-r-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-selected)] text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors"
            >
                {#if copied}
                    <Check size={20} class="text-[var(--color-success)]" />
                    <span
                        class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--color-success)]"
                        >{$t('ui.copied', 'Copied')}!</span
                    >
                {:else}
                    <Copy size={20} />
                    <span
                        class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)]"
                        >{$t('ui.copy', 'Copy')}</span
                    >
                {/if}
            </button>
        </div>
    </div>

    <!-- Configuration Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-6)] pt-2">
        <!-- Left Column Settings -->
        <div class="flex flex-col gap-[var(--space-6)]">
            <!-- Length slider -->
            <div class="flex flex-col gap-[var(--space-4)]">
                <div class="flex items-center justify-between">
                    <div
                        class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                        >{$t('ui.length', 'Length')}</div
                    >
                    <input
                        type="number"
                        bind:value={$cryptoOptions.randomLength}
                        min="1"
                        max="2048"
                        class="w-20 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-2 py-1 text-right text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] outline-none"
                    />
                </div>
                <input
                    type="range"
                    bind:value={$cryptoOptions.randomLength}
                    min="1"
                    max="128"
                    class="w-full accent-[var(--color-primary)]"
                />
            </div>

            <!-- Checkboxes -->
            <div class="flex flex-col gap-[var(--space-3)]">
                <span
                    class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                    >{$t('ui.character_classes', 'Character Classes')}</span
                >

                <div class="grid grid-cols-2 gap-3">
                    <button
                        onclick={() => handleCheckboxChange("randomUppercase")}
                        class="flex items-center gap-3 text-left"
                    >
                        {#if $cryptoOptions.randomUppercase}<CheckSquare
                                class="text-[var(--color-primary)]"
                                size={18}
                            />{:else}<Square
                                class="text-[var(--text-muted)]"
                                size={18}
                            />{/if}
                        <span
                            class="text-[length:var(--text-sm)] text-[var(--text-primary)]"
                            >{$t('ui.uppercase', 'Uppercase')} (A-Z)</span
                        >
                    </button>

                    <button
                        onclick={() => handleCheckboxChange("randomLowercase")}
                        class="flex items-center gap-3 text-left"
                    >
                        {#if $cryptoOptions.randomLowercase}<CheckSquare
                                class="text-[var(--color-primary)]"
                                size={18}
                            />{:else}<Square
                                class="text-[var(--text-muted)]"
                                size={18}
                            />{/if}
                        <span
                            class="text-[length:var(--text-sm)] text-[var(--text-primary)]"
                            >{$t('ui.lowercase_az', 'Lowercase (a-z)')}</span
                        >
                    </button>

                    <button
                        onclick={() => handleCheckboxChange("randomDigits")}
                        class="flex items-center gap-3 text-left"
                    >
                        {#if $cryptoOptions.randomDigits}<CheckSquare
                                class="text-[var(--color-primary)]"
                                size={18}
                            />{:else}<Square
                                class="text-[var(--text-muted)]"
                                size={18}
                            />{/if}
                        <span
                            class="text-[length:var(--text-sm)] text-[var(--text-primary)]"
                            >{$t('ui.numbers_09', 'Numbers (0-9)')}</span
                        >
                    </button>

                    <button
                        onclick={() => handleCheckboxChange("randomSymbols")}
                        class="flex items-center gap-3 text-left"
                    >
                        {#if $cryptoOptions.randomSymbols}<CheckSquare
                                class="text-[var(--color-primary)]"
                                size={18}
                            />{:else}<Square
                                class="text-[var(--text-muted)]"
                                size={18}
                            />{/if}
                        <span
                            class="text-[length:var(--text-sm)] text-[var(--text-primary)]"
                            >{$t('ui.symbols_special', 'Symbols (!@#$)')}</span
                        >
                    </button>
                </div>
            </div>
        </div>

        <!-- Right Column Settings -->
        <div class="flex flex-col gap-[var(--space-6)]">
            <!-- Custom Characters -->
            <div class="flex flex-col gap-[var(--space-2)]">
                <span
                    class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                    >{$t('ui.custom_characters_override', 'Custom Characters (Overrides classes)')}</span
                >
                <input
                    type="text"
                    bind:value={$cryptoOptions.randomCustomChars}
                    placeholder={$t('ui.placeholder.custom_chars', 'e.g. ABCDFGH')}
                    class="w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] outline-none focus-within:border-[var(--color-primary)] placeholder:text-[var(--text-muted)]"
                />
            </div>

            <!-- Exclude Ambiguous -->
            <div class="flex flex-col gap-[var(--space-3)] pt-2">
                <button
                    onclick={() =>
                        handleCheckboxChange("randomExcludeAmbiguous")}
                    class="flex items-center gap-3 text-left"
                >
                    {#if $cryptoOptions.randomExcludeAmbiguous}<CheckSquare
                            class="text-[var(--color-primary)]"
                            size={18}
                        />{:else}<Square
                            class="text-[var(--text-muted)]"
                            size={18}
                        />{/if}
                    <span
                        class="text-[length:var(--text-sm)] text-[var(--text-primary)]"
                        >{$t('ui.exclude_ambiguous', 'Exclude ambiguous characters')}</span
                    >
                </button>
                <p
                    class="text-[length:var(--text-xs)] text-[var(--text-muted)] pl-7"
                >
                    {$t('ui.exclude_ambiguous_desc', 'Removes characters that are hard to distinguish from one another like: 1, l, I, 0, O')}
                    another like: 1, l, I, 0, O
                </p>
            </div>
        </div>
    </div>
</div>
