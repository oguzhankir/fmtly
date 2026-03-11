export async function toToml(json: string): Promise<string> {
	const { stringify } = await import('smol-toml');
	const parsed = JSON.parse(json);
	return stringify(parsed);
}

export async function toMarkdownTable(json: string): Promise<string> {
	const parsed = JSON.parse(json);
	if (!Array.isArray(parsed) || parsed.length === 0) {
		throw new Error('Input must be a non-empty array of objects for Markdown Table conversion');
	}
	const keys = Object.keys(parsed[0]);
	let md = `| ${keys.join(' | ')} |\n`;
	md += `| ${keys.map(() => '---').join(' | ')} |\n`;
	for (const row of parsed) {
		md += `| ${keys
			.map((k) => {
				const val = row[k];
				if (val === null || val === undefined) return '';
				if (typeof val === 'object') return JSON.stringify(val).replace(/\|/g, '\\|');
				return String(val).replace(/\|/g, '\\|').replace(/\n/g, '<br>');
			})
			.join(' | ')} |\n`;
	}
	return md;
}

export async function jsonpathQuery(json: string, query: string): Promise<unknown> {
	const { JSONPath } = await import('jsonpath-plus');
	const parsed = JSON.parse(json);
	return JSONPath({ path: query, json: parsed });
}

export async function jmespathQuery(json: string, query: string): Promise<unknown> {
	const jmespath = (await import('jmespath')).default || (await import('jmespath'));
	const parsed = JSON.parse(json);
	return jmespath.search(parsed, query);
}
