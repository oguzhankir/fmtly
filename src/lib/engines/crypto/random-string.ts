export const RANDOM_STRING_WORKER_THRESHOLD_BYTES = 500 * 1024;

export type RandomStringCharsetMode =
	| 'pick'
	| 'alphanumeric'
	| 'hex_lower'
	| 'hex_upper'
	| 'numeric'
	| 'base64url'
	| 'custom';

export type RandomStringSeparator = 'newline' | 'comma' | 'space' | 'none';

/** Symbols for "pick" mode — password-style, URL-safe subset */
export const PICK_SYMBOL_CHARSET = '!@#$%^&*()-_=+[]{}|;:,.<>?/~`';

export interface RandomStringOptions {
	length: number;
	count: number;
	charsetMode: RandomStringCharsetMode;
	/** Used when charsetMode is `pick` */
	charsetUpper: boolean;
	charsetLower: boolean;
	charsetDigits: boolean;
	charsetSymbols: boolean;
	customCharset: string;
	excludeAmbiguous: boolean;
	separator: RandomStringSeparator;
}

export type RandomStringStrengthLevel = 'very_weak' | 'weak' | 'fair' | 'strong' | 'very_strong';

export type RandomStringErrorCode =
	| 'invalid_length'
	| 'invalid_count'
	| 'empty_charset'
	| 'charset_too_large'
	| 'crypto_unavailable';

export interface RandomStringError {
	code: RandomStringErrorCode;
	detail: string;
}

export interface RandomStringSuccess {
	kind: 'success';
	text: string;
	byteLength: number;
	durationMs: number;
}

export interface RandomStringFailure {
	kind: 'failure';
	error: RandomStringError;
	durationMs: number;
}

export type RandomStringResult = RandomStringSuccess | RandomStringFailure;

export type RandomStringWorkerRequest = {
	id: number;
	options: RandomStringOptions;
};

export type RandomStringWorkerResponse = {
	id: number;
	result?: RandomStringResult;
	error?: string;
};

export const MIN_STRING_LENGTH = 1;
export const MAX_STRING_LENGTH = 100_000;
export const MIN_STRING_COUNT = 1;
export const MAX_STRING_COUNT = 10_000;

const AMBIGUOUS = new Set(['0', 'O', 'o', '1', 'l', 'I', '5', 'S', 's', '2', 'Z', 'z']);

export const DEFAULT_RANDOM_STRING_OPTIONS: RandomStringOptions = {
	length: 20,
	count: 1,
	charsetMode: 'pick',
	charsetUpper: true,
	charsetLower: true,
	charsetDigits: true,
	charsetSymbols: true,
	customCharset: '',
	excludeAmbiguous: false,
	separator: 'newline'
};

function nowMs(): number {
	if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
		return performance.now();
	}
	return Date.now();
}

function getUtf8ByteSize(value: string): number {
	return new TextEncoder().encode(value).length;
}

function clamp(n: number, min: number, max: number): number {
	return Math.min(max, Math.max(min, n));
}

export function normalizeRandomStringOptions(
	partial: Partial<RandomStringOptions>
): RandomStringOptions {
	const base = { ...DEFAULT_RANDOM_STRING_OPTIONS };
	return {
		...base,
		...partial,
		length: clamp(Math.floor(partial.length ?? base.length), MIN_STRING_LENGTH, MAX_STRING_LENGTH),
		count: clamp(Math.floor(partial.count ?? base.count), MIN_STRING_COUNT, MAX_STRING_COUNT),
		charsetMode: partial.charsetMode ?? base.charsetMode,
		charsetUpper: partial.charsetUpper ?? base.charsetUpper,
		charsetLower: partial.charsetLower ?? base.charsetLower,
		charsetDigits: partial.charsetDigits ?? base.charsetDigits,
		charsetSymbols: partial.charsetSymbols ?? base.charsetSymbols,
		customCharset: partial.customCharset ?? base.customCharset,
		excludeAmbiguous: partial.excludeAmbiguous ?? base.excludeAmbiguous,
		separator: partial.separator ?? base.separator
	};
}

function dedupePreserveOrder(chars: string): string {
	const seen = new Set<string>();
	let out = '';
	for (const ch of chars) {
		if (!seen.has(ch)) {
			seen.add(ch);
			out += ch;
		}
	}
	return out;
}

function filterAmbiguous(alphabet: string): string {
	let s = '';
	for (const ch of alphabet) {
		if (!AMBIGUOUS.has(ch)) s += ch;
	}
	return s;
}

export function resolveAlphabet(options: RandomStringOptions): string {
	let raw: string;
	switch (options.charsetMode) {
		case 'pick': {
			raw = '';
			if (options.charsetUpper) raw += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
			if (options.charsetLower) raw += 'abcdefghijklmnopqrstuvwxyz';
			if (options.charsetDigits) raw += '0123456789';
			if (options.charsetSymbols) raw += PICK_SYMBOL_CHARSET;
			break;
		}
		case 'alphanumeric':
			raw = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			break;
		case 'hex_lower':
			raw = '0123456789abcdef';
			break;
		case 'hex_upper':
			raw = '0123456789ABCDEF';
			break;
		case 'numeric':
			raw = '0123456789';
			break;
		case 'base64url':
			raw = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
			break;
		case 'custom':
			raw = dedupePreserveOrder(options.customCharset.trim());
			break;
		default:
			raw = '';
	}

	if (options.excludeAmbiguous) {
		raw = filterAmbiguous(raw);
	}

	return dedupePreserveOrder(raw);
}

/** Entropy of one string of given length over a uniform alphabet (bits). */
export function computeRandomStringEntropyBits(options: RandomStringOptions): number {
	const alphabet = resolveAlphabet(options);
	if (alphabet.length === 0 || options.length < 1) return 0;
	const pool = alphabet.length;
	return options.length * Math.log2(pool);
}

export function randomStringStrengthLevel(bits: number): RandomStringStrengthLevel {
	if (bits < 25) return 'very_weak';
	if (bits < 35) return 'weak';
	if (bits < 48) return 'fair';
	if (bits < 64) return 'strong';
	return 'very_strong';
}

export function validateRandomStringOptions(
	options: RandomStringOptions
): RandomStringError | null {
	if (options.length < MIN_STRING_LENGTH || options.length > MAX_STRING_LENGTH) {
		return { code: 'invalid_length', detail: 'length_range' };
	}
	if (options.count < MIN_STRING_COUNT || options.count > MAX_STRING_COUNT) {
		return { code: 'invalid_count', detail: 'count_range' };
	}
	const alphabet = resolveAlphabet(options);
	if (alphabet.length === 0) {
		return { code: 'empty_charset', detail: 'empty' };
	}
	if (getUtf8ByteSize(alphabet) > RANDOM_STRING_WORKER_THRESHOLD_BYTES) {
		return { code: 'charset_too_large', detail: 'too_large' };
	}
	return null;
}

export function estimateTotalOutputBytes(options: RandomStringOptions): number {
	const sep: string =
		options.separator === 'newline'
			? '\n'
			: options.separator === 'comma'
				? ','
				: options.separator === 'space'
					? ' '
					: '';
	const perString = options.length;
	const sepExtra =
		options.count > 1 && options.separator !== 'none'
			? (options.count - 1) * getUtf8ByteSize(sep)
			: 0;
	return perString * options.count * 4 + sepExtra;
}

export function shouldUseRandomStringWorker(options: RandomStringOptions): boolean {
	const v = validateRandomStringOptions(options);
	if (v !== null) return false;
	const charsetBytes = getUtf8ByteSize(resolveAlphabet(options));
	if (charsetBytes > RANDOM_STRING_WORKER_THRESHOLD_BYTES) return true;
	return estimateTotalOutputBytes(options) > RANDOM_STRING_WORKER_THRESHOLD_BYTES;
}

function getCrypto(): Crypto {
	const c = typeof globalThis !== 'undefined' ? globalThis.crypto : undefined;
	if (c && typeof c.getRandomValues === 'function') {
		return c;
	}
	throw new Error('Web Crypto unavailable');
}

function randomUint32(crypto: Crypto): number {
	const buf = new Uint8Array(4);
	crypto.getRandomValues(buf);
	return (buf[0] | (buf[1] << 8) | (buf[2] << 16) | (buf[3] << 24)) >>> 0;
}

function randomIndexBelow(alphabetLength: number, crypto: Crypto): number {
	if (alphabetLength <= 1) return 0;
	const max = Math.floor(0x1_0000_0000 / alphabetLength) * alphabetLength;
	let x: number;
	do {
		x = randomUint32(crypto);
	} while (x >= max);
	return x % alphabetLength;
}

export function generateRandomStringFromAlphabet(
	length: number,
	alphabet: string,
	crypto: Crypto
): string {
	if (alphabet.length === 0) {
		throw new Error('empty_alphabet');
	}
	if (length <= 0) {
		return '';
	}
	let out = '';
	for (let i = 0; i < length; i += 1) {
		const idx = randomIndexBelow(alphabet.length, crypto);
		out += alphabet.charAt(idx);
	}
	return out;
}

function buildSeparatorString(separator: RandomStringSeparator): string {
	switch (separator) {
		case 'newline':
			return '\n';
		case 'comma':
			return ',';
		case 'space':
			return ' ';
		case 'none':
			return '';
		default:
			return '\n';
	}
}

export function generateRandomStrings(options: RandomStringOptions): RandomStringResult {
	const start = nowMs();
	const validation = validateRandomStringOptions(options);
	if (validation) {
		return {
			kind: 'failure',
			error: validation,
			durationMs: nowMs() - start
		};
	}

	const alphabet = resolveAlphabet(options);
	let crypto: Crypto;
	try {
		crypto = getCrypto();
	} catch {
		return {
			kind: 'failure',
			error: { code: 'crypto_unavailable', detail: 'no_crypto' },
			durationMs: nowMs() - start
		};
	}

	const sep = buildSeparatorString(options.separator);
	const parts: string[] = [];
	for (let i = 0; i < options.count; i += 1) {
		parts.push(generateRandomStringFromAlphabet(options.length, alphabet, crypto));
	}
	const text =
		options.separator === 'none' && options.count > 1
			? parts.join('')
			: options.count > 1
				? parts.join(sep)
				: (parts[0] ?? '');
	const byteLength = getUtf8ByteSize(text);
	return {
		kind: 'success',
		text,
		byteLength,
		durationMs: nowMs() - start
	};
}
