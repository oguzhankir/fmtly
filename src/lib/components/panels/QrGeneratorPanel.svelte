<script lang="ts">
    import { Download, Loader } from "lucide-svelte";
    import { t } from '$lib/stores/language.js';

    type ContentType = "text" | "contact" | "wifi" | "email";

    let contentType = $state<ContentType>("text");
    let textInput = $state("https://fmtly.dev");
    // Contact
    let cName = $state("");
    let cPhone = $state("");
    let cEmail = $state("");
    let cOrg = $state("");
    // WiFi
    let wSsid = $state("");
    let wPass = $state("");
    let wEncryption = $state<"WPA" | "WEP" | "nopass">("WPA");
    // Email
    let eTo = $state("");
    let eSubject = $state("");
    let eBody = $state("");

    // Options
    let size = $state(300);
    let margin = $state(2);
    let errorCorrection = $state<"L" | "M" | "Q" | "H">("M");
    let darkColor = $state("#000000");
    let lightColor = $state("#ffffff");

    let qrDataUrl = $state("");
    let generating = $state(false);

    function getContent(): string {
        if (contentType === "text") return textInput;
        if (contentType === "contact") {
            // inline vCard
            const lines = ["BEGIN:VCARD", "VERSION:3.0", `FN:${cName}`];
            if (cPhone) lines.push(`TEL:${cPhone}`);
            if (cEmail) lines.push(`EMAIL:${cEmail}`);
            if (cOrg) lines.push(`ORG:${cOrg}`);
            lines.push("END:VCARD");
            return lines.join("\n");
        }
        if (contentType === "wifi")
            return `WIFI:T:${wEncryption};S:${wSsid};P:${wPass};;`;
        if (contentType === "email") {
            const params: string[] = [];
            if (eSubject)
                params.push(`subject=${encodeURIComponent(eSubject)}`);
            if (eBody) params.push(`body=${encodeURIComponent(eBody)}`);
            return `mailto:${eTo}${params.length ? "?" + params.join("&") : ""}`;
        }
        return "";
    }

    async function generate() {
        const content = getContent().trim();
        if (!content) {
            qrDataUrl = "";
            return;
        }
        generating = true;
        try {
            const engine = await import("../../engines/qr/qr.engine");
            qrDataUrl = await engine.generateQr(content, {
                size,
                margin,
                darkColor,
                lightColor,
                errorCorrection,
            });
        } finally {
            generating = false;
        }
    }

    function downloadQr() {
        if (!qrDataUrl) return;
        const a = document.createElement("a");
        a.href = qrDataUrl;
        a.download = "qrcode.png";
        a.click();
    }

    // Auto-generate on any change
    $effect(() => {
        // Touch all reactive deps via array (not comma operator)
        const _deps = [
            contentType,
            textInput,
            cName,
            cPhone,
            cEmail,
            cOrg,
            wSsid,
            wPass,
            wEncryption,
            eTo,
            eSubject,
            eBody,
            size,
            margin,
            errorCorrection,
            darkColor,
            lightColor,
        ];
        void _deps;
        generate();
    });
</script>

<div class="panel">
    <div class="left">
        <div class="type-tabs">
            <button
                class="tab"
                class:active={contentType === "text"}
                onclick={() => {
                    contentType = "text";
                }}
            >{$t('ui.qr_generator.tabs.text', 'Text / URL')}</button
            >
            <button
                class="tab"
                class:active={contentType === "contact"}
                onclick={() => {
                    contentType = "contact";
                }}
            >{$t('ui.qr_generator.tabs.contact', 'Contact')}</button
            >
            <button
                class="tab"
                class:active={contentType === "wifi"}
                onclick={() => {
                    contentType = "wifi";
                }}
            >{$t('ui.qr_generator.tabs.wifi', 'WiFi')}</button
            >
            <button
                class="tab"
                class:active={contentType === "email"}
                onclick={() => {
                    contentType = "email";
                }}
            >{$t('ui.qr_generator.tabs.email', 'Email')}</button
            >
        </div>

        <div class="input-area">
            {#if contentType === "text"}
                <label class="ctrl"
                    ><span class="label">{$t('ui.qr_generator.form.text_label', 'Text or URL')}</span>
                    <input
                        type="text"
                        bind:value={textInput}
                        class="text-input"
                        placeholder={$t('ui.qr_generator.form.text_placeholder', 'Enter text or URL')}
                    />
                </label>
            {:else if contentType === "contact"}
                <label class="ctrl"
                    ><span class="label">{$t('ui.qr_generator.form.name', 'Name *')}</span><input
                        type="text"
                        bind:value={cName}
                        class="text-input"
                    /></label
                >
                <label class="ctrl"
                    ><span class="label">{$t('ui.qr_generator.form.phone', 'Phone')}</span><input
                        type="text"
                        bind:value={cPhone}
                        class="text-input"
                    /></label
                >
                <label class="ctrl"
                    ><span class="label">{$t('ui.qr_generator.form.email', 'Email')}</span><input
                        type="email"
                        bind:value={cEmail}
                        class="text-input"
                    /></label
                >
                <label class="ctrl"
                    ><span class="label">{$t('ui.qr_generator.form.org', 'Organization')}</span><input
                        type="text"
                        bind:value={cOrg}
                        class="text-input"
                    /></label
                >
            {:else if contentType === "wifi"}
                <label class="ctrl"
                    ><span class="lbl">{$t('ui.qr_generator.form.ssid', 'SSID *')}</span><input
                        type="text"
                        bind:value={wSsid}
                        class="text-input"
                    /></label
                >
                <label class="ctrl"
                    ><span class="lbl">{$t('ui.qr_generator.form.password', 'Password')}</span><input
                        type="text"
                        bind:value={wPass}
                        class="text-input"
                    /></label
                >
                <label class="ctrl"
                    ><span class="lbl">{$t('ui.qr_generator.form.encryption', 'Encryption')}</span>
                    <select bind:value={wEncryption} class="sel">
                        <option value="WPA">WPA/WPA2</option>
                        <option value="WEP">WEP</option>
                        <option value="nopass">{$t('ui.qr_generator.form.encryption_none', 'None')}</option>
                    </select>
                </label>
            {:else if contentType === "email"}
                <label class="ctrl"
                    ><span class="label">{$t('ui.qr_generator.form.to', 'To *')}</span><input
                        type="email"
                        bind:value={eTo}
                        class="text-input"
                    /></label
                >
                <label class="ctrl"
                    ><span class="label">{$t('ui.qr_generator.form.subject', 'Subject')}</span><input
                        type="text"
                        bind:value={eSubject}
                        class="text-input"
                    /></label
                >
                <label class="ctrl"
                    ><span class="label">{$t('ui.qr_generator.form.body', 'Body')}</span><textarea
                        bind:value={eBody}
                        class="text-input"
                        rows="3"
                    ></textarea></label
                >
            {/if}
        </div>

        <div class="options">
            <label class="ctrl"
                ><span class="lbl">{($t as any)('ui.qr_generator.settings.size', 'Size ({{size}}px)', { size })}</span>
                <input
                    type="range"
                    bind:value={size}
                    min="100"
                    max="800"
                    step="50"
                    class="slider"
                />
            </label>
            <label class="ctrl"
                ><span class="lbl">{($t as any)('ui.qr_generator.settings.margin', 'Margin ({{margin}})', { margin })}</span>
                <input
                    type="range"
                    bind:value={margin}
                    min="0"
                    max="10"
                    step="1"
                    class="slider"
                />
            </label>
            <label class="ctrl"
                ><span class="lbl">{$t('ui.qr_generator.settings.error_correction', 'Error Correction')}</span>
                <select bind:value={errorCorrection} class="sel">
                    <option value="L">{$t('ui.qr_generator.settings.ec_low', 'Low (7%)')}</option>
                    <option value="M">{$t('ui.qr_generator.settings.ec_medium', 'Medium (15%)')}</option>
                    <option value="Q">{$t('ui.qr_generator.settings.ec_quartile', 'Quartile (25%)')}</option>
                    <option value="H">{$t('ui.qr_generator.settings.ec_high', 'High (30%)')}</option>
                </select>
            </label>
            <label class="ctrl"
                ><span class="lbl">{$t('ui.qr_generator.settings.dark_color', 'Dark')}</span><input
                    type="color"
                    bind:value={darkColor}
                    class="color-input"
                /></label
            >
            <label class="ctrl"
                ><span class="lbl">{$t('ui.qr_generator.settings.light_color', 'Light')}</span><input
                    type="color"
                    bind:value={lightColor}
                    class="color-input"
                /></label
            >
        </div>
    </div>

    <div class="right">
        {#if generating}
            <div class="qr-placeholder"><Loader size={24} class="spin" /></div>
        {:else if qrDataUrl}
            <div class="qr-display">
                <img src={qrDataUrl} alt={$t('ui.qr_generator.actions.qr_code_alt', 'QR Code')} class="qr-img" />
            </div>
            <button onclick={downloadQr} class="action-btn"
                ><Download size={14} /> {$t('ui.qr_generator.actions.download', 'Download PNG')}</button
            >
        {:else}
            <div class="qr-placeholder">
                <p>{$t('ui.qr_generator.placeholder', 'Enter content to generate QR')}</p>
            </div>
        {/if}
    </div>
</div>

<style>
    .panel {
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 100%;
        overflow: auto;
    }
    @media (max-width: 768px) {
        .panel {
            grid-template-columns: 1fr;
        }
    }
    .left {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        padding: var(--space-4);
        border-right: 1px solid var(--border-default);
        overflow: auto;
    }
    .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-4);
        padding: var(--space-4);
    }
    .type-tabs {
        display: flex;
        gap: var(--space-1);
        flex-wrap: wrap;
    }
    .tab {
        padding: var(--space-1) var(--space-3);
        border-radius: var(--radius-md);
        font-size: var(--text-xs);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        color: var(--text-secondary);
        cursor: pointer;
    }
    .tab:hover {
        border-color: var(--border-focus);
    }
    .tab.active {
        background: var(--color-primary);
        color: #fff;
        border-color: var(--color-primary);
    }
    .input-area {
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
    }
    .ctrl {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
    .lbl {
        font-size: var(--text-xs);
        color: var(--text-secondary);
        font-weight: var(--weight-medium);
    }
    .text-input {
        width: 100%;
        padding: var(--space-2);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        font-size: var(--text-sm);
        color: var(--text-primary);
        outline: none;
        font-family: inherit;
    }
    .text-input:focus {
        border-color: var(--border-focus);
    }
    .sel {
        padding: var(--space-1) var(--space-2);
        background: var(--bg-base);
        border: 1px solid var(--border-default);
        border-radius: var(--radius-md);
        font-size: var(--text-sm);
        color: var(--text-primary);
    }
    .options {
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
        padding-top: var(--space-2);
        border-top: 1px solid var(--border-default);
    }
    .slider {
        width: 100%;
    }
    .color-input {
        width: 40px;
        height: 28px;
        border: 1px solid var(--border-default);
        border-radius: var(--radius-sm);
        cursor: pointer;
        padding: 0;
    }
    .qr-display {
        padding: var(--space-4);
        background: #fff;
        border-radius: var(--radius-lg);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .qr-img {
        max-width: 100%;
        height: auto;
        display: block;
    }
    .qr-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-tertiary);
        min-height: 200px;
    }
    .action-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-2) var(--space-5);
        background: var(--color-primary);
        color: #fff;
        border: none;
        border-radius: var(--radius-md);
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        cursor: pointer;
    }
    .action-btn:hover {
        opacity: 0.9;
    }
</style>
