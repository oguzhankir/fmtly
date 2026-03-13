<script lang="ts">
	import ToolPage from '../../../[category]/[tool]/+page.svelte';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();
</script>

<ToolPage {data} />
