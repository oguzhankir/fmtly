import type { EngineParseError } from '$engines/types.js';

export type CSVProcessingOptions = {
	delimiter?: string;
	headerRow?: boolean;
	skipEmptyLines?: boolean;
	trimCells?: boolean;
	quoteAll?: boolean;
};

type PapaParseModule = typeof import('papaparse');

type CsvArrayRow = unknown[];
type CsvObjectRow = Record<string, unknown>;

async function loadPapaParse(): Promise<PapaParseModule> {
	return await import('papaparse');
}

function toEngineParseError(message: string, row?: number): EngineParseError {
	return {
		message,
		line: row !== undefined ? row + 1 : undefined,
		plainLanguageExplanation: message
	};
}

function normalizeCell(value: unknown, trimCells: boolean): unknown {
	if (!trimCells || typeof value !== 'string') return value;
	return value.trim();
}

function normalizeArrayRows(rows: unknown[], trimCells: boolean): CsvArrayRow[] {
	return rows.map((row) =>
		Array.isArray(row) ? row.map((value) => normalizeCell(value, trimCells)) : []
	);
}

function normalizeObjectRows(rows: unknown[], trimCells: boolean): CsvObjectRow[] {
	return rows.map((row) => {
		if (row === null || typeof row !== 'object' || Array.isArray(row)) {
			return {};
		}

		return Object.fromEntries(
			Object.entries(row as Record<string, unknown>).map(([key, value]) => [
				key,
				normalizeCell(value, trimCells)
			])
		);
	});
}

function getNormalizedOptions(options: CSVProcessingOptions): Required<CSVProcessingOptions> {
	return {
		delimiter: options.delimiter ?? ',',
		headerRow: options.headerRow ?? true,
		skipEmptyLines: options.skipEmptyLines ?? true,
		trimCells: options.trimCells ?? false,
		quoteAll: options.quoteAll ?? true
	};
}

async function parseRows(
	csv: string,
	options: CSVProcessingOptions = {}
): Promise<{ rows: CsvArrayRow[]; error: EngineParseError | null }> {
	const Papa = await loadPapaParse();
	const normalized = getNormalizedOptions(options);
	const parsed = Papa.parse(csv, {
		header: false,
		skipEmptyLines: normalized.skipEmptyLines,
		delimiter: normalized.delimiter
	});

	if (parsed.errors.length > 0) {
		const firstError = parsed.errors[0];
		return { rows: [], error: toEngineParseError(firstError.message, firstError.row) };
	}

	return {
		rows: normalizeArrayRows(parsed.data as unknown[], normalized.trimCells),
		error: null
	};
}

function buildColumnName(index: number): string {
	return `column_${index + 1}`;
}

async function parseObjectRows(
	csv: string,
	options: CSVProcessingOptions = {}
): Promise<{ rows: CsvObjectRow[]; error: EngineParseError | null }> {
	const normalized = getNormalizedOptions(options);
	if (normalized.headerRow) {
		const Papa = await loadPapaParse();
		const parsed = Papa.parse(csv, {
			header: true,
			skipEmptyLines: normalized.skipEmptyLines,
			delimiter: normalized.delimiter,
			dynamicTyping: true
		});

		if (parsed.errors.length > 0) {
			const firstError = parsed.errors[0];
			return { rows: [], error: toEngineParseError(firstError.message, firstError.row) };
		}

		return {
			rows: normalizeObjectRows(parsed.data as unknown[], normalized.trimCells),
			error: null
		};
	}

	const parsedRows = await parseRows(csv, normalized);
	if (parsedRows.error) {
		return { rows: [], error: parsedRows.error };
	}

	const maxColumns = parsedRows.rows.reduce<number>((max, row) => Math.max(max, row.length), 0);
	return {
		rows: parsedRows.rows.map((row) =>
			Object.fromEntries(
				Array.from({ length: maxColumns }, (_, index) => [buildColumnName(index), row[index] ?? ''])
			)
		),
		error: null
	};
}

export async function toXml(csv: string, options: CSVProcessingOptions = {}): Promise<string> {
	const { XMLBuilder } = await import('fast-xml-parser');
	const parsed = await parseObjectRows(csv, options);
	if (parsed.error) {
		throw new Error(parsed.error.message);
	}
	const builder = new XMLBuilder({ ignoreAttributes: false, format: true });
	return builder.build({ root: { row: parsed.rows } });
}

export async function toYaml(csv: string, options: CSVProcessingOptions = {}): Promise<string> {
	const yaml = await import('js-yaml');
	const parsed = await parseObjectRows(csv, options);
	if (parsed.error) {
		throw new Error(parsed.error.message);
	}
	return yaml.dump(parsed.rows, { indent: 2 });
}

export async function toHtmlTable(
	csv: string,
	options: CSVProcessingOptions = {}
): Promise<string> {
	const parsed = await parseObjectRows(csv, options);
	if (parsed.error) {
		throw new Error(parsed.error.message);
	}
	const data = parsed.rows;
	if (data.length === 0) return '<table></table>';

	const keys = Object.keys(data[0]);
	let html = '<table>\n  <thead>\n    <tr>\n';
	for (const key of keys) {
		html += `      <th>${escapeHtml(key)}</th>\n`;
	}
	html += '    </tr>\n  </thead>\n  <tbody>\n';

	for (const row of data) {
		html += '    <tr>\n';
		for (const key of keys) {
			html += `      <td>${escapeHtml(String(row[key] ?? ''))}</td>\n`;
		}
		html += '    </tr>\n';
	}
	html += '  </tbody>\n</table>';
	return html;
}

function escapeHtml(str: string): string {
	return str.replace(
		/[&<>'"]/g,
		(tag) =>
			({
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				"'": '&#39;',
				'"': '&quot;'
			})[tag] || tag
	);
}

export type CsvToSqlOptions = CSVProcessingOptions & {
	tableName?: string;
	batchSize?: number;
};

function escapeSqlValue(value: unknown): string {
	if (value === null || value === undefined || value === '') return 'NULL';
	if (typeof value === 'number') return String(value);
	if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE';

	const str = String(value);

	// Infer numbers
	if (/^-?\d+(\.\d+)?$/.test(str)) {
		return str;
	}

	// Infer booleans
	const lower = str.toLowerCase();
	if (lower === 'true') return 'TRUE';
	if (lower === 'false') return 'FALSE';
	if (lower === 'null') return 'NULL';

	// Otherwise, it's a string. Escape single quotes.
	return `'${str.replace(/'/g, "''")}'`;
}

export async function toSql(csv: string, options: CsvToSqlOptions = {}): Promise<string> {
	const parsed = await parseObjectRows(csv, options);
	if (parsed.error) {
		throw new Error(parsed.error.message);
	}

	const data = parsed.rows;
	if (data.length === 0) return '-- No data found';

	const tableName = options.tableName || 'my_table';
	const batchSize = Math.max(1, options.batchSize || 100);

	const columns = Object.keys(data[0]);
	const columnsSql = columns.map((c) => `"${c.replace(/"/g, '""')}"`).join(', ');

	let sql = '';
	for (let i = 0; i < data.length; i += batchSize) {
		const batch = data.slice(i, i + batchSize);

		sql += `INSERT INTO "${tableName}" (${columnsSql}) VALUES\n`;

		const valuesSql = batch.map((row) => {
			const rowValues = columns.map((col) => escapeSqlValue(row[col]));
			return `  (${rowValues.join(', ')})`;
		});

		sql += `${valuesSql.join(',\n')};\n\n`;
	}

	return sql.trim();
}

export async function format(csv: string, options: CSVProcessingOptions = {}): Promise<string> {
	const Papa = await loadPapaParse();
	const normalized = getNormalizedOptions(options);
	const parsed = await parseRows(csv, normalized);
	if (parsed.error) {
		throw new Error(parsed.error.message);
	}

	return Papa.unparse(parsed.rows, {
		quotes: normalized.quoteAll,
		quoteChar: '"',
		escapeChar: '"',
		delimiter: normalized.delimiter
	});
}

export type ValidationResult = { valid: true } | { valid: false; error: EngineParseError };

export async function validate(
	csv: string,
	options: CSVProcessingOptions = {}
): Promise<ValidationResult> {
	const normalized = getNormalizedOptions(options);
	const rowsResult = await parseRows(csv, normalized);
	if (rowsResult.error) {
		return { valid: false, error: rowsResult.error };
	}

	const rows = rowsResult.rows;
	if (rows.length === 0) {
		return { valid: true };
	}

	if (normalized.headerRow) {
		const header = rows[0];
		const seen = new Set<string>();
		for (const [index, cell] of header.entries()) {
			const value = String(cell ?? '').trim();
			if (!value) {
				return {
					valid: false,
					error: toEngineParseError(`Header column ${index + 1} is empty`, 0)
				};
			}
			if (seen.has(value)) {
				return {
					valid: false,
					error: toEngineParseError(`Duplicate header "${value}" found`, 0)
				};
			}
			seen.add(value);
		}
	}

	const expectedColumns = rows[0].length;
	for (const [index, row] of rows.entries()) {
		if (row.length !== expectedColumns) {
			return {
				valid: false,
				error: toEngineParseError(
					`Row ${index + 1} has ${row.length} columns but expected ${expectedColumns}`,
					index
				)
			};
		}
	}

	return { valid: true };
}
