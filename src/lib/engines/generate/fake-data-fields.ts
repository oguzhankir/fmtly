import type { Faker } from '@faker-js/faker';

export type FakeDataFieldId =
	| 'fullName'
	| 'firstName'
	| 'lastName'
	| 'email'
	| 'phone'
	| 'street'
	| 'city'
	| 'zip'
	| 'country'
	| 'company'
	| 'jobTitle'
	| 'ipv4'
	| 'date'
	| 'uuid';

export const FAKE_DATA_FIELD_IDS: FakeDataFieldId[] = [
	'fullName',
	'firstName',
	'lastName',
	'email',
	'phone',
	'street',
	'city',
	'zip',
	'country',
	'company',
	'jobTitle',
	'ipv4',
	'date',
	'uuid'
];

export function columnNameForField(id: FakeDataFieldId): string {
	switch (id) {
		case 'fullName':
			return 'full_name';
		case 'firstName':
			return 'first_name';
		case 'lastName':
			return 'last_name';
		case 'jobTitle':
			return 'job_title';
		default:
			return id;
	}
}

export function generateFieldValue(faker: Faker, id: FakeDataFieldId): string {
	switch (id) {
		case 'fullName':
			return faker.person.fullName();
		case 'firstName':
			return faker.person.firstName();
		case 'lastName':
			return faker.person.lastName();
		case 'email':
			return faker.internet.email();
		case 'phone':
			return faker.phone.number();
		case 'street':
			return faker.location.streetAddress();
		case 'city':
			return faker.location.city();
		case 'zip':
			return faker.location.zipCode();
		case 'country':
			return faker.location.country();
		case 'company':
			return faker.company.name();
		case 'jobTitle':
			return faker.person.jobTitle();
		case 'ipv4':
			return faker.internet.ipv4();
		case 'date':
			return faker.date.recent({ days: 365 }).toISOString().slice(0, 10);
		case 'uuid':
			return faker.string.uuid();
		default: {
			const _x: never = id;
			return _x;
		}
	}
}

function escapeSqlString(s: string): string {
	return `'${s.replace(/'/g, "''")}'`;
}

export function escapeCsvField(s: string): string {
	if (/[",\n\r]/.test(s)) {
		return `"${s.replace(/"/g, '""')}"`;
	}
	return s;
}

export type FakeDataFormat = 'json' | 'csv' | 'sql';

export type FakeDataGenOptions = {
	fields: FakeDataFieldId[];
	rowCount: number;
	format: FakeDataFormat;
	tableName: string;
	seed?: number;
};

export function generateFakeDataWithFaker(faker: Faker, options: FakeDataGenOptions): string {
	if (options.fields.length === 0) {
		return '';
	}
	if (options.seed !== undefined) {
		faker.seed(options.seed);
	}
	const cols = options.fields.map((f) => columnNameForField(f));
	const rows: Record<string, string>[] = [];
	for (let r = 0; r < options.rowCount; r++) {
		const row: Record<string, string> = {};
		for (const f of options.fields) {
			row[columnNameForField(f)] = generateFieldValue(faker, f);
		}
		rows.push(row);
	}

	if (options.format === 'json') {
		return JSON.stringify(rows, null, 2);
	}

	if (options.format === 'csv') {
		const header = cols.map(escapeCsvField).join(',');
		const lines = [header];
		for (const row of rows) {
			const line = cols.map((c) => escapeCsvField(row[c] ?? '')).join(',');
			lines.push(line);
		}
		return lines.join('\n');
	}

	const table = options.tableName.replace(/[^a-zA-Z0-9_]/g, '_') || 'generated_data';
	const colList = cols.map((c) => `\`${c}\``).join(', ');
	const valueLines = rows.map(
		(row) => `(${cols.map((c) => escapeSqlString(row[c] ?? '')).join(', ')})`
	);
	return `INSERT INTO \`${table}\` (${colList}) VALUES\n${valueLines.join(',\n')};`;
}
