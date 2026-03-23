import {
	type PageRangeFailureReason,
	mapPageRangeErrorMessage,
	pageRangeReasonToI18nKey
} from '$engines/pdf/index.js';

const FALLBACK: Record<PageRangeFailureReason, string> = {
	empty: 'Enter at least one page or range.',
	no_pdf_pages: 'This PDF has no pages.',
	ambiguous_hyphen: 'Use one hyphen per range (e.g. 3-7).',
	invalid_number: 'Each entry must be a whole page number.',
	range_out_of_bounds: 'A page number is outside this document.',
	invalid_range_bounds: 'Invalid range — use numbers from 1 through the last page.'
};

/**
 * Maps engine / worker errors to localized copy when the message is a known page-range error.
 */
export function messageForPdfToolError(
	error: unknown,
	translate: (key: string, fallback: string) => string,
	genericFallback: string
): string {
	if (!(error instanceof Error)) {
		return genericFallback;
	}
	const reason = mapPageRangeErrorMessage(error.message);
	if (reason) {
		return translate(pageRangeReasonToI18nKey(reason), FALLBACK[reason]);
	}
	if (error.message.length > 0) {
		return error.message;
	}
	return genericFallback;
}
