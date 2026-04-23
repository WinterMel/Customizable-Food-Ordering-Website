# Smart Suite Roadmap: Food Ordering Template

## Project Overview
A clean, modern, and highly reusable food ordering website template built with React (Vite) and Supabase. The system is designed to be fully customizable via a centralized configuration file (`storeConfig.ts`) and database-driven product listings, avoiding hardcoded business logic.

## Phased Execution Plan

### ✅ Phase 1: Project Setup
- [x] Initialize React + Vite environment.
- [x] Install core dependencies (`react-router-dom`, `@supabase/supabase-js`, `zustand`).
- [x] Set up standard folder structure (`/src/pages`, `/src/components`, `/src/config`, `/src/services`, `/src/store`).
- [x] Create centralized `storeConfig.ts` for brand identity and localization.
- [x] Create global Cart store using Zustand.

### ✅ Phase 2: UI Skeleton & Design System
- [x] Create static pages: Home, Menu, Cart, Checkout, Confirmation.
- [x] Establish global routing with React Router.
- [x] Apply "Clean Minimalism" design theme.
- [x] Configure Tailwind CSS with theme-specific CSS variables (fonts, colors).
- [x] Standardize layout containers (900px wide) and component structures.

### ⏳ Phase 3: Product Integration (Supabase)
- [ ] Define `products` table schema in Supabase.
- [ ] Connect the application to Supabase securely (`.env` setup).
- [ ] Create data fetching service for products.
- [ ] Populate the Menu page with a dynamic grid of products.
- [ ] Implement category filtering based on data.

### ⏳ Phase 4: Cart System
- [ ] Connect the Zustand `cartStore` to the product cards ("Add to Cart").
- [ ] Build out the Cart page UI to list items.
- [ ] Add item quantity modifiers (+/-) and remove functionality.
- [ ] Calculate and display total price based on `storeConfig.currency`.

### ⏳ Phase 5: Checkout Logic
- [ ] Build out the Checkout page form (Name, Phone, Address).
- [ ] Implement form validation.
- [ ] Display an order summary dynamically from the cart.

### ⏳ Phase 6: Save Orders to Database
- [ ] Define `orders` and `order_items` table schemas in Supabase.
- [ ] Create service to insert new orders into Supabase from the Checkout form.
- [ ] Route user to the Confirmation page upon successful insertion.
- [ ] Clear the cart upon successful order submission.

### ⏳ Phase 7: Config System Expansion
- [ ] Review hardcoded UI text and move it to `storeConfig.ts` if applicable.
- [ ] Test template reusability with a completely different mock brand (e.g., Burger shop vs. Ice Cream shop).

### ⏳ Phase 8: UI Polish
- [ ] Add loading states and skeleton loaders for data fetching.
- [ ] Add toast notifications for cart actions and errors.
- [ ] Finalize responsive design tweaks for mobile views.
