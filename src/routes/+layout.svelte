<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import { onMount, onDestroy, setContext } from 'svelte';
	import { theme, toggleTheme } from '$stores/settings.store';
	import Header from '$components/layout/Header.svelte';
	import Toast from '$components/ui/Toast.svelte';
	import ShortcutsModal from '$components/modals/ShortcutsModal.svelte';
	import CommandPalette from '$components/modals/CommandPalette.svelte';
	import {
		initKeyboardShortcuts,
		destroyKeyboardShortcuts,
		registerShortcuts
	} from '$utils/keyboard.js';

	let { children }: { children: Snippet } = $props();

	let shortcutsModalOpen = $state(false);
	let commandPaletteOpen = $state(false);

	setContext('theme', theme);

	onMount(() => {
		initKeyboardShortcuts();
	});

	onDestroy(() => {
		destroyKeyboardShortcuts();
	});

	function openCommandPalette(): void {
		commandPaletteOpen = true;
	}

	const unregisterGlobal = registerShortcuts([
		{
			key: '?',
			scope: 'global',
			label: 'Show keyboard shortcuts',
			handler: () => { shortcutsModalOpen = !shortcutsModalOpen; }
		},
		{
			key: 'l',
			ctrl: true,
			shift: true,
			scope: 'global',
			label: 'Toggle dark/light theme',
			handler: toggleTheme
		}
	]);

	onDestroy(() => {
		unregisterGlobal();
	});
</script>

<Header onOpenCommandPalette={openCommandPalette} />

<main class="pt-[var(--header-height)]">
	{@render children()}
</main>

<Toast />
<ShortcutsModal bind:open={shortcutsModalOpen} />
<CommandPalette bind:open={commandPaletteOpen} />
