# fmtly

**Every tool a developer needs. One place. No login. No server. Instant.**

fmtly is an open-source, browser-based developer utility platform. Format JSON. Test regex. Convert colors. Decode JWTs. Merge PDFs. Resize images. Generate UUIDs. Parse cron expressions. Hash strings. And hundreds more — all running in your browser.

**[fmtly.dev](https://fmtly.dev)**

---

## Why fmtly?

A developer's daily workflow involves dozens of small utility tasks, each sending them to a different slow, cluttered website. fmtly unifies every developer utility into one fast, well-designed platform.

- **Fast.** Lighthouse Performance >= 95 on mobile. Enforced by CI.
- **Private.** All processing runs in your browser. Your data never leaves your device.
- **Complete.** Every utility a developer reaches for, in one place.
- **Open.** MIT license. Every tool, engine, and decision is in this repository.

---

## Tool Categories

| Category | Examples |
|---|---|
| **Data & Formats** | JSON, XML, YAML, CSV, TOML — formatter, validator, converter |
| **Text & Strings** | Case converter, Regex tester, Word counter, Text diff, Lorem ipsum |
| **Numbers & Math** | Base converter, Timestamp, Byte size, Unit converter, Statistics |
| **Encoding** | Base64, URL encode, JWT decoder, Unicode converter |
| **Colors** | HEX/RGB/HSL/OKLCH converter, Color picker, Contrast checker, Palette |
| **Crypto & Security** | Hash generator, UUID, Password generator, HMAC, AES encrypt |
| **Web & Network** | HTTP status codes, Cron parser, URL parser, IP lookup, DNS lookup |
| **Code** | SQL formatter, CSS/JS/HTML/GraphQL formatters, Code diff |
| **PDF** | View, merge, split, extract, convert, compress |
| **Images** | Resize, convert, compress, SVG optimize, favicon generator |
| **Files** | ZIP, Excel to JSON, file hash, type detection |
| **QR & Barcode** | Generate and decode QR codes and barcodes |
| **Generators** | Fake data, TypeScript/Python/Go/Zod/Rust interfaces, JSON Schema |
| **Accessibility** | Contrast checker, Color blindness simulator |

---

## Tech Stack

| | |
|---|---|
| Framework | SvelteKit 2 (static generation) |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS 4 |
| Hosting | Cloudflare Pages |
| Edge Functions | Cloudflare Workers (network tools proxy only) |
| Testing | Vitest + Playwright |

See [docs/04-TECH-STACK.md](docs/04-TECH-STACK.md) for full decisions and rationale.

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

```bash
pnpm build       # Production build
pnpm test        # Unit tests (Vitest)
pnpm test:e2e    # End-to-end (Playwright)
pnpm check       # TypeScript
pnpm lint        # Biome
```

---

## Architecture

Every tool is a configuration object in the Tool Registry. The platform auto-generates the page, routing, SEO metadata, and sitemap entry. Adding a new tool takes 1-4 hours regardless of platform size.

```
src/lib/registry/    Tool Registry (source of truth)
src/lib/engines/     Processing engines (lazy loaded per category)
src/lib/components/  Shared UI components
src/lib/stores/      Svelte stores
src/lib/utils/       SEO, keyboard, sharing utilities
workers/proxy/       Cloudflare Worker (network tools only)
```

See [docs/02-ARCHITECTURE.md](docs/02-ARCHITECTURE.md) for full details.

---

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) and [.windsurfrules](.windsurfrules) before opening a pull request.

Good first contributions: add a new tool, improve tool content, write unit tests, fix a bug.

---

## Documentation

| Document | |
|---|---|
| [Vision](docs/01-VISION.md) | What fmtly is and why |
| [Architecture](docs/02-ARCHITECTURE.md) | Platform design and technical decisions |
| [Features](docs/03-FEATURES.md) | Complete tool catalog |
| [Tech Stack](docs/04-TECH-STACK.md) | Technology choices and rationale |
| [Roadmap](docs/05-ROADMAP.md) | What is being built and when |
| [SEO Guidelines](docs/06-SEO-GROWTH.md) | SEO strategy and content rules |
| [Design System](docs/07-DESIGN-SYSTEM.md) | Visual language and component specs |

---

## License

MIT — see [LICENSE](LICENSE).