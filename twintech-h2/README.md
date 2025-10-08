# TwinTech-H₂ Next.js Prototype

Bilingual (English / Arabic) marketing prototype for the TwinTech-H₂ electrolyzer digital twin. The project mirrors the single-file prototype and includes reusable sections, interactive SVG charts, and placeholder KPIs awaiting confirmation from the TwinTech-H₂ source deck.

## Getting Started

```bash
npm install
npm run dev
```

The English site is served at `http://localhost:3000/` and the Arabic mirror at `http://localhost:3000/ar` (toggle with the language switcher in the navbar).

## Structure

- `app/(en)`, `app/(ar)`: route-grouped pages per locale
- `components/`: shared UI, charts, and content blocks
- `i18n/`: translation JSON with placeholder strings
- `lib/demoData.ts`: interactive chart data arrays

## Notes

- All metrics wrapped in braces (e.g., `{early_warning_hours}`) are placeholders pending confirmation from the TwinTech-H₂ deck.
- Interactive charts rely on inline SVG—no external chart libraries are required.
- Forms are client-side only and display confirmation toasts; integrate with a backend as needed.
