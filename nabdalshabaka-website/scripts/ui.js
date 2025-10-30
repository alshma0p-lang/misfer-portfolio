// UI Interactions for نبض الشبكة

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu if open
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

function initScrollEffects() {
    // Add scroll-based navbar background
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
        }
    });
}

function initFormValidation() {
    const form = document.getElementById('pilotRequestForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Log form data (in production, send to backend)
    console.log('Form submitted:', data);

    // Show success message
    const successMsg = document.getElementById('formSuccess');
    if (successMsg) {
        successMsg.style.display = 'block';
        event.target.style.display = 'none';

        // Track analytics
        trackEvent('pilot_request_submitted', {
            organization: data.organization,
            network_size: data.networkSize
        });
    }
}

function showDemoRequest() {
    scrollToSection('contact');
    setTimeout(() => {
        document.getElementById('name').focus();
    }, 500);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Expose functions globally
window.showDemoRequest = showDemoRequest;
window.scrollToSection = scrollToSection;
window.handleFormSubmit = handleFormSubmit;
