import { formatCode } from './prettier.engine.js';
import type { PrettierOptions } from './prettier.engine.js';

export async function formatGraphQL(schema: string, options?: PrettierOptions): Promise<string> {
	return formatCode(schema, 'graphql', options);
}
