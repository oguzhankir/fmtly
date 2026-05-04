export type FaviconSize = 16 | 32 | 48 | 96 | 128 | 180 | 192 | 256 | 512;

export type FaviconFile = {
	filename: string;
	label: string;
	sizeTag: FaviconSize | 'ico' | 'svg';
	dataUrl: string;
	sizeBytes: number;
	mimeType: string;
};

export type FaviconInput = {
	dataUrl: string;
	sourceName: string;
	sourceType: string;
	sourceSizeBytes: number;
	isSvg: boolean;
};

export type FaviconOptions = {
	includeIco: boolean;
	includeSvg: boolean;
	includeManifest: boolean;
};

export type FaviconMetadata = {
	totalFiles: number;
	totalSizeBytes: number;
	sourceWidth: number;
	sourceHeight: number;
	durationMs: number;
};

export type FaviconResult = {
	files: FaviconFile[];
	metadata: FaviconMetadata;
	manifestJson: string;
};

export type FaviconGeneratorWorkerRequest = {
	id: number;
	input: FaviconInput;
	options: FaviconOptions;
};

export type FaviconGeneratorWorkerResponse = {
	id: number;
	result?: FaviconResult;
	error?: string;
};

export const FAVICON_GENERATOR_WORKER_THRESHOLD_BYTES = 500 * 1024;

export const FAVICON_PNG_SIZES: FaviconSize[] = [16, 32, 48, 96, 128, 180, 192, 256, 512];

export const FAVICON_GENERATOR_DEFAULT_OPTIONS: FaviconOptions = {
	includeIco: true,
	includeSvg: true,
	includeManifest: true
};

export function shouldUseFaviconGeneratorWorker(bytes: number, isSvg: boolean): boolean {
	return bytes > FAVICON_GENERATOR_WORKER_THRESHOLD_BYTES && !isSvg;
}

export function readFaviconImageFile(file: File): Promise<FaviconInput> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result !== 'string') {
				reject(new Error('Could not read image file'));
				return;
			}
			resolve({
				dataUrl: reader.result,
				sourceName: file.name,
				sourceType: file.type,
				sourceSizeBytes: file.size,
				isSvg: file.type === 'image/svg+xml'
			});
		};
		reader.onerror = () => {
			reject(reader.error ?? new Error('Could not read image file'));
		};
		reader.readAsDataURL(file);
	});
}

function getSizeFilename(size: FaviconSize): string {
	if (size === 180) return 'apple-touch-icon.png';
	if (size === 192) return 'android-chrome-192x192.png';
	if (size === 512) return 'android-chrome-512x512.png';
	return `favicon-${size}x${size}.png`;
}

function getSizeLabel(size: FaviconSize): string {
	if (size === 180) return 'Apple Touch (180×180)';
	if (size === 192) return 'Android Chrome (192×192)';
	if (size === 512) return 'Android Chrome (512×512)';
	return `${size}×${size}`;
}

function dataUrlToBlob(dataUrl: string): Blob {
	const [header, payload = ''] = dataUrl.split(',', 2);
	const mimeType = header.match(/data:([^;]+)/u)?.[1] ?? 'application/octet-stream';
	const binary = atob(payload);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) {
		bytes[i] = binary.charCodeAt(i);
	}
	return new Blob([bytes], { type: mimeType });
}

function blobToDataUrl(blob: Blob): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = () => reject(new Error('Failed to convert blob to data URL'));
		reader.readAsDataURL(blob);
	});
}

function createCanvas(width: number, height: number): OffscreenCanvas | HTMLCanvasElement {
	if (typeof OffscreenCanvas !== 'undefined') {
		return new OffscreenCanvas(width, height);
	}
	if (typeof document === 'undefined') {
		throw new Error('Canvas API is unavailable');
	}
	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	return canvas;
}

async function canvasToDataUrl(
	canvas: OffscreenCanvas | HTMLCanvasElement,
	format: 'image/png'
): Promise<string> {
	if ('convertToBlob' in canvas) {
		const blob = await canvas.convertToBlob({ type: format });
		return blobToDataUrl(blob);
	}
	return (canvas as HTMLCanvasElement).toDataURL(format);
}

function getDataUrlByteSize(dataUrl: string): number {
	const payload = dataUrl.split(',', 2)[1] ?? '';
	if (!payload) return 0;
	const padding = payload.endsWith('==') ? 2 : payload.endsWith('=') ? 1 : 0;
	return Math.max(0, Math.floor((payload.length * 3) / 4) - padding);
}

async function renderPng(
	bitmap: ImageBitmap,
	size: number
): Promise<{ dataUrl: string; sizeBytes: number }> {
	const canvas = createCanvas(size, size);
	const ctx = canvas.getContext('2d') as
		| CanvasRenderingContext2D
		| OffscreenCanvasRenderingContext2D
		| null;
	if (!ctx) throw new Error('2D canvas context unavailable');
	ctx.imageSmoothingEnabled = true;
	(ctx as CanvasRenderingContext2D & { imageSmoothingQuality: string }).imageSmoothingQuality =
		'high';
	ctx.clearRect(0, 0, size, size);
	ctx.drawImage(bitmap, 0, 0, size, size);
	const dataUrl = await canvasToDataUrl(canvas, 'image/png');
	return { dataUrl, sizeBytes: getDataUrlByteSize(dataUrl) };
}

function dataUrlToUint8Array(dataUrl: string): Uint8Array {
	const payload = dataUrl.split(',', 2)[1] ?? '';
	const binary = atob(payload);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) {
		bytes[i] = binary.charCodeAt(i);
	}
	return bytes;
}

async function buildIcoDataUrl(bitmap: ImageBitmap, sizes: number[]): Promise<string> {
	const pngs: Uint8Array[] = [];
	for (const size of sizes) {
		const { dataUrl } = await renderPng(bitmap, size);
		pngs.push(dataUrlToUint8Array(dataUrl));
	}

	const headerSize = 6;
	const entrySize = 16;
	const totalHeaderSize = headerSize + entrySize * sizes.length;
	const totalSize = totalHeaderSize + pngs.reduce((s, p) => s + p.length, 0);

	const buffer = new ArrayBuffer(totalSize);
	const view = new DataView(buffer);
	const bytes = new Uint8Array(buffer);

	view.setUint16(0, 0, true);
	view.setUint16(2, 1, true);
	view.setUint16(4, sizes.length, true);

	let dataOffset = totalHeaderSize;
	for (let i = 0; i < sizes.length; i++) {
		const size = sizes[i];
		const png = pngs[i];
		const base = headerSize + i * entrySize;
		view.setUint8(base, size >= 256 ? 0 : size);
		view.setUint8(base + 1, size >= 256 ? 0 : size);
		view.setUint8(base + 2, 0);
		view.setUint8(base + 3, 0);
		view.setUint16(base + 4, 1, true);
		view.setUint16(base + 6, 32, true);
		view.setUint32(base + 8, png.length, true);
		view.setUint32(base + 12, dataOffset, true);
		bytes.set(png, dataOffset);
		dataOffset += png.length;
	}

	let binary = '';
	for (let i = 0; i < bytes.length; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return `data:image/x-icon;base64,${btoa(binary)}`;
}

function generateManifestJson(): string {
	return JSON.stringify(
		{
			name: 'My App',
			short_name: 'App',
			icons: [
				{ src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
				{ src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
			],
			theme_color: '#ffffff',
			background_color: '#ffffff',
			display: 'standalone'
		},
		null,
		2
	);
}

export async function generateFaviconSet(
	input: FaviconInput,
	options: Partial<FaviconOptions> = {}
): Promise<FaviconResult> {
	const opts: FaviconOptions = { ...FAVICON_GENERATOR_DEFAULT_OPTIONS, ...options };
	const t0 = performance.now();

	const sourceBlob = dataUrlToBlob(input.dataUrl);
	const bitmap = await createImageBitmap(sourceBlob);
	const sourceWidth = bitmap.width;
	const sourceHeight = bitmap.height;

	const files: FaviconFile[] = [];

	for (const size of FAVICON_PNG_SIZES) {
		const { dataUrl, sizeBytes } = await renderPng(bitmap, size);
		files.push({
			filename: getSizeFilename(size),
			label: getSizeLabel(size),
			sizeTag: size,
			dataUrl,
			sizeBytes,
			mimeType: 'image/png'
		});
	}

	if (opts.includeIco) {
		const icoDataUrl = await buildIcoDataUrl(bitmap, [16, 32, 48]);
		files.push({
			filename: 'favicon.ico',
			label: 'ICO (16, 32, 48)',
			sizeTag: 'ico',
			dataUrl: icoDataUrl,
			sizeBytes: getDataUrlByteSize(icoDataUrl),
			mimeType: 'image/x-icon'
		});
	}

	if (opts.includeSvg && input.isSvg) {
		files.push({
			filename: 'favicon.svg',
			label: 'SVG',
			sizeTag: 'svg',
			dataUrl: input.dataUrl,
			sizeBytes: input.sourceSizeBytes,
			mimeType: 'image/svg+xml'
		});
	}

	bitmap.close();

	const manifestJson = opts.includeManifest ? generateManifestJson() : '';
	const manifestCount = opts.includeManifest ? 1 : 0;
	const totalSizeBytes = files.reduce((s, f) => s + f.sizeBytes, 0);

	return {
		files,
		metadata: {
			totalFiles: files.length + manifestCount,
			totalSizeBytes,
			sourceWidth,
			sourceHeight,
			durationMs: performance.now() - t0
		},
		manifestJson
	};
}

function crc32(data: Uint8Array): number {
	const table = buildCrc32Table();
	let crc = 0xffffffff;
	for (const byte of data) {
		crc = (crc >>> 8) ^ table[(crc ^ byte) & 0xff];
	}
	return (crc ^ 0xffffffff) >>> 0;
}

let crc32TableCache: Uint32Array | null = null;
function buildCrc32Table(): Uint32Array {
	if (crc32TableCache) return crc32TableCache;
	crc32TableCache = new Uint32Array(256);
	for (let i = 0; i < 256; i++) {
		let c = i;
		for (let j = 0; j < 8; j++) {
			c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
		}
		crc32TableCache[i] = c;
	}
	return crc32TableCache;
}

export function buildFaviconZip(files: FaviconFile[], manifestJson: string): Uint8Array {
	const encoder = new TextEncoder();
	const zipEntries: Array<{ name: string; data: Uint8Array }> = [];

	for (const file of files) {
		if (file.mimeType === 'image/svg+xml') {
			const svgText = decodeURIComponent(escape(atob(file.dataUrl.split(',', 2)[1] ?? '')));
			zipEntries.push({ name: file.filename, data: encoder.encode(svgText) });
		} else {
			zipEntries.push({ name: file.filename, data: dataUrlToUint8Array(file.dataUrl) });
		}
	}

	if (manifestJson) {
		zipEntries.push({ name: 'site.webmanifest', data: encoder.encode(manifestJson) });
	}

	return buildZip(zipEntries);
}

function buildZip(entries: Array<{ name: string; data: Uint8Array }>): Uint8Array {
	const encoder = new TextEncoder();
	const now = new Date();
	const dosDate =
		(((now.getFullYear() - 1980) & 0x7f) << 9) |
		(((now.getMonth() + 1) & 0x0f) << 5) |
		(now.getDate() & 0x1f);
	const dosTime =
		((now.getHours() & 0x1f) << 11) |
		((now.getMinutes() & 0x3f) << 5) |
		((now.getSeconds() >> 1) & 0x1f);

	const localParts: Uint8Array[] = [];
	const centralParts: Uint8Array[] = [];
	const offsets: number[] = [];
	let offset = 0;

	for (const entry of entries) {
		const nameBytes = encoder.encode(entry.name);
		const checksum = crc32(entry.data);

		const local = new Uint8Array(30 + nameBytes.length);
		const lv = new DataView(local.buffer);
		lv.setUint32(0, 0x04034b50, true);
		lv.setUint16(4, 20, true);
		lv.setUint16(6, 0, true);
		lv.setUint16(8, 0, true);
		lv.setUint16(10, dosTime, true);
		lv.setUint16(12, dosDate, true);
		lv.setUint32(14, checksum, true);
		lv.setUint32(18, entry.data.length, true);
		lv.setUint32(22, entry.data.length, true);
		lv.setUint16(26, nameBytes.length, true);
		lv.setUint16(28, 0, true);
		local.set(nameBytes, 30);

		const central = new Uint8Array(46 + nameBytes.length);
		const cv = new DataView(central.buffer);
		cv.setUint32(0, 0x02014b50, true);
		cv.setUint16(4, 20, true);
		cv.setUint16(6, 20, true);
		cv.setUint16(8, 0, true);
		cv.setUint16(10, 0, true);
		cv.setUint16(12, dosTime, true);
		cv.setUint16(14, dosDate, true);
		cv.setUint32(16, checksum, true);
		cv.setUint32(20, entry.data.length, true);
		cv.setUint32(24, entry.data.length, true);
		cv.setUint16(28, nameBytes.length, true);
		cv.setUint16(30, 0, true);
		cv.setUint16(32, 0, true);
		cv.setUint16(34, 0, true);
		cv.setUint16(36, 0, true);
		cv.setUint32(38, 0, true);
		cv.setUint32(42, offset, true);
		central.set(nameBytes, 46);

		offsets.push(offset);
		localParts.push(local, entry.data);
		centralParts.push(central);
		offset += local.length + entry.data.length;
	}

	const centralOffset = offset;
	const centralSize = centralParts.reduce((s, c) => s + c.length, 0);

	const eocd = new Uint8Array(22);
	const ev = new DataView(eocd.buffer);
	ev.setUint32(0, 0x06054b50, true);
	ev.setUint16(4, 0, true);
	ev.setUint16(6, 0, true);
	ev.setUint16(8, entries.length, true);
	ev.setUint16(10, entries.length, true);
	ev.setUint32(12, centralSize, true);
	ev.setUint32(16, centralOffset, true);
	ev.setUint16(20, 0, true);

	const parts = [...localParts, ...centralParts, eocd];
	const total = parts.reduce((s, p) => s + p.length, 0);
	const result = new Uint8Array(total);
	let pos = 0;
	for (const part of parts) {
		result.set(part, pos);
		pos += part.length;
	}
	return result;
}
