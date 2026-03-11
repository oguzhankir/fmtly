import { formatCode, minifyCode } from './prettier.engine.js';
import type { PrettierOptions } from './prettier.engine.js';

export async function formatHTML(html: string, options?: PrettierOptions): Promise<string> {
	return formatCode(html, 'html', options);
}

export async function minifyHTML(html: string): Promise<string> {
	return minifyCode(html, 'html');
}
