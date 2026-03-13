<script lang="ts">
    import { ArrowRight } from "lucide-svelte";
    import LZString from "lz-string";
    import { page } from '$app/stores';
    import { t } from '$lib/stores/language';
    import SeoHead from '$components/layout/SeoHead.svelte';
    import type { SeoMetadata } from '$utils/seo.js';
    import { buildAlternateLinks, localizePath, stripLocalePrefix } from '$lib/utils/locale-routing.js';

    let { data } = $props();
    let example = $derived(data.example);
    const BASE_URL = 'https://fmtly.dev';
    let currentPath = $derived(stripLocalePrefix($page.url.pathname));
    let currentLocale = $derived($page.params.lang ?? 'en');

    // Pre-compress the content so the button is fast and synchronous
    let compressedInput = $derived(
        LZString.compressToEncodedURIComponent(example.content),
    );

    let toolHref = $derived(`${localizePath(example.toolUrl, currentLocale)}?input=${compressedInput}`);
    let seo = $derived.by<SeoMetadata>(() => ({
        title: `${example.title} Example | fmtly`,
        description: example.description,
        canonical: `${BASE_URL}${currentPath}`,
        ogTitle: `${example.title} Example | fmtly`,
        ogDescription: example.description,
        ogUrl: `${BASE_URL}${currentPath}`,
        ogImage: `${BASE_URL}/og/examples.png`,
        ogType: 'article',
        twitterCard: 'summary_large_image',
        twitterTitle: `${example.title} Example | fmtly`,
        twitterDescription: example.description,
        twitterImage: `${BASE_URL}/og/examples.png`,
        alternates: buildAlternateLinks(BASE_URL, `/examples/${example.slug}`),
        structuredData: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: example.title,
            description: example.description,
            url: `${BASE_URL}${currentPath}`
        })
    }));
</script>

<SeoHead metadata={seo} />

<div class="container mx-auto max-w-4xl py-12 px-4 space-y-12">
    <!-- HEADER SECTION -->
    <div class="space-y-6">
        <h1 class="text-4xl font-bold tracking-tight text-foreground">
            {example.title}
        </h1>
        <p class="text-xl text-muted-foreground leading-relaxed">
            {example.description}
        </p>
        <div>
            <a
                href={toolHref}
                class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 gap-2"
            >
                {$t('ui.example.open_in', 'Open in')} {example.toolName}
                <ArrowRight class="w-4 h-4" />
            </a>
        </div>
    </div>

    <hr class="border-border" />

    <!-- EXPLANATION SECTION -->
    <section class="space-y-4">
        <h2 class="text-2xl font-semibold tracking-tight text-foreground">
            {$t('ui.example.about_format', 'About this format')}
        </h2>
        <p class="text-base text-muted-foreground leading-relaxed">
            {example.explanation}
        </p>
    </section>

    <!-- CODE PREVIEW SECTION -->
    <section class="space-y-4">
        <h2 class="text-2xl font-semibold tracking-tight text-foreground">
            {$t('ui.example.example_data', 'Example Data')}
        </h2>
        <div
            class="relative rounded-lg overflow-hidden border border-border bg-muted/30"
        >
            <pre
                class="p-4 text-sm font-mono text-foreground overflow-x-auto max-h-[500px] overflow-y-auto"><code
                    >{example.content}</code
                ></pre>
        </div>
    </section>

    <!-- USE CASES SECTION -->
    <section class="space-y-4">
        <h2 class="text-2xl font-semibold tracking-tight text-foreground">
            {$t('ui.example.when_to_use', 'When to use')} {example.title}
        </h2>
        <ul
            class="list-disc list-inside space-y-2 text-base text-muted-foreground"
        >
            {#each example.useCases as useCase}
                <li>{useCase}</li>
            {/each}
        </ul>
    </section>

    <!-- RELATED TOOLS SECTION -->
    {#if example.relatedTools && example.relatedTools.length > 0}
        <section class="space-y-4">
            <h2 class="text-2xl font-semibold tracking-tight text-foreground">
                {$t('ui.example.related_tools', 'Related Tools')}
            </h2>
            <div class="flex flex-wrap gap-2">
                {#each example.relatedTools as tool}
                    <a
                        href={localizePath(tool, currentLocale)}
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs"
                    >
                        {tool.split("/").pop()} &rarr;
                    </a>
                {/each}
            </div>
        </section>
    {/if}
</div>
