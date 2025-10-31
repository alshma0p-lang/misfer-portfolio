# TeleChic Marketing Website

A production-ready, mobile-first, bilingual (Arabic/English) marketing website for TeleChic - the smart beauty camera app.

## 🎯 Overview

TeleChic is a camera-first, non-medical beauty app that provides instant, automatic reports on skin, hair, nails, and smile aesthetics. This marketing website showcases the app's features with:

- **Arabic-first (RTL)** with English secondary (LTR)
- **Mobile-first responsive design** using CSS Grid/Flexbox
- **WCAG 2.2 AA accessibility** compliant
- **SEO optimized** with hreflang, structured data, and sitemap
- **PWA-ready** with manifest and service worker
- **Zero framework** - vanilla HTML5, CSS3, and JavaScript

## 📁 Project Structure

```
/
├── ar/                          # Arabic pages (RTL)
│   ├── index.html              # Home page
│   ├── features.html           # Five pillars detailed
│   ├── technology.html         # Architecture & privacy
│   ├── contact.html            # Contact form with FAQ
│   ├── privacy.html            # PDPL-compliant privacy policy
│   └── 404.html                # 404 error page
│
├── en/                          # English pages (LTR - mirrors AR)
│   └── index.html              # Home page (sample)
│
├── assets/
│   ├── css/
│   │   ├── base.css            # Reset, design tokens, utilities
│   │   └── theme.css           # Components, layout patterns
│   ├── js/
│   │   ├── app.js              # Main app logic (menu, accordion, consent)
│   │   └── validate.js         # Form validation
│   └── img/                    # Images, icons, logo (placeholders)
│
├── manifest.webmanifest        # PWA manifest
├── service-worker.js           # Offline caching
├── sitemap.xml                 # SEO sitemap
├── robots.txt                  # Search engine directives
└── README.md                   # This file
```

## 🚀 Quick Start

### Local Development

1. **Serve locally:**
   ```bash
   # Python
   python3 -m http.server 8000

   # Node.js
   npx http-server -p 8000
   ```

2. **Open in browser:**
   ```
   http://localhost:8000/ar/
   ```

### Adding Logo & Images

Add your images to `assets/img/`:
- `logo.svg` - Brand logo
- `hero-app-preview.jpg` - Hero section
- `feature-*.jpg` - Feature illustrations
- `og-image.jpg` - Social sharing (1200x630)
- `icons/` - Favicons and PWA icons

## 🌐 Deployment

### Netlify / Vercel

1. Push to GitHub
2. Connect repo to Netlify/Vercel
3. Deploy (no build step needed)

### GitHub Pages

1. Settings → Pages
2. Source: `main` branch, `/` (root)
3. Access: `https://username.github.io/repo-name/ar/`

## 🎨 Design System

### Brand Colors
- Primary Green: `#0A6A56`
- Accent Red: `#A82B11`
- Supports light/dark mode via `prefers-color-scheme`

### Typography
- Display: Playfair Display
- Arabic: Noto Sans Arabic
- English: Inter

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Skip-to-content link
- Keyboard navigation
- ARIA labels and live regions
- 4.5:1 contrast ratios

## 🔍 SEO Features

- Semantic HTML5
- Hreflang tags (ar/en)
- JSON-LD structured data
- Open Graph & Twitter Cards
- Sitemap with language alternates

## 📊 Performance Targets

- Lighthouse Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

## 🔒 Privacy

- PDPL-compliant
- Consent banner
- Privacy policy included
- "Not medical" disclaimers

## 📝 Customization

### Update Colors
Edit CSS variables in `assets/css/base.css`

### Add Pages
1. Create HTML in `/ar/` and `/en/`
2. Update navigation
3. Add to `sitemap.xml`

### Connect Contact Form
Edit `assets/js/validate.js`:
- Replace `FORM_ENDPOINT`
- Uncomment `fetch()` code

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [Schema.org](https://schema.org/)

## 📄 License

© 2025 TeleChic. All rights reserved.

**Disclaimer:** TeleChic is a cosmetic application, not medical.

---

Built with semantic HTML5, modern CSS, and vanilla JavaScript.
