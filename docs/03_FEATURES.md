# Features

Complete tool catalog for fmtly. Every tool listed here runs entirely in the browser — no server, no upload, no login. The only exceptions are network tools which use a minimal Cloudflare Worker proxy that logs nothing.

---

## Platform Features (All Tools Share These)

- Tool Registry — auto-generated pages, SEO, routing, sitemap
- Universal Input Panel (paste, type, file drop, URL fetch, auto-detect format)
- Universal Output Panel (copy, download, syntax highlight)
- Monaco Editor (lazy loaded on first focus)
- Dark mode / Light mode (system default + user override, persisted)
- Keyboard shortcuts (global + per-tool, `?` to open reference)
- URL sharing (LZ-compressed hash, never sent to server)
- Input history (last 20 per tool, localStorage)
- Status bar (validity, size, character count, cursor position)
- SEO metadata auto-generated from registry
- Sitemap auto-generated from registry
- Category pages with tool directory
- Homepage with search, recently used, and category grid
- PWA — installable, offline for all non-network tools

---

## Data & Formats

### JSON
| Tool | URL | Phase |
|---|---|---|
| JSON Formatter | `/json/formatter` | 1 |
| JSON Viewer (tree) | `/json/viewer` | 1 |
| JSON Validator | `/json/validator` | 1 |
| JSON Minifier | `/json/minifier` | 1 |
| JSON Diff | `/json/diff` | 1 |
| JSON Repair | `/json/repair` | 1 |
| JSON Sorter | `/json/sorter` | 1 |
| JSON Stringify / Parse | `/json/stringify` | 1 |
| JSON to YAML | `/json/to-yaml` | 1 |
| JSON to CSV | `/json/to-csv` | 1 |
| JSON to XML | `/json/to-xml` | 1 |
| JSON to TOML | `/json/to-toml` | 2 |
| JSON to Markdown Table | `/json/to-markdown` | 2 |
| JSONPath Query | `/json/jsonpath` | 2 |
| JMESPath Query | `/json/jmespath` | 2 |
| JSON Schema Validator | `/json/schema-validator` | 2 |
| JSON Schema Generator | `/json/schema-generator` | 2 |
| JSON5 Formatter | `/json/json5` | 3 |
| NDJSON Viewer | `/json/ndjson` | 3 |

### XML
| Tool | URL | Phase |
|---|---|---|
| XML Formatter | `/xml/formatter` | 1 |
| XML Validator | `/xml/validator` | 1 |
| XML Minifier | `/xml/minifier` | 1 |
| XML Viewer (tree) | `/xml/viewer` | 1 |
| XML to JSON | `/xml/to-json` | 1 |
| XML to YAML | `/xml/to-yaml` | 2 |
| XML to CSV | `/xml/to-csv` | 2 |
| WSDL Formatter | `/xml/wsdl` | 3 |
| SOAP Formatter | `/xml/soap` | 3 |

### YAML
| Tool | URL | Phase |
|---|---|---|
| YAML Formatter | `/yaml/formatter` | 1 |
| YAML Validator | `/yaml/validator` | 1 |
| YAML to JSON | `/yaml/to-json` | 1 |
| YAML to XML | `/yaml/to-xml` | 2 |
| YAML to CSV | `/yaml/to-csv` | 2 |
| YAML to TOML | `/yaml/to-toml` | 2 |
| YAML Diff | `/yaml/diff` | 2 |

### CSV
| Tool | URL | Phase |
|---|---|---|
| CSV to JSON | `/csv/to-json` | 1 |
| CSV Formatter | `/csv/formatter` | 1 |
| CSV Validator | `/csv/validator` | 2 |
| CSV to XML | `/csv/to-xml` | 2 |
| CSV to YAML | `/csv/to-yaml` | 2 |
| CSV to HTML Table | `/csv/to-html` | 2 |
| CSV to Markdown Table | `/csv/to-markdown` | 2 |

### TOML
| Tool | URL | Phase |
|---|---|---|
| TOML Formatter | `/toml/formatter` | 2 |
| TOML Validator | `/toml/validator` | 2 |
| TOML to JSON | `/toml/to-json` | 2 |
| TOML to YAML | `/toml/to-yaml` | 3 |

---

## Text & Strings

| Tool | URL | Description | Phase |
|---|---|---|---|
| Case Converter | `/text/case-converter` | camelCase, snake_case, kebab-case, PascalCase, SCREAMING_SNAKE, Title Case, sentence case | 1 |
| Text Diff | `/text/diff` | Side-by-side line diff with change highlighting | 1 |
| Regex Tester | `/text/regex-tester` | Real-time match highlighting, capture groups, flag controls, common pattern library | 1 |
| Word Counter | `/text/word-counter` | Words, characters, sentences, paragraphs, lines, reading time, speaking time | 1 |
| Lorem Ipsum Generator | `/text/lorem-ipsum` | Configurable paragraphs, sentences, words. Multiple variants. | 1 |
| Slug Generator | `/text/slug-generator` | URL-safe slug. Configurable separator, locale, max length. | 1 |
| Line Sorter | `/text/line-sorter` | Sort alphabetically, numerically, by length | 2 |
| Duplicate Line Remover | `/text/deduplicate` | Remove duplicate lines, case-sensitive and insensitive | 2 |
| Whitespace Cleaner | `/text/whitespace` | Remove extra spaces, normalize line endings, trim, collapse blank lines | 2 |
| Markdown to HTML | `/text/markdown-to-html` | Convert Markdown to HTML with live preview | 2 |
| HTML to Markdown | `/text/html-to-markdown` | Convert HTML to clean Markdown | 2 |
| Text Reverser | `/text/reverser` | Reverse characters, words, or lines | 2 |
| String Inspector | `/text/inspector` | Encoding, byte length, code points, invisible character detection | 2 |
| Text Statistics | `/text/statistics` | Flesch-Kincaid readability, vocabulary density, frequent words | 3 |
| ROT13 | `/text/rot13` | ROT13 encode/decode | 3 |

---

## Numbers & Math

| Tool | URL | Description | Phase |
|---|---|---|---|
| Number Base Converter | `/number/base-converter` | Binary, octal, decimal, hex, any base 2–36 | 1 |
| Unix Timestamp Converter | `/number/timestamp` | Unix timestamp to/from human-readable, multiple timezones | 1 |
| Byte Size Converter | `/number/byte-size` | Bytes through PB in binary (KiB) and decimal (KB) | 1 |
| Temperature Converter | `/number/temperature` | Celsius, Fahrenheit, Kelvin | 1 |
| Unit Converter | `/number/units` | Length, weight, speed, pressure, area, volume | 2 |
| Number Formatter | `/number/formatter` | Locale-aware separators, decimal precision, currency | 2 |
| Percentage Calculator | `/number/percentage` | Percentage of, change, difference, compound growth | 2 |
| Time Duration Calculator | `/number/duration` | Add/subtract durations, convert time units | 2 |
| Timezone Converter | `/number/timezone` | Convert between any two timezones with DST awareness | 2 |
| Roman Numeral Converter | `/number/roman` | Integer to/from Roman numeral | 2 |
| Statistics Calculator | `/number/statistics` | Mean, median, mode, std dev, variance, quartiles | 3 |
| Matrix Calculator | `/number/matrix` | Add, subtract, multiply, transpose, determinant, inverse | 3 |
| Expression Evaluator | `/number/evaluate` | Evaluate math expressions safely in the browser | 3 |

---

## Encoding & Decoding

| Tool | URL | Description | Phase |
|---|---|---|---|
| Base64 Encoder / Decoder | `/encode/base64` | Text and files. Base64url variant. | 1 |
| URL Encoder / Decoder | `/encode/url` | Full URLs and individual components | 1 |
| JWT Decoder | `/encode/jwt` | Header, payload, expiry, algorithm, claims. No secret required. | 1 |
| HTML Entity Encoder | `/encode/html-entities` | Named and numeric HTML entities | 2 |
| Unicode Converter | `/encode/unicode` | Character, code point, HTML entity, CSS escape, JS escape | 2 |
| Base32 Encoder / Decoder | `/encode/base32` | Base32 encode/decode | 3 |
| Hex Encoder / Decoder | `/encode/hex` | Text to/from hexadecimal | 3 |
| Morse Code | `/encode/morse` | Text to/from Morse code | 3 |

---

## Escaping

| Tool | URL | Phase |
|---|---|---|
| HTML Escape / Unescape | `/escape/html` | 1 |
| JavaScript Escape / Unescape | `/escape/javascript` | 1 |
| JSON Escape / Unescape | `/escape/json` | 1 |
| XML Escape / Unescape | `/escape/xml` | 2 |
| SQL Escape | `/escape/sql` | 2 |
| CSV Escape | `/escape/csv` | 2 |
| Shell / Bash Escape | `/escape/shell` | 3 |
| Regex Escape | `/escape/regex` | 3 |

---

## Colors

| Tool | URL | Description | Phase |
|---|---|---|---|
| Color Converter | `/color/converter` | HEX, RGB, HSL, HSV, OKLCH, CSS named — full matrix | 1 |
| Color Picker | `/color/picker` | Visual picker, all format outputs simultaneously | 1 |
| Contrast Checker | `/color/contrast` | WCAG 2.1 AA/AAA compliance for text sizes | 2 |
| Palette Generator | `/color/palette` | Complementary, analogous, triadic, tetradic scales | 2 |
| Gradient Generator | `/color/gradient` | CSS linear/radial gradient builder with live preview | 2 |
| Tint / Shade Generator | `/color/tints` | Full tint and shade scale from a base color | 2 |
| Color Blindness Simulator | `/color/accessibility` | Deuteranopia, Protanopia, Tritanopia, Achromatopsia | 3 |
| Color Names | `/color/names` | All CSS named colors, find nearest to any value | 3 |
| Image Color Extractor | `/color/extractor` | Extract dominant palette from an uploaded image | 3 |

---

## Crypto & Security

| Tool | URL | Description | Phase |
|---|---|---|---|
| Hash Generator | `/crypto/hash` | MD5, SHA-1, SHA-256, SHA-384, SHA-512 from text or file | 1 |
| UUID Generator | `/crypto/uuid` | UUID v4 and v7, bulk generation | 1 |
| Password Generator | `/crypto/password` | Length, character sets, count, strength indicator | 1 |
| HMAC Generator | `/crypto/hmac` | HMAC-SHA256/384/512, key and message inputs | 2 |
| Password Strength Checker | `/crypto/password-strength` | Entropy, pattern detection, time-to-crack estimate | 2 |
| ULID Generator | `/crypto/ulid` | Universally Unique Lexicographically Sortable Identifiers | 2 |
| Random String Generator | `/crypto/random-string` | Configurable charset, length, count | 2 |
| Checksum Verifier | `/crypto/checksum` | Verify file integrity against expected hash | 2 |
| Hash Compare | `/crypto/hash-compare` | Compare two hash strings safely | 3 |
| Bcrypt Generator | `/crypto/bcrypt` | Generate and verify bcrypt hashes (WASM) | 3 |
| OTP Generator | `/crypto/otp` | Time-based OTP from a TOTP secret (Web Crypto API) | 3 |

---

## Web & Network

| Tool | URL | Description | Phase |
|---|---|---|---|
| HTTP Status Codes | `/web/http-status` | Complete reference, searchable | 1 |
| Cron Expression Parser | `/web/cron` | Plain English description, next N run times, timezone | 1 |
| URL Parser | `/web/url-parser` | Break any URL into all components, build from parts | 1 |
| User Agent Parser | `/web/user-agent` | Browser, OS, device, engine | 2 |
| CORS Header Explainer | `/web/cors` | Explain CORS headers and security implications | 2 |
| MIME Type Reference | `/web/mime-types` | Search by extension or type | 2 |
| IP Lookup | `/web/ip-lookup` | Geolocation and ASN (via proxy Worker) | 2 |
| DNS Lookup | `/web/dns-lookup` | A, AAAA, MX, TXT, CNAME, NS records (via proxy Worker) | 2 |
| HTTP Headers Checker | `/web/headers` | Response headers for any public URL (via proxy Worker) | 3 |
| SSL Certificate Checker | `/web/ssl` | Certificate details, expiry, chain (via proxy Worker) | 3 |
| Open Graph Debugger | `/web/opengraph` | Fetch and preview OG tags for any URL (via proxy Worker) | 3 |
| robots.txt Validator | `/web/robots` | Validate and explain a robots.txt | 3 |

---

## Code & Dev Tools

| Tool | URL | Description | Phase |
|---|---|---|---|
| SQL Formatter | `/code/sql` | MySQL, PostgreSQL, SQLite, T-SQL | 1 |
| Code Diff | `/code/diff` | Side-by-side diff, syntax highlighting | 1 |
| CSS Formatter | `/code/css` | Format and minify CSS | 2 |
| SCSS Formatter | `/code/scss` | Format SCSS | 2 |
| LESS Formatter | `/code/less` | Format LESS | 2 |
| HTML Formatter | `/code/html` | Format and minify HTML | 2 |
| JavaScript Formatter | `/code/javascript` | Format and minify JavaScript | 2 |
| TypeScript Formatter | `/code/typescript` | Format TypeScript | 2 |
| GraphQL Formatter | `/code/graphql` | Format queries and schemas | 2 |
| Markdown Formatter | `/code/markdown` | Format and preview Markdown | 2 |
| CSS Specificity Calculator | `/code/css-specificity` | Calculate and compare selector specificity | 3 |
| cURL to Fetch | `/code/curl-to-fetch` | Convert cURL to fetch() | 3 |
| cURL to Axios | `/code/curl-to-axios` | Convert cURL to Axios | 3 |
| Java Formatter | `/code/java` | Format Java | 3 |
| PHP Formatter | `/code/php` | Format PHP | 3 |

---

## Generators

| Tool | URL | Description | Phase |
|---|---|---|---|
| Fake Data Generator | `/generate/fake-data` | Names, emails, addresses, phones, companies, UUIDs. JSON, CSV, SQL output. | 1 |
| JSON to TypeScript | `/generate/json-to-typescript` | TypeScript interfaces | 2 |
| JSON to Python | `/generate/json-to-python` | Python dataclasses | 2 |
| JSON to Go | `/generate/json-to-go` | Go structs | 2 |
| JSON to Zod | `/generate/json-to-zod` | Zod schemas | 2 |
| JSON to Rust | `/generate/json-to-rust` | Rust structs with serde | 2 |
| JSON to Java | `/generate/json-to-java` | Java POJO classes | 2 |
| JSON to C# | `/generate/json-to-csharp` | C# classes | 2 |
| JSON to Kotlin | `/generate/json-to-kotlin` | Kotlin data classes | 3 |
| JSON to Dart | `/generate/json-to-dart` | Dart classes | 3 |
| JSON Schema Generator | `/generate/json-schema` | JSON Schema from a JSON example | 2 |
| Markdown Table Generator | `/generate/markdown-table` | Build Markdown tables visually | 2 |
| .gitignore Generator | `/generate/gitignore` | .gitignore for any language or framework | 2 |
| OpenAPI Generator | `/generate/openapi` | OpenAPI skeleton from request/response examples | 3 |
| Robots.txt Generator | `/generate/robots-txt` | robots.txt with visual rule builder | 3 |
| .htaccess Generator | `/generate/htaccess` | Apache .htaccess rules visually | 3 |

---

## PDF Tools

All PDF processing uses PDF.js and pdf-lib — entirely client-side.

| Tool | URL | Description | Phase |
|---|---|---|---|
| PDF Viewer | `/pdf/viewer` | View any PDF with page navigation | 2 |
| PDF to Text | `/pdf/to-text` | Extract plain text from a PDF | 2 |
| PDF Merge | `/pdf/merge` | Merge multiple PDFs into one | 2 |
| PDF Split | `/pdf/split` | Split by page range or every N pages | 2 |
| PDF Page Remover | `/pdf/remove-pages` | Select and remove specific pages | 2 |
| PDF Rotate | `/pdf/rotate` | Rotate pages or entire document | 2 |
| PDF Metadata Reader | `/pdf/metadata` | Title, author, creation date, all metadata | 3 |
| PDF to Images | `/pdf/to-images` | Export pages as PNG (Canvas API) | 3 |
| HTML to PDF | `/pdf/from-html` | Render HTML as downloadable PDF | 3 |

---

## Image Tools

All image processing uses Canvas API — entirely client-side.

| Tool | URL | Description | Phase |
|---|---|---|---|
| Image to Base64 | `/image/to-base64` | PNG, JPG, SVG, WebP, GIF to Base64 data URL | 2 |
| Base64 to Image | `/image/from-base64` | Base64 to downloadable image | 2 |
| SVG Optimizer | `/image/svg-optimizer` | Reduce SVG size with SVGO, before/after preview | 2 |
| Image Resizer | `/image/resize` | Resize by pixels or percentage, maintain aspect ratio | 2 |
| Image Converter | `/image/convert` | PNG, JPG, WebP, BMP, GIF conversion | 2 |
| Image Compressor | `/image/compress` | Reduce file size with configurable quality | 2 |
| Image Cropper | `/image/crop` | Crop images visually | 3 |
| EXIF Reader | `/image/exif` | All EXIF metadata from JPEG/TIFF | 3 |
| EXIF Stripper | `/image/strip-exif` | Remove EXIF for privacy | 3 |
| Favicon Generator | `/image/favicon` | Generate .ico + PNG set from image or text | 3 |
| Image Diff | `/image/diff` | Pixel-level visual comparison | 3 |
| ICO Converter | `/image/ico` | Convert any image to .ico | 3 |

---

## File Tools

| Tool | URL | Description | Phase |
|---|---|---|---|
| ZIP Creator | `/file/zip` | Compress multiple files into a ZIP (JSZip) | 2 |
| ZIP Extractor | `/file/unzip` | Extract and preview ZIP contents | 2 |
| File Hash | `/file/hash` | SHA-256, MD5, SHA-512 for any local file | 2 |
| MIME Type Detector | `/file/mime` | Detect MIME type by content inspection | 2 |
| Excel to JSON | `/file/excel-to-json` | XLSX/XLS to JSON (SheetJS) | 2 |
| Excel to CSV | `/file/excel-to-csv` | XLSX/XLS to CSV | 2 |
| JSON to Excel | `/file/json-to-excel` | JSON array to XLSX | 2 |
| CSV to Excel | `/file/csv-to-excel` | CSV to XLSX | 2 |

---

## QR Code & Barcodes

| Tool | URL | Description | Phase |
|---|---|---|---|
| QR Code Generator | `/qr/generator` | Text, URL, WiFi, vCard, email. PNG/SVG download. | 2 |
| QR Code Reader | `/qr/reader` | Decode QR codes from uploaded images | 2 |
| Barcode Generator | `/qr/barcode` | Code 128, EAN-13, UPC-A and more | 3 |

---

## Misc Developer Utilities

| Tool | URL | Description | Phase |
|---|---|---|---|
| ASCII Table | `/misc/ascii` | Full ASCII and extended ASCII reference | 2 |
| HTML Color Reference | `/misc/html-colors` | All 140 HTML named colors | 2 |
| Keyboard Key Codes | `/misc/keycodes` | Interactive keyboard with JavaScript key codes | 2 |
| HTML Symbol Reference | `/misc/html-symbols` | All HTML special characters and symbols | 2 |
| Aspect Ratio Calculator | `/misc/aspect-ratio` | Calculate dimensions maintaining any ratio | 2 |
| Emoji Reference | `/misc/emoji` | Search and copy emojis with Unicode and HTML codes | 3 |

---

## Ecosystem (Phase 4+)

| Feature | Description |
|---|---|
| Browser Extension (Chrome) | Auto-format JSON responses, right-click to open in fmtly |
| Browser Extension (Firefox) | Same |
| CLI: `npx fmtly` | Use any fmtly tool from the terminal |
| VS Code Extension | Format, convert, inspect data without leaving the editor |
| Embeddable Widget | Embed any fmtly tool on any site with one script tag |
| PWA (Offline) | All non-network tools work fully offline after first visit |