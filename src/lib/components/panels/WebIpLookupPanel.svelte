<script lang="ts">
    import { lookupIp } from "../../engines/network";
    import type { IpInfo } from "../../engines/network";
    import { browser } from "$app/environment";
    import { MapPin, Loader, AlertCircle, Search } from "lucide-svelte";

    let ipInput = $state("");
    let loading = $state(false);
    let result = $state<IpInfo | null>(null);
    let error = $state<string | null>(null);

    async function lookup() {
        if (!ipInput.trim()) return;
        loading = true;
        error = null;
        result = null;
        try {
            const data = await lookupIp(ipInput.trim());
            if (data.error) {
                error = data.error;
            } else {
                result = data;
            }
        } catch (e) {
            error =
                e instanceof Error
                    ? e.message
                    : "Lookup failed. The proxy Worker may not be deployed yet.";
        } finally {
            loading = false;
        }
    }

    async function lookupMyIp() {
        loading = true;
        error = null;
        result = null;
        try {
            // Use ipapi.co without a specific IP to get the requester's IP
            const data = await lookupIp("");
            if (data.error) {
                error = data.error;
            } else {
                result = data;
                ipInput = data.ip;
            }
        } catch (e) {
            error =
                e instanceof Error ? e.message : "Could not detect your IP.";
        } finally {
            loading = false;
        }
    }

    function handleKey(e: KeyboardEvent) {
        if (e.key === "Enter") lookup();
    }
</script>

<div class="ip-panel">
    <!-- Input row -->
    <div class="input-section">
        <div class="input-row">
            <input
                type="text"
                bind:value={ipInput}
                onkeydown={handleKey}
                placeholder="8.8.8.8 or 2001:4860:4860::8888"
                spellcheck="false"
                class="ip-input"
            />
            <button
                onclick={lookup}
                disabled={loading || !ipInput.trim()}
                class="lookup-btn primary-btn"
            >
                {#if loading}
                    <Loader size={14} class="spin" />
                    Looking up…
                {:else}
                    <Search size={14} /> Look Up
                {/if}
            </button>
            <button
                onclick={lookupMyIp}
                disabled={loading}
                class="lookup-btn secondary-btn"
            >
                My IP
            </button>
        </div>
    </div>

    <!-- Loading -->
    {#if loading}
        <div class="loading-state">
            <Loader size={20} class="spin" />
            <span>Querying IP information…</span>
        </div>
    {/if}

    <!-- Error -->
    {#if error}
        <div class="error-card">
            <AlertCircle size={16} />
            <div>
                <strong>Lookup failed</strong>
                <p>{error}</p>
                <p class="error-hint">
                    The Cloudflare Worker proxy must be deployed to <code
                        >workers.fmtly.dev</code
                    >. See deployment instructions.
                </p>
            </div>
        </div>
    {/if}

    <!-- Result -->
    {#if result}
        <div class="result-grid">
            <div class="result-header">
                <MapPin size={18} />
                <span class="result-ip">{result.ip}</span>
                <span class="result-country"
                    >{result.country_name} {result.country}</span
                >
            </div>

            <div class="info-cards">
                {#each [{ icon: "🌍", label: "Country", value: result.country_name || "—" }, { icon: "🏙️", label: "City", value: result.city || "—" }, { icon: "📍", label: "Region", value: result.region || "—" }, { icon: "📮", label: "Postal", value: result.postal || "—" }, { icon: "🏢", label: "ISP / Org", value: result.org || "—" }, { icon: "🔢", label: "ASN", value: result.asn || "—" }, { icon: "🕐", label: "Timezone", value: result.timezone || "—" }, { icon: "🧭", label: "Coordinates", value: result.latitude && result.longitude ? `${result.latitude}, ${result.longitude}` : "—" }] as card}
                    <div class="info-card">
                        <span class="card-icon">{card.icon}</span>
                        <div>
                            <span class="card-label">{card.label}</span>
                            <span class="card-val">{card.value}</span>
                        </div>
                    </div>
                {/each}
            </div>

            {#if result.latitude && result.longitude}
                <div class="map-embed">
                    <iframe
                        title="IP Location Map"
                        src="https://www.openstreetmap.org/export/embed.html?bbox={result.longitude -
                            0.5},{result.latitude - 0.5},{result.longitude +
                            0.5},{result.latitude +
                            0.5}&layer=mapnik&marker={result.latitude},{result.longitude}"
                        width="100%"
                        height="280"
                        style="border: none; border-radius: var(--radius-lg);"
                        loading="lazy"
                    ></iframe>
                </div>
            {/if}
        </div>
    {/if}

    <!-- Empty -->
    {#if !loading && !result && !error}
        <div class="empty-state">
            <MapPin size={32} />
            <p>
                Enter an IP address or click <strong>My IP</strong> to look up your
                own location.
            </p>
        </div>
    {/if}
</div>

<style>
    .ip-panel {
        display: flex;
        flex-direction: column;
        gap: var(--space-5);
        padding: var(--space-6);
        max-width: 800px;
        margin: 0 auto;
    }
    .input-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
    }
    .input-row {
        display: flex;
        gap: var(--space-2);
    }
    .ip-input {
        flex: 1;
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        padding: var(--space-2) var(--space-4);
        font-family: var(--font-mono);
        font-size: var(--text-sm);
        color: var(--text-primary);
    }
    .ip-input:focus {
        outline: none;
        border-color: var(--border-focus);
    }
    .lookup-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-2) var(--space-4);
        border-radius: var(--radius-lg);
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        cursor: pointer;
        white-space: nowrap;
        border: none;
    }
    .lookup-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    .primary-btn {
        background: var(--color-primary);
        color: #fff;
    }
    .primary-btn:hover:not(:disabled) {
        background: var(--color-primary-hover);
    }
    .secondary-btn {
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        color: var(--text-secondary);
    }
    .secondary-btn:hover:not(:disabled) {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }
    .loading-state {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        color: var(--text-secondary);
        font-size: var(--text-sm);
        padding: var(--space-8);
        justify-content: center;
    }
    .error-card {
        display: flex;
        gap: var(--space-3);
        padding: var(--space-4);
        background: var(--status-invalid-bg);
        border: 1px solid
            color-mix(in srgb, var(--color-error) 35%, transparent);
        border-radius: var(--radius-lg);
        color: var(--status-invalid);
        font-size: var(--text-sm);
    }
    .error-card p {
        margin: var(--space-1) 0 0;
        color: var(--text-secondary);
    }
    .error-hint {
        font-size: var(--text-xs);
    }
    .error-card code {
        font-family: var(--font-mono);
    }
    .result-grid {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
    }
    .result-header {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-4);
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        color: var(--text-primary);
    }
    .result-ip {
        font-family: var(--font-mono);
        font-size: var(--text-lg);
        font-weight: var(--weight-semibold);
    }
    .result-country {
        font-size: var(--text-sm);
        color: var(--text-secondary);
    }
    .info-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-3);
    }
    .info-card {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-3) var(--space-4);
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
    }
    .card-icon {
        font-size: 1.25rem;
    }
    .card-label {
        display: block;
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        text-transform: uppercase;
        letter-spacing: 0.06em;
    }
    .card-val {
        display: block;
        font-size: var(--text-sm);
        font-weight: var(--weight-medium);
        color: var(--text-primary);
        font-family: var(--font-mono);
    }
    .map-embed {
        border-radius: var(--radius-lg);
        overflow: hidden;
    }
    .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-3);
        padding: var(--space-16);
        color: var(--text-tertiary);
        text-align: center;
    }
    .empty-state p {
        font-size: var(--text-sm);
        max-width: 320px;
        margin: 0;
    }
    :global(.spin) {
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    @media (max-width: 600px) {
        .info-cards {
            grid-template-columns: 1fr;
        }
        .input-row {
            flex-wrap: wrap;
        }
    }
</style>
