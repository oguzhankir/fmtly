import {
	type URLEncodeWorkerRequest,
	type URLEncodeWorkerResponse,
	processURLEncode
} from '$engines/encode/index.js';

self.onmessage = (event: MessageEvent<URLEncodeWorkerRequest>): void => {
	const { id, input, action, mode, options } = event.data;

	try {
		const result = processURLEncode(input, action, mode, options ?? {});
		const response: URLEncodeWorkerResponse = { id, result };
		self.postMessage(response);
	} catch (error) {
		const response: URLEncodeWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'URL processing failed'
		};
		self.postMessage(response);
	}
};
