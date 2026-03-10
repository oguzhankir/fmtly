<script lang="ts">
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import { parseUserAgent } from "../../engines/web";
    import type { UaParsed } from "../../engines/web";
    import {
        Copy,
        Check,
        Monitor,
        Smartphone,
        Tablet,
        Bot,
        Globe,
    } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    let ua = $state("");
    let parsed = $derived(ua ? parseUserAgent(ua) : null);
    let copied = $state(false);

    onMount(() => {
        if (browser) {
            ua = navigator.userAgent;
        }
    });

    function copyUa() {
        navigator.clipboard.writeText(ua);
        addToast("success", "Copied");
        copied = true;
        setTimeout(() => (copied = false), 2000);
    }

    function getDeviceIcon(type: string) {
        if (type === "mobile") return Smartphone;
        if (type === "tablet") return Tablet;
        return Monitor;
    }
</script>

<div class="ua-panel">
    <!-- Input -->
    <div class="section">
        <div class="section-header">
            <span class="section-label">User-Agent String</span>
            <button onclick={copyUa} class="icon-btn">
                {#if copied}<Check size={13} />{:else}<Copy size={13} />{/if}
                Copy
            </button>
        </div>
        <textarea
            bind:value={ua}
            placeholder="Paste a User-Agent string or click 'My Agent' below…"
            rows="3"
            spellcheck="false"
            class="ua-textarea"
        ></textarea>
        <div class="button-row">
            <button
                onclick={() => (ua = browser ? navigator.userAgent : "")}
                class="preset-btn"
            >
                <Globe size={13} /> My Agent
            </button>
            <button
                onclick={() =>
                    (ua = "Googlebot/2.1 (+http://www.google.com/bot.html)")}
                class="preset-btn"
            >
                <Bot size={13} /> Googlebot
            </button>
            <button
                onclick={() =>
                    (ua =
                        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1")}
                class="preset-btn"
            >
                <Smartphone size={13} /> iOS Safari
            </button>
            <button
                onclick={() =>
                    (ua =
                        "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Mobile Safari/537.36")}
                class="preset-btn"
            >
                <Smartphone size={13} /> Android Chrome
            </button>
        </div>
    </div>

    {#if parsed}
        <!-- Bot alert -->
        {#if parsed.isBot}
            <div class="alert alert-warning">
                <Bot size={16} /> This User-Agent appears to be a
                <strong>bot or crawler</strong>.
            </div>
        {/if}

        <!-- Info cards -->
        <div class="cards-grid">
            <div class="info-card">
                <div class="card-icon browser-icon">🌐</div>
                <div class="card-content">
                    <span class="card-label">Browser</span>
                    <span class="card-name">{parsed.browser.name}</span>
                    <span class="card-version"
                        >{parsed.browser.version || "—"}</span
                    >
                </div>
            </div>

            <div class="info-card">
                <div class="card-icon os-icon">💻</div>
                <div class="card-content">
                    <span class="card-label">Operating System</span>
                    <span class="card-name">{parsed.os.name}</span>
                    <span class="card-version">{parsed.os.version || "—"}</span>
                </div>
            </div>

            <div class="info-card">
                <div class="card-icon device-icon">
                    {#if parsed.device.type === "mobile"}📱{:else if parsed.device.type === "tablet"}📟{:else}🖥️{/if}
                </div>
                <div class="card-content">
                    <span class="card-label">Device</span>
                    <span class="card-name"
                        >{parsed.device.vendor || "Unknown"}</span
                    >
                    <span class="card-version"
                        >{parsed.device.model ||
                            parsed.device.type ||
                            "Desktop/Unknown"}</span
                    >
                </div>
            </div>

            <div class="info-card">
                <div class="card-icon engine-icon">⚙️</div>
                <div class="card-content">
                    <span class="card-label">Engine</span>
                    <span class="card-name">{parsed.engine.name}</span>
                    <span class="card-version"
                        >{parsed.engine.version || "—"}</span
                    >
                </div>
            </div>
        </div>

        <!-- Raw fields table -->
        <div class="details-table">
            {#each [{ label: "Browser", value: `${parsed.browser.name} ${parsed.browser.version}` }, { label: "OS", value: `${parsed.os.name} ${parsed.os.version}` }, { label: "Device Type", value: parsed.device.type || "desktop" }, { label: "Device Vendor", value: parsed.device.vendor || "—" }, { label: "Device Model", value: parsed.device.model || "—" }, { label: "Engine", value: `${parsed.engine.name} ${parsed.engine.version}` }, { label: "Bot", value: parsed.isBot ? "Yes" : "No" }] as row}
                <div class="detail-row">
                    <span class="detail-key">{row.label}</span>
                    <span class="detail-val">{row.value}</span>
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .ua-panel {
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 800px;
        margin: 0 auto;
    }
    .section {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
    }
    .section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .section-label {
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        text-transform: uppercase;
        letter-spacing: 0.07em;
        color: var(--text-tertiary);
    }
    .ua-textarea {
        width: 100%;
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        padding: var(--space-3) var(--space-4);
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        color: var(--text-primary);
        resize: vertical;
        line-height: 1.5;
    }
    .ua-textarea:focus {
        outline: none;
        border-color: var(--border-focus);
    }
    .button-row {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2);
    }
    .preset-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-1);
        padding: var(--space-1) var(--space-3);
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-full);
        color: var(--text-secondary);
        font-size: var(--text-xs);
        cursor: pointer;
    }
    .preset-btn:hover {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }
    .alert {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-3) var(--space-4);
        border-radius: var(--radius-lg);
        font-size: var(--text-sm);
    }
    .alert-warning {
        background: var(--status-warning-bg);
        color: var(--status-warning);
        border: 1px solid
            color-mix(in srgb, var(--status-warning) 35%, transparent);
    }
    .cards-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-3);
    }
    .info-card {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        padding: var(--space-4);
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
    }
    .card-icon {
        font-size: 1.75rem;
        line-height: 1;
    }
    .card-content {
        display: flex;
        flex-direction: column;
        gap: var(--space-0-5);
    }
    .card-label {
        font-size: var(--text-xs);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--text-tertiary);
    }
    .card-name {
        font-size: var(--text-base);
        font-weight: var(--weight-semibold);
        color: var(--text-primary);
    }
    .card-version {
        font-size: var(--text-xs);
        color: var(--text-secondary);
        font-family: var(--font-mono);
    }
    .details-table {
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        overflow: hidden;
    }
    .detail-row {
        display: flex;
        gap: var(--space-4);
        padding: var(--space-2) var(--space-4);
        border-bottom: 1px solid var(--border-subtle);
        font-size: var(--text-sm);
    }
    .detail-row:last-child {
        border-bottom: none;
    }
    .detail-key {
        width: 130px;
        flex-shrink: 0;
        color: var(--text-secondary);
        font-weight: var(--weight-medium);
    }
    .detail-val {
        font-family: var(--font-mono);
        color: var(--text-primary);
    }
    .icon-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-1);
        padding: var(--space-1) var(--space-2);
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        color: var(--text-secondary);
        font-size: var(--text-xs);
        cursor: pointer;
    }
    .icon-btn:hover {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }
    @media (max-width: 600px) {
        .cards-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
