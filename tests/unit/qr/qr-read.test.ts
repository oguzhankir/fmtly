import type { QRCode } from 'jsqr';
import { describe, expect, it, vi } from 'vitest';
import {
	type JsQrFunction,
	decodeQrFromImageBuffer,
	scaleDimensions,
	shouldUseQrReadWorker
} from '../../../src/lib/engines/qr/qr-read.js';

function point(): { x: number; y: number } {
	return { x: 0, y: 0 };
}

function minimalQr(data: string): QRCode {
	return {
		binaryData: [],
		data,
		chunks: [],
		version: 1,
		location: {
			topRightCorner: point(),
			topLeftCorner: point(),
			bottomRightCorner: point(),
			bottomLeftCorner: point(),
			topRightFinderPattern: point(),
			topLeftFinderPattern: point(),
			bottomLeftFinderPattern: point()
		}
	};
}

describe('shouldUseQrReadWorker', () => {
	it('returns false at threshold', () => {
		expect(shouldUseQrReadWorker(500 * 1024)).toBe(false);
	});

	it('returns true above threshold', () => {
		expect(shouldUseQrReadWorker(500 * 1024 + 1)).toBe(true);
	});
});

describe('scaleDimensions', () => {
	it('preserves dimensions when within max edge', () => {
		expect(scaleDimensions(100, 100, 2048)).toEqual({ width: 100, height: 100 });
	});

	it('scales down proportionally to max edge', () => {
		expect(scaleDimensions(4000, 2000, 2048)).toEqual({ width: 2048, height: 1024 });
	});
});

describe('decodeQrFromImageBuffer', () => {
	it('returns success when jsQR returns payload', () => {
		const jsQR: JsQrFunction = vi.fn().mockReturnValue(minimalQr('hello'));
		const buf = { data: new Uint8ClampedArray(4), width: 1, height: 1 };
		const r = decodeQrFromImageBuffer(buf, jsQR);
		expect(r.kind).toBe('success');
		if (r.kind === 'success') expect(r.data).toBe('hello');
	});

	it('returns no_qr_found when jsQR returns null', () => {
		const jsQR: JsQrFunction = vi.fn().mockReturnValue(null);
		const buf = { data: new Uint8ClampedArray(4), width: 1, height: 1 };
		const r = decodeQrFromImageBuffer(buf, jsQR);
		expect(r.kind).toBe('failure');
		if (r.kind === 'failure') expect(r.code).toBe('no_qr_found');
	});

	it('returns no_qr_found when data is empty', () => {
		const jsQR: JsQrFunction = vi.fn().mockReturnValue(minimalQr(''));
		const buf = { data: new Uint8ClampedArray(4), width: 1, height: 1 };
		const r = decodeQrFromImageBuffer(buf, jsQR);
		expect(r.kind).toBe('failure');
		if (r.kind === 'failure') expect(r.code).toBe('no_qr_found');
	});

	it('returns decode_failed when jsQR throws', () => {
		const jsQR: JsQrFunction = vi.fn().mockImplementation(() => {
			throw new Error('boom');
		});
		const buf = { data: new Uint8ClampedArray(4), width: 1, height: 1 };
		const r = decodeQrFromImageBuffer(buf, jsQR);
		expect(r.kind).toBe('failure');
		if (r.kind === 'failure') expect(r.code).toBe('decode_failed');
	});
});
