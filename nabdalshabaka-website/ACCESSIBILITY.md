# Accessibility Statement - نبض الشبكة

## Conformance Status
نبض الشبكة website conforms to **WCAG 2.2 Level AA** guidelines.

## Accessibility Features

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Tab order follows logical reading sequence (RTL for Arabic)
- Skip navigation link provided for screen readers
- Focus indicators visible on all interactive elements
- No keyboard traps

### Screen Reader Support
- Semantic HTML5 elements (nav, main, section, footer)
- ARIA labels on icon-only buttons
- Alternative text for all meaningful images
- Form labels properly associated with inputs
- Status messages announced for form submissions

### Visual Design
- Color contrast ratios:
  - Normal text: ≥4.5:1 (meets AA)
  - Large text: ≥3:1 (meets AA)
  - UI components: ≥3:1 (meets AA)
- Text resizable up to 200% without loss of functionality
- No information conveyed by color alone
- Focus indicators have 3:1 contrast against background

### Responsive Design
- Content reflows at 320px viewport width
- No horizontal scrolling required
- Touch targets ≥44x44 pixels on mobile

### Forms
- All form fields have visible labels
- Required fields marked with asterisk and aria-required
- Error messages clearly associated with fields
- Success confirmation messages announced

### Multimedia
- SVG images have title elements for screen readers
- Decorative images marked with aria-hidden="true"

## Known Limitations

1. **Demo Interface**: The interactive dashboard simulation may require mouse interaction for optimal experience. Keyboard-only users can request alternative demo via contact form.

2. **Third-Party Analytics**: If analytics scripts are enabled, they may set cookies. Users can disable via browser settings.

## Testing

Website tested with:
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS, iOS)
- TalkBack (Android)
- Chrome DevTools Lighthouse
- axe DevTools
- WAVE Web Accessibility Evaluation Tool

## Feedback

We welcome accessibility feedback. If you encounter barriers:
- Email: Alshmrani.misfer.a@gmail.com
- Phone: +966 50 594 4436

We aim to respond within 48 hours and resolve issues within 10 business days.

## Standards

This website aims to conform to:
- WCAG 2.2 Level AA
- Saudi Arabia Accessibility Standards (when applicable)
- ISO 40500:2012 (W3C WCAG 2.0)

Last updated: October 30, 2024
