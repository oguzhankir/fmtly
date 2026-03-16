# fmtly — Windsurf Rules

Read this file entirely before writing any code.

---

## The Vision

**Format, validate, convert, and diff structured data. No login. No server. Instant.**

fmtly is not just a random collection of utilities. It is a deep, focused platform for structured data formats (JSON, XML, YAML, CSV, TOML), with a visionary roadmap to expand into AI/LLM toolchains, encoders, code formatters, and more.

**The Golden Rule:** Every tool runs in the browser. No user data ever touches a server.
*Exception: Network tools (IP lookup, DNS, etc.) proxy through a minimal Cloudflare Worker without logging.*

---

## Stack

- SvelteKit 2 + TypeScript 5 + Tailwind CSS 4
- Cloudflare Pages (static) + Cloudflare Workers (network proxy only)
- Package manager: pnpm — never npm, never yarn
- Adapter: `@sveltejs/adapter-cloudflare`

---

## Architecture Rules

### Tool Registry
Every tool is a config object in `src/lib/registry/tools/[category].tools.ts`.
Never create a route file for a tool — register it, the page generates itself.

### Category-Based Structure
When adding new tools or categories, strictly adhere to the category-based folder structure:
- **Registry:** `src/lib/registry/tools/[category].tools.ts`
- **Engines:** `src/lib/engines/[category]/` (include an `index.ts` barrel file)
- **Panels:** `src/lib/components/panels/[category]/`
- **Tests:** `tests/unit/[category]/`
- **Stores:** `src/lib/stores/[category].store.ts` (if state is required)
- **Locales:** `src/lib/i18n/registry/[lang].ts`

*Never put category-specific logic in shared directories.*

### Lazy Loading — No Exceptions
Every processing library uses dynamic `import()`. Never at top level.
This applies to: `ajv`, `js-yaml`, `fast-xml-parser`, `smol-toml`, `@wasm-fmt/taplo_fmt`, Monaco Editor, etc.
**If it processes data → dynamic import.**

### No Backend for User Data
Permitted server-side code only:
- `+page.ts` load functions (read registry)
- `/sitemap.xml/+server.ts` (build time only)

### Static Output Only
No Node.js APIs in browser code (`fs`, `path`, `crypto` module — use Web Crypto API).
No env vars in browser except `PUBLIC_` prefix.
Never delete `static/_headers`, `static/_redirects`, `static/_routes.json`.

---

## Code Rules

### TypeScript
- Strict mode. No `any`. No `@ts-ignore`. No `as unknown as X`.
- Every function: explicit param types and return type.

### Svelte Components
- PascalCase filenames.
- Props typed explicitly: `let { prop = defaultValue }: { prop?: string } = $props();` (Svelte 5 runes).
- No business logic in inline event handlers — extract to named functions.
- CSS: Tailwind first. `<style>` only for complex animations or pseudo-elements.

### Engines
- Pure functions — no side effects, no store access, no DOM access.
- Input > 500KB → Web Worker.

### Stores & localStorage
- Shared state: `src/lib/stores/`
- localStorage: only in store files, never in components.

### Localization
- Every user-facing string must be localizable. No hardcoded UI copy.
- Translations must be idiomatic for the target language.

### CSS
- No hardcoded hex colors — always `var(--token-name)`.
- Tailwind arbitrary values: `bg-[var(--bg-surface)]`.
- Dark mode: `[data-theme="dark"]` on `<html>`.

---

## Content Security Policy
`static/_headers` CSP must include necessary domains. Never tighten CSP without testing on production — it breaks fonts, analytics, and WASM.

---

## Performance
- Lighthouse ≥ 95 mobile. CI enforces — build fails on regression.
- Initial JS bundle < 50KB gzipped.
- Fonts preloaded in `app.html`.

---

## Adding a New Tool: Checklist
1. Register in `src/lib/registry/tools/[category].tools.ts`
2. Add engine in `src/lib/engines/[category]/`
3. Add panels in `src/lib/components/panels/[category]/`
4. Write unit tests in `tests/unit/[category]/`
5. `pnpm build` — page appears at correct URL
6. Lighthouse ≥ 95 mobile
7. URL in `/sitemap.xml`
8. Keyboard navigation works

**Not done until all pass.**

---

## Never Do
- Pre-styled component libraries (no MUI, Chakra, DaisyUI, shadcn)
- Tracking scripts beyond Cloudflare Web Analytics
- Server routes receiving user data
- Top-level imports of processing libraries
- localStorage in components
- Hardcoded hex colors in components