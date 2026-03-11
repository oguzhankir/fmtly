<script lang="ts">
    import { input as inputStore } from "../../stores/input.store";
    import { cryptoOptions } from "../../stores/crypto.store";
    import { generateHmac } from "../../engines/crypto";
    import { Copy, Check } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    let message = $derived($inputStore);
    let keyInput = $state("");

    let copiedHex = $state(false);
    let copiedBase64 = $state(false);

    let timeoutHex: ReturnType<typeof setTimeout>;
    let timeoutBase64: ReturnType<typeof setTimeout>;

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text);
        addToast("success", "Copied to clipboard");
    }

    async function handleCopy(text: string, type: "hex" | "base64") {
        await copyToClipboard(text);
        if (type === "hex") {
            copiedHex = true;
            clearTimeout(timeoutHex);
            timeoutHex = setTimeout(() => (copiedHex = false), 2000);
        } else {
            copiedBase64 = true;
            clearTimeout(timeoutBase64);
            timeoutBase64 = setTimeout(() => (copiedBase64 = false), 2000);
        }
    }

    $effect(() => {
        async function updateHmac() {
            if (!message || !keyInput) {
                $cryptoOptions.hmacOutputHex = "";
                $cryptoOptions.hmacOutputBase64 = "";
                return;
            }

            try {
                const hex = await generateHmac(
                    message,
                    keyInput,
                    $cryptoOptions.hmacAlgorithm,
                );
                $cryptoOptions.hmacOutputHex = hex;

                // Convert to base64
                const hexArray =
                    hex.match(/.{1,2}/g)?.map((byte) => parseInt(byte, 16)) ||
                    [];
                const uint8Array = new Uint8Array(hexArray);
                // Modern native approach to encode uint8 array to base64
                const binaryString = String.fromCharCode(...uint8Array);
                $cryptoOptions.hmacOutputBase64 = btoa(binaryString);
            } catch (e) {
                $cryptoOptions.hmacOutputHex = "Error generating HMAC";
                $cryptoOptions.hmacOutputBase64 = "";
            }
        }

        updateHmac();
    });
</script>

<div
    class="flex h-full w-full flex-col gap-[var(--space-4)] overflow-y-auto bg-[var(--bg-base)] p-[var(--space-6)] text-[var(--text-primary)]"
>
    <div class="flex flex-col gap-[var(--space-2)]">
        <div>
            <span
                class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                >Secret Key</span
            >
        </div>
        <input
            type="text"
            bind:value={keyInput}
            placeholder="Enter your secret key here..."
            class="w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] outline-none focus-within:border-[var(--color-primary)] placeholder:text-[var(--text-muted)]"
        />
    </div>

    <div class="flex flex-col gap-[var(--space-2)]">
        <div>
            <span
                class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                >Algorithm</span
            >
        </div>
        <div class="flex gap-2">
            {#each ["SHA-256", "SHA-384", "SHA-512"] as alg}
                <button
                    class="px-4 py-2 rounded-md text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] transition-colors {$cryptoOptions.hmacAlgorithm ===
                    alg
                        ? 'bg-[var(--bg-selected)] text-[var(--text-primary)] border border-[var(--border-strong)]'
                        : 'bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-muted)] hover:bg-[var(--bg-hover)]'}"
                    onclick={() => ($cryptoOptions.hmacAlgorithm = alg as any)}
                >
                    {alg}
                </button>
            {/each}
        </div>
    </div>

    <div class="flex-1 min-h-[160px] flex flex-col gap-[var(--space-2)]">
        <div>
            <span
                class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                >Message</span
            >
        </div>
        <textarea
            bind:value={$inputStore}
            placeholder="Enter the message to hash..."
            class="w-full flex-1 resize-none rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)] text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] outline-none focus-within:border-[var(--color-primary)] placeholder:text-[var(--text-muted)]"
        ></textarea>
    </div>

    <!-- Outputs -->
    <div
        class="flex flex-col gap-[var(--space-4)] pt-4 border-t border-[var(--border-subtle)]"
    >
        <div class="flex flex-col gap-[var(--space-2)]">
            <div class="flex items-center justify-between">
                <div
                    class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                    >HMAC (Hex)</div
                >
                <button
                    onclick={() =>
                        handleCopy($cryptoOptions.hmacOutputHex, "hex")}
                    title="Copy hex"
                    disabled={!$cryptoOptions.hmacOutputHex}
                    class="flex items-center justify-center rounded-[var(--radius-sm)] p-1.5 text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-50"
                >
                    {#if copiedHex}
                        <Check size={16} class="text-[var(--color-success)]" />
                    {:else}
                        <Copy size={16} />
                    {/if}
                </button>
            </div>
            <div
                class="min-h-[42px] break-all rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-inset)] p-[var(--space-3)] text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] text-[var(--text-secondary)]"
            >
                {#if $cryptoOptions.hmacOutputHex}
                    {$cryptoOptions.hmacOutputHex}
                {:else}
                    <span class="text-[var(--text-muted)] opacity-50"
                        >Waiting for key and message...</span
                    >
                {/if}
            </div>
        </div>

        <div class="flex flex-col gap-[var(--space-2)]">
            <div class="flex items-center justify-between">
                <div
                    class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                    >HMAC (Base64)</div
                >
                <button
                    onclick={() =>
                        handleCopy($cryptoOptions.hmacOutputBase64, "base64")}
                    title="Copy base64"
                    disabled={!$cryptoOptions.hmacOutputBase64}
                    class="flex items-center justify-center rounded-[var(--radius-sm)] p-1.5 text-[var(--text-muted)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)] transition-colors disabled:opacity-50"
                >
                    {#if copiedBase64}
                        <Check size={16} class="text-[var(--color-success)]" />
                    {:else}
                        <Copy size={16} />
                    {/if}
                </button>
            </div>
            <div
                class="min-h-[42px] break-all rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-inset)] p-[var(--space-3)] text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] text-[var(--text-secondary)]"
            >
                {#if $cryptoOptions.hmacOutputBase64}
                    {$cryptoOptions.hmacOutputBase64}
                {:else}
                    <span class="text-[var(--text-muted)] opacity-50"
                        >Waiting for key and message...</span
                    >
                {/if}
            </div>
        </div>
    </div>
</div>
