# Contributing to fmtly

Read [.windsurfrules](.windsurfrules) before writing any code.

---

## Adding a New Tool

1. Add tool definition to `src/lib/registry/tools/[category].tools.ts`
2. Add engine at `src/lib/engines/[category]/` — pure functions only
3. Add Svelte panels to `src/lib/components/panels/[category]/`
4. Add localization keys to `src/lib/i18n/registry/[lang].ts`
5. Write unit tests in `tests/unit/[category]/`
6. Run `pnpm build` — confirm page appears at correct URL
7. Run Lighthouse — must score ≥ 95 mobile
8. Confirm URL in `/sitemap.xml`
9. Link from at least one related tool
10. Test full keyboard navigation

Do not open a PR until all 10 steps pass.

---

## Other Contributions

**Bug fix:** Open an issue first, wait for confirmation, branch `fix/description`.

**Content improvement:** Description, use cases, FAQ edits — no issue needed, just PR.

**Performance:** Include Lighthouse data in the issue before starting.

Issue templates:
- Bug report: `.github/ISSUE_TEMPLATE/bug_report.yml`
- Feature request: `.github/ISSUE_TEMPLATE/feature_request.yml`
- Tool proposal: `.github/ISSUE_TEMPLATE/tool_proposal.yml`
- Documentation: `.github/ISSUE_TEMPLATE/documentation.yml`

PR template:
- `.github/pull_request_template.md`

Support and escalation:
- General support: `SUPPORT.md`
- Security reports (private): `SECURITY.md`

---

## Setup

```bash
pnpm install
pnpm dev
pnpm test       # must pass
pnpm check      # must pass
pnpm lint       # must pass
pnpm build      # must pass
```

---

## Branches & Commits

```
feature/tool-name
fix/short-description
chore/short-description
```

Conventional commits: `feat:` `fix:` `chore:` `docs:` `refactor:` `test:`

---

## Hard Rules

- No server-side user data — ever
- No top-level library imports — always dynamic `import()`
- No hardcoded hex colors — always design tokens
- No pre-styled component libraries
- Lighthouse < 95 blocks merge