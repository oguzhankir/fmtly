import { type HexWorkerRequest, type HexWorkerResponse, processHex } from '$engines/encode/hex.js';

self.onmessage = (event: MessageEvent<HexWorkerRequest>): void => {
	const { id, input, action, encodeOptions, decodeOptions } = event.data;

	try {
		const result = processHex(input, action, {
			encode: encodeOptions,
			decode: decodeOptions
		});
		const response: HexWorkerResponse = { id, result };
		self.postMessage(response);
	} catch (error) {
		const response: HexWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'Hex processing failed'
		};
		self.postMessage(response);
	}
};
