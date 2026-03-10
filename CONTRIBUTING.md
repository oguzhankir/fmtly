# Contributing to fmtly

Thank you for your interest in contributing. This document covers how to get started, what makes a good contribution, and how the review process works.

---

## Before You Start

Read these two files before writing any code:

- **[docs/02-ARCHITECTURE.md](docs/02-ARCHITECTURE.md)** — How the platform works
- **[.windsurfrules](.windsurfrules)** — Code conventions, constraints, and what not to do

Contributions that conflict with the architecture or conventions will be asked to change before review.

---

## Types of Contributions

### Adding a New Tool

The highest-value contribution. fmtly's Tool Registry architecture makes adding a tool fast — a configuration object + a processing function. The platform generates the page, routing, SEO metadata, and sitemap entry automatically.

**Steps:**

1. **Check the backlog first.** See [docs/03-FEATURES.md](docs/03-FEATURES.md) for the planned tool list. Open an issue to confirm the tool isn't already in progress before starting.

2. **Add the tool definition** to `src/lib/registry/tools/[category].tools.ts`. Follow the `ToolDefinition` type in `src/lib/registry/types.ts` exactly.

3. **Add the engine** at `src/lib/engines/[category]/`. Engine functions must be pure — no side effects, no store access, no DOM access. All engine imports in pages and components must use dynamic `import()`.

4. **Write unit tests** for every engine function in `tests/unit/`. Cover: valid input, invalid input, empty string, Unicode, edge cases specific to the tool.

5. **Build and verify.** Run `pnpm build` and confirm the page appears at the correct URL.

6. **Run Lighthouse.** Performance must be ≥ 95 on mobile. If it is not, find and fix the cause before opening a PR.

7. **Check the sitemap.** Confirm the new URL appears in `/sitemap.xml`.

8. **Connect to related tools.** Add this tool to the "Related tools" section of at least one existing tool.

9. **Write the content section** in the registry entry: description (2–3 sentences), use cases (3–5 bullets), FAQ (3–5 questions). Write for humans — no keyword stuffing.

10. **Test keyboard navigation.** Tab through the tool, use all keyboard shortcuts, confirm full operability without a mouse.

Do not open a PR until all 10 steps are complete.

---

### Bug Fix

1. Open an issue describing the bug, reproduction steps, and expected behavior
2. Wait for confirmation before starting work (avoids duplicate effort)
3. Create a branch: `fix/short-description`
4. Write a failing test, then fix the bug
5. Open a PR

---

### Improving Tool Content

Tool page content (description, use cases, FAQ) can always be improved. These don't require engine changes.

Commit message: `docs: improve [tool-name] content`

---

### Performance Improvement

Open an issue with measurements first (Lighthouse score, bundle size, profiling data). Performance PRs without data are difficult to evaluate.

---

## Development Setup

```bash
git clone https://github.com/oguzhankir/fmtly.git
cd fmtly
pnpm install   # pnpm only — not npm, not yarn
pnpm dev
```

### Running Tests

```bash
pnpm test          # Vitest unit tests
pnpm test:e2e      # Playwright end-to-end
pnpm check         # TypeScript type check
pnpm lint          # Biome lint
```

All four must pass before opening a PR.

---

## Branch Naming

```
feature/tool-name              New tool
feature/short-description      New platform feature
fix/short-description          Bug fix
chore/short-description        Config, dependencies, build
docs/short-description         Documentation only
```

---

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add SHA-256 hash generator
feat: add cron expression parser
fix: correct error line in XML validator
chore: upgrade js-yaml to v4
docs: improve JWT decoder FAQ
refactor: extract color math to pure functions
test: add edge case tests for base64 decoder
```

One commit per logical change.

---

## Pull Request Process

1. Open a PR against `main`
2. Describe what changed, why, and how to test it
3. CI runs automatically: TypeScript, Biome, Vitest, build, Lighthouse CI
4. A maintainer reviews and approves or requests changes
5. Squash merge on approval

**PRs that fail CI are not reviewed until CI passes.**

---

## Hard Constraints

These are not negotiable and will block merging:

- No server-side user data processing — ever
- No top-level imports of processing libraries — always dynamic `import()`
- No hardcoded hex colors in components — always design tokens
- No pre-styled component libraries
- No tracking scripts beyond Cloudflare Web Analytics
- Lighthouse Performance < 95 on any page

---

## Questions

Open a [GitHub Issue](https://github.com/oguzhankir/fmtly/issues) with the `question` label. Search existing issues before opening a new one.