// Analytics tracking for نبض الشبكة

function trackEvent(eventName, properties = {}) {
    // Console log for demo (replace with actual analytics service)
    console.log('Analytics Event:', eventName, properties);

    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, properties);
    }

    // Example: Mixpanel
    if (typeof mixpanel !== 'undefined') {
        mixpanel.track(eventName, properties);
    }
}

function trackPageView(pageName) {
    trackEvent('page_view', { page: pageName });
}

// Track outbound links
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href && !link.href.startsWith(window.location.origin)) {
        trackEvent('outbound_link_click', { url: link.href });
    }
});

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;
    if (scrollPercent > maxScroll) {
        maxScroll = Math.floor(scrollPercent / 25) * 25; // Track in 25% increments
        if ([25, 50, 75, 100].includes(maxScroll)) {
            trackEvent('scroll_depth', { depth: maxScroll });
        }
    }
});

// Export for use in other scripts
window.trackEvent = trackEvent;
window.trackPageView = trackPageView;
