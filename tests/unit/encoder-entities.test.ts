import { describe, it, expect } from 'vitest';
import { encodeHtmlEntities, decodeHtmlEntities, analyzeText, codePointToChar, charToAll } from '../../src/lib/engines/encoder/index';

describe('Encoder Engine - HTML Entities', () => {
    it('encodes with named mode', () => {
        const result = encodeHtmlEntities('<div>"test" & \'rest\'</div>', 'named');
        expect(result).toBe('&lt;div&gt;&quot;test&quot; &amp; &#39;rest&#39;&lt;/div&gt;');
    });

    it('encodes with numeric mode', () => {
        const result = encodeHtmlEntities('<', 'numeric');
        expect(result).toBe('&#60;');
    });

    it('encodes with hex mode', () => {
        const result = encodeHtmlEntities('<', 'hex');
        expect(result).toBe('&#x3c;');
    });

    it('decodes named, numeric, and hex entities', () => {
        const encoded = '&lt;div&gt;&quot;test&quot; &amp; &#39;rest&#39; &#x3c; &#62;&lt;/div&gt;';
        const decoded = decodeHtmlEntities(encoded);
        // Note that &#39; translates to ' and &#x3c;/&#62; translates to < and >
        expect(decoded).toBe('<div>"test" & \'rest\' < ></div>');
    });
});

describe('Encoder Engine - Unicode Analyzer', () => {
    it('analyzes text to get proper unicodes', () => {
        const result = analyzeText('A');
        expect(result.length).toBe(1);
        expect(result[0].char).toBe('A');
        expect(result[0].codePoint).toBe('U+0041');
        expect(result[0].htmlEntity).toBe('&#x0041;');
        expect(result[0].cssEscape).toBe('\\0041');
        expect(result[0].jsEscape).toBe('\\u{0041}');
        expect(result[0].utf8Bytes).toBe('0x41');
    });

    it('parses code point strings to characters', () => {
        expect(codePointToChar('U+0041')).toBe('A');
        expect(codePointToChar('0x0041')).toBe('A');
        expect(codePointToChar('65')).toBe('A');
        expect(codePointToChar('\\u{0041}')).toBe('A');
    });

    it('charToAll behaves same as analyzeText', () => {
        expect(charToAll('B')).toEqual(analyzeText('B'));
    });

    it('handles emojis properly', () => {
        const result = analyzeText('🌎');
        expect(result.length).toBe(1);
        expect(result[0].char).toBe('🌎');
        // 1F30E is earth globe americas
        expect(result[0].codePoint).toBe('U+1F30E');
        expect(result[0].utf8Bytes).toBe('0xF0 0x9F 0x8C 0x8E');
    });
});
