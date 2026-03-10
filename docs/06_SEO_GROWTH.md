# SEO & Content Guidelines

This document defines the on-page rules, technical requirements, and content standards for fmtly. It is written for contributors working on tool pages, example pages, and learn pages.

---

## URL Structure

Every tool URL follows the `[category]/[tool-slug]` pattern exactly. The URL communicates purpose to both users and search engines.

| Good | Bad |
|---|---|
| `/json/formatter` | `/tools/json-formatter-online` |
| `/crypto/hash` | `/hash-generator` |
| `/text/case-converter` | `/convert-text-case` |
| `/pdf/merge` | `/pdf-merge-tool` |

The URL slug must match the tool's primary function. Never add words like "online", "free", or "tool" to the slug.

---

## On-Page Rules

### Title Tags

**Formula:** `[Tool Name / Primary Function] — fmtly.dev`

**Rules:**
- Primary function first, always
- Maximum 60 characters
- Brand name at the end after an em dash
- Every page has a unique title
- Natural, readable language

**Examples:**
- `JSON Formatter & Beautifier — fmtly.dev`
- `SHA-256 Hash Generator — fmtly.dev`
- `Regex Tester — fmtly.dev`
- `PDF Merge — fmtly.dev`
- `Color Converter — HEX, RGB, HSL — fmtly.dev`

### Meta Descriptions

**Rules:**
- 140–155 characters
- Primary function described in the first 100 characters
- One concrete benefit (instant, free, no login)
- One privacy signal where relevant (no server, browser-only)
- Unique per page

**Examples:**
- `Generate SHA-256, SHA-512, and MD5 hashes instantly in your browser. Text and file input. Free, no upload, no login.`
- `Merge multiple PDF files into one in your browser. Drag to reorder pages. No upload — your files never leave your device.`
- `Convert HEX, RGB, HSL, HSV, and OKLCH color values instantly. Visual picker included. Free, instant, no login.`

### Heading Structure

- One `<h1>` per page — tool name and purpose, primary keyword used naturally
- `<h2>` for supporting content sections below the tool
- `<h3>` for subsections
- No headings created purely for keyword density

### Content Below the Tool

Every tool page has a content section below the fold. Minimum 300 words. Required sections:

1. **What this tool does** — 2–3 sentences, plain language
2. **When to use it** — 3–5 real use cases as bullet points
3. **How to use it** — 3–5 numbered steps
4. **Related tools** — 4–6 links to related tools
5. **FAQ** — 3–5 questions with Schema.org FAQPage markup

Writing rules:
- Write for humans first
- Every related tool mention is a hyperlink
- Content is unique per page — never duplicated across tools
- Minimum 300 words

---

## Technical SEO

### Canonical URLs

Every page has `<link rel="canonical">` pointing to its own URL. Trailing slash variants redirect to the canonical form via `static/_redirects`.

### Structured Data

**Every tool page:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "[Tool name]",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0" },
  "url": "[canonical URL]",
  "description": "[meta description]"
}
```

**Homepage and category pages:** Schema.org `WebSite` with `SearchAction`.

**FAQ sections:** Schema.org `FAQPage` with `Question` and `Answer` for each item.

All structured data is generated automatically by `src/lib/utils/seo.ts` from the Tool Registry entry. Never written manually in page files.

### Open Graph

Every page automatically includes:
- `og:title`, `og:description`, `og:url`, `og:type`, `og:image`, `og:site_name`
- `twitter:card` — `summary_large_image`

Per-tool OG images are generated at build time (1200×630px).

### Sitemap

Generated at `/sitemap.xml` from the Tool Registry and content files:

| Page Type | Priority | Change Frequency |
|---|---|---|
| Homepage | 1.0 | Weekly |
| Category pages | 0.8 | Weekly |
| Tool pages | 0.7 | Monthly |
| Example pages | 0.5 | Monthly |
| Learn pages | 0.5 | Monthly |

### robots.txt

```
User-agent: *
Allow: /

Sitemap: https://fmtly.dev/sitemap.xml
```

### Internal Linking

- Every tool page links to 4–6 related tools in the "Related tools" section
- Every category page links to all tools in that category
- Homepage links to all categories
- Converter tools link bidirectionally
- Example and learn pages link to their core tool
- Anchor text clearly describes the target page

### URL Stability

Once a URL is indexed, it is never deleted — only redirected with a 301 in `static/_redirects`. This is a permanent commitment. Never change a URL without adding a redirect.

---

## Content Architecture

### Example Pages (`/examples/[slug]`)

Format-specific viewer pages. Each pre-loads a real-world data example into the relevant tool.

Topics: common config files (`package.json`, `tsconfig.json`, `docker-compose.yaml`, `kubernetes.yaml`), API formats (`openapi.yaml`, RSS, Atom, sitemap), common API response structures, standard data formats (GeoJSON, NDJSON).

Each example page:
- Pre-loads the example into the correct tool
- Has 200–400 words explaining the format
- Links to the core tool page
- Has unique SEO metadata

### Learn Pages (`/learn/[slug]`)

Educational guides explaining formats, concepts, and best practices.

Topics: what is JSON/XML/YAML/CSV/TOML, format comparisons, what is Base64/URL encoding/JWT/Unix timestamp/UUID/ULID/cron, JSONPath and JMESPath tutorials, JSON Schema guide, Regex tutorial, color model explanations, PDF structure basics, hash functions explained.

Each learn page:
- Explains the concept genuinely — never thin content for crawlers
- Links to 2–3 related tools
- Has unique SEO metadata

---

## Pre-Deployment Checklist

Before any new tool page goes live:

- [ ] Unit tests passing
- [ ] Lighthouse ≥ 95 on mobile (CI enforced — build fails otherwise)
- [ ] URL appears correctly in sitemap
- [ ] All five content sections complete
- [ ] Related tools section has at least 4 links
- [ ] Meta title under 60 characters, unique
- [ ] Meta description 140–155 characters, unique
- [ ] Tool registered in correct category

---

## Ongoing Health Checks

### Monthly

- Review Core Web Vitals in Google Search Console
- Check for crawl errors and coverage gaps
- Verify new categories are linked from homepage

### Quarterly

- Audit internal linking — are new tools connected to the platform?
- Review example and learn pages for accuracy
- Check for broken links and drifted redirects