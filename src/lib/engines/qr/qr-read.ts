import type { Options } from 'jsqr';

export const QR_READ_WORKER_THRESHOLD_BYTES = 500 * 1024;
export const QR_READ_MAX_EDGE_PX = 2048;

export const DEFAULT_JSQR_OPTIONS: Options = {
	inversionAttempts: 'attemptBoth'
};

export function shouldUseQrReadWorker(imageDataByteLength: number): boolean {
	return imageDataByteLength > QR_READ_WORKER_THRESHOLD_BYTES;
}

export function scaleDimensions(
	sourceWidth: number,
	sourceHeight: number,
	maxEdge: number
): { width: number; height: number } {
	if (sourceWidth <= 0 || sourceHeight <= 0) {
		return { width: 1, height: 1 };
	}
	const scale = Math.min(1, maxEdge / Math.max(sourceWidth, sourceHeight));
	return {
		width: Math.max(1, Math.round(sourceWidth * scale)),
		height: Math.max(1, Math.round(sourceHeight * scale))
	};
}

export type QRReadErrorCode = 'no_qr_found' | 'decode_failed';

export type QRReadResult =
	| { kind: 'success'; data: string; durationMs: number }
	| { kind: 'failure'; code: QRReadErrorCode };

export type QrReadImageBuffer = {
	data: Uint8ClampedArray;
	width: number;
	height: number;
};

export type JsQrFunction = (
	data: Uint8ClampedArray,
	width: number,
	height: number,
	providedOptions?: Options
) => import('jsqr').QRCode | null;

export function decodeQrFromImageBuffer(
	buffer: QrReadImageBuffer,
	jsQR: JsQrFunction,
	options: Options = DEFAULT_JSQR_OPTIONS
): QRReadResult {
	const start = typeof performance !== 'undefined' ? performance.now() : 0;
	try {
		const code = jsQR(buffer.data, buffer.width, buffer.height, options);
		const end = typeof performance !== 'undefined' ? performance.now() : start;
		if (!code || code.data.length === 0) {
			return { kind: 'failure', code: 'no_qr_found' };
		}
		return { kind: 'success', data: code.data, durationMs: end - start };
	} catch {
		return { kind: 'failure', code: 'decode_failed' };
	}
}

export type QRReadWorkerRequest = {
	id: number;
	width: number;
	height: number;
	buffer: ArrayBuffer;
};

export type QRReadWorkerResponse = {
	id: number;
	result?: QRReadResult;
	error?: string;
};
