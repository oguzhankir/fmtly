export {
	analyzeText,
	convertTextCases,
	reverseText,
	removeDuplicateLines,
	cleanWhitespace,
	type TextCounterMetrics,
	type TextCaseConversions,
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
