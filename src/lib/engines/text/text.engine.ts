export type TextCounterMetrics = {
	characters: number;
	charactersNoSpaces: number;
	words: number;
	sentences: number;
	paragraphs: number;
	readingTimeMinutes: number;
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
