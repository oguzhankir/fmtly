# Security Policy

## Vision & Commitment
At **fmtly**, security and privacy are not features—they are our foundation. [cite_start]Our "Golden Rule" is that **every tool runs entirely in your browser**[cite: 33, 298]. [cite_start]No user data is ever sent to a server, stored, or logged[cite: 4, 33, 298].

## Supported Versions

We only support the latest stable version of fmtly with security updates. As a client-side web application, users are always encouraged to use the version hosted at [fmtly.dev](https://fmtly.dev).

| Version | Supported          |
| ------- | ------------------ |
| v1.0.x  | :white_check_mark: |
| < 1.0   | :x:                |

## Our Security Architecture
- [cite_start]**Zero Server-Side Logic:** No backend receives or processes your data[cite: 33, 298, 303].
- [cite_start]**Network Isolation:** Only network tools (DNS, IP Lookup) use a proxy, which does not log any user-identifiable data.
- [cite_start]**Static Content:** fmtly is served as a static site via Cloudflare Pages[cite: 18, 283].

## Reporting a Vulnerability

If you discover a security vulnerability (e.g., data leaks, XSS, or improper handling of local data), please do NOT open a public issue. Instead, follow these steps:

1. **Email:** Send a detailed report to **oguzhankir@gmail.com**.
2. **Details:** Include a description of the vulnerability, steps to reproduce, and a potential fix if available.
3. **Response Time:** You can expect an initial response within **48 hours**. 
4. **Disclosure:** We follow responsible disclosure practices. We will fix the issue and credit you in the release notes before making the vulnerability public.

## Out of Scope
Since the tool is open-source and local-first, the following are generally not considered vulnerabilities:
- [cite_start]Intentional features like "Load URL" that require outbound network requests.
- [cite_start]Local storage of tool state (unless sensitive data is stored insecurely)[cite: 43, 309].

---
*Thank you for helping us keep fmtly secure.*
