declare module 'qrcode' {
	export type QRCodeErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

	export interface QRCodeColorOptions {
		dark?: string;
		light?: string;
	}

	export interface QRCodeCreateOptions {
		errorCorrectionLevel?: QRCodeErrorCorrectionLevel;
		margin?: number;
	}

	export interface QRCodeRenderOptions extends QRCodeCreateOptions {
		width?: number;
		type?: 'svg';
		color?: QRCodeColorOptions;
	}

	export interface QRCodeData {
		version: number;
		maskPattern: number;
		segments: Array<unknown>;
		modules: {
			size: number;
		};
	}

	export interface QRCodeModule {
		create(text: string, options?: QRCodeCreateOptions): QRCodeData;
		toString(text: string, options?: QRCodeRenderOptions): Promise<string>;
		toDataURL(text: string, options?: QRCodeRenderOptions): Promise<string>;
	}

	const QRCode: QRCodeModule;
	export default QRCode;
}
