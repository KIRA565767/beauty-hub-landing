<!-- Source-of-truth document for Beauty Hub. Use this before changing UI, layout, colors, motion, images, cards, or hero. -->

# Beauty Hub Visual Lock

Version: v1.1 / Codex-ready MVP Lock
Date: 2026-05-17
Status: active source of truth
Owner: KIRA / project lead

## 0. Purpose

This file defines the final visual direction for Beauty Hub. It overrides older prompts, older concrete/brutalist directions, terminal/dashboard interpretations, SaaS-like UI, cyber/HUD ideas, neon experiments, fake metrics, generic beauty templates, and random 3D.

If implementation conflicts with this file, stop and ask before changing the design direction.

## 1. Primary approved direction

Dark Polished Beauty Editorial is the main visual direction.

Beauty Hub must feel like a strict dark editorial archive / private beauty club for beauty masters. It must not feel like a technological dashboard, terminal, SaaS product, crypto interface, HUD, cyber system, or generic beauty landing.

The product is a route system, but the visual language must express system through editorial hierarchy, rooms, cards, navigation, spacing and conversion paths — not through technical UI clichés.

## 2. Core feeling

- dark polished editorial archive;
- private beauty club;
- matte graphite;
- polished grey luxury;
- dusty white / ivory material surfaces;
- aged copper details;
- rare bitter orange as light, not paint;
- monumental typography;
- quiet spacing;
- sculptural cards;
- rooms as separate editorial halls;
- Telegram as closed access into the living project.

Mood reference: Rick Owens-adjacent dark asceticism, monolithic forms, raw luxury, anti-gloss, sculptural restraint. Do not copy fashion branding and do not turn the site gothic.

## 3. Absolute visual bans

Do not use or reintroduce:

- technological dashboard aesthetics;
- SaaS UI;
- crypto / fintech terminal aesthetics;
- HUD / cyber interface;
- terminal UI as the main look;
- neon;
- cyberpunk;
- scanlines, glitch, hacking/loading UI;
- concrete buildings;
- grey concrete wall backgrounds;
- brutalist building placeholders;
- architecture photo backgrounds;
- graffiti / street art;
- pink salon beauty templates;
- glossy infobusiness luxury;
- fake metrics;
- fake testimonials;
- random 3D;
- glow/blob gradients as decorative filler.

Do not use concrete as the main visual idea. If texture is needed, use matte graphite, dark mineral surface, polished dark stone, dusty editorial grain, ivory paper or marble-like warmth. No grey concrete wall, building, facade, tunnel or architecture placeholder.

## 4. Visual principle

Orange is light, not paint.

Use warm controlled orange as:

- rim light on a dark object;
- reflection on matte graphite / metal / ivory;
- thin route line;
- soft glow from depth;
- directional studio edge light;
- subtle hover light on a card.

Do not use orange as large flat UI fill everywhere. Bright orange buttons alone look cheap. Orange should guide attention through light, reflection and edge accents.

## 5. CSS / SVG implementation parameters

Use these values as defaults. Adjust only if visual QA requires it.

### Matte graphite surface

```css
background:
  radial-gradient(ellipse at 62% 38%, rgba(34, 34, 36, 0.92) 0%, rgba(22, 22, 24, 0.98) 46%, rgba(12, 12, 13, 1) 100%);
```

### Orange rim light

```css
box-shadow:
  inset -2px 0 16px rgba(200, 75, 49, 0.24),
  0 0 34px rgba(200, 75, 49, 0.08);
```

Alternative edge gradient:

```css
background-image:
  linear-gradient(90deg, rgba(200, 75, 49, 0.28), transparent 18%),
  radial-gradient(ellipse at 80% 50%, rgba(200, 75, 49, 0.14), transparent 48%);
```

### Aged copper line

```css
border-color: rgba(184, 115, 51, 0.42);
```

### Editorial grain

Use SVG turbulence or CSS pseudo-layer. Grain must be subtle.

```svg
<filter id="editorialGrain">
  <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
  <feColorMatrix type="saturate" values="0" />
</filter>
```

```css
.editorial-grain::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.025;
  mix-blend-mode: soft-light;
}
```

Hard limit: opacity 0.025-0.05. More than this becomes dirt, concrete or noise.

### Ivory material

```css
background:
  linear-gradient(135deg, rgba(234,234,234,1), rgba(221,216,205,0.92));
color: #161618;
```

Ivory is material, not normal white background.

## 6. Color system

Use only approved palette:

- Deep Graphite: `#161618`
- Industrial Graphite: `#222224`
- Dusty White / Ivory: `#EAEAEA`
- Bitter Orange: `#C84B31`
- Aged Copper: `#B87333`
- Mineral Grey: `#8E8E93`

Recommended proportion:

- 70-80% graphite / dark mineral surfaces;
- 10-15% ivory material surfaces;
- 3-7% aged copper lines/details;
- 1-3% bitter orange light accents.

Ivory limit for MVP homepage: use it in no more than 2 main moments:

1. one Product / Route Hall material insert;
2. one Julia / Telegram / final conversion editorial insert.

If ivory appears in every second block, the page becomes zebra-striped and loses dark editorial control.

## 7. Hero direction

Hero must be the strongest visual scene and must remain clear in 5 seconds.

Hero should feel like a dark fashion-editorial cover or entrance into a private club.

Hero visual:

- dark graphite space;
- one large abstract sculptural form, not a building;
- matte black stone / graphite slab / dense dark fabric / private route object / archive plate feeling;
- orange rim light along one edge;
- very subtle mineral grain;
- large typography with air;
- no tech grid if it makes the scene technological.

Hero must not use:

- building photo;
- concrete facade;
- urban architecture;
- dashboard panel;
- terminal screen;
- HUD;
- neon;
- orange glow blob;
- salon photo;
- random manicure photo as main background.

### Technical scene description

Desktop hero object:

- position: right side, 42-48% width;
- object height: 520-680px desktop, 260-360px mobile;
- shape: rotated editorial card/slab/pass, not device screen;
- light source: right or top-right edge;
- orange edge visible only on 1-2 sides;
- center remains graphite/dark;
- object can contain route labels, but must not look like dashboard.

Mobile hero:

- label -> headline -> subheadline -> primary CTA -> visual object -> short route markers;
- CTA visible before the user gets tired of atmosphere;
- no compressed desktop layout.

## 8. Cards direction

Route cards are physical-feeling editorial passes, not information boxes.

They must feel like:

- private access passes;
- fashion archive covers;
- route tags;
- matte club cards;
- object cards on graphite or ivory surfaces.

Homepage route card should stay short:

```text
01
TECHNIQUE

Техника / материалы / скорость / чистота

ОТКРЫТЬ МАРШРУТ →
```

No long signal / first step / breakdown on homepage cards. Put details in Route Rooms.

Card visual rules:

- large route number;
- short route title;
- one short descriptor line;
- a lot of air;
- thin aged copper line;
- subtle orange rim light or inner edge light;
- CTA as access action, not loud sales button;
- almost no shadow;
- no heavy glow;
- no technical frame clutter.

## 9. Motion parameters

| Element | Property | From | To | Duration | Easing |
|---|---|---|---|---|---|
| Section reveal | opacity + translateY | 0 / 32px | 1 / 0 | 700ms | ease-out |
| Card hover | translateY | 0 | -3px | 280ms | ease-out |
| Arrow shift | translateX | 0 | 5px | 220ms | ease-out |
| Orange rim | opacity | 0 | 1 | 320ms | ease-out |
| Room entry | opacity + translateY | 0 / 24px | 1 / 0 | 600ms | cubic-bezier(0.4, 0, 0.2, 1) |
| Ambient light | background-position / opacity | subtle | subtle | 8-20s | linear / ease-in-out |

Forbidden motion:

- glitch;
- scanline;
- hacking/loading UI;
- neon pulse;
- cyber transition;
- aggressive parallax;
- scrolljacking;
- bounce;
- infinite rotations.

Reduced motion:

- remove translate and long ambient motion;
- keep opacity fade only;
- max 200ms.

## 10. Julia block

Julia is the human trust center of the strict system.

Portrait = status.
Hands / tools / material = practice.
14 years = authority.
Routes = structure.
Warm light = life.
Ivory = softness.
Graphite = status.

Do not make Julia look like a distant fashion model only. The block must show quiet authority and practice, not arrogance.

### Placeholder strategy before photoshoot

If real photos are not ready, use:

- editorial text statement with 14 years of practice;
- abstract dark portrait placeholder silhouette only if necessary;
- material/detail placeholder: steel/tool/hand/nail macro direction described as text;
- no stock smiling salon woman;
- no fake photo realism;
- no generated person pretending to be Julia unless explicitly approved.

Safe temporary block:

- large typography;
- 14 years anchor;
- ivory note with areas of practice;
- graphite editorial surface;
- small material markers.

## 11. Telegram block

Telegram is not a channel badge. It is private access into the living project.

Visual:

- dark private access surface;
- route feed preview without looking like Telegram screenshot;
- [NEW], [ROUTE], [PRACTICE], [ACCESS] labels allowed only if they feel editorial, not terminal;
- orange edge light can mark the access direction;
- CTA: enter Telegram.

No raw dashboard. No fake metrics. No chat spam mockup.

## 12. Visual acceptance checklist

Visual is correct if:

- orange is not used as large flat background fill;
- grain is visible only on dark surfaces and remains subtle;
- ivory appears no more than 2 main times on MVP homepage;
- hero is understandable in 5 seconds without reading the entire subheadline;
- motion does not exceed 900ms for interface reveal;
- no element violates the visual bans;
- route cards feel like private passes, not dashboard cards;
- Telegram block feels like closed access, not social media promo;
- Julia block communicates practice and authority without fake glamour;
- mobile does not look like compressed desktop.

## 13. Current MVP target

For current repository phase, do not attempt the full future product. First pass must fix:

1. hero visual language;
2. route cards;
3. mobile vertical route cards;
4. grain / rim light / graphite material layer;
5. JuliaAuthoritySection;
6. TelegramAccessSection;
7. removal of concrete/terminal/dashboard language from UI classes where possible.
