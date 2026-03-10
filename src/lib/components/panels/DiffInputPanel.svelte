<script lang="ts">
	let {
		value = '',
		onchange,
		language = 'json',
		placeholder = 'Paste JSON here…'
	}: {
		value?: string;
		onchange?: (value: string) => void;
		language?: string;
		placeholder?: string;
	} = $props();

	function handleInput(event: Event): void {
		const target = event.target as HTMLTextAreaElement;
		onchange?.(target.value);
	}
</script>

<div class="flex h-full w-full flex-col">
	<textarea
		{value}
		oninput={handleInput}
		{placeholder}
		class="h-full w-full resize-none border-none bg-transparent p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none"
		spellcheck="false"
		autocomplete="off"
	></textarea>
</div>
