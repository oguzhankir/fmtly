export async function toXml(csv: string): Promise<string> {
	const Papa = (await import('papaparse')).default || (await import('papaparse'));
	const { XMLBuilder } = await import('fast-xml-parser');
	const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
	const builder = new XMLBuilder({ ignoreAttributes: false, format: true });
	return builder.build({ root: { row: parsed.data } });
}

export async function toYaml(csv: string): Promise<string> {
	const Papa = (await import('papaparse')).default || (await import('papaparse'));
	const yaml = await import('js-yaml');
	const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true, dynamicTyping: true });
	return yaml.dump(parsed.data, { indent: 2 });
}

export async function toHtmlTable(csv: string): Promise<string> {
	const Papa = (await import('papaparse')).default || (await import('papaparse'));
	const parsed = Papa.parse(csv, { header: true, skipEmptyLines: true });
	const data = parsed.data as Record<string, any>[];
	if (data.length === 0) return '<table></table>';

	const keys = Object.keys(data[0]);
	let html = '<table>\n  <thead>\n    <tr>\n';
	for (const k of keys) html += `      <th>${escapeHtml(k)}</th>\n`;
	html += '    </tr>\n  </thead>\n  <tbody>\n';

	for (const row of data) {
		html += '    <tr>\n';
		for (const k of keys) {
			html += `      <td>${escapeHtml(String(row[k] ?? ''))}</td>\n`;
		}
		html += '    </tr>\n';
	}
	html += '  </tbody>\n</table>';
	return html;
}

function escapeHtml(str: string): string {
	return str.replace(
		/[&<>'"]/g,
		(tag) =>
			({
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				"'": '&#39;',
				'"': '&quot;'
			})[tag] || tag
	);
}

export async function format(csv: string): Promise<string> {
	const Papa = (await import('papaparse')).default || (await import('papaparse'));
	const parsed = Papa.parse(csv, { header: false, skipEmptyLines: true });
	return Papa.unparse(parsed.data, {
		quotes: true,
		quoteChar: '"',
		escapeChar: '"',
		delimiter: ','
	});
}

export type ValidationResult = { valid: boolean; error?: string };
export async function validate(csv: string): Promise<ValidationResult> {
	const Papa = (await import('papaparse')).default || (await import('papaparse'));
	const parsed = Papa.parse(csv, { header: true });
	if (parsed.errors && parsed.errors.length > 0) {
		return { valid: false, error: parsed.errors[0].message };
	}
	return { valid: true };
}
