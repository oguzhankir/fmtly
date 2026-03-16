import type { EngineParseError } from '$engines/types.js';

type TranslationParams = Record<string, string | number>;

type TranslateFn = (
	key: string,
	paramsOrFallback?: string | TranslationParams,
	maybeFallback?: string
) => string;

const HEADER_EMPTY_PATTERN = /^Header column (\d+) is empty$/;
const DUPLICATE_HEADER_PATTERN = /^Duplicate header "(.+)" found$/;
const ROW_WIDTH_PATTERN = /^Row (\d+) has (\d+) columns but expected (\d+)$/;

function localizeCsvErrorText(message: string, t: TranslateFn): string {
	const emptyHeaderMatch = message.match(HEADER_EMPTY_PATTERN);
	if (emptyHeaderMatch) {
		return t(
			'ui.validator.csv_error.header_empty',
			{ column: Number(emptyHeaderMatch[1]) },
			'Header column {column} is empty'
		);
	}

	const duplicateHeaderMatch = message.match(DUPLICATE_HEADER_PATTERN);
	if (duplicateHeaderMatch) {
		return t(
			'ui.validator.csv_error.duplicate_header',
			{ value: duplicateHeaderMatch[1] ?? '' },
			'Duplicate header "{value}" found'
		);
	}

	const rowWidthMatch = message.match(ROW_WIDTH_PATTERN);
	if (rowWidthMatch) {
		return t(
			'ui.validator.csv_error.row_width',
			{
				row: Number(rowWidthMatch[1]),
				actual: Number(rowWidthMatch[2]),
				expected: Number(rowWidthMatch[3])
			},
			'Row {row} has {actual} columns but expected {expected}'
		);
	}

	return message;
}

export function localizeCsvEngineError(error: EngineParseError, t: TranslateFn): string {
	const sourceMessage = error.plainLanguageExplanation ?? error.message;
	return localizeCsvErrorText(sourceMessage, t);
}
