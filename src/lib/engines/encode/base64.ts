export type Base64Action = 'encode' | 'decode';

export type Base64Variant = 'standard' | 'url_safe';

export interface Base64Options {
	omitPadding: boolean;
	ignoreWhitespace: boolean;
}

export type Base64WarningCode =
	| 'no_changes_detected'
	| 'whitespace_ignored'
	| 'padding_auto_added'
	| 'alphabet_normalized';

export type Base64ErrorCode =
	| 'invalid_base64_characters'
	| 'invalid_base64_length'
	| 'invalid_utf8_output';

export interface Base64Error {
	code: Base64ErrorCode;
	detail: string;
}

export interface Base64Metrics {
	inputBytes: number;
	outputBytes: number;
	inputCharacters: number;
	outputCharacters: number;
	characterDelta: number;
	paddingCount: number;
}

export interface Base64Result {
	action: Base64Action;
	variant: Base64Variant;
	output: string;
	error: Base64Error | null;
	warnings: Base64WarningCode[];
	metrics: Base64Metrics;
	durationMs: number;
}

export type Base64WorkerRequest = {
	id: number;
	input: string;
	action: Base64Action;
	variant: Base64Variant;
	options?: Partial<Base64Options>;
};

export type Base64WorkerResponse = {
	id: number;
	result?: Base64Result;
	error?: string;
};

const BASE64_BLOCK_PATTERN = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

const DEFAULT_BASE64_OPTIONS: Base64Options = {
	omitPadding: false,
	ignoreWhitespace: true
};

const utf8Encoder = new TextEncoder();

export const BASE64_WORKER_THRESHOLD_BYTES = 500 * 1024;

function nowMs(): number {
	if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
		return performance.now();
	}

	return Date.now();
}

function getByteSize(value: string): number {
	return utf8Encoder.encode(value).length;
}

function normalizeBase64Options(options: Partial<Base64Options>): Base64Options {
	return {
		omitPadding: options.omitPadding ?? DEFAULT_BASE64_OPTIONS.omitPadding,
		ignoreWhitespace: options.ignoreWhitespace ?? DEFAULT_BASE64_OPTIONS.ignoreWhitespace
	};
}

function createMetrics(input: string, output: string): Base64Metrics {
	return {
		inputBytes: getByteSize(input),
		outputBytes: getByteSize(output),
		inputCharacters: input.length,
		outputCharacters: output.length,
		characterDelta: output.length - input.length,
		paddingCount: (output.match(/=/g) ?? []).length
	};
}

function createResult(
	input: string,
	output: string,
	action: Base64Action,
	variant: Base64Variant,
	error: Base64Error | null,
	warnings: Base64WarningCode[],
	startedAt: number
): Base64Result {
	return {
		action,
		variant,
		output,
		error,
		warnings,
		metrics: createMetrics(input, output),
		durationMs: nowMs() - startedAt
	};
}

function createError(code: Base64ErrorCode, detail: string): Base64Error {
	return { code, detail };
}

function encodeUtf8ToBase64(input: string): string {
	const bytes = utf8Encoder.encode(input);
	let binary = '';
	const chunkSize = 0x8000;

	for (let index = 0; index < bytes.length; index += chunkSize) {
		const chunk = bytes.subarray(index, index + chunkSize);
		binary += String.fromCharCode(...chunk);
	}

	return btoa(binary);
}

function decodeBase64ToBytes(value: string): Uint8Array {
	const binary = atob(value);
	const bytes = new Uint8Array(binary.length);

	for (let index = 0; index < binary.length; index += 1) {
		bytes[index] = binary.charCodeAt(index);
	}

	return bytes;
}

function decodeUtf8(bytes: Uint8Array): string {
	return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
}

function toUrlSafe(value: string, omitPadding: boolean): string {
	let output = value.replace(/\+/g, '-').replace(/\//g, '_');

	if (omitPadding) {
		output = output.replace(/=+$/g, '');
	}

	return output;
}

function normalizeDecodeInput(
	input: string,
	options: Base64Options
): {
	value: string;
	warnings: Base64WarningCode[];
	error: Base64Error | null;
} {
	let value = input;
	const warnings: Base64WarningCode[] = [];

	if (/\s/.test(value)) {
		if (!options.ignoreWhitespace) {
			return {
				value,
				warnings,
				error: createError(
					'invalid_base64_characters',
					'Whitespace characters are not allowed unless the ignore-whitespace option is enabled.'
				)
			};
		}

		value = value.replace(/\s+/g, '');
		warnings.push('whitespace_ignored');
	}

	if (value.length === 0) {
		return {
			value,
			warnings,
			error: null
		};
	}

	if (/[-_]/.test(value)) {
		value = value.replace(/-/g, '+').replace(/_/g, '/');
		warnings.push('alphabet_normalized');
	}

	if (/[^A-Za-z0-9+/=]/.test(value)) {
		return {
			value,
			warnings,
			error: createError(
				'invalid_base64_characters',
				'Input contains characters outside the Base64 alphabet.'
			)
		};
	}

	const firstPaddingIndex = value.indexOf('=');

	if (firstPaddingIndex !== -1) {
		const paddingSection = value.slice(firstPaddingIndex);

		if (/[^=]/.test(paddingSection) || paddingSection.length > 2) {
			return {
				value,
				warnings,
				error: createError(
					'invalid_base64_characters',
					'Padding characters must appear only at the end of the input.'
				)
			};
		}
	}

	const remainder = value.length % 4;

	if (remainder === 1) {
		return {
			value,
			warnings,
			error: createError(
				'invalid_base64_length',
				'Length is invalid. Valid Base64 text cannot have remainder 1 when divided by 4.'
			)
		};
	}

	if (remainder > 0) {
		value += '='.repeat(4 - remainder);
		warnings.push('padding_auto_added');
	}

	if (!BASE64_BLOCK_PATTERN.test(value)) {
		return {
			value,
			warnings,
			error: createError(
				'invalid_base64_characters',
				'Input is not valid Base64 after normalization.'
			)
		};
	}

	return {
		value,
		warnings,
		error: null
	};
}

function dedupeWarnings(warnings: Base64WarningCode[]): Base64WarningCode[] {
	return Array.from(new Set(warnings));
}

export function shouldUseBase64Worker(input: string): boolean {
	return new Blob([input]).size > BASE64_WORKER_THRESHOLD_BYTES;
}

export function processBase64(
	input: string,
	action: Base64Action,
	variant: Base64Variant,
	options: Partial<Base64Options> = {}
): Base64Result {
	const startedAt = nowMs();
	const normalizedOptions = normalizeBase64Options(options);

	if (input.length === 0) {
		return createResult(input, '', action, variant, null, [], startedAt);
	}

	if (action === 'encode') {
		const standardOutput = encodeUtf8ToBase64(input);
		let output =
			variant === 'url_safe'
				? toUrlSafe(standardOutput, normalizedOptions.omitPadding)
				: standardOutput;

		if (variant === 'standard' && normalizedOptions.omitPadding) {
			output = output.replace(/=+$/g, '');
		}

		const warnings: Base64WarningCode[] = output === input ? ['no_changes_detected'] : [];

		return createResult(input, output, action, variant, null, warnings, startedAt);
	}

	const normalizedInput = normalizeDecodeInput(input, normalizedOptions);

	if (normalizedInput.error) {
		return createResult(
			input,
			'',
			action,
			variant,
			normalizedInput.error,
			dedupeWarnings(normalizedInput.warnings),
			startedAt
		);
	}

	try {
		const bytes = decodeBase64ToBytes(normalizedInput.value);
		let output = '';

		try {
			output = decodeUtf8(bytes);
		} catch (error) {
			const detail =
				error instanceof Error ? error.message : 'Decoded bytes do not form a valid UTF-8 string.';

			return createResult(
				input,
				'',
				action,
				variant,
				createError('invalid_utf8_output', detail),
				dedupeWarnings(normalizedInput.warnings),
				startedAt
			);
		}

		const warnings = [...normalizedInput.warnings];

		if (output === input) {
			warnings.push('no_changes_detected');
		}

		return createResult(input, output, action, variant, null, dedupeWarnings(warnings), startedAt);
	} catch (error) {
		const detail =
			error instanceof Error ? error.message : 'Base64 decode failed due to invalid input.';

		return createResult(
			input,
			'',
			action,
			variant,
			createError('invalid_base64_characters', detail),
			dedupeWarnings(normalizedInput.warnings),
			startedAt
		);
	}
}
