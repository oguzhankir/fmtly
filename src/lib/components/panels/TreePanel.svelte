<script lang="ts">
	import TreeView from '$components/tree/TreeView.svelte';
	import { jsonTree } from '$stores/json.store';

	let treeViewRef: TreeView | undefined = $state(undefined);

	export function setDepth(depth: number): void {
		treeViewRef?.setDepth(depth);
	}

	export function expand(): void {
		treeViewRef?.expand();
	}

	export function collapse(): void {
		treeViewRef?.collapse();
	}
</script>

<div class="h-full w-full" role="region" aria-label="JSON Tree View">
	<TreeView bind:this={treeViewRef} nodes={$jsonTree} />
</div>
