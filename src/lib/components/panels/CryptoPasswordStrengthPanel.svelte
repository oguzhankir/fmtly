<script lang="ts">
    import { cryptoOptions } from "../../stores/crypto.store";
    import { checkStrength } from "../../engines/crypto";
    import { Eye, EyeOff, ShieldAlert, ShieldCheck } from "lucide-svelte";

    let passwordInfo = $derived(checkStrength($cryptoOptions.passwordInput));

    function getScoreColor(score: number): string {
        switch (score) {
            case 0:
                return "bg-red-500";
            case 1:
                return "bg-orange-500";
            case 2:
                return "bg-yellow-500";
            case 3:
                return "bg-lime-500";
            case 4:
                return "bg-green-500";
            default:
                return "bg-[var(--bg-surface)]";
        }
    }

    function getScoreTextClass(score: number): string {
        switch (score) {
            case 0:
                return "text-red-500";
            case 1:
                return "text-orange-500";
            case 2:
                return "text-yellow-500";
            case 3:
                return "text-lime-500";
            case 4:
                return "text-green-500";
            default:
                return "text-[var(--text-secondary)]";
        }
    }
</script>

<div
    class="flex h-full w-full flex-col gap-[var(--space-6)] overflow-y-auto bg-[var(--bg-base)] p-[var(--space-6)] text-[var(--text-primary)]"
>
    <!-- Disclaimer -->
    <div
        class="flex items-center gap-2 rounded-md bg-[var(--bg-surface)] p-3 text-[length:var(--text-sm)] text-[var(--text-secondary)] border border-[var(--border-default)]"
    >
        <ShieldCheck class="text-[var(--color-success)] shrink-0" size={18} />
        <span class="font-medium">Privacy Notice:</span> This analysis runs entirely
        locally in your browser. Nothing is sent to any server.
    </div>

    <!-- Input Area -->
    <div class="flex flex-col gap-[var(--space-2)]">
        <span
            class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
            >Password to Analyze</span
        >
        <div class="relative flex items-center">
            <input
                type={$cryptoOptions.showPassword ? "text" : "password"}
                bind:value={$cryptoOptions.passwordInput}
                placeholder="Enter a password..."
                class="w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-3)] text-[length:var(--text-base)] font-[family-name:var(--font-mono)] outline-none focus-within:border-[var(--color-primary)] placeholder:text-[var(--text-muted)]"
            />
            <button
                class="absolute right-[var(--space-3)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                title={$cryptoOptions.showPassword
                    ? "Hide password"
                    : "Show password"}
                onclick={() =>
                    ($cryptoOptions.showPassword =
                        !$cryptoOptions.showPassword)}
            >
                {#if $cryptoOptions.showPassword}
                    <EyeOff size={20} />
                {:else}
                    <Eye size={20} />
                {/if}
            </button>
        </div>
    </div>

    <!-- Score Meter -->
    <div class="flex flex-col gap-2">
        <div
            class="flex items-center justify-between text-[length:var(--text-sm)] font-[number:var(--weight-semibold)]"
        >
            <span
                >Strength: <span class={getScoreTextClass(passwordInfo.score)}
                    >{$cryptoOptions.passwordInput
                        ? passwordInfo.label
                        : "None"}</span
                ></span
            >
            {#if $cryptoOptions.passwordInput}
                <span
                    class="text-[var(--text-muted)] font-[family-name:var(--font-mono)]"
                    >{passwordInfo.entropy} bits</span
                >
            {/if}
        </div>
        <div class="flex h-2 w-full gap-1">
            {#each [0, 1, 2, 3] as step}
                <div
                    class="h-full flex-1 rounded-sm {$cryptoOptions.passwordInput &&
                    passwordInfo.score > step
                        ? getScoreColor(passwordInfo.score)
                        : 'bg-[var(--bg-surface)]'} transition-colors duration-300"
                ></div>
            {/each}
        </div>
    </div>

    <!-- Statistics -->
    {#if $cryptoOptions.passwordInput}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-4)]">
            <!-- Crack Times -->
            <div
                class="flex flex-col gap-[var(--space-4)] rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-[var(--space-4)]"
            >
                <h3
                    class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 mb-1"
                >
                    Estimated Crack Time
                </h3>
                <div class="flex flex-col gap-3">
                    <div
                        class="flex justify-between items-center text-[length:var(--text-sm)]"
                    >
                        <span class="text-[var(--text-secondary)]"
                            >Offline (10B/sec)</span
                        >
                        <span
                            class="font-[family-name:var(--font-mono)] text-[var(--text-primary)]"
                            >{passwordInfo.crackTimeOffline}</span
                        >
                    </div>
                    <div
                        class="flex justify-between items-center text-[length:var(--text-sm)]"
                    >
                        <span class="text-[var(--text-secondary)]"
                            >Online (1k/sec)</span
                        >
                        <span
                            class="font-[family-name:var(--font-mono)] text-[var(--text-primary)]"
                            >{passwordInfo.crackTimeOnline}</span
                        >
                    </div>
                </div>
            </div>

            <!-- Characteristics -->
            <div
                class="flex flex-col gap-[var(--space-4)] rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-[var(--space-4)]"
            >
                <h3
                    class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 mb-1"
                >
                    Characteristics
                </h3>
                <div
                    class="grid grid-cols-2 gap-y-3 gap-x-4 text-[length:var(--text-sm)]"
                >
                    <div class="flex items-center gap-2">
                        {#if passwordInfo.hasUppercase}
                            <span class="text-[var(--color-success)] font-bold"
                                >✓</span
                            >
                        {:else}
                            <span class="text-[var(--text-muted)]">○</span>
                        {/if}
                        <span
                            class={passwordInfo.hasUppercase
                                ? "text-[var(--text-primary)]"
                                : "text-[var(--text-secondary)]"}
                            >Uppercase</span
                        >
                    </div>
                    <div class="flex items-center gap-2">
                        {#if passwordInfo.hasLowercase}
                            <span class="text-[var(--color-success)] font-bold"
                                >✓</span
                            >
                        {:else}
                            <span class="text-[var(--text-muted)]">○</span>
                        {/if}
                        <span
                            class={passwordInfo.hasLowercase
                                ? "text-[var(--text-primary)]"
                                : "text-[var(--text-secondary)]"}
                            >Lowercase</span
                        >
                    </div>
                    <div class="flex items-center gap-2">
                        {#if passwordInfo.hasDigits}
                            <span class="text-[var(--color-success)] font-bold"
                                >✓</span
                            >
                        {:else}
                            <span class="text-[var(--text-muted)]">○</span>
                        {/if}
                        <span
                            class={passwordInfo.hasDigits
                                ? "text-[var(--text-primary)]"
                                : "text-[var(--text-secondary)]"}>Numbers</span
                        >
                    </div>
                    <div class="flex items-center gap-2">
                        {#if passwordInfo.hasSymbols}
                            <span class="text-[var(--color-success)] font-bold"
                                >✓</span
                            >
                        {:else}
                            <span class="text-[var(--text-muted)]">○</span>
                        {/if}
                        <span
                            class={passwordInfo.hasSymbols
                                ? "text-[var(--text-primary)]"
                                : "text-[var(--text-secondary)]"}>Symbols</span
                        >
                    </div>
                </div>
            </div>
        </div>

        <!-- Suggestions -->
        {#if passwordInfo.suggestions.length > 0}
            <div
                class="flex flex-col gap-[var(--space-3)] rounded-[var(--radius-md)] border border-orange-500/30 bg-orange-500/5 p-[var(--space-4)]"
            >
                <div
                    class="flex items-center gap-2 text-orange-500 font-[number:var(--weight-semibold)] text-[length:var(--text-sm)]"
                >
                    <ShieldAlert size={16} /> Suggestions to improve
                </div>
                <ul
                    class="list-disc pl-5 text-[length:var(--text-sm)] text-[var(--text-secondary)] space-y-1"
                >
                    {#each passwordInfo.suggestions as suggestion}
                        <li>{suggestion}</li>
                    {/each}
                </ul>
            </div>
        {/if}
    {/if}
</div>
