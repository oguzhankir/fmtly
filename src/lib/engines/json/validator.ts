import { parseJSON } from './parser.js';
import type { ParseError } from './types.js';

export type ValidationIssue = ParseError & {
	code: 'syntax_error';
	source: 'syntax';
	severity: 'error';
};

export type ValidationResult = {
	valid: boolean;
	errors: ValidationIssue[];
	summary: string;
	error?: ParseError;
};

export function validateJSON(input: string): ValidationResult {
	if (!input.trim()) {
		return {
			valid: false,
			errors: [],
			error: undefined,
			summary: 'Paste JSON to validate'
		};
	}

	const result = parseJSON(input);

	if (result.success) {
		return {
			valid: true,
			errors: [],
			summary: 'JSON is valid'
		};
	}

	const issue: ValidationIssue = {
		...result.error,
		code: 'syntax_error',
		source: 'syntax',
		severity: 'error'
	};

	return {
		valid: false,
		errors: [issue],
		error: result.error,
		summary: `Syntax error at line ${result.error.line}, column ${result.error.column}`
	};
}
