import type { EngineParseError } from '$engines/types.js';
import type { AnySchema, ErrorObject } from 'ajv';
import type { CSVProcessingOptions } from './csv.engine.js';
import { parseCSV } from './index.js';

export type CsvSchemaValidationIssue = {
	keyword: string;
	instancePath: string;
	schemaPath: string;
	message: string;
	line: number;
	column: number;
	row: number;
	columnName: string | null;
};

export type CsvSchemaValidationResult =
	| {
			success: true;
			valid: boolean;
			issues: CsvSchemaValidationIssue[];
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

type CsvRowRecord = Record<string, unknown>;

type ParsedSchemaResult =
	| { success: true; schema: AnySchema }
	| { success: false; error: EngineParseError | Error };

type SupportedKeyword = ErrorObject['keyword'];

function toEngineParseError(message: string, line?: number, column?: number): EngineParseError {
	return {
		message,
		line,
		column,
		plainLanguageExplanation: message
	};
}

function toRowArrays(data: unknown): string[][] {
	if (!Array.isArray(data)) return [];
	return data
		.filter((row): row is unknown[] => Array.isArray(row))
		.map((row) => row.map((cell) => String(cell ?? '')));
}

function buildColumnName(index: number): string {
	return `column_${index + 1}`;
}

function inferCellValue(value: string): unknown {
	const trimmed = value.trim();
	if (trimmed === '') return '';
	if (/^(true|false)$/i.test(trimmed)) {
		return trimmed.toLowerCase() === 'true';
	}
	if (/^null$/i.test(trimmed)) {
		return null;
	}
	if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
		return Number(trimmed);
	}
	return value;
}

function getColumnNames(rows: string[][], options: Required<CSVProcessingOptions>): string[] {
	if (rows.length === 0) return [];
	if (options.headerRow) {
		return rows[0].map((cell) => cell.trim());
	}
	const maxColumns = rows.reduce<number>((max, row) => Math.max(max, row.length), 0);
	return Array.from({ length: maxColumns }, (_, index) => buildColumnName(index));
}

function getDataRows(rows: string[][], options: Required<CSVProcessingOptions>): string[][] {
	return options.headerRow ? rows.slice(1) : rows;
}

function getDataLineNumbers(csvText: string, options: Required<CSVProcessingOptions>): number[] {
	const rawLines = csvText.split(/\r?\n/);
	const includedLineNumbers = rawLines.flatMap((line, index) => {
		if (options.skipEmptyLines && line.trim() === '') {
			return [] as number[];
		}
		return [index + 1];
	});
	return options.headerRow ? includedLineNumbers.slice(1) : includedLineNumbers;
}

function toRowRecord(row: string[], columns: string[]): CsvRowRecord {
	return Object.fromEntries(
		columns.map((columnName, index) => [columnName, inferCellValue(row[index] ?? '')])
	);
}

function normalizeOptions(options: CSVProcessingOptions = {}): Required<CSVProcessingOptions> {
	return {
		delimiter: options.delimiter ?? ',',
		headerRow: options.headerRow ?? true,
		skipEmptyLines: options.skipEmptyLines ?? true,
		trimCells: options.trimCells ?? false,
		quoteAll: options.quoteAll ?? true
	};
}

function decodePointerToken(token: string): string {
	return token.replaceAll('~1', '/').replaceAll('~0', '~');
}

function getIssueColumnName(issue: ErrorObject): string | null {
	const requiredParams = issue.params as { missingProperty?: unknown };
	if (issue.keyword === 'required' && typeof requiredParams.missingProperty === 'string') {
		return requiredParams.missingProperty;
	}

	const lastToken = issue.instancePath
		.split('/')
		.filter((entry) => entry.length > 0)
		.at(-1);
	return lastToken ? decodePointerToken(lastToken) : null;
}

function getIssueColumn(columnName: string | null, columns: string[]): number {
	if (!columnName) return 1;
	const index = columns.indexOf(columnName);
	return index >= 0 ? index + 1 : 1;
}

function toIssue(
	issue: ErrorObject,
	line: number,
	row: number,
	columns: string[]
): CsvSchemaValidationIssue {
	const columnName = getIssueColumnName(issue);
	return {
		keyword: issue.keyword,
		instancePath: issue.instancePath || '/',
		schemaPath: issue.schemaPath,
		message: issue.message ?? 'Schema validation failed',
		line,
		column: getIssueColumn(columnName, columns),
		row,
		columnName
	};
}

async function parseSchemaInput(input: string): Promise<ParsedSchemaResult> {
	try {
		return {
			success: true,
			schema: JSON.parse(input) as AnySchema
		};
	} catch {
		try {
			const yaml = await import('js-yaml');
			const schema = yaml.load(input) as AnySchema;
			return {
				success: true,
				schema
			};
		} catch (error) {
			if (error instanceof Error) {
				return {
					success: false,
					error: toEngineParseError(error.message)
				};
			}
			return {
				success: false,
				error: new Error('Schema validation failed')
			};
		}
	}
}

export async function validateCsvSchema(
	csvText: string,
	schemaInput: string,
	options: CSVProcessingOptions = {}
): Promise<CsvSchemaValidationResult> {
	const normalizedOptions = normalizeOptions(options);
	const parsedRows = await parseCSV(csvText, {
		delimiter: normalizedOptions.delimiter,
		skipEmptyLines: normalizedOptions.skipEmptyLines,
		trimCells: normalizedOptions.trimCells
	});

	if (!parsedRows.success) {
		return {
			success: false,
			valid: false,
			issues: [],
			schemaError: null,
			dataError: parsedRows.error
		};
	}

	const rowArrays = toRowArrays(parsedRows.data);
	const columnNames = getColumnNames(rowArrays, normalizedOptions);
	const dataRows = getDataRows(rowArrays, normalizedOptions);
	const dataLineNumbers = getDataLineNumbers(csvText, normalizedOptions);
	const rowObjects = dataRows.map((row) => toRowRecord(row, columnNames));

	const parsedSchema = await parseSchemaInput(schemaInput);
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
		const validate = ajv.compile(parsedSchema.schema);
		const issues: CsvSchemaValidationIssue[] = [];

		rowObjects.forEach((rowObject, rowIndex) => {
			const valid = validate(rowObject);
			if (valid || !validate.errors) return;
			const line = dataLineNumbers[rowIndex] ?? rowIndex + (normalizedOptions.headerRow ? 2 : 1);
			issues.push(
				...validate.errors.map((issue) => toIssue(issue, line, rowIndex + 1, columnNames))
			);
		});

		return {
			success: true,
			valid: issues.length === 0,
			issues,
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

export const csvSchemaKeywords: SupportedKeyword[] = [
	'type',
	'required',
	'enum',
	'pattern',
	'minimum',
	'maximum',
	'minLength',
	'maxLength'
];
