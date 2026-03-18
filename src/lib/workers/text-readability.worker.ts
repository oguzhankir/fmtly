import {
	type TextReadabilityWorkerRequest,
	type TextReadabilityWorkerResponse,
	analyzeTextReadability
} from '$engines/text/index.js';

self.onmessage = (event: MessageEvent<TextReadabilityWorkerRequest>): void => {
	const { id, input } = event.data;

	try {
		const result = analyzeTextReadability(input);
		const response: TextReadabilityWorkerResponse = {
			id,
			result
		};
		self.postMessage(response);
	} catch (error) {
		const response: TextReadabilityWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'Readability analysis failed'
		};
		self.postMessage(response);
	}
};
