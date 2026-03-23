import type { Faker } from '@faker-js/faker';
import { FAKE_DATA_WORKER_MIN_ROWS, GENERATE_WORKER_THRESHOLD_BYTES } from './constants.js';
import {
	FAKE_DATA_FIELD_IDS,
	type FakeDataFieldId,
	type FakeDataFormat,
	generateFakeDataWithFaker
} from './fake-data-fields.js';

export type { FakeDataFieldId, FakeDataFormat };
export { FAKE_DATA_FIELD_IDS, columnNameForField } from './fake-data-fields.js';

export type FakeDataRequest = {
	fields: FakeDataFieldId[];
	rowCount: number;
	format: FakeDataFormat;
	tableName: string;
	localeCode: string;
	seed?: number;
};

const FAKER_LOCALE_MODULES: Record<string, () => Promise<{ faker: Faker }>> = {
	en: () => import('@faker-js/faker/locale/en'),
	de: () => import('@faker-js/faker/locale/de'),
	es: () => import('@faker-js/faker/locale/es'),
	fr: () => import('@faker-js/faker/locale/fr'),
	it: () => import('@faker-js/faker/locale/it')
};

export async function loadFakerForLocale(localeCode: string): Promise<Faker> {
	const code = localeCode.slice(0, 2).toLowerCase();
	const loader = FAKER_LOCALE_MODULES[code] ?? FAKER_LOCALE_MODULES.en;
	const mod = await loader();
	return mod.faker;
}

export function estimateFakeDataBytes(req: FakeDataRequest): number {
	const cols = Math.max(1, req.fields.length);
	const rows = Math.max(0, req.rowCount);
	return rows * cols * 48;
}

export function shouldUseFakeDataWorker(req: FakeDataRequest): boolean {
	if (req.rowCount >= FAKE_DATA_WORKER_MIN_ROWS) return true;
	return estimateFakeDataBytes(req) >= GENERATE_WORKER_THRESHOLD_BYTES;
}

export async function generateFakeDataMain(req: FakeDataRequest): Promise<string> {
	const faker = await loadFakerForLocale(req.localeCode);
	return generateFakeDataWithFaker(faker, {
		fields: req.fields,
		rowCount: req.rowCount,
		format: req.format,
		tableName: req.tableName,
		seed: req.seed
	});
}

export type FakeDataWorkerRequest = {
	id: number;
	payload: FakeDataRequest;
};

export type FakeDataWorkerResponse =
	| { id: number; ok: true; output: string }
	| { id: number; ok: false; error: string };
