import { bytesToHex } from './hash.js';

export type PasswordStrengthBand = 'very_weak' | 'weak' | 'fair' | 'good' | 'strong';

export function estimateEntropyBits(password: string): number {
	if (password.length === 0) return 0;
	let charset = 0;
	if (/[a-z]/.test(password)) charset += 26;
	if (/[A-Z]/.test(password)) charset += 26;
	if (/[0-9]/.test(password)) charset += 10;
	if (/[^a-zA-Z0-9\s]/.test(password)) charset += 33;
	if (charset === 0) charset = 26;
	return password.length * Math.log2(charset);
}

export function entropyToCrackSeconds(entropyBits: number, guessesPerSecond = 1e10): number {
	return 2 ** entropyBits / guessesPerSecond;
}

export function formatDurationSeconds(seconds: number): string {
	if (!Number.isFinite(seconds) || seconds <= 0) return '—';
	if (seconds < 1) return '< 1 s';
	if (seconds < 90) return `${Math.round(seconds)} s`;
	const minutes = seconds / 60;
	if (minutes < 90) return `${Math.round(minutes)} min`;
	const hours = minutes / 60;
	if (hours < 48) return `${Math.round(hours)} h`;
	const days = hours / 24;
	if (days < 365 * 2) return `${Math.round(days)} d`;
	const years = days / 365.25;
	if (years < 1e6) return `${years < 10 ? years.toFixed(1) : Math.round(years)} yr`;
	return '> 1M yr';
}

export async function sha1HexUpper(password: string): Promise<string> {
	const buf = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(password));
	return bytesToHex(new Uint8Array(buf)).toUpperCase();
}

export async function fetchPwnedPasswordCount(sha1HexUpper: string): Promise<number | null> {
	const prefix = sha1HexUpper.slice(0, 5);
	const suffix = sha1HexUpper.slice(5);
	const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
		headers: { 'Add-Padding': 'true' }
	});
	if (!res.ok) return null;
	const text = await res.text();
	for (const line of text.split('\n')) {
		const trimmed = line.trim();
		if (!trimmed) continue;
		const [suf, countStr] = trimmed.split(':');
		if (suf.toUpperCase() === suffix) {
			const n = Number.parseInt(countStr.trim(), 10);
			return Number.isFinite(n) ? n : null;
		}
	}
	return 0;
}

export type ZxcvbnBundle = {
	score: number;
	crack_times_seconds: { offline_fast_hashing_1e10_per_second?: number };
	feedback: { warning: string; suggestions: string[] };
};

export async function scorePasswordZxcvbn(password: string): Promise<ZxcvbnBundle> {
	const zxcvbn = (await import('zxcvbn')).default;
	return zxcvbn(password) as ZxcvbnBundle;
}

export function bandFromZxcvbnScore(score: number): PasswordStrengthBand {
	if (score <= 0) return 'very_weak';
	if (score === 1) return 'weak';
	if (score === 2) return 'fair';
	if (score === 3) return 'good';
	return 'strong';
}
