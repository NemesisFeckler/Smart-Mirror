# Smart Mirror

Minimal Svelte + Vite smart-mirror UI with home and dashboard screens.

## Quickstart

```bash
npm install
npm run dev
```

`npm run dev` starts the app at http://localhost:5173.

For a production build:

```bash
npm run build
npm run preview
```

## Routes

- `/` – Home screen showing centered date and time.
- `/dashboard` – Dashboard with date top-center, time top-right, and Daily/Weekly/Monthly sections.

## Navigation

- Clicking anywhere on the Home screen takes you to the dashboard.
- The dashboard monitors mouse movement and clicks; after two minutes of inactivity it automatically returns to the home screen.
- Any activity resets the timer.

Time and date update every second via a Svelte store.
