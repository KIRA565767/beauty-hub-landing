# CODEX TASK — MVP Visual Refactor Pass

Status: ready for Codex
Scope: current MVP only
Repository: `KIRA565767/beauty-hub-landing`
Stack: Vite + React + Tailwind + Framer Motion

## 0. Read first

Before changing code, read:

1. `docs/VISUAL_LOCK.md`
2. `docs/SITE_ARCHITECTURE_LOCK.md`
3. `src/beauty-hub/content/landing.js`

These files are the source of truth. Do not use older prompts or older visual ideas.

## 1. Goal

Bring the current implementation closer to the approved MVP direction:

**Dark Polished Beauty Editorial / private beauty route archive**.

This is not a full product rebuild. This is a focused MVP visual pass.

## 2. Do not do

Do not implement Stage 2 or Stage 3 features:

- no Telegram bot payload handling;
- no questionnaire data capture;
- no resume path;
- no checkout flow;
- no CRM handoff;
- no full analytics system;
- no migration to Next.js;
- no migration to React Router unless absolutely necessary for this pass;
- no redesign from scratch;
- no new large dependency;
- no fake metrics;
- no fake testimonials;
- no generated person pretending to be Julia.

## 3. Current conflicts to fix

### 3.1 HomePage is incomplete

Current `HomePage.jsx` only renders:

- `HeroSection`
- `MarketRealitySection`
- `ProjectHubSection`
- `FinalConversionSection`

MVP homepage must become:

- `HeroSection`
- `MarketRealitySection`
- `ProductSystemSection` or renamed `RouteHallPreviewSection`
- `AuthoritySection` or new `JuliaAuthoritySection`
- `TelegramTerminalSection` or renamed `TelegramAccessSection`
- `FinalConversionSection`

Reuse existing `AuthoritySection` and `TelegramTerminalSection` if possible. Do not duplicate content unnecessarily.

### 3.2 Hero looks too dashboard / terminal

Current `HeroSection.jsx` uses:

- grid background;
- index panel;
- route finder panel;
- dashboard-like route list;
- class name `hero-hard-light`.

Replace this with:

- dark editorial entrance;
- abstract graphite object / private archive pass / sculptural slab on the right;
- orange rim light only on edge;
- short route markers;
- no dashboard panel;
- no terminal/HUD feel;
- no building/concrete image.

### 3.3 Product route cards are too detailed

Current `ProductCoverCard.jsx` shows signal and first step on homepage/cards.

For MVP homepage cards, reduce to private access pass format:

```text
01
TECHNIQUE

Техника / материалы / скорость / чистота

ОТКРЫТЬ МАРШРУТ →
```

Details like `signal`, `first step`, `breakdown` belong in Route Rooms, not in homepage route cards.

### 3.4 Mobile route cards must be vertical

Current `ProductSystemSection.jsx` uses horizontal snap / carousel behavior:

- `product-snap`
- `overflow-x-auto`
- `snap-x`
- `flex`
- `min-w-[82vw]`

Remove this for primary route cards. On mobile, route cards must be vertical full-width cards.

### 3.5 Terminal naming and concrete naming must be removed from visible UI layer

Current files/classes include:

- `TerminalPanel`
- `TelegramTerminalSection`
- `editorial-concrete`
- `hero-hard-light`
- `shadow.terminal`

For this MVP pass:

- Replace or de-emphasize terminal/dashboard presentation.
- Rename CSS classes where safe:
  - `editorial-concrete` -> `editorial-graphite`
  - `hero-hard-light` -> `private-archive-hero`
- If component renaming is too risky, at least change its visual output so it no longer looks terminal/dashboard.

## 4. Required visual implementation

Use parameters from `docs/VISUAL_LOCK.md`.

Add or reuse CSS utilities for:

- graphite radial surface;
- editorial grain;
- orange rim light;
- aged copper line;
- ivory material insert.

Hard limits:

- grain opacity: `0.025` to `0.05`;
- orange light as edge/rim only, not large fill;
- no heavy glow;
- no neon;
- no grid if it feels technological.

## 5. Files likely to change

Expected changed files:

- `src/beauty-hub/components/pages/HomePage.jsx`
- `src/beauty-hub/components/sections/HeroSection.jsx`
- `src/beauty-hub/components/sections/ProductSystemSection.jsx`
- `src/beauty-hub/components/sections/ProductCoverCard.jsx`
- `src/beauty-hub/components/sections/AuthoritySection.jsx`
- `src/beauty-hub/components/sections/TelegramTerminalSection.jsx`
- `src/beauty-hub/components/ui/TerminalPanel.jsx` or replace with a route/access panel
- `src/styles/index.css`
- `tailwind.config.js` only if needed
- `src/beauty-hub/content/landing.js` only for minimal wording changes

Do not touch unrelated files.

## 6. Acceptance checklist

The pass is accepted only if:

- build passes: `npm run build`;
- homepage order includes Hero / Market Reality / Routes / Julia / Telegram / Final CTA;
- no primary mobile route carousel remains;
- route cards are shorter and feel like private access passes;
- Hero no longer looks like a dashboard, terminal, SaaS panel or HUD;
- `editorial-concrete` and `hero-hard-light` are removed or replaced where used;
- orange appears as rim/edge light, not as a cheap flat fill everywhere;
- grain is subtle and only on dark editorial surfaces;
- Julia block works without real photos;
- Telegram block feels like private access, not a social media promo;
- existing hash routing remains working:
  - `#/`
  - `#/routes`
  - `#/routes/technique`
  - `#/routes/client-flow`
  - `#/routes/independence`
  - `#/routes/mentorship`
  - `#/telegram`
  - `#/julia`
  - `#/start`

## 7. Output format for Codex

Return:

1. Summary of what changed.
2. Changed files only.
3. Notes on what was intentionally not done.
4. Build result.
5. Remaining risks / next pass.

## 8. Important restraint

Do not solve future product architecture now. This pass exists to make the current MVP visually aligned and usable before traffic.
