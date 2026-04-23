# Development Log

## 2026-04-21 - Phase 2: Applied Clean Minimalism Design Theme
- **Design System Update**: Redesigned the application using a "Clean Minimalism" aesthetic.
- **CSS Variables**: Configured global `@theme` variables in `index.css` (e.g., `--color-brand`, `--color-ink`, `--color-surface`, `--color-bg`) to easily toggle themes.
- **Typography & Layout**: Standardized the app font to `Helvetica Neue` and constrained the main container to `900px`.
- **Component Refinement**: 
  - Restyled `Navbar` with an ink-colored cart pill.
  - Refactored `Home` page hero section to be text-first rather than relying on a heavy background image overlay.
  - Smoothed out container borders and established crisp, bordered surfaces mimicking modern SaaS/e-commerce platforms.

## 2026-04-21 - Phase 1: Initial Project Setup
- **App Initialization**: Set up the React (Vite) app environment.
- **Dependencies**: Installed `react-router-dom` (routing), `zustand` (state management), and `@supabase/supabase-js` (database).
- **Architecture**: 
  - Created `src/config/storeConfig.ts` to hold all reusable brand variables (name, tagline, currency).
  - Drafted a structured Zustand store in `src/store/cartStore.ts` to manage product additions, removals, and total calculations safely.
  - Configured dummy layout pages (`Home`, `Menu`, `Cart`, `Checkout`, `Confirmation`) inside a core `Layout` component wrapper.
- **Supabase Stubbing**: Implemented a protective wrapper in `supabase.ts` that safely falls back to `null` if environment variables are not yet provided, preventing application crashes during the UI-building phase.
