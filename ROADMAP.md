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
| 38 | CSV → SQL | `csv/to-sql` | done | Generate SQL INSERT statements from CSV data with type inference and table name config. |
| 39 | CSV Diff | `csv/diff` | done | Side-by-side diff of two CSV documents with row-level change detection. |
| 40 | TOML Formatter | `toml/formatter` | done | Format TOML with taplo. |
| 41 | TOML Minifier | `toml/minifier` | done | Compact TOML by removing blank lines and comments. |
| 42 | TOML Validator | `toml/validator` | done | Validate against TOML v1.0 spec with precise error messages. |
| 43 | TOML → JSON | `toml/to-json` | done | Convert TOML to JSON. |
| 44 | TOML → YAML | `toml/to-yaml` | done | Convert TOML to YAML. |
| 45 | TOML → XML | `toml/to-xml` | done | Convert TOML to XML. |
| 46 | TOML → HTML | `toml/to-html` | done | Render TOML as a nested HTML table. |
| 47 | TOML Diff | `toml/diff` | done | Side-by-side diff of two TOML documents. |
| 48 | JSON Schema Generator | `json/schema-generator` | done | Infer a JSON Schema from any JSON document. Auto-detect types, required fields, enums, and nested structures. |
| 49 | XML → JSON Schema | `xml/to-json-schema` | done | Infer a JSON Schema from XML by analyzing element structure and cardinality. |
| 50 | JSON ↔ JSON Schema Validator | `json/schema-validate` | done | Validate a JSON document against a user-supplied JSON Schema (Draft-07 / 2020-12). Show per-path error annotations. |

### Backlog — Data Formats

| 51 | Tool | Slug | Description |
|---|------|------|-------------|
| 52 | JSON Flattener / Unflattener | `json/flatten` | Convert deeply nested JSON to flat dot-notation keys and back. Useful for config files and i18n. |
| 53 | JSON Patch Builder | `json/patch` | Generate RFC 6902 JSON Patch from two documents. Apply patches to a base document. |
| 54 | JSON → TypeScript Types | `json/to-typescript` | Infer TypeScript interfaces/types from any JSON sample using quicktype. |
| 55 | JSON → Go Structs | `json/to-go` | Generate Go struct definitions from JSON. |
| 56 | JSON → Rust Serde | `json/to-rust` | Generate Rust serde structs from JSON. |
| 57 | JSON → Zod Schema | `json/to-zod` | Generate Zod validation schemas from a JSON sample. |
| 58 | JSON Lines (NDJSON) Viewer | `json/ndjson` | Parse and format newline-delimited JSON. Show each line as a formatted object with line numbers. |
| 59 | YAML Anchor Resolver | `yaml/resolve-anchors` | Resolve all YAML anchors and aliases into their expanded form. |
| 60 | YAML Multi-Doc Splitter | `yaml/split` | Split a multi-document YAML file (---) into individual documents. |
| 61 | XSD Validator | `xml/xsd-validate` | Validate XML against an XSD schema. |
| 62 | CSV Column Reorder / Drop | `csv/columns` | Visually reorder, rename, or drop CSV columns via drag-and-drop. |
| 63 | CSV Deduplicator | `csv/deduplicate` | Remove duplicate rows from CSV, with configurable key columns. |
| 64 | Protocol Buffers → JSON | `json/from-protobuf` | Parse .proto files and generate sample JSON messages. |

---

## 2. Encoders & Decoders

Encode, decode, hash, and escape strings across common formats.

| 65 | Tool | Slug | Description |
|---|------|------|-------------|
| 66 | Base64 Encode / Decode | `encode/base64` | Encode and decode Base64 strings. Supports standard and URL-safe variants. |
| 67 | URL Encode / Decode | `encode/url` | Percent-encode and decode URL components (RFC 3986). |
| 68 | HTML Entity Encode / Decode | `encode/html-entities` | Convert special characters to HTML entities and back (`&amp;`, `&lt;`, etc.). |
| 69 | Unicode Inspector | `encode/unicode` | Show codepoint, UTF-8 bytes, category, and glyph name for each character. |
| 70 | JWT Decoder | `encode/jwt` | Decode JWT tokens — display header, payload, and signature. Validate expiry. No verification of secrets. |
| 71 | Hex ↔ ASCII / UTF-8 | `encode/hex` | Convert between hexadecimal and text. Supports ASCII and UTF-8. |
| 72 | ROT13 / Caesar Cipher | `encode/rot13` | Apply ROT13 or arbitrary Caesar shift. Useful for spoiler text and simple obfuscation. |
| 73 | Punycode Encode / Decode | `encode/punycode` | Convert internationalized domain names (IDN) to Punycode and back. |
| 74 | Morse Code Translator | `encode/morse` | Convert text to Morse code (audio beeps + visual dots/dashes) and back. |

---

## 3. Text & String Tools

Analyze, transform, and manipulate plain text.

### Shipped — Text & String Tools

| # | Tool | Slug | Status | Description |
|---|------|------|--------|-------------|
| 76 | Word & Character Counter | `text/word-counter` | done | Count words, characters, sentences, paragraphs, and reading time. |
| 77 | Lorem Ipsum Generator | `text/lorem` | done | Generate placeholder text in paragraphs, sentences, or words with deterministic seeded output and plain/HTML modes. |
| 81 | Text Reverser | `text/reverser` | done | Reverse text by characters, words, or lines. |
| 85 | String Case Converter | `text/case` | done | Convert between camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, Title Case, Sentence case. |
| 79 | Duplicate Line Remover | `text/deduplicate` | done | Remove duplicate lines preserving first occurrence order. |
| 79 | Line Sorter | `text/line-sorter` | done | Sort lines alphabetically, numerically, by length, or with deterministic random shuffle. |
| 80 | Whitespace Cleaner | `text/whitespace` | done | Trim trailing spaces, collapse multiple blanks, normalize line endings. |
| 80 | Markdown → HTML | `text/markdown-to-html` | done | Convert Markdown to HTML with live preview, GFM table support, and syntax-highlighted code blocks. |
| 82 | Regex Tester | `text/regex` | done | Test regular expressions against sample text with real-time match highlighting, capture groups, and flag toggles. |
| 78 | Readability Analyzer | `text/readability` | done | Calculate Flesch-Kincaid, Gunning Fog, Coleman-Liau, and SMOG readability scores. |
| 84 | Text Escape / Unescape | `text/escape` | done | Escape and unescape strings for JSON, HTML, XML, URLs, SQL, and regex. |

### Backlog — Text & String Tools

| 77 | Tool | Slug | Description |
|---|------|------|-------------|
| 83 | Diff & Compare (Text) | `text/diff` | Side-by-side or unified diff of two plain text inputs with line-level and word-level change highlighting. |

---

## 4. Code & Developer Tools

Format, lint, convert, and generate code.

| 88 | Tool | Slug | Description |
|---|------|------|-------------|
| 89 | CSS Formatter | `code/css-formatter` | Beautify CSS with Prettier. Configurable print width and single-quote options. |
| 90 | CSS Minifier | `code/css-minifier` | Minify CSS by stripping comments, whitespace, and shortening values. |
| 91 | SCSS / LESS Formatter | `code/scss-formatter` | Format SCSS and LESS with Prettier. |
| 92 | HTML Formatter | `code/html-formatter` | Pretty-print HTML with proper indentation and attribute formatting. |
| 93 | HTML Minifier | `code/html-minifier` | Minify HTML — collapse whitespace, remove comments, shorten booleans. |
| 94 | JavaScript Formatter | `code/js-formatter` | Format JavaScript with Prettier. ESM and CJS support. |
| 95 | TypeScript Formatter | `code/ts-formatter` | Format TypeScript with Prettier. |
| 96 | GraphQL Formatter | `code/graphql-formatter` | Format GraphQL queries and schemas. |
| 97 | SQL Formatter | `code/sql-formatter` | Format SQL with dialect support (PostgreSQL, MySQL, SQLite, T-SQL). |
| 98 | cURL → fetch() | `code/curl-to-fetch` | Convert cURL commands into browser-native fetch() calls. |
| 99 | cURL → Axios | `code/curl-to-axios` | Convert cURL commands into Axios request code. |
| 100 | Cron Expression Parser | `code/cron` | Parse and explain cron expressions in human-readable form. Show next N execution times. |
| 101 | .env Validator | `code/env-validator` | Validate `.env` files — detect duplicate keys, missing values, unquoted special chars. |
| 102 | Markdown Table Generator | `code/markdown-table` | Create Markdown tables visually with drag-and-drop column reordering. |
| 103 | Prettier Playground | `code/prettier` | Run Prettier on any supported language with full config control (printWidth, tabWidth, semi, etc.). |

---

## 5. AI & LLM Tools

Purpose-built for developers working with large language models, prompt engineering, and AI pipelines.

| 104 | Tool | Slug | Description |
|---|------|------|-------------|
| 105 | LLM Token Counter | `ai/token-counter` | Count tokens for GPT-4o, Claude, Llama 3, Gemini, and Mistral. Paste text or upload files. Show token-per-word ratio and cost estimate. |
| 106 | Prompt Token Optimizer | `ai/token-optimizer` | Shorten a prompt while preserving meaning — strip filler words, compress whitespace, abbreviate known patterns. Show before/after token count and savings percentage. |
| 107 | System Prompt Builder | `ai/system-prompt` | Guided wizard to compose effective system prompts. Templates for code assistant, data analyst, translator, customer support. Export as plain text or JSON message array. |
| 108 | Function Calling Schema Builder | `ai/function-schema` | Visually build OpenAI-compatible function/tool schemas. Drag-and-drop parameter builder, type picker, enum editor. Export as JSON. |
| 109 | MCP Server Manifest Generator | `ai/mcp-manifest` | Generate Model Context Protocol server manifests. Define tools, resources, and prompts with a form-based UI. Export valid MCP JSON. |
| 110 | RAG Text Chunker | `ai/rag-chunker` | Split documents into chunks for retrieval-augmented generation. Configurable strategies: fixed-size, sentence-boundary, recursive character splitting, semantic (heading-aware). Preview chunk boundaries. |
| 111 | Embedding Visualizer | `ai/embeddings` | Paste embedding vectors, visualize with t-SNE/UMAP 2D projection. Color-code by label. Useful for debugging retrieval pipelines. |
| 112 | Prompt Diff | `ai/prompt-diff` | Compare two prompt versions side-by-side. Highlight structural changes (system/user/assistant blocks). Show token delta. |
| 113 | JSON → OpenAI Messages | `ai/json-to-messages` | Convert JSON conversations into OpenAI Chat API message format. Validate role/content structure. |
| 114 | JSONL Dataset Viewer | `ai/jsonl-viewer` | View and validate JSONL fine-tuning datasets. Show row count, token stats per row, schema consistency. |

---

## 6. Security & Crypto

Hashing, encoding, password tools, and key generation — all client-side.

| 115 | Tool | Slug | Description |
|---|------|------|-------------|
| 116 | Hash Generator (SHA/MD5) | `crypto/hash` | Generate MD5, SHA-1, SHA-256, SHA-384, SHA-512 hashes of text input. |
| 117 | HMAC Generator | `crypto/hmac` | Compute HMAC signatures with configurable algorithm and secret key. |
| 118 | File Hash Calculator | `crypto/file-hash` | Drag-and-drop file hashing. Calculate SHA-256, MD5, CRC32 of any file without uploading. |
| 119 | Password Strength Meter | `crypto/password-strength` | Analyze password entropy, estimate crack time, flag common patterns and breached passwords (via k-anonymity). |
| 120 | Random String Generator | `crypto/random-string` | Generate cryptographically secure random strings with configurable charset, length, and count. |
| 121 | UUID / ULID Generator | `crypto/uuid` | Generate UUID v4, UUID v7, and ULID with batch generation and timestamp decoding. |
| 122 | RSA/EC Key Pair Generator | `crypto/keypair` | Generate RSA or ECDSA key pairs in PEM format using Web Crypto API. |
| 123 | Certificate Decoder | `crypto/cert-decoder` | Parse PEM-encoded X.509 certificates. Show subject, issuer, validity, SANs, and key info. |
| 124 | TOTP Generator | `crypto/totp` | Generate time-based one-time passwords (RFC 6238). Configure period, digits, and algorithm. |

---

## 7. Web & Network

Inspect, parse, and debug web protocols and network resources.

| 125 | Tool | Slug | Description |
|---|------|------|-------------|
| 126 | URL Parser | `web/url-parser` | Decompose URLs into protocol, host, port, path, query params, and fragment. |
| 127 | User-Agent Parser | `web/user-agent` | Decode User-Agent strings — identify browser, OS, device type, and bot classification. |
| 128 | CORS Header Tester | `web/cors` | Test CORS preflight requests against any URL. Show allowed origins, methods, and headers. |
| 129 | MIME Type Lookup | `web/mime-types` | Search file extensions ↔ MIME types bidirectionally. |
| 130 | IP Geolocation | `web/ip-lookup` | Look up the geolocation, ASN, and ISP of any IP address. Proxied via Cloudflare Worker. |
| 131 | DNS Lookup | `web/dns-lookup` | Query A, AAAA, MX, TXT, NS, CNAME, SOA records for any domain. Proxied via Cloudflare Worker. |
| 132 | SSL Certificate Checker | `web/ssl-checker` | Check SSL certificate expiry, chain, and configuration for any domain. Proxied via Cloudflare Worker. |
| 133 | HTTP Header Inspector | `web/headers` | Send a HEAD request to any URL and display all response headers with explanations. |
| 134 | Webhook Tester | `web/webhook` | Generate a temporary webhook URL, receive and display incoming requests in real-time. |
| 135 | Open Graph Preview | `web/og-preview` | Fetch and preview Open Graph / Twitter Card metadata for any URL. Show how links appear on social platforms. |

---

## 8. Image & Media

Process images entirely in the browser.

| 136 | Tool | Slug | Description |
|---|------|------|-------------|
| 137 | Image Resizer | `image/resize` | Resize images with locked aspect ratio, custom dimensions, or percentage scale. |
| 138 | Image Format Converter | `image/convert` | Convert between PNG, JPEG, WebP, AVIF, and GIF. |
| 139 | Image Compressor | `image/compress` | Reduce file size with configurable quality. Real-time before/after preview. |
| 140 | SVG Optimizer | `image/svg-optimizer` | Optimize SVG files with SVGO — remove metadata, simplify paths, collapse groups. |
| 141 | Image → Base64 | `image/to-base64` | Convert images to Base64 data URI strings. |
| 142 | Base64 → Image | `image/from-base64` | Decode Base64 strings back to downloadable images. |
| 143 | Image EXIF Viewer | `image/exif` | Read and display EXIF metadata — camera, GPS, date, orientation. Option to strip EXIF before download. |
| 144 | Favicon Generator | `image/favicon` | Upload an image and generate a complete favicon set (ICO, PNG 16-512, Apple Touch, SVG). |
| 145 | Image Color Picker | `image/color-picker` | Upload an image and pick individual pixel colors. Extract dominant color palette. |

---

## 9. Color & Design

Tools for designers and front-end developers.

| 146 | Tool | Slug | Description |
|---|------|------|-------------|
| 147 | Contrast Checker | `color/contrast` | Check WCAG 2.1 AA/AAA contrast ratios between foreground and background colors. |
| 148 | Palette Generator | `color/palette` | Generate harmonious color palettes — complementary, analogous, triadic, split-complementary. Export as CSS, Tailwind, or SCSS variables. |
| 149 | Gradient Generator | `color/gradient` | Build CSS linear, radial, and conic gradients visually. Copy CSS output. |
| 150 | Color Blindness Simulator | `color/blindness` | Simulate protanopia, deuteranopia, tritanopia, and achromatopsia on any uploaded image or color palette. |
| 151 | Color Format Converter | `color/converter` | Convert between HEX, RGB, HSL, HSB, OKLCH, and CMYK. |
| 152 | Tailwind Color Finder | `color/tailwind` | Paste any color and find the closest Tailwind CSS palette match. |

---

## 10. Number & Math

Format, convert, and calculate numbers.

| 153 | Tool | Slug | Description |
|---|------|------|-------------|
| 154 | Number Formatter | `number/formatter` | Format numbers with locale-aware thousand separators, decimal places, and notation (standard, scientific, compact). |
| 155 | Percentage Calculator | `number/percentage` | Calculate "X% of Y", "X is what % of Y", and "% change from X to Y". |
| 156 | Base Converter | `number/base-converter` | Convert between binary, octal, decimal, and hexadecimal. Supports arbitrary bases up to 36. |
| 157 | Unit Converter | `number/unit-converter` | Convert between length, weight, temperature, speed, data size, and time units. |
| 158 | Unix Timestamp Converter | `number/timestamp` | Convert Unix timestamps ↔ human-readable dates. Support seconds and milliseconds. Show relative time. |
| 159 | Byte Size Calculator | `number/bytes` | Convert between B, KB, MB, GB, TB. Toggle between binary (KiB) and decimal (KB) units. |

---

## 11. PDF Tools

View, extract, merge, and split PDFs — all in-browser.

| 160 | Tool | Slug | Description |
|---|------|------|-------------|
| 161 | PDF Viewer | `pdf/viewer` | Render and navigate PDF files in the browser with page thumbnails and zoom. |
| 162 | PDF → Text | `pdf/to-text` | Extract raw text from PDF pages with page-by-page output. |
| 163 | PDF Merge | `pdf/merge` | Combine multiple PDF files into one. Drag-and-drop reordering. |
| 164 | PDF Split | `pdf/split` | Split a PDF into individual pages or custom page ranges. |
| 165 | PDF Page Extractor | `pdf/extract-pages` | Extract specific pages from a PDF into a new document. |
| 166 | PDF Metadata Viewer | `pdf/metadata` | Display PDF metadata — title, author, creator, creation date, page count, file size. |

---

## 12. File & Archive Tools

Work with files, archives, and data exchange formats.

| 167 | Tool | Slug | Description |
|---|------|------|-------------|
| 168 | ZIP Creator | `file/zip` | Select multiple files and compress them into a ZIP archive in-browser. |
| 169 | ZIP Extractor | `file/unzip` | Extract contents of a ZIP file. Preview files before downloading. |
| 170 | Excel → JSON | `file/excel-to-json` | Convert XLSX/XLS sheets to JSON arrays with header mapping. |
| 171 | JSON → Excel | `file/json-to-excel` | Convert JSON arrays-of-objects into downloadable XLSX files. |
| 172 | File Diff | `file/diff` | Compare two files byte-by-byte. Show hexdump diff for binary files, text diff for text files. |

---

## 13. QR & Barcode

Generate and read QR codes and barcodes.

| 173 | Tool | Slug | Description |
|---|------|------|-------------|
| 174 | QR Code Generator | `qr/generator` | Generate QR codes with customizable size, error correction, foreground/background colors, and logo overlay. |
| 175 | QR Code Reader | `qr/reader` | Read QR codes from uploaded images or camera capture. |
| 176 | Barcode Generator | `qr/barcode` | Generate Code 128, EAN-13, UPC-A, and other 1D barcodes. |

---

## 14. Generators

Generate test data, IDs, and code scaffolding.

| 177 | Tool | Slug | Description |
|---|------|------|-------------|
| 178 | Fake Data Generator | `generate/fake-data` | Generate realistic test data — names, emails, addresses, phone numbers, dates. Configurable locale and count. Export as JSON, CSV, or SQL. |
| 179 | UUID Batch Generator | `generate/uuid-batch` | Generate batches of UUID v4 or v7 with copy-all and download. |
| 180 | Password Generator | `generate/password` | Generate secure passwords with configurable length, charset, and memorability options. |
| 181 | .gitignore Builder | `generate/gitignore` | Select frameworks and languages to generate a `.gitignore` file. Powered by gitignore.io templates. |
| 182 | README Template | `generate/readme` | Generate a README.md skeleton from project metadata — title, description, install, usage, license. |

---

## 15. Accessibility

Ensure designs and content meet accessibility standards.

| 183 | Tool | Slug | Description |
|---|------|------|-------------|
| 184 | WCAG Contrast Checker | `a11y/contrast` | Check color contrast ratios against WCAG 2.1 AA and AAA criteria for normal and large text. |
| 185 | Font Size Calculator | `a11y/font-size` | Check if font sizes meet WCAG minimum requirements at given viewing distances. |
| 186 | Color Blindness Previewer | `a11y/color-blindness` | Upload a screenshot or enter colors to see how they appear under various color vision deficiencies. |
| 187 | Alt Text Evaluator | `a11y/alt-text` | Paste image alt text and get suggestions for improvement based on WCAG guidelines. |

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
