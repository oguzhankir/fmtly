import type { AnySchema, ErrorObject } from 'ajv';
import type { EngineParseError } from '$engines/types.js';

export type YamlSchemaValidationIssue = {
	keyword: string;
	instancePath: string;
	schemaPath: string;
	message: string;
	line: number;
	column: number;
};

export type YamlSchemaValidationResult =
	| {
			success: true;
			valid: boolean;
			issues: YamlSchemaValidationIssue[];
			schemaError: null;
			dataError: null;
	  }
	| {
			success: false;
			valid: false;
			issues: [];
			schemaError: EngineParseError | Error | null;
			dataError: EngineParseError | null;
	  };

type ParsedYamlSuccess = {
	success: true;
	data: unknown;
	documents: unknown[];
};

type ParsedYamlFailure = {
	success: false;
	error: EngineParseError;
};

type ParsedYamlResult = ParsedYamlSuccess | ParsedYamlFailure;

type PointerLocation = {
	line: number;
	column: number;
};

type LocatedLine = {
	line: number;
	column: number;
	indent: number;
};

function toEngineParseError(error: unknown): EngineParseError {
	const yamlErrorLike = error as {
		message?: string;
		mark?: {
			line?: number;
			column?: number;
		};
	};

	return {
		message: yamlErrorLike.message ?? 'Invalid YAML',
		line: yamlErrorLike.mark?.line !== undefined ? yamlErrorLike.mark.line + 1 : undefined,
		column: yamlErrorLike.mark?.column !== undefined ? yamlErrorLike.mark.column + 1 : undefined,
		plainLanguageExplanation: yamlErrorLike.message ?? 'Invalid YAML'
	};
}

async function parseYamlInput(input: string): Promise<ParsedYamlResult> {
	try {
		const yaml = await import('js-yaml');
		const documents: unknown[] = [];

		yaml.loadAll(input, (document: unknown) => {
			documents.push(document);
		});

		return {
			success: true,
			data: documents.length <= 1 ? (documents[0] ?? null) : documents,
			documents
		};
	} catch (error) {
		return {
			success: false,
			error: toEngineParseError(error)
		};
	}
}

function decodePointerToken(token: string): string {
	return token.replaceAll('~1', '/').replaceAll('~0', '~');
}

function escapeRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getLineIndent(line: string): number {
	const match = line.match(/^[\t ]*/);
	return match ? match[0].length : 0;
}

function findObjectKeyLine(
	lines: string[],
	key: string,
	startLine: number,
	parentIndent: number
): LocatedLine | null {
	const escapedKey = escapeRegExp(key);
	const inlinePattern = new RegExp(`^(\\s*)-\\s*${escapedKey}\\s*:`);
	const normalPattern = new RegExp(`^(\\s*)${escapedKey}\\s*:`);

	for (let index = startLine; index < lines.length; index += 1) {
		const line = lines[index] ?? '';
		const inlineMatch = line.match(inlinePattern);
		if (inlineMatch) {
			const indent = getLineIndent(line);
			if (indent >= parentIndent) {
				return {
					line: index + 1,
					column: line.indexOf(key) + 1,
					indent
				};
			}
		}

		const normalMatch = line.match(normalPattern);
		if (normalMatch) {
			const indent = getLineIndent(line);
			if (indent > parentIndent || parentIndent < 0) {
				return {
					line: index + 1,
					column: line.indexOf(key) + 1,
					indent
				};
			}
		}
	}

	return null;
}

function findArrayItemLine(
	lines: string[],
	indexToken: string,
	startLine: number,
	parentIndent: number
): LocatedLine | null {
	const targetIndex = Number(indexToken);
	if (!Number.isInteger(targetIndex) || targetIndex < 0) {
		return null;
	}

	let currentIndex = -1;
	for (let index = startLine; index < lines.length; index += 1) {
		const line = lines[index] ?? '';
		const trimmed = line.trimStart();
		if (!trimmed.startsWith('-')) continue;
		const indent = getLineIndent(line);
		if (indent <= parentIndent && parentIndent >= 0) continue;
		currentIndex += 1;
		if (currentIndex === targetIndex) {
			return {
				line: index + 1,
				column: line.indexOf('-') + 1,
				indent
			};
		}
	}

	return null;
}

function findYamlPointerLocation(yamlText: string, pointer: string): PointerLocation {
	if (!pointer || pointer === '/') {
		return { line: 1, column: 1 };
	}

	const tokens = pointer
		.split('/')
		.slice(1)
		.map((token) => decodePointerToken(token));
	const lines = yamlText.split('\n');

	let searchStartLine = 0;
	let parentIndent = -1;
	let lastLocation: PointerLocation = { line: 1, column: 1 };

	for (const token of tokens) {
		const location = /^\d+$/.test(token)
			? findArrayItemLine(lines, token, searchStartLine, parentIndent)
			: findObjectKeyLine(lines, token, searchStartLine, parentIndent);

		if (!location) {
			return lastLocation;
		}

		lastLocation = { line: location.line, column: location.column };
		searchStartLine = location.line - 1;
		parentIndent = location.indent;
	}

	return lastLocation;
}

function normalizeSchemaError(error: unknown): EngineParseError | Error {
	if (error instanceof Error) {
		return error;
	}
	return new Error('Schema validation failed');
}

function toIssue(yamlText: string, issue: ErrorObject): YamlSchemaValidationIssue {
	const instancePath = issue.instancePath || '/';
	const location = findYamlPointerLocation(yamlText, instancePath);

	return {
		keyword: issue.keyword,
		instancePath,
		schemaPath: issue.schemaPath,
		message: issue.message ?? 'Schema validation failed',
		line: location.line,
		column: location.column
	};
}

export async function validateYamlSchema(
	yamlInput: string,
	schemaInput: string
): Promise<YamlSchemaValidationResult> {
	const parsedData = await parseYamlInput(yamlInput);
	if (!parsedData.success) {
		return {
			success: false,
			valid: false,
			issues: [],
			schemaError: null,
			dataError: parsedData.error
		};
	}

	const parsedSchema = await parseYamlInput(schemaInput);
	if (!parsedSchema.success) {
		return {
			success: false,
			valid: false,
			issues: [],
			schemaError: parsedSchema.error,
			dataError: null
		};
	}

	if (parsedSchema.documents.length !== 1) {
		return {
			success: false,
			valid: false,
			issues: [],
			schemaError: new Error('Schema must contain exactly one document'),
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
			issues: validate.errors.map((issue) => toIssue(yamlInput, issue)),
			schemaError: null,
			dataError: null
		};
	} catch (error) {
		return {
			success: false,
			valid: false,
			issues: [],
			schemaError: normalizeSchemaError(error),
			dataError: null
		};
	}
}
