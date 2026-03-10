<script lang="ts">
    import { getMimeInfo } from "../../engines/web";
    import type { MimeInfo } from "../../engines/web";

    let query = $state("");
    let results = $derived(getMimeInfo(query));

    let copied = $state<string | null>(null);

    function copyMime(text: string) {
        navigator.clipboard.writeText(text);
        copied = text;
        setTimeout(() => (copied = null), 1500);
    }
</script>

<div class="mime-panel">
    <!-- Search -->
    <div class="search-section">
        <div class="search-wrap">
            <svg
                class="search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
            >
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
                type="text"
                bind:value={query}
                placeholder="Search by extension (.json) or MIME type (application/json)…"
                spellcheck="false"
                class="search-input"
            />
            {#if query}
                <button onclick={() => (query = "")} class="clear-btn">✕</button
                >
            {/if}
        </div>
        <span class="result-count"
            >{results.length} types {query ? "matching" : "total"}</span
        >
    </div>

    <!-- Table -->
    <div class="table-wrapper">
        <table class="mime-table">
            <thead>
                <tr>
                    <th>MIME Type</th>
                    <th>Extensions</th>
                    <th>Description</th>
                    <th>Binary</th>
                </tr>
            </thead>
            <tbody>
                {#each results as m (m.mimeType)}
                    <tr>
                        <td>
                            <button
                                onclick={() => copyMime(m.mimeType)}
                                class="mime-type-btn"
                                title="Click to copy"
                            >
                                {m.mimeType}
                                {#if copied === m.mimeType}
                                    <span class="copied-badge">✓</span>
                                {/if}
                            </button>
                        </td>
                        <td>
                            <div class="ext-list">
                                {#each m.extensions as ext}
                                    <button
                                        onclick={() => copyMime(`.${ext}`)}
                                        class="ext-badge">.{ext}</button
                                    >
                                {/each}
                                {#if m.extensions.length === 0}
                                    <span class="text-muted">—</span>
                                {/if}
                            </div>
                        </td>
                        <td class="description-cell">{m.description}</td>
                        <td>
                            <span
                                class="binary-badge {m.binary
                                    ? 'binary'
                                    : 'text'}"
                            >
                                {m.binary ? "Binary" : "Text"}
                            </span>
                        </td>
                    </tr>
                {/each}
                {#if results.length === 0}
                    <tr>
                        <td colspan="4" class="empty-row"
                            >No MIME types match "{query}"</td
                        >
                    </tr>
                {/if}
            </tbody>
        </table>
    </div>
</div>

<style>
    .mime-panel {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
        padding: var(--space-5);
        height: 100%;
    }
    .search-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
    }
    .search-wrap {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        padding: var(--space-2) var(--space-4);
    }
    .search-wrap:focus-within {
        border-color: var(--border-focus);
    }
    .search-icon {
        width: 16px;
        height: 16px;
        color: var(--text-tertiary);
        flex-shrink: 0;
    }
    .search-input {
        flex: 1;
        background: none;
        border: none;
        outline: none;
        font-size: var(--text-sm);
        color: var(--text-primary);
        font-family: var(--font-mono);
    }
    .search-input::placeholder {
        color: var(--text-tertiary);
    }
    .clear-btn {
        background: none;
        border: none;
        color: var(--text-tertiary);
        cursor: pointer;
        padding: 0;
        font-size: var(--text-sm);
    }
    .clear-btn:hover {
        color: var(--text-primary);
    }
    .result-count {
        font-size: var(--text-xs);
        color: var(--text-tertiary);
    }
    .table-wrapper {
        flex: 1;
        overflow: auto;
    }
    .mime-table {
        width: 100%;
        border-collapse: collapse;
        font-size: var(--text-sm);
    }
    .mime-table th {
        text-align: left;
        padding: var(--space-2) var(--space-3);
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--text-tertiary);
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-default);
        position: sticky;
        top: 0;
    }
    .mime-table td {
        padding: var(--space-2) var(--space-3);
        border-bottom: 1px solid var(--border-subtle);
        vertical-align: middle;
    }
    .mime-table tr:hover td {
        background: var(--bg-surface-hover);
    }
    .mime-type-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-1);
        background: none;
        border: none;
        padding: 0;
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        color: var(--color-primary);
        cursor: pointer;
        text-align: left;
    }
    .mime-type-btn:hover {
        text-decoration: underline;
    }
    .copied-badge {
        font-size: 10px;
        color: var(--color-success);
    }
    .ext-list {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-1);
    }
    .ext-badge {
        padding: 1px var(--space-2);
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-sm);
        font-size: 11px;
        color: var(--text-secondary);
        font-family: var(--font-mono);
        cursor: pointer;
    }
    .ext-badge:hover {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }
    .description-cell {
        color: var(--text-secondary);
    }
    .binary-badge {
        padding: 1px var(--space-2);
        border-radius: var(--radius-sm);
        font-size: 10px;
        font-weight: var(--weight-semibold);
    }
    .binary-badge.binary {
        background: var(--status-warning-bg);
        color: var(--status-warning);
    }
    .binary-badge.text {
        background: var(--status-valid-bg);
        color: var(--status-valid);
    }
    .empty-row {
        text-align: center;
        color: var(--text-tertiary);
        padding: var(--space-12) var(--space-4) !important;
    }
    .text-muted {
        color: var(--text-tertiary);
    }
</style>
