<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { get } from 'svelte/store';
	import { decodeCertificatePem, type DecodedCertificate } from '$engines/crypto/index.js';
	import { initInput, input } from '$stores/input.store';
	import { clearOutput, output } from '$stores/output.store';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, RefreshCw } from 'lucide-svelte';

	let { toolSlug }: { toolSlug: string } = $props();

	let decoded = $state<DecodedCertificate | null>(null);
	let isBusy = $state(false);
	let initSlug = $state('');

	async function runDecode(): Promise<void> {
		const pem = $input.trim();
		if (!pem) {
			decoded = null;
			clearOutput();
			return;
		}
		isBusy = true;
		try {
			const d = await decodeCertificatePem(pem);
			decoded = d;
			const lines = [
				`${$t('ui.cert.subject', 'Subject')}: ${d.subject}`,
				`${$t('ui.cert.issuer', 'Issuer')}: ${d.issuer}`,
				`${$t('ui.cert.serial', 'Serial')}: ${d.serialNumber}`,
				`${$t('ui.cert.valid_from', 'Valid from')}: ${d.notBefore}`,
				`${$t('ui.cert.valid_to', 'Valid to')}: ${d.notAfter}`,
				`${$t('ui.cert.sig_alg', 'Signature')}: ${d.signatureAlgorithm}`,
				`${$t('ui.cert.public_key', 'Public key')}: ${d.publicKeySummary}`,
				`${$t('ui.cert.fp256', 'SHA-256 fingerprint')}: ${d.fingerprintSha256}`,
				d.san.length
					? `${$t('ui.cert.san', 'Subject Alternative Names')}:\n${d.san.map((s) => `  • ${s}`).join('\n')}`
					: `${$t('ui.cert.san', 'Subject Alternative Names')}: —`
			];
			output.set(lines.join('\n'));
		} catch {
			decoded = null;
			clearOutput();
		} finally {
			isBusy = false;
		}
	}

	async function copyOut(): Promise<void> {
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

	onMount(() => {
		initInput(toolSlug);
		initSlug = toolSlug;
		if (get(input).length === 0) {
			input.set('');
		}
		void runDecode();
	});

	$effect(() => {
		if (initSlug === '' || initSlug === toolSlug) return;
		initInput(toolSlug);
		initSlug = toolSlug;
		void runDecode();
	});

	$effect(() => {
		if (!browser) return;
		$input;
		void runDecode();
	});

	const fieldClass =
		'min-h-[160px] w-full rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-4)] py-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-xs)] text-[var(--text-primary)] shadow-[var(--shadow-sm)] outline-none focus-visible:border-[var(--accent-border)] focus-visible:ring-2 focus-visible:ring-[var(--accent-dim)]';
</script>

<div class="mx-auto flex w-full max-w-[720px] flex-col gap-[var(--space-5)] p-[var(--space-4)]">
	<p class="text-[length:var(--text-sm)] text-[var(--text-secondary)]">
		{$t(
			'ui.cert.intro',
			'Inspect PEM X.509 certificates: subject, validity, SANs, fingerprint — parsed locally.'
		)}
	</p>

	<label class="text-[length:var(--text-xs)] font-[number:var(--weight-semibold)] uppercase tracking-wide text-[var(--text-muted)]" for="cert-pem">
		{$t('ui.cert.pem_label', 'PEM certificate')}
	</label>
	<textarea
		id="cert-pem"
		class={fieldClass}
		rows="10"
		spellcheck="false"
		placeholder={$t('ui.cert.placeholder_hint', 'Paste a PEM-encoded certificate…')}
		bind:value={$input}
		aria-label={$t('ui.cert.pem_label', 'PEM certificate')}
	></textarea>

	{#if decoded}
		<div
			class="grid gap-[var(--space-3)] rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-[var(--space-4)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
		>
			<div><span class="text-[var(--text-muted)]">{$t('ui.cert.subject', 'Subject')}</span><br />{decoded.subject}</div>
			<div><span class="text-[var(--text-muted)]">{$t('ui.cert.issuer', 'Issuer')}</span><br />{decoded.issuer}</div>
			<div class="grid gap-[var(--space-1)] sm:grid-cols-2">
				<div>
					<span class="text-[var(--text-muted)]">{$t('ui.cert.valid_from', 'Valid from')}</span><br />{decoded.notBefore}
				</div>
				<div>
					<span class="text-[var(--text-muted)]">{$t('ui.cert.valid_to', 'Valid to')}</span><br />{decoded.notAfter}
				</div>
			</div>
			<div>
				<span class="text-[var(--text-muted)]">{$t('ui.cert.fp256', 'SHA-256 fingerprint')}</span><br />
				<span class="break-all font-[family-name:var(--font-mono)] text-[length:var(--text-xs)]">{decoded.fingerprintSha256}</span>
			</div>
			{#if decoded.san.length}
				<div>
					<span class="text-[var(--text-muted)]">{$t('ui.cert.san', 'Subject Alternative Names')}</span>
					<ul class="mt-[var(--space-2)] list-disc pl-[var(--space-5)]">
						{#each decoded.san as s}
							<li>{s}</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
	{/if}

	<div class="flex flex-wrap items-center justify-end gap-[var(--space-2)]">
		<button
			type="button"
			class="inline-flex h-8 items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-[var(--space-2)] text-[length:var(--text-xs)] font-[number:var(--weight-medium)] text-[var(--text-secondary)]"
			onclick={() => {
				void copyOut();
			}}
		>
			<Copy size={14} aria-hidden="true" />
			{$t('ui.actions.copy', 'Copy')}
		</button>
		<button
			type="button"
			class="flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] text-[var(--text-secondary)]"
			aria-label={$t('ui.cert.redo', 'Decode again')}
			disabled={isBusy}
			onclick={() => {
				void runDecode();
			}}
		>
			<RefreshCw size={15} class={isBusy ? 'animate-spin' : ''} aria-hidden="true" />
		</button>
	</div>
</div>
