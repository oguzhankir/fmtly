<script lang="ts">
    import { curlToFetch, curlToAxios } from "../../engines/code/curl.engine";
    import { Copy, Check } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    type Props = {
        mode: "fetch" | "axios";
        sampleInput?: string;
    };

    let { mode, sampleInput = "" }: Props = $props();

    let input = $state("");
    let copied = $state(false);

    let output = $derived(
        (() => {
            if (!input.trim()) return "";
            try {
                return mode === "fetch"
                    ? curlToFetch(input)
                    : curlToAxios(input);
            } catch (e) {
                return `// Error: ${e instanceof Error ? e.message : String(e)}`;
            }
        })(),
    );

    $effect(() => {
        input = sampleInput;
    });

    function copy() {
        if (!output) return;
        navigator.clipboard.writeText(output);
        addToast("success", "Copied code");
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }
</script>

<div class="curl-panel">
    <div class="toolbar">
        <span class="toolbar-title">
            {mode === "fetch" ? "cURL → fetch()" : "cURL → axios()"}
        </span>
        <div class="toolbar-right">
            {#if output}
                <button onclick={copy} class="copy-btn">
                    {#if copied}<Check size={13} />{:else}<Copy
                            size={13}
                        />{/if}
                    Copy output
                </button>
            {/if}
        </div>
    </div>

    <div class="split">
        <div class="pane">
            <div class="pane-label">cURL Command</div>
            <textarea
                bind:value={input}
                placeholder="curl -X POST https://api.example.com/users"
                spellcheck="false"
                class="code-textarea"
            ></textarea>
        </div>

        <div class="pane">
            <div class="pane-label">
                {mode === "fetch" ? "JavaScript fetch()" : "JavaScript axios()"}
            </div>
            <textarea
                value={output}
                readonly
                spellcheck="false"
                class="code-textarea output-textarea"
                placeholder="Output will appear here…"
            ></textarea>
        </div>
    </div>
</div>

<style>
    .curl-panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
    }
    .toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-2) var(--space-4);
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-default);
        flex-shrink: 0;
    }
    .toolbar-title {
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        color: var(--text-secondary);
        font-family: var(--font-mono);
    }
    .toolbar-right {
        display: flex;
        align-items: center;
        gap: var(--space-2);
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
        color: var(--text-primary);
    }
    .split {
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex: 1;
        overflow: hidden;
        min-height: 0;
    }
    .pane {
        display: flex;
        flex-direction: column;
        border-right: 1px solid var(--border-default);
        overflow: hidden;
    }
    .pane:last-child {
        border-right: none;
    }
    .pane-label {
        padding: var(--space-1) var(--space-3);
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--text-tertiary);
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-subtle);
        flex-shrink: 0;
    }
    .code-textarea {
        flex: 1;
        width: 100%;
        background: var(--bg-base);
        border: none;
        padding: var(--space-4);
        font-family: var(--font-mono);
        font-size: 13px;
        line-height: 1.6;
        color: var(--text-primary);
        resize: none;
        outline: none;
    }
    .output-textarea {
        color: var(--text-secondary);
    }
    @media (max-width: 640px) {
        .split {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }
        .pane {
            border-right: none;
            border-bottom: 1px solid var(--border-default);
        }
    }
</style>
