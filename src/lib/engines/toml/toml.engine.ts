export async function format(toml: string): Promise<string> {
	const { parse, stringify } = await import('smol-toml');
	return stringify(parse(toml));
}

export type ValidationResult = { valid: boolean; error?: string };

export async function validate(toml: string): Promise<ValidationResult> {
	try {
		const { parse } = await import('smol-toml');
		parse(toml);
		return { valid: true };
	} catch (error: unknown) {
		return {
			valid: false,
			error:
				typeof error === 'object' &&
				error !== null &&
				'message' in error &&
				typeof error.message === 'string'
					? error.message
					: String(error)
		};
	}
}

export async function toJson(toml: string): Promise<string> {
	const { parse } = await import('smol-toml');
	return JSON.stringify(parse(toml), null, 2);
}

export async function minifyToml(toml: string): Promise<string> {
	const { parse } = await import('smol-toml');
	const parsed = parse(toml);
	// Rebuild TOML from parsed object — minified by serializing with minimal whitespace
	const { stringify } = await import('smol-toml');
	return stringify(parsed)
		.replace(/\n{2,}/g, '\n')
		.trim();
}

export async function toYaml(toml: string): Promise<string> {
	const { parse } = await import('smol-toml');
	const yaml = await import('js-yaml');
	return yaml.dump(parse(toml), { indent: 2 });
}

export async function toXml(toml: string): Promise<string> {
	const { parse } = await import('smol-toml');
	const { XMLBuilder } = await import('fast-xml-parser');

	const builder = new XMLBuilder({
		ignoreAttributes: false,
		format: true,
		indentBy: '  '
	});

	return builder.build({ root: parse(toml) });
}

export async function toHtml(toml: string): Promise<string> {
	const { parse } = await import('smol-toml');
	const parsed = parse(toml);

	// Convert parsed TOML to HTML structure
	// Let's create a generic JSON-to-HTML table converter for this since TOML parses to a JS object
	return jsonToHtmlTable(parsed);
}

function jsonToHtmlTable(obj: any): string {
	if (obj === null || obj === undefined) return String(obj);
	if (typeof obj !== 'object') return String(obj);

	if (Array.isArray(obj)) {
		if (obj.length === 0) return '[]';
		let html = '<table class="fmtly-table">\n';

		// If array of objects, create headers
		if (typeof obj[0] === 'object' && obj[0] !== null && !Array.isArray(obj[0])) {
			const keys = new Set<string>();
			obj.forEach((item) => {
				if (typeof item === 'object' && item !== null) {
					Object.keys(item).forEach((k) => keys.add(k));
				}
			});

			const headerRow = Array.from(keys);
			html += '  <thead>\n    <tr>\n';
			headerRow.forEach((key) => {
				html += `      <th>${escapeHtml(key)}</th>\n`;
			});
			html += '    </tr>\n  </thead>\n  <tbody>\n';

			obj.forEach((item) => {
				html += '    <tr>\n';
				headerRow.forEach((key) => {
					const val = (item as Record<string, any>)[key];
					html += `      <td>${val !== undefined ? jsonToHtmlTable(val) : ''}</td>\n`;
				});
				html += '    </tr>\n';
			});
			html += '  </tbody>\n';
		} else {
			// Simple array
			html += '  <tbody>\n';
			obj.forEach((item) => {
				html += `    <tr><td>${jsonToHtmlTable(item)}</td></tr>\n`;
			});
			html += '  </tbody>\n';
		}
		html += '</table>';
		return html;
	}

	// Object
	const keys = Object.keys(obj);
	if (keys.length === 0) return '{}';

	let html = '<table class="fmtly-table">\n  <tbody>\n';
	keys.forEach((key) => {
		html += `    <tr>\n      <th>${escapeHtml(key)}</th>\n      <td>${jsonToHtmlTable((obj as Record<string, any>)[key])}</td>\n    </tr>\n`;
	});
	html += '  </tbody>\n</table>';
	return html;
}

function escapeHtml(unsafe: string): string {
	return unsafe
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}
