import {
	type FaviconGeneratorWorkerRequest,
	type FaviconGeneratorWorkerResponse,
	generateFaviconSet
} from '$engines/image/index.js';

self.onmessage = (event: MessageEvent<FaviconGeneratorWorkerRequest>): void => {
	const { id, input, options } = event.data;

	void generateFaviconSet(input, options)
		.then((result) => {
			const response: FaviconGeneratorWorkerResponse = { id, result };
			self.postMessage(response);
		})
		.catch((error: unknown) => {
			const response: FaviconGeneratorWorkerResponse = {
				id,
				error: error instanceof Error ? error.message : 'Favicon generation failed'
			};
			self.postMessage(response);
		});
};
