const BASE32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

export function base32ToUint8Array(secret: string): Uint8Array {
	const cleaned = secret.replace(/\s+/g, '').replace(/=+$/g, '').toUpperCase();
	if (cleaned.length === 0) {
		return new Uint8Array(0);
	}
	const bits: number[] = [];
	for (let i = 0; i < cleaned.length; i++) {
		const val = BASE32.indexOf(cleaned[i]);
		if (val === -1) {
			throw new Error('INVALID_BASE32');
		}
		for (let b = 4; b >= 0; b--) {
			bits.push((val >> b) & 1);
		}
	}
	while (bits.length % 8 !== 0) {
		bits.pop();
	}
	const out = new Uint8Array(bits.length / 8);
	for (let i = 0; i < out.length; i++) {
		let byte = 0;
		for (let j = 0; j < 8; j++) {
			byte = (byte << 1) | (bits[i * 8 + j] ?? 0);
		}
		out[i] = byte;
	}
	return out;
}

export type TotpAlgorithmId = 'SHA-1' | 'SHA-256' | 'SHA-512';

async function hotp(
	secret: Uint8Array,
	counter: number,
	digits: number,
	algorithm: TotpAlgorithmId
): Promise<string> {
	const counterBuf = new ArrayBuffer(8);
	const view = new DataView(counterBuf);
	let c = counter;
	for (let i = 7; i >= 0; i--) {
		view.setUint8(i, c & 0xff);
		c = Math.floor(c / 256);
	}
	const key = await crypto.subtle.importKey(
		'raw',
		secret.buffer.slice(secret.byteOffset, secret.byteOffset + secret.byteLength) as ArrayBuffer,
		{ name: 'HMAC', hash: algorithm },
		false,
		['sign']
	);
	const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, new Uint8Array(counterBuf)));
	const offset = sig[sig.length - 1] & 0x0f;
	const bin =
		(((sig[offset] ?? 0) & 0x7f) << 24) |
		(((sig[offset + 1] ?? 0) & 0xff) << 16) |
		(((sig[offset + 2] ?? 0) & 0xff) << 8) |
		((sig[offset + 3] ?? 0) & 0xff);
	const mod = 10 ** digits;
	const code = (bin >>> 0) % mod;
	return String(code).padStart(digits, '0');
}

export async function computeTotp(
	secretBase32: string,
	options: {
		period: number;
		digits: number;
		algorithm: TotpAlgorithmId;
		epochSeconds?: number;
	}
): Promise<string> {
	const secret = base32ToUint8Array(secretBase32);
	if (secret.length === 0) {
		throw new Error('EMPTY_SECRET');
	}
	const now = options.epochSeconds ?? Math.floor(Date.now() / 1000);
	const counter = Math.floor(now / options.period);
	return hotp(secret, counter, options.digits, options.algorithm);
}
