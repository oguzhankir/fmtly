import { parseJSON } from './parser.js';
import type { ParseError } from './types.js';

export type ValidationResult = {
	valid: boolean;
	error?: ParseError;
};

export function validateJSON(input: string): ValidationResult {
	if (!input.trim()) {
		return { valid: false, error: undefined };
	}

	const result = parseJSON(input);

	if (result.success) {
		return { valid: true };
	}

	return { valid: false, error: result.error };
}
