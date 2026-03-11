export async function toYaml(xml: string): Promise<string> {
	const { XMLParser } = await import('fast-xml-parser');
	const yaml = await import('js-yaml');
	const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
	const obj = parser.parse(xml);
	return yaml.dump(obj, { indent: 2 });
}

export async function toCsv(xml: string): Promise<string> {
	const { XMLParser } = await import('fast-xml-parser');
	const Papa = (await import('papaparse')).default || (await import('papaparse'));
	const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
	const obj = parser.parse(xml);

	let arrayData: any[] = [];
	const findArray = (curr: any) => {
		if (Array.isArray(curr)) {
			arrayData = curr;
			return true;
		}
		if (typeof curr === 'object' && curr !== null) {
			for (const key of Object.keys(curr)) {
				if (findArray(curr[key])) return true;
			}
		}
		return false;
	};
	findArray(obj);
	if (arrayData.length === 0) {
		const rootKey = Object.keys(obj)[0];
		if (rootKey && typeof obj[rootKey] === 'object') {
			arrayData = [obj[rootKey]];
		} else {
			arrayData = [obj];
		}
	}

	const flatten = (data: any, prefix = ''): Record<string, any> => {
		return Object.keys(data).reduce((acc: Record<string, any>, k) => {
			const pre = prefix.length ? `${prefix}.` : '';
			if (typeof data[k] === 'object' && data[k] !== null && !Array.isArray(data[k])) {
				Object.assign(acc, flatten(data[k], pre + k));
			} else {
				acc[pre + k] = data[k];
			}
			return acc;
		}, {});
	};

	const flatData = arrayData.map((item: any) => flatten(item));
	// Unparse returning CSV string
	const result = Papa.unparse(flatData);
	return result;
}
