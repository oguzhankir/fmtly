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

export type TextDuplicateRemovalResult = {
	removed: string;
	duplicateCount: number;
	uniqueCount: number;
};

export type TextWhitespaceCleanupOptions = {
	removeLeading: boolean;
	removeTrailing: boolean;
	collapseSpaces: boolean;
	collapseTabs: boolean;
	convertTabsToSpaces: boolean;
	tabSize: number;
	removeAllSpaces: boolean;
	removeAllLineBreaks: boolean;
	trimLines: boolean;
	preserveParagraphBreaks: boolean;
	convertSpacesToTabs: boolean;
};

export type TextWhitespaceCleanupResult = {
	cleaned: string;
	trailingSpacesRemoved: number;
	leadingSpacesRemoved: number;
	multipleBlanksCollapsed: number;
	tabsConverted: number;
	spacesConverted: number;
	lineEndingsNormalized: boolean;
	linesProcessed: number;
};

export type LoremGenerationMode = 'paragraphs' | 'sentences' | 'words';

export type LoremOutputFormat = 'plain' | 'html';

export type LoremGenerationOptions = {
	mode: LoremGenerationMode;
	count: number;
	seed: number;
	includeClassicOpening: boolean;
	outputFormat: LoremOutputFormat;
	minWordsPerSentence: number;
	maxWordsPerSentence: number;
	minSentencesPerParagraph: number;
	maxSentencesPerParagraph: number;
};

export type LoremGenerationResult = {
	text: string;
	plainText: string;
	mode: LoremGenerationMode;
	outputFormat: LoremOutputFormat;
	seed: number;
	metrics: TextCounterMetrics;
};

export type MarkdownToHtmlOptions = {
	gfm: boolean;
	breaks: boolean;
	highlightCode: boolean;
	allowRawHtml: boolean;
	openLinksInNewTab: boolean;
};

export type MarkdownToHtmlWarningCode =
	| 'unsafe_link_removed'
	| 'unsafe_image_removed'
	| 'raw_html_escaped';

export type MarkdownToHtmlStats = {
	headings: number;
	tables: number;
	codeBlocks: number;
	links: number;
	images: number;
	listItems: number;
	blockquotes: number;
	words: number;
	characters: number;
};

export type MarkdownToHtmlResult = {
	html: string;
	stats: MarkdownToHtmlStats;
	warnings: MarkdownToHtmlWarningCode[];
};

const WORD_PATTERN = /[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu;
const SENTENCE_PATTERN = /[^.!?\n]+[.!?]+(?=\s|$)|[^\n]+$/g;

const LOREM_WORD_BANK: string[] = [
	'lorem',
	'ipsum',
	'dolor',
	'sit',
	'amet',
	'consectetur',
	'adipiscing',
	'elit',
	'sed',
	'do',
	'eiusmod',
	'tempor',
	'incididunt',
	'ut',
	'labore',
	'et',
	'dolore',
	'magna',
	'aliqua',
	'ut',
	'enim',
	'ad',
	'minim',
	'veniam',
	'quis',
	'nostrud',
	'exercitation',
	'ullamco',
	'laboris',
	'nisi',
	'ut',
	'aliquip',
	'ex',
	'ea',
	'commodo',
	'consequat',
	'duis',
	'aute',
	'irure',
	'dolor',
	'in',
	'reprehenderit',
	'in',
	'voluptate',
	'velit',
	'esse',
	'cillum',
	'dolore',
	'eu',
	'fugiat',
	'nulla',
	'pariatur',
	'excepteur',
	'sint',
	'occaecat',
	'cupidatat',
	'non',
	'proident',
	'sunt',
	'in',
	'culpa',
	'qui',
	'officia',
	'deserunt',
	'mollit',
	'anim',
	'id',
	'est',
	'laborum',
	'phasellus',
	'viverra',
	'justo',
	'nec',
	'ultricies',
	'metus',
	'porta',
	'non',
	'pulvinar',
	'neque',
	'laoreet',
	'suspendisse',
	'interdum',
	'pellentesque',
	'massa',
	'placerat',
	'duis',
	'ultricies',
	'lacus',
	'sed',
	'turpis',
	'tincidunt',
	'id',
	'aliquet',
	'risus',
	'feugiat',
	'venenatis',
	'tellus',
	'eu',
	'sagittis',
	'metus',
	'habitasse',
	'platea',
	'dictumst'
];

const LOREM_CLASSIC_OPENING: string[] = [
	'lorem',
	'ipsum',
	'dolor',
	'sit',
	'amet',
	'consectetur',
	'adipiscing',
	'elit'
];

const DEFAULT_LOREM_OPTIONS: LoremGenerationOptions = {
	mode: 'paragraphs',
	count: 3,
	seed: 2026,
	includeClassicOpening: true,
	outputFormat: 'plain',
	minWordsPerSentence: 6,
	maxWordsPerSentence: 16,
	minSentencesPerParagraph: 3,
	maxSentencesPerParagraph: 6
};

const DEFAULT_MARKDOWN_OPTIONS: MarkdownToHtmlOptions = {
	gfm: true,
	breaks: false,
	highlightCode: true,
	allowRawHtml: false,
	openLinksInNewTab: true
};

const MARKDOWN_RELATIVE_URL_PATTERN = /^(#|\/(?!\/)|\.\.?\/|\?|$)/;
const MARKDOWN_SCHEME_PATTERN = /^[a-zA-Z][a-zA-Z\d+.-]*:/;
const MARKDOWN_ALLOWED_LINK_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:']);
const MARKDOWN_ALLOWED_IMAGE_PROTOCOLS = new Set(['http:', 'https:']);
const MARKDOWN_ALLOWED_DATA_IMAGE_PATTERN =
	/^data:image\/(?:png|gif|jpeg|jpg|webp|svg\+xml);base64,[a-z\d+/=\s]+$/i;

type HighlightLanguageModule = { default: import('highlight.js').LanguageFn };
type HighlightCore = typeof import('highlight.js/lib/core').default;
type MarkdownRuntime = {
	marked: typeof import('marked').marked;
	Renderer: typeof import('marked').Renderer;
	hljs: HighlightCore;
};

const MARKDOWN_HIGHLIGHT_LANGUAGE_LOADERS: Record<string, () => Promise<HighlightLanguageModule>> =
	{
		javascript: () => import('highlight.js/lib/languages/javascript'),
		typescript: () => import('highlight.js/lib/languages/typescript'),
		json: () => import('highlight.js/lib/languages/json'),
		xml: () => import('highlight.js/lib/languages/xml'),
		yaml: () => import('highlight.js/lib/languages/yaml'),
		markdown: () => import('highlight.js/lib/languages/markdown'),
		bash: () => import('highlight.js/lib/languages/bash'),
		sql: () => import('highlight.js/lib/languages/sql'),
		css: () => import('highlight.js/lib/languages/css'),
		ini: () => import('highlight.js/lib/languages/ini'),
		diff: () => import('highlight.js/lib/languages/diff')
	};

const MARKDOWN_LANGUAGE_ALIASES: Record<string, string> = {
	js: 'javascript',
	mjs: 'javascript',
	cjs: 'javascript',
	ts: 'typescript',
	tsx: 'typescript',
	yml: 'yaml',
	html: 'xml',
	svg: 'xml',
	sh: 'bash',
	shell: 'bash',
	zsh: 'bash',
	md: 'markdown',
	text: 'plaintext',
	txt: 'plaintext'
};

const markdownRegisteredLanguages = new Set<string>();
let markdownRuntimePromise: Promise<MarkdownRuntime> | null = null;

function clampInteger(value: number, min: number, max: number): number {
	if (!Number.isFinite(value)) return min;
	return Math.min(max, Math.max(min, Math.floor(value)));
}

function normalizeRange(
	minValue: number,
	maxValue: number,
	lowerBound: number,
	upperBound: number
): { min: number; max: number } {
	const normalizedMin = clampInteger(minValue, lowerBound, upperBound);
	const normalizedMax = clampInteger(maxValue, lowerBound, upperBound);

	if (normalizedMin <= normalizedMax) {
		return { min: normalizedMin, max: normalizedMax };
	}

	return { min: normalizedMax, max: normalizedMin };
}

function createSeededRandom(seed: number): () => number {
	let state = seed >>> 0;
	if (state === 0) state = 1;

	return (): number => {
		state += 0x6d2b79f5;
		let temp = state;
		temp = Math.imul(temp ^ (temp >>> 15), temp | 1);
		temp ^= temp + Math.imul(temp ^ (temp >>> 7), temp | 61);
		return ((temp ^ (temp >>> 14)) >>> 0) / 4294967296;
	};
}

function randomIntBetween(min: number, max: number, random: () => number): number {
	if (min >= max) return min;
	return Math.floor(random() * (max - min + 1)) + min;
}

function escapeHtml(input: string): string {
	return input
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

function normalizeMarkdownLanguage(input: string): string {
	const normalized = input.trim().toLowerCase();
	if (normalized.length === 0) return '';
	return MARKDOWN_LANGUAGE_ALIASES[normalized] ?? normalized;
}

function collectMarkdownFenceLanguages(input: string): Set<string> {
	const languages = new Set<string>();
	const matches = input.matchAll(/^```\s*([a-zA-Z\d+\-_.#]*)\s*$/gm);

	for (const match of matches) {
		const normalized = normalizeMarkdownLanguage(match[1] ?? '');
		if (normalized.length > 0 && normalized !== 'plaintext') {
			languages.add(normalized);
		}
	}

	return languages;
}

function normalizeMarkdownOptions(options: Partial<MarkdownToHtmlOptions>): MarkdownToHtmlOptions {
	return {
		gfm: options.gfm ?? DEFAULT_MARKDOWN_OPTIONS.gfm,
		breaks: options.breaks ?? DEFAULT_MARKDOWN_OPTIONS.breaks,
		highlightCode: options.highlightCode ?? DEFAULT_MARKDOWN_OPTIONS.highlightCode,
		allowRawHtml: options.allowRawHtml ?? DEFAULT_MARKDOWN_OPTIONS.allowRawHtml,
		openLinksInNewTab: options.openLinksInNewTab ?? DEFAULT_MARKDOWN_OPTIONS.openLinksInNewTab
	};
}

function sanitizeMarkdownUrl(url: string, allowDataImage: boolean): string | null {
	const trimmed = url.trim();
	if (!trimmed) return null;

	if (MARKDOWN_RELATIVE_URL_PATTERN.test(trimmed)) {
		return trimmed;
	}

	if (!MARKDOWN_SCHEME_PATTERN.test(trimmed)) {
		return trimmed;
	}

	let parsed: URL;
	try {
		parsed = new URL(trimmed);
	} catch {
		return null;
	}

	if (allowDataImage && parsed.protocol === 'data:') {
		return MARKDOWN_ALLOWED_DATA_IMAGE_PATTERN.test(trimmed) ? trimmed : null;
	}

	const allowedProtocols = allowDataImage
		? MARKDOWN_ALLOWED_IMAGE_PROTOCOLS
		: MARKDOWN_ALLOWED_LINK_PROTOCOLS;

	return allowedProtocols.has(parsed.protocol) ? trimmed : null;
}

function countMatches(input: string, pattern: RegExp): number {
	const matches = input.match(pattern);
	return matches?.length ?? 0;
}

function htmlToPlainText(input: string): string {
	return input
		.replace(/<script[\s\S]*?<\/script>/gi, ' ')
		.replace(/<style[\s\S]*?<\/style>/gi, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/\s+/g, ' ')
		.trim();
}

function computeMarkdownStats(html: string): MarkdownToHtmlStats {
	const plainText = htmlToPlainText(html);
	const textMetrics = analyzeText(plainText);

	return {
		headings: countMatches(html, /<h[1-6]\b/gi),
		tables: countMatches(html, /<table\b/gi),
		codeBlocks: countMatches(html, /<pre>\s*<code\b/gi),
		links: countMatches(html, /<a\b/gi),
		images: countMatches(html, /<img\b/gi),
		listItems: countMatches(html, /<li\b/gi),
		blockquotes: countMatches(html, /<blockquote\b/gi),
		words: textMetrics.words,
		characters: textMetrics.characters
	};
}

async function loadMarkdownRuntime(languagesToRegister: Set<string>): Promise<MarkdownRuntime> {
	if (!markdownRuntimePromise) {
		markdownRuntimePromise = Promise.all([import('marked'), import('highlight.js/lib/core')]).then(
			([markedModule, hljsModule]) => ({
				marked: markedModule.marked,
				Renderer: markedModule.Renderer,
				hljs: hljsModule.default
			})
		);
	}

	const runtime = await markdownRuntimePromise;

	for (const language of languagesToRegister) {
		if (markdownRegisteredLanguages.has(language)) continue;

		const loader = MARKDOWN_HIGHLIGHT_LANGUAGE_LOADERS[language];
		if (!loader) continue;

		const languageModule = await loader();
		runtime.hljs.registerLanguage(language, languageModule.default);
		markdownRegisteredLanguages.add(language);
	}

	return runtime;
}

export async function convertMarkdownToHtml(
	input: string,
	options: Partial<MarkdownToHtmlOptions> = {}
): Promise<MarkdownToHtmlResult> {
	const normalizedOptions = normalizeMarkdownOptions(options);
	const fenceLanguages = normalizedOptions.highlightCode
		? collectMarkdownFenceLanguages(input)
		: new Set<string>();
	const runtime = await loadMarkdownRuntime(fenceLanguages);
	const warningsSet = new Set<MarkdownToHtmlWarningCode>();

	const renderer = new runtime.Renderer();

	renderer.link = (token) => {
		const safeHref = sanitizeMarkdownUrl(token.href ?? '', false);
		if (!safeHref) {
			warningsSet.add('unsafe_link_removed');
			return `<span>${escapeHtml(token.text ?? '')}</span>`;
		}

		const titleAttr = token.title ? ` title="${escapeHtml(token.title)}"` : '';
		const externalAttrs = normalizedOptions.openLinksInNewTab
			? ' target="_blank" rel="noopener noreferrer nofollow"'
			: '';

		return `<a href="${escapeHtml(safeHref)}"${titleAttr}${externalAttrs}>${token.text ?? ''}</a>`;
	};

	renderer.image = (token) => {
		const safeSrc = sanitizeMarkdownUrl(token.href ?? '', true);
		if (!safeSrc) {
			warningsSet.add('unsafe_image_removed');
			return '';
		}

		const alt = escapeHtml(token.text ?? '');
		const titleAttr = token.title ? ` title="${escapeHtml(token.title)}"` : '';
		return `<img src="${escapeHtml(safeSrc)}" alt="${alt}"${titleAttr} loading="lazy" decoding="async">`;
	};

	renderer.html = (token) => {
		if (normalizedOptions.allowRawHtml) return token.raw;
		warningsSet.add('raw_html_escaped');
		return escapeHtml(token.raw);
	};

	renderer.code = (token) => {
		const rawLanguage = normalizeMarkdownLanguage(token.lang ?? '');
		const classNames = ['hljs'];

		if (rawLanguage) {
			classNames.push(`language-${rawLanguage}`);
		}

		if (!normalizedOptions.highlightCode) {
			return `<pre><code class="${classNames.join(' ')}">${escapeHtml(token.text)}</code></pre>\n`;
		}

		if (rawLanguage && runtime.hljs.getLanguage(rawLanguage)) {
			const highlighted = runtime.hljs.highlight(token.text, {
				language: rawLanguage,
				ignoreIllegals: true
			}).value;
			return `<pre><code class="${classNames.join(' ')}">${highlighted}</code></pre>\n`;
		}

		const autoHighlighted = runtime.hljs.highlightAuto(token.text).value;
		return `<pre><code class="${classNames.join(' ')}">${autoHighlighted}</code></pre>\n`;
	};

	const html = runtime.marked.parse(input, {
		renderer,
		gfm: normalizedOptions.gfm,
		breaks: normalizedOptions.breaks,
		async: false
	});

	return {
		html,
		stats: computeMarkdownStats(html),
		warnings: Array.from(warningsSet)
	};
}

function sanitizeLoremOptions(options: Partial<LoremGenerationOptions>): LoremGenerationOptions {
	const mode: LoremGenerationMode =
		options.mode === 'sentences' || options.mode === 'words' ? options.mode : 'paragraphs';

	const countMax = mode === 'words' ? 5000 : mode === 'sentences' ? 1000 : 300;

	const sentenceWordRange = normalizeRange(
		options.minWordsPerSentence ?? DEFAULT_LOREM_OPTIONS.minWordsPerSentence,
		options.maxWordsPerSentence ?? DEFAULT_LOREM_OPTIONS.maxWordsPerSentence,
		2,
		40
	);

	const paragraphSentenceRange = normalizeRange(
		options.minSentencesPerParagraph ?? DEFAULT_LOREM_OPTIONS.minSentencesPerParagraph,
		options.maxSentencesPerParagraph ?? DEFAULT_LOREM_OPTIONS.maxSentencesPerParagraph,
		1,
		20
	);

	const outputFormat: LoremOutputFormat = options.outputFormat === 'html' ? 'html' : 'plain';

	return {
		mode,
		count: clampInteger(options.count ?? DEFAULT_LOREM_OPTIONS.count, 1, countMax),
		seed: clampInteger(options.seed ?? DEFAULT_LOREM_OPTIONS.seed, 1, 2147483647),
		includeClassicOpening:
			options.includeClassicOpening ?? DEFAULT_LOREM_OPTIONS.includeClassicOpening,
		outputFormat,
		minWordsPerSentence: sentenceWordRange.min,
		maxWordsPerSentence: sentenceWordRange.max,
		minSentencesPerParagraph: paragraphSentenceRange.min,
		maxSentencesPerParagraph: paragraphSentenceRange.max
	};
}

function pickWord(random: () => number): string {
	const index = randomIntBetween(0, LOREM_WORD_BANK.length - 1, random);
	return LOREM_WORD_BANK[index];
}

function applyClassicOpening(words: string[], maxWords: number): string[] {
	const opening = LOREM_CLASSIC_OPENING.slice(0, maxWords);
	if (opening.length === 0) return words;
	return [...opening, ...words.slice(opening.length)];
}

function buildSentence(
	wordCount: number,
	random: () => number,
	useClassicOpening: boolean
): string {
	const words: string[] = [];

	for (let index = 0; index < wordCount; index += 1) {
		words.push(pickWord(random));
	}

	const withOpening = useClassicOpening ? applyClassicOpening(words, wordCount) : words;

	if (withOpening.length >= 8 && random() < 0.35) {
		const commaIndex = randomIntBetween(3, withOpening.length - 3, random);
		withOpening[commaIndex] = `${withOpening[commaIndex]},`;
	}

	const punctuation = random() < 0.08 ? '!' : random() < 0.12 ? '?' : '.';
	const firstWord = capitalizeWord(withOpening[0]);
	const rest = withOpening.slice(1);

	return [firstWord, ...rest].join(' ') + punctuation;
}

function convertPlainToHtml(plainText: string, mode: LoremGenerationMode): string {
	if (!plainText) return '';

	if (mode === 'paragraphs') {
		return plainText
			.split(/\n\n/)
			.filter((paragraph) => paragraph.trim().length > 0)
			.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
			.join('\n');
	}

	return `<p>${escapeHtml(plainText)}</p>`;
}

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

export function generateLoremIpsum(
	options: Partial<LoremGenerationOptions> = {}
): LoremGenerationResult {
	const normalizedOptions = sanitizeLoremOptions(options);
	const random = createSeededRandom(normalizedOptions.seed);

	let plainText = '';

	if (normalizedOptions.mode === 'words') {
		const words: string[] = [];

		for (let index = 0; index < normalizedOptions.count; index += 1) {
			words.push(pickWord(random));
		}

		const outputWords = normalizedOptions.includeClassicOpening
			? applyClassicOpening(words, normalizedOptions.count)
			: words;

		plainText = outputWords.join(' ');
	} else if (normalizedOptions.mode === 'sentences') {
		const sentences: string[] = [];

		for (let index = 0; index < normalizedOptions.count; index += 1) {
			const wordCount = randomIntBetween(
				normalizedOptions.minWordsPerSentence,
				normalizedOptions.maxWordsPerSentence,
				random
			);

			sentences.push(
				buildSentence(wordCount, random, normalizedOptions.includeClassicOpening && index === 0)
			);
		}

		plainText = sentences.join(' ');
	} else {
		const paragraphs: string[] = [];

		for (let paragraphIndex = 0; paragraphIndex < normalizedOptions.count; paragraphIndex += 1) {
			const sentenceCount = randomIntBetween(
				normalizedOptions.minSentencesPerParagraph,
				normalizedOptions.maxSentencesPerParagraph,
				random
			);

			const sentences: string[] = [];

			for (let sentenceIndex = 0; sentenceIndex < sentenceCount; sentenceIndex += 1) {
				const wordCount = randomIntBetween(
					normalizedOptions.minWordsPerSentence,
					normalizedOptions.maxWordsPerSentence,
					random
				);

				sentences.push(
					buildSentence(
						wordCount,
						random,
						normalizedOptions.includeClassicOpening && paragraphIndex === 0 && sentenceIndex === 0
					)
				);
			}

			paragraphs.push(sentences.join(' '));
		}

		plainText = paragraphs.join('\n\n');
	}

	const text =
		normalizedOptions.outputFormat === 'html'
			? convertPlainToHtml(plainText, normalizedOptions.mode)
			: plainText;

	return {
		text,
		plainText,
		mode: normalizedOptions.mode,
		outputFormat: normalizedOptions.outputFormat,
		seed: normalizedOptions.seed,
		metrics: analyzeText(plainText)
	};
}

export function reverseText(input: string): TextReverseResults {
	return {
		characters: reverseCharacters(input),
		words: reverseWords(input),
		lines: reverseLines(input)
	};
}

export function removeDuplicateLines(input: string): TextDuplicateRemovalResult {
	if (!input) {
		return { removed: '', duplicateCount: 0, uniqueCount: 0 };
	}

	const lines = input.split(/\r?\n/);
	const seen = new Set<string>();
	const unique: string[] = [];
	let duplicateCount = 0;

	for (const line of lines) {
		if (seen.has(line)) {
			duplicateCount += 1;
		} else {
			seen.add(line);
			unique.push(line);
		}
	}

	return {
		removed: unique.join('\n'),
		duplicateCount,
		uniqueCount: unique.length
	};
}

export function cleanWhitespace(
	input: string,
	options: Partial<TextWhitespaceCleanupOptions> = {}
): TextWhitespaceCleanupResult {
	const opts: TextWhitespaceCleanupOptions = {
		removeLeading: false,
		removeTrailing: true,
		collapseSpaces: true,
		collapseTabs: true,
		convertTabsToSpaces: false,
		tabSize: 4,
		removeAllSpaces: false,
		removeAllLineBreaks: false,
		trimLines: false,
		preserveParagraphBreaks: true,
		convertSpacesToTabs: false,
		...options
	};

	let result = input;
	let trailingSpacesRemoved = 0;
	let leadingSpacesRemoved = 0;
	let multipleBlanksCollapsed = 0;
	let tabsConverted = 0;
	let spacesConverted = 0;
	const lineEndingsNormalized = input.includes('\r\n') || input.includes('\r');

	if (opts.removeAllSpaces) {
		result = result.replace(/ /g, '');
		spacesConverted = (input.match(/ /g) || []).length;
	}

	// Convert tabs to spaces (do this before collapse if enabled)
	if (opts.convertTabsToSpaces) {
		const spaces = ' '.repeat(opts.tabSize);
		result = result.replace(/\t/g, spaces);
		tabsConverted = (input.match(/\t/g) || []).length;

		// After converting tabs to spaces, collapse multiple spaces if needed
		if (opts.collapseSpaces && !opts.removeAllSpaces) {
			result = result.replace(/ {2,}/g, (match) => {
				multipleBlanksCollapsed += 1;
				return ' ';
			});
		}
	} else if (
		(opts.collapseTabs || opts.collapseSpaces) &&
		!opts.convertTabsToSpaces &&
		!opts.removeAllSpaces &&
		!opts.convertSpacesToTabs
	) {
		// Use a single regex to collapse both tabs and spaces together
		// This matches the original behavior but with the correct conditions
		result = result.replace(/[ \t]{2,}/g, (match) => {
			multipleBlanksCollapsed += 1;
			return ' ';
		});
	}

	// Remove leading/trailing spaces
	if (opts.removeLeading || opts.trimLines) {
		result = result.replace(/^[ \t]+/gm, (match) => {
			leadingSpacesRemoved += 1;
			return '';
		});
	}

	if (opts.removeTrailing || opts.trimLines) {
		result = result.replace(/[ \t]+$/gm, (match) => {
			trailingSpacesRemoved += 1;
			return '';
		});
	}

	if (opts.removeAllLineBreaks) {
		result = result.replace(/\r?\n/g, ' ');
	} else {
		result = result.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

		if (opts.preserveParagraphBreaks) {
			result = result.replace(/\n{3,}/g, '\n\n');
		} else {
			result = result.replace(/\n+/g, '\n');
		}

		result = result.replace(/\n$/, '');
	}

	const linesProcessed = result.split('\n').length;

	return {
		cleaned: result,
		trailingSpacesRemoved,
		leadingSpacesRemoved,
		multipleBlanksCollapsed,
		tabsConverted,
		spacesConverted,
		lineEndingsNormalized,
		linesProcessed
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
