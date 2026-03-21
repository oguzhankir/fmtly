const textEncoder = new TextEncoder();

export type PunycodeIdnAction = 'encode' | 'decode';

export interface PunycodeIdnLib {
	toASCII(input: string): string;
	toUnicode(input: string): string;
}

export type PunycodeIdnErrorCode = 'invalid_punycode' | 'processing_error';

export interface PunycodeIdnError {
	code: PunycodeIdnErrorCode;
	detail: string;
}

export interface PunycodeIdnMetrics {
	inputBytes: number;
	outputBytes: number;
}

export interface PunycodeIdnResult {
	output: string;
	error: PunycodeIdnError | null;
	metrics: PunycodeIdnMetrics;
}

export type PunycodeIdnWorkerRequest = {
	id: number;
	input: string;
	action: PunycodeIdnAction;
};

export type PunycodeIdnWorkerResponse = {
	id: number;
	result?: PunycodeIdnResult;
	error?: string;
};

export const PUNYCODE_IDN_WORKER_THRESHOLD_BYTES = 500 * 1024;

function utf8ByteSize(value: string): number {
	return textEncoder.encode(value).length;
}

function classifyPunycodeError(message: string): PunycodeIdnErrorCode {
	if (/invalid input|overflow|not-basic|illegal input/i.test(message)) {
		return 'invalid_punycode';
	}
	return 'processing_error';
}

export function processPunycodeIdn(
	input: string,
	action: PunycodeIdnAction,
	lib: PunycodeIdnLib
): PunycodeIdnResult {
	if (input.length === 0) {
		return {
			output: '',
			error: null,
			metrics: { inputBytes: 0, outputBytes: 0 }
		};
	}
	try {
		const output = action === 'encode' ? lib.toASCII(input) : lib.toUnicode(input);
		return {
			output,
			error: null,
			metrics: {
				inputBytes: utf8ByteSize(input),
				outputBytes: utf8ByteSize(output)
			}
		};
	} catch (e) {
		const detail = e instanceof Error ? e.message : String(e);
		return {
			output: '',
			error: {
				code: classifyPunycodeError(detail),
				detail
			},
			metrics: {
				inputBytes: utf8ByteSize(input),
				outputBytes: 0
			}
		};
	}
}

export function shouldUsePunycodeIdnWorker(input: string): boolean {
	return new Blob([input]).size > PUNYCODE_IDN_WORKER_THRESHOLD_BYTES;
}
