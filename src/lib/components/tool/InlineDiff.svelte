<script lang="ts">
	import { computeInlineDiff, type InlineDiffPart } from "$engines/text/inline-diff";

	let { oldStr, newStr, type, expanded = false }: { oldStr: any, newStr: any, type: "old" | "new", expanded?: boolean } = $props();

	// Ensure we handle objects/arrays derived from JSON parsing if they bleed into here
	function toString(val: any): string {
		if (val === undefined) return "—";
		if (val === null) return "null";
		if (typeof val === "object") return JSON.stringify(val);
		return String(val);
	}

	const left = $derived(toString(oldStr));
	const right = $derived(toString(newStr));

	const diffParts = $derived.by(() => {
		const parts = computeInlineDiff(left, right);
		if (expanded) return parts;

		// Truncate logic
		let totalLen = 0;
		const MAX = 160;
		const truncated: InlineDiffPart[] = [];

		for (const p of parts) {
			if (totalLen + p.value.length > MAX) {
				truncated.push({
					value: p.value.slice(0, MAX - totalLen) + "…",
					type: p.type
				});
				break;
			}
			truncated.push(p);
			totalLen += p.value.length;
		}
		return truncated;
	});
</script>

<div class="inline-diff">
	{#each diffParts as part}
		{#if type === "old"}
			{#if part.type === "unchanged"}
				<span>{part.value}</span>
			{:else if part.type === "removed"}
				<span class="inline-diff--removed">{part.value}</span>
			{/if}
		{:else if type === "new"}
			{#if part.type === "unchanged"}
				<span>{part.value}</span>
			{:else if part.type === "added"}
				<span class="inline-diff--added">{part.value}</span>
			{/if}
		{/if}
	{/each}
</div>

<style>
	.inline-diff {
		display: inline;
		word-break: break-all;
		white-space: pre-wrap;
	}

	.inline-diff--removed {
		background-color: color-mix(in srgb, var(--status-error) 25%, transparent);
		text-decoration: line-through;
		border-radius: 2px;
	}

	.inline-diff--added {
		background-color: color-mix(in srgb, var(--status-success) 25%, transparent);
		border-radius: 2px;
	}
</style>
