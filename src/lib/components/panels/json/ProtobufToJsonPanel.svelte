<script lang="ts">
	import InputPanel from '$components/panels/shared/InputPanel.svelte';
	import { t } from '$stores/language';
	import { Download } from 'lucide-svelte';
	import { output } from '$stores/output.store';
	import {
		jsonProtobufMessageTypes,
		jsonProtobufSelectedMessageType,
		jsonProtobufError,
		setProtobufSelectedMessageType
	} from '$stores/json.store';

	let {
		toolSlug,
		inputLanguage,
		sampleInput = '',
		downloadFilename = 'output'
	}: {
		toolSlug: string;
		inputLanguage: string;
		sampleInput?: string;
		downloadFilename?: string;
	} = $props();

	function handleMessageTypeChange(event: Event): void {
		const next = (event.currentTarget as HTMLSelectElement).value;
		setProtobufSelectedMessageType(next);
	}

	async function handleDownload(): Promise<void> {
		const value = $output;
		if (!value) return;

		const blob = new Blob([value], { type: 'application/json;charset=utf-8' });
		const url = URL.createObjectURL(blob);

		const a = document.createElement('a');
		a.href = url;
		a.download = `${downloadFilename}.json`;
		a.click();

		URL.revokeObjectURL(url);
	}
</script>

<div class="flex h-full w-full flex-col gap-[var(--space-4)]">
	<InputPanel
		toolSlug={toolSlug}
		inputLanguage={inputLanguage}
		sampleInput={sampleInput}
		acceptedExtensions={['.proto', '.txt']}
	/>

	<div class="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-[var(--space-4)]">
		<div class="mb-[var(--space-4)]">
			<div class="mb-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
				{$t('tool.json-from-protobuf.message_type', 'Message type')}
			</div>
			<select
				value={$jsonProtobufSelectedMessageType}
				onchange={handleMessageTypeChange}
				class="w-full rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
				disabled={$jsonProtobufMessageTypes.length === 0}
				aria-label={$t('tool.json-from-protobuf.message_type', 'Message type')}
			>
				{#if $jsonProtobufMessageTypes.length === 0}
					<option value="" disabled>
						{$t('tool.json-from-protobuf.select_message_type', 'Select a message type')}
					</option>
				{:else}
					{#each $jsonProtobufMessageTypes as item (item.fullName)}
						<option value={item.fullName}>
							{item.fullName}
						</option>
					{/each}
				{/if}
			</select>
		</div>

		{#if $jsonProtobufError}
			<div class="mb-[var(--space-4)] rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-[var(--space-3)]">
				<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{$t('ui.error', 'Error')}
				</div>
				<div class="mt-[var(--space-2)] whitespace-pre-wrap font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-secondary)]">
					{$jsonProtobufError}
				</div>
			</div>
		{/if}

		<div class="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-base)] p-[var(--space-3)]">
			<div class="mb-[var(--space-3)] flex items-center justify-between gap-[var(--space-3)]">
				<div class="text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-[var(--text-primary)]">
					{$t('ui.layout.placeholders.output', 'Output')}
				</div>

				<button
					onclick={() => { void handleDownload(); }}
					class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] bg-[var(--bg-surface)] px-[var(--space-2)] py-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]"
					aria-label={$t('ui.layout.aria.download_output', 'Download output')}
				>
					<Download size={12} />
					{$t('ui.actions.download', 'Download')}
				</button>
			</div>

			{#if $output}
				<pre class="overflow-auto whitespace-pre-wrap break-words font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] leading-[var(--leading-relaxed)] text-[var(--text-primary)]">
					<code>{$output}</code>
				</pre>
			{:else}
				<p class="text-[length:var(--text-sm)] text-[var(--text-tertiary)]">
					{$t('tool.output_placeholder', 'Output will appear here')}
				</p>
			{/if}
		</div>
	</div>
</div>

