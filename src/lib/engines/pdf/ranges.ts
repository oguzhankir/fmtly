/**
 * Normalizes user input: unicode dashes → ASCII hyphen, semicolons → commas.
 * Does not validate semantics.
 */
export function normalizePageRangeInput(raw: string): string {
	return raw
		.replace(/[\u2013\u2014\u2212\u2010\u2011]/g, '-')
		.replace(/;/g, ',')
		.replace(/\s*,\s*/g, ',')
		.trim();
}

export type PageRangeFailureReason =
	| 'empty'
	| 'no_pdf_pages'
	| 'ambiguous_hyphen'
	| 'invalid_number'
	| 'range_out_of_bounds'
	| 'invalid_range_bounds';

export type PageRangeParseResult =
	| { ok: true; pages: number[] }
	| { ok: false; reason: PageRangeFailureReason; detail?: string };

const RANGE_PAIR_PATTERN = /^(\d+)\s*-\s*(\d+)$/;

function parseSinglePageSegment(segment: string, maxPages: number): number {
	const s = segment.trim();
	if (!/^\d+$/.test(s)) {
		throw new Error('invalid_number');
	}
	const page = Number.parseInt(s, 10);
	if (Number.isNaN(page) || page < 1 || page > maxPages) {
		throw new Error('range_out_of_bounds');
	}
	return page;
}

/**
 * Parses page selection strings like `1,3-5,7`. Safe for UI: does not throw.
 * Ranges use ASCII `-` (call {@link normalizePageRangeInput} first for best UX).
 */
export function tryParsePageRanges(pageRanges: string, maxPages: number): PageRangeParseResult {
	const trimmed = normalizePageRangeInput(pageRanges);
	if (!trimmed) {
		return { ok: false, reason: 'empty' };
	}
	if (maxPages < 1) {
		return { ok: false, reason: 'no_pdf_pages' };
	}

	const selected = new Set<number>();
	const segments = trimmed
		.split(',')
		.map((segment) => segment.trim())
		.filter((segment) => segment.length > 0);

	if (segments.length === 0) {
		return { ok: false, reason: 'empty' };
	}

	for (const segment of segments) {
		if (segment.includes('-')) {
			const match = RANGE_PAIR_PATTERN.exec(segment);
			if (!match) {
				return { ok: false, reason: 'ambiguous_hyphen', detail: segment };
			}
			let start = Number.parseInt(match[1], 10);
			let end = Number.parseInt(match[2], 10);
			if (Number.isNaN(start) || Number.isNaN(end)) {
				return { ok: false, reason: 'invalid_number', detail: segment };
			}
			if (start < 1 || end < 1) {
				return { ok: false, reason: 'invalid_range_bounds', detail: segment };
			}
			if (start > maxPages || end > maxPages) {
				return { ok: false, reason: 'range_out_of_bounds', detail: segment };
			}
			if (start > end) {
				const tmp = start;
				start = end;
				end = tmp;
			}
			for (let page = start; page <= end; page += 1) {
				selected.add(page);
			}
			continue;
		}

		try {
			const page = parseSinglePageSegment(segment, maxPages);
			selected.add(page);
		} catch (error: unknown) {
			const code = error instanceof Error ? error.message : '';
			if (code === 'invalid_number') {
				return { ok: false, reason: 'invalid_number', detail: segment };
			}
			if (code === 'range_out_of_bounds') {
				return { ok: false, reason: 'range_out_of_bounds', detail: segment };
			}
			return { ok: false, reason: 'invalid_number', detail: segment };
		}
	}

	return { ok: true, pages: [...selected].sort((a, b) => a - b) };
}

/** Machine-readable prefix for worker / toast mapping */
export const PAGE_RANGE_ERROR_PREFIX = 'PAGE_RANGE:';

function failureToMessage(result: Extract<PageRangeParseResult, { ok: false }>): string {
	const { reason, detail } = result;
	return `${PAGE_RANGE_ERROR_PREFIX}${reason}${detail !== undefined ? `:${detail}` : ''}`;
}

/**
 * Strict parse for engines — throws Error with {@link PAGE_RANGE_ERROR_PREFIX} message on failure.
 */
export function parsePageRanges(pageRanges: string, maxPages: number): number[] {
	const result = tryParsePageRanges(pageRanges, maxPages);
	if (!result.ok) {
		throw new Error(failureToMessage(result));
	}
	return result.pages;
}

export function mapPageRangeErrorMessage(message: string): PageRangeFailureReason | null {
	if (!message.startsWith(PAGE_RANGE_ERROR_PREFIX)) {
		return null;
	}
	const rest = message.slice(PAGE_RANGE_ERROR_PREFIX.length);
	const reason = rest.split(':')[0] as PageRangeFailureReason;
	if (
		reason === 'empty' ||
		reason === 'no_pdf_pages' ||
		reason === 'ambiguous_hyphen' ||
		reason === 'invalid_number' ||
		reason === 'range_out_of_bounds' ||
		reason === 'invalid_range_bounds'
	) {
		return reason;
	}
	return null;
}

/** i18n registry key for a parse failure reason */
export function pageRangeReasonToI18nKey(reason: PageRangeFailureReason): string {
	return `ui.pdf.ranges.err_${reason}`;
}
