import { parsePageRanges } from './ranges.js';
import type { PdfFileInput, PdfSplitRequest } from './types.js';

type PdfLibDocument = {
	getPageCount: () => number;
	copyPages: (doc: PdfLibDocument, indices: number[]) => Promise<unknown[]>;
	addPage: (page: unknown) => void;
	save: () => Promise<Uint8Array>;
};

type PdfLibModule = {
	PDFDocument: {
		create: () => Promise<PdfLibDocument>;
		load: (bytes: Uint8Array) => Promise<PdfLibDocument>;
	};
};

async function loadPdfLib(): Promise<PdfLibModule> {
	const module = await import('pdf-lib');
	return module as unknown as PdfLibModule;
}

export async function splitPdf(request: PdfSplitRequest): Promise<PdfFileInput[]> {
	const { PDFDocument } = await loadPdfLib();
	const source = await PDFDocument.load(request.bytes);
	const total = source.getPageCount();
	const pages = parsePageRanges(request.pageRanges, total);

	const files: PdfFileInput[] = [];
	for (const pageNumber of pages) {
		const single = await PDFDocument.create();
		const [page] = await single.copyPages(source, [pageNumber - 1]);
		single.addPage(page);
		const bytes = await single.save();
		files.push({ name: `page-${pageNumber}.pdf`, bytes });
	}
	return files;
}
