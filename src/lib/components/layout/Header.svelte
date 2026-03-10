<script lang="ts">
	import { getToolsByCategory } from '$registry';
	import { theme, toggleTheme } from '$stores/settings.store';
	import { Moon, Sun, ChevronDown } from 'lucide-svelte';

	type NavCategory = {
		label: string;
		category: string;
	};

	const navCategories: NavCategory[] = [
		{ label: 'JSON', category: 'json' },
		{ label: 'XML', category: 'xml' },
		{ label: 'YAML', category: 'yaml' },
		{ label: 'CSS', category: 'css' }
	];

	const mainCategorySlugs = navCategories.map((c) => c.category);

	let activeDropdown = $state<string | null>(null);
	let closeTimeout: ReturnType<typeof setTimeout> | undefined;

	function openDropdown(category: string): void {
		if (closeTimeout) {
			clearTimeout(closeTimeout);
			closeTimeout = undefined;
		}
		activeDropdown = category;
	}

	function scheduleClose(): void {
		closeTimeout = setTimeout(() => {
			activeDropdown = null;
			closeTimeout = undefined;
		}, 150);
	}

	function cancelClose(): void {
		if (closeTimeout) {
			clearTimeout(closeTimeout);
			closeTimeout = undefined;
		}
	}

	function closeDropdown(): void {
		activeDropdown = null;
		if (closeTimeout) {
			clearTimeout(closeTimeout);
			closeTimeout = undefined;
		}
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape') {
			closeDropdown();
		}
	}

	function handleThemeToggle(): void {
		toggleTheme();
	}
</script>

<header
	class="fixed top-0 left-0 right-0 z-[var(--z-sticky)] flex h-[var(--header-height)] items-center border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-[var(--space-4)]"
>
	<!-- Left: Logo -->
	<a
		href="/"
		class="font-[family-name:var(--font-mono)] text-[length:var(--text-lg)] font-[number:var(--weight-semibold)] text-[var(--text-primary)] no-underline"
	>
		fmtly
	</a>

	<!-- Center: Category navigation -->
	<nav class="flex flex-1 items-center justify-center gap-[var(--space-1)]">
		{#each navCategories as navCat}
			<div
				class="relative"
				role="none"
				onmouseenter={() => openDropdown(navCat.category)}
				onmouseleave={scheduleClose}
			>
				<button
					class="flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] px-[var(--space-3)] py-[var(--space-1-5)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-secondary)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]"
					aria-expanded={activeDropdown === navCat.category}
					aria-haspopup="true"
					onclick={() =>
						activeDropdown === navCat.category
							? closeDropdown()
							: openDropdown(navCat.category)}
					onkeydown={handleKeydown}
				>
					{navCat.label}
					<ChevronDown
						size={14}
						class="transition-transform duration-[var(--duration-fast)] {activeDropdown ===
						navCat.category
							? 'rotate-180'
							: 'rotate-0'}"
					/>
				</button>

				{#if activeDropdown === navCat.category}
					<div
						class="absolute left-1/2 top-full mt-[var(--space-1)] min-w-[260px] -translate-x-1/2 rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-elevated)] p-[var(--space-1-5)] shadow-[var(--shadow-lg)]"
						role="menu"
						tabindex="-1"
						onmouseenter={cancelClose}
						onmouseleave={scheduleClose}
					>
						{#if getToolsByCategory(navCat.category).length > 0}
							{#each getToolsByCategory(navCat.category) as tool}
								<a
									href="/{tool.category}/{tool.slug}"
									class="flex flex-col gap-[var(--space-0-5)] rounded-[var(--radius-md)] px-[var(--space-3)] py-[var(--space-2)] no-underline transition-colors duration-[var(--duration-fast)] hover:bg-[var(--bg-surface-hover)]"
									role="menuitem"
									onclick={closeDropdown}
								>
									<span
										class="text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-primary)]"
									>
										{tool.displayName}
									</span>
									<span class="text-[length:var(--text-xs)] text-[var(--text-tertiary)]">
										{tool.tagline}
									</span>
								</a>
							{/each}
						{:else}
							<p
								class="px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-tertiary)]"
							>
								Coming soon
							</p>
						{/if}
					</div>
				{/if}
			</div>
		{/each}

		<!-- More dropdown -->
		<div
			class="relative"
			role="none"
			onmouseenter={() => openDropdown('more')}
			onmouseleave={scheduleClose}
		>
			<button
				class="flex items-center gap-[var(--space-1)] rounded-[var(--radius-md)] px-[var(--space-3)] py-[var(--space-1-5)] text-[length:var(--text-sm)] font-[number:var(--weight-medium)] text-[var(--text-secondary)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]"
				aria-expanded={activeDropdown === 'more'}
				aria-haspopup="true"
				onclick={() => (activeDropdown === 'more' ? closeDropdown() : openDropdown('more'))}
				onkeydown={handleKeydown}
			>
				More
				<ChevronDown
					size={14}
					class="transition-transform duration-[var(--duration-fast)] {activeDropdown === 'more'
						? 'rotate-180'
						: 'rotate-0'}"
				/>
			</button>

			{#if activeDropdown === 'more'}
				<div
					class="absolute left-1/2 top-full mt-[var(--space-1)] min-w-[260px] -translate-x-1/2 rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-elevated)] p-[var(--space-1-5)] shadow-[var(--shadow-lg)]"
					role="menu"
					tabindex="-1"
					onmouseenter={cancelClose}
					onmouseleave={scheduleClose}
				>
					<p
						class="px-[var(--space-3)] py-[var(--space-2)] text-[length:var(--text-sm)] text-[var(--text-tertiary)]"
					>
						More tools coming soon
					</p>
				</div>
			{/if}
		</div>
	</nav>

	<!-- Right: Theme toggle -->
	<button
		onclick={handleThemeToggle}
		class="relative flex h-[36px] w-[36px] items-center justify-center rounded-[var(--radius-md)] text-[var(--text-secondary)] transition-colors duration-[var(--duration-normal)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]"
		aria-label={$theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
	>
		<Sun
			size={18}
			class="absolute transition-all duration-[200ms] {$theme === 'dark'
				? 'rotate-0 scale-100 opacity-100'
				: '-rotate-90 scale-0 opacity-0'}"
		/>
		<Moon
			size={18}
			class="absolute transition-all duration-[200ms] {$theme === 'dark'
				? 'rotate-90 scale-0 opacity-0'
				: 'rotate-0 scale-100 opacity-100'}"
		/>
	</button>
</header>
