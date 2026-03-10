import { writable } from 'svelte/store';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export type ToastItem = {
	id: string;
	type: ToastType;
	message: string;
};

function createToastStore(): {
	subscribe: (run: (value: ToastItem[]) => void) => () => void;
	add: (type: ToastType, message: string) => void;
	remove: (id: string) => void;
} {
	const store = writable<ToastItem[]>([]);

	function add(type: ToastType, message: string): void {
		const id = crypto.randomUUID();
		const item: ToastItem = { id, type, message };
		store.update((items) => [...items, item]);
		setTimeout(() => remove(id), 2000);
	}

	function remove(id: string): void {
		store.update((items) => items.filter((item) => item.id !== id));
	}

	return {
		subscribe: store.subscribe,
		add,
		remove
	};
}

export const toasts = createToastStore();

export function addToast(type: ToastType, message: string): void {
	toasts.add(type, message);
}
