import { describe, expect, it } from 'vitest';
import { countWords } from '../../src/lib/engines/text/text.engine.js';

describe('Text Engine - Word Counter', () => {
    it('handles empty strings gracefully', async () => {
        const result = countWords('');
        expect(result.words).toBe(0);
        expect(result.characters).toBe(0);
        expect(result.sentences).toBe(0);
    });

    it('counts words and basic stats correctly', async () => {
        const result = countWords('This is a test.');
        expect(result.words).toBe(4);
        expect(result.characters).toBe(15);
        expect(result.charactersNoSpaces).toBe(12);
        expect(result.sentences).toBe(1);
    });

    it('counts punctuation and multiple sentences correctly', async () => {
        const result = countWords('Hello! How are you? I am fine.');
        expect(result.words).toBe(7);
        expect(result.sentences).toBe(3);
    });

    it('counts multiple languages (ASCII/Latin-based)', async () => {
        const result = countWords('Je suis français. Hola, cómo estás? Hello.');
        expect(result.words).toBe(7);
        expect(result.sentences).toBe(3);
    });

    it('identifies top keywords', async () => {
        const result = countWords('Apple apple banana. Apple banana orange!');
        expect(result.topKeywords).toContainEqual({ word: 'apple', count: 3 });
        expect(result.topKeywords).toContainEqual({ word: 'banana', count: 2 });
        expect(result.topKeywords).toContainEqual({ word: 'orange', count: 1 });
    });
});
