# Security Policy

## Our Commitment

At **fmtly**, security and privacy are **foundational principles**, not afterthoughts. We are committed to:

- **Zero server-side data processing**: All user data stays in your browser
- **No tracking or analytics** of user-supplied data
- **Transparent code**: Open source MIT license—every decision is auditable
- **Rapid security response**: We take vulnerabilities seriously

---

## Architecture & Privacy Guarantees

### Client-Side Processing
Every tool in fmtly runs **entirely in your browser**:
- JSON formatting, validation, conversion ✓
- YAML, XML, CSV, TOML processing ✓
- Text transformations ✓
- Diff operations ✓
- Schema validation ✓

**No HTTP request is made for data processing.** Your input never leaves your device.

### Network Tools Exception
Some tools (e.g., IP geolocation, DNS lookup) require external APIs:
- These requests **proxy through a minimal Cloudflare Worker**
- The Worker **does not log** user-identifiable data
- Requests are **rate-limited** per IP for abuse prevention
- Alternative: Use your own API keys if privacy is critical

### Static Hosting
- Hosted on **Cloudflare Pages** (static content only)
- No Node.js backend
- No databases storing user state
- No session tokens or authentication required

---

## Security Features

### 1. Content Security Policy (CSP)
We enforce a strict CSP to prevent XSS attacks:

```
default-src 'self'
script-src 'self' 'wasm-unsafe-eval'
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
font-src 'self' https://fonts.gstatic.com
connect-src 'self' https://analytics.cloudflare.com https://cdn.jsdelivr.net
frame-ancestors 'none'
```

**Rationale:**
- `'wasm-unsafe-eval'` is required for WASM-based formatters (taplo for TOML)
- Fonts are loaded from Google (configurable)
- Analytics are optional and minimal
- Inline styles are necessary for Tailwind CSS

### 2. Input Validation & Error Handling
Every tool validates input before processing:

```typescript
// Example: JSON validation with detailed error locations
const validationResult = validateJSON(input);
if (!validationResult.valid) {
  // Errors include line/column for precise debugging
  // No stack traces exposed to frontend
}
```

- **No eval() or Function()** constructors—ever
- **No dynamic code execution** from user input
- **Errors are sanitized**—no sensitive paths leaked
- **Regex DoS protection**—regex patterns are tested for catastrophic backtracking

### 3. HTTPS & TLS
- Enforced via **HSTS headers** (max-age=31536000)
- **SSL/TLS Full Strict** mode on Cloudflare
- Certificate pinning not required (CA-based trust model)
- No mixed content (all resources over HTTPS)

### 4. Library Dependency Security
- Dependencies are **minimal and vetted**
- **No nested dependencies** for processing (monolithic libraries like `taplo_fmt` are preferred over multiple small packages)
- Dependencies locked via **pnpm** (deterministic, reproducible builds)
- Regular updates via dependabot
- No use of `eval`, `Function()`, or `import()` with user input

**Current core libraries:**
- `ajv` (JSON Schema validation) — widely used, actively maintained
- `js-yaml` (YAML parsing) — standard, no arbitrary code execution
- `fast-xml-parser` (XML parsing) — safe DOM-like API
- `smol-toml` + `@wasm-fmt/taplo_fmt` (TOML) — WASM-based, sandboxed

### 5. Build Security
- **TypeScript strict mode** enforced
- **Biome linter** catches common security issues
- **No hardcoded secrets** in codebase
- **Build-time checks:**
  - Type checking (`pnpm check`)
  - Linting (`pnpm lint`)
  - Unit tests (`pnpm test`)
  - Lighthouse CI (performance regression prevention)

### 6. Data Handling
- **No localStorage of sensitive data**—only UI preferences (theme, editor mode)
- **No cookies** set by fmtly
- **Browser cookies** are third-party only (Cloudflare, Google Fonts)
- **Session state** stored in memory only (lost on page refresh)
- **Share feature** uses URL compression—data encoded in hash, never sent to server

---

## Supported Versions

We provide security updates for:

| Version | Status |
|---------|--------|
| Latest (main branch) | ✅ Active support |
| Previous 2 releases | ⚠️ Critical fixes only |
| Older releases | ❌ No support |

**Note:** As a client-side web app, users are always encouraged to use the latest version at [fmtly.dev](https://fmtly.dev).

---

## Reporting Security Vulnerabilities

**Do NOT open a public GitHub issue for security vulnerabilities.** Instead:

### Responsible Disclosure Process

1. **Email:** Send a detailed report to **oguzhankir17
2. @gmail.com**
   - Include a clear description of the vulnerability
   - Steps to reproduce (if applicable)
   - Potential impact assessment
   - Proof-of-concept (optional but helpful)

3. **Response Timeline:**
   - **Initial response:** Within 48 hours
   - **Confirmation:** We'll acknowledge receipt and provide a timeline
   - **Fix deployment:** Critical issues within 7 days, high within 14 days
   - **Public disclosure:** We'll coordinate timing with you after a fix is deployed

4. **Credit & Attribution:**
   - We'll credit you in the release notes (unless you prefer anonymity)
   - A CVE will be requested if the vulnerability is widely exploitable

### Vulnerability Severity Guidelines

| Severity | Example | Timeline |
|----------|---------|----------|
| **Critical** | XSS in editor, data exfiltration, WASM breakout | 24–48 hours |
| **High** | CSP bypass, regex DoS, input validation bypass | 7 days |
| **Medium** | Low-impact XSS, information disclosure | 14 days |
| **Low** | Minor UI issues, documentation problems | Next release |

---

## Known Limitations & Out of Scope

The following are **not considered vulnerabilities** in the fmtly threat model:

### 1. Browser Extensions & Plugins
- Malicious browser extensions can intercept user data
- This is a **user responsibility**, not a fmtly bug
- Mitigation: We recommend users audit installed extensions

### 2. User's Own Machine Security
- Keyloggers, malware, or compromised operating systems
- Local file access via developer tools
- These threats are outside the scope of a web application

### 3. Network-Level Interception
- Man-in-the-middle attacks (mitigated by HTTPS/HSTS)
- ISP-level monitoring (user's network responsibility)
- Cloudflare infrastructure compromise (out of scope)

### 4. Intentional Features Requiring External Requests
- **Load URL** tool (deliberately fetches remote content)
- **Network tools** (DNS, IP lookup, SSL checker)
- These are **feature requirements**, not vulnerabilities
- Users should review URLs before loading

### 5. Local Storage Misuse
- If a user stores sensitive data in browser localStorage via developer console
- This is a **user responsibility**, not a fmtly issue

### 6. Third-Party Library Vulnerabilities
- If a library like `ajv` or `js-yaml` has an undisclosed 0-day
- We'll patch immediately upon disclosure
- Users can report directly to the library maintainers

---

## Security Best Practices for Users

### Recommended Usage
1. **Use HTTPS only**—always access [fmtly.dev](https://fmtly.dev), not an HTTP mirror
2. **Verify URLs before loading**—the "Load URL" feature loads external content
3. **Audit sensitive data**—never process passwords, API keys, or PII unless necessary
4. **Keep browser updated**—security patches are released regularly
5. **Use privacy mode for sensitive work**—disables localStorage, history

### Discouraged Usage
- ❌ Processing passwords or API keys (even though fmtly doesn't store them)
- ❌ Accessing fmtly via untrusted networks without a VPN
- ❌ Loading JSON/YAML/XML from untrusted sources without review
- ❌ Trusting URL-shared content without verifying the source

---

## Transparency & Auditing

### What We Log (if analytics are enabled)
- **Cloudflare Web Analytics** (optional, can be disabled)
  - Page views, referrer, user agent
  - **No query strings, input content, or sensitive data**
  - No personally identifiable information (PII)

### What We Don't Log
- ❌ User input data
- ❌ JSON, YAML, XML, CSV, TOML content
- ❌ Diff operations or query results
- ❌ IP addresses of the user (Cloudflare provides aggregated analytics)
- ❌ Any server-side processing (we don't have servers for this)

### Source Code Transparency
- **MIT License**—anyone can audit the code
- **GitHub repository**—all changes are visible
- **Build reproducibility**—deterministic builds via `pnpm`
- **No hidden dependencies**—pnpm-lock.yaml is committed

---

## Incident Response

### If a Vulnerability is Discovered
1. The security researcher notifies us via email
2. We acknowledge receipt within 48 hours
3. A fix is developed in a **private branch** (not public)
4. Security tests are added to prevent regression
5. The fix is deployed to production
6. A security advisory is published on GitHub
7. A new release is tagged

### Public Security Advisories
Security advisories will be posted to:
- **GitHub Security Advisories** (GitHub.com/oguzhankir/fmtly/security/advisories)
- **Release notes** with CVE details (if applicable)
- **Email notifications** via GitHub Dependabot (if subscribed)

---

## Compliance & Standards

### Standards Followed
- **OWASP Top 10** (prevent XSS, injection, auth flaws, etc.)
- **NIST Cybersecurity Framework** (identify, protect, detect, respond, recover)
- **Mozilla Security Guidelines** (CSP, headers, HTTPS)
- **Web Content Accessibility Guidelines** (WCAG 2.1)—security indirectly improves usability

### No Compliance Certifications Required
- **Not applicable:** fmtly is open-source, not a commercial service
- **Not applicable:** No user authentication, no data storage
- **Not applicable:** No PII collection or GDPR/CCPA applicability

---

## Contacts

- **Security report:** oguzhankir17@gmail.com
- **General inquiries:** [GitHub issues](https://github.com/oguzhankir/fmtly)
- **GitHub profile:** [@oguzhankir](https://github.com/oguzhankir)

---

## Changelog

### Version 1.0.0 (2026)
- Initial security policy
- CSP enforcement
- HTTPS/HSTS
- Vulnerability disclosure process

---

**Last updated:** 2026-03-19

*Thank you for helping keep fmtly secure.*
