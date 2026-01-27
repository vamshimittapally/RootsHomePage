# Engineering Audit: Roots41 Homepage

**Date:** October 26, 2023
**Auditor:** Jules (Principal Frontend Engineer)
**Scope:** Roots41 Marketing Homepage Repository

---

## 1. Executive Summary
**Health Score: 5/10 (Improved from 3/10)**

The repository is currently in a transition phase. While the initial framework mismatch (Vite vs. Next.js) remains, significant progress has been made in decoupling the monolithic architecture. **`App.tsx` has been successfully refactored**, separating concerns into distinct, modular components. This improves maintainability and prepares the codebase for a future migration to Next.js.

The visual execution remains high quality, but critical SEO and metadata gaps persist.

---

## 2. Critical Issues (P0) - Immediate Fixes Needed

### 2.1 Architecture Mismatch (Vite vs. Next.js)
- **Status:** **OPEN**
- **Issue:** The codebase is a Single Page Application (SPA) using Vite. It lacks Server-Side Rendering (SSR) or Static Site Generation (SSG).
- **Impact:**
  - **SEO:** Search crawlers may struggle to index content dynamically rendered by JavaScript.
  - **Performance:** Users must download the entire JS bundle before seeing the first meaningful paint (FCP/LCP risk).
  - **Social Sharing:** Link previews (Open Graph tags) will not work correctly without server-side generation.

### 2.2 Monolithic "Spaghetti Code" (`App.tsx`)
- **Status:** **RESOLVED**
- **Original Issue:** The entire application lived inside `src/App.tsx`.
- **Resolution:** `App.tsx` has been refactored to orchestrate smaller, focused components (`Hero`, `Method`, `Features`, `Manifesto`, `Footer`) located in `src/components/`.

### 2.3 Missing SEO & Metadata
- **Status:** **OPEN**
- **Issue:** `index.html` lacks critical meta tags.
- **Missing:**
  - `<meta name="description">`
  - Open Graph tags (`og:title`, `og:description`, `og:image`)
  - Twitter Card tags
  - Canonical URL
- **Impact:** The site is invisible to search engines and looks broken when shared on social media.

### 2.4 Hardcoded Content & Assets
- **Status:** **OPEN**
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
- **Update:** Basic modularity achieved. Further subdivision into `ui/` atomic components is recommended.

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

1.  **Refactor `App.tsx`**: Break the monolithic file into smaller components (`Hero.tsx`, `Method.tsx`, `Features.tsx`, `Manifesto.tsx`, `Footer.tsx`). **[COMPLETED]**
2.  **Extract `Globe`**: Move the inline `Globe` component to `src/components/visual/Globe.tsx`. **[COMPLETED]**
3.  **Add Meta Tags**: Manually add description and OG tags to `index.html`. **[PENDING]**
4.  **Clean up `Logo.tsx`**: Move the SVG code to a dedicated asset file or keep it but ensure it's isolated. **[PENDING]**
5.  **Fix Hardcoded Secrets/Links**: Review hardcoded links (e.g., `href="#"`) and ensure they are ready for production or properly disabled. **[PENDING]**
