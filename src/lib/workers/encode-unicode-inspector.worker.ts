import type {
	UnicodeInspectorWorkerRequest,
	UnicodeInspectorWorkerResponse
} from '$engines/encode/unicode-inspector.js';

self.onmessage = async (event: MessageEvent<UnicodeInspectorWorkerRequest>): Promise<void> => {
	const { id, input, options } = event.data;

	try {
		const [{ inspectUnicode }, backendMod] = await Promise.all([
			import('$engines/encode/unicode-inspector.js'),
			import('$engines/encode/unicode-inspector-backend.js')
		]);
		const lookup = backendMod.createUnicodePropertyLookup();
		const result = inspectUnicode(input, options ?? {}, lookup);
		const response: UnicodeInspectorWorkerResponse = { id, result };
		self.postMessage(response);
	} catch (error) {
		const response: UnicodeInspectorWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'Unicode inspection failed'
		};
		self.postMessage(response);
	}
};
