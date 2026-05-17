<!-- Source-of-truth document for Beauty Hub. Use before changing page structure, rooms, routing, mobile, bottom dock, or Telegram integration. -->

# Beauty Hub SITE ARCHITECTURE LOCK

Version: v1.1 / Codex-ready MVP Lock
Date: 2026-05-17
Status: active source of truth
Owner: KIRA / project lead

## 0. Purpose

This file fixes the architecture for Beauty Hub: page geometry, scroll, motion, route rooms, cards, buttons, bottom dock, Telegram link, mobile layout. Visual lock defines style; this file defines movement, routing, interaction, and conversion flow.

The main task: make the site a premium route system, not a one-page landing.

## 1. Main principle

Beauty Hub is a route system:
1. Homepage — entrance & explanation;
2. Route Hall — selection of routes;
3. Route Rooms — four rooms: Technique, Client Flow, Independence, Mentorship;
4. Telegram / Product Access — final conversion step.

## 2. MVP / Stage priorities

```
MVP (current repository): Hero, Route Hall, 4 Route Rooms, Telegram deep link, basic analytics.
Stage 2 (after 100 users): Questionnaire, resume path, product pages, mobile bottom dock.
Stage 3 (after validation): CRM handoff, checkout flow, returning user logic, full analytics events.
```

## 3. Navigation & scroll
- Smooth scroll with respect for reduced motion
- Route rooms open with fade + translateY 16–32px
- Hover cards: subtle edge light, no bounce, no glitch
- Bottom dock (mobile) provides access to Route Hall / Rooms / Telegram

## 4. Delta from current repository

```
- Remove horizontal carousel → use vertical route cards
- Add React Router for route rooms (if Stage 2 requires SPA behavior)
- Replace general Telegram URL → use deep links per route
- Add bottom dock on mobile
- Remove carousel from ProductSystemSection
```

## 5. Telegram bot (future)
```
Status: define MVP bot
Stack: Telegram Bot API
Payload: 4 handlers (technique, client_flow, independence, mentorship)
Welcome message with relevant content
```

## 6. Questionnaire (Stage 2)
```
Screen 1: "What currently blocks growth?" → 4 options
Screen 2: follow-up per selected option → 2-3 options
Screen 3: result + recommended route + 2 CTAs
```

## 7. Privacy / PII (Stage 2)
```
Checkbox for personal data consent (152-FZ) if collecting name/contact
Link to Privacy Policy included
```

## 8. Implementation stack
```
- React (Vite) / React Router v6 → route rooms
- localStorage → resume path, quiz result
- Yandex.Metrica / PostHog → analytics events
- Telegram Bot API → payload handling
- Airtable / Google Sheets → MVP lead capture
```

## 9. Estimated effort
```
MVP (Hero + Rooms + Telegram deep links): 3–4 weeks with Codex assistance
Stage 2 (Questionnaire + bottom dock + resume): +2–3 weeks
Stage 3 (CRM + checkout + full analytics): +3–4 weeks
```

## 10. Acceptance checklist

```
- Hero opens clear in 5s
- Route cards vertical on mobile
- Bottom dock accessible
- Telegram CTA present
- No dashboard, terminal, concrete elements
- Rooms open with fade + translateY
- Grain / orange rim light / graphite layers implemented
- MVP implemented only (Stage 2/3 not yet required)
```

## 11. Notes
- Document versioned (v1.1)
- Owner / decision maker: KIRA
- Use structured tables/checklists for Codex when possible
- Conflicts: ask before implementing
