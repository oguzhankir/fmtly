import {
	type Rot13CaesarWorkerRequest,
	type Rot13CaesarWorkerResponse,
	processRot13Caesar
} from '$engines/encode/rot13-caesar.js';

self.onmessage = (event: MessageEvent<Rot13CaesarWorkerRequest>): void => {
	const { id, input, options } = event.data;

	try {
		const result = processRot13Caesar(input, options);
		const response: Rot13CaesarWorkerResponse = { id, result };
		self.postMessage(response);
	} catch (error) {
		const response: Rot13CaesarWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'ROT13 / Caesar processing failed'
		};
		self.postMessage(response);
	}
};
