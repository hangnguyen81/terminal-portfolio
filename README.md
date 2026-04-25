# Hang Nguyen — Portfolio

Personal developer portfolio built with React and TypeScript. Features a terminal/IDE-inspired design with a file-tree navigation, dark/light theme toggle, and responsive layout for mobile and desktop.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — build tool and dev server
- **Google Fonts** — JetBrains Mono, Instrument Serif, Inter

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── data.ts                        # All portfolio content (experience, projects, stack, etc.)
├── types.ts                       # TypeScript interfaces
├── theme.ts                       # Dark/light theme tokens and font variables
├── hooks/
│   └── useViewport.ts             # Responsive breakpoint hook
└── components/
    ├── PortraitPlaceholder.tsx
    └── terminal/
        ├── TerminalVariant.tsx    # Root layout — title bar, sidebar, panes, status bar
        ├── Sidebar.tsx            # File-tree nav (desktop) / collapsible drawer (mobile)
        ├── SectionHeader.tsx      # ❯ cmd path header used in each pane
        └── panes/
            ├── AboutPane.tsx
            ├── WorkPane.tsx       # Work experience (relex.ts / earlier.ts)
            ├── ShowcasePane.tsx   # Featured projects
            ├── ArchivePane.tsx    # Older projects archive
            ├── StackPane.tsx      # Tech stack rendered as JSON syntax
            ├── EducationPane.tsx
            └── ContactPane.tsx
```

## Customisation

All content lives in `src/data.ts` — edit that file to update any text, links, or project details without touching component code.

Theme colors are defined in `src/theme.ts` (`darkTheme` and `lightTheme` objects).

## Responsive behaviour

- **Desktop (≥ 760px):** Sidebar + main pane side-by-side layout
- **Mobile (< 760px):** Hamburger button opens a full-height file-tree drawer; content reflows to single column
- **Narrow (< 520px):** Further typography and spacing reductions
