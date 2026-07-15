# Modern Music Catalog

A polished, dark/light-mode music catalog built with React. Browse a curated collection of 30 artists and ~120 albums, view detailed artist and album pages, and manage the full catalog through add, edit, and delete flows — all in-memory with no backend required.

The application was designed and scaffolded using [Figma Make](https://www.figma.com/make/). The original product specification that guided its creation is available here: [App\_Description.md](src/imports/App_Description.md).

---

## Features

### Browsing & Navigation
- **All Artists view** — searchable, filterable (by type and country), sortable grid of artist cards
- **All Albums view** — searchable, filterable (by certification and streaming platform), sortable grid of album cards
- **Artist detail page** — hero section with photo, country flag, metadata, and a collapsible album list
- **Album detail page** — full-bleed blurred cover art background, complete album metadata, certification badge, and streaming platform tags
- **URL routing** — each view has its own URL (`/artists`, `/artists/:id`, `/albums`, `/albums/:id`) with full browser back/forward support

### Catalog Management (CRUD)
- Add and edit artists (name, country, type, members, active since, photo URL)
- Add and edit albums (title, cover art, label, year, tracks, singles, sales, certification, streaming platforms)
- Delete artists (cascades — removes all associated albums)
- Delete albums with a confirmation modal
- Toast notifications after every create, update, and delete action

### UI & Theming
- **Dark / light theme toggle** in the header, persisted to `localStorage` and defaulting to the system preference
- Dark theme: deep near-black background with violet/pink accents
- Light theme: warm cream/off-white with the same accent palette
- Artist avatars loaded from Unsplash (solo artists show one person, groups show multiple)
- Country flags via flagcdn.com with tooltip labels
- Gradient fallbacks for any image that fails to load

---

## Tech Stack

| Concern | Library |
|---|---|
| UI framework | React 18 |
| Routing | React Router 7 (Data mode, `createBrowserRouter`) |
| Styling | Tailwind CSS v4 |
| Modal / dialog primitives | Radix UI (`@radix-ui/react-dialog`, `@radix-ui/react-tooltip`) |
| Toast notifications | Sonner |
| Icons | Lucide React |
| Build tool | Vite 6 |
| Package manager | pnpm |

All application state is managed with React's built-in `useState` — no external state library. Data is seeded in-memory on load and is not persisted between page refreshes.

---

## Project Structure

```
src/
├── app/
│   ├── App.tsx           # Types, seed data, shared components, CatalogContext, NavBar
│   ├── Root.tsx          # Layout shell (NavBar + Outlet + modals)
│   ├── routes.tsx        # createBrowserRouter route definitions
│   └── pages/
│       ├── ArtistsPage.tsx
│       ├── AlbumsPage.tsx
│       ├── ArtistDetailPage.tsx
│       ├── AlbumDetailPage.tsx
│       └── NotFound.tsx
├── styles/
│   ├── fonts.css         # Google Fonts imports (Inter + Playfair Display)
│   ├── theme.css         # Design tokens (light :root, dark .dark class)
│   └── index.css         # Tailwind entry point
└── imports/
    └── App_Description.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

The app will be available at `http://localhost:5173` by default.

### Build for production

```bash
pnpm build
```

Output is written to `dist/`.

---

## Data

The catalog is seeded entirely in-memory inside `App.tsx`. It includes:

- **30 artists** across 14 countries, spanning solo acts and groups
- **~120 albums** with full metadata: cover art, record label, release year, track count, singles, sales figures, certification (Gold / Platinum / Multi-Platinum), and streaming platform availability (Spotify, Apple Music, Amazon Music)

No API keys or environment variables are required. Artist photos are served from Unsplash's public CDN and country flags from flagcdn.com.
