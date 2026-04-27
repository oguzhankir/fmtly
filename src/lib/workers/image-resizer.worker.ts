import {
	type ImageResizeInput,
	type ImageResizeOptions,
	type ImageResizerWorkerRequest,
	type ImageResizerWorkerResponse,
	resizeImage
} from '$engines/image/index.js';

self.onmessage = (event: MessageEvent<ImageResizerWorkerRequest>): void => {
	const { id, input, options } = event.data;

	void resizeImage(input as ImageResizeInput, options as Partial<ImageResizeOptions>)
		.then((result: Awaited<ReturnType<typeof resizeImage>>) => {
			const response: ImageResizerWorkerResponse = {
				id,
				result
			};
			self.postMessage(response);
		})
		.catch((error: unknown) => {
			const response: ImageResizerWorkerResponse = {
				id,
				error: error instanceof Error ? error.message : 'Image resize failed'
			};
			self.postMessage(response);
		});
};
