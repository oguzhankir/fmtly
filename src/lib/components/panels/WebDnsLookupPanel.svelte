<script lang="ts">
    import { lookupDns } from "../../engines/network";
    import type { DnsRecords, DnsAnswer } from "../../engines/network";
    import { Loader, AlertCircle, Search } from "lucide-svelte";

    let domain = $state("");
    let loading = $state(false);
    let result = $state<DnsRecords | null>(null);
    let error = $state<string | null>(null);
    let activeTab = $state<
        "A" | "AAAA" | "MX" | "TXT" | "CNAME" | "NS" | "SOA"
    >("A");

    const RECORD_TYPES = [
        "A",
        "AAAA",
        "MX",
        "TXT",
        "CNAME",
        "NS",
        "SOA",
    ] as const;

    async function lookup() {
        if (!domain.trim()) return;
        loading = true;
        error = null;
        result = null;
        try {
            const data = await lookupDns(
                domain
                    .trim()
                    .replace(/^https?:\/\//, "")
                    .replace(/\/.*$/, ""),
            );
            result = data;
        } catch (e) {
            error =
                e instanceof Error
                    ? e.message
                    : "DNS lookup failed. The proxy Worker may not be deployed yet.";
        } finally {
            loading = false;
        }
    }

    function handleKey(e: KeyboardEvent) {
        if (e.key === "Enter") lookup();
    }

    function getAnswers(type: string): DnsAnswer[] {
        if (!result) return [];
        const r = (result as any)[type];
        if (!r || r.Status === -1) return [];
        return r.Answer ?? [];
    }

    function getStatus(type: string): number {
        if (!result) return -1;
        const r = (result as any)[type];
        return r?.Status ?? -1;
    }

    function hasRecords(type: string): boolean {
        return getAnswers(type).length > 0;
    }

    function totalRecords(): number {
        if (!result) return 0;
        return RECORD_TYPES.reduce((s, t) => s + getAnswers(t).length, 0);
    }
</script>

<div class="dns-panel">
    <!-- Input -->
    <div class="input-row">
        <input
            type="text"
            bind:value={domain}
            onkeydown={handleKey}
            placeholder="example.com"
            spellcheck="false"
            class="domain-input"
        />
        <button
            onclick={lookup}
            disabled={loading || !domain.trim()}
            class="lookup-btn"
        >
            {#if loading}
                <Loader size={14} class="spin" />
                Querying…
            {:else}
                <Search size={14} /> Lookup
            {/if}
        </button>
    </div>

    <p class="hint">
        All 7 record types queried simultaneously via Cloudflare DNS-over-HTTPS.
    </p>

    <!-- Loading -->
    {#if loading}
        <div class="loading-state">
            <Loader size={20} class="spin" />
            <span>Querying A, AAAA, MX, TXT, CNAME, NS, SOA records…</span>
        </div>
    {/if}

    <!-- Error -->
    {#if error}
        <div class="error-card">
            <AlertCircle size={16} />
            <div>
                <strong>Lookup failed</strong>
                <p>{error}</p>
                <p class="hint">
                    The Cloudflare Worker proxy must be deployed to <code
                        >workers.fmtly.dev</code
                    >.
                </p>
            </div>
        </div>
    {/if}

    <!-- Results -->
    {#if result}
        <!-- Stats bar -->
        <div class="stats-bar">
            <span class="stats-text"
                >{totalRecords()} total records found for
                <strong>{domain}</strong></span
            >
        </div>

        <!-- Type tabs -->
        <div class="tabs">
            {#each RECORD_TYPES as type}
                {@const count = getAnswers(type).length}
                <button
                    onclick={() => (activeTab = type)}
                    class="tab {activeTab === type ? 'active' : ''} {count > 0
                        ? 'has-records'
                        : ''}"
                >
                    {type}
                    {#if count > 0}
                        <span class="tab-count">{count}</span>
                    {/if}
                </button>
            {/each}
        </div>

        <!-- Records table -->
        <div class="records-section">
            {#if getAnswers(activeTab).length === 0}
                <div class="empty-tab">
                    {#if getStatus(activeTab) === -1}
                        <span>Query failed or no response from DNS server.</span
                        >
                    {:else}
                        <span>No {activeTab} records found for {domain}.</span>
                    {/if}
                </div>
            {:else}
                <div class="records-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>TTL</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each getAnswers(activeTab) as rec}
                                <tr>
                                    <td><code>{rec.name}</code></td>
                                    <td><span class="ttl">{rec.TTL}s</span></td>
                                    <td
                                        ><code class="data-val">{rec.data}</code
                                        ></td
                                    >
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            {/if}
        </div>
    {/if}

    <!-- Empty -->
    {#if !loading && !result && !error}
        <div class="empty-state">
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
            >
                <circle cx="12" cy="12" r="10" /><path
                    d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                />
            </svg>
            <p>Enter a domain to look up all DNS records simultaneously.</p>
            <div class="preset-domains">
                {#each ["example.com", "google.com", "github.com"] as d}
                    <button
                        onclick={() => {
                            domain = d;
                            lookup();
                        }}
                        class="preset-btn">{d}</button
                    >
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
    .dns-panel {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
        padding: var(--space-6);
        max-width: 900px;
        margin: 0 auto;
    }
    .input-row {
        display: flex;
        gap: var(--space-2);
    }
    .domain-input {
        flex: 1;
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        padding: var(--space-2) var(--space-4);
        font-family: var(--font-mono);
        font-size: var(--text-sm);
        color: var(--text-primary);
    }
    .domain-input:focus {
        outline: none;
        border-color: var(--border-focus);
    }
    .lookup-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-2) var(--space-4);
        background: var(--color-primary);
        color: #fff;
        border: none;
        border-radius: var(--radius-lg);
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        cursor: pointer;
        white-space: nowrap;
    }
    .lookup-btn:hover:not(:disabled) {
        background: var(--color-primary-hover);
    }
    .lookup-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    .hint {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
        margin: 0;
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
    .error-card code {
        font-family: var(--font-mono);
    }
    .stats-bar {
        padding: var(--space-2) var(--space-4);
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        font-size: var(--text-sm);
        color: var(--text-secondary);
    }
    .tabs {
        display: flex;
        gap: var(--space-1);
        border-bottom: 1px solid var(--border-default);
    }
    .tab {
        display: inline-flex;
        align-items: center;
        gap: var(--space-1);
        padding: var(--space-2) var(--space-3);
        background: none;
        border: none;
        border-bottom: 2px solid transparent;
        color: var(--text-tertiary);
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        font-family: var(--font-mono);
        cursor: pointer;
        margin-bottom: -1px;
    }
    .tab:hover {
        color: var(--text-secondary);
    }
    .tab.active {
        color: var(--color-primary);
        border-bottom-color: var(--color-primary);
    }
    .tab.has-records {
        color: var(--text-secondary);
    }
    .tab.active.has-records {
        color: var(--color-primary);
    }
    .tab-count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        background: var(--bg-accent-subtle);
        color: var(--color-primary);
        border-radius: var(--radius-full);
        font-size: 11px;
    }
    .records-section {
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        overflow: hidden;
    }
    .empty-tab {
        padding: var(--space-8);
        text-align: center;
        color: var(--text-tertiary);
        font-size: var(--text-sm);
    }
    .records-table {
        overflow: auto;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: var(--text-sm);
    }
    th {
        text-align: left;
        padding: var(--space-2) var(--space-4);
        font-size: var(--text-xs);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--text-tertiary);
        border-bottom: 1px solid var(--border-default);
    }
    td {
        padding: var(--space-2) var(--space-4);
        border-bottom: 1px solid var(--border-subtle);
        vertical-align: top;
    }
    tr:last-child td {
        border-bottom: none;
    }
    tr:hover td {
        background: var(--bg-surface-hover);
    }
    code {
        font-family: var(--font-mono);
        color: var(--text-primary);
    }
    .ttl {
        color: var(--text-tertiary);
        font-family: var(--font-mono);
    }
    .data-val {
        word-break: break-all;
        color: var(--color-primary);
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
        max-width: 340px;
        margin: 0;
    }
    .preset-domains {
        display: flex;
        gap: var(--space-2);
        flex-wrap: wrap;
        justify-content: center;
    }
    .preset-btn {
        padding: var(--space-1) var(--space-3);
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-full);
        color: var(--text-secondary);
        font-size: var(--text-xs);
        font-family: var(--font-mono);
        cursor: pointer;
    }
    .preset-btn:hover {
        border-color: var(--border-focus);
        color: var(--text-primary);
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
</style>
