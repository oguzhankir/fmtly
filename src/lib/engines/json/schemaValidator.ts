import type { AnySchema } from 'ajv';
import { parseJSON } from './parser.js';
import type { ParseError, SourceMap } from './types.js';

export type SchemaValidationIssue = {
	keyword: string;
	instancePath: string;
	schemaPath: string;
	message: string;
	line: number;
	column: number;
};

export type SchemaValidationResult =
	| {
			success: true;
			valid: boolean;
			issues: SchemaValidationIssue[];
			schemaError: null;
			dataError: null;
	  }
	| {
			success: false;
			valid: false;
			issues: [];
			schemaError: ParseError | Error | null;
			dataError: ParseError | null;
	  };

function getPointerLocation(
	sourceMap: SourceMap,
	pointer: string
): { line: number; column: number } {
	const normalizedPointer = pointer || '/';
	const entry = sourceMap[normalizedPointer] ?? sourceMap['/'];
	const target = entry?.value ?? entry?.key;
	if (!target) {
		return { line: 1, column: 1 };
	}
	return {
		line: target.line + 1,
		column: target.column + 1
	};
}

export async function validateJsonSchema(
	jsonInput: string,
	schemaInput: string
): Promise<SchemaValidationResult> {
	const parsedData = parseJSON(jsonInput);
	if (!parsedData.success) {
		return {
			success: false,
			valid: false,
			issues: [],
			schemaError: null,
			dataError: parsedData.error
		};
	}

	const parsedSchema = parseJSON(schemaInput);
	if (!parsedSchema.success) {
		return {
			success: false,
			valid: false,
			issues: [],
			schemaError: parsedSchema.error,
			dataError: null
		};
	}

	try {
		const [{ default: Ajv }, { default: addFormats }] = await Promise.all([
			import('ajv'),
			import('ajv-formats')
		]);
		const ajv = new Ajv({ allErrors: true, strict: false, allowUnionTypes: true });
		addFormats(ajv);
		const validate = ajv.compile(parsedSchema.data as AnySchema);
		const valid = validate(parsedData.data);
		if (valid || !validate.errors || validate.errors.length === 0) {
			return {
				success: true,
				valid: true,
				issues: [],
				schemaError: null,
				dataError: null
			};
		}

		return {
			success: true,
			valid: false,
			issues: validate.errors.map((issue) => {
				const location = getPointerLocation(parsedData.sourceMap, issue.instancePath);
				return {
					keyword: issue.keyword,
					instancePath: issue.instancePath || '/',
					schemaPath: issue.schemaPath,
					message: issue.message ?? 'Schema validation failed',
					line: location.line,
					column: location.column
				};
			}),
			schemaError: null,
			dataError: null
		};
	} catch (error) {
		return {
			success: false,
			valid: false,
			issues: [],
			schemaError: error instanceof Error ? error : new Error('Schema validation failed'),
			dataError: null
		};
	}
}
