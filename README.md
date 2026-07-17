# Modern Music Catalog

A polished music discovery and catalog management app for exploring a curated collection of artists and albums. Designed to feel like a blend of a streaming service's browsing experience and a lightweight editorial showcase, available in both dark and light themes.

## Overview

The app is organized around two primary browsing surfaces — **Artists** and **Albums** — each with search, filter, and sort controls to navigate a catalog of 30 artists and 120+ albums. From either grid you can drill into detail pages: an artist's profile shows their full discography, and an album's detail page displays metadata, certifications, and streaming availability.

The catalog is fully editable. You can add new artists and albums, edit any existing record, and delete artists or albums — with confirmation dialogs before any destructive action and toast notifications confirming every change. Dark and light themes are toggled from the navbar and persisted across sessions.

For a full description of the data model, functionality, and design direction, see the [App Description](src/imports/App_Description.md).

## Features

- **Artists view** — 3-column grid with photo, country flag, type badge, album count, and total sold; hover to reveal edit and delete actions; filter by type and country, sort by name, album count, or active year
- **Albums view** — 4-column grid with cover art, certification badge, and streaming badges; hover to reveal edit and delete actions; filter by certification and streaming platform, sort by title or year
- **Artist Detail** — full profile with collapsible album list; edit or delete the artist; add, edit, or delete individual albums inline
- **Album Detail** — blurred cover art background, metadata grid, certifications, streaming; artist name links back to the artist's detail page
- **CRUD modals** — add/edit forms for both artists and albums; cover image URL field shows a live preview thumbnail
- **Delete confirmations** — dialog shows the artist photo or album cover before confirming; deleting an artist also removes all their albums
- **Dark / Light theme** — toggle in the navbar; choice persisted in `localStorage`
- **Toast notifications** — confirmation after every add, edit, and delete action

## Tech Stack

- React 18, TypeScript, Vite
- Tailwind CSS v4
- Lucide React (icons), Sonner (toasts), Radix UI (accessible primitives)
- Google Fonts: Playfair Display + Inter

## Getting Started

This project uses [pnpm](https://pnpm.io). Make sure it is installed before running the commands below.

```bash
# Install dependencies
pnpm install

# Start the development server (available at http://localhost:5173 by default)
pnpm vite

# Build for production
pnpm build
```

> **Note:** There is no `dev` script alias in `package.json`. Run `pnpm vite` directly to start the development server.
