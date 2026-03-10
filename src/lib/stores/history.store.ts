import { browser } from '$app/environment';
import { input } from '$stores/input.store';
import { get, writable } from 'svelte/store';

export type HistoryEntry = {
	id: string;
	timestamp: number;
	contentPreview: string;
	size: number;
	label: string;
	fullContent: string;
};

const MAX_ENTRIES = 20;
const DEBOUNCE_MS = 2000;

let currentCategory = '';
let currentSlug = '';
let debounceTimer: ReturnType<typeof setTimeout> | undefined;
let unsubscribeInput: (() => void) | undefined;

function storageKey(category: string, slug: string): string {
	return `fmtly_history_${category}_${slug}`;
}

function generateId(): string {
	return crypto.randomUUID();
}

function loadEntries(category: string, slug: string): HistoryEntry[] {
	if (!browser) return [];
	try {
		const raw = localStorage.getItem(storageKey(category, slug));
		if (!raw) return [];
		return JSON.parse(raw) as HistoryEntry[];
	} catch {
		return [];
	}
}

function saveEntries(category: string, slug: string, entries: HistoryEntry[]): void {
	if (!browser) return;
	localStorage.setItem(storageKey(category, slug), JSON.stringify(entries));
}

export const historyEntries = writable<HistoryEntry[]>([]);

export function initHistory(category: string, slug: string): void {
	currentCategory = category;
	currentSlug = slug;
	historyEntries.set(loadEntries(category, slug));

	if (unsubscribeInput) unsubscribeInput();

	unsubscribeInput = input.subscribe((value) => {
		if (debounceTimer) clearTimeout(debounceTimer);
		if (!value.trim()) return;

		debounceTimer = setTimeout(() => {
			addHistoryEntry(value);
		}, DEBOUNCE_MS);
	});
}

export function destroyHistory(): void {
	if (debounceTimer) clearTimeout(debounceTimer);
	if (unsubscribeInput) {
		unsubscribeInput();
		unsubscribeInput = undefined;
	}
}

function addHistoryEntry(content: string): void {
	const entries = get(historyEntries);

	if (entries.length > 0 && entries[0].fullContent === content) {
		return;
	}

	const entry: HistoryEntry = {
		id: generateId(),
		timestamp: Date.now(),
		contentPreview: content.slice(0, 80).replace(/\n/g, ' '),
		size: new TextEncoder().encode(content).length,
		label: '',
		fullContent: content
	};

	const next = [entry, ...entries].slice(0, MAX_ENTRIES);
	historyEntries.set(next);
	saveEntries(currentCategory, currentSlug, next);
}

export function deleteHistoryEntry(id: string): void {
	historyEntries.update((entries) => {
		const next = entries.filter((e) => e.id !== id);
		saveEntries(currentCategory, currentSlug, next);
		return next;
	});
}

export function renameHistoryEntry(id: string, label: string): void {
	historyEntries.update((entries) => {
		const next = entries.map((e) => (e.id === id ? { ...e, label } : e));
		saveEntries(currentCategory, currentSlug, next);
		return next;
	});
}

export function clearHistory(): void {
	historyEntries.set([]);
	if (browser) {
		localStorage.removeItem(storageKey(currentCategory, currentSlug));
	}
}

export function loadHistoryEntry(id: string): void {
	const entries = get(historyEntries);
	const entry = entries.find((e) => e.id === id);
	if (entry) {
		input.set(entry.fullContent);
	}
}
