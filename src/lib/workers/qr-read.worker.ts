import {
	DEFAULT_JSQR_OPTIONS,
	type JsQrFunction,
	type QRReadWorkerRequest,
	type QRReadWorkerResponse,
	decodeQrFromImageBuffer
} from '$engines/qr/qr-read.js';

let cachedJsQr: JsQrFunction | null = null;

async function loadJsQr(): Promise<JsQrFunction> {
	if (cachedJsQr !== null) return cachedJsQr;
	const mod = await import('jsqr');
	cachedJsQr = mod.default;
	return cachedJsQr;
}

self.onmessage = (event: MessageEvent<QRReadWorkerRequest>): void => {
	const { id, width, height, buffer } = event.data;
	void (async (): Promise<void> => {
		try {
			const jsQR = await loadJsQr();
			const data = new Uint8ClampedArray(buffer);
			const result = decodeQrFromImageBuffer({ data, width, height }, jsQR, DEFAULT_JSQR_OPTIONS);
			const response: QRReadWorkerResponse = { id, result };
			self.postMessage(response);
		} catch (error) {
			const response: QRReadWorkerResponse = {
				id,
				error: error instanceof Error ? error.message : 'QR decode failed'
			};
			self.postMessage(response);
		}
	})();
};
