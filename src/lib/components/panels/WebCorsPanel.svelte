<script lang="ts">
    import { explainHeader } from "../../engines/web";
    import type { HeaderExplanation } from "../../engines/web";
    import { ShieldCheck, ShieldAlert, Shield, Info } from "lucide-svelte";
    import { t } from '$lib/stores/language.js';

    const CORS_HEADERS = [
        "Access-Control-Allow-Origin",
        "Access-Control-Allow-Methods",
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Credentials",
        "Access-Control-Max-Age",
        "Access-Control-Expose-Headers",
        "Origin",
        "Vary",
    ];

    let headerName = $state("Access-Control-Allow-Origin");
    let headerValue = $state("*");
    let result = $derived(
        headerName.trim() ? explainHeader(headerName, headerValue) : null,
    );

    function selectHeader(name: string) {
        headerName = name;
        // Provide smart default values
        const defaults: Record<string, string> = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Max-Age": "86400",
            "Access-Control-Expose-Headers": "X-Total-Count, X-Request-ID",
            Origin: "https://example.com",
            Vary: "Origin",
        };
        headerValue = defaults[name] ?? "";
    }
</script>

<div class="cors-panel">
    <!-- Header Picker -->
    <div class="section">
        <span class="section-label">{$t('ui.cors_analyzer.title', 'Common CORS Headers')}</span>
        <div class="header-pills">
            {#each CORS_HEADERS as h}
                <button
                    onclick={() => selectHeader(h)}
                    class="header-pill {headerName === h ? 'active' : ''}"
                >
                    {h.replace("Access-Control-", "AC-")}
                </button>
            {/each}
        </div>
    </div>

    <!-- Inputs -->
    <div class="input-row">
        <div class="input-group flex-1">
            <span class="input-label">{$t('ui.cors_analyzer.header_name', 'Header Name')}</span>
            <input
                type="text"
                bind:value={headerName}
                placeholder="Access-Control-Allow-Origin"
                spellcheck="false"
                class="text-input"
            />
        </div>
        <div class="input-group flex-2">
            <span class="input-label">{$t('ui.cors_analyzer.header_value', 'Header Value')}</span>
            <input
                type="text"
                bind:value={headerValue}
                placeholder="*"
                spellcheck="false"
                class="text-input"
            />
        </div>
    </div>

    <!-- Result Card -->
    {#if result}
        <div
            class="result-card {result.safe === false
                ? 'unsafe'
                : result.safe === true
                  ? 'safe'
                  : 'neutral'}"
        >
            <div class="result-header">
                <div class="header-display">
                    <code class="header-name">{result.header}</code>
                    <span class="colon">:</span>
                    <code class="header-value">{result.value || $t('ui.cors_analyzer.empty_value', '(empty)')}</code
                    >
                </div>
                <div
                    class="safety-badge {result.safe === false
                        ? 'badge-unsafe'
                        : result.safe === true
                          ? 'badge-safe'
                          : 'badge-neutral'}"
                >
                    {#if result.safe === false}
                        <ShieldAlert size={14} /> {$t('ui.cors_analyzer.safety.unsafe', 'Unsafe')}
                    {:else if result.safe === true}
                        <ShieldCheck size={14} /> {$t('ui.cors_analyzer.safety.safe', 'Safe')}
                    {:else}
                        <Shield size={14} /> {$t('ui.cors_analyzer.safety.neutral', 'Neutral')}
                    {/if}
                </div>
            </div>

            <div class="explanation-sections">
                <div class="exp-section">
                    <span class="exp-label">{$t('ui.cors_analyzer.sections.what', 'What it does')}</span>
                    <p class="exp-text">{result.what}</p>
                </div>
                <div class="exp-section">
                    <span class="exp-label">{$t('ui.cors_analyzer.sections.why', 'Why it exists')}</span>
                    <p class="exp-text">{result.why}</p>
                </div>
                <div class="exp-section recommendation">
                    <Info size={14} />
                    <div>
                        <span class="exp-label">{$t('ui.cors_analyzer.sections.recommendation', 'Recommendation')}</span>
                        <p class="exp-text">{result.recommendation}</p>
                    </div>
                </div>
            </div>
        </div>
    {:else}
        <div class="empty-state">
            {$t('ui.cors_analyzer.empty_state', 'Enter a header name to get an explanation.')}
        </div>
    {/if}
</div>

<style>
    .cors-panel {
        display: flex;
        flex-direction: column;
        gap: var(--space-5);
        padding: var(--space-6);
        max-width: 800px;
        margin: 0 auto;
    }
    .section {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
    }
    .section-label {
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        text-transform: uppercase;
        letter-spacing: 0.07em;
        color: var(--text-tertiary);
    }
    .header-pills {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2);
    }
    .header-pill {
        padding: var(--space-1) var(--space-3);
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-full);
        color: var(--text-secondary);
        font-size: var(--text-xs);
        font-family: var(--font-mono);
        cursor: pointer;
    }
    .header-pill:hover {
        border-color: var(--border-focus);
        color: var(--text-primary);
    }
    .header-pill.active {
        background: var(--bg-accent-subtle);
        border-color: var(--color-primary);
        color: var(--color-primary);
    }
    .input-row {
        display: flex;
        gap: var(--space-3);
        align-items: flex-end;
    }
    .input-group {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }
    .flex-1 {
        flex: 1;
    }
    .flex-2 {
        flex: 2;
    }
    .input-label {
        font-size: var(--text-xs);
        color: var(--text-secondary);
        font-weight: var(--weight-semibold);
    }
    .text-input {
        background: var(--bg-surface);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-lg);
        padding: var(--space-2) var(--space-4);
        font-family: var(--font-mono);
        font-size: var(--text-sm);
        color: var(--text-primary);
        width: 100%;
    }
    .text-input:focus {
        outline: none;
        border-color: var(--border-focus);
    }
    .result-card {
        border-radius: var(--radius-xl);
        border: 1px solid var(--border-default);
        overflow: hidden;
    }
    .result-card.safe {
        border-color: color-mix(in srgb, var(--color-success) 40%, transparent);
    }
    .result-card.unsafe {
        border-color: color-mix(in srgb, var(--color-error) 40%, transparent);
    }
    .result-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-4) var(--space-5);
        background: var(--bg-surface);
        border-bottom: 1px solid var(--border-subtle);
        flex-wrap: wrap;
        gap: var(--space-3);
    }
    .header-display {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        flex-wrap: wrap;
    }
    .header-name {
        color: var(--color-primary);
        font-size: var(--text-sm);
    }
    .colon {
        color: var(--text-tertiary);
    }
    .header-value {
        color: var(--text-primary);
        font-size: var(--text-sm);
    }
    .safety-badge {
        display: inline-flex;
        align-items: center;
        gap: var(--space-1);
        padding: var(--space-1) var(--space-3);
        border-radius: var(--radius-full);
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
    }
    .badge-safe {
        background: var(--status-valid-bg);
        color: var(--status-valid);
    }
    .badge-unsafe {
        background: var(--status-invalid-bg);
        color: var(--status-invalid);
    }
    .badge-neutral {
        background: var(--bg-surface);
        color: var(--text-secondary);
        border: 1px solid var(--border-default);
    }
    .explanation-sections {
        display: flex;
        flex-direction: column;
        gap: 0;
    }
    .exp-section {
        padding: var(--space-4) var(--space-5);
        border-bottom: 1px solid var(--border-subtle);
    }
    .exp-section:last-child {
        border-bottom: none;
    }
    .exp-section.recommendation {
        display: flex;
        gap: var(--space-3);
        align-items: flex-start;
        background: var(--bg-accent-subtle);
        color: var(--color-primary);
    }
    .exp-label {
        display: block;
        font-size: var(--text-xs);
        font-weight: var(--weight-semibold);
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--text-tertiary);
        margin-bottom: var(--space-1);
    }
    .recommendation .exp-label {
        color: var(--color-primary);
    }
    .exp-text {
        margin: 0;
        font-size: var(--text-sm);
        color: var(--text-primary);
        line-height: var(--leading-relaxed);
    }
    .empty-state {
        text-align: center;
        color: var(--text-tertiary);
        font-size: var(--text-sm);
        padding: var(--space-12);
    }
    @media (max-width: 600px) {
        .input-row {
            flex-direction: column;
        }
    }
</style>
