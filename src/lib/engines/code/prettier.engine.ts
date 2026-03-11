import type { Plugin } from 'prettier';

// Lazy-loaded Prettier WASM — never in initial bundle.
// First call triggers download (~400KB); subsequent calls are instant.

export type PrettierOptions = {
	tabWidth?: number;
	useTabs?: boolean;
	singleQuote?: boolean;
	semi?: boolean;
	printWidth?: number;
	trailingComma?: 'none' | 'all' | 'es5';
	bracketSpacing?: boolean;
	arrowParens?: 'avoid' | 'always';
	htmlWhitespaceSensitivity?: 'css' | 'strict' | 'ignore';
	proseWrap?: 'always' | 'never' | 'preserve';
	endOfLine?: 'lf' | 'crlf' | 'cr' | 'auto';
};

let prettierModule: typeof import('prettier/standalone') | null = null;
let plugins: Plugin[] = [];
let loadPromise: Promise<void> | null = null;

async function loadPrettier(): Promise<{
	prettier: typeof import('prettier/standalone');
	plugins: Plugin[];
}> {
	if (prettierModule) return { prettier: prettierModule, plugins };

	if (!loadPromise) {
		loadPromise = (async () => {
			const [prettier, pluginBabel, pluginEstree, pluginCss, pluginHtml, pluginGql, pluginMd] =
				await Promise.all([
					import('prettier/standalone'),
					import('prettier/plugins/babel'),
					import('prettier/plugins/estree'),
					import('prettier/plugins/postcss'),
					import('prettier/plugins/html'),
					import('prettier/plugins/graphql'),
					import('prettier/plugins/markdown')
				]);

			prettierModule = prettier;
			plugins = [
				pluginBabel as unknown as Plugin,
				pluginEstree as unknown as Plugin,
				pluginCss as unknown as Plugin,
				pluginHtml as unknown as Plugin,
				pluginGql as unknown as Plugin,
				pluginMd as unknown as Plugin
			];
		})();
	}

	await loadPromise;
	return { prettier: prettierModule!, plugins };
}

export async function formatCode(
	code: string,
	parser: string,
	options: PrettierOptions = {}
): Promise<string> {
	const { prettier, plugins } = await loadPrettier();
	return prettier.format(code, {
		parser,
		plugins,
		tabWidth: options.tabWidth ?? 2,
		useTabs: options.useTabs ?? false,
		singleQuote: options.singleQuote ?? false,
		semi: options.semi ?? true,
		printWidth: options.printWidth ?? 80,
		trailingComma: options.trailingComma ?? 'es5',
		bracketSpacing: options.bracketSpacing ?? true,
		arrowParens: options.arrowParens ?? 'always',
		htmlWhitespaceSensitivity: options.htmlWhitespaceSensitivity ?? 'css',
		proseWrap: options.proseWrap ?? 'preserve',
		endOfLine: options.endOfLine ?? 'lf',
		...options
	});
}

export async function minifyCode(code: string, parser: string): Promise<string> {
	const { prettier, plugins } = await loadPrettier();
	return prettier.format(code, {
		parser,
		plugins,
		printWidth: 999999,
		tabWidth: 0,
		useTabs: false,
		semi: true,
		singleQuote: false,
		bracketSpacing: false
	});
}

export function isPrettierLoaded(): boolean {
	return prettierModule !== null;
}
