import { browser } from '$app/environment';
import { derived, get, writable } from 'svelte/store';

const SESSION_PREFIX = 'fmtly-input-';

let currentSlug = '';

function getSessionKey(): string {
	return `${SESSION_PREFIX}${currentSlug}`;
}

function loadFromSession(): string {
	if (!browser || !currentSlug) return '';
	return sessionStorage.getItem(getSessionKey()) ?? '';
}

function saveToSession(value: string): void {
	if (!browser || !currentSlug) return;
	if (value) {
		sessionStorage.setItem(getSessionKey(), value);
	} else {
		sessionStorage.removeItem(getSessionKey());
	}
}

const store = writable<string>('');

export const input = {
	subscribe: store.subscribe,
	set(value: string): void {
		store.set(value);
		saveToSession(value);
	},
	update(fn: (value: string) => string): void {
		store.update((current) => {
			const next = fn(current);
			saveToSession(next);
			return next;
		});
	}
};

export function initInput(toolSlug: string): void {
	currentSlug = toolSlug;
	store.set(loadFromSession());
}

export function clearInput(): void {
	input.set('');
}

export const inputByteSize = derived(store, ($input) => {
	const bytes = new TextEncoder().encode($input).length;
	return bytes;
});

export function formatByteSize(bytes: number): string {
	if (bytes === 0) return '0 B';
	if (bytes < 1024) return `${bytes} B`;
	return `${(bytes / 1024).toFixed(1)} KB`;
}
