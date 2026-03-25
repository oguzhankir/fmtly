import type * as PapaTypes from 'papaparse';

export type PapaParseModule = typeof PapaTypes;

function resolvePapaInstance(mod: unknown): PapaParseModule | null {
	let cur: unknown = mod;
	for (let depth = 0; depth < 6; depth++) {
		if (
			cur !== null &&
			typeof cur === 'object' &&
			typeof (cur as { parse?: unknown }).parse === 'function'
		) {
			return cur as PapaParseModule;
		}
		if (cur !== null && typeof cur === 'object' && 'default' in (cur as object)) {
			cur = (cur as { default: unknown }).default;
			continue;
		}
		break;
	}
	return null;
}

/**
 * Dynamic import of papaparse. Shape varies by environment (named exports,
 * `default`, or nested `default` from CJS/UMD interop).
 */
export async function loadPapaParse(): Promise<PapaParseModule> {
	const mod = await import('papaparse');
	const resolved = resolvePapaInstance(mod);
	if (resolved) {
		return resolved;
	}
	throw new Error('papaparse: could not resolve parse()');
}
