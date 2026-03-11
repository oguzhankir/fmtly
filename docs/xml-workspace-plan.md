# XML Workspace — Complete Implementation Plan

> Objective: Bring XML tools to the same level of quality, UX, and architecture as the JSON workspace.
> Reference baseline: JSON workspace (formatter / validator / minifier / converters / query / store / input panel / output panel).

---

## 1. Current State Audit

### What exists

| Tool | Slug | SEO | Content | Engine | Store | Panel |
|---|---|---|---|---|---|---|
| XML Formatter | `xml/formatter` | ✅ Good | ✅ FAQs + use cases | ✅ `formatXML` | ❌ Generic | ❌ Generic InputPanel |
| XML Validator | `xml/validator` | ✅ Good | ✅ FAQs + use cases | ✅ `parseXML` | ❌ Generic | ❌ Generic InputPanel |
| XML to JSON | `xml/to-json` | ✅ Good | ✅ FAQs + use cases | ✅ `xmlToJSON` | ❌ Generic | ❌ Generic InputPanel |
| JSON to XML | `json/to-xml` | ✅ Good | ✅ FAQs + use cases | ✅ `jsonToXML` | Under json.store | Under json.store |
| XML to YAML | `xml/to-yaml` | ❌ Stub | ❌ Empty | ✅ `toYaml` | ❌ Generic | ❌ Generic InputPanel |
| XML to CSV | `xml/to-csv` | ❌ Stub | ❌ Empty | ✅ `toCsv` | ❌ Generic | ❌ Generic InputPanel |

### What is completely missing

- **XML Minifier** — engine function `minifyXML` exists in `index.ts` but has **no registry entry** and no tool page.
- **XPath Query** — no engine, no panel, no tool.
- **XML Diff** — no engine, no panel, no tool.
- **Dedicated `XmlInputPanel.svelte`** — all XML tools use the generic `InputPanel.svelte` (no workspace tabs, no validity indicator, no XML-aware drag-drop).
- **Dedicated `XmlValidatorPanel.svelte`** — the validator uses generic layout with no Monaco error markers, no error list, no repair/format actions.
- **`xml.store.ts`** — no reactive XML store; no debounced parse, no per-tool output dispatch.
- **Workspace tabs** — switching between XML tools requires the global nav. No inline tab bar like JSON has.
- **`+page.svelte` XML handling** — no XML-specific branch in the routing page. XML tools fall through to the generic `InputPanel` + `OutputPanel`.

### Engine quality issues

- `src/lib/engines/xml/index.ts` has **top-level imports** from `fast-xml-parser`:
  ```ts
  import { XMLBuilder, XMLParser, XMLValidator } from 'fast-xml-parser';
  ```
  This is used by `json.store.ts` which calls it at store-init time, not lazily. The engine should remain importable at the module level (engines are the lazy-load boundary), but the store's import of it should be verified.
  
- `xml.engine.ts` uses `any[]` in `toCsv` — violates strict TypeScript rule.
- Error messages from `XMLValidator` are raw library strings — need plain-language explanations like the JSON validator provides.
- No `repairXML` function — there's no equivalent of `jsonrepair` for XML, but common auto-fixes (missing closing tags, unescaped `&`, encoding declaration) can be implemented manually.
- No `computeXMLStats` — no element count, attribute count, depth, node count for the status bar.

---

## 2. Feature Gap Matrix: JSON vs XML

| Feature | JSON | XML |
|---|---|---|
| Shared workspace tabs across tools | ✅ | ❌ |
| Dedicated store with reactive parse | ✅ `json.store.ts` | ❌ |
| Debounced input → auto-process | ✅ | ❌ |
| Dedicated input panel component | ✅ `JsonInputPanel.svelte` | ❌ |
| Drag-and-drop file upload | ✅ (.json) | ❌ (generic only) |
| Load from URL | ✅ | ❌ |
| Clipboard detect + paste banner | ✅ | ❌ |
| Sample data dropdown | ✅ `jsonSamples.ts` | ❌ |
| Validity indicator in meta bar | ✅ (Valid / line:col error) | ❌ |
| Input byte size + line count display | ✅ | ❌ |
| Dedicated output panel component | ✅ `JsonOutputPanel.svelte` | ❌ |
| Syntax highlighting (highlight.js) | ✅ | ✅ (highlight.js xml exists) |
| Copy output | ✅ | ✅ (generic) |
| Download output | ✅ | ✅ (generic) |
| Word wrap toggle | ✅ | ❌ |
| Output meta (chars, lines) | ✅ | ❌ |
| Minification savings stats | ✅ | ❌ |
| Converter swap button (reverse) | ✅ (to-yaml, to-csv, to-xml) | ❌ |
| Dedicated validator panel | ✅ `JsonValidatorPanel.svelte` | ❌ |
| Monaco editor in validator | ✅ | ❌ |
| Error list (click to navigate) | ✅ | ❌ |
| Error markers in Monaco gutter | ✅ | ❌ |
| Format action in validator | ✅ | ❌ |
| Repair action | ✅ (`jsonrepair`) | ❌ |
| Query tool (JSONPath) | ✅ | ❌ (XPath needed) |
| Query tool (JMESPath) | ✅ | ❌ |
| Minifier tool | ✅ | ❌ (engine exists, no registry entry) |
| Diff tool | ✅ `/diff/json` | ❌ |
| Keyboard shortcuts (Ctrl+1..N tabs) | ✅ | ❌ |
| `+page.svelte` dedicated branch | ✅ | ❌ |
| SEO: all tools finalized | ✅ | ❌ (to-yaml, to-csv stubs) |

---

## 3. New Tools to Add

### 3a. XML Minifier (`xml/minifier`)
- Engine: `minifyXML` already exists in `src/lib/engines/xml/index.ts`
- Just needs a registry entry in `xml.tools.ts`
- Should display byte savings in output (like JSON minifier does)
- SEO: unique title + description

### 3b. XPath Query (`xml/xpath`)
- Engine: `src/lib/engines/xml/xml.engine.ts` — add `xpathQuery(xml, expression)` using browser's native **`document.evaluate`** (no library needed — the browser DOM has XPath 1.0 built-in via `DOMParser` + `document.evaluate`)
- Panel: New `XmlQueryOutputPanel.svelte` — similar to `JsonQueryOutputPanel.svelte`
  - Left: XML input (from shared store)
  - Right: XPath expression textarea + result list
  - Sample expressions per XML context (e.g. `//book[@id='1']`, `/catalog/book/title`)
  - Result rendered as attribute list or text nodes
  - Copy result button
- Layout: `dual-input`

### 3c. XML Diff (`xml/diff` or `diff/xml`)
- Place in `diff` category (like JSON Diff lives at `/diff/json`)
- Engine: `src/lib/engines/diff/xml-diff.ts`
  - Parse both XML inputs, walk DOM trees, diff node-by-node
  - Can use `fast-xml-parser` with `preserveOrder: true` to get ordered structure
  - Produce diff entries: `{path, type: 'added'|'removed'|'modified'|'unchanged', leftValue, rightValue}`
  - Export as XML Patch format (RFC-style) or simple report
- Panel: Reuse `DiffResultsPanel.svelte` pattern or build `XmlDiffResultsPanel.svelte`
- Layout: `triple` (original | modified | diff below)

---

## 4. Components to Build

### 4a. `XmlInputPanel.svelte`
Mirrors `JsonInputPanel.svelte` exactly, adapted for XML:

```
Features:
- Workspace tabs: Format | Validate | Minify | → JSON | → YAML | → CSV | XPath
- Monaco editor (lazy-loaded on first focus, language: xml)
- Drag-and-drop: accepts .xml, .svg, .xhtml, .xsd, .wsdl, .txt
- Upload button: same extensions
- Load from URL: fetches XML/RSS/Atom feeds
- Sample data dropdown: xmlSamples.ts (RSS feed, SOAP envelope, catalog, SVG, config)
- Clipboard detect: detect XML in clipboard on focus, show paste banner
- Validity indicator: "Well-formed" (green) / "Line N, Col N: <error>" (red)
- Status bar: encoding · byte size · line count · element depth
- Drop overlay
- Clear button with confirmation for large inputs
```

### 4b. `XmlValidatorPanel.svelte`
Mirrors `JsonValidatorPanel.svelte`:

```
Features:
- Workspace tabs (same as XmlInputPanel)
- Monaco editor (language: xml, wordWrap: true)
- Validation mode toggle: Well-formedness | XSD Schema
  - Well-formedness: uses XMLValidator.validate() from fast-xml-parser
  - XSD: browser-native DOMParser + XMLSerializer + validation (or warn unsupported)
- Error list with click-to-navigate (revealLine in Monaco)
- Error markers set in Monaco gutter
- Format action (beautifies the XML in place)
- Auto-fix action: escapes unescaped & < > in text nodes, fixes common mistakes
- Status: "Well-formed" (green check) / "N error(s)" (red triangle)
- Plain-language error explanations (map raw fast-xml-parser messages to human text)
```

### 4c. `XmlOutputPanel.svelte`
Mirrors `JsonOutputPanel.svelte`:

```
Features:
- Syntax-highlighted output (highlight.js xml)
- Copy / Download buttons
- Word wrap toggle
- Output meta: chars · lines
- Minifier: show byte savings stats (like json minifier)
- Converter swap button for xml→json (reverse: json→xml)
- XML formatter: indent selector (2 spaces / 4 spaces / tabs)
- XML declaration toggle (include/omit <?xml version="1.0"?>)
- Invalid XML error state display
```

---

## 5. `xml.store.ts` — New Reactive Store

Mirrors `json.store.ts` in structure:

```typescript
// Reactive stores
export const xmlError = writable<XMLParseError | null>(null);
export const xmlStats = writable<XMLStats | null>(null);
export const xmlFormatOptions = writable<XMLFormatOptions>({ indent: 2 });

// Lifecycle
export function initXMLStore(toolSlug: string): void { ... }
export function destroyXMLStore(): void { ... }

// Actions
export async function formatXml(): Promise<void> { ... }
export async function minifyXml(): Promise<void> { ... }

// Internal
async function processInput(value: string): Promise<void> {
  // parse → validate → dispatch per active slug
}

async function applyToolOutput(value: string): Promise<void> {
  switch (activeXmlToolSlug) {
    case 'formatter': applyFormatOutput(value); return;
    case 'minifier':  applyMinifyOutput(value); return;
    case 'to-json':   await applyJsonOutput(value); return;
    case 'to-yaml':   await applyYamlOutput(value); return;
    case 'to-csv':    await applyCsvOutput(value); return;
    case 'validator': case 'xpath': /* no output */ return;
  }
}
```

**`XMLStats` type:**
```typescript
type XMLStats = {
  elements: number;
  attributes: number;
  textNodes: number;
  maxDepth: number;
  sizeBytes: number;
};
```

**`computeXMLStats(xml: string): XMLStats`** — new engine function to add.

---

## 6. `xmlSamples.ts` — Sample Data

Create `src/lib/utils/xmlSamples.ts` with:

```
- tool-sample: (filled from registry sampleInput)
- rss-feed: A realistic RSS 2.0 feed (3 items)
- soap-envelope: A SOAP 1.1 envelope with body
- catalog: Book catalog (the current sampleInput)
- svg: A simple SVG with shapes
- config: Spring Boot / Maven pom.xml style config
- xhtml: XHTML document fragment
```

---

## 7. `+page.svelte` Integration

Add XML workspace handling alongside the JSON workspace:

```svelte
let xmlWorkspaceTools = $derived(
  data.tool.category === 'xml'
    ? getToolsByCategory('xml')
    : []
);

// In initTool():
if (data.tool.category === 'xml') {
  initXMLStore(data.tool.slug);
}

// Keyboard shortcuts: Ctrl+1..N for XML workspace tabs
// Format shortcut: Ctrl+Enter → formatXml()
```

In the template:
```svelte
{:else if data.tool.category === 'xml' && data.tool.slug === 'validator'}
  <XmlValidatorPanel toolSlug={data.tool.slug} workspaceTools={xmlWorkspaceTools} />
{:else if data.tool.category === 'xml' && data.tool.slug === 'xpath'}
  <XmlInputPanel ... workspaceTools={xmlWorkspaceTools} />
  <XmlQueryOutputPanel ... />
{:else if data.tool.category === 'xml'}
  <XmlInputPanel ... workspaceTools={xmlWorkspaceTools} />
  <XmlOutputPanel ... />
```

---

## 8. SEO Finalization

### `xml/to-yaml`
- **metaTitle:** `XML to YAML Converter — fmtly.dev` (≤60 chars ✓)
- **metaDescription:** `Convert XML to YAML configuration format in your browser. Parse any XML document and get clean YAML output instantly — no server, fully private.` (148 chars)
- **tagline:** `Convert XML documents to YAML configuration format`
- **description:** Full paragraph with attribute handling, nesting, use cases
- **FAQs:** 2–3 questions (attribute mapping, losslessness, use cases)
- **useCases:** 3–4 items
- **sampleInput:** meaningful XML config (not `<root><item>Hello</item></root>`)
- **relatedTools:** `[xml/formatter, xml/to-json, yaml/formatter]`

### `xml/to-csv`
- **metaTitle:** `XML to CSV Converter — fmtly.dev` (≤60 chars ✓)
- **metaDescription:** `Convert XML arrays to CSV instantly in your browser. Extracts repeated elements as rows with auto-detected column headers. No server, fully private.` (152 chars)
- **tagline:** `Extract repeated XML elements as a CSV table`
- **description:** Full paragraph explaining array detection, flattening, nested paths
- **FAQs:** What XML structure is needed, how are attributes handled, namespace handling
- **useCases:** 3–4 items
- **relatedTools:** `[xml/formatter, xml/to-json, json/to-csv]` (remove placeholder unrelated tools)

### `xml/minifier` (new entry)
- Full SEO with byte savings framing

### `xml/xpath` (new entry)
- Full SEO: unique title, description, 3 FAQs, 4 use cases, sample XPath expressions

---

## 9. Engine Additions & Improvements

### `src/lib/engines/xml/index.ts`

**Add:**
```typescript
export function computeXMLStats(xml: string): XMLStats
export function repairXML(xml: string): FormatResult  // best-effort common fixes
export function xmlToYaml(xml: string): Promise<string>   // move from xml.engine.ts
export function xmlToCsv(xml: string): Promise<string>    // move from xml.engine.ts
```

**Improve `parseXML`:**
- Map raw `fast-xml-parser` error messages to plain-language explanations
- Return column number more reliably
- Add `plainLanguageExplanation` to error type (mirror JSON validator)

**Improve `xml.engine.ts`:**
- Replace all `any` types with proper interfaces
- Strict TypeScript throughout

### `src/lib/engines/xml/xpathEngine.ts` (new)
```typescript
export function xpathQuery(xml: string, expression: string): XPathResult
// Uses browser-native DOMParser + document.evaluate (XPath 1.0)
// No external library needed
// Returns: { nodes: string[], count: number, error?: string }
```

### `src/lib/engines/diff/xml-diff.ts` (new)
```typescript
export function computeXMLDiff(left: string, right: string): XMLDiffResult
// Uses fast-xml-parser with preserveOrder:true
// Walk both trees recursively, diff by path
// Returns: { entries: DiffEntry[], error?: string }
```

---

## 10. Keyboard Shortcuts

XML workspace should mirror JSON workspace shortcuts:

| Shortcut | Action |
|---|---|
| `Ctrl+Enter` | Format XML |
| `Ctrl+Shift+M` | Minify XML |
| `Ctrl+1..N` | Switch to Nth XML workspace tab |
| `Ctrl+D` | Download output |
| `Ctrl+Shift+C` | Copy output |

---

## 11. Implementation Order (Priority)

### Phase 1 — Foundation (unblocks everything)
1. `xml.store.ts` — reactive store (parse + debounce + per-tool dispatch)
2. `computeXMLStats` — engine function for status bar data
3. `xmlSamples.ts` — sample data file

### Phase 2 — Input/Output panels
4. `XmlInputPanel.svelte` — workspace tabs, Monaco, drag-drop, URL load, meta bar
5. `XmlOutputPanel.svelte` — syntax highlight, copy, download, wrap, meta
6. Wire in `+page.svelte` — replace generic panels with new ones for `category === 'xml'`

### Phase 3 — Validator
7. `XmlValidatorPanel.svelte` — Monaco + error list + markers + format/fix actions
8. Plain-language error explanations in `parseXML`

### Phase 4 — New tools
9. `xml-minifier` registry entry + minification stats in output panel
10. XPath engine (`xpathEngine.ts`) + `XmlQueryOutputPanel.svelte` + registry entry
11. SEO finalization: `xml/to-yaml`, `xml/to-csv`, `xml/minifier`, `xml/xpath`

### Phase 5 — Advanced
12. XML Diff engine + panel + `diff/xml` registry entry
13. `repairXML` — best-effort auto-fix
14. XSD schema validation mode in validator (if browser support is sufficient)

---

## 12. Unit Tests to Write

```
tests/unit/xml-engine.test.ts          (already exists — extend with new functions)
tests/unit/xml-xpath.test.ts           (new: xpathQuery valid/invalid/empty)
tests/unit/xml-diff.test.ts            (new: identical/added/removed/modified)
tests/unit/xml-stats.test.ts           (new: computeXMLStats element/attr/depth count)
```

---

## 13. XML-Specific Considerations

### XPath vs JSONPath/JMESPath
- XPath 1.0 is **built into all browsers** via `document.evaluate` — zero bundle cost
- XPath 2.0/3.0 would need a library (`fontoxpath`) — out of scope for now
- Scope: XPath 1.0 node selection, attribute access, predicate filtering

### `fast-xml-parser` limitations
- Does not produce a W3C DOM — attributes, CDATA, processing instructions need careful handling
- For the validator: `XMLValidator.validate()` gives line/col for the first error only (not multiple errors like JSON)
- For tree view: use `preserveOrder: true` to maintain document order

### SVG as XML
- SVG files are valid XML — the formatter/validator should work on `.svg` files
- Drag-drop should accept `.svg` files
- Sample data should include an SVG example

### Namespaces
- XML namespaces are common (SOAP, RSS, Atom, Maven POM)
- `fast-xml-parser` handles namespace prefixes but does not resolve them
- XPath queries need to handle namespace prefixes explicitly
- Mention namespace behavior in validator and XPath FAQ

### Large XML files (>500KB)
- `formatXML` is synchronous and can block the main thread for large files
- Add `shouldUseWorker` check (>500KB) and route through `workers/xml.worker.ts`
- Worker not in scope for Phase 1 but should be designed for from the start

---

## 14. Summary Checklist

```
□ xml.store.ts — reactive store
□ computeXMLStats engine function
□ xmlSamples.ts
□ XmlInputPanel.svelte
□ XmlOutputPanel.svelte
□ +page.svelte XML workspace branch
□ XmlValidatorPanel.svelte
□ Plain-language XML error messages
□ xml-minifier registry entry
□ xml-minifier byte savings in output
□ XPath engine (browser-native DOMParser + document.evaluate)
□ XmlQueryOutputPanel.svelte
□ xml/xpath registry entry
□ SEO: xml/to-yaml (finalize)
□ SEO: xml/to-csv (finalize)
□ SEO: xml/minifier (write)
□ SEO: xml/xpath (write)
□ xml.engine.ts strict TypeScript (remove any)
□ Keyboard shortcuts for XML workspace
□ Unit tests: xml-xpath, xml-diff, xml-stats
□ XML Diff engine + panel + registry (Phase 5)
□ repairXML (Phase 5)
```
