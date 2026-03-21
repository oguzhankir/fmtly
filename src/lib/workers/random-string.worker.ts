import {
	type RandomStringWorkerRequest,
	type RandomStringWorkerResponse,
	generateRandomStrings,
	normalizeRandomStringOptions
} from '$engines/crypto/random-string.js';

self.onmessage = (event: MessageEvent<RandomStringWorkerRequest>): void => {
	const { id, options } = event.data;
	try {
		const merged = normalizeRandomStringOptions(options);
		const result = generateRandomStrings(merged);
		const response: RandomStringWorkerResponse = { id, result };
		self.postMessage(response);
	} catch (error) {
		const response: RandomStringWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'Random string generation failed'
		};
		self.postMessage(response);
	}
};
