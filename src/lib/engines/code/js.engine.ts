import { formatCode, minifyCode } from './prettier.engine.js';
import type { PrettierOptions } from './prettier.engine.js';

export type JsLanguage = 'babel' | 'typescript';

export async function formatJS(
	code: string,
	language: JsLanguage = 'babel',
	options?: PrettierOptions
): Promise<string> {
	// Use babel-ts parser for TypeScript — it handles JSX + TS in one pass
	const parser = language === 'typescript' ? 'babel-ts' : 'babel';
	return formatCode(code, parser, options);
}

export async function minifyJS(code: string, language: JsLanguage = 'babel'): Promise<string> {
	const parser = language === 'typescript' ? 'babel-ts' : 'babel';
	return minifyCode(code, parser);
}
