export {
	analyzeText,
	convertTextCases,
	convertMarkdownToHtml,
	generateLoremIpsum,
	reverseText,
	removeDuplicateLines,
	cleanWhitespace,
	type TextCounterMetrics,
	type TextCaseConversions,
	type MarkdownToHtmlOptions,
	type MarkdownToHtmlResult,
	type MarkdownToHtmlStats,
	type MarkdownToHtmlWarningCode,
	type LoremGenerationMode,
	type LoremOutputFormat,
	type LoremGenerationOptions,
	type LoremGenerationResult,
	type TextReverseResults,
	type TextDuplicateRemovalResult,
	type TextWhitespaceCleanupResult,
	type TextWhitespaceCleanupOptions
} from './text.engine.js';

export {
	diffTexts,
	generateUnifiedDiff,
	generateSideBySideDiff,
	type TextDiffOptions,
	type TextDiffLine,
	type TextDiffHunk,
	type TextDiffResult,
	type TextDiffStats
} from './diff.js';
