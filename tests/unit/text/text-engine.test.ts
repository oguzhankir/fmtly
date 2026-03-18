import { describe, expect, it } from 'vitest';
import {
	analyzeRegexTester,
	analyzeText,
	cleanWhitespace,
	convertMarkdownToHtml,
	convertTextCases,
	generateLoremIpsum,
	removeDuplicateLines,
	reverseText
} from '../../../src/lib/engines/text/text.engine.js';

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

describe('convertMarkdownToHtml', () => {
	it('renders GFM tables and tracks markdown stats', async () => {
		const markdown = `# Metrics

| name | value |
| --- | ---: |
| uptime | 99.9 |
| errors | 0 |`;

		const result = await convertMarkdownToHtml(markdown);

		expect(result.html).toContain('<table>');
		expect(result.html).toContain('<h1');
		expect(result.stats.tables).toBe(1);
		expect(result.stats.headings).toBe(1);
		expect(result.stats.words).toBeGreaterThan(0);
	});

	it('highlights fenced code blocks with language classes', async () => {
		const markdown = '```js\nconst answer = 42;\n```';
		const result = await convertMarkdownToHtml(markdown);

		expect(result.html).toContain('class="hljs language-javascript"');
		expect(result.stats.codeBlocks).toBe(1);
	});

	it('removes unsafe markdown links and images', async () => {
		const markdown = '[click](javascript:alert(1))\n\n![xss](javascript:alert(2))';
		const result = await convertMarkdownToHtml(markdown);

		expect(result.html).toContain('<span>click</span>');
		expect(result.html).not.toContain('<img');
		expect(result.warnings).toContain('unsafe_link_removed');
		expect(result.warnings).toContain('unsafe_image_removed');
	});

	it('escapes raw html by default and allows it when enabled', async () => {
		const markdown = 'Before\n\n<div data-test="raw">raw html</div>';

		const escaped = await convertMarkdownToHtml(markdown);
		expect(escaped.html).toContain('&lt;div data-test=&quot;raw&quot;&gt;raw html&lt;/div&gt;');
		expect(escaped.warnings).toContain('raw_html_escaped');

		const allowed = await convertMarkdownToHtml(markdown, { allowRawHtml: true });
		expect(allowed.html).toContain('<div data-test="raw">raw html</div>');
		expect(allowed.warnings).not.toContain('raw_html_escaped');
	});
});

describe('analyzeRegexTester', () => {
	it('finds global matches with capture and named groups', () => {
		const pattern = '(?<level>INFO|WARN|ERROR)\\s+\\[(?<service>[a-z-]+)\\]';
		const input = 'INFO [auth-api]\nWARN [payments]\nERROR [auth-api]';
		const result = analyzeRegexTester(pattern, input, 'gm');

		expect(result.isValid).toBe(true);
		expect(result.error).toBeNull();
		expect(result.totalMatches).toBe(3);
		expect(result.matches[0]?.value).toBe('INFO [auth-api]');
		expect(result.matches[0]?.groups[0]?.value).toBe('INFO');
		expect(result.matches[0]?.namedGroups[0]?.name).toBe('level');
		expect(result.matches[0]?.line).toBe(1);
		expect(result.matches[1]?.line).toBe(2);
		expect(result.matches[2]?.line).toBe(3);
		expect(result.segments.some((segment) => segment.type === 'match')).toBe(true);
	});

	it('returns an empty-pattern error when pattern is blank', () => {
		const result = analyzeRegexTester('', 'hello world', 'g');

		expect(result.isValid).toBe(false);
		expect(result.error?.code).toBe('empty_pattern');
		expect(result.totalMatches).toBe(0);
	});

	it('returns invalid-flag and duplicate-flag errors', () => {
		const invalidFlag = analyzeRegexTester('foo', 'foo', 'gz');
		expect(invalidFlag.isValid).toBe(false);
		expect(invalidFlag.error?.code).toBe('invalid_flag');
		expect(invalidFlag.error?.detail).toBe('z');

		const duplicateFlag = analyzeRegexTester('foo', 'foo', 'gg');
		expect(duplicateFlag.isValid).toBe(false);
		expect(duplicateFlag.error?.code).toBe('duplicate_flag');
		expect(duplicateFlag.error?.detail).toBe('g');
	});

	it('handles zero-length global matches without infinite loops', () => {
		const result = analyzeRegexTester('(?=a)', 'aa', 'g');

		expect(result.isValid).toBe(true);
		expect(result.totalMatches).toBe(2);
		expect(result.matches[0]?.start).toBe(0);
		expect(result.matches[1]?.start).toBe(1);
	});

	it('applies match limits and preview truncation options', () => {
		const input = 'a '.repeat(2500);
		const result = analyzeRegexTester('a', input, 'g', {
			maxMatches: 5,
			previewCharLimit: 2200
		});

		expect(result.isValid).toBe(true);
		expect(result.totalMatches).toBe(5);
		expect(result.isMatchLimitReached).toBe(true);
		expect(result.isPreviewTruncated).toBe(true);
	});
});

describe('generateLoremIpsum', () => {
	it('generates deterministic output for the same seed and options', () => {
		const options = {
			mode: 'sentences' as const,
			count: 4,
			seed: 1337,
			includeClassicOpening: true,
			outputFormat: 'plain' as const,
			minWordsPerSentence: 6,
			maxWordsPerSentence: 10,
			minSentencesPerParagraph: 2,
			maxSentencesPerParagraph: 4
		};

		const first = generateLoremIpsum(options);
		const second = generateLoremIpsum(options);

		expect(first.text).toBe(second.text);
		expect(first.seed).toBe(1337);
		expect(first.mode).toBe('sentences');
		expect(first.outputFormat).toBe('plain');
	});

	it('supports word mode and includes classic opening at the beginning', () => {
		const result = generateLoremIpsum({
			mode: 'words',
			count: 12,
			seed: 42,
			includeClassicOpening: true,
			outputFormat: 'plain'
		});

		expect(result.text.startsWith('lorem ipsum dolor sit amet')).toBe(true);
		expect(result.text.split(/\s+/).length).toBe(12);
		expect(result.metrics.words).toBe(12);
		expect(result.metrics.sentences).toBe(1);
	});

	it('generates HTML output with paragraph tags when requested', () => {
		const result = generateLoremIpsum({
			mode: 'paragraphs',
			count: 2,
			seed: 88,
			outputFormat: 'html',
			includeClassicOpening: true
		});

		expect(result.text.includes('<p>')).toBe(true);
		expect(result.text.includes('</p>')).toBe(true);
		expect(result.text.includes('\n')).toBe(true);
		expect(result.plainText.includes('\n\n')).toBe(true);
		expect(result.metrics.paragraphs).toBe(2);
	});

	it('clamps invalid numeric options to safe ranges', () => {
		const result = generateLoremIpsum({
			mode: 'paragraphs',
			count: -10,
			seed: -1,
			minWordsPerSentence: 100,
			maxWordsPerSentence: 1,
			minSentencesPerParagraph: 30,
			maxSentencesPerParagraph: 0
		});

		expect(result.seed).toBe(1);
		expect(result.metrics.words).toBeGreaterThanOrEqual(2);
		expect(result.metrics.sentences).toBeGreaterThanOrEqual(1);
		expect(result.metrics.paragraphs).toBe(1);
	});

	it('returns plain text in text and plainText for plain output', () => {
		const result = generateLoremIpsum({
			mode: 'sentences',
			count: 3,
			seed: 777,
			outputFormat: 'plain',
			includeClassicOpening: false
		});

		expect(result.text).toBe(result.plainText);
		expect(result.metrics.words).toBeGreaterThan(0);
		expect(result.metrics.sentences).toBe(3);
		expect(result.metrics.readingTimeMinutes).toBe(1);
	});
});

describe('reverseText', () => {
	it('reverses characters with unicode-safe behavior', () => {
		const result = reverseText('hello 👋');
		expect(result.characters).toBe('👋 olleh');
	});

	it('reverses words while preserving whitespace positions', () => {
		const result = reverseText('alpha   beta\tgamma');
		expect(result.words).toBe('gamma   beta\talpha');
	});

	it('reverses lines with normalized output newlines', () => {
		const result = reverseText('line 1\r\nline 2\nline 3');
		expect(result.lines).toBe('line 3\nline 2\nline 1');
	});

	it('handles empty input', () => {
		const result = reverseText('');
		expect(result.characters).toBe('');
		expect(result.words).toBe('');
		expect(result.lines).toBe('');
	});
});

describe('convertTextCases', () => {
	it('converts simple phrase to all target cases', () => {
		const result = convertTextCases('user profile API response');

		expect(result.camelCase).toBe('userProfileApiResponse');
		expect(result.pascalCase).toBe('UserProfileApiResponse');
		expect(result.snakeCase).toBe('user_profile_api_response');
		expect(result.kebabCase).toBe('user-profile-api-response');
		expect(result.constantCase).toBe('USER_PROFILE_API_RESPONSE');
		expect(result.titleCase).toBe('User Profile Api Response');
		expect(result.sentenceCase).toBe('User profile api response');
	});

	it('splits camelCase and mixed delimiters correctly', () => {
		const result = convertTextCases('myHTTPServer_v2 endpoint-name');

		expect(result.snakeCase).toBe('my_http_server_v2_endpoint_name');
		expect(result.kebabCase).toBe('my-http-server-v2-endpoint-name');
		expect(result.camelCase).toBe('myHttpServerV2EndpointName');
		expect(result.constantCase).toBe('MY_HTTP_SERVER_V2_ENDPOINT_NAME');
	});

	it('returns empty values for empty input', () => {
		const result = convertTextCases('   ');

		expect(result.camelCase).toBe('');
		expect(result.pascalCase).toBe('');
		expect(result.snakeCase).toBe('');
		expect(result.kebabCase).toBe('');
		expect(result.constantCase).toBe('');
		expect(result.titleCase).toBe('');
		expect(result.sentenceCase).toBe('');
	});
});

describe('removeDuplicateLines', () => {
	it('removes duplicate lines preserving first occurrence', () => {
		const input = 'apple\nbanana\napple\ncherry\nbanana\ncherry\ndate';
		const result = removeDuplicateLines(input);

		expect(result.removed).toBe('apple\nbanana\ncherry\ndate');
		expect(result.duplicateCount).toBe(3);
		expect(result.uniqueCount).toBe(4);
	});

	it('handles empty input', () => {
		const result = removeDuplicateLines('');
		expect(result.removed).toBe('');
		expect(result.duplicateCount).toBe(0);
		expect(result.uniqueCount).toBe(0);
	});

	it('handles all unique lines', () => {
		const input = 'a\nb\nc';
		const result = removeDuplicateLines(input);
		expect(result.removed).toBe(input);
		expect(result.duplicateCount).toBe(0);
		expect(result.uniqueCount).toBe(3);
	});

	it('handles all duplicate lines', () => {
		const input = 'same\nsame\nsame';
		const result = removeDuplicateLines(input);
		expect(result.removed).toBe('same');
		expect(result.duplicateCount).toBe(2);
		expect(result.uniqueCount).toBe(1);
	});

	it('preserves empty lines as unique entries', () => {
		const input = 'a\n\nb\n\na';
		const result = removeDuplicateLines(input);
		expect(result.removed).toBe('a\n\nb');
		expect(result.duplicateCount).toBe(2);
		expect(result.uniqueCount).toBe(3);
	});
});

describe('cleanWhitespace', () => {
	it('removes trailing spaces and tabs', () => {
		const input = 'line 1   \t\nline 2\t\t  \nline 3   ';
		const result = cleanWhitespace(input);

		expect(result.cleaned).toBe('line 1\nline 2\nline 3');
		expect(result.trailingSpacesRemoved).toBe(3);
	});

	it('collapses multiple spaces and tabs to single space', () => {
		const input = 'text  with   multiple\t\t\t spaces';
		const result = cleanWhitespace(input);

		expect(result.cleaned).toBe('text with multiple spaces');
		expect(result.multipleBlanksCollapsed).toBe(3);
	});

	it('normalizes line endings', () => {
		const input = 'line 1\r\nline 2\rline 3\n';
		const result = cleanWhitespace(input);

		expect(result.cleaned).toBe('line 1\nline 2\nline 3');
		expect(result.lineEndingsNormalized).toBe(true);
	});

	it('handles empty input', () => {
		const result = cleanWhitespace('');
		expect(result.cleaned).toBe('');
		expect(result.trailingSpacesRemoved).toBe(0);
		expect(result.leadingSpacesRemoved).toBe(0);
		expect(result.multipleBlanksCollapsed).toBe(0);
		expect(result.lineEndingsNormalized).toBe(false);
	});

	it('normalizes paragraph spacing', () => {
		const input = 'para 1  \n  \n   \npara 2';
		const result = cleanWhitespace(input);

		expect(result.cleaned).toBe('para 1\n\npara 2');
	});

	it('removes leading spaces when enabled', () => {
		const input = '  line 1\n\tline 2\n   line 3';
		const result = cleanWhitespace(input, { removeLeading: true });

		expect(result.cleaned).toBe('line 1\nline 2\nline 3');
		expect(result.leadingSpacesRemoved).toBe(3);
	});

	it('converts tabs to spaces when enabled', () => {
		const input = 'line\t1\n\t\tline 2';
		const result = cleanWhitespace(input, {
			convertTabsToSpaces: true,
			tabSize: 2,
			collapseSpaces: false,
			removeTrailing: false
		});

		expect(result.cleaned).toBe('line  1\n    line 2');
		expect(result.tabsConverted).toBe(3);
	});

	it('removes all spaces when enabled', () => {
		const input = 'line 1 with spaces';
		const result = cleanWhitespace(input, { removeAllSpaces: true });

		expect(result.cleaned).toBe('line1withspaces');
		expect(result.spacesConverted).toBe(3);
	});

	it('removes all line breaks when enabled', () => {
		const input = 'line 1\nline 2\nline 3';
		const result = cleanWhitespace(input, { removeAllLineBreaks: true });

		expect(result.cleaned).toBe('line 1 line 2 line 3');
	});

	it('trims each line when enabled', () => {
		const input = '  line 1  \n\tline 2\t\n   line 3   ';
		const result = cleanWhitespace(input, { trimLines: true });

		expect(result.cleaned).toBe('line 1\nline 2\nline 3');
		expect(result.leadingSpacesRemoved).toBe(3);
		expect(result.trailingSpacesRemoved).toBe(3);
	});
});
