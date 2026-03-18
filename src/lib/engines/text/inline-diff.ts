import { diff_match_patch } from 'diff-match-patch';

export type InlineDiffType = 'added' | 'removed' | 'unchanged';

export interface InlineDiffPart {
	value: string;
	type: InlineDiffType;
}

const dmp = new diff_match_patch();

/**
 * Performs a diff between two strings.
 * Used for highlighting specific changes within a structural diff entry.
 */
export function computeInlineDiff(oldStr: string, newStr: string): InlineDiffPart[] {
	const diffs = dmp.diff_main(oldStr, newStr);
	dmp.diff_cleanupSemantic(diffs);

	const parts: InlineDiffPart[] = diffs.map(([op, text]) => {
		let type: InlineDiffType = 'unchanged';
		if (op === 1) type = 'added';
		if (op === -1) type = 'removed';
		return { value: text, type };
	});

	return mergeParts(parts);
}

function mergeParts(parts: InlineDiffPart[]): InlineDiffPart[] {
	if (parts.length <= 1) return parts;
	const result: InlineDiffPart[] = [];
	let current = { ...parts[0] };

	for (let i = 1; i < parts.length; i++) {
		if (parts[i].type === current.type) {
			current.value += parts[i].value;
		} else {
			result.push(current);
			current = { ...parts[i] };
		}
	}
	result.push(current);
	return result;
}
