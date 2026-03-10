<script lang="ts">
    import { analyzeText, type UnicodeResult } from "../../engines/encoder";
    import { Copy } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

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
        addToast("success", `Copied ${label} to clipboard`);
    }
</script>

<div class="flex flex-col h-full bg-[var(--bg-base)] overflow-hidden">
    <div
        class="p-[var(--space-6)] border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]"
    >
        <h2
            class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)] mb-[var(--space-4)]"
        >
            Unicode Inspector
        </h2>

        <div class="relative w-full mb-[var(--space-6)]">
            <input
                type="text"
                bind:value={inputVal}
                placeholder="Paste a character, emoji, or text string here..."
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
                        >Character</span
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
                            title="Copy Character"
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
                        >Code Point</span
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
                            title="Copy Code Point"
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
                        >HTML Entity</span
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
                            title="Copy HTML Entity"
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
                        >CSS Escape</span
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
                            title="Copy CSS Escape"
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
                        >JS Escape</span
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
                            title="Copy JS Escape"
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
                        >UTF-8 Bytes</span
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
                            title="Copy UTF-8 Bytes"
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
                                >Char</th
                            >
                            <th
                                class="p-[var(--space-3)] text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                                >Code Point</th
                            >
                            <th
                                class="p-[var(--space-3)] text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                                >HTML</th
                            >
                            <th
                                class="p-[var(--space-3)] text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                                >CSS</th
                            >
                            <th
                                class="p-[var(--space-3)] text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                                >JS</th
                            >
                            <th
                                class="p-[var(--space-3)] text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider"
                                >UTF-8 Bytes</th
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
                Enter text above to see the Unicode breakdown
            </div>
        {/if}
    </div>
</div>
