<script lang="ts">
	import type { Snippet } from 'svelte';
	import { setLocale } from '$lib/stores/language.js';
	import { DEFAULT_LOCALE } from '$lib/utils/locale-routing.js';
	import type { LayoutData } from './$types.js';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	$effect(() => {
		setLocale(data.lang || DEFAULT_LOCALE);
	});
</script>

{@render children()}
