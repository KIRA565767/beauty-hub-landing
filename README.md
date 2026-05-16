# Beauty Hub Landing

Landing page for Beauty Hub Юлии Кюнеберг, built as a Private Beauty System for beauty-master diagnostics and Telegram conversion.

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

## Deploy

Target: GitHub Pages

Base path: `/beauty-hub-landing/`

Preview URL: `https://kira565767.github.io/beauty-hub-landing/`

## Content

Main landing content lives in:

`src/beauty-hub/content/landing.js`

Telegram links are configured in:

`src/beauty-hub/lib/telegramLinks.js`

You can override the default Telegram URL with:

`VITE_TELEGRAM_URL`

## Do Not Commit

- `node_modules`
- `dist`
- `.npm-cache`
