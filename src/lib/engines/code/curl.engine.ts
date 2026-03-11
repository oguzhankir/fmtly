// cURL to Fetch/Axios converter — pure JS, no external library.

export type CurlParsed = {
	url: string;
	method: string;
	headers: Record<string, string>;
	body: string | null;
	username: string | null;
	password: string | null;
	compressed: boolean;
};

export function parseCurl(curl: string): CurlParsed {
	// Normalize multiline cURL (backslash-newline continuation)
	const normalized = curl
		.replace(/\\\n/g, ' ')
		.replace(/\\\r\n/g, ' ')
		.trim();

	let url = '';
	let method = 'GET';
	const headers: Record<string, string> = {};
	let body: string | null = null;
	let username: string | null = null;
	let password: string | null = null;
	let compressed = false;

	// Tokenize respecting quoted strings
	const tokens = tokenize(normalized);

	let i = 0;
	// Skip 'curl'
	if (tokens[0]?.toLowerCase() === 'curl') i = 1;

	while (i < tokens.length) {
		const token = tokens[i];

		if (token === '-X' || token === '--request') {
			method = tokens[++i] ?? 'GET';
		} else if (token === '-H' || token === '--header') {
			const raw = tokens[++i] ?? '';
			const colon = raw.indexOf(':');
			if (colon !== -1) {
				const name = raw.slice(0, colon).trim();
				const value = raw.slice(colon + 1).trim();
				headers[name] = value;
			}
		} else if (
			token === '-d' ||
			token === '--data' ||
			token === '--data-raw' ||
			token === '--data-binary'
		) {
			body = tokens[++i] ?? '';
			if (method === 'GET') method = 'POST';
		} else if (token === '-u' || token === '--user') {
			const creds = tokens[++i] ?? '';
			const colonIdx = creds.indexOf(':');
			if (colonIdx !== -1) {
				username = creds.slice(0, colonIdx);
				password = creds.slice(colonIdx + 1);
			} else {
				username = creds;
			}
		} else if (token === '--compressed') {
			compressed = true;
		} else if (
			token === '-L' ||
			token === '--location' ||
			token === '-s' ||
			token === '--silent' ||
			token === '-v' ||
			token === '--verbose'
		) {
			// ignore
		} else if (token === '-A' || token === '--user-agent') {
			headers['User-Agent'] = tokens[++i] ?? '';
		} else if (token === '-e' || token === '--referer') {
			headers.Referer = tokens[++i] ?? '';
		} else if (token === '--url') {
			url = tokens[++i] ?? '';
		} else if (!token.startsWith('-') && !url) {
			url = token.replace(/^['"]|['"]$/g, '');
		}
		i++;
	}

	// Inject auth header if -u was used
	if (username !== null) {
		const creds = btoa(`${username}:${password ?? ''}`);
		headers.Authorization = `Basic ${creds}`;
	}

	return { url, method, headers, body, username, password, compressed };
}

function tokenize(str: string): string[] {
	const tokens: string[] = [];
	let i = 0;

	while (i < str.length) {
		// Skip whitespace
		while (i < str.length && /\s/.test(str[i])) i++;
		if (i >= str.length) break;

		const ch = str[i];

		if (ch === '"' || ch === "'") {
			const quote = ch;
			i++;
			let token = '';
			while (i < str.length && str[i] !== quote) {
				if (str[i] === '\\' && i + 1 < str.length) {
					i++;
					const esc = str[i];
					token += esc === 'n' ? '\n' : esc === 't' ? '\t' : esc;
				} else {
					token += str[i];
				}
				i++;
			}
			i++; // closing quote
			tokens.push(token);
		} else {
			let token = '';
			while (i < str.length && !/\s/.test(str[i])) {
				token += str[i++];
			}
			tokens.push(token);
		}
	}

	return tokens;
}

export function curlToFetch(curl: string): string {
	const p = parseCurl(curl);
	const lines: string[] = [];

	lines.push(`const response = await fetch(${JSON.stringify(p.url)}, {`);

	if (p.method !== 'GET') {
		lines.push(`  method: ${JSON.stringify(p.method)},`);
	}

	if (Object.keys(p.headers).length > 0) {
		lines.push('  headers: {');
		for (const [k, v] of Object.entries(p.headers)) {
			lines.push(`    ${JSON.stringify(k)}: ${JSON.stringify(v)},`);
		}
		lines.push('  },');
	}

	if (p.body !== null) {
		// Detect JSON body
		let bodyStr: string;
		try {
			const parsed = JSON.parse(p.body);
			bodyStr = `JSON.stringify(${JSON.stringify(parsed, null, 2)})`;
		} catch {
			bodyStr = JSON.stringify(p.body);
		}
		lines.push(`  body: ${bodyStr},`);
	}

	lines.push('});');
	lines.push('');
	lines.push('const data = await response.json();');

	return lines.join('\n');
}

export function curlToAxios(curl: string): string {
	const p = parseCurl(curl);
	const config: string[] = [];

	config.push(`  method: ${JSON.stringify(p.method.toLowerCase())},`);
	config.push(`  url: ${JSON.stringify(p.url)},`);

	if (Object.keys(p.headers).length > 0) {
		config.push('  headers: {');
		for (const [k, v] of Object.entries(p.headers)) {
			config.push(`    ${JSON.stringify(k)}: ${JSON.stringify(v)},`);
		}
		config.push('  },');
	}

	if (p.body !== null) {
		try {
			const parsed = JSON.parse(p.body);
			config.push(`  data: ${JSON.stringify(parsed, null, 2)},`);
		} catch {
			config.push(`  data: ${JSON.stringify(p.body)},`);
		}
	}

	return `const response = await axios({\n${config.join('\n')}\n});\n\nconst data = response.data;`;
}
