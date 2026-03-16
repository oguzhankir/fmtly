import { type DiffOptions, type DiffResult, computeStructuredDiff } from '../json/diff.js';

async function parseToml(input: string): Promise<unknown> {
	const { parse } = await import('smol-toml');
	return parse(input);
}

export async function computeTOMLDiff(
	left: string,
	right: string,
	options: DiffOptions
): Promise<DiffResult> {
	let leftData: unknown;
	let rightData: unknown;

	try {
		leftData = await parseToml(left);
	} catch {
		return { entries: [], error: 'Invalid TOML in left (Original) input' };
	}

	try {
		rightData = await parseToml(right);
	} catch {
		return { entries: [], error: 'Invalid TOML in right (Modified) input' };
	}

	return computeStructuredDiff(leftData, rightData, options);
}
