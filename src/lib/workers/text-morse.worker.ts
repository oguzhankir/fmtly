import {
	type TextMorseWorkerRequest,
	type TextMorseWorkerResponse,
	processTextMorse
} from '$engines/text/index.js';

self.onmessage = (event: MessageEvent<TextMorseWorkerRequest>): void => {
	const { id, input, mode, options } = event.data;

	try {
		const result = processTextMorse(input, mode, options ?? {});
		const response: TextMorseWorkerResponse = {
			id,
			result
		};
		self.postMessage(response);
	} catch (error) {
		const response: TextMorseWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'Morse processing failed'
		};
		self.postMessage(response);
	}
};
