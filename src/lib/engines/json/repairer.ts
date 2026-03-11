import type { RepairResult } from './types.js';

let jsonRepairModule: typeof import('jsonrepair') | undefined;

async function getJsonRepair(): Promise<typeof import('jsonrepair')> {
	if (!jsonRepairModule) {
		jsonRepairModule = await import('jsonrepair');
	}

	return jsonRepairModule;
}

export async function repairJSON(input: string): Promise<RepairResult> {
	if (!input.trim()) {
		return {
			success: false,
			error: {
				message: 'Empty input',
				line: 1,
				column: 1,
				position: 0,
				plainLanguageExplanation: 'The input is empty. Paste or type some JSON to repair.'
			}
		};
	}

	try {
		const { jsonrepair } = await getJsonRepair();
		const repaired = jsonrepair(input);
		const changes = detectChanges(input, repaired);

		return {
			success: true,
			output: repaired,
			changes
		};
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Repair failed';
		return {
			success: false,
			error: {
				message,
				line: 1,
				column: 1,
				position: 0,
				plainLanguageExplanation: `Could not repair the JSON: ${message}`
			}
		};
	}
}

function detectChanges(original: string, repaired: string): string[] {
	const changes: string[] = [];

	if (original === repaired) {
		changes.push('No changes needed — JSON is already valid');
		return changes;
	}

	if (/'/g.test(original) && !/'/.test(repaired)) {
		changes.push('Replaced single quotes with double quotes');
	}

	if (/,\s*[}\]]/g.test(original) && !/,\s*[}\]]/.test(repaired)) {
		changes.push('Removed trailing commas');
	}

	if (/\/\/.*$/m.test(original) || /\/\*[\s\S]*?\*\//.test(original)) {
		changes.push('Removed comments');
	}

	const unmatchedBrackets =
		(original.match(/\[/g)?.length ?? 0) !== (original.match(/\]/g)?.length ?? 0);
	const unmatchedBraces =
		(original.match(/\{/g)?.length ?? 0) !== (original.match(/\}/g)?.length ?? 0);

	if (unmatchedBrackets) {
		changes.push('Fixed unmatched brackets');
	}
	if (unmatchedBraces) {
		changes.push('Fixed unmatched braces');
	}

	if (changes.length === 0) {
		changes.push('Applied automatic repairs');
	}

	return changes;
}
