import {
	type AiTokenCounterWorkerRequest,
	type AiTokenCounterWorkerResponse,
	analyzeAiTokens
} from '$engines/ai/index.js';

self.onmessage = (event: MessageEvent<AiTokenCounterWorkerRequest>): void => {
	const { id, input, selectedModelId } = event.data;

	void analyzeAiTokens(input, selectedModelId)
		.then((result) => {
			const response: AiTokenCounterWorkerResponse = {
				id,
				result
			};
			self.postMessage(response);
		})
		.catch((error: unknown) => {
			const response: AiTokenCounterWorkerResponse = {
				id,
				error: error instanceof Error ? error.message : 'AI token analysis failed'
			};
			self.postMessage(response);
		});
};
