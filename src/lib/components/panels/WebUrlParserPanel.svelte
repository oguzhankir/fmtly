<script lang="ts">
    import { onMount } from "svelte";
    import { parseUrl, buildUrl } from "../../engines/web";
    import type { UrlParts } from "../../engines/web";
    import { Copy, Check, RefreshCw } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    let rawUrl = $state(
        "https://user:pass@api.example.com:8080/v1/users?page=2&limit=10&filter=active#results",
    );
    let parts = $derived(parseUrl(rawUrl));

    // Builder state
    let builderProtocol = $state("https:");
    let builderHostname = $state("");
    let builderPort = $state("");
    let builderPath = $state("/");
    let builderQuery = $state("");
    let builderHash = $state("");
    let builtUrl = $derived(() => {
        const params: Record<string, string[]> = {};
        if (builderQuery.trim()) {
            const p = new URLSearchParams(builderQuery.trim());
            p.forEach((v, k) => {
                if (!params[k]) params[k] = [];
                params[k].push(v);
            });
        }
        return buildUrl({
            protocol: builderProtocol || "https:",
            hostname: builderHostname,
            port: builderPort,
            pathname: builderPath || "/",
            searchParams: params,
            hash: builderHash ? `#${builderHash.replace(/^#/, "")}` : "",
        });
    });

    let copiedParsed = $state(false);
    let copiedBuilt = $state(false);

    function copyParsed() {
        navigator.clipboard.writeText(
            JSON.stringify(
                { ...parts, searchParams: parts.searchParams },
                null,
                2,
            ),
        );
        addToast("success", "Copied as JSON");
        copiedParsed = true;
        setTimeout(() => (copiedParsed = false), 2000);
    }

    function copyBuilt() {
        navigator.clipboard.writeText(builtUrl());
        addToast("success", "Copied URL");
        copiedBuilt = true;
        setTimeout(() => (copiedBuilt = false), 2000);
    }

    function loadFromParsed() {
        builderProtocol = parts.protocol || "https:";
        builderHostname = parts.hostname;
        builderPort = parts.port;
        builderPath = parts.pathname;
        const qp = parts.searchParams;
        const entries: string[] = [];
        for (const [k, vals] of Object.entries(qp)) {
            for (const v of vals)
                entries.push(
                    `${encodeURIComponent(k)}=${encodeURIComponent(v)}`,
                );
        }
        builderQuery = entries.join("&");
        builderHash = parts.hash.replace(/^#/, "");
    }

    const FIELD_COLORS: Record<string, string> = {
        protocol: "var(--color-primary)",
        hostname: "#22c55e",
        port: "#f59e0b",
        pathname: "#c084fc",
        searchParams: "#60a5fa",
        hash: "#fb923c",
        username: "#6ee7b7",
        password: "#f87171",
    };
</script>

<div class="url-parser-panel">
    <!-- Input -->
    <div class="section">
        <span class="section-label">URL Input</span>
        <div class="input-row">
            <input
                type="text"
                bind:value={rawUrl}
                placeholder="Paste any URL here…"
                spellcheck="false"
                class="url-input {parts.isValid ? '' : rawUrl ? 'invalid' : ''}"
            />
            {#if !parts.isValid && rawUrl}
                <span class="error-badge">Invalid URL</span>
            {:else if parts.isValid}
                <span class="valid-badge">✓ Valid</span>
            {/if}
        </div>
    </div>

    {#if parts.isValid}
        <!-- Parsed breakdown -->
        <div class="section">
            <div class="section-header">
                <span class="section-label">Parsed Components</span>
                <button onclick={copyParsed} class="icon-btn">
                    {#if copiedParsed}<Check size={14} />{:else}<Copy
                            size={14}
                        />{/if}
                    Copy JSON
                </button>
            </div>
            <div class="components-grid">
                {#each [{ key: "protocol", label: "Protocol", value: parts.protocol }, { key: "hostname", label: "Hostname", value: parts.hostname }, { key: "port", label: "Port", value: parts.port || "(default)" }, { key: "pathname", label: "Path", value: parts.pathname }, { key: "hash", label: "Fragment", value: parts.hash || "(none)" }, { key: "username", label: "Username", value: parts.username || "(none)" }, { key: "password", label: "Password", value: parts.password || "(none)" }, { key: "origin", label: "Origin", value: parts.origin }] as f}
                    <div class="component-row">
                        <span
                            class="component-key"
                            style="color: {FIELD_COLORS[f.key] ||
                                'var(--text-secondary)'}"
                        >
                            {f.label}
                        </span>
                        <span class="component-value">{f.value}</span>
                    </div>
                {/each}
            </div>

            {#if Object.keys(parts.searchParams).length > 0}
                <div class="query-section">
                    <span class="subsection-label"
                        >Query Parameters ({Object.keys(parts.searchParams)
                            .length})</span
                    >
                    <div class="query-table">
                        {#each Object.entries(parts.searchParams) as [key, vals]}
                            {#each vals as val}
                                <div class="query-row">
                                    <span
                                        class="query-key"
                                        style="color:{FIELD_COLORS.searchParams}"
                                        >{key}</span
                                    >
                                    <span class="query-eq">=</span>
                                    <span class="query-val">{val}</span>
                                </div>
                            {/each}
                        {/each}
                    </div>
                </div>
            {/if}
        </div>

        <!-- Load to builder -->
        <button onclick={loadFromParsed} class="load-btn">
            <RefreshCw size={13} /> Load into Builder
        </button>
    {/if}

    <!-- URL Builder -->
    <div class="section builder-section">
        <span class="section-label">URL Builder</span>
        <div class="builder-grid">
            <div class="builder-field">
                <span class="field-label">Protocol</span>
                <select bind:value={builderProtocol} class="builder-input">
                    <option value="https:">https:</option>
                    <option value="http:">http:</option>
                    <option value="ftp:">ftp:</option>
                    <option value="ws:">ws:</option>
                    <option value="wss:">wss:</option>
                </select>
            </div>
            <div class="builder-field">
                <span class="field-label">Hostname</span>
                <input
                    type="text"
                    bind:value={builderHostname}
                    placeholder="example.com"
                    class="builder-input"
                />
            </div>
            <div class="builder-field">
                <span class="field-label">Port</span>
                <input
                    type="text"
                    bind:value={builderPort}
                    placeholder="8080"
                    class="builder-input"
                />
            </div>
            <div class="builder-field">
                <span class="field-label">Path</span>
                <input
                    type="text"
                    bind:value={builderPath}
                    placeholder="/api/v1/users"
                    class="builder-input"
                />
            </div>
            <div class="builder-field full">
                <span class="field-label">Query String</span>
                <input
                    type="text"
                    bind:value={builderQuery}
                    placeholder="key=value&another=123"
                    class="builder-input"
                />
            </div>
            <div class="builder-field full">
                <span class="field-label">Hash / Fragment</span>
                <input
                    type="text"
                    bind:value={builderHash}
                    placeholder="section-id"
                    class="builder-input"
                />
            </div>
        </div>
        {#if builtUrl()}
            <div class="built-output">
                <code class="built-url">{builtUrl()}</code>
                <button onclick={copyBuilt} class="icon-btn">
                    {#if copiedBuilt}<Check size={14} />{:else}<Copy
                            size={14}
                        />{/if}
                    Copy
                </button>
            </div>
        {/if}
    </div>
</div>

<style>
    .url-parser-panel {
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
        padding: var(--space-6);
        max-width: 900px;
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
    .subsection-label {
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        color: var(--text-secondary);
    }
    .input-row {
        display: flex;
        align-items: center;
        gap: var(--space-2);
    }
    .url-input {
        flex: 1;
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        padding: var(--space-2) var(--space-4);
        font-family: var(--font-mono);
        font-size: var(--text-sm);
        color: var(--text-primary);
    }
    .url-input:focus {
        outline: none;
        border-color: var(--border-focus);
    }
    .url-input.invalid {
        border-color: var(--color-error);
    }
    .valid-badge {
        font-size: var(--text-xs);
        color: var(--color-success);
        font-weight: var(--weight-semibold);
        white-space: nowrap;
    }
    .error-badge {
        font-size: var(--text-xs);
        color: var(--color-error);
        font-weight: var(--weight-semibold);
        white-space: nowrap;
    }
    .components-grid {
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        overflow: hidden;
    }
    .component-row {
        display: flex;
        align-items: baseline;
        gap: var(--space-3);
        padding: var(--space-2) var(--space-4);
        border-bottom: 1px solid var(--border-subtle);
        font-size: var(--text-sm);
    }
    .component-row:last-child {
        border-bottom: none;
    }
    .component-key {
        width: 100px;
        flex-shrink: 0;
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    .component-value {
        font-family: var(--font-mono);
        color: var(--text-primary);
        word-break: break-all;
    }
    .query-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
        margin-top: var(--space-2);
    }
    .query-table {
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        overflow: hidden;
    }
    .query-row {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-1-5) var(--space-4);
        border-bottom: 1px solid var(--border-subtle);
        font-size: var(--text-sm);
        font-family: var(--font-mono);
    }
    .query-row:last-child {
        border-bottom: none;
    }
    .query-key {
        font-weight: var(--weight-semibold);
    }
    .query-eq {
        color: var(--text-tertiary);
    }
    .query-val {
        color: var(--text-primary);
    }
    .load-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-1-5) var(--space-3);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        background: var(--bg-surface);
        color: var(--text-secondary);
        font-size: var(--text-sm);
        cursor: pointer;
        align-self: flex-start;
    }
    .load-btn:hover {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }
    .builder-section {
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        padding: var(--space-4);
    }
    .builder-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--space-3);
    }
    .builder-field {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }
    .builder-field.full {
        grid-column: 1 / -1;
    }
    .field-label {
        font-size: var(--text-xs);
        color: var(--text-secondary);
        font-weight: var(--weight-semibold);
    }
    .builder-input {
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        padding: var(--space-1-5) var(--space-3);
        font-size: var(--text-sm);
        color: var(--text-primary);
        font-family: var(--font-mono);
    }
    .builder-input:focus {
        outline: none;
        border-color: var(--border-focus);
    }
    .built-output {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        padding: var(--space-2) var(--space-4);
        margin-top: var(--space-3);
    }
    .built-url {
        flex: 1;
        font-size: var(--text-sm);
        color: var(--color-primary);
        word-break: break-all;
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
        white-space: nowrap;
    }
    .icon-btn:hover {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }
    @media (max-width: 600px) {
        .builder-grid {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>
