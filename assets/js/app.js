/* /assets/js/app.js */
/* Main application JavaScript - handles navigation, consent banner, accordions */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initMobileMenu();
    initConsentBanner();
    initAccordions();
  }

  /* ============================================
     MOBILE MENU TOGGLE
     ============================================ */
  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const primaryNav = document.querySelector('.primary-nav');

    if (!menuToggle || !primaryNav) return;

    menuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;

      this.setAttribute('aria-expanded', newState);
      primaryNav.setAttribute('data-visible', newState);

      // Update button label
      const label = newState ? 'إغلاق القائمة' : 'فتح القائمة';
      this.setAttribute('aria-label', label);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuToggle.contains(e.target) && !primaryNav.contains(e.target)) {
        menuToggle.setAttribute('aria-expanded', 'false');
        primaryNav.setAttribute('data-visible', 'false');
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        menuToggle.setAttribute('aria-expanded', 'false');
        primaryNav.setAttribute('data-visible', 'false');
        menuToggle.focus();
      }
    });
  }

  /* ============================================
     CONSENT BANNER
     ============================================ */
  function initConsentBanner() {
    const consentBanner = document.querySelector('.consent-banner');
    if (!consentBanner) return;

    const acceptBtn = document.getElementById('consent-accept');
    const declineBtn = document.getElementById('consent-decline');

    // Check if user has already responded
    const consentStatus = localStorage.getItem('telechic-consent');

    if (consentStatus) {
      consentBanner.setAttribute('data-visible', 'false');
      return;
    }

    // Show banner after a short delay
    setTimeout(function() {
      consentBanner.setAttribute('data-visible', 'true');
    }, 1000);

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function() {
        localStorage.setItem('telechic-consent', 'accepted');
        hideBanner();
      });
    }

    if (declineBtn) {
      declineBtn.addEventListener('click', function() {
        localStorage.setItem('telechic-consent', 'declined');
        hideBanner();
      });
    }

    function hideBanner() {
      consentBanner.setAttribute('data-visible', 'false');
      setTimeout(function() {
        consentBanner.style.display = 'none';
      }, 300);
    }
  }

  /* ============================================
     ACCORDION / FAQ
     ============================================ */
  function initAccordions() {
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    accordionTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        const panel = document.getElementById(this.getAttribute('aria-controls'));

        if (!panel) return;

        // Close all other accordions (optional - remove for multi-open)
        accordionTriggers.forEach(function(otherTrigger) {
          if (otherTrigger !== trigger) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            const otherPanel = document.getElementById(otherTrigger.getAttribute('aria-controls'));
            if (otherPanel) {
              otherPanel.setAttribute('data-visible', 'false');
            }
          }
        });

        // Toggle current accordion
        this.setAttribute('aria-expanded', !isExpanded);
        panel.setAttribute('data-visible', !isExpanded);
      });
    });
  }

  /* ============================================
     SMOOTH SCROLL FOR ANCHOR LINKS
     ============================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#" or empty
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update focus for accessibility
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ============================================
     LAZY LOADING POLYFILL (for older browsers)
     ============================================ */
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
  } else {
    // Fallback for older browsers
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(function(img) {
        imageObserver.observe(img);
      });
    } else {
      // Very old browsers - just load all images
      images.forEach(function(img) {
        img.src = img.dataset.src || img.src;
      });
    }
  }

})();
