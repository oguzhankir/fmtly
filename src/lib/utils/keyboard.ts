import { browser } from '$app/environment';

export type ShortcutScope = 'global' | 'tool';

export type ShortcutEntry = {
	key: string;
	ctrl?: boolean;
	shift?: boolean;
	alt?: boolean;
	scope: ShortcutScope;
	label: string;
	handler: () => void;
};

const shortcuts: ShortcutEntry[] = [];
let initialized = false;

function matchesEvent(entry: ShortcutEntry, event: KeyboardEvent): boolean {
	const isMac = navigator.platform.toUpperCase().includes('MAC');
	const ctrlOrCmd = isMac ? event.metaKey : event.ctrlKey;

	if (entry.ctrl && !ctrlOrCmd) return false;
	if (!entry.ctrl && ctrlOrCmd) return false;
	if (entry.shift && !event.shiftKey) return false;
	if (!entry.shift && event.shiftKey) return false;
	if (entry.alt && !event.altKey) return false;
	if (!entry.alt && event.altKey) return false;

	return event.key.toLowerCase() === entry.key.toLowerCase();
}

function handleKeydown(event: KeyboardEvent): void {
	const target = event.target as HTMLElement;
	const isTyping =
		target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;

	for (const entry of shortcuts) {
		if (matchesEvent(entry, event)) {
			if (entry.key === '?' && isTyping) continue;
			event.preventDefault();
			entry.handler();
			return;
		}
	}
}

export function initKeyboardShortcuts(): void {
	if (!browser || initialized) return;
	document.addEventListener('keydown', handleKeydown);
	initialized = true;
}

export function destroyKeyboardShortcuts(): void {
	if (!browser) return;
	document.removeEventListener('keydown', handleKeydown);
	initialized = false;
}

export function registerShortcut(entry: ShortcutEntry): () => void {
	shortcuts.push(entry);
	return () => {
		const index = shortcuts.indexOf(entry);
		if (index !== -1) shortcuts.splice(index, 1);
	};
}

export function registerShortcuts(entries: ShortcutEntry[]): () => void {
	const unregisters = entries.map((e) => registerShortcut(e));
	return () => {
		for (const unregister of unregisters) unregister();
	};
}

export function getShortcuts(scope?: ShortcutScope): ShortcutEntry[] {
	if (scope) return shortcuts.filter((s) => s.scope === scope);
	return [...shortcuts];
}

export function formatShortcutKeys(entry: ShortcutEntry): string[] {
	const isMac = browser && navigator.platform.toUpperCase().includes('MAC');
	const keys: string[] = [];

	if (entry.ctrl) keys.push(isMac ? '⌘' : 'Ctrl');
	if (entry.shift) keys.push(isMac ? '⇧' : 'Shift');
	if (entry.alt) keys.push(isMac ? '⌥' : 'Alt');

	const keyLabel = entry.key.length === 1 ? entry.key.toUpperCase() : entry.key;
	keys.push(keyLabel);

	return keys;
}
