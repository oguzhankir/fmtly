import { describe, expect, it } from 'vitest';
import {
	BARCODE_WORKER_THRESHOLD_BYTES,
	DEFAULT_BARCODE_GENERATOR_OPTIONS,
	normalizeBarcodeOptions,
	shouldUseBarcodeWorker,
	validateBarcodeValue
} from '../../../src/lib/engines/qr/barcode.js';

describe('shouldUseBarcodeWorker', () => {
	it('is false at threshold', () => {
		expect(shouldUseBarcodeWorker(BARCODE_WORKER_THRESHOLD_BYTES)).toBe(false);
	});

	it('is true above threshold', () => {
		expect(shouldUseBarcodeWorker(BARCODE_WORKER_THRESHOLD_BYTES + 1)).toBe(true);
	});
});

describe('normalizeBarcodeOptions', () => {
	it('clamps bar dimensions and applies defaults', () => {
		const o = normalizeBarcodeOptions({ width: 99, height: 9, margin: 99 });
		expect(o.width).toBe(6);
		expect(o.height).toBeGreaterThanOrEqual(24);
		expect(o.margin).toBe(48);
	});

	it('resets invalid hex colors to defaults', () => {
		const o = normalizeBarcodeOptions({ lineColor: 'not-a-color', background: '#fff' });
		expect(o.lineColor).toBe(DEFAULT_BARCODE_GENERATOR_OPTIONS.lineColor);
		expect(o.background).toBe('#fff');
	});
});

describe('validateBarcodeValue', () => {
	it('rejects empty input', () => {
		const r = validateBarcodeValue('CODE128', '   ');
		expect(r?.code).toBe('empty_value');
	});

	it('validates EAN-13 digit length', () => {
		expect(validateBarcodeValue('EAN13', '123')).not.toBeNull();
		expect(validateBarcodeValue('EAN13', '123456789012')).toBeNull();
	});

	it('validates ITF even digit count', () => {
		expect(validateBarcodeValue('ITF', '123')).not.toBeNull();
		expect(validateBarcodeValue('ITF', '1234')).toBeNull();
	});

	it('validates pharmacode range', () => {
		expect(validateBarcodeValue('pharmacode', '0')).not.toBeNull();
		expect(validateBarcodeValue('pharmacode', '42')).toBeNull();
	});
});
