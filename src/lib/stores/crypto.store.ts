import { writable } from 'svelte/store';
import { input } from './input.store.js';

export interface CryptoOptions {
	// HMAC
	hmacAlgorithm: 'SHA-256' | 'SHA-384' | 'SHA-512';
	hmacOutputHex: string;
	hmacOutputBase64: string;

	// Password Strength
	passwordInput: string;
	showPassword: boolean;

	// ULID
	ulidCount: number;

	// Random String
	randomLength: number;
	randomUppercase: boolean;
	randomLowercase: boolean;
	randomDigits: boolean;
	randomSymbols: boolean;
	randomExcludeAmbiguous: boolean;
	randomCustomChars: string;
}

const defaultOptions: CryptoOptions = {
	// HMAC
	hmacAlgorithm: 'SHA-256',
	hmacOutputHex: '',
	hmacOutputBase64: '',

	// Password Strength
	passwordInput: '',
	showPassword: false,

	// ULID
	ulidCount: 1,

	// Random String
	randomLength: 16,
	randomUppercase: true,
	randomLowercase: true,
	randomDigits: true,
	randomSymbols: true,
	randomExcludeAmbiguous: false,
	randomCustomChars: ''
};

export const cryptoOptions = writable<CryptoOptions>(defaultOptions);

export function initCryptoStore(slug: string) {
	input.set('');

	// Reset specific tool state, but keep store intact
	cryptoOptions.update((opts) => ({ ...opts }));
}
