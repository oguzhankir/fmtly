<script lang="ts">
    import { analyzeText, type UnicodeResult } from "../../engines/encoder";
    import { Copy } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";
    import { t } from '$lib/stores/language.js';

    let inputVal = $state("");

    // Try parsing it out dynamically on input
    let parsedResult = $derived.by(() => {
        if (!inputVal) return null;

        return analyzeText(inputVal);
    });

    let singleCharResult = $derived(
        parsedResult && parsedResult.length === 1 ? parsedResult[0] : null,
    );
    let multiCharResult = $derived(
        parsedResult && parsedResult.length > 1 ? parsedResult : null,
    );

    function copyToClipboard(text: string, label: string) {
        navigator.clipboard.writeText(text);
        addToast("success", ($t as any)('ui.unicode_inspector.toast.copy_success', 'Copied {{label}} to clipboard', { label }));
    }
</script>

<div class="flex flex-col h-full bg-[var(--bg-base)] overflow-hidden">
    <div
        class="p-[var(--space-6)] border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]"
    >
        <h2
            class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)] mb-[var(--space-4)]"
        >
            {$t('ui.unicode_inspector.title', 'Unicode Inspector')}
        </h2>

        <div class="relative w-full mb-[var(--space-6)]">
            <input
                type="text"
                bind:value={inputVal}
                placeholder={$t('ui.unicode_inspector.placeholder', 'Paste a character, emoji, or text string here...')}
                class="w-full min-h-[48px] p-[var(--space-4)] rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] text-[length:var(--text-base)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--border-focus)] font-mono"
            />
        </div>

        <!-- Single Character View -->
        {#if singleCharResult}
            <div class="grid grid-cols-2 md:grid-cols-3 gap-[var(--space-4)]">
                <div
                    class="flex flex-col p-[var(--space-4)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-overlay)]"
                >
                    <span
                        class="text-[length:var(--text-xs)] text-[var(--text-secondary)] uppercase tracking-wider mb-2"
                        >{$t('ui.unicode_inspector.labels.character', 'Character')}</span
                    >
                    <div class="flex items-center justify-between group">
                        <span
                            class="text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]"
                            >{singleCharResult.char}</span
                        >
                        <button
                            onclick={() =>
                                copyToClipboard(
                                    singleCharResult!.char,
                                    "Character",
                                )}
                            class="text-[var(--text-muted)] hover:text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity"
                            title={($t as any)('ui.unicode_inspector.tooltip.copy', 'Copy {{label}}', { label: $t('ui.unicode_inspector.labels.character', 'Character') })}
                        >
                            <Copy size={16} />
                        </button>
                    </div>
                </div>

                <div
                    class="flex flex-col p-[var(--space-4)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-overlay)]"
                >
                    <span
                        class="text-[length:var(--text-xs)] text-[var(--text-secondary)] uppercase tracking-wider mb-2"
                        >{$t('ui.unicode_inspector.labels.code_point', 'Code Point')}</span
                    >
                    <div class="flex items-center justify-between group">
                        <span
                            class="text-[length:var(--text-lg)] font-mono text-[var(--text-primary)]"
                            >{singleCharResult.codePoint}</span
                        >
                        <button
                            onclick={() =>
                                copyToClipboard(
                                    singleCharResult!.codePoint,
                                    "Code Point",
                                )}
                            class="text-[var(--text-muted)] hover:text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity"
                            title={($t as any)('ui.unicode_inspector.tooltip.copy', 'Copy {{label}}', { label: $t('ui.unicode_inspector.labels.code_point', 'Code Point') })}
                        >
                            <Copy size={16} />
                        </button>
                    </div>
                </div>

                <div
                    class="flex flex-col p-[var(--space-4)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-overlay)]"
                >
                    <span
                        class="text-[length:var(--text-xs)] text-[var(--text-secondary)] uppercase tracking-wider mb-2"
                        >{$t('ui.unicode_inspector.labels.html_entity', 'HTML Entity')}</span
                    >
                    <div class="flex items-center justify-between group">
                        <span
                            class="text-[length:var(--text-lg)] font-mono text-[var(--text-primary)]"
                            >{singleCharResult.htmlEntity}</span
                        >
                        <button
                            onclick={() =>
                                copyToClipboard(
                                    singleCharResult!.htmlEntity,
                                    "HTML Entity",
                                )}
                            class="text-[var(--text-muted)] hover:text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity"
                            title={($t as any)('ui.unicode_inspector.tooltip.copy', 'Copy {{label}}', { label: $t('ui.unicode_inspector.labels.html_entity', 'HTML Entity') })}
                        >
                            <Copy size={16} />
                        </button>
                    </div>
                </div>

                <div
                    class="flex flex-col p-[var(--space-4)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-overlay)]"
                >
                    <span
                        class="text-[length:var(--text-xs)] text-[var(--text-secondary)] uppercase tracking-wider mb-2"
                        >{$t('ui.unicode_inspector.labels.css_escape', 'CSS Escape')}</span
                    >
                    <div class="flex items-center justify-between group">
                        <span
                            class="text-[length:var(--text-lg)] font-mono text-[var(--text-primary)]"
                            >{singleCharResult.cssEscape}</span
                        >
                        <button
                            onclick={() =>
                                copyToClipboard(
                                    singleCharResult!.cssEscape,
                                    "CSS Escape",
                                )}
                            class="text-[var(--text-muted)] hover:text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity"
                            title={($t as any)('ui.unicode_inspector.tooltip.copy', 'Copy {{label}}', { label: $t('ui.unicode_inspector.labels.css_escape', 'CSS Escape') })}
                        >
                            <Copy size={16} />
                        </button>
                    </div>
                </div>

                <div
                    class="flex flex-col p-[var(--space-4)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-overlay)]"
                >
                    <span
                        class="text-[length:var(--text-xs)] text-[var(--text-secondary)] uppercase tracking-wider mb-2"
                        >{$t('ui.unicode_inspector.labels.js_escape', 'JS Escape')}</span
                    >
                    <div class="flex items-center justify-between group">
                        <span
                            class="text-[length:var(--text-lg)] font-mono text-[var(--text-primary)]"
                            >{singleCharResult.jsEscape}</span
                        >
                        <button
                            onclick={() =>
                                copyToClipboard(
                                    singleCharResult!.jsEscape,
                                    "JS Escape",
                                )}
                            class="text-[var(--text-muted)] hover:text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity"
                            title={($t as any)('ui.unicode_inspector.tooltip.copy', 'Copy {{label}}', { label: $t('ui.unicode_inspector.labels.js_escape', 'JS Escape') })}
                        >
                            <Copy size={16} />
                        </button>
                    </div>
                </div>

                <div
                    class="flex flex-col p-[var(--space-4)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-overlay)]"
                >
                    <span
                        class="text-[length:var(--text-xs)] text-[var(--text-secondary)] uppercase tracking-wider mb-2"
                        >{$t('ui.unicode_inspector.labels.utf8_bytes', 'UTF-8 Bytes')}</span
                    >
                    <div class="flex items-center justify-between group">
                        <span
                            class="text-[length:var(--text-sm)] font-mono text-[var(--text-primary)]"
                            >{singleCharResult.utf8Bytes}</span
                        >
                        <button
                            onclick={() =>
                                copyToClipboard(
                                    singleCharResult!.utf8Bytes,
                                    "UTF-8 Bytes",
                                )}
                            class="text-[var(--text-muted)] hover:text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity"
                            title={($t as any)('ui.unicode_inspector.tooltip.copy', 'Copy {{label}}', { label: $t('ui.unicode_inspector.labels.utf8_bytes', 'UTF-8 Bytes') })}
                        >
                            <Copy size={16} />
                        </button>
                    </div>
                </div>
            </div>
        {/if}
    </div>

    <!-- Multi Character Table View -->
    <div class="flex-1 overflow-auto p-[var(--space-6)]">
        {#if multiCharResult}
            <div
                class="rounded-[var(--radius-md)] border border-[var(--border-default)] overflow-hidden bg-[var(--bg-surface)]"
            >
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr
                            class="bg-[var(--bg-overlay)] border-b border-[var(--border-default)]"
                        >
                            <th
                                class="p-[var(--space-3)] text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                                >{$t('ui.unicode_inspector.table.char', 'Char')}</th
                            >
                            <th
                                class="p-[var(--space-3)] text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                                >{$t('ui.unicode_inspector.table.code_point', 'Code Point')}</th
                            >
                            <th
                                class="p-[var(--space-3)] text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                                >{$t('ui.unicode_inspector.table.html', 'HTML')}</th
                            >
                            <th
                                class="p-[var(--space-3)] text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                                >{$t('ui.unicode_inspector.table.css', 'CSS')}</th
                            >
                            <th
                                class="p-[var(--space-3)] text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                                >{$t('ui.unicode_inspector.table.js', 'JS')}</th
                            >
                            <th
                                class="p-[var(--space-3)] text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                                >{$t('ui.unicode_inspector.table.utf8', 'UTF-8 Bytes')}</th
                            >
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-[var(--border-subtle)]">
                        {#each multiCharResult as item}
                            <tr
                                class="hover:bg-[var(--bg-hover)] transition-colors"
                            >
                                <td
                                    class="p-[var(--space-3)] text-[length:var(--text-lg)] text-[var(--text-primary)]"
                                    >{item.char}</td
                                >
                                <td
                                    class="p-[var(--space-3)] text-[length:var(--text-sm)] font-mono text-[var(--text-primary)]"
                                    >{item.codePoint}</td
                                >
                                <td
                                    class="p-[var(--space-3)] text-[length:var(--text-sm)] font-mono text-[var(--text-primary)]"
                                    >{item.htmlEntity}</td
                                >
                                <td
                                    class="p-[var(--space-3)] text-[length:var(--text-sm)] font-mono text-[var(--text-primary)]"
                                    >{item.cssEscape}</td
                                >
                                <td
                                    class="p-[var(--space-3)] text-[length:var(--text-sm)] font-mono text-[var(--text-primary)]"
                                    >{item.jsEscape}</td
                                >
                                <td
                                    class="p-[var(--space-3)] text-[length:var(--text-sm)] font-mono text-[var(--text-primary)]"
                                    >{item.utf8Bytes}</td
                                >
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {:else if !singleCharResult && !inputVal}
            <div
                class="h-full flex items-center justify-center text-[var(--text-muted)] text-[length:var(--text-sm)]"
            >
                {$t('ui.unicode_inspector.empty_state', 'Enter text above to see the Unicode breakdown')}
            </div>
        {/if}
    </div>
</div>
