import {
	type QRGeneratorWorkerRequest,
	type QRGeneratorWorkerResponse,
	generateQRCode
} from '$engines/qr/index.js';

self.onmessage = async (event: MessageEvent<QRGeneratorWorkerRequest>): Promise<void> => {
	const { id, input, options } = event.data;

	try {
		const result = await generateQRCode(input, options ?? {});
		const response: QRGeneratorWorkerResponse = { id, result };
		self.postMessage(response);
	} catch (error) {
		const response: QRGeneratorWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'QR generation failed'
		};
		self.postMessage(response);
	}
};
