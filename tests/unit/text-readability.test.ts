import { describe, expect, it } from 'vitest';
import { readability } from '../../src/lib/engines/text/text.engine.js';

describe('Text Engine - Readability', () => {
	it('handles empty strings gracefully', async () => {
		const result = readability('');
		expect(result.fleschKincaid).toBe(0);
		expect(result.fleschReading).toBe(0);
		expect(result.averageWordsPerSentence).toBe(0);
	});

	it('computes expected readability bounds for a simple text', async () => {
		const text = 'The cat sat on the mat. It was a nice day.';
		const result = readability(text);

		expect(result.averageWordsPerSentence).toBeCloseTo(11 / 2, 1);

		// Very simple text, Flesch reading ease should be reasonably high (>80)
		expect(result.fleschReading).toBeGreaterThan(80);

		// Grade level should be low (<5)
		expect(result.fleschKincaid).toBeLessThan(5);
	});

	it('computes expected readability bounds for a complex text', async () => {
		const text =
			'The metaphysical paradigm established by the philosophical discourse intrinsically mandates a highly sophisticated intellectual methodology.';
		const result = readability(text);

		// Complex text, Reading ease should be low (<50)
		expect(result.fleschReading).toBeLessThan(50);

		// Grade level should be high (>12)
		expect(result.fleschKincaid).toBeGreaterThan(12);
	});
});
