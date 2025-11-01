# TeleChic Website

**Production-grade, Arabic-first (RTL), bilingual website for TeleChic – the camera-first, non-medical beauty app.**

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and next-intl for internationalization.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the site. The default locale is Arabic (`ar`).

## 📁 Project Structure

```
telechic-website/
├── app/
│   ├── [locale]/              # Locale-based routes (ar, en)
│   │   ├── page.tsx           # Home page
│   │   ├── features/          # Features showcase
│   │   ├── demo/              # Interactive demo mode
│   │   ├── scanner/           # Ingredient scanner
│   │   ├── reports/           # PDF reports info
│   │   ├── pricing/           # Pricing plans
│   │   ├── blog/              # Blog posts
│   │   ├── docs/              # Documentation & FAQs
│   │   ├── contact/           # Contact form
│   │   ├── privacy/           # Privacy policy (PDPL)
│   │   ├── terms/             # Terms of service
│   │   └── layout.tsx         # Locale layout with Navbar/Footer
│   ├── api/
│   │   └── contact/route.ts   # Contact form API endpoint
│   ├── demo/data/             # Mock JSON data for demo mode
│   ├── layout.tsx             # Root layout
│   ├── sitemap.ts             # Dynamic sitemap
│   └── robots.ts              # Robots.txt
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── switch.tsx
│   │   ├── tabs.tsx
│   │   ├── accordion.tsx
│   │   ├── dialog.tsx
│   │   ├── toast.tsx
│   │   └── ...
│   └── shared/                # Shared components
│       ├── navbar.tsx         # Main navigation with i18n & dark mode
│       ├── footer.tsx         # Footer with disclaimer
│       ├── hero.tsx           # Homepage hero section
│       ├── feature-card.tsx   # Feature card component
│       ├── progress-ring.tsx  # 10-tick progress ring (brand element)
│       └── consent-banner.tsx # PDPL cookie consent banner
├── lib/
│   ├── i18n/                  # Internationalization config
│   │   ├── config.ts          # Locale configuration
│   │   └── request.ts         # next-intl request config
│   ├── stores/                # Zustand stores
│   │   ├── theme-store.ts     # Dark/light theme
│   │   └── consent-store.ts   # Cookie consent
│   └── utils.ts               # Utility functions
├── messages/
│   ├── ar.json                # Arabic translations
│   └── en.json                # English translations
├── styles/
│   └── globals.css            # Global styles & design system
├── public/                    # Static assets
├── middleware.ts              # next-intl middleware
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## 🎨 Design System

### Brand Colors

**Light Mode:**
- **Primary Green**: `#0A6A56` (buttons, links, icons)
- **Primary Hover**: `#085A49`
- **Primary Pressed**: `#074A3C`
- **Accent Red**: `#A82B11` (sparkle, alerts – max 10% per screen)
- **Accent Hover**: `#8F250E`
- **Background**: `#FFFFFF`
- **Surface**: `#FAF9F7` (Sand 50)
- **Border**: `#E7E3DE` (Sand 200)
- **Ink**: `#131715` (primary text)

**Dark Mode:**
- **Background**: `#0B0D0C`
- **Surface**: `#121514`
- **Border**: `#1C201E`
- **Primary**: `#609E91` (lighter green)
- **Accent**: `#C67564` (lighter red)
- **Text**: `#FFFFFF`

### Typography

- **Arabic Headings**: Reem Kufi
- **Arabic Body**: Noto Sans Arabic
- **English Headings**: Playfair Display (serif)
- **English Body**: Inter
- **Base Size**: 16px, line-height 1.6

### Key Components

- **ProgressRing**: 10-tick circular ring (brand identity element)
- **Sparkle**: Accent animation (✨) with Red 500, max 600ms duration
- **Focus Ring**: 2px outline in Green 200 (`#A9CBC4`)

## 🌍 Internationalization (i18n)

- **Default Locale**: Arabic (`ar`) with RTL layout
- **Secondary Locale**: English (`en`) with LTR layout
- **Translation Files**: `messages/ar.json` and `messages/en.json`

### Adding a New Locale

1. Add the locale to `lib/i18n/config.ts`:
   ```ts
   export const locales = ['ar', 'en', 'fr'] as const;
   export const localeDirections = { ar: 'rtl', en: 'ltr', fr: 'ltr' };
   ```

2. Create `messages/fr.json` with translations.

3. Update middleware and routing (handled automatically by next-intl).

### Editing Translations

Edit `messages/ar.json` or `messages/en.json`:

```json
{
  "hero": {
    "tagline": "Your new tagline",
    "subtitle": "Your new subtitle"
  }
}
```

Then reference in components:
```tsx
const t = useTranslations();
<h1>{t('hero.tagline')}</h1>
```

## 🎭 Demo Mode

The **Demo Mode** (`/demo`) is a fully interactive, offline prototype showcasing TeleChic's core features with **mock JSON data** (no vendor SDKs required).

### Demo Data

Located in `app/demo/data/`:
- `skin.json` – Skin analysis metrics (tone, texture, redness, pores, spots)
- `hair.json` – Hair analysis metrics (frizz, shine, volume)
- `ingredients.json` – Ingredient scanner sample product

### Extending Demo Mode

1. Add new JSON files to `app/demo/data/`.
2. Update `app/[locale]/demo/page.tsx` to include new steps.
3. Add translations to `messages/*.json` under `demo.steps`.

### Autoplay Link

Share demo with `?autoplay=1` query parameter for automatic progression.

## 📧 Contact Form

The contact form at `/contact` submits to `/api/contact/route.ts`.

### Email Integration (Optional)

1. Sign up for [Resend](https://resend.com) and get an API key.
2. Create `.env.local`:
   ```
   RESEND_API_KEY=re_your_actual_key
   ```
3. Uncomment the Resend code in `app/api/contact/route.ts`.

Without a Resend key, form submissions are logged to the console.

## 🍪 PDPL Cookie Consent

The consent banner (`components/shared/consent-banner.tsx`) is PDPL-compliant:
- **Necessary cookies**: Always enabled (required for site functionality)
- **Analytics cookies**: Opt-in only

Preferences are stored in `localStorage` via Zustand (`lib/stores/consent-store.ts`).

## 🌓 Dark Mode

Toggle dark mode via the navbar (moon/sun icon). Theme preference is persisted in `localStorage` using Zustand (`lib/stores/theme-store.ts`).

Themes are defined in `styles/globals.css` with CSS variables:
```css
:root { /* light theme */ }
[data-theme="dark"] { /* dark theme */ }
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub.
2. Import project to Vercel.
3. Set environment variables:
   - `RESEND_API_KEY` (optional)
   - `NEXT_PUBLIC_APP_URL` (e.g., `https://telechic.app`)
4. Deploy! Vercel auto-detects Next.js.

### Other Platforms

```bash
npm run build
npm start
```

Serve the built files from `.next/` on any Node.js hosting.

## 📊 SEO & Performance

- **Sitemap**: Auto-generated at `/sitemap.xml` (supports all locales)
- **Robots.txt**: `/robots.txt` (allows all except `/api/` and `/_next/`)
- **OG Images**: Add OG image generator route if needed
- **Lighthouse Target**: ≥90 on Performance, SEO, Accessibility, Best Practices

### Improving Performance

- Optimize images with `next/image` (already configured)
- Use `loading="lazy"` for offscreen images
- Enable Vercel Analytics (add `@vercel/analytics` package)
- Minimize client-side JavaScript with code splitting

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load in both `ar` and `en` locales
- [ ] RTL layout works correctly in Arabic
- [ ] Dark mode toggle persists across sessions
- [ ] Cookie consent banner appears on first visit
- [ ] Demo mode runs through all 5 steps with animations
- [ ] Contact form submits successfully
- [ ] Navigation works on mobile (hamburger menu)
- [ ] Keyboard navigation and focus rings work
- [ ] Footer disclaimer is visible on all pages

### Automated Testing (Future)

Add Playwright or Cypress for E2E testing:
```bash
npm install -D @playwright/test
npx playwright test
```

## 📝 Content Management

### Blog Posts (MDX)

To add blog posts, you can integrate `contentlayer` or use MDX files:

1. Create `content/blog/post-slug.mdx`
2. Add frontmatter (title, date, author)
3. Use `next-mdx-remote` to render

### Docs (MDX)

Same approach as blog posts. Store in `content/docs/`.

## 🔧 Configuration Files

### `tailwind.config.ts`

Defines design tokens (colors, spacing, radius, shadows) and custom utilities.

### `next.config.js`

Integrates `next-intl` plugin and sets security headers.

### `middleware.ts`

Handles locale routing and detection (next-intl).

### `tsconfig.json`

Path aliases:
- `@/*` → root
- `@/components/*` → `components/`
- `@/lib/*` → `lib/`

## 🎯 Key Features Checklist

- [x] Arabic-first (RTL) with English support
- [x] Dark mode with theme persistence
- [x] Next.js 14 App Router
- [x] TypeScript throughout
- [x] Tailwind CSS with design system tokens
- [x] shadcn/ui components
- [x] Framer Motion animations
- [x] Interactive Demo Mode with mock data
- [x] PDPL-compliant cookie consent
- [x] Contact form with API route
- [x] Responsive navigation (mobile + desktop)
- [x] SEO (sitemap, robots, metadata)
- [x] Accessibility (WCAG 2.2 AA focus rings, semantic HTML)
- [x] ProgressRing component (10-tick brand element)
- [x] Footer disclaimer on all pages

## 📄 License

Proprietary. © 2025 TeleChic. All rights reserved.

## 🆘 Support

For questions or issues:
- **Email**: support@telechic.app
- **Docs**: Visit `/docs` on the live site
- **GitHub**: (Add your repo link here)

---

**Built with 💚 by the TeleChic team**
