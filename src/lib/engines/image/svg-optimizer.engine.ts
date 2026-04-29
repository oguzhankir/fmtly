export type SvgOptimizeInput = {
	content: string;
	sourceName: string;
	sourceSizeBytes: number;
};

export type SvgOptimizeOptions = {
	multipass: boolean;
	floatPrecision: number;
	removeMetadata: boolean;
	removeComments: boolean;
	removeDesc: boolean;
	cleanupIds: boolean;
	collapseGroups: boolean;
	convertPathData: boolean;
	mergePaths: boolean;
	sortAttrs: boolean;
	removeDimensions: boolean;
	pretty: boolean;
	indent: number;
};

export type SvgDocumentSummary = {
	sizeBytes: number;
	elementCount: number;
	viewBox: string;
	width: string;
	height: string;
};

export type SvgOptimizeMetadata = {
	original: SvgDocumentSummary;
	optimized: SvgDocumentSummary;
	sizeDeltaBytes: number;
	sizeDeltaPercent: number;
};

export type SvgOptimizeResult = {
	optimizedText: string;
	downloadFilename: string;
	metadata: SvgOptimizeMetadata;
	durationMs: number;
};

export type SvgOptimizerWorkerRequest = {
	id: number;
	input: SvgOptimizeInput;
	options: SvgOptimizeOptions;
};

export type SvgOptimizerWorkerResponse = {
	id: number;
	result?: SvgOptimizeResult;
	error?: string;
};

type SvgPresetOverrideValue = false | Record<string, boolean | number | string>;

type SvgPresetOverrideKey =
	| 'cleanupIds'
	| 'collapseGroups'
	| 'convertPathData'
	| 'mergePaths'
	| 'removeComments'
	| 'removeDesc'
	| 'removeMetadata'
	| 'sortAttrs';

type SvgPresetOverrides = Partial<Record<SvgPresetOverrideKey, SvgPresetOverrideValue>>;

export type SvgOptimizerConfig = {
	multipass: boolean;
	floatPrecision: number;
	js2svg: {
		pretty: boolean;
		indent: number;
	};
	plugins: Array<
		| {
				name: 'preset-default';
				params: {
					overrides: SvgPresetOverrides;
				};
		  }
		| 'removeDimensions'
	>;
};

const SVG_OPTIMIZER_DEFAULT_FILE_NAME = 'vector-asset.svg';
const SVG_ROOT_PATTERN = /<svg[\s>]/iu;
const SVG_OPENING_TAG_PATTERN = /<svg\b([^>]*)>/iu;
const SVG_ATTRIBUTE_PATTERN = /([A-Za-z_:][A-Za-z0-9_.:-]*)\s*=\s*(['"])(.*?)\2/gu;
const SVG_ELEMENT_PATTERN = /<(?!\/|!|\?)([A-Za-z][\w:.-]*)\b/gu;
const UTF8_ENCODER = new TextEncoder();

export const SVG_OPTIMIZER_WORKER_THRESHOLD_BYTES = 500 * 1024;

export const SVG_OPTIMIZER_DEFAULT_OPTIONS: SvgOptimizeOptions = {
	multipass: true,
	floatPrecision: 3,
	removeMetadata: true,
	removeComments: true,
	removeDesc: true,
	cleanupIds: false,
	collapseGroups: true,
	convertPathData: true,
	mergePaths: true,
	sortAttrs: true,
	removeDimensions: false,
	pretty: false,
	indent: 2
};

export function shouldUseSvgOptimizerWorker(inputBytes: number): boolean {
	return inputBytes > SVG_OPTIMIZER_WORKER_THRESHOLD_BYTES;
}

export function getSvgUtf8ByteSize(value: string): number {
	return UTF8_ENCODER.encode(value).byteLength;
}

export function looksLikeSvgDocument(value: string): boolean {
	return SVG_ROOT_PATTERN.test(value);
}

export function normalizeSvgOptimizeOptions(
	options: Partial<SvgOptimizeOptions>
): SvgOptimizeOptions {
	return {
		multipass: options.multipass ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.multipass,
		floatPrecision: clampInteger(
			options.floatPrecision ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.floatPrecision,
			0,
			6
		),
		removeMetadata: options.removeMetadata ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.removeMetadata,
		removeComments: options.removeComments ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.removeComments,
		removeDesc: options.removeDesc ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.removeDesc,
		cleanupIds: options.cleanupIds ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.cleanupIds,
		collapseGroups: options.collapseGroups ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.collapseGroups,
		convertPathData: options.convertPathData ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.convertPathData,
		mergePaths: options.mergePaths ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.mergePaths,
		sortAttrs: options.sortAttrs ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.sortAttrs,
		removeDimensions: options.removeDimensions ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.removeDimensions,
		pretty: options.pretty ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.pretty,
		indent: clampInteger(options.indent ?? SVG_OPTIMIZER_DEFAULT_OPTIONS.indent, 0, 8)
	};
}

export function buildSvgOptimizerConfig(options: SvgOptimizeOptions): SvgOptimizerConfig {
	const overrides: SvgPresetOverrides = {};

	if (!options.removeMetadata) overrides.removeMetadata = false;
	if (!options.removeComments) overrides.removeComments = false;
	if (!options.removeDesc) overrides.removeDesc = false;
	if (!options.cleanupIds) overrides.cleanupIds = false;
	if (!options.collapseGroups) overrides.collapseGroups = false;
	if (!options.convertPathData) overrides.convertPathData = false;
	if (!options.mergePaths) overrides.mergePaths = false;
	if (!options.sortAttrs) overrides.sortAttrs = false;

	const plugins: SvgOptimizerConfig['plugins'] = [
		{
			name: 'preset-default',
			params: {
				overrides
			}
		}
	];

	if (options.removeDimensions) {
		plugins.push('removeDimensions');
	}

	return {
		multipass: options.multipass,
		floatPrecision: options.floatPrecision,
		js2svg: {
			pretty: options.pretty,
			indent: options.indent
		},
		plugins
	};
}

export function summarizeSvg(content: string): SvgDocumentSummary {
	const normalized = stripByteOrderMark(content).trim();
	const rootTagMatch = normalized.match(SVG_OPENING_TAG_PATTERN);
	const attributeBlob = rootTagMatch?.[1] ?? '';
	const attributes = parseAttributes(attributeBlob);

	return {
		sizeBytes: getSvgUtf8ByteSize(normalized),
		elementCount: countSvgElements(normalized),
		viewBox: attributes.viewBox ?? '',
		width: attributes.width ?? '',
		height: attributes.height ?? ''
	};
}

export async function optimizeSvg(
	input: SvgOptimizeInput,
	options: Partial<SvgOptimizeOptions> = {}
): Promise<SvgOptimizeResult> {
	const startedAt = nowMs();
	const normalizedText = normalizeSvgText(input.content);
	validateSvgText(normalizedText);

	const normalizedOptions = normalizeSvgOptimizeOptions(options);
	const { optimize } = await import('svgo');
	const optimized = optimize(normalizedText, buildSvgOptimizerConfig(normalizedOptions));
	const optimizedText = optimized.data.trim();
	const originalSummary = summarizeSvg(normalizedText);
	const optimizedSummary = summarizeSvg(optimizedText);

	return {
		optimizedText,
		downloadFilename: buildDownloadFilename(input.sourceName),
		metadata: {
			original: originalSummary,
			optimized: optimizedSummary,
			sizeDeltaBytes: optimizedSummary.sizeBytes - originalSummary.sizeBytes,
			sizeDeltaPercent: computeSizeDeltaPercent(originalSummary.sizeBytes, optimizedSummary.sizeBytes)
		},
		durationMs: elapsedMs(startedAt)
	};
}

export function readSvgFileAsText(file: File): Promise<SvgOptimizeInput> {
	return new Promise<SvgOptimizeInput>((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result !== 'string') {
				reject(new Error('Could not read SVG file'));
				return;
			}

			resolve({
				content: reader.result,
				sourceName: file.name || SVG_OPTIMIZER_DEFAULT_FILE_NAME,
				sourceSizeBytes: file.size
			});
		};
		reader.onerror = () => {
			reject(reader.error ?? new Error('Could not read SVG file'));
		};
		reader.readAsText(file);
	});
}

function normalizeSvgText(value: string): string {
	return stripByteOrderMark(value).trim();
}

function stripByteOrderMark(value: string): string {
	return value.replace(/^\uFEFF/u, '');
}

function validateSvgText(value: string): void {
	if (!value) {
		throw new Error('Paste or upload an SVG first');
	}

	const svgIndex = value.search(SVG_ROOT_PATTERN);
	if (svgIndex < 0) {
		throw new Error('Input must contain a root <svg> element');
	}

	const prefix = value
		.slice(0, svgIndex)
		.replace(/<\?xml[\s\S]*?\?>/giu, '')
		.replace(/<!DOCTYPE[\s\S]*?>/giu, '')
		.replace(/<!--[\s\S]*?-->/gu, '')
		.trim();

	if (prefix.length > 0) {
		throw new Error('SVG markup must start with the root <svg> element');
	}
}

function parseAttributes(attributeBlob: string): Record<string, string> {
	const attributes: Record<string, string> = {};

	for (const match of attributeBlob.matchAll(SVG_ATTRIBUTE_PATTERN)) {
		const [, name, , value] = match;
		if (!name) continue;
		attributes[name] = value ?? '';
	}

	return attributes;
}

function countSvgElements(content: string): number {
	let count = 0;

	for (const _ of content.matchAll(SVG_ELEMENT_PATTERN)) {
		count += 1;
	}

	return count;
}

function buildDownloadFilename(sourceName: string): string {
	const baseName = sourceName.replace(/\.[^.]+$/u, '').trim() || 'optimized-svg';
	return `${baseName}-optimized.svg`;
}

function computeSizeDeltaPercent(inputBytes: number, outputBytes: number): number {
	return inputBytes > 0 ? ((outputBytes - inputBytes) / inputBytes) * 100 : 0;
}

function clampInteger(value: number, min: number, max: number): number {
	if (!Number.isFinite(value)) return min;
	return Math.min(max, Math.max(min, Math.round(value)));
}

function nowMs(): number {
	if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
		return performance.now();
	}

	return Date.now();
}

function elapsedMs(startedAt: number): number {
	return Math.max(0, nowMs() - startedAt);
}
