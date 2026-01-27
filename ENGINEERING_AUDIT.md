# Engineering Audit: Roots41 Homepage

**Date:** October 26, 2023
**Auditor:** Jules (Principal Frontend Engineer)
**Scope:** Roots41 Marketing Homepage Repository

---

## 1. Executive Summary
**Health Score: 3/10**

The current repository represents a functional visual prototype rather than a production-ready engineering project. While the visual execution (animations, layout) is high quality, the underlying architecture is fragile, non-modular, and misaligned with modern production standards for a marketing homepage.

The most critical finding is the **framework mismatch**: The project is built using **Vite + React (SPA)**, not Next.js as implied by the audit request. This severely impacts SEO capabilities and initial load performance, which are crucial for a marketing site.

---

## 2. Critical Issues (P0) - Immediate Fixes Needed

### 2.1 Architecture Mismatch (Vite vs. Next.js)
- **Issue:** The codebase is a Single Page Application (SPA) using Vite. It lacks Server-Side Rendering (SSR) or Static Site Generation (SSG).
- **Impact:**
  - **SEO:** Search crawlers may struggle to index content dynamically rendered by JavaScript.
  - **Performance:** Users must download the entire JS bundle before seeing the first meaningful paint (FCP/LCP risk).
  - **Social Sharing:** Link previews (Open Graph tags) will not work correctly without server-side generation.

### 2.2 Monolithic "Spaghetti Code" (`App.tsx`)
- **Issue:** The entire application lives inside a single file: `src/App.tsx` (450+ lines).
- **Details:**
  - Contains Hero, Philosophy, Features, Manifesto, and Footer sections mixed together.
  - Contains all logic, state, and animation definitions.
  - Contains the `Globe` component definition inline.
- **Impact:** Extremely low maintainability. A change in the Footer could accidentally break the Hero section. Hard to read and debug.

### 2.3 Missing SEO & Metadata
- **Issue:** `index.html` lacks critical meta tags.
- **Missing:**
  - `<meta name="description">`
  - Open Graph tags (`og:title`, `og:description`, `og:image`)
  - Twitter Card tags
  - Canonical URL
- **Impact:** The site is invisible to search engines and looks broken when shared on social media.

### 2.4 Hardcoded Content & Assets
- **Issue:** Marketing copy is hardcoded directly into JSX. `Logo.tsx` contains 100+ lines of raw SVG paths.
- **Impact:** Content updates require developer intervention. The large inline SVG bloats the component file size.

---

## 3. Architectural Recommendations - Improvements for Scale

### 3.1 Migration to Next.js (App Router)
- **Recommendation:** Re-platform to Next.js 14/15 using the App Router.
- **Benefits:**
  - **SSG/SSR:** Perfect for SEO and fast initial load.
  - **Image Optimization:** Automatic resizing/formatting of images (using `next/image`).
  - **File-based Routing:** Future-proofs the app if sub-pages (e.g., /blog, /login) are added.

### 3.2 Modular Component Architecture
- **Recommendation:** Refactor the UI into a feature-based structure.
  ```text
  src/
  ├── components/
  │   ├── ui/           # Atomic components (buttons, inputs)
  │   ├── layout/       # Navbar, Footer
  │   ├── sections/     # Hero, Features, Manifesto
  │   └── visual/       # Globe, Logo, Backgrounds
  ```

### 3.3 Content Management Abstraction
- **Recommendation:** Extract all text content into a `content.json` or constants file, or integrate a Headless CMS (Sanity, Contentful).
- **Benefit:** Allows non-technical team members to update copy without touching code.

### 3.4 Performance Optimization
- **Recommendation:**
  - Lazy load heavy visual components (like the `cobe` Globe) using dynamic imports.
  - Use `next/font` to optimize font loading and reduce layout shift (CLS).

---

## 4. "Low Hanging Fruit" - Immediate Automated Fixes

These items can be addressed immediately within the current Vite setup before a full migration:

1.  **Refactor `App.tsx`**: Break the monolithic file into smaller components (`Hero.tsx`, `Method.tsx`, `Features.tsx`, `Manifesto.tsx`, `Footer.tsx`).
2.  **Extract `Globe`**: Move the inline `Globe` component to `src/components/visual/Globe.tsx`.
3.  **Add Meta Tags**: Manually add description and OG tags to `index.html`.
4.  **Clean up `Logo.tsx`**: Move the SVG code to a dedicated asset file or keep it but ensure it's isolated.
5.  **Fix Hardcoded Secrets/Links**: Review hardcoded links (e.g., `href="#"`) and ensure they are ready for production or properly disabled.
