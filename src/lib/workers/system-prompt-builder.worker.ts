import {
	type SystemPromptBuilderWorkerRequest,
	type SystemPromptBuilderWorkerResponse,
	buildSystemPrompt
} from '$engines/ai/index.js';

self.onmessage = (event: MessageEvent<SystemPromptBuilderWorkerRequest>): void => {
	const { id, input, options } = event.data;

	void buildSystemPrompt(input, options)
		.then((result) => {
			const response: SystemPromptBuilderWorkerResponse = {
				id,
				result
			};
			self.postMessage(response);
		})
		.catch((error: unknown) => {
			const response: SystemPromptBuilderWorkerResponse = {
				id,
				error: error instanceof Error ? error.message : 'System prompt build failed'
			};
			self.postMessage(response);
		});
};
