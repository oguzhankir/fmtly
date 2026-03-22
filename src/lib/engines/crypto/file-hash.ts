import { crc32HexUpper } from './crc32.js';
import { type HashAlgorithmId, digestBytes } from './hash.js';

export const FILE_HASH_WORKER_THRESHOLD_BYTES = 500 * 1024;

export type FileHashResult = {
	md5: string;
	sha256: string;
	crc32: string;
	durationMs: number;
};

export async function computeFileHashes(data: Uint8Array): Promise<FileHashResult> {
	const t0 = typeof performance !== 'undefined' ? performance.now() : 0;
	const [md5, sha256, crc32] = await Promise.all([
		digestBytes('MD5', data),
		digestBytes('SHA-256', data),
		Promise.resolve(crc32HexUpper(data))
	]);
	const t1 = typeof performance !== 'undefined' ? performance.now() : 0;
	return {
		md5,
		sha256,
		crc32,
		durationMs: t1 - t0
	};
}

export function shouldUseFileHashWorker(byteLength: number): boolean {
	return byteLength > FILE_HASH_WORKER_THRESHOLD_BYTES;
}

export type FileHashWorkerRequest = {
	id: number;
	data: ArrayBuffer;
};

export type FileHashWorkerResponse = {
	id: number;
	result?: FileHashResult;
	error?: string;
};
