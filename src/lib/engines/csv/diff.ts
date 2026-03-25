import { type DiffOptions, type DiffResult, computeStructuredDiff } from '../json/diff.js';

import { loadPapaParse } from './load-papa-parse.js';

export async function computeCSVDiff(
	left: string,
	right: string,
	options: DiffOptions
): Promise<DiffResult> {
	let leftData: unknown;
	let rightData: unknown;

	const papa = await loadPapaParse();

	try {
		const parsedLeft = papa.parse(left.trim(), { header: true, skipEmptyLines: true });
		if (parsedLeft.errors && parsedLeft.errors.length > 0) {
			// we can fallback to array based parsing if headers fail? Actually just use header:true
			// or just use natural structural array diff!
		}
		leftData = parsedLeft.data;
	} catch (e: any) {
		return { entries: [], error: 'Invalid CSV in left (Original) input' };
	}

	try {
		const parsedRight = papa.parse(right.trim(), { header: true, skipEmptyLines: true });
		rightData = parsedRight.data;
	} catch (e: any) {
		return { entries: [], error: 'Invalid CSV in right (Modified) input' };
	}

	return computeStructuredDiff(leftData, rightData, options);
}
