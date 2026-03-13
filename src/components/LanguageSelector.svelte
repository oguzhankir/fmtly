<script lang="ts">
	import { locale, setLocale, languages, t } from '$lib/stores/language';
	import { Globe } from 'lucide-svelte';

	let {
		show = $bindable(false),
		onselect = (_code: string) => {}
	}: { show?: boolean; onselect?: (code: string) => void } = $props();

	let searchQuery = $state('');

	const filteredLanguages = $derived(
		languages.filter(
			(lang) =>
				lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);

	function selectLanguage(code: string): void {
		setLocale(code);
		onselect(code);
		show = false;
		searchQuery = '';
	}

	function handleOverlayKeydown(e: KeyboardEvent): void {
		if (e.key === 'Escape') {
			show = false;
			searchQuery = '';
		}
	}
</script>

{#if show}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="overlay"
		role="presentation"
		onclick={() => { show = false; searchQuery = ''; }}
		onkeydown={handleOverlayKeydown}
	>
		<div
			class="modal"
			role="dialog"
			aria-modal="true"
			aria-label={$t('ui.select_language', 'Select language')}
			tabindex="-1"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
		>
			<div class="modal-header">
				<h2 class="modal-title">
					<Globe size={20} />
					{$t('ui.select_language', 'Select Language')}
				</h2>
				<button class="close-btn" onclick={() => { show = false; searchQuery = ''; }} aria-label={$t('ui.close', 'Close')}>{$t('ui.close_icon', '×')}</button>
			</div>

			<div class="search-container">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder={$t('ui.language.search_placeholder', 'Search languages...')}
					class="search-input"
				/>
			</div>

			<div class="language-grid">
				{#each filteredLanguages as lang (lang.code)}
					<button
						class="language-card"
						class:selected={$locale === lang.code}
						onclick={() => selectLanguage(lang.code)}
					>
						<span class="flag">{lang.flag}</span>
						<div class="lang-info">
							<span class="lang-native">{lang.nativeName}</span>
							<span class="lang-english">{lang.name}</span>
						</div>
						{#if $locale === lang.code}
							<svg class="check-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
							</svg>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 20px;
	}
	
	.modal {
		background: var(--bg-elevated);
		border: 1px solid var(--border-default);
		border-radius: 16px;
		max-width: 600px;
		width: 100%;
		max-height: 80vh;
		overflow: hidden;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
	}
	
	.modal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24px 24px 16px;
		border-bottom: 1px solid var(--border-subtle);
	}
	
	.modal-title {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 20px;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0;
	}
	
	.close-btn {
		background: none;
		border: none;
		font-size: 24px;
		color: var(--text-muted);
		cursor: pointer;
		padding: 4px;
		border-radius: 4px;
		transition: all 0.2s;
	}
	
	.close-btn:hover {
		background: var(--bg-hover);
		color: var(--text-primary);
	}
	
	.search-container {
		position: relative;
		padding: 16px 24px;
	}
	
	.search-input {
		width: 100%;
		padding: 10px 10px 10px 12px;
		border: 1px solid var(--border-default);
		border-radius: 8px;
		background: var(--bg-surface);
		color: var(--text-primary);
		font-size: 14px;
		outline: none;
		transition: all 0.2s;
	}
	
	.search-input:focus {
		border-color: var(--border-focus);
		box-shadow: 0 0 0 3px var(--accent-dim);
	}
	
	.language-grid {
		padding: 0 24px 24px;
		display: grid;
		gap: 8px;
		max-height: 400px;
		overflow-y: auto;
	}
	
	.language-card {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 16px;
		border: 1px solid var(--border-subtle);
		border-radius: 8px;
		background: var(--bg-surface);
		cursor: pointer;
		transition: all 0.2s;
		text-align: left;
	}
	
	.language-card:hover {
		background: var(--bg-hover);
		border-color: var(--border-default);
	}
	
	.language-card.selected {
		background: var(--accent-dim);
		border-color: var(--accent);
	}
	
	.flag {
		font-size: 24px;
		line-height: 1;
	}
	
	.lang-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}
	
	.lang-native {
		font-size: 14px;
		font-weight: 500;
		color: var(--text-primary);
	}
	
	.lang-english {
		font-size: 12px;
		color: var(--text-secondary);
	}
	
	.check-icon {
		width: 20px;
		height: 20px;
		color: var(--accent);
		flex-shrink: 0;
	}
	
	/* RTL support */
	:global([dir="rtl"]) .language-card {
		flex-direction: row-reverse;
	}
	
	:global([dir="rtl"]) .modal-title {
		flex-direction: row-reverse;
	}
	
	/* Scrollbar */
	.language-grid::-webkit-scrollbar {
		width: 8px;
	}
	
	.language-grid::-webkit-scrollbar-track {
		background: var(--bg-subtle);
		border-radius: 4px;
	}
	
	.language-grid::-webkit-scrollbar-thumb {
		background: var(--border-default);
		border-radius: 4px;
	}
	
	.language-grid::-webkit-scrollbar-thumb:hover {
		background: var(--border-strong);
	}
</style>
