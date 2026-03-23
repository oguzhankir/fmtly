type PdfLibDocument = {
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

/** Fast page count without full metadata (uses pdf-lib, dynamic import). */
export async function getPdfPageCount(bytes: Uint8Array): Promise<number> {
	const { PDFDocument } = await loadPdfLib();
	const doc = await PDFDocument.load(bytes);
	return doc.getPageCount();
}
