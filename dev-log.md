# Development Log

## 2026-04-23 - Phase 4: Cart System

- **State Management (Zustand)**:
  - Refactored `src/features/cart/cartStore.ts` to strictly sanitize products entering the cart. Only essential fields (`id`, `name`, `price`, `image_url`, `quantity`) are kept to prevent state bloat.
  - Implemented robust `updateQuantity` logic that automatically removes records if the user decreases an item's quantity to 0.
- **Cart Interface**:
  - Transformed the static `Cart.tsx` into a robust, responsive two-column layout (Items breakdown and Order Summary) matching the "Clean Minimalism" design constraints.
  - Built graceful empty-state handling for visually guiding users back to the `/menu` route.
  - Constructed micro-interactions via `lucide-react` icons (Plus, Minus, Trash) for fluid real-time item manipulation.
  - Secured reactive subtotal/total calculations using the configurable `storeConfig.currency`.

## 2026-04-23 - Phase 3: Product Integration (Supabase)

- **Database Schema**: User successfully defined the `products` table in Supabase, adding an `is_available` boolean, and populated it with real data (Burgers, Ice Cream, Sides, Drinks).
- **Service Integration**: Created `src/services/productService.ts` to fetch products using the Supabase client, explicitly filtering out items where `is_available: false`.
- **UI Data Binding**:
  - Converted the static `Menu.tsx` to dynamically fetch data on load.
  - Implemented dynamic category pill generation (`All Items`, `Main Dish`, etc.) derived directly from the Supabase responses so no hardcoding is required.
  - Implemented category filtering logic.
  - Created a modular `ProductCard.tsx` component that consumes the `storeConfig.currency` (now set to `PhP` by user) and visually links to the global Zustand cart.
- **Environment Setup**: Clarified `.env` vs `.env.example` configurations to ensure secure API key handoffs for local IDE development.
- **Repository Maintenance**: Fixed missing TypeScript type definitions (`@types/react` and `@types/react-dom`) and patched a `key` prop warning in the products mapping.

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
