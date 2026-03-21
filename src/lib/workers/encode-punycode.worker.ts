import {
	type PunycodeIdnLib,
	type PunycodeIdnWorkerRequest,
	type PunycodeIdnWorkerResponse,
	processPunycodeIdn
} from '$engines/encode/punycode-idn.js';

let cachedLib: PunycodeIdnLib | null = null;

async function loadPunycodeLib(): Promise<PunycodeIdnLib> {
	if (cachedLib !== null) return cachedLib;
	const mod = await import('punycode');
	const puny = mod.default;
	cachedLib = {
		toASCII: (input: string): string => puny.toASCII(input),
		toUnicode: (input: string): string => puny.toUnicode(input)
	};
	return cachedLib;
}

self.onmessage = (event: MessageEvent<PunycodeIdnWorkerRequest>): void => {
	const { id, input, action } = event.data;
	void (async (): Promise<void> => {
		try {
			const lib = await loadPunycodeLib();
			const result = processPunycodeIdn(input, action, lib);
			const response: PunycodeIdnWorkerResponse = { id, result };
			self.postMessage(response);
		} catch (error) {
			const response: PunycodeIdnWorkerResponse = {
				id,
				error: error instanceof Error ? error.message : 'Punycode processing failed'
			};
			self.postMessage(response);
		}
	})();
};
