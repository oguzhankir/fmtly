import { get } from 'svelte/store';
import { input } from './input.store';
import { output } from './output.store';

let currentToolSlug = '';
let timeoutId: ReturnType<typeof setTimeout>;

export function initGenerateStore(toolSlug: string) {
	currentToolSlug = toolSlug;
	processGenerate(get(input));
}

const VALID_SLUGS = [
	'json-to-typescript',
	'json-to-python',
	'json-to-go',
	'json-to-rust',
	'json-to-java',
	'json-to-csharp',
	'json-to-zod',
	'json-schema',
	'markdown-table'
];

const QUICKTYPE_MAP: Record<string, string> = {
	'json-to-typescript': 'typescript',
	'json-to-python': 'python',
	'json-to-go': 'go',
	'json-to-rust': 'rust',
	'json-to-java': 'java',
	'json-to-csharp': 'csharp'
};

async function processGenerate(val: string) {
	clearTimeout(timeoutId);
	timeoutId = setTimeout(async () => {
		if (!val?.trim()) {
			output.set('');
			return;
		}

		try {
			let result = '';

			if (currentToolSlug in QUICKTYPE_MAP) {
				const engine = await import('../engines/generator/quicktype.engine');
				const lang = QUICKTYPE_MAP[currentToolSlug] as Parameters<typeof engine.jsonToType>[1];
				result = await engine.jsonToType(val, lang, { justTypes: true });
			} else if (currentToolSlug === 'json-to-zod') {
				const engine = await import('../engines/generator/quicktype.engine');
				result = engine.jsonToZod(val);
			} else if (currentToolSlug === 'json-schema') {
				const engine = await import('../engines/generator/schema.engine');
				result = engine.generateJsonSchema(val);
			} else if (currentToolSlug === 'markdown-table') {
				const engine = await import('../engines/generator/quicktype.engine');
				result = engine.jsonToMarkdownTable(val);
			}

			if (result) {
				output.set(result);
			}
		} catch (e: unknown) {
			const msg = e instanceof Error ? e.message : 'Processing error';
			output.set(`// Error: ${msg}`);
		}
	}, 300);
}

input.subscribe((val) => {
	if (VALID_SLUGS.includes(currentToolSlug)) {
		processGenerate(val);
	}
});
