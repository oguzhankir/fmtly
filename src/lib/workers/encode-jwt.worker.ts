import { type JWTWorkerRequest, type JWTWorkerResponse, decodeJWT } from '$engines/encode/index.js';

self.onmessage = (event: MessageEvent<JWTWorkerRequest>): void => {
	const { id, token } = event.data;

	try {
		const result = decodeJWT(token);
		const response: JWTWorkerResponse = { id, result };
		self.postMessage(response);
	} catch (error) {
		const response: JWTWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'JWT decoding failed'
		};
		self.postMessage(response);
	}
};
