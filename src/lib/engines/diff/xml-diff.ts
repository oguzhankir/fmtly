import type { DiffOptions, DiffResult, DiffEntry, DiffType, DiffSummary } from './json-diff.js';

// Simple XML diff implementation
// For now, we'll convert XML to text and do line-based diff
// In a full implementation, we'd parse XML and do element-aware diff

function getType(value: unknown): string {
	if (value === null) return 'null';
	if (Array.isArray(value)) return 'array';
	return typeof value;
}

function splitLines(text: string): string[] {
	return text.split(/\r?\n/).filter((line) => line.trim() !== '');
}

function computeTextDiff(leftText: string, rightText: string, options: DiffOptions): DiffEntry[] {
	const normalizeLine = (line: string): string => {
		const whitespaceNormalized = options.ignoreWhitespace ? line.trim().replace(/\s+/g, ' ') : line;
		return options.caseSensitive ? whitespaceNormalized : whitespaceNormalized.toLowerCase();
	};
	const leftLines = splitLines(leftText);
	const rightLines = splitLines(rightText);

	const entries: DiffEntry[] = [];
	const maxLines = Math.max(leftLines.length, rightLines.length);

	for (let i = 0; i < maxLines; i++) {
		const leftLine = leftLines[i];
		const rightLine = rightLines[i];

		if (leftLine === undefined) {
			entries.push({
				path: `line ${i + 1}`,
				type: 'added',
				leftValue: null,
				rightValue: rightLine,
				leftType: null,
				rightType: 'string'
			});
		} else if (rightLine === undefined) {
			entries.push({
				path: `line ${i + 1}`,
				type: 'removed',
				leftValue: leftLine,
				rightValue: null,
				leftType: 'string',
				rightType: null
			});
		} else if (normalizeLine(leftLine) !== normalizeLine(rightLine)) {
			entries.push({
				path: `line ${i + 1}`,
				type: 'modified',
				leftValue: leftLine,
				rightValue: rightLine,
				leftType: 'string',
				rightType: 'string'
			});
		}
	}

	return entries;
}

function isValidXml(input: string): boolean {
	if (typeof DOMParser === 'undefined') return true;
	const doc = new DOMParser().parseFromString(input, 'application/xml');
	return !doc.querySelector('parsererror');
}

export function computeXMLDiff(left: string, right: string, options: DiffOptions): DiffResult {
	try {
		const leftTrimmed = options.ignoreWhitespace ? left.trim() : left;
		const rightTrimmed = options.ignoreWhitespace ? right.trim() : right;
		if (!isValidXml(leftTrimmed)) {
			return { entries: [], error: 'Invalid XML in left (Original) input' };
		}
		if (!isValidXml(rightTrimmed)) {
			return { entries: [], error: 'Invalid XML in right (Modified) input' };
		}
		const entries = computeTextDiff(leftTrimmed, rightTrimmed, options);

		return {
			entries,
			error: null
		};
	} catch (error) {
		return {
			entries: [],
			error: error instanceof Error ? error.message : 'Unknown error'
		};
	}
}

export function computeDiffSummary(entries: DiffEntry[]): DiffSummary {
	const summary = {
		added: 0,
		removed: 0,
		modified: 0,
		unchanged: 0,
		total: entries.length,
		touchedPaths: [] as string[],
		similarityScore: 0
	};

	for (const entry of entries) {
		summary[entry.type]++;
		if (!summary.touchedPaths.includes(entry.path)) {
			summary.touchedPaths.push(entry.path);
		}
	}

	summary.similarityScore =
		summary.total === 0 ? 100 : Math.round((summary.unchanged / summary.total) * 100);

	return summary;
}
