export type DiffType = 'added' | 'removed' | 'modified' | 'unchanged';

export type DiffEntry = {
	path: string;
	type: DiffType;
	leftValue: unknown;
	rightValue: unknown;
	leftType: string | null;
	rightType: string | null;
};

export type DiffOptions = {
	ignoreArrayOrder: boolean;
	ignoreWhitespace: boolean;
	ignoreKeys: string[];
	caseSensitive: boolean;
};

export type DiffResult = {
	entries: DiffEntry[];
	error: string | null;
};

export type DiffSummary = {
	added: number;
	removed: number;
	modified: number;
	unchanged: number;
	total: number;
	touchedPaths: string[];
	similarityScore: number;
};

function getType(value: unknown): string {
	if (value === null) return 'null';
	if (Array.isArray(value)) return 'array';
	return typeof value;
}

function sortValue(value: unknown): unknown {
	if (value === null || typeof value !== 'object') return value;
	if (Array.isArray(value)) {
		return value.map(sortValue).sort((a, b) => {
			const sa = JSON.stringify(a);
			const sb = JSON.stringify(b);
			if (sa < sb) return -1;
			if (sa > sb) return 1;
			return 0;
		});
	}
	const sorted: Record<string, unknown> = {};
	for (const key of Object.keys(value as Record<string, unknown>).sort()) {
		sorted[key] = sortValue((value as Record<string, unknown>)[key]);
	}
	return sorted;
}

function compareValues(
	a: unknown,
	b: unknown,
	ignoreArrayOrder: boolean,
	caseSensitive: boolean
): boolean {
	if (typeof a === 'string' && typeof b === 'string') {
		const sa = caseSensitive ? a : a.toLowerCase();
		const sb = caseSensitive ? b : b.toLowerCase();
		return sa === sb;
	}
	if (a === b) return true;
	if (a === null || b === null) return a === b;
	if (typeof a !== typeof b) return false;
	if (typeof a !== 'object') return a === b;

	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false;
		if (ignoreArrayOrder) {
			const sortedA = sortValue(a);
			const sortedB = sortValue(b);
			return JSON.stringify(sortedA) === JSON.stringify(sortedB);
		}
		return a.every((item, i) => compareValues(item, b[i], ignoreArrayOrder, caseSensitive));
	}

	if (Array.isArray(a) || Array.isArray(b)) return false;

	const objA = a as Record<string, unknown>;
	const objB = b as Record<string, unknown>;
	const keysA = Object.keys(objA).sort();
	const keysB = Object.keys(objB).sort();
	if (keysA.length !== keysB.length) return false;
	return keysA.every(
		(key, i) =>
			key === keysB[i] && compareValues(objA[key], objB[key], ignoreArrayOrder, caseSensitive)
	);
}

function lcsArrayDiff(
	arrL: unknown[],
	arrR: unknown[],
	path: string,
	entries: DiffEntry[],
	options: DiffOptions
): void {
	const n = arrL.length;
	const m = arrR.length;

	if (n * m > 90000) {
		const maxLen = Math.max(n, m);
		for (let i = 0; i < maxLen; i++) {
			const childPath = `${path}[${i}]`;
			if (i < n && i < m) {
				diffRecursive(arrL[i], arrR[i], childPath, entries, options);
			} else if (i < n) {
				entries.push({
					path: childPath,
					type: 'removed',
					leftValue: arrL[i],
					rightValue: undefined,
					leftType: getType(arrL[i]),
					rightType: null
				});
			} else {
				entries.push({
					path: childPath,
					type: 'added',
					leftValue: undefined,
					rightValue: arrR[i],
					leftType: null,
					rightType: getType(arrR[i])
				});
			}
		}
		return;
	}

	const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= m; j++) {
			if (
				compareValues(arrL[i - 1], arrR[j - 1], options.ignoreArrayOrder, options.caseSensitive)
			) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}

	type LcsOp =
		| { kind: 'keep'; li: number; ri: number }
		| { kind: 'remove'; li: number }
		| { kind: 'add'; ri: number };
	const ops: LcsOp[] = [];
	let i = n;
	let j = m;
	while (i > 0 || j > 0) {
		if (
			i > 0 &&
			j > 0 &&
			compareValues(arrL[i - 1], arrR[j - 1], options.ignoreArrayOrder, options.caseSensitive)
		) {
			ops.unshift({ kind: 'keep', li: i - 1, ri: j - 1 });
			i--;
			j--;
		} else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
			ops.unshift({ kind: 'add', ri: j - 1 });
			j--;
		} else {
			ops.unshift({ kind: 'remove', li: i - 1 });
			i--;
		}
	}

	let outIdx = 0;
	for (const op of ops) {
		if (op.kind === 'keep') {
			const childPath = `${path}[${op.ri}]`;
			diffRecursive(arrL[op.li], arrR[op.ri], childPath, entries, options);
			outIdx++;
		} else if (op.kind === 'add') {
			const childPath = `${path}[${op.ri}]`;
			entries.push({
				path: childPath,
				type: 'added',
				leftValue: undefined,
				rightValue: arrR[op.ri],
				leftType: null,
				rightType: getType(arrR[op.ri])
			});
			outIdx++;
		} else {
			entries.push({
				path: `${path}[${op.li}]`,
				type: 'removed',
				leftValue: arrL[op.li],
				rightValue: undefined,
				leftType: getType(arrL[op.li]),
				rightType: null
			});
		}
	}
}

function diffRecursive(
	left: unknown,
	right: unknown,
	path: string,
	entries: DiffEntry[],
	options: DiffOptions
): void {
	if (compareValues(left, right, options.ignoreArrayOrder, options.caseSensitive)) {
		entries.push({
			path,
			type: 'unchanged',
			leftValue: left,
			rightValue: right,
			leftType: getType(left),
			rightType: getType(right)
		});
		return;
	}

	const leftIsObj = left !== null && typeof left === 'object' && !Array.isArray(left);
	const rightIsObj = right !== null && typeof right === 'object' && !Array.isArray(right);

	if (leftIsObj && rightIsObj) {
		const objL = left as Record<string, unknown>;
		const objR = right as Record<string, unknown>;
		const allKeys = new Set([...Object.keys(objL), ...Object.keys(objR)]);
		for (const key of [...allKeys].sort()) {
			if (options.ignoreKeys.includes(key)) continue;
			const childPath = path ? `${path}.${key}` : key;
			const inLeft = key in objL;
			const inRight = key in objR;
			if (inLeft && inRight) {
				diffRecursive(objL[key], objR[key], childPath, entries, options);
			} else if (inLeft) {
				entries.push({
					path: childPath,
					type: 'removed',
					leftValue: objL[key],
					rightValue: undefined,
					leftType: getType(objL[key]),
					rightType: null
				});
			} else {
				entries.push({
					path: childPath,
					type: 'added',
					leftValue: undefined,
					rightValue: objR[key],
					leftType: null,
					rightType: getType(objR[key])
				});
			}
		}
		return;
	}

	const leftIsArr = Array.isArray(left);
	const rightIsArr = Array.isArray(right);

	if (leftIsArr && rightIsArr) {
		if (options.ignoreArrayOrder) {
			const arrL = left as unknown[];
			const arrR = right as unknown[];
			const maxLen = Math.max(arrL.length, arrR.length);
			for (let idx = 0; idx < maxLen; idx++) {
				const childPath = `${path}[${idx}]`;
				if (idx < arrL.length && idx < arrR.length) {
					diffRecursive(arrL[idx], arrR[idx], childPath, entries, options);
				} else if (idx < arrL.length) {
					entries.push({
						path: childPath,
						type: 'removed',
						leftValue: arrL[idx],
						rightValue: undefined,
						leftType: getType(arrL[idx]),
						rightType: null
					});
				} else {
					entries.push({
						path: childPath,
						type: 'added',
						leftValue: undefined,
						rightValue: arrR[idx],
						leftType: null,
						rightType: getType(arrR[idx])
					});
				}
			}
		} else {
			lcsArrayDiff(left as unknown[], right as unknown[], path, entries, options);
		}
		return;
	}

	entries.push({
		path,
		type: 'modified',
		leftValue: left,
		rightValue: right,
		leftType: getType(left),
		rightType: getType(right)
	});
}

export function computeJSONDiff(left: string, right: string, options: DiffOptions): DiffResult {
	let leftData: unknown;
	let rightData: unknown;

	const leftTrimmed = options.ignoreWhitespace ? left.trim() : left;
	const rightTrimmed = options.ignoreWhitespace ? right.trim() : right;

	try {
		leftData = JSON.parse(leftTrimmed);
	} catch {
		return { entries: [], error: 'Invalid JSON in left (Original) input' };
	}

	try {
		rightData = JSON.parse(rightTrimmed);
	} catch {
		return { entries: [], error: 'Invalid JSON in right (Modified) input' };
	}

	return computeStructuredDiff(leftData, rightData, options);
}

export function computeStructuredDiff(
	leftData: unknown,
	rightData: unknown,
	options: DiffOptions
): DiffResult {
	const entries: DiffEntry[] = [];
	diffRecursive(leftData, rightData, '', entries, options);
	return { entries, error: null };
}

function pathToPointer(path: string): string {
	if (path === '') return '';
	const segments = path.replace(/\[(\d+)\]/g, '.$1').split('.');
	return `/${segments.map((s) => s.replace(/~/g, '~0').replace(/\//g, '~1')).join('/')}`;
}

export function toJSONPatch(entries: DiffEntry[]): object[] {
	const patch: object[] = [];
	for (const entry of entries) {
		if (entry.type === 'unchanged') continue;
		const pointer = pathToPointer(entry.path);

		switch (entry.type) {
			case 'added':
				patch.push({ op: 'add', path: pointer, value: entry.rightValue });
				break;
			case 'removed':
				patch.push({ op: 'remove', path: pointer });
				break;
			case 'modified':
				patch.push({ op: 'replace', path: pointer, value: entry.rightValue });
				break;
		}
	}
	return patch;
}

export function summarizeJSONDiff(entries: DiffEntry[]): DiffSummary {
	const summary: DiffSummary = {
		added: 0,
		removed: 0,
		modified: 0,
		unchanged: 0,
		total: entries.length,
		touchedPaths: [],
		similarityScore: 0
	};

	for (const entry of entries) {
		switch (entry.type) {
			case 'added':
				summary.added++;
				summary.touchedPaths.push(entry.path || '(root)');
				break;
			case 'removed':
				summary.removed++;
				summary.touchedPaths.push(entry.path || '(root)');
				break;
			case 'modified':
				summary.modified++;
				summary.touchedPaths.push(entry.path || '(root)');
				break;
			case 'unchanged':
				summary.unchanged++;
				break;
		}
	}

	summary.touchedPaths = Array.from(new Set(summary.touchedPaths));
	const changed = summary.added + summary.removed + summary.modified;
	summary.similarityScore =
		summary.total === 0 ? 100 : Math.round((summary.unchanged / summary.total) * 100);
	return summary;
}

export function toDiffMarkdown(entries: DiffEntry[]): string {
	const lines: string[] = ['# JSON Diff Report', ''];
	for (const entry of entries) {
		if (entry.type === 'unchanged') continue;
		const path = entry.path || '(root)';
		if (entry.type === 'added') {
			lines.push(`**+ Added** \`${path}\``);
			lines.push(`\`\`\`json\n${JSON.stringify(entry.rightValue, null, 2)}\n\`\`\``);
		} else if (entry.type === 'removed') {
			lines.push(`**- Removed** \`${path}\``);
			lines.push(`\`\`\`json\n${JSON.stringify(entry.leftValue, null, 2)}\n\`\`\``);
		} else if (entry.type === 'modified') {
			lines.push(`**~ Modified** \`${path}\``);
			lines.push(`Before: \`\`\`json\n${JSON.stringify(entry.leftValue, null, 2)}\n\`\`\``);
			lines.push(`After: \`\`\`json\n${JSON.stringify(entry.rightValue, null, 2)}\n\`\`\``);
		}
		lines.push('');
	}
	return lines.join('\n');
}

export function toDiffCSV(entries: DiffEntry[]): string {
	const rows: string[] = ['path,type,left_value,right_value'];
	for (const entry of entries) {
		if (entry.type === 'unchanged') continue;
		const escapeValue = (v: unknown) => {
			const s = v === undefined ? '' : JSON.stringify(v);
			return `"${s.replace(/"/g, '""')}"`;
		};
		rows.push(
			`${escapeValue(entry.path || '(root)')},${entry.type},${escapeValue(entry.leftValue)},${escapeValue(entry.rightValue)}`
		);
	}
	return rows.join('\n');
}
