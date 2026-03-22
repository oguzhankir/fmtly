<script lang="ts">
	import { browser } from '$app/environment';
	import { computeTotp, type TotpAlgorithmId } from '$engines/crypto/index.js';
	import { clearOutput, output } from '$stores/output.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, RefreshCw } from 'lucide-svelte';

	let { toolSlug: _toolSlug }: { toolSlug: string } = $props();

	let secret = $state('JBSWY3DPEHPK3PXP');
	let period = $state(30);
	let digits = $state(6);
	let algorithm = $state<TotpAlgorithmId>('SHA-1');
	let code = $state('');
	let isBusy = $state(false);

	const algs: TotpAlgorithmId[] = ['SHA-1', 'SHA-256', 'SHA-512'];

	async function refresh(): Promise<void> {
		isBusy = true;
		try {
			const p = Math.min(10, Math.max(4, Math.floor(Number(digits)) || 6));
			const per = Math.min(300, Math.max(5, Math.floor(Number(period)) || 30));
			const c = await computeTotp(secret, { period: per, digits: p, algorithm });
			code = c;
			output.set(`${$t('ui.totp.code_label', 'Code')}: ${c}`);
		} catch {
			code = '';
			clearOutput();
			addToast('error', $t('ui.totp.error_failed', 'Invalid secret or settings.'));
		} finally {
			isBusy = false;
		}
	}

	async function copyCode(): Promise<void> {
		if (!code) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(code);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	$effect(() => {
		if (!browser) return;
		secret;
		period;
		digits;
		algorithm;
		void refresh();
		const id = setInterval(() => {
			void refresh();
		}, 1000);
		return () => clearInterval(id);
	});
</script>

<div class="mx-auto flex w-full max-w-[720px] flex-col gap-[var(--space-5)] p-[var(--space-4)]">
	<p class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
		{$t(
			'ui.totp.intro',
			'RFC 6238 TOTP from a Base32 secret. Matches authenticator apps when settings align.'
		)}
	</p>

	<label class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wide text-[var(--text-muted)]" for="totp-secret">
		{$t('ui.totp.secret_label', 'Secret (Base32)')}
	</label>
	<input
		id="totp-secret"
		class="h-11 w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none focus-visible:border-[var(--accent-border)] focus-visible:ring-2 focus-visible:ring-[var(--accent-dim)]"
		spellcheck="false"
		autocomplete="off"
		bind:value={secret}
		aria-label={$t('ui.totp.secret_label', 'Secret (Base32)')}
	/>

	<div class="flex flex-wrap gap-[var(--space-4)]">
		<div class="flex flex-col gap-[var(--space-1)]">
			<label class="text-[length:var(--text-xs)] text-[var(--text-muted)]" for="totp-period">{$t('ui.totp.period', 'Period (s)')}</label>
			<input
				id="totp-period"
				type="number"
				min="5"
				max="300"
				class="h-10 w-24 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-2)]"
				bind:value={period}
			/>
		</div>
		<div class="flex flex-col gap-[var(--space-1)]">
			<label class="text-[length:var(--text-xs)] text-[var(--text-muted)]" for="totp-digits">{$t('ui.totp.digits', 'Digits')}</label>
			<input
				id="totp-digits"
				type="number"
				min="4"
				max="10"
				class="h-10 w-24 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-2)]"
				bind:value={digits}
			/>
		</div>
	</div>

	<div class="flex flex-wrap gap-[var(--space-2)]">
		{#each algs as a}
			<button
				type="button"
				class="rounded-[var(--radius-full)] border px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)]"
				class:border-[var(--accent)]={algorithm === a}
				class:bg-[var(--accent-dim)]={algorithm === a}
				class:border-[var(--border-default)]={algorithm !== a}
				class:bg-[var(--bg-surface)]={algorithm !== a}
				onclick={() => {
					algorithm = a;
				}}
			>
				{a}
			</button>
		{/each}
	</div>

	<div
		class="flex flex-col items-center justify-center gap-[var(--space-3)] rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-6)] py-[var(--space-8)]"
	>
		<span class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wider text-[var(--text-muted)]">
			{$t('ui.totp.code_label', 'Code')}
		</span>
		<span class="font-[family-name:var(--font-mono)] text-[length:var(--text-4xl)] font-[number:var(--weight-semibold)] tracking-widest text-[var(--text-primary)]">
			{code || '—'}
		</span>
		<div class="flex gap-[var(--space-2)]">
			<button
				type="button"
				class="inline-flex h-9 items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] text-[length:var(--text-sm)]"
				onclick={() => {
					void copyCode();
				}}
			>
				<Copy size={16} aria-hidden="true" />
				{$t('ui.actions.copy', 'Copy')}
			</button>
			<button
				type="button"
				class="inline-flex h-9 items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] text-[length:var(--text-sm)]"
				disabled={isBusy}
				onclick={() => {
					void refresh();
				}}
			>
				<RefreshCw size={16} class={isBusy ? 'animate-spin' : ''} aria-hidden="true" />
				{$t('ui.totp.refresh', 'Refresh')}
			</button>
		</div>
	</div>
</div>
