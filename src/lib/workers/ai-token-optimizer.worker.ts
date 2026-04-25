import {
	type PromptOptimizerWorkerRequest,
	type PromptOptimizerWorkerResponse,
	optimizePrompt
} from '$engines/ai/index.js';

self.onmessage = (event: MessageEvent<PromptOptimizerWorkerRequest>): void => {
	const { id, input, selectedModelId, options } = event.data;

	void optimizePrompt(input, selectedModelId, options)
		.then((result) => {
			const response: PromptOptimizerWorkerResponse = {
				id,
				result
			};
			self.postMessage(response);
		})
		.catch((error: unknown) => {
			const response: PromptOptimizerWorkerResponse = {
				id,
				error: error instanceof Error ? error.message : 'Prompt optimization failed'
			};
			self.postMessage(response);
		});
};
