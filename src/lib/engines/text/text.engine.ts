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

export type LoremGenerationMode = 'paragraphs' | 'sentences' | 'words';

export type LoremOutputFormat = 'plain' | 'html';

export type LoremGenerationOptions = {
	mode: LoremGenerationMode;
	count: number;
	seed: number;
	includeClassicOpening: boolean;
	outputFormat: LoremOutputFormat;
	minWordsPerSentence: number;
	maxWordsPerSentence: number;
	minSentencesPerParagraph: number;
	maxSentencesPerParagraph: number;
};

export type LoremGenerationResult = {
	text: string;
	plainText: string;
	mode: LoremGenerationMode;
	outputFormat: LoremOutputFormat;
	seed: number;
	metrics: TextCounterMetrics;
};

const WORD_PATTERN = /[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu;
const SENTENCE_PATTERN = /[^.!?\n]+[.!?]+(?=\s|$)|[^\n]+$/g;

const LOREM_WORD_BANK: string[] = [
	'lorem',
	'ipsum',
	'dolor',
	'sit',
	'amet',
	'consectetur',
	'adipiscing',
	'elit',
	'sed',
	'do',
	'eiusmod',
	'tempor',
	'incididunt',
	'ut',
	'labore',
	'et',
	'dolore',
	'magna',
	'aliqua',
	'ut',
	'enim',
	'ad',
	'minim',
	'veniam',
	'quis',
	'nostrud',
	'exercitation',
	'ullamco',
	'laboris',
	'nisi',
	'ut',
	'aliquip',
	'ex',
	'ea',
	'commodo',
	'consequat',
	'duis',
	'aute',
	'irure',
	'dolor',
	'in',
	'reprehenderit',
	'in',
	'voluptate',
	'velit',
	'esse',
	'cillum',
	'dolore',
	'eu',
	'fugiat',
	'nulla',
	'pariatur',
	'excepteur',
	'sint',
	'occaecat',
	'cupidatat',
	'non',
	'proident',
	'sunt',
	'in',
	'culpa',
	'qui',
	'officia',
	'deserunt',
	'mollit',
	'anim',
	'id',
	'est',
	'laborum',
	'phasellus',
	'viverra',
	'justo',
	'nec',
	'ultricies',
	'metus',
	'porta',
	'non',
	'pulvinar',
	'neque',
	'laoreet',
	'suspendisse',
	'interdum',
	'pellentesque',
	'massa',
	'placerat',
	'duis',
	'ultricies',
	'lacus',
	'sed',
	'turpis',
	'tincidunt',
	'id',
	'aliquet',
	'risus',
	'feugiat',
	'venenatis',
	'tellus',
	'eu',
	'sagittis',
	'metus',
	'habitasse',
	'platea',
	'dictumst'
];

const LOREM_CLASSIC_OPENING: string[] = [
	'lorem',
	'ipsum',
	'dolor',
	'sit',
	'amet',
	'consectetur',
	'adipiscing',
	'elit'
];

const DEFAULT_LOREM_OPTIONS: LoremGenerationOptions = {
	mode: 'paragraphs',
	count: 3,
	seed: 2026,
	includeClassicOpening: true,
	outputFormat: 'plain',
	minWordsPerSentence: 6,
	maxWordsPerSentence: 16,
	minSentencesPerParagraph: 3,
	maxSentencesPerParagraph: 6
};

function clampInteger(value: number, min: number, max: number): number {
	if (!Number.isFinite(value)) return min;
	return Math.min(max, Math.max(min, Math.floor(value)));
}

function normalizeRange(
	minValue: number,
	maxValue: number,
	lowerBound: number,
	upperBound: number
): { min: number; max: number } {
	const normalizedMin = clampInteger(minValue, lowerBound, upperBound);
	const normalizedMax = clampInteger(maxValue, lowerBound, upperBound);

	if (normalizedMin <= normalizedMax) {
		return { min: normalizedMin, max: normalizedMax };
	}

	return { min: normalizedMax, max: normalizedMin };
}

function createSeededRandom(seed: number): () => number {
	let state = seed >>> 0;
	if (state === 0) state = 1;

	return (): number => {
		state += 0x6d2b79f5;
		let temp = state;
		temp = Math.imul(temp ^ (temp >>> 15), temp | 1);
		temp ^= temp + Math.imul(temp ^ (temp >>> 7), temp | 61);
		return ((temp ^ (temp >>> 14)) >>> 0) / 4294967296;
	};
}

function randomIntBetween(min: number, max: number, random: () => number): number {
	if (min >= max) return min;
	return Math.floor(random() * (max - min + 1)) + min;
}

function escapeHtml(input: string): string {
	return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

function sanitizeLoremOptions(options: Partial<LoremGenerationOptions>): LoremGenerationOptions {
	const mode: LoremGenerationMode =
		options.mode === 'sentences' || options.mode === 'words' ? options.mode : 'paragraphs';

	const countMax = mode === 'words' ? 5000 : mode === 'sentences' ? 1000 : 300;

	const sentenceWordRange = normalizeRange(
		options.minWordsPerSentence ?? DEFAULT_LOREM_OPTIONS.minWordsPerSentence,
		options.maxWordsPerSentence ?? DEFAULT_LOREM_OPTIONS.maxWordsPerSentence,
		2,
		40
	);

	const paragraphSentenceRange = normalizeRange(
		options.minSentencesPerParagraph ?? DEFAULT_LOREM_OPTIONS.minSentencesPerParagraph,
		options.maxSentencesPerParagraph ?? DEFAULT_LOREM_OPTIONS.maxSentencesPerParagraph,
		1,
		20
	);

	const outputFormat: LoremOutputFormat = options.outputFormat === 'html' ? 'html' : 'plain';

	return {
		mode,
		count: clampInteger(options.count ?? DEFAULT_LOREM_OPTIONS.count, 1, countMax),
		seed: clampInteger(options.seed ?? DEFAULT_LOREM_OPTIONS.seed, 1, 2147483647),
		includeClassicOpening:
			options.includeClassicOpening ?? DEFAULT_LOREM_OPTIONS.includeClassicOpening,
		outputFormat,
		minWordsPerSentence: sentenceWordRange.min,
		maxWordsPerSentence: sentenceWordRange.max,
		minSentencesPerParagraph: paragraphSentenceRange.min,
		maxSentencesPerParagraph: paragraphSentenceRange.max
	};
}

function pickWord(random: () => number): string {
	const index = randomIntBetween(0, LOREM_WORD_BANK.length - 1, random);
	return LOREM_WORD_BANK[index];
}

function applyClassicOpening(words: string[], maxWords: number): string[] {
	const opening = LOREM_CLASSIC_OPENING.slice(0, maxWords);
	if (opening.length === 0) return words;
	return [...opening, ...words.slice(opening.length)];
}

function buildSentence(
	wordCount: number,
	random: () => number,
	useClassicOpening: boolean
): string {
	const words: string[] = [];

	for (let index = 0; index < wordCount; index += 1) {
		words.push(pickWord(random));
	}

	const withOpening = useClassicOpening ? applyClassicOpening(words, wordCount) : words;

	if (withOpening.length >= 8 && random() < 0.35) {
		const commaIndex = randomIntBetween(3, withOpening.length - 3, random);
		withOpening[commaIndex] = `${withOpening[commaIndex]},`;
	}

	const punctuation = random() < 0.08 ? '!' : random() < 0.12 ? '?' : '.';
	const firstWord = capitalizeWord(withOpening[0]);
	const rest = withOpening.slice(1);

	return [firstWord, ...rest].join(' ') + punctuation;
}

function convertPlainToHtml(plainText: string, mode: LoremGenerationMode): string {
	if (!plainText) return '';

	if (mode === 'paragraphs') {
		return plainText
			.split(/\n\n/)
			.filter((paragraph) => paragraph.trim().length > 0)
			.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
			.join('\n');
	}

	return `<p>${escapeHtml(plainText)}</p>`;
}

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

export function generateLoremIpsum(
	options: Partial<LoremGenerationOptions> = {}
): LoremGenerationResult {
	const normalizedOptions = sanitizeLoremOptions(options);
	const random = createSeededRandom(normalizedOptions.seed);

	let plainText = '';

	if (normalizedOptions.mode === 'words') {
		const words: string[] = [];

		for (let index = 0; index < normalizedOptions.count; index += 1) {
			words.push(pickWord(random));
		}

		const outputWords = normalizedOptions.includeClassicOpening
			? applyClassicOpening(words, normalizedOptions.count)
			: words;

		plainText = outputWords.join(' ');
	} else if (normalizedOptions.mode === 'sentences') {
		const sentences: string[] = [];

		for (let index = 0; index < normalizedOptions.count; index += 1) {
			const wordCount = randomIntBetween(
				normalizedOptions.minWordsPerSentence,
				normalizedOptions.maxWordsPerSentence,
				random
			);

			sentences.push(
				buildSentence(wordCount, random, normalizedOptions.includeClassicOpening && index === 0)
			);
		}

		plainText = sentences.join(' ');
	} else {
		const paragraphs: string[] = [];

		for (let paragraphIndex = 0; paragraphIndex < normalizedOptions.count; paragraphIndex += 1) {
			const sentenceCount = randomIntBetween(
				normalizedOptions.minSentencesPerParagraph,
				normalizedOptions.maxSentencesPerParagraph,
				random
			);

			const sentences: string[] = [];

			for (let sentenceIndex = 0; sentenceIndex < sentenceCount; sentenceIndex += 1) {
				const wordCount = randomIntBetween(
					normalizedOptions.minWordsPerSentence,
					normalizedOptions.maxWordsPerSentence,
					random
				);

				sentences.push(
					buildSentence(
						wordCount,
						random,
						normalizedOptions.includeClassicOpening && paragraphIndex === 0 && sentenceIndex === 0
					)
				);
			}

			paragraphs.push(sentences.join(' '));
		}

		plainText = paragraphs.join('\n\n');
	}

	const text =
		normalizedOptions.outputFormat === 'html'
			? convertPlainToHtml(plainText, normalizedOptions.mode)
			: plainText;

	return {
		text,
		plainText,
		mode: normalizedOptions.mode,
		outputFormat: normalizedOptions.outputFormat,
		seed: normalizedOptions.seed,
		metrics: analyzeText(plainText)
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
