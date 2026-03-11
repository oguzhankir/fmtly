import { parseJSON } from './parser.js';

type JsonScalar = string | number | boolean | null;
type JsonArray = JsonValue[];
interface JsonObject {
	[key: string]: JsonValue;
}
export type JsonValue = JsonScalar | JsonArray | JsonObject;

export interface FormatOptions {
	indent: 2 | 4 | 'tab';
	sortKeys: boolean;
	sortOrder: 'asc' | 'desc';
	trailingCommas: boolean;
	quoteStyle: 'double' | 'single';
	collapseDepth: number | null;
	removeNulls: boolean;
	removeEmptyStrings: boolean;
	removeEmptyArrays: boolean;
	removeEmptyObjects: boolean;
}

export interface JsonStats {
	keys: number;
	values: number;
	strings: number;
	numbers: number;
	booleans: number;
	nulls: number;
	arrays: number;
	objects: number;
	maxDepth: number;
	sizeOriginal: number;
	sizeFormatted: number;
}

export interface FormatResult {
	formatted: string;
	stats: JsonStats;
	warnings: string[];
}

const DEFAULT_FORMAT_OPTIONS: FormatOptions = {
	indent: 2,
	sortKeys: false,
	sortOrder: 'asc',
	trailingCommas: false,
	quoteStyle: 'double',
	collapseDepth: null,
	removeNulls: false,
	removeEmptyStrings: false,
	removeEmptyArrays: false,
	removeEmptyObjects: false
};

export function format(json: string, options: Partial<FormatOptions> = {}): FormatResult {
	const resolved = { ...DEFAULT_FORMAT_OPTIONS, ...options };
	const parsed = parseJSON(json);

	if (!parsed.success) {
		throw new Error(parsed.error.plainLanguageExplanation);
	}

	const warnings: string[] = [];
	const cleaned = cleanJsonValue(parsed.data as JsonValue, resolved);
	const normalized = cleaned === undefined ? null : cleaned;
	const transformed = resolved.sortKeys
		? sortJsonValue(normalized, resolved.sortOrder)
		: normalized;

	if (cleaned === undefined) {
		warnings.push('Cleaning rules removed every value, so the formatter returned null.');
	}

	if (resolved.quoteStyle === 'single') {
		warnings.push('Single quotes produce JSON5-style output, not strict JSON.');
	}

	if (resolved.trailingCommas) {
		warnings.push('Trailing commas produce JSON5-style output, not strict JSON.');
	}

	const formatted = renderJsonValue(transformed, 0, resolved, false);
	const stats = computeStats(transformed, json, formatted);

	return { formatted, stats, warnings };
}

export function minify(json: string): FormatResult {
	return format(json, {
		indent: 2,
		sortKeys: false,
		sortOrder: 'asc',
		trailingCommas: false,
		quoteStyle: 'double',
		collapseDepth: 0,
		removeNulls: false,
		removeEmptyStrings: false,
		removeEmptyArrays: false,
		removeEmptyObjects: false
	});
}

export async function toYaml(json: string): Promise<string> {
	const yaml = await import('js-yaml');
	const parsed = JSON.parse(json) as JsonValue;
	return yaml.dump(parsed, {
		indent: 2,
		lineWidth: 120,
		noRefs: true,
		sortKeys: false
	});
}

export async function toToml(json: string): Promise<string> {
	const { stringify } = await import('smol-toml');
	const parsed = JSON.parse(json) as JsonValue;
	return stringify(parsed);
}

export async function toMarkdownTable(json: string): Promise<string> {
	const parsed = JSON.parse(json) as JsonValue;
	if (!Array.isArray(parsed) || parsed.length === 0) {
		throw new Error('Input must be a non-empty array of objects for Markdown Table conversion');
	}

	const keys = Array.from(
		new Set(
			parsed.flatMap((row) =>
				row && typeof row === 'object' && !Array.isArray(row) ? Object.keys(row) : []
			)
		)
	);

	let markdown = `| ${keys.join(' | ')} |\n`;
	markdown += `| ${keys.map(() => '---').join(' | ')} |\n`;

	for (const row of parsed) {
		if (!row || typeof row !== 'object' || Array.isArray(row)) {
			throw new Error('Each array item must be an object for Markdown Table conversion');
		}

		markdown += `| ${keys
			.map((key) => formatMarkdownCell((row as JsonObject)[key]))
			.join(' | ')} |\n`;
	}

	return markdown;
}

export async function jsonpathQuery(json: string, query: string): Promise<unknown> {
	const { JSONPath } = await import('jsonpath-plus');
	const parsed = JSON.parse(json) as JsonValue;
	return JSONPath({ path: query, json: parsed });
}

export async function jmespathQuery(json: string, query: string): Promise<unknown> {
	const mod = await import('jmespath');
	const jmespath = mod.default ?? mod;
	const parsed = JSON.parse(json) as JsonValue;
	return jmespath.search(parsed, query);
}

function formatMarkdownCell(value: unknown): string {
	if (value === null || value === undefined) {
		return '';
	}

	if (typeof value === 'object') {
		return JSON.stringify(value).replaceAll('|', '\\|');
	}

	return String(value).replaceAll('|', '\\|').replaceAll('\n', '<br>');
}

function cleanJsonValue(value: JsonValue, options: FormatOptions): JsonValue | undefined {
	if (value === null) {
		return options.removeNulls ? undefined : value;
	}

	if (Array.isArray(value)) {
		const nextArray = value
			.map((entry) => cleanJsonValue(entry, options))
			.filter((entry): entry is JsonValue => entry !== undefined);

		if (options.removeEmptyArrays && nextArray.length === 0) {
			return undefined;
		}

		return nextArray;
	}

	if (typeof value === 'object') {
		const nextObjectEntries = Object.entries(value)
			.map(([key, entry]) => [key, cleanJsonValue(entry, options)] as const)
			.filter(([, entry]) => entry !== undefined);

		const nextObject = Object.fromEntries(nextObjectEntries) as JsonObject;

		if (options.removeEmptyObjects && Object.keys(nextObject).length === 0) {
			return undefined;
		}

		return nextObject;
	}

	if (typeof value === 'string' && options.removeEmptyStrings && value.length === 0) {
		return undefined;
	}

	return value;
}

function sortJsonValue(value: JsonValue, direction: 'asc' | 'desc'): JsonValue {
	if (Array.isArray(value)) {
		return value.map((entry) => sortJsonValue(entry, direction));
	}

	if (value && typeof value === 'object') {
		const keys = Object.keys(value).sort((left, right) => {
			const comparison = left.localeCompare(right);
			return direction === 'asc' ? comparison : -comparison;
		});

		return Object.fromEntries(
			keys.map((key) => [key, sortJsonValue((value as JsonObject)[key], direction)])
		) as JsonObject;
	}

	return value;
}

function computeStats(value: JsonValue, original: string, formatted: string): JsonStats {
	const stats: JsonStats = {
		keys: 0,
		values: 0,
		strings: 0,
		numbers: 0,
		booleans: 0,
		nulls: 0,
		arrays: 0,
		objects: 0,
		maxDepth: 0,
		sizeOriginal: new TextEncoder().encode(original).length,
		sizeFormatted: new TextEncoder().encode(formatted).length
	};

	walkStats(value, 0, stats);
	return stats;
}

function walkStats(value: JsonValue, depth: number, stats: JsonStats): void {
	stats.maxDepth = Math.max(stats.maxDepth, depth);

	if (value === null) {
		stats.values++;
		stats.nulls++;
		return;
	}

	if (Array.isArray(value)) {
		stats.values++;
		stats.arrays++;
		for (const entry of value) {
			walkStats(entry, depth + 1, stats);
		}
		return;
	}

	if (typeof value === 'object') {
		stats.values++;
		stats.objects++;
		const entries = Object.entries(value);
		stats.keys += entries.length;
		for (const [, entry] of entries) {
			walkStats(entry, depth + 1, stats);
		}
		return;
	}

	stats.values++;
	switch (typeof value) {
		case 'string':
			stats.strings++;
			break;
		case 'number':
			stats.numbers++;
			break;
		case 'boolean':
			stats.booleans++;
			break;
	}
}

function renderJsonValue(
	value: JsonValue,
	depth: number,
	options: FormatOptions,
	forceInline: boolean
): string {
	if (value === null) {
		return 'null';
	}

	if (typeof value === 'string') {
		return quoteString(value, options.quoteStyle);
	}

	if (typeof value === 'number' || typeof value === 'boolean') {
		return String(value);
	}

	const indentUnit = options.indent === 'tab' ? '\t' : ' '.repeat(options.indent);
	const nextIndent = indentUnit.repeat(depth + 1);
	const currentIndent = indentUnit.repeat(depth);
	const shouldInline =
		forceInline ||
		options.collapseDepth === 0 ||
		(options.collapseDepth !== null && depth >= options.collapseDepth);

	if (Array.isArray(value)) {
		if (value.length === 0) {
			return '[]';
		}

		const items = value.map((entry) => renderJsonValue(entry, depth + 1, options, shouldInline));
		if (shouldInline) {
			return `[${items.join(', ')}${options.trailingCommas ? ',' : ''}]`;
		}

		return `[\n${items
			.map((entry, index) => `${nextIndent}${entry}${commaSuffix(index, items.length, options)}`)
			.join('\n')}\n${currentIndent}]`;
	}

	const entries = Object.entries(value);
	if (entries.length === 0) {
		return '{}';
	}

	const renderedEntries = entries.map(([key, entry]) => {
		const renderedKey = quoteString(key, options.quoteStyle);
		const renderedValue = renderJsonValue(entry, depth + 1, options, shouldInline);
		return `${renderedKey}: ${renderedValue}`;
	});

	if (shouldInline) {
		return `{ ${renderedEntries.join(', ')}${options.trailingCommas ? ',' : ''} }`;
	}

	return `{\n${renderedEntries
		.map(
			(entry, index) =>
				`${nextIndent}${entry}${commaSuffix(index, renderedEntries.length, options)}`
		)
		.join('\n')}\n${currentIndent}}`;
}

function commaSuffix(index: number, total: number, options: FormatOptions): string {
	if (index < total - 1) {
		return ',';
	}

	return options.trailingCommas ? ',' : '';
}

function quoteString(value: string, style: 'double' | 'single'): string {
	const escaped = value
		.replaceAll('\\', '\\\\')
		.replaceAll('\n', '\\n')
		.replaceAll('\r', '\\r')
		.replaceAll('\t', '\\t');

	if (style === 'single') {
		return `'${escaped.replaceAll("'", "\\'")}'`;
	}

	return `"${escaped.replaceAll('"', '\\"')}"`;
}
