export type URLEncodeAction = 'encode' | 'decode';

export type URLEncodeMode = 'component' | 'full_url';

export interface URLEncodeOptions {
	encodeSpacesAsPlus: boolean;
	decodePlusAsSpace: boolean;
}

export type URLEncodeWarningCode = 'no_changes_detected';

export type URLEncodeErrorCode = 'invalid_url_encoding';

export interface URLEncodeError {
	code: URLEncodeErrorCode;
	detail: string;
}

export interface URLEncodeMetrics {
	inputBytes: number;
	outputBytes: number;
	inputCharacters: number;
	outputCharacters: number;
	characterDelta: number;
	percentSequenceCount: number;
	plusCount: number;
}

export interface URLEncodeResult {
	action: URLEncodeAction;
	mode: URLEncodeMode;
	output: string;
	error: URLEncodeError | null;
	warnings: URLEncodeWarningCode[];
	metrics: URLEncodeMetrics;
	durationMs: number;
}

export type URLEncodeWorkerRequest = {
	id: number;
	input: string;
	action: URLEncodeAction;
	mode: URLEncodeMode;
	options?: Partial<URLEncodeOptions>;
};

export type URLEncodeWorkerResponse = {
	id: number;
	result?: URLEncodeResult;
	error?: string;
};

const DEFAULT_URL_ENCODE_OPTIONS: URLEncodeOptions = {
	encodeSpacesAsPlus: false,
	decodePlusAsSpace: true
};

export const URL_WORKER_THRESHOLD_BYTES = 500 * 1024;

function nowMs(): number {
	if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
		return performance.now();
	}

	return Date.now();
}

function getByteSize(value: string): number {
	return new TextEncoder().encode(value).length;
}

function normalizeURLEncodeOptions(options: Partial<URLEncodeOptions>): URLEncodeOptions {
	return {
		encodeSpacesAsPlus: options.encodeSpacesAsPlus ?? DEFAULT_URL_ENCODE_OPTIONS.encodeSpacesAsPlus,
		decodePlusAsSpace: options.decodePlusAsSpace ?? DEFAULT_URL_ENCODE_OPTIONS.decodePlusAsSpace
	};
}

function createMetrics(input: string, output: string): URLEncodeMetrics {
	return {
		inputBytes: getByteSize(input),
		outputBytes: getByteSize(output),
		inputCharacters: input.length,
		outputCharacters: output.length,
		characterDelta: output.length - input.length,
		percentSequenceCount: (output.match(/%[0-9A-Fa-f]{2}/g) ?? []).length,
		plusCount: (output.match(/\+/g) ?? []).length
	};
}

function createResult(
	input: string,
	output: string,
	action: URLEncodeAction,
	mode: URLEncodeMode,
	error: URLEncodeError | null,
	warnings: URLEncodeWarningCode[],
	startedAt: number
): URLEncodeResult {
	return {
		action,
		mode,
		output,
		error,
		warnings,
		metrics: createMetrics(input, output),
		durationMs: nowMs() - startedAt
	};
}

function encodeURLValue(input: string, mode: URLEncodeMode): string {
	if (mode === 'full_url') {
		return encodeURI(input);
	}

	return encodeURIComponent(input);
}

function decodeURLValue(input: string, mode: URLEncodeMode): string {
	if (mode === 'full_url') {
		return decodeURI(input);
	}

	return decodeURIComponent(input);
}

export function shouldUseURLWorker(input: string): boolean {
	return new Blob([input]).size > URL_WORKER_THRESHOLD_BYTES;
}

export function processURLEncode(
	input: string,
	action: URLEncodeAction,
	mode: URLEncodeMode,
	options: Partial<URLEncodeOptions> = {}
): URLEncodeResult {
	const startedAt = nowMs();
	const normalizedOptions = normalizeURLEncodeOptions(options);

	if (input.length === 0) {
		return createResult(input, '', action, mode, null, [], startedAt);
	}

	try {
		const normalizedInput =
			action === 'decode' && normalizedOptions.decodePlusAsSpace
				? input.replace(/\+/g, '%20')
				: input;

		let output =
			action === 'encode'
				? encodeURLValue(normalizedInput, mode)
				: decodeURLValue(normalizedInput, mode);

		if (action === 'encode' && normalizedOptions.encodeSpacesAsPlus) {
			output = output.replace(/%20/g, '+');
		}

		const warnings: URLEncodeWarningCode[] = output === input ? ['no_changes_detected'] : [];

		return createResult(input, output, action, mode, null, warnings, startedAt);
	} catch (error) {
		const detail = error instanceof Error ? error.message : 'Malformed URI sequence';

		return createResult(
			input,
			'',
			action,
			mode,
			{
				code: 'invalid_url_encoding',
				detail
			},
			[],
			startedAt
		);
	}
}
