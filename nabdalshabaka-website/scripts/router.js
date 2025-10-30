// Simple router for نبض الشبكة (for future SPA features)

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
    }

    addRoute(path, handler) {
        this.routes[path] = handler;
    }

    navigate(path) {
        if (this.routes[path]) {
            this.currentRoute = path;
            this.routes[path]();
            window.history.pushState({}, '', path);
        } else {
            console.warn(`Route not found: ${path}`);
        }
    }

    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            const path = window.location.pathname;
            if (this.routes[path]) {
                this.routes[path]();
            }
        });

        // Initialize current route
        const currentPath = window.location.pathname;
        if (this.routes[currentPath]) {
            this.routes[currentPath]();
        }
    }
}

// Export router instance
window.appRouter = new Router();

// Example route setup (currently single-page, but ready for expansion)
window.appRouter.addRoute('/', () => {
    console.log('Home route loaded');
});

window.appRouter.addRoute('/demo', () => {
    console.log('Demo route loaded');
    scrollToSection('demo');
});

window.appRouter.addRoute('/pricing', () => {
    console.log('Pricing route loaded');
    scrollToSection('pricing');
});

// Initialize router
document.addEventListener('DOMContentLoaded', () => {
    window.appRouter.init();
});
