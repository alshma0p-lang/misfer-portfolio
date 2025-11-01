# TeleChic Website - Deployment Guide

This guide provides step-by-step instructions for deploying the TeleChic website to production.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git
- A Vercel account (recommended) or other hosting platform

## Quick Deployment to Vercel (Recommended)

Vercel is the recommended hosting platform as it's built by the creators of Next.js.

### Option 1: GitHub Integration (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TeleChic website"
   git branch -M main
   git remote add origin https://github.com/your-username/telechic-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Add environment variables (see below)
   - Click "Deploy"

3. **Configure Environment Variables:**
   In Vercel dashboard → Settings → Environment Variables, add:
   ```
   RESEND_API_KEY=your_resend_api_key (optional)
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

4. **Set up custom domain (optional):**
   - Go to Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Set environment variables
vercel env add RESEND_API_KEY production
vercel env add NEXT_PUBLIC_APP_URL production
```

## Environment Variables

### Required

- `NEXT_PUBLIC_APP_URL` - Your production URL (e.g., `https://telechic.app`)

### Optional

- `RESEND_API_KEY` - For email functionality in contact form
  - Sign up at [resend.com](https://resend.com)
  - Get API key from dashboard
  - Without this, contact form submissions will be logged but not emailed

## Build Configuration

The project is configured for optimal production builds:

### next.config.js

```javascript
{
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  }
}
```

### Performance Optimizations

- **Image Optimization**: next/image with AVIF/WebP support
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Install `@next/bundle-analyzer` for insights
- **Font Optimization**: Google Fonts loaded via next/font

## Deployment to Other Platforms

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

**Note**: Configure build settings in Netlify dashboard:
- Build command: `npm run build`
- Publish directory: `.next`
- Environment variables: Same as Vercel

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t telechic-website .
docker run -p 3000:3000 -e NEXT_PUBLIC_APP_URL=https://telechic.app telechic-website
```

### AWS Amplify / Azure / Google Cloud

Follow platform-specific Next.js deployment guides. Key settings:

- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Node Version**: 18.x or higher
- **Output Directory**: `.next`

## Post-Deployment Checklist

After deploying, verify the following:

- [ ] Home page loads in both Arabic and English
- [ ] Language toggle works (AR ↔ EN)
- [ ] Dark mode toggle persists across sessions
- [ ] All navigation links work
- [ ] Demo mode runs through all steps
- [ ] Contact form submits (check console if no email integration)
- [ ] Cookie consent banner appears on first visit
- [ ] Footer disclaimer is visible
- [ ] Mobile navigation (hamburger menu) works
- [ ] Run Lighthouse audit:
  - Open DevTools → Lighthouse
  - Generate report
  - Target: ≥90 on all metrics

## Troubleshooting

### Build Errors

**Issue**: `Module not found` errors

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Issue**: next-intl static rendering warnings

**Solution**: These warnings are expected and don't affect functionality. The site will work correctly in production.

### Runtime Issues

**Issue**: Fonts not loading

**Solution**: Verify Google Fonts URLs are accessible. Consider self-hosting fonts for improved performance.

**Issue**: Images not optimizing

**Solution**:
- Check `next.config.js` image settings
- Verify external image domains are whitelisted (if using external images)

**Issue**: Contact form not working

**Solution**:
- Verify `RESEND_API_KEY` environment variable is set (if using email)
- Check browser console for API errors
- Verify API route `/api/contact` is accessible

## Performance Optimization

### Before Production Launch

1. **Run Lighthouse Audit**
   ```bash
   # Install Lighthouse CI
   npm i -g @lhci/cli

   # Run audit
   lhci autorun
   ```

2. **Analyze Bundle Size**
   ```bash
   npm i @next/bundle-analyzer
   ANALYZE=true npm run build
   ```

3. **Enable Vercel Analytics** (if using Vercel)
   ```bash
   npm i @vercel/analytics
   ```

   Add to `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';

   // In body:
   <Analytics />
   ```

## Monitoring & Analytics

### Recommended Tools

- **Vercel Analytics** - Built-in performance monitoring
- **Google Analytics** - User behavior tracking (update consent banner if adding)
- **Sentry** - Error tracking and monitoring
- **LogRocket** - Session replay and debugging

## Security Best Practices

- ✅ Security headers configured in `next.config.js`
- ✅ PDPL-compliant cookie consent
- ✅ No sensitive data in client-side code
- ✅ API routes validate inputs
- ✅ Dependencies regularly updated

### Regular Maintenance

```bash
# Check for outdated dependencies
npm outdated

# Update dependencies
npm update

# Audit for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## Rollback Procedure

### Vercel

1. Go to Deployments in Vercel dashboard
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Manual

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin main
```

## Support

For deployment issues:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Review [Vercel Documentation](https://vercel.com/docs)
- Contact TeleChic development team

---

**Last Updated**: January 2025
**Version**: 1.0.0
