export type UnicodeInspectorGranularity = 'grapheme' | 'codepoint';

export interface UnicodeInspectorOptions {
	granularity: UnicodeInspectorGranularity;
	maxScalars: number;
}

export interface UnicodePropertyLookup {
	readableNameForCodePoint(codePoint: number): string;
	nameForGrapheme(segment: string): string | undefined;
	category(codePoint: number): string;
	script(codePoint: number): string;
	eastAsianWidth(codePoint: number): string;
}

export interface UnicodeScalarInspection {
	startOffsetUtf16: number;
	codePoint: number;
	utf8BytesHex: string;
	category: string;
	script: string;
	eastAsianWidth: string;
	name: string;
}

export interface UnicodeClusterInspection {
	startOffsetUtf16: number;
	segment: string;
	sequenceName: string | null;
	scalars: UnicodeScalarInspection[];
}

export interface UnicodeInspectorMetrics {
	inputBytes: number;
	inputUtf16Units: number;
	scalarCount: number;
	clusterCount: number;
	omittedScalars: number;
}

export interface UnicodeInspectorResult {
	clusters: UnicodeClusterInspection[];
	metrics: UnicodeInspectorMetrics;
	truncated: boolean;
	durationMs: number;
}

export type UnicodeInspectorWorkerRequest = {
	id: number;
	input: string;
	options?: Partial<UnicodeInspectorOptions>;
};

export type UnicodeInspectorWorkerResponse = {
	id: number;
	result?: UnicodeInspectorResult;
	error?: string;
};

export const UNICODE_INSPECTOR_WORKER_THRESHOLD_BYTES = 500 * 1024;

const DEFAULT_OPTIONS: UnicodeInspectorOptions = {
	granularity: 'grapheme',
	maxScalars: 25_000
};

const textEncoder = new TextEncoder();

function nowMs(): number {
	if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
		return performance.now();
	}
	return Date.now();
}

function getByteSize(value: string): number {
	return new TextEncoder().encode(value).length;
}

function normalizeOptions(partial: Partial<UnicodeInspectorOptions>): UnicodeInspectorOptions {
	const maxScalarsRaw = partial.maxScalars ?? DEFAULT_OPTIONS.maxScalars;
	const maxScalars =
		Number.isFinite(maxScalarsRaw) && maxScalarsRaw > 0
			? Math.min(Math.floor(maxScalarsRaw), 250_000)
			: DEFAULT_OPTIONS.maxScalars;
	return {
		granularity: partial.granularity ?? DEFAULT_OPTIONS.granularity,
		maxScalars
	};
}

function utf8BytesHex(codePoint: number): string {
	const bytes = textEncoder.encode(String.fromCodePoint(codePoint));
	let hex = '';
	for (let i = 0; i < bytes.length; i += 1) {
		if (i > 0) hex += ' ';
		hex += bytes[i].toString(16).toUpperCase().padStart(2, '0');
	}
	return hex;
}

function scalarsInSegment(segment: string): Array<{ offset: number; codePoint: number }> {
	const out: Array<{ offset: number; codePoint: number }> = [];
	for (let i = 0; i < segment.length; ) {
		const codePoint = segment.codePointAt(i);
		if (codePoint === undefined) break;
		out.push({ offset: i, codePoint });
		i += codePoint > 0xffff ? 2 : 1;
	}
	return out;
}

function splitGraphemes(input: string): Array<{ segment: string; index: number }> {
	if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
		const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
		return [...segmenter.segment(input)].map((s) => ({
			segment: s.segment,
			index: s.index
		}));
	}
	return scalarsInSegment(input).map(({ offset, codePoint }) => ({
		segment: String.fromCodePoint(codePoint),
		index: offset
	}));
}

function splitCodePointUnits(input: string): Array<{ segment: string; index: number }> {
	return scalarsInSegment(input).map(({ offset, codePoint }) => ({
		segment: String.fromCodePoint(codePoint),
		index: offset
	}));
}

function countScalarsInInput(input: string, granularity: UnicodeInspectorGranularity): number {
	const pieces = granularity === 'grapheme' ? splitGraphemes(input) : splitCodePointUnits(input);
	let total = 0;
	for (const piece of pieces) {
		total += scalarsInSegment(piece.segment).length;
	}
	return total;
}

export function shouldUseUnicodeInspectorWorker(input: string): boolean {
	return new Blob([input]).size > UNICODE_INSPECTOR_WORKER_THRESHOLD_BYTES;
}

export function inspectUnicode(
	input: string,
	partialOptions: Partial<UnicodeInspectorOptions>,
	lookup: UnicodePropertyLookup
): UnicodeInspectorResult {
	const startedAt = nowMs();
	const options = normalizeOptions(partialOptions);

	if (input.length === 0) {
		return {
			clusters: [],
			metrics: {
				inputBytes: 0,
				inputUtf16Units: 0,
				scalarCount: 0,
				clusterCount: 0,
				omittedScalars: 0
			},
			truncated: false,
			durationMs: nowMs() - startedAt
		};
	}

	const pieces =
		options.granularity === 'grapheme' ? splitGraphemes(input) : splitCodePointUnits(input);

	const clusters: UnicodeClusterInspection[] = [];
	let emittedScalars = 0;
	let truncated = false;

	outer: for (const piece of pieces) {
		const scalars = scalarsInSegment(piece.segment);
		const clusterScalars: UnicodeScalarInspection[] = [];
		const globalStart = piece.index;

		for (const { offset, codePoint } of scalars) {
			if (emittedScalars >= options.maxScalars) {
				truncated = true;
				if (clusterScalars.length > 0) {
					const completedCluster = clusterScalars.length === scalars.length;
					const sequenceName =
						completedCluster && scalars.length > 1
							? (lookup.nameForGrapheme(piece.segment) ?? null)
							: null;
					clusters.push({
						startOffsetUtf16: piece.index,
						segment: piece.segment,
						sequenceName,
						scalars: clusterScalars
					});
				}
				break outer;
			}
			clusterScalars.push({
				startOffsetUtf16: globalStart + offset,
				codePoint,
				utf8BytesHex: utf8BytesHex(codePoint),
				category: lookup.category(codePoint),
				script: lookup.script(codePoint),
				eastAsianWidth: lookup.eastAsianWidth(codePoint),
				name: lookup.readableNameForCodePoint(codePoint)
			});
			emittedScalars += 1;
		}

		if (clusterScalars.length > 0) {
			const sequenceName =
				scalars.length > 1 ? (lookup.nameForGrapheme(piece.segment) ?? null) : null;
			clusters.push({
				startOffsetUtf16: piece.index,
				segment: piece.segment,
				sequenceName,
				scalars: clusterScalars
			});
		}
	}

	const omittedScalars = truncated
		? Math.max(0, countScalarsInInput(input, options.granularity) - emittedScalars)
		: 0;

	const metrics: UnicodeInspectorMetrics = {
		inputBytes: getByteSize(input),
		inputUtf16Units: input.length,
		scalarCount: emittedScalars,
		clusterCount: clusters.length,
		omittedScalars
	};

	return {
		clusters,
		metrics,
		truncated,
		durationMs: nowMs() - startedAt
	};
}
