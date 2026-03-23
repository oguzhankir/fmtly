import { generateFakeDataWithFaker } from '$engines/generate/fake-data-fields.js';
import { loadFakerForLocale } from '$engines/generate/fake-data.js';
import type { FakeDataWorkerRequest, FakeDataWorkerResponse } from '$engines/generate/fake-data.js';

self.onmessage = async (event: MessageEvent<FakeDataWorkerRequest>): Promise<void> => {
	const { id, payload } = event.data;
	try {
		const faker = await loadFakerForLocale(payload.localeCode);
		const output = generateFakeDataWithFaker(faker, {
			fields: payload.fields,
			rowCount: payload.rowCount,
			format: payload.format,
			tableName: payload.tableName,
			seed: payload.seed
		});
		const res: FakeDataWorkerResponse = { id, ok: true, output };
		self.postMessage(res);
	} catch (e) {
		const message = e instanceof Error ? e.message : String(e);
		const res: FakeDataWorkerResponse = { id, ok: false, error: message };
		self.postMessage(res);
	}
};
