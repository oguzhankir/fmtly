import {
	type HTMLEntityWorkerRequest,
	type HTMLEntityWorkerResponse,
	processHTMLEntities
} from '$engines/encode/index.js';

self.onmessage = (event: MessageEvent<HTMLEntityWorkerRequest>): void => {
	const { id, input, action, options } = event.data;

	try {
		const result = processHTMLEntities(input, action, options ?? {});
		const response: HTMLEntityWorkerResponse = { id, result };
		self.postMessage(response);
	} catch (error) {
		const response: HTMLEntityWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'HTML entity processing failed'
		};
		self.postMessage(response);
	}
};
