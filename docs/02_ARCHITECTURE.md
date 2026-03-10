# Architecture

This document describes the technical architecture of fmtly. Read this before writing any code or proposing structural changes.

---

## Design Constraints

Three constraints drive every architectural decision:

**1. Zero backend for user data.** No tool that processes user input may send that input to a server. All data processing runs in the browser. The only exceptions are network-dependent tools (DNS lookup, IP lookup, HTTP headers, SSL checker) which require a Cloudflare Workers proxy call — and even these never log or store user input.

**2. Static hosting on Cloudflare Pages.** The build output is a directory of static files served from Cloudflare's global CDN. Zero bandwidth cost, global distribution, no infrastructure to manage.

**3. Scale to 300+ tools without degrading performance.** The architecture must make adding the 300th tool as simple as adding the 3rd. No tool ever loads code from any other tool.

---

## The Tool Registry

The Tool Registry is the backbone of the platform. Every tool is defined as a TypeScript configuration object. This object drives:

- The tool's URL, display name, tagline, and description
- Its SEO metadata (title, description, canonical URL)
- Which processing engine it uses and which layout variant it needs
- Its category and related tools for internal linking
- Sample input for the empty state
- FAQ content for the page content section

**A tool is defined, not built.** Write a config object and a processing function. The platform generates the page, SEO, routing, and sitemap entry automatically. Adding a new tool takes 1–4 hours regardless of whether the platform has 10 tools or 300.

---

## Platform Layers

```
┌────────────────────────────────────────────────────────────┐
│  Layer 5: Tool Pages                                       │
│  Generated from registry. Never written by hand.          │
├────────────────────────────────────────────────────────────┤
│  Layer 4: Tool UI Components                               │
│  InputPanel · OutputPanel · Toolbar · StatusBar            │
│  Shared across all tools. Configured per tool.             │
├────────────────────────────────────────────────────────────┤
│  Layer 3: Processing Engines                               │
│  Data · Text · Number · Encoding · Color · Crypto          │
│  Web · Code · PDF · Image · File · QR · Generator          │
│  Accessibility · Math                                      │
│  Each engine: standalone, lazy loaded, zero cross-deps.    │
├────────────────────────────────────────────────────────────┤
│  Layer 2: Platform Core                                    │
│  Tool Registry · Router · SEO Generator · Stores           │
│  Keyboard Manager · Share Utility · Analytics              │
├────────────────────────────────────────────────────────────┤
│  Layer 1: Infrastructure                                   │
│  SvelteKit + Cloudflare Pages + Cloudflare Workers (proxy) │
└────────────────────────────────────────────────────────────┘
```

---

## URL Structure

### Pattern: `/[category]/[tool-slug]`

```
fmtly.dev/json/formatter
fmtly.dev/text/regex-tester
fmtly.dev/text/word-counter
fmtly.dev/number/base-converter
fmtly.dev/number/timestamp
fmtly.dev/encode/base64
fmtly.dev/encode/jwt
fmtly.dev/color/converter
fmtly.dev/color/blindness
fmtly.dev/crypto/hash
fmtly.dev/crypto/uuid
fmtly.dev/web/http-status
fmtly.dev/web/cron
fmtly.dev/pdf/merger
fmtly.dev/pdf/to-text
fmtly.dev/image/resize
fmtly.dev/image/compress
fmtly.dev/file/zip
fmtly.dev/file/excel-to-json
fmtly.dev/qr/generator
fmtly.dev/generate/fake-data
fmtly.dev/accessibility/contrast
```

### Category Taxonomy

| Slug | Display Name | Scope |
|---|---|---|
| `json` | JSON | All JSON-specific tools |
| `xml` | XML | All XML-specific tools |
| `yaml` | YAML | All YAML-specific tools |
| `csv` | CSV | All CSV-specific tools |
| `toml` | TOML | All TOML-specific tools |
| `text` | Text | String manipulation, regex, diff, word count |
| `number` | Numbers | Base conversion, timestamps, math, units |
| `encode` | Encoding | Base64, URL, JWT, Unicode |
| `escape` | Escaping | HTML, XML, JS, SQL, JSON, shell |
| `color` | Colors | Color conversion, picker, palette, accessibility |
| `crypto` | Crypto | Hashing, UUID, passwords, encryption |
| `web` | Web | HTTP, CORS, cron, URL, network tools |
| `code` | Code | SQL, CSS, JS, GraphQL, diff, formatters |
| `pdf` | PDF | View, convert, merge, split, extract |
| `image` | Images | Resize, convert, compress, SVG, favicon |
| `file` | Files | ZIP, Excel, file hash, type detection |
| `qr` | QR & Barcode | Generate and read QR codes and barcodes |
| `generate` | Generators | Fake data, type definitions, schemas |
| `accessibility` | Accessibility | Contrast, color blindness, font size |
| `convert` | Converters | Cross-format conversion aliases |

---

## Processing Engine Architecture

Each engine is an independent, lazy-loaded module in `src/lib/engines/`. When a user visits `/pdf/merger`, only the PDF engine loads. When they visit `/crypto/hash`, only the crypto engine loads.

### Engine Inventory

**Data Engines**

`engines/json/` — Parse, format, minify, validate, repair, sort, diff, stringify, convert. Uses: `json-source-map`, `jsonrepair`, `ajv`, `ajv-formats`, `jmespath`, `jsonpath-plus`.

`engines/xml/` — Parse, format, minify, validate, convert. Uses: `fast-xml-parser`.

`engines/yaml/` — Parse, format, validate, convert. Uses: `js-yaml`.

`engines/csv/` — Parse, format, convert. Uses: `papaparse`.

`engines/toml/` — Parse, format, validate, convert. Uses: `smol-toml`.

**Text Engines**

`engines/text/` — Case conversion, slug, lorem ipsum, word count, readability (Flesch-Kincaid, Gunning Fog, SMOG, Coleman-Liau), line operations, whitespace normalization, string inspection. No external dependencies.

`engines/regex/` — Regex testing with real-time match highlighting, group capture display, flag controls. Browser-native `RegExp`.

`engines/markdown/` — Markdown to HTML, HTML to Markdown. Uses: `marked`, `turndown`.

**Number Engines**

`engines/number/` — Base conversion, byte size, number formatting, Roman numerals, percentages, scientific notation. Browser-native `Intl.NumberFormat`.

`engines/timestamp/` — Unix timestamp ↔ human-readable, timezone conversion, relative time. Browser-native `Intl.DateTimeFormat`.

`engines/math/` — Matrix operations, statistics (mean, median, mode, variance, std dev), unit conversion. Uses: `mathjs` (lazy loaded only on math tool pages).

**Encoding Engines**

`engines/encoder/` — Base64 (text + file), URL encode/decode, HTML entities, Unicode. Browser-native APIs only.

`engines/jwt/` — JWT decode (header + payload, expiry, claims). Browser-native `atob`.

**Escaping Engines**

`engines/escaper/` — HTML, XML, JavaScript, JSON, SQL, CSV, shell escape/unescape. Pure JS.

**Color Engines**

`engines/color/` — HEX ↔ RGB ↔ HSL ↔ HSV ↔ OKLCH conversion, color picker, contrast ratio (WCAG), palette generator, gradient generator, color blindness simulation (CVD matrix transforms), tints/shades. Pure math, no external dependency.

**Crypto Engines**

`engines/crypto/` — MD5, SHA-1, SHA-256, SHA-384, SHA-512 (Web Crypto API + pure-JS MD5/SHA-1), HMAC, UUID v4/v7, ULID, password generation, password strength, AES-256-GCM encrypt/decrypt, random string, bcrypt (WASM). Uses: Web Crypto API, `uuid`, `ulid`.

**Web Engines**

`engines/web/` — HTTP status codes reference, cron parser, URL breakdown, User Agent parser, CORS explainer, MIME types. Uses: `cron-parser`, `ua-parser-js`.

`engines/network/` — IP lookup, DNS lookup, HTTP headers, SSL checker. Cloudflare Worker proxy only — no user data sent.

**Code Engines**

`engines/code/` — SQL formatter, code diff, cURL converter. Uses: `sql-formatter`, `diff`.

`engines/css/` — CSS, SCSS, LESS format and minify. Uses: Prettier WASM.

`engines/html/` — HTML format and minify. Uses: Prettier WASM.

`engines/js/` — JavaScript, TypeScript format and minify. Uses: Prettier WASM.

`engines/graphql/` — GraphQL format. Uses: Prettier WASM (GraphQL plugin only).

**PDF Engines**

`engines/pdf/` — View, extract text, merge, split, extract pages, convert to/from image, read metadata, remove password, compress, generate from text/Markdown. Uses: `PDF.js` (Mozilla), `pdf-lib`. Both are loaded lazily and only on PDF tool pages.

**Image Engines**

`engines/image/` — Resize, convert format, compress, crop, watermark, to Base64, from Base64, ASCII art, color picker from image, color extraction. Uses: Canvas API (browser native), `browser-image-compression`.

`engines/svg/` — SVG optimization. Uses: `svgo` (WASM build).

`engines/exif/` — EXIF metadata reader. Uses: `exifr`.

`engines/favicon/` — Favicon set generation from image or text. Uses: Canvas API.

**File Engines**

`engines/file/` — ZIP create/extract, file hash, Excel ↔ JSON, Excel ↔ CSV, file type detection. Uses: `JSZip`, `SheetJS`, Web Crypto API.

**QR & Barcode Engines**

`engines/qr/` — QR code generation and decoding. Uses: `qrcode`, `jsQR`.

`engines/barcode/` — Barcode generation and decoding. Uses: `bwip-js`, `zxing-wasm`.

**Generator Engines**

`engines/generator/` — Fake data, TypeScript/Python/Go/Zod/Rust/Java/C#/Kotlin/Dart generation, JSON Schema generation, SQL schema generation, Markdown table generation. Uses: `@faker-js/faker`, `quicktype-core`.

**Accessibility Engines**

`engines/accessibility/` — WCAG contrast ratio, color blindness simulation, font size checker. Pure math using color engine utilities.

---

## Cloudflare Workers — Network Tools Only

A minimal Worker at `workers/proxy/` is used exclusively for tools that require outbound network requests: IP lookup, DNS lookup, HTTP headers checker, SSL checker.

The Worker:
- Receives a target (IP, domain, or URL) from the browser
- Makes the corresponding network request
- Returns the result as JSON
- Logs nothing, stores nothing

---

## Layout Variants

**Single Panel** — One area. Used for: hash generator, UUID generator, timestamp converter, HTTP status lookup, color picker.

**Split Panel** — Input left, output right with draggable divider. Used for: most formatters, validators, converters.

**Dual Input** — Two inputs, one output. Used for: diff tools, HMAC generator.

**Bidirectional** — Two panels with a swap button. Used for: Base64, URL encoder, escape tools.

**Generator** — Controls/input left, rich output right with optional format/language selector. Used for: fake data generator, type definition generators.

**File Drop** — Large drop zone primary. Used for: PDF merger, image tools, ZIP tools.

---

## Code Splitting Strategy

| Asset | Loaded When | Size (gzipped) |
|---|---|---|
| Platform core | Always | ~40KB |
| JSON engine | `/json/*` only | ~30KB |
| PDF.js + pdf-lib | `/pdf/*` only | ~350KB |
| Faker.js | `/generate/fake-data` only | ~200KB |
| quicktype-core | `/generate/json-to-*` only | ~80KB |
| Prettier WASM | CSS/HTML/JS pages only | ~400KB |
| mathjs | `/number/matrix`, `/number/statistics` | ~150KB |
| Monaco Editor | On first editor focus | ~1.5MB |

No tool ever loads code for another tool.

---

## State Management

| Store | Persistence | Purpose |
|---|---|---|
| `inputStore` | sessionStorage (per tool) | Current raw input |
| `outputStore` | Memory | Processed output |
| `errorStore` | Memory | Current error state |
| `settingsStore` | localStorage | Theme, indent, font size |
| `historyStore` | localStorage (per tool) | Last 20 inputs per tool |
| `uiStore` | Memory | Panel state, search, etc. |

---

## Performance Targets

Hard requirements enforced by Lighthouse CI. Build fails if any page misses these.

| Metric | Requirement |
|---|---|
| Lighthouse Performance (mobile) | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint | < 0.9s |
| Largest Contentful Paint | < 1.2s |
| Time to Interactive | < 1.5s |
| Initial JS bundle | < 50KB gzipped |
| CLS | < 0.05 |

---

## File Structure

```
fmtly/
├── docs/
├── src/
│   ├── app.html
│   ├── app.css
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── +page.svelte
│   │   ├── [category]/[tool]/
│   │   │   ├── +page.svelte
│   │   │   └── +page.ts
│   │   ├── examples/[slug]/
│   │   ├── learn/[slug]/
│   │   └── sitemap.xml/+server.ts
│   └── lib/
│       ├── registry/
│       │   ├── index.ts
│       │   ├── types.ts
│       │   └── tools/
│       │       ├── json.tools.ts
│       │       ├── xml.tools.ts
│       │       ├── yaml.tools.ts
│       │       ├── csv.tools.ts
│       │       ├── toml.tools.ts
│       │       ├── text.tools.ts
│       │       ├── number.tools.ts
│       │       ├── encode.tools.ts
│       │       ├── escape.tools.ts
│       │       ├── color.tools.ts
│       │       ├── crypto.tools.ts
│       │       ├── web.tools.ts
│       │       ├── code.tools.ts
│       │       ├── pdf.tools.ts
│       │       ├── image.tools.ts
│       │       ├── file.tools.ts
│       │       ├── qr.tools.ts
│       │       ├── generate.tools.ts
│       │       └── accessibility.tools.ts
│       ├── engines/
│       │   ├── json/ · xml/ · yaml/ · csv/ · toml/
│       │   ├── text/ · regex/ · markdown/
│       │   ├── number/ · timestamp/ · math/
│       │   ├── encoder/ · jwt/ · escaper/
│       │   ├── color/ · crypto/
│       │   ├── web/ · network/
│       │   ├── code/ · css/ · html/ · js/ · graphql/
│       │   ├── pdf/ · image/ · svg/ · exif/ · favicon/
│       │   ├── file/ · qr/ · barcode/
│       │   ├── generator/
│       │   └── accessibility/
│       ├── components/
│       │   ├── layout/
│       │   ├── panels/
│       │   ├── editor/
│       │   ├── tree/
│       │   ├── tool/
│       │   └── ui/
│       ├── stores/
│       └── utils/
│           ├── seo.ts
│           ├── keyboard.ts
│           └── share.ts
├── workers/
│   └── proxy/
├── static/
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   ├── _headers
│   └── _redirects
├── tests/
│   ├── unit/
│   └── e2e/
├── .github/
├── .windsurfrules
├── .cursorrules
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```