import { describe, expect, it } from 'vitest';
import {
	escapeCsv,
	escapeShell,
	escapeSql,
	escapeXML,
	unescapeCsv,
	unescapeShell,
	unescapeXML
} from '../../src/lib/engines/escaper/index';

describe('Escaper Engine - Completion Tests', () => {
	it('SQL escape handles mysql correctly', () => {
		const input = "O'Connor said: \\test";
		expect(escapeSql(input, 'mysql')).toBe("O''Connor said: \\\\test");
	});

	it('SQL escape handles postgres & sqlite correctly', () => {
		const input = "O'Connor said: \\test";
		expect(escapeSql(input, 'postgres')).toBe("O''Connor said: \\test");
		expect(escapeSql(input, 'sqlite')).toBe("O''Connor said: \\test");
	});

	it('CSV escapes text containing commas or quotes', () => {
		const hasComma = 'hello, world';
		expect(escapeCsv(hasComma)).toBe('"hello, world"');

		const hasQuote = 'hello "world"';
		expect(escapeCsv(hasQuote)).toBe('"hello ""world"""');

		const noSpecial = 'hello world';
		expect(escapeCsv(noSpecial)).toBe('hello world');
	});

	it('CSV unescapes correctly', () => {
		const escaped = '"hello ""world"""';
		expect(unescapeCsv(escaped)).toBe('hello "world"');
	});

	it('Shell escapes arguments wrapping them firmly', () => {
		const complex = `{"flag": true, 'quoted': test}`;
		// Wrap in single. Replace single with '"'"'
		expect(escapeShell(complex)).toBe(`'{"flag": true, '"'"'quoted'"'"': test}'`);
	});

	it('Shell unescapes securely back', () => {
		const escaped = `'{"flag": true, '"'"'quoted'"'"': test}'`;
		expect(unescapeShell(escaped)).toBe(`{"flag": true, 'quoted': test}`);
	});

	it('XML escaping handles special structures', () => {
		const input = '<item name="Quote: \'Test\'">Value & Context</item>';
		expect(escapeXML(input)).toBe(
			'&lt;item name=&quot;Quote: &apos;Test&apos;&quot;&gt;Value &amp; Context&lt;/item&gt;'
		);
	});

	it('XML unescaping translates safely back', () => {
		const escaped =
			'&lt;item name=&quot;Quote: &apos;Test&apos;&quot;&gt;Value &amp; Context&lt;/item&gt;';
		expect(unescapeXML(escaped)).toBe('<item name="Quote: \'Test\'">Value & Context</item>');
	});
});
