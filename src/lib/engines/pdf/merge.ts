import type { PdfMergeRequest } from './types.js';

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

export async function mergePdfFiles(request: PdfMergeRequest): Promise<Uint8Array> {
	if (request.files.length < 2) {
		throw new Error('Select at least two PDF files');
	}

	const { PDFDocument } = await loadPdfLib();
	const merged = await PDFDocument.create();

	for (const file of request.files) {
		const source = await PDFDocument.load(file.bytes);
		const total = source.getPageCount();
		const indexes = Array.from({ length: total }, (_, index) => index);
		const pages = await merged.copyPages(source, indexes);
		for (const page of pages) {
			merged.addPage(page);
		}
	}

	return merged.save();
}
