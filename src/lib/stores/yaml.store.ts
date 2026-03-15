import type { EngineParseError, FormatResult } from '$engines/types.js';
import { toCsv, toToml, toXml } from '$engines/yaml/yaml.engine.js';
import { input } from '$stores/input.store';
import { clearOutput, output } from '$stores/output.store';
import { get, writable } from 'svelte/store';

type ParsedYAMLSuccess = {
	success: true;
	data: unknown;
	documents: unknown[];
};

type ParsedYAMLFailure = {
	success: false;
	error: EngineParseError;
};

type ParsedYAMLResult = ParsedYAMLSuccess | ParsedYAMLFailure;

export type YAMLLintCode = 'tabs' | 'trailing_whitespace' | 'odd_indentation';

export type YAMLLintWarning = {
	line: number;
	column: number;
	code: YAMLLintCode;
};

export type YAMLStats = {
	documentCount: number;
	topLevelKeys: number;
	maxDepth: number;
};

export const yamlError = writable<EngineParseError | null>(null);
export const yamlLintWarnings = writable<YAMLLintWarning[]>([]);
export const yamlStats = writable<YAMLStats | null>(null);

let debounceTimer: ReturnType<typeof setTimeout> | undefined;
let activeYamlToolSlug = 'formatter';
let unsubscribeInput: (() => void) | undefined;

function computeDepth(value: unknown): number {
	if (value === null || typeof value !== 'object') return 0;
	if (Array.isArray(value)) {
		if (value.length === 0) return 1;
		return 1 + Math.max(...value.map((entry) => computeDepth(entry)));
	}
	const entries = Object.values(value as Record<string, unknown>);
	if (entries.length === 0) return 1;
	return 1 + Math.max(...entries.map((entry) => computeDepth(entry)));
}

function countTopLevelKeys(value: unknown): number {
	if (!value || typeof value !== 'object' || Array.isArray(value)) {
		return 0;
	}
	return Object.keys(value as Record<string, unknown>).length;
}

function computeStats(documents: unknown[]): YAMLStats {
	return {
		documentCount: documents.length,
		topLevelKeys: documents.reduce<number>(
			(sum, document) => sum + countTopLevelKeys(document),
			0
		),
		maxDepth: documents.reduce<number>(
			(maxDepth, document) => Math.max(maxDepth, computeDepth(document)),
			0
		)
	};
}

function lintYAMLText(inputValue: string): YAMLLintWarning[] {
	const warnings: YAMLLintWarning[] = [];
	const lines = inputValue.split('\n');

	lines.forEach((line, index) => {
		const lineNumber = index + 1;
		const leadingWhitespace = line.match(/^[\t ]+/)?.[0] ?? '';
		const trailingWhitespaceMatch = line.match(/[ \t]+$/);

		if (leadingWhitespace.includes('\t')) {
			warnings.push({
				line: lineNumber,
				column: leadingWhitespace.indexOf('\t') + 1,
				code: 'tabs'
			});
		}

		if (
			leadingWhitespace.length > 0 &&
			!leadingWhitespace.includes('\t') &&
			leadingWhitespace.length % 2 !== 0
		) {
			warnings.push({
				line: lineNumber,
				column: 1,
				code: 'odd_indentation'
			});
		}

		if (trailingWhitespaceMatch) {
			warnings.push({
				line: lineNumber,
				column: line.length - trailingWhitespaceMatch[0].length + 1,
				code: 'trailing_whitespace'
			});
		}
	});

	return warnings;
}

function toEngineParseError(error: unknown): EngineParseError {
	const yamlErrorLike = error as {
		message?: string;
		mark?: {
			line?: number;
			column?: number;
		};
	};

	return {
		message: yamlErrorLike.message ?? 'Invalid YAML',
		line: yamlErrorLike.mark?.line !== undefined ? yamlErrorLike.mark.line + 1 : undefined,
		column: yamlErrorLike.mark?.column !== undefined ? yamlErrorLike.mark.column + 1 : undefined,
		plainLanguageExplanation: yamlErrorLike.message ?? 'Invalid YAML'
	};
}

async function loadYamlModule(): Promise<typeof import('js-yaml')> {
	return import('js-yaml');
}

async function stringifyDocuments(documents: unknown[], minify: boolean): Promise<string> {
	const yaml = await loadYamlModule();
	const separator = documents.length > 1 ? '\n---\n' : '';

	return documents
		.map((document) =>
			yaml.dump(document, {
				indent: 2,
				lineWidth: minify ? -1 : 120,
				noRefs: true,
				sortKeys: false,
				flowLevel: minify ? 0 : -1,
				condenseFlow: minify,
				noCompatMode: minify
			})
		)
		.join(separator);
}

export async function parseYAMLText(inputValue: string): Promise<ParsedYAMLResult> {
	try {
		const yaml = await loadYamlModule();
		const documents: unknown[] = [];

		yaml.loadAll(inputValue, (document: unknown) => {
			documents.push(document);
		});

		const data = documents.length <= 1 ? (documents[0] ?? null) : documents;
		return { success: true, data, documents };
	} catch (error) {
		return { success: false, error: toEngineParseError(error) };
	}
}

export async function formatYAMLText(inputValue: string): Promise<FormatResult> {
	const parsed = await parseYAMLText(inputValue);
	if (!parsed.success) {
		return parsed;
	}

	try {
		const outputValue = await stringifyDocuments(parsed.documents, false);
		return { success: true, output: outputValue };
	} catch (error) {
		return { success: false, error: toEngineParseError(error) };
	}
}

export async function minifyYAMLText(inputValue: string): Promise<FormatResult> {
	const parsed = await parseYAMLText(inputValue);
	if (!parsed.success) {
		return parsed;
	}

	try {
		const outputValue = await stringifyDocuments(parsed.documents, true);
		return { success: true, output: outputValue };
	} catch (error) {
		return { success: false, error: toEngineParseError(error) };
	}
}

async function convertYamlToJson(parsed: ParsedYAMLSuccess): Promise<void> {
	output.set(JSON.stringify(parsed.data, null, 2));
}

async function convertYamlToXml(inputValue: string): Promise<void> {
	try {
		output.set(await toXml(inputValue));
	} catch {
		clearOutput();
	}
}

async function convertYamlToCsv(inputValue: string): Promise<void> {
	try {
		output.set(await toCsv(inputValue));
	} catch {
		clearOutput();
	}
}

async function convertYamlToToml(inputValue: string): Promise<void> {
	try {
		output.set(await toToml(inputValue));
	} catch {
		clearOutput();
	}
}

async function applyToolOutput(value: string, parsed: ParsedYAMLSuccess): Promise<void> {
	switch (activeYamlToolSlug) {
		case 'formatter':
			output.set(await stringifyDocuments(parsed.documents, false));
			return;
		case 'minifier':
			output.set(await stringifyDocuments(parsed.documents, true));
			return;
		case 'to-json':
			await convertYamlToJson(parsed);
			return;
		case 'to-xml':
			await convertYamlToXml(value);
			return;
		case 'to-csv':
			await convertYamlToCsv(value);
			return;
		case 'to-toml':
			await convertYamlToToml(value);
			return;
		case 'validator':
			clearOutput();
			return;
		case 'query':
			return;
		default:
			clearOutput();
	}
}

async function processInput(value: string): Promise<void> {
	const result = await parseYAMLText(value);
	if (result.success) {
		yamlError.set(null);
		yamlLintWarnings.set(lintYAMLText(value));
		yamlStats.set(computeStats(result.documents));
		await applyToolOutput(value, result);
		return;
	}

	yamlError.set(result.error);
	yamlLintWarnings.set([]);
	yamlStats.set(null);
	clearOutput();
}

export function initYAMLStore(toolSlug: string): void {
	activeYamlToolSlug = toolSlug;
	unsubscribeInput?.();
	unsubscribeInput = input.subscribe((value) => {
		if (debounceTimer) clearTimeout(debounceTimer);

		if (!value.trim()) {
			yamlError.set(null);
			yamlLintWarnings.set([]);
			yamlStats.set(null);
			clearOutput();
			return;
		}

		debounceTimer = setTimeout(() => {
			void processInput(value);
		}, 300);
	});
}

export function destroyYAMLStore(): void {
	if (debounceTimer) {
		clearTimeout(debounceTimer);
		debounceTimer = undefined;
	}
	unsubscribeInput?.();
	unsubscribeInput = undefined;
}

export async function processYamlTool(): Promise<void> {
	const value = get(input);
	if (!value.trim()) return;
	await processInput(value);
}

export async function formatYaml(): Promise<void> {
	const value = get(input);
	if (!value.trim()) return;
	const result = await formatYAMLText(value);
	if (result.success) {
		output.set(result.output);
	}
}

export async function minifyYaml(): Promise<void> {
	const value = get(input);
	if (!value.trim()) return;
	const result = await minifyYAMLText(value);
	if (result.success) {
		output.set(result.output);
	}
}
