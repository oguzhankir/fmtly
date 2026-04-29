import {
	type SvgOptimizeInput,
	type SvgOptimizeOptions,
	type SvgOptimizerWorkerRequest,
	type SvgOptimizerWorkerResponse,
	optimizeSvg
} from '$engines/image/index.js';

self.onmessage = (event: MessageEvent<SvgOptimizerWorkerRequest>): void => {
	const { id, input, options } = event.data;

	void optimizeSvg(input as SvgOptimizeInput, options as Partial<SvgOptimizeOptions>)
		.then((result: Awaited<ReturnType<typeof optimizeSvg>>) => {
			const response: SvgOptimizerWorkerResponse = {
				id,
				result
			};
			self.postMessage(response);
		})
		.catch((error: unknown) => {
			const response: SvgOptimizerWorkerResponse = {
				id,
				error: error instanceof Error ? error.message : 'SVG optimization failed'
			};
			self.postMessage(response);
		});
};
