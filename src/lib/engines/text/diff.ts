export interface TextDiffOptions {
	ignoreWhitespace: boolean;
	ignoreCase: boolean;
	ignoreEmptyLines: boolean;
	contextLines: number;
	showInline: boolean;
	algorithm: 'patience' | 'myers' | 'histogram';
}

export interface TextDiffLine {
	value: string;
	type: 'unchanged' | 'added' | 'removed';
	leftLineNumber?: number;
	rightLineNumber?: number;
	changes?: Array<{
		start: number;
		end: number;
		type: 'added' | 'removed';
	}>;
}

export interface TextDiffHunk {
	oldStart: number;
	oldLines: number;
	newStart: number;
	newLines: number;
	section: string;
	lines: TextDiffLine[];
}

export interface TextDiffResult {
	hunks: TextDiffHunk[];
	addedLines: number;
	removedLines: number;
	unchangedLines: number;
	totalLines: number;
	similarity: number;
	hunkCount: number;
	hasChanges: boolean;
}

export interface TextDiffStats {
	addedLines: number;
	removedLines: number;
	unchangedLines: number;
	totalLines: number;
	similarity: number;
	hunkCount: number;
}

const DEFAULT_OPTIONS: TextDiffOptions = {
	ignoreWhitespace: false,
	ignoreCase: false,
	ignoreEmptyLines: false,
	contextLines: 3,
	showInline: false,
	algorithm: 'myers'
};

export function diffTexts(
	left: string,
	right: string,
	options: Partial<TextDiffOptions> = {}
): TextDiffResult {
	const opts: TextDiffOptions = {
		algorithm: 'myers',
		contextLines: 3,
		showInline: true,
		ignoreWhitespace: false,
		ignoreCase: false,
		ignoreEmptyLines: false,
		...options
	};

	// Preprocess inputs based on options
	const processedLeft = preprocessText(left, opts);
	const processedRight = preprocessText(right, opts);

	const leftLines = processedLeft.split('\n');
	const rightLines = processedRight.split('\n');

	let hunks: TextDiffHunk[] = [];

	// Choose algorithm based on options
	switch (opts.algorithm.toLowerCase()) {
		case 'patience':
			hunks = patienceDiff(leftLines, rightLines, opts);
			break;
		case 'histogram':
			// Histogram is similar to patience, fall back to patience
			hunks = patienceDiff(leftLines, rightLines, opts);
			break;
		default:
			hunks = myersDiff(leftLines, rightLines, opts);
			break;
	}

	// Calculate statistics
	const stats = calculateStats(hunks, leftLines.length, rightLines.length);

	return {
		hunks,
		addedLines: stats.addedLines,
		removedLines: stats.removedLines,
		unchangedLines: stats.unchangedLines,
		totalLines: stats.totalLines,
		similarity: stats.similarity,
		hunkCount: stats.hunkCount,
		hasChanges: stats.addedLines > 0 || stats.removedLines > 0
	};
}

function preprocessText(text: string, options: TextDiffOptions): string {
	let processed = text;

	if (options.ignoreWhitespace) {
		processed = processed.replace(/\s+/g, ' ').trim();
	}

	if (options.ignoreEmptyLines) {
		processed = processed.replace(/^\s*\n/gm, '');
	}

	return processed;
}

function myersDiff(
	leftLines: string[],
	rightLines: string[],
	options: TextDiffOptions
): TextDiffHunk[] {
	const N = leftLines.length;
	const M = rightLines.length;

	// Handle edge cases
	if (N === 0 && M === 0) return [];
	if (N === 0) {
		// All lines added
		return [
			{
				oldStart: 0,
				oldLines: 0,
				newStart: 1,
				newLines: M,
				section: '',
				lines: rightLines.map((line, i) => ({
					value: line,
					type: 'added' as const,
					rightLineNumber: i + 1
				}))
			}
		];
	}
	if (M === 0) {
		// All lines removed
		return [
			{
				oldStart: 1,
				oldLines: N,
				newStart: 0,
				newLines: 0,
				section: '',
				lines: leftLines.map((line, i) => ({
					value: line,
					type: 'removed' as const,
					leftLineNumber: i + 1
				}))
			}
		];
	}

	const MAX = N + M;
	const trace: Array<Map<number, number>> = [];
	const V = new Map<number, number>();
	V.set(1, 0);

	for (let D = 0; D <= MAX; D++) {
		trace.push(new Map(V));

		for (let k = -D; k <= D; k += 2) {
			let x: number;
			if (k === -D || (k !== D && (V.get(k - 1) ?? 0) < (V.get(k + 1) ?? 0))) {
				x = V.get(k + 1) ?? 0;
			} else {
				x = (V.get(k - 1) ?? 0) + 1;
			}

			let y = x - k;

			while (x < N && y < M && linesEqual(leftLines[x], rightLines[y], options)) {
				x++;
				y++;
			}

			V.set(k, x);

			if (x >= N && y >= M) {
				// Found the path, backtrack to build the diff
				return backtrack(trace, N, M, leftLines, rightLines, options);
			}
		}
	}

	// Should never reach here
	return [];
}

function backtrack(
	trace: Array<Map<number, number>>,
	N: number,
	M: number,
	leftLines: string[],
	rightLines: string[],
	options: TextDiffOptions
): TextDiffHunk[] {
	const hunks: TextDiffHunk[] = [];
	let x = N;
	let y = M;

	for (let D = trace.length - 1; D > 0; D--) {
		const V = trace[D];
		const prevV = trace[D - 1];

		const k = x - y;

		let prevK: number;
		if (k === -D || (k !== D && (prevV.get(k - 1) ?? 0) < (prevV.get(k + 1) ?? 0))) {
			prevK = k + 1;
		} else {
			prevK = k - 1;
		}

		const prevX = prevV.get(prevK) ?? 0;
		const prevY = prevX - prevK;

		// Handle diagonal moves (unchanged lines)
		while (x > prevX && y > prevY) {
			x--;
			y--;
		}

		// Record the diff
		if (x === prevX && y !== prevY) {
			// Added lines
			const addedLines = [];
			for (let i = prevY; i < y; i++) {
				addedLines.push({
					value: rightLines[i],
					type: 'added' as const,
					rightLineNumber: i + 1
				});
			}
			if (addedLines.length > 0) {
				hunks.unshift({
					oldStart: prevX + 1,
					oldLines: 0,
					newStart: prevY + 1,
					newLines: addedLines.length,
					section: '',
					lines: addedLines
				});
			}
		} else if (x !== prevX && y === prevY) {
			// Removed lines
			const removedLines = [];
			for (let i = prevX; i < x; i++) {
				removedLines.push({
					value: leftLines[i],
					type: 'removed' as const,
					leftLineNumber: i + 1
				});
			}
			if (removedLines.length > 0) {
				hunks.unshift({
					oldStart: prevX + 1,
					oldLines: removedLines.length,
					newStart: prevY + 1,
					newLines: 0,
					section: '',
					lines: removedLines
				});
			}
		}

		x = prevX;
		y = prevY;
	}

	// Merge adjacent hunks
	return mergeHunks(hunks);
}

function mergeHunks(hunks: TextDiffHunk[]): TextDiffHunk[] {
	if (hunks.length <= 1) return hunks;

	const merged: TextDiffHunk[] = [];
	let current = hunks[0];

	for (let i = 1; i < hunks.length; i++) {
		const next = hunks[i];

		// Check if hunks are adjacent
		if (
			current.oldStart + current.oldLines === next.oldStart &&
			current.newStart + current.newLines === next.newStart
		) {
			// Merge them
			current = {
				oldStart: current.oldStart,
				oldLines: current.oldLines + next.oldLines,
				newStart: current.newStart,
				newLines: current.newLines + next.newLines,
				section: next.section || current.section,
				lines: [...current.lines, ...next.lines]
			};
		} else {
			merged.push(current);
			current = next;
		}
	}

	merged.push(current);
	return merged;
}

function patienceDiff(
	leftLines: string[],
	rightLines: string[],
	options: TextDiffOptions
): TextDiffHunk[] {
	// Simplified patience diff implementation
	// Find unique lines that appear in both texts
	const leftUnique = new Map<string, number[]>();
	const rightUnique = new Map<string, number[]>();

	leftLines.forEach((line, i) => {
		if (!leftUnique.has(line)) leftUnique.set(line, []);
		leftUnique.get(line)!.push(i);
	});

	rightLines.forEach((line, i) => {
		if (!rightUnique.has(line)) rightUnique.set(line, []);
		rightUnique.get(line)!.push(i);
	});

	// Find common unique lines
	const common: Array<{ leftIdx: number; rightIdx: number; line: string }> = [];
	leftUnique.forEach((indices, line) => {
		if (indices.length === 1 && rightUnique.has(line) && rightUnique.get(line)!.length === 1) {
			common.push({
				leftIdx: indices[0],
				rightIdx: rightUnique.get(line)![0],
				line
			});
		}
	});

	// Sort by position
	common.sort((a, b) => a.leftIdx - b.leftIdx);

	// Build hunks from common lines
	const hunks: TextDiffHunk[] = [];
	let lastLeftIdx = -1;
	let lastRightIdx = -1;

	common.forEach(({ leftIdx, rightIdx, line }) => {
		if (leftIdx > lastLeftIdx + 1 || rightIdx > lastRightIdx + 1) {
			// There's a diff between the last common line and this one
			const hunk = createHunk(
				lastLeftIdx + 1,
				leftIdx - lastLeftIdx - 1,
				lastRightIdx + 1,
				rightIdx - lastRightIdx - 1,
				leftLines,
				rightLines,
				options
			);
			if (hunk) hunks.push(hunk);
		}

		// Add the unchanged line
		if (!hunks.length || hunks[hunks.length - 1].lines.length > 0) {
			if (hunks.length === 0) {
				hunks.push({
					oldStart: leftIdx + 1,
					oldLines: 0,
					newStart: rightIdx + 1,
					newLines: 0,
					section: '',
					lines: []
				});
			}

			const lastHunk = hunks[hunks.length - 1];
			if (
				lastHunk.lines.length === 0 ||
				lastHunk.lines[lastHunk.lines.length - 1].type !== 'unchanged'
			) {
				lastHunk.lines.push({
					value: line,
					type: 'unchanged',
					leftLineNumber: leftIdx + 1,
					rightLineNumber: rightIdx + 1
				});
			}
		}

		lastLeftIdx = leftIdx;
		lastRightIdx = rightIdx;
	});

	// Handle tail
	if (lastLeftIdx < leftLines.length - 1 || lastRightIdx < rightLines.length - 1) {
		const hunk = createHunk(
			lastLeftIdx + 1,
			leftLines.length - lastLeftIdx - 1,
			lastRightIdx + 1,
			rightLines.length - lastRightIdx - 1,
			leftLines,
			rightLines,
			options
		);
		if (hunk) hunks.push(hunk);
	}

	return hunks;
}

function createHunk(
	oldStart: number,
	oldLines: number,
	newStart: number,
	newLines: number,
	leftLines: string[],
	rightLines: string[],
	options: TextDiffOptions
): TextDiffHunk | null {
	if (oldLines === 0 && newLines === 0) return null;

	const lines: TextDiffLine[] = [];

	// Add removed lines
	for (let i = 0; i < oldLines; i++) {
		const line = leftLines[oldStart + i];
		lines.push({
			value: line,
			type: 'removed',
			leftLineNumber: oldStart + i + 1
		});
	}

	// Add added lines
	for (let i = 0; i < newLines; i++) {
		const line = rightLines[newStart + i];
		lines.push({
			value: line,
			type: 'added',
			rightLineNumber: newStart + i + 1
		});
	}

	// Add inline word diff if enabled
	if (options.showInline) {
		lines.forEach((line) => {
			if (line.type === 'added' || line.type === 'removed') {
				line.changes = calculateWordChanges(line.value);
			}
		});
	}

	return {
		oldStart: oldStart + 1,
		oldLines,
		newStart: newStart + 1,
		newLines,
		section: '',
		lines
	};
}

function shouldStartNewHunk(
	current: { x: number; y: number },
	next: { x: number; y: number } | undefined,
	contextLines: number
): boolean {
	if (!next) return true;
	const gap = Math.abs(next.x - current.x) - Math.abs(next.y - current.y);
	return gap > contextLines * 2;
}

function generateSectionHeader(hunk: TextDiffHunk): string {
	const unchangedLines = hunk.lines.filter((l) => l.type === 'unchanged').length;
	if (unchangedLines > 0) {
		const firstUnchanged = hunk.lines.find((l) => l.type === 'unchanged');
		if (firstUnchanged) {
			return firstUnchanged.value.substring(0, 80);
		}
	}
	return '';
}

function calculateWordChanges(
	line: string
): Array<{ start: number; end: number; type: 'added' | 'removed' }> {
	// Simple word-level diff implementation
	// In a real implementation, you'd use a more sophisticated algorithm
	const words = line.split(/(\s+)/);
	const changes: Array<{ start: number; end: number; type: 'added' | 'removed' }> = [];
	let offset = 0;

	words.forEach((word) => {
		if (word.trim()) {
			changes.push({
				start: offset,
				end: offset + word.length,
				type: Math.random() > 0.5 ? 'added' : 'removed' // Placeholder
			});
		}
		offset += word.length;
	});

	return changes;
}

function linesEqual(left: string, right: string, options: TextDiffOptions): boolean {
	if (options.ignoreCase) {
		left = left.toLowerCase();
		right = right.toLowerCase();
	}
	if (options.ignoreWhitespace) {
		left = left.replace(/\s+/g, ' ').trim();
		right = right.replace(/\s+/g, ' ').trim();
	}
	return left === right;
}

export function calculateStats(
	hunks: TextDiffHunk[],
	totalLeftLines: number,
	totalRightLines: number
): TextDiffStats {
	let addedLines = 0;
	let removedLines = 0;
	let unchangedLines = 0;

	for (const hunk of hunks) {
		for (const line of hunk.lines) {
			if (line.type === 'added') {
				addedLines++;
			} else if (line.type === 'removed') {
				removedLines++;
			} else if (line.type === 'unchanged') {
				unchangedLines++;
			}
		}
	}

	const maxLines = Math.max(totalLeftLines, totalRightLines);
	const similarity =
		maxLines > 0 ? ((maxLines - (addedLines + removedLines)) / maxLines) * 100 : 100;

	return {
		addedLines,
		removedLines,
		unchangedLines,
		totalLines: maxLines,
		similarity: Math.round(similarity * 100) / 100,
		hunkCount: hunks.length
	};
}

export function generateUnifiedDiff(
	left: string,
	right: string,
	leftPath = 'a/file.txt',
	rightPath = 'b/file.txt',
	options: Partial<TextDiffOptions> = {}
): string {
	const result = diffTexts(left, right, options);
	const timestamp = new Date().toISOString();
	let output = `--- ${leftPath}\t${timestamp}\n`;
	output += `+++ ${rightPath}\t${timestamp}\n`;

	result.hunks.forEach((hunk) => {
		output += `@@ -${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines} @@\n`;
		if (hunk.section) {
			output += ` ${hunk.section}\n`;
		}
		hunk.lines.forEach((line) => {
			const prefix = line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' ';
			output += `${prefix}${line.value}\n`;
		});
	});

	return output;
}

export function generateSideBySideDiff(
	left: string,
	right: string,
	options: Partial<TextDiffOptions> = {}
): { left: string[]; right: string[] } {
	const result = diffTexts(left, right, options);
	const leftOutput: string[] = [];
	const rightOutput: string[] = [];

	result.hunks.forEach((hunk) => {
		hunk.lines.forEach((line) => {
			switch (line.type) {
				case 'unchanged':
					leftOutput.push(line.value);
					rightOutput.push(line.value);
					break;
				case 'removed':
					leftOutput.push(line.value);
					rightOutput.push('');
					break;
				case 'added':
					leftOutput.push('');
					rightOutput.push(line.value);
					break;
			}
		});
	});

	return { left: leftOutput, right: rightOutput };
}
