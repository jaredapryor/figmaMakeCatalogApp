# Plan: Create README.md

## Context

The user wants a `README.md` at the project root (`/workspaces/default/code/README.md`) that serves as a concise introduction to the app, links to the detailed spec, and explains how to run the project locally.

## File to create

**`/workspaces/default/code/README.md`** — new file, does not currently exist.

## Content outline

### 1. Title + one-line description
`# Modern Music Catalog` — a stylish digital music catalog for exploring and managing a curated collection of artists and albums.

### 2. Overview (2–3 short paragraphs)
- What the app is: a polished music discovery and management experience with artist profiles, album discographies, search/filter/sort, full CRUD, and dark/light theme.
- Key views: Artists grid, Albums grid, Artist Detail, Album Detail.
- Management features: add, edit, delete artists and albums with confirmation dialogs and toast notifications.

### 3. Link to detailed spec
> For a full description of the application's data model, functionality, and design direction, see the [App Description](src/imports/App_Description.md).

### 4. Tech stack (brief bullet list)
- React 18, TypeScript, Vite
- Tailwind CSS v4
- Lucide React icons, Sonner toasts, Radix UI primitives
- Google Fonts: Playfair Display + Inter

### 5. Getting started / running the app

```bash
# Install dependencies
pnpm install

# Start the development server (runs on http://localhost:5173 by default)
pnpm vite

# Build for production
pnpm build
```

Note: the project uses `pnpm`. There is no `dev` script alias — use `pnpm vite` directly to start the dev server.

## Verification

Open `README.md` in a markdown viewer and confirm:
- Title and description render correctly
- Link to `src/imports/App_Description.md` is a valid relative path from the project root
- Code blocks display correctly
- No broken formatting

---

# Plan: 8 UI Improvements

## 1. Search field width — `ArtistsView` filter bar (~line 540)
Remove `flex-1` from the search wrapper and replace with `w-1/3`. Give the three selects `flex-1` each so they evenly split the remaining 2/3:
```tsx
<div className="relative w-1/3"> {/* search */}
<select ... className={`${selCls} flex-1`}> {/* type */}
<select ... className={`${selCls} flex-1`}> {/* country */}
<select ... className={`${selCls} flex-1`}> {/* sort */}
```

## 2. Edit button on artist card hover — `ArtistsView` card (~line 566)
A pencil button needs to appear on hover alongside the existing trash button. Add `onEditArtist` prop to `ArtistsView` and wire it in App root. Position both buttons top-right as a small group:
```tsx
<div className="absolute top-[10px] right-[10px] flex gap-[4px] opacity-0 group-hover:opacity-100 transition-opacity z-10">
  <button onClick={(e) => { e.stopPropagation(); onEditArtist(artist); }}> <Pencil /> </button>
  <button onClick={(e) => { e.stopPropagation(); onDeleteArtist(artist); }}> <Trash2 /> </button>
</div>
```
In App root, `onEditArtist` sets `selectedArtistId` to that artist's id and opens `modal = "edit-artist"`.

## 3. Edit/delete buttons on album card hover — `AlbumsView` grid (~line 673)
Wrap each album card in a `relative` container (change from `<button>` to a `<div>` wrapper with a nested click handler), and overlay two icon buttons that fade in on hover:
```tsx
<div className="relative group ...">
  <button onClick={() => onSelectAlbum(album.id)}> {/* cover + metadata */} </button>
  <div className="absolute top-[8px] right-[8px] flex gap-[4px] opacity-0 group-hover:opacity-100 transition-opacity">
    <button onClick={(e) => { e.stopPropagation(); onEditAlbum(album); }}> <Pencil /> </button>
    <button onClick={(e) => { e.stopPropagation(); onDeleteAlbum(album); }}> <Trash2 /> </button>
  </div>
</div>
```
Add `onEditAlbum` and `onDeleteAlbum` props to `AlbumsView`. In App root, `onEditAlbum` sets `selectedAlbumId` and opens `modal = "edit-album"`; `onDeleteAlbum` sets `pendingDelete`.

## 4. Delete album dialog shows album cover — `ConfirmDialog` + call site
Add optional `image?: string` prop to `ConfirmDialog`. When present, render a small square cover above the title. Update both album-delete call sites to pass `image={album?.cover}`.

## 5. Delete artist dialog shows artist photo — same as above
Update the artist-delete call site to pass `image={artist?.photo}`. Render as a circle (rounded-full) since it's an avatar.

## 6. Pencil button in ArtistDetailView album row opens Edit Album modal (not album detail) — (~line 796)
The pencil button currently calls `onSelectAlbum(album.id)`. Replace with a new `onEditAlbum(album)` prop callback. In App root, wire `onEditAlbum` to set `selectedAlbumId = album.id` and open `modal = "edit-album"` — without navigating to album-detail view.

## 7. Total albums sold on artist card and artist detail pill — `ArtistsView` + `ArtistDetailView`
Compute `totalSold` by summing the numeric portion of each album's `sold` string for that artist (parse "430K" → 430, sum, format back). Add a helper:
```ts
function sumSold(albumList: Album[]): string {
  const total = albumList.reduce((acc, al) => {
    const n = parseFloat(al.sold.replace(/[KkMm]/, ""));
    const mult = /[Mm]/i.test(al.sold) ? 1000 : 1;
    return acc + n * mult;
  }, 0);
  if (total >= 1000) return `${(total / 1000).toFixed(1).replace(/\.0$/, "")}M`;
  return `${Math.round(total)}K`;
}
```
- **Artist card** (bottom row, after album count): add `· {totalSold} sold`
- **Artist detail** (pills row): add a new pill `<span>...{totalSold} sold</span>`

## 8. Artist name/photo on Album Detail is a navigation link — `AlbumDetailView` (~line 847)
Wrap the avatar + name in a `<button>` that calls a new `onGoToArtist` prop. In App root, wire it to set `selectedArtistId = album.artistId` and navigate to `"artist-detail"`. Style with a subtle hover underline/opacity on the name.

---

## Files modified
- `src/app/App.tsx` only — all changes are self-contained in this file.

## Verification
1. Filter bar: search is ~1/3 width; three selects share the rest equally.
2. Artist card hover: pencil (edit) and trash (delete) both appear; pencil opens pre-populated Edit Artist modal.
3. Album grid hover: pencil and trash icon buttons appear over the cover; pencil opens Edit Album modal; trash opens confirmation.
4. Delete artist dialog shows circular artist photo above the title.
5. Delete album dialog shows square album cover above the title.
6. Pencil button on album row inside Artist Detail opens Edit Album modal (not navigate away).
7. Artist card bottom row shows "X albums · YYK sold"; artist detail page has a "YYK sold" pill.
8. Clicking artist name/photo on Album Detail navigates to that artist's detail page.

---

# Plan: Artists View — Consolidate Filter Bar (completed)

## Context

The Artists filter bar currently has a search input + three toggle buttons (All / Solo / Group) + two `<select>` dropdowns. The toggles are visually inconsistent with the selects, and the bar wraps to a second line at normal widths. The user wants all filters on one row and the type toggle replaced with a `<select>` to match the others.

## Change — `src/app/App.tsx`, `ArtistsView` (~lines 539–560)

Two edits in the filter bar `<div>`:

1. **Remove `flex-wrap`** from the container so controls stay on one line.
2. **Replace the three `<button>` toggle elements** with a single `<select>` for Type:

```tsx
<select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value as "All"|"Solo"|"Group")} className={selCls} style={{ minWidth: 110 }}>
  <option value="All">All Types</option>
  <option value="Solo">Solo</option>
  <option value="Group">Group</option>
</select>
```

3. **Remove `min-w-[200px]` and `max-w-[320px]`** from the search wrapper so it flexes naturally into available space without forcing a wrap.

The row order becomes: **Search (flex-1) | Type ▾ | All Countries ▾ | Sort ▾**

No new classes, state, or helpers needed — `selCls` already exists and covers the theme-aware styling for all selects.

## Verification

- One clean filter row renders in the Artists view
- Type dropdown (All Types / Solo / Group) filters cards correctly
- Country and Sort selects unchanged in behavior
- Both dark and light themes look correct

---

# Plan: Music Catalog — Missing Features (completed)

## Context

The current `App.tsx` covers the four core views (Artists, Albums, ArtistDetail, AlbumDetail) and two "Add" modals. The Figma imports and App_Description.md specify a richer feature set that is not yet implemented. This plan captures all the gaps and the implementation approach.

---

## Missing Features (gap analysis)

### 1. Dark / Light theme toggle
- NavBar shows a moon/sun "Dark" toggle button (top-right, visible in every light-theme screenshot).
- Clicking it flips a `theme` state between `"dark"` and `"light"`, stored in `localStorage` so it persists across sessions.
- Implementation: add a `data-theme="dark"|"light"` attribute on the root `<div>` and switch all hardcoded dark colors to Tailwind `data-[theme=dark]:` variants — OR (simpler) use a React context that provides a `isDark` boolean and conditionally join dark/light class strings in every component.
- Recommended approach: since colors are hardcoded (not via CSS variables), pass `isDark` down as a prop/context and define two palettes as constants:
  - **Dark**: `bg-[#09090f]` cards `bg-[#13131c]` text `#f2f2f8` muted `#7070a0` accent `#a855f7`
  - **Light**: `bg-[#faf8f4]` cards `bg-[rgba(255,255,255,0.7)]` text `#1c1917` muted `#78716c` accent `#9333ea`

### 2. Edit Artist modal
- Triggered by "Edit Artist" button on ArtistDetail page.
- Form fields (pre-populated with current values):
  - Artist Name (required)
  - Country — a `<select>` dropdown listing all 30 countries; selecting one updates a live flag preview next to the dropdown
  - Artist Photo URL — text input with a small circular live preview
  - Type: Solo / Group radio or select
  - Active Since (year, required)
- "Save Changes" updates the artist in `artists[]` state and fires a toast.
- The modal closes on Cancel or after Save.

### 3. Edit Album modal
- Triggered by the pencil icon on any album row (in ArtistDetail) or by "Edit Album" button on AlbumDetail page.
- Form fields (pre-populated):
  - Album Title (required)
  - Artist (readonly or select — album already belongs to an artist)
  - Cover Image URL — text input; a small square live preview renders below it (as shown in the screenshot)
  - Record Label
  - Release Year (required)
  - Tracks, Singles (number inputs side by side)
  - Albums Sold (text, e.g. "430K")
  - Certification — dropdown: None / Gold / Platinum / Diamond
  - Streaming Platforms — three toggle buttons: Spotify (SP), Apple Music (AM), Amazon (AZ)
- "Save Changes" updates the album in `albums[]` state and fires a toast.

### 4. Delete Artist with confirmation dialog
- Two entry points:
  1. Hover on an artist card in the Artists grid — a trash icon appears (top-right of card on hover).
  2. "Delete Artist" button on the ArtistDetail page (already shown next to "Edit Artist" in the screenshots).
- Confirmation dialog (a modal overlay) must display: "This will also delete N albums. Are you sure?"
- On confirm: remove artist from `artists[]` AND remove all albums where `artistId === artist.id`; navigate back to Artists view; fire a toast "Artist deleted".
- On cancel: close the dialog, no action.

### 5. Delete Album with confirmation dialog
- Currently deletes immediately without confirmation — replace with a dialog: "Delete [Album Title]? This cannot be undone."
- On confirm: remove from `albums[]`, fire toast "Album deleted".
- Entry points: trash icon on album row in ArtistDetail, and "Delete" button on AlbumDetail page.

### 6. Toast notifications
- Use the `sonner` package (already installed: `import { toast } from "sonner"` and render `<Toaster />` once near the root).
- Fire a toast on every mutation:
  - "Artist added" / "Artist updated" / "Artist deleted"
  - "Album added" / "Album updated" / "Album deleted"
- Toast style should match the active theme (dark/light).

### 7. Sort for Artists and Albums
- Artists view: a `<select>` sort dropdown (Name A→Z, Name Z→A, Most Albums, Oldest, Newest).
- Albums view: a `<select>` sort dropdown (Album Title A→Z, Year Newest, Year Oldest, Most Sold).
- Sorting is purely client-side on the filtered array.

### 8. Additional filters
- Artists: add a Country filter dropdown (populated from unique countries in `artists[]`); stack it next to the existing Solo/Group filter.
- Albums: add Certification filter (All / Gold / Platinum / Diamond) and Streaming filter (All / SP / AM / AZ).

### 9. Albums view — grid layout
- The current Albums view renders a vertical list. The screenshots show a rich image grid (similar to the Artists grid), with large album covers and metadata below each cover.
- Switch the Albums view to a responsive grid (4 columns at 1120px width), matching the visual density in image-1.png.

### 10. Artist card hover-reveal delete button
- On hover of an artist card, a small trash-icon button fades in (absolute, top-right corner).
- Clicking it opens the Delete Artist confirmation dialog.

---

## Files to Modify

- **`src/app/App.tsx`** — the only file that needs changes. All features above are added here:
  - Add `ThemeContext` (or pass `isDark` prop) + `localStorage` persistence
  - Expand `ModalType` to include `"edit-artist" | "edit-album" | "delete-artist" | "delete-album"`
  - Add `EditArtistModal`, `EditAlbumModal`, `DeleteConfirmModal` components
  - Update `ArtistsView` with sort dropdown, country filter, and hover-delete on cards
  - Update `AlbumsView` to grid layout with sort + cert/streaming filters
  - Update `ArtistDetailView` to include "Delete Artist" button wired to confirmation
  - Update `AlbumDetailView` to open confirmation before delete
  - Add `NavBar` theme toggle button
  - Render `<Toaster />` at root level
  - Import `toast` from `sonner`

- **`src/styles/theme.css`** — no changes needed; light/dark palettes are handled inline in component classes.

---

## Implementation Notes

- Image imports stay as-is (`@/imports/Artists/` and `@/imports/Albums/`); the new `Artists-1/` and `Albums-1/` folders contain the same images under the same filenames — no re-import needed.
- The country flag-preview in Edit Artist requires mapping country code → flag image. Reuse the existing flag imports already declared at the top of App.tsx.
- The cover image live preview in Edit Album renders `<img src={urlInput} />` with an `onError` fallback to hide the preview if the URL is invalid.
- Confirmation dialogs can be the same `DeleteConfirmModal` component parameterized with `title`, `body`, and `onConfirm`.

---

## Verification

1. Toggle dark/light → entire app switches palette; reload → same theme persists.
2. Add an artist → appears in Artists grid; toast shows "Artist added".
3. Edit an artist → modal pre-populated; save → card and detail page reflect changes; toast shows "Artist updated".
4. Delete artist from card (hover) → confirmation counts albums; confirm → artist and all their albums gone; toast shows "Artist deleted".
5. Delete artist from detail page → same confirmation dialog.
6. Add album → appears in artist's album list; toast shows "Album added".
7. Edit album → modal pre-populated with cover preview; save → detail page updates; toast shows "Album updated".
8. Delete album (with confirmation) → removed; toast shows "Album deleted".
9. Sort artists by Name Z→A → cards reorder correctly.
10. Filter albums by Certification: Gold → only Gold albums shown.
11. Filter artists by Country: SE → only Swedish artists shown.
