import { computeStructuredDiff, type DiffOptions, type DiffResult } from './json-diff.js';

async function parseYamlDocuments(input: string): Promise<unknown> {
	const yaml = await import('js-yaml');
	const documents: unknown[] = [];

	yaml.loadAll(input, (document: unknown) => {
		documents.push(document);
	});

	return documents.length <= 1 ? (documents[0] ?? null) : documents;
}

export async function computeYAMLDiff(
	left: string,
	right: string,
	options: DiffOptions
): Promise<DiffResult> {
	let leftData: unknown;
	let rightData: unknown;

	try {
		leftData = await parseYamlDocuments(left);
	} catch {
		return { entries: [], error: 'Invalid YAML in left (Original) input' };
	}

	try {
		rightData = await parseYamlDocuments(right);
	} catch {
		return { entries: [], error: 'Invalid YAML in right (Modified) input' };
	}

	return computeStructuredDiff(leftData, rightData, options);
}
