import type { PdfMetadata } from './types.js';

type PdfLibDate = Date | undefined;

type PdfLibDocument = {
	getTitle: () => string | undefined;
	getAuthor: () => string | undefined;
	getSubject: () => string | undefined;
	getKeywords: () => string | undefined;
	getCreator: () => string | undefined;
	getProducer: () => string | undefined;
	getCreationDate: () => PdfLibDate;
	getModificationDate: () => PdfLibDate;
	getPageCount: () => number;
};

type PdfLibModule = {
	PDFDocument: {
		load: (bytes: Uint8Array) => Promise<PdfLibDocument>;
	};
};

async function loadPdfLib(): Promise<PdfLibModule> {
	const module = await import('pdf-lib');
	return module as unknown as PdfLibModule;
}

function normalizeString(value: string | undefined): string | null {
	return value && value.trim().length > 0 ? value.trim() : null;
}

function normalizeDate(value: Date | undefined): string | null {
	return value ? value.toISOString() : null;
}

export async function getPdfMetadata(bytes: Uint8Array): Promise<PdfMetadata> {
	const { PDFDocument } = await loadPdfLib();
	const doc = await PDFDocument.load(bytes);
	return {
		title: normalizeString(doc.getTitle()),
		author: normalizeString(doc.getAuthor()),
		subject: normalizeString(doc.getSubject()),
		keywords: normalizeString(doc.getKeywords()),
		creator: normalizeString(doc.getCreator()),
		producer: normalizeString(doc.getProducer()),
		creationDate: normalizeDate(doc.getCreationDate()),
		modificationDate: normalizeDate(doc.getModificationDate()),
		pageCount: doc.getPageCount(),
		fileSizeBytes: bytes.byteLength
	};
}
