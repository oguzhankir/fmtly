import { generateUuidBatch } from '$engines/generate/uuid-batch.js';
import type {
	UuidBatchWorkerRequest,
	UuidBatchWorkerResponse
} from '$engines/generate/uuid-batch.js';

self.onmessage = (event: MessageEvent<UuidBatchWorkerRequest>): void => {
	const { id, payload } = event.data;
	void (async (): Promise<void> => {
		try {
			const output = await generateUuidBatch(payload);
			const res: UuidBatchWorkerResponse = { id, ok: true, output };
			self.postMessage(res);
		} catch (e) {
			const message = e instanceof Error ? e.message : String(e);
			const res: UuidBatchWorkerResponse = { id, ok: false, error: message };
			self.postMessage(res);
		}
	})();
};
