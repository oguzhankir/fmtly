<script lang="ts">
    import { colorOptions } from "../../stores/color.store";
    import { Image, Upload, Hexagon } from "lucide-svelte";
    import {
        hexToRgb,
        rgbToHex,
        simulateProtanopia,
        simulateDeuteranopia,
        simulateTritanopia,
        simulateAchromatopsia,
    } from "../../engines/color";
    import { t } from '$lib/stores/language.js';

    let fileInput = $state<HTMLInputElement | undefined>();
    let canvasMap = $state<Record<string, HTMLCanvasElement>>({});

    let simModes = [
        { id: "original", label: $t('ui.color_blindness.original_vision', 'Original Vision'), fn: (color: any) => color },
        {
            id: "protanopia",
            label: $t('ui.color_blindness.protanopia', 'Protanopia (Red-Blind)'),
            fn: simulateProtanopia,
        },
        {
            id: "deuteranopia",
            label: $t('ui.color_blindness.deuteranopia', 'Deuteranopia (Green-Blind)'),
            fn: simulateDeuteranopia,
        },
        {
            id: "tritanopia",
            label: $t('ui.color_blindness.tritanopia', 'Tritanopia (Blue-Blind)'),
            fn: simulateTritanopia,
        },
        {
            id: "achromatopsia",
            label: $t('ui.color_blindness.achromatopsia', 'Achromatopsia (Monochromacy)'),
            fn: simulateAchromatopsia,
        },
    ];

    let hexColors = $derived.by(() => {
        try {
            const rgb = hexToRgb($colorOptions.blindnessHex);
            return simModes.map((m) => ({
                ...m,
                hex: rgbToHex(m.fn(rgb)),
            }));
        } catch (e) {
            return simModes.map((m) => ({ ...m, hex: "#000000" }));
        }
    });

    function handleTypeToggle(type: "hex" | "image") {
        $colorOptions.blindnessInputType = type;
    }

    function handleHexChange(e: Event) {
        const target = e.target as HTMLInputElement;
        $colorOptions.blindnessHex = target.value;
    }

    function onImageUpload(e: Event) {
        const target = e.target as HTMLInputElement;
        const file = target.files?.[0];
        if (!file) return;

        const res = URL.createObjectURL(file);
        $colorOptions.blindnessImageSrc = res;

        const img = new window.Image();
        img.onload = () => {
            processCanvases(img);
        };
        img.src = res;
    }

    function processCanvases(img: HTMLImageElement) {
        // Cap max resolution for performance
        const MAX_SIZE = 800;
        let w = img.width;
        let h = img.height;
        if (w > MAX_SIZE || h > MAX_SIZE) {
            const ratio = Math.min(MAX_SIZE / w, MAX_SIZE / h);
            w = Math.round(w * ratio);
            h = Math.round(h * ratio);
        }

        simModes.forEach((mode) => {
            const canvas = canvasMap[mode.id];
            if (!canvas) return;
            canvas.width = w;
            canvas.height = h;

            const ctx = canvas.getContext("2d", { willReadFrequently: true });
            if (!ctx) return;

            ctx.drawImage(img, 0, 0, w, h);

            if (mode.id === "original") return;

            const imgData = ctx.getImageData(0, 0, w, h);
            const d = imgData.data;
            for (let i = 0; i < d.length; i += 4) {
                const res = mode.fn({ r: d[i], g: d[i + 1], b: d[i + 2] });
                d[i] = res.r;
                d[i + 1] = res.g;
                d[i + 2] = res.b;
            }
            ctx.putImageData(imgData, 0, 0);
        });
    }
</script>

<div
    class="flex h-full w-full flex-col gap-[var(--space-6)] overflow-y-auto bg-[var(--bg-base)] p-[var(--space-6)] text-[var(--text-primary)]"
>
    <!-- Top Controls -->
    <div class="flex flex-col md:flex-row gap-[var(--space-4)] items-stretch">
        <div class="flex flex-col gap-[var(--space-2)]">
            <div
                class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                >{$t('ui.simulation_mode', 'Simulation Mode')}</div
            >
            <div
                class="flex rounded-md border border-[var(--border-default)] overflow-hidden h-10 shrink-0"
            >
                <button
                    onclick={() => handleTypeToggle("hex")}
                    class="flex items-center gap-2 px-4 py-2 text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] transition-colors {$colorOptions.blindnessInputType ===
                    'hex'
                        ? 'bg-[var(--bg-selected)] text-[var(--text-primary)]'
                        : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:bg-[var(--bg-hover)]'}"
                >
                    <Hexagon size={16} /> {$t('ui.hex_color', 'Hex Color')}
                </button>
                <div class="w-px bg-[var(--border-default)]"></div>
                <button
                    onclick={() => handleTypeToggle("image")}
                    class="flex items-center gap-2 px-4 py-2 text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] transition-colors {$colorOptions.blindnessInputType ===
                    'image'
                        ? 'bg-[var(--bg-selected)] text-[var(--text-primary)]'
                        : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:bg-[var(--bg-hover)]'}"
                >
                    <Image size={16} /> {$t('ui.image_canvas', 'Image Canvas')}
                </button>
            </div>
        </div>

        <div class="flex flex-1 flex-col gap-[var(--space-2)]">
            <div
                class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
            >
                {$colorOptions.blindnessInputType === "hex"
                    ? $t('ui.base_color', 'Base Color')
                    : $t('ui.upload_source_image', 'Upload Source Image')}
            </div>

            {#if $colorOptions.blindnessInputType === "hex"}
                <div
                    class="flex h-10 items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)]"
                >
                    <input
                        type="color"
                        value={$colorOptions.blindnessHex}
                        oninput={handleHexChange}
                        class="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0"
                    />
                    <input
                        type="text"
                        value={$colorOptions.blindnessHex}
                        oninput={handleHexChange}
                        class="flex-1 bg-transparent text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] outline-none"
                    />
                </div>
            {:else}
                <div
                    class="flex h-10 items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)]"
                >
                    <input
                        bind:this={fileInput}
                        type="file"
                        accept="image/png, image/jpeg, image/webp"
                        onchange={onImageUpload}
                        class="w-full text-[length:var(--text-sm)] file:mr-4 file:rounded file:border-0 file:bg-[var(--bg-selected)] file:px-3 file:py-1 file:text-[length:var(--text-xs)] file:font-semibold file:text-[var(--text-primary)] file:cursor-pointer hover:file:bg-[var(--bg-hover)]"
                    />
                </div>
            {/if}
        </div>
    </div>

    <!-- Results Area -->
    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[var(--space-4)]"
    >
        {#if $colorOptions.blindnessInputType === "hex"}
            {#each hexColors as mode}
                <div
                    class="flex flex-col gap-[var(--space-3)] rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-[var(--space-4)]"
                >
                    <span
                        class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)] tracking-wide uppercase"
                        >{mode.label}</span
                    >
                    <div
                        class="w-full aspect-square rounded-[var(--radius-md)] border border-[var(--border-subtle)]"
                        style="background-color: {mode.hex};"
                    ></div>
                    <span
                        class="text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] bg-[var(--bg-inset)] px-2 py-1 rounded text-center text-[var(--text-primary)]"
                        >{mode.hex.toUpperCase()}</span
                    >
                </div>
            {/each}
        {:else}
            {#each simModes as mode}
                <div
                    class="flex flex-col gap-[var(--space-3)] rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-[var(--space-4)]"
                >
                    <span
                        class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)] tracking-wide uppercase"
                        >{mode.label}</span
                    >
                    <div
                        class="w-full aspect-square rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-inset)] overflow-hidden flex items-center justify-center"
                    >
                        <canvas
                            bind:this={canvasMap[mode.id]}
                            class="w-full h-full object-contain"
                        ></canvas>
                        {#if !$colorOptions.blindnessImageSrc}
                            <div
                                class="absolute flex flex-col items-center gap-2 text-[var(--text-muted)] pointer-events-none"
                            >
                                <Upload size={24} />
                                <span class="text-[length:var(--text-xs)]"
                                    >{$t('ui.upload_an_image', 'Upload an image')}</span
                                >
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</div>
