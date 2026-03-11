// pdf-lib wrapper — lazy loaded, never in initial bundle

async function loadPdfLib() {
	return import('pdf-lib');
}

export async function mergePdfs(pdfBuffers: ArrayBuffer[]): Promise<Uint8Array> {
	const { PDFDocument } = await loadPdfLib();
	const merged = await PDFDocument.create();

	for (const buffer of pdfBuffers) {
		const doc = await PDFDocument.load(buffer);
		const pages = await merged.copyPages(doc, doc.getPageIndices());
		for (const p of pages) {
			merged.addPage(p);
		}
	}

	return merged.save();
}

export async function splitPdf(
	pdfBuffer: ArrayBuffer,
	ranges: Array<{ from: number; to: number }>
): Promise<Uint8Array[]> {
	const { PDFDocument } = await loadPdfLib();
	const source = await PDFDocument.load(pdfBuffer);
	const results: Uint8Array[] = [];

	for (const range of ranges) {
		const newDoc = await PDFDocument.create();
		// Convert 1-indexed inclusive ranges to 0-indexed
		const indices = [];
		for (let i = range.from - 1; i < range.to && i < source.getPageCount(); i++) {
			indices.push(i);
		}
		const pages = await newDoc.copyPages(source, indices);
		for (const p of pages) {
			newDoc.addPage(p);
		}
		results.push(await newDoc.save());
	}

	return results;
}

export async function extractPages(
	pdfBuffer: ArrayBuffer,
	pageNumbers: number[] // 1-indexed
): Promise<Uint8Array> {
	const { PDFDocument } = await loadPdfLib();
	const source = await PDFDocument.load(pdfBuffer);
	const newDoc = await PDFDocument.create();

	const indices = pageNumbers.map((n) => n - 1).filter((i) => i >= 0 && i < source.getPageCount());
	const pages = await newDoc.copyPages(source, indices);
	for (const p of pages) {
		newDoc.addPage(p);
	}

	return newDoc.save();
}

export async function getPageCountLib(pdfBuffer: ArrayBuffer): Promise<number> {
	const { PDFDocument } = await loadPdfLib();
	const doc = await PDFDocument.load(pdfBuffer);
	return doc.getPageCount();
}
