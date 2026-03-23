<script lang="ts">
	import { get } from 'svelte/store';
	import EncodeToolFrame from '$components/panels/encode/EncodeToolFrame.svelte';
	import { generatePassword, type PasswordGeneratorOptions } from '$engines/generate/index.js';
	import { t } from '$stores/language';
	import { addToast } from '$stores/toast.store';
	import { Copy, RefreshCw } from 'lucide-svelte';

	type ZxcvbnModule = {
		default: (password: string, userInputs?: string[]) => { score: number };
	};

	let options = $state<PasswordGeneratorOptions>({
		length: 20,
		uppercase: true,
		lowercase: true,
		digits: true,
		symbols: true,
		excludeAmbiguous: true,
		separatorEvery: 0
	});
	let password = $state('');
	let strengthLabel = $state('');
	let strengthScore = $state<number | null>(null);
	let strengthTimer: ReturnType<typeof setTimeout> | null = null;
	let zxcvbnLoader: Promise<ZxcvbnModule> | null = null;

	function clearStrengthTimer(): void {
		if (strengthTimer) {
			clearTimeout(strengthTimer);
			strengthTimer = null;
		}
	}

	function regen(): void {
		password = generatePassword(options);
		scheduleStrengthRefresh();
	}

	async function refreshStrength(): Promise<void> {
		if (!password) {
			strengthLabel = '';
			strengthScore = null;
			return;
		}
		try {
			const loader = zxcvbnLoader ?? (zxcvbnLoader = import('zxcvbn'));
			const z = await loader;
			const r = z.default(password);
			strengthScore = r.score;
			strengthLabel = $t(`ui.generate_password.strength.${r.score}`, String(r.score));
		} catch {
			strengthLabel = '';
			strengthScore = null;
		}
	}

	function scheduleStrengthRefresh(): void {
		clearStrengthTimer();
		// Delay heavy scoring so route/tab navigation stays instant.
		strengthTimer = setTimeout(() => {
			void refreshStrength();
		}, 250);
	}

	async function copyPw(): Promise<void> {
		const tr = get(t);
		if (!password) {
			addToast('info', tr('ui.layout.toast.copy_empty', 'Nothing to copy yet'));
			return;
		}
		try {
			await navigator.clipboard.writeText(password);
			addToast('success', tr('ui.toast.copy_success', 'Copied to clipboard'));
		} catch {
			addToast('error', tr('ui.toast.copy_error', 'Copy failed — check browser permissions'));
		}
	}

	$effect(() => {
		void options.length;
		void options.uppercase;
		void options.lowercase;
		void options.digits;
		void options.symbols;
		void options.excludeAmbiguous;
		void options.separatorEvery;
		regen();
	});

	$effect(() => {
		return () => {
			clearStrengthTimer();
		};
	});
</script>

<div class="flex h-full min-h-0 w-full flex-col">
	<EncodeToolFrame>
		{#snippet toolbar()}
			<div class="flex flex-col gap-[var(--space-4)]">
				<div class="flex flex-wrap items-center gap-[var(--space-4)]">
					<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						<span class="font-[number:var(--weight-semibold)]">{$t('ui.generate_password.length', 'Length')}</span>
						<input
							type="range"
							min="8"
							max="128"
							bind:value={options.length}
							class="h-2 w-48 accent-[var(--accent)]"
						/>
						<span class="font-[family-name:var(--font-mono)] text-[var(--text-primary)]">{options.length}</span>
					</label>
					<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						<input type="checkbox" bind:checked={options.uppercase} class="rounded border-[var(--border-default)]" />
						{$t('ui.generate_password.upper', 'A–Z')}
					</label>
					<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						<input type="checkbox" bind:checked={options.lowercase} class="rounded border-[var(--border-default)]" />
						{$t('ui.generate_password.lower', 'a–z')}
					</label>
					<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						<input type="checkbox" bind:checked={options.digits} class="rounded border-[var(--border-default)]" />
						{$t('ui.generate_password.digits', '0–9')}
					</label>
					<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						<input type="checkbox" bind:checked={options.symbols} class="rounded border-[var(--border-default)]" />
						{$t('ui.generate_password.symbols', 'Symbols')}
					</label>
					<label class="flex items-center gap-[var(--space-2)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						<input type="checkbox" bind:checked={options.excludeAmbiguous} class="rounded border-[var(--border-default)]" />
						{$t('ui.generate_password.no_ambiguous', 'Avoid ambiguous')}
					</label>
				</div>
				<div class="flex flex-wrap items-center gap-[var(--space-3)]">
					<label class="flex flex-col gap-[var(--space-1)] text-[length:var(--text-xs)] text-[var(--text-secondary)]">
						<span class="font-[number:var(--weight-semibold)]">{$t('ui.generate_password.groups', 'Dash every N chars (0=off)')}</span>
						<input
							type="number"
							min="0"
							max="16"
							class="h-9 w-20 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-2)]"
							bind:value={options.separatorEvery}
						/>
					</label>
					<button
						type="button"
						class="inline-flex h-9 items-center gap-[var(--space-2)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-3)] text-[length:var(--text-sm)] text-[var(--text-secondary)]"
						onclick={() => {
							regen();
						}}
					>
						<RefreshCw size={16} />
						{$t('ui.generate_password.regenerate', 'Regenerate')}
					</button>
				</div>
			</div>
		{/snippet}
		{#snippet main()}
			<div class="flex h-full min-h-0 flex-1 flex-col gap-[var(--space-3)] p-[var(--space-4)]">
				{#if strengthScore !== null && strengthLabel}
					<p class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
						{$t('ui.generate_password.strength_hint', 'Hint:')} {strengthLabel}
					</p>
				{/if}
				<div class="flex flex-wrap items-center gap-[var(--space-2)]">
					<input
						readonly
						class="min-w-0 flex-1 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-base)] px-[var(--space-3)] py-[var(--space-3)] font-[family-name:var(--font-mono)] text-[length:var(--text-sm)] text-[var(--text-primary)]"
						value={password}
					/>
					<button
						type="button"
						class="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] border border-[var(--border-default)] px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)]"
						onclick={() => {
							void copyPw();
						}}
					>
						<Copy size={16} />
						{$t('ui.actions.copy', 'Copy')}
					</button>
				</div>
				<p class="text-[length:var(--text-xs)] leading-[var(--leading-relaxed)] text-[var(--text-tertiary)]">
					{$t(
						'ui.generate_password.disclaimer',
						'Generated in your browser with Web Crypto. Strength hint uses zxcvbn locally — verify policies for production secrets.'
					)}
				</p>
			</div>
		{/snippet}
	</EncodeToolFrame>
</div>
