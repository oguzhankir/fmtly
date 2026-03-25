import { jsonToCSV } from '$engines/csv/index.js';
import {
	buildJSONTree,
	computeJSONStats,
	formatJSON,
	initParser,
	minifyJSON,
	parseJSON,
	repairJSON,
	shouldUseWorker,
	sortJSONKeys
} from '$engines/json/index.js';
import type {
	JSONStats,
	ParseError,
	TreeNode,
	WorkerRequest,
	WorkerResponse
} from '$engines/json/index.js';
import {
	type FormatOptions as AdvancedFormatOptions,
	type JsonStats as AdvancedJsonStats,
	type JsonFlattenMode,
	type JsonFlattenOptions,
	type JsonPatchMode,
	type JsonPatchOptions,
	type NdjsonEntry,
	type NdjsonParseResult,
	applyJsonPatch,
	flattenJson,
	format as formatAdvancedJson,
	generateJsonPatch,
	generateJsonSchema,
	minify as minifyAdvancedJson,
	parseNdjson,
	toGoStructs,
	toMarkdownTable,
	toRustSerdeStructs,
	toToml,
	toTypeScriptTypes,
	toYaml,
	toZodSchema,
	unflattenJson
} from '$engines/json/json.engine.js';
import type { ProtobufMessageTypeInfo } from '$engines/json/protobuf.engine.js';
import { getProtobufMessageTypes, protobufToSampleJson } from '$engines/json/protobuf.engine.js';
import { jsonToXML } from '$engines/xml/index.js';
import { input } from '$stores/input.store';
import { clearOutput, output } from '$stores/output.store';
import { get, writable } from 'svelte/store';

export const jsonError = writable<ParseError | null>(null);
export const jsonStats = writable<JSONStats | null>(null);
export const jsonAdvancedStats = writable<AdvancedJsonStats | null>(null);
export const jsonTree = writable<TreeNode[]>([]);
export const jsonParsedData = writable<unknown>(null);
export const jsonFormatWarnings = writable<string[]>([]);
export const jsonFormatOptions = writable<AdvancedFormatOptions>({
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
});
export const jsonFlattenOptions = writable<JsonFlattenOptions>({
	mode: 'flatten',
	separator: '.',
	rootKey: '$'
});
export const jsonPatchOptions = writable<JsonPatchOptions>({
	mode: 'generate',
	operand: ''
});

export const jsonNdjsonEntries = writable<NdjsonEntry[]>([]);
export const jsonProtobufMessageTypes = writable<ProtobufMessageTypeInfo[]>([]);
export const jsonProtobufSelectedMessageType = writable<string>('');
export const jsonProtobufError = writable<string | null>(null);

let debounceTimer: ReturnType<typeof setTimeout> | undefined;
let parserInitialized = false;
let activeJsonToolSlug = 'formatter';
let unsubscribeInput: (() => void) | undefined;
let jsonWorker: Worker | null = null;
let jsonWorkerPromise: Promise<Worker> | null = null;
let jsonWorkerRequestCounter = 0;
const pendingWorkerRequests = new Map<
	string,
	{
		resolve: (value: unknown) => void;
		reject: (reason?: unknown) => void;
	}
>();

async function applyPatchOutput(value: string): Promise<void> {
	try {
		const options = get(jsonPatchOptions);
		if (!options.operand.trim()) {
			clearOutput();
			jsonAdvancedStats.set(null);
			jsonFormatWarnings.set([]);
			return;
		}

		const workerMethod = options.mode === 'generate' ? 'generateJsonPatch' : 'applyJsonPatch';
		const transformed = shouldUseWorker(`${value}\n${options.operand}`)
			? await callJsonWorkerMethod(workerMethod, [value, options.operand])
			: options.mode === 'generate'
				? generateJsonPatch(value, options.operand)
				: applyJsonPatch(value, options.operand);

		if (typeof transformed !== 'string') {
			throw new Error('ui.json_patch.error.invalid_result');
		}

		output.set(transformed);
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
	} catch (error) {
		clearOutput();
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([toPatchWarningMessage(error)]);
	}
}

async function ensureParser(): Promise<void> {
	if (!parserInitialized) {
		await initParser();
		parserInitialized = true;
	}
}

export function initJSONStore(toolSlug: string): void {
	activeJsonToolSlug = toolSlug;
	jsonNdjsonEntries.set([]);
	jsonProtobufMessageTypes.set([]);
	jsonProtobufSelectedMessageType.set('');
	jsonProtobufError.set(null);

	jsonError.set(null);
	jsonStats.set(null);
	jsonAdvancedStats.set(null);
	jsonTree.set([]);
	jsonParsedData.set(null);
	jsonFormatWarnings.set([]);
	clearOutput();
	unsubscribeInput?.();
	unsubscribeInput = input.subscribe((value) => {
		if (debounceTimer) clearTimeout(debounceTimer);

		if (!value.trim()) {
			jsonError.set(null);
			jsonStats.set(null);
			jsonAdvancedStats.set(null);
			jsonTree.set([]);
			jsonParsedData.set(null);
			jsonFormatWarnings.set([]);
			jsonNdjsonEntries.set([]);
			jsonProtobufMessageTypes.set([]);
			jsonProtobufSelectedMessageType.set('');
			jsonProtobufError.set(null);
			clearOutput();
			return;
		}

		debounceTimer = setTimeout(() => {
			void processInput(value);
		}, 300);
	});
}

export function destroyJSONStore(): void {
	if (debounceTimer) {
		clearTimeout(debounceTimer);
		debounceTimer = undefined;
	}

	unsubscribeInput?.();
	unsubscribeInput = undefined;
	disposeJsonWorker();
}

async function processInput(value: string): Promise<void> {
	if (activeJsonToolSlug === 'ndjson') {
		await ensureParser();
		jsonError.set(null);
		jsonParsedData.set(null);
		jsonStats.set(null);
		jsonAdvancedStats.set(null);
		jsonTree.set([]);
		jsonFormatWarnings.set([]);
		await applyToolOutput(value);
		return;
	}

	if (activeJsonToolSlug === 'from-protobuf') {
		jsonError.set(null);
		jsonParsedData.set(null);
		jsonStats.set(null);
		jsonAdvancedStats.set(null);
		jsonTree.set([]);
		jsonFormatWarnings.set([]);
		jsonNdjsonEntries.set([]);
		await applyToolOutput(value);
		return;
	}

	await ensureParser();

	const result = parseJSON(value);

	if (result.success) {
		jsonError.set(null);
		jsonParsedData.set(result.data);

		await applyToolOutput(value);

		const stats = computeJSONStats(result.data);
		jsonStats.set(stats);

		const tree = buildJSONTree(result.data);
		jsonTree.set(tree);
	} else {
		jsonError.set(result.error);
		jsonParsedData.set(null);
		jsonStats.set(null);
		jsonAdvancedStats.set(null);
		jsonTree.set([]);
		jsonFormatWarnings.set([]);
		clearOutput();
	}
}

async function applyToolOutput(value: string): Promise<void> {
	switch (activeJsonToolSlug) {
		case 'formatter':
			applyAdvancedFormatOutput(value);
			return;
		case 'minifier':
			applyMinifyOutput(value);
			return;
		case 'to-zod':
			applyToZodOutput(value);
			return;
		case 'ndjson':
			await applyNdjsonOutput(value);
			return;
		case 'from-protobuf':
			await applyProtobufOutput(value);
			return;
		case 'to-yaml':
			await applyYamlOutput(value);
			return;
		case 'to-csv':
			await applyCsvOutput(value);
			return;
		case 'to-xml':
			applyXmlOutput(value);
			return;
		case 'to-toml':
			await applyTomlOutput(value);
			return;
		case 'to-markdown':
			await applyMarkdownOutput(value);
			return;
		case 'schema-generator':
			applySchemaOutput(value);
			return;
		case 'to-go':
			await applyGoStructOutput(value);
			return;
		case 'to-typescript':
			await applyTypeScriptOutput(value);
			return;
		case 'to-rust':
			await applyRustSerdeOutput(value);
			return;
		case 'flatten':
			await applyFlattenOutput(value);
			return;
		case 'patch':
			await applyPatchOutput(value);
			return;
		case 'validator':
		case 'schema-validate':
		case 'jsonpath':
		case 'jmespath':
			jsonAdvancedStats.set(null);
			jsonFormatWarnings.set([]);
			return;
		default:
			jsonAdvancedStats.set(null);
			jsonFormatWarnings.set([]);
			clearOutput();
	}
}

function applyAdvancedFormatOutput(value: string): void {
	try {
		const result = formatAdvancedJson(value, get(jsonFormatOptions));
		output.set(result.formatted);
		jsonAdvancedStats.set(result.stats);
		jsonFormatWarnings.set(result.warnings);
	} catch {
		const fallback = formatJSON(value, { indent: 2 });
		if (fallback.success) {
			output.set(fallback.output);
		}
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
	}
}

function applyMinifyOutput(value: string): void {
	try {
		const result = minifyAdvancedJson(value);
		output.set(result.formatted);
		jsonAdvancedStats.set(result.stats);
		jsonFormatWarnings.set(result.warnings);
	} catch {
		const fallback = minifyJSON(value);
		if (fallback.success) {
			output.set(fallback.output);
		}
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
	}
}

async function applyYamlOutput(value: string): Promise<void> {
	output.set(await toYaml(value));
	jsonAdvancedStats.set(null);
	jsonFormatWarnings.set([]);
}

async function applyTomlOutput(value: string): Promise<void> {
	output.set(await toToml(value));
	jsonAdvancedStats.set(null);
	jsonFormatWarnings.set([]);
}

async function applyCsvOutput(value: string): Promise<void> {
	const result = await jsonToCSV(value);
	if (result.success) {
		output.set(result.output);
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
		return;
	}
	clearOutput();
	jsonAdvancedStats.set(null);
	jsonFormatWarnings.set([result.error.message]);
}

function applyXmlOutput(value: string): void {
	const result = jsonToXML(value);
	if (result.success) {
		output.set(result.output);
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
		return;
	}
	clearOutput();
	jsonAdvancedStats.set(null);
	jsonFormatWarnings.set([result.error.message]);
}

async function applyMarkdownOutput(value: string): Promise<void> {
	output.set(await toMarkdownTable(value));
	jsonAdvancedStats.set(null);
	jsonFormatWarnings.set([]);
}

function applySchemaOutput(value: string): void {
	try {
		output.set(generateJsonSchema(value));
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
	} catch (error) {
		clearOutput();
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([
			error instanceof Error ? error.message : 'Could not generate JSON Schema'
		]);
	}
}

function applyToZodOutput(value: string): void {
	try {
		output.set(toZodSchema(value));
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
	} catch (error) {
		clearOutput();
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([
			error instanceof Error ? error.message : 'Could not generate Zod schema'
		]);
	}
}

async function applyNdjsonOutput(value: string): Promise<void> {
	jsonNdjsonEntries.set([]);
	try {
		const parsed: NdjsonParseResult = shouldUseWorker(value)
			? ((await callJsonWorkerMethod('parseNdjson', [value, 2])) as NdjsonParseResult)
			: parseNdjson(value, 2);

		if (!parsed.success) {
			clearOutput();
			jsonAdvancedStats.set(null);
			jsonFormatWarnings.set([]);
			return;
		}

		jsonNdjsonEntries.set(parsed.entries);
		output.set(formatNdjsonEntriesReport(parsed.entries, 2));
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
	} catch (error) {
		clearOutput();
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([error instanceof Error ? error.message : 'Could not parse NDJSON']);
	}
}

function formatNdjsonEntriesReport(entries: NdjsonEntry[], indentLevel: number): string {
	const report = entries.map((entry) => {
		if (entry.kind === 'value') {
			return { line: entry.lineNumber, value: entry.value };
		}

		return {
			line: entry.lineNumber,
			error: {
				message: entry.error.message,
				column: entry.error.column,
				plainLanguageExplanation: entry.error.plainLanguageExplanation
			}
		};
	});

	return JSON.stringify(report, null, indentLevel);
}

async function applyProtobufOutput(value: string): Promise<void> {
	jsonProtobufError.set(null);
	try {
		const types = shouldUseWorker(value)
			? ((await callJsonWorkerMethod('getProtobufMessageTypes', [
					value
				])) as ProtobufMessageTypeInfo[])
			: await getProtobufMessageTypes(value);
		jsonProtobufMessageTypes.set(types);

		const currentSelected = get(jsonProtobufSelectedMessageType);
		const nextSelected =
			currentSelected && types.some((t) => t.fullName === currentSelected)
				? currentSelected
				: (types[0]?.fullName ?? '');

		jsonProtobufSelectedMessageType.set(nextSelected);

		if (!nextSelected) {
			clearOutput();
			jsonAdvancedStats.set(null);
			jsonFormatWarnings.set([]);
			return;
		}

		const sample = shouldUseWorker(value)
			? ((await callJsonWorkerMethod('protobufToSampleJson', [value, nextSelected])) as string)
			: await protobufToSampleJson(value, nextSelected);
		output.set(sample);
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
	} catch (error) {
		clearOutput();
		jsonProtobufError.set(
			error instanceof Error ? error.message : 'Could not parse Protobuf / generate sample JSON'
		);
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
	}
}

async function applyGoStructOutput(value: string): Promise<void> {
	try {
		const generated = shouldUseWorker(value)
			? await callJsonWorkerMethod('toGoStructs', [value])
			: toGoStructs(value);

		if (typeof generated !== 'string') {
			throw new Error('Go struct generation returned an invalid result');
		}

		output.set(generated);
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
	} catch (error) {
		clearOutput();
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([
			error instanceof Error ? error.message : 'Could not generate Go structs'
		]);
	}
}

async function applyTypeScriptOutput(value: string): Promise<void> {
	try {
		const generated = shouldUseWorker(value)
			? await callJsonWorkerMethod('toTypeScriptTypes', [value])
			: toTypeScriptTypes(value);

		if (typeof generated !== 'string') {
			throw new Error('TypeScript generation returned an invalid result');
		}

		output.set(generated);
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
	} catch (error) {
		clearOutput();
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([
			error instanceof Error ? error.message : 'Could not generate TypeScript types'
		]);
	}
}

async function applyRustSerdeOutput(value: string): Promise<void> {
	try {
		const generated = shouldUseWorker(value)
			? await callJsonWorkerMethod('toRustSerdeStructs', [value])
			: toRustSerdeStructs(value);

		if (typeof generated !== 'string') {
			throw new Error('Rust serde generation returned an invalid result');
		}

		output.set(generated);
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
	} catch (error) {
		clearOutput();
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([
			error instanceof Error ? error.message : 'Could not generate Rust serde structs'
		]);
	}
}

async function applyFlattenOutput(value: string): Promise<void> {
	try {
		const options = get(jsonFlattenOptions);
		const workerMethod = options.mode === 'flatten' ? 'flattenJson' : 'unflattenJson';
		const transformed = shouldUseWorker(value)
			? await callJsonWorkerMethod(workerMethod, [value, options])
			: transformWithFlattenOptions(value, options);

		if (typeof transformed !== 'string') {
			throw new Error('ui.json_flatten.error.invalid_result');
		}

		output.set(transformed);
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([]);
	} catch (error) {
		clearOutput();
		jsonAdvancedStats.set(null);
		jsonFormatWarnings.set([toFlattenWarningMessage(error)]);
	}
}

function transformWithFlattenOptions(value: string, options: JsonFlattenOptions): string {
	return options.mode === 'flatten' ? flattenJson(value, options) : unflattenJson(value, options);
}

function toFlattenWarningMessage(error: unknown): string {
	if (!(error instanceof Error)) {
		return 'ui.json_flatten.error.generic';
	}

	if (error.message.startsWith('ui.json_flatten.error.')) {
		return error.message;
	}

	return error.message || 'ui.json_flatten.error.generic';
}

function toPatchWarningMessage(error: unknown): string {
	if (!(error instanceof Error)) {
		return 'ui.json_patch.error.generic';
	}

	if (error.message.startsWith('ui.json_patch.error.')) {
		return error.message;
	}

	return error.message || 'ui.json_patch.error.generic';
}

async function getJsonWorker(): Promise<Worker> {
	if (jsonWorker) {
		return jsonWorker;
	}

	if (jsonWorkerPromise) {
		return jsonWorkerPromise;
	}

	jsonWorkerPromise = import('../workers/json.worker?worker')
		.then((workerModule) => {
			const WorkerConstructor = workerModule.default;
			jsonWorker = new WorkerConstructor();

			jsonWorker.onmessage = (event: MessageEvent<WorkerResponse>) => {
				const { id, result, error } = event.data;
				const request = pendingWorkerRequests.get(id);
				if (!request) {
					return;
				}

				pendingWorkerRequests.delete(id);
				if (error) {
					request.reject(new Error(error));
					return;
				}

				request.resolve(result);
			};

			jsonWorker.onerror = () => {
				rejectAllPendingWorkerRequests(new Error('JSON worker crashed'));
				disposeJsonWorker();
			};

			return jsonWorker;
		})
		.finally(() => {
			jsonWorkerPromise = null;
		});

	return jsonWorkerPromise;
}

function rejectAllPendingWorkerRequests(reason: unknown): void {
	for (const [, request] of pendingWorkerRequests) {
		request.reject(reason);
	}
	pendingWorkerRequests.clear();
}

function disposeJsonWorker(): void {
	jsonWorkerPromise = null;
	if (!jsonWorker) {
		return;
	}

	jsonWorker.terminate();
	jsonWorker = null;
	rejectAllPendingWorkerRequests(new Error('JSON worker terminated'));
}

function callJsonWorkerMethod(method: string, args: unknown[]): Promise<unknown> {
	return new Promise((resolve, reject) => {
		void getJsonWorker()
			.then((worker) => {
				const id = `json-worker-${Date.now()}-${jsonWorkerRequestCounter++}`;
				pendingWorkerRequests.set(id, { resolve, reject });

				const request: WorkerRequest = {
					id,
					method,
					args
				};

				worker.postMessage(request);
			})
			.catch((error) => {
				reject(error);
			});
	});
}

export function setFormatOptions(next: Partial<AdvancedFormatOptions>): void {
	jsonFormatOptions.update((current) => ({ ...current, ...next }));
	const value = get(input);
	if (value.trim()) {
		applyAdvancedFormatOutput(value);
	}
}

export function setJsonFlattenOptions(next: Partial<JsonFlattenOptions>): void {
	jsonFlattenOptions.update((current) => {
		const mode: JsonFlattenMode = next.mode ?? current.mode;
		const separator = next.separator ?? current.separator;
		const rootKey = next.rootKey ?? current.rootKey;

		return {
			mode,
			separator,
			rootKey
		};
	});

	if (activeJsonToolSlug !== 'flatten') {
		return;
	}

	const value = get(input);
	if (!value.trim()) {
		return;
	}

	void processInput(value);
}

export function setJsonPatchOptions(next: Partial<JsonPatchOptions>): void {
	jsonPatchOptions.update((current) => {
		const mode: JsonPatchMode = next.mode ?? current.mode;
		const operand = next.operand ?? current.operand;

		return {
			mode,
			operand
		};
	});

	if (activeJsonToolSlug !== 'patch') {
		return;
	}

	const value = get(input);
	if (!value.trim()) {
		return;
	}

	void processInput(value);
}

export function setProtobufSelectedMessageType(next: string): void {
	jsonProtobufSelectedMessageType.set(next);
	if (activeJsonToolSlug !== 'from-protobuf') return;
	const value = get(input);
	if (!value.trim()) return;
	void processInput(value);
}

export async function format(
	indent: 2 | 4 | '\t' | 'tab' | Partial<AdvancedFormatOptions> = 2
): Promise<void> {
	await ensureParser();
	const value = get(input);
	const currentOptions = get(jsonFormatOptions);
	const nextOptions =
		typeof indent === 'object'
			? { ...currentOptions, ...indent }
			: { ...currentOptions, indent: indent === '\t' ? 'tab' : indent };

	try {
		const result = formatAdvancedJson(value, nextOptions);
		jsonFormatOptions.set(nextOptions);
		output.set(result.formatted);
		jsonAdvancedStats.set(result.stats);
		jsonFormatWarnings.set(result.warnings);
		jsonError.set(null);
	} catch {
		const fallbackIndent = typeof indent === 'object' ? currentOptions.indent : indent;
		const result = formatJSON(value, { indent: fallbackIndent === 'tab' ? '\t' : fallbackIndent });
		if (result.success) {
			output.set(result.output);
			jsonFormatOptions.set(nextOptions);
			jsonAdvancedStats.set(null);
			jsonFormatWarnings.set([]);
			jsonError.set(null);
			return;
		}
		jsonError.set(result.error);
	}
}

export async function minify(): Promise<void> {
	await ensureParser();
	const value = get(input);
	try {
		const result = minifyAdvancedJson(value);
		output.set(result.formatted);
		jsonAdvancedStats.set(result.stats);
		jsonFormatWarnings.set(result.warnings);
		jsonError.set(null);
	} catch {
		const result = minifyJSON(value);
		if (result.success) {
			output.set(result.output);
			jsonAdvancedStats.set(null);
			jsonFormatWarnings.set([]);
			jsonError.set(null);
			return;
		}
		jsonError.set(null);
	}
}

export async function repair(): Promise<void> {
	const value = get(input);
	const result = await repairJSON(value);
	if (result.success) {
		input.set(result.output);
		output.set(result.output);
		jsonError.set(null);
	} else {
		jsonError.set(result.error);
	}
}

export async function sortKeys(direction: 'asc' | 'desc' = 'asc'): Promise<void> {
	setFormatOptions({
		sortKeys: true,
		sortOrder: direction
	});
}
