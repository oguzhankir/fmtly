import { computeFileHashes } from '$engines/crypto/file-hash.js';
import type { FileHashWorkerRequest, FileHashWorkerResponse } from '$engines/crypto/file-hash.js';

self.onmessage = async (event: MessageEvent<FileHashWorkerRequest>): Promise<void> => {
	const { id, data } = event.data;
	try {
		const result = await computeFileHashes(new Uint8Array(data));
		const response: FileHashWorkerResponse = { id, result };
		self.postMessage(response);
	} catch (e) {
		const response: FileHashWorkerResponse = {
			id,
			error: e instanceof Error ? e.message : String(e)
		};
		self.postMessage(response);
	}
};
