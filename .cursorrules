# fmtly — Windsurf Rules

Read this file entirely before writing any code. These rules apply to every contribution.

---

## Project Identity

- **Product:** fmtly — every developer utility in one place
- **Domain:** fmtly.dev
- **Stack:** SvelteKit 2 + TypeScript 5 + Tailwind CSS 4
- **Hosting:** Cloudflare Pages (static) + Cloudflare Workers (network proxy only)
- **Package manager:** pnpm — never npm, never yarn
- **Adapter:** `@sveltejs/adapter-cloudflare`

---

## The Golden Rule

**Every tool runs entirely in the browser. No user data ever touches a server.**

The only exception: network tools (IP lookup, DNS lookup, HTTP headers, SSL checker) which route through a minimal Cloudflare Worker proxy. That Worker makes a network request and returns the result — it never receives, logs, or stores user-provided data.

If a feature requires sending user input to a server, it is not built.

---

## Architecture Rules

### Tool Registry Is the Source of Truth

Every tool is a configuration object in `src/lib/registry/tools/[category].tools.ts`. Pages are generated from the `[category]/[tool]/+page.svelte` dynamic route reading the registry.

**Never create a route file for a new tool.** Register the tool. The page generates itself.

### All Processing Libraries Are Lazy Loaded

Every engine is loaded via dynamic `import()` on demand. Nothing is ever imported at the top level of a page, layout, or component.

This rule applies to every processing library without exception:
- Data: `json-source-map`, `jsonrepair`, `ajv`, `js-yaml`, `fast-xml-parser`, `papaparse`, `smol-toml`
- Text: `marked`, `diff`
- Formatting: `prettier` (WASM), `sql-formatter`, `svgo`
- PDF: `pdfjs-dist`, `pdf-lib`
- Image: `exifr`, Canvas API
- File: `jszip`, `sheetjs`
- QR: `qrcode`, `jsqr`, `bwip-js`
- Math: `mathjs`
- Generators: `@faker-js/faker`, `quicktype-core`
- Crypto: `uuid`, `ulid`
- Web: `cron-parser`, `ua-parser-js`

Monaco Editor is also lazy loaded — on first editor focus only.

**Rule:** if it processes data, it is a dynamic import.

### No Backend for User Data

No SvelteKit server routes receive or process user input. The only permitted server-side code:
- `+page.ts` load functions (read Tool Registry — a static module)
- `/sitemap.xml/+server.ts` (reads Tool Registry at build time)
- `workers/proxy/` (makes outbound network requests only — no user data)

### Static Output Only

The build output is a directory of static files. No Node.js process runs at request time. `adapter-cloudflare` in static mode only.

### Cloudflare Pages Constraints

- No Node.js APIs in browser code (`fs`, `path`, `crypto` module — use Web Crypto API instead)
- No env vars in browser code except those prefixed `PUBLIC_`
- `static/_headers`, `static/_redirects`, `static/_routes.json` must never be deleted

---

## Code Style Rules

### TypeScript

- Strict mode enabled everywhere
- No `any`. No `@ts-ignore`. No `as unknown as X`.
- Every function: explicit parameter types and return type
- Exported interfaces and types: defined in `.ts` files, never inline in `.svelte`
- Null checks explicit — never assume non-null without a type guard

### Svelte Components

- Filenames: PascalCase (`TreeNode.svelte`, `PdfViewer.svelte`)
- One component per file
- Props typed explicitly: `export let value: string` — never `export let value`
- `$:` reactive statements used sparingly — prefer derived stores
- No business logic in inline event handlers — extract to named functions
- CSS: Tailwind utilities first. `<style>` blocks only for complex animations or pseudo-elements.

### Engines

- File pattern: `[name].engine.ts` inside `src/lib/engines/[category]/`
- Engine functions are pure functions — no side effects, no store access, no DOM access
- All parameters and return values explicitly typed
- Large input threshold (> 500KB): use Web Worker via `src/lib/workers/[category].worker.ts`

### Stores

- Shared state: Svelte stores in `src/lib/stores/`
- localStorage reads/writes: only in store files, never in components

### File Naming

- Routes: SvelteKit convention
- Components: PascalCase
- Utilities and engines: camelCase (`colorConverter.ts`, `pdfEngine.ts`)
- Registry: `[category].tools.ts`

### CSS and Tailwind

- No hardcoded hex colors in components — always `var(--token-name)`
- Tailwind arbitrary values reference tokens: `bg-[var(--bg-surface)]`
- Dark mode via `[data-theme="dark"]` attribute on `<html>` — not Tailwind's `dark:` variant

---

## Engine Categories

Each category has its own engine module under `src/lib/engines/`:

```
json/       xml/        yaml/       csv/        toml/
text/       regex/      markdown/
number/     timestamp/
encoder/    jwt/        escaper/
color/
crypto/
web/        network/
code/       css/        html/       js/
generator/
pdf/
image/
file/
qr/
math/
```

When adding a tool in a new category, create the engine module first, then register the tool.

---

## SEO Rules

Every tool page must have — generated by `src/lib/utils/seo.ts`:

- Unique `<title>`: `[Primary Function] — fmtly.dev`, max 60 characters
- Unique `<meta name="description">`: 140–155 characters
- `<link rel="canonical">` pointing to the page's own URL
- Schema.org `WebApplication` JSON-LD
- Full Open Graph and Twitter Card tags

Never write SEO metadata manually in a page file.

---

## Performance Rules

- Lighthouse Performance ≥ 95 on mobile before any feature is complete. CI enforces this — build fails on regression.
- Initial JS bundle < 50KB gzipped. Verify with `pnpm build`.
- No synchronous processing on main thread for inputs > 500KB — use Web Worker.
- No PNG/JPEG in UI assets — SVG or WebP/AVIF only.
- Fonts preloaded in `app.html` with `<link rel="preload" as="font" crossorigin>`.

---

## Testing Rules

- Every engine function has unit tests in `tests/unit/[name].test.ts`
- Cover: valid input, invalid input, empty string, Unicode, category-specific edge cases
- Critical user paths have E2E tests in `tests/e2e/` with Playwright
- No test may depend on network — mock all external calls
- Tests must pass before any merge to `main`

**Minimum E2E coverage per tool:**
- Paste input → output renders correctly
- Invalid input → error state shown correctly
- Copy output → clipboard contains correct value
- Share URL → state restored on open
- Theme toggle → persists after refresh
- File drop → loads file into input (where applicable)

---

## Accessibility Rules

- All interactive elements keyboard reachable in logical tab order
- All meaningful icons have `aria-label`
- Color is never the sole state indicator — pair with icon or text
- Modals: trap focus, return to trigger on close
- Tree view: arrow key navigation, Enter/Space to expand, Escape to exit
- Focus rings: never suppressed — custom ring using `--border-focus` must be visible
- Test keyboard-only navigation before marking any feature complete

---

## What Not to Do

- Do not use pre-styled component libraries (no MUI, Chakra, DaisyUI, shadcn)
- Do not add tracking scripts beyond Cloudflare Web Analytics
- Do not create server routes that receive or process user data
- Do not import processing libraries at the top level of any file
- Do not use localStorage directly in components — only in store files
- Do not hardcode tool metadata in page files — always from the registry
- Do not hardcode hex colors in components — always design tokens
- Do not modify `static/_headers` or `static/_redirects` without discussion

---

## Adding a New Tool: Checklist

1. Add tool definition to `src/lib/registry/tools/[category].tools.ts`
2. Confirm URL slug follows `/[category]/[tool-slug]` and is unique
3. Add or verify engine in `src/lib/engines/[category]/`
4. Write unit tests for all engine functions
5. Run `pnpm build` — confirm page appears in build output
6. Run Lighthouse — confirm ≥ 95 mobile
7. Confirm URL appears in `/sitemap.xml`
8. Add tool to at least one other tool's "Related tools" links
9. Write the content section in the registry entry (description, use cases, FAQ)
10. Verify full keyboard-only operation

**A tool is not done until all 10 steps are complete.**

---

## Documentation

Before making decisions in any area, read the relevant document in `/docs`:

| Area | Document |
|---|---|
| Vision and goals | `docs/01-VISION.md` |
| Platform architecture | `docs/02-ARCHITECTURE.md` |
| Tool catalog | `docs/03-FEATURES.md` |
| Technology decisions | `docs/04-TECH-STACK.md` |
| Roadmap and priorities | `docs/05-ROADMAP.md` |
| SEO and content rules | `docs/06-SEO-GROWTH.md` |
| Design system | `docs/07-DESIGN-SYSTEM.md` |
