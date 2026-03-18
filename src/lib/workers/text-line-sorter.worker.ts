import {
	type TextLineSortOptions,
	type TextLineSortResult,
	sortTextLines
} from '$engines/text/index.js';

type TextLineSorterWorkerRequest = {
	id: number;
	method: 'sortTextLines';
	input: string;
	options: Partial<TextLineSortOptions>;
};

type TextLineSorterWorkerResponse = {
	id: number;
	result?: TextLineSortResult;
	error?: string;
};

self.onmessage = (event: MessageEvent<TextLineSorterWorkerRequest>) => {
	const { id, method, input, options } = event.data;

	if (method !== 'sortTextLines') {
		const response: TextLineSorterWorkerResponse = {
			id,
			error: `Unknown method: ${method}`
		};
		self.postMessage(response);
		return;
	}

	try {
		const result = sortTextLines(input, options);
		const response: TextLineSorterWorkerResponse = { id, result };
		self.postMessage(response);
	} catch (error: unknown) {
		const response: TextLineSorterWorkerResponse = {
			id,
			error: error instanceof Error ? error.message : 'Line sorting failed'
		};
		self.postMessage(response);
	}
};
