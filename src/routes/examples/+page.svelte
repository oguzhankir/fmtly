<script lang="ts">
    import { examples } from "$lib/registry/examples";

    // Group examples by format
    const groupedExamples = examples.reduce(
        (acc, example) => {
            if (!acc[example.format]) acc[example.format] = [];
            acc[example.format].push(example);
            return acc;
        },
        {} as Record<string, typeof examples>,
    );
</script>

<svelte:head>
    <title>Format Examples | fmtly</title>
    <meta
        name="description"
        content="A rich library of standard JSON, YAML, XML, and CSV examples for testing your code and workflows."
    />
    <link rel="canonical" href="https://fmtly.dev/examples" />
</svelte:head>

<div class="container mx-auto max-w-5xl py-12 px-4 space-y-12">
    <div class="space-y-4 text-center max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold tracking-tight text-foreground">
            Format Examples
        </h1>
        <p class="text-xl text-muted-foreground leading-relaxed">
            A rich library of standard JSON, YAML, XML, and CSV examples for
            testing your code and workflows.
        </p>
    </div>

    <!-- Render sections dynamically by categories -->
    {#each Object.entries(groupedExamples) as [format, formatExamples]}
        <section class="space-y-6">
            <h2
                class="text-2xl font-semibold text-foreground tracking-tight flex items-center gap-2 uppercase"
            >
                {format} Examples
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each formatExamples as example}
                    <a
                        href={`/examples/${example.slug}`}
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
