# fmtly

**Format, validate, convert, and diff structured data. No login. No server. Instant.**

fmtly is an open-source, browser-based developer utility platform. While it currently focuses on deep, polished tools for structured data formats (JSON, XML, YAML, CSV, TOML), its vision is to become the ultimate client-side toolchain for developers — eventually encompassing AI/LLM utilities, code formatters, security tools, and more.

Every tool runs entirely in your browser — nothing is sent to a server, nothing is stored, no account required.

**[fmtly.dev](https://fmtly.dev)**

---

## What is fmtly?

Developers constantly format JSON, validate YAML, convert CSV to JSON, diff XML documents, and query nested data structures. Each task typically sends you to a different slow, cluttered, ad-heavy website.

fmtly puts every developer tool in one place. Fast, private, and open source.

- **Fast.** Lighthouse Performance ≥ 95 on mobile, enforced by CI on every deploy.
- **Private.** All processing runs in your browser. Your data never leaves your device.
- **Focused.** Deep, polished tools built specifically for developer workflows.
- **Open.** MIT license. Every tool, engine, and decision is in this repository.

---

## Tools (50 shipped)

| Category | Tools |
|---|---|
| **JSON** (15) | Formatter, Minifier, Validator, Schema Validator, Tree Viewer, Diff, Sorter, JSONPath, JMESPath, Schema Generator, → YAML, → XML, → CSV, → TOML, → Markdown |
| **XML** (10) | Formatter, Minifier, Validator, Stats, Diff, XPath, → JSON, → JSON Schema, → YAML, → CSV |
| **YAML** (10) | Formatter, Minifier, Validator, Diff, Query, → JSON, → XML, → CSV, → TOML, → HTML |
| **CSV** (8) | Formatter, Validator, → JSON, → XML, → YAML, → HTML, → SQL |
| **TOML** (8) | Formatter, Minifier, Validator, Diff, → JSON, → YAML, → XML, → HTML |
| **Text** (1) | Word & Character Counter |

> **Full roadmap with 100+ planned tools across 15 categories (AI, Crypto, Encoders, Web, etc.):** see [ROADMAP.md](ROADMAP.md)

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

The project is built on a highly scalable, category-based architecture designed to support hundreds of tools. Every tool is a configuration object in the **Tool Registry**. The platform auto-generates the page, routing, SEO metadata, and sitemap entry from that config.

```
src/lib/
├── registry/tools/          # Tool definitions by category (json.tools.ts, etc.)
├── engines/[category]/      # Processing engines (e.g., engines/json/formatter.ts)
├── components/panels/       # UI panels grouped by category
├── stores/[category].ts     # Category-specific state
├── utils/                   # SEO generation, keyboard shortcuts, etc.
└── i18n/registry/           # Localized strings for tools and categories
```

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
- Add a new tool from the [ROADMAP.md](ROADMAP.md) backlog
- Improve tool content (description, use cases, FAQ)
- Write missing unit tests
- Fix a reported bug

All PRs run CI automatically: TypeScript check, Biome lint, Vitest, build, Lighthouse CI. PRs that fail CI are not reviewed until they pass.

---

## Deployment

Cloudflare Pages deploys automatically on every push to `main`. Preview deployments are created for every pull request.

---

## License

MIT — see [LICENSE](LICENSE).