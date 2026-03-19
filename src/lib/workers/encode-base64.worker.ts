import {
	type Base64WorkerRequest,
	type Base64WorkerResponse,
	processBase64
} from '$engines/encode/index.js';

self.onmessage = (event: MessageEvent<Base64WorkerRequest>): void => {
	const { id, input, action, variant, options } = event.data;

	try {
		const result = processBase64(input, action, variant, options ?? {});
		const response: Base64WorkerResponse = { id, result };
		self.postMessage(response);
	} catch (error) {
		const response: Base64WorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'Base64 processing failed'
		};
		self.postMessage(response);
	}
};
