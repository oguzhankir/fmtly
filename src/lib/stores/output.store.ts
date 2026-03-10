import { derived, writable } from 'svelte/store';

const store = writable<string>('');

export const output = {
	subscribe: store.subscribe,
	set(value: string): void {
		store.set(value);
	},
	update(fn: (value: string) => string): void {
		store.update(fn);
	}
};

export function clearOutput(): void {
	output.set('');
}

export const outputByteSize = derived(store, ($output) => {
	const bytes = new TextEncoder().encode($output).length;
	return bytes;
});
