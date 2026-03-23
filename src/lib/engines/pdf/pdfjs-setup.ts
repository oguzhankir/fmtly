import pdfWorkerSrc from 'pdfjs-dist/build/pdf.worker.mjs?url';

let configured = false;

export async function configurePdfJsWorker(): Promise<void> {
	if (configured) {
		return;
	}
	const pdfjs = await import('pdfjs-dist');
	pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerSrc;
	configured = true;
}
