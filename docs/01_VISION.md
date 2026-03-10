# Vision

fmtly is an open-source, browser-based developer utility platform. It is the single destination for every tool a developer reaches for during their daily work — from formatting JSON to decoding JWTs, converting colors, testing regex, generating UUIDs, parsing cron expressions, and hundreds more.

Everything runs in the browser. Nothing is sent to a server. No login. No cost.

---

## The Problem

A developer's daily workflow involves dozens of small, repetitive utility tasks. Format this JSON. Decode this JWT. Convert this timestamp. Test this regex. Generate a UUID. Check what this HTTP status code means. Convert this color to HSL.

Today, each of these tasks sends the developer to a different website. Those websites are slow, cluttered with advertisements, broken on mobile, and built without care. The developer tolerates them because there is no better alternative — not because they are good.

The result is a fragmented, frustrating experience that costs developers real time every single day.

---

## The Solution

fmtly unifies every developer utility into one fast, well-designed, keyboard-first platform.

Not a loose collection of unrelated tools thrown onto the same domain — a coherent platform with a consistent architecture, a shared design system, and a unified experience. Every tool feels like it belongs to the same product because it does.

The developer bookmarks fmtly once. They never need to find a different site again.

---

## Core Principles

### Everything runs in the browser
No user data ever touches a server. Sensitive API responses, private tokens, internal configurations — all processed locally. This is not a marketing claim. It is an architectural guarantee enforced by the absence of any backend.

### Performance is the product
Every tool loads in under one second. This is enforced by CI — Lighthouse Performance ≥ 95 on mobile is a hard requirement that blocks deployment. The platform is faster than any individual tool site a developer currently uses.

### No friction, anywhere
No login. No email. No paywalls. No cookie consent banners. No modals on first visit. Arrive, use the tool, leave. That is the entire experience.

### Keyboard-first
Every tool is fully operable via keyboard. Power users should never need the mouse for routine tasks.

### One platform, infinite tools
Adding a new tool takes hours, not weeks. The Tool Registry architecture means every new tool automatically gets a generated page, SEO metadata, routing, and sitemap entry. The platform compounds — every new tool brings new users who discover other tools.

### Open source, always
The core platform is MIT licensed. Every tool, every engine, every design decision is in this repository. The community can contribute tools, report bugs, improve content, and audit the privacy guarantees.

---

## Tool Categories

fmtly covers every utility a developer needs:

| Category | Examples |
|---|---|
| **Data & Formats** | JSON, XML, YAML, CSV, TOML formatter / validator / converter |
| **Text & Strings** | Case converter, diff, regex tester, Lorem ipsum, slug generator |
| **Numbers & Math** | Base converter, byte size, Unix timestamp, number formatter |
| **Encoding & Escaping** | Base64, URL encode, HTML escape, JWT decoder |
| **Colors** | HEX ↔ RGB ↔ HSL ↔ HSV converter, color picker, palette generator |
| **Crypto & Security** | Hash generator (MD5, SHA-256, SHA-512), UUID generator, password generator, HMAC |
| **Web & Network** | HTTP status codes, CORS headers, User agent parser, cron parser |
| **Code & Dev** | Code diff, SQL formatter, GraphQL formatter, cURL converter |
| **Generators** | Fake data, JSON Schema, TypeScript interfaces, Lorem ipsum |
| **Images** | Image to Base64, Base64 to image, SVG optimizer, EXIF reader |

---

## Who Uses fmtly

Every software developer. The platform is not targeted at a specific stack, language, or seniority level. A junior developer formatting their first API response and a staff engineer debugging a production incident both reach for the same tools.

| Role | Primary Use Cases |
|---|---|
| Backend Developer | Format API payloads, decode JWTs, validate JSON Schema |
| Frontend Developer | Convert colors, generate TypeScript interfaces, test regex |
| DevOps / SRE | Parse YAML configs, decode timestamps, validate cron expressions |
| Data Engineer | Convert CSV ↔ JSON ↔ XML, clean and transform data |
| Security Engineer | Generate hashes, test HMAC, inspect JWTs |
| Full-Stack Developer | All of the above |
| Student / Beginner | Understand data formats, convert between types, generate test data |

---

## What fmtly Is Not

**fmtly is not a code editor.** It processes and transforms data — it is not a replacement for an IDE or a general-purpose editor.

**fmtly is not a SaaS product.** There is no account system, no subscription, no cloud storage in the core platform. The base is free and open source, always.

**fmtly is not finished.** The tool catalog grows continuously. The architecture is designed so that adding a new tool is a small, contained task. If a tool is missing, it can be added.

---

## Project Identity

| | |
|---|---|
| **Name** | fmtly |
| **Domain** | fmtly.dev |
| **Tagline** | Every tool a developer needs. |
| **Secondary tagline** | One place. No login. No server. Instant. |
| **License** | MIT |
| **Status** | Active development |