import {
	buildJSONTree,
	computeJSONStats,
	formatJSON,
	initParser,
	minifyJSON,
	parseJSON,
	repairJSON,
	sortJSONKeys
} from '$engines/json/index.js';
import type { JSONStats, ParseError, TreeNode } from '$engines/json/index.js';
import { input } from '$stores/input.store';
import { clearOutput, output } from '$stores/output.store';
import { derived, get, writable } from 'svelte/store';

export const jsonError = writable<ParseError | null>(null);
export const jsonStats = writable<JSONStats | null>(null);
export const jsonTree = writable<TreeNode[]>([]);
export const jsonParsedData = writable<unknown>(null);

let debounceTimer: ReturnType<typeof setTimeout> | undefined;
let parserInitialized = false;

async function ensureParser(): Promise<void> {
	if (!parserInitialized) {
		await initParser();
		parserInitialized = true;
	}
}

export function initJSONStore(): void {
	input.subscribe((value) => {
		if (debounceTimer) clearTimeout(debounceTimer);

		if (!value.trim()) {
			jsonError.set(null);
			jsonStats.set(null);
			jsonTree.set([]);
			jsonParsedData.set(null);
			clearOutput();
			return;
		}

		debounceTimer = setTimeout(() => {
			processInput(value);
		}, 300);
	});
}

async function processInput(value: string): Promise<void> {
	await ensureParser();

	const result = parseJSON(value);

	if (result.success) {
		jsonError.set(null);
		jsonParsedData.set(result.data);

		const formatted = formatJSON(value, { indent: 2 });
		if (formatted.success) {
			output.set(formatted.output);
		}

		const stats = computeJSONStats(result.data);
		jsonStats.set(stats);

		const tree = buildJSONTree(result.data);
		jsonTree.set(tree);
	} else {
		jsonError.set(result.error);
		jsonParsedData.set(null);
		jsonStats.set(null);
		jsonTree.set([]);
		clearOutput();
	}
}

export async function format(indent: 2 | 4 | '\t' = 2): Promise<void> {
	await ensureParser();
	const value = get(input);
	const result = formatJSON(value, { indent });
	if (result.success) {
		output.set(result.output);
		jsonError.set(null);
	} else {
		jsonError.set(result.error);
	}
}

export async function minify(): Promise<void> {
	await ensureParser();
	const value = get(input);
	const result = minifyJSON(value);
	if (result.success) {
		output.set(result.output);
		jsonError.set(null);
	} else {
		jsonError.set(result.error);
	}
}

export async function repair(): Promise<void> {
	const value = get(input);
	const result = repairJSON(value);
	if (result.success) {
		input.set(result.output);
		output.set(result.output);
		jsonError.set(null);
	} else {
		jsonError.set(result.error);
	}
}

export async function sortKeys(direction: 'asc' | 'desc' = 'asc'): Promise<void> {
	await ensureParser();
	const value = get(input);
	const result = sortJSONKeys(value, direction);
	if (result.success) {
		output.set(result.output);
		jsonError.set(null);
	} else {
		jsonError.set(result.error);
	}
}
