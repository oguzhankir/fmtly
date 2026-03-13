<script lang="ts">
	import ExamplePage from '../../../examples/[slug]/+page.svelte';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();
</script>

<ExamplePage {data} />
