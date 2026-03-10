import { ulid } from 'ulid';

export interface PasswordStrength {
    score: number; // 0-4
    label: 'Very Weak' | 'Weak' | 'Fair' | 'Strong' | 'Very Strong';
    entropy: number;
    crackTimeOffline: string;
    crackTimeOnline: string;
    suggestions: string[];
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasDigits: boolean;
    hasSymbols: boolean;
    hasRepeats: boolean;
    hasSequences: boolean;
}

export interface RandomOptions {
    length: number;
    uppercase: boolean;
    lowercase: boolean;
    digits: boolean;
    symbols: boolean;
    customChars: string;
    excludeAmbiguous: boolean;
}

/**
 * Generate HMAC using Web Crypto API.
 */
export async function generateHmac(message: string, key: string, algorithm: 'SHA-256' | 'SHA-384' | 'SHA-512'): Promise<string> {
    if (!key) return '';

    const enc = new TextEncoder();
    const cryptoKey = await crypto.subtle.importKey(
        'raw',
        enc.encode(key),
        { name: 'HMAC', hash: algorithm },
        false,
        ['sign']
    );

    const signature = await crypto.subtle.sign('HMAC', cryptoKey, enc.encode(message));

    const hashArray = Array.from(new Uint8Array(signature));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

/**
 * Format time in human readable form.
 */
function humanReadableTime(seconds: number): string {
    if (seconds < 1) return "instantly";
    if (seconds < 60) return `${Math.floor(seconds)} seconds`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours`;
    if (seconds < 2592000) return `${Math.floor(seconds / 86400)} days`;
    if (seconds < 31536000) return `${Math.floor(seconds / 2592000)} months`;
    if (seconds < 3153600000) return `${Math.floor(seconds / 31536000)} years`;
    return "centuries";
}

/**
 * Check password strength, calculate entropy and check characteristics.
 */
export function checkStrength(password: string): PasswordStrength {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigits = /[0-9]/.test(password);
    const hasSymbols = /[^A-Za-z0-9]/.test(password);
    const hasRepeats = /(.)\1/.test(password);
    const hasSequences = /(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/i.test(password);

    let poolSize = 0;
    if (hasLowercase) poolSize += 26;
    if (hasUppercase) poolSize += 26;
    if (hasDigits) poolSize += 10;
    if (hasSymbols) poolSize += 32;

    if (poolSize === 0) poolSize = 1; // avoid log2(0) if empty

    const entropy = password.length * Math.log2(poolSize);

    // Crack time calculation: offline = 10 Billion guesses/sec, online = 1000/sec
    const combinations = Math.pow(poolSize, password.length);
    const offlineGuessesPerSecond = 10_000_000_000;
    const onlineGuessesPerSecond = 1000;

    const offlineSeconds = combinations / offlineGuessesPerSecond;
    const onlineSeconds = combinations / onlineGuessesPerSecond;

    // Score based loosely on entropy and characteristics
    let score = 0;
    if (password.length > 0) {
        if (entropy >= 70) score = 4;
        else if (entropy >= 50) score = 3;
        else if (entropy >= 35) score = 2;
        else if (entropy >= 20) score = 1;

        // Punish repeats and sequences slightly, but not below 1 if already strong
        if (score > 1 && hasSequences) {
            score -= 1;
        }
    }

    const labels: ('Very Weak' | 'Weak' | 'Fair' | 'Strong' | 'Very Strong')[] = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];

    const suggestions: string[] = [];
    if (password.length < 12) suggestions.push("Use at least 12 characters.");
    if (!hasUppercase) suggestions.push("Add uppercase letters.");
    if (!hasLowercase) suggestions.push("Add lowercase letters.");
    if (!hasDigits) suggestions.push("Add numbers.");
    if (!hasSymbols) suggestions.push("Add symbols (e.g., !@#$%).");
    if (hasRepeats) suggestions.push("Avoid repeating characters.");
    if (hasSequences) suggestions.push("Avoid common sequences (like '123' or 'abc').");

    return {
        score,
        label: labels[score],
        entropy: Math.round(entropy * 10) / 10,
        crackTimeOffline: humanReadableTime(offlineSeconds),
        crackTimeOnline: humanReadableTime(onlineSeconds),
        suggestions: score < 3 ? suggestions : [],
        hasUppercase,
        hasLowercase,
        hasDigits,
        hasSymbols,
        hasRepeats,
        hasSequences
    };
}

/**
 * Generate ULID using imported library
 */
export function generateUlid(): string {
    return ulid();
}

/**
 * Generate multiple ULIDs
 */
export function generateUlidBulk(count: number): string[] {
    const ulids = [];
    for (let i = 0; i < count; i++) {
        ulids.push(ulid());
    }
    return ulids;
}

/**
 * Generate Secure Random String
 */
export function generateRandom(options: RandomOptions): string {
    let charset = options.customChars;

    if (!charset) {
        let chars = '';
        if (options.lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (options.uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (options.digits) chars += '0123456789';
        if (options.symbols) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        if (options.excludeAmbiguous) {
            chars = chars.replace(/[Il1O0]/g, '');
        }

        charset = chars;
    }

    if (!charset) return '';

    const randomArray = new Uint32Array(options.length);
    crypto.getRandomValues(randomArray);

    let result = '';
    for (let i = 0; i < options.length; i++) {
        result += charset[randomArray[i] % charset.length];
    }

    return result;
}
