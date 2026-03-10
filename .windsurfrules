# fmtly.dev — Windsurf Rules

This file defines the rules, conventions, and constraints that govern all development on the fmtly.dev codebase. Read this entire file before writing any code.

---

## Project Identity

- **Product name:** fmtly.dev
- **Domain:** fmtly.dev
- **Stack:** SvelteKit 2 + TypeScript 5 + Tailwind CSS 4
- **Deployment target:** Cloudflare Pages (static output only — no server-side rendering at request time)
- **Package manager:** pnpm (never use npm or yarn in this project)
- **Adapter:** @sveltejs/adapter-cloudflare

---

## Architecture Rules

### The Tool Registry Is the Source of Truth

Every tool in the platform is defined in the Tool Registry at `src/lib/registry/`. No tool page is written by hand — all tool pages are generated from the `[category]/[tool]/+page.svelte` dynamic route reading from the registry.

Never create a new route file for a new tool. Register the tool in the registry. The page generates itself.

### Zero Backend

This project has no backend, no API routes, no server-side rendering at request time, and no database. All processing runs in the browser. Never suggest or write server-side data processing code.

The only allowed server-side code is: `+page.ts` load functions that read from the Tool Registry (which is a static TypeScript module, not a database), and the sitemap generator (`/sitemap.xml/+server.ts`).

### Engines Are Lazy Loaded

Every processing engine (JSON, XML, YAML, CSS, HTML, code formatter) is lazy loaded on demand. No engine is imported at the top level of any page or component. All engine imports use dynamic `import()`.

The rule: if it's a processing library (jsonrepair, js-yaml, fast-xml-parser, prettier, etc.), it is never in the initial page bundle.

Monaco Editor is also lazy loaded. It is loaded only when the user first focuses the editor panel. Never import Monaco at the component top level.

### Cloudflare Pages Constraints

- The build output must be a directory of static files
- No Node.js APIs in browser-executed code (`fs`, `path`, `crypto` are not available in the browser)
- No environment variables in browser code except those prefixed with `PUBLIC_` in SvelteKit
- The `_headers`, `_redirects`, and `_routes.json` files in `/static` must not be deleted or overridden

---

## Code Style Rules

### TypeScript

- Strict TypeScript mode is enabled. No `any` types. No `@ts-ignore` comments. No `as unknown as X` casts.
- Every function has explicit parameter types and return types.
- Every exported interface and type is defined in a `.ts` file, never inline in a `.svelte` file.
- Use `type` for object shapes, `interface` for extensible contracts.
- Null checks are explicit — never assume a value is non-null without a type guard.

### Svelte Components

- Component filenames use PascalCase: `TreeNode.svelte`, `ErrorBanner.svelte`
- One component per file
- Props are typed with explicit TypeScript: `export let value: string` — never `export let value`
- Reactive statements (`$:`) are used sparingly — prefer derived stores for complex reactivity
- No inline event handlers that contain business logic — extract to named functions
- Component CSS uses Tailwind utility classes. Component-scoped `<style>` blocks are only used when Tailwind classes are insufficient (e.g., complex animations, pseudo-elements)

### Stores

- All application state that is shared between components lives in a Svelte store in `src/lib/stores/`
- Stores are created with factory functions, not exported directly as primitives
- Component-local state uses Svelte's built-in `let` declarations
- LocalStorage reads and writes happen only in store files, never in components

### File Naming

- Route files: SvelteKit convention (`+page.svelte`, `+layout.svelte`, `+page.ts`, `+server.ts`)
- Component files: PascalCase (`TreeView.svelte`)
- Utility files: camelCase (`jsonParser.ts`, `urlSharing.ts`)
- Engine files: `[name].engine.ts` inside `src/lib/engines/[category]/`
- Tool registry files: `[category].tools.ts` inside `src/lib/registry/tools/`

### CSS and Tailwind

- Use CSS design tokens (CSS custom properties) for all color, spacing, and typography values. Never hardcode hex colors in component code.
- Tailwind classes reference design tokens via `var(--token-name)` in arbitrary values: `bg-[var(--bg-surface)]`
- No magic numbers — all pixel values come from the spacing system or are explicitly justified in a comment
- Dark mode is implemented via the `[data-theme="dark"]` attribute on `<html>`, not via Tailwind's `dark:` variant (which uses `prefers-color-scheme` media query — the project needs user-overridable themes)

---

## SEO Rules

Every tool page must have — generated automatically by the SEO utility from the tool's registry entry:

- A unique `<title>` tag following the formula: `[Primary Keyword] — fmtly.dev`
- A unique `<meta name="description">` of 140–155 characters
- A `<link rel="canonical">` pointing to the page's own URL
- Schema.org `WebApplication` structured data in a `<script type="application/ld+json">` block
- `og:title`, `og:description`, `og:url`, `og:image`, `og:type` Open Graph tags
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` tags

Never write SEO metadata manually in a tool page. It is always generated from the registry entry by `src/lib/utils/seo.ts`.

---

## Performance Rules

- Lighthouse Performance score must be ≥ 95 on mobile before any feature is considered complete. This is verified by Lighthouse CI in GitHub Actions.
- The initial JavaScript bundle (everything loaded before any user interaction) must be under 50KB gzipped. Verify with `pnpm build` and inspect `.svelte-kit/cloudflare` bundle sizes.
- No synchronous processing of JSON/XML/YAML/CSS on the main thread for inputs larger than 500KB. Large inputs must use the Web Worker at `src/lib/workers/parser.worker.ts`.
- Images must use WebP or AVIF format. No PNG or JPEG images in the UI (only in downloaded/uploaded content).
- Fonts are preloaded in `app.html` with `<link rel="preload" as="font" crossorigin>`.

---

## Testing Rules

- Every utility function in `src/lib/utils/` and every engine in `src/lib/engines/` must have a corresponding unit test in `tests/unit/`.
- Tests use Vitest. Test files are named `[filename].test.ts`.
- Every critical user path has an end-to-end test in `tests/e2e/` using Playwright:
  - Paste JSON → tree renders
  - Invalid JSON → error banner with line number
  - Copy path → clipboard contains correct path
  - Share URL → page loads JSON from URL hash
  - Theme toggle → preference persists on refresh
- No test can depend on network access. All external dependencies are mocked.
- Tests must pass before any code is merged to `main`. The GitHub Actions CI enforces this.

---

## Accessibility Rules

- Every interactive element must be keyboard reachable in logical tab order.
- Every icon that conveys meaning must have an `aria-label`.
- Never use color as the sole indicator of state — always pair color with an icon or text label.
- All modals must trap focus and return focus to the trigger on close.
- The tree view must support arrow-key navigation when focused.
- Do not suppress browser focus outlines — the custom focus ring using `--border-focus` must be visible on all interactive elements.
- Test with keyboard-only navigation before marking any feature complete.

---

## What Not to Do

- Do not install a component library with pre-styled components (no MUI, no Chakra, no DaisyUI). All visual design is custom.
- Do not add any tracking scripts, analytics, or third-party JavaScript beyond Cloudflare Web Analytics.
- Do not add any cookie banners or consent popups — Cloudflare Web Analytics is cookieless.
- Do not create any server-side processing routes that receive user data.
- Do not import processing libraries (js-yaml, fast-xml-parser, prettier, etc.) at the top level of any page. Always use dynamic imports.
- Do not use `localStorage` directly in components — only in store files.
- Do not hardcode any tool metadata (title, description, keywords) in page files — it must come from the registry.
- Do not write CSS that conflicts with the design token system.
- Do not add dependencies without justification. Every new dependency must serve a clear purpose that existing dependencies cannot cover.

---

## Adding a New Tool: Checklist

When adding any new tool to the platform, complete all of the following:

1. Add the tool definition to the appropriate file in `src/lib/registry/tools/[category].tools.ts`
2. Confirm the URL slug is unique and follows the `/[category]/[tool-slug]` pattern
3. Add or verify the engine module in `src/lib/engines/[category]/`
4. Add unit tests for the engine's processing functions
5. Run `pnpm build` and confirm the new page appears in the build output
6. Run Lighthouse on the new page and confirm score ≥ 95
7. Confirm the new page appears in `/sitemap.xml`
8. Add the new tool to at least one category page's related tools section
9. Add the new tool to at least one other tool's "Related tools" links
10. Write the content section for the new page (tool description, use cases, FAQ) in the registry entry

Do not consider a tool "done" until all 10 steps are complete.
