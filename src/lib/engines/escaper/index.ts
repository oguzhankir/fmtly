const HTML_ESCAPE_MAP: Record<string, string> = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;'
};

const HTML_UNESCAPE_MAP: Record<string, string> = {
	'&amp;': '&',
	'&lt;': '<',
	'&gt;': '>',
	'&quot;': '"',
	'&#39;': "'",
	'&#x27;': "'",
	'&apos;': "'"
};

const XML_ESCAPE_MAP: Record<string, string> = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&apos;'
};

const XML_UNESCAPE_MAP: Record<string, string> = {
	'&amp;': '&',
	'&lt;': '<',
	'&gt;': '>',
	'&quot;': '"',
	'&apos;': "'"
};

export function escapeHTML(input: string): string {
	return input.replace(/[&<>"']/g, (ch) => HTML_ESCAPE_MAP[ch] ?? ch);
}

export function unescapeHTML(input: string): string {
	return input.replace(
		/&(?:amp|lt|gt|quot|#39|#x27|apos);/g,
		(entity) => HTML_UNESCAPE_MAP[entity] ?? entity
	);
}

export function escapeXML(input: string): string {
	return input.replace(/[&<>"']/g, (ch) => XML_ESCAPE_MAP[ch] ?? ch);
}

export function unescapeXML(input: string): string {
	return input.replace(
		/&(?:amp|lt|gt|quot|apos);/g,
		(entity) => XML_UNESCAPE_MAP[entity] ?? entity
	);
}

export function escapeJavaScript(input: string): string {
	return input
		.replace(/\\/g, '\\\\')
		.replace(/'/g, "\\'")
		.replace(/"/g, '\\"')
		.replace(/\n/g, '\\n')
		.replace(/\r/g, '\\r')
		.replace(/\t/g, '\\t')
		.replace(/\0/g, '\\0')
		.replace(/\u2028/g, '\\u2028')
		.replace(/\u2029/g, '\\u2029');
}

export function unescapeJavaScript(input: string): string {
	return input.replace(
		/\\(u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|[0btnfr'"\\\/]|0)/g,
		(match, seq: string) => {
			switch (seq) {
				case '0':
					return '\0';
				case 'b':
					return '\b';
				case 't':
					return '\t';
				case 'n':
					return '\n';
				case 'f':
					return '\f';
				case 'r':
					return '\r';
				case "'":
					return "'";
				case '"':
					return '"';
				case '\\':
					return '\\';
				case '/':
					return '/';
				default:
					if (seq.startsWith('u')) {
						return String.fromCharCode(Number.parseInt(seq.slice(1), 16));
					}
					if (seq.startsWith('x')) {
						return String.fromCharCode(Number.parseInt(seq.slice(1), 16));
					}
					return match;
			}
		}
	);
}

export function escapeJSON(input: string): string {
	const jsonString = JSON.stringify(input);
	return jsonString.slice(1, -1);
}

export function unescapeJSON(input: string): string {
	try {
		return JSON.parse(`"${input}"`);
	} catch {
		return input;
	}
}

// --- SQL ESCAPING ---

export function escapeSql(s: string, dialect: 'mysql' | 'postgres' | 'sqlite'): string {
	if (dialect === 'mysql') {
		// MySQL escapes single quotes and backslashes
		return s.replace(/\\/g, '\\\\').replace(/'/g, "''");
	}

	if (dialect === 'postgres') {
		// Standard Postgres escapes single quotes by doubling them
		return s.replace(/'/g, "''");
	}

	if (dialect === 'sqlite') {
		// SQLite escapes single quotes by doubling them
		return s.replace(/'/g, "''");
	}

	return s;
}

// --- CSV ESCAPING ---

export function escapeCsv(s: string): string {
	if (s.includes(',') || s.includes('\n') || s.includes('"')) {
		// Double inner quotes and wrap the whole thing in quotes
		return `"${s.replace(/"/g, '""')}"`;
	}
	return s;
}

export function unescapeCsv(s: string): string {
	if (s.startsWith('"') && s.endsWith('"')) {
		// Remove wrapping quotes and convert double quotes back to single
		const inner = s.slice(1, -1);
		return inner.replace(/""/g, '"');
	}
	return s;
}

// --- SHELL ESCAPING ---

export function escapeShell(s: string): string {
	// Shell quoting standard: wrap in single quotes, replace inner single quotes with '"'"'
	if (!s) return "''";
	return `'${s.replace(/'/g, "'\"'\"'")}'`;
}

export function unescapeShell(s: string): string {
	if (s.startsWith("'") && s.endsWith("'")) {
		const inner = s.slice(1, -1);
		return inner.replace(/'"'"'/g, "'");
	}
	return s;
}
