import { formatCode, minifyCode } from './prettier.engine.js';
import type { PrettierOptions } from './prettier.engine.js';

export async function formatCSS(css: string, options?: PrettierOptions): Promise<string> {
	return formatCode(css, 'css', options);
}

export async function formatSCSS(scss: string, options?: PrettierOptions): Promise<string> {
	return formatCode(scss, 'scss', options);
}

export async function formatLESS(less: string, options?: PrettierOptions): Promise<string> {
	return formatCode(less, 'less', options);
}

export async function minifyCSS(css: string): Promise<string> {
	return minifyCode(css, 'css');
}

export async function minifySCSS(scss: string): Promise<string> {
	return minifyCode(scss, 'scss');
}

export async function minifyLESS(less: string): Promise<string> {
	return minifyCode(less, 'less');
}
