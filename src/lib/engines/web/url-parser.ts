export type URLParserErrorCode = 'invalid_url';

export interface URLParserError {
	code: URLParserErrorCode;
	detail: string;
}

export interface URLSearchParamEntry {
	index: number;
	key: string;
	value: string;
}

export interface URLParserResult {
	href: string;
	origin: string;
	protocol: string;
	scheme: string;
	username: string;
	password: string;
	host: string;
	hostname: string;
	port: string;
	pathname: string;
	search: string;
	searchParams: URLSearchParamEntry[];
	hash: string;
	fragment: string;
	hasAuth: boolean;
	hasPort: boolean;
	hasSearch: boolean;
	hasHash: boolean;
	isSecure: boolean;
	paramCount: number;
	error: URLParserError | null;
	durationMs: number;
}

const SECURE_PROTOCOLS = new Set(['https:', 'wss:', 'sftp:', 'ftps:']);

function nowMs(): number {
	if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
		return performance.now();
	}
	return Date.now();
}

const EMPTY_BASE: Omit<URLParserResult, 'error' | 'durationMs'> = {
	href: '',
	origin: '',
	protocol: '',
	scheme: '',
	username: '',
	password: '',
	host: '',
	hostname: '',
	port: '',
	pathname: '',
	search: '',
	searchParams: [],
	hash: '',
	fragment: '',
	hasAuth: false,
	hasPort: false,
	hasSearch: false,
	hasHash: false,
	isSecure: false,
	paramCount: 0
};

export function parseURL(input: string): URLParserResult {
	const startedAt = nowMs();
	const trimmed = input.trim();

	if (trimmed.length === 0) {
		return { ...EMPTY_BASE, error: null, durationMs: 0 };
	}

	try {
		const url = new URL(trimmed);

		const searchParams: URLSearchParamEntry[] = [];
		let idx = 0;
		for (const [key, value] of url.searchParams) {
			searchParams.push({ index: idx++, key, value });
		}

		return {
			href: url.href,
			origin: url.origin,
			protocol: url.protocol,
			scheme: url.protocol.replace(/:$/, ''),
			username: url.username,
			password: url.password,
			host: url.host,
			hostname: url.hostname,
			port: url.port,
			pathname: url.pathname,
			search: url.search,
			searchParams,
			hash: url.hash,
			fragment: url.hash.replace(/^#/, ''),
			hasAuth: url.username.length > 0 || url.password.length > 0,
			hasPort: url.port.length > 0,
			hasSearch: url.search.length > 0,
			hasHash: url.hash.length > 0,
			isSecure: SECURE_PROTOCOLS.has(url.protocol),
			paramCount: searchParams.length,
			error: null,
			durationMs: nowMs() - startedAt
		};
	} catch (err) {
		const detail = err instanceof Error ? err.message : 'Invalid URL';
		return {
			...EMPTY_BASE,
			error: { code: 'invalid_url', detail },
			durationMs: nowMs() - startedAt
		};
	}
}
