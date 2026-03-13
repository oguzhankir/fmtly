<script lang="ts">
    import { page } from '$app/stores';
    import { examples } from "$lib/registry/examples";
    import { t } from '$lib/stores/language';
    import SeoHead from '$components/layout/SeoHead.svelte';
    import type { SeoMetadata } from '$utils/seo.js';
    import { buildAlternateLinks, localizePath, stripLocalePrefix } from '$lib/utils/locale-routing.js';

    // Group examples by format
    const groupedExamples = examples.reduce(
        (acc, example) => {
            if (!acc[example.format]) acc[example.format] = [];
            acc[example.format].push(example);
            return acc;
        },
        {} as Record<string, typeof examples>,
    );

    const BASE_URL = 'https://fmtly.dev';
    let currentPath = $derived(stripLocalePrefix($page.url.pathname));
    let currentLocale = $derived($page.params.lang ?? 'en');

    const seo: SeoMetadata = $derived.by(() => ({
        title: $t('seo.examples.title', 'Format Examples | fmtly'),
        description: $t('seo.examples.description', 'A rich library of standard JSON, YAML, XML, and CSV examples for testing your code and workflows.'),
        canonical: `${BASE_URL}${currentPath}`,
        ogTitle: $t('seo.examples.og_title', 'Format Examples | fmtly'),
        ogDescription: $t('seo.examples.og_description', 'A rich library of standard JSON, YAML, XML, and CSV examples for testing your code and workflows.'),
        ogUrl: `${BASE_URL}${currentPath}`,
        ogImage: `${BASE_URL}/og/examples.png`,
        ogType: 'website',
        twitterCard: 'summary_large_image',
        twitterTitle: $t('seo.examples.twitter_title', 'Format Examples | fmtly'),
        twitterDescription: $t('seo.examples.twitter_description', 'A rich library of standard JSON, YAML, XML, and CSV examples for testing your code and workflows.'),
        twitterImage: `${BASE_URL}/og/examples.png`,
        alternates: buildAlternateLinks(BASE_URL, '/examples'),
        structuredData: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: $t('ui.examples.title', 'Format Examples'),
            description: $t('seo.examples.description', 'A rich library of standard JSON, YAML, XML, and CSV examples for testing your code and workflows.'),
            url: `${BASE_URL}${currentPath}`
        })
    }));
</script>

<SeoHead metadata={seo} />

<div class="container mx-auto max-w-5xl py-12 px-4 space-y-12">
    <div class="space-y-4 text-center max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold tracking-tight text-foreground">
            {$t('ui.examples.title', 'Format Examples')}
        </h1>
        <p class="text-xl text-muted-foreground leading-relaxed">
            {$t('ui.examples.description', 'A rich library of standard JSON, YAML, XML, and CSV examples for testing your code and workflows.')}
        </p>
    </div>

    <!-- Render sections dynamically by categories -->
    {#each Object.entries(groupedExamples) as [format, formatExamples]}
        <section class="space-y-6">
            <h2
                class="text-2xl font-semibold text-foreground tracking-tight flex items-center gap-2 uppercase"
            >
                {format} {$t('ui.examples.examples', 'Examples')}
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each formatExamples as example}
                    <a
                        href={localizePath(`/examples/${example.slug}`, currentLocale)}
                        class="block group rounded-xl border border-border bg-card hover:border-primary/50 transition-colors p-6 shadow-sm"
                    >
                        <h3
                            class="text-lg font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-2"
                        >
                            {example.title}
                        </h3>
                        <p class="text-sm text-muted-foreground line-clamp-2">
                            {example.description}
                        </p>
                    </a>
                {/each}
            </div>
        </section>
    {/each}
</div>
