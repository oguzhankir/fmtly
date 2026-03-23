type PdfJsViewport = {
	width: number;
	height: number;
};

type PdfJsRenderTask = {
	promise: Promise<void>;
};

type PdfJsPage = {
	getViewport: (params: { scale: number }) => PdfJsViewport;
	render: (params: {
		canvasContext: CanvasRenderingContext2D;
		viewport: PdfJsViewport;
	}) => PdfJsRenderTask;
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

export type PdfViewerDocument = {
	pageCount: number;
	getPage: (pageNumber: number) => Promise<PdfJsPage>;
	destroy: () => void;
};

async function loadPdfJs(): Promise<PdfJsModule> {
	const { configurePdfJsWorker } = await import('./pdfjs-setup.js');
	await configurePdfJsWorker();
	const module = await import('pdfjs-dist');
	return module as unknown as PdfJsModule;
}

export async function openPdfViewerDocument(bytes: Uint8Array): Promise<PdfViewerDocument> {
	const pdfjs = await loadPdfJs();
	const task = pdfjs.getDocument({ data: bytes });
	const doc = await task.promise;
	return {
		pageCount: doc.numPages,
		getPage: (pageNumber: number) => doc.getPage(pageNumber),
		destroy: () => doc.destroy()
	};
}

export async function renderPdfPageToCanvas(
	doc: PdfViewerDocument,
	pageNumber: number,
	canvas: HTMLCanvasElement,
	scale: number
): Promise<void> {
	const page = await doc.getPage(pageNumber);
	const viewport = page.getViewport({ scale });
	const context = canvas.getContext('2d');
	if (!context) {
		throw new Error('Canvas context is unavailable');
	}
	canvas.width = Math.ceil(viewport.width);
	canvas.height = Math.ceil(viewport.height);
	const task = page.render({ canvasContext: context, viewport });
	await task.promise;
}

export async function renderPdfThumbnailToCanvas(
	doc: PdfViewerDocument,
	pageNumber: number,
	canvas: HTMLCanvasElement,
	maxWidthPx: number
): Promise<void> {
	const page = await doc.getPage(pageNumber);
	const baseViewport = page.getViewport({ scale: 1 });
	if (baseViewport.width <= 0) {
		return;
	}
	const scale = Math.min(maxWidthPx / baseViewport.width, 2);
	const viewport = page.getViewport({ scale });
	const context = canvas.getContext('2d');
	if (!context) {
		throw new Error('Canvas context is unavailable');
	}
	canvas.width = Math.ceil(viewport.width);
	canvas.height = Math.ceil(viewport.height);
	const task = page.render({ canvasContext: context, viewport });
	await task.promise;
}
