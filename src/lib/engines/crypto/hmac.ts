import { bytesToHex } from './hash.js';

export const CRYPTO_HMAC_WORKER_THRESHOLD_BYTES = 500 * 1024;

export type HmacHashAlgorithmId = 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512';

export async function computeHmac(
	algorithm: HmacHashAlgorithmId,
	keyBytes: Uint8Array,
	messageBytes: Uint8Array
): Promise<string> {
	const cryptoKey = await crypto.subtle.importKey(
		'raw',
		keyBytes.buffer.slice(
			keyBytes.byteOffset,
			keyBytes.byteOffset + keyBytes.byteLength
		) as ArrayBuffer,
		{ name: 'HMAC', hash: algorithm },
		false,
		['sign']
	);
	const msgBuf = messageBytes.buffer.slice(
		messageBytes.byteOffset,
		messageBytes.byteOffset + messageBytes.byteLength
	) as ArrayBuffer;
	const sig = await crypto.subtle.sign('HMAC', cryptoKey, msgBuf);
	return bytesToHex(new Uint8Array(sig));
}

export function shouldUseHmacWorker(messageByteLength: number): boolean {
	return messageByteLength > CRYPTO_HMAC_WORKER_THRESHOLD_BYTES;
}

export type HmacWorkerRequest = {
	id: number;
	algorithm: HmacHashAlgorithmId;
	key: ArrayBuffer;
	message: ArrayBuffer;
};

export type HmacWorkerResponse = {
	id: number;
	hex?: string;
	error?: string;
};
