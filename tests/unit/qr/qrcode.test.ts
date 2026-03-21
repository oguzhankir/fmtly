import { describe, expect, it } from 'vitest';
import {
	QR_WORKER_THRESHOLD_BYTES,
	createEmptyQRCodeResult,
	generateQRCode,
	shouldUseQRCodeWorker
} from '../../../src/lib/engines/qr/qrcode.js';

const LOGO_DATA_URL =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4////fwAJ+wP9KobjigAAAABJRU5ErkJggg==';

describe('generateQRCode', () => {
	it('generates SVG and PNG output for valid input', async () => {
		const result = await generateQRCode('https://fmtly.dev/qr');
		expect(result.error).toBeNull();
		expect(result.output).not.toBeNull();
		expect(result.output?.svgMarkup).toContain('<svg');
		expect(result.output?.pngDataUrl.startsWith('data:image/png;base64,')).toBe(true);
		expect(result.metrics.version).toBeGreaterThan(0);
		expect(result.metrics.moduleCount).toBeGreaterThan(0);
	});

	it('preserves normalized size and margin settings in metrics', async () => {
		const result = await generateQRCode('fmtly', {
			size: 448,
			margin: 4,
			errorCorrectionLevel: 'H'
		});
		expect(result.error).toBeNull();
		expect(result.metrics.size).toBe(448);
		expect(result.metrics.margin).toBe(4);
	});

	it('injects the logo overlay into SVG output and warns on low correction levels', async () => {
		const result = await generateQRCode('fmtly qr', {
			logoDataUrl: LOGO_DATA_URL,
			errorCorrectionLevel: 'M'
		});
		expect(result.error).toBeNull();
		expect(result.warnings).toContain('logo_overlay_low_error_correction');
		expect(result.output?.svgMarkup).toContain('fmtly-qr-logo');
	});

	it('returns invalid_logo when the provided logo is not a valid data URL', async () => {
		const result = await generateQRCode('fmtly qr', {
			logoDataUrl: 'not-a-data-url'
		});
		expect(result.error?.code).toBe('invalid_logo');
		expect(result.output).toBeNull();
	});

	it('returns input_too_long when the payload exceeds QR capacity', async () => {
		const result = await generateQRCode('a'.repeat(5000));
		expect(result.error?.code).toBe('input_too_long');
		expect(result.output).toBeNull();
	});
});

describe('createEmptyQRCodeResult', () => {
	it('returns an empty non-error result for initial state', () => {
		const result = createEmptyQRCodeResult();
		expect(result.error).toBeNull();
		expect(result.output).toBeNull();
		expect(result.metrics.size).toBeGreaterThan(0);
	});
});

describe('shouldUseQRCodeWorker', () => {
	it('returns false for small payloads', () => {
		expect(shouldUseQRCodeWorker('small')).toBe(false);
	});

	it('returns true for payloads larger than threshold', () => {
		const largeInput = 'a'.repeat(QR_WORKER_THRESHOLD_BYTES + 8);
		expect(shouldUseQRCodeWorker(largeInput)).toBe(true);
	});
});
