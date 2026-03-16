import type { EngineParseError } from '$engines/types.js';
import { get, writable } from 'svelte/store';
import { input } from './input.store';
import { clearOutput, output } from './output.store';

export const tomlError = writable<EngineParseError | null>(null);

let debounceTimer: ReturnType<typeof setTimeout> | undefined;
let activeTomlToolSlug = 'formatter';
let unsubscribeInput: (() => void) | undefined;

export function initTOMLStore(toolSlug: string): void {
	activeTomlToolSlug = toolSlug;

	unsubscribeInput = input.subscribe((value) => {
		if (!value.trim()) {
			tomlError.set(null);
			clearOutput();
			return;
		}

		if (debounceTimer) {
			clearTimeout(debounceTimer);
		}

		debounceTimer = setTimeout(() => {
			void processInput(value);
		}, 300);
	});
}

export function destroyTOMLStore(): void {
	if (unsubscribeInput) {
		unsubscribeInput();
		unsubscribeInput = undefined;
	}
	if (debounceTimer) {
		clearTimeout(debounceTimer);
		debounceTimer = undefined;
	}
	tomlError.set(null);
}

async function applyToolOutput(value: string): Promise<void> {
	const { format, toJson, toYaml, minifyToml } = await import('$engines/toml/toml.engine.js');

	switch (activeTomlToolSlug) {
		case 'formatter':
			output.set(await format(value));
			return;
		case 'minifier':
			output.set(await minifyToml(value));
			return;
		case 'to-json':
			output.set(await toJson(value));
			return;
		case 'to-yaml':
			output.set(await toYaml(value));
			return;
		case 'to-xml': {
			const { toXml } = await import('$engines/toml/toml.engine.js');
			output.set(await toXml(value));
			return;
		}
		case 'to-html': {
			const { toHtml } = await import('$engines/toml/toml.engine.js');
			output.set(await toHtml(value));
			return;
		}
		case 'validator':
			// The validation happens during parse, so if we reach here it is valid
			// No output needed for validator tool itself.
			clearOutput();
			return;
		default:
			clearOutput();
	}
}

async function processInput(value: string): Promise<void> {
	const { validate } = await import('$engines/toml/toml.engine.js');
	const validation = await validate(value);

	if (validation.valid) {
		tomlError.set(null);
		void applyToolOutput(value);
	} else {
		// TOML parser doesn't provide line/column out of the box in smol-toml in a structured way that matches EngineParseError exactly without parsing the message
		// But we'll try to extract line/column if it matches common patterns, or fallback to the error string
		let line: number | undefined;
		let column: number | undefined;

		const msg = validation.error ?? 'Unknown syntax error';

		// smol-toml throws strings like "Invalid syntax at line X col Y" or similar.
		// Since we don't have the exact pattern, we'll try a generic extraction.
		const lineMatch = msg.match(/line (\d+)/i);
		const colMatch = msg.match(/col(?:umn)? (\d+)/i);

		if (lineMatch) line = Number.parseInt(lineMatch[1], 10);
		if (colMatch) column = Number.parseInt(colMatch[1], 10);

		tomlError.set({
			message: msg,
			line,
			column
		});
		clearOutput();
	}
}

export async function processTomlTool(): Promise<void> {
	const value = get(input);
	if (!value.trim()) return;
	await processInput(value);
}

export async function formatToml(): Promise<void> {
	const value = get(input);
	if (!value.trim()) return;

	const { validate, format } = await import('$engines/toml/toml.engine.js');
	const validation = await validate(value);

	if (validation.valid) {
		output.set(await format(value));
	}
}

export async function minifyTomlTool(): Promise<void> {
	const value = get(input);
	if (!value.trim()) return;

	const { validate, minifyToml } = await import('$engines/toml/toml.engine.js');
	const validation = await validate(value);

	if (validation.valid) {
		output.set(await minifyToml(value));
	}
}
