import {
	type CSVProcessingOptions,
	format as formatCSV,
	toHtmlTable,
	toXml,
	toYaml,
	validate
} from '$engines/csv/csv.engine.js';
import { csvToJSON, parseCSV } from '$engines/csv/index.js';
import type { EngineParseError } from '$engines/types.js';
import { input } from '$stores/input.store';
import { clearOutput, output } from '$stores/output.store';
import { get, writable } from 'svelte/store';

export type CSVStats = {
	rowCount: number;
	columnCount: number;
};

export type CSVFormatOptions = Required<CSVProcessingOptions>;

const DEFAULT_CSV_OPTIONS: CSVFormatOptions = {
	delimiter: ',',
	headerRow: true,
	skipEmptyLines: true,
	trimCells: false,
	quoteAll: true
};

export const csvError = writable<EngineParseError | null>(null);
export const csvStats = writable<CSVStats | null>(null);
export const csvProcessingOptions = writable<CSVFormatOptions>({ ...DEFAULT_CSV_OPTIONS });
export const csvPreviewHeaders = writable<string[]>([]);
export const csvPreviewRows = writable<string[][]>([]);

let debounceTimer: ReturnType<typeof setTimeout> | undefined;
let activeCsvToolSlug = 'formatter';
let unsubscribeInput: (() => void) | undefined;

function getCurrentOptions(): CSVFormatOptions {
	return get(csvProcessingOptions);
}

function resetCsvDerivedState(): void {
	csvError.set(null);
	csvStats.set(null);
	csvPreviewHeaders.set([]);
	csvPreviewRows.set([]);
	clearOutput();
}

function computeStats(data: unknown, options: CSVFormatOptions): CSVStats {
	if (!Array.isArray(data)) {
		return { rowCount: 0, columnCount: 0 };
	}

	const rows = data.filter((row): row is unknown[] => Array.isArray(row));
	const columnCount = rows.reduce<number>((max, row) => Math.max(max, row.length), 0);
	const rowCount = Math.max(options.headerRow ? rows.length - 1 : rows.length, 0);
	return { rowCount, columnCount };
}

function updatePreview(data: unknown, options: CSVFormatOptions): void {
	if (!Array.isArray(data)) {
		csvPreviewHeaders.set([]);
		csvPreviewRows.set([]);
		return;
	}

	const rows = data.filter((row): row is string[] | unknown[] => Array.isArray(row));
	if (rows.length === 0) {
		csvPreviewHeaders.set([]);
		csvPreviewRows.set([]);
		return;
	}

	if (options.headerRow) {
		csvPreviewHeaders.set(rows[0].map((cell) => String(cell ?? '')));
		csvPreviewRows.set(rows.slice(1).map((row) => row.map((cell) => String(cell ?? ''))));
		return;
	}

	csvPreviewHeaders.set([]);
	csvPreviewRows.set(rows.map((row) => row.map((cell) => String(cell ?? ''))));
}

export function initCSVStore(toolSlug: string): void {
	activeCsvToolSlug = toolSlug;
	unsubscribeInput?.();
	unsubscribeInput = input.subscribe((value) => {
		if (debounceTimer) clearTimeout(debounceTimer);

		if (!value.trim()) {
			resetCsvDerivedState();
			return;
		}

		debounceTimer = setTimeout(() => {
			void processInput(value);
		}, 300);
	});
}

export function destroyCSVStore(): void {
	if (debounceTimer) {
		clearTimeout(debounceTimer);
		debounceTimer = undefined;
	}
	unsubscribeInput?.();
	unsubscribeInput = undefined;
}

async function processInput(value: string): Promise<void> {
	const options = getCurrentOptions();
	const parsed = await parseCSV(value, {
		delimiter: options.delimiter,
		skipEmptyLines: options.skipEmptyLines,
		trimCells: options.trimCells
	});

	if (!parsed.success) {
		csvError.set(parsed.error);
		csvStats.set(null);
		csvPreviewHeaders.set([]);
		csvPreviewRows.set([]);
		clearOutput();
		return;
	}

	updatePreview(parsed.data, options);
	csvStats.set(computeStats(parsed.data, options));

	const validation = await validate(value, options);
	if (!validation.valid) {
		csvError.set(validation.error);
		clearOutput();
		return;
	}

	csvError.set(null);
	await applyToolOutput(value, options);
}

async function applyToolOutput(value: string, options: CSVFormatOptions): Promise<void> {
	switch (activeCsvToolSlug) {
		case 'formatter':
			output.set(await formatCSV(value, options));
			return;
		case 'to-json': {
			const result = await csvToJSON(value, {
				headers: options.headerRow,
				delimiter: options.delimiter,
				skipEmptyLines: options.skipEmptyLines,
				trimCells: options.trimCells
			});
			if (result.success) {
				output.set(result.output);
			} else {
				clearOutput();
			}
			return;
		}
		case 'to-xml':
			try {
				output.set(await toXml(value, options));
			} catch {
				clearOutput();
			}
			return;
		case 'to-yaml':
			try {
				output.set(await toYaml(value, options));
			} catch {
				clearOutput();
			}
			return;
		case 'to-html':
			try {
				output.set(await toHtmlTable(value, options));
			} catch {
				clearOutput();
			}
			return;
		case 'validator':
			clearOutput();
			return;
		default:
			clearOutput();
	}
}

export function setCsvProcessingOptions(next: Partial<CSVFormatOptions>): void {
	csvProcessingOptions.update((current) => ({ ...current, ...next }));
	const value = get(input);
	if (value.trim()) {
		void processInput(value);
	}
}

export async function formatCsv(): Promise<void> {
	const value = get(input);
	if (!value.trim()) return;
	output.set(await formatCSV(value, getCurrentOptions()));
}

export async function processCsvTool(): Promise<void> {
	const value = get(input);
	if (!value.trim()) return;
	await processInput(value);
}
