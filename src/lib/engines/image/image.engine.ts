// Image processing engine — Canvas API + browser-image-compression, all client-side

export type ResizeOptions = {
	width?: number;
	height?: number;
	maintainAspectRatio: boolean;
	outputFormat: 'image/png' | 'image/jpeg' | 'image/webp';
	quality: number; // 0-1
};

export type CompressOptions = {
	maxSizeMB: number;
	maxWidthOrHeight?: number;
	quality?: number; // 0-1
};

export type CompressResult = {
	blob: Blob;
	originalSize: number;
	compressedSize: number;
	ratio: number;
};

export type ImageInfo = {
	width: number;
	height: number;
	format: string;
	size: number;
};

export async function getImageInfo(file: File): Promise<ImageInfo> {
	const bitmap = await createImageBitmap(file);
	return {
		width: bitmap.width,
		height: bitmap.height,
		format: file.type || 'unknown',
		size: file.size
	};
}

export async function resizeImage(file: File, options: ResizeOptions): Promise<Blob> {
	const bitmap = await createImageBitmap(file);
	let targetW = options.width ?? bitmap.width;
	let targetH = options.height ?? bitmap.height;

	if (options.maintainAspectRatio) {
		const aspect = bitmap.width / bitmap.height;
		if (options.width && !options.height) {
			targetH = Math.round(targetW / aspect);
		} else if (options.height && !options.width) {
			targetW = Math.round(targetH * aspect);
		} else if (options.width && options.height) {
			// fit within box
			const scaleW = targetW / bitmap.width;
			const scaleH = targetH / bitmap.height;
			const scale = Math.min(scaleW, scaleH);
			targetW = Math.round(bitmap.width * scale);
			targetH = Math.round(bitmap.height * scale);
		}
	}

	const canvas = new OffscreenCanvas(targetW, targetH);
	const ctx = canvas.getContext('2d')!;
	ctx.drawImage(bitmap, 0, 0, targetW, targetH);

	return canvas.convertToBlob({
		type: options.outputFormat,
		quality: options.quality
	});
}

export async function convertImage(
	file: File,
	targetFormat: 'image/png' | 'image/jpeg' | 'image/webp',
	quality: number = 0.92
): Promise<Blob> {
	const bitmap = await createImageBitmap(file);
	const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
	const ctx = canvas.getContext('2d')!;
	ctx.drawImage(bitmap, 0, 0);

	return canvas.convertToBlob({ type: targetFormat, quality });
}

export async function compressImage(file: File, options: CompressOptions): Promise<CompressResult> {
	const { default: imageCompression } = await import('browser-image-compression');
	const originalSize = file.size;

	const compressed = await imageCompression(file, {
		maxSizeMB: options.maxSizeMB,
		maxWidthOrHeight: options.maxWidthOrHeight,
		initialQuality: options.quality,
		useWebWorker: true
	});

	return {
		blob: compressed,
		originalSize,
		compressedSize: compressed.size,
		ratio: Number(((1 - compressed.size / originalSize) * 100).toFixed(1))
	};
}

export function imageToBase64(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
}

export async function base64ToBlob(dataUrl: string): Promise<Blob> {
	const response = await fetch(dataUrl);
	return response.blob();
}

export function getFormatExtension(mime: string): string {
	const map: Record<string, string> = {
		'image/png': 'png',
		'image/jpeg': 'jpg',
		'image/webp': 'webp',
		'image/gif': 'gif',
		'image/svg+xml': 'svg',
		'image/bmp': 'bmp'
	};
	return map[mime] ?? 'bin';
}
