import { CronExpressionParser } from 'cron-parser';
import { UAParser } from 'ua-parser-js';

// ─── Types ────────────────────────────────────────────────────────────────────

export type UrlParts = {
	protocol: string;
	username: string;
	password: string;
	hostname: string;
	port: string;
	pathname: string;
	searchParams: Record<string, string[]>;
	hash: string;
	isValid: boolean;
	origin: string;
};

export type UaParsed = {
	browser: { name: string; version: string };
	os: { name: string; version: string };
	device: { type: string; vendor: string; model: string };
	engine: { name: string; version: string };
	isBot: boolean;
	raw: string;
};

export type HeaderExplanation = {
	header: string;
	value: string;
	what: string;
	why: string;
	safe: boolean | null;
	recommendation: string;
};

export type MimeInfo = {
	mimeType: string;
	extensions: string[];
	description: string;
	binary: boolean;
};

export type CronResult = {
	humanReadable: string;
	nextRuns: Date[];
	isValid: boolean;
	error?: string;
};

// ─── URL Parser ───────────────────────────────────────────────────────────────

export function parseUrl(urlString: string): UrlParts {
	try {
		const url = new URL(urlString.trim());
		const searchParams: Record<string, string[]> = {};
		url.searchParams.forEach((value, key) => {
			if (!searchParams[key]) searchParams[key] = [];
			searchParams[key].push(value);
		});
		return {
			protocol: url.protocol,
			username: url.username,
			password: url.password,
			hostname: url.hostname,
			port: url.port,
			pathname: url.pathname,
			searchParams,
			hash: url.hash,
			isValid: true,
			origin: url.origin
		};
	} catch {
		return {
			protocol: '',
			username: '',
			password: '',
			hostname: '',
			port: '',
			pathname: '',
			searchParams: {},
			hash: '',
			isValid: false,
			origin: ''
		};
	}
}

export function buildUrl(parts: Partial<UrlParts>): string {
	try {
		const protocol = parts.protocol || 'https:';
		const host = parts.hostname || '';
		const port = parts.port ? `:${parts.port}` : '';
		const auth = parts.username
			? `${encodeURIComponent(parts.username)}${parts.password ? `:${encodeURIComponent(parts.password)}` : ''}@`
			: '';
		const pathname = parts.pathname || '/';
		const hash = parts.hash || '';

		let qs = '';
		if (parts.searchParams) {
			const p = new URLSearchParams();
			for (const [key, vals] of Object.entries(parts.searchParams)) {
				for (const v of vals) p.append(key, v);
			}
			const str = p.toString();
			if (str) qs = `?${str}`;
		}

		return `${protocol}//${auth}${host}${port}${pathname}${qs}${hash}`;
	} catch {
		return '';
	}
}

// ─── User Agent Parser ────────────────────────────────────────────────────────

const BOT_PATTERNS =
	/bot|crawl|spider|slurp|search|archiver|fetcher|scraper|monitor|checker|validator|scanner|headless/i;

export function parseUserAgent(ua: string): UaParsed {
	const parser = new UAParser(ua);
	const result = parser.getResult();
	return {
		browser: {
			name: result.browser.name ?? 'Unknown',
			version: result.browser.version ?? ''
		},
		os: {
			name: result.os.name ?? 'Unknown',
			version: result.os.version ?? ''
		},
		device: {
			type: result.device.type ?? 'desktop',
			vendor: result.device.vendor ?? '',
			model: result.device.model ?? ''
		},
		engine: {
			name: result.engine.name ?? 'Unknown',
			version: result.engine.version ?? ''
		},
		isBot: BOT_PATTERNS.test(ua),
		raw: ua
	};
}

// ─── CORS Header Explainer ────────────────────────────────────────────────────

type HeaderEntry = {
	what: string;
	why: string;
	safe: boolean | null;
	recommendation: string;
};

const CORS_HEADERS: Record<string, HeaderEntry> = {
	'access-control-allow-origin': {
		what: 'Specifies which origins are allowed to access the resource.',
		why: 'Browsers enforce same-origin policy by default. This header relaxes it for trusted origins.',
		safe: null,
		recommendation: `Use specific origin ('https://yourdomain.com') instead of '*' for authenticated resources. Wildcard disables credentials.`
	},
	'access-control-allow-methods': {
		what: 'Lists the HTTP methods allowed when accessing the resource cross-origin.',
		why: 'Preflight OPTIONS requests check which methods are permitted before sending the actual request.',
		safe: true,
		recommendation:
			'Only list methods your API actually uses. Avoid listing DELETE or PATCH unless needed.'
	},
	'access-control-allow-headers': {
		what: 'Specifies which request headers can be used in the actual cross-origin request.',
		why: 'Prevents unallowed headers from reaching your server. Checked in preflight.',
		safe: true,
		recommendation: `Include 'Authorization', 'Content-Type' and any custom headers your client sends.`
	},
	'access-control-allow-credentials': {
		what: 'Indicates whether credentials (cookies, HTTP auth) are allowed in cross-origin requests.',
		why: 'Required when your client sends withCredentials: true.',
		safe: false,
		recommendation: `Only set to 'true' for authenticated APIs. Requires Access-Control-Allow-Origin to be a specific origin, not '*'.`
	},
	'access-control-max-age': {
		what: 'Specifies how long (in seconds) preflight request results can be cached.',
		why: 'Reduces the number of preflight OPTIONS requests made by browsers.',
		safe: true,
		recommendation: 'Set to 86400 (24h) or 600 (10m) for commonly-used endpoints to reduce latency.'
	},
	'access-control-expose-headers': {
		what: 'Lists which response headers are accessible to browser JavaScript.',
		why: 'By default, only a few "safe" headers are exposed. This expands what JS can read.',
		safe: true,
		recommendation: `Expose only what your client needs, e.g., 'X-Total-Count', 'X-Request-ID'.`
	},
	origin: {
		what: 'Sent by the browser indicating where the request originated from.',
		why: 'Servers use this to decide whether to include CORS headers in the response.',
		safe: true,
		recommendation: 'Always validate Origin against an allowlist on your server.'
	},
	vary: {
		what: `When set to 'Origin', tells caches that responses differ based on the Origin header.`,
		why: 'Prevents cached CORS responses from being served to different origins.',
		safe: true,
		recommendation: `Always include 'Vary: Origin' when your server conditionally returns Access-Control-Allow-Origin.`
	}
};

const GENERIC_HEADER: HeaderEntry = {
	what: 'This is an HTTP response or request header.',
	why: 'Headers communicate metadata between client and server.',
	safe: null,
	recommendation: 'Consult the MDN documentation for this specific header for security guidance.'
};

export function explainHeader(name: string, value: string): HeaderExplanation {
	const normalized = name.trim().toLowerCase();
	const entry = CORS_HEADERS[normalized] ?? GENERIC_HEADER;

	// Dynamic safe analysis for Allow-Origin
	let safe = entry.safe;
	if (normalized === 'access-control-allow-origin') {
		safe = value.trim() !== '*';
	}
	if (normalized === 'access-control-allow-credentials') {
		safe = value.trim().toLowerCase() !== 'true';
	}

	return {
		header: name.trim(),
		value: value.trim(),
		...entry,
		safe
	};
}

// ─── MIME Types ───────────────────────────────────────────────────────────────

const MIME_TABLE: MimeInfo[] = [
	// Text
	{
		mimeType: 'text/plain',
		extensions: ['txt', 'text', 'conf', 'def', 'list', 'log', 'in'],
		description: 'Plain text',
		binary: false
	},
	{
		mimeType: 'text/html',
		extensions: ['html', 'htm', 'shtml'],
		description: 'HTML document',
		binary: false
	},
	{
		mimeType: 'text/css',
		extensions: ['css'],
		description: 'Cascading Style Sheets',
		binary: false
	},
	{
		mimeType: 'text/javascript',
		extensions: ['js', 'mjs'],
		description: 'JavaScript',
		binary: false
	},
	{ mimeType: 'text/xml', extensions: ['xml'], description: 'XML document (text)', binary: false },
	{
		mimeType: 'text/csv',
		extensions: ['csv'],
		description: 'Comma-separated values',
		binary: false
	},
	{
		mimeType: 'text/markdown',
		extensions: ['md', 'markdown'],
		description: 'Markdown document',
		binary: false
	},
	{
		mimeType: 'text/calendar',
		extensions: ['ics', 'ifb'],
		description: 'iCalendar format',
		binary: false
	},
	{ mimeType: 'text/yaml', extensions: ['yaml', 'yml'], description: 'YAML data', binary: false },
	{
		mimeType: 'text/tab-separated-values',
		extensions: ['tsv'],
		description: 'Tab-separated values',
		binary: false
	},
	{ mimeType: 'text/rtf', extensions: ['rtf'], description: 'Rich Text Format', binary: false },
	{
		mimeType: 'text/vcard',
		extensions: ['vcard', 'vcf'],
		description: 'vCard contact format',
		binary: false
	},

	// Application / Structured Data
	{ mimeType: 'application/json', extensions: ['json'], description: 'JSON data', binary: false },
	{
		mimeType: 'application/ld+json',
		extensions: ['jsonld'],
		description: 'JSON-LD linked data',
		binary: false
	},
	{
		mimeType: 'application/xml',
		extensions: ['xml', 'xsd', 'xsl'],
		description: 'XML document',
		binary: false
	},
	{
		mimeType: 'application/x-yaml',
		extensions: ['yaml', 'yml'],
		description: 'YAML (alternative type)',
		binary: false
	},
	{
		mimeType: 'application/toml',
		extensions: ['toml'],
		description: 'TOML configuration',
		binary: false
	},
	{
		mimeType: 'application/graphql',
		extensions: ['graphql', 'gql'],
		description: 'GraphQL schema/query',
		binary: false
	},
	{
		mimeType: 'application/x-www-form-urlencoded',
		extensions: [],
		description: 'URL-encoded form data',
		binary: false
	},
	{
		mimeType: 'multipart/form-data',
		extensions: [],
		description: 'Multipart form data',
		binary: false
	},

	// Application / Archives
	{ mimeType: 'application/zip', extensions: ['zip'], description: 'ZIP archive', binary: true },
	{ mimeType: 'application/x-tar', extensions: ['tar'], description: 'TAR archive', binary: true },
	{
		mimeType: 'application/gzip',
		extensions: ['gz', 'gzip'],
		description: 'GZIP compressed',
		binary: true
	},
	{
		mimeType: 'application/x-bzip2',
		extensions: ['bz2'],
		description: 'BZIP2 compressed',
		binary: true
	},
	{
		mimeType: 'application/x-7z-compressed',
		extensions: ['7z'],
		description: '7-Zip archive',
		binary: true
	},
	{
		mimeType: 'application/x-rar-compressed',
		extensions: ['rar'],
		description: 'RAR archive',
		binary: true
	},
	{ mimeType: 'application/x-xz', extensions: ['xz'], description: 'XZ compressed', binary: true },

	// Application / Documents
	{ mimeType: 'application/pdf', extensions: ['pdf'], description: 'PDF document', binary: true },
	{
		mimeType: 'application/msword',
		extensions: ['doc'],
		description: 'Microsoft Word (legacy)',
		binary: true
	},
	{
		mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		extensions: ['docx'],
		description: 'Microsoft Word',
		binary: true
	},
	{
		mimeType: 'application/vnd.ms-excel',
		extensions: ['xls'],
		description: 'Microsoft Excel (legacy)',
		binary: true
	},
	{
		mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		extensions: ['xlsx'],
		description: 'Microsoft Excel',
		binary: true
	},
	{
		mimeType: 'application/vnd.ms-powerpoint',
		extensions: ['ppt'],
		description: 'PowerPoint (legacy)',
		binary: true
	},
	{
		mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
		extensions: ['pptx'],
		description: 'PowerPoint',
		binary: true
	},
	{
		mimeType: 'application/vnd.oasis.opendocument.text',
		extensions: ['odt'],
		description: 'OpenDocument text',
		binary: true
	},
	{
		mimeType: 'application/vnd.oasis.opendocument.spreadsheet',
		extensions: ['ods'],
		description: 'OpenDocument spreadsheet',
		binary: true
	},
	{
		mimeType: 'application/epub+zip',
		extensions: ['epub'],
		description: 'EPUB ebook',
		binary: true
	},
	{
		mimeType: 'application/rtf',
		extensions: ['rtf'],
		description: 'Rich Text Format (binary)',
		binary: true
	},

	// Application / Binary / Executables
	{
		mimeType: 'application/octet-stream',
		extensions: ['bin', 'exe', 'dll', 'so', 'dmg', 'iso'],
		description: 'Generic binary data',
		binary: true
	},
	{
		mimeType: 'application/x-msdownload',
		extensions: ['exe', 'msi'],
		description: 'Windows executable',
		binary: true
	},
	{
		mimeType: 'application/x-apple-diskimage',
		extensions: ['dmg'],
		description: 'macOS disk image',
		binary: true
	},
	{
		mimeType: 'application/java-archive',
		extensions: ['jar'],
		description: 'Java archive',
		binary: true
	},
	{
		mimeType: 'application/wasm',
		extensions: ['wasm'],
		description: 'WebAssembly binary',
		binary: true
	},

	// Application / Fonts
	{ mimeType: 'font/ttf', extensions: ['ttf'], description: 'TrueType font', binary: true },
	{ mimeType: 'font/otf', extensions: ['otf'], description: 'OpenType font', binary: true },
	{
		mimeType: 'font/woff',
		extensions: ['woff'],
		description: 'Web Open Font Format',
		binary: true
	},
	{
		mimeType: 'font/woff2',
		extensions: ['woff2'],
		description: 'Web Open Font Format 2',
		binary: true
	},
	{
		mimeType: 'application/vnd.ms-fontobject',
		extensions: ['eot'],
		description: 'Embedded OpenType font',
		binary: true
	},

	// Application / Crypto / Auth
	{
		mimeType: 'application/x-x509-ca-cert',
		extensions: ['crt', 'cer', 'der'],
		description: 'X.509 certificate',
		binary: true
	},
	{
		mimeType: 'application/x-pem-file',
		extensions: ['pem'],
		description: 'PEM certificate/key',
		binary: false
	},
	{
		mimeType: 'application/pkcs8',
		extensions: ['p8', 'key'],
		description: 'Private key (PKCS#8)',
		binary: true
	},

	// Images
	{
		mimeType: 'image/jpeg',
		extensions: ['jpg', 'jpeg', 'jpe'],
		description: 'JPEG image',
		binary: true
	},
	{ mimeType: 'image/png', extensions: ['png'], description: 'PNG image', binary: true },
	{ mimeType: 'image/gif', extensions: ['gif'], description: 'GIF image', binary: true },
	{ mimeType: 'image/webp', extensions: ['webp'], description: 'WebP image', binary: true },
	{ mimeType: 'image/avif', extensions: ['avif'], description: 'AVIF image', binary: true },
	{
		mimeType: 'image/svg+xml',
		extensions: ['svg', 'svgz'],
		description: 'SVG vector image',
		binary: false
	},
	{ mimeType: 'image/bmp', extensions: ['bmp'], description: 'Bitmap image', binary: true },
	{ mimeType: 'image/tiff', extensions: ['tiff', 'tif'], description: 'TIFF image', binary: true },
	{ mimeType: 'image/x-icon', extensions: ['ico'], description: 'Windows icon', binary: true },
	{
		mimeType: 'image/vnd.microsoft.icon',
		extensions: ['ico'],
		description: 'Windows icon (official)',
		binary: true
	},
	{
		mimeType: 'image/heic',
		extensions: ['heic', 'heif'],
		description: 'HEIC/HEIF image (Apple)',
		binary: true
	},
	{ mimeType: 'image/jxl', extensions: ['jxl'], description: 'JPEG XL image', binary: true },

	// Audio
	{
		mimeType: 'audio/mpeg',
		extensions: ['mp3', 'mp2'],
		description: 'MPEG audio (MP3)',
		binary: true
	},
	{
		mimeType: 'audio/mp4',
		extensions: ['m4a', 'mp4a'],
		description: 'AAC/MP4 audio',
		binary: true
	},
	{ mimeType: 'audio/ogg', extensions: ['ogg', 'oga'], description: 'Ogg audio', binary: true },
	{ mimeType: 'audio/wav', extensions: ['wav'], description: 'WAV audio', binary: true },
	{ mimeType: 'audio/webm', extensions: ['weba'], description: 'WebM audio', binary: true },
	{
		mimeType: 'audio/flac',
		extensions: ['flac'],
		description: 'FLAC lossless audio',
		binary: true
	},
	{ mimeType: 'audio/aac', extensions: ['aac'], description: 'AAC audio', binary: true },
	{
		mimeType: 'audio/x-midi',
		extensions: ['midi', 'mid'],
		description: 'MIDI audio',
		binary: true
	},
	{ mimeType: 'audio/opus', extensions: ['opus'], description: 'Opus audio', binary: true },

	// Video
	{ mimeType: 'video/mp4', extensions: ['mp4', 'm4v'], description: 'MPEG-4 video', binary: true },
	{ mimeType: 'video/mpeg', extensions: ['mpeg', 'mpg'], description: 'MPEG video', binary: true },
	{ mimeType: 'video/ogg', extensions: ['ogv', 'ogg'], description: 'Ogg video', binary: true },
	{ mimeType: 'video/webm', extensions: ['webm'], description: 'WebM video', binary: true },
	{
		mimeType: 'video/quicktime',
		extensions: ['mov', 'qt'],
		description: 'QuickTime video',
		binary: true
	},
	{ mimeType: 'video/x-msvideo', extensions: ['avi'], description: 'AVI video', binary: true },
	{
		mimeType: 'video/x-matroska',
		extensions: ['mkv', 'mk3d'],
		description: 'Matroska (MKV) video',
		binary: true
	},
	{ mimeType: 'video/3gpp', extensions: ['3gp', '3gpp'], description: '3GPP video', binary: true },
	{ mimeType: 'video/x-flv', extensions: ['flv'], description: 'Flash video', binary: true },

	// Code / Programming
	{
		mimeType: 'application/x-httpd-php',
		extensions: ['php', 'phtml'],
		description: 'PHP source',
		binary: false
	},
	{
		mimeType: 'application/x-python-code',
		extensions: ['py', 'pyc'],
		description: 'Python source',
		binary: false
	},
	{
		mimeType: 'application/x-ruby',
		extensions: ['rb', 'rbw'],
		description: 'Ruby source',
		binary: false
	},
	{
		mimeType: 'application/x-sh',
		extensions: ['sh', 'bash', 'zsh'],
		description: 'Shell script',
		binary: false
	},
	{
		mimeType: 'application/x-bat',
		extensions: ['bat', 'cmd'],
		description: 'Windows batch script',
		binary: false
	},
	{
		mimeType: 'application/typescript',
		extensions: ['ts', 'tsx'],
		description: 'TypeScript source',
		binary: false
	},
	{ mimeType: 'application/x-rust', extensions: ['rs'], description: 'Rust source', binary: false },
	{ mimeType: 'text/x-go', extensions: ['go'], description: 'Go source', binary: false },
	{
		mimeType: 'application/x-java-source',
		extensions: ['java'],
		description: 'Java source',
		binary: false
	},
	{
		mimeType: 'text/x-kotlin',
		extensions: ['kt', 'kts'],
		description: 'Kotlin source',
		binary: false
	},
	{ mimeType: 'text/x-swift', extensions: ['swift'], description: 'Swift source', binary: false },
	{ mimeType: 'text/x-c', extensions: ['c', 'h'], description: 'C source', binary: false },
	{
		mimeType: 'text/x-c++src',
		extensions: ['cpp', 'cc', 'cxx', 'hpp'],
		description: 'C++ source',
		binary: false
	},
	{ mimeType: 'text/x-csharp', extensions: ['cs'], description: 'C# source', binary: false },
	{ mimeType: 'text/x-sql', extensions: ['sql'], description: 'SQL script', binary: false },
	{
		mimeType: 'text/x-r',
		extensions: ['r', 'R'],
		description: 'R statistical language',
		binary: false
	},
	{ mimeType: 'application/x-lua', extensions: ['lua'], description: 'Lua script', binary: false },
	{ mimeType: 'text/x-perl', extensions: ['pl', 'pm'], description: 'Perl script', binary: false },
	{
		mimeType: 'application/x-elixir',
		extensions: ['ex', 'exs'],
		description: 'Elixir source',
		binary: false
	},

	// Data / Markup
	{
		mimeType: 'application/x-ndjson',
		extensions: ['ndjson', 'jsonl'],
		description: 'Newline-delimited JSON',
		binary: false
	},
	{
		mimeType: 'application/geo+json',
		extensions: ['geojson'],
		description: 'GeoJSON',
		binary: false
	},
	{
		mimeType: 'application/x-protobuf',
		extensions: ['proto', 'pb'],
		description: 'Protocol Buffers',
		binary: true
	},
	{
		mimeType: 'application/x-msgpack',
		extensions: ['msgpack', 'mpk'],
		description: 'MessagePack binary',
		binary: true
	},
	{ mimeType: 'application/cbor', extensions: ['cbor'], description: 'CBOR binary', binary: true },
	{
		mimeType: 'application/x-latex',
		extensions: ['tex', 'latex'],
		description: 'LaTeX document',
		binary: false
	},
	{ mimeType: 'application/x-bibtex', extensions: ['bib'], description: 'BibTeX', binary: false },
	{ mimeType: 'application/rss+xml', extensions: ['rss'], description: 'RSS feed', binary: false },
	{
		mimeType: 'application/atom+xml',
		extensions: ['atom'],
		description: 'Atom feed',
		binary: false
	},
	{ mimeType: 'application/vnd.api+json', extensions: [], description: 'JSON:API', binary: false },
	{ mimeType: 'application/hal+json', extensions: [], description: 'HAL JSON', binary: false },

	// Config
	{
		mimeType: 'application/x-env',
		extensions: ['env'],
		description: 'Environment variables file',
		binary: false
	},
	{
		mimeType: 'text/x-ini',
		extensions: ['ini', 'cfg', 'properties'],
		description: 'INI configuration',
		binary: false
	},
	{
		mimeType: 'application/x-dockerfile',
		extensions: ['dockerfile'],
		description: 'Dockerfile',
		binary: false
	},
	{
		mimeType: 'application/x-docker-compose',
		extensions: ['docker-compose.yml'],
		description: 'Docker Compose',
		binary: false
	}
];

export function getMimeInfo(query: string): MimeInfo[] {
	const q = query.trim().toLowerCase().replace(/^\./, '');
	if (!q) return MIME_TABLE;
	return MIME_TABLE.filter(
		(m) =>
			m.mimeType.toLowerCase().includes(q) ||
			m.extensions.some((e) => e.toLowerCase().includes(q)) ||
			m.description.toLowerCase().includes(q)
	);
}

// ─── Cron Parser ─────────────────────────────────────────────────────────────

export function parseCron(expr: string, count = 5): CronResult {
	try {
		const interval = CronExpressionParser.parse(expr.trim());

		const nextRuns: Date[] = [];
		for (let i = 0; i < count; i++) {
			nextRuns.push(interval.next().toDate());
		}
		return {
			humanReadable: cronToHuman(expr.trim()),
			nextRuns,
			isValid: true
		};
	} catch (e) {
		return {
			humanReadable: '',
			nextRuns: [],
			isValid: false,
			error: e instanceof Error ? e.message : 'Invalid expression'
		};
	}
}

function cronToHuman(expr: string): string {
	const parts = expr.trim().split(/\s+/);
	if (parts.length === 5) {
		const [min, hour, dom, month, dow] = parts;
		if (expr === '* * * * *') return 'Every minute';
		if (min !== '*' && hour !== '*' && dom === '*' && month === '*' && dow === '*')
			return `Daily at ${hour.padStart(2, '0')}:${min.padStart(2, '0')} UTC`;
		if (min !== '*' && hour !== '*' && dom === '*' && month === '*' && dow !== '*') {
			const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			return `Every ${days[parseInt(dow)] ?? dow} at ${hour.padStart(2, '0')}:${min.padStart(2, '0')} UTC`;
		}
		if (min.startsWith('*/')) return `Every ${min.slice(2)} minutes`;
		if (hour.startsWith('*/')) return `Every ${hour.slice(2)} hours`;
	}
	if (parts.length === 6) {
		const [sec, min, hour, dom, month, dow] = parts;
		void sec;
		void dom;
		void month;
		void dow;
		if (min !== '*' && hour !== '*') {
			return `(6-field) At ${hour.padStart(2, '0')}:${min.padStart(2, '0')} UTC`;
		}
	}
	return `Cron: ${expr}`;
}

export function validateCron(expr: string): boolean {
	try {
		CronExpressionParser.parse(expr.trim());
		return true;
	} catch {
		return false;
	}
}
