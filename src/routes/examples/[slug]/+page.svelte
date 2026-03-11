<script lang="ts">
    import { ArrowRight } from "lucide-svelte";
    import LZString from "lz-string";

    let { data } = $props();
    let example = $derived(data.example);

    // Pre-compress the content so the button is fast and synchronous
    let compressedInput = $derived(
        LZString.compressToEncodedURIComponent(example.content),
    );

    let toolHref = $derived(`${example.toolUrl}?input=${compressedInput}`);
</script>

<svelte:head>
    <title>{example.title} Example | fmtly</title>
    <meta name="description" content={example.description} />
    <link rel="canonical" href={`https://fmtly.dev/examples/${example.slug}`} />
</svelte:head>

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
                Open in {example.toolName}
                <ArrowRight class="w-4 h-4" />
            </a>
        </div>
    </div>

    <hr class="border-border" />

    <!-- EXPLANATION SECTION -->
    <section class="space-y-4">
        <h2 class="text-2xl font-semibold tracking-tight text-foreground">
            About this format
        </h2>
        <p class="text-base text-muted-foreground leading-relaxed">
            {example.explanation}
        </p>
    </section>

    <!-- CODE PREVIEW SECTION -->
    <section class="space-y-4">
        <h2 class="text-2xl font-semibold tracking-tight text-foreground">
            Example Data
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
            When to use {example.title}
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
                Related Tools
            </h2>
            <div class="flex flex-wrap gap-2">
                {#each example.relatedTools as tool}
                    <a
                        href={tool}
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-3 text-xs"
                    >
                        {tool.split("/").pop()} &rarr;
                    </a>
                {/each}
            </div>
        </section>
    {/if}
</div>
