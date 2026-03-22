export const CRYPTO_DIGEST_WORKER_THRESHOLD_BYTES = 500 * 1024;

export type HashAlgorithmId = 'MD5' | 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512';

export function bytesToHex(bytes: Uint8Array): string {
	let s = '';
	for (let i = 0; i < bytes.length; i++) {
		s += bytes[i].toString(16).padStart(2, '0');
	}
	return s;
}

export async function digestBytes(algorithm: HashAlgorithmId, data: Uint8Array): Promise<string> {
	if (algorithm === 'MD5') {
		const { md5 } = await import('@noble/hashes/legacy.js');
		return bytesToHex(md5(data));
	}
	const payload = data.buffer.slice(
		data.byteOffset,
		data.byteOffset + data.byteLength
	) as ArrayBuffer;
	const buf = await crypto.subtle.digest(algorithm, payload);
	return bytesToHex(new Uint8Array(buf));
}

export async function hashUtf8Text(algorithm: HashAlgorithmId, text: string): Promise<string> {
	const enc = new TextEncoder();
	return digestBytes(algorithm, enc.encode(text));
}

export function shouldUseDigestWorker(byteLength: number): boolean {
	return byteLength > CRYPTO_DIGEST_WORKER_THRESHOLD_BYTES;
}

export type HashWorkerRequest = {
	id: number;
	algorithm: HashAlgorithmId;
	data: ArrayBuffer;
};

export type HashWorkerResponse = {
	id: number;
	hex?: string;
	error?: string;
};
