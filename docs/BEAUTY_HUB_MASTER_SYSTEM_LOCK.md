<!-- Source-of-truth document for Beauty Hub project architecture. Use before changing page structure, route rooms, product logic, Telegram path, Start path, or site scope. -->

# Beauty Hub MASTER SYSTEM LOCK

Version: v1.0 / Project System Lock
Date: 2026-05-18
Status: active source of truth
Owner: KIRA / project lead

## 0. Purpose

This document fixes the full product-site architecture of Beauty Hub.

Beauty Hub is not a one-page landing, not a simple expert website, not a course page, not a Telegram funnel page, and not a generic beauty template.

Beauty Hub is a main project portal with a route system inside it.

The main site introduces the system, Julia, product logic, selected proof, and four major growth directions. Each direction leads into a separate room / micro-site where the specific topic is explained, proven, and converted into the correct next step.

If implementation conflicts with this document, stop and ask before changing architecture.

## 1. Core definition

Beauty Hub is the main project website for Julia Kueneberg.

Its role is to show that Julia does not have a random blog or a single isolated course. She has a structured system for beauty masters.

The system has four main routes:

1. Technique
2. Client Flow
3. Independence
4. Mentorship

Each route is a separate room / micro-site inside the Beauty Hub system.

The homepage sells the system.
The rooms sell the specific route.
Telegram continues the route.
Start helps a user choose the correct route.
Julia page proves why Julia can lead the system.

## 2. Final site map

```text
Beauty Hub
├── Homepage / Entry Portal
├── Route Hall / Route Selection
├── Room 01 / Technique
├── Room 02 / Client Flow
├── Room 03 / Independence
├── Room 04 / Mentorship
├── Julia / Authority & Method
├── Telegram / Live Continuation Layer
└── Start / Diagnostic Entry
```

Current routing may use hash routes. Do not replace routing unless explicitly requested.

Current URLs:

```text
#/
#/routes
#/routes/technique
#/routes/client-flow
#/routes/independence
#/routes/mentorship
#/julia
#/telegram
#/start
```

## 3. Strategic role of each page

### 3.1 Homepage / Entry Portal

The homepage is the project portal.

It must explain Beauty Hub as a system, not try to fully sell every product on one page.

Homepage responsibilities:

1. Explain what Beauty Hub is.
2. Show Julia's position and authority.
3. Show why beauty masters get stuck.
4. Present four main routes as doors.
5. Show product system logic.
6. Show selected cases / proof.
7. Lead users into route rooms.
8. Lead users into Telegram as continuation.

Homepage must not become an endless one-page sales scroll.

Correct homepage logic:

```text
Hero
Market Reality
4 Route Preview / Product System
Selected Cases Preview
Julia Authority
Telegram Access
Final CTA
```

The homepage is allowed to contain cases and product references, but only as previews. Full explanation and route-specific selling belongs inside the rooms.

### 3.2 Route Hall

Route Hall is not a duplicate of the homepage.

Route Hall is a selection space. It helps the user decide where growth currently breaks.

Route Hall responsibilities:

1. Present all four routes with equal structural status.
2. Explain who each route is for.
3. Identify the main symptom for each route.
4. Send the user into the correct room.
5. Provide a Start path for users who do not know where to begin.
6. Provide Telegram access as a secondary continuation path.

Route Hall should feel like a private archive hall with four doors, not a card grid copied from SaaS dashboards.

### 3.3 Route Rooms / Micro-sites

Each route room is a separate micro-site.

A room must not feel like a detail page with a headline and several cards.

Each room must have its own:

- hero;
- problem frame;
- symptom map;
- breakdown logic;
- first fix;
- product/material reveal;
- related cases;
- related rooms;
- room-specific Telegram bridge;
- room-specific CTA.

The room structure can be shared, but the atmosphere and logic must be specific to the route.

### 3.4 Julia page

Julia page is not a generic About page.

Its role is to prove why Julia can lead the whole system.

Julia page must show:

1. 14 years of practice.
2. Real hands-on technique expertise.
3. Understanding of client base building.
4. Understanding of independence / salon exit / pricing / schedule.
5. Ability to diagnose route-level problems.
6. Why the system is not theoretical.
7. Links into the four rooms.
8. Telegram / mentorship continuation.

Julia page strengthens trust in all rooms.

### 3.5 Telegram page

Telegram is not a social channel promo page.

Telegram is the live continuation layer of Beauty Hub.

Telegram page must explain:

1. What happens inside Telegram.
2. How routes continue there.
3. What materials / breakdowns / first steps appear there.
4. Why Telegram is the correct next step after reading a room.
5. How a user who is unsure can start.

Telegram is not sold as "subscribe to channel". It is sold as "continue the route".

### 3.6 Start page

Start is a diagnostic entry.

Current stage: Start-lite.

Start-lite should help the user choose a route through symptoms.

Example mapping:

```text
Lifting / unstable quality / slow work → Technique
No clients / weak profile / messages do not become bookings → Client Flow
Salon dependence / fear of own price / desire to leave employment → Independence
Everything is mixed / unclear where the real problem is → Mentorship
```

Full quiz, localStorage, resume path, Telegram payload and analytics are future stages. Do not implement them unless explicitly requested.

## 4. The four rooms

## 4.1 Room 01 — Technique

### Focus

Technique covers:

- lifting;
- speed;
- materials;
- bases;
- gels / hard materials;
- architecture;
- cleanliness;
- tool and workplace logic;
- client retention through quality.

### Core thesis

If technique is unstable, marketing only reveals the weak point faster.

### User situation

This room is for the master who:

- sees lifting after several days;
- works too slowly;
- does not understand why materials behave unpredictably;
- cannot stabilize quality;
- is afraid to raise price because the result is not consistent;
- loses repeat bookings because the service is not reliable enough.

### Content source

The old Kirova_Site archive can be used as source material for this room. However, it must pass Legacy Sanitizer rules:

Allowed from legacy:

- raw text meaning;
- module topics;
- real case logic;
- media slots;
- lesson structure ideas.

Forbidden from legacy:

- old HTML;
- old CSS;
- old visual layout;
- old fonts;
- old aggressive marketing tone;
- unverified claims;
- hype / toxic wording.

### Suggested internal structure

```text
Technique Room
├── Room Hero
├── Why technique breaks growth
├── Problem Signals
├── Materials / bases / liquids / lamp logic
├── Lifting / pre-burns / architecture
├── Speed / timing / combi
├── Hard materials / filing / correction
├── First technical fix
├── Course / materials / Telegram continuation
├── Related cases
└── Related rooms
```

### Primary CTA

```text
ОТКРЫТЬ КУРС ПО ТЕХНИКЕ →
```

### Telegram bridge CTA

```text
ПРОДОЛЖИТЬ МАРШРУТ ПО ТЕХНИКЕ →
```

## 4.2 Room 02 — Client Flow

### Focus

Client Flow covers:

- Avito;
- profile packaging;
- photos;
- offer;
- pricing presentation;
- client messages;
- booking conversion;
- objections;
- reviews;
- path from view to booking.

### Core thesis

Client flow does not break only in advertising. It breaks in the chain: view → trust → message → conversation → booking.

### User situation

This room is for the master who:

- gets profile views but not enough messages;
- gets messages but not enough bookings;
- sees clients disappear after price or questions;
- does not understand what photos should communicate;
- has no clear offer;
- relies on random demand instead of a system.

### Suggested internal structure

```text
Client Flow Room
├── Room Hero
├── Where the client path breaks
├── Problem Signals
├── Profile / photo / offer
├── Messages / objections / booking
├── First client-path fix
├── Related cases
├── Telegram continuation
└── Related rooms
```

### Primary CTA

```text
РАЗОБРАТЬ КЛИЕНТСКИЙ ПОТОК В TELEGRAM →
```

### Telegram bridge CTA

```text
РАЗОБРАТЬ ПУТЬ КЛИЕНТА ДО ЗАПИСИ →
```

## 4.3 Room 03 — Independence

### Focus

Independence covers:

- leaving employment;
- salon dependence;
- personal price;
- schedule;
- stable booking;
- own cabinet / own system;
- financial readiness;
- safe transition plan.

### Core thesis

Leaving employment is not motivation. It is calculation: bookings, price, schedule, reserve, route.

### User situation

This room is for the master who:

- wants independence but does not know when it is safe;
- depends on salon traffic;
- is afraid to name a higher price;
- does not know how many clients are needed;
- cannot calculate schedule and income;
- wants own cabinet but has no transition plan.

### Visual metaphor

Dense dark left side → more open, airy, controlled plan on the right.

Ivory can be used here as a planning surface, but it must remain rare and controlled.

### Suggested internal structure

```text
Independence Room
├── Room Hero
├── Why masters stay stuck in salon dependence
├── Problem Signals
├── Price / schedule / booking / reserve
├── Safe transition plan
├── First independence fix
├── Related cases
├── Telegram continuation
└── Related rooms
```

### Primary CTA

```text
СОБРАТЬ ПЛАН ВЫХОДА →
```

### Telegram bridge CTA

```text
ПОЛУЧИТЬ ПЕРВЫЙ ПЛАН ВЫХОДА →
```

## 4.4 Room 04 — Mentorship

### Focus

Mentorship covers:

- unclear problem;
- mixed growth blocks;
- personal route correction;
- high-touch review;
- application-first entry;
- strategic breakdown;
- individual support.

### Core thesis

When the problem is not one thing, another course does not solve it. The master needs a breakdown of the real node and an action route.

### User situation

This room is for the master who:

- does not know whether the problem is technique, clients, price or confidence;
- tried separate advice but did not build a system;
- needs external diagnosis;
- wants an individual plan;
- is considering higher-ticket mentorship or personal review.

### Visual metaphor

Private analysis room. Quiet. Expensive. Minimal. No hype. No urgency timers. No fake scarcity.

### Suggested internal structure

```text
Mentorship Room
├── Room Hero
├── Who needs personal review
├── Problem Signals
├── What Julia looks at
├── How the review works
├── What the master receives
├── Application-first block
├── Related cases / scenarios
├── Telegram continuation
└── Related rooms
```

### Primary CTA

```text
ЗАПРОСИТЬ ЛИЧНЫЙ РАЗБОР →
```

### Telegram bridge CTA

```text
ПОНЯТЬ, С КАКОГО УЗЛА НАЧАТЬ →
```

## 5. Related rooms logic

Every room must prevent dead ends.

A user should always have a next route if the current room is not the exact problem.

### Technique related rooms

```text
Client Flow — if quality is stable but bookings are weak.
Mentorship — if it is unclear whether the problem is technique or system.
```

### Client Flow related rooms

```text
Technique — if clients do not return because of quality.
Independence — if flow exists but the master is afraid to leave employment.
```

### Independence related rooms

```text
Client Flow — if there is no stable booking yet.
Mentorship — if the transition plan depends on several personal variables.
```

### Mentorship related rooms

```text
Technique — if the main node appears to be service quality.
Client Flow — if the main node appears to be demand and booking.
Independence — if the main node appears to be transition and price.
```

## 6. Product logic

Beauty Hub must show that Julia has a product system, not a single product.

Product types:

1. Technique course / materials.
2. Client flow breakdown / Telegram materials.
3. Independence planning / route materials.
4. Personal review / mentorship.

### Technique course

Selling model: soft product reveal.

The Technique room can reveal structure, modules and value before showing the offer. No aggressive selling. No false urgency. No fake discount countdown.

### Client Flow

Selling model: route continuation / Telegram-first.

The Client Flow room should lead to Telegram or a breakdown path because this topic often requires seeing the user's profile, photos, offer or messages.

### Independence

Selling model: plan-first.

The Independence room should make the user understand that leaving employment needs a route and not emotional motivation.

### Mentorship

Selling model: application-first.

High-ticket personal work should not be sold through a simple buy button. It should be framed as request / application / diagnostic review.

## 7. Cases logic

Cases are not testimonials.

Cases must be framed as archive extracts / case notes.

Recommended structure:

```text
CASE 01 / ROUTE
Starting blind zone
Surgical correction
System result
```

Rules:

- Use only real data.
- Do not invent metrics.
- Do not use fake names.
- Do not use hype language.
- Do not use “before/after” manipulation without context.
- Full case details belong inside relevant rooms.
- Homepage should show only selected case previews.

## 8. Telegram logic

Telegram is not a channel promo.

Telegram is the route continuation layer.

Correct formula:

```text
Room diagnoses the problem.
Telegram gives the next step.
```

Wrong formula:

```text
Subscribe to the channel.
```

Every room must have a context-specific Telegram bridge.

### Current stage

Current stage uses simple Telegram links and copy logic.

Bot payloads, localStorage and personalized Telegram scripts are future stages.

### Future stage

Future Telegram payload examples:

```text
technique
client_flow
independence
mentorship
quiz_technique
quiz_client_flow
quiz_independence
quiz_mentorship
product_technique
product_mentorship
```

Do not implement bot payloads now unless explicitly requested.

## 9. Content voice

Beauty Hub voice:

- quiet authority;
- surgical precision;
- practical clarity;
- no motivational hysteria;
- no info-business urgency;
- no fake scarcity;
- no toxic shame;
- no “girls / beauties” tone.

The site must speak to masters as professionals.

Main principle:

```text
The site does not persuade or motivate.
It diagnoses and shows the route.
```

## 10. Legacy sanitizer

The old Kirova_Site archive can be used only as content source.

Allowed:

- raw text meaning;
- course module topics;
- real cases;
- media references;
- structure inspiration.

Forbidden:

- old HTML;
- old CSS;
- old class names;
- old layouts;
- old fonts;
- old aggressive copy;
- unverified claims;
- old visual identity.

All legacy content must be rewritten into Beauty Hub tone and rendered through the current Beauty Hub design system.

## 11. Stage plan

### Stage 4A — Documentation lock

Create and maintain:

```text
docs/BEAUTY_HUB_MASTER_SYSTEM_LOCK.md
docs/CONTENT_VOICE_LOCK.md
docs/CONVERSION_BRIDGE_LOCK.md
```

### Stage 4B — Technique Room as reference micro-site

Build Technique first because it has the richest legacy content and the highest risk of legacy contamination.

Success criterion:

```text
#/routes/technique feels like a complete premium micro-site, not a detail page.
```

### Stage 4C — Client Flow Room

Adapt the room template to client-path logic.

### Stage 4D — Independence Room

Adapt the room template to transition / plan logic.

### Stage 4E — Mentorship Room

Adapt the room template to private review / application-first logic.

### Stage 4F — Route Hall binding

Make Route Hall work as the central selection interface.

### Stage 4G — Mobile QA

Check mobile widths:

```text
390px
430px
768px
```

### Stage 5 — Start-lite

Build a light route helper. Do not build full quiz yet.

### Stage 6 — Telegram structure

Prepare Telegram channel/page structure outside code:

- name;
- description;
- pinned post;
- four route navigation;
- first material per route.

### Stage 7 — Future automation

Only after first real user signal:

- quiz;
- bot payload;
- localStorage resume path;
- analytics;
- application forms;
- product pages / checkout.

## 12. Do not do now

Do not implement now:

- Telegram bot;
- quiz;
- localStorage resume path;
- analytics;
- checkout;
- CRM;
- React Router migration;
- Next.js migration;
- new backend;
- fake metrics;
- fake testimonials;
- generated Julia portrait;
- legacy HTML/CSS import.

## 13. Acceptance criteria

The system is aligned when:

```text
Homepage explains the system, not every product in depth.
Route Hall helps choose the correct route.
Each route room works as a micro-site.
Every room has a problem, diagnosis, first fix and next step.
Telegram is framed as continuation, not subscription.
Julia page proves authority and method.
Start helps users who are unsure.
No page is a dead end.
No old legacy visual or tone contaminates the system.
No dashboard / terminal / SaaS / concrete / neon aesthetics return.
```
