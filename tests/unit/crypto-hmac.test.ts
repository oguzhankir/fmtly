import { describe, it, expect } from 'vitest';
import { generateHmac } from '../../src/lib/engines/crypto';

describe('Crypto Engine - HMAC', () => {
    it('should match known HMAC-SHA256 test vector', async () => {
        // Known HMAC-SHA256 test vector
        // message: "The quick brown fox jumps over the lazy dog"
        // key: "key"
        const message = "The quick brown fox jumps over the lazy dog";
        const key = "key";

        const hash = await generateHmac(message, key, 'SHA-256');
        expect(hash).toBe("f7bc83f430538424b13298e6aa6fb143ef4d59a14946175997479dbc2d1a3cd8");
    });

    it('should generate different hashes for different algorithms', async () => {
        const message = "Test message";
        const key = "secret";

        const hash256 = await generateHmac(message, key, 'SHA-256');
        const hash384 = await generateHmac(message, key, 'SHA-384');
        const hash512 = await generateHmac(message, key, 'SHA-512');

        expect(hash256).not.toBe(hash384);
        expect(hash384).not.toBe(hash512);
        expect(hash256).not.toBe(hash512);

        // SHA-256 hex length is 64
        expect(hash256.length).toBe(64);
        // SHA-384 hex length is 96
        expect(hash384.length).toBe(96);
        // SHA-512 hex length is 128
        expect(hash512.length).toBe(128);
    });

    it('should correctly handle empty strings', async () => {
        const hash1 = await generateHmac("", "key", 'SHA-256');
        const hash2 = await generateHmac("message", "", 'SHA-256');
        const hash3 = await generateHmac("", "", 'SHA-256');

        expect(typeof hash1).toBe('string');
        expect(hash1.length).toBe(64); // empty message with key works
        expect(hash2).toBe(''); // empty key returns empty string
        expect(hash3).toBe('');
    });
});
