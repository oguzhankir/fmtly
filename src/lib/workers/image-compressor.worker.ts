import {
	type ImageCompressionInput,
	type ImageCompressionOptions,
	type ImageCompressorWorkerRequest,
	type ImageCompressorWorkerResponse,
	compressImage
} from '$engines/image/index.js';

self.onmessage = (event: MessageEvent<ImageCompressorWorkerRequest>): void => {
	const { id, input, options } = event.data;

	void compressImage(input as ImageCompressionInput, options as Partial<ImageCompressionOptions>)
		.then((result: Awaited<ReturnType<typeof compressImage>>) => {
			const response: ImageCompressorWorkerResponse = {
				id,
				result
			};
			self.postMessage(response);
		})
		.catch((error: unknown) => {
			const response: ImageCompressorWorkerResponse = {
				id,
				error: error instanceof Error ? error.message : 'Image compression failed'
			};
			self.postMessage(response);
		});
};
