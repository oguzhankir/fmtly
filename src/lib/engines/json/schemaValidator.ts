import type { AnySchema, ErrorObject, ValidateFunction } from 'ajv';
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

type JsonSchemaDraft = 'draft-07' | '2020-12';

function detectSchemaDraft(schema: unknown): JsonSchemaDraft {
	if (!schema || typeof schema !== 'object' || Array.isArray(schema)) {
		return 'draft-07';
	}
	const schemaUri = (schema as Record<string, unknown>).$schema;
	if (typeof schemaUri === 'string' && schemaUri.includes('2020-12')) {
		return '2020-12';
	}
	return 'draft-07';
}

async function compileSchema(
	schema: AnySchema,
	draft: JsonSchemaDraft
): Promise<ValidateFunction<unknown>> {
	const { default: addFormats } = await import('ajv-formats');
	if (draft === '2020-12') {
		const { default: Ajv2020 } = await import('ajv/dist/2020');
		const ajv = new Ajv2020({ allErrors: true, strict: false, allowUnionTypes: true });
		addFormats(ajv);
		return ajv.compile(schema);
	}
	const { default: Ajv } = await import('ajv');
	const ajv = new Ajv({ allErrors: true, strict: false, allowUnionTypes: true });
	addFormats(ajv);
	return ajv.compile(schema);
}

function mapIssues(
	errors: ErrorObject[] | null | undefined,
	sourceMap: SourceMap
): SchemaValidationIssue[] {
	if (!errors || errors.length === 0) return [];
	return errors.map((issue) => {
		const location = getPointerLocation(sourceMap, issue.instancePath);
		return {
			keyword: issue.keyword,
			instancePath: issue.instancePath || '/',
			schemaPath: issue.schemaPath,
			message: issue.message ?? 'Schema validation failed',
			line: location.line,
			column: location.column
		};
	});
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
		const draft = detectSchemaDraft(parsedSchema.data);
		const validate = await compileSchema(parsedSchema.data as AnySchema, draft);
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
			issues: mapIssues(validate.errors, parsedData.sourceMap),
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
