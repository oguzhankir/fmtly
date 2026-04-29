import {
	type ImageConversionInput,
	type ImageConversionOptions,
	type ImageConverterWorkerRequest,
	type ImageConverterWorkerResponse,
	convertImageFormat
} from '$engines/image/index.js';

self.onmessage = (event: MessageEvent<ImageConverterWorkerRequest>): void => {
	const { id, input, options } = event.data;

	void convertImageFormat(input as ImageConversionInput, options as Partial<ImageConversionOptions>)
		.then((result: Awaited<ReturnType<typeof convertImageFormat>>) => {
			const response: ImageConverterWorkerResponse = {
				id,
				result
			};
			self.postMessage(response);
		})
		.catch((error: unknown) => {
			const response: ImageConverterWorkerResponse = {
				id,
				error: error instanceof Error ? error.message : 'Image conversion failed'
			};
			self.postMessage(response);
		});
};
