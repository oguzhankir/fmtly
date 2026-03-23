import {
	type UuidBatchOptions,
	estimateUuidBatchBytes,
	generateUuidBatch,
	shouldUseUuidBatchWorker
} from '$engines/generate/uuid-batch.js';
import { describe, expect, it } from 'vitest';

const v4re = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/u;

describe('uuid-batch engine', () => {
	it('generates newline-separated v4 UUIDs', async () => {
		const text = await generateUuidBatch({
			version: 4,
			count: 3,
			separator: 'newline'
		});
		const lines = text.split('\n');
		expect(lines).toHaveLength(3);
		for (const line of lines) {
			expect(line).toMatch(v4re);
		}
	});

	it('generates comma-separated v7 UUIDs', async () => {
		const text = await generateUuidBatch({
			version: 7,
			count: 2,
			separator: 'comma'
		});
		const parts = text.split(',');
		expect(parts).toHaveLength(2);
		for (const p of parts) {
			expect(p.length).toBe(36);
			expect(p).toMatch(/^[0-9a-f-]{36}$/u);
		}
	});

	it('estimates byte size from count', () => {
		const o: UuidBatchOptions = { version: 4, count: 100, separator: 'newline' };
		expect(estimateUuidBatchBytes(o)).toBe(100 * 37);
	});

	it('flags worker for large batches', () => {
		const huge: UuidBatchOptions = { version: 4, count: 50_000, separator: 'newline' };
		expect(shouldUseUuidBatchWorker(huge)).toBe(true);
	});
});
