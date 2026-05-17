# Beauty Hub

Multi-page private beauty project hub for Юлия Кюнеберг.

Beauty Hub is built as a dark editorial route system for beauty masters:

- homepage = entrance into the system;
- routes = four rooms / directions;
- Telegram = live project space;
- Route Finder = optional helper when a user does not know where to start.

## Visual Lock

The approved visual direction is the current dark editorial grid layout with large typography, graphite/warm background, copper accents, route index panels and product route cards.

Forbidden forever:

- concrete photo backgrounds;
- brutalist building photos;
- architectural placeholders;
- `london-brutal-neutral.jpg`;
- `concrete-bg.jpg`;
- diagnostic-first landing positioning;
- old one-page diagnostic funnel.

See `docs/VISUAL_LOCK.md` before making design or copy changes.

## Stack

- Vite
- React 18
- Tailwind CSS
- Framer Motion
- Lucide React

## Scripts

Install dependencies:

```bash
npm install
```

Run local dev server:

```bash
npm run dev
```

Build production assets:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Routes

```text
#/ 
#/routes
#/routes/technique
#/routes/client-flow
#/routes/independence
#/routes/mentorship
#/telegram
#/julia
#/start
```

## Deploy

Target: GitHub Pages

Base path: `/beauty-hub-landing/`

Preview URL: `https://kira565767.github.io/beauty-hub-landing/`

## Content

Main content lives in:

`src/beauty-hub/content/landing.js`

Telegram links are configured in:

`src/beauty-hub/lib/telegramLinks.js`

You can override the default Telegram URL with:

`VITE_TELEGRAM_URL`

## Do Not Commit

- `node_modules`
- `dist`
- `.npm-cache`
