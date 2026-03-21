const textEncoder = new TextEncoder();

export type Rot13CaesarMode = 'rot13' | 'caesar';

export type CaesarDirection = 'encrypt' | 'decrypt';

export interface Rot13CaesarOptions {
	mode: Rot13CaesarMode;
	caesarShift: number;
	caesarDirection: CaesarDirection;
}

export interface Rot13CaesarMetrics {
	inputBytes: number;
	outputBytes: number;
}

export interface Rot13CaesarResult {
	output: string;
	metrics: Rot13CaesarMetrics;
}

export type Rot13CaesarWorkerRequest = {
	id: number;
	input: string;
	options: Rot13CaesarOptions;
};

export type Rot13CaesarWorkerResponse = {
	id: number;
	result?: Rot13CaesarResult;
	error?: string;
};

export const ROT13_CAESAR_WORKER_THRESHOLD_BYTES = 500 * 1024;

const DEFAULT_OPTIONS: Rot13CaesarOptions = {
	mode: 'rot13',
	caesarShift: 3,
	caesarDirection: 'encrypt'
};

function utf8ByteSize(value: string): number {
	return textEncoder.encode(value).length;
}

export function normalizeCaesarShift(raw: number): number {
	const s = Math.floor(raw);
	if (!Number.isFinite(s)) return 3;
	return Math.min(25, Math.max(1, s));
}

function normalizeOptions(partial: Partial<Rot13CaesarOptions>): Rot13CaesarOptions {
	return {
		mode: partial.mode === 'caesar' ? 'caesar' : 'rot13',
		caesarShift: normalizeCaesarShift(partial.caesarShift ?? DEFAULT_OPTIONS.caesarShift),
		caesarDirection: partial.caesarDirection === 'decrypt' ? 'decrypt' : 'encrypt'
	};
}

function effectiveRotationSteps(options: Rot13CaesarOptions): number {
	if (options.mode === 'rot13') {
		return 13;
	}
	const s = normalizeCaesarShift(options.caesarShift) % 26;
	if (options.caesarDirection === 'decrypt') {
		return (26 - s) % 26;
	}
	return s;
}

function rotateAsciiLetter(codePoint: number, steps: number): number {
	if (codePoint >= 0x41 && codePoint <= 0x5a) {
		return 0x41 + ((((codePoint - 0x41 + steps) % 26) + 26) % 26);
	}
	if (codePoint >= 0x61 && codePoint <= 0x7a) {
		return 0x61 + ((((codePoint - 0x61 + steps) % 26) + 26) % 26);
	}
	return codePoint;
}

export function applyRot13CaesarTransform(input: string, steps: number): string {
	if (input.length === 0) {
		return '';
	}
	let out = '';
	for (const ch of input) {
		const cp = ch.codePointAt(0);
		if (cp === undefined) continue;
		const next = rotateAsciiLetter(cp, steps);
		out += next === cp ? ch : String.fromCodePoint(next);
	}
	return out;
}

export function shouldUseRot13CaesarWorker(input: string): boolean {
	return new Blob([input]).size > ROT13_CAESAR_WORKER_THRESHOLD_BYTES;
}

export function processRot13Caesar(
	input: string,
	partialOptions: Partial<Rot13CaesarOptions> = {}
): Rot13CaesarResult {
	const options = normalizeOptions(partialOptions);
	const steps = effectiveRotationSteps(options);
	const output = applyRot13CaesarTransform(input, steps);
	return {
		output,
		metrics: {
			inputBytes: utf8ByteSize(input),
			outputBytes: utf8ByteSize(output)
		}
	};
}
