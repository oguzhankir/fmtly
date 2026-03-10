# Roadmap

fmtly's roadmap is organized by phase. Each phase has a clear goal, a defined tool set, and exit criteria that must be met before moving to the next phase.

---

## Phase 0 — Platform Foundation

**Goal:** A working platform with Tool Registry, shared UI, CI/CD pipeline, and the first tool live on fmtly.dev.

This phase produces no visible product beyond a single tool. Everything built here is infrastructure that every subsequent tool benefits from.

### Platform Work

| Task |
|---|
| SvelteKit project, Cloudflare Pages, GitHub repo, CI/CD pipeline |
| Tool Registry types and API |
| Dynamic route `[category]/[tool]` connected to registry |
| Universal layout: Header, ToolLayout, StatusBar |
| Universal InputPanel and OutputPanel |
| Monaco Editor lazy load integration |
| Dark mode / Light mode with CSS design token system |
| Global keyboard shortcuts system |
| SEO metadata auto-generation from registry |
| Sitemap generator, robots.txt, `_headers`, `_redirects` |
| Lighthouse CI enforced — build fails below 95 |
| PWA manifest and service worker |
| fmtly.dev domain live, Cloudflare Web Analytics active |

### First Tool

JSON Formatter (`/json/formatter`)

### Exit Criteria

- `/json/formatter` is live and scores ≥ 95 Lighthouse on mobile
- New tools can be added via registry with zero route changes
- CI fails on any Lighthouse regression

---

## Phase 1 — Core Tools

**Goal:** Cover the highest-traffic utility categories. 35+ tools live. Platform launch.

Tools are built in priority order within each category.

### Data & Format Tools

| Tool |
|---|
| JSON Viewer, Validator, Minifier, Diff, Repair, Sorter, Stringify |
| JSON to YAML, JSON to CSV, JSON to XML |
| XML Formatter, Validator, Minifier, Viewer, XML to JSON |
| YAML Formatter, Validator, YAML to JSON |
| CSV to JSON, CSV Formatter |

### Encoding & Utility Tools

| Tool |
|---|
| Base64 Encoder / Decoder |
| URL Encoder / Decoder |
| JWT Decoder |
| HTML Escape / Unescape |
| JavaScript Escape / Unescape |
| JSON Escape / Unescape |

### Developer Utilities

| Tool |
|---|
| Case Converter |
| Word Counter |
| Regex Tester |
| Number Base Converter |
| Unix Timestamp Converter |
| Byte Size Converter |
| Temperature Converter |
| Hash Generator |
| UUID Generator |
| Password Generator |
| HTTP Status Codes |
| Cron Expression Parser |
| URL Parser |
| SQL Formatter |
| Code Diff |
| Fake Data Generator |
| Color Converter |
| Color Picker |

### Platform Work (Phase 1)

- URL sharing (LZ-compressed hash)
- Input history (localStorage per tool)
- JSON tree view with path copy, search, virtual scroll
- Category pages
- Homepage with search and recently used section
- Sample input library for all tools

### Exit Criteria

- 35+ tools live across at least 8 categories
- All tools score ≥ 95 Lighthouse on mobile
- Input history and URL sharing working on all tools

---

## Phase 2 — Full Coverage

**Goal:** Cover every major utility category. 120+ tools live.

### Data Tools Completion

- JSON: TOML, JSONPath, JMESPath, Schema tools
- XML: YAML, CSV conversions
- YAML: XML, CSV, TOML conversions, Diff
- CSV: XML, YAML, HTML Table, Markdown Table, Validator
- TOML: Formatter, Validator, JSON/YAML conversions

### Text Tools

- Text Diff, Lorem Ipsum, Slug Generator
- Line Sorter, Duplicate Remover
- Whitespace Cleaner
- Markdown to HTML, HTML to Markdown
- String Inspector

### Number & Math

- Unit Converter, Number Formatter, Percentage Calculator
- Time Duration Calculator, Timezone Converter
- Roman Numeral Converter

### Encoding

- HTML Entity Encoder, Unicode Converter

### Escaping

- XML, SQL, CSV Escape/Unescape

### Colors

- Contrast Checker, Palette Generator, Gradient Generator, Tint/Shade Generator

### Crypto

- HMAC Generator, Password Strength Checker
- ULID Generator, Random String Generator, Checksum Verifier

### Web

- User Agent Parser, CORS Explainer, MIME Type Reference
- IP Lookup, DNS Lookup (Cloudflare Worker)

### Code

- CSS, SCSS, LESS, HTML, JS, TS, GraphQL, Markdown Formatters

### Generators

- JSON to TypeScript, Python, Go, Zod, Rust, Java, C#
- JSON Schema Generator, Markdown Table Generator
- .gitignore Generator

### PDF Tools

- PDF Viewer, PDF to Text, PDF Merge, PDF Split, PDF Page Remover, PDF Rotate

### Image Tools

- Image to Base64, Base64 to Image, SVG Optimizer
- Image Resizer, Image Converter, Image Compressor

### File Tools

- ZIP Creator, ZIP Extractor, File Hash, MIME Type Detector
- Excel to JSON, Excel to CSV, JSON to Excel, CSV to Excel

### QR Code

- QR Code Generator, QR Code Reader

### Math

- Expression Evaluator, Statistics Calculator, Percentage Calculator

### Misc

- ASCII Table, HTML Color Reference, Keyboard Key Codes
- HTML Symbol Reference, Aspect Ratio Calculator

### Platform Work (Phase 2)

- Cloudflare Worker deployment for network tools
- Programmatic example pages at `/examples/[slug]`
- Learn pages at `/learn/[slug]`
- Per-tool Open Graph image generation at build time

### Exit Criteria

- 120+ tools live across all categories
- PDF, Image, and File tools working entirely client-side
- All network tools working via Worker proxy

---

## Phase 3 — Advanced Tools

**Goal:** Every developer utility imaginable. 200+ tools live.

### Remaining Tools

- Text Statistics (readability scores), ROT13
- Statistics Calculator, Matrix Calculator, Expression Evaluator
- Base32, Hex, Morse Code
- Shell/Bash Escape, Regex Escape
- Color Blindness Simulator, Color Names, Image Color Extractor
- Hash Compare, Bcrypt Generator, OTP Generator
- HTTP Headers Checker, SSL Certificate Checker, Open Graph Debugger, robots.txt Validator
- CSS Specificity Calculator, cURL to Fetch/Axios, Java/PHP Formatters
- JSON to Kotlin, Dart; OpenAPI Generator, Robots.txt Generator, .htaccess Generator
- Image Cropper, EXIF Reader/Stripper, Favicon Generator, Image Diff, ICO Converter
- PDF Metadata Reader, PDF to Images, HTML to PDF
- Barcode Generator, QR Code Reader
- YAML to TOML, JSON5 Formatter, NDJSON Viewer, SOAP/WSDL Formatters
- Unicode Converter full, Emoji Reference

### Platform Work (Phase 3)

- Transform Pipeline: chain multiple tools sequentially with visual step-by-step preview
- Saved pipelines (localStorage)
- 150+ example pages, 30+ learn pages

### Ecosystem — Phase 3

- Browser Extension (Chrome): auto-format JSON, right-click to open in fmtly
- CLI: `npx fmtly format data.json --to yaml`
- Browser Extension (Firefox)

### Exit Criteria

- 200+ tools live
- Chrome extension published
- CLI published to npm

---

## Phase 4 — Platform Maturity

### VS Code Extension

Format, convert, and inspect data directly in VS Code. Right-click any data value to open in fmtly.

### Embeddable Widget

Embed any fmtly tool on any website with a single script tag. Documentation sites, GitHub READMEs, blog posts.

### Additional Ecosystem

- Mobile app (PWA + native shell)
- API access for programmatic use

---

## Timeline

```
Week 2     Platform live. JSON Formatter deployed.
Week 10    Phase 1 complete. 35+ tools.
Month 4    Phase 2 complete. 120+ tools.
Month 8    Phase 3 complete. 200+ tools. Browser extension. CLI.
Month 12   Phase 4. VS Code extension. Embeddable widget.
```

---

## What Is Not on the Roadmap

- A backend that processes user data — never
- User accounts in the core platform
- Real-time collaboration in the core platform
- A general-purpose code editor