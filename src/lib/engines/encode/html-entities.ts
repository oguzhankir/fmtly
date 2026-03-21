import { HTML_NAMED_CHARACTER_REFERENCE_DECODE_MAP } from './html-entity-named-map.generated.js';

export type HTMLEntityAction = 'encode' | 'decode';

export type HTMLEntityEncodeFormat = 'named' | 'decimal' | 'hex';

export type HTMLEntityEncodeScope = 'essentials' | 'all_non_ascii';

export type HTMLEntityApostropheStyle = 'apos' | 'numeric';

export type HTMLEntityDecodeMode = 'strict' | 'permissive';

export interface HTMLEntityEncodeOptions {
	format: HTMLEntityEncodeFormat;
	scope: HTMLEntityEncodeScope;
	apostropheStyle: HTMLEntityApostropheStyle;
	encodeLineBreaks: boolean;
	encodeApostrophe: boolean;
}

export interface HTMLEntityDecodeOptions {
	mode: HTMLEntityDecodeMode;
}

export interface HTMLEntityOptions {
	encode: HTMLEntityEncodeOptions;
	decode: HTMLEntityDecodeOptions;
}

export type HTMLEntityWarningCode = 'no_changes_detected';

export type HTMLEntityErrorCode = 'invalid_entity' | 'incomplete_reference';

export interface HTMLEntityError {
	code: HTMLEntityErrorCode;
	detail: string;
	offset: number;
}

export interface HTMLEntityMetrics {
	inputBytes: number;
	outputBytes: number;
	inputCharacters: number;
	outputCharacters: number;
	characterDelta: number;
	entitiesEncoded: number;
	entitiesDecoded: number;
}

export interface HTMLEntityResult {
	action: HTMLEntityAction;
	output: string;
	error: HTMLEntityError | null;
	warnings: HTMLEntityWarningCode[];
	metrics: HTMLEntityMetrics;
	durationMs: number;
}

export type HTMLEntityWorkerRequest = {
	id: number;
	input: string;
	action: HTMLEntityAction;
	options?: Partial<{
		encode: Partial<HTMLEntityEncodeOptions>;
		decode: Partial<HTMLEntityDecodeOptions>;
	}>;
};

export type HTMLEntityWorkerResponse = {
	id: number;
	result?: HTMLEntityResult;
	error?: string;
};

export const HTML_ENTITY_WORKER_THRESHOLD_BYTES = 500 * 1024;

const DEFAULT_ENCODE_OPTIONS: HTMLEntityEncodeOptions = {
	format: 'named',
	scope: 'essentials',
	apostropheStyle: 'numeric',
	encodeLineBreaks: false,
	encodeApostrophe: true
};

const DEFAULT_DECODE_OPTIONS: HTMLEntityDecodeOptions = {
	mode: 'permissive'
};

let reverseNamedEncodeCache: Map<number, string> | null = null;

function nowMs(): number {
	if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
		return performance.now();
	}
	return Date.now();
}

function getByteSize(value: string): number {
	return new TextEncoder().encode(value).length;
}

function normalizeEncodeOptions(
	partial: Partial<HTMLEntityEncodeOptions>
): HTMLEntityEncodeOptions {
	return {
		format: partial.format ?? DEFAULT_ENCODE_OPTIONS.format,
		scope: partial.scope ?? DEFAULT_ENCODE_OPTIONS.scope,
		apostropheStyle: partial.apostropheStyle ?? DEFAULT_ENCODE_OPTIONS.apostropheStyle,
		encodeLineBreaks: partial.encodeLineBreaks ?? DEFAULT_ENCODE_OPTIONS.encodeLineBreaks,
		encodeApostrophe: partial.encodeApostrophe ?? DEFAULT_ENCODE_OPTIONS.encodeApostrophe
	};
}

function normalizeDecodeOptions(
	partial: Partial<HTMLEntityDecodeOptions>
): HTMLEntityDecodeOptions {
	return {
		mode: partial.mode ?? DEFAULT_DECODE_OPTIONS.mode
	};
}

function normalizeOptions(
	partial: Partial<{
		encode: Partial<HTMLEntityEncodeOptions>;
		decode: Partial<HTMLEntityDecodeOptions>;
	}>
): HTMLEntityOptions {
	return {
		encode: normalizeEncodeOptions(partial.encode ?? {}),
		decode: normalizeDecodeOptions(partial.decode ?? {})
	};
}

function getReverseNamedEncodeMap(): Map<number, string> {
	if (reverseNamedEncodeCache !== null) return reverseNamedEncodeCache;
	const map = new Map<number, string>();
	for (const [name, value] of Object.entries(HTML_NAMED_CHARACTER_REFERENCE_DECODE_MAP)) {
		const scalarCount = [...value].length;
		if (scalarCount !== 1) continue;
		const cp = value.codePointAt(0);
		if (cp === undefined) continue;
		const entityLen = name.length + 2;
		const existing = map.get(cp);
		const existingLen = existing === undefined ? Number.POSITIVE_INFINITY : existing.length + 2;
		if (entityLen < existingLen) {
			map.set(cp, name);
		}
	}
	reverseNamedEncodeCache = map;
	return map;
}

function encodeCodePoint(
	cp: number,
	options: HTMLEntityEncodeOptions,
	reverseNamed: Map<number, string>
): { segment: string; count: number } {
	if (options.encodeLineBreaks) {
		if (cp === 0xa) return { segment: '&#10;', count: 1 };
		if (cp === 0xd) return { segment: '&#13;', count: 1 };
	}

	const isEssential =
		cp === 0x26 ||
		cp === 0x3c ||
		cp === 0x3e ||
		cp === 0x22 ||
		(options.encodeApostrophe && cp === 0x27);

	const needsExtended = options.scope === 'all_non_ascii' && cp >= 0x80;

	if (!isEssential && !needsExtended) {
		return { segment: String.fromCodePoint(cp), count: 0 };
	}

	if (options.format === 'decimal') {
		return { segment: `&#${cp};`, count: 1 };
	}

	if (options.format === 'hex') {
		return { segment: `&#x${cp.toString(16).toUpperCase()};`, count: 1 };
	}

	if (cp === 0x26) return { segment: '&amp;', count: 1 };
	if (cp === 0x3c) return { segment: '&lt;', count: 1 };
	if (cp === 0x3e) return { segment: '&gt;', count: 1 };
	if (cp === 0x22) return { segment: '&quot;', count: 1 };
	if (cp === 0x27 && options.encodeApostrophe) {
		return options.apostropheStyle === 'apos'
			? { segment: '&apos;', count: 1 }
			: { segment: '&#39;', count: 1 };
	}

	const named = reverseNamed.get(cp);
	if (named !== undefined) {
		return { segment: `&${named};`, count: 1 };
	}
	return { segment: `&#${cp};`, count: 1 };
}

function encodeHTMLEntities(
	input: string,
	encodeOptions: HTMLEntityEncodeOptions
): { output: string; entitiesEncoded: number } {
	const reverseNamed = getReverseNamedEncodeMap();
	let output = '';
	let entitiesEncoded = 0;

	for (let i = 0; i < input.length; ) {
		const cp = input.codePointAt(i);
		if (cp === undefined) break;
		const { segment, count } = encodeCodePoint(cp, encodeOptions, reverseNamed);
		output += segment;
		entitiesEncoded += count;
		i += cp > 0xffff ? 2 : 1;
	}

	return { output, entitiesEncoded };
}

function decodeNumericEntity(
	body: string,
	isHex: boolean
): { ok: true; char: string } | { ok: false } {
	const raw = isHex ? body.slice(2) : body.slice(1);
	if (raw.length === 0) return { ok: false };
	const value = Number.parseInt(raw, isHex ? 16 : 10);
	if (!Number.isFinite(value) || value < 0 || value > 0x10ffff) return { ok: false };
	if (value >= 0xd800 && value <= 0xdfff) return { ok: false };
	try {
		return { ok: true, char: String.fromCodePoint(value) };
	} catch {
		return { ok: false };
	}
}

function tryParseNamedEntity(input: string, start: number): { end: number; char: string } | null {
	if (start + 1 >= input.length) return null;
	const first = input[start + 1];
	if (!/[a-zA-Z]/.test(first)) return null;
	let end = start + 2;
	while (end < input.length) {
		const c = input[end];
		if (c === ';') break;
		if (!/[a-zA-Z0-9-]/.test(c)) return null;
		end += 1;
	}
	if (end >= input.length || input[end] !== ';') return null;
	const name = input.slice(start + 1, end);
	const resolved = HTML_NAMED_CHARACTER_REFERENCE_DECODE_MAP[name];
	if (resolved === undefined) return null;
	return { end: end + 1, char: resolved };
}

function tryParseNumericEntity(input: string, start: number): { end: number; char: string } | null {
	if (start + 2 >= input.length) return null;
	if (input[start + 1] !== '#') return null;
	let isHex = false;
	let digitStart = start + 2;
	if (digitStart < input.length && (input[digitStart] === 'x' || input[digitStart] === 'X')) {
		isHex = true;
		digitStart += 1;
	}
	if (digitStart >= input.length) return null;
	let end = digitStart;
	while (end < input.length) {
		const c = input[end];
		if (isHex) {
			if (!/[0-9a-fA-F]/.test(c)) break;
		} else if (!/[0-9]/.test(c)) {
			break;
		}
		end += 1;
	}
	if (end === digitStart) return null;
	if (end >= input.length || input[end] !== ';') return null;
	const body = input.slice(start + 1, end);
	const decoded = decodeNumericEntity(body, isHex);
	if (!decoded.ok) return null;
	return { end: end + 1, char: decoded.char };
}

function tryParseAnyEntity(input: string, start: number): { end: number; char: string } | null {
	const numeric = tryParseNumericEntity(input, start);
	if (numeric !== null) return numeric;
	return tryParseNamedEntity(input, start);
}

function decodeHTMLEntities(
	input: string,
	decodeOptions: HTMLEntityDecodeOptions
): { output: string; entitiesDecoded: number; error: HTMLEntityError | null } {
	let output = '';
	let entitiesDecoded = 0;
	let index = 0;

	while (index < input.length) {
		const amp = input.indexOf('&', index);
		if (amp === -1) {
			output += input.slice(index);
			break;
		}
		output += input.slice(index, amp);
		const parsed = tryParseAnyEntity(input, amp);
		if (parsed !== null) {
			output += parsed.char;
			entitiesDecoded += 1;
			index = parsed.end;
			continue;
		}

		if (decodeOptions.mode === 'strict') {
			const errDetail = classifyStrictDecodeFailure(input, amp);
			return {
				output: '',
				entitiesDecoded,
				error: {
					code: errDetail.code,
					detail: errDetail.detail,
					offset: amp
				}
			};
		}

		output += '&';
		index = amp + 1;
	}

	return { output, entitiesDecoded, error: null };
}

function classifyStrictDecodeFailure(
	input: string,
	amp: number
): { code: HTMLEntityErrorCode; detail: string } {
	if (amp + 1 >= input.length) {
		return { code: 'incomplete_reference', detail: 'Trailing ampersand with no reference' };
	}
	const next = input[amp + 1];
	if (next === '#') {
		const semi = input.indexOf(';', amp + 2);
		if (semi === -1) {
			return {
				code: 'incomplete_reference',
				detail: 'Numeric character reference missing closing semicolon'
			};
		}
		const body = input.slice(amp + 1, semi);
		const decoded = decodeNumericEntity(body, body.startsWith('#x') || body.startsWith('#X'));
		if (!decoded.ok) {
			return { code: 'invalid_entity', detail: 'Invalid numeric character reference' };
		}
		return { code: 'invalid_entity', detail: 'Malformed character reference' };
	}
	if (!/[a-zA-Z]/.test(next)) {
		return {
			code: 'invalid_entity',
			detail: 'Bare ampersand must start a valid character reference'
		};
	}
	const semi = input.indexOf(';', amp);
	if (semi === -1) {
		return {
			code: 'incomplete_reference',
			detail: 'Named character reference missing closing semicolon'
		};
	}
	const name = input.slice(amp + 1, semi);
	if (HTML_NAMED_CHARACTER_REFERENCE_DECODE_MAP[name] === undefined) {
		return { code: 'invalid_entity', detail: `Unknown named entity "&${name};"` };
	}
	return { code: 'invalid_entity', detail: 'Malformed character reference' };
}

function createMetrics(
	input: string,
	output: string,
	entitiesEncoded: number,
	entitiesDecoded: number
): HTMLEntityMetrics {
	return {
		inputBytes: getByteSize(input),
		outputBytes: getByteSize(output),
		inputCharacters: input.length,
		outputCharacters: output.length,
		characterDelta: output.length - input.length,
		entitiesEncoded,
		entitiesDecoded
	};
}

function createResult(
	input: string,
	output: string,
	action: HTMLEntityAction,
	error: HTMLEntityError | null,
	warnings: HTMLEntityWarningCode[],
	entitiesEncoded: number,
	entitiesDecoded: number,
	startedAt: number
): HTMLEntityResult {
	return {
		action,
		output: error !== null ? '' : output,
		error,
		warnings,
		metrics: createMetrics(input, error !== null ? '' : output, entitiesEncoded, entitiesDecoded),
		durationMs: nowMs() - startedAt
	};
}

export function shouldUseHTMLEntityWorker(input: string): boolean {
	return new Blob([input]).size > HTML_ENTITY_WORKER_THRESHOLD_BYTES;
}

export function processHTMLEntities(
	input: string,
	action: HTMLEntityAction,
	partialOptions: Partial<{
		encode: Partial<HTMLEntityEncodeOptions>;
		decode: Partial<HTMLEntityDecodeOptions>;
	}> = {}
): HTMLEntityResult {
	const startedAt = nowMs();
	const options = normalizeOptions(partialOptions);

	if (input.length === 0) {
		return createResult(input, '', action, null, [], 0, 0, startedAt);
	}

	if (action === 'encode') {
		const { output, entitiesEncoded } = encodeHTMLEntities(input, options.encode);
		const warnings: HTMLEntityWarningCode[] = output === input ? ['no_changes_detected'] : [];
		return createResult(input, output, action, null, warnings, entitiesEncoded, 0, startedAt);
	}

	const decoded = decodeHTMLEntities(input, options.decode);
	if (decoded.error !== null) {
		return createResult(
			input,
			'',
			action,
			decoded.error,
			[],
			0,
			decoded.entitiesDecoded,
			startedAt
		);
	}
	const warnings: HTMLEntityWarningCode[] = decoded.output === input ? ['no_changes_detected'] : [];
	return createResult(
		input,
		decoded.output,
		action,
		null,
		warnings,
		0,
		decoded.entitiesDecoded,
		startedAt
	);
}
