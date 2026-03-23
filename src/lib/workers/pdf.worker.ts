import {
	type PdfProcessResult,
	type PdfWorkerRequest,
	type PdfWorkerResponse,
	configurePdfJsWorker,
	extractPdfPages,
	extractPdfText,
	getPdfMetadata,
	mergePdfFiles,
	splitPdf
} from '$engines/pdf/index.js';

async function processRequest(request: PdfWorkerRequest['request']): Promise<PdfProcessResult> {
	await configurePdfJsWorker();
	switch (request.operation) {
		case 'to-text':
			return { operation: 'to-text', pages: await extractPdfText(request.bytes) };
		case 'merge':
			return { operation: 'merge', bytes: await mergePdfFiles(request.payload) };
		case 'split':
			return { operation: 'split', files: await splitPdf(request.payload) };
		case 'extract-pages':
			return { operation: 'extract-pages', bytes: await extractPdfPages(request.payload) };
		case 'metadata':
			return { operation: 'metadata', metadata: await getPdfMetadata(request.bytes) };
		default: {
			throw new Error('Unsupported PDF operation');
		}
	}
}

self.onmessage = (event: MessageEvent<PdfWorkerRequest>): void => {
	const { id, request } = event.data;

	void processRequest(request)
		.then((result) => {
			const response: PdfWorkerResponse = { id, result };
			self.postMessage(response);
		})
		.catch((error: unknown) => {
			const response: PdfWorkerResponse = {
				id,
				error: error instanceof Error ? error.message : 'PDF worker processing failed'
			};
			self.postMessage(response);
		});
};
