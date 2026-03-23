import { PDF_WORKER_THRESHOLD_BYTES } from './types.js';

export {
	PDF_WORKER_THRESHOLD_BYTES,
	type PdfExtractPagesRequest,
	type PdfFileInput,
	type PdfMergeRequest,
	type PdfMetadata,
	type PdfPageText,
	type PdfProcessRequest,
	type PdfProcessResult,
	type PdfSplitRequest,
	type PdfWorkerRequest,
	type PdfWorkerResponse
} from './types.js';
export {
	mapPageRangeErrorMessage,
	normalizePageRangeInput,
	pageRangeReasonToI18nKey,
	PAGE_RANGE_ERROR_PREFIX,
	parsePageRanges,
	tryParsePageRanges,
	type PageRangeFailureReason,
	type PageRangeParseResult
} from './ranges.js';
export { getPdfPageCount } from './page-count.js';
export { extractPdfText } from './to-text.js';
export { mergePdfFiles } from './merge.js';
export { splitPdf } from './split.js';
export { extractPdfPages } from './extract-pages.js';
export { getPdfMetadata } from './metadata.js';
export {
	openPdfViewerDocument,
	renderPdfPageToCanvas,
	renderPdfThumbnailToCanvas,
	type PdfViewerDocument
} from './viewer.js';
export { configurePdfJsWorker } from './pdfjs-setup.js';

export function shouldUsePdfWorker(totalBytes: number): boolean {
	return totalBytes > PDF_WORKER_THRESHOLD_BYTES;
}
