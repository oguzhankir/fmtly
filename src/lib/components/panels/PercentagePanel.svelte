<script lang="ts">
	import { 
		percentOf, 
		percentChange, 
		percentDiff 
	} from '../../engines/number/number.engine';
	import { t } from '$lib/stores/language.js';

	let activeTab = $state<'of' | 'change' | 'diff'>('of');
	
	// "Of" Tab State
	let ofPercent = $state('20');
	let ofTotal = $state('150');
	let ofResult = $derived.by(() => {
		try {
			if (!ofPercent || !ofTotal) return null;
			return percentOf(Number(ofPercent), Number(ofTotal));
		} catch { return null; }
	});

	// "Change" Tab State
	let changeFrom = $state('100');
	let changeTo = $state('150');
	let changeResult = $derived.by(() => {
		try {
			if (!changeFrom || !changeTo) return null;
			return percentChange(Number(changeFrom), Number(changeTo));
		} catch { return null; }
	});

	// "Diff" Tab State
	let diffA = $state('50');
	let diffB = $state('100');
	let diffResult = $derived.by(() => {
		try {
			if (!diffA || !diffB) return null;
			return percentDiff(Number(diffA), Number(diffB));
		} catch { return null; }
	});

	function formatResult(val: number | null, suffix: string = '') {
		if (val === null || isNaN(val)) return '---';
		return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(val) + suffix;
	}
</script>

<div class="flex flex-col h-full bg-[var(--bg-base)] overflow-hidden">
	<!-- Tab Navigation -->
	<div class="flex border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-2)] pt-[var(--space-2)]">
		<button
			class="px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] {activeTab === 'of' ? 'text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}"
			onclick={() => activeTab = 'of'}
		>
			{$t('ui.percentage.tabs.of', 'X% of Y')}
		</button>
		<button
			class="px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] {activeTab === 'change' ? 'text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}"
			onclick={() => activeTab = 'change'}
		>
			{$t('ui.percentage.tabs.change', '% Change')}
		</button>
		<button
			class="px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] {activeTab === 'diff' ? 'text-[var(--color-accent)] border-b-2 border-[var(--color-accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}"
			onclick={() => activeTab = 'diff'}
		>
			{$t('ui.percentage.tabs.diff', '% Difference')}
		</button>
	</div>

	<!-- Active Tab Content -->
	<div class="flex-1 p-[var(--space-8)] flex flex-col items-center justify-center m-auto max-w-2xl w-full">
		
		{#if activeTab === 'of'}
			<div class="flex items-center gap-[var(--space-4)] mb-[var(--space-8)] w-full justify-center text-[length:var(--text-lg)]">
				<input type="number" bind:value={ofPercent} class="w-24 h-12 text-center text-[length:var(--text-lg)] rounded border border-[var(--border-default)] bg-[var(--bg-overlay)] text-[var(--text-primary)] focus:border-[var(--border-focus)] outline-none" placeholder="20" />
				<span class="text-[var(--text-secondary)]">{$t('ui.percentage.labels.percent_of', '% of')}</span>
				<input type="number" bind:value={ofTotal} class="w-32 h-12 text-center text-[length:var(--text-lg)] rounded border border-[var(--border-default)] bg-[var(--bg-overlay)] text-[var(--text-primary)] focus:border-[var(--border-focus)] outline-none" placeholder="150" />
			</div>
			
			<div class="flex flex-col items-center">
				<div class="text-[length:var(--text-4xl)] font-[number:var(--weight-bold)] text-[var(--color-accent)] mb-[var(--space-2)] tracking-tight">
					{formatResult(ofResult)}
				</div>
				<div class="text-[length:var(--text-sm)] text-[var(--text-muted)] font-mono">
					{ofPercent || '0'} / 100 × {ofTotal || '0'}
				</div>
			</div>

		{:else if activeTab === 'change'}
			<div class="flex items-center gap-[var(--space-4)] mb-[var(--space-8)] w-full justify-center text-[length:var(--text-lg)]">
				<span class="text-[var(--text-secondary)]">{$t('ui.percentage.labels.from', 'From')}</span>
				<input type="number" bind:value={changeFrom} class="w-32 h-12 text-center text-[length:var(--text-lg)] rounded border border-[var(--border-default)] bg-[var(--bg-overlay)] text-[var(--text-primary)] focus:border-[var(--border-focus)] outline-none" placeholder="100" />
				<span class="text-[var(--text-secondary)]">{$t('ui.percentage.labels.to', 'to')}</span>
				<input type="number" bind:value={changeTo} class="w-32 h-12 text-center text-[length:var(--text-lg)] rounded border border-[var(--border-default)] bg-[var(--bg-overlay)] text-[var(--text-primary)] focus:border-[var(--border-focus)] outline-none" placeholder="150" />
			</div>
			
			<div class="flex flex-col items-center">
				<div class="text-[length:var(--text-4xl)] font-[number:var(--weight-bold)] {changeResult !== null && changeResult > 0 ? 'text-[var(--color-success)]' : changeResult !== null && changeResult < 0 ? 'text-[var(--color-error)]' : 'text-[var(--text-primary)]'} mb-[var(--space-2)] tracking-tight">
					{#if changeResult !== null && changeResult > 0}↑ {/if}
					{#if changeResult !== null && changeResult < 0}↓ {/if}
					{formatResult(changeResult !== null ? Math.abs(changeResult) : null, '%')}
				</div>
				<div class="text-[length:var(--text-sm)] text-[var(--text-muted)] font-mono">
					(({changeTo || '0'} - {changeFrom || '0'}) / |{changeFrom || '0'}|) × 100
				</div>
			</div>

		{:else if activeTab === 'diff'}
			<div class="flex items-center gap-[var(--space-4)] mb-[var(--space-8)] w-full justify-center text-[length:var(--text-lg)]">
				<input type="number" bind:value={diffA} class="w-32 h-12 text-center text-[length:var(--text-lg)] rounded border border-[var(--border-default)] bg-[var(--bg-overlay)] text-[var(--text-primary)] focus:border-[var(--border-focus)] outline-none" placeholder="50" />
				<span class="text-[var(--text-secondary)]">{$t('ui.percentage.labels.and', 'and')}</span>
				<input type="number" bind:value={diffB} class="w-32 h-12 text-center text-[length:var(--text-lg)] rounded border border-[var(--border-default)] bg-[var(--bg-overlay)] text-[var(--text-primary)] focus:border-[var(--border-focus)] outline-none" placeholder="100" />
			</div>
			
			<div class="flex flex-col items-center">
				<div class="text-[length:var(--text-4xl)] font-[number:var(--weight-bold)] text-[var(--color-accent)] mb-[var(--space-2)] tracking-tight">
					{formatResult(diffResult, '%')}
				</div>
				<div class="text-[length:var(--text-sm)] text-[var(--text-muted)] font-mono">
					|{diffA || '0'} - {diffB || '0'}| / (({diffA || '0'} + {diffB || '0'}) / 2) × 100
				</div>
			</div>
		{/if}

	</div>
</div>
