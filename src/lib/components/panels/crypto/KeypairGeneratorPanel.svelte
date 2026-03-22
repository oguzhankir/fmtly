<script lang="ts">
	import { browser } from '$app/environment';
	import {
		generateEcKeyPairPem,
		generateRsaKeyPairPem,
		type EcNamedCurve,
		type RsaModulusBits
	} from '$engines/crypto/index.js';
	import { clearOutput, output } from '$stores/output.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, KeyRound } from 'lucide-svelte';

	type Kind = 'rsa' | 'ec';

	let { toolSlug: _toolSlug }: { toolSlug: string } = $props();

	let kind = $state<Kind>('rsa');
	let rsaBits = $state<RsaModulusBits>(2048);
	let ecCurve = $state<EcNamedCurve>('P-256');
	let isBusy = $state(false);
	let publicPem = $state('');
	let privatePem = $state('');

	async function generate(): Promise<void> {
		isBusy = true;
		try {
			if (kind === 'rsa') {
				const p = await generateRsaKeyPairPem(rsaBits);
				publicPem = p.publicPem;
				privatePem = p.privatePem;
			} else {
				const p = await generateEcKeyPairPem(ecCurve);
				publicPem = p.publicPem;
				privatePem = p.privatePem;
			}
			output.set(`${publicPem}\n${privatePem}`);
		} catch {
			clearOutput();
			addToast('error', $t('ui.keypair.error_failed', 'Could not generate key pair.'));
		} finally {
			isBusy = false;
		}
	}

	async function copyPem(which: 'public' | 'private'): Promise<void> {
		const text = which === 'public' ? publicPem : privatePem;
		if (!text.trim()) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(text);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	$effect(() => {
		if (!browser) return;
		kind;
		rsaBits;
		ecCurve;
		void generate();
	});
</script>

<div
	class="mx-auto flex w-full max-w-[1100px] flex-col gap-[var(--space-4)] p-[var(--space-4)]"
>
	<p class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
		{$t(
			'ui.keypair.intro',
			'RSA (PSS) and ECDSA key pairs exported as PEM. Generated only in your browser via Web Crypto.'
		)}
	</p>

	<div
		class="grid min-h-[min(72vh,720px)] grid-cols-1 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-base)] shadow-[var(--shadow-sm)] xl:grid-cols-[minmax(280px,0.42fr)_minmax(0,1fr)] xl:divide-x xl:divide-[var(--border-default)]"
	>
		<div
			class="flex flex-col gap-[var(--space-4)] border-b border-[var(--border-default)] p-[var(--space-4)] xl:border-b-0"
		>
			<div class="flex flex-wrap gap-[var(--space-2)]">
				<button
					type="button"
					class="rounded-[var(--radius-full)] border px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] transition-colors"
					class:border-[var(--accent)]={kind === 'rsa'}
					class:bg-[var(--accent-dim)]={kind === 'rsa'}
					class:text-[var(--text-primary)]={kind === 'rsa'}
					class:border-[var(--border-default)]={kind !== 'rsa'}
					class:bg-[var(--bg-surface)]={kind !== 'rsa'}
					class:text-[var(--text-secondary)]={kind !== 'rsa'}
					onclick={() => {
						kind = 'rsa';
					}}
				>
					RSA
				</button>
				<button
					type="button"
					class="rounded-[var(--radius-full)] border px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] transition-colors"
					class:border-[var(--accent)]={kind === 'ec'}
					class:bg-[var(--accent-dim)]={kind === 'ec'}
					class:text-[var(--text-primary)]={kind === 'ec'}
					class:border-[var(--border-default)]={kind !== 'ec'}
					class:bg-[var(--bg-surface)]={kind !== 'ec'}
					class:text-[var(--text-secondary)]={kind !== 'ec'}
					onclick={() => {
						kind = 'ec';
					}}
				>
					ECDSA
				</button>
			</div>

			{#if kind === 'rsa'}
				<div class="flex flex-wrap gap-[var(--space-2)]">
					{#each [2048, 4096] as b}
						<button
							type="button"
							class="rounded-[var(--radius-md)] border px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] transition-colors"
							class:border-[var(--accent)]={rsaBits === b}
							class:bg-[var(--accent-dim)]={rsaBits === b}
							class:text-[var(--text-primary)]={rsaBits === b}
							class:border-[var(--border-default)]={rsaBits !== b}
							class:bg-[var(--bg-surface)]={rsaBits !== b}
							class:text-[var(--text-secondary)]={rsaBits !== b}
							onclick={() => {
								rsaBits = b as RsaModulusBits;
							}}
						>
							{b} {$t('ui.keypair.bits', 'bits')}
						</button>
					{/each}
				</div>
			{:else}
				<div class="flex flex-wrap gap-[var(--space-2)]">
					{#each ['P-256', 'P-384'] as c}
						<button
							type="button"
							class="rounded-[var(--radius-md)] border px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] transition-colors"
							class:border-[var(--accent)]={ecCurve === c}
							class:bg-[var(--accent-dim)]={ecCurve === c}
							class:text-[var(--text-primary)]={ecCurve === c}
							class:border-[var(--border-default)]={ecCurve !== c}
							class:bg-[var(--bg-surface)]={ecCurve !== c}
							class:text-[var(--text-secondary)]={ecCurve !== c}
							onclick={() => {
								ecCurve = c as EcNamedCurve;
							}}
						>
							{c}
						</button>
					{/each}
				</div>
			{/if}

			<div class="mt-auto pt-[var(--space-2)]">
				<button
					type="button"
					class="inline-flex h-11 w-full items-center justify-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--accent)] px-[var(--space-4)] text-[length:var(--text-sm)] font-[number:var(--weight-semibold)] text-white shadow-[var(--shadow-sm)] hover:bg-[var(--accent-hover)] disabled:opacity-50"
					disabled={isBusy}
					onclick={() => {
						void generate();
					}}
				>
					<KeyRound size={18} aria-hidden="true" />
					{$t('ui.keypair.generate', 'Generate')}
				</button>
			</div>
		</div>

		<div class="flex min-h-0 flex-col gap-0 bg-[var(--bg-surface)]">
			<div
				class="grid min-h-0 flex-1 grid-cols-1 gap-0 lg:grid-cols-2 lg:divide-x lg:divide-[var(--border-default)]"
			>
				<div class="flex min-h-0 flex-col border-b border-[var(--border-default)] lg:border-b-0">
					<div
						class="flex shrink-0 items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-subtle)] px-[var(--space-3)] py-[var(--space-2)]"
					>
						<span
							class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wide text-[var(--text-muted)]"
						>
							{$t('ui.keypair.public', 'Public key')}
						</span>
						<button
							type="button"
							class="inline-flex h-8 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
							onclick={() => {
								void copyPem('public');
							}}
						>
							<Copy size={14} aria-hidden="true" />
							{$t('ui.actions.copy', 'Copy')}
						</button>
					</div>
					<pre
						class="min-h-[min(240px,32vh)] flex-1 overflow-auto p-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] leading-relaxed text-[var(--text-primary)]"
					>{publicPem || '—'}</pre>
				</div>
				<div class="flex min-h-0 flex-col">
					<div
						class="flex shrink-0 items-center justify-between gap-[var(--space-2)] border-b border-[var(--border-subtle)] px-[var(--space-3)] py-[var(--space-2)]"
					>
						<span
							class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wide text-[var(--text-muted)]"
						>
							{$t('ui.keypair.private', 'Private key')}
						</span>
						<button
							type="button"
							class="inline-flex h-8 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
							onclick={() => {
								void copyPem('private');
							}}
						>
							<Copy size={14} aria-hidden="true" />
							{$t('ui.actions.copy', 'Copy')}
						</button>
					</div>
					<pre
						class="min-h-[min(240px,32vh)] flex-1 overflow-auto p-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] leading-relaxed text-[var(--text-primary)]"
					>{privatePem || '—'}</pre>
				</div>
			</div>
		</div>
	</div>
</div>
