// text.engine.ts

export type WordStats = {
    words: number;
    characters: number;
    charactersNoSpaces: number;
    sentences: number;
    paragraphs: number;
    readingTimeMinutes: number;
    topKeywords: Array<{ word: string; count: number }>;
};

export function countWords(text: string): WordStats {
    if (!text) {
        return {
            words: 0,
            characters: 0,
            charactersNoSpaces: 0,
            sentences: 0,
            paragraphs: 0,
            readingTimeMinutes: 0,
            topKeywords: []
        };
    }

    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s+/g, '').length;
    const wordsMatch = text.match(/\b\p{L}+\b/gu);
    const words = wordsMatch ? wordsMatch.length : 0;

    const sentencesMatch = text.match(/[^\.!\?]+[\.!\?]+/g);
    const sentences = sentencesMatch ? sentencesMatch.length : (words > 0 ? 1 : 0);

    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
    const readingTimeMinutes = Math.ceil(words / 200); // 200 words per minute avg

    // Top keywords
    const frequencies: Record<string, number> = {};
    if (wordsMatch) {
        for (const w of wordsMatch) {
            const lower = w.toLowerCase();
            // simple stopword ignore
            if (lower.length > 2) {
                frequencies[lower] = (frequencies[lower] || 0) + 1;
            }
        }
    }
    const topKeywords = Object.entries(frequencies)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, 10)
        .map(([word, count]) => ({ word, count }));

    return {
        words,
        characters,
        charactersNoSpaces,
        sentences,
        paragraphs,
        readingTimeMinutes,
        topKeywords
    };
}

export type ReadabilityResult = {
    fleschKincaid: number;
    fleschReading: number;
    gunningFog: number;
    smog: number;
    colemanLiau: number;
    averageWordsPerSentence: number;
    averageSyllablesPerWord: number;
};

function countSyllables(word: string): number {
    const lower = word.toLowerCase();
    if (lower.length <= 3) return 1;
    const vowelMatch = lower.match(/[aeiouy]+/g);
    let count = vowelMatch ? vowelMatch.length : 1;
    // subtract silent e
    if (lower.endsWith('e') && !lower.endsWith('le')) {
        count--;
    }
    return Math.max(1, count);
}

export function readability(text: string): ReadabilityResult {
    const wordsMatch = text.match(/\b\p{L}+\b/gu);
    const words = wordsMatch ? wordsMatch.length : 0;

    const sentencesMatch = text.match(/[^\.!\?]+[\.!\?]+/g);
    const sentences = sentencesMatch ? sentencesMatch.length : (words > 0 ? 1 : 0);

    const charactersMatch = text.match(/\p{L}/gu);
    const letters = charactersMatch ? charactersMatch.length : 0;

    if (words === 0 || sentences === 0) {
        return {
            fleschKincaid: 0, fleschReading: 0, gunningFog: 0,
            smog: 0, colemanLiau: 0, averageWordsPerSentence: 0, averageSyllablesPerWord: 0
        };
    }

    let totalSyllables = 0;
    let complexWords = 0;
    if (wordsMatch) {
        for (const w of wordsMatch) {
            const syl = countSyllables(w);
            totalSyllables += syl;
            if (syl >= 3) complexWords++;
        }
    }

    const avgWordsPerSentence = words / sentences;
    const avgSyllablesPerWord = totalSyllables / words;

    const fleschReading = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord);
    const fleschKincaid = (0.39 * avgWordsPerSentence) + (11.8 * avgSyllablesPerWord) - 15.59;
    const gunningFog = 0.4 * (avgWordsPerSentence + 100 * (complexWords / words));
    const smog = 1.043 * Math.sqrt(complexWords * (30 / sentences)) + 3.1291;
    const colemanLiau = (0.0588 * (letters / words * 100)) - (0.296 * (sentences / words * 100)) - 15.8;

    return {
        fleschKincaid: Math.round(fleschKincaid * 10) / 10,
        fleschReading: Math.round(fleschReading * 10) / 10,
        gunningFog: Math.round(gunningFog * 10) / 10,
        smog: Math.round(smog * 10) / 10,
        colemanLiau: Math.round(colemanLiau * 10) / 10,
        averageWordsPerSentence: Math.round(avgWordsPerSentence * 10) / 10,
        averageSyllablesPerWord: Math.round(avgSyllablesPerWord * 100) / 100
    };
}

export type SortOptions = {
    direction: 'asc' | 'desc';
    mode: 'alpha' | 'numeric' | 'length';
    caseSensitive: boolean;
};

export function sortLines(text: string, options: SortOptions): string {
    let lines = text.split('\n');

    lines.sort((a, b) => {
        let valA = options.caseSensitive ? a : a.toLowerCase();
        let valB = options.caseSensitive ? b : b.toLowerCase();

        let cmp = 0;
        if (options.mode === 'numeric') {
            const numA = parseFloat(valA);
            const numB = parseFloat(valB);
            const isNumA = !isNaN(numA);
            const isNumB = !isNaN(numB);
            if (isNumA && isNumB) cmp = numA - numB;
            else if (isNumA) cmp = -1;
            else if (isNumB) cmp = 1;
            else cmp = valA.localeCompare(valB);
        } else if (options.mode === 'length') {
            cmp = valA.length - valB.length || valA.localeCompare(valB);
        } else {
            cmp = valA.localeCompare(valB);
        }

        return options.direction === 'desc' ? -cmp : cmp;
    });

    return lines.join('\n');
}

export function deduplicateLines(text: string, caseSensitive: boolean): string {
    const lines = text.split('\n');
    const seen = new Set<string>();
    const result = [];

    for (const line of lines) {
        const key = caseSensitive ? line : line.toLowerCase();
        if (!seen.has(key)) {
            seen.add(key);
            result.push(line);
        }
    }

    return result.join('\n');
}

export function reverseLines(text: string): string {
    return text.split('\n').reverse().join('\n');
}

export function trimLines(text: string): string {
    return text.split('\n').map(line => line.trim()).join('\n');
}

export type WhitespaceOptions = {
    trimLines?: boolean;
    collapseSpaces?: boolean;
    normalizeNewlines?: boolean;
    removeBlankLines?: boolean;
};

export function cleanWhitespace(text: string, options: WhitespaceOptions): string {
    let lines = text.split(/\r?\n/);

    if (options.trimLines) {
        lines = lines.map(line => line.trim());
    }

    if (options.collapseSpaces) {
        lines = lines.map(line => line.replace(/[ \t]+/g, ' '));
    }

    if (options.removeBlankLines) {
        lines = lines.filter(line => line.trim().length > 0);
    }

    return lines.join(options.normalizeNewlines ? '\n' : '\r\n'); // simplest normalization interpretation
}

export async function markdownToHtml(md: string): Promise<string> {
    const { marked } = await import('marked');
    return marked.parse(md, { async: false }) as string;
}

export async function htmlToMarkdown(html: string): Promise<string> {
    const TurndownService = (await import('turndown')).default || (await import('turndown'));
    const turndownService = new TurndownService();
    return turndownService.turndown(html);
}

export function reverseText(text: string, mode: 'chars' | 'words' | 'lines'): string {
    if (mode === 'lines') {
        return text.split('\n').reverse().join('\n');
    } else if (mode === 'words') {
        const lines = text.split('\n');
        return lines.map(line => {
            // Find all words and non-words
            const tokens = line.match(/(\b\w+\b)|(\W+)/g) || [];
            const words = tokens.filter(t => /\w/.test(t)).reverse();
            let wordIndex = 0;
            return tokens.map(t => /\w/.test(t) ? words[wordIndex++] : t).join('');
        }).join('\n');
    } else {
        // chars
        return Array.from(text).reverse().join('');
    }
}
