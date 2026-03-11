// PDF.js wrapper — lazy loaded, never in initial bundle
import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist';

export type PdfMetadata = {
	title: string;
	author: string;
	subject: string;
	creator: string;
	producer: string;
	creationDate: string;
	modDate: string;
	pageCount: number;
	fileSize: number;
};

let pdfjsLib: typeof import('pdfjs-dist') | null = null;

async function getPdfjs() {
	if (pdfjsLib) return pdfjsLib;
	pdfjsLib = await import('pdfjs-dist');
	pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
	return pdfjsLib;
}

async function loadDocument(pdfData: ArrayBuffer): Promise<PDFDocumentProxy> {
	const pdfjs = await getPdfjs();
	return pdfjs.getDocument({ data: new Uint8Array(pdfData) }).promise;
}

export async function renderPage(
	pdfData: ArrayBuffer,
	pageNum: number,
	scale = 1.5
): Promise<HTMLCanvasElement> {
	const doc = await loadDocument(pdfData);
	const page = await doc.getPage(pageNum);
	const viewport = page.getViewport({ scale });

	const canvas = document.createElement('canvas');
	canvas.width = viewport.width;
	canvas.height = viewport.height;
	const ctx = canvas.getContext('2d')!;

	await page.render({ canvasContext: ctx, viewport, canvas }).promise;
	return canvas;
}

export async function renderPageToCanvas(
	pdfData: ArrayBuffer,
	pageNum: number,
	canvas: HTMLCanvasElement,
	scale = 1.5
): Promise<void> {
	const doc = await loadDocument(pdfData);
	const page = await doc.getPage(pageNum);
	const viewport = page.getViewport({ scale });

	canvas.width = viewport.width;
	canvas.height = viewport.height;
	const ctx = canvas.getContext('2d')!;

	await page.render({ canvasContext: ctx, viewport, canvas }).promise;
}

export async function extractText(
	pdfData: ArrayBuffer,
	onProgress?: (page: number, total: number) => void
): Promise<string> {
	const doc = await loadDocument(pdfData);
	const totalPages = doc.numPages;
	const texts: string[] = [];

	for (let i = 1; i <= totalPages; i++) {
		const page = await doc.getPage(i);
		const content = await page.getTextContent();
		const pageText = content.items.map((item: any) => ('str' in item ? item.str : '')).join(' ');
		texts.push(pageText);
		onProgress?.(i, totalPages);
	}

	return texts.join('\n\n--- Page Break ---\n\n');
}

export async function getPageCount(pdfData: ArrayBuffer): Promise<number> {
	const doc = await loadDocument(pdfData);
	return doc.numPages;
}

export async function getMetadata(pdfData: ArrayBuffer): Promise<PdfMetadata> {
	const doc = await loadDocument(pdfData);
	const meta = await doc.getMetadata();
	const info = (meta.info as Record<string, any>) || {};

	return {
		title: info.Title ?? '',
		author: info.Author ?? '',
		subject: info.Subject ?? '',
		creator: info.Creator ?? '',
		producer: info.Producer ?? '',
		creationDate: info.CreationDate ?? '',
		modDate: info.ModDate ?? '',
		pageCount: doc.numPages,
		fileSize: pdfData.byteLength
	};
}

export async function renderThumbnail(
	pdfData: ArrayBuffer,
	pageNum: number,
	width = 120
): Promise<HTMLCanvasElement> {
	const doc = await loadDocument(pdfData);
	const page = await doc.getPage(pageNum);
	const unscaledViewport = page.getViewport({ scale: 1 });
	const scale = width / unscaledViewport.width;
	const viewport = page.getViewport({ scale });

	const canvas = document.createElement('canvas');
	canvas.width = viewport.width;
	canvas.height = viewport.height;
	const ctx = canvas.getContext('2d')!;

	await page.render({ canvasContext: ctx, viewport, canvas }).promise;
	return canvas;
}
