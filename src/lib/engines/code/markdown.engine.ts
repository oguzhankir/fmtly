import { formatCode } from './prettier.engine.js';
import type { PrettierOptions } from './prettier.engine.js';

export async function formatMarkdown(md: string, options?: PrettierOptions): Promise<string> {
	return formatCode(md, 'markdown', { proseWrap: 'always', ...options });
}
