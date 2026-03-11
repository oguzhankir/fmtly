# fmtly

**Every tool a developer needs. One place. No login. No server. Instant.**

fmtly is an open-source, browser-based developer utility platform. Every tool runs entirely in your browser — nothing is sent to a server, nothing is stored, no account required.

**[fmtly.dev](https://fmtly.dev)**

---

## What is fmtly?

A developer's daily workflow involves dozens of small utility tasks — formatting JSON, converting colors, decoding JWTs, hashing strings, generating UUIDs, parsing cron expressions. Each one sends you to a different slow, cluttered website.

fmtly puts every tool in one place. Fast, private, and open source.

- **Fast.** Lighthouse Performance ≥ 95 on mobile, enforced by CI on every deploy.
- **Private.** All processing runs in your browser. Your data never leaves your device.
- **Complete.** Every utility a developer reaches for, in one place.
- **Open.** MIT license. Every tool, engine, and decision is in this repository.

---

## Tools

| Category | Tools |
|---|---|
| **JSON** | Formatter, Viewer, Validator, Minifier, Diff, Repair, JSONPath, JMESPath, Schema, converters |
| **XML** | Formatter, Validator, Minifier, converters |
| **YAML** | Formatter, Validator, Diff, converters |
| **CSV** | Formatter, Validator, converters |
| **TOML** | Formatter, Validator, converters |
| **Text** | Case converter, Regex tester, Word counter, Readability, Diff, Lorem ipsum, Slug, Markdown |
| **Numbers** | Base converter, Timestamp, Byte size, Unit converter, Statistics, Matrix |
| **Encoding** | Base64, URL, JWT decoder, HTML entities, Unicode converter |
| **Escaping** | HTML, JavaScript, JSON, XML, SQL, CSV, Shell |
| **Colors** | Converter, Picker, Contrast checker, Palette, Gradient, Color blindness simulator |
| **Crypto** | Hash generator, UUID, Password generator, HMAC, ULID, AES encrypt/decrypt |
| **Web** | HTTP status codes, Cron parser, URL parser, User agent, CORS, MIME types, IP/DNS lookup |
| **Code** | SQL formatter, CSS/SCSS/LESS/HTML/JS/TS/GraphQL formatters, Code diff, cURL converter |
| **PDF** | Viewer, Merger, Splitter, to Text, to Image, from Image, Metadata, Compressor |
| **Images** | Resize, Convert, Compress, SVG optimizer, Crop, EXIF reader, Favicon generator |
| **Files** | ZIP create/extract, Excel ↔ JSON, File hash, Type detector |
| **QR & Barcode** | QR generator, QR reader, Barcode generator, Barcode reader |
| **Generators** | Fake data, JSON → TypeScript/Python/Go/Zod/Rust/Java/C#, JSON Schema |
| **Accessibility** | Contrast checker, Color blindness simulator, Font size checker |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | SvelteKit 2 (static generation) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 |
| Hosting | Cloudflare Pages |
| Edge Functions | Cloudflare Workers (network tools proxy only) |
| Package Manager | pnpm |
| Linter | Biome |
| Testing | Vitest + Playwright |

Every processing library is lazy loaded via dynamic `import()` — never in the initial bundle. Initial JS bundle target: < 50KB gzipped.

---

## Architecture

Every tool is a configuration object in the **Tool Registry** (`src/lib/registry/`). The platform auto-generates the page, routing, SEO metadata, and sitemap entry from that config. Adding a new tool means writing a config object and a processing function — the rest is automatic.

```
src/lib/registry/    Tool Registry (source of truth for all tools)
src/lib/engines/     Processing engines — one per category, lazy loaded
src/lib/components/  Shared UI components
src/lib/stores/      Svelte stores and localStorage access
src/lib/utils/       SEO generation, keyboard shortcuts, URL sharing
workers/proxy/       Cloudflare Worker — network tools only, no user data
static/              _headers, _redirects, manifest.json, favicon
```

The Cloudflare Worker proxy exists only for tools that require outbound network requests (IP lookup, DNS lookup, HTTP headers, SSL checker). It makes the request and returns the result — no user data is logged or stored.

---

## Getting Started

**Prerequisites:** Node.js 20+, pnpm 9+

```bash
git clone https://github.com/oguzhankir/fmtly.git
cd fmtly
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

### Commands

```bash
pnpm dev         # Start dev server
pnpm build       # Production build (adapter-cloudflare)
pnpm preview     # Preview production build locally
pnpm check       # TypeScript type check
pnpm lint        # Biome lint
pnpm test        # Vitest unit tests
pnpm test:e2e    # Playwright end-to-end tests
```

### Testing on production locally

`pnpm preview` simulates the Cloudflare Pages environment locally. Always test with `pnpm preview` before pushing — `pnpm dev` uses Vite's dev server which behaves differently.

---

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR.

Good first contributions:
- Add a new tool from the [planned list](https://fmtly.dev)
- Improve tool content (description, use cases, FAQ)
- Write missing unit tests
- Fix a reported bug

All PRs run CI automatically: TypeScript check, Biome lint, Vitest, build, Lighthouse CI. PRs that fail CI are not reviewed until they pass.

---

## Deployment

Cloudflare Pages deploys automatically on every push to `main`. Preview deployments are created for every pull request.

The Cloudflare Worker (`workers/proxy/`) is deployed separately:
```bash
cd workers/proxy
npx wrangler deploy
```

---

## License

MIT — see [LICENSE](LICENSE).