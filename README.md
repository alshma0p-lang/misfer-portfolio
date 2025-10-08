# TwinTech-H₂ Prototype Workspace

This repository collects the bilingual TwinTech-H₂ marketing prototype assets generated from the product brief.

## Directory Overview

- `deliverables/` – executive summary, copy deck, design tokens, SVG icon set, QA checklist, and open placeholders to confirm.
- `prototype/` – single-file HTML demo with Tailwind-like utilities, interactive SVG charts, bilingual/RTL toggle, and accessible lead form.
- `twintech-h2/` – Next.js 14 + TypeScript project scaffold with English and Arabic route groups, reusable components, Tailwind setup, and demo data.
- `page.tsx` / `route.ts` – existing workspace files retained for context (unrelated to TwinTech-H₂ deliverables).

## Getting Started

### Single-File Prototype

1. Open `prototype/index.html` directly in a modern browser (no build step required).
2. Toggle Arabic/RTL via the language switch in the header.
3. Hover over chart points/bars to read bilingual tooltips.

### Next.js Project

1. Navigate to `twintech-h2/` and install dependencies:
   ```bash
   cd twintech-h2
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000` for English (`/en`) and Arabic (`/ar`) experiences.

## Notes

- KPI values and certain copy strings still use clearly bracketed placeholders that require confirmation against the TwinTech-H₂ source PDF.
- No network calls are performed; all demo data lives in `twintech-h2/lib/demoData.ts` and inline arrays inside `prototype/index.html`.
- Accessibility considerations include semantic landmarks, focus styles, keyboard operable components, and ARIA roles where needed.

