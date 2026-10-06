# Lakbay Zamboanga del Norte

**Discover the Beauty of ZaNorte.** A responsive tourism showcase for Zamboanga del Norte, Philippines, featuring real destinations, local heritage, nature, and practical travel information.

This project was created for educational purposes. It is an independent student project, not an official government tourism website.

## Features

- Cinematic homepage with featured destinations, experience collections, a photo gallery, and travel inspiration.
- Ten real destinations, including Rizal Shrine, Dakak Beach, Aliguay Island, Sungkilaw Falls, and Gloria’s Fantasyland.
- Local destination search, combined category filters, shareable filter URLs, and a friendly empty state.
- Individual destination pages with highlights, travel tips, recommended audiences, and source links.
- Dedicated Explore, Travel Guide, About, and Sources & Photo Credits pages.
- Responsive desktop, tablet, and mobile navigation, accessible labels, keyboard support, reduced-motion support, and custom 404 pages.
- Locally stored photographs and fonts; no runtime image service or external font dependency.
- Vercel SPA rewrites for refreshing nested routes.

**Frontend only:** no database, login, authentication service, backend, or API server. Destination information is ordinary JavaScript data in the repository. Search and filtering happen entirely in the browser.

## Technologies Used

React 19, Vite 6, JavaScript, CSS, React Router, Lucide React, and locally hosted DM Sans / Cormorant Garamond fonts. Playwright is a development-only tool for browser verification.

## Installation

Use Node.js **22.12 or newer** (Node 22 LTS is recommended).

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://127.0.0.1:5173`.

On Windows, if PowerShell reports that `npm.ps1` cannot run because scripts are disabled, use `npm.cmd install` and `npm.cmd run dev`, or run the standard commands in Command Prompt. No system execution-policy change is needed.

## Build

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`. No environment variables are required.

## Browser verification

```bash
npm run test:e2e
```

The checks cover all destination routes, image loading, local search, category filters, empty-state reset, navigation, menu dismissal, refresh behavior, custom 404 pages, console errors, and horizontal overflow at desktop, tablet, 390px mobile, and 320px mobile sizes.

On Windows the tests use an installed Google Chrome. On other platforms, install the test browser with `npx playwright install chromium`. To use Microsoft Edge on Windows, set `PLAYWRIGHT_BROWSER_CHANNEL=msedge`. Screenshots and diagnostic traces are written to the ignored `test-results/` directory.

## Important files

```text
src/
  App.jsx                     Route definitions and shared layout
  main.jsx                    React entry point
  styles.css                  Theme, component styles, responsive breakpoints
  components/                 Navigation, cards, filters, photos, footer, CTA
  pages/                      All page components
  data/
    destinations.js           Single source of truth for destinations and categories
    image-credits.json        Photo authors, original URLs, licenses, and image notes
public/
  images/                     Committed local photographs
  favicon.svg                 Custom Lakbay brand icon
scripts/
  prepare-assets.mjs          Optional Wikimedia metadata utility
  download-assets.mjs         Optional photo download/attribution utility
tests/site.spec.js            Browser checks
playwright.config.js          Browser test configuration
vercel.json                  SPA routing configuration
```

To add a destination, add an entry to `src/data/destinations.js`, place its image in `public/images/`, and add attribution to `src/data/image-credits.json`. Use a unique `slug`; the detail route is generated automatically. Set `featured: true` to display it on the homepage.

## GitHub

The existing repository is [kurttruk2026/lakbay-zamboanga-del-norte](https://github.com/kurttruk2026/lakbay-zamboanga-del-norte).

For future changes, from this project folder:

```bash
git add .
git commit -m "Update tourism website"
git push origin main
```

If setting up a fresh local copy, clone the existing repository first. An empty local branch needs its first commit before it can be pushed. In VS Code, when `origin` already points to an existing GitHub repository, commit and use **Push / Sync Changes**; **Publish to GitHub** is for creating a new repository and may report that the name is already taken.

## Deployment on Vercel

1. Sign in to Vercel with GitHub and select **Add New → Project**.
2. Import `kurttruk2026/lakbay-zamboanga-del-norte`.
3. Choose the **Vite** framework preset with the repository root as the project root.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy. No environment variables or database setup are needed.

`vercel.json` rewrites client-side page routes to `index.html`, so direct visits and refreshes at paths such as `/destinations/rizal-shrine` work. Static images and build assets retain their normal paths. Later pushes to `main` trigger a new deployment when Vercel’s Git integration is enabled.

## Content and image credits

Every destination links to its reference. The **Sources & Photo Credits** page (`/credits`) lists Dapitan City, Dipolog City Tourism, DILG Region IX, NHCP, the park operator, PAGASA, and each photograph’s original Wikimedia Commons page.

Photography remains under each image’s stated Creative Commons license or public-domain terms. Responsive crops are disclosed. Credits and license links must be preserved when sharing this project; any adapted CC BY-SA photographs retain the applicable share-alike license. No endorsement by the source organizations or photographers is implied.

Three images are clearly labeled illustrations: Kawasan Falls in Cebu for the waterfall theme, Enchanted Kingdom in Laguna for the family attraction theme, and a Bohol forest road for the forest theme. They are **not** presented as photographs of Sungkilaw Falls, Gloria’s Fantasyland, or Cogon Ecotourism Park. Replace them with verified, appropriately licensed attraction photographs when available.

Photos were selected from existing archives and may not depict current conditions. Travel copy avoids fixed transport schedules, guaranteed weather, and unverified admission prices. Visitors should confirm current arrangements with local offices or operators.
