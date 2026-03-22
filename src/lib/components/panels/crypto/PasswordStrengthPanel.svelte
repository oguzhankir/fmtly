<script lang="ts">
	import { onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import {
		bandFromZxcvbnScore,
		entropyToCrackSeconds,
		estimateEntropyBits,
		fetchPwnedPasswordCount,
		formatDurationSeconds,
		scorePasswordZxcvbn,
		sha1HexUpper,
		type PasswordStrengthBand
	} from '$engines/crypto/index.js';
	import { clearOutput, output } from '$stores/output.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, Shield } from 'lucide-svelte';

	let { toolSlug: _toolSlug }: { toolSlug?: string } = $props();

	let password = $state('');
	let showPassword = $state(false);
	let zxcvbnScore = $state<number | null>(null);
	let entropyBits = $state(0);
	let crackStr = $state('');
	let pwnedCount = $state<number | null>(null);
	let pwnedLoading = $state(false);
	let band = $state<PasswordStrengthBand>('very_weak');
	let debounceTimer: ReturnType<typeof setTimeout> | null = null;

	function bandLabel(b: PasswordStrengthBand): string {
		switch (b) {
			case 'very_weak':
				return $t('ui.password_strength.band.very_weak', 'Very weak');
			case 'weak':
				return $t('ui.password_strength.band.weak', 'Weak');
			case 'fair':
				return $t('ui.password_strength.band.fair', 'Fair');
			case 'good':
				return $t('ui.password_strength.band.good', 'Good');
			case 'strong':
				return $t('ui.password_strength.band.strong', 'Strong');
			default:
				return '';
		}
	}

	function scheduleAnalyze(): void {
		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			debounceTimer = null;
			void analyze();
		}, 200);
	}

	async function analyze(): Promise<void> {
		const pwd = password;
		if (!pwd) {
			clearOutput();
			zxcvbnScore = null;
			entropyBits = 0;
			crackStr = '';
			pwnedCount = null;
			return;
		}
		const ent = estimateEntropyBits(pwd);
		entropyBits = ent;
		const crack = entropyToCrackSeconds(ent);
		crackStr = formatDurationSeconds(crack);
		try {
			const zx = await scorePasswordZxcvbn(pwd);
			zxcvbnScore = zx.score;
			band = bandFromZxcvbnScore(zx.score);
		} catch {
			zxcvbnScore = null;
			band = 'very_weak';
		}
		pwnedLoading = true;
		pwnedCount = null;
		try {
			const sha1 = await sha1HexUpper(pwd);
			pwnedCount = await fetchPwnedPasswordCount(sha1);
		} catch {
			pwnedCount = null;
		} finally {
			pwnedLoading = false;
		}
		const summary = [
			`${$t('ui.password_strength.summary.entropy', 'Entropy (estimate)')}: ${ent.toFixed(1)} bits`,
			`${$t('ui.password_strength.summary.crack', 'Crack time (rough)')}: ${crackStr}`,
			zxcvbnScore !== null
				? `${$t('ui.password_strength.summary.zxcvbn', 'zxcvbn score')}: ${zxcvbnScore}/4`
				: '',
			pwnedCount !== null
				? `${$t('ui.password_strength.summary.pwned', 'Known breaches (HIBP)')}: ${pwnedCount.toLocaleString()}`
				: $t('ui.password_strength.summary.pwned_unknown', 'Breach check unavailable (offline or error).')
		]
			.filter(Boolean)
			.join('\n');
		output.set(summary);
	}

	async function copySummary(): Promise<void> {
		const v = $output;
		if (!v) {
			addToast('info', $t('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(v);
			addToast('success', $t('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', $t('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	onDestroy(() => {
		if (debounceTimer) clearTimeout(debounceTimer);
	});

	$effect(() => {
		if (!browser) return;
		password;
		scheduleAnalyze();
	});

	const pillClass =
		'rs-pw-band inline-flex items-center gap-[var(--space-2)] rounded-[var(--radius-full)] px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--text-xs)] font-[number:var(--weight-semibold)]';
</script>

<div class="mx-auto flex w-full max-w-[720px] flex-col gap-[var(--space-5)] p-[var(--space-4)]">
	<p class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
		{$t(
			'ui.password_strength.intro',
			'Entropy, zxcvbn score, and Have I Been Pwned (k-anonymity). Your password never leaves the browser except the anonymous range query.'
		)}
	</p>

	<div class="flex flex-col gap-[var(--space-2)]">
		<label class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wide text-[var(--text-muted)]" for="pw-field">
			{$t('ui.password_strength.field_label', 'Password')}
		</label>
		<div class="flex gap-[var(--space-2)]">
			<input
				id="pw-field"
				class="h-11 flex-1 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)] outline-none focus-visible:border-[var(--accent-border)] focus-visible:ring-2 focus-visible:ring-[var(--accent-dim)]"
				type={showPassword ? 'text' : 'password'}
				autocomplete="off"
				spellcheck="false"
				bind:value={password}
				aria-label={$t('ui.password_strength.field_label', 'Password')}
			/>
			<button
				type="button"
				class="h-11 shrink-0 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] text-[length:var(--text-xs)] text-[var(--text-secondary)]"
				onclick={() => {
					showPassword = !showPassword;
				}}
			>
				{showPassword
					? $t('ui.password_strength.hide', 'Hide')
					: $t('ui.password_strength.show', 'Show')}
			</button>
		</div>
	</div>

	<div class="flex flex-wrap items-center gap-[var(--space-3)]">
		<span class={pillClass} data-band={band}>
			<Shield size={14} aria-hidden="true" />
			{bandLabel(band)}
		</span>
		<span class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
			{entropyBits.toFixed(1)} {$t('ui.password_strength.bits', 'bits')}
			· {crackStr}
		</span>
	</div>

	<div class="grid gap-[var(--space-2)] rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] p-[var(--space-4)] text-[length:var(--text-sm)] text-[var(--text-primary)]">
		<div class="flex justify-between gap-[var(--space-2)]">
			<span class="text-[var(--text-muted)]">{$t('ui.password_strength.zxcvbn_label', 'zxcvbn score')}</span>
			<span>{zxcvbnScore !== null ? `${zxcvbnScore}/4` : '—'}</span>
		</div>
		<div class="flex justify-between gap-[var(--space-2)]">
			<span class="text-[var(--text-muted)]">{$t('ui.password_strength.hibp_label', 'HIBP count')}</span>
			<span>
				{#if pwnedLoading}
					…
				{:else if pwnedCount !== null}
					{pwnedCount.toLocaleString()}
				{:else}
					—
				{/if}
			</span>
		</div>
	</div>

	<div
		class="flex flex-wrap items-center justify-end gap-[var(--space-2)] border-t border-[var(--border-subtle)] pt-[var(--space-3)]"
	>
		<button
			type="button"
			class="inline-flex h-8 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
			onclick={() => {
				void copySummary();
			}}
		>
			<Copy size={14} aria-hidden="true" />
			{$t('ui.actions.copy', 'Copy')}
		</button>
	</div>
</div>

<style>
	.rs-pw-band[data-band='very_weak'] {
		background: color-mix(in srgb, var(--text-muted) 18%, transparent);
		color: var(--text-secondary);
	}
	.rs-pw-band[data-band='weak'] {
		background: color-mix(in srgb, var(--accent) 12%, transparent);
		color: var(--text-primary);
	}
	.rs-pw-band[data-band='fair'] {
		background: color-mix(in srgb, var(--accent) 20%, transparent);
		color: var(--text-primary);
	}
	.rs-pw-band[data-band='good'] {
		background: color-mix(in srgb, var(--accent) 28%, transparent);
		color: var(--text-primary);
	}
	.rs-pw-band[data-band='strong'] {
		background: color-mix(in srgb, var(--accent) 38%, transparent);
		color: var(--text-primary);
	}
</style>
