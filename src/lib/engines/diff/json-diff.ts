export type DiffType = 'added' | 'removed' | 'modified' | 'unchanged';

export type DiffEntry = {
	path: string;
	type: DiffType;
	leftValue: unknown;
	rightValue: unknown;
};

export type DiffOptions = {
	ignoreArrayOrder: boolean;
	ignoreWhitespace: boolean;
};

export type DiffResult = {
	entries: DiffEntry[];
	error: string | null;
};

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

function compareValues(a: unknown, b: unknown, ignoreArrayOrder: boolean): boolean {
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
		return a.every((item, i) => compareValues(item, b[i], ignoreArrayOrder));
	}

	if (Array.isArray(a) || Array.isArray(b)) return false;

	const objA = a as Record<string, unknown>;
	const objB = b as Record<string, unknown>;
	const keysA = Object.keys(objA).sort();
	const keysB = Object.keys(objB).sort();
	if (keysA.length !== keysB.length) return false;
	return keysA.every(
		(key, i) => key === keysB[i] && compareValues(objA[key], objB[key], ignoreArrayOrder)
	);
}

function diffRecursive(
	left: unknown,
	right: unknown,
	path: string,
	entries: DiffEntry[],
	ignoreArrayOrder: boolean
): void {
	if (compareValues(left, right, ignoreArrayOrder)) {
		entries.push({ path, type: 'unchanged', leftValue: left, rightValue: right });
		return;
	}

	const leftIsObj = left !== null && typeof left === 'object' && !Array.isArray(left);
	const rightIsObj = right !== null && typeof right === 'object' && !Array.isArray(right);

	if (leftIsObj && rightIsObj) {
		const objL = left as Record<string, unknown>;
		const objR = right as Record<string, unknown>;
		const allKeys = new Set([...Object.keys(objL), ...Object.keys(objR)]);
		for (const key of [...allKeys].sort()) {
			const childPath = path ? `${path}.${key}` : key;
			const inLeft = key in objL;
			const inRight = key in objR;
			if (inLeft && inRight) {
				diffRecursive(objL[key], objR[key], childPath, entries, ignoreArrayOrder);
			} else if (inLeft) {
				entries.push({
					path: childPath,
					type: 'removed',
					leftValue: objL[key],
					rightValue: undefined
				});
			} else {
				entries.push({
					path: childPath,
					type: 'added',
					leftValue: undefined,
					rightValue: objR[key]
				});
			}
		}
		return;
	}

	const leftIsArr = Array.isArray(left);
	const rightIsArr = Array.isArray(right);

	if (leftIsArr && rightIsArr) {
		const arrL = left as unknown[];
		const arrR = right as unknown[];
		const maxLen = Math.max(arrL.length, arrR.length);
		for (let i = 0; i < maxLen; i++) {
			const childPath = `${path}[${i}]`;
			if (i < arrL.length && i < arrR.length) {
				diffRecursive(arrL[i], arrR[i], childPath, entries, ignoreArrayOrder);
			} else if (i < arrL.length) {
				entries.push({
					path: childPath,
					type: 'removed',
					leftValue: arrL[i],
					rightValue: undefined
				});
			} else {
				entries.push({ path: childPath, type: 'added', leftValue: undefined, rightValue: arrR[i] });
			}
		}
		return;
	}

	entries.push({ path, type: 'modified', leftValue: left, rightValue: right });
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

	const entries: DiffEntry[] = [];
	diffRecursive(leftData, rightData, '', entries, options.ignoreArrayOrder);
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
