export type DecodeResult = { success: true; value: string } | { success: false; error: string };

export function base64Encode(input: string): string {
	const bytes = new TextEncoder().encode(input);
	let binary = '';
	for (let i = 0; i < bytes.length; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return btoa(binary);
}

export function base64Decode(input: string): DecodeResult {
	try {
		const cleaned = input.replace(/\s/g, '');
		const binary = atob(cleaned);
		const bytes = new Uint8Array(binary.length);
		for (let i = 0; i < binary.length; i++) {
			bytes[i] = binary.charCodeAt(i);
		}
		const value = new TextDecoder().decode(bytes);
		return { success: true, value };
	} catch {
		return { success: false, error: 'Invalid Base64 input' };
	}
}

export function urlEncode(input: string): string {
	return encodeURIComponent(input);
}

export function urlDecode(input: string): string {
	try {
		return decodeURIComponent(input);
	} catch {
		return input;
	}
}

export function encodeURIComponentSafe(input: string): string {
	return encodeURIComponent(input).replace(
		/[!'()*]/g,
		(c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`
	);
}

export function detectBase64(input: string): boolean {
	const trimmed = input.trim();
	if (trimmed.length === 0) return false;
	if (trimmed.length % 4 !== 0) return false;
	if (!/^[A-Za-z0-9+/]+={0,2}$/.test(trimmed)) return false;
	try {
		atob(trimmed);
		return true;
	} catch {
		return false;
	}
}

// --- HTML ENTITIES ENGINE ---

export function encodeHtmlEntities(text: string, mode: 'named' | 'numeric' | 'hex'): string {
	const namedMap: Record<string, string> = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#39;'
	};

	return text.replace(/[&<>"']/g, (char) => {
		if (mode === 'named') {
			return namedMap[char] ?? char;
		}

		const code = char.charCodeAt(0);
		if (mode === 'numeric') {
			return `&#${code};`;
		}
		if (mode === 'hex') {
			return `&#x${code.toString(16).toLowerCase()};`;
		}

		return char;
	});
}

export function decodeHtmlEntities(text: string): string {
	if (typeof document !== 'undefined') {
		const ta = document.createElement('textarea');
		ta.innerHTML = text;
		return ta.value;
	}

	// Fallback for non-browser environments if necessary, 
	// although request states "Use DOMParser or textarea trick".
	return text.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
		.replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&apos;/g, "'");
}

// --- UNICODE CONVERTER ---

export type UnicodeChar = {
	char: string;
	codePoint: string;
	htmlEntity: string;
	cssEscape: string;
	jsEscape: string;
	utf8Bytes: string;
	name?: string;
};

export type UnicodeResult = UnicodeChar[];

export function analyzeText(text: string): UnicodeResult {
	const result: UnicodeChar[] = [];
	for (const char of text) {
		const codePointNum = char.codePointAt(0);
		if (codePointNum === undefined) continue;

		const hex = codePointNum.toString(16).toUpperCase().padStart(4, '0');

		// Calculate UTF-8 bytes
		const utf8Buffer = new TextEncoder().encode(char);
		const utf8Bytes = Array.from(utf8Buffer)
			.map((b) => `0x${b.toString(16).toUpperCase().padStart(2, '0')}`)
			.join(' ');

		result.push({
			char,
			codePoint: `U+${hex}`,
			htmlEntity: `&#x${hex};`,
			cssEscape: `\\${hex}`,
			jsEscape: `\\u{${hex}}`,
			utf8Bytes
		});
	}
	return result;
}

export function codePointToChar(cp: string): string {
	try {
		const trimmed = cp.trim();
		// If explicitly hex prefix, force hex
		if (/^(U\+|0x|\\u|&#x)/i.test(trimmed)) {
			let clean = trimmed.replace(/^(U\+|0x|\\u|&#x)/i, '').replace(/[{};]/g, '');
			return String.fromCodePoint(parseInt(clean, 16));
		}

		// If explicitly decimal HTML entity
		if (/^&#[0-9]+;$/.test(trimmed)) {
			let clean = trimmed.replace(/^&#/, '').replace(/;$/, '');
			return String.fromCodePoint(parseInt(clean, 10));
		}

		// Otherwise, try parsing as numbers
		// If it contains A-F, assume hex. Otherwise, assume decimal, unless length is typical hex sizes, but '65' is ambiguous.
		// The test says expect(codePointToChar('65')).toBe('A') -> this implies 65 is deemed a DECIMAL input.
		// So if it's purely digits, treat as decimal. If it has letters, treat as hex.
		if (/^[0-9]+$/.test(trimmed)) {
			return String.fromCodePoint(parseInt(trimmed, 10)); // Treat purely digits as decimal unless prefixed
		}

		// Fallback assume hex
		return String.fromCodePoint(parseInt(trimmed, 16));
	} catch (e) {
		return '';
	}
}

export function charToAll(char: string): UnicodeResult {
	return analyzeText(char);
}
