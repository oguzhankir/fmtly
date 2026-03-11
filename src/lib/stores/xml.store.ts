import {
	computeXMLStats,
	formatXML,
	minifyXML,
	parseXML,
	xmlToJSON
} from '$engines/xml/index.js';
import type { XMLFormatOptions, XMLParseError, XMLStats } from '$engines/xml/index.js';
import { toYaml, toCsv } from '$engines/xml/xml.engine.js';
import { input } from '$stores/input.store';
import { clearOutput, output } from '$stores/output.store';
import { get, writable } from 'svelte/store';

export const xmlError = writable<XMLParseError | null>(null);
export const xmlStats = writable<XMLStats | null>(null);
export const xmlFormatOptions = writable<XMLFormatOptions>({ indent: 2 });

let debounceTimer: ReturnType<typeof setTimeout> | undefined;
let activeXmlToolSlug = 'formatter';
let unsubscribeInput: (() => void) | undefined;

export function initXMLStore(toolSlug: string): void {
	activeXmlToolSlug = toolSlug;
	unsubscribeInput?.();
	unsubscribeInput = input.subscribe((value) => {
		if (debounceTimer) clearTimeout(debounceTimer);

		if (!value.trim()) {
			xmlError.set(null);
			xmlStats.set(null);
			clearOutput();
			return;
		}

		debounceTimer = setTimeout(() => {
			void processInput(value);
		}, 300);
	});
}

export function destroyXMLStore(): void {
	if (debounceTimer) {
		clearTimeout(debounceTimer);
		debounceTimer = undefined;
	}
	unsubscribeInput?.();
	unsubscribeInput = undefined;
}

async function processInput(value: string): Promise<void> {
	const result = parseXML(value);

	if (result.success) {
		xmlError.set(null);
		const stats = computeXMLStats(value);
		xmlStats.set(stats);
		await applyToolOutput(value);
	} else {
		xmlError.set(result.error as XMLParseError);
		xmlStats.set(null);
		clearOutput();
	}
}

async function applyToolOutput(value: string): Promise<void> {
	switch (activeXmlToolSlug) {
		case 'formatter':
			applyFormatOutput(value);
			return;
		case 'minifier':
			applyMinifyOutput(value);
			return;
		case 'to-json':
			applyJsonOutput(value);
			return;
		case 'to-yaml':
			await applyYamlOutput(value);
			return;
		case 'to-csv':
			await applyCsvOutput(value);
			return;
		case 'validator':
		case 'xpath':
			return;
		default:
			clearOutput();
	}
}

function applyFormatOutput(value: string): void {
	const opts = get(xmlFormatOptions);
	const result = formatXML(value, opts);
	if (result.success) {
		output.set(result.output);
	} else {
		clearOutput();
	}
}

function applyMinifyOutput(value: string): void {
	const result = minifyXML(value);
	if (result.success) {
		output.set(result.output);
	} else {
		clearOutput();
	}
}

function applyJsonOutput(value: string): void {
	const result = xmlToJSON(value);
	if (result.success) {
		output.set(result.output);
	} else {
		clearOutput();
	}
}

async function applyYamlOutput(value: string): Promise<void> {
	try {
		output.set(await toYaml(value));
	} catch {
		clearOutput();
	}
}

async function applyCsvOutput(value: string): Promise<void> {
	try {
		output.set(await toCsv(value));
	} catch {
		clearOutput();
	}
}

export function setFormatOptions(next: Partial<XMLFormatOptions>): void {
	xmlFormatOptions.update((current) => ({ ...current, ...next }));
	const value = get(input);
	if (value.trim()) {
		applyFormatOutput(value);
	}
}

export function formatXml(): void {
	const value = get(input);
	if (!value.trim()) return;
	applyFormatOutput(value);
}

export function minifyXml(): void {
	const value = get(input);
	if (!value.trim()) return;
	applyMinifyOutput(value);
}
