export interface JWTHeader {
	alg?: string;
	typ?: string;
	kid?: string;
	cty?: string;
	[key: string]: unknown;
}

export interface JWTPayload {
	iss?: string;
	sub?: string;
	aud?: string | string[];
	exp?: number;
	nbf?: number;
	iat?: number;
	jti?: string;
	[key: string]: unknown;
}

export interface JWTDecodeData {
	header: JWTHeader;
	payload: JWTPayload;
	signature: string;
	headerRaw: string;
	payloadRaw: string;
	isExpired: boolean;
	isNotYetValid: boolean;
	expiresAt: Date | null;
	issuedAt: Date | null;
	notBefore: Date | null;
}

export type JWTDecodeErrorKind = 'empty' | 'invalid_format' | 'invalid_base64' | 'invalid_json';

export interface JWTDecodeError {
	kind: JWTDecodeErrorKind;
	message: string;
}

export type JWTDecodeResult =
	| { ok: true; data: JWTDecodeData }
	| { ok: false; error: JWTDecodeError };

export type JWTWorkerRequest = {
	id: number;
	token: string;
};

export type JWTWorkerResponse = {
	id: number;
	result?: JWTDecodeResult;
	error?: string;
};

export const JWT_WORKER_THRESHOLD_BYTES = 500 * 1024;

export function shouldUseJWTWorker(token: string): boolean {
	return new Blob([token]).size > JWT_WORKER_THRESHOLD_BYTES;
}

function base64urlDecode(input: string): string {
	const padded = input.replace(/-/g, '+').replace(/_/g, '/');
	const padding = (4 - (padded.length % 4)) % 4;
	const base64 = padded + '='.repeat(padding);

	let binary: string;
	try {
		binary = atob(base64);
	} catch {
		throw new Error('Invalid base64url encoding');
	}

	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) {
		bytes[i] = binary.charCodeAt(i);
	}

	return new TextDecoder().decode(bytes);
}

function parseTimestamp(value: unknown): Date | null {
	if (typeof value !== 'number' || !Number.isFinite(value)) return null;
	return new Date(value * 1000);
}

export function decodeJWT(token: string): JWTDecodeResult {
	const trimmed = token.trim();

	if (!trimmed) {
		return {
			ok: false,
			error: { kind: 'empty', message: 'Token is empty' }
		};
	}

	const parts = trimmed.split('.');

	if (parts.length !== 3) {
		return {
			ok: false,
			error: {
				kind: 'invalid_format',
				message: `Expected 3 dot-separated parts, got ${parts.length}`
			}
		};
	}

	const [headerB64, payloadB64, signature] = parts as [string, string, string];

	let headerJson: string;
	let payloadJson: string;

	try {
		headerJson = base64urlDecode(headerB64);
	} catch {
		return {
			ok: false,
			error: { kind: 'invalid_base64', message: 'Failed to decode JWT header' }
		};
	}

	try {
		payloadJson = base64urlDecode(payloadB64);
	} catch {
		return {
			ok: false,
			error: { kind: 'invalid_base64', message: 'Failed to decode JWT payload' }
		};
	}

	let header: JWTHeader;
	let payload: JWTPayload;

	try {
		header = JSON.parse(headerJson) as JWTHeader;
	} catch {
		return {
			ok: false,
			error: { kind: 'invalid_json', message: 'JWT header is not valid JSON' }
		};
	}

	try {
		payload = JSON.parse(payloadJson) as JWTPayload;
	} catch {
		return {
			ok: false,
			error: { kind: 'invalid_json', message: 'JWT payload is not valid JSON' }
		};
	}

	const now = Date.now();
	const expiresAt = parseTimestamp(payload.exp);
	const issuedAt = parseTimestamp(payload.iat);
	const notBefore = parseTimestamp(payload.nbf);

	const isExpired = expiresAt !== null && expiresAt.getTime() < now;
	const isNotYetValid = notBefore !== null && notBefore.getTime() > now;

	return {
		ok: true,
		data: {
			header,
			payload,
			signature,
			headerRaw: headerJson,
			payloadRaw: payloadJson,
			isExpired,
			isNotYetValid,
			expiresAt,
			issuedAt,
			notBefore
		}
	};
}
