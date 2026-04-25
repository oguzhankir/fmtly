export type PasswordGeneratorOptions = {
	length: number;
	uppercase: boolean;
	lowercase: boolean;
	digits: boolean;
	symbols: boolean;
	excludeAmbiguous: boolean;
	separatorEvery: number;
};

const UPPER = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const LOWER = 'abcdefghijkmnopqrstuvwxyz';
const DIGITS = '23456789';
const SYMBOLS = '!@#$%&*-_=+?';
const AMBIGUOUS = '0O1lI';

function buildCharset(options: PasswordGeneratorOptions): string {
	let charset = '';
	if (options.uppercase) charset += UPPER;
	if (options.lowercase) charset += LOWER;
	if (options.digits) charset += DIGITS;
	if (options.symbols) charset += SYMBOLS;
	if (charset.length === 0) {
		charset = LOWER + UPPER + DIGITS;
	}
	if (options.excludeAmbiguous) {
		for (const ch of AMBIGUOUS) {
			charset = charset.split(ch).join('');
		}
	}
	if (options.separatorEvery > 0) {
		charset = charset.replaceAll('-', '');
	}
	return charset;
}

function nextUnbiasedIndex(upperExclusive: number, buf: Uint8Array, ref: { i: number }): number {
	const max = 256 - (256 % upperExclusive);
	for (;;) {
		if (ref.i >= buf.length) {
			crypto.getRandomValues(buf);
			ref.i = 0;
		}
		const b = buf[ref.i]!;
		ref.i += 1;
		if (b < max) {
			return b % upperExclusive;
		}
	}
}

export function generatePassword(options: PasswordGeneratorOptions): string {
	const charset = buildCharset(options);
	const len = Math.min(256, Math.max(4, Math.floor(options.length)));
	const buf = new Uint8Array(256);
	crypto.getRandomValues(buf);
	const ref = { i: 0 };
	let raw = '';
	for (let n = 0; n < len; n++) {
		const idx = nextUnbiasedIndex(charset.length, buf, ref);
		raw += charset[idx] ?? charset[0];
	}
	const sep = options.separatorEvery > 0 ? options.separatorEvery : 0;
	if (sep <= 0) return raw;
	const chunks: string[] = [];
	for (let i = 0; i < raw.length; i += sep) {
		chunks.push(raw.slice(i, i + sep));
	}
	return chunks.join('-');
}
