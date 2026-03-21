import {
	type BarcodeGeneratorWorkerRequest,
	type BarcodeGeneratorWorkerResponse,
	generateBarcodeInWorkerCanvas,
	normalizeBarcodeOptions
} from '$engines/qr/barcode.js';

self.onmessage = (event: MessageEvent<BarcodeGeneratorWorkerRequest>): void => {
	const { id, value, options } = event.data;
	void (async (): Promise<void> => {
		try {
			const merged = normalizeBarcodeOptions(options);
			const result = await generateBarcodeInWorkerCanvas(value, merged);
			const response: BarcodeGeneratorWorkerResponse = { id, result };
			self.postMessage(response);
		} catch (error) {
			const response: BarcodeGeneratorWorkerResponse = {
				id,
				error: error instanceof Error ? error.message : 'Barcode generation failed'
			};
			self.postMessage(response);
		}
	})();
};
