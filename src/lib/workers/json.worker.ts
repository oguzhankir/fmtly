import {
	buildJSONTree,
	computeJSONStats,
	formatJSON,
	initParser,
	minifyJSON,
	parseJSON,
	repairJSON,
	sortJSONKeys,
	validateJSON
} from '$engines/json/index.js';
import type { FormatOptions, WorkerRequest, WorkerResponse } from '$engines/json/index.js';

const methods: Record<string, (...args: unknown[]) => unknown> = {
	parseJSON: (input: unknown) => parseJSON(input as string),
	formatJSON: (input: unknown, options: unknown) =>
		formatJSON(input as string, options as FormatOptions),
	minifyJSON: (input: unknown) => minifyJSON(input as string),
	repairJSON: (input: unknown) => repairJSON(input as string),
	sortJSONKeys: (input: unknown, direction: unknown) =>
		sortJSONKeys(input as string, direction as 'asc' | 'desc'),
	computeJSONStats: (data: unknown) => computeJSONStats(data),
	buildJSONTree: (data: unknown) => buildJSONTree(data),
	validateJSON: (input: unknown) => validateJSON(input as string)
};

let initialized = false;

self.onmessage = async (event: MessageEvent<WorkerRequest>) => {
	const { id, method, args } = event.data;

	if (!initialized) {
		await initParser();
		initialized = true;
	}

	const fn = methods[method];
	if (!fn) {
		const response: WorkerResponse = { id, error: `Unknown method: ${method}` };
		self.postMessage(response);
		return;
	}

	try {
		const result = fn(...args);
		const response: WorkerResponse = { id, result };
		self.postMessage(response);
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Worker error';
		const response: WorkerResponse = { id, error: message };
		self.postMessage(response);
	}
};
