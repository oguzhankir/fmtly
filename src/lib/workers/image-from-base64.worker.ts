import {
	type Base64ToImageOptions,
	type Base64ToImageWorkerRequest,
	type Base64ToImageWorkerResponse,
	decodeBase64ToImage
} from '$engines/image/index.js';

self.onmessage = (event: MessageEvent<Base64ToImageWorkerRequest>): void => {
	const { id, input, options } = event.data;

	try {
		const result = decodeBase64ToImage(input, options as Partial<Base64ToImageOptions>);
		const response: Base64ToImageWorkerResponse = { id, result };
		self.postMessage(response);
	} catch (error: unknown) {
		const response: Base64ToImageWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'Base64 image decode failed'
		};
		self.postMessage(response);
	}
};
