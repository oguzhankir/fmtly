export async function toYaml(xml: string): Promise<string> {
	const { XMLParser } = await import('fast-xml-parser');
	const yaml = await import('js-yaml');
	const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
	const obj = parser.parse(xml) as Record<string, unknown>;
	return yaml.dump(obj, { indent: 2 });
}

export async function toCsv(xml: string): Promise<string> {
	const { XMLParser } = await import('fast-xml-parser');
	const Papa = (await import('papaparse')).default || (await import('papaparse'));
	const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
	const obj = parser.parse(xml) as Record<string, unknown>;

	let arrayData: Record<string, unknown>[] = [];

	const findArray = (curr: unknown): boolean => {
		if (Array.isArray(curr)) {
			arrayData = curr as Record<string, unknown>[];
			return true;
		}
		if (typeof curr === 'object' && curr !== null) {
			for (const key of Object.keys(curr as object)) {
				if (findArray((curr as Record<string, unknown>)[key])) return true;
			}
		}
		return false;
	};

	findArray(obj);

	if (arrayData.length === 0) {
		const rootKey = Object.keys(obj)[0];
		if (rootKey && typeof obj[rootKey] === 'object') {
			arrayData = [obj[rootKey] as Record<string, unknown>];
		} else {
			arrayData = [obj];
		}
	}

	const flatten = (data: Record<string, unknown>, prefix = ''): Record<string, unknown> => {
		return Object.keys(data).reduce((acc: Record<string, unknown>, k) => {
			const pre = prefix.length ? `${prefix}.` : '';
			if (typeof data[k] === 'object' && data[k] !== null && !Array.isArray(data[k])) {
				Object.assign(acc, flatten(data[k] as Record<string, unknown>, pre + k));
			} else {
				acc[pre + k] = data[k];
			}
			return acc;
		}, {});
	};

	const flatData = arrayData.map((item) => flatten(item));
	const result = Papa.unparse(flatData);
	return result;
}
