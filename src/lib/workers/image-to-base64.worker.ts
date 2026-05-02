import {
	type ImageToBase64Input,
	type ImageToBase64WorkerRequest,
	type ImageToBase64WorkerResponse,
	encodeImageToBase64
} from '$engines/image/index.js';

self.onmessage = (event: MessageEvent<ImageToBase64WorkerRequest>): void => {
	const { id, input } = event.data;

	try {
		const result = encodeImageToBase64(input as ImageToBase64Input);
		const response: ImageToBase64WorkerResponse = { id, result };
		self.postMessage(response);
	} catch (error: unknown) {
		const response: ImageToBase64WorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'Image to Base64 conversion failed'
		};
		self.postMessage(response);
	}
};
