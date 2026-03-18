import {
	type TextDiffOptions,
	diffTexts,
	generateSideBySideDiff,
	generateUnifiedDiff
} from '$lib/engines/text/diff.js';
import { describe, expect, it } from 'vitest';

describe('Text Diff Engine - Core Tests', () => {
	it('should handle empty inputs', () => {
		const result = diffTexts('', '');
		expect(result.hunks).toHaveLength(0);
		expect(result.hasChanges).toBe(false);
		expect(result.addedLines).toBe(0);
		expect(result.removedLines).toBe(0);
	});

	it('should detect added lines', () => {
		const left = 'line 1\nline 2';
		const right = 'line 1\nline 2\nline 3';
		const result = diffTexts(left, right);

		expect(result.hasChanges).toBe(true);
		expect(result.addedLines).toBe(1);
		expect(result.removedLines).toBe(0);
	});

	it('should detect removed lines', () => {
		const left = 'line 1\nline 2\nline 3';
		const right = 'line 1\nline 2';
		const result = diffTexts(left, right);

		expect(result.hasChanges).toBe(true);
		expect(result.addedLines).toBe(0);
		expect(result.removedLines).toBe(1);
	});

	it('should detect modified lines', () => {
		const left = 'line 1\nold line\nline 3';
		const right = 'line 1\nnew line\nline 3';
		const result = diffTexts(left, right);

		expect(result.hasChanges).toBe(true);
		expect(result.addedLines).toBe(1);
		expect(result.removedLines).toBe(1);
	});

	it('should respect ignoreWhitespace option', () => {
		const left = 'line 1\nline 2 ';
		const right = 'line 1\nline 2';
		const options = { ignoreWhitespace: true } as TextDiffOptions;
		const result = diffTexts(left, right, options);

		expect(result.hasChanges).toBe(false);
		expect(result.addedLines).toBe(0);
		expect(result.removedLines).toBe(0);
	});

	it('should respect ignoreCase option', () => {
		const left = 'Line 1\nLINE 2';
		const right = 'line 1\nline 2';
		const options = { ignoreCase: true } as TextDiffOptions;
		const result = diffTexts(left, right, options);

		expect(result.hasChanges).toBe(false);
	});

	it('should generate unified diff format', () => {
		const left = 'line 1\nline 2\nline 3';
		const right = 'line 1\nmodified line\nline 3\nline 4';
		const result = generateUnifiedDiff(left, right);

		expect(result).toContain('--- a/file.txt');
		expect(result).toContain('+++ b/file.txt');
		expect(result).toContain('@@');
	});

	it('should generate side-by-side diff', () => {
		const left = 'line 1\nline 2\nline 3';
		const right = 'line 1\nmodified line\nline 3';
		const result = generateSideBySideDiff(left, right);

		expect(result.left.length).toBeGreaterThan(0);
		expect(result.right.length).toBeGreaterThan(0);
	});

	it('should support patience algorithm', () => {
		const left = 'a\nb\nc\nd\ne';
		const right = 'a\nx\nc\ny\ne';
		const options = { algorithm: 'patience' } as TextDiffOptions;
		const result = diffTexts(left, right, options);

		expect(result.hunks.length).toBeGreaterThan(0);
	});
});
