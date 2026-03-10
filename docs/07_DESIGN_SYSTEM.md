# Design System

This document defines the visual language and interaction design of fmtly. All UI decisions — color, typography, spacing, layout, animation, component behavior — are defined here. Read this before writing any UI code.

---

## Design Direction

**Precision utility.** The aesthetic communicates intention and craft. Every visual element either adds clarity or is removed. The interface should feel like a tool built by someone who uses it daily — fast, direct, keyboard-friendly, free of clutter.

The design is unapologetically dark-default. Developer tools live in dark environments. Light mode is a first-class citizen and equally complete — not an afterthought.

---

## Typography

### Typefaces

**UI Font: Geist Sans**
Source: Vercel, free, Google Fonts CDN.
Used for: navigation, labels, buttons, descriptions, status bar, modals.
Weights: 400, 500, 600.

**Code Font: JetBrains Mono**
Source: JetBrains, free, Google Fonts CDN.
Used for: all code content, JSON values, XML, hash outputs, UUIDs, all tool input/output areas.
Features: `font-feature-settings: "liga" 1, "calt" 1` — ligatures enabled.
Weights: 400, 500.

Both fonts loaded via `<link rel="preload">` in `app.html`. Subset to Latin. `font-display: swap`.

### Type Scale

| Role | Size | Weight | Family |
|---|---|---|---|
| Logo | 15px | 600 | Geist |
| Nav items | 13px | 500 | Geist |
| Section label | 11px | 600 | Geist — uppercase, 0.08em tracking |
| Tool title H1 | 20px | 600 | Geist |
| Tool description | 14px | 400 | Geist — 1.6 line-height |
| Button | 13px | 500 | Geist |
| Status bar | 12px | 400 | Geist |
| Tooltip | 12px | 400 | Geist |
| Code / input / output | 13px | 400 | JetBrains Mono — 1.65 line-height |
| Tree node key | 13px | 500 | JetBrains Mono |

---

## Color System

All colors are CSS custom properties in `src/app.css`. Components never use hardcoded hex values — always `var(--token-name)`.

**Design Direction:** The palette is inspired by Claude AI's warm, inviting aesthetic. Dark mode uses deep warm charcoal tones (not cold black) to reduce eye fatigue. The accent color is amber/orange (`#d97706`) instead of blue to feel warmer and more approachable. Light mode uses a cream-based background (`#faf7f4`) instead of pure white.

### Dark Mode (Default)

**Backgrounds**

| Token | Hex | Use |
|---|---|---|
| `--bg-base` | `#1a1612` | Page background (warm charcoal) |
| `--bg-surface` | `#211e1a` | Header, status bar, sidebars |
| `--bg-elevated` | `#2d2925` | Cards, panels, dropdowns |
| `--bg-inset` | `#161310` | Inset areas, code blocks |
| `--bg-hover` | `rgba(255,255,255,0.04)` | Hover state |
| `--bg-selected` | `rgba(217,119,6,0.1)` | Active / selected item |

**Borders**

| Token | Hex | Use |
|---|---|---|
| `--border-subtle` | `#27231f` | Hairline separators |
| `--border-default` | `#332e29` | Panel borders, inputs |
| `--border-strong` | `#4a443d` | Prominent borders |
| `--border-focus` | `#d97706` | Focus rings (amber) |

**Text**

| Token | Hex | Use |
|---|---|---|
| `--text-primary` | `#f0ebe3` | Primary readable text (warm white) |
| `--text-secondary` | `#b5a99a` | Labels, secondary info |
| `--text-muted` | `#7a6f64` | Placeholders, disabled |
| `--text-tertiary` | `#5c5248` | Faint helper text |
| `--text-accent` | `#d97706` | Highlighted text, counts |

**Primary Accent**

| Token | Hex | Use |
|---|---|---|
| `--color-primary` | `#d97706` | Buttons, focus rings, active states |
| `--color-success` | `#22c55e` | Success states |
| `--color-error` | `#ef4444` | Error states |

### Light Mode

**Backgrounds** — warm cream-based, not pure white.

| Token | Hex | Use |
|---|---|---|
| `--bg-base` | `#faf7f4` | Page background (cream) |
| `--bg-surface` | `#f3ede7` | Panels, sidebars |
| `--bg-elevated` | `#faf7f4` | Cards, dropdowns |
| `--bg-inset` | `#ede5dc` | Inset / code areas |

**Accent** — `#c2610c` (darker amber for sufficient light-mode contrast).

| `--text-muted` | `#555555` | Placeholders, disabled |

**Syntax (code/data highlighting)**

| Token | Hex | Applied To |
|---|---|---|
| `--syntax-key` | `#c4a5d4` | Object keys, XML attributes |
| `--syntax-string` | `#a8d8a8` | String values |
| `--syntax-number` | `#7ec8e3` | Numeric values |
| `--syntax-boolean` | `#f0a04b` | `true`, `false` |
| `--syntax-null` | `#666666` | `null` |
| `--syntax-punctuation` | `#555555` | Brackets, colons, commas |
| `--syntax-tag` | `#89b4fa` | XML/HTML tags |
| `--syntax-attribute` | `#cba6f7` | XML/HTML attribute names |
| `--syntax-comment` | `#4d4d4d` | Comments |

**Semantic**

| Token | Hex | Use |
|---|---|---|
| `--color-accent` | `#4a9eff` | Primary interactive elements, links |
| `--color-accent-hover` | `#6ab0ff` | Accent hover |
| `--color-success` | `#4caf78` | Valid state, diff additions |
| `--color-error` | `#e05c5c` | Invalid state, diff removals |
| `--color-warning` | `#e0a850` | Warnings, diff modifications |

### Light Mode

| Token | Hex |
|---|---|
| `--bg-base` | `#ffffff` |
| `--bg-surface` | `#f8f8f8` |
| `--bg-elevated` | `#f0f0f0` |
| `--bg-hover` | `#ebebeb` |
| `--border-subtle` | `#e8e8e8` |
| `--border-default` | `#d8d8d8` |
| `--text-primary` | `#171717` |
| `--text-secondary` | `#737373` |
| `--text-muted` | `#aaaaaa` |
| `--syntax-key` | `#7c3aed` |
| `--syntax-string` | `#15803d` |
| `--syntax-number` | `#0369a1` |
| `--syntax-boolean` | `#c2410c` |
| `--syntax-null` | `#9ca3af` |

---

## Spacing

Base unit: 4px. All spacing is a multiple of 4.

| Token | Value | Use |
|---|---|---|
| `--space-1` | 4px | Tight icon gaps |
| `--space-2` | 8px | Internal component padding |
| `--space-3` | 12px | Button padding |
| `--space-4` | 16px | Panel padding, tree indent |
| `--space-5` | 20px | Section spacing |
| `--space-6` | 24px | Large panel padding |
| `--space-8` | 32px | Section gaps |
| `--space-12` | 48px | Header height |

---

## Layout

### Desktop — Split Variant (≥ 1024px)

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER  48px                                                 │
│  [fmtly]  [JSON][Text][Number][Encode][Color][More]  [⚙][🌙] │
├──────────────────────────┬───────────────────────────────────┤
│  TOOLBAR  40px                                                │
├──────────────────────────┼───────────────────────────────────┤
│  INPUT PANEL             │  OUTPUT PANEL                      │
│  Monaco Editor           │  Formatted output / Tree view      │
│  45% width               │  55% width                         │
├──────────────────────────┴───────────────────────────────────┤
│  STATUS BAR  28px                                             │
└──────────────────────────────────────────────────────────────┘
```

Draggable divider. Position saved to localStorage per category.

### Layout Variants

**Single Panel** — One area serving as both input and output (generators, reference tools, calculators).

**Split Panel** — Input left, output right. Used for most formatters, validators, converters.

**Bidirectional** — Two equal panels with a swap arrow between them. Used for encode/decode, escape/unescape.

**Dual Input** — Two inputs, one output. Used for diff tools, HMAC (key + message).

**Generator** — Controls or input on left, rich generated output on right with optional format/language selector.

### Responsive

**Tablet (768–1023px):** Tab bar switches between Input and Output panels. One visible at a time.

**Mobile (< 768px):** Full-viewport editor. Persistent bottom bar with validity status, "View Result", and Copy. Result opens in a draggable bottom sheet. All tap targets: minimum 44×44px.

---

## Header

- Height: 48px, fixed at top
- Background: `var(--bg-surface)`
- Border bottom: 1px solid `var(--border-faint)`
- Logo wordmark: left — Geist Semibold 15px, `{ }` icon prefix
- Category nav: center — dropdown per category listing all tools
- Right: search icon, settings, theme toggle

Category navigation dropdowns show tools with name + one-line tagline. Large categories (10+ tools) use a two-column grid inside the dropdown.

---

## Components

### Toolbar

- Height: 40px
- Background: `var(--bg-base)`
- Border bottom: 1px solid `var(--border-faint)`
- Primary actions left, secondary actions (Share, History) right
- Horizontal scroll on mobile

**Button spec:** Height 28px, padding 0 10px, border-radius 5px, Geist 13px Medium. Transitions: 100ms.

### Status Bar

- Height: 28px, fixed at bottom
- Font: Geist 12px `var(--text-muted)`
- Segments separated by ` · `
- Validity: icon + text — color is never the sole indicator

### Tree View Nodes

- Row height: 26px
- Indent: 16px per depth
- Font: JetBrains Mono 13px
- Hover: `var(--bg-hover)`, border-radius 4px, 80ms
- Count badges: Geist 11px italic `var(--text-muted)` — `[ 24 items ]`
- Strings over 80 chars: truncated with `…`, full value on hover tooltip

### Error Banner

- Left border: 3px solid `var(--color-error)`
- Background: `rgba(224, 92, 92, 0.07)`
- Content: error type (semibold), line:column, plain-language message
- "Try Auto-Repair" button right-aligned where applicable

### Toast Notifications

- Position: bottom-left, 16px from edges, max-width 240px
- Background: `var(--bg-overlay)`, border: `var(--border-subtle)`
- Border-radius: 8px, padding: 10px 14px
- Shadow: `0 4px 24px rgba(0, 0, 0, 0.4)`
- Entry: slide up + fade in, 120ms ease-out
- Auto-dismiss: 2000ms
- Types: success (green left border), error (red left border), info (accent left border)

### Shortcuts Modal

- Triggered by `?`
- Overlay: `rgba(0,0,0,0.6)` + backdrop-blur
- Card: `var(--bg-elevated)`, border-radius 12px, max-width 560px
- Two columns: action label left, key badge right
- Entry: scale 0.96→1.0 + fade, 150ms ease-out

---

## Interaction Design

### Debounce

Parsing and processing triggers 300ms after the user stops typing. A pulsing "Processing…" indicator shows in the status bar. Prevents excessive computation on every keystroke.

### Path Copy (Tree Nodes)

1. Hover row → copy icon fades in (100ms)
2. Click anywhere on row → path copied
3. Icon becomes ✓ in `var(--color-success)`
4. Reverts after 1200ms
5. Toast: "Copied — user.orders[0].id"

### Theme Toggle

1. Click toggle → `data-theme` on `<html>` switches
2. All CSS custom properties update simultaneously
3. 200ms cross-fade transition
4. Preference saved to localStorage

### Engine Loading

- Input shows subtle shimmer while engine loads (~100–300ms)
- After load: shimmer disappears, input focuses automatically
- On fast connections: invisible to the user

---

## Animations

| Duration | Use |
|---|---|
| 80ms | Hover state transitions |
| 120ms | Toast entry/exit, icon changes |
| 150ms | Tree expand/collapse, modal entry |
| 200ms | Theme transition, panel resize |

**Rules:**
- Every animation communicates state — nothing decorative
- No looping animations during normal use
- `prefers-reduced-motion: reduce` disables all transitions

---

## Accessibility

- WCAG AA minimum
- Contrast: 4.5:1 body text, 3:1 large text and UI
- All interactive elements keyboard reachable in logical tab order
- All meaningful icons have `aria-label`
- Color never sole indicator — icons or text always accompany
- Tree: Tab to enter, Arrows to navigate, Enter/Space to expand, Escape to exit
- Modals: focus trapped, returned to trigger on close
- `prefers-reduced-motion` fully respected