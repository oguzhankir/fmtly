import { parsePageRanges } from './ranges.js';
import type { PdfExtractPagesRequest } from './types.js';

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

export async function extractPdfPages(request: PdfExtractPagesRequest): Promise<Uint8Array> {
	const { PDFDocument } = await loadPdfLib();
	const source = await PDFDocument.load(request.bytes);
	const total = source.getPageCount();
	const pages = parsePageRanges(request.pageRanges, total);

	const doc = await PDFDocument.create();
	const copied = await doc.copyPages(
		source,
		pages.map((page) => page - 1)
	);

	for (const page of copied) {
		doc.addPage(page);
	}

	return doc.save();
}
