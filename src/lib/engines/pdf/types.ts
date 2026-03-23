export const PDF_WORKER_THRESHOLD_BYTES = 500 * 1024;

export type PdfFileInput = {
	name: string;
	bytes: Uint8Array;
};

export type PdfPageText = {
	page: number;
	text: string;
};

export type PdfMetadata = {
	title: string | null;
	author: string | null;
	subject: string | null;
	keywords: string | null;
	creator: string | null;
	producer: string | null;
	creationDate: string | null;
	modificationDate: string | null;
	pageCount: number;
	fileSizeBytes: number;
};

export type PdfMergeRequest = {
	files: PdfFileInput[];
};

export type PdfSplitRequest = {
	bytes: Uint8Array;
	pageRanges: string;
};

export type PdfExtractPagesRequest = {
	bytes: Uint8Array;
	pageRanges: string;
};

export type PdfProcessRequest =
	| { operation: 'to-text'; bytes: Uint8Array }
	| { operation: 'merge'; payload: PdfMergeRequest }
	| { operation: 'split'; payload: PdfSplitRequest }
	| { operation: 'extract-pages'; payload: PdfExtractPagesRequest }
	| { operation: 'metadata'; bytes: Uint8Array };

export type PdfProcessResult =
	| { operation: 'to-text'; pages: PdfPageText[] }
	| { operation: 'merge'; bytes: Uint8Array }
	| { operation: 'split'; files: PdfFileInput[] }
	| { operation: 'extract-pages'; bytes: Uint8Array }
	| { operation: 'metadata'; metadata: PdfMetadata };

export type PdfWorkerRequest = {
	id: number;
	request: PdfProcessRequest;
};

export type PdfWorkerResponse = {
	id: number;
	result?: PdfProcessResult;
	error?: string;
};
