# Tech Stack

Every technology decision is documented here with its rationale. This is a living document — if a better option emerges, the decision and reasoning are updated here first.

---

## Summary

| Layer | Technology | Notes |
|---|---|---|
| Framework | SvelteKit 2 | Static generation, Cloudflare adapter |
| Language | TypeScript 5 | Strict mode throughout |
| Build Tool | Vite 5 | Via SvelteKit |
| Styling | Tailwind CSS 4 | Utility-first, CSS token system |
| Code Editor | Monaco Editor | Lazy loaded on first editor focus |
| Hosting | Cloudflare Pages | Static files, global CDN, free |
| Edge Functions | Cloudflare Workers | Network tools proxy only |
| Analytics | Cloudflare Web Analytics | Cookieless, zero performance impact |
| Package Manager | pnpm | Fastest, most disk-efficient |
| Linter / Formatter | Biome | Replaces ESLint + Prettier for source |
| Unit Testing | Vitest | Fast, native ESM |
| E2E Testing | Playwright | Cross-browser |
| CI/CD | GitHub Actions | Free tier |

---

## Framework: SvelteKit 2

SvelteKit in full static generation mode with `@sveltejs/adapter-cloudflare`.

**Why SvelteKit over React/Next.js:**
SvelteKit compiles components to vanilla JavaScript at build time. There is no framework runtime in the browser. React ships ~45KB of runtime to every user on every page — this is architectural overhead that cannot be optimized away. For a platform where Lighthouse 95+ on mobile is a hard CI requirement, this matters structurally.

SvelteKit also provides routing, layouts, SSG data loading, and reactive stores natively. No additional libraries are needed for these concerns.

**Why not Astro:**
Excellent for content-heavy sites. fmtly has highly interactive tools on every page — the island architecture adds complexity without benefit here.

---

## Styling: Tailwind CSS 4

All color, spacing, and typography values are defined as CSS custom properties in `src/app.css`. Components reference these via Tailwind arbitrary values: `bg-[var(--bg-surface)]`.

**Dark mode:** Controlled by a `data-theme` attribute on `<html>`. Not Tailwind's `dark:` variant — that only supports `prefers-color-scheme` and does not allow user-overridable themes without extra JavaScript.

---

## Processing Libraries

### Data Format
| Library | Purpose |
|---|---|
| `json-source-map` | JSON parse with source map (line/col per node) for error gutter |
| `jsonrepair` | Repair malformed JSON |
| `ajv` + `ajv-formats` | JSON Schema validation |
| `jmespath` | JMESPath query engine |
| `jsonpath-plus` | JSONPath query engine |
| `fast-xml-parser` | XML parse, format, validate, build |
| `js-yaml` | YAML parse and serialize |
| `papaparse` | CSV parse with header detection |
| `smol-toml` | TOML parse and serialize |

### Text
| Library | Purpose |
|---|---|
| `marked` | Markdown to HTML |
| `diff` | Line-by-line and character-level text diff |

Case conversion, slug generation, lorem ipsum, line operations, whitespace normalization: browser-native string APIs only.

### Formatting (WASM — lazy loaded)
| Library | Pages |
|---|---|
| `prettier` WASM build | CSS, SCSS, LESS, HTML, JS, TS, GraphQL, Markdown pages only |
| `sql-formatter` | `/code/sql` only |
| `svgo` | `/image/svg-optimizer` only |

### Color
No external library. All color math (HEX, RGB, HSL, HSV, OKLCH) is implemented as pure functions in `src/lib/engines/color/`. Color math is simple arithmetic.

### Crypto
| Library | Purpose |
|---|---|
| Web Crypto API (browser native) | SHA-256, SHA-384, SHA-512, HMAC |
| `uuid` | UUID v4 and v7 |
| `ulid` | ULID generation |

MD5 and SHA-1: implemented as pure functions. Used for display only, never for security. Clearly labeled in the UI.

### Web & Network
| Library | Purpose |
|---|---|
| `cron-parser` | Parse cron expressions, calculate next run times |
| `ua-parser-js` | Parse User Agent strings |

### Generators
| Library | Purpose |
|---|---|
| `@faker-js/faker` | Fake data generation (~200KB, loaded on `/generate/fake-data` only) |
| `quicktype-core` | Generate TypeScript, Python, Go, Rust, Java, C#, Kotlin, Dart from JSON |

### PDF
| Library | Purpose |
|---|---|
| `pdfjs-dist` | PDF rendering, text extraction, page navigation |
| `pdf-lib` | PDF merge, split, rotate, page removal, creation |

### Image
| Library | Purpose |
|---|---|
| `exifr` | Read EXIF metadata from JPEG/TIFF |
| Canvas API (browser native) | Image resize, convert, compress, crop, favicon generation |

### File
| Library | Purpose |
|---|---|
| `jszip` | ZIP create and extract |
| `sheetjs` (`xlsx`) | Excel read/write (XLSX, XLS) |

### QR Code
| Library | Purpose |
|---|---|
| `qrcode` | QR code generation (text/SVG/PNG) |
| `jsqr` | QR code reading from images |
| `bwip-js` | Barcode generation (all formats) |

### Math
| Library | Purpose |
|---|---|
| `mathjs` | Safe expression evaluation, matrix operations, statistics |

### Sharing
| Library | Purpose |
|---|---|
| `lz-string` | LZ compression for URL-safe sharing |

### Performance
| Library | Purpose |
|---|---|
| `@tanstack/svelte-virtual` | Virtualized list rendering for large JSON/XML trees |

---

## Code Splitting Strategy

| Asset | Loaded When | Size (gzipped) |
|---|---|---|
| Platform core | Always | ~40KB |
| JSON engine | `/json/*` | ~30KB |
| XML engine | `/xml/*` | ~25KB |
| YAML engine | `/yaml/*` | ~15KB |
| Color engine | `/color/*` | ~10KB |
| Crypto engine | `/crypto/*` | ~15KB |
| Web engine | `/web/*` | ~20KB |
| PDF.js + pdf-lib | `/pdf/*` | ~350KB |
| Prettier WASM | CSS/HTML/JS pages | ~400KB |
| Faker.js | `/generate/fake-data` | ~200KB |
| quicktype-core | `/generate/json-to-*` | ~80KB |
| SheetJS | `/file/excel-*` | ~180KB |
| Monaco Editor | On first editor focus | ~1.5MB |

No user ever downloads code for tools they are not using.

---

## Cloudflare Pages

| Setting | Value |
|---|---|
| Build command | `pnpm build` |
| Output directory | `.svelte-kit/cloudflare` |
| Node.js version | 20 |

Free tier: unlimited bandwidth, 300+ global edge locations, automatic SSL, automatic deploys on push to `main`.

---

## Cloudflare Workers — Network Tools Only

A minimal Worker at `workers/proxy/` handles: IP lookup, DNS lookup, HTTP headers checker, SSL checker, Open Graph fetcher.

The Worker makes the requested network call and returns the result. It logs nothing and stores nothing. It never receives user-provided text or data — only a target IP, domain, or URL.

---

## PWA

Service worker registered in `app.html`. Caches all static assets and tool pages after first visit. All tools that do not require network access work fully offline. Network tools (IP lookup, DNS, HTTP headers) require internet by nature.

---

## Performance Budget

Enforced by Lighthouse CI. Build fails if any threshold is missed.

| Metric | Requirement |
|---|---|
| Lighthouse Performance (mobile) | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| Initial JS bundle | < 50KB gzipped |
| FCP | < 0.9s |
| LCP | < 1.2s |
| TTI | < 1.5s |
| CLS | < 0.05 |

---

## CI/CD

### Every pull request
```
pnpm install --frozen-lockfile
→ pnpm check (TypeScript)
→ pnpm lint (Biome)
→ pnpm test (Vitest)
→ pnpm build
→ Lighthouse CI (all thresholds)
```

### On merge to main
All PR checks pass → Cloudflare Pages auto-deploys.

---

## Total Monthly Cost

| Item | Cost |
|---|---|
| Cloudflare Pages | $0 |
| Cloudflare Workers (100K req/day free) | $0 |
| Cloudflare Web Analytics | $0 |
| GitHub Actions (free tier) | $0 |
| fmtly.dev domain | ~$1/month |
| **Total** | **~$1/month** |