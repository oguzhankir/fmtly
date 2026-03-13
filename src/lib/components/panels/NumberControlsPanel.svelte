<script lang="ts">
    import { numberOptions } from '../../stores/number.store';
    import { t } from '$lib/stores/language.js';

    let { toolSlug }: { toolSlug: string } = $props();

    // Map locales for the formatter tool
    const locales = [
        { value: 'en-US', label: 'English (US) - 1,234.56' },
        { value: 'de-DE', label: 'German (DE) - 1.234,56' },
        { value: 'fr-FR', label: 'French (FR) - 1 234,56' },
        { value: 'en-IN', label: 'English (IN) - 1,23,456.78' },
        { value: 'zh-CN', label: 'Chinese (CN) - 1,234.56' },
        { value: 'ja-JP', label: 'Japanese (JP) - 1,234.56' }
    ];

    function updateOption<K extends keyof typeof $numberOptions>(key: K, value: typeof $numberOptions[K]) {
        numberOptions.update((opts) => ({ ...opts, [key]: value }));
    }
</script>

<div class="flex items-center gap-[var(--space-4)] border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-4)] py-[var(--space-2)] overflow-x-auto">
    {#if toolSlug === 'formatter'}
        <!-- Locale Selection -->
        <label class="flex flex-col gap-1 whitespace-nowrap">
            <span class="text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider">{$t('ui.locale', 'Locale')}</span>
            <select
                class="h-8 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-2 text-[length:var(--text-sm)] text-[var(--text-primary)] focus:border-[var(--border-focus)] focus:outline-none"
                value={$numberOptions.locale}
                onchange={(e) => updateOption('locale', e.currentTarget.value)}
            >
                {#each locales as locale}
                    <option value={locale.value}>{locale.label}</option>
                {/each}
            </select>
        </label>

        <!-- Decimals Selection -->
        <label class="flex flex-col gap-1 whitespace-nowrap">
            <span class="text-[length:var(--text-xs)] font-medium text-[var(--text-secondary)] uppercase tracking-wider">{$t('ui.decimals', 'Decimals')}</span>
            <input 
                type="number"
                min="0"
                max="20"
                class="w-16 h-8 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-2 text-[length:var(--text-sm)] text-[var(--text-primary)] focus:border-[var(--border-focus)] focus:outline-none"
                value={$numberOptions.decimals}
                onchange={(e) => updateOption('decimals', parseInt(e.currentTarget.value) || 0)}
            />
        </label>

        <!-- Use Grouping Checkbox -->
        <label class="flex items-center gap-2 mt-[18px] cursor-pointer whitespace-nowrap group">
            <input
                type="checkbox"
                class="accent-[var(--color-accent)] cursor-pointer"
                checked={$numberOptions.useGrouping}
                onchange={(e) => updateOption('useGrouping', e.currentTarget.checked)}
            />
            <span class="text-[length:var(--text-sm)] text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                Use Grouping (e.g. commas)
            </span>
        </label>
    {/if}
</div>
