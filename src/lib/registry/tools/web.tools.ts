import type { ToolDefinition } from '../types.js';

export const webTools: ToolDefinition[] = [
    {
        id: 'web-url-parser',
        category: 'web',
        slug: 'url-parser',
        displayName: 'URL Parser',
        tagline: 'Break any URL into its components and rebuild it.',
        description:
            'Instantly parse any URL into protocol, hostname, path, query parameters, and fragment using the browser-native URL API. Then rebuild a URL from individual components.',
        primaryKeyword: 'url parser',
        metaTitle: 'URL Parser & Builder | fmtly',
        metaDescription:
            'Parse any URL into its components (protocol, hostname, pathname, query params, hash) and build URLs from parts. Runs entirely in your browser.',
        engine: 'web',
        operation: 'url-parser',
        layoutVariant: 'single-panel',
        inputLanguage: 'plaintext',
        outputLanguage: 'plaintext',
        hasTreeView: false,
        relatedTools: [
            { category: 'web', slug: 'cors' },
            { category: 'encode', slug: 'url' }
        ],
        faqs: [
            {
                question: 'Does this send my URLs anywhere?',
                answer: 'No. Everything uses the browser-native URL class. Your input never leaves your device.'
            },
            {
                question: 'Can it parse malformed URLs?',
                answer: 'It will show an error for truly invalid URLs. Relative URLs require a base URL to be valid.'
            }
        ],
        useCases: [
            'Debugging OAuth redirect_uri and callback URL issues',
            'Inspecting API endpoint query string parameters',
            'Building dynamic URLs programmatically'
        ],
        sampleInput: 'https://user:pass@api.example.com:8080/v1/users?page=2&limit=10&filter=active#results'
    },
    {
        id: 'web-user-agent',
        category: 'web',
        slug: 'user-agent',
        displayName: 'User Agent Parser',
        tagline: 'Decode any User-Agent string into browser, OS, and device info.',
        description:
            'Paste any User-Agent string to instantly identify browser name, version, operating system, device type, and rendering engine. Pre-filled with your current browser automatically.',
        primaryKeyword: 'user agent parser',
        metaTitle: 'User Agent Parser | Browser, OS & Device Detector | fmtly',
        metaDescription:
            'Parse and decode User-Agent strings. Detect browser name, version, OS, device type, and engine. Works offline in your browser.',
        engine: 'web',
        operation: 'user-agent',
        layoutVariant: 'single-panel',
        inputLanguage: 'plaintext',
        outputLanguage: 'plaintext',
        hasTreeView: false,
        relatedTools: [{ category: 'web', slug: 'cors' }],
        faqs: [
            {
                question: 'Is my User-Agent sent to a server?',
                answer: 'No. Parsing uses the ua-parser-js library running entirely client-side. No data is transmitted.'
            }
        ],
        useCases: [
            'Debugging browser compatibility issues from support tickets',
            'Verifying bot detection logic',
            'Understanding what device a specific UA represents'
        ],
        sampleInput:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    },
    {
        id: 'web-cors',
        category: 'web',
        slug: 'cors',
        displayName: 'CORS Header Explainer',
        tagline: 'Understand CORS headers and their security implications.',
        description:
            'Enter any CORS-related HTTP header name and value to get a plain-English explanation of what it does, why it exists, whether the current value is safe, and what the recommendation is.',
        primaryKeyword: 'cors header explainer',
        metaTitle: 'CORS Header Explainer | Security Reference | fmtly',
        metaDescription:
            'Understand any CORS header — Access-Control-Allow-Origin, Allow-Methods, Allow-Credentials, and more. Get security recommendations instantly.',
        engine: 'web',
        operation: 'cors',
        layoutVariant: 'single-panel',
        inputLanguage: 'plaintext',
        outputLanguage: 'plaintext',
        hasTreeView: false,
        relatedTools: [
            { category: 'web', slug: 'url-parser' },
            { category: 'web', slug: 'dns-lookup' }
        ],
        faqs: [
            {
                question: "Why does Access-Control-Allow-Origin: '*' cause issues?",
                answer:
                    "Wildcard origin disables the ability to send credentials (cookies, Authorization headers) with cross-origin requests. It also removes one layer of server-side trust validation."
            },
            {
                question: 'What is a CORS preflight request?',
                answer:
                    'For non-simple requests, browsers first send an OPTIONS request to ask if the actual request is allowed. The server must respond with appropriate CORS headers.'
            }
        ],
        useCases: [
            'Debugging cross-origin fetch errors in web applications',
            'Auditing API response headers for security vulnerabilities',
            'Learning CORS concepts from real header values'
        ],
        sampleInput: 'Access-Control-Allow-Origin'
    },
    {
        id: 'web-mime-types',
        category: 'web',
        slug: 'mime-types',
        displayName: 'MIME Type Reference',
        tagline: 'Search MIME types by extension or type string.',
        description:
            'Search our embedded database of 300+ MIME types by file extension (.json, .webp) or MIME type string (application/json, image/webp). Instantly see extensions, descriptions, and whether the format is binary.',
        primaryKeyword: 'mime types lookup',
        metaTitle: 'MIME Type Reference | Extension & Type Lookup | fmtly',
        metaDescription:
            'Look up any MIME type by file extension or MIME string. 300+ types including images, audio, video, documents, code, and archives.',
        engine: 'web',
        operation: 'mime-types',
        layoutVariant: 'single-panel',
        inputLanguage: 'plaintext',
        outputLanguage: 'plaintext',
        hasTreeView: false,
        relatedTools: [{ category: 'web', slug: 'url-parser' }],
        faqs: [
            {
                question: 'Does this make network requests?',
                answer:
                    'No. The entire MIME type database is embedded in the tool. All filtering happens client-side.'
            }
        ],
        useCases: [
            'Setting correct Content-Type headers in APIs',
            'Configuring web server MIME type mappings',
            'Identifying file types by extension'
        ],
        sampleInput: 'json'
    },
    {
        id: 'web-ip-lookup',
        category: 'web',
        slug: 'ip-lookup',
        displayName: 'IP Address Lookup',
        tagline: 'Geolocate any IP address — country, city, ISP, ASN.',
        description:
            'Look up geolocation, ASN, and ISP information for any public IP address via our Cloudflare Worker proxy. Your own IP is never logged.',
        primaryKeyword: 'ip address lookup',
        metaTitle: 'IP Address Lookup | Geolocation & ASN | fmtly',
        metaDescription:
            'Find the geolocation, ISP, ASN, city, country, and timezone for any public IP address. Powered by a privacy-respecting proxy Worker.',
        engine: 'web',
        operation: 'ip-lookup',
        layoutVariant: 'single-panel',
        inputLanguage: 'plaintext',
        outputLanguage: 'plaintext',
        hasTreeView: false,
        relatedTools: [{ category: 'web', slug: 'dns-lookup' }],
        faqs: [
            {
                question: 'Is my IP address stored?',
                answer:
                    'No. The Cloudflare Worker proxy relays the lookup to ipapi.co and returns the result. No data is logged.'
            }
        ],
        useCases: [
            'Debugging geolocation-based access controls',
            'Investigating suspicious IP addresses in logs',
            'Finding your own public IP and location'
        ],
        sampleInput: '8.8.8.8'
    },
    {
        id: 'web-dns-lookup',
        category: 'web',
        slug: 'dns-lookup',
        displayName: 'DNS Lookup',
        tagline: 'Query all DNS record types for any domain simultaneously.',
        description:
            'Look up A, AAAA, MX, TXT, CNAME, NS, and SOA records for any domain using Cloudflare DNS-over-HTTPS via our proxy Worker. All record types fetched in parallel.',
        primaryKeyword: 'dns lookup',
        metaTitle: 'DNS Lookup | A, MX, TXT, CNAME, NS Records | fmtly',
        metaDescription:
            'Query all DNS record types (A, AAAA, MX, TXT, CNAME, NS, SOA) for any domain simultaneously. Uses Cloudflare DNS-over-HTTPS.',
        engine: 'web',
        operation: 'dns-lookup',
        layoutVariant: 'single-panel',
        inputLanguage: 'plaintext',
        outputLanguage: 'plaintext',
        hasTreeView: false,
        relatedTools: [{ category: 'web', slug: 'ip-lookup' }],
        faqs: [
            {
                question: 'Which DNS resolver is used?',
                answer:
                    'Cloudflare DNS-over-HTTPS (cloudflare-dns.com/dns-query) is used via our proxy Worker for accuracy and speed.'
            }
        ],
        useCases: [
            'Verifying DNS propagation after domain changes',
            'Debugging email delivery by checking MX records',
            'Auditing SPF/DKIM/DMARC TXT records'
        ],
        sampleInput: 'example.com'
    }
];
