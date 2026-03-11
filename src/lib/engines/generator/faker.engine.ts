// Fake data generator — lazy loads @faker-js/faker
import type { Faker } from '@faker-js/faker';

export type FakeDataSchema = Record<string, string>;

export const FIELD_TYPES = [
	'fullName',
	'firstName',
	'lastName',
	'email',
	'phone',
	'address',
	'city',
	'country',
	'zipCode',
	'company',
	'jobTitle',
	'username',
	'password',
	'uuid',
	'url',
	'ip',
	'date',
	'number',
	'boolean',
	'color',
	'lorem',
	'creditCard',
	'iban',
	'currency',
	'productName',
	'price'
] as const;

export type FieldType = (typeof FIELD_TYPES)[number];

export const PRESETS: Record<string, FakeDataSchema> = {
	User: {
		id: 'uuid',
		name: 'fullName',
		email: 'email',
		phone: 'phone',
		username: 'username',
		city: 'city'
	},
	Product: {
		id: 'uuid',
		name: 'productName',
		price: 'price',
		currency: 'currency',
		category: 'company'
	},
	Address: { street: 'address', city: 'city', zip: 'zipCode', country: 'country' },
	Order: {
		orderId: 'uuid',
		customer: 'fullName',
		email: 'email',
		product: 'productName',
		amount: 'price',
		date: 'date'
	}
};

export async function generateFakeData(
	schema: FakeDataSchema,
	count: number,
	outputFormat: 'json' | 'csv' | 'sql'
): Promise<string> {
	const { faker } = await import('@faker-js/faker');

	const rows = Array.from({ length: count }, () => {
		const row: Record<string, unknown> = {};
		for (const [key, type] of Object.entries(schema)) {
			row[key] = generateField(faker, type);
		}
		return row;
	});

	if (outputFormat === 'json') return JSON.stringify(rows, null, 2);
	if (outputFormat === 'csv') return toCsv(rows);
	if (outputFormat === 'sql') return toInsertStatements(rows, 'fake_data');
	return JSON.stringify(rows, null, 2);
}

function generateField(faker: Faker, type: string): unknown {
	const map: Record<string, () => unknown> = {
		fullName: () => faker.person.fullName(),
		firstName: () => faker.person.firstName(),
		lastName: () => faker.person.lastName(),
		email: () => faker.internet.email(),
		phone: () => faker.phone.number(),
		address: () => faker.location.streetAddress(),
		city: () => faker.location.city(),
		country: () => faker.location.country(),
		zipCode: () => faker.location.zipCode(),
		company: () => faker.company.name(),
		jobTitle: () => faker.person.jobTitle(),
		uuid: () => faker.string.uuid(),
		username: () => faker.internet.username(),
		password: () => faker.internet.password(),
		url: () => faker.internet.url(),
		ip: () => faker.internet.ip(),
		date: () => faker.date.past().toISOString().split('T')[0],
		number: () => faker.number.int({ min: 1, max: 1000 }),
		boolean: () => faker.datatype.boolean(),
		color: () => faker.color.human(),
		lorem: () => faker.lorem.sentence(),
		creditCard: () => faker.finance.creditCardNumber(),
		iban: () => faker.finance.iban(),
		currency: () => faker.finance.currencyCode(),
		productName: () => faker.commerce.productName(),
		price: () => Number.parseFloat(faker.commerce.price())
	};
	return (map[type] ?? (() => null))();
}

function toCsv(rows: Record<string, unknown>[]): string {
	if (rows.length === 0) return '';
	const keys = Object.keys(rows[0]);
	const header = keys.join(',');
	const body = rows
		.map((r) => keys.map((k) => JSON.stringify(String(r[k] ?? ''))).join(','))
		.join('\n');
	return `${header}\n${body}`;
}

function toInsertStatements(rows: Record<string, unknown>[], tableName: string): string {
	if (rows.length === 0) return '';
	const keys = Object.keys(rows[0]);
	const cols = keys.join(', ');
	return rows
		.map((r) => {
			const vals = keys
				.map((k) => {
					const v = r[k];
					if (typeof v === 'number' || typeof v === 'boolean') return String(v);
					return `'${String(v ?? '').replace(/'/g, "''")}'`;
				})
				.join(', ');
			return `INSERT INTO ${tableName} (${cols}) VALUES (${vals});`;
		})
		.join('\n');
}
