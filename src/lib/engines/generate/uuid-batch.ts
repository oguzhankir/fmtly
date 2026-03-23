import { GENERATE_WORKER_THRESHOLD_BYTES, UUID_BATCH_WORKER_MIN_COUNT } from './constants.js';

export type UuidVersion = 4 | 7;

export type UuidBatchOptions = {
	version: UuidVersion;
	count: number;
	separator: 'newline' | 'comma';
};

export function estimateUuidBatchBytes(options: UuidBatchOptions): number {
	const perUuid = options.separator === 'comma' ? 37 : 37;
	return options.count * perUuid;
}

export function shouldUseUuidBatchWorker(options: UuidBatchOptions): boolean {
	if (options.count >= UUID_BATCH_WORKER_MIN_COUNT) return true;
	return estimateUuidBatchBytes(options) >= GENERATE_WORKER_THRESHOLD_BYTES;
}

export async function generateUuidBatch(options: UuidBatchOptions): Promise<string> {
	const { v4, v7 } = await import('uuid');
	const parts: string[] = [];
	const gen = options.version === 4 ? v4 : v7;
	for (let i = 0; i < options.count; i++) {
		parts.push(gen());
	}
	return options.separator === 'comma' ? parts.join(',') : parts.join('\n');
}

export type UuidBatchWorkerRequest = {
	id: number;
	payload: UuidBatchOptions;
};

export type UuidBatchWorkerResponse =
	| { id: number; ok: true; output: string }
	| { id: number; ok: false; error: string };
