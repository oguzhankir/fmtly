import { type HashAlgorithmId, digestBytes } from '$engines/crypto/hash.js';
import type { HashWorkerRequest, HashWorkerResponse } from '$engines/crypto/hash.js';

self.onmessage = async (event: MessageEvent<HashWorkerRequest>): Promise<void> => {
	const { id, algorithm, data } = event.data;
	try {
		const hex = await digestBytes(algorithm as HashAlgorithmId, new Uint8Array(data));
		const response: HashWorkerResponse = { id, hex };
		self.postMessage(response);
	} catch (e) {
		const response: HashWorkerResponse = {
			id,
			error: e instanceof Error ? e.message : String(e)
		};
		self.postMessage(response);
	}
};
