import {
	type FakeDataRequest,
	estimateFakeDataBytes,
	generateFakeDataMain,
	shouldUseFakeDataWorker
} from '$engines/generate/fake-data.js';
import { describe, expect, it } from 'vitest';

describe('fake-data engine', () => {
	it('generates deterministic JSON with seed', async () => {
		const req: FakeDataRequest = {
			fields: ['email', 'firstName'],
			rowCount: 2,
			format: 'json',
			tableName: 'users',
			localeCode: 'en',
			seed: 42_4242
		};
		const a = await generateFakeDataMain(req);
		const b = await generateFakeDataMain(req);
		expect(a).toBe(b);
		const parsed = JSON.parse(a) as { email: string; first_name: string }[];
		expect(parsed).toHaveLength(2);
		expect(parsed[0]).toHaveProperty('email');
		expect(parsed[0]).toHaveProperty('first_name');
	});

	it('returns empty string when no fields', async () => {
		const out = await generateFakeDataMain({
			fields: [],
			rowCount: 5,
			format: 'json',
			tableName: 't',
			localeCode: 'en'
		});
		expect(out).toBe('');
	});

	it('flags worker for many rows', () => {
		const req: FakeDataRequest = {
			fields: ['email'],
			rowCount: 25_000,
			format: 'json',
			tableName: 't',
			localeCode: 'en'
		};
		expect(shouldUseFakeDataWorker(req)).toBe(true);
	});

	it('estimates output size from rows and columns', () => {
		const bytes = estimateFakeDataBytes({
			fields: ['email', 'city'],
			rowCount: 100,
			format: 'json',
			tableName: 't',
			localeCode: 'en'
		});
		expect(bytes).toBe(100 * 2 * 48);
	});
});
