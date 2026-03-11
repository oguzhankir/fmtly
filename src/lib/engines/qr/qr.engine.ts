// QR engine — lazy loads qrcode and jsqr

export type QrOptions = {
	size?: number;
	margin?: number;
	darkColor?: string;
	lightColor?: string;
	errorCorrection?: 'L' | 'M' | 'Q' | 'H';
};

export type QrDecodeResult = { success: true; data: string } | { success: false; data?: undefined };

export async function generateQr(content: string, options: QrOptions = {}): Promise<string> {
	const QRCode = (await import('qrcode')).default;
	return QRCode.toDataURL(content, {
		width: options.size ?? 300,
		margin: options.margin ?? 2,
		color: {
			dark: options.darkColor ?? '#000000',
			light: options.lightColor ?? '#ffffff'
		},
		errorCorrectionLevel: options.errorCorrection ?? 'M'
	});
}

export async function generateQrSvg(content: string, options: QrOptions = {}): Promise<string> {
	const QRCode = (await import('qrcode')).default;
	return QRCode.toString(content, {
		type: 'svg',
		width: options.size ?? 300,
		margin: options.margin ?? 2,
		color: {
			dark: options.darkColor ?? '#000000',
			light: options.lightColor ?? '#ffffff'
		},
		errorCorrectionLevel: options.errorCorrection ?? 'M'
	});
}

export async function decodeQr(imageData: ImageData): Promise<QrDecodeResult> {
	const jsQR = (await import('jsqr')).default;
	const result = jsQR(imageData.data, imageData.width, imageData.height);
	return result ? { success: true, data: result.data } : { success: false };
}

// Helper: build vCard string
export function buildVCard(contact: {
	name: string;
	phone?: string;
	email?: string;
	org?: string;
}): string {
	const lines = ['BEGIN:VCARD', 'VERSION:3.0', `FN:${contact.name}`];
	if (contact.phone) lines.push(`TEL:${contact.phone}`);
	if (contact.email) lines.push(`EMAIL:${contact.email}`);
	if (contact.org) lines.push(`ORG:${contact.org}`);
	lines.push('END:VCARD');
	return lines.join('\n');
}

// Helper: build WiFi string
export function buildWifi(
	ssid: string,
	password: string,
	encryption: 'WPA' | 'WEP' | 'nopass'
): string {
	return `WIFI:T:${encryption};S:${ssid};P:${password};;`;
}

// Helper: build mailto string
export function buildEmail(to: string, subject?: string, body?: string): string {
	const params: string[] = [];
	if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
	if (body) params.push(`body=${encodeURIComponent(body)}`);
	return `mailto:${to}${params.length ? '?' + params.join('&') : ''}`;
}
