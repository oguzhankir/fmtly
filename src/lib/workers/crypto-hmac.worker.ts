import { type HmacHashAlgorithmId, computeHmac } from '$engines/crypto/hmac.js';
import type { HmacWorkerRequest, HmacWorkerResponse } from '$engines/crypto/hmac.js';

self.onmessage = async (event: MessageEvent<HmacWorkerRequest>): Promise<void> => {
	const { id, algorithm, key, message } = event.data;
	try {
		const hex = await computeHmac(
			algorithm as HmacHashAlgorithmId,
			new Uint8Array(key),
			new Uint8Array(message)
		);
		const response: HmacWorkerResponse = { id, hex };
		self.postMessage(response);
	} catch (e) {
		const response: HmacWorkerResponse = {
			id,
			error: e instanceof Error ? e.message : String(e)
		};
		self.postMessage(response);
	}
};
