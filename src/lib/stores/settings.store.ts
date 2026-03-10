import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

export type Theme = 'dark' | 'light';
export type IndentSize = 2 | 4 | 'tab';
export type FontSize = 12 | 13 | 14 | 15 | 16;

const THEME_KEY = 'fmtly-theme';
const INDENT_KEY = 'fmtly-indent-size';
const FONT_SIZE_KEY = 'fmtly-font-size';
const VALID_FONT_SIZES: readonly FontSize[] = [12, 13, 14, 15, 16];

function getInitialTheme(): Theme {
	if (!browser) return 'dark';
	const stored = localStorage.getItem(THEME_KEY);
	if (stored === 'dark' || stored === 'light') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function createThemeStore(): {
	subscribe: (run: (value: Theme) => void) => () => void;
	set: (value: Theme) => void;
	toggle: () => void;
} {
	const initial = getInitialTheme();
	const store = writable<Theme>(initial);

	if (browser) {
		document.documentElement.setAttribute('data-theme', initial);
	}

	function setTheme(value: Theme): void {
		store.set(value);
		if (browser) {
			localStorage.setItem(THEME_KEY, value);
			document.documentElement.setAttribute('data-theme', value);
		}
	}

	function toggle(): void {
		const current = get(store);
		const next: Theme = current === 'dark' ? 'light' : 'dark';
		setTheme(next);
	}

	return {
		subscribe: store.subscribe,
		set: setTheme,
		toggle
	};
}

export const theme = createThemeStore();

export function toggleTheme(): void {
	theme.toggle();
}

function getInitialIndentSize(): IndentSize {
	if (!browser) return 2;
	const stored = localStorage.getItem(INDENT_KEY);
	if (stored === '2' || stored === '4') return Number(stored) as 2 | 4;
	if (stored === 'tab') return 'tab';
	return 2;
}

function createIndentSizeStore(): {
	subscribe: (run: (value: IndentSize) => void) => () => void;
	set: (value: IndentSize) => void;
} {
	const store = writable<IndentSize>(getInitialIndentSize());

	function setIndentSize(value: IndentSize): void {
		store.set(value);
		if (browser) {
			localStorage.setItem(INDENT_KEY, String(value));
		}
	}

	return {
		subscribe: store.subscribe,
		set: setIndentSize
	};
}

export const indentSize = createIndentSizeStore();

function getInitialFontSize(): FontSize {
	if (!browser) return 13;
	const stored = localStorage.getItem(FONT_SIZE_KEY);
	const parsed = Number(stored);
	if (VALID_FONT_SIZES.includes(parsed as FontSize)) return parsed as FontSize;
	return 13;
}

function createFontSizeStore(): {
	subscribe: (run: (value: FontSize) => void) => () => void;
	set: (value: FontSize) => void;
} {
	const store = writable<FontSize>(getInitialFontSize());

	function setFontSize(value: FontSize): void {
		store.set(value);
		if (browser) {
			localStorage.setItem(FONT_SIZE_KEY, String(value));
		}
	}

	return {
		subscribe: store.subscribe,
		set: setFontSize
	};
}

export const fontSize = createFontSizeStore();
