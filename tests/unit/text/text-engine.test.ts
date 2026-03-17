import { describe, expect, it } from 'vitest';
import { analyzeText } from '../../../src/lib/engines/text/text.engine.js';

describe('analyzeText', () => {
	it('counts words, characters, sentences, and paragraphs', () => {
		const input = 'Hello world.\n\nThis is a second paragraph with more words!';
		const result = analyzeText(input);

		expect(result.words).toBe(10);
		expect(result.characters).toBe(input.length);
		expect(result.charactersNoSpaces).toBe(input.replace(/\s/g, '').length);
		expect(result.sentences).toBe(2);
		expect(result.paragraphs).toBe(2);
	});

	it('handles empty input', () => {
		const result = analyzeText('');
		expect(result.words).toBe(0);
		expect(result.sentences).toBe(0);
		expect(result.paragraphs).toBe(0);
		expect(result.readingTimeMinutes).toBe(0);
	});

	it('computes reading time with minimum one minute for non-empty text', () => {
		const resultShort = analyzeText('one two three');
		expect(resultShort.readingTimeMinutes).toBe(1);

		const longText = Array.from({ length: 450 }, (_, i) => `word${i}`).join(' ');
		const resultLong = analyzeText(longText);
		expect(resultLong.words).toBe(450);
		expect(resultLong.readingTimeMinutes).toBe(3);
	});
});
