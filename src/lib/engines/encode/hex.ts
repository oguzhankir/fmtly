const textEncoder = new TextEncoder();

export type HexAction = 'encode' | 'decode';

export type HexByteDelimiter = 'none' | 'space' | 'comma';

export interface HexEncodeOptions {
	hexCase: 'upper' | 'lower';
	byteDelimiter: HexByteDelimiter;
	bytesPerLine: number;
}

export interface HexDecodeOptions {
	ignoreWhitespace: boolean;
	ignoreCommas: boolean;
	allow0xPrefix: boolean;
}

export interface HexOptions {
	encode: HexEncodeOptions;
	decode: HexDecodeOptions;
}

export type HexWarningCode = 'whitespace_skipped_decode' | 'commas_skipped_decode';

export type HexErrorCode = 'invalid_hex_digit' | 'odd_hex_length' | 'invalid_utf8';

export interface HexError {
	code: HexErrorCode;
	detail: string;
}

export interface HexMetrics {
	inputBytes: number;
	outputBytes: number;
}

export interface HexResult {
	output: string;
	warnings: HexWarningCode[];
	error: HexError | null;
	metrics: HexMetrics;
}

export type HexWorkerRequest = {
	id: number;
	input: string;
	action: HexAction;
	encodeOptions: HexEncodeOptions;
	decodeOptions: HexDecodeOptions;
};

export type HexWorkerResponse = {
	id: number;
	result?: HexResult;
	error?: string;
};

export const HEX_WORKER_THRESHOLD_BYTES = 500 * 1024;

const DEFAULT_ENCODE: HexEncodeOptions = {
	hexCase: 'upper',
	byteDelimiter: 'space',
	bytesPerLine: 0
};

const DEFAULT_DECODE: HexDecodeOptions = {
	ignoreWhitespace: true,
	ignoreCommas: true,
	allow0xPrefix: true
};

function getUtf8ByteSize(value: string): number {
	return textEncoder.encode(value).length;
}

function normalizeEncodeOptions(partial: Partial<HexEncodeOptions>): HexEncodeOptions {
	const bytesPerLineRaw = partial.bytesPerLine ?? DEFAULT_ENCODE.bytesPerLine;
	const bytesPerLine =
		Number.isFinite(bytesPerLineRaw) && bytesPerLineRaw > 0
			? Math.min(Math.floor(bytesPerLineRaw), 4096)
			: 0;
	return {
		hexCase: partial.hexCase ?? DEFAULT_ENCODE.hexCase,
		byteDelimiter: partial.byteDelimiter ?? DEFAULT_ENCODE.byteDelimiter,
		bytesPerLine
	};
}

function normalizeDecodeOptions(partial: Partial<HexDecodeOptions>): HexDecodeOptions {
	return {
		ignoreWhitespace: partial.ignoreWhitespace ?? DEFAULT_DECODE.ignoreWhitespace,
		ignoreCommas: partial.ignoreCommas ?? DEFAULT_DECODE.ignoreCommas,
		allow0xPrefix: partial.allow0xPrefix ?? DEFAULT_DECODE.allow0xPrefix
	};
}

function normalizeHexOptions(partial: Partial<HexOptions>): HexOptions {
	return {
		encode: normalizeEncodeOptions(partial.encode ?? {}),
		decode: normalizeDecodeOptions(partial.decode ?? {})
	};
}

function byteDelimiterString(delimiter: HexByteDelimiter): string {
	switch (delimiter) {
		case 'none':
			return '';
		case 'space':
			return ' ';
		case 'comma':
			return ', ';
		default:
			return ' ';
	}
}

function formatBytePair(byte: number, hexCase: 'upper' | 'lower'): string {
	const base = byte.toString(16).padStart(2, '0');
	return hexCase === 'upper' ? base.toUpperCase() : base.toLowerCase();
}

function encodeHex(input: string, encodeOpts: HexEncodeOptions): HexResult {
	const bytes = textEncoder.encode(input);
	const delim = byteDelimiterString(encodeOpts.byteDelimiter);
	const lines: string[] = [];
	let currentLine: string[] = [];

	for (let i = 0; i < bytes.length; i += 1) {
		const pair = formatBytePair(bytes[i], encodeOpts.hexCase);
		currentLine.push(pair);
		const hitLineBreak =
			encodeOpts.bytesPerLine > 0 && currentLine.length >= encodeOpts.bytesPerLine;
		if (hitLineBreak) {
			lines.push(currentLine.join(delim));
			currentLine = [];
		}
	}

	if (currentLine.length > 0) {
		lines.push(currentLine.join(delim));
	}

	const output = lines.join('\n');
	return {
		output,
		warnings: [],
		error: null,
		metrics: {
			inputBytes: getUtf8ByteSize(input),
			outputBytes: getUtf8ByteSize(output)
		}
	};
}

function isHexDigit(code: number): boolean {
	return (
		(code >= 0x30 && code <= 0x39) ||
		(code >= 0x41 && code <= 0x46) ||
		(code >= 0x61 && code <= 0x66)
	);
}

function hexDigitsFromInput(
	input: string,
	decodeOpts: HexDecodeOptions
): { digits: string; error: HexError | null; hadWhitespace: boolean; hadComma: boolean } {
	let hadWhitespace = false;
	let hadComma = false;
	let i = 0;
	const out: string[] = [];

	while (i < input.length) {
		const code = input.charCodeAt(i);

		if (
			decodeOpts.ignoreWhitespace &&
			(code === 0x20 || code === 0x09 || code === 0x0a || code === 0x0d)
		) {
			hadWhitespace = true;
			i += 1;
			continue;
		}

		if (decodeOpts.ignoreCommas && code === 0x2c) {
			hadComma = true;
			i += 1;
			continue;
		}

		if (
			decodeOpts.allow0xPrefix &&
			code === 0x30 &&
			i + 1 < input.length &&
			(input.charCodeAt(i + 1) === 0x78 || input.charCodeAt(i + 1) === 0x58)
		) {
			i += 2;
			continue;
		}

		if (isHexDigit(code)) {
			out.push(input[i]);
			i += 1;
			continue;
		}

		return {
			digits: '',
			error: {
				code: 'invalid_hex_digit',
				detail: String(i + 1)
			},
			hadWhitespace,
			hadComma
		};
	}

	return {
		digits: out.join(''),
		error: null,
		hadWhitespace,
		hadComma
	};
}

function decodeHex(input: string, decodeOpts: HexDecodeOptions): HexResult {
	const trimmed = input;
	if (trimmed.length === 0) {
		return {
			output: '',
			warnings: [],
			error: null,
			metrics: { inputBytes: getUtf8ByteSize(input), outputBytes: 0 }
		};
	}

	const { digits, error, hadWhitespace, hadComma } = hexDigitsFromInput(trimmed, decodeOpts);
	if (error !== null) {
		return {
			output: '',
			warnings: [],
			error,
			metrics: { inputBytes: getUtf8ByteSize(input), outputBytes: 0 }
		};
	}

	if (digits.length === 0) {
		return {
			output: '',
			warnings: [],
			error: null,
			metrics: { inputBytes: getUtf8ByteSize(input), outputBytes: 0 }
		};
	}

	if (digits.length % 2 !== 0) {
		return {
			output: '',
			warnings: [],
			error: {
				code: 'odd_hex_length',
				detail: String(digits.length)
			},
			metrics: { inputBytes: getUtf8ByteSize(input), outputBytes: 0 }
		};
	}

	const bytes = new Uint8Array(digits.length / 2);
	for (let j = 0; j < digits.length; j += 2) {
		bytes[j / 2] = Number.parseInt(digits.slice(j, j + 2), 16);
	}

	let output: string;
	try {
		output = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
	} catch {
		return {
			output: '',
			warnings: [],
			error: {
				code: 'invalid_utf8',
				detail: String(bytes.length)
			},
			metrics: { inputBytes: getUtf8ByteSize(input), outputBytes: 0 }
		};
	}

	const warnings: HexWarningCode[] = [];
	if (decodeOpts.ignoreWhitespace && hadWhitespace) {
		warnings.push('whitespace_skipped_decode');
	}
	if (decodeOpts.ignoreCommas && hadComma) {
		warnings.push('commas_skipped_decode');
	}

	return {
		output,
		warnings,
		error: null,
		metrics: {
			inputBytes: getUtf8ByteSize(input),
			outputBytes: getUtf8ByteSize(output)
		}
	};
}

export function shouldUseHexWorker(input: string): boolean {
	return new Blob([input]).size > HEX_WORKER_THRESHOLD_BYTES;
}

export function processHex(
	input: string,
	action: HexAction,
	partialOptions: Partial<HexOptions> = {}
): HexResult {
	const options = normalizeHexOptions(partialOptions);
	if (action === 'encode') {
		return encodeHex(input, options.encode);
	}
	return decodeHex(input, options.decode);
}
