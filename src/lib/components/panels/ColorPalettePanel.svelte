<script lang="ts">
    import { colorOptions } from "../../stores/color.store";
    import type { PaletteType } from "../../stores/color.store";
    import {
        hexToRgb,
        rgbToHsl,
        hslToRgb,
        rgbToHex,
        complementary,
        analogous,
        triadic,
        tetradic,
        splitComplementary,
        monochromatic,
    } from "../../engines/color";
    import { Copy } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";
    import { t } from '$lib/stores/language.js';

    const PALETTE_TYPES: { id: PaletteType; label: string }[] = [
        { id: "complementary", label: $t('ui.color.complementary', 'Complementary') },
        { id: "analogous", label: $t('ui.color.analogous', 'Analogous') },
        { id: "triadic", label: $t('ui.color.triadic', 'Triadic') },
        { id: "tetradic", label: $t('ui.color.tetradic', 'Tetradic') },
        { id: "split-complementary", label: $t('ui.color.split_complementary', 'Split Complementary') },
        { id: "monochromatic", label: $t('ui.color.monochromatic', 'Monochromatic') },
    ];

    let currentSwatches = $derived.by(() => {
        try {
            const rgb = hexToRgb($colorOptions.paletteBase);
            const hsl = rgbToHsl(rgb);
            let resultHsl: any[];

            switch ($colorOptions.paletteType) {
                case "complementary":
                    resultHsl = complementary(hsl);
                    break;
                case "analogous":
                    resultHsl = analogous(hsl, 5);
                    break;
                case "triadic":
                    resultHsl = triadic(hsl);
                    break;
                case "tetradic":
                    resultHsl = tetradic(hsl);
                    break;
                case "split-complementary":
                    resultHsl = splitComplementary(hsl);
                    break;
                case "monochromatic":
                    resultHsl = monochromatic(hsl, 6);
                    break;
                default:
                    resultHsl = [hsl];
            }

            return resultHsl.map((item) =>
                rgbToHex(hslToRgb(item)).toUpperCase(),
            );
        } catch (e) {
            return [$colorOptions.paletteBase];
        }
    });

    function handleBaseChange(e: Event) {
        const target = e.target as HTMLInputElement;
        $colorOptions.paletteBase = target.value;
    }

    function handleTypeChange(e: Event) {
        const target = e.target as HTMLSelectElement;
        $colorOptions.paletteType = target.value as PaletteType;
    }

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text);
        addToast("success", ($t as any)('ui.copied_to_clipboard', 'Copied {text} to clipboard', { text }));
    }
</script>

<div
    class="flex h-full w-full flex-col gap-[var(--space-6)] overflow-y-auto bg-[var(--bg-base)] p-[var(--space-6)] text-[var(--text-primary)]"
>
    <div class="flex gap-[var(--space-4)] flex-col md:flex-row">
        <div class="flex flex-1 flex-col gap-[var(--space-2)]">
            <div
                class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                >{$t('ui.base_color', 'Base Color')}</div
            >
            <div
                class="flex items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]"
            >
                <input
                    type="color"
                    value={$colorOptions.paletteBase}
                    oninput={handleBaseChange}
                    class="h-8 w-8 cursor-pointer rounded border-0 bg-transparent p-0"
                />
                <input
                    type="text"
                    value={$colorOptions.paletteBase}
                    oninput={handleBaseChange}
                    class="flex-1 bg-transparent text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] outline-none"
                />
            </div>
        </div>

        <div class="flex flex-1 flex-col gap-[var(--space-2)]">
            <div
                class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                >{$t('ui.harmony_mode', 'Harmony Mode')}</div
            >
            <select
                value={$colorOptions.paletteType}
                onchange={handleTypeChange}
                class="h-12 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none focus:border-[var(--border-focus)]"
            >
                {#each PALETTE_TYPES as pt}
                    <option value={pt.id}>{pt.label}</option>
                {/each}
            </select>
        </div>
    </div>

    <div
        class="flex flex-col gap-[var(--space-4)] rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-[var(--space-6)]"
    >
        <h2
            class="text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)] mb-[var(--space-2)]"
        >
            {$t('ui.generated_scheme', 'Generated Scheme')}
        </h2>
        <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[var(--space-4)]"
        >
            {#each currentSwatches as swatchHex}
                <div class="group relative flex flex-col gap-[var(--space-3)]">
                    <div
                        class="relative w-full aspect-square rounded-[var(--radius-md)] border border-[var(--border-subtle)] overflow-hidden transition-transform duration-[80ms] group-hover:-translate-y-1"
                        style="background-color: {swatchHex};"
                    >
                        <button
                            onclick={() => copyToClipboard(swatchHex)}
                            class="absolute inset-0 flex items-center justify-center bg-[var(--scrim)] opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                            aria-label={$t('ui.copy_hex', 'Copy Hex')}
                        >
                            <span
                                class="flex items-center gap-2 rounded-full bg-[var(--bg-elevated)] px-3 py-1.5 text-[length:var(--text-xs)] font-medium text-[var(--text-primary)] shadow-lg"
                            >
                                <Copy size={14} /> {$t('ui.copy', 'Copy')}
                            </span>
                        </button>
                    </div>
                    <div class="flex flex-col items-center">
                        <span
                            class="text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] font-[number:var(--weight-semibold)] uppercase text-[var(--text-primary)]"
                        >
                            {swatchHex}
                        </span>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
