# fmtly — Tool Roadmap & Backlog

> Living document. Each tool listed below is a candidate for implementation.
> Status legend: **done** = shipped, **backlog** = planned, not started.

---

## 1. Data Formats (Structured)

Core category — format, validate, convert, diff, and query structured data.

| # | Tool | Slug | Status | Description |
|---|------|------|--------|-------------|
| 1 | JSON Formatter | `json/formatter` | done | Pretty-print JSON with configurable indentation (2/4/tab). Real-time error markers, tree view, path breadcrumbs. |
| 2 | JSON Minifier | `json/minifier` | done | Strip all whitespace from JSON to produce the smallest valid output. |
| 3 | JSON Validator | `json/validator` | done | Deep validation with AJV schema support. Error locations shown in-editor and as a list. |
| 4 | JSON → YAML | `json/to-yaml` | done | Lossless conversion from JSON to YAML with configurable indent depth. |
| 5 | JSON → XML | `json/to-xml` | done | Convert JSON objects and arrays into well-formed XML with configurable root element. |
| 6 | JSON → CSV | `json/to-csv` | done | Flatten JSON arrays-of-objects into CSV with auto-detected headers. |
| 7 | JSON → TOML | `json/to-toml` | done | Convert JSON to TOML, preserving nested tables and inline arrays. |
| 8 | JSON → Markdown | `json/to-markdown` | done | Render JSON as a Markdown table or nested list. |
| 9 | JSON Diff | `json/diff` | done | Structural side-by-side diff of two JSON documents with semantic-aware change detection. |
| 10 | JSON Tree Viewer | `json/tree` | done | Interactive collapsible tree with search, depth control, and path copy. |
| 11 | JSONPath Query | `json/jsonpath` | done | Query JSON using JSONPath expressions with real-time results. |
| 12 | JMESPath Query | `json/jmespath` | done | Query JSON using JMESPath expressions with real-time results. |
| 13 | JSON Sorter | `json/sorter` | done | Recursively sort all object keys alphabetically or in reverse. |
| 14 | YAML Formatter | `yaml/formatter` | done | Pretty-print YAML with configurable indentation. |
| 15 | YAML Minifier | `yaml/minifier` | done | Compact YAML output by collapsing flow sequences and mappings. |
| 16 | YAML Validator | `yaml/validator` | done | Strict YAML 1.2 validation with line-level error markers. |
| 17 | YAML → JSON | `yaml/to-json` | done | Convert YAML to JSON preserving types (dates, booleans, integers). |
| 18 | YAML → XML | `yaml/to-xml` | done | Convert YAML documents to well-formed XML. |
| 19 | YAML → CSV | `yaml/to-csv` | done | Flatten YAML sequences-of-mappings into CSV. |
| 20 | YAML → TOML | `yaml/to-toml` | done | Convert YAML to TOML with proper table and array-of-tables handling. |
| 21 | YAML Diff | `yaml/diff` | done | Side-by-side diff of two YAML documents. |
| 22 | YAML Query | `yaml/query` | done | Query YAML using JSONPath/JMESPath after internal JSON conversion. |
| 23 | XML Formatter | `xml/formatter` | done | Pretty-print XML with configurable indentation. |
| 24 | XML Minifier | `xml/minifier` | done | Strip whitespace, collapse empty elements. |
| 25 | XML Validator | `xml/validator` | done | Well-formedness checks with line-level error markers. |
| 26 | XML → JSON | `xml/to-json` | done | Convert XML to JSON with attribute preservation. |
| 27 | XML → YAML | `xml/to-yaml` | done | Convert XML to YAML. |
| 28 | XML → CSV | `xml/to-csv` | done | Flatten repeating XML elements into CSV rows. |
| 29 | XPath Query | `xml/xpath` | done | Query XML documents using XPath expressions. |
| 30 | XML Diff | `xml/diff` | done | Side-by-side diff of two XML documents. |
| 31 | XML Stats | `xml/stats` | done | Count elements, attributes, namespaces, depth, and text nodes. |
| 32 | CSV Formatter | `csv/formatter` | done | Re-format CSV with configurable delimiter, quoting, and trimming. |
| 33 | CSV Validator | `csv/validator` | done | Validate CSV structure — row length consistency, quote pairing, header uniqueness. |
| 34 | CSV → JSON | `csv/to-json` | done | Convert CSV rows to JSON array-of-objects with typed values. |
| 35 | CSV → XML | `csv/to-xml` | done | Convert CSV to XML with row/column element wrapping. |
| 36 | CSV → YAML | `csv/to-yaml` | done | Convert CSV to YAML sequences. |
| 37 | CSV → HTML | `csv/to-html` | done | Render CSV as an HTML table with thead/tbody. |
| 38 | TOML Formatter | `toml/formatter` | done | Format TOML with taplo. |
| 39 | TOML Minifier | `toml/minifier` | done | Compact TOML by removing blank lines and comments. |
| 40 | TOML Validator | `toml/validator` | done | Validate against TOML v1.0 spec with precise error messages. |
| 41 | TOML → JSON | `toml/to-json` | done | Convert TOML to JSON. |
| 42 | TOML → YAML | `toml/to-yaml` | done | Convert TOML to YAML. |
| 43 | TOML → XML | `toml/to-xml` | done | Convert TOML to XML. |
| 44 | TOML → HTML | `toml/to-html` | done | Render TOML as a nested HTML table. |
| 45 | TOML Diff | `toml/diff` | done | Side-by-side diff of two TOML documents. |

### Backlog — Data Formats

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 46 | JSON Schema Generator | `json/schema-generator` | Infer a JSON Schema from any JSON document. Auto-detect types, required fields, enums, and nested structures. |
| 47 | JSON ↔ JSON Schema Validator | `json/schema-validate` | Validate a JSON document against a user-supplied JSON Schema (Draft-07 / 2020-12). Show per-path error annotations. |
| 48 | JSON Flattener / Unflattener | `json/flatten` | Convert deeply nested JSON to flat dot-notation keys and back. Useful for config files and i18n. |
| 49 | JSON Patch Builder | `json/patch` | Generate RFC 6902 JSON Patch from two documents. Apply patches to a base document. |
| 50 | JSON → TypeScript Types | `json/to-typescript` | Infer TypeScript interfaces/types from any JSON sample using quicktype. |
| 51 | JSON → Go Structs | `json/to-go` | Generate Go struct definitions from JSON. |
| 52 | JSON → Rust Serde | `json/to-rust` | Generate Rust serde structs from JSON. |
| 53 | JSON → Zod Schema | `json/to-zod` | Generate Zod validation schemas from a JSON sample. |
| 54 | JSON Lines (NDJSON) Viewer | `json/ndjson` | Parse and format newline-delimited JSON. Show each line as a formatted object with line numbers. |
| 55 | YAML Anchor Resolver | `yaml/resolve-anchors` | Resolve all YAML anchors and aliases into their expanded form. |
| 56 | YAML Multi-Doc Splitter | `yaml/split` | Split a multi-document YAML file (---) into individual documents. |
| 57 | XML → JSON Schema | `xml/to-json-schema` | Infer a JSON Schema from XML by analyzing element structure and cardinality. |
| 58 | XSD Validator | `xml/xsd-validate` | Validate XML against an XSD schema. |
| 59 | CSV Column Reorder / Drop | `csv/columns` | Visually reorder, rename, or drop CSV columns via drag-and-drop. |
| 60 | CSV Deduplicator | `csv/deduplicate` | Remove duplicate rows from CSV, with configurable key columns. |
| 61 | CSV → SQL INSERT | `csv/to-sql` | Generate SQL INSERT statements from CSV data with type inference and table name config. |
| 62 | Protocol Buffers → JSON | `json/from-protobuf` | Parse .proto files and generate sample JSON messages. |

---

## 2. Encoders & Decoders

Encode, decode, hash, and escape strings across common formats.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | Base64 Encode / Decode | `encode/base64` | Encode and decode Base64 strings. Supports standard and URL-safe variants. |
| 2 | URL Encode / Decode | `encode/url` | Percent-encode and decode URL components (RFC 3986). |
| 3 | HTML Entity Encode / Decode | `encode/html-entities` | Convert special characters to HTML entities and back (`&amp;`, `&lt;`, etc.). |
| 4 | Unicode Inspector | `encode/unicode` | Show codepoint, UTF-8 bytes, category, and glyph name for each character. |
| 5 | JWT Decoder | `encode/jwt` | Decode JWT tokens — display header, payload, and signature. Validate expiry. No verification of secrets. |
| 6 | Hex ↔ ASCII / UTF-8 | `encode/hex` | Convert between hexadecimal and text. Supports ASCII and UTF-8. |
| 7 | ROT13 / Caesar Cipher | `encode/rot13` | Apply ROT13 or arbitrary Caesar shift. Useful for spoiler text and simple obfuscation. |
| 8 | Punycode Encode / Decode | `encode/punycode` | Convert internationalized domain names (IDN) to Punycode and back. |
| 9 | Morse Code Translator | `encode/morse` | Convert text to Morse code (audio beeps + visual dots/dashes) and back. |

---

## 3. Text & String Tools

Analyze, transform, and manipulate plain text.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | Word & Character Counter | `text/word-counter` | Count words, characters, sentences, paragraphs, and reading time. |
| 2 | Readability Analyzer | `text/readability` | Calculate Flesch-Kincaid, Gunning Fog, Coleman-Liau, and SMOG readability scores. |
| 3 | Line Sorter | `text/line-sorter` | Sort lines alphabetically, numerically, by length, or shuffle randomly. |
| 4 | Duplicate Line Remover | `text/deduplicate` | Remove duplicate lines preserving first occurrence order. |
| 5 | Whitespace Cleaner | `text/whitespace` | Trim trailing spaces, collapse multiple blanks, normalize line endings. |
| 6 | Text Reverser | `text/reverser` | Reverse text by characters, words, or lines. |
| 7 | Markdown → HTML | `text/markdown-to-html` | Convert Markdown to HTML with live preview. Supports GFM tables and syntax highlighting. |
| 8 | Lorem Ipsum Generator | `text/lorem` | Generate placeholder text in paragraphs, sentences, or words. |
| 9 | Regex Tester | `text/regex` | Test regular expressions against sample text with real-time match highlighting, capture groups, and flag toggles. |
| 10 | String Case Converter | `text/case` | Convert between camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case, Sentence case. |
| 11 | Diff & Compare (Text) | `text/diff` | Side-by-side or unified diff of two plain text inputs with line-level and word-level change highlighting. |
| 12 | Text Escape / Unescape | `text/escape` | Escape and unescape strings for JSON, HTML, XML, URLs, SQL, and regex. |

---

## 4. Code & Developer Tools

Format, lint, convert, and generate code.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | CSS Formatter | `code/css-formatter` | Beautify CSS with Prettier. Configurable print width and single-quote options. |
| 2 | CSS Minifier | `code/css-minifier` | Minify CSS by stripping comments, whitespace, and shortening values. |
| 3 | SCSS / LESS Formatter | `code/scss-formatter` | Format SCSS and LESS with Prettier. |
| 4 | HTML Formatter | `code/html-formatter` | Pretty-print HTML with proper indentation and attribute formatting. |
| 5 | HTML Minifier | `code/html-minifier` | Minify HTML — collapse whitespace, remove comments, shorten booleans. |
| 6 | JavaScript Formatter | `code/js-formatter` | Format JavaScript with Prettier. ESM and CJS support. |
| 7 | TypeScript Formatter | `code/ts-formatter` | Format TypeScript with Prettier. |
| 8 | GraphQL Formatter | `code/graphql-formatter` | Format GraphQL queries and schemas. |
| 9 | SQL Formatter | `code/sql-formatter` | Format SQL with dialect support (PostgreSQL, MySQL, SQLite, T-SQL). |
| 10 | cURL → fetch() | `code/curl-to-fetch` | Convert cURL commands into browser-native fetch() calls. |
| 11 | cURL → Axios | `code/curl-to-axios` | Convert cURL commands into Axios request code. |
| 12 | Cron Expression Parser | `code/cron` | Parse and explain cron expressions in human-readable form. Show next N execution times. |
| 13 | .env Validator | `code/env-validator` | Validate `.env` files — detect duplicate keys, missing values, unquoted special chars. |
| 14 | Markdown Table Generator | `code/markdown-table` | Create Markdown tables visually with drag-and-drop column reordering. |
| 15 | Prettier Playground | `code/prettier` | Run Prettier on any supported language with full config control (printWidth, tabWidth, semi, etc.). |

---

## 5. AI & LLM Tools

Purpose-built for developers working with large language models, prompt engineering, and AI pipelines.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | LLM Token Counter | `ai/token-counter` | Count tokens for GPT-4o, Claude, Llama 3, Gemini, and Mistral. Paste text or upload files. Show token-per-word ratio and cost estimate. |
| 2 | Prompt Token Optimizer | `ai/token-optimizer` | Shorten a prompt while preserving meaning — strip filler words, compress whitespace, abbreviate known patterns. Show before/after token count and savings percentage. |
| 3 | System Prompt Builder | `ai/system-prompt` | Guided wizard to compose effective system prompts. Templates for code assistant, data analyst, translator, customer support. Export as plain text or JSON message array. |
| 4 | Function Calling Schema Builder | `ai/function-schema` | Visually build OpenAI-compatible function/tool schemas. Drag-and-drop parameter builder, type picker, enum editor. Export as JSON. |
| 5 | MCP Server Manifest Generator | `ai/mcp-manifest` | Generate Model Context Protocol server manifests. Define tools, resources, and prompts with a form-based UI. Export valid MCP JSON. |
| 6 | RAG Text Chunker | `ai/rag-chunker` | Split documents into chunks for retrieval-augmented generation. Configurable strategies: fixed-size, sentence-boundary, recursive character splitting, semantic (heading-aware). Preview chunk boundaries. |
| 7 | Embedding Visualizer | `ai/embeddings` | Paste embedding vectors, visualize with t-SNE/UMAP 2D projection. Color-code by label. Useful for debugging retrieval pipelines. |
| 8 | Prompt Diff | `ai/prompt-diff` | Compare two prompt versions side-by-side. Highlight structural changes (system/user/assistant blocks). Show token delta. |
| 9 | JSON → OpenAI Messages | `ai/json-to-messages` | Convert JSON conversations into OpenAI Chat API message format. Validate role/content structure. |
| 10 | JSONL Dataset Viewer | `ai/jsonl-viewer` | View and validate JSONL fine-tuning datasets. Show row count, token stats per row, schema consistency. |

---

## 6. Security & Crypto

Hashing, encoding, password tools, and key generation — all client-side.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | Hash Generator (SHA/MD5) | `crypto/hash` | Generate MD5, SHA-1, SHA-256, SHA-384, SHA-512 hashes of text input. |
| 2 | HMAC Generator | `crypto/hmac` | Compute HMAC signatures with configurable algorithm and secret key. |
| 3 | File Hash Calculator | `crypto/file-hash` | Drag-and-drop file hashing. Calculate SHA-256, MD5, CRC32 of any file without uploading. |
| 4 | Password Strength Meter | `crypto/password-strength` | Analyze password entropy, estimate crack time, flag common patterns and breached passwords (via k-anonymity). |
| 5 | Random String Generator | `crypto/random-string` | Generate cryptographically secure random strings with configurable charset, length, and count. |
| 6 | UUID / ULID Generator | `crypto/uuid` | Generate UUID v4, UUID v7, and ULID with batch generation and timestamp decoding. |
| 7 | RSA/EC Key Pair Generator | `crypto/keypair` | Generate RSA or ECDSA key pairs in PEM format using Web Crypto API. |
| 8 | Certificate Decoder | `crypto/cert-decoder` | Parse PEM-encoded X.509 certificates. Show subject, issuer, validity, SANs, and key info. |
| 9 | TOTP Generator | `crypto/totp` | Generate time-based one-time passwords (RFC 6238). Configure period, digits, and algorithm. |

---

## 7. Web & Network

Inspect, parse, and debug web protocols and network resources.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | URL Parser | `web/url-parser` | Decompose URLs into protocol, host, port, path, query params, and fragment. |
| 2 | User-Agent Parser | `web/user-agent` | Decode User-Agent strings — identify browser, OS, device type, and bot classification. |
| 3 | CORS Header Tester | `web/cors` | Test CORS preflight requests against any URL. Show allowed origins, methods, and headers. |
| 4 | MIME Type Lookup | `web/mime-types` | Search file extensions ↔ MIME types bidirectionally. |
| 5 | IP Geolocation | `web/ip-lookup` | Look up the geolocation, ASN, and ISP of any IP address. Proxied via Cloudflare Worker. |
| 6 | DNS Lookup | `web/dns-lookup` | Query A, AAAA, MX, TXT, NS, CNAME, SOA records for any domain. Proxied via Cloudflare Worker. |
| 7 | SSL Certificate Checker | `web/ssl-checker` | Check SSL certificate expiry, chain, and configuration for any domain. Proxied via Cloudflare Worker. |
| 8 | HTTP Header Inspector | `web/headers` | Send a HEAD request to any URL and display all response headers with explanations. |
| 9 | Webhook Tester | `web/webhook` | Generate a temporary webhook URL, receive and display incoming requests in real-time. |
| 10 | Open Graph Preview | `web/og-preview` | Fetch and preview Open Graph / Twitter Card metadata for any URL. Show how links appear on social platforms. |

---

## 8. Image & Media

Process images entirely in the browser.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | Image Resizer | `image/resize` | Resize images with locked aspect ratio, custom dimensions, or percentage scale. |
| 2 | Image Format Converter | `image/convert` | Convert between PNG, JPEG, WebP, AVIF, and GIF. |
| 3 | Image Compressor | `image/compress` | Reduce file size with configurable quality. Real-time before/after preview. |
| 4 | SVG Optimizer | `image/svg-optimizer` | Optimize SVG files with SVGO — remove metadata, simplify paths, collapse groups. |
| 5 | Image → Base64 | `image/to-base64` | Convert images to Base64 data URI strings. |
| 6 | Base64 → Image | `image/from-base64` | Decode Base64 strings back to downloadable images. |
| 7 | Image EXIF Viewer | `image/exif` | Read and display EXIF metadata — camera, GPS, date, orientation. Option to strip EXIF before download. |
| 8 | Favicon Generator | `image/favicon` | Upload an image and generate a complete favicon set (ICO, PNG 16-512, Apple Touch, SVG). |
| 9 | Image Color Picker | `image/color-picker` | Upload an image and pick individual pixel colors. Extract dominant color palette. |

---

## 9. Color & Design

Tools for designers and front-end developers.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | Contrast Checker | `color/contrast` | Check WCAG 2.1 AA/AAA contrast ratios between foreground and background colors. |
| 2 | Palette Generator | `color/palette` | Generate harmonious color palettes — complementary, analogous, triadic, split-complementary. Export as CSS, Tailwind, or SCSS variables. |
| 3 | Gradient Generator | `color/gradient` | Build CSS linear, radial, and conic gradients visually. Copy CSS output. |
| 4 | Color Blindness Simulator | `color/blindness` | Simulate protanopia, deuteranopia, tritanopia, and achromatopsia on any uploaded image or color palette. |
| 5 | Color Format Converter | `color/converter` | Convert between HEX, RGB, HSL, HSB, OKLCH, and CMYK. |
| 6 | Tailwind Color Finder | `color/tailwind` | Paste any color and find the closest Tailwind CSS palette match. |

---

## 10. Number & Math

Format, convert, and calculate numbers.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | Number Formatter | `number/formatter` | Format numbers with locale-aware thousand separators, decimal places, and notation (standard, scientific, compact). |
| 2 | Percentage Calculator | `number/percentage` | Calculate "X% of Y", "X is what % of Y", and "% change from X to Y". |
| 3 | Base Converter | `number/base-converter` | Convert between binary, octal, decimal, and hexadecimal. Supports arbitrary bases up to 36. |
| 4 | Unit Converter | `number/unit-converter` | Convert between length, weight, temperature, speed, data size, and time units. |
| 5 | Unix Timestamp Converter | `number/timestamp` | Convert Unix timestamps ↔ human-readable dates. Support seconds and milliseconds. Show relative time. |
| 6 | Byte Size Calculator | `number/bytes` | Convert between B, KB, MB, GB, TB. Toggle between binary (KiB) and decimal (KB) units. |

---

## 11. PDF Tools

View, extract, merge, and split PDFs — all in-browser.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | PDF Viewer | `pdf/viewer` | Render and navigate PDF files in the browser with page thumbnails and zoom. |
| 2 | PDF → Text | `pdf/to-text` | Extract raw text from PDF pages with page-by-page output. |
| 3 | PDF Merge | `pdf/merge` | Combine multiple PDF files into one. Drag-and-drop reordering. |
| 4 | PDF Split | `pdf/split` | Split a PDF into individual pages or custom page ranges. |
| 5 | PDF Page Extractor | `pdf/extract-pages` | Extract specific pages from a PDF into a new document. |
| 6 | PDF Metadata Viewer | `pdf/metadata` | Display PDF metadata — title, author, creator, creation date, page count, file size. |

---

## 12. File & Archive Tools

Work with files, archives, and data exchange formats.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | ZIP Creator | `file/zip` | Select multiple files and compress them into a ZIP archive in-browser. |
| 2 | ZIP Extractor | `file/unzip` | Extract contents of a ZIP file. Preview files before downloading. |
| 3 | Excel → JSON | `file/excel-to-json` | Convert XLSX/XLS sheets to JSON arrays with header mapping. |
| 4 | JSON → Excel | `file/json-to-excel` | Convert JSON arrays-of-objects into downloadable XLSX files. |
| 5 | File Diff | `file/diff` | Compare two files byte-by-byte. Show hexdump diff for binary files, text diff for text files. |

---

## 13. QR & Barcode

Generate and read QR codes and barcodes.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | QR Code Generator | `qr/generator` | Generate QR codes with customizable size, error correction, foreground/background colors, and logo overlay. |
| 2 | QR Code Reader | `qr/reader` | Read QR codes from uploaded images or camera capture. |
| 3 | Barcode Generator | `qr/barcode` | Generate Code 128, EAN-13, UPC-A, and other 1D barcodes. |

---

## 14. Generators

Generate test data, IDs, and code scaffolding.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | Fake Data Generator | `generate/fake-data` | Generate realistic test data — names, emails, addresses, phone numbers, dates. Configurable locale and count. Export as JSON, CSV, or SQL. |
| 2 | UUID Batch Generator | `generate/uuid-batch` | Generate batches of UUID v4 or v7 with copy-all and download. |
| 3 | Password Generator | `generate/password` | Generate secure passwords with configurable length, charset, and memorability options. |
| 4 | .gitignore Builder | `generate/gitignore` | Select frameworks and languages to generate a `.gitignore` file. Powered by gitignore.io templates. |
| 5 | README Template | `generate/readme` | Generate a README.md skeleton from project metadata — title, description, install, usage, license. |

---

## 15. Accessibility

Ensure designs and content meet accessibility standards.

| # | Tool | Slug | Description |
|---|------|------|-------------|
| 1 | WCAG Contrast Checker | `a11y/contrast` | Check color contrast ratios against WCAG 2.1 AA and AAA criteria for normal and large text. |
| 2 | Font Size Calculator | `a11y/font-size` | Check if font sizes meet WCAG minimum requirements at given viewing distances. |
| 3 | Color Blindness Previewer | `a11y/color-blindness` | Upload a screenshot or enter colors to see how they appear under various color vision deficiencies. |
| 4 | Alt Text Evaluator | `a11y/alt-text` | Paste image alt text and get suggestions for improvement based on WCAG guidelines. |

---

## Implementation Priority

When choosing what to build next, apply this scoring:

1. **User demand** — How often do developers actually need this?
2. **Uniqueness** — Is fmtly's implementation meaningfully better than existing free tools?
3. **Browser-feasible** — Can it run 100% client-side with acceptable performance?
4. **SEO value** — Does the tool target a high-volume, low-competition keyword?
5. **Cross-linking** — Does the tool create natural links to/from existing data tools?

### Suggested next wave (after data tools are polished)

1. **AI & LLM Tools** — Massive developer demand, very few good browser-native options
2. **Encoders & Decoders** — High search volume, quick to build
3. **Code Formatters** — Natural extension of data formatting
4. **Text & String Tools** — Complements data tools well
5. **Security & Crypto** — High trust signal, client-side differentiator
