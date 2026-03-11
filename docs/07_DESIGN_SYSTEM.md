# Design System

This document defines the visual language and interaction design of fmtly. All UI decisions — color, typography, spacing, layout, animation, component behavior — are defined here. Read this before writing any UI code.

---

## Design Direction

**Precision tool.** Inspired by Linear, Vercel, Raycast, and Warp terminal. Near-black backgrounds, cool-neutral grays, blue accent. Every visual element either adds clarity or is removed. The interface feels like a professional instrument — fast, direct, keyboard-first, zero clutter.

Dark mode is the default. Light mode is a first-class citizen and equally complete.

---

## Typography

### Typefaces

**UI Font: Inter**
Source: Google, free, Google Fonts CDN.
Used for: navigation, labels, buttons, descriptions, status bar, modals, headings.
Weights: 400, 500, 600.
CSS: `--font-ui: "Inter", system-ui, -apple-system, sans-serif`

**Code Font: JetBrains Mono**
Source: JetBrains, free, Google Fonts CDN.
Used for: all code content, JSON values, XML, hash outputs, UUIDs, all tool input/output areas.
Features: `font-feature-settings: "liga" 1, "calt" 1` — ligatures enabled.
Weights: 400, 500.
CSS: `--font-mono: "JetBrains Mono", "Fira Code", monospace`

Both fonts loaded via `<link rel="preload">` in `app.html`. `font-display: swap`.

### Type Scale

| Role | Size | Weight | Family |
|---|---|---|---|
| Logo | 15px | 600 | Inter — `{ }` braces in accent color |
| Nav category pills | 12px | 500 | Inter |
| Section label | 11–13px | 500 | Inter — uppercase, 0.06em tracking |
| Hero headline | 48px (32px mobile) | 600 | Inter |
| Tool title (toolbar) | 13px | 600 | Inter |
| Tool card name | 14px | 600 | Inter |
| Button | 12px | 500 | Inter |
| Status bar | 11px | 400/500 | Inter (left), JetBrains Mono (right) |
| Toast message | 12px | 500 | Inter |
| Code / input / output | 13px | 400 | JetBrains Mono |
| Tree node key | 13px | 500 | JetBrains Mono |
| Command palette input | 16px | 400 | Inter |
| Command palette result | 13px | 500 | Inter |
| Kbd badges | 10–11px | 400 | Inter / JetBrains Mono |

---

## Color System

All colors are CSS custom properties in `src/app.css`. Components never use hardcoded hex values — always `var(--token-name)`.

**Design Direction:** Near-black palette with cool-neutral grays. Blue accent (`#4a9eff`) for interactive elements. High contrast text on dark backgrounds.

### Dark Mode (Default)

**Backgrounds**

| Token | Hex | Use |
|---|---|---|
| `--bg-base` | `#080808` | Page background (near-black) |
| `--bg-surface` | `#0f0f0f` | Header, status bar, toolbar |
| `--bg-elevated` | `#161616` | Cards, panels, dropdowns |
| `--bg-overlay` | `#1e1e1e` | Modals, command palette |
| `--bg-hover` | `#1a1a1a` | Hover state |
| `--bg-active` | `#222222` | Active/pressed state |
| `--bg-subtle` | `#111111` | Kbd backgrounds, subtle fills |

**Borders**

| Token | Hex | Use |
|---|---|---|
| `--border-faint` | `#1a1a1a` | Hairline separators (status bar) |
| `--border-subtle` | `#242424` | Panel borders, card borders |
| `--border-default` | `#2e2e2e` | Input borders, dropdown borders |
| `--border-strong` | `#3a3a3a` | Prominent dividers |
| `--border-focus` | `#4a9eff` | Focus rings |

**Text**

| Token | Hex | Use |
|---|---|---|
| `--text-primary` | `#ebebeb` | Primary readable text |
| `--text-secondary` | `#888888` | Labels, secondary info |
| `--text-muted` | `#555555` | Placeholders, hints |
| `--text-disabled` | `#333333` | Disabled elements |

**Accent**

| Token | Hex | Use |
|---|---|---|
| `--accent` | `#4a9eff` | Buttons, focus rings, active tabs, links |
| `--accent-hover` | `#6ab0ff` | Hover state for accent |
| `--accent-dim` | `rgba(74,158,255,0.12)` | Accent backgrounds, focus box-shadow |
| `--accent-border` | `rgba(74,158,255,0.25)` | Accent-tinted borders |

**Semantic**

| Token | Hex | Use |
|---|---|---|
| `--success` | `#3dd68c` | Valid state, success toasts |
| `--error` | `#f87171` | Invalid state, error toasts |
| `--warning` | `#fb923c` | Warning toasts, diff modifications |

**Syntax Highlighting**

| Token | Hex | Applied To |
|---|---|---|
| `--syntax-key` | `#c792ea` | Object keys, XML attributes |
| `--syntax-string` | `#c3e88d` | String values |
| `--syntax-number` | `#82aaff` | Numeric values |
| `--syntax-boolean` | `#ff9d64` | `true`, `false` |
| `--syntax-null` | `#546e7a` | `null` |
| `--syntax-punct` | `#444444` | Brackets, colons, commas |
| `--syntax-bracket-1` | `#ffcb6b` | Level 1 brackets |
| `--syntax-bracket-2` | `#c792ea` | Level 2 brackets |
| `--syntax-bracket-3` | `#82aaff` | Level 3 brackets |

### Light Mode

| Token | Hex |
|---|---|
| `--bg-base` | `#fafafa` |
| `--bg-surface` | `#f4f4f4` |
| `--bg-elevated` | `#ffffff` |
| `--bg-overlay` | `#f0f0f0` |
| `--bg-hover` | `#eeeeee` |
| `--bg-active` | `#e8e8e8` |
| `--border-subtle` | `#e4e4e4` |
| `--border-default` | `#d4d4d4` |
| `--text-primary` | `#111111` |
| `--text-secondary` | `#666666` |
| `--text-muted` | `#aaaaaa` |
| `--accent` | `#2563eb` |
| `--accent-hover` | `#3b82f6` |
| `--success` | `#16a34a` |
| `--error` | `#dc2626` |
| `--warning` | `#d97706` |
| `--syntax-key` | `#7c3aed` |
| `--syntax-string` | `#16a34a` |
| `--syntax-number` | `#1d4ed8` |
| `--syntax-boolean` | `#c2410c` |
| `--syntax-null` | `#9ca3af` |

---

## Spacing

Base unit: 4px. All spacing is a multiple of 4. Defined as rem tokens in `app.css`.

| Token | Value | Use |
|---|---|---|
| `--space-1` | 4px | Tight icon gaps |
| `--space-2` | 8px | Internal component padding |
| `--space-3` | 12px | Button padding, panel content |
| `--space-4` | 16px | Panel padding, tree indent |
| `--space-6` | 24px | Page horizontal padding |
| `--space-8` | 32px | Section gaps |
| `--space-12` | 48px | Large section spacing |

---

## Layout

### Desktop — Split Variant (≥ 768px)

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER  44px                                                │
│  [{ } fmtly]  [JSON ▾][Text ▾]…  [⌘K] [☀/☾] [GitHub]       │
├──────────────────────────────────────────────────────────────┤
│  TOOLBAR  40px  [Tool Name]  [Format] [Copy] [Share] [Hist] │
├──────────────────────────┬───────────────────────────────────┤
│  INPUT PANEL             │  OUTPUT PANEL                     │
│  Code editor             │  Formatted output / Tree view     │
│  50% width (draggable)   │  50% width                        │
├──────────────────────────┴───────────────────────────────────┤
│  STATUS BAR  28px                                            │
└──────────────────────────────────────────────────────────────┘
```

Draggable divider with accent-dim highlight on drag. Position saved to localStorage per category.

### Layout Variants

- **Split** — Input left, output right. Most formatters, validators, converters.
- **Bidirectional** — Two equal panels. Encode/decode, escape/unescape.
- **Single** — Standard split with simpler output.
- **Single-panel** — One full-width area for generators, calculators.
- **Triple** — Three equal columns (input, tree, output) or diff layout (two inputs top, diff results bottom).
- **Generator** — Input top, output bottom, stacked vertically.

### Responsive (< 768px)

- Desktop split panels hidden
- Mobile tab bar appears: **Input** | **Output** tabs
- Tabs use accent underline for active state
- One panel visible at a time, full width
- Status bar remains fixed at bottom

---

## Header

- Height: 44px (`--header-height`), fixed at top
- Background: `var(--bg-surface)`, transitions to backdrop-blur on scroll
- Border bottom: 1px solid `var(--border-faint)`
- **Logo (left):** `{ }` braces in `var(--accent)` + "fmtly" in `var(--text-primary)`, Inter 15px 600
- **Category nav (center):** Horizontal pills, Inter 12px 500, hover opens dropdown with tool list
- **Right actions:** Search button (⌘K badge), theme toggle (sun/moon with rotation), GitHub icon link
- **Mobile (< 768px):** Hamburger menu, opens full-screen overlay with category list and search

Category dropdowns: tool name + tagline, hover highlight, 180px min-width, max-height 400px with scroll.

---

## Components

### Command Palette (⌘K)

- Triggered by: ⌘K (global), search button in header, search in mobile menu
- Overlay: `rgba(0,0,0,0.7)` + `backdrop-filter: blur(4px)`
- Modal: 560px wide, max-height 480px, `var(--bg-overlay)`, border-radius 12px
- Input row: Search icon + text input (16px) + no border
- Results: scrollable list, 40px row height, hover/active highlight
- Category badge per result: uppercase, accent color on accent-dim background
- Footer: keyboard hints (↑↓ navigate, ↵ open, esc close)
- Shows recently used tools when query is empty
- Max 12 results visible

### Toolbar

- Height: 40px (`--toolbar-height`)
- Background: `var(--bg-surface)`
- Border bottom: 1px solid `var(--border-subtle)`
- Tool name left (Inter 13px 600), action buttons right
- **Primary button:** `var(--accent)` background, white text, 6px radius
- **Secondary buttons:** `var(--bg-hover)` background, `var(--text-secondary)`, 6px radius
- Button spec: padding 5px 12px, Inter 12px 500, 100ms transition

### Status Bar

- Height: 28px (`--status-bar-height`), fixed at bottom
- Background: `var(--bg-surface)`, border-top: 1px solid `var(--border-faint)`
- Left: validity indicator (icon + label, colored), message, sizes, counts — separated by `·`
- Right: cursor position in JetBrains Mono 11px
- Validity colors: `--success` (valid), `--error` (invalid), `--text-muted` (empty), `--accent` (processing)

### Toast Notifications

- Position: **bottom-right**, 16px from edges
- Max stack: **3** visible at once (newest at bottom)
- Background: `var(--bg-overlay)`, border: `var(--border-default)`
- Border-radius: 8px, padding: 8px 14px, max-width 320px
- Shadow: `var(--shadow-md)`
- Entry: slide in from right (x: 24px), 150ms
- Exit: fade out, 100ms
- Auto-dismiss: 2000ms
- Icon colors: success=`--success`, error=`--error`, info=`--accent`, warning=`--warning`

### Shortcuts Modal

- Triggered by `?`
- Overlay: `rgba(0,0,0,0.7)` + backdrop-blur(4px)
- Card: `var(--bg-overlay)`, border-radius 12px, max-width 480px
- Header: 14px title, close button with hover highlight
- Two sections: Global, Tool — each with uppercase label (11px 500 muted)
- Rows: label left (13px secondary), kbd badges right
- Kbd badges: `var(--bg-subtle)`, `var(--border-subtle)`, 4px radius, JetBrains Mono 11px

### Tree View Nodes

- Row height: 26px
- Indent: 16px per depth
- Font: JetBrains Mono 13px
- Hover: `var(--bg-hover)`, border-radius 4px, 80ms
- Count badges: Inter 11px italic `var(--text-muted)` — `[ 24 items ]`
- Strings over 80 chars: truncated with `…`, full value on hover tooltip

### Error Banner

- Left border: 3px solid `var(--error)`
- Background: `var(--error-dim)`
- Content: error type (semibold), line:column, plain-language message
- "Try Auto-Repair" button right-aligned where applicable

---

## Pages

### Homepage

- **Hero:** Centered, eyebrow text (uppercase 12px muted), headline (48px/32px mobile, 600), subtitle (16px secondary), search bar (520px, 44px height, ⌘K kbd badge)
- **Search results:** Inline dropdown below search, accent category badges, arrow-right icon
- **Recently used:** Horizontal scroll cards (200px wide), lazy loaded from localStorage
- **Categories grid:** 4-col (3/2/1 responsive), icon + name + count + top tools preview

### Category Page

- **Breadcrumb:** Home / Category (12px muted)
- **Header:** Category name (32px/24px mobile, 600), description (14px), tool count (12px)
- **Tools grid:** 3-col (2/1 responsive), cards with operation badge, arrow on hover, tagline clamped to 2 lines
- **Related categories:** 4-col (2/1 responsive), name + tool count

### Tool Page

- Full-height layout below header
- Toolbar row with tool name + action buttons
- Split panels with draggable divider (desktop)
- Mobile tab bar for Input/Output switching
- Status bar fixed at bottom

---

## Interaction Design

### Debounce

Parsing and processing triggers 300ms after the user stops typing. A pulsing "Processing…" indicator shows in the status bar.

### Path Copy (Tree Nodes)

1. Hover row → copy icon fades in (100ms)
2. Click anywhere on row → path copied
3. Icon becomes ✓ in `var(--success)`
4. Reverts after 1200ms
5. Toast: "Copied — user.orders[0].id"

### Theme Toggle

1. Click toggle → `data-theme` on `<html>` switches
2. All CSS custom properties update simultaneously via 200ms cross-fade
3. Sun/moon icons rotate on transition
4. Preference saved to localStorage

### Engine Loading

- Input shows subtle shimmer while engine loads (~100–300ms)
- Shimmer: `var(--shimmer)` gradient, `animation: shimmer 1.5s infinite`
- After load: shimmer disappears, input focuses automatically

---

## Animations

| Duration | Use |
|---|---|
| 80ms | Hover highlights, button state |
| 100ms | Border color transitions, divider hover |
| 120ms | Dropdown open/close, icon changes |
| 150ms | Toast entry, command palette, modal entry |
| 200ms | Theme transition, panel resize |

**Rules:**
- Every animation communicates state — nothing decorative
- No looping animations during normal use (except shimmer loading)
- `prefers-reduced-motion: reduce` disables all transitions and animations

---

## Accessibility

- WCAG AA minimum
- Contrast: 4.5:1 body text, 3:1 large text and UI
- All interactive elements keyboard reachable in logical tab order
- All meaningful icons have `aria-label`
- Color never sole indicator — icons or text always accompany
- Command palette: full keyboard navigation (↑↓ Enter Esc)
- Tree: Tab to enter, Arrows to navigate, Enter/Space to expand, Escape to exit
- Modals/palette: `role="dialog"`, `aria-modal="true"`, focus managed
- `prefers-reduced-motion` fully respected