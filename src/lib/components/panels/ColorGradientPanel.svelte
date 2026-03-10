<script lang="ts">
    import { colorOptions } from "../../stores/color.store";
    import type { GradientStop } from "../../stores/color.store";
    import { cssLinearGradient, cssRadialGradient } from "../../engines/color";
    import { Copy, Plus, X } from "lucide-svelte";
    import { addToast } from "../../stores/toast.store";

    let generatedCss = $derived.by(() => {
        if ($colorOptions.gradientStops.length === 0) return "none";
        if ($colorOptions.gradientType === "linear") {
            return cssLinearGradient(
                $colorOptions.gradientStops,
                $colorOptions.gradientAngle,
            );
        } else {
            return cssRadialGradient(
                $colorOptions.gradientStops,
                $colorOptions.gradientRadialShape,
            );
        }
    });

    let safeGeneratedCss = $derived(`background: ${generatedCss};`);

    function addStop() {
        const newPos = Math.min(
            100,
            Math.max(
                0,
                ($colorOptions.gradientStops[
                    $colorOptions.gradientStops.length - 1
                ]?.position || 0) + 10,
            ),
        );
        $colorOptions.gradientStops = [
            ...$colorOptions.gradientStops,
            { id: `stop-${Date.now()}`, color: "#FFFFFF", position: newPos },
        ];
    }

    function removeStop(id: string) {
        if ($colorOptions.gradientStops.length <= 2) {
            addToast("error", "Gradients require at least 2 stops.");
            return;
        }
        $colorOptions.gradientStops = $colorOptions.gradientStops.filter(
            (s) => s.id !== id,
        );
    }

    function handleTypeToggle(type: "linear" | "radial") {
        $colorOptions.gradientType = type;
    }

    function copyCss() {
        navigator.clipboard.writeText(safeGeneratedCss);
        addToast("success", "Copied CSS to clipboard");
    }
</script>

<div
    class="flex h-full w-full flex-col gap-[var(--space-6)] overflow-y-auto bg-[var(--bg-base)] p-[var(--space-6)] text-[var(--text-primary)]"
>
    <!-- Live Preview Box -->
    <div
        class="relative w-full h-[200px] rounded-[var(--radius-lg)] border border-[var(--border-subtle)] overflow-hidden"
    >
        <!-- Checkerboard background for transparency checks -->
        <div
            class="absolute inset-0 z-0 opacity-10"
            style="background-image: linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%); background-size: 20px 20px; background-position: 0 0, 0 10px, 10px -10px, -10px 0px;"
        ></div>

        <!-- Actual Gradient -->
        <div
            class="absolute inset-0 z-10 transition-colors duration-[150ms] ease-out"
            style={safeGeneratedCss}
        ></div>

        <!-- CSS Copy Overlay -->
        <div
            class="absolute bottom-[var(--space-4)] right-[var(--space-4)] z-20"
        >
            <button
                onclick={copyCss}
                class="flex items-center gap-2 rounded-md bg-[var(--bg-elevated)]/90 backdrop-blur px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] border border-[var(--border-subtle)] shadow-sm hover:bg-[var(--bg-hover)] transition-colors"
            >
                <Copy size={14} /> Copy CSS
            </button>
        </div>
    </div>

    <!-- Controls Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-6)]">
        <!-- Tools & Settings -->
        <div
            class="flex flex-col gap-[var(--space-4)] rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-[var(--space-6)]"
        >
            <!-- Gradient Type -->
            <div class="flex flex-col gap-[var(--space-2)]">
                <label
                    class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                    >Type</label
                >
                <div
                    class="flex rounded-md border border-[var(--border-default)] overflow-hidden"
                >
                    <button
                        onclick={() => handleTypeToggle("linear")}
                        class="flex-1 px-4 py-2 text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] transition-colors {$colorOptions.gradientType ===
                        'linear'
                            ? 'bg-[var(--bg-selected)] text-[var(--text-primary)]'
                            : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:bg-[var(--bg-hover)]'}"
                        >Linear</button
                    >
                    <div class="w-px bg-[var(--border-default)]"></div>
                    <button
                        onclick={() => handleTypeToggle("radial")}
                        class="flex-1 px-4 py-2 text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] transition-colors {$colorOptions.gradientType ===
                        'radial'
                            ? 'bg-[var(--bg-selected)] text-[var(--text-primary)]'
                            : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:bg-[var(--bg-hover)]'}"
                        >Radial</button
                    >
                </div>
            </div>

            <!-- Linear Angle -->
            {#if $colorOptions.gradientType === "linear"}
                <div class="flex flex-col gap-[var(--space-2)]">
                    <div class="flex items-center justify-between">
                        <label
                            class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                            >Angle (deg)</label
                        >
                        <span
                            class="text-[length:var(--text-xs)] font-[family-name:var(--font-mono)]"
                            >{$colorOptions.gradientAngle}°</span
                        >
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="360"
                        step="1"
                        bind:value={$colorOptions.gradientAngle}
                        class="w-full accent-[var(--color-accent)]"
                    />
                    <input
                        type="number"
                        min="0"
                        max="360"
                        bind:value={$colorOptions.gradientAngle}
                        class="w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-2)] text-[length:var(--text-sm)] outline-none focus:border-[var(--border-focus)]"
                    />
                </div>
            {/if}

            <!-- Radial Shape -->
            {#if $colorOptions.gradientType === "radial"}
                <div class="flex flex-col gap-[var(--space-2)]">
                    <label
                        class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-secondary)]"
                        >Shape</label
                    >
                    <select
                        bind:value={$colorOptions.gradientRadialShape}
                        class="h-10 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] text-[length:var(--text-sm)] outline-none focus:border-[var(--border-focus)]"
                    >
                        <option value="circle">Circle</option>
                        <option value="ellipse">Ellipse</option>
                    </select>
                </div>
            {/if}
        </div>

        <!-- Stops Editor -->
        <div
            class="flex flex-col gap-[var(--space-4)] rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-[var(--space-6)]"
        >
            <div class="flex items-center justify-between mb-[var(--space-2)]">
                <h3
                    class="text-[length:var(--text-base)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]"
                >
                    Color Stops
                </h3>
                <button
                    onclick={addStop}
                    class="flex items-center gap-1 rounded bg-[var(--bg-selected)] px-2 py-1 text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                    <Plus size={14} /> Add Stop
                </button>
            </div>

            <div
                class="flex flex-col gap-[var(--space-3)] max-h-[260px] overflow-y-auto pr-2"
            >
                {#each $colorOptions.gradientStops as stop (stop.id)}
                    <div
                        class="flex items-center gap-[var(--space-3)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-3)]"
                    >
                        <!-- Color Picker -->
                        <div
                            class="relative flex items-center justify-center shrink-0"
                        >
                            <input
                                type="color"
                                bind:value={stop.color}
                                class="h-8 w-8 cursor-pointer rounded overflow-hidden border-0 bg-transparent p-0"
                            />
                        </div>

                        <input
                            type="text"
                            bind:value={stop.color}
                            class="w-[80px] bg-transparent text-[length:var(--text-sm)] font-[family-name:var(--font-mono)] outline-none border-b border-[var(--border-faint)] focus:border-[var(--color-accent)]"
                        />

                        <!-- Position Slider -->
                        <div
                            class="flex flex-1 items-center gap-[var(--space-2)] px-[var(--space-2)]"
                        >
                            <input
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                bind:value={stop.position}
                                class="w-full accent-[var(--color-accent)]"
                            />
                            <span
                                class="w-10 text-right text-[length:var(--text-xs)] font-[family-name:var(--font-mono)] text-[var(--text-secondary)]"
                                >{stop.position}%</span
                            >
                        </div>

                        <!-- Remove Stop -->
                        <button
                            onclick={() => removeStop(stop.id)}
                            class="text-[var(--text-muted)] hover:text-[var(--color-error)] transition-colors shrink-0 p-1"
                            aria-label="Remove Stop"
                            disabled={$colorOptions.gradientStops.length <= 2}
                        >
                            <X size={16} />
                        </button>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
