import yaml from 'js-yaml';
import type { ConvertResult, FormatResult, ParseResult } from '../types.js';

export function parseYAML(input: string): ParseResult {
	try {
		const data = yaml.load(input);
		return { success: true, data };
	} catch (err) {
		const e = err as yaml.YAMLException;
		return {
			success: false,
			error: {
				message: e.message ?? 'Invalid YAML',
				line: e.mark?.line !== undefined ? e.mark.line + 1 : undefined,
				column: e.mark?.column !== undefined ? e.mark.column + 1 : undefined
			}
		};
	}
}

export function formatYAML(input: string): FormatResult {
	try {
		const data = yaml.load(input);
		const output = yaml.dump(data, {
			indent: 2,
			lineWidth: 120,
			noRefs: true,
			sortKeys: false
		});
		return { success: true, output };
	} catch (err) {
		const e = err as yaml.YAMLException;
		return {
			success: false,
			error: {
				message: e.message ?? 'Invalid YAML',
				line: e.mark?.line !== undefined ? e.mark.line + 1 : undefined,
				column: e.mark?.column !== undefined ? e.mark.column + 1 : undefined
			}
		};
	}
}

export function yamlToJSON(input: string): ConvertResult {
	try {
		const data = yaml.load(input);
		const output = JSON.stringify(data, null, 2);
		return { success: true, output };
	} catch (err) {
		const e = err as yaml.YAMLException;
		return {
			success: false,
			error: {
				message: e.message ?? 'Invalid YAML',
				line: e.mark?.line !== undefined ? e.mark.line + 1 : undefined,
				column: e.mark?.column !== undefined ? e.mark.column + 1 : undefined
			}
		};
	}
}

export function jsonToYAML(input: string): ConvertResult {
	try {
		const data = JSON.parse(input);
		const output = yaml.dump(data, {
			indent: 2,
			lineWidth: 120,
			noRefs: true,
			sortKeys: false
		});
		return { success: true, output };
	} catch (err) {
		const e = err as Error;
		return {
			success: false,
			error: { message: e.message ?? 'Invalid JSON' }
		};
	}
}
