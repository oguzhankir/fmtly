import type { PdfPageText } from './types.js';

type PdfJsTextItem = {
	str?: string;
};

type PdfJsTextContent = {
	items: PdfJsTextItem[];
};

type PdfJsPage = {
	getTextContent: () => Promise<PdfJsTextContent>;
};

type PdfJsDocument = {
	numPages: number;
	getPage: (pageNumber: number) => Promise<PdfJsPage>;
	destroy: () => void;
};

type PdfJsTask = {
	promise: Promise<PdfJsDocument>;
};

type PdfJsModule = {
	getDocument: (source: { data: Uint8Array }) => PdfJsTask;
};

async function loadPdfJs(): Promise<PdfJsModule> {
	const { configurePdfJsWorker } = await import('./pdfjs-setup.js');
	await configurePdfJsWorker();
	const module = await import('pdfjs-dist');
	return module as unknown as PdfJsModule;
}

export async function extractPdfText(bytes: Uint8Array): Promise<PdfPageText[]> {
	const pdfjs = await loadPdfJs();
	const task = pdfjs.getDocument({ data: bytes });
	const doc = await task.promise;

	try {
		const pages: PdfPageText[] = [];
		for (let pageNumber = 1; pageNumber <= doc.numPages; pageNumber += 1) {
			const page = await doc.getPage(pageNumber);
			const content = await page.getTextContent();
			const lines = content.items
				.map((item) => (typeof item.str === 'string' ? item.str : ''))
				.filter((value) => value.length > 0);
			pages.push({ page: pageNumber, text: lines.join('\n') });
		}
		return pages;
	} finally {
		doc.destroy();
	}
}
