import {
	type TextEscapeWorkerRequest,
	type TextEscapeWorkerResponse,
	processTextEscape
} from '$engines/text/index.js';

self.onmessage = (event: MessageEvent<TextEscapeWorkerRequest>): void => {
	const { id, input, format, action, options } = event.data;

	try {
		const result = processTextEscape(input, format, action, options ?? {});
		const response: TextEscapeWorkerResponse = {
			id,
			result
		};
		self.postMessage(response);
	} catch (error) {
		const response: TextEscapeWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'Worker processing failed'
		};
		self.postMessage(response);
	}
};
