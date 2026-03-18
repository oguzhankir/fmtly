export {
	analyzeText,
	convertTextCases,
	generateLoremIpsum,
	reverseText,
	removeDuplicateLines,
	cleanWhitespace,
	type TextCounterMetrics,
	type TextCaseConversions,
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
