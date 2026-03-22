<script lang="ts">
	import { browser } from '$app/environment';
	import {
		decodeUlidTimestamp,
		generateUlidString,
		generateUuidV4String,
		generateUuidV7String
	} from '$engines/crypto/index.js';
	import { output } from '$stores/output.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, RefreshCw } from 'lucide-svelte';

	type Mode = 'uuid4' | 'uuid7' | 'ulid';

	let { toolSlug: _toolSlug }: { toolSlug: string } = $props();

	let mode = $state<Mode>('uuid4');
	let count = $state(5);
	let batch = $state('');
	let decodeInput = $state('');
	let decodeResult = $state('');

	async function refreshBatch(): Promise<void> {
		const lines: string[] = [];
		const n = Math.min(500, Math.max(1, count));
		for (let i = 0; i < n; i++) {
			if (mode === 'uuid4') lines.push(await generateUuidV4String());
			else if (mode === 'uuid7') lines.push(await generateUuidV7String());
			else lines.push(await generateUlidString());
		}
		batch = lines.join('\n');
		output.set(batch);
	}

	async function runDecode(): Promise<void> {
		const u = decodeInput.trim();
		if (!u) {
			decodeResult = '';
			return;
		}
		const d = await decodeUlidTimestamp(u);
		decodeResult = d
			? d.toISOString()
			: $t('ui.uuid.ulid_decode_invalid', 'Not a valid ULID');
	}

	async function copyBatch(): Promise<void> {
		if (!batch) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(batch);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	$effect(() => {
		if (!browser) return;
		mode;
		count;
		void refreshBatch();
	});
</script>

<div class="mx-auto flex w-full max-w-[720px] flex-col gap-[var(--space-5)] p-[var(--space-4)]">
	<p class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
		{$t(
			'ui.uuid.intro',
			'UUID v4, UUID v7, and ULID — generated locally. ULID embeds a timestamp you can decode.'
		)}
	</p>

	<div class="flex flex-wrap gap-[var(--space-2)]">
		{#each [{ id: 'uuid4' as const, label: 'UUID v4' }, { id: 'uuid7' as const, label: 'UUID v7' }, { id: 'ulid' as const, label: 'ULID' }] as opt}
			<button
				type="button"
				class="rounded-[var(--radius-full)] border px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] transition-colors"
				class:border-[var(--accent)]={mode === opt.id}
				class:bg-[var(--accent-dim)]={mode === opt.id}
				class:text-[var(--text-primary)]={mode === opt.id}
				class:border-[var(--border-default)]={mode !== opt.id}
				class:bg-[var(--bg-surface)]={mode !== opt.id}
				class:text-[var(--text-secondary)]={mode !== opt.id}
				onclick={() => {
					mode = opt.id;
				}}
			>
				{opt.label}
			</button>
		{/each}
	</div>

	<div class="flex flex-wrap items-center gap-[var(--space-3)]">
		<label class="text-[length:var(--text-sm)] text-[var(--text-secondary)]" for="uuid-count">
			{$t('ui.uuid.count', 'Count')}
		</label>
		<input
			id="uuid-count"
			type="number"
			min="1"
			max="500"
			class="h-10 w-24 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
			bind:value={count}
		/>
		<button
			type="button"
			class="inline-flex h-10 items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
			onclick={() => {
				void refreshBatch();
			}}
		>
			<RefreshCw size={16} aria-hidden="true" />
			{$t('ui.uuid.regenerate', 'Regenerate')}
		</button>
	</div>

	<div
		class="flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] shadow-[var(--shadow-sm)]"
	>
		<textarea
			class="min-h-[160px] w-full resize-y border-0 bg-transparent px-[var(--space-4)] py-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none"
			readonly
			rows="8"
			value={batch}
			aria-label={$t('ui.uuid.output_label', 'Generated identifiers')}
		></textarea>
		<div
			class="flex flex-wrap items-center justify-end gap-[var(--space-2)] border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-3)] py-[var(--space-2)]"
		>
			<button
				type="button"
				class="inline-flex h-8 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
				onclick={() => {
					void copyBatch();
				}}
			>
				<Copy size={14} aria-hidden="true" />
				{$t('ui.actions.copy', 'Copy')}
			</button>
		</div>
	</div>

	<div class="flex flex-col gap-[var(--space-2)]">
		<label class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wide text-[var(--text-muted)]" for="ulid-decode">
			{$t('ui.uuid.ulid_decode_label', 'Decode ULID time')}
		</label>
		<div class="flex flex-wrap gap-[var(--space-2)]">
			<input
				id="ulid-decode"
				class="h-10 min-w-[200px] flex-1 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)]"
				spellcheck="false"
				bind:value={decodeInput}
				placeholder={$t('ui.uuid.ulid_placeholder', 'Paste a ULID')}
			/>
			<button
				type="button"
				class="h-10 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
				onclick={() => {
					void runDecode();
				}}
			>
				{$t('ui.uuid.decode', 'Decode')}
			</button>
		</div>
		{#if decodeResult}
			<p class="font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)]">
				{decodeResult}
			</p>
		{/if}
	</div>
</div>
