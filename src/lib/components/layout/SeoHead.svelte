<script lang="ts">
	import type { SeoMetadata } from '$utils/seo.js';

	let { metadata }: { metadata: SeoMetadata } = $props();
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<meta name="description" content={metadata.description} />
	<link rel="canonical" href={metadata.canonical} />
	{#if metadata.alternates}
		{#each metadata.alternates as alternate}
			<link rel="alternate" hreflang={alternate.hreflang} href={alternate.href} />
		{/each}
	{/if}

	<!-- Open Graph -->
	<meta property="og:title" content={metadata.ogTitle} />
	<meta property="og:description" content={metadata.ogDescription} />
	<meta property="og:url" content={metadata.ogUrl} />
	<meta property="og:image" content={metadata.ogImage} />
	<meta property="og:type" content={metadata.ogType} />
	<meta property="og:site_name" content={metadata.siteName || 'fmtly.dev'} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content={metadata.twitterCard} />
	<meta name="twitter:title" content={metadata.twitterTitle} />
	<meta name="twitter:description" content={metadata.twitterDescription} />
	<meta name="twitter:image" content={metadata.twitterImage} />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${metadata.structuredData}<\/script>`}
</svelte:head>
