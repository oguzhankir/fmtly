import type { ToolDefinition } from '../types.js';

export const cryptoTools: ToolDefinition[] = [
    {
        id: 'crypto-hmac',
        category: 'crypto',
        slug: 'hmac',
        displayName: 'HMAC Generator',
        tagline: 'Generate HMAC signatures with SHA-256/384/512.',
        description: 'Securely generate Hash-based Message Authentication Codes (HMAC) entirely in your browser using the native Web Crypto API. Supports SHA-256, SHA-384, and SHA-512 algorithms.',
        primaryKeyword: 'hmac generator online',
        metaTitle: 'HMAC Generator | SHA-256 | fmtly',
        metaDescription: 'Generate secure HMAC hashes (SHA-256, SHA-384, SHA-512) locally in your browser. No data sent to any server.',
        engine: 'crypto',
        operation: 'hmac',
        layoutVariant: 'dual-input',
        inputLanguage: 'plaintext',
        outputLanguage: 'plaintext',
        hasTreeView: false,
        relatedTools: [
            { category: 'crypto', slug: 'random-string' }
        ],
        faqs: [
            {
                question: 'Is my input sent to a server?',
                answer: 'No. All HMAC calculations are performed locally in your browser using the Web Crypto API.'
            }
        ],
        useCases: [
            'Verifying API webhook signatures',
            'Generating secure tokens for authentication'
        ],
        sampleInput: 'The quick brown fox jumps over the lazy dog\nkey' // message \n key
    },
    {
        id: 'crypto-password-strength',
        category: 'crypto',
        slug: 'password-strength',
        displayName: 'Password Strength Checker',
        tagline: 'Analyze password entropy and crack time locally.',
        description: 'Evaluate the strength of your passwords with instant real-time feedback. Calculates entropy, offline and online crack times, and identifies weak patterns—100% locally.',
        primaryKeyword: 'password strength checker',
        metaTitle: 'Secure Password Strength Checker | Local Evaluation | fmtly',
        metaDescription: 'Test your password strength, entropy, and estimated crack time entirely offline. No data leaves your browser.',
        engine: 'crypto',
        operation: 'password-strength',
        layoutVariant: 'single-panel',
        inputLanguage: 'plaintext',
        outputLanguage: 'plaintext',
        hasTreeView: false,
        relatedTools: [
            { category: 'crypto', slug: 'random-string' }
        ],
        faqs: [
            {
                question: 'Are my passwords stored or transmitted?',
                answer: 'Absolutely not. This tool analyzes your password completely within your browser\'s memory. Disconnect from the internet to test for yourself.'
            }
        ],
        useCases: [
            'Auditing personal or administrative passwords for compliance',
            'Understanding entropy and how crack times are calculated'
        ],
        sampleInput: 'P@ssw0rd!'
    },
    {
        id: 'crypto-ulid',
        category: 'crypto',
        slug: 'ulid',
        displayName: 'ULID Generator',
        tagline: 'Generate Universally Unique Lexicographically Sortable Identifiers.',
        description: 'Instantly generate sortable ULIDs in bulk. Inspect the internal structure differentiating the timestamp and random components.',
        primaryKeyword: 'ulid generator',
        metaTitle: 'ULID Generator | Bulk Sortable IDs | fmtly',
        metaDescription: 'Quickly generate one or multiple Universally Unique Lexicographically Sortable Identifiers (ULID) straight from your browser.',
        engine: 'crypto',
        operation: 'ulid',
        layoutVariant: 'single-panel',
        inputLanguage: 'plaintext',
        outputLanguage: 'plaintext',
        hasTreeView: false,
        relatedTools: [
            { category: 'crypto', slug: 'random-string' }
        ],
        faqs: [
            {
                question: 'Why ULID over UUID?',
                answer: 'ULIDs are lexicographically sortable, meaning they can be sorted chronologically without needing a separate created_at column.'
            }
        ],
        useCases: [
            'Providing sortable primary keys for distributed databases',
            'Generating batch testing identifiers'
        ],
        sampleInput: ''
    },
    {
        id: 'crypto-random-string',
        category: 'crypto',
        slug: 'random-string',
        displayName: 'Secure Random String Generator',
        tagline: 'Generate cryptographically secure strings and passwords.',
        description: 'Create highly secure random strings and passwords. Toggle between uppercase, lowercase, numbers, symbols, Custom characters, or exclude ambiguous characters completely client-side.',
        primaryKeyword: 'random string generator',
        metaTitle: 'Secure Password & Random String Generator | fmtly',
        metaDescription: 'Generate secure random strings and passwords locally using the browser\'s strong cryptographic random number generator.',
        engine: 'crypto',
        operation: 'random-string',
        layoutVariant: 'single-panel',
        inputLanguage: 'plaintext',
        outputLanguage: 'plaintext',
        hasTreeView: false,
        relatedTools: [
            { category: 'crypto', slug: 'password-strength' }
        ],
        faqs: [
            {
                question: 'How random is it?',
                answer: 'The tool strictly uses the Web Crypto APIs `crypto.getRandomValues()` method, which uses a cryptographically secure pseudorandom number generator (CSPRNG), never Math.random().'
            }
        ],
        useCases: [
            'Generating strong database and application passwords',
            'Creating custom secure temporary API keys'
        ],
        sampleInput: ''
    }
];
