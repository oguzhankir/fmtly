export type TextCounterMetrics = {
	characters: number;
	charactersNoSpaces: number;
	words: number;
	sentences: number;
	paragraphs: number;
	readingTimeMinutes: number;
};

export type TextCaseConversions = {
	camelCase: string;
	pascalCase: string;
	snakeCase: string;
	kebabCase: string;
	constantCase: string;
	titleCase: string;
	sentenceCase: string;
};

export type TextReverseResults = {
	characters: string;
	words: string;
	lines: string;
};

export type TextDuplicateRemovalResult = {
	removed: string;
	duplicateCount: number;
	uniqueCount: number;
};

export type TextWhitespaceCleanupOptions = {
	removeLeading: boolean;
	removeTrailing: boolean;
	collapseSpaces: boolean;
	collapseTabs: boolean;
	convertTabsToSpaces: boolean;
	tabSize: number;
	removeAllSpaces: boolean;
	removeAllLineBreaks: boolean;
	trimLines: boolean;
	preserveParagraphBreaks: boolean;
	convertSpacesToTabs: boolean;
};

export type TextWhitespaceCleanupResult = {
	cleaned: string;
	trailingSpacesRemoved: number;
	leadingSpacesRemoved: number;
	multipleBlanksCollapsed: number;
	tabsConverted: number;
	spacesConverted: number;
	lineEndingsNormalized: boolean;
	linesProcessed: number;
};

const WORD_PATTERN = /[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu;
const SENTENCE_PATTERN = /[^.!?\n]+[.!?]+(?=\s|$)|[^\n]+$/g;

function clampReadingMinutes(wordCount: number): number {
	if (wordCount <= 0) return 0;
	return Math.max(1, Math.ceil(wordCount / 200));
}

function countWords(input: string): number {
	const matches = input.match(WORD_PATTERN);
	return matches?.length ?? 0;
}

function countSentences(input: string): number {
	const normalized = input.trim();
	if (!normalized) return 0;
	const matches = normalized.match(SENTENCE_PATTERN);
	return matches?.filter((part) => part.trim().length > 0).length ?? 0;
}

function countParagraphs(input: string): number {
	const normalized = input.trim();
	if (!normalized) return 0;
	return normalized.split(/\n\s*\n/).filter((part) => part.trim().length > 0).length;
}

function capitalizeWord(value: string): string {
	if (value.length === 0) return '';
	return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

function toWordTokens(input: string): string[] {
	if (!input.trim()) return [];

	const normalized = input
		.replace(/([a-z\d])([A-Z])/g, '$1 $2')
		.replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
		.replace(/[\s_\-./\\]+/g, ' ')
		.trim();

	const matches = normalized.match(/[\p{L}\p{N}]+/gu);
	return matches?.map((word) => word.trim()).filter((word) => word.length > 0) ?? [];
}

function reverseCharacters(input: string): string {
	return Array.from(input).reverse().join('');
}

function reverseWords(input: string): string {
	if (!input.trim()) return input;

	const parts = input.split(/(\s+)/);
	const words = parts.filter((part) => part.trim().length > 0).reverse();
	let wordIndex = 0;

	return parts
		.map((part) => {
			if (part.trim().length === 0) return part;
			const word = words[wordIndex];
			wordIndex += 1;
			return word;
		})
		.join('');
}

function reverseLines(input: string): string {
	if (!input) return '';
	return input.split(/\r?\n/).reverse().join('\n');
}

export function convertTextCases(input: string): TextCaseConversions {
	const words = toWordTokens(input);
	if (words.length === 0) {
		return {
			camelCase: '',
			pascalCase: '',
			snakeCase: '',
			kebabCase: '',
			constantCase: '',
			titleCase: '',
			sentenceCase: ''
		};
	}

	const lowerWords = words.map((word) => word.toLowerCase());
	const titleWords = words.map((word) => capitalizeWord(word));

	return {
		camelCase: [lowerWords[0], ...titleWords.slice(1)].join(''),
		pascalCase: titleWords.join(''),
		snakeCase: lowerWords.join('_'),
		kebabCase: lowerWords.join('-'),
		constantCase: words.map((word) => word.toUpperCase()).join('_'),
		titleCase: titleWords.join(' '),
		sentenceCase: `${capitalizeWord(lowerWords[0])}${lowerWords.length > 1 ? ` ${lowerWords.slice(1).join(' ')}` : ''}`
	};
}

export function reverseText(input: string): TextReverseResults {
	return {
		characters: reverseCharacters(input),
		words: reverseWords(input),
		lines: reverseLines(input)
	};
}

export function removeDuplicateLines(input: string): TextDuplicateRemovalResult {
	if (!input) {
		return { removed: '', duplicateCount: 0, uniqueCount: 0 };
	}

	const lines = input.split(/\r?\n/);
	const seen = new Set<string>();
	const unique: string[] = [];
	let duplicateCount = 0;

	for (const line of lines) {
		if (seen.has(line)) {
			duplicateCount += 1;
		} else {
			seen.add(line);
			unique.push(line);
		}
	}

	return {
		removed: unique.join('\n'),
		duplicateCount,
		uniqueCount: unique.length
	};
}

export function cleanWhitespace(
	input: string,
	options: Partial<TextWhitespaceCleanupOptions> = {}
): TextWhitespaceCleanupResult {
	const opts: TextWhitespaceCleanupOptions = {
		removeLeading: false,
		removeTrailing: true,
		collapseSpaces: true,
		collapseTabs: true,
		convertTabsToSpaces: false,
		tabSize: 4,
		removeAllSpaces: false,
		removeAllLineBreaks: false,
		trimLines: false,
		preserveParagraphBreaks: true,
		convertSpacesToTabs: false,
		...options
	};

	let result = input;
	let trailingSpacesRemoved = 0;
	let leadingSpacesRemoved = 0;
	let multipleBlanksCollapsed = 0;
	let tabsConverted = 0;
	let spacesConverted = 0;
	const lineEndingsNormalized = input.includes('\r\n') || input.includes('\r');

	if (opts.removeAllSpaces) {
		result = result.replace(/ /g, '');
		spacesConverted = (input.match(/ /g) || []).length;
	}

	// Convert tabs to spaces (do this before collapse if enabled)
	if (opts.convertTabsToSpaces) {
		const spaces = ' '.repeat(opts.tabSize);
		result = result.replace(/\t/g, spaces);
		tabsConverted = (input.match(/\t/g) || []).length;

		// After converting tabs to spaces, collapse multiple spaces if needed
		if (opts.collapseSpaces && !opts.removeAllSpaces) {
			result = result.replace(/ {2,}/g, (match) => {
				multipleBlanksCollapsed += 1;
				return ' ';
			});
		}
	} else if (
		(opts.collapseTabs || opts.collapseSpaces) &&
		!opts.convertTabsToSpaces &&
		!opts.removeAllSpaces &&
		!opts.convertSpacesToTabs
	) {
		// Use a single regex to collapse both tabs and spaces together
		// This matches the original behavior but with the correct conditions
		result = result.replace(/[ \t]{2,}/g, (match) => {
			multipleBlanksCollapsed += 1;
			return ' ';
		});
	}

	// Remove leading/trailing spaces
	if (opts.removeLeading || opts.trimLines) {
		result = result.replace(/^[ \t]+/gm, (match) => {
			leadingSpacesRemoved += 1;
			return '';
		});
	}

	if (opts.removeTrailing || opts.trimLines) {
		result = result.replace(/[ \t]+$/gm, (match) => {
			trailingSpacesRemoved += 1;
			return '';
		});
	}

	if (opts.removeAllLineBreaks) {
		result = result.replace(/\r?\n/g, ' ');
	} else {
		result = result.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

		if (opts.preserveParagraphBreaks) {
			result = result.replace(/\n{3,}/g, '\n\n');
		} else {
			result = result.replace(/\n+/g, '\n');
		}

		result = result.replace(/\n$/, '');
	}

	const linesProcessed = result.split('\n').length;

	return {
		cleaned: result,
		trailingSpacesRemoved,
		leadingSpacesRemoved,
		multipleBlanksCollapsed,
		tabsConverted,
		spacesConverted,
		lineEndingsNormalized,
		linesProcessed
	};
}

export function analyzeText(input: string): TextCounterMetrics {
	const characters = input.length;
	const charactersNoSpaces = input.replace(/\s/g, '').length;
	const words = countWords(input);
	const sentences = countSentences(input);
	const paragraphs = countParagraphs(input);
	const readingTimeMinutes = clampReadingMinutes(words);

	return {
		characters,
		charactersNoSpaces,
		words,
		sentences,
		paragraphs,
		readingTimeMinutes
	};
}
