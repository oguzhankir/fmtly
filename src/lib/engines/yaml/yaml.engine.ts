export async function toXml(yaml: string): Promise<string> {
	const jsYaml = await import('js-yaml');
	const { XMLBuilder } = await import('fast-xml-parser');
	const obj = jsYaml.load(yaml);
	const builder = new XMLBuilder({ ignoreAttributes: false, format: true });
	if (Array.isArray(obj)) {
		return builder.build({ root: { item: obj } });
	}
	return builder.build({ root: obj });
}

export async function toCsv(yaml: string): Promise<string> {
	const jsYaml = await import('js-yaml');
	const Papa = (await import('papaparse')).default || (await import('papaparse'));
	const obj = jsYaml.load(yaml);
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
	const jsYaml = await import('js-yaml');
	const { stringify } = await import('smol-toml');
	const obj = jsYaml.load(yaml);
	return stringify(obj as any);
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
