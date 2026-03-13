<script lang="ts">
    import { colorOptions } from "../../stores/color.store";
    import { hexToRgb, contrastRatio, wcagResult } from "../../engines/color";
    import { t } from '$lib/stores/language.js';

    let fgRgb = $derived(hexToRgb($colorOptions.contrastFg));
    let bgRgb = $derived(hexToRgb($colorOptions.contrastBg));

    let ratio = $derived(contrastRatio(fgRgb, bgRgb));
    let wcag = $derived(wcagResult(ratio));

    function handleFgChange(e: Event) {
        const target = e.target as HTMLInputElement;
        $colorOptions.contrastFg = target.value;
    }

    function handleBgChange(e: Event) {
        const target = e.target as HTMLInputElement;
        $colorOptions.contrastBg = target.value;
    }
</script>

<div
    class="flex h-full w-full flex-col gap-[var(--space-6)] overflow-y-auto bg-[var(--bg-base)] p-[var(--space-6)] text-[var(--text-primary)]"
>
    <div class="flex gap-[var(--space-4)]">
        <div class="flex flex-1 flex-col gap-[var(--space-2)]">
            <div
                class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                >{$t('ui.foreground_color', 'Foreground Color')}</div
            >
            <div
                class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]"
            >
                <input
                    type="color"
                    value={$colorOptions.contrastFg}
                    oninput={handleFgChange}
                    class="h-8 w-8 cursor-pointer rounded border-0 bg-transparent p-0"
                />
                <input
                    type="text"
                    value={$colorOptions.contrastFg}
                    oninput={handleFgChange}
                    class="flex-1 bg-transparent text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] outline-none"
                />
            </div>
        </div>

        <div class="flex flex-1 flex-col gap-[var(--space-2)]">
            <div
                class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                >{$t('ui.background_color', 'Background Color')}</div
            >
            <div
                class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]"
            >
                <input
                    type="color"
                    value={$colorOptions.contrastBg}
                    oninput={handleBgChange}
                    class="h-8 w-8 cursor-pointer rounded border-0 bg-transparent p-0"
                />
                <input
                    type="text"
                    value={$colorOptions.contrastBg}
                    oninput={handleBgChange}
                    class="flex-1 bg-transparent text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] outline-none"
                />
            </div>
        </div>
    </div>

    <div
        class="flex flex-col rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-[var(--space-6)]"
    >
        <div class="mb-[var(--space-4)] flex items-center justify-between">
            <span
                class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)]"
                >{$t('ui.contrast_ratio', 'Contrast Ratio')}</span
            >
            <span
                class="text-[length:var(--text-2xl)] font-[family-name:var(--font-mono)] font-[number:var(--weight-semibold)]"
                class:text-[var(--color-success)]={ratio >= 4.5}
                class:text-[var(--color-error)]={ratio < 3}
                class:text-[var(--color-warning)]={ratio >= 3 && ratio < 4.5}
            >
                {ratio.toFixed(2)}:1
            </span>
        </div>

        <div class="grid grid-cols-2 gap-[var(--space-4)] md:grid-cols-4">
            <div
                class="flex flex-col items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)]"
            >
                <span
                    class="text-[length:var(--text-xs)] text-[var(--text-secondary)] uppercase tracking-wider"
                    >{$t('ui.normal_text_aa', 'Normal Text (AA)')}</span
                >
                <span
                    class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)]"
                    class:text-[var(--color-success)]={wcag.aa_normal}
                    class:text-[var(--color-error)]={!wcag.aa_normal}
                >
                    {wcag.aa_normal ? $t('ui.pass', 'PASS') : $t('ui.fail', 'FAIL')}
                </span>
            </div>

            <div
                class="flex flex-col items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)]"
            >
                <span
                    class="text-[length:var(--text-xs)] text-[var(--text-secondary)] uppercase tracking-wider"
                    >{$t('ui.large_text_aa', 'Large Text (AA)')}</span
                >
                <span
                    class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)]"
                    class:text-[var(--color-success)]={wcag.aa_large}
                    class:text-[var(--color-error)]={!wcag.aa_large}
                >
                    {wcag.aa_large ? $t('ui.pass', 'PASS') : $t('ui.fail', 'FAIL')}
                </span>
            </div>

            <div
                class="flex flex-col items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)]"
            >
                <span
                    class="text-[length:var(--text-xs)] text-[var(--text-secondary)] uppercase tracking-wider"
                    >{$t('ui.normal_text_aaa', 'Normal Text (AAA)')}</span
                >
                <span
                    class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)]"
                    class:text-[var(--color-success)]={wcag.aaa_normal}
                    class:text-[var(--color-error)]={!wcag.aaa_normal}
                >
                    {wcag.aaa_normal ? $t('ui.pass', 'PASS') : $t('ui.fail', 'FAIL')}
                </span>
            </div>

            <div
                class="flex flex-col items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)]"
            >
                <span
                    class="text-[length:var(--text-xs)] text-[var(--text-secondary)] uppercase tracking-wider"
                    >{$t('ui.ui_components', 'UI Components')}</span
                >
                <span
                    class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)]"
                    class:text-[var(--color-success)]={wcag.aa_ui}
                    class:text-[var(--color-error)]={!wcag.aa_ui}
                >
                    {wcag.aa_ui ? $t('ui.pass', 'PASS') : $t('ui.fail', 'FAIL')}
                </span>
            </div>
        </div>
    </div>

    <!-- Live Preview -->
    <div
        class="flex-1 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] p-[var(--space-8)] flex items-center justify-center transition-colors"
        style="background-color: {$colorOptions.contrastBg}"
    >
        <div class="text-center" style="color: {$colorOptions.contrastFg}">
            <h3
                class="mb-[var(--space-4)] text-[length:var(--text-2xl)] font-[number:var(--weight-semibold)] bg-transparent"
            >
                {$t('ui.large_text_preview', 'Large Text Preview — 24px Bold')}
            </h3>
            <p
                class="text-[length:var(--text-base)] max-w-lg leading-relaxed bg-transparent"
            >
                {$t('ui.normal_text_preview', 'This is a normal text preview block to demonstrate readability.')}
                Make sure UI elements and paragraphs contrast effectively
                against their backdrop securely avoiding accessibility barriers
                across visually impaired visitors.
            </p>
        </div>
    </div>
</div>
