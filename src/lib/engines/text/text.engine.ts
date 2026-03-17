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
