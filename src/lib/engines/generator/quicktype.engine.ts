// Quicktype engine — lazy loads quicktype-core for JSON → type definitions

export type QuicktypeOptions = {
	typeName?: string;
	justTypes?: boolean;
};

const LANGUAGE_MAP = {
	typescript: 'TypeScript',
	python: 'Python',
	go: 'Go',
	rust: 'Rust',
	java: 'Java',
	csharp: 'C#',
	kotlin: 'Kotlin',
	dart: 'Dart'
} as const;

export type SupportedLanguage = keyof typeof LANGUAGE_MAP;

export async function jsonToType(
	jsonInput: string,
	language: SupportedLanguage,
	options: QuicktypeOptions = {}
): Promise<string> {
	const { quicktype, InputData, jsonInputForTargetLanguage } = await import('quicktype-core');

	const inputData = new InputData();
	const source = { name: options.typeName ?? 'Root', samples: [jsonInput] };
	await inputData.addSource('json', source, () => jsonInputForTargetLanguage(language));

	const result = await quicktype({
		inputData,
		lang: language,
		rendererOptions: {
			'just-types': options.justTypes !== false ? 'true' : 'false'
		}
	});

	return result.lines.join('\n');
}

// JSON → Zod schema (pure JS, no library needed)
export function jsonToZod(jsonInput: string, typeName = 'Root'): string {
	const data = JSON.parse(jsonInput);
	const lines: string[] = ['import { z } from "zod";', ''];
	lines.push(`export const ${typeName}Schema = ${inferZod(data, 1)};`);
	lines.push('');
	lines.push(`export type ${typeName} = z.infer<typeof ${typeName}Schema>;`);
	return lines.join('\n');
}

function inferZod(value: unknown, indent: number): string {
	const pad = '  '.repeat(indent);
	const padOuter = '  '.repeat(indent - 1);
	if (value === null) return 'z.null()';
	if (typeof value === 'string') return 'z.string()';
	if (typeof value === 'number') return Number.isInteger(value) ? 'z.number().int()' : 'z.number()';
	if (typeof value === 'boolean') return 'z.boolean()';
	if (Array.isArray(value)) {
		if (value.length === 0) return 'z.array(z.unknown())';
		return `z.array(${inferZod(value[0], indent)})`;
	}
	if (typeof value === 'object') {
		const entries = Object.entries(value as Record<string, unknown>);
		if (entries.length === 0) return 'z.object({})';
		const fields = entries.map(([k, v]) => `${pad}${k}: ${inferZod(v, indent + 1)}`);
		return `z.object({\n${fields.join(',\n')},\n${padOuter}})`;
	}
	return 'z.unknown()';
}

// JSON → Markdown Table
export function jsonToMarkdownTable(jsonInput: string): string {
	const data = JSON.parse(jsonInput);
	if (!Array.isArray(data) || data.length === 0) return '(Empty or non-array JSON)';
	const keys = Object.keys(data[0]);
	const header = `| ${keys.join(' | ')} |`;
	const separator = `| ${keys.map(() => '---').join(' | ')} |`;
	const rows = data.map(
		(row: Record<string, unknown>) => `| ${keys.map((k) => String(row[k] ?? '')).join(' | ')} |`
	);
	return [header, separator, ...rows].join('\n');
}
