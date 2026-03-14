<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
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
	import { t } from '$lib/stores/language';

	let { children }: { children: Snippet } = $props();

	let shortcutsModalOpen = $state(false);
	let commandPaletteOpen = $state(false);
	let analyticsScript = $state<HTMLScriptElement | null>(null);

	setContext('theme', theme);

	onMount(() => {
		initKeyboardShortcuts();
		if (!dev) {
			const script = document.createElement('script');
			script.defer = true;
			script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
			script.dataset.cfBeacon = '{"token":"41ffb0ac032f4a2d8c9482987d93faaf"}';
			document.head.appendChild(script);
			analyticsScript = script;
		}
	});

	onDestroy(() => {
		destroyKeyboardShortcuts();
		analyticsScript?.remove();
	});

	function openCommandPalette(): void {
		commandPaletteOpen = true;
	}

	const unregisterGlobal = registerShortcuts([
		{
			key: '?',
			scope: 'global',
			label: $t('ui.shortcuts.show_help', 'Show keyboard shortcuts'),
			handler: () => { shortcutsModalOpen = !shortcutsModalOpen; }
		},
		{
			key: 'l',
			ctrl: true,
			shift: true,
			scope: 'global',
			label: $t('ui.shortcuts.toggle_theme', 'Toggle dark/light theme'),
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
