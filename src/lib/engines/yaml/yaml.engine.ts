type QueryableYamlValue =
	| string
	| number
	| boolean
	| null
	| QueryableYamlValue[]
	| { [key: string]: QueryableYamlValue };

function toQueryableYamlValue(value: unknown): QueryableYamlValue {
	if (value === null || value === undefined) return null;
	if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
		return value;
	}
	if (Array.isArray(value)) {
		return value.map((entry) => toQueryableYamlValue(entry));
	}
	if (typeof value === 'object') {
		return Object.fromEntries(
			Object.entries(value as Record<string, unknown>).map(([key, entry]) => [
				key,
				toQueryableYamlValue(entry)
			])
		);
	}
	return String(value);
}

async function loadYamlData(yamlText: string): Promise<QueryableYamlValue> {
	const jsYaml = await import('js-yaml');
	const documents: unknown[] = [];

	jsYaml.loadAll(yamlText, (document: unknown) => {
		documents.push(document);
	});

	return toQueryableYamlValue(documents.length <= 1 ? (documents[0] ?? null) : documents);
}

export async function toXml(yaml: string): Promise<string> {
	const { XMLBuilder } = await import('fast-xml-parser');
	const obj = await loadYamlData(yaml);
	const builder = new XMLBuilder({ ignoreAttributes: false, format: true });
	if (Array.isArray(obj)) {
		return builder.build({ root: { item: obj } });
	}
	return builder.build({ root: obj });
}

export async function toCsv(yaml: string): Promise<string> {
	const Papa = (await import('papaparse')).default || (await import('papaparse'));
	const obj = await loadYamlData(yaml);
	let data = obj;
	if (!Array.isArray(obj)) {
		if (typeof obj === 'object' && obj !== null) {
			data = [obj];
		} else {
			throw new Error('YAML must contain an array or object to convert to CSV');
		}
	}

	const flatten = (item: any, prefix = ''): Record<string, any> => {
		return Object.keys(item).reduce((acc: Record<string, any>, k) => {
			const pre = prefix.length ? `${prefix}.` : '';
			if (typeof item[k] === 'object' && item[k] !== null && !Array.isArray(item[k])) {
				Object.assign(acc, flatten(item[k], pre + k));
			} else {
				acc[pre + k] = item[k];
			}
			return acc;
		}, {});
	};

	const flatData = (data as any[]).map((item) => flatten(item));
	return Papa.unparse(flatData);
}

export async function toToml(yaml: string): Promise<string> {
	const { stringify } = await import('smol-toml');
	const obj = await loadYamlData(yaml);
	return stringify(obj as any);
}

export async function yamlJsonpathQuery(yaml: string, query: string): Promise<unknown> {
	const { JSONPath } = await import('jsonpath-plus');
	const parsed = await loadYamlData(yaml);
	return JSONPath({ path: query, json: parsed });
}

export async function yamlJmespathQuery(yaml: string, query: string): Promise<unknown> {
	const mod = await import('jmespath');
	const jmespath = mod.default ?? mod;
	const parsed = await loadYamlData(yaml);
	return jmespath.search(parsed, query);
}

export type DiffResult = { valid: boolean; error?: string };
export async function diff(a: string, b: string): Promise<DiffResult> {
	const jsYaml = await import('js-yaml');
	try {
		jsYaml.load(a);
		jsYaml.load(b);
		return { valid: true };
	} catch (e: any) {
		return { valid: false, error: e.message };
	}
}
