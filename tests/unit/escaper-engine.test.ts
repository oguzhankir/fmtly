import { describe, expect, it } from 'vitest';
import {
	escapeHTML,
	escapeJSON,
	escapeJavaScript,
	escapeXML,
	unescapeHTML,
	unescapeJSON,
	unescapeJavaScript,
	unescapeXML
} from '../../src/lib/engines/escaper/index.js';

describe('escapeHTML', () => {
	it('escapes <script> tag', () => {
		expect(escapeHTML('<script>')).toBe('&lt;script&gt;');
	});

	it('escapes all five special characters', () => {
		expect(escapeHTML('&<>"\'')).toBe('&amp;&lt;&gt;&quot;&#39;');
	});

	it('returns empty string for empty input', () => {
		expect(escapeHTML('')).toBe('');
	});

	it('preserves non-special characters', () => {
		expect(escapeHTML('Hello World 123')).toBe('Hello World 123');
	});

	it('handles Unicode characters', () => {
		expect(escapeHTML('こんにちは<br>')).toBe('こんにちは&lt;br&gt;');
	});

	it('escapes mixed content', () => {
		expect(escapeHTML('<p class="test">Hello & welcome</p>')).toBe(
			'&lt;p class=&quot;test&quot;&gt;Hello &amp; welcome&lt;/p&gt;'
		);
	});
});

describe('unescapeHTML', () => {
	it('unescapes &lt;script&gt;', () => {
		expect(unescapeHTML('&lt;script&gt;')).toBe('<script>');
	});

	it('unescapes all entity types', () => {
		expect(unescapeHTML('&amp;&lt;&gt;&quot;&#39;')).toBe('&<>"\'');
	});

	it('handles &#x27; entity', () => {
		expect(unescapeHTML('&#x27;')).toBe("'");
	});

	it('handles &apos; entity', () => {
		expect(unescapeHTML('&apos;')).toBe("'");
	});

	it('returns empty string for empty input', () => {
		expect(unescapeHTML('')).toBe('');
	});

	it('round-trips with escapeHTML', () => {
		const input = '<div class="test">Hello & World</div>';
		expect(unescapeHTML(escapeHTML(input))).toBe(input);
	});
});

describe('escapeXML', () => {
	it('escapes XML special characters', () => {
		expect(escapeXML('&<>"\'')).toBe('&amp;&lt;&gt;&quot;&apos;');
	});

	it('returns empty string for empty input', () => {
		expect(escapeXML('')).toBe('');
	});
});

describe('unescapeXML', () => {
	it('unescapes XML entities', () => {
		expect(unescapeXML('&amp;&lt;&gt;&quot;&apos;')).toBe('&<>"\'');
	});

	it('round-trips with escapeXML', () => {
		const input = '<tag attr="val">Text & more</tag>';
		expect(unescapeXML(escapeXML(input))).toBe(input);
	});
});

describe('escapeJavaScript', () => {
	it('escapes backslashes', () => {
		expect(escapeJavaScript('\\')).toBe('\\\\');
	});

	it('escapes quotes', () => {
		expect(escapeJavaScript('"hello"')).toBe('\\"hello\\"');
		expect(escapeJavaScript("'hello'")).toBe("\\'hello\\'");
	});

	it('escapes newlines and tabs', () => {
		expect(escapeJavaScript('line1\nline2\ttab')).toBe('line1\\nline2\\ttab');
	});

	it('escapes null bytes', () => {
		expect(escapeJavaScript('a\0b')).toBe('a\\0b');
	});

	it('escapes Unicode line separators', () => {
		expect(escapeJavaScript('a\u2028b\u2029c')).toBe('a\\u2028b\\u2029c');
	});

	it('returns empty string for empty input', () => {
		expect(escapeJavaScript('')).toBe('');
	});
});

describe('unescapeJavaScript', () => {
	it('unescapes backslashes', () => {
		expect(unescapeJavaScript('\\\\')).toBe('\\');
	});

	it('unescapes quotes', () => {
		expect(unescapeJavaScript('\\"hello\\"')).toBe('"hello"');
		expect(unescapeJavaScript("\\'hello\\'")).toBe("'hello'");
	});

	it('unescapes newlines and tabs', () => {
		expect(unescapeJavaScript('line1\\nline2\\ttab')).toBe('line1\nline2\ttab');
	});

	it('unescapes null bytes', () => {
		expect(unescapeJavaScript('a\\0b')).toBe('a\0b');
	});

	it('unescapes Unicode escapes', () => {
		expect(unescapeJavaScript('\\u0041')).toBe('A');
	});

	it('unescapes hex escapes', () => {
		expect(unescapeJavaScript('\\x41')).toBe('A');
	});

	it('round-trips with escapeJavaScript', () => {
		const input = 'He said "Hello"\nLine 2\tTabbed\nPath: C:\\Users\\test';
		expect(unescapeJavaScript(escapeJavaScript(input))).toBe(input);
	});
});

describe('escapeJSON', () => {
	it('escapes double quotes', () => {
		expect(escapeJSON('"hello"')).toBe('\\"hello\\"');
	});

	it('escapes newlines', () => {
		expect(escapeJSON('line1\nline2')).toBe('line1\\nline2');
	});

	it('escapes backslashes', () => {
		expect(escapeJSON('C:\\Users')).toBe('C:\\\\Users');
	});

	it('escapes tabs', () => {
		expect(escapeJSON('a\tb')).toBe('a\\tb');
	});

	it('returns empty string for empty input', () => {
		expect(escapeJSON('')).toBe('');
	});
});

describe('unescapeJSON', () => {
	it('unescapes double quotes', () => {
		expect(unescapeJSON('\\"hello\\"')).toBe('"hello"');
	});

	it('unescapes newlines', () => {
		expect(unescapeJSON('line1\\nline2')).toBe('line1\nline2');
	});

	it('unescapes backslashes', () => {
		expect(unescapeJSON('C:\\\\Users')).toBe('C:\\Users');
	});

	it('returns original for invalid escape', () => {
		expect(unescapeJSON('plain text')).toBe('plain text');
	});

	it('round-trips with escapeJSON', () => {
		const input = 'Line 1\nLine 2\n"Quoted"\tTabbed\\Backslash';
		expect(unescapeJSON(escapeJSON(input))).toBe(input);
	});
});
